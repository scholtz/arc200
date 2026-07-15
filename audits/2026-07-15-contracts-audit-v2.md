# ARC200 Smart Contract Audit — Second Follow-Up (v2)

**Scope:** `contracts/arc200.algo.ts` (Arc200), `contracts/arc200_asa.algo.ts` (Arc200_ASA),
their compiled artifacts (`contracts/artifacts/*.teal`, `*.arc56.json`, `*.puya.map`,
`*Client.ts`), `contracts/deploy-config.ts`, and `.github/workflows/ci.yml` (the artifact-diff
gate it added is directly load-bearing for artifact-vs-source integrity, §3.9/§3.12).
**Commit audited:** `76295daf14a30e5273db60292a60166dcc81e55b` (2026-07-15), confirmed via
`git log -1`.
**Prior reports:** [`2026-07-14-contracts-audit.md`](./2026-07-14-contracts-audit.md),
[`2026-07-15-contracts-audit.md`](./2026-07-15-contracts-audit.md) (audited `7bfd596`). This is
an independent second follow-up covering the fix landed in `c4bf370`, not a rubber stamp of that
commit's own description of what it fixed.
**Methodology:** [`AI-AUDITS-INSTRUCTIONS.md`](./AI-AUDITS-INSTRUCTIONS.md), §3.1–§3.10
(contract-relevant subsections for this pass).
**Auditor:** AI-assisted static + dynamic review (Claude, Sonnet 5). Verification performed
against a live local AlgoKit LocalNet (`algokit localnet start`, already running at audit time)
using `pnpm run test` (18/18 passing) and purpose-written, non-committed vitest specs to
reproduce specific claims before reporting them, per methodology §1.

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 0 |
| Medium | 2 |
| Low | 1 |
| Informational | 1 |

The prior report's High finding (H-1: unfunded box-creation griefing via `_approve`) **is
Fixed**, independently verified below with a reproduced LocalNet test. However, this pass found
that the companion CI control change (excluding `*Client.ts` from the compiled-artifact diff
gate, made in the same commit `c4bf370`) is not merely imperfect as the prior report
characterized it — **the gate as written is unconditionally broken** and will fail on every CI
run regardless of whether any drift exists, due to a git argument-ordering bug, independent of
the `*Client.ts` exclusion itself. Separately, the exclusion also creates a genuine blind spot:
generated `*Client.ts` files are directly imported and re-exported into the published npm
package (`src/index.ts`), and are now completely unchecked by CI, including their embedded
`APP_SPEC.byteCode` used by consumers for deployment. A minor, low-impact behavioral side effect
of the H-1 fix (a previously-succeeding no-op `arc200_transferFrom(..., 0)` call now reverts)
was also found and reproduced.

## Verification of 2026-07-15 findings

| Finding | Verified status | Evidence |
|---|---|---|
| H-1 (`_approve` unfunded box-creation griefing) | **Fixed** | `contracts/arc200.algo.ts:257-262` and `contracts/arc200_asa.algo.ts:478-483` both add `if (!this.approvals(key).exists) { assert(amount.asBigUint() > 0n, ...) }` before writing the approval box, mirroring the existing `_transfer` guard. Reproduced with a temporary LocalNet test (written for this audit, run, then deleted — not committed): a funded-but-token-less account called `arc200_approve` five times with five fresh, never-before-used `spender` addresses and `value: 0`. All five calls reverted with `A zero-value approval cannot be used to create a new approval box`, and `AccountInformation.totalBoxes` on the app account was unchanged before/after (0 net new boxes), versus 5 new boxes created unconditionally before the fix (as demonstrated in the prior report). `pnpm run test` (18/18, including the two new committed regression tests `arc200.e2e.spec.ts:184-196` and `arc200_asa.e2e.spec.ts:158-171`) also passes. |
| M-1 (test coverage gaps) | **Unchanged, re-scoped below** | See M-2/Informational discussion; approve/allowance coverage improved, `arc200_redeem`/`arc200_swapBack` (direct, not via `deposit`/`withdraw` wrappers) and bootstrap edge cases remain untested. |
| M-2 (Client.ts regeneration reproducibility / CI gate) | **Re-investigated independently; finding restated below as new M-1/M-2** — the specific off-by-one line-number drift reported previously did **not** reproduce in this environment (a clean `pnpm run build` from unmodified source produced byte-identical artifacts, including both `*Client.ts` files, confirmed via `git status`/`git diff --exit-code` showing zero changes). However, the *fix* applied for that finding introduced a new, worse, and independently-verified problem — see new M-1 below. |

