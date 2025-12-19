import { Config } from '@algorandfoundation/algokit-utils'
import { registerDebugEventHandlers } from '@algorandfoundation/algokit-utils-debug'
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing'
import algosdk, { Address } from 'algosdk'
import { beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { Arc200Factory } from './artifacts/Arc200Client'
import { AlgoAmount } from '@algorandfoundation/algokit-utils/types/amount'

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
})
