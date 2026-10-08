# B1-1 Round 03 독립 수행 규칙 (Local Agent Instructions)

## Purpose
이 공간은 B1-1을 통해 **범용 Mission Harness(미션 수행·검증 체계)**의 품질과 사람의 학습 성장을 동시에 시험하는 최초 Pilot이다. CODYSSEY 전용 운영체제로 제한하지 않는다.

## Authority
1. 공식 B1-1 요구·평가 자료가 과제 내용의 최상위 출처다.
2. 실제 Round 03 코드·GitHub 실행·검증 아티팩트가 기술 결과의 출처다.
3. 본 폴더의 계약·노트는 학습 및 실험 기록이다.
4. Round 01/02는 **참고 전용**이다. 소스·슬라이드·증빙을 그대로 복제하여 Round 03 신규 성과로 주장하지 않는다.
5. APOS 전역 Governance/Security/QA는 `MetaStudy999/agentic-project-os`의 기존 계약을 따른다. 로컬 문서로 권한을 확대하지 않는다.

## Procedure
READ → DEFINE → PLAN → DESIGN → BUILD → CHECK → RUN → EVIDENCE → INDEPENDENT QA → LEARN → MEASURE → IMPROVE → HANDOFF.

각 단계는 (a) 입력, (b) 실제 산출물, (c) 검증 근거, (d) PASS/FAIL/PENDING, (e) 다음 한 단계가 있어야 한다. 단계 생략 또는 불필요한 문서 양산은 금지.

## Boundaries
- `04-src/`가 Round 03 실행 코드의 유일한 편집 루트다.
- `evidence/`가 기존 Round 03 검증 자료의 기준 저장 위치다. `06-evidence/`는 색인과 보존 점검용이다.
- CORE CLEAR, 발표 완성도, BONUS, AI 성능, 사용자 숙달도를 별도로 판정한다.
- 실제로 수행하지 않은 검사·속도 측정·실습은 PASS로 기재하지 않는다.
- 실제 이미지·코드·로그만 `RUNTIME`, `CODE`, `EVIDENCE`로 표기한다. 생성 그림은 `AI-VISUAL`로 구별한다.
- 외부 전송, 계정 접속, 유료 실행, 금융 거래, 기기 제어는 기존 권한 및 승인이 있어야 한다.
- MAKER는 체크 결과를 스스로 독립 QA라고 판정하지 않는다. 중요한 변경은 QA_SEC 별도 검증 후 병합한다.
- 브랜치에 먼저 작성하고 main을 직접 수정하지 않는다.

## Owner Report
1. 지금 하는 일 / 왜 하는가 / 확인 결과
2. 쉬운 설명과 실제 코드·증빙 위치
3. 미완료 항목과 다음 하나의 행동
4. SHA / CI / Artifact 같은 기술 증거
영어 개념은 한글 뜻, 영어 이름, 약어를 함께 설명한다.
