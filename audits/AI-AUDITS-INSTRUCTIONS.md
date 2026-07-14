# AI Audit Instructions

Purpose: this document tells an AI agent (or a human auditor) how to run an audit of this
repository — the Algorand/Voi smart contracts under `contracts/` and the published npm
package `arc200-client` under `src/` — to the standard of a paid, professional smart-contract
audit firm (e.g. Trail of Bits, OpenZeppelin, CertiK, Sigma Prime). A ~$20,000 engagement of
this kind is expected to produce independent, skeptical, evidence-based findings — not a
restatement of the README, and not a rubber stamp.

Every audit performed against these instructions must be saved as a new, dated file in this
folder (see "Output" below) rather than overwriting prior audits. Audits are a historical
record — diffs between them show whether the project is getting safer over time.

## 1. Ground rules

- **Read the code, not the docs.** Comments and READMEs describe intent, not behavior. Verify
  every claim against the actual TypeScript/Puya source in `contracts/*.algo.ts` and the
  compiled TEAL in `contracts/artifacts/*.teal` where behavior is ambiguous.
- **No blind trust in dependencies.** Treat `@algorandfoundation/*` packages, `algosdk`, and
  build tooling as untrusted supply chain until their versions and provenance are checked.
- **Assume adversarial callers.** Every `@arc4.abimethod()` is a public entry point callable by
  any account, in any transaction group, with attacker-chosen inputs, atomic-group
  composition, and repeated calls. Assume the attacker can also be the box-storage payer,
  the deployer's sibling account, or a bot front-running the mempool.
- **Reproduce, don't assume.** Where feasible, write or run a test (vitest/AlgoKit
  `algorandFixture`, LocalNet) that demonstrates a finding before reporting it. Findings that
  cannot be reproduced or backed by a concrete code citation should be labeled
  "Informational / Unverified" rather than a confirmed severity.
- **No secrets in output.** If you encounter a credential, private key, mnemonic, or API token
  anywhere in the repo (tracked or untracked), do NOT reproduce its value in any audit
  artifact. Flag its existence, location, and recommended remediation (rotate + purge) only.

## 2. Scope

1. **Smart contracts** (primary scope, highest severity ceiling)
   - `contracts/arc200.algo.ts` — base ARC200 fungible token contract
   - `contracts/arc200_asa.algo.ts` — ARC200 contract with 1:1 ASA exchange/wrapping
   - Compiled artifacts in `contracts/artifacts/` (spot-check TEAL matches source intent;
     do not assume the compiler introduced no bugs)
   - `contracts/deploy-config.ts` and any deployment/bootstrap scripts (funding order,
     one-time-init guards, creator-only gates)
2. **npm package** (`arc200-client` on npm)
   - `src/index.ts`, `src/getArc200Client.ts`, `src/getArc200ASAClient.ts`
   - Generated clients in `contracts/artifacts/*Client.ts` (treat as generated code — check
     for hand-edits, not full line-by-line review)
   - `package.json` (dependency classification, scripts, publish config, files allowlist)
   - Build pipeline (`tsup.config.ts`, `tsconfig.json`) and what actually ships in the tarball
3. **Repository hygiene / operational security**
   - Secrets, tokens, `.env`/`.npmrc` files, CI/CD configuration, `.gitignore` correctness
   - Test coverage — what is and is not exercised by `contracts/*.e2e.spec.ts`

Out of scope: Algorand/AVM protocol-level bugs, `algosdk`/`algokit-utils` internals (note
version and CVE status only), and front-end/dApp integrations that are not part of this repo.

## 3. Methodology checklist

Work through every item below for each in-scope contract method. Do not skip items because a
prior audit covered them — re-verify against current `HEAD`.

### 3.1 Access control
- [ ] Every state-mutating method: who can call it? Is that the intended set of callers?
- [ ] Is initialization (`bootstrap`) callable exactly once, by exactly the creator, and is the
      guard (`hasValue`/`exists` check) actually sufficient — could it be bypassed by calling
      before global state is set, via a different code path, or across an update?
- [ ] Are there any privileged roles (admin, pauser, upgrader)? If none exist, confirm that's
      intentional (immutable-by-design) and note the tradeoff (no incident response lever) as
      an informational finding rather than a bug.

### 3.2 Arithmetic & unit correctness
- [ ] Every subtraction on a balance/allowance: is underflow prevented by a prior `assert`?
      Confirm the assert uses the correct operand order and comparison direction.
