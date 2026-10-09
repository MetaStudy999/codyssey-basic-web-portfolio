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

## 최신 Owner 결정: 모든 페이지 생성형 이미지·동일 결과물 재검증 (2026-10-09)

이 섹션은 위 **과거 D13의 Dark Navy KEEP**보다 우선하며, CODYSSEY 중앙 `standards/PRESENTATION-CANONICAL-DECISIONS.md` 변경 후보의 **D15/D16**을 B1-1에 조기 적용한다. 중앙 규정 병합 전에도 Owner 명시 지시를 로컬 파일에 보존한다.

1. **전 페이지 ImageGen:** 표지·본문·코드학습·4컷만화·실증·평가·부록·복습표 모두 **각 페이지별로 새롭고 고유한 커버급 생성형 이미지 기반**으로 제작. 텍스트 카드/원형 숫자/PPT 도형만 반복하며 장수 채우기 금지.
2. **최신 시각 기준:** 기업형 시네마틱 표지, 공공·연구기관급 밝고 선명한 본문, 학습 원리를 실제 장면으로 보여주는 현대적 인포그래픽. 산악 여정/기존 Navy·Cyan·Amber는 필요한 장면에서만 사용. 본문 전체에 네온 다크 강제 금지.
3. **이미지 기반 + 최소한의 정확성 합성:** 한국어·수식·정확한 함수·Git SHA·Run·실제 Screenshot·평가 문항/상태 표기를 원본과 교차검증하여 필요한 영역만 최소 보완한다. AI가 만든 가짜 UI나 PASS는 무조건 FAIL; `AI-VISUAL`/`CODE`/`RUNTIME`/`EVIDENCE` 분리.
4. **검증·보완 루프:** 원안·학습 목적 확인 → 실제 페이지 생성 → 실물 16:9 전면 검토 → 오류 재현 → 원인 분석 → 기존 페이지의 최소 교정/재생성 → **같은 페이지** 재렌더·재검증 → Owner/독립 QA 확인 → 다음 페이지. 디자인 불합격은 장수 확대 전 STOP.
5. **증빙:** `manifest.json`의 슬라이드별 생성 원본+프롬프트(또는 실제 생성 입력 기록), 최종 합성, 파일 SHA256, 학습 목표, 원본 코드·브라우저 증빙·30초 구술 실습, 리뷰 증빙을 남기고 `slide-gate.mjs`가 부정·누락을 검사한다. 이미지 유사도·의미·미학·가독성은 독립 풀스크린 리뷰로 보완.
6. **진실:** 이전 v4 39장 덱은 이미 제출물이 아닌 DRAFT. EV10 v5 부분 교정만 확인됐으며 **나머지 35장과 전체 Golden Master는 PASS 아님**. B1-1 04-src와 PR #19 Bonus는 별도 후보 SHA; 공식 평가 15개 구술·실기, 보너스 4개, 실제 폼 메일 수신·독립 QA·학교 제출도 별도 상태.
7. **Hermes:** 스킬 정의는 실행 로그가 있을 때만 적용 확인. 설치 미확인 시 동일 생성·검증 프로세스의 대체 도구를 사용하여 공식 일정 지연 금지. 독립 QA_SEC와 Owner 승인 전 FINAL/병합 금지.



## 슬라이드 트러블슈팅 → 재발 방지 → 다음 장 차단 (2026-10-10)

- 단일 기준: [TROUBLESHOOTING.json](TROUBLESHOOTING.json)의 **각 오류 증상·재현·근본 원인·동일 장 수정 기준·예방 규칙·재시험 근거·사용자 검토**. GitHub Issue #17은 의사소통 이력이며 기계 판정은 이 파일로 한다.
- **매 장 생성 전 반드시 실행**: 저장소 루트에서 `node training/round-03-apos/08-presentation/slide-gate.mjs --next-slide SL04`. 0=다음 장 진행 가능, **2=차단**. 현재 SL03 보정은 `--next-slide SL03`으로 진행할 수 있으나, SL04는 SL03 미해결 문제 때문에 차단된다.
- 검증기 기본 `node .../slide-gate.mjs`와 `node --test .../slide-gate.test.mjs`는 규칙 및 고의 실패 테스트; **기존 SL03 이미지를 실제로 재렌더·승인한 결과가 아니다.** 다음 장의 이미지가 manifest에 등록되면 미해결 이전 결함을 CI가 거부한다.
- 종료 처리 `CLOSED_VERIFIED`에는 실제 수정 이미지의 해시 검증, 재시험 PASS 파일, 전체화면 QA 근거, Owner 승인 근거가 필요하다. 스크린샷이 ChatGPT Library에만 있어 CI가 파일 바이트에 접근하지 못하는 경우 **임의로 종결하지 않는다**. 증빙을 허가된 검증 경로로 연결하거나 불확실성을 표시한다.
- 같은 결함이 다시 발생하면 신규 시안을 늘리지 않고 **동일 슬라이드 최소 수정 → 렌더 → 같은 검사 재실행**. 전체 45장이라는 분량보다 개별 장면의 학습/평가자 설명력과 공식 마감을 우선한다.
