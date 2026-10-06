# B1-1 Round 03 Requirement / Evaluation Checklist

표기:
- [x] W171에서 구현 또는 문서화
- [ ] 후속 Runtime/Evidence 단계 필요
- [~] 공식 선택 항목 또는 후순위

## 1. Official Requirement → Implementation → Verification → Evaluation

### HTML / Structure

- [x] Semantic HTML: header / nav / main / section / article / footer
- [x] Hero / About / Skills / Projects / Contact / Footer
- [x] Anchor navigation
- [x] Meaningful image alt
- [x] Form label for-id 연결
- [x] External CSS / JavaScript
- [ ] 최신 Chrome Runtime 확인
- [ ] Fresh screenshot evidence

Evaluation:
- HTML/CSS/JavaScript 역할 설명
- Semantic HTML 선택 이유 설명

### CSS / Responsive

- [x] `:root` variables
- [x] `[data-theme="dark"]` variables
- [x] Navigation Flexbox
- [x] Projects Grid with auto-fit/minmax
- [x] Mobile First
- [x] 768px breakpoint
- [x] 1024px breakpoint
- [x] Hover + transition
- [x] Box shadow
- [ ] Desktop / Tablet / Mobile Runtime 확인

Evaluation:
- CSS 변수 사용 이유 설명
- Flexbox vs Grid 설명
- Mobile First 선택 이유 설명

### JavaScript / DOM / Events

- [x] `defer`
- [x] `const` / `let` only
- [x] `querySelector` / `querySelectorAll`
- [x] `textContent` / `innerHTML`
- [x] `classList`
- [x] `addEventListener`
- [x] click / submit / scroll / input
- [x] `preventDefault()`
- [x] Arrow functions
- [x] Template literals
- [x] Destructuring
- [x] `map()`
- [x] `filter()` (fork 제외에 사용)
- [x] `forEach()`

Evaluation:
- onclick vs addEventListener 비교 설명
- map()/filter() 데이터 변환 설명

### Interaction

- [x] Hamburger menu
- [x] Smooth scroll
- [x] Scroll-top button: 300px
- [x] Navigation style change: 60px
- [x] Dark Mode
- [x] localStorage
- [x] Intersection Observer: threshold 0.2
- [ ] Browser interaction Runtime 확인

### Form UX

- [x] Name / Email / Message
- [x] Required validation
- [x] Email format validation
- [x] Field-near error UI
- [x] Success UI
- [x] Input event revalidation
- [ ] Runtime negative-path evidence

### GitHub API

- [x] Public endpoint: `https://api.github.com/users/MetaStudy999/repos`
- [x] `fetch`
- [x] `async/await`
- [x] `try/catch`
- [x] Loading UI
- [x] Success UI
- [x] Error UI
- [x] Empty UI
- [x] 403 / rate-limit specific handling
- [x] Retry button
- [ ] Live API Runtime 확인
- [ ] 403 simulated/actual evidence

Evaluation:
- async/await + try/catch 성공/실패 분기 설명

### State Pattern

중앙 `STATE` 객체를 사용한다.

- [x] Theme event → state → theme render
- [x] API request → projects state → projects render
- [x] Form input/submit → form state → feedback render
- [x] Menu click → menu state → menu render

Evaluation:
- Event → State → Render 흐름 설명
- STATE 객체를 분리한 이유 설명

## 2. Deployment / Evidence

- [ ] GitHub Pages 배포
- [ ] Public URL 검증
- [ ] Desktop screenshot
- [ ] Mobile screenshot
- [ ] Dark mode screenshot
- [ ] README에 최종 배포 URL 및 Fresh screenshots 반영

## 3. Bonus — CORE PASS Candidate 이후

- [~] BONUS-01 Language Project Filter
- [~] BONUS-02 Hero Typing
- [~] BONUS-03 Formspree / EmailJS
- [~] BONUS-04 System Dark Mode

## 4. Learning Minimum Gate

후속 검증에서 사용자가 자신의 말로 설명해야 한다.

1. HTML / CSS / JavaScript 역할
2. 기능 하나의 User Action → Event → State → Render 흐름
3. 오류 하나의 증상 → 원인 → 확인 → 수정 → 재검증
4. 핵심 코드 하나의 변경 전 → 변경 후 → 이유 → 결과
