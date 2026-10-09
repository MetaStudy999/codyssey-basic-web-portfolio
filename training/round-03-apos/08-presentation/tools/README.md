# B1-1 SL02 → SL03 local hero typography repair v2

Purpose: fix mid-word Korean breaks in the actual local hero image before rebuilding SL03 source screenshots, without changing JS or claiming Golden slides approval.

- `apply_local_hero_typo_v2.py`: fail-closed repair of 8765 and 8766 CSS using `word-break: keep-all`, responsive type sizing and backup; updates the persistent local-sync overlay patch digest. Expected untouched repo HEAD `8059498326c4cbfb5ab35e0da7ca32a0e243538f`; no commit/push/merge.
- `hero_typography_qa.mjs`: Chromium geometry validates that each Korean token stays on one text line and the viewport has no horizontal overflow at 320/375/768/1024/1440; captures actual post-repair hero screenshots. External GitHub API is mocked, no Formspree requests.
- Before using, keep local 8765 + 8766 servers running. Fetch scripts from a pinned commit and verify SHA256 before running. Run the existing `bash ~/projects/b1-1-qa/run_qa.sh` afterward to repeat the 35 feature checks.
- First local isolated CSS smoke test: the old CSS split Korean words at all 5 widths, and proposed CSS split none at all 5 widths. Fixture is NOT the owner's real website.
- Fixture patch integration test verified backup, 8765/8766 CSS parity, permanent overlay checksum, and idempotency. The owner's local browser QA is PENDING until logs and screenshot package are returned.
- PR #20 remains Draft; this is a local repair helper, not a deployed B1-1 website nor SL03 Golden release. Next step after owner evidence: inspect source screenshots, repair SL03 and independent QA. SL04 remains blocked.