---

## Medium

### M-1 (new). The CI artifact-diff gate added in `c4bf370` is syntactically broken and fails unconditionally, regardless of any real drift

**File:** `.github/workflows/ci.yml:43-52`

```yaml
- name: Fail if compiled artifacts differ from what's committed
  # Generated *Client.ts files embed a source map whose comments carry source line
  # numbers; algokit-client-generator has been observed to emit these non-reproducibly
  # (off-by-one) across otherwise-identical toolchain runs, with no effect on the
  # compiled TEAL or the ABI/ARC-56 spec. Excluding them keeps this gate meaningful
  # (it still catches real drift in TEAL/ARC-56/puya.map output) without flaking on
  # cosmetic source-map noise.
  run: |
    git add -N contracts/artifacts
    git diff --exit-code --minimal contracts/artifacts -- ':!contracts/artifacts/*Client.ts'
```

`git diff`'s argument grammar is `git diff [<options>] [<commit>] [--] [<path>...]`. Once an
explicit `-- <pathspec>` is present anywhere in the invocation, git no longer applies its usual
revision/pathspec auto-disambiguation to the earlier bare `contracts/artifacts` token — it is
parsed strictly as a `<commit>` revision, which does not exist, so the command fails with
`fatal: bad revision 'contracts/artifacts'` (exit code 128) **every time**, whether or not the
working tree actually differs from what's committed.

**Reproduced independently**, in two ways:

1. With a completely clean working tree (freshly rebuilt, byte-identical to `HEAD`), running the
   exact committed command produced:
   ```
   $ git add -N contracts/artifacts
   $ git diff --exit-code --minimal contracts/artifacts -- ':!contracts/artifacts/*Client.ts'
   fatal: bad revision 'contracts/artifacts'
   $ echo $?
   128
   ```
2. Isolated the cause by testing permutations: `git diff --minimal contracts/artifacts` alone
   (no trailing pathspec) succeeds and correctly reports "no diff" on a clean tree; adding any
   `-- <pathspec>` after it (even a no-op one, e.g. excluding a file that doesn't exist)
   reproduces the same `fatal: bad revision` error. This is a general git argument-parsing rule,
   not specific to this repo's file layout, `git` version, or environment — it will reproduce
   identically on the `ubuntu-latest` GitHub Actions runner this workflow targets.

**Impact:** this is worse than the "the gate will likely false-positive-fail on legitimate,
unchanged rebuilds" risk the prior report flagged (which specifically did **not** reproduce in
this environment — a clean rebuild now round-trips byte-identical, including both `*Client.ts`
files). Instead, the gate **always** fails with a fatal git error, on every single PR and every
push to `main`, regardless of whether the compiled artifacts actually match the source. A
control that is permanently red teaches contributors to ignore or bypass it (force-merge past a
"known-broken" check), which is functionally equivalent to not having the control at all — and
worse, it erodes trust in surrounding CI signal (lint/typecheck/tests in the same job) if
reviewers start assuming "the pipeline is always red anyway."

**Recommendation:** Put `--` immediately before the first path argument too, so both the base
path and the exclusion pathspec are unambiguously parsed as paths, e.g.:

```yaml
run: |
  git add -N contracts/artifacts
  git diff --exit-code --minimal -- contracts/artifacts ':!contracts/artifacts/*Client.ts'
```

Verify this exact form locally (`bash -c '<the run block>'`) before relying on it, since this
same class of subtle git CLI/CI-YAML mismatch is exactly what caused the previous version of
this gate to be wrong in a different way.

### M-2 (new). Excluding `*Client.ts` wholesale from the diff gate (once the syntax bug above is fixed) removes CI coverage of files that ship directly to npm consumers, not just cosmetic source-map comments

**Files:** `.github/workflows/ci.yml:52`; `src/index.ts:1-7`; `contracts/artifacts/Arc200Client.ts`,
`contracts/artifacts/Arc200_ASAClient.ts`.

