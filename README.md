# ARC200Client

This is ARC 200 client generated from tealscript using algokit.

```
import {getArc200Client} from "arc200-client"

const client = getArc200Client({
  appId: 6779767;
  sender: undefined;
  algod: Algodv2
})


const compose = client.compose().arc200_transfer(
  { to: .. , value: .. },
  {
    sendParams: {
      fee: algokit.microAlgos(1000)
    }
  }
)
const atc = await compose.atc()
const txsToSign = atc.buildGroup().map((tx) => tx.txn)

...

```
