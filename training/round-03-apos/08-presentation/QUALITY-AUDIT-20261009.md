# B1-1 슬라이드 최종 결정 준수 감사 — 2026-10-09

**감사 대상:** `CODYSSEY_B1-1_R03_Review_DRAFT.pptx` / `CODYSSEY_B1-1_R03_Review_DRAFT.pdf` (2026-10-09 로컬 제작 17장 / PDF 17쪽)  
**판정:** **NOT_APPROVED / FINAL_GOLDEN_MASTER=FAIL**. 사용자 검토·학습 성장·공식 평가용 최종본 아님.  
**마감:** Owner가 통보한 공식 최종 기한 **2026-10-31**. 불필요한 새 관리체계 없이 이전 이미지 자료를 살려 고쳐야 한다.

## 1. 우선 적용할 실제 원본 — Context Drift 금지

1. `MetaStudy999/codyssey-basic/standards/PRESENTATION-CANONICAL-DECISIONS.md` — D01~D14, 최신 Owner 결정 **우선**.
2. `MetaStudy999/codyssey-basic/standards/ROUND-02-PRESENTATION-STANDARD.md` — Golden v3·시각·증거·학습·평가 제작 규칙.
3. `training/round-02-clear/presentation/GOLDEN-DECK-QUALITY.md` — 기존 B1-1 Golden 미승격 및 예술 방향 KEEP.
4. `training/round-02-clear/presentation/IMAGE-STUDY-DECK-V3-ROADMAP.md` — **45장 시각 스토리보드**와 실제 Screen Truth Replacement 잔여.
5. `training/round-02-clear/presentation/TRUTH-REPLACEMENT-MAP.md` — 실제 코드·증거 대체 필요사항.
6. `training/round-03-apos/04-src/**` — 현 Round 03 실제 코드, 신규 Bonus 후보는 별도 [PR #19](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/pull/19)의 HEAD·CI.
7. 공식 B1-1 평가 15문항 `../07-evaluation/OFFICIAL-EVALUATION-CHECKLIST.md` — EV01~EV15 및 Bonus-01~04.
8. **각 사용자의 확인 피드백을 다음 시안에 반영**; 한 번 만든 시안을 최종본처럼 안내하지 않는다.

## 2. 17장 실물 검사 결과

- 전체 17장 모두 1920×1080 PNG 1장을 담은 Image-first PPTX; PDF 17쪽 이미지형, 개별 텍스트 추출 불가, Speaker Notes **0**.
- `1920×1080`은 Delivery 하한을 충족하므로 그것만으로 FAIL이라고 할 수 없음. **권장 Working Master 3840×2160의 제작·검증 이력은 없음**.
- Image-only PowerPoint Container는 최신 D01에서 **허용**. 단, 시각 완성/편집 계층(선택)/사용 편의와 대체텍스트는 별도 검사해야 함.
- 대다수가 동일 Dark Navy + 대형 텍스트 카드이고, 사진·시네마틱 배경/산악 여정/캐릭터/만화·다이어그램 비중이 적음. 기존 D13 `Dark Navy + Cyan Neon + Amber Highlight + Cinematic Mountain + Character Storytelling + Comic + Technical UI + Large Image + Minimal Text`와 불일치.
- 이미지로 된 실제 스크린샷은 1, 4, 5, 15, 16 등에 존재하지만 화면 일부가 축소되어 세부 정보가 발표 환경에서 읽기 어려움. **Mock GitHub API** 검증 화면은 15장에서 MOCK DATA로 구별해 둔 점은 올바름.
- 6번의 상태→화면 표현은 실제 함수명 일부를 사용하지만, **4컷 비유→정확한 다이어그램→실제 코드 블록→실제 화면 증빙**의 연쇄를 충족하지 못함.
- 7~10번 Bonus 설명이 대부분 텍스트 박스. 선택 보너스 **4종 각각의 핵심 코드/실패·접근성/실제 Browser·Evidence**를 학습할 수 있게 구성되지 않음. BONUS-03 실제 전송은 여전히 승인된 서비스/수신 확인 필요.
- 3·12번에는 평가 문항 요약과 예상질문이 있으나 **EV01~EV15 각각의 코드·시연·근거·발표 노트와 연결되지 않음**.
- 설계 대안/Trade-off, 정상/오류/복구, 보안·NFR, 3-Level Architecture, 함수 IPO, 10초/30초/1분 학습 실기/전이 등 Golden v3 중추 누락.
- 17장 Main DRAFT **1종만 존재**. 별도 30~45장 Study-first Golden Learning Deck, 15~25장 심층 Appendix, 1장 Quick Review Sheet 및 Demo Runbook이 실제 최종 산출물로 만들어지지 않음.
- Slide↔Requirement↔Evaluation↔Actual Code↔Run/Artifact↔Screenshot/CI 증빙 매트릭스·슬라이드 제작 원본/접근성/QC 기록 없음. 산출물도 현 `08-presentation/`에 아직 버전 고정·색인되지 않음.
- `13-harness/harness.mjs`의 검사 범위는 일반 계약/메타데이터·안전·관측 위주이며 **17장 PPTX의 시각 가독성·정확성·슬라이드 출처를 심사한 기록이 없음**.
- 저장소의 `.hermes/skills/*/SKILL.md` 기반 슬라이드 스킬/실행 로그 **확인되지 않음**. Hermes `APPLIED/PASS`로 주장하면 안 됨. 향후 스킬 선언 자체와 실제 사용·산출물 검증도 분리.

### 검토 대상 슬라이드
| 슬라이드 | 현재 실제 내용 | 주요 조치 |
|---|---|---|
| 01 | 텍스트 카드 + 기존 웹 화면 | 기존 고퀄리티 Cinematic Hero / 핵심 성과 시각화로 교체 |
| 02~03 | HTML/CSS/JS 카드, 평가 분류표 | 1장 Mission Map, 초보자 설명·공식 평가/증거 연결 시각화 |
| 04~05 | CORE 실제 라이트/다크·모바일/태블릿 | 원본 픽셀 확대·SHA/Run/Device Badge·대비/가독성 확인 |
| 06 | Event→State→Render 텍스트형 카드 | 4컷 만화 + 기술 다이어그램 + `main.js` 코드 + 실제 Runtime 4연속 |
| 07~10 | 보너스 설명 카드 | 각 BONUS별 코드·상태·오류·실제 캡처의 상세 학습 및 최종 메인 요약으로 재배치 |
| 11 | 오류 수정 설명 카드 | 실제 Before/After 캡처·재검증 출처 배치 |
| 12~13 | 예상 질문·10분 학습법 카드 | 실제 EV01~EV15 대응 질문·문제·정답 공개·실습 방법 |
| 14 | 종료 정리 카드 | Truth-based Evaluation Defense 및 한계/실기/다음 미션 구분 |
| 15~16 | 신규 Bonus 실행 스크린샷 | MOCK vs 실제 외부 GitHub Data를 명확히 구분, 크게 확대, 정확한 Run·Artifact 연결 |
| 17 | 25/25 브라우저 PASS 카드 | **모의 API·모의 Formspree POST** 범위 표기 유지. 새 소스 HEAD·브라우저 로그·Artifact 연결 |

## 3. Golden Master G1~G10 — 이번 실제 17장 평가

| Gate | 판정 | 이유 |
|---|---|---|
| G1 Visual Impact | **FAIL** | 기존 시네마틱·만화·Large Image/Minimal Text 방향 대신 텍스트 박스 중심 |
| G2 Technical Accuracy | **INSUFFICIENT_EVIDENCE** | 일부 실제 함수·Run 표기 있으나 전체 슬라이드별 실제 코드/상태 Trace 확인 안 됨 |
| G3 Evidence Integrity | **INSUFFICIENT_EVIDENCE** | Mock 표기는 일부 적절하나 Run/SHA/원본/검증 범위 전체 연결표 없음 |
| G4 Traceability | **FAIL** | 공식 EV01~EV15 / Bonus→Code→Test→Screenshot 교차 맵 누락 |
| G5 Learning Value | **FAIL** | 4컷·Glossary 3-Level·사례→구현→증명 반복 학습 없음 |
| G6 Reproduction | **FAIL** | Demo Runbook·사용자 실습/독립 재현/반복 확인 경로 없음 |
| G7 Explanation | **INSUFFICIENT_EVIDENCE** | 10초/30초/1분+기술 설계 이유/한계 대본 불충분 |
| G8 Evaluation Defense | **FAIL** | 공식 15문항에 대한 질문·코드·시연/증빙 안내 부족 |
| G9 Full-screen Readability | **INSUFFICIENT_EVIDENCE** | 1920 화면 출력은 했으나 작은 원본 screenshot 정보 판독/프로젝터 QA 기록 없음 |
| G10 Accessibility | **INSUFFICIENT_EVIDENCE** | PDF 전 페이지 이미지형, PPTX Speaker Notes 0, 접근성 점검 미기록 |

**합계:** G1/G4/G5/G6/G8 명백한 FAIL, 나머지 미충족 근거로 FINAL 승격 불가. 독립 QA_SEC 최종 판정이 아니라 **실물 사전감사 결함 기록**이다.

## 4. 기존 자료를 살리는 가장 짧은 보정 경로

1. **기존 자료 재사용:** `round-02-clear/presentation/IMAGE-STUDY-DECK-V3-ROADMAP.md`의 01~45 시각 스토리보드, 기존 Golden Deck v2, 기존 사용자 피드백의 시각 방향을 재활용. 새 스타일/새 파일럿 과제 설계부터 다시 하지 않음.
2. **진실 우선:** B1-1 main 기존 CORE, PR #19의 정확한 후보·Chromium Run/Artifact, 공식 EV01~EV15, BONUS-01~04, 이메일 실제 수신 PENDING을 모두 구분.
3. **한 번 만들고 같이 확인:** 먼저 표지 / 4컷 Comic→Flow→Code→Evidence 대표 4장 / 실제 평가 및 Bonus 검증 대표 2장 / 1장 Quick Review를 **실제 이미지**로 제작하고 Owner에게 크게 보여 시각 품질과 코드 정확성 확인.
4. **본편 확장:** 이미 확정된 30~45장 학습용 Golden Learning Deck 완성. 여기에서 14~16장 발표본을 추출, 추가로 15~25장 Appendix와 1장 핵심 복습을 구분해 제출.
5. **출처·가독성·원본:** 모든 핵심 슬라이드에 `Source Type/Path/SHA/Run/Evaluation` 매핑, 실제 캡처·AI 개념 시각화 Badge, 16:9 실제 전체화면·글자 크기/접근성 QA.
6. **하네스/헤르메스 분리 검증:** `08-presentation/AGENTS.md` 상위 우선순위 및 Golden 10 Gate를 작업 종료 조건으로 사용. Hermes Skill이 실제 제공/실행/증빙된 경우만 `HERMES_APPLIED`; 미존재/미연동이면 `NOT_VERIFIED`, 작업 품질을 보수적으로 수동 검증하고 불필요한 도구 구축으로 10/31 일정 지연 금지.
7. **MASTER 보고→QA_SEC 독립 검증→최종 승인**. 리뷰 완료 전 `FINAL/GOLDEN MASTER` 금지.

## 5. Owner 소통 규칙

- 새로 만든 사진형 시안을 **크게 보여주고** 3개 단문만 설명: 어떤 장면/어떤 실제 코드/남은 수정.
- 구현 또는 슬라이드가 실제로 바뀌었을 때만 PASS/FIX 문장 사용. 추정/구상/신규 문서를 진도로 계산하지 않음.
- B1-1 완료 뒤 B1-2~B7-2 같은 Golden 기준을 재사용. 마감 10월 31일까지 실제 평가·공식 제출 우선.