Independent of the syntax bug in M-1, the *design* of the exclusion is broader than its stated
justification. `src/index.ts` directly imports and re-exports both generated clients:

```ts
import { Arc200Client, Arc200Factory, type ApprovalStruct } from '../contracts/artifacts/Arc200Client'
export * as arc200 from '../contracts/artifacts/Arc200Client'
...
export * from '../contracts/artifacts/Arc200_ASAClient'
```

These files are not incidental build output — they are bundled directly into `dist/` and shipped
in the published `arc200-client` npm package, and each embeds the full `APP_SPEC: Arc56Contract`
object, including `byteCode.approval`/`byteCode.clear` (the base64-encoded compiled TEAL
consumers' `AlgorandClient`/`AppFactory` code uses for deployment and, in some SDK code paths,
for compiled-program verification). Excluding `*Client.ts` from the diff gate entirely — rather
than normalizing/ignoring only the specific `source` sub-field that was shown to drift
cosmetically — means the gate provides **zero** protection against:

- A stale `*Client.ts` being committed (e.g. a developer runs `compile-contract` but forgets
  `generate-client`, or vice versa, or commits an artifact from a different branch/checkout by
  mistake) — the embedded `byteCode` could silently diverge from the actual `.approval.teal`
  that the rest of the gate does still check, and CI would report green.