- [ ] Every addition: can it overflow the type's range (`Uint256`, `Uint64`)? For `Uint256`
      balances this is astronomically unlikely but total supply + repeated transfers should
      still be reasoned about explicitly.
- [ ] Any place a `Uint256` is narrowed to `Uint64` (`.asUint64()`) or vice versa: what happens
      if the value doesn't fit? Does truncation silently corrupt accounting (e.g. ARC200
      total supply vs. wrapped ASA total)?
- [ ] Decimals: is the token's `decimals` value used consistently, and does it match the
      wrapped ASA's decimals in the ASA variant?

### 3.3 ARC200 standard compliance
- [ ] `arc200_transfer`, `arc200_transferFrom`, `arc200_approve`, `arc200_allowance`,
      `arc200_balanceOf`, `arc200_totalSupply`, `arc200_name`, `arc200_symbol`,
      `arc200_decimals` all match the ARC200 spec signatures and semantics.
- [ ] `Transfer`/`Approval`-equivalent events are emitted on every state change that the
      standard (and downstream indexers) expect them for, including zero-value transfers and
      mint/burn (transfers to/from the zero address).
- [ ] Approve/transferFrom race condition (classic ERC20-style front-running: changing an
      approval from N to M lets a spender front-run and spend N+M) — is it present, and is it
      a real risk given this ecosystem's mempool/ordering guarantees?
- [ ] Self-transfer and self-approve edge cases (`from == to`, `owner == spender`): do balances
      stay consistent and are events still emitted per spec?

### 3.4 Box storage economics (Algorand-specific — do not skip)
- [ ] Every method that can create a new box (`BoxMap` write to a previously-nonexistent key):
      who pays the MBR (minimum balance requirement) for that box? Is it the app account, and
      if so, can an unauthenticated/uninvolved caller force the app to create boxes for
      arbitrary addresses at zero cost to themselves (a griefing/DoS vector that drains the
      app account and eventually breaks legitimate transfers)?
- [ ] Is there any explicit opt-in / pre-payment transaction required before a box-creating
      call, and is it enforced in the contract (not just documented)?
- [ ] Box key derivation (e.g. `sha256(owner || spender)` for approvals): is it collision-free
      and does it commit to both parties unambiguously (no ambiguity between `(A,B)` and a
      crafted `(A',B')` producing the same key)?

### 3.5 Inner transactions & the ASA exchange path
- [ ] For every `itxn` submission: is `fee` handled correctly (fee pooling from the outer
      group vs. hard-coded `fee: 0` assuming the caller covers it)? What happens if the group
      doesn't pool enough fee — clean revert or partial state change?
- [ ] `arc200_redeem` / `deposit`: is the "previous transaction in the group" assumption
      (`Txn.groupIndex - 1`) safe? What happens if `Txn.groupIndex == 0` (underflow)? Can a
      malicious group structure (e.g. the ASA transfer at a different offset, or a decoy ASA
      transfer followed by unrelated transactions) bypass the intended pairing?
- [ ] Is the ASA transfer's `assetReceiver`, `sender`, `xferAsset`, and amount fully validated
      before minting/releasing ARC200, with no path to redeem more ARC200 than ASA actually
      received?
- [ ] `arc200_swapBack` / `withdraw`: can the contract be drained of ASA if ARC200 accounting
      and ASA holdings ever diverge (e.g. via the `Uint256`→`Uint64` truncation above, or via
      direct ASA transfers to the app that bypass `deposit`)?
- [ ] Invariant check: does `sum(ARC200 balances)` always equal `totalSupply`, and does
      `ASA held by app` always equal `ARC200 balance of the app account` for the wrapped
      portion? Identify any code path that can break either invariant.

### 3.6 Denial of service / griefing
- [ ] Can any method be called repeatedly by an attacker to exhaust app account balance,
      inflate box storage indefinitely, or brick future legitimate calls?
- [ ] Are there unbounded loops or growth tied to attacker-controlled input?

### 3.7 Front-running / MEV
- [ ] Any method whose outcome depends on transaction ordering within a block in a way that
      disadvantages a legitimate user (beyond the standard ERC20 approve race noted above)?

### 3.8 Upgradability & immutability
- [ ] Does the contract support updates/deletion? If yes, who can trigger them and what are
      the consequences for holders? If no, confirm this is documented as a deliberate
      trust-minimization choice.

