# ARC200 Smart Contract Audit — Follow-Up

**Scope:** `contracts/arc200.algo.ts` (Arc200), `contracts/arc200_asa.algo.ts` (Arc200_ASA),
their compiled artifacts, and `contracts/deploy-config.ts`.
**Commit audited:** `7bfd5962bcae318cfae444effa27ef2ce9a0df44` (2026-07-15)
**Prior report:** [`2026-07-14-contracts-audit.md`](./2026-07-14-contracts-audit.md) — this is an
independent follow-up, not a rubber stamp of that report's self-attested "Fixed" claims.
**Methodology:** [`AI-AUDITS-INSTRUCTIONS.md`](./AI-AUDITS-INSTRUCTIONS.md)
**Auditor:** AI-assisted static + dynamic review (Claude, Sonnet 5). Unlike the prior pass, this
review ran the actual test suite against a live AlgoKit LocalNet and wrote a new adversarial
test to reproduce a finding before reporting it, per methodology §1 ("Reproduce, don't assume").

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 1 |
| Medium | 2 |
| Low | 0 |
| Informational | 1 |

The commit under review contains real, verified fixes for every finding raised in the
2026-07-14 report — this was independently confirmed by re-reading the diffed source and
running the project's own test suite (16/16 passing) against a live LocalNet, not by trusting
the prior report's remediation table. However, the fix applied for H-1 (unfunded box creation)
was scoped only to the `balances` BoxMap reachable through `_transfer`. The exact same
vulnerability class is still present, unpatched, in the `approvals` BoxMap reachable through
`_approve` (and therefore `arc200_approve`, `arc200_increaseAllowance`,
`arc200_decreaseAllowance`) in **both** contracts. This is reported below as a new High finding
and was reproduced with a runnable LocalNet test (see H-1 write-up).

## Verification of 2026-07-14 findings

Each finding from the prior report was re-checked against current `HEAD`, not assumed fixed
because the prior report said so:

| Finding | Verified status | Evidence |
|---|---|---|
| H-1 (box griefing via `_transfer`) | **Confirmed fixed for `balances`** — see new H-1 below for the sibling vector in `approvals` | `arc200.algo.ts:233-237`, `arc200_asa.algo.ts:413-417`: zero-value transfer to a boxless recipient now reverts (`'A zero-value transfer cannot be used to create a new balance box'`); `createBalanceBox` (`arc200_asa.algo.ts:375-387`) now requires a grouped payment ≥ `BALANCE_BOX_MBR`. Confirmed by running `contracts/arc200.e2e.spec.ts` and `contracts/arc200_asa.e2e.spec.ts` against a live LocalNet: 16/16 tests pass, including the specific regression tests for this fix. |
| M-1 (`Uint256`→`Uint64` narrowing, no bound check) | **Confirmed fixed** | `arc200_asa.algo.ts:110-113`: explicit `assert(totalSupply.asBigUint() <= 2n**64n - 1n, ...)` now runs in `bootstrap` before `.asUint64()` narrowing. |
| M-2 (`Txn.groupIndex - 1` underflow) | **Confirmed fixed** | `arc200_asa.algo.ts:432`: `_validateIncomingAxfer` now asserts `Txn.groupIndex > 0` with a clear message, shared by both `arc200_redeem`/`deposit`. |
| M-3 (test coverage) | **Partially improved, gap remains — see Medium below** | New tests exist for approve/allowance/transferFrom, zero-value/zero-address guards, and the ASA deposit/withdraw round trip. `arc200_redeem`/`arc200_swapBack` (as opposed to their `deposit`/`withdraw` wrappers), ASA-side approve/transferFrom, and bootstrap edge cases remain untested. |
| L-1 (no zero-address guard) | **Confirmed fixed** | `arc200.algo.ts:232`, `arc200_asa.algo.ts:412`: `assert(recipient !== new Address(Global.zeroAddress), ...)`. |
| L-2 (approve/transferFrom front-running) | **Confirmed fixed (mitigation added, not eliminated)** | `arc200_increaseAllowance`/`arc200_decreaseAllowance` added to both contracts (`arc200.algo.ts:186-207`, `arc200_asa.algo.ts:247-268`) and exercised by a passing test. The plain `arc200_approve` race still exists by design (standard ERC20-style tradeoff), as the prior report noted — this is unchanged and not a new issue. |
| L-3 (duplicated redeem/deposit, swapBack/withdraw) | **Confirmed fixed** | Both pairs now call shared private helpers `_validateIncomingAxfer` (`arc200_asa.algo.ts:431-444`) and `_releaseAsa` (`arc200_asa.algo.ts:450-464`). |
| I-1 through I-5 | **No change**, re-confirmed as intentional/non-issues | No new information changes any of these; see prior report. |

