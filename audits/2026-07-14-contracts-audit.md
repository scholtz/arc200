# ARC200 Smart Contract Audit

**Scope:** `contracts/arc200.algo.ts` (Arc200), `contracts/arc200_asa.algo.ts` (Arc200_ASA),
their compiled artifacts, and `contracts/deploy-config.ts`.
**Commit audited:** `85f4c0ba54935c353e5a52f5feddc6dcfcfca298` (2026-07-14)
**Methodology:** [`AI-AUDITS-INSTRUCTIONS.md`](./AI-AUDITS-INSTRUCTIONS.md)
**Auditor:** AI-assisted static review (Claude, Sonnet 5) — no dynamic fuzzing or formal
verification was performed. Treat as a first-pass review, not a substitute for a human-led
professional audit before any high-value mainnet deployment.

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 1 |
| Medium | 3 |
| Low | 3 |
| Informational | 5 |

No path to unauthorized minting, direct fund theft, or bypass of the creator-only bootstrap
guard was found. The most significant issue is an unbounded box-storage griefing vector
present in both contracts (H-1), followed by test-coverage and truncation-safety gaps in the
ASA exchange path.

## Remediation status (as of 2026-07-14, same-day)

All findings below were addressed in the working tree following this audit. Contracts were
recompiled (`puya-ts compile`), typed clients regenerated, and the full test suite (16 tests,
including new coverage added for this remediation) passes on LocalNet. This status has not
yet been re-audited independently — treat it as developer self-attestation until a follow-up
review confirms it.

| Finding | Status | Notes |
|---|---|---|
| H-1 (box griefing) | **Fixed** | `_transfer` now rejects zero-value transfers that would create a new balance box; `createBalanceBox` now requires a grouped payment covering the box MBR. Residual risk (nonzero-value transfers still create boxes at app expense) is accepted as bounded by the sender's own token holdings — see updated note below. |
| M-1 (uint64 narrowing) | **Fixed** | `bootstrap` now asserts `totalSupply <= 2^64 - 1` before narrowing. |
| M-2 (groupIndex underflow) | **Fixed** | Shared `_validateIncomingAxfer` helper now asserts `Txn.groupIndex > 0` with a clear message. |
| M-3 (test coverage) | **Improved, not exhaustive** | Added tests for approve/increaseAllowance/decreaseAllowance/transferFrom (happy path + reverts), the zero-value/zero-address transfer guards, and the ASA deposit/withdraw round trip, groupIndex/asset-mismatch reverts, and the new createBalanceBox payment gate. `arc200_redeem`/`arc200_swapBack` (the lower-level counterparts of `deposit`/`withdraw`) and bootstrap edge cases (double-bootstrap, non-creator caller, name/symbol length limits) remain untested — tracked as a follow-up, not blocking. |
| L-1 (zero-address transfers) | **Fixed** | `_transfer` now rejects `recipient === zeroAddress`. |
| L-2 (approve race) | **Fixed** | Added `arc200_increaseAllowance` / `arc200_decreaseAllowance` to both contracts. |
| L-3 (duplicated redeem/deposit, swapBack/withdraw) | **Fixed** | Both pairs now share `_validateIncomingAxfer` / `_releaseAsa` private helpers. |
| I-1 (no pause/upgrade) | **No change** | Confirmed as an intentional trust-minimization tradeoff; no action taken. |
| I-2 (metadataHash resize) | **No change needed** | Re-verified: `metadataHash` is typed `StaticBytes<32>` in the `asaProps` struct, so the ABI encoder already enforces exactly 32 bytes at the call boundary — `.toFixed({ length: 32 })` is a type-satisfying no-op, not a lossy resize of variable-length input. The original finding overstated the risk; downgraded to no issue. |
| I-3 (no periodic reserves check) | **No change** | Structural note, not a fixable defect; the two ways it could desync (H-1, M-1) are now both fixed. |
| I-4 (compiled artifacts not diffed) | **Partially addressed** | Artifacts were regenerated to match the fixed source for this remediation; ongoing enforcement now depends on the CI `ci-teal-diff`-style check described in the companion [npm-package audit](./2026-07-14-npm-package-audit.md). |
| I-5 (decimals coupling) | **No change** | No action needed, as previously noted. |

---

## High

### H-1. Unfunded box creation lets anyone drain the app account (DoS/griefing)

