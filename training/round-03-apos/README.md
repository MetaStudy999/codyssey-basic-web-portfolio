# CODYSSEY B1-1 — APOS Round 03

## Mission Identity

- Generation: CODYSSEY Round 02 / 제2기
- Mission ID: B1-1
- Title: 나를 소개하는 웹페이지 처음부터 만들기
- Stable Topic: web-portfolio
- Execution Round: round-03-apos
- Execution Root: `training/round-03-apos`
- Writable Source: `training/round-03-apos/04-src`
- Status: CLEAR_CANDIDATE_PUBLIC_VERIFIED
- Owner Start Approval: APPROVED

## Source of Truth

Round 03에서 수정 가능한 소스는 `04-src/` 하나뿐이다.

다음은 참고 전용(REFERENCE_ONLY)이다.

- repository root의 기존 `index.html`, `css/`, `js/`, `images/`
- `training/round-01-clear/`
- `training/round-02-clear/`

## Official Sources

- Mission: `B1-1. 나를 소개하는 웹페이지 처음부터 만들기.pdf`
- Evaluation: `responsive_web_javascript.md`
- Classification: A — Official source directly verified

## W171 Scope

1. Start Gate
2. Branch 생성
3. 최소 Scaffold 생성
4. 공식 Requirement → Evaluation Mapping
5. CORE 최소 실행 가능 구조 진입

발표자료와 Round 03 Evidence는 실제 Runtime 검증 이후 생성한다.

## CORE Minimum Passing Path

1. HTML 구조
2. CSS 기본 / Responsive
3. JavaScript 핵심 Interaction
4. Form Validation
5. GitHub API
6. State → Render
7. Error / Negative Path
8. Runtime Verification

## Learning Model

핵심 동작은 다음 흐름으로 설명 가능해야 한다.

`User Action → Event → JavaScript → State → Render(DOM/CSS) → Screen`

## Current Implementation

`04-src/`에는 순수 HTML/CSS/JavaScript 기반의 첫 실행 가능 버전을 둔다.

포함 범위:

- Semantic HTML: Hero / About / Skills / Projects / Contact / Footer
- Mobile First 반응형 CSS + 768px / 1024px
- Hamburger / Smooth Scroll / Scroll Top / Navigation style
- Dark Mode + localStorage
- Intersection Observer
- Contact Form validation
- GitHub Public API + Loading / Success / Error / Empty / 403 처리
- 중앙 `STATE` 객체 기반 Event → State → Render 흐름

## Security

- Security Profile: WEB_PUBLIC_BASELINE
- GitHub API: 인증 없는 Public API 사용
- API Key / Token / Password / Private Key 저장 금지
- Formspree / EmailJS는 Bonus 단계에서 별도 검토

## Deferred

다음 항목은 W171 완료 조건이 아니다.

- GitHub Pages 배포
- Fresh evidence 캡처
- 발표자료
- Bonus 기능


## Actual Browser Runtime Verification

Round 03 exact candidate:

`95b5dd8283a611e27c0c0a9185060a213e53ada9`

was executed in real Chromium through APOS with the mission source mounted read-only.

Result:

- Runtime: **PASS**
- Candidate failure: **false**
- Environment failure: **false**
- Desktop / Tablet / Mobile: **PASS**
- Dark mode + persistence: **PASS**
- Mobile menu: **PASS**
- Scroll interactions: **PASS**
- Form negative/positive paths: **PASS**
- GitHub Public API live runtime: **PASS**
- GitHub API 403 / retry / empty-state paths: **PASS**
- Independent visual review: **PASS**
- Mission source mutation: **false**

Evidence:

- Run ID: `37582457341`
- Job ID: `112664996295`
- Artifact ID: `11465355693`
- Artifact digest: `sha256:2ec015a8383a99c83bb36f409a7ae7ea08063f5fd11b60345c657046a49d11db`
- Evidence map: `evidence/EVIDENCE-MAP.md`

## Public GitHub Pages Runtime

Public URL:

`https://metastudy999.github.io/codyssey-basic-web-portfolio/training/round-03-apos/04-src/`

Verification:

- Pages deployment: **PASS**
- Public index HTTP 200: **PASS**
- Public CSS HTTP 200: **PASS**
- Public JavaScript HTTP 200: **PASS**
- Round 03 page marker: **PASS**
- Public Runtime Run: `37616681465`
- Public Runtime Artifact: `11479961600`
- Public Runtime Artifact digest: `sha256:8954041bc8b924bd573dbbfb78331786c60309f871464df8c6321d5954631cfb`

## Fresh Screenshot Evidence

Fresh browser screenshots were captured from the exact Round 03 runtime candidate and preserved in the verified GitHub Actions artifact.

- Artifact ID: `11465355693`
- Artifact digest: `sha256:2ec015a8383a99c83bb36f409a7ae7ea08063f5fd11b60345c657046a49d11db`
- Exact mission candidate: `95b5dd8283a611e27c0c0a9185060a213e53ada9`
- Independent visual review: **PASS**

Screenshot set:

- `desktop-light.png` — desktop / light theme
- `desktop-dark.png` — desktop / dark theme
- `tablet.png` — tablet responsive layout
- `mobile.png` — 375px mobile layout

These screenshots are mapped in `evidence/EVIDENCE-MAP.md` and were reviewed together with the Playwright trace, console/network summaries, and runtime report.


### Final CLEAR Remaining Gate

Only one gate remains:

1. **Learning Minimum Gate** — Owner가 핵심 개념을 자신의 말로 설명

따라서 현재 상태는 **CLEAR_CANDIDATE_PUBLIC_VERIFIED**이며 FINAL CLEAR는 Learning Minimum Gate 이후 확정한다.
