# B1-1 공식 평가 발표 16장 — 실제 제작·평가자 대본 연결 (2026-10-09)

> **상태: REVIEW_DRAFT / NOT_FINAL / OWNER_VISUAL_QA_PENDING.** 2026-10-31 공식 기한. 최신 Owner 시각 결정: **기업형 표지 + 밝은 보고서형 본문 + 평가자가 한눈에 이해하는 인포그래픽 + 큰 실제 증빙**. 본 16장은 **짧은 평가 발표**이며, 이전에 확정한 30~45장 Study-first Golden Learning Deck을 축소·대체하지 않는다.
>
> 제작한 실물: **16장 PPTX(편집 가능한 도형/텍스트 + 발표 노트), 16장 이미지형 PPTX, 16쪽 PDF, 16장 전체 미리보기, 장별 대본·평가 매핑 MD**. 채팅에 전달한 로컬 첨부 파일이며 **GitHub 바이너리/Drive 보존 상태는 NOT_ARCHIVED**.
>
> **코드 버전:** PR #19 Candidate `8059498326c4cbfb5ab35e0da7ca32a0e243538f` / [자체 브라우저 Run #37853333536](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/actions/runs/37853333536). GitHub API와 Formspree는 모의 응답 기반 테스트; Bonus03 실제 수신 불명. 이 코드는 현재 공개 main과 동일하지 않다.

## 16장 정보구조 + 발표 핵심 + 평가 연결

| SL | 한 장의 주제 | 시각 구조 | 공식 평가 | 발표자가 말할 핵심 · 실제 시연 |
|---|---|---|---|---|
| 01 | B1-1 나를 소개하는 웹페이지 | 기업형 히어로 + 실제 화면 | 미션 소개 | 구조·스타일·상호작용을 구현하고 직접 설명 |
| 02 | 분산 결과 → 하나의 웹 | 문제→해결→평가 | EV06/07 | 웹을 만든 이유와 사용자의 시나리오 |
| 03 | HTML→CSS→JS→GitHub API | 4단 주요 계층 | EV01/02/04/10 | 파일·API의 역할과 화면 연결 |
| 04 | HTML 뼈대 / CSS 스타일 / JS 동작 | 3대 개념 비교 | EV06/09 | 파일 역할 분리 이유를 코드로 가리키기 |
| 05 | Semantic HTML | 실제 구역 구조도 | EV07 | header/nav/main/section/footer |
| 06 | Mobile First / Flexbox / Grid | 데스크톱+모바일 실제 캡처 크게 | EV01/13/15 | 375/768/1024 미디어 쿼리 |
| 07 | 클릭→이벤트→상태→화면 | 4단 개념 장면 (진짜 캐릭터 만화는 추가 제작) | EV09/10/14 | 자료를 덮고 30초 설명 |
| 08 | 코드의 Event→State→Render | 실제 함수명 4단 흐름 | EV02/10/14, BONUS04 | `setTheme`, `STATE.themePreference`, `renderTheme` |
| 09 | Light/Dark/OS 테마 | 원본 브라우저 밝음/어둠 비교 | EV02/08, BONUS04 | OS 변경과 사용자 선택 우선순위 |
| 10 | GitHub API 4가지 상태 | loading/success/empty/error | EV04/11 | async/await, try/catch, 재시도 |
| 11 | filter() vs slice() | 실제 프로젝트 카드(모의 API) + 데이터 연산 | EV12, BONUS01 | 언어별 선택과 12개 표시 제한 |
| 12 | 폼 검증 vs 실제 전송 | 실제 입력 화면 + 승인→POST→결과 | EV05, BONUS03 | 실제 메일 수신 NOT_VERIFIED |
| 13 | 타이핑·모바일 메뉴 | 실제 모바일 화면 + 접근성 두 흐름 | EV03, BONUS02 | reduced motion, 햄버거 메뉴 |
| 14 | 검증한 것과 남은 것 | 25/25 큰 숫자 + PASS 범위/미완료 비교 | EV01~05, BONUS01/02/04 | [MOCK GitHub API/Formspree] 사실 표기 |
| 15 | 평가 15문항 한눈에 | 5 기능 + 4 구조 + 4 개념 + 2 응용 | EV01~EV15 | 질문별 30초 말하기 + 실제 코드 찾기 |
| 16 | 시연 동선 및 한계 | 1~3분 라이브 Demo 5단계 | EV01~05 및 보너스 | 화면→테마→프로젝트→폼→코드/질문 |

