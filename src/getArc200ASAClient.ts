import { Address, ProgramSourceMap, TransactionSigner } from 'algosdk'
import { Arc200AsaClient } from '../contracts/artifacts/Arc200_ASAClient'
import { AlgorandClient } from '@algorandfoundation/algokit-utils'

interface IGetClientInput {
  algorand: AlgorandClient
  appId: bigint
  appName: string | undefined
  approvalSourceMap: ProgramSourceMap | undefined
  clearSourceMap: ProgramSourceMap | undefined
  defaultSender: string | Address | undefined
  defaultSigner: TransactionSigner | undefined
}

export const getArc200ASAClient = (input: IGetClientInput) => {
  return new Arc200AsaClient({
    algorand: input.algorand,
    appId: input.appId,
    appName: input.appName,
    approvalSourceMap: input.approvalSourceMap,
    clearSourceMap: input.clearSourceMap,
    defaultSender: input.defaultSender,
    defaultSigner: input.defaultSigner,
  })
}
