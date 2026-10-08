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


## CHECK_07 보존·재생성 필수 규칙
- [RETENTION-REPRODUCTION.md](RETENTION-REPRODUCTION.md)의 원본/재현 구분·manifest·바이트 해시·만료 전 점검을 따른다.
- 실제 다운로드/해시 재검증 없이 BINARY_INTEGRITY_PASS 또는 ARCHIVED 선언 금지.
- 만료 뒤 새 브라우저 Run은 과거 원본이 아니며 REPRODUCED로만 기록한다.

## Owner 직접 확인·성장 학습 (2026-10-09 추가)
- **현재 읽을 실제 산출물:** [INDEX.md](INDEX.md) — 브라우저 Artifact 색인 존재. 바이너리 독립 무결성/장기 보존 별도.
- **2분 이해:** 먼저 위 실제 파일의 목적과 현재 상태를 읽습니다. 이 파일이 있다는 것만으로 새 결과 PASS는 아닙니다.
- **3분 능동 회상(Active Recall):** 자료를 덮고 답합니다. **실제 Screenshot과 AI가 만든 예시 그림의 차이는?**
- **4분 직접 확인·재현:** INDEX.md에서 Run 37582457341과 Artifact 11465355693를 찾고 SHA와 만료 정보를 확인합니다.
- **1분 가르치듯 설명(Teach-back):** 무엇을 보았는지, 왜 그렇게 설계했는지, 아직 확인하지 못한 것 1가지를 자신의 말로 말합니다.
- **지연 복습(Spaced Retrieval):** 성공하면 1→3→7일 후, 어려우면 다음 날 다시 확인합니다. 스스로 답한 기록은 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)에서 학습용으로만 관리하며 공식 QA·MASTER로 자동 변환하지 않습니다.
- **급한 일정:** 2026-10-31 Owner 통보 공식 기한까지 미션 실제 구현·평가를 우선하고, 자료 만들기 자체를 새 목표로 만들지 않습니다.
