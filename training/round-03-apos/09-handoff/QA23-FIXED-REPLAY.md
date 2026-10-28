# QA23 Fixed Browser Replay Candidate (not an independent PASS)

This branch adds one **fixed read-only** GitHub-hosted QA workflow for PR #19/#21/#22.
It checks each actual PR branch against a pinned immutable SHA, performs a detached checkout and separate Playwright 1.56.1 Chromium checks, collects full-page 320/375/768/1024/1440 screenshots and SHA256, AX summary, Console/Network errors, negative project links, fork filters, forms, theme, images and legacy.

No arbitrary shell input, self-hosted runner, credentials, Formspree POST, source mutation, merge or production deployment. The harness author remains MAKER; separate QA_SEC must inspect actual test implementation, complete logs/screenshots and independent conclusions before asserting each PR PASS. GitHub CI green does not itself grant QA authority.

Tracking: https://github.com/MetaStudy999/codyssey-basic-web-portfolio/issues/24
