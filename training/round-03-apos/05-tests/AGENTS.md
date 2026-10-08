# 05-tests/AGENTS.md — 검증 실행

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
VERIFY-PROCEDURE.md 순서대로 대상·후보·런타임·입력·증거를 잠그고 검증한다. 저장소 루트에서 먼저 node --test training/round-03-apos/05-tests/test-verification.mjs, 다음 node training/round-03-apos/05-tests/verify.mjs를 실행한다.

## 반드시 남길 산출물
정적 검사 JSON, 개별 검증 결과, QA 인수인계

## Exit Gate (종료 판정)
테스트 PASS, 불일치 0, FAIL이면 STOP/MAKER 수정/새 HEAD 독립 재검증 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
문서 존재를 실제 브라우저 PASS로 간주하거나 FAIL을 REVIEW로 완화 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
