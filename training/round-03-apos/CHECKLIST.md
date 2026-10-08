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
- [x] 최신 Chrome Runtime 확인
- [x] Fresh screenshot evidence

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
- [x] Desktop / Tablet / Mobile Runtime 확인

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
- [x] Browser interaction Runtime 확인

### Form UX

- [x] Name / Email / Message
- [x] Required validation
- [x] Email format validation
- [x] Field-near error UI
- [x] Success UI
- [x] Input event revalidation
- [x] Runtime negative-path evidence

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
- [x] Live API Runtime 확인
- [x] 403 simulated/actual evidence

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

- [x] GitHub Pages 배포
- [x] Public URL 검증
- [x] Desktop screenshot — Runtime Artifact `11465355693` / `desktop-light.png`
- [x] Mobile screenshot — Runtime Artifact `11465355693` / `mobile.png`
- [x] Dark mode screenshot — Runtime Artifact `11465355693` / `desktop-dark.png`
- [x] README에 최종 배포 URL 및 Fresh screenshot provenance 반영

## 3. Bonus — CORE PASS Candidate 이후

- [~] BONUS-01 Language Project Filter
- [~] BONUS-02 Hero Typing
- [~] BONUS-03 Formspree / EmailJS
- [~] BONUS-04 System Dark Mode

## 4. Learning Minimum Gate

Status: **PASS — Owner explanation recorded**

Owner가 자신의 말로 다음 네 항목을 설명했다.

- [x] HTML / CSS / JavaScript 역할
- [x] 기능 하나의 User Action → Event → State → Render 흐름
- [x] 오류 하나의 증상 → 원인 → 확인 → 수정 → 재검증
- [x] 핵심 코드 하나의 변경 전 → 변경 후 → 이유 → 결과


## 5. Round 03 Runtime Evidence

- Runtime verifier: APOS `APOS-CODYSSEY-B1-1-RUNTIME-080`
- Exact mission candidate: `95b5dd8283a611e27c0c0a9185060a213e53ada9`
- Chromium runtime: **PASS**
- Candidate failure: **false**
- Environment failure: **false**
- Independent visual review: **PASS**
- Mission source mutation: **false**
- Evidence Artifact ID: `11465355693`
- Evidence Artifact SHA-256: `2ec015a8383a99c83bb36f409a7ae7ea08063f5fd11b60345c657046a49d11db`
- Evidence map: `training/round-03-apos/evidence/EVIDENCE-MAP.md`

Current final status:

```text
CORE Runtime PASS
→ Visual Review PASS
→ Public GitHub Pages Runtime PASS
→ Learning Minimum Gate PASS
→ FINAL CLEAR PASS
```


## 6. Public GitHub Pages Evidence

- Public URL: `https://metastudy999.github.io/codyssey-basic-web-portfolio/training/round-03-apos/04-src/`
- Pages deployment Run: `37616679287` — **PASS**
- Public Runtime Run: `37616681465` — **PASS**
- Public Runtime source main SHA: `81dcfcbd5456f4113f28ec301d0218e900c30508`
- Public Runtime Artifact ID: `11479961600`
- Artifact SHA-256: `8954041bc8b924bd573dbbfb78331786c60309f871464df8c6321d5954631cfb`
- Index HTTP: **200**
- CSS HTTP: **200**
- JavaScript HTTP: **200**
- Round 03 marker: **PASS**
- Title marker: **PASS**
