# CODYSSEY B1-1 — 나를 소개하는 웹페이지 처음부터 만들기

코디세이 AI 올인원 제2기 본과정의 **B1-1 웹 기초와 프론트엔드 필수 미션** 프로젝트입니다.

현재 Repository에 남아 있는 `B4-1`, `round-01-clear` 자료는 같은 주제의 과거 참고자료이며, 현재 수행 기준은 **제2기 B1-1 Mission PDF**입니다.

---

## 1. Mission

- Mission ID: **B1-1**
- 제목: **나를 소개하는 웹페이지 처음부터 만들기**
- 분야: **AI/SW 기초 — 웹 기초와 프론트엔드**
- 구현 방식: **HTML + CSS + Vanilla JavaScript**
- 현재 작업 Round: **`training/round-02-clear/`**
- 작업 브랜치: **`round-02/b1-1-web-portfolio`**

---

## 2. 구현 기능

### HTML

- Semantic HTML
  - `header`
  - `nav`
  - `main`
  - `section`
  - `article`
  - `footer`
- Hero
- About
- Skills
- Projects
- Contact
- 이미지 `alt`
- `label`과 입력 필드 연결
- 외부 CSS / JavaScript 분리
- JavaScript `defer`

### CSS

- CSS Custom Properties
- Mobile First 반응형 설계
- Flexbox
- CSS Grid
- `768px`, `1024px` Breakpoint
- Light / Dark Theme
- 프로젝트 카드 반응형 Grid
- Scroll Reveal Animation
- 모바일 Navigation

### JavaScript

- `const` / `let`
- `querySelector`
- `addEventListener`
- Arrow Function
- Destructuring
- `map()`
- `filter()`
- `forEach()`
- `fetch()`
- `async / await`
- `try / catch`
- `localStorage`
- `IntersectionObserver`

---

## 3. 주요 기능

### 3.1 Responsive Navigation

- 모바일 Hamburger Menu
- 메뉴 열기 / 닫기
- Navigation 클릭 시 Smooth Scroll
- 메뉴 선택 후 자동 닫힘

### 3.2 Dark Mode

Light / Dark Theme를 변경할 수 있습니다.

선택한 Theme는 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.

```text
Click Event
→ State 변경
→ renderTheme()
→ DOM 변경
→ localStorage 저장
```

### 3.3 Scroll UI

- 스크롤 시 Header 상태 변경
- 300px 이상 스크롤 시 Scroll Top 버튼 표시
- 버튼 클릭 시 페이지 상단으로 Smooth Scroll

### 3.4 Scroll Reveal

`IntersectionObserver`를 사용하여 Section이 화면에 진입할 때 한 번만 나타나는 애니메이션을 구현했습니다.

### 3.5 Contact Form Validation

다음을 검증합니다.

- 이름 필수 입력
- 이메일 필수 입력
- 이메일 형식
- 메시지 필수 입력
- 필드별 오류 메시지
- 정상 입력 성공 메시지

현재 Contact Form은 **입력 검증 UI 범위**이며 실제 이메일 전송 기능은 포함하지 않습니다.

### 3.6 GitHub API Projects

GitHub REST API를 이용해 `MetaStudy999` 계정의 공개 Repository를 Projects Section에 표시합니다.

처리 상태:

```text
idle
→ loading
→ success
→ error
→ retry
→ success
```

Repository가 없는 경우를 위한 `empty` 상태도 처리합니다.

네트워크 오류 발생 시 오류 메시지와 다시 시도 기능을 제공합니다.

---

## 4. Event → State → Render

이 프로젝트에서는 사용자 Event와 외부 API 결과를 State에 반영한 후 Render 함수를 통해 DOM을 갱신합니다.

```text
Event
↓
State
↓
Render
↓
DOM
```

대표 흐름:

### Theme

```text
Theme Click
→ state.theme
→ renderTheme()
→ DOM
```

### Contact Form

```text
Input / Submit
→ state.form
→ validateForm()
→ renderFormErrors()
→ DOM
```

