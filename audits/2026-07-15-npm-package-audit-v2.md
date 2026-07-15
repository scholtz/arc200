# `arc200-client` npm Package Audit — Second Follow-Up (v2)

**Scope:** `package.json`, `src/index.ts`, `src/getArc200Client.ts`, `src/getArc200ASAClient.ts`,
build pipeline (`tsup.config.ts`), publish tarball contents, dependency supply chain,
`.github/workflows/ci.yml`, generated `contracts/artifacts/*Client.ts` as shipped-code inputs to
`src/index.ts`, and repository hygiene around secrets/CI/committed build output.
**Commit audited:** `76295daf14a30e5273db60292a60166dcc81e55b` (2026-07-15), package version
`1.1.11`.
**Prior reports:** [`2026-07-14-npm-package-audit.md`](./2026-07-14-npm-package-audit.md),
[`2026-07-15-npm-package-audit.md`](./2026-07-15-npm-package-audit.md) (audited `7bfd596`,
v1.1.10). This is an independent second follow-up for the same calendar day, hence the `-v2`
suffix; it does not overwrite either prior report.
**Methodology:** [`AI-AUDITS-INSTRUCTIONS.md`](./AI-AUDITS-INSTRUCTIONS.md)
**Auditor:** AI-assisted static + command-verified review (Claude, Sonnet 5). Every claim below
was independently reproduced in this environment (algokit 2.10.2, puya 5.3.2, pnpm 11.10.0,
Node 22) by actually running the commands, not by reading prior report text or the companion
contracts-audit summary handed to this review.

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 0 |
| Medium | 1 |
| Low | 2 |
| Informational | 3 |

The single change since the prior npm-package audit (`7bfd596` → `76295da`) that isn't a pure
version bump is commit `c4bf370`, which added an exclusion of `contracts/artifacts/*Client.ts`
from the CI artifact-drift diff gate. That exclusion is not just overbroad — the gate line
itself is **syntactically broken and fails unconditionally, with no relation to any real
drift**, confirmed by direct reproduction below. This is the headline finding (Medium, M-1). A
second, previously unflagged issue was found independently in this pass: the published `dist/`
build output is tracked in git despite being listed in `.gitignore`, and a fresh rebuild does not
reproduce it byte-for-byte (Low, L-1). All dependency-classification, tarball-content, and
lint/typecheck/`pnpm audit` results from the prior two reports were re-verified and continue to
hold.

---

## Independent verification of the CI artifact-gate claim (this review's primary task)

**File:** `.github/workflows/ci.yml:50-52`

```yaml
run: |
  git add -N contracts/artifacts
  git diff --exit-code --minimal contracts/artifacts -- ':!contracts/artifacts/*Client.ts'
```

Reproduced directly, twice, on a clean checkout at HEAD (`git status --porcelain` showed no
pending changes to `contracts/artifacts` beforehand):

```
$ git add -N contracts/artifacts
$ git diff --exit-code --minimal contracts/artifacts -- ':!contracts/artifacts/*Client.ts'
fatal: bad revision 'contracts/artifacts'
$ echo $?
128
```

**Root cause confirmed:** in `git diff`, a bare path argument that appears *before* `--` is
parsed as a candidate revision/tree-ish, not a pathspec — only arguments after `--` are
guaranteed to be treated as paths. Because `contracts/artifacts` is not a valid revision, git
fails with `fatal: bad revision 'contracts/artifacts'` (exit 128) regardless of whether any
artifact actually changed. Confirmed the fix by moving the path after `--` on the same tree:

```
$ git diff --exit-code --minimal -- contracts/artifacts ':!contracts/artifacts/*Client.ts'
$ echo $?
0
```

This exits cleanly. **This is not a flaky/nondeterministic failure — it is a deterministic
syntax defect that fails on every single invocation, including on a byte-identical rebuild with
zero real drift.** Since this step runs after `pnpm run build` in the same CI job (`ci.yml:40-41`)
and a failing step fails the job, this means **the CI workflow as currently written fails on
every push to `main` and every pull request**, unconditionally, at this step — never reaching
the LocalNet/test/package-build/tarball-verification steps that follow it in the job. The
gate that was supposed to catch real artifact drift catches nothing and blocks nothing
usefully; it just turns CI permanently red, which trains reviewers to ignore CI status
entirely (the exact alarm-fatigue failure mode the prior report's M-1 write-up warned was a
risk — this review upgrades that from "likely" to "reproduced").

