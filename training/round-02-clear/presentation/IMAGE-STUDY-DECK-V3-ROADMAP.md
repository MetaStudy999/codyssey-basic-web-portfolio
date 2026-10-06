# B1-1 Image Study Deck v3 Roadmap

> Mission: B1-1 — 나를 소개하는 웹페이지 처음부터 만들기
>
> Mode: Study-first Image Learning Deck
>
> Target: 약 40~45장
>
> Current Visual Storyboard: 01~32 생성 완료
>
> Current Golden Master Status: NOT YET

## 1. 목적

이 Deck은 짧은 발표만을 위한 자료가 아니다.

```text
개인 공부
→ 개념 이해
→ 실제 코드 연결
→ Runtime 확인
→ Evidence 검증
→ 재현
→ 설명
→ 평가 대응
→ 다른 문제로 전이
```

을 지원하는 **이미지형 학습 교재 + 발표자료**다.

핵심 규칙:

```text
Page Density ↓
Page Count ↑
Text ↓
Visual Memory ↑
```

## 2. Current Progress

| Range | Topic | Visual | Truth | Status |
|---|---|---:|---:|---|
| 01–04 | Story / Learning / Event-State-Render | 높음 | 부분 | STORYBOARD DONE |
| 05–08 | Requirement / Architecture / Flow | 높음 | 부분 | STORYBOARD DONE |
| 09–12 | State / Code / Function | 높음 | 낮음~부분 | TRUTH REPLACEMENT REQUIRED |
| 13–16 | Runtime / Responsive / Projects UI | 높음 | 낮음 | ACTUAL SCREENSHOT REQUIRED |
| 17–20 | Verify / Evidence / Troubleshooting / Security | 높음 | 낮음~부분 | ACTUAL EVIDENCE REQUIRED |
| 21–24 | Framework / Layout / Deploy / Trade-off | 높음 | 부분 | DECISION CLARIFICATION REQUIRED |
| 25–28 | Reproduction / Explain | 높음 | 학습 검증 대기 | PRACTICE REQUIRED |
| 29–32 | Defense / Mastery / Context / Journey | 높음 | 부분 | MASTER CLAIM CONTROL REQUIRED |
| 33–45 | Study Note Expansion | 예정 | 실제 Source 기반 | NEXT |

## 3. Visual Storyboard 01–32

### 01–04 Story / Concept

1. HERO — B1-1 Journey
2. WHY — 문제 → 아이디어 → 가능성
3. LEARNING MAP — HTML/CSS/JS → DOM/Event/State/Render → API/Deploy/Evidence
4. EVENT → STATE → RENDER — 4컷 Concept

### 05–08 Structure

5. REQUIREMENT MAP
6. BEGINNER VIEW
7. TECH VIEW
8. END-TO-END FLOW

### 09–12 Code Model

9. STATE MODEL
10. CODE STUDY · THEME
11. CODE STUDY · PROJECTS
12. FUNCTION MAP

### 13–16 Runtime

13. RUNTIME · LIGHT
14. RUNTIME · DARK
15. RESPONSIVE
16. PROJECTS UI

### 17–20 Verification

17. VERIFY
18. EVIDENCE MAP
19. TROUBLESHOOTING
20. FAILURE & SECURITY

### 21–24 Decision

21. DECISION · FRAMEWORK
22. DECISION · LAYOUT
23. DECISION · DEPLOY
24. TRADE-OFF

### 25–28 Reproduction

25. REPRODUCTION · L1
26. REPRODUCTION · L2·L3
27. REPRODUCTION · L4·L5
28. SPEAK & EXPLAIN

### 29–32 Mastery / Context

29. DEFENSE Q&A
30. MISSION → MASTERY
31. MEMORY / CONTEXT FIX
32. NEXT JOURNEY

## 4. Truth Replacement Priority

다음 슬라이드는 새 디자인보다 실제 Source 치환이 우선이다.

```text
P0: 04, 10, 11, 13, 14, 15, 16, 17, 18, 20
P1: 07, 08, 09, 12, 21, 23, 24, 30
P2: 나머지 Visual polish
```

### 대표 수정

- Slide 04: `onClick()` 표현 제거 → 실제 `addEventListener()` 기반 설명
- Slide 10: React/useState 형태 제거 → 실제 Vanilla JS `setThemeMode()` / `renderTheme()`
- Slide 11: 가상 `/api/projects` 제거 → 실제 GitHub REST API `loadProjects()` / `setProjectsState()` / `renderProjects()`
- Slide 13~16: 생성 UI를 `RUNTIME`으로 사용 금지 → 실제 Screenshot 사용
- Slide 17~18: 실제 R01~R15 / verify.txt / structure.txt / Evidence Path 사용
- Slide 20: generic Authentication/Encryption 중심 표현 제거 → B1-1 실제 Secret / XSS 경계 / Validation / aria / reduced-motion / API error-retry 중심
- Slide 23: GitHub Pages = 실제 Delivery, Vercel/Netlify = Alternative 비교로 분리
- Slide 30: `100% MASTER` 금지 → Repository PASS와 L1~L5 Human Mastery 분리

## 5. Study Note Expansion 33–45

33. GLOSSARY — DOM / Event / State / Render 한눈에 보기
34. SEMANTIC HTML — 구조를 의미로 읽기
35. CSS MOBILE FIRST — 375 → 768 → 1024+
36. EVENT MODEL — `addEventListener()` 실제 흐름
37. GITHUB API — Request → Response → JSON
38. FORMSPREE — Validate → POST → Result
39. ASYNC STATES — loading / success / empty / error / retry
40. ACCESSIBILITY — Semantic / label / aria / reduced-motion
41. ACTUAL CODE TRACE — File → Function → State → Render
42. ACTUAL EVIDENCE WALL — 실제 Screenshot 5장 + verify/structure
43. QUICK REVIEW — Keyword → Flow → Code → Evidence → Limitation
44. ORAL REVIEW — 10초 / 30초 / 1분 설명
45. GOLDEN MASTER GATE — G1~G10

## 6. Image Slide Production Rule

최종 방향:

```text
1 Slide = 1 Finished Image Composition
```

PowerPoint는 완성 이미지 슬라이드를 담는 Container로 사용할 수 있다.

제작 과정:

```text
Repository Truth Lock
→ Storyboard
→ Visual Background / Comic
→ Actual Text / Code / Screenshot Composite
→ Full-screen QA
→ Export Image
→ PPT/PDF Container
```

## 7. Badge Rule

- AI-VISUAL — 생성 시각자료
- EXPLAIN — 단순화된 설명
- CODE — 실제 코드
- RUNTIME — 실제 실행
- EVIDENCE — 실제 검증
- OFFICIAL — 공식 요구
- DECISION — 설계 선택
- MASTER — 숙달 실제 검증 후에만

## 8. Completion Gate

Visual 32장 또는 45장을 만들었다는 사실만으로 완료하지 않는다.

최종 Gate:

1. Visual Impact
2. Technical Accuracy
3. Evidence Integrity
4. Traceability
5. Learning Value
6. Reproduction
7. Explanation
8. Evaluation Defense
9. Full-screen Readability
10. Accessibility

현재 단계:

```text
VISUAL STORYBOARD 01–32 = DONE
TRUTH REPLACEMENT        = IN PROGRESS
STUDY EXPANSION 33–45    = NEXT
GOLDEN MASTER FINAL      = NOT YET
```
