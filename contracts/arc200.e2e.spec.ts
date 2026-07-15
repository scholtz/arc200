import { AlgorandClient, Config } from '@algorandfoundation/algokit-utils'
import { registerDebugEventHandlers } from '@algorandfoundation/algokit-utils-debug'
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing'
import algosdk, { Address } from 'algosdk'
import { beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { Arc200Factory } from './artifacts/Arc200Client'
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount'
import { getArc200Client } from '../src/getArc200Client'

describe('ARC200 contract', () => {
  const localnet = algorandFixture()
  beforeAll(() => {
    Config.configure({
      debug: true,
      // traceAll: true,
    })
    registerDebugEventHandlers()
  })
  beforeEach(localnet.newScope)

  const deploy = async (account: Address) => {
    const factory = localnet.algorand.client.getTypedAppFactory(Arc200Factory, {
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
        totalSupply: 1_000_000_000_000_000,
      },
    })
    return { client: appClient }
  }

  test('bootstrap deposit works', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)

    const balance = await client.arc200BalanceOf({
      args: {
        owner: algosdk.encodeAddress(testAccount.addr.publicKey),
      },
    })
    expect(balance).toBe(1000000000000000n)
  })
  test('bootstrap deposit works', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    const testAccount2 = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })
    const ret = await client.send.arc200Transfer({
      args: {
        to: algosdk.encodeAddress(testAccount2.addr.publicKey),
        value: 1000000n,
      },
    })
    expect(ret.return).toBe(true)
    const balance = await client.arc200BalanceOf({
      args: {
        owner: algosdk.encodeAddress(testAccount2.addr.publicKey),
      },
    })
    expect(balance).toBe(1000000n)
  })

  test('arc200_transfer reverts on insufficient balance', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    const testAccount2 = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })
    await expect(
      client.send.arc200Transfer({
        args: {
          // testAccount2 has never received any tokens
          to: algosdk.encodeAddress(testAccount.addr.publicKey),
          value: 1n,
        },
        sender: testAccount2.addr,
      }),
    ).rejects.toThrow(/Insufficient balance/)
  })

  test('arc200_transfer rejects a zero-value transfer that would create a new balance box (H-1 fix)', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    const freshAccount = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })
    await expect(
      client.send.arc200Transfer({
        args: {
          to: algosdk.encodeAddress(freshAccount.addr.publicKey),
          value: 0n,
        },
      }),
    ).rejects.toThrow(/zero-value transfer/)
  })

  test('arc200_transfer rejects transfers to the zero address', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    await expect(
      client.send.arc200Transfer({
        args: {
          to: algosdk.encodeAddress(new Uint8Array(32)),
          value: 1n,
        },
      }),
    ).rejects.toThrow(/zero address/)
  })

  test('arc200_approve + arc200_allowance + arc200_transferFrom happy path', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    const spender = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })
    const recipient = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })

    await client.send.arc200Approve({
      args: {
        spender: algosdk.encodeAddress(spender.addr.publicKey),
        value: 1000n,
      },
    })
    const allowance = await client.arc200Allowance({
      args: {
        owner: algosdk.encodeAddress(testAccount.addr.publicKey),
        spender: algosdk.encodeAddress(spender.addr.publicKey),
      },
    })
    expect(allowance).toBe(1000n)

    const ret = await client.send.arc200TransferFrom({
      args: {
        from: algosdk.encodeAddress(testAccount.addr.publicKey),
        to: algosdk.encodeAddress(recipient.addr.publicKey),
        value: 400n,
      },
      sender: spender.addr,
    })
    expect(ret.return).toBe(true)

    const remainingAllowance = await client.arc200Allowance({
      args: {
        owner: algosdk.encodeAddress(testAccount.addr.publicKey),
        spender: algosdk.encodeAddress(spender.addr.publicKey),
      },
    })
    expect(remainingAllowance).toBe(600n)

    const recipientBalance = await client.arc200BalanceOf({
      args: { owner: algosdk.encodeAddress(recipient.addr.publicKey) },
    })
    expect(recipientBalance).toBe(400n)
  })

  test('arc200_transferFrom reverts when spending more than approved', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    const spender = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })

    await client.send.arc200Approve({
      args: {
        spender: algosdk.encodeAddress(spender.addr.publicKey),
        value: 100n,
      },
    })

    await expect(
      client.send.arc200TransferFrom({
        args: {
          from: algosdk.encodeAddress(testAccount.addr.publicKey),
          to: algosdk.encodeAddress(spender.addr.publicKey),
          value: 101n,
        },
        sender: spender.addr,
      }),
    ).rejects.toThrow(/insufficient approval/)
  })

  test('arc200_approve rejects a zero-value approval that would create a new approval box (H-1 fix)', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
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

  test('arc200_increaseAllowance / arc200_decreaseAllowance avoid the approve() race (L-2 fix)', async () => {
    const { testAccount } = localnet.context
    const { client } = await deploy(testAccount)
    const spender = await localnet.context.generateAccount({ initialFunds: AlgoAmount.Algo(10000) })

    await client.send.arc200Approve({
      args: { spender: algosdk.encodeAddress(spender.addr.publicKey), value: 100n },
    })
    await client.send.arc200IncreaseAllowance({
      args: { spender: algosdk.encodeAddress(spender.addr.publicKey), value: 50n },
    })
    let allowance = await client.arc200Allowance({
      args: { owner: algosdk.encodeAddress(testAccount.addr.publicKey), spender: algosdk.encodeAddress(spender.addr.publicKey) },
    })
    expect(allowance).toBe(150n)

    await client.send.arc200DecreaseAllowance({
      args: { spender: algosdk.encodeAddress(spender.addr.publicKey), value: 60n },
    })
    allowance = await client.arc200Allowance({
      args: { owner: algosdk.encodeAddress(testAccount.addr.publicKey), spender: algosdk.encodeAddress(spender.addr.publicKey) },
    })
    expect(allowance).toBe(90n)

    await expect(
      client.send.arc200DecreaseAllowance({
        args: { spender: algosdk.encodeAddress(spender.addr.publicKey), value: 1000n },
      }),
    ).rejects.toThrow(/Decrease exceeds current allowance/)
  })
  test('decode name of UNIT', async () => {
    const algod = new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', '')
    const indexer = new algosdk.Indexer('', 'https://mainnet-idx.voi.nodely.dev', '')
    var algoClient = AlgorandClient.fromClients({
      algod,
      indexer: indexer,
    });
    const dummyAddress =
      "TESTNTTTJDHIF5PJZUBTTDYYSKLCLM6KXCTWIOOTZJX5HO7263DPPMM2SU";
    const dummyTransactionSigner = async (
      txnGroup: algosdk.Transaction[],
      indexesToSign: number[]
    ): Promise<Uint8Array[]> => {
      console.log("transactionSigner", txnGroup, indexesToSign);
      return [] as Uint8Array[];
    };
    const client = getArc200Client({
      algorand: algoClient,
      appId: 420069n,
      defaultSender: dummyAddress,
      defaultSigner: dummyTransactionSigner,
      appName: "arc200",
      approvalSourceMap: undefined,
      clearSourceMap: undefined,
    });

    const name = await client.arc200Name();
    const decodedName = Buffer.from(name).toString('ascii').replace(/\0/g, '');
    expect(decodedName).toBe("UNIT");

  })
  test('decode name of WAD', async () => {
    const algod = new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', '')
    const indexer = new algosdk.Indexer('', 'https://mainnet-idx.voi.nodely.dev', '')
    var algoClient = AlgorandClient.fromClients({
      algod,
      indexer: indexer,
    });
    const dummyAddress =
      "TESTNTTTJDHIF5PJZUBTTDYYSKLCLM6KXCTWIOOTZJX5HO7263DPPMM2SU";
    const dummyTransactionSigner = async (
      txnGroup: algosdk.Transaction[],
      indexesToSign: number[]
    ): Promise<Uint8Array[]> => {
      console.log("transactionSigner", txnGroup, indexesToSign);
      return [] as Uint8Array[];
    };
    const client = getArc200Client({
      algorand: algoClient,
      appId: 47138068n,
      defaultSender: dummyAddress,
      defaultSigner: dummyTransactionSigner,
      appName: "arc200",
      approvalSourceMap: undefined,
      clearSourceMap: undefined,
    });

    const name = await client.arc200Name();
    const decodedName = Buffer.from(name).toString('ascii').replace(/\0/g, '');
    expect(decodedName).toBe("Whale Asset Dollar");

  })
})
