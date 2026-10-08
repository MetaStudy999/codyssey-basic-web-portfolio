# Round 03 독립 학습·발표자료 제작 계획

**상태: PREVIEW_DRAFT_CREATED / GOLDEN_MASTER_FINAL=FAIL.** 17장 검토용 PPTX/PDF는 제작되었으나 기존 사용자 결정 D01~D14/Golden v3의 최종 요건을 충족하지 못했다. 이 파일은 Repo 내 최종 산출물로 등록되지 않았다. Round 01/02 PPT, 만화, 스크린샷을 그대로 복사하지 않는다.

## 산출물
- Main Deck: 발표 핵심 약 14~16장 (가독성 우선)
- Study Deck: 단어·4컷 이해·흐름도·실제 코드·증빙 중심, 장수는 필요하면 40장 이상
- Quick Review: 핵심 용어/흐름/제한 사항 1장
- 실제 PPTX/PDF/Google Slides는 제작 후 파일과 검증 결과를 이 폴더에 색인

## 제작 순서
공식 B1-1 요구 → Round 03 `04-src/` 코드 → `evidence/`와 실제 Screenshot 검증 → Scene/Slide 설계 → 사실 기반 Composite → 16:9 전체화면 점검 → 사용자 학습 검토 → 최종 QA.

## 초기 발표 목차
1. 미션과 목표 / 2. 필수 요구 / 3. HTML-CSS-JS 비유·개념 / 4. 4컷 이벤트 만화 / 5. 전체 데이터 흐름 / 6. HTML 구조 / 7. 반응형 CSS / 8. JS 상태 모델 / 9. Dark Mode 코드 / 10. GitHub API / 11. 폼 검증 / 12. 실제 Desktop·Mobile·Dark / 13. 실패·복구 / 14. 증빙·검증 / 15. 학습 한계 / 16. 재현·다음 과제.

## 출처 진실성
- CODE = `04-src/`의 실제 코드
- RUNTIME/EVIDENCE = Round 03 실제 실행 미디어
- AI-VISUAL = 생성한 만화와 설명용 그림
- 생성 화면을 실제 브라우저 캡처로 표시하지 않음
- 출처·SHA·실행 ID가 없는 결과를 검증 완료로 표시하지 않음

## 잔여 작업
정확한 스크린샷 가져오기/배치, 슬라이드 제작, Full-screen QA, 기술·학습 QA, Drive 저장. 파일이 없는 상태에서 `Golden Master PASS` 선언 금지.


## 공식 15문항 평가와 슬라이드 연결 (2026-10-09)
- EV01~EV05: 실제 기능 시연·정상/실패 스크린샷(모바일·테마·스크롤·API·폼)을 발표본에서 확인 가능하게 배치.
- EV06~EV09: HTML/CSS/JavaScript 분리·시맨틱 HTML·CSS 변수·이벤트 리스너 선택 이유를 **실제 코드**로 설명.
- EV10~EV13: Event→State→Render, 비동기 오류, map/filter, Flexbox/Grid의 실제 함수·스타일 흐름을 다이어그램과 연결.
- EV14~EV15: STATE 객체·모바일 퍼스트 선택 이유를 30초/1분 구술용 학습 노트에 연결.
- 기준: [공식 B1-1 평가 15문항](../07-evaluation/OFFICIAL-EVALUATION-CHECKLIST.md)와 [실제 증빙](../06-evidence/INDEX.md). 평가문항에 미검증 보너스 결과를 합격으로 표시하지 않는다.
- 이 내용은 **제작 명세**이며 이미지 PPTX·PDF가 실제 완성됐다는 뜻이 아니다(`PENDING`).


## 최종 기준 복구 (2026-10-09)
- [실제 17장 품질 감사·Golden G1~G10 NO-GO](QUALITY-AUDIT-20261009.md) 참조. 최신 기준 문서는 `MetaStudy999/codyssey-basic/standards/PRESENTATION-CANONICAL-DECISIONS.md`가 최상위.
- 학습 본편 30~45장과 기존 Golden v3 45장 스토리보드를 먼저 고퀄리티 이미지 중심으로 복구하고, 그중 발표 14~16장 파생. 상세 Appendix 15~25장, Quick Review 1장.
- Presentation-first 17장 텍스트 카드만으로 완결 금지. 4컷 비유→도식→실제 코드→실제 Runtime 흐름을 이미지 슬라이드로 직접 구현.
- 실제 B1-1 Source + PR #19 Bonus Runtime의 MOCK DATA 한계를 정확히 명시. 실제 이메일 수신 미확인을 PASS로 승격 금지.
- Owner 대표 슬라이드 중간 검토·전면 G1~G10 QA·독립 QA_SEC 전에 FINAL 금지. Hermes는 실제 실행 근거가 있어야 적용이라 표시.
