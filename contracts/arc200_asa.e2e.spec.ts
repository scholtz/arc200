import { AlgorandClient, Config } from '@algorandfoundation/algokit-utils'
import { registerDebugEventHandlers } from '@algorandfoundation/algokit-utils-debug'
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing'
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount'
import algosdk from 'algosdk'
import { beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { getArc200ASAClient } from '../src'
import { Arc200AsaFactory } from './artifacts/Arc200_ASAClient'

describe('ARC200 ASA contract', () => {
  const localnet = algorandFixture()
  beforeAll(() => {
    Config.configure({
      debug: true,
      // traceAll: true,
    })
    registerDebugEventHandlers()
  })
  beforeEach(localnet.newScope)

  const deploy = async (account: algosdk.Address) => {
    const factory = localnet.algorand.client.getTypedAppFactory(Arc200AsaFactory, {
      defaultSender: account,
    })

    const { appClient } = await factory.deploy({
      onUpdate: 'append',
      onSchemaBreak: 'append',
    })
    await localnet.algorand.account.ensureFunded(appClient.appAddress, account, AlgoAmount.Algo(1))

    await appClient.send.bootstrap({
      args: {
        decimals: 6,
        name: new Uint8Array(Buffer.from('Test', 'ascii')),
        symbol: new Uint8Array(Buffer.from('T', 'ascii')),
        totalSupply: 1_000_000_000_000n,
        asset: {
          metadataHash: new Uint8Array(32),
          url: new Uint8Array(Buffer.from('https://example.com/token.json', 'ascii')),
        },
      },
      // bootstrap submits an inner assetConfig transaction with fee: 0, so the outer call's
      // fee must be bumped to cover it via fee pooling.
      extraFee: AlgoAmount.MicroAlgo(1_000),
    })
    const exchange = await appClient.arc200Exchange({ args: {} })
    return { client: appClient, exchangeAsset: exchange.exchangeAsset }
  }

  test('withdraw + deposit round-trip preserves ARC200/ASA invariants', async () => {
    const { testAccount } = localnet.context
    const { client, exchangeAsset } = await deploy(testAccount.addr)

    // Opt the creator into the newly-minted ASA before it can hold any units of it.
    await localnet.algorand.send.assetTransfer({
      sender: testAccount.addr,
      receiver: testAccount.addr,
      assetId: exchangeAsset,
      amount: 0n,
    })

    const arc200BalanceBefore = await client.arc200BalanceOf({ args: { owner: algosdk.encodeAddress(testAccount.addr.publicKey) } })

    // Unwrap 1000 ARC200 into 1000 units of the wrapped ASA.
    const withdrawRet = await client.send.withdraw({ args: { amount: 1000n }, extraFee: AlgoAmount.MicroAlgo(1_000) })
    expect(withdrawRet.return).toBe(1000n)

    const asaBalance = await localnet.algorand.asset.getAccountInformation(testAccount.addr, exchangeAsset)
    expect(asaBalance.balance).toBe(1000n)

    const arc200BalanceAfterWithdraw = await client.arc200BalanceOf({
      args: { owner: algosdk.encodeAddress(testAccount.addr.publicKey) },
    })
    expect(arc200BalanceAfterWithdraw).toBe(arc200BalanceBefore - 1000n)

    // Wrap the ASA back into ARC200 via deposit (grouped: ASA transfer immediately before the call).
    const assetTransferTxn = await localnet.algorand.createTransaction.assetTransfer({
      sender: testAccount.addr,
      receiver: client.appAddress,
      assetId: exchangeAsset,
      amount: 1000n,
    })
    const depositResult = await client.newGroup().addTransaction(assetTransferTxn).deposit({ args: { amount: 1000n } }).send()
    expect(depositResult.returns[0]).toBe(1000n)

    const arc200BalanceAfterDeposit = await client.arc200BalanceOf({
      args: { owner: algosdk.encodeAddress(testAccount.addr.publicKey) },
    })
    expect(arc200BalanceAfterDeposit).toBe(arc200BalanceBefore)
  })

  test('deposit reverts when the requested amount exceeds the amount actually transferred', async () => {
    const { testAccount } = localnet.context
    const { client, exchangeAsset } = await deploy(testAccount.addr)

    await localnet.algorand.send.assetTransfer({
      sender: testAccount.addr,
      receiver: testAccount.addr,
      assetId: exchangeAsset,
      amount: 0n,
    })
    await client.send.withdraw({ args: { amount: 1000n }, extraFee: AlgoAmount.MicroAlgo(1_000) })

    const assetTransferTxn = await localnet.algorand.createTransaction.assetTransfer({
      sender: testAccount.addr,
      receiver: client.appAddress,
      assetId: exchangeAsset,
      amount: 100n,
    })

    await expect(
      client.newGroup().addTransaction(assetTransferTxn).deposit({ args: { amount: 101n } }).send(),
    ).rejects.toThrow(/amount transferred MUST be equal to or greater than the amount requested/)
  })

  test('deposit reverts when the preceding transaction is not an ASA transfer', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount.addr)

    const paymentTxn = await localnet.algorand.createTransaction.payment({
      sender: testAccount.addr,
      receiver: client.appAddress,
      amount: AlgoAmount.MicroAlgo(1_000),
    })

    await expect(
      client.newGroup().addTransaction(paymentTxn).deposit({ args: { amount: 100n } }).send(),
    ).rejects.toThrow(/Previous txn must be ASA transfer/)
  })

  test('createBalanceBox requires a grouped payment covering the box MBR (H-1 fix)', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount.addr)
    const freshAccount = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })

    await expect(client.send.createBalanceBox({ args: { owner: algosdk.encodeAddress(freshAccount.addr.publicKey) } })).rejects.toThrow(
      /Must be preceded by a payment/,
    )

    const paymentTxn = await localnet.algorand.createTransaction.payment({
      sender: testAccount.addr,
      receiver: client.appAddress,
      amount: AlgoAmount.MicroAlgo(28_500),
    })
    const result = await client
      .newGroup()
      .addTransaction(paymentTxn)
      .createBalanceBox({ args: { owner: algosdk.encodeAddress(freshAccount.addr.publicKey) } })
      .send()
    expect(result.returns[0]).toBe(1)

    // Box already exists now; no payment required, and the byte flag flips to 0.
    const secondCall = await client.send.createBalanceBox({ args: { owner: algosdk.encodeAddress(freshAccount.addr.publicKey) } })
    expect(secondCall.return).toBe(0)
  })

  test('arc200_approve rejects a zero-value approval that would create a new approval box (H-1 fix)', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount.addr)
    const freshSpender = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })

    await expect(
      client.send.arc200Approve({
        args: {
          spender: algosdk.encodeAddress(freshSpender.addr.publicKey),
          value: 0n,
        },
      }),
    ).rejects.toThrow(/zero-value approval/)
  })

  test('arc200_transferFrom of zero value succeeds as a no-op for a spender with no prior approval history (L-1 fix)', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount.addr)
    const strangerSpender = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })

    // Self-transfer (from === to) so the recipient-balance-box guard doesn't confound this
    // test with an unrelated assertion; this isolates the L-1 fix (internal re-approve skipped
    // for a zero-value call, so a stranger spender with no approval box doesn't hit the
    // zero-value-approval guard either).
    const ret = await client.send.arc200TransferFrom({
      args: {
        from: algosdk.encodeAddress(testAccount.addr.publicKey),
        to: algosdk.encodeAddress(testAccount.addr.publicKey),
        value: 0n,
      },
      sender: strangerSpender.addr,
    })
    expect(ret.return).toBe(true)
  })

  // test('decode name of 40153415 cbBTC', async () => {
  //   const algod = new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', '')
  //   const indexer = new algosdk.Indexer('', 'https://mainnet-idx.voi.nodely.dev', '')
  //   var algoClient = AlgorandClient.fromClients({
  //     algod,
  //     indexer: indexer,
  //   })
  //   const dummyAddress = 'TESTNTTTJDHIF5PJZUBTTDYYSKLCLM6KXCTWIOOTZJX5HO7263DPPMM2SU'
  //   const dummyTransactionSigner = async (
  //     txnGroup: algosdk.Transaction[],
  //     indexesToSign: number[],
  //   ): Promise<Uint8Array[]> => {
  //     console.log('transactionSigner', txnGroup, indexesToSign)
  //     return [] as Uint8Array[]
  //   }
  //   const client = getArc200ASAClient({
  //     algorand: algoClient,
  //     appId: 40153415n,
  //     defaultSender: dummyAddress,
  //     defaultSigner: dummyTransactionSigner,
  //     appName: 'arc200',
  //     approvalSourceMap: undefined,
  //     clearSourceMap: undefined,
  //   })

  //   const name = await client.arc200Name()
  //   const decodedName = Buffer.from(name).toString('ascii').replace(/\0/g, '')
  //   expect(decodedName).toBe('Aramid cbBTC')

  //   const exchangeInfo = await client.arc200Exchange()
  //   expect(exchangeInfo.exchangeAsset).toBe(40152648n)
  //   expect(exchangeInfo.sink).toBe(algosdk.getApplicationAddress(40153415n))
  // })
  test('decode name of 420069 UNIT', async () => {
    const algod = new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', '')
    const indexer = new algosdk.Indexer('', 'https://mainnet-idx.voi.nodely.dev', '')
    var algoClient = AlgorandClient.fromClients({
      algod,
      indexer: indexer,
    })
    const dummyAddress = 'TESTNTTTJDHIF5PJZUBTTDYYSKLCLM6KXCTWIOOTZJX5HO7263DPPMM2SU'
    const dummyTransactionSigner = async (
      txnGroup: algosdk.Transaction[],
      indexesToSign: number[],
    ): Promise<Uint8Array[]> => {
      console.log('transactionSigner', txnGroup, indexesToSign)
      return [] as Uint8Array[]
    }
    const client = getArc200ASAClient({
      algorand: algoClient,
      appId: 420069n,
      defaultSender: dummyAddress,
      defaultSigner: dummyTransactionSigner,
      appName: 'arc200',
      approvalSourceMap: undefined,
      clearSourceMap: undefined,
    })

    const name = await client.arc200Name()
    const decodedName = Buffer.from(name).toString('ascii').replace(/\0/g, '')
    expect(decodedName).toBe('UNIT')

    const exchangeInfo = await client.arc200Exchange()
    expect(exchangeInfo.exchangeAsset).toBe(40266690n)
    expect(exchangeInfo.sink).toBe('ABFYP2CMESEQLNEN4VOWYERPCZ3EFUENWSIDIZPAIOFXXU4KZZXTTRJGIQ')
  })
  test('decode name of 412682 CORN', async () => {
    const algod = new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', '')
    const indexer = new algosdk.Indexer('', 'https://mainnet-idx.voi.nodely.dev', '')
    var algoClient = AlgorandClient.fromClients({
      algod,
      indexer: indexer,
    })
    const dummyAddress = 'TESTNTTTJDHIF5PJZUBTTDYYSKLCLM6KXCTWIOOTZJX5HO7263DPPMM2SU'
    const dummyTransactionSigner = async (
      txnGroup: algosdk.Transaction[],
      indexesToSign: number[],
    ): Promise<Uint8Array[]> => {
      console.log('transactionSigner', txnGroup, indexesToSign)
      return [] as Uint8Array[]
    }
    const client = getArc200ASAClient({
      algorand: algoClient,
      appId: 412682n,
      defaultSender: dummyAddress,
      defaultSigner: dummyTransactionSigner,
      appName: 'arc200',
      approvalSourceMap: undefined,
      clearSourceMap: undefined,
    })

    const name = await client.arc200Name()
    const decodedName = Buffer.from(name).toString('ascii').replace(/\0/g, '')
    expect(decodedName).toBe('Corn coin')

    const exchangeInfo = await client.arc200Exchange()
    expect(exchangeInfo.exchangeAsset).toBe(40266686n)
    expect(exchangeInfo.sink).toBe('FH4FIEAPKHWNZKCREMEL6HTIVSFS32KV7RZ4WVC5I3FUZOT346UVMARDA4')
  })
})