**Additional reproduction attempted — actual artifact rebuild:** Ran `pnpm run build` (i.e.
`algokit compile ts contracts --output-source-map --out-dir artifacts && algokit generate client
...`) from a clean tree and diffed the result. In this environment, unlike the non-determinism
the companion contracts-audit reported for a different toolchain run, **all of
`contracts/artifacts/` — both `.teal` files, both `.arc56.json`/`.arc32.json` files, both
`.puya.map` files, and both `*Client.ts` files — rebuilt byte-identical to the committed
version** (`md5sum` match confirmed on both `Arc200Client.ts` and `Arc200_ASAClient.ts`; a
transient `git status` "M" on `Arc200Client.ts` was traced to this checkout's `core.autocrlf =
true` line-ending normalization on `git add -N`, not a content difference — `git diff` against
it after the same `add -N` showed zero bytes changed). This does not contradict the companion
contracts-audit's finding of a one-line difference reproduced elsewhere; it means the
non-determinism, if real, is sensitive to exact toolchain/OS environment and was not observed in
*this* run. **It does not matter for this finding either way**: the CI line is broken by syntax
alone, independent of whether the artifacts are actually reproducible.

**Verdict on the exclusion's overbreadth (also re-confirmed independently):** `src/index.ts:1,7`
imports `Arc200Client`/`Arc200Factory` and `export *`s from
`../contracts/artifacts/Arc200Client` and `../contracts/artifacts/Arc200_ASAClient` directly;
`src/getArc200Client.ts` and `src/getArc200ASAClient.ts` also import the generated client
classes directly. Both generated files were confirmed (by direct string extraction) to embed an
`APP_SPEC` constant containing a `"byteCode":{"approval": "...", ...}` field with the actual
base64-encoded compiled TEAL bytecode used by `AppFactory`/`AppClient.deploy()` at runtime —
this is exactly the deployment-critical payload, not merely cosmetic source-map noise, and it
ships in the npm tarball via `tsup`'s bundling of `src/index.ts` into `dist/index.js` /
`dist/index.mjs` (confirmed present in `npm pack --dry-run` output below). Excluding
`*Client.ts` from the diff gate therefore excludes the one artifact category most directly
tied to what a consumer of `arc200-client` actually deploys.

**Recommendation (unchanged from and reinforcing the companion contracts-audit's M-2):** Fix the
pathspec placement (`git diff --exit-code --minimal -- contracts/artifacts
':!contracts/artifacts/*Client.ts'`, or drop `git add -N` entirely and use `git diff --stat
--exit-code -- contracts/artifacts` plus a separate untracked-file check) before relying on this
gate at all, then decide independently whether excluding `*Client.ts` is still desired now that
it's understood to contain live deployment bytecode — if kept, narrow the exclusion to only the
embedded source-map/`sourceInfo` fields (e.g. via a filtering script) rather than the whole file,
so a change to the embedded `byteCode` is still caught.

---

## Medium

### M-1. CI artifact-diff gate is unconditionally broken (see full reproduction above)

**File:** `.github/workflows/ci.yml:50-52`. Severity is Medium under the "process
risk"/"degrades the system" band: no direct fund loss, but a CI gate that always fails
regardless of correctness is worse than no gate — it either blocks all merges (if branch
protection requires this job) or, more likely given development has continued past `c4bf370`
without apparent process disruption, is silently not enforced as a required check, meaning the
supply-chain-integrity property this gate was written to guarantee (compiled artifacts match
source) is currently **not actually verified by CI at all**, contrary to what the workflow's
presence implies to anyone reading it. See full analysis above.

---

## Low

### L-1 (new). Committed `dist/` build output contradicts `.gitignore` and does not rebuild byte-identical

**Files:** `.gitignore:3` (`dist/`), `dist/index.js`, `dist/index.js.map`, `dist/index.mjs.map`,
`git log --oneline -- dist/` (tracked since the initial commit `5cc5d98`), commit `76295da`
(diff includes `dist/index.js`, `dist/index.js.map`, `dist/index.mjs`, `dist/index.mjs.map`
alongside the `package.json` version bump).

`.gitignore` lists `dist/` as ignored, and `git check-ignore -v dist/index.js` confirms the
pattern matches (`.gitignore:3:dist/	dist/index.js`) — a freshly created untracked file under
`dist/` is correctly ignored. Yet `git ls-files dist/` shows six files under `dist/` are tracked
and have been since the repository's first commit, and every version-bump commit (including the
audited `76295da`) re-commits changed `dist/*.js`/`.mjs`/`.map` content. This is a
self-contradictory state: the ignore rule signals "build output, do not track," while the
history shows it has always been manually tracked and updated.

Rebuilding locally (`pnpm run build-package`) from the exact committed source reproduced
`dist/index.js`, `dist/index.mjs`, `dist/index.d.ts`, and `dist/index.d.mts` byte-identical to
the committed versions (confirmed via `git diff --exit-code`, zero output) — the actual
executable code is stable. However `dist/index.js.map` and `dist/index.mjs.map` did **not**
reproduce byte-identical; the diff showed a one-line JSON source-map payload difference.

This has no runtime security impact by itself (the JS/MJS payload is reproducible; only the
source map, used for debugging stack traces, drifts), and `prepublishOnly` (`pnpm run test &&
pnpm run build-package`) rebuilds `dist/` fresh immediately before every real `npm publish`, so
the committed copy in git is never actually what gets published — it is a stale, unused,
partially-irreproducible artifact sitting in git history that contradicts its own `.gitignore`
entry. No CI step diffs committed `dist/` against a fresh build (`ci.yml` has no `dist`
reference at all outside "Build npm package" and "Verify published tarball contents", both of
which operate on the freshly-built copy, not the committed one). This creates two minor risks:
(1) a reviewer scanning `git diff` on a version-bump PR sees `dist/*` churn that looks like
reviewable shipped-code change but is actually unverifiable build noise, training reviewers to
skim past it; (2) the source-map drift means a bug reporter's stack trace against a published
version could point to slightly wrong source lines if debugging against the git-committed map
rather than the actually-published tarball's map.

**Recommendation:** Either remove `dist/` from git tracking entirely (`git rm -r --cached dist`)
and rely solely on `prepublishOnly`/CI's "Build npm package" + "Verify published tarball
contents" steps to produce and validate what ships (consistent with the existing `.gitignore`
entry), or, if committing build output is intentional for some reason (e.g. allowing `git
diff`-based review of generated-code changes), remove the `dist/` line from `.gitignore` so the
two don't contradict each other, and add a CI check that fails if a fresh `pnpm run
build-package` produces a diff against the committed copy (mirroring the intent, if not the
current broken implementation, of the `contracts/artifacts` gate).

### L-2 (carried forward, unchanged). Local `.npmrc` plaintext npm publish token

Re-confirmed present on disk, absent from git (`git ls-files .npmrc` returns nothing, `git show
HEAD:.npmrc` fails with "exists on disk, but not in 'HEAD'"), and correctly matched by
`.gitignore` (`git check-ignore -v` confirms `.gitignore:5:.npmrc`). No secret value is
reproduced here per the ground rules. Unchanged from the prior two reports — still requires
maintainer action (token rotation in the npm registry) outside this repository; not a code
defect.

### L-3 (carried forward, unchanged). `elliptic <=6.6.1` advisory in dev/test dependency tree only

Re-ran `pnpm audit` (not `--prod`): the same `GHSA-848j-6mx2-7j84` advisory via
`@algorandfoundation/algorand-typescript-testing` (devDependency only) is still open. Re-ran
`pnpm audit --prod`: **no known vulnerabilities**, confirming this does not affect published
package consumers. Unchanged from the prior report's L-1.

---

## Informational

### I-1. Dependency classification, version ranges, and tarball contents re-confirmed correct

Traced every import transitively from `src/index.ts`: `Arc200Client`/`Arc200Factory` and
`Arc200AsaClient` from the two generated `contracts/artifacts/*Client.ts` files, which in turn
import only from `@algorandfoundation/algokit-utils/types/*` submodules and `algosdk`.
`getArc200Client.ts`/`getArc200ASAClient.ts` import the same two packages. `package.json`'s
`dependencies` list contains exactly `@algorandfoundation/algokit-utils` (`^9.2.0`) and
`algosdk` (`^3.6.0`) — no compiler/build/test-only package (`@algorandfoundation/puya-ts`,
`@algorandfoundation/algokit-client-generator`, `tsup`, `vitest`, `eslint`, etc.) is misclassified
as a runtime dependency; all such packages are correctly in `devDependencies`. Both runtime
dependencies use caret (`^`) ranges, permitting automatic minor/patch upgrades without a
`package.json` change — standard practice, but note this remains the project's primary
auto-upgrade supply-chain exposure surface (an upstream `algosdk` or `algokit-utils` patch
release could introduce malicious code that gets pulled in on a routine `pnpm install` without
any diff in this repo to review); no pinning or lockfile-only-install enforcement beyond
`pnpm-lock.yaml` + `--frozen-lockfile` in CI (which does mitigate this for the *repo's own* CI
runs, though not for downstream consumers of `arc200-client` who resolve `^` ranges themselves).

`npm pack --dry-run` at the audited commit reports 9 files — `LICENSE`, `README.md`,
`package.json`, and six `dist/` files (`index.{js,mjs,d.ts,d.mts}` plus two `.map` files) — an
unchanged shape from both prior reports, package size 211.4 kB / unpacked 1.7 MB. No test files,
no source files outside `dist/`, no `.env`/`.npmrc`/secrets are present in the tarball.

### I-2. Lint, typecheck, and lifecycle scripts re-confirmed clean

`pnpm run lint` (`eslint contracts`) exits 0 with no output. `tsc --noEmit -p tsconfig.json`
exits 0. `package.json`'s only lifecycle script is `prepublishOnly: "pnpm run test && pnpm run
build-package"` — both are local, repo-defined scripts; no `postinstall`/`preinstall`/`prepare`
script exists, and neither invoked script fetches or executes code from the network.

### I-3. GitHub Actions run history and branch protection still unverifiable from this environment

As in the prior report, `gh auth status` / `gh api` / `gh run list` all fail with `401 Bad
credentials` from this environment, so it remains impossible to confirm from here whether
`.github/workflows/ci.yml` has ever produced a green run, or whether any branch-protection rule
actually requires it to pass before merge. Combined with M-1 above (a deterministic, always-red
step in that workflow), this is worth escalating: if the workflow has never gone green since
`c4bf370`, either the merges since then bypassed a required check, or the check was never made
required in branch protection in the first place — both are process gaps a maintainer with
repository access should check directly.

---

## Not covered by this audit

- Full transitive dependency tree audit beyond `pnpm audit`'s current advisory database
  snapshot (drifts as new CVEs are disclosed).
- npm registry account security (2FA status, who holds publish rights, whether npm granular
  tokens / OIDC trusted publishing are in use) — not observable from the repository.
- Whether `.github/workflows/ci.yml` has actually produced any run (green or red) on GitHub's
  infrastructure, and whether branch protection enforces it — see I-3; requires repository
  access this environment does not have.
- Underlying contract-logic correctness of `contracts/*.algo.ts` and the compiled TEAL/ARC-56 —
  see the companion [contracts audit](./2026-07-15-contracts-audit-v2.md), which is the primary
  scope for that material; this report only examines the generated `*Client.ts` files as
  shipped-code inputs to the npm package.
- Root-causing *why* this environment's rebuild of `contracts/artifacts/*Client.ts` reproduced
  byte-identical while the companion contracts-audit's environment observed a one-line
  difference elsewhere — both observations are reported as independently reproduced; resolving
  the discrepancy would require comparing exact toolchain/OS versions across both audit
  environments, which is outside this report's scope.

This report reflects the package at commit `76295daf14a30e5273db60292a60166dcc81e55b`, version
`1.1.11`, only. It reduces but does not eliminate risk, and should not be treated as a guarantee
of security.
