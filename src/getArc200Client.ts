import { Address, Algodv2, ProgramSourceMap, TransactionSigner } from 'algosdk';
import { SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction';
import { Arc200Client } from '../contracts/artifacts/Arc200Client';
import { AppClient } from '@algorandfoundation/algokit-utils/types/app-client';
import { AlgorandClient } from '@algorandfoundation/algokit-utils';

interface IGetClientInput {
  algorand: AlgorandClient;
  appId: bigint;
  appName: string | undefined;
  approvalSourceMap: ProgramSourceMap | undefined;
  clearSourceMap: ProgramSourceMap | undefined;
  defaultSender: string | Address | undefined;
  defaultSigner: TransactionSigner | undefined;
}

export const getArc200Client = (input: IGetClientInput) => {
  return new Arc200Client({
    algorand: input.algorand,
    appId: input.appId,
    appName: input.appName,
    approvalSourceMap: input.approvalSourceMap,
    clearSourceMap: input.clearSourceMap,
    defaultSender: input.defaultSender,
    defaultSigner: input.defaultSigner,
  });
};
