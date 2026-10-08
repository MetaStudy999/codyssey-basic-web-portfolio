# B1-1 Owner 실물 검토·성장 학습 센터

> 작성: 2026-10-09 · 목표 마감: **2026-10-31 (Owner가 통보한 공식 기한)**  
> 기준: MetaStudy999/codyssey-basic-web-portfolio · 새 학습 계약 후보 브랜치 `docs/b1-1-owner-learning-review-20261009`  
> **주의:** 본 문서는 GitHub 파일·기존 QA 증빙의 상태를 찾기 쉽게 안내합니다. 새 브라우저 검증이나 사용자 숙달 PASS를 뜻하지 않습니다.

## 30초 시작

1. [각 폴더를 선택하는 공부 화면](14-dashboard/owner-learning.html)을 파일로 내려받아 브라우저에서 엽니다. 이 페이지는 **오프라인 자기학습 기록 도구**이며, GitHub/API 실시간 검증을 하지 않습니다.
2. 아래 표에서 원하는 폴더의 **실제 파일**을 눌러 읽습니다. `04-src`는 이미 검증한 실행 코드이므로 **읽기만** 합니다.
3. **2분 이해 → 3분 자료를 덮고 회상 → 4분 실제 파일·화면·명령 확인 → 1분 자신의 말로 설명**합니다.
4. 공부 화면에 스스로 평가: **설명·재현 성공** 또는 **다시 연습**. 틀린 것만 내일, 맞힌 것은 1→3→7일 간격으로 다시 봅니다. 이 간격은 훈련 권장값이지 효과가 검증된 개인 성과는 아닙니다.

## 15개 폴더 실물·학습 지도