### 3.9 Compiled artifact sanity
- [ ] Spot check that `contracts/artifacts/*.teal` and `*.arc56.json` correspond to the current
      `.algo.ts` source (matching method selectors, no stale artifacts checked in from a prior
      version that could mislead integrators).

### 3.10 Test coverage
- [ ] Enumerate every public ABI method and mark whether an automated test exercises: the
      happy path, the primary revert condition, and at least one adversarial/edge case.
- [ ] Flag any method with zero test coverage as a finding, not just a note — untested
      transfer/approval/exchange logic in a token contract handling real value is a process
      risk on par with a code bug.
- [ ] Distinguish tests that exercise local contract logic (LocalNet `algorandFixture`) from
      tests that only make read-only calls against MainNet app IDs (the latter test the SDK
      decoding path, not contract correctness, and should not be counted as coverage of
      state-mutating methods).

### 3.11 npm package supply chain
- [ ] `package.json` `dependencies` vs `devDependencies`: does every entry in `dependencies`
      actually get imported by the code that ships in `dist/` (trace every import in
      `src/index.ts` and its transitive local imports)? Packages only used for compiling the
      contract, testing, or building (e.g. Puya/AlgoKit compiler packages, `tsup`, `vitest`)
      must not be `dependencies` of a published client library — they bloat every consumer's
      install and expand the trusted supply chain unnecessarily.
- [ ] Dependency version ranges (`^`, `~`, pinned): assess exposure to an auto-upgraded
      transitive dependency shipping malicious code (a real, recurring npm attack pattern).
- [ ] `npm pack --dry-run` (or equivalent): confirm the published tarball contains only what's
      intended (`files` allowlist in `package.json`) and no source maps that leak internal
      paths unnecessarily, test files, or secrets.
- [ ] Publish authentication: is a long-lived npm token stored in plaintext anywhere on disk
      (`.npmrc`)? Is it git-ignored? Recommend scoped, rotated, CI-managed tokens
      (npm granular access tokens / OIDC trusted publishing) over long-lived local tokens
      regardless of git-tracking status.
- [ ] `postinstall`/`prepare`/other lifecycle scripts: none should execute untrusted or
      network-fetched code.

### 3.12 Repository hygiene
- [ ] `.gitignore` actually excludes everything sensitive that exists locally (`.npmrc`,
      `.env*`, mnemonics, key files) — verify by checking `git ls-files` against what's on
      disk, not just reading the `.gitignore` patterns.
- [ ] CI/CD: are tests, lint, and build enforced on every PR before merge? Absence of CI is a
      process-risk finding, not just a nice-to-have.

## 4. Severity classification

Use this scale consistently (aligned with common industry practice):

| Severity | Definition |
|---|---|
| **Critical** | Direct, practical loss or theft of funds, minting of unbacked tokens, or total contract compromise, exploitable by any attacker with no special access. |
| **High** | Loss of funds or broken core invariants under realistic but more constrained conditions (specific timing, moderate cost, or a privileged-but-plausible attacker position). |
| **Medium** | Denial of service, griefing, or standard-compliance breaks that degrade the system or cost users/operators real value but don't directly steal funds. |
| **Low** | Best-practice deviations, defense-in-depth gaps, or edge cases with limited practical impact. |
| **Informational** | Code quality, documentation, test coverage gaps, or design tradeoffs worth recording but not a vulnerability. |

Every finding must include: a one-line title, severity, affected file(s)/line(s), a concrete
description of the failure scenario (inputs/state → bad outcome), and a specific,
actionable recommendation. Do not report a finding without a citation to the exact code it
concerns.

## 5. Output

- Save each audit report as `audits/YYYY-MM-DD-<scope>-audit.md` (e.g.
  `audits/2026-07-14-contracts-audit.md`, `audits/2026-07-14-npm-package-audit.md`). Never
  overwrite a previous dated report.
- Each report must open with: scope, commit hash audited, methodology reference (this file),
  and a summary table of findings by severity.
- Close each report with an explicit statement of what was NOT covered (protocol-level AVM
  bugs, dependency internals, anything out of scope per section 2) so readers don't mistake
  silence for a clean bill of health on those items.
- This is not a guarantee of security. State plainly, as professional audit firms do, that
  the audit reduces but does not eliminate risk, and that it reflects the code at the audited
  commit only.
