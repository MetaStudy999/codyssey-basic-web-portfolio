# Round 03 증빙 색인 — 단일 출처 유지

Round 03 안에서 실제 검증 파일은 `../evidence/`를 기준으로 한다. 이 `06-evidence/`는 표준 번호의 탐색 인덱스이며, 스크린샷·보고서를 중복 복사하지 않는다.

- `../evidence/runtime-summary.json` — Chromium 실행 요약
- `../evidence/public-runtime-summary.json` — 공개 서비스 실행 요약
- `../evidence/VISUAL-REVIEW.md` — 독립 화면 검토
- `../evidence/EVIDENCE-MAP.md` — 실제 후보 SHA와 증빙 연계
- APOS Actions Run `37582457341` Artifact `11465355693` — 4종 스크린샷, 로그, Playwright Trace
- Public Run `37774449939` — FINAL CLEAR 병합 SHA의 공개 실행 확인

Artifact `11465355693`는 GitHub에서 유한 기간 보관된다. 링크가 만료되기 전에 Owner 승인된 장기 보존 정책과 실파일 무결성 검증을 별도 작업으로 마련해야 한다. **복사/이전은 이번 폴더 설정 단계에서 수행하지 않았다.**

근거 없는 `PASS` 또는 Round 02 스크린샷 대체 금지.


## 실제 증거의 보존 점검 (CHECK_07)
- 증빙 원본은 ../evidence/이며 임의 복사 또는 타 Round 대체 금지.
- 원격 Artifact 존재, 원본 파일, SHA-256, 만료시각은 각각 따로 점검한다.
- 2026-10-08 기준 Chromium Artifact 11465355693는 2026-11-06T06:39:33Z 만료 예정이었다.
- 실제 Binary 파일의 독립 digest 검증은 아직 수행하지 않았으므로 BINARY_INTEGRITY_NOT_CHECKED로 둔다.
- 장기 보존 이전은 이 PR에서 수행하지 않으며 별도 승인·보존 규정이 필요하다.


## 원본 증빙 보존·재생성
- 절차 및 원본/재현 구분: [RETENTION-REPRODUCTION.md](RETENTION-REPRODUCTION.md)
- 독립 파일 해시 점검과 승인된 장기 보존은 별도 미완료 Gate이며, 기존 브라우저 PASS와 혼동하지 않는다.
