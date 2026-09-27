# B1-1 Round 02 — Minimum Passing Path

> 목적: 제2기 B1-1 공식 요구사항과 기존 평가항목을 만족시키는 **최소 통과 경로(Minimum Passing Path)** 를 먼저 확정한다.  
> 원칙: 필수 요구를 먼저 끝내고, 보너스/선택 고도화는 CLEAR 이후로 미룬다.

## 1. 최소 구현 범위

### M1 — 기본 구조
- `index.html`
- `css/style.css`
- `js/script.js`
- `images/`
- 외부 CSS/JS 연결
- `defer` 적용

### M2 — HTML 시맨틱 구조
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

접근성 최소 기준:
- 이미지 `alt`
- form `label for` ↔ `input id`

### M3 — CSS / Responsive
- CSS 변수 `:root`
- Dark theme 변수 `[data-theme="dark"]`
- nav: Flexbox
- Projects: Grid
- Mobile First
- 768px / 1024px breakpoint
- mobile hamburger
- hover / transition / box-shadow

### M4 — JavaScript DOM / Event
- `const`, `let`
- inline `onclick` 금지
- `querySelector` / `querySelectorAll`
- `addEventListener`
- `classList`
- `click`, `submit`, `scroll`, `input`
- `preventDefault()`

### M5 — 필수 Interaction
- hamburger toggle
- smooth scroll
- scroll-top button
- nav scroll state
- dark/light mode
- localStorage persistence
- IntersectionObserver 기반 scroll animation

기준:
- scroll-top: 300px
- nav style: 60px
- observer threshold: 0.2

### M6 — Contact Form Validation
- name
- email
- message
- required validation
- email format validation
- field-near error message
- valid submit success message

### M7 — GitHub API
- `fetch`
- `async/await`
- `try/catch`
- 본인 GitHub repositories endpoint
- loading
- success
- error
- retry
- empty

데이터 변환:
- destructuring
- template literal
- `map()`
- `forEach()`
- `filter()`은 필요할 때 최소 범위로 사용

### M8 — 상태 → 렌더 흐름
최소 3개:
1. theme state → render
2. project API state → render
3. form validation state → render

설명을 쉽게 하기 위해 명시적 상태 객체를 사용할 수 있으나, 특정 `STATE` 이름 자체를 공식 요구라고 표현하지 않는다.

### M9 — README
최소 포함:
- 프로젝트 소개
- 사용 기술
- 로컬 실행 방법
- 기준값(300px / 60px / threshold 0.2)
- GitHub Pages 배포 URL
- desktop/mobile/dark screenshot

### M10 — GitHub Pages 배포
- 외부 URL 생성
- 배포 URL에서 전체 필수 기능 재검증

---

## 2. 검증 순서

```text
Static Structure
→ Local Browser Runtime
→ Responsive
→ Interaction
→ Form
→ GitHub API
→ State Persistence
→ Secret/Forbidden Framework Scan
→ GitHub Pages
→ Deployed Runtime Re-check
→ Evidence
→ Evaluation Explanation
```

## 3. Evidence 최소 세트

실제 검증 시 아래 파일/캡처만 우선 확보한다.

```text
training/round-02-clear/evidence/
├── structure.txt
├── verify.txt
├── desktop.png
├── tablet.png
├── mobile.png
├── dark-mode.png
├── form-invalid.png
├── form-valid.png
├── api-success.png
├── api-error.png
├── api-empty.png
└── deploy.png
```

실제 필요가 생길 때 생성하며, 빈 Evidence 파일을 미리 만들지 않는다.

## 4. CLEAR 이후로 미룰 것

아래는 현재 최소 통과 경로에서 제외한다.

- 타이핑 애니메이션 고도화
- Formspree / EmailJS 실제 메일 전송
- 고급 프로젝트 필터 UI
- 과도한 디자인 리뉴얼
- 외부 UI 프레임워크
- React 전환
- 백엔드 추가
- 고급 CI/CD 자동화

## 5. 구현 순서

```text
Step 1. Round 01 Reference 구조 확인
Step 2. Round 02 실제 구현 위치 확정
Step 3. 기본 HTML 구조
Step 4. CSS + Responsive
Step 5. JS DOM/Event
Step 6. Interaction
Step 7. Contact Validation
Step 8. GitHub API
Step 9. Local Runtime Verification + Evidence
Step 10. README
Step 11. GitHub Pages
Step 12. Deployed Verification + Evidence
Step 13. Evaluation Explanation
```

## 6. Gate 3 판정

**Gate 3 — COMPLETE**

- 필수 구현 목록 확정
- 선택/보너스 고도화 분리
- 실제 실행 순서 확정

다음 단계는 **Gate 4 — 필요한 개념만 적시 학습(JIT Learning)** 이다.
