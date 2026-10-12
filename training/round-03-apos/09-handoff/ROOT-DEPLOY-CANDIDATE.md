# B1-1 메인 주소 전환 검증 후보

메인 주소 `/`는 B1-1 Round03 SL02 산악 디자인으로 교체하는 후보입니다. 기존 1기 사이트는 `legacy/round-01-portfolio/`에 원본 HTML·CSS·JS·SVG를 Git Blob 값 그대로 보존합니다.

- 선행 보너스 PR #19: `8059498326c4cbfb5ab35e0da7ca32a0e243538f` (미병합 Draft).
- 선행 산악 디자인 PR #21: `e5c4f5b3a7614b4a4a33c3b2a817219ceaae9dff` (미병합 Draft).
- 메인 HTML은 PR #21 원본에서 CSS·JavaScript·About 이미지 참조를 `training/round-03-apos/04-src/`로 조정했습니다. CSS 내부 배경 이미지 경로는 원본 그대로입니다.
- 구 버전 `index.html`: 301ba10743cb80595eb20e243e7b1de4757e4dfa
- 구 버전 `css/style.css`: 63a67f2adca9815a31fc7aab439a1989a4d4887c
- 구 버전 `js/script.js`: e0b8c011fbae55c1a8913b3db0ceb7fe71cf2367
- 구 버전 `images/profile-placeholder.svg`: 8cf400174e07418a22a401e756230ec6d3feec0a
- 기존 루트 CSS/JS는 변경하지 않고 보존합니다.

**NO MERGE / NO LIVE RELEASE**: PR #19·#21의 독립 QA_SEC PASS와 승인·병합 조정, 이 PR의 독립 QA_SEC PASS, 별도 MASTER/Owner 병합 및 공개 배포 승인, 실제 Pages 공개 이미지 검증까지 마쳐야 합니다. 후보 브라우저 CI 성공은 독립 QA나 공개 배포와 다릅니다. BONUS-03 Formspree 실제 수신은 별도 대기 상태입니다.