---

## High

### H-1 (new). `_approve` has the same unfunded-box-creation griefing vector that was just fixed in `_transfer` — and it is unpatched, in both contracts

**Files:** `contracts/arc200.algo.ts:255-265` (`_approve`), `contracts/arc200_asa.algo.ts:476-486`
(`_approve`); reachable via `arc200_approve` (`arc200.algo.ts:172-176`,
`arc200_asa.algo.ts:234-237`), `arc200_increaseAllowance` (`arc200.algo.ts:186-191`,
`arc200_asa.algo.ts:247-252`), and `arc200_decreaseAllowance` (`arc200.algo.ts:201-207`,
`arc200_asa.algo.ts:262-268`).

`_approve` unconditionally writes to the `approvals` BoxMap regardless of whether the
`(owner, spender)` box already exists and regardless of the approved `value`:

```ts
private _approve(owner: Address, spender: Address, amount: Uint256): Bool {
  const key = this._approvalKey(owner, spender)
  const approvalBox: ApprovalStruct = new ApprovalStruct({ approvalAmount: amount, owner, spender })
  this.approvals(key).value = clone(approvalBox)   // <-- always writes, creates box if absent
  emit(new arc200_Approval({ owner, spender, value: amount }))
  return new Bool(true)
}
```

`owner` is always `Txn.sender` (see `arc200_approve`/`arc200_increaseAllowance`/
`arc200_decreaseAllowance`), and `spender` is a **caller-chosen, arbitrary address** with no
existence or relationship requirement. This is exactly the pattern the prior audit's H-1 fixed
for `balances`/`_transfer` — a caller can force the creation of a box paid for by the app
account, at essentially zero cost to themselves — except the fix was never applied to
`approvals`/`_approve`.

Concretely: `arc200_approve(spender: <fresh random address>, value: 0)`:
- requires **no token balance** (unlike a nonzero-value `_transfer`, which at least costs the
  attacker real tokens post-H-1-fix),
- requires **no payment**, unlike the now-gated `createBalanceBox`,
- costs the attacker only the transaction fee, and
- creates a brand-new `approvals` box — 33-byte key (`'a'` prefix + 32-byte sha256 digest) +
  96-byte `ApprovalStruct` value (`approvalAmount` + `owner` + `spender`, 32 bytes each) — paid
  for entirely by the **app account's** minimum balance requirement (≈2,500 + 400×129 ≈ 54,100
  µAlgo per box, larger than the `balances` box this pattern was already fixed for).

**Reproduced.** A LocalNet test was written and run against this commit (not committed to the
repo — used only to verify this finding, then deleted): a freshly-generated account with **zero
ARC200 balance and no prior interaction with the app** called `arc200_approve` five times with
five fresh, never-before-seen `spender` addresses and `value: 0`. All five calls succeeded.
`AccountInformation` on the app address before/after showed `totalBoxes` grew by exactly 5 and
`minBalance` (the account's required minimum balance) grew by a positive amount, while the
attacker paid only transaction fees and held no tokens at any point. This directly demonstrates
unauthenticated, (near-)zero-cost box creation funded by the app account, unbounded by the
attacker's own holdings — the same impact the prior report rated **High** for the `balances`
BoxMap.

As with the original H-1, the practical effect at scale is that repeated calls consume the
app account's spendable Algo margin (its balance minus its growing minimum-balance
requirement). Once that margin is exhausted, calls that need to create a *new* box —
`createBalanceBox`, first-time `arc200_transfer` recipients, and now also first-time
`arc200_approve`/`arc200_increaseAllowance`/`arc200_decreaseAllowance` spender pairs — start
reverting for legitimate users, a persistent, cheap, unauthenticated denial of service.

