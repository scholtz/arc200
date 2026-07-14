# `arc200-client` npm Package Audit

**Scope:** `package.json`, `src/index.ts`, `src/getArc200Client.ts`, `src/getArc200ASAClient.ts`,
build pipeline (`tsup.config.ts`), publish tarball contents, dependency supply chain, and
repository hygiene around secrets/CI.
**Commit audited:** `85f4c0ba54935c353e5a52f5feddc6dcfcfca298` (2026-07-14), package version
`1.1.9`
**Methodology:** [`AI-AUDITS-INSTRUCTIONS.md`](./AI-AUDITS-INSTRUCTIONS.md)
**Auditor:** AI-assisted static review (Claude, Sonnet 5).

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 1 |
| Medium | 3 |
| Low | 3 |
| Informational | 3 |

No malicious code, no secrets in the tracked git history, and the published tarball is
reasonably minimal. The main issues are supply-chain hygiene: build/compiler tooling is
misclassified as runtime `dependencies` (bloating every consumer's install and trust surface),
a `pnpm.overrides`/`overrides` misconfiguration that silently fails to pin a vulnerable
transitive dependency, and a locally-present (not git-tracked) plaintext npm publish token.

## Remediation status (as of 2026-07-14, same-day)

All findings below were addressed in the working tree following this audit, except the one
that requires an action only the maintainer can take (L-1). This status has not yet been
re-audited independently.

| Finding | Status | Notes |
|---|---|---|
| H-1 (ineffective esbuild override) | **Fixed** | Moved to `pnpm-workspace.yaml`'s `overrides:` key (pnpm 10+/11 moved settings out of `package.json`'s `pnpm` field entirely — even the originally-recommended `"pnpm": { "overrides": {...} }` form is now silently ignored with a warning; confirmed via `pnpm install` and `pnpm why esbuild`, which now shows a single resolved `esbuild@0.28.1`). `pnpm audit --prod` now reports no known vulnerabilities. |
| M-1 (deps misclassified) | **Fixed** | `dependencies` now contains only `algosdk` and `@algorandfoundation/algokit-utils`; everything else moved to `devDependencies`. Re-verified with `npm pack --dry-run` — tarball contents unchanged (8 files, `dist/*` + `README.md` + `package.json`). |
| M-2 (no CI) | **Fixed** | Added `.github/workflows/ci.yml` (lint, typecheck, contract compile + artifact-diff check, LocalNet start, test, package build, tarball verification) and a `prepublishOnly` script running test + build. This workflow has not yet been validated by an actual CI run — validate on the first PR. |
| M-3 (allowBuilds trust boundary) | **No change** | Accepted as-is per the original finding; awareness-only. |
| L-1 (plaintext npm token) | **Not fixed — requires maintainer action** | This cannot be remediated from the repository. Rotate the token in the npm registry (revoke + regenerate, ideally switching to granular access tokens or Trusted Publishing/OIDC) at your convenience. |
| L-2 (no LICENSE file) | **Fixed** | Added `LICENSE` (MIT) at the repository root. |
| L-3 (duplicate test runners) | **Fixed** | Removed `jest`, `ts-jest`, `@jest/globals`, and `jest.config.js` (confirmed unused via `pnpm install` reinstall and a repo-wide search for `@jest/globals` imports). |
| Newly discovered: `pnpm run lint` was completely broken | **Fixed** | `eslint@10.7.0` requires flat config (`eslint.config.js`) and no longer reads `.eslintrc.js`; the repo also never listed `@typescript-eslint/parser`/`@typescript-eslint/eslint-plugin` as dependencies despite `.eslintrc.js` requiring them. Downgraded to `eslint@^8.57.1` (last major supporting `.eslintrc.js`, compatible with the existing `airbnb-base`/`airbnb-typescript` shareable configs) and added the missing `@typescript-eslint/*` packages. `pnpm run lint` now runs and passes cleanly (after `pnpm run fix` and a small `.eslintrc.js` override for the contracts' intentional ARC4-spec naming conventions — leading-underscore private helpers, snake_case identifiers mirroring the ARC200 spec, PascalCase `arc4.Struct` constructors). This means `pnpm run lint` in the new CI workflow (M-2) is meaningful rather than immediately red. |

---

## High

### H-1. `package.json` `overrides` field is silently ineffective under pnpm — vulnerable `esbuild` is actually installed

**File:** `package.json:73-75`

```json
"overrides": {
  "esbuild": "0.25.0"
}
```

This is npm/Yarn syntax. **pnpm ignores a top-level `overrides` field**; it only reads
overrides nested under a `"pnpm"` key (`"pnpm": { "overrides": { ... } }`). This repo's
`package.json` has no `"pnpm"` key at all (confirmed by grep), and the project is pinned to
`pnpm@11.10.0` via `packageManager`. The override is therefore a no-op.

Verified by inspecting the actual resolved dependency tree:

```
esbuild@0.27.7   <- via tsup (bundle-require) and ts-jest         [VULNERABLE]
esbuild@0.28.1   <- via vite/vitest                                [patched]
```

`esbuild@0.27.7` falls inside the vulnerable range (`>=0.27.3 <0.28.1`) for
[GHSA-g7r4-m6w7-qqqr](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr) — arbitrary file read
via the esbuild dev server on Windows — confirmed present via `pnpm audit --prod`. The
`package.json` author clearly intended to pin esbuild to a safe version and believes they have;
they have not. This is exactly the kind of false confidence that leads a maintainer to
deprioritize an otherwise-real, currently-open advisory.

Impact is currently capped at **local build tooling only** (esbuild ships inside `tsup`/
`ts-jest`, not in the published `dist/`), so this does not affect consumers of the npm package
today — but it does affect anyone building this repo locally or in CI, and the false sense of
being "pinned safe" is itself the risk.

**Recommendation:** Move the override to `"pnpm": { "overrides": { "esbuild": ">=0.28.1" } }`
(note: `0.25.0` is *older* than the vulnerable range's floor but is also older than several
other advisories that affected pre-0.25 esbuild — prefer pinning to the newest patched line,
`>=0.28.1`, rather than an older version chosen to dodge one specific CVE). Re-run
`pnpm why esbuild` after the change to confirm a single resolved version.

**Fix applied:** Discovered during remediation that `"pnpm": { "overrides": {...} }` in
`package.json` — the fix this report originally recommended — is *also* ignored by the
installed pnpm version (11.10.0); `pnpm install` prints `[WARN] The "pnpm" field in
package.json is no longer read by pnpm`. Recent pnpm versions moved this setting to
`pnpm-workspace.yaml`, where this repo already had an `allowBuilds` block. Added
`overrides: { esbuild: '>=0.28.1' }` there instead and removed the dead `overrides` key from
`package.json`. Confirmed fixed: `pnpm why esbuild` now shows a single resolved
`esbuild@0.28.1`, and `pnpm audit --prod` reports no known vulnerabilities.

---

## Medium

### M-1. Build/compiler-only packages are listed as runtime `dependencies`, not `devDependencies`

**File:** `package.json:45-56`

```json
"dependencies": {
  "@algorandfoundation/algokit-client-generator": "^6.0.1",
  "@algorandfoundation/algokit-utils": "^9.2.0",
  "@algorandfoundation/algokit-utils-debug": "^1.0.4",
  "@algorandfoundation/algorand-typescript": "^1.1.0",
  "@algorandfoundation/algorand-typescript-testing": "^1.1.0",
  "@algorandfoundation/puya-ts": "^1.1.0",
  "@rollup/plugin-typescript": "^12.3.0",
  "algosdk": "^3.6.0",
  "tsup": "^8.5.1",
  "vitest": "^4.1.10"
}
```

Tracing every import actually reachable from the published entry point
(`src/index.ts` → `getArc200Client.ts` / `getArc200ASAClient.ts` →
`contracts/artifacts/*Client.ts`), the only runtime dependencies of the shipped `dist/` are:

- `algosdk` (imported directly)
- `@algorandfoundation/algokit-utils` (imported directly, used for the `AlgorandClient` type)

`tsup.config.ts` uses the default `tsup` behavior of treating `node_modules` packages as
external (not bundled), so `dist/index.js`/`dist/index.mjs` `require`/`import` these two
packages at runtime — confirmed correct as `dependencies`.

Everything else in the list — `algokit-client-generator`, `algokit-utils-debug`,
`algorand-typescript`, `algorand-typescript-testing`, `puya-ts`, `@rollup/plugin-typescript`,
`tsup`, `vitest` — is used only to compile the Algorand contract, generate typed clients, run
tests, or bundle this package. None of them are imported by anything under `src/` or by the
generated client files. They are transitively installed into **every consumer's
`node_modules`** because npm/pnpm/yarn install all `dependencies` (not just what a bundler
happens to tree-shake), meaningfully increasing install size and the number of third-party
packages a downstream application implicitly trusts just to use this thin SDK wrapper.

**Recommendation:** Move all nine packages above (everything except `algosdk` and
`@algorandfoundation/algokit-utils`) to `devDependencies`. Re-run `npm pack --dry-run` and a
clean `npm install arc200-client` in a scratch project afterward to confirm the published
package still works with only the two real runtime deps present.

### M-2. No CI pipeline enforces build/test/lint before publish

**Files:** repo root (no `.github/workflows/` present), `.algokit.toml`

`.algokit.toml` defines `build`, `test`, `lint`, and `audit` commands, but there is no GitHub
Actions (or other CI) configuration in the repository to actually run them automatically on
pull requests or before `pnpm publish`. `publishCmd` in `package.json` is a bare
`pnpm publish` with no pre-publish gate wired in via `scripts` (no `prepublishOnly` running
tests/build/lint). A broken build, a failing test, or the H-1/M-1 issues above can currently
reach the npm registry without any automated check catching them first.

**Recommendation:** Add a CI workflow that runs `pnpm run test`, `pnpm run lint`, and
`pnpm run build-package` on every PR and on `main`, and add a `prepublishOnly` script that
re-runs build + test so a broken package cannot be published even by accident from a local
machine.

### M-3. `pnpm-workspace.yaml` grants build-script execution to `esbuild` and `unrs-resolver` without further scoping

**File:** `pnpm-workspace.yaml`

```yaml
allowBuilds:
  esbuild: true
  unrs-resolver: true
```

This is a reasonable, minimal use of pnpm's post-2024 default-deny for dependency install
scripts, and both packages are legitimate (this is not itself a vulnerability). It's flagged
as Medium only because it's a trust boundary: any future dependency bump that pulls in a
malicious or compromised version of `esbuild`/`unrs-resolver` would have its install script
run automatically, silently, on every `pnpm install`. No action required beyond awareness;
consider periodically re-confirming these two packages still need `allowBuilds` and that no
additional packages have been added to the list without review.

---

## Low

### L-1. Local `.npmrc` contains a plaintext, long-lived npm publish auth token

**File:** `.npmrc` (present on disk, **not** tracked by git — confirmed via
`git ls-files .npmrc` returning nothing and `git show HEAD:.npmrc` failing)

The working directory contains a `.npmrc` with a `//registry.npmjs.org/:_authToken=...` entry
holding a live-looking npm classic auth token in plaintext. It is correctly listed in
`.gitignore` and was not found in git history, so it has not leaked via the repository itself.
However:
- Anyone with filesystem access to this machine (or a compromised local tool/extension) can
  read it and publish arbitrary versions of `arc200-client` under this maintainer's identity —
  a classic npm supply-chain compromise vector.
- Local plaintext long-lived tokens are inherently harder to rotate/audit than scoped,
  short-lived, or CI-managed credentials.

**Recommendation:** Since this token has been read during this audit (and by any other tool
that has touched this working directory), treat it as exposed out of caution and rotate it
in the npm registry (`npm token revoke` / regenerate). Going forward, prefer npm's **granular
access tokens** scoped to this one package with a short expiry, or better, configure
**npm Trusted Publishing (OIDC)** from CI so no long-lived token needs to exist on disk at all.
This audit report does not reproduce the token value.

### L-2. `license: "MIT"` declared but no `LICENSE` file is present in the repository

**File:** `package.json:16`

No `LICENSE`/`LICENSE.md` file exists at the repository root. Consumers and compliance
tooling that scan for an actual license file (rather than trusting the `package.json` field)
may flag this package as unlicensed or ambiguous.

**Recommendation:** Add a `LICENSE` file with the MIT license text.

### L-3. Duplicate/parallel test runners (`jest` + `ts-jest` alongside `vitest`)

**Files:** `package.json` devDependencies, `jest.config.js`, `vitest.config.mts`

The project depends on both `jest`/`ts-jest`/`@jest/globals` and `vitest`, with a
`jest.config.js` present, but the only `test` script in `package.json`
(`"test": "vitest run --coverage"`) invokes vitest — Jest appears unused in practice. This
doubles the test-tooling dependency surface for no apparent benefit.

**Recommendation:** Confirm whether Jest is still needed for anything; if not, remove
`jest`, `ts-jest`, `@jest/globals`, `@tsconfig/node22` (if only used by Jest), and
`jest.config.js`.

---

## Informational

### I-1. Published tarball contents are otherwise minimal and reasonable
`npm pack --dry-run` shows the tarball contains only `README.md`, `package.json`, and
`dist/*` (JS, `.d.ts`, and source maps for both CJS and ESM) — no test files, no source
`.algo.ts` contracts, no `.env`/config files. This is good practice and should be preserved
as dependencies are reclassified per M-1.

### I-2. Source maps are shipped in the published package
`dist/index.js.map` / `dist/index.mjs.map` are included (`sourcemap: true` in
`tsup.config.ts`). This is a reasonable default for debuggability and is not a vulnerability,
but it does mean the original TypeScript source structure (file/variable names) is
recoverable by anyone installing the package. No action needed; noted for awareness only.

### I-3. `packageManager: "pnpm@11.10.0"` pin is good practice
Pinning the exact package manager version reduces "works on my machine" install
inconsistencies and is a positive finding, not an issue — recorded so future audits can
confirm whether it's kept up to date.

---

## Not covered by this audit

- Full transitive dependency tree audit beyond the two flagged advisories (`pnpm audit --prod`
  was run once at audit time; results are a snapshot and will drift as new CVEs are disclosed).
- npm registry account security (2FA status, who holds publish rights) — not observable from
  the repository.
- Correctness of the generated `contracts/artifacts/*Client.ts` files against the ABI — treated
  as generated/trusted output of `algokit-client-generator`; see the companion
  [contracts audit](./2026-07-14-contracts-audit.md) for the underlying contract logic these
  clients wrap.

This report reflects the package at commit `85f4c0ba54935c353e5a52f5feddc6dcfcfca298`,
version `1.1.9`, only. It reduces but does not eliminate risk, and should not be treated as a
guarantee of security.
