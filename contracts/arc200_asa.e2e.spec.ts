import { AlgorandClient, Config } from '@algorandfoundation/algokit-utils'
import { registerDebugEventHandlers } from '@algorandfoundation/algokit-utils-debug'
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing'
import algosdk from 'algosdk'
import { beforeAll, beforeEach, describe, expect, test } from 'vitest'
import { getArc200ASAClient } from '../src'

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
