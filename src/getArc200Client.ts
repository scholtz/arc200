import { Algodv2 } from 'algosdk';
import { SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction';
import { Arc200Client } from '../contracts/clients/Arc200Client';

interface IGetClientInput {
  appId: number | bigint;
  sender: SendTransactionFrom | undefined;
  algod: Algodv2;
}

const getArc200Client = (input: IGetClientInput) => {
  return new Arc200Client(
    {
      sender: input.sender,
      resolveBy: 'id',
      id: input.appId,
    },
    input.algod
  );
};
export default getArc200Client;
