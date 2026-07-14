# arc200-client

TypeScript/JavaScript client for **ARC200**, a fungible token standard for Algorand and Voi, built on top of [`@algorandfoundation/algokit-utils`](https://github.com/algorandfoundation/algokit-utils-ts) and [`algosdk`](https://github.com/algorand/js-algorand-sdk).

The package ships two generated AlgoKit clients:

- **`Arc200Client`** — plain ARC200 token (name, symbol, decimals, total supply, transfer, approve/allowance).
- **`Arc200AsaClient`** — ARC200 token wrapped around a native Algorand Standard Asset (ASA), adding `deposit`/`withdraw` (a.k.a. `arc200_redeem`/`arc200_swapBack`) so the ARC200 token can be minted 1:1 by locking the underlying ASA, and redeemed back to the ASA at any time.

Both clients are fully typed (including method args/return types and emitted events) and are generated straight from the Puya smart contracts in [`contracts/arc200.algo.ts`](contracts/arc200.algo.ts) and [`contracts/arc200_asa.algo.ts`](contracts/arc200_asa.algo.ts).

## Install

```bash
npm install arc200-client algosdk @algorandfoundation/algokit-utils
```

```bash
pnpm add arc200-client algosdk @algorandfoundation/algokit-utils
```

## Quickstart: read-only queries

Point a client at an existing app ID to read token metadata — no signer required for read-only ABI calls.

```ts
import algosdk from 'algosdk'
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { getArc200Client } from 'arc200-client'

const algod = new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', '')
const indexer = new algosdk.Indexer('', 'https://mainnet-idx.voi.nodely.dev', '')
const algorand = AlgorandClient.fromClients({ algod, indexer })

const client = getArc200Client({
  algorand,
  appId: 420069n,
  appName: 'arc200',
  defaultSender: undefined,
  defaultSigner: undefined,
  approvalSourceMap: undefined,
  clearSourceMap: undefined,
})

const nameBytes = await client.arc200Name()
const name = Buffer.from(nameBytes).toString('ascii').replace(/\0/g, '')

const symbolBytes = await client.arc200Symbol()
const symbol = Buffer.from(symbolBytes).toString('ascii').replace(/\0/g, '')

const decimals = await client.arc200Decimals()
const totalSupply = await client.arc200TotalSupply()

console.log({ name, symbol, decimals, totalSupply })
// -> { name: 'UNIT', symbol: 'UNIT', decimals: 6n, totalSupply: ... }
```

### Reading a balance

```ts
const owner = 'ABFYP2CMESEQLNEN4VOWYERPCZ3EFUENWSIDIZPAIOFXXU4KZZXTTRJGIQ'

const balance = await client.arc200BalanceOf({
  args: { owner },
})
console.log(balance) // bigint, in base units
```

### Reading an allowance

```ts
const allowance = await client.arc200Allowance({
  args: { owner, spender: 'SPENDERADDRESS...' },
})
```

## Sending transactions

For write calls you need a `defaultSender` and `defaultSigner` (or pass `sender`/`signer` per call). This example uses a `TransactionSigner` from a mnemonic-derived account, but any `algosdk.TransactionSigner` (KMD, wallet, `algokit-utils` `getAccount`, etc.) works.

```ts
import algosdk from 'algosdk'
import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { getArc200Client } from 'arc200-client'

const account = algosdk.mnemonicToSecretKey(process.env.MNEMONIC!)
const signer = algosdk.makeBasicAccountTransactionSigner(account)

const algorand = AlgorandClient.fromClients({
  algod: new algosdk.Algodv2('', 'https://mainnet-api.voi.nodely.dev', ''),
})

const client = getArc200Client({
  algorand,
  appId: 420069n,
  appName: 'arc200',
  defaultSender: account.addr,
  defaultSigner: signer,
  approvalSourceMap: undefined,
  clearSourceMap: undefined,
})
```

### Transfer tokens

```ts
const result = await client.send.arc200Transfer({
  args: {
    to: 'RECEIVERADDRESS...',
    value: 1_000_000n, // base units, respecting arc200Decimals()
  },
})
console.log(result.return) // true on success
```

### Approve a spender and transfer on their behalf

```ts
// Owner approves a spender to move up to `value` tokens
await client.send.arc200Approve({
  args: {
    spender: 'SPENDERADDRESS...',
    value: 500_000n,
  },
})

// Spender moves tokens from owner to a third party (spender must be the sender of this call)
const spenderClient = getArc200Client({
  algorand,
  appId: 420069n,
  appName: 'arc200',
  defaultSender: spenderAccount.addr,
  defaultSigner: algosdk.makeBasicAccountTransactionSigner(spenderAccount),
  approvalSourceMap: undefined,
  clearSourceMap: undefined,
})

await spenderClient.send.arc200TransferFrom({
  args: {
    from: 'OWNERADDRESS...',
    to: 'THIRDPARTYADDRESS...',
    value: 250_000n,
  },
})
```

### Deploying and bootstrapping a new ARC200 token

`bootstrap` mints the initial supply to the creator and can only be called once, right after the app is created.

```ts
import { Arc200Factory } from 'arc200-client'

const factory = algorand.client.getTypedAppFactory(Arc200Factory, {
  defaultSender: account.addr,
  defaultSigner: signer,
})

const { appClient } = await factory.deploy({
  onUpdate: 'append',
  onSchemaBreak: 'append',
})

// The app account needs to be funded to cover box storage for balances/allowances
await algorand.account.ensureFunded(appClient.appAddress, account.addr, algokit.AlgoAmount.Algo(1))

await appClient.send.bootstrap({
  args: {
    name: new Uint8Array(Buffer.from('My Token', 'ascii')),
    symbol: new Uint8Array(Buffer.from('MTK', 'ascii')),
    decimals: 6,
    totalSupply: 1_000_000_000_000n,
  },
})
```

## Composing atomic transaction groups

Every generated method is also available through a fluent composer, so you can build a single atomic group of several ARC200 calls (and mix in raw payments/other app calls via `algorand.newGroup()`).

```ts
const compose = client
  .compose()
  .arc200Transfer({ args: { to: 'RECEIVER_1...', value: 1_000_000n } })
  .arc200Transfer({ args: { to: 'RECEIVER_2...', value: 2_000_000n } })

const result = await compose.send()
console.log(result.returns) // [true, true]
```

You can also just get the transactions to sign yourself:

```ts
const atc = await client
  .compose()
  .arc200Transfer({ args: { to: 'RECEIVER...', value: 1_000_000n } })
  .atc()

const txsToSign = atc.buildGroup().map((tx) => tx.txn)
```

## ARC200-over-ASA: `Arc200AsaClient`

`Arc200AsaClient` behaves like `Arc200Client` for every standard ARC200 method (`arc200Name`, `arc200Transfer`, `arc200Approve`, ...), plus an exchange mechanism that lets holders wrap/unwrap a native ASA 1:1 into the ARC200 token.

### Reading exchange configuration

```ts
import { getArc200ASAClient } from 'arc200-client'

const asaClient = getArc200ASAClient({
  algorand,
  appId: 412682n,
  appName: 'arc200',
  defaultSender: undefined,
  defaultSigner: undefined,
  approvalSourceMap: undefined,
  clearSourceMap: undefined,
})

const { exchangeAsset, sink } = await asaClient.arc200Exchange()
console.log(exchangeAsset) // ASA id that backs this ARC200 token
console.log(sink) // address holding the ARC200 tokens available for redemption
```

### Deploying an ARC200-over-ASA token

```ts
import { Arc200AsaFactory } from 'arc200-client'

const factory = algorand.client.getTypedAppFactory(Arc200AsaFactory, {
  defaultSender: account.addr,
  defaultSigner: signer,
})

const { appClient } = await factory.deploy({
  onUpdate: 'append',
  onSchemaBreak: 'append',
})

await algorand.account.ensureFunded(appClient.appAddress, account.addr, algokit.AlgoAmount.Algo(1))

await appClient.send.bootstrap({
  args: {
    name: new Uint8Array(Buffer.from('Wrapped Coin', 'ascii')),
    symbol: new Uint8Array(Buffer.from('wCOIN', 'ascii')),
    decimals: 6,
    totalSupply: 0n, // supply is minted on deposit, not at bootstrap
    asset: {
      metadataHash: new Uint8Array(32),
      url: new Uint8Array(Buffer.from('https://example.com/token.json', 'ascii')),
    },
  },
})
```

### Wrapping ASA into ARC200 (`deposit`)

`deposit` requires the ASA transfer to be the immediately preceding transaction in the same atomic group.

```ts
const assetTransferTxn = await algorand.createTransaction.assetTransfer({
  sender: account.addr,
  receiver: asaClient.appAddress,
  assetId: exchangeAsset,
  amount: 1_000_000n,
})

const result = await asaClient
  .newGroup()
  .addTransaction(assetTransferTxn)
  .deposit({ args: { amount: 1_000_000n } })
  .send()

console.log(result.returns[0]) // 1000000n of ARC200 tokens minted to the sender
```

### Unwrapping ARC200 back into ASA (`withdraw`)

```ts
await asaClient.send.withdraw({
  args: { amount: 500_000n },
  sender: account.addr,
  signer,
})
// the ASA is transferred back to the sender, ARC200 tokens are burned
```

> `arc200Redeem` / `arc200SwapBack` are lower-level equivalents of `deposit` / `withdraw` (same semantics, `void` return instead of the minted/burned amount).

## Using the local dev network (e.g. in tests)

```ts
import { Config } from '@algorandfoundation/algokit-utils'
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing'
import { Arc200Factory } from 'arc200-client'

const localnet = algorandFixture()

const factory = localnet.algorand.client.getTypedAppFactory(Arc200Factory, {
  defaultSender: testAccount,
})

const { appClient } = await factory.deploy({ onUpdate: 'append', onSchemaBreak: 'append' })
await localnet.algorand.account.ensureFunded(appClient.appAddress, testAccount, AlgoAmount.Algo(1))

await appClient.send.bootstrap({
  args: {
    decimals: 6,
    name: new Uint8Array(Buffer.from('Test', 'ascii')),
    symbol: new Uint8Array(Buffer.from('T', 'ascii')),
    totalSupply: 1_000_000_000_000_000n,
  },
})
```

More end-to-end examples, including balance and allowance assertions, live in [`contracts/arc200.e2e.spec.ts`](contracts/arc200.e2e.spec.ts) and [`contracts/arc200_asa.e2e.spec.ts`](contracts/arc200_asa.e2e.spec.ts).

## Exports

```ts
import {
  // client factories (recommended entry point)
  getArc200Client,
  getArc200ASAClient,

  // generated AlgoKit clients, for advanced use (fromNetwork, fromCreatorAndName, composer, etc.)
  Arc200Client,
  Arc200Factory,
  Arc200AsaClient,
  Arc200AsaFactory,

  // shared types
  type ApprovalStruct,
  type AsaProps,
  type Arc200ExchangeInfo,
} from 'arc200-client'
```

## API reference

### `Arc200Client` (also inherited by `Arc200AsaClient`)

| Method | Description |
| --- | --- |
| `arc200Name()` | Token name (`byte[32]`) |
| `arc200Symbol()` | Token symbol (`byte[8]`) |
| `arc200Decimals()` | Number of decimals (`uint8`) |
| `arc200TotalSupply()` | Circulating supply (`uint256`) |
| `arc200BalanceOf({ args: { owner } })` | Balance of an address (`uint256`) |
| `arc200Transfer({ args: { to, value } })` | Transfer from the caller to `to` |
| `arc200TransferFrom({ args: { from, to, value } })` | Transfer using a prior approval |
| `arc200Approve({ args: { spender, value } })` | Approve `spender` to move up to `value` tokens |
| `arc200Allowance({ args: { owner, spender } })` | Remaining allowance for `spender` |
| `bootstrap({ args })` | One-time initialisation, mints the initial supply |

### `Arc200AsaClient` additions

| Method | Description |
| --- | --- |
| `arc200Exchange()` | Returns `{ exchangeAsset, sink }` describing the backing ASA |
| `deposit({ args: { amount } })` | Locks ASA (sent in the previous txn of the group) and mints ARC200 |
| `withdraw({ args: { amount } })` | Burns ARC200 and returns the underlying ASA |
| `arc200Redeem({ args: { amount } })` | Same as `deposit`, without returning the minted amount |
| `arc200SwapBack({ args: { amount } })` | Same as `withdraw`, without returning the burned amount |

Every method above is available in three flavours, matching the standard AlgoKit-generated client shape:

- `client.<method>(...)` — simulate/read a `readonly` method directly.
- `client.send.<method>(...)` — build, sign and send a single transaction.
- `client.params.<method>(...)` / `client.createTransaction.<method>(...)` — get call params / an unsigned transaction to compose yourself.
- `client.compose().<method>(...)` / `client.newGroup().<method>(...)` — build an atomic group across multiple calls.

## Events

Both contracts emit ARC200-standard events which you can decode from confirmed transactions:

- `arc200_Transfer(from, to, value)`
- `arc200_Approval(owner, spender, value)`

## Smart contracts

The Algorand TypeScript (Puya) smart contract source lives in this repo alongside the generated clients:

- [`contracts/arc200.algo.ts`](contracts/arc200.algo.ts) — plain ARC200 token
- [`contracts/arc200_asa.algo.ts`](contracts/arc200_asa.algo.ts) — ARC200 token backed by an ASA

Regenerate the clients after changing a contract:

```bash
pnpm run compile-contract
pnpm run generate-client
```

## Source code

https://github.com/scholtz/arc200

## License

MIT