- Any other point-in-time need to catch a manually altered `*Client.ts` (the instructions'
  ground rules explicitly call out treating generated code as subject to "check for hand-edits,
  not full line-by-line review" — this control was the only mechanized check for that).

Confirmed via direct diff of the pre-fix vs. post-fix `Client.ts` files (comparing decoded
`APP_SPEC` JSON, not just the raw generated `.ts` text) that in commit `c4bf370` the
`byteCode.approval` field *did* legitimately change (because the `.algo.ts` source changed —
this is the real, intended H-1 fix reaching the compiled program), alongside `sourceInfo` and
`source` (line-number comments). That the byteCode field is present and does change in practice
in this file confirms it is exactly the kind of functionally-meaningful content the gate should
still be checking — not just source-map comments — yet the current exclusion pattern
(`':!contracts/artifacts/*Client.ts'`) removes the entire file, byteCode included, from scrutiny.

**Recommendation:** Once M-1's syntax is fixed, narrow the exclusion to the specific field(s)
that are unstable (e.g., diff a normalized/`jq`-stripped copy of `*Client.ts` with the `source`
sub-object of `APP_SPEC` removed, or diff the decoded `byteCode`/method list extracted from
`APP_SPEC` rather than the raw file) so a genuine `byteCode` or ABI mismatch between
`*Client.ts` and the `.arc56.json`/`.teal` files it was generated from still fails CI.

---

## Low

### L-1 (new). The H-1 fix in `_approve` has a narrow, reproduced side effect: `arc200_transferFrom(..., 0)` from a spender with no prior approval history now reverts, where it previously succeeded as a no-op

**Files:** `contracts/arc200.algo.ts:156-163` (`arc200_transferFrom`), `:255-262` (`_approve`);
`contracts/arc200_asa.algo.ts:217-224`, `:476-483` (same pattern).

`arc200_transferFrom(from, to, 0)` computes `spender_allowance = this._allowance(from, spender)`
(0, since no approval box exists for a stranger `spender`), asserts `0 >= 0` (passes), then calls
`this._approve(from, spender, new Uint256(0))` to "re-affirm" the now-zero allowance. Because the
`(from, spender)` approval box has never been created, this internal `_approve` call now hits the
same new guard that blocks external zero-value approvals to fresh addresses, and the whole
`transferFrom` call reverts — even though the caller supplied a value the contract could
otherwise have serviced trivially (a strict no-op transfer of 0 tokens with 0 allowance, which is
not a griefing input: it costs the caller a transaction fee and creates no box either way it
resolves).

**Reproduced**: a purpose-written LocalNet test (not committed, used only for this audit) called
`arc200TransferFrom({ from: testAccount, to: recipient, value: 0n })` as a fresh spender account
that had never been approved by `testAccount`. The call reverted with:
```
Runtime error when executing Arc200 (appId: 14808) ...: A zero-value approval cannot be used to
create a new approval box
```
Confirmed on both the base `Arc200` and `Arc200_ASA` contracts (same code path).

**Impact:** this is a compliance/UX regression, not a security issue — the contract fails safe
(reverts rather than creating a free box or misaccounting balances), and no ARC200-conformant
caller has a reason to invoke `transferFrom` with `value: 0` against an address it has never been
approved by. It is rated Low because it is a real, reproducible behavior change from pre-fix
semantics (methodology §3.3 requires self-/zero-value edge cases to "stay consistent"), it is
easy to hit by accident in integration code that loops over `transferFrom` calls including
zero-remainder cleanup calls, and the failure mode (revert) is at least safe rather than silently
wrong.

**Recommendation:** Either (a) special-case `_approve` to allow a zero-value write when called
internally to *record* a computed remaining allowance (as opposed to a caller directly requesting
a new approval to a box-less spender) — e.g., skip the guard when invoked from
`arc200_transferFrom`'s internal re-approve — or (b) short-circuit `arc200_transferFrom` to skip
the internal `_approve` call entirely when `value == 0` (no allowance change is needed for a
zero-value transfer), which also saves an unnecessary box read/write on every zero-value
`transferFrom`. Add a regression test for this exact case to both `arc200.e2e.spec.ts` and
`arc200_asa.e2e.spec.ts`.

---

## Informational

### I-1. Artifact/source reproducibility: current rebuild is byte-identical, unlike the prior audit's observation

Per methodology §3.9, `pnpm run build` (compile-contract + generate-client) was re-run from a
clean, unmodified checkout of `HEAD` (`76295da`). `git status`/`git diff --exit-code
contracts/artifacts` reported **zero changes** across all artifact types, including both
`Arc200Client.ts` and `Arc200_ASAClient.ts` (the prior report's M-2 had found the ASA client
differing by a stable one-line-number-off `source` field). This suggests the previously-observed
non-reproducibility was tied to a specific toolchain/environment state rather than an inherent
property of `algokit-client-generator`; it is noted here rather than dismissed, because M-1/M-2
above show the CI gate currently offers no protection either way (it cannot currently pass at
all due to the syntax bug, and even once fixed, its file-level exclusion would not have caught a
`byteCode` mismatch if the reproducibility issue recurs on a different CI runner/toolchain
version).

### I-2. All other prior Informational findings (no pause/upgrade mechanism, `metadataHash` typed-boundary enforcement, no periodic reserves invariant check, `decimals` coupling) re-confirmed unchanged

Re-checked against current `HEAD`: `contracts/arc200.arc56.json`/`Arc200_ASA.arc56.json` still
show no `UpdateApplication`/`DeleteApplication` actions in any method or in `bareActions`
(confirmed via direct inspection of the compiled ARC-56 spec), consistent with the contracts
being immutable by design. No new information changes the analysis in the 2026-07-14 report's
Informational section; see that report for the original write-ups.

---

## Not covered by this audit

- AVM/protocol-level bugs in the Algorand or Voi virtual machine itself.
- Internals of `@algorandfoundation/algorand-typescript`, `puya-ts`, `algokit-client-generator`,
  or the TEAL compiler, beyond the specific reproducibility spot-check in I-1.
- A full re-run of §3.11 (npm package supply chain) and §3.12 (repository hygiene) beyond the
  CI/artifact-gate items directly implicated by this pass's `c4bf370` diff — those sections were
  covered by the companion `2026-07-15-npm-package-audit.md` and were not re-audited line-by-line
  here per this pass's stated contract-focused scope (§3.1–§3.10).
- Economic/game-theoretic analysis of the ASA exchange rate mechanism beyond what the prior
  reports already covered; no changes to `_validateIncomingAxfer`/`_releaseAsa`/itxn fee handling
  were made in `c4bf370`, so those were re-read but not re-litigated in full here.
- Formal verification or fuzzing.
- Front-end or wallet integration code (not present in this repository).
- Fixes for M-1, M-2, and L-1 were **not** applied as part of this audit — this report only
  identifies and reproduces the issues, per the instructions' emphasis on independent, skeptical
  review rather than developer self-remediation.

This report reflects the contract and CI source at commit
`76295daf14a30e5273db60292a60166dcc81e55b` only. It reduces but does not eliminate risk, and
should not be treated as a guarantee of security for any deployment.
