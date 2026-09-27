# B1-1 Round 02 — Implementation Log

> 목적: 실제 구현 과정을 재현 가능한 형태로 기록한다.  
> 원칙: 사용자가 실제 실행한 결과만 PASS로 기록한다.

## Step 1 — 기본 웹 구조 생성

### 목적

B1-1 공식 요구의 기본 파일 역할 분리를 먼저 만든다.

```text
index.html      → HTML 구조
css/style.css   → CSS 표현/반응형
js/script.js    → JavaScript 동작
images/         → 이미지 자원
```

### 실제 생성 명령

```bash
mkdir -p css js images

touch index.html
touch css/style.css
touch js/script.js
touch images/.gitkeep
```

### 실제 확인 결과

```text
=== BRANCH ===
round-02/b1-1-web-portfolio

=== B1-1 WEB STRUCTURE ===
./css/style.css
./js/script.js
./images
./images/.gitkeep
./index.html

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**PASS**

- 현재 작업 브랜치가 `round-02/b1-1-web-portfolio`임을 확인
- `index.html` 생성 확인
- `css/style.css` 생성 확인
- `js/script.js` 생성 확인
- `images/` 및 `.gitkeep` 생성 확인
- `git status`의 `??`는 새 파일이 아직 Git 추적 전이라는 의미이며 오류가 아님
- 아직 구현 내용은 비어 있으므로 기능 PASS는 아님

## 다음 단계

`index.html`에 시맨틱 HTML 구조와 필수 섹션을 작성한다.

필수 섹션:
- Hero
- About
- Skills
- Projects
- Contact
- Footer

필수 시맨틱 요소:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`



## Step 2 — 시맨틱 HTML 구조 작성

### 목적

B1-1 공식 요구에 맞게 HTML 구조와 필수 섹션을 작성한다.

필수 시맨틱 요소:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

필수 섹션:
- Home/Hero
- About
- Skills
- Projects
- Contact
- Footer

추가 확인:
- 외부 CSS 연결
- JavaScript `defer` 연결
- 프로필 자리 표시 이미지 존재

### 실제 검증 결과

```text
=== SEMANTIC TAGS ===
header
nav
main
section
article
footer

=== REQUIRED SECTIONS ===
id="home"
id="about"
id="skills"
id="projects"
id="contact"

=== CSS LINK ===
css/style.css

=== JS DEFER ===
js/script.js (defer)

=== PROFILE IMAGE ===
FOUND

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**PASS**

- 필수 시맨틱 태그 존재 확인
- 필수 섹션 ID 존재 확인
- 외부 CSS 연결 확인
- JavaScript `defer` 연결 확인
- 프로필 이미지 파일 존재 확인
- 새 파일이 아직 Git 추적 전임을 확인
- 아직 CSS/JavaScript 기능 Runtime PASS는 아님

## 다음 단계

CSS 변수, Mobile First, Flexbox, Grid, Dark Theme 기본 스타일을 작성한다.


## Step 3 — CSS 기본 스타일 및 반응형 구조

### 목적

B1-1 공식 요구에 맞게 CSS 변수, 다크 테마, Mobile First, Flexbox, Grid, 768px/1024px breakpoint를 구성한다.

### 실제 검증 결과

```text
=== ROOT VARIABLES ===
:root

=== DARK THEME ===
[data-theme="dark"]

=== FLEXBOX NAV ===
display: flex

=== PROJECT GRID ===
grid-template-columns

=== BREAKPOINTS ===
@media (min-width: 768px)
@media (min-width: 1024px)

=== MOBILE HAMBURGER ===
.menu-toggle

=== INLINE STYLE CHECK ===
NO_INLINE_STYLE

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**PASS**

- CSS 변수 `:root` 확인
- 다크 테마 변수 `[data-theme="dark"]` 확인
- Flexbox 사용 확인
- Projects Grid 구조 확인
- 768px / 1024px 반응형 breakpoint 확인
- 모바일 햄버거 관련 스타일 확인
- HTML inline style 없음 확인
- 파일은 아직 Git 추적 전이며 오류가 아님
- 실제 viewport Runtime 검증은 아직 수행하지 않았으므로 반응형 Runtime PASS는 아님

## 다음 단계

JavaScript에서 Event → State → Render → DOM 흐름을 구현한다.


## Step 4 — JavaScript Event → State → Render 구조

### 목적

B1-1 핵심 학습 목표인 사용자 이벤트 → 상태 변경 → 렌더 → DOM 업데이트 흐름을 JavaScript로 구성한다.

구현 범위:
- 모바일 메뉴 상태
- 다크/라이트 테마 상태
- `localStorage` 테마 유지
- smooth scroll
- 60px 스크롤 시 header 상태 변경
- 300px 스크롤 시 scroll-top 버튼 표시
- `IntersectionObserver` 기반 reveal
- `resize` 시 모바일 메뉴 상태 정리

### 실제 정적 검증 결과

```text
=== STATE ===
const state = {

=== EVENT LISTENERS ===
menuToggle.addEventListener
themeToggle.addEventListener
scrollTopButton.addEventListener
link.addEventListener
window.addEventListener

=== LOCAL STORAGE ===
localStorage.getItem
localStorage.setItem

=== RENDER FUNCTIONS ===
const renderTheme
const renderMenu
const renderScrollUi

=== SCROLL THRESHOLDS ===
NAV_SCROLL_THRESHOLD = 60
SCROLL_TOP_THRESHOLD = 300

=== OBSERVER ===
OBSERVER_THRESHOLD = 0.2
IntersectionObserver

=== NO VAR ===
NO_VAR

=== NO INLINE ONCLICK ===
NO_INLINE_ONCLICK

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**정적 검증 PASS**

- 명시적 상태 객체 존재
- `addEventListener` 기반 이벤트 연결 확인
- `localStorage` get/set 확인
- Theme/Menu/Scroll 렌더 함수 확인
- 공식 기준값 60px / 300px 확인
- IntersectionObserver threshold 0.2 확인
- `var` 미사용 확인
- inline `onclick` 미사용 확인
- 파일은 아직 Git 추적 전
- 브라우저 Runtime 검증 전이므로 햄버거/테마/스크롤 기능 자체는 아직 Runtime PASS가 아님

### 평가 연결

다크 모드 기준 코드 흐름:

```text
click Event
→ toggleTheme()
→ state.theme 변경
→ setTheme()
→ renderTheme()
→ DOM(data-theme) 변경
→ localStorage 저장
```

## 다음 단계

Contact Form의 입력 → 검증 상태 → 에러/성공 렌더 흐름을 구현한다.
