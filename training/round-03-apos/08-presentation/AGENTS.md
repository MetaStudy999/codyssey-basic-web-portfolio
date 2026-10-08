# 08-presentation/AGENTS.md — 학습·발표자료

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
Round 03 공식 요구·실제 코드·실제 화면 증거로 장면을 작성하고 시각화와 실제 검증을 구분한다.

## 반드시 남길 산출물
PRODUCTION-BRIEF.md, 새 자료·증빙 배치표

## Exit Gate (종료 판정)
코드/SHA/이미지 출처/전체화면 가독성 검증 전 FINAL 금지 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
Round 01/02 파일 복사, AI 생성 화면을 RUNTIME으로 표시 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.

## Owner 직접 확인·성장 학습 (2026-10-09 추가)
- **현재 읽을 실제 산출물:** [PRODUCTION-BRIEF.md](PRODUCTION-BRIEF.md) — Round 03 제작 계획만 존재. 최종 PPTX/PDF·전면 품질 검증 대기.
- **2분 이해:** 먼저 위 실제 파일의 목적과 현재 상태를 읽습니다. 이 파일이 있다는 것만으로 새 결과 PASS는 아닙니다.
- **3분 능동 회상(Active Recall):** 자료를 덮고 답합니다. **실제 화면과 AI-VISUAL을 왜 명확히 구분해야 하나요?**
- **4분 직접 확인·재현:** PRODUCTION-BRIEF.md에서 증빙 요구를 확인하고 기존 CORE 화면 1개를 코드·Run과 연결해 30초 설명을 연습합니다.
- **1분 가르치듯 설명(Teach-back):** 무엇을 보았는지, 왜 그렇게 설계했는지, 아직 확인하지 못한 것 1가지를 자신의 말로 말합니다.
- **지연 복습(Spaced Retrieval):** 성공하면 1→3→7일 후, 어려우면 다음 날 다시 확인합니다. 스스로 답한 기록은 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)에서 학습용으로만 관리하며 공식 QA·MASTER로 자동 변환하지 않습니다.
- **급한 일정:** 2026-10-31 Owner 통보 공식 기한까지 미션 실제 구현·평가를 우선하고, 자료 만들기 자체를 새 목표로 만들지 않습니다.

## 필수 최종 Decision Ledger + 시각 품질 Fail-Closed (2026-10-09)
- **매 제작 전 읽기 순서:** `MetaStudy999/codyssey-basic/standards/PRESENTATION-CANONICAL-DECISIONS.md` **D01~D14** → `ROUND-02-PRESENTATION-STANDARD.md` Golden v3 → 이전 B1-1 `GOLDEN-DECK-QUALITY.md`, `IMAGE-STUDY-DECK-V3-ROADMAP.md`, `TRUTH-REPLACEMENT-MAP.md` → **현재 Round 03 실제 코드/평가/Chromium 증빙**.
- **최상위 User Decision:** `Image-first + Text-minimal + Study-first 30~45장 + Comic-assisted + Truth-first`; 14~16장 발표본은 **학습 본편에서 파생**한다. 이유 없이 17장 카드형 검토자료만 만들어 완료로 보고하면 FAIL.
- **기존 Art Direction KEEP:** Cinematic Mountain/Journey/Character, Dark Navy·Cyan/Amber, 실제 증빙 크게, 사진형 구성; 일반 텍스트 카드 반복 금지.
- **3층 패키지:** Golden Study 30~45장(필요하면 추가) + 평가 발표 14~16장(선별본) + 심층 Appendix 15~25장 + Quick Review 1장; 학생이 자료를 보지 않고 설명·실습할 수 있게 만든다.
- **Harness Gate:** 각 주장마다 `EV01~EV15/BONUS→Function/File→Run/Artifact→Actual Screenshot→Slide→Owner 학습/평가` 추적. Golden 10 Gate G1~G10 전부 PASS, 전체화면 시각·코드·스크린샷 무결성·접근성 QA 후에만 FINAL 선언.
- **Hermes Gate:** 실제 `.hermes/skills/**/SKILL.md`와 호출·결과 증거가 없으면 `HERMES_APPLIED=NOT_VERIFIED`. 단순 문서/도구 설명을 Hermes 실행·품질 PASS로 표기 금지. 스킬 연결이 막혀도 기존 하네스·실물 QA로 즉시 진행하고 도구 구축으로 마감 지연 금지.
- **Owner 미리 보기 필수:** 먼저 대표 장면(표지/4컷/코드·증거/Quick Review)을 실제 이미지로 보여 사용자 피드백을 받아 Visual Lock. 1장/1개념/1개 Claim, 글자가 많으면 장수 늘림.
- **이전 시안 판정:** [2026-10-09 실물 감사](QUALITY-AUDIT-20261009.md)는 **FINAL FAIL**. 단순 PPTX/PDF 열림·17장 존재는 Golden Master PASS 근거가 될 수 없음.
