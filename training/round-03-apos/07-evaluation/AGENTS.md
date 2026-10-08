# 07-evaluation/AGENTS.md — 분리 평가

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
공식 CORE, 공식 BONUS, 발표준비, 최소 학습·독립 재현·전이를 각각 다른 Gate로 관리한다.

## 반드시 남길 산출물
BONUS.md, 실습·구술 판정

## Exit Gate (종료 판정)
각 주장에 독립 검증과 정확한 수준이 있어야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
CORE CLEAR를 BONUS·Human Mastery 완료로 자동 확장 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.

## Owner 직접 확인·성장 학습 (2026-10-09 추가)
- **현재 읽을 실제 산출물:** [BONUS.md](BONUS.md) — CORE와 공식 보너스 4개가 별도. BONUS-01~04 NOT_VERIFIED.
- **2분 이해:** 먼저 위 실제 파일의 목적과 현재 상태를 읽습니다. 이 파일이 있다는 것만으로 새 결과 PASS는 아닙니다.
- **3분 능동 회상(Active Recall):** 자료를 덮고 답합니다. **보너스 01~04를 차례대로 말하고 필수 기능과 차이를 설명해 보세요.**
- **4분 직접 확인·재현:** BONUS.md를 덮고 4개 기능/정상·오류 검사를 써 본 뒤 문서와 대조합니다. 실제 전송은 별도 승인 없이는 시도하지 않습니다.
- **1분 가르치듯 설명(Teach-back):** 무엇을 보았는지, 왜 그렇게 설계했는지, 아직 확인하지 못한 것 1가지를 자신의 말로 말합니다.
- **지연 복습(Spaced Retrieval):** 성공하면 1→3→7일 후, 어려우면 다음 날 다시 확인합니다. 스스로 답한 기록은 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)에서 학습용으로만 관리하며 공식 QA·MASTER로 자동 변환하지 않습니다.
- **급한 일정:** 2026-10-31 Owner 통보 공식 기한까지 미션 실제 구현·평가를 우선하고, 자료 만들기 자체를 새 목표로 만들지 않습니다.


## 원문 평가 체크리스트 15문항 (2026-10-09)
- [OFFICIAL-EVALUATION-CHECKLIST.md](OFFICIAL-EVALUATION-CHECKLIST.md): Google Drive `responsive_web_javascript.md` 평가 4개 영역·15개 질문을 실제 코드·직접 시연·구술로 연결한다.
- 15개 질문의 기존 CORE 실행 기록, 사용자 재현, 공식 교육 평가를 각각 구별한다. 개별 설명·시연이 확인되지 않으면 `NOT_MEASURED`로 둔다.
- Owner는 **2분 확인 → 3분 자료 없이 답변 → 4분 화면 직접 검증 → 1분 이유/한계 설명**으로 하루 2~3개 질문을 실제로 연습한다.
