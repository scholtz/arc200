# ARC200Client

This is ARC 200 client generated from tealscript using algokit.

```
import {getArc200Client} from "arc200-client"

const client = getArc200Client({
  algod,
  appId: BigInt(6779767),
  sender: { addr: this.payFrom },
});
const compose = client
  .compose()
  .arc200Transfer({ to: this.payTo, value: BigInt(this.amountLong) });
const atc = await compose.atc();
const txsToSign = atc.buildGroup().map((tx) => tx.txn);

...

```

## Source code

https://github.com/scholtz/arc200
