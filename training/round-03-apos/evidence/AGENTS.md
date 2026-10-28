# evidence/AGENTS.md — 실제 검증 자료

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
기록을 수정할 때 기존 실행 ID, 실행 후보, Artifact digest, 수동 화면검토 경계를 재대조한다.

## 반드시 남길 산출물
runtime-summary.json, public-runtime-summary.json, EVIDENCE-MAP.md, VISUAL-REVIEW.md

## Exit Gate (종료 판정)
원본 후보와 검사 결과·검토자·상태가 모순 없어야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
타 Round 스크린샷 대체, 임의 증거 생성, 만료를 숨긴 PASS 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