**Recommendation:** Apply the same fix pattern used for `_transfer` to `_approve`: either (a)
reject a zero-value `arc200_approve`/`arc200_increaseAllowance`/`arc200_decreaseAllowance` call
that would create a new approval box for a spender that has never been approved before, or (b)
require a grouped payment covering the approval-box MBR when the box does not yet exist
(mirroring `createBalanceBox`'s pattern), or (c) require the spender to have opted in / for the
box to be pre-funded via an explicit `createApprovalBox`-style method before a first-time
approve. Add a regression test analogous to the existing H-1 tests
(`arc200.e2e.spec.ts:89-101`, `arc200_asa.e2e.spec.ts:132-156`) once fixed.

---

## Medium

### M-1 (carried forward, re-scoped). Test coverage gaps remain, and did not (and structurally could not) catch the new H-1

**Files:** `contracts/arc200.e2e.spec.ts`, `contracts/arc200_asa.e2e.spec.ts`

Per methodology §3.10, every public ABI method was re-checked against the current test files:

| Method | Happy path tested | Revert/edge case tested |
|---|---|---|
| `bootstrap` | ✅ (both contracts) | ❌ (no double-bootstrap, non-creator caller, or name/symbol length-limit test) |
| `arc200_transfer` | ✅ | ✅ (insufficient balance, zero-value-to-fresh-box, zero-address) |
| `arc200_transferFrom` | ✅ (base contract only) | ✅ (insufficient approval) — not exercised on the ASA contract |
| `arc200_approve` | ✅ | — (no test for the box-creation cost this audit flags in new H-1) |
| `arc200_increaseAllowance` / `arc200_decreaseAllowance` | ✅ (base contract only) | ✅ (decrease-exceeds-allowance) — not exercised on the ASA contract |
| `arc200_allowance` / `arc200_balanceOf` / `arc200_totalSupply` | ✅ (incidental) | — |
| `arc200_redeem` (ASA) | ❌ (only its `deposit` wrapper is tested) | ❌ |
| `arc200_swapBack` (ASA) | ❌ (only its `withdraw` wrapper is tested) | ❌ |
| `deposit` / `withdraw` (ASA) | ✅ | ✅ (amount-exceeds-transferred, non-ASA preceding txn) |
| `createBalanceBox` (ASA) | ✅ | ✅ (payment-required gate) |

This is downgraded from the prior report's Medium (it previously covered zero tested
state-mutating methods; now most are covered) but remains a finding because the one method that
most needed a test to catch the exact regression class this audit found —
`arc200_approve`/`arc200_increaseAllowance`/`arc200_decreaseAllowance` box-creation cost — has a
happy-path test but no cost/griefing-boundary test, unlike the equivalent, already-fixed
`_transfer` path which does have one (`arc200.e2e.spec.ts:89-101`). Recommend adding the
regression test suggested in H-1 above, plus `arc200_redeem`/`arc200_swapBack` direct coverage
and bootstrap edge cases, before the next release.

### M-2 (new). Compiled-client regeneration is not reproducible from unchanged source — the newly-added CI artifact-diff gate will likely fail on a clean rebuild

