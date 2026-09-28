# B1-1 Round 02 — Final Verification

> Mission: **B1-1 — 나를 소개하는 웹페이지 처음부터 만들기**  
> 배포: https://metastudy999.github.io/codyssey-basic-web-portfolio/

## 1. 최종 상태

**REPOSITORY READY / USER ORAL REVIEW PENDING**

Repository 관점에서 공식 요구사항의 구현, Runtime, Verification, Evidence, 배포, 평가 연결 자료를 준비했다.

최종 `B1-1 CLEAR`는 사용자가 자기 말로 핵심 개념과 구현을 설명하고 모의평가까지 마친 뒤 판정한다.

## 2. 공식 요구사항 최종 체크

| 영역 | 실제 상태 | 근거 |
|---|---|---|
| HTML/CSS/JS/images 역할 분리 | PASS | `evidence/structure.txt` |
| Semantic HTML + 필수 섹션 | PASS | `index.html`, Browser Runtime |
| CSS Variables / Dark Theme | PASS | `css/style.css` |
| Flexbox / Grid / Mobile First | PASS | 375/768/1200 Runtime |
| Hamburger / Smooth Scroll | PASS | Browser Runtime |
| Header 60px / Scroll Top 300px | PASS | Code + README + Runtime |
| Dark Mode persistence | PASS | localStorage Runtime |
| IntersectionObserver 0.2 | PASS | Code + README + Runtime |
| Contact Validation | PASS | invalid/valid Runtime |
| ES6+ / map/filter/forEach | PASS | `js/script.js` |
| innerHTML + Template Literal Dynamic HTML | PASS | Projects 상태 문구 |
| GitHub API | PASS | success/error/empty/retry Runtime |
| 403 처리 | PASS | `response.status === 403` |
| Event → State → Render 3개 이상 | PASS | theme/projects/form |
| Vanilla HTML/CSS/JS 제약 | PASS | `evidence/verify.txt` |
| GitHub Pages | PASS | `main:/`, HTTP 200, Browser Runtime |
| README | PASS | 설명/기술/배포 URL/Screenshot |
| Desktop/Mobile/Dark Screenshot | PASS | `evidence/b1-1-pages-*.png` |
| Secret Pattern Scan | PASS | `evidence/verify.txt` |

## 3. GitHub Projects 페이지네이션 정책

GitHub API에서는 non-fork 공개 Repository 목록을 가져온다.

Projects는 여러 페이지로 이동할 수 있으며 화면 폭에 따라 한 페이지 카드 수를 행렬에 맞게 조정한다.

| Viewport | 페이지당 카드 | 예상 행렬 |
|---|---:|---|
| Mobile | 4 | 1 × 4 |
| Tablet | 6 | 2 × 3 |
| Desktop | 9 | 3 × 3 |

페이지 이동 UI:

```text
이전  1  2  3  4  다음
```

상태 메시지 예:

```text
30개의 공개 프로젝트 중 1–9번째를 표시했습니다. (1/4 페이지)
```

마지막 페이지는 남은 카드 수에 따라 행이 일부만 채워질 수 있다.

## 4. 핵심 Evidence

```text
training/round-02-clear/evidence/structure.txt
training/round-02-clear/evidence/verify.txt
training/round-02-clear/evidence/b1-1-pages-desktop-light.png
training/round-02-clear/evidence/b1-1-pages-mobile-375.png
training/round-02-clear/evidence/b1-1-pages-desktop-dark.png
training/round-02-clear/docs/implementation-log.md
```

## 5. 평가 직전 확인할 것

Repository 수정은 여기서 멈춘다.

평가 전 사용자가 확인할 것은 세 가지뿐이다.

1. `docs/evaluation-prep.md`를 10~15분 빠르게 읽는다.
2. Event → State → Render 흐름을 Theme / Projects / Form 세 예로 말한다.
3. 실제 Pages에서 Dark Mode, Projects, Contact, Mobile 메뉴를 짧게 시연한다.

## 6. 제한사항

- Contact Form은 Formspree 비동기 전송 코드까지 구현했지만, Formspree Endpoint 연결은 완료했으며, 실제 이메일 수신 PASS에는 Runtime 전송 확인이 필요하다.
- Projects는 반응형 Pagination(Mobile 4 / Tablet 6 / Desktop 9)과 언어별 보너스 필터를 사용한다.
- GitHub API 무인증 요청은 Rate Limit 영향을 받을 수 있으며 403을 Error UI로 처리한다.


## 7. 보너스 과제 최종 확인

| 항목 | 코드 | Runtime / 외부 연동 |
|---|---|---|
| 프로젝트 언어별 필터 | 완료 | 확인 필요 |
| Hero 타이핑 효과 | 완료 | 확인 필요 |
| Formspree 실제 전송 | 완료 | **Endpoint/HTML/AJAX 구현 완료 · Submission/Email 실제 수신 확인 필요** |
| 시스템 다크 모드 감지 | 완료 | 확인 필요 |

보너스 4개는 공식 필수 요구와 별도이며, 사용자 실제 확인 전에는 보너스 전체 PASS로 기록하지 않는다.