| 폴더 | 무엇을 실제 확인할까? | 기존 파일 / 검토 시작 | 현재 정확한 상태 |
|---|---|---|---|
| `00-control` 목표·권한 | 역할과 승인 범위를 적은 헌장 존재(실행 권한 확대 아님) | [CHARTER.md](00-control/CHARTER.md) · [학습 절차](00-control/AGENTS.md) | `READ_ONLY` |
| `01-mission` 공식 요구 | R01~R14 요구 추적표 존재. R14 보너스 4개 미검증 | [REQUIREMENTS.md](01-mission/REQUIREMENTS.md) · [학습 절차](01-mission/AGENTS.md) | `R14_PENDING` |
| `02-research` 쉬운 개념 | HTML/CSS/JS와 상태 흐름 학습 지도 존재. 독립 재현 미측정 | [LEARNING-MAP.md](02-research/LEARNING-MAP.md) · [학습 절차](02-research/AGENTS.md) | `MASTERY_NOT_MEASURED` |
| `03-design` 설계·흐름도 | 실제 setTheme/loadProjects/validateForm 흐름 설명 존재 | [ARCHITECTURE.md](03-design/ARCHITECTURE.md) · [학습 절차](03-design/AGENTS.md) | `DOC_PRESENT` |
| `04-src` 실제 구현 | HTML/CSS/JS CORE 실행 이력 존재. 보너스 4개 구현·검증 대기 | [04-src/index.html](04-src/index.html) · [학습 절차](#04-src-실제-코드) | `CORE_HISTORY_PASS_BONUS_PENDING` |
| `05-tests` 코드·검증 | 검증 절차와 테스트 코드 존재. 신규 학습 자료 HEAD 재검증 필요 | [RESULTS.md](05-tests/RESULTS.md) · [학습 절차](05-tests/AGENTS.md) | `NEW_HEAD_CI_PENDING` |
| `06-evidence` 증빙·출처 | 브라우저 Artifact 색인 존재. 바이너리 독립 무결성/장기 보존 별도 | [INDEX.md](06-evidence/INDEX.md) · [학습 절차](06-evidence/AGENTS.md) | `BINARY_INTEGRITY_NOT_VERIFIED` |
| `07-evaluation` 평가·보너스 | CORE와 공식 보너스 4개가 별도. BONUS-01~04 NOT_VERIFIED | [BONUS.md](07-evaluation/BONUS.md) · [학습 절차](07-evaluation/AGENTS.md) | `BONUS_4_PENDING` |
| `08-presentation` 발표·학습 슬라이드 | Round 03 제작 계획만 존재. 최종 PPTX/PDF·전면 품질 검증 대기 | [PRODUCTION-BRIEF.md](08-presentation/PRODUCTION-BRIEF.md) · [학습 절차](08-presentation/AGENTS.md) | `FINAL_DECK_PENDING` |
| `09-handoff` 작업 인수인계 | PR/HEAD·미완료 이력 문서 존재. 새 작업은 최신 조회 필요 | [STATE.md](09-handoff/STATE.md) · [학습 절차](09-handoff/AGENTS.md) | `CURRENT_HEAD_RECHECK_REQUIRED` |
| `10-performance` 성능·학습 측정 | 표준 측정 정의 존재. 학습 향상/독립 재현은 NOT_MEASURED | [MEASUREMENT.md](10-performance/MEASUREMENT.md) · [학습 절차](10-performance/AGENTS.md) | `GROWTH_NOT_MEASURED` |
| `11-improvement` 작은 개선 | 관찰→가설→검증 절차 문서 존재. 개선 효과 실험 미실시 | [EXPERIMENT-LOOP.md](11-improvement/EXPERIMENT-LOOP.md) · [학습 절차](11-improvement/AGENTS.md) | `IMPROVEMENT_NOT_MEASURED` |
| `12-domains` 다른 미션 전이 | WEB_STATIC 공통/특수 검사 구분 문서 존재. 교차 도메인 실측 없음 | [ADAPTER-CONTRACT.md](12-domains/ADAPTER-CONTRACT.md) · [학습 절차](12-domains/AGENTS.md) | `CROSS_DOMAIN_NOT_VERIFIED` |
| `13-harness` 반복 실행 검증 | 읽기 전용 Harness 검사기·계약 존재. 범용성 NOT_ESTABLISHED | [README.md](13-harness/README.md) · [학습 절차](13-harness/AGENTS.md) | `PILOT_INCOMPLETE` |
| `14-dashboard` 한눈에 보기 | 2026-10-08 스냅샷 대시보드 시안. 실시간 관제 아님 | [index.html](14-dashboard/index.html) · [학습 절차](14-dashboard/AGENTS.md) | `STATIC_SNAPSHOT_ONLY` |

## 평가 원문 15개 문항 직접 학습 (필수)

- [B1-1 공식 4개 영역·15문항 전체 평가 체크리스트](07-evaluation/OFFICIAL-EVALUATION-CHECKLIST.md)
- 출처: [responsive_web_javascript.md](https://drive.google.com/file/d/1tRJdh0a2cX8x3nAkpKYM9b6aVfPKed6q/view)
- **평가 원본 15/15 연결은 완료됐지만, 사람의 직접 구술·실기 검증은 미측정 상태**입니다. 기존 R01~R14 요구사항 표는 공식 평가 15문항과 다른 목적으로 작성되었습니다.
- 각 문항을 자료 없이 설명하고 실제 웹사이트로 재현해야 하며, BONUS 4개와 최종 발표 슬라이드의 검증도 별개입니다.

## 04-src 실제 코드

- [HTML 구조](04-src/index.html): header/nav/main/section/article/footer, 실제 이름/이메일/메시지 폼.
- [CSS 반응형·테마](04-src/css/style.css): `:root`, `[data-theme="dark"]`, 768px/1024px.
- [JavaScript 이벤트·상태](04-src/js/main.js): `STATE`, `setTheme`, `renderProjects`, `loadProjects`, `validateForm`.
- [실제 공개 포트폴리오](https://metastudy999.github.io/codyssey-basic-web-portfolio/training/round-03-apos/04-src/)를 **직접** 열어 버튼·메뉴·이메일 형식 오류·다크 모드를 확인합니다. 웹상 최신 작동 결과는 이 문서만으로 새 PASS라고 선언하지 않습니다.

### 04-src 실제 코드 학습

**스스로 말해 보기:** "클릭 → 이벤트 → 상태 → 화면 변경"을 테마 버튼의 코드로 한 번 따라 설명하세요. `localStorage`에 왜 상태를 저장하는지도 말하세요.  
**실제 연습:** 다크 모드를 켜고 새로고침해 유지되는지 눈으로 확인합니다. 실패했다면 환경/동작을 기록합니다. 현재 CORE는 과거 브라우저 이력 PASS, **BONUS-01~04 신규 구현·증빙은 별도 대기**입니다.

## 학습 방법: 읽기만 하지 않고 스스로 설명

| 단계 | 내가 할 일 | 진짜 학습 확인 |
|---|---|---|
| 이해(2분) | 쉬운 비유 하나와 코드 한 지점을 읽기 | 용어 뜻을 이야기할 수 있음 |
| 능동 회상(3분) | 문서를 가리고 질문에 30초 답하기 | 암기 복사가 아닌 자기 말 |
| 재현(4분) | 클릭·검사·짧은 실행 중 하나 직접 수행 | 실제 화면/명령 출력과 일치 |
| 가르치듯 설명(1분) | '왜 이렇게 구현했는가' 설명 | 이유·한계까지 설명 |
| 지연 복습 | 다음 날→3일→7일, **부족한 내용 우선** | 직접 다시 답한 경우에만 성장 기록 |

개인 학습 단계 `DISCOVER → UNDERSTAND → PRACTICE → REPRODUCE → APPLY → EXPLAIN → EVALUATE → MASTER → TRANSFER`는 APOS 표준과 구별해 기록합니다. 이 페이지의 자기평가는 **정식 MASTER·독립 QA가 아닙니다.**

## 이달 마감 — 구현이 공부 도구보다 먼저

- **1차: CORE 재현·표시 결함:** 재시도 버튼 `hidden`, 표시 건수, 정상 API 카드 화면, 다크 전환 캡처. 기존 CORE의 검증 이력은 보존합니다.
- **2차: 공식 BONUS 4개:** 언어 필터 / Hero 타이핑 / 실제 문의 전송 / 시스템 다크 감지. `07-evaluation/BONUS.md`와 [Issue #17](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/issues/17)을 기준으로 실제 별도 구현·브라우저 증빙. 실제 외부 전송은 승인된 서비스만.
- **3차: 고품질 이미지 발표·학습본:** 기존 Golden 디자인을 참고하되 **Round 03 실제 코드·스크린샷으로 교체**, 입문자 노트·발표본 분리.
- **4차: 독립 QA → 공식 평가·제출:** GitHub 내부 QA와 교육과정 공식 평가·제출은 별개입니다. 대면 평가·팀 프로젝트/학교 접근 기간을 먼저 확보합니다.

**절대 금지:** 완료되지 않은 보너스/슬라이드/학습 숙달을 PASS라고 표기, CORE 소스 복제·수정, Round 02 성과를 Round 03 신규 증빙으로 오인, 승인 없는 이메일/계정 조작.

## User와 함께 점검하는 소통 계약

매번 **(1) 실제 화면/파일 링크 1개 (2) 이번에 발견한 것 (3) 10분 직접 확인할 것 (4) 다음 수정 1개**만 먼저 보여주고 의견을 듣습니다. Owner에게 반복 승인받기 위한 도구가 아니라 사용자가 실제 결과를 이해하기 위한 도구입니다.