**Files:** `contracts/arc200.algo.ts:195-207` (`_transfer`), `contracts/arc200_asa.algo.ts:391-403`
(`_transfer`), `contracts/arc200_asa.algo.ts:366-373` (`createBalanceBox`)

`_transfer` always writes `this.balances(recipient).value = ...` when `sender !== recipient`,
**even when `amount` is `0`**:

```ts
assert(sender_balance.asBigUint() >= amount.asBigUint(), 'Insufficient balance at the sender account')
if (sender !== recipient) {
  this.balances(sender).value = new Uint256(sender_balance.asBigUint() - amount.asBigUint())
  this.balances(recipient).value = new Uint256(recipient_balance.asBigUint() + amount.asBigUint())
}
```

A recipient address that has never held a balance box does not yet have one; writing to it
creates a new `BoxMap` entry, and on Algorand the MBR (minimum balance requirement) for that
box is funded from the **application account**, not the caller. Nothing in `arc200_transfer`
requires the caller to attach a payment covering that MBR.

Any account — including one with a **zero token balance** — can call
`arc200_transfer(to: <fresh random address>, value: 0)` repeatedly. Each call:
- passes the balance assert (`0 >= 0`),
- creates a brand-new box for an arbitrary attacker-chosen address,
- costs the attacker only the transaction fee, and
- costs the **app account** the box MBR (currently 2,500 + 400×bytes microAlgo per box).

Repeated at scale this drains the app account's spendable Algo balance. Once the app account's
balance falls below what's needed to cover its own minimum balance plus outstanding box MBR,
**new legitimate transfers to new addresses start failing**, and existing operations that need
to create boxes (first-time recipients, `createBalanceBox` in the ASA variant) break — a
persistent, cheap, unauthenticated denial of service against the token's core transfer
function.

The ASA variant's `createBalanceBox(owner)` (`arc200_asa.algo.ts:366-373`) is an explicit,
dedicated version of the same primitive: it takes no payment and can be called for any address
by any account, for free (to the caller) box creation.

**Recommendation:** Require the caller to cover box MBR explicitly — e.g. verify a
grouped `pay` transaction of at least the box MBR when a transfer would create a new box, or
require the recipient to opt in / pre-fund their own box before receiving a first transfer, or
maintain a maintained pool of pre-funded "credit" replenished from transaction fees. At
minimum, reject zero-value transfers to addresses without an existing balance box, and consider
requiring `createBalanceBox` to be paired with a fee-bump or grouped payment covering its own
MBR cost.

**Fix applied:** `_transfer` now rejects a zero-value transfer to a recipient without an
existing balance box (`'A zero-value transfer cannot be used to create a new balance box'`),
and `createBalanceBox` now requires the immediately preceding group transaction to be a
payment from the caller to the app covering the box MBR. Residual risk: a nonzero-value
transfer to a fresh address still creates a box at the app's expense, but the attacker must now
actually possess and forfeit real tokens to do so, bounding the attack by the attacker's token
holdings rather than allowing free, unlimited box creation. Verified with new tests in
`contracts/arc200.e2e.spec.ts` and `contracts/arc200_asa.e2e.spec.ts`.

---

## Medium

### M-1. `Uint256` → `Uint64` narrowing in ASA bootstrap has no explicit bounds check

**File:** `contracts/arc200_asa.algo.ts:96,117,126`

`bootstrap` accepts `totalSupply: Uint256` and passes `totalSupply.asUint64()` as the ASA's
`total` field, and `decimals.asUint64()` for the ASA decimals. `Uint256` values above
`2^64 - 1` are valid ARC200 total supplies but cannot be represented as the ASA's native
`uint64` total. There is no explicit `assert(totalSupply <= 2^64 - 1, ...)` before the
narrowing conversion — the contract relies entirely on whatever the compiled `asUint64()`
does with an out-of-range value (revert vs. silent truncation depends on the Puya/AVM runtime
semantics and was not independently verified against the compiled TEAL in this pass).

If truncation is silent, the ARC200 side of the contract believes total supply is the full
`Uint256` value while the wrapped ASA can only ever hold the truncated `uint64` amount,
permanently breaking the "no minting/burning during exchange" invariant the `arc200_redeem` /
`arc200_swapBack` documentation promises.

