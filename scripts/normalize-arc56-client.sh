#!/usr/bin/env bash
# git textconv filter for contracts/artifacts/*Client.ts (see .gitattributes).
#
# The embedded APP_SPEC.source.{approval,clear} fields are base64-encoded TEAL annotated with
# source line-number comments; algokit-client-generator has been observed to regenerate these
# non-reproducibly (line numbers shifting) across otherwise-identical toolchain runs, even
# when the compiled program (APP_SPEC.byteCode) and ABI are unchanged. Redacting only this
# field before diffing keeps the CI artifact-drift gate meaningful for the parts that actually
# matter to consumers (byteCode, ABI, sourceInfo/pc error mappings) without flaking on cosmetic
# line-number noise in a field nothing reads at runtime.
sed -E 's/"source":\{"approval":"[^"]*","clear":"[^"]*"\}/"source":"<omitted-nondeterministic-linemap>"/'
