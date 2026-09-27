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
