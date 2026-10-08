# B1-1 Round 03 원본 증빙 보존 및 재생성 계약

## 1. 원본 식별(변경 불가)
- 검증된 실제 미션 후보: `95b5dd8283a611e27c0c0a9185060a213e53ada9`
- 실행 근거: APOS `MetaStudy999/agentic-project-os` Actions Run `37582457341`, Job `112664996295`
- 원본 Artifact: `11465355693`, 이름 `codyssey-b1-1-runtime-37582457341`
- GitHub 기록상 Archive digest: `sha256:2ec015a8383a99c83bb36f409a7ae7ea08063f5fd11b60345c657046a49d11db`
- 조회 시 표시된 만료 예정: `2026-11-06T06:39:33Z`
- 원본 지표 파일: `training/round-03-apos/evidence/` 및 상위 저장소의 실제 원본 Artifact.
- 위 값은 **출처 메타데이터**이다. 원본 ZIP/PNG/Trace의 독립적인 바이트별 해시 확인은 `NOT_CHECKED`이며 **이 문서를 추가해도 PASS가 되지 않는다**.

## 2. 만료 전 보존(Owner 승인 및 권한을 가진 실행자만)
1. 실제 GitHub Actions 아티팩트 ID, Run, 상태, `expired`, `expires_at`을 API에서 재조회한다. 읽기 실패를 존재 확인으로 간주하지 않는다.
2. 비공개 리소스의 인증정보를 로그에 출력하지 않고 원본 아카이브를 **승인된 비공개 보존 저장소**로 별도 다운로드한다. 이 미션 공개 Git 저장소에 원본을 넣지 않는다.
3. 원본 다운로드 바이트의 SHA-256을 산출하고 GitHub 제공 아카이브 digest와 비교한다. 다운로드 API가 다르게 포장한 자료라면 비교 실패 사유를 기록하고 승인 전까지 `INTEGRITY_UNVERIFIED` 처리한다.
4. 아카이브 내 파일 목록/각 파일 SHA-256/바이트 크기와 Run·Job·Candidate·Artifact ID/원본 URL/다운로드 시각 UTC/보관 위치(비밀 URI 제외)/만료/검증자/결과를 manifest로 기록한다.
5. 복구 점검은 승인된 저장소의 사본을 **읽기 전용으로 재열기**하여 manifest와 파일별 digest 일치 여부를 확인한다.
6. 권한/비용/보존 정책 불명확, 아카이브 소실, 해시 불일치 때는 `BLOCKED` 또는 `INSUFFICIENT_EVIDENCE`로 STOP한다. 정책 예외·자동 권한 확대 금지.

권장 메타데이터:
`kind=ORIGINAL_ARCHIVED`, `source_repo`, `candidate_sha`, `run_id`, `job_id`, `artifact_id`, `archive_sha256`, `files[{path,size,sha256}]`, `captured_at`, `archived_at`, `expires_at`, `verified_by`, `verification_status`.

## 3. 원본이 만료되었을 때의 재생성
- 원본과 **동일한 역사적 증거는 다시 만들 수 없다.** 새로운 실행은 `kind=REPRODUCED`로 별도 보관한다.
- 공식 B1-1 원본 미션을 복사·변조하지 않는다. 과거 검증된 정확한 Git SHA를 체크아웃하고 환경/의존성/브라우저/실행 명령/네트워크 시각을 기록한 후 허용된 검증 워크플로를 별도 실행한다.
- 새 실행 시각, 새 Run/Job/Artifact, 실제 Tested_SHA, assertion, Playwright trace·화면, 파일별 hash를 신규 manifest로 작성한다.
- 새 실행의 PASS/FAIL은 새 후보/환경에 대해서만 판단하며 과거 Run #37582457341의 판정을 소급 교체하지 않는다.
- Run 접근·브라우저 실행·원본 후보 재현 불가면 `NOT_RUN` 또는 `INSUFFICIENT_EVIDENCE`로 남긴다.
- 신규 범용 Harness 자체의 성공, 보너스, 발표, 학습 향상은 이 재생성 작업으로 자동 PASS하지 않는다.

## 4. Gate, 담당, 실행
- CHECK_07: Maker가 출처/API/원본 무결성/만료 및 복구 manifest를 각각 검증하고 구분해 기록한다.
- CHECK_08: QA_SEC가 원본/재현 증거의 신원과 SHA를 별도 read-only 대조한다.
- CHECK_10: QA_SEC PASS와 승인된 MASTER/Owner만 보존 정책 변경/병합 판단.
- 현재 상태: `ARTIFACT_METADATA_PRESENT`; `BINARY_INTEGRITY_NOT_CHECKED`; `LONG_TERM_ARCHIVE_NOT_PERFORMED`; `REPRODUCTION_NOT_RUN`.
- Round 01/02 자료 또는 AI 생성 화면을 Round 03 신규 증빙으로 등록할 수 없다.
