# `arc200-client` npm Package Audit — Follow-Up

**Scope:** `package.json`, `src/index.ts`, `src/getArc200Client.ts`, `src/getArc200ASAClient.ts`,
build pipeline (`tsup.config.ts`), publish tarball contents, dependency supply chain,
`.github/workflows/ci.yml`, and repository hygiene around secrets/CI.
**Commit audited:** `7bfd5962bcae318cfae444effa27ef2ce9a0df44` (2026-07-15), package version
`1.1.10`
**Prior report:** [`2026-07-14-npm-package-audit.md`](./2026-07-14-npm-package-audit.md) — this
is an independent follow-up; every remediation claim in that report's table was re-verified by
actually running the relevant command, not by re-reading the claim.
**Methodology:** [`AI-AUDITS-INSTRUCTIONS.md`](./AI-AUDITS-INSTRUCTIONS.md)
**Auditor:** AI-assisted static + command-verified review (Claude, Sonnet 5).

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 0 |
| Medium | 1 |
| Low | 2 |
| Informational | 2 |

Every remediation the prior report claimed for the npm package was independently re-verified by
running the actual tooling (`pnpm why esbuild`, `pnpm audit --prod`, `npm pack --dry-run`,
`pnpm run lint`, `tsc --noEmit`) rather than trusting the report text, and all held up. The one
new issue of substance is that the CI artifact-diff gate this report's prior remediation added
is very likely to fail on its first real run for reasons unrelated to any actual defect — see
Medium below, which cross-references the companion
[contracts audit](./2026-07-15-contracts-audit.md)'s M-2.

## Verification of 2026-07-14 findings

| Finding | Verified status | Evidence |
|---|---|---|
| H-1 (ineffective `overrides`, vulnerable esbuild) | **Confirmed fixed** | `pnpm-workspace.yaml` now has `overrides: { esbuild: '>=0.28.1' }` and no stray `overrides`/`pnpm` key remains in `package.json`. Ran `pnpm why esbuild`: resolves to a single `esbuild@0.28.1` everywhere (via `tsup` and `vite`/`vitest`). Ran `pnpm audit --prod`: **no known vulnerabilities**. |
| M-1 (deps misclassified) | **Confirmed fixed** | `package.json` `dependencies` now lists exactly `@algorandfoundation/algokit-utils` and `algosdk`; all nine build/test/compiler packages moved to `devDependencies`. Ran `npm pack --dry-run`: tarball is 9 files (`LICENSE`, `README.md`, `package.json`, `dist/index.{js,mjs,d.ts,d.mts}`, two `.map` files) — unchanged shape from before, confirming the dependency reclassification didn't silently change what ships. |
| M-2 (no CI) | **Fixed, but not yet proven green — see new Medium below** | `.github/workflows/ci.yml` now exists and runs lint, typecheck, contract compile + artifact-diff check, LocalNet start, tests, package build, and tarball verification on every PR/push to `main`. `prepublishOnly` now runs `pnpm run test && pnpm run build-package`. No GitHub Actions run history was reachable during this audit (no authenticated `gh` access from this environment) to confirm the workflow has actually executed successfully; independently reproducing its steps locally surfaced a likely failure mode (see Medium). |
| M-3 (`allowBuilds` trust boundary) | **No change, re-confirmed as accepted awareness-only note** | `pnpm-workspace.yaml` still grants build scripts to exactly `esbuild` and `unrs-resolver`; no new packages added to the list. |
| L-1 (plaintext npm token) | **Still not fixed — requires maintainer action, unchanged** | `.npmrc` is still present on disk (confirmed via direct file listing), still absent from git (`git ls-files .npmrc` returns nothing, `git show HEAD:.npmrc` fails), still correctly `.gitignore`d. As before, this cannot be remediated by editing the repository; rotate the token in the npm registry when convenient. |
| L-2 (no LICENSE file) | **Confirmed fixed** | `LICENSE` (MIT) now present at repo root and is included in the published tarball. |
| L-3 (duplicate test runners) | **Confirmed fixed** | No `jest.config.js` on disk; no `jest`/`ts-jest`/`@jest/globals` in `package.json`. |
| "`pnpm run lint` was broken" | **Confirmed fixed** | Ran `pnpm run lint` directly: exits cleanly with no output (zero lint errors). Ran `tsc --noEmit -p tsconfig.json`: exits cleanly. |

---

## Medium

### M-1 (new). The CI artifact-diff gate this report's own prior remediation added is likely to fail on a clean build, for reasons unrelated to any real defect

**File:** `.github/workflows/ci.yml:43-46`

