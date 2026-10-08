# 06-evidence/AGENTS.md — 증빙 색인

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
실제 원본은 ../evidence/에 두고 해당 Run·Job·후보·파일·해시·보존기한을 인덱싱한다.

## 반드시 남길 산출물
INDEX.md와 Evidence 무결성 기록

## Exit Gate (종료 판정)
증거 출처를 역추적할 수 있고 중복 복제가 없어야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
원본 파일을 확인하지 않은 채 파일명만 보고 PASS 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
