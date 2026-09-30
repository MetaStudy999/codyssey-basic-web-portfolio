# B1-1 Presentation Script

## 30초 전체 설명

B1-1은 외부 프레임워크 없이 HTML, CSS, JavaScript로 반응형 포트폴리오를 만든 미션입니다. HTML은 구조, CSS는 표현과 반응형 레이아웃, JavaScript는 이벤트·상태·렌더링을 담당합니다. 핵심은 Event가 State를 바꾸고 Render가 DOM을 갱신하는 흐름이며, GitHub API 비동기 처리와 GitHub Pages 배포까지 실제로 검증했습니다.

## Slide 1
Vanilla Web로 웹의 기본 동작을 직접 구현했습니다. 단순 화면 구현이 아니라 구조, 반응형, 상태, API, 배포까지 연결했습니다.

## Slide 2
HTML은 구조, CSS는 표현, JavaScript는 동작을 담당합니다. 사용자 Event가 State를 바꾸고 Render가 DOM을 갱신합니다.

## Slide 3
각 요구사항을 실제 파일과 함수에 연결했습니다. 평가에서는 기능 존재 여부뿐 아니라 왜 그 방법을 선택했는지를 코드와 함께 설명합니다.

## Slide 4
Theme, Contact Form, GitHub Projects 모두 Event → State → Render → DOM 패턴으로 동작합니다. Projects는 외부 GitHub API와 연결되고 Form은 Formspree와 연결됩니다.

## Slide 5
실제 GitHub Pages에서 모바일 375px, Desktop Light/Dark, Projects, Contact, Scroll을 검증했습니다.

## Slide 6
PASS 주장은 실제 Round 02 Runtime과 Evidence로 뒷받침했습니다. 과거 Round 01 Evidence를 현재 PASS로 대신하지 않았습니다.

## Slide 7
평가 답변은 WHAT, WHY, HOW, VERIFY, LIMITATION 순서로 설명합니다. 한 문장으로는 “Event가 State를 바꾸고 Render가 DOM을 갱신한다”입니다.
