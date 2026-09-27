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