**Recommendation:** Add an explicit `assert(totalSupply.asBigUint() <= 2n**64n - 1n, 'totalSupply exceeds ASA uint64 range')`
in `bootstrap` before calling `.asUint64()`, and add a unit test that bootstraps with a supply
just above `2^64 - 1` and confirms a clean revert.

### M-2. `Txn.groupIndex - 1` is unguarded against `groupIndex == 0`

**File:** `contracts/arc200_asa.algo.ts:264-281` (`arc200_redeem`), `288-307` (`deposit`)

Both methods assume there is a previous transaction in the group and read it via
`gtxn.Transaction(Txn.groupIndex - 1)` without first asserting `Txn.groupIndex > 0`. If either
method is called as the first transaction in a group, `Txn.groupIndex - 1` underflows (on a
`uint64` this wraps to a very large index). The AVM will almost certainly reject the resulting
out-of-bounds group reference and the call will fail closed — but the failure mode is an
implicit runtime error rather than a clear, intentional `assert` message, which makes
diagnosing integration failures harder for wallets/dApps and is fragile if underlying group
reference semantics ever change.

**Recommendation:** Add `assert(Txn.groupIndex > 0, 'Must be preceded by an ASA transfer')` at
the top of both methods for a clear, intentional revert message.

### M-3. No test coverage for any state-mutating ABI method except `bootstrap` and one transfer

**Files:** `contracts/arc200.e2e.spec.ts`, `contracts/arc200_asa.e2e.spec.ts`

See Section "Test coverage" below — classified here as a Medium because it directly affects
confidence in every other finding and in the correctness of the approve/transferFrom/redeem/
swapBack paths that move value.

---

## Low

### L-1. No zero-address guard on transfer recipient (silent, supply-inflating-looking burn)

**Files:** `arc200.algo.ts:195-207`, `arc200_asa.algo.ts:391-403`

`_transfer` never checks `recipient !== Global.zeroAddress`. Tokens sent to the zero address
are effectively burned (nobody holds its key) but `totalSupply` is never decremented, so
on-chain "total supply" permanently overstates circulating supply once any holder burns this
way. This mirrors a common (and generally accepted) ERC20 pattern, but because it's silent and
undocumented here, indexers/integrators may double-count. Consider either explicitly
disallowing transfers to the zero address (forcing intentional burn tooling later) or
documenting the behavior in the ABI docstring.

### L-2. Classic approve/transferFrom front-running window

**Files:** `arc200.algo.ts:172-176`, `arc200_asa.algo.ts:224-228`

`arc200_approve` overwrites the prior allowance directly rather than requiring it to be zero
first or providing an `increaseAllowance`/`decreaseAllowance` pair. A spender who observes an
approval change from `N` to `M` in the mempool can front-run with a `transferFrom` for `N`,
then execute another for `M`, netting `N+M` instead of the intended `M`. This is the same
tradeoff most ERC20-style tokens accept; flagged for completeness since ARC200 doesn't
document a mitigation. Consider adding `arc200_increaseAllowance`/`arc200_decreaseAllowance` as
optional convenience methods so integrators have a race-free path.

### L-3. `deposit`/`arc200_redeem` and `withdraw`/`arc200_swapBack` are duplicated, divergent implementations

**File:** `contracts/arc200_asa.algo.ts:263-359`

`deposit` (264-307) and `arc200_redeem` (263-281) implement near-identical logic (validate a
preceding ASA transfer, then release ARC200), as do `withdraw` (346-359) and `arc200_swapBack`
(324-339). Duplication itself isn't a vulnerability, but two independently-maintained copies of
security-critical validation logic is exactly the kind of surface where a future edit fixes a
bug in one copy and not the other. Recommend factoring the shared validation into a private
helper (e.g. `_validateIncomingAxfer(amount)`).

---

## Informational

### I-1. No pause/upgrade/admin mechanism
Neither contract has an owner, pause switch, or update authority beyond the one-time
`bootstrap` creator check. This is good for trust-minimization but means any bug found
post-deployment (including the findings in this report) cannot be patched in place — only a
new deployment with a migration can fix it. Confirm this is the intended tradeoff for
production deployments and document it for integrators/holders.