## 반드시 평가자 앞에서 말로 설명할 흐름

**WHAT → WHY → HOW → VERIFY → LIMITATION**. 한 문항당 30초/1분 버전. 실제 `04-src/js/main.js`는 정확한 PR HEAD를 기준으로 한다. 예를 들어 테마: 클릭 → addEventListener → setTheme → STATE.themePreference → renderTheme → CSS. 이전 main의 `STATE.theme`와 혼동 금지.

1. 375px에서 모바일 메뉴 열기/닫기 → 화면 넓혀 반응형 확인.
2. 테마를 System→Light→Dark로 바꾸고 새로고침 후 유지 확인.
3. 프로젝트 데이터/필터와 로딩·오류·빈 상태 설명. **현재 스크린샷은 모의 GitHub API**.
4. 폼에 잘못된 이메일을 넣고 오류 안내 확인. 승인된 외부 전송 계정과 실제 수신은 아직 검증되지 않음.
5. 파일·함수와 자료를 직접 연결해 30초로 이유·한계 설명.

## 일관성·품질 및 한계

- **실제 만든 파일:** Local chat runtime의 이미지형/편집형 PPTX, PDF, 문서와 미리보기. Repository `08-presentation/`에는 본 제작·소스 매핑 기록만 저장하고, 원본 바이너리가 저장소에 있다는 거짓 기록은 하지 않는다.
- **시각 원칙:** 최신 Owner가 제공한 발표 레퍼런스에서 밝은 공공·기업형 보고서 레이아웃, 블루·민트 색과 단계형 인포그래픽을 우선 적용. 기존 D13 다크 네온 전체화면 강제보다 사용자 최신 지시 우선.
- **현재 부족한 부분:** 4컷 실제 캐릭터 만화, 모든 장면의 고해상도 예술 작업, 실제 서비스 데이터/이메일 수신, 상세 30~45장 학습본·기술 Appendix 15~25장, 실기·구술 평가, 독립 전체화면 QA. 본 16장을 최종 Golden Master로 승인하면 안 된다.
- **하네스:** 현 `slide-gate.mjs`의 검사에서 `contract_valid=true`는 릴리스 승인 PASS가 아니므로 평가 문항→코드/실제 증빙→슬라이드/구술 실천을 추가 확인한다.
- **헤르메스:** `.hermes/skills/codyssey-golden-slides/SKILL.md`는 STAGED만 확인, 실제 실행 NOT_VERIFIED.
- **제로트러스트:** AI-VISUAL != RUNTIME; MOCK API != LIVE GITHUB; HTTP 200 != USER ORAL; 이전 Round02 데이터는 참고만. Reviewer approval 전 main/PR 병합 금지.

## 다음 실질 제작

- 원본 디자인 품질 개선: 본 16장 중 **01 표지, 06 반응형, 07 4컷, 08 실제 코드, 09 실제 증빙, 15 공식 질문**을 먼저 Owner와 크게 검토하고 부족한 이미지만 교체.
- 사용자의 직접 30초 답변 결과를 EV01~15별로 측정; 취약 문항의 학습 페이지에 원본 코드와 실제 스크린샷 연결.
- Golden Study 30~45장/Technical Appendix/Quick Review를 위 실제 소스의 **재사용 가능한 장면 그룹**으로 확장.
- QA_SEC가 최신 HEAD·원본 증빙·시각·접근성/슬라이드 출처를 별도 검증한 후 Owner 병합/공식 제출 판단.

## 채팅에서 제공된 바이너리 무결성 참조 (미등록 로컬 스냅샷)

| 산출물 | SHA-256 |
|---|---|
| 편집형 16장 PPTX | `b26cebb592a0cccc13727f16d86d4fe6c1e2ee5889d392106a7d43932d0f20c3` |
| 이미지형 16장 PPTX | `b57f7174283f16cfa6ae9b6609b673a83119dc8c7902c82fa782d878a579976c` |
| 16쪽 PDF | `ea5bbfa005a037e15d465e47befd9f8f6a5237233d549a5df794d8c1a69acdf7` |
| 전체 미리보기 PNG | `f735c333a259d119a08c33e47d41593fbe4288b9743ab4530067a2c0c43d5d54` |