### GitHub API

```text
fetch()
→ state.projects
→ renderProjects()
→ DOM
```

---

## 5. 프로젝트 구조

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── .gitkeep
│   └── profile-placeholder.svg
└── training/
    ├── round-01-clear/
    └── round-02-clear/
        ├── CHECKLIST.md
        ├── README.md
        ├── docs/
        ├── environment/
        └── evidence/
```

---

## 6. 로컬 실행

Repository로 이동합니다.

```bash
cd "$HOME/projects/codyssey-basic-web-portfolio"
```

HTTP Server를 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 접속합니다.

```text
http://localhost:8000
```

---

## 7. Round 02 실제 Runtime 검증

| 검증 항목 | 결과 |
|---|---|
| Local HTTP Server | PASS |
| 기본 페이지 렌더 | PASS |
| Dark Mode | PASS |
| Theme Persistence | PASS |
| Mobile Hamburger Menu | PASS |
| Smooth Scroll | PASS |
| Scroll Top | PASS |
| Contact Form Validation | PASS |
| GitHub API Loading | PASS |
| GitHub API Success | PASS |
| GitHub API Error | PASS |
| GitHub API Retry | PASS |
| GitHub API Empty | PASS |
| Responsive 375px | PASS |
| Responsive 768px | PASS |
| Responsive 1200px | PASS |
| IntersectionObserver | PASS |
| Secret Pattern Scan | PASS |
| GitHub CLI 설치 | PASS |
| GitHub CLI 인증 | PASS |
| Round 02 Branch Push | PASS |

---

## 8. Evidence

정적 검증 Evidence:

```text
training/round-02-clear/evidence/structure.txt
training/round-02-clear/evidence/verify.txt
```

수행 과정과 Runtime 검증 기록:

```text
training/round-02-clear/docs/implementation-log.md
training/round-02-clear/CHECKLIST.md
```

과거 Round 01 결과나 예상 출력을 Round 02의 실제 Evidence로 대신하지 않습니다.

---

## 9. GitHub CLI

GitHub 명령줄 인터페이스(GitHub Command Line Interface, `gh`)를 설치하고 GitHub 인증을 확인했습니다.

```bash
gh --version
gh auth status
```

인증 계정:

```text
MetaStudy999
```

Password, Token, Personal Access Token(PAT) 등의 Secret은 Repository와 Evidence에 기록하지 않습니다.

---

## 10. GitHub Pages

GitHub Pages 배포는 다음 단계에서 진행합니다.

```text
Deployment URL: PENDING
```

배포 완료 후 실제 GitHub Pages URL에서 다시 Runtime을 검증합니다.

---

## 11. 최종 제출 전 추가 Evidence

최종 제출 전 실제 브라우저에서 다음 Screenshot Evidence를 확보합니다.

- Desktop
- Mobile
- Dark Mode

예상 이미지나 과거 Round 01 Screenshot을 현재 Evidence로 사용하지 않습니다.

---

## 12. Legacy Reference

Repository의 다음 자료는 같은 주제의 과거 참고자료입니다.

```text
b4-1-mission.pdf
b4-1-mission.md
b4-1-evaluation.md
training/round-01-clear/
```

현재 제2기 신규 수행은 다음 위치에서 관리합니다.

```text
training/round-02-clear/
```

---

## 13. CLEAR 원칙

다음 조건을 모두 만족해야 최종 CLEAR로 판정합니다.

```text
공식 요구사항
+ 실제 구현
+ 실제 Runtime
+ Verification PASS
+ 필요한 Evidence
+ GitHub Pages 실제 배포
+ 배포 사이트 재검증
+ 평가 설명 가능
+ Secret 노출 없음
```

현재 남은 주요 단계:

1. GitHub Pages 배포
2. 배포 URL Runtime 재검증
3. Desktop / Mobile / Dark Mode Screenshot Evidence
4. 평가 설명 준비
5. 최종 CHECKLIST 점검