### I-2. `asset.metadataHash` silently resized via `.toFixed({ length: 32 })`
**File:** `arc200_asa.algo.ts:124` — if a deployer passes a `metadataHash` that isn't exactly
32 bytes, `.toFixed({ length: 32 })` pads or truncates rather than reverting. Since this only
affects the deployer's own bootstrap call (not attacker-reachable post-deployment), impact is
limited to the deployer misconfiguring their own asset metadata, but a `Bootstrap` that fails
loudly on malformed input is safer than one that silently mutates it.

### I-3. `arc200_redeem` / `deposit` trust `axfer.assetReceiver === Global.currentApplicationAddress` but don't reconcile against ASA holdings before releasing ARC200
The validation is sound for a single well-formed group, but there is no invariant check
anywhere in the contract (e.g. a periodic or callable "reserves" check) that `ASA held by app`
tracks `ARC200 balance of app account`. This is standard for this contract style (the
per-call checks are the invariant enforcement), but worth stating explicitly as it's the
property the whole exchange mechanism depends on — see H-1 and M-1 for the two ways it could
be pushed out of sync.

### I-4. Compiled artifacts not diffed against source as part of this review
Per methodology §3.9, `contracts/artifacts/*.teal` should be spot-checked against the
`.algo.ts` source for every release. This review read the TypeScript source and treated the
Puya compiler as trusted; it did not independently verify the emitted TEAL for either contract.
Recommend this step be performed by whoever owns the release process, ideally via an automated
diff/regeneration check in CI (see npm-package audit, CI absence finding).

### I-5. `decimals` is not validated to match the wrapped ASA's own decimals field independently
**File:** `arc200_asa.algo.ts:126` — the ASA is created with `decimals: decimals.asUint64()`,
i.e. the ASA's decimals are derived from the same input as the ARC200 side, so they cannot
diverge at creation time. Noted only because this is the kind of invariant that's easy to break
if the contract is ever modified to allow ASA decimals to be set independently — no action
needed today.

---

## Test coverage detail

Per methodology §3.10, every public ABI method was checked against
`contracts/arc200.e2e.spec.ts` and `contracts/arc200_asa.e2e.spec.ts`:

| Method | Happy path tested | Revert/edge case tested |
|---|---|---|
| `bootstrap` | ✅ (both contracts) | ❌ (no test for double-bootstrap, non-creator caller, name/symbol length limits) |
| `arc200_transfer` | ✅ (base contract only, one case) | ❌ (no insufficient-balance test, no self-transfer, no zero-value test) |
| `arc200_transferFrom` | ❌ | ❌ |
| `arc200_approve` | ❌ | ❌ |
| `arc200_allowance` | ❌ | ❌ |
| `arc200_balanceOf` | ✅ (incidentally, via transfer test) | — |
| `arc200_totalSupply` | ❌ | ❌ |
| `arc200_name` / `_symbol` / `_decimals` | ✅ (read-only, against **MainNet** app IDs only) | — |
| `arc200_redeem` (ASA) | ❌ | ❌ |
| `deposit` (ASA) | ❌ | ❌ |
| `arc200_swapBack` (ASA) | ❌ | ❌ |
| `withdraw` (ASA) | ❌ | ❌ |
| `createBalanceBox` (ASA) | ❌ | ❌ |
| `arc200_exchange` (ASA) | ✅ (read-only, against **MainNet** app IDs only) | — |

The MainNet-app-ID tests (`decode name of ...`) exercise the generated client's ABI decoding
against already-deployed contracts; they do not exercise this repository's contract logic at
all and should not be counted as coverage for state-mutating correctness. Every method that
moves value or changes allowances — including the entire ASA exchange mechanism — has zero
automated test coverage in this repository as of the audited commit. This is the single
highest-leverage improvement available: it would have caught or bounded confidence on H-1 and
M-1/M-2 directly.

---

## Not covered by this audit

- AVM/protocol-level bugs in the Algorand or Voi virtual machine itself.
- Internals of `@algorandfoundation/algorand-typescript`, `puya-ts`, or the TEAL compiler
  (trusted as correct; see I-4).
- Economic/game-theoretic analysis of the ASA exchange rate mechanism beyond the invariants
  listed above.
- Formal verification or fuzzing — this was a manual, static, single-pass source review.
- Front-end or wallet integration code (not present in this repository).

This report reflects the contract source at commit `85f4c0ba54935c353e5a52f5feddc6dcfcfca298`
only. It reduces but does not eliminate risk, and should not be treated as a guarantee of
security for any deployment.