**Files:** `contracts/artifacts/Arc200_ASAClient.ts`; `.github/workflows/ci.yml:43-46`
(the "Fail if compiled artifacts differ from what's committed" step added per the companion
[npm-package audit's](./2026-07-15-npm-package-audit.md) M-2 remediation)

Verification steps taken: with a byte-identical, unmodified `contracts/arc200_asa.algo.ts` and
a clean git status, `pnpm run compile-contract` was re-run (producing `contracts/artifacts/
Arc200_ASA.approval.teal`, `.arc56.json`, and `.puya.map` byte-identical to what's committed —
confirmed via `git diff --stat`, zero changes), followed by `pnpm run generate-client`. The
regenerated `Arc200_ASAClient.ts` differs from the committed file by one line: the embedded
base64 `source.approval` blob inside its `APP_SPEC` constant carries TEAL comments referencing
source line numbers that are each off by exactly one from the committed version (e.g.
`// contracts/arc200_asa.algo.ts:67` in the committed file vs. `:66` freshly generated,
propagated through every comment in the decoded program). This was independently reproduced
twice (two separate `generate-client` runs from the same, unchanged `.arc56.json` produced the
same result both times), so it is a **stable but non-matching** output, not run-to-run
randomness — meaning whatever produced the currently-committed `Arc200_ASAClient.ts` used a
subtly different environment/toolchain state than a clean rebuild does today. The equivalent
`Arc200Client.ts` (base contract) matched exactly with no diff.

Because `.github/workflows/ci.yml`'s new gate runs `git diff --exit-code --minimal
contracts/artifacts` after a full `pnpm run build`, this specific mismatch means **CI will
almost certainly fail on the very first PR that triggers it**, even with no functional source
change — the opposite of what the gate was added to guarantee, and a likely source of
false-positive CI failures that erode trust in (and eventually invite disabling of) a control
that was added specifically to catch drifted artifacts.

Impact is process/tooling, not contract-security: the actual TEAL bytecode is confirmed
unaffected (only embedded source-map comments in the generated TypeScript client differ), so
this does not change on-chain behavior. It is rated Medium rather than Low because it directly
undermines a control the companion npm-package audit just added to close out a prior
Informational finding (I-4).

**Recommendation:** Before relying on the CI gate, run it once locally end-to-end
(`pnpm run build && git diff --exit-code --minimal contracts/artifacts`) in an environment as
close to CI as possible (clean checkout, no local node_modules cache) to confirm it's actually
green; if it reproduces this off-by-one, either regenerate and commit a fresh
`Arc200_ASAClient.ts` from the current toolchain, or have the gate ignore/normalize the
embedded `source` field in generated clients (comparing decoded TEAL/ABI rather than the raw
generated `.ts` file) so cosmetic line-number drift in source-map comments doesn't fail builds
that have no functional change.

---

## Informational

### I-1. All prior Informational findings (I-1 through I-5 in the 2026-07-14 report) re-confirmed unchanged

No pause/upgrade mechanism, `metadataHash` typed-boundary enforcement, lack of a periodic
reserves invariant check, artifact-vs-source spot-checking as an ongoing CI responsibility (see
M-2 above for a concrete gap in that control), and `decimals` coupling are all unchanged from
the prior report's analysis and are not repeated in full here — see
[`2026-07-14-contracts-audit.md`](./2026-07-14-contracts-audit.md) §Informational for the
original write-ups, all of which remain accurate.

---

## Not covered by this audit

- AVM/protocol-level bugs in the Algorand or Voi virtual machine itself.
- Internals of `@algorandfoundation/algorand-typescript`, `puya-ts`, or the TEAL compiler,
  beyond the specific reproducibility check in M-2 above.
- Economic/game-theoretic analysis of the ASA exchange rate mechanism beyond the invariants
  already covered in the prior report.
- Formal verification or fuzzing.
- Front-end or wallet integration code (not present in this repository).
- A fix for the new H-1 finding was **not** applied as part of this audit — this report only
  identifies and reproduces the issue, per the instructions' emphasis on independent,
  skeptical review rather than developer self-remediation.

This report reflects the contract source at commit
`7bfd5962bcae318cfae444effa27ef2ce9a0df44` only. It reduces but does not eliminate risk, and
should not be treated as a guarantee of security for any deployment.