See the companion [contracts audit](./2026-07-15-contracts-audit.md)'s **M-2** for the full
reproduction: rerunning `pnpm run compile-contract && pnpm run generate-client` from an
unmodified, clean checkout regenerates `contracts/artifacts/Arc200_ASAClient.ts` with a
one-line difference from what's committed (source-map comment line numbers embedded in the
generated client's base64 blob are each off by one, reproducibly, across two independent
regeneration runs). Every other regenerated artifact — both `.teal` files, both `.arc56.json`
files, and `Arc200Client.ts` (the base contract's client) — matched the committed version
exactly.

Because this CI workflow's gate is a literal `git diff --exit-code --minimal
contracts/artifacts` after a full rebuild, and because this mismatch reproduces outside of CI
with no source change, there is a concrete risk the workflow added to close out the prior
report's M-2/I-4 will show red on its very first run — not because of a real drift between
source and artifacts, but because of a tooling non-determinism in how
`algokit generate client`/`algokit-client-generator` embeds source-map comments. A CI check
that is red by default on a correct build trains reviewers to ignore or bypass it, defeating
its purpose.

**Recommendation:** Before relying on this gate for real PRs, trigger it once (e.g. via a
no-op PR) and confirm it's actually green. If it reproduces the mismatch found here, either
regenerate and commit `Arc200_ASAClient.ts` fresh from the exact toolchain versions pinned in
`package.json`/`packageManager`, or narrow the diff check to the fields that matter (compiled
TEAL bytecode and the ABI/ARC-56 method signatures) rather than diffing the entire generated
`.ts` file, which embeds a redundant, apparently non-reproducible copy of the source map.

---

## Low

### L-1. One low-severity advisory in the dev/test dependency tree (not shipped)

Running `pnpm audit` (not `--prod`) surfaces one advisory: `elliptic <=6.6.1`
([GHSA-848j-6mx2-7j84](https://github.com/advisories/GHSA-848j-6mx2-7j84), risky cryptographic
primitive implementation), pulled in transitively via
`@algorandfoundation/algorand-typescript-testing`. This package is `devDependencies`-only (used
for contract unit testing, not imported by anything under `src/`), so it is not present in the
published tarball and does not affect consumers of `arc200-client` — `pnpm audit --prod`
correctly reports zero vulnerabilities, consistent with the H-1 verification above. It does
affect anyone running this repository's own test suite or CI. Rated Low rather than
Informational because it's an actionable, currently-open advisory, not just a note.

**Recommendation:** Update `@algorandfoundation/algorand-typescript-testing` when a version
pulling `elliptic@>=6.6.2` is available, or add a targeted `pnpm.overrides`/`overrides`-style
pin the same way `esbuild` was pinned in `pnpm-workspace.yaml` (H-1 above), being careful to use
the workspace-level key given this toolchain's earlier lesson that the `package.json`-level
field is silently ignored by the installed pnpm version.

### L-2 (carried forward, unchanged). Local `.npmrc` plaintext npm publish token

Unchanged from the prior report's L-1 — see that report for full detail. Still requires
maintainer action outside this repository (token rotation in the npm registry); still correctly
git-ignored and absent from git history.

---

## Informational

### I-1. Published tarball, source maps, and `packageManager` pin re-confirmed unchanged and still good practice

`npm pack --dry-run` output is identical in shape to the prior audit (`LICENSE` newly added per
L-2 fix, otherwise the same 8 `dist/`+`README.md`+`package.json` files as before). Source maps
are still shipped by design (`tsup.config.ts`'s `sourcemap: true`) and `packageManager:
"pnpm@11.10.0"` is still pinned. No action needed; see the prior report's I-1 through I-3 for
full write-ups, which remain accurate.

### I-2. GitHub Actions run history could not be verified from this environment

This audit's `gh` CLI access returned `401 Bad credentials`, so whether `.github/workflows/
ci.yml` has actually executed (successfully or not) on the actual GitHub repository could not
be confirmed from within this review. Combined with M-1 above, treat the CI gate as
**unvalidated** until someone with repository access confirms a real run is green.

---

## Not covered by this audit

- Full transitive dependency tree audit beyond `pnpm audit`'s current advisory database
  snapshot (results will drift as new CVEs are disclosed).
- npm registry account security (2FA status, who holds publish rights) — not observable from
  the repository.
- Whether `.github/workflows/ci.yml` actually passes on GitHub's runners — see I-2; this could
  not be checked from this environment and should be confirmed by whoever has repository
  access.
- Correctness of the generated `contracts/artifacts/*Client.ts` files against the ABI beyond
  the specific reproducibility issue raised in M-1 — see the companion
  [contracts audit](./2026-07-15-contracts-audit.md) for the underlying contract logic.

This report reflects the package at commit `7bfd5962bcae318cfae444effa27ef2ce9a0df44`, version
`1.1.10`, only. It reduces but does not eliminate risk, and should not be treated as a guarantee
of security.
