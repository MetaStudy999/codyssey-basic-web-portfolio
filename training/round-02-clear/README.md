# B1-1 Round 02 — 나를 소개하는 웹페이지 처음부터 만들기

> **기준 레포(Canonical Control Repository):** [MetaStudy999/codyssey-basic](https://github.com/MetaStudy999/codyssey-basic)  
> **현재 작업 위치:** `training/round-02-clear/`  
> **기존 참고자료:** `training/round-01-clear/`

## 현재 미션 식별

- 현재 Mission ID: **B1-1**
- 현재 제목: **나를 소개하는 웹페이지 처음부터 만들기**
- Repository: `MetaStudy999/codyssey-basic-web-portfolio`
- 과거 Mission ID: `B4-1`
- 기존 평가자료: 기존 `b4-1-evaluation.md` 참고

현재 번호·제목·공식 요구사항은 **제2기 현재 Mission PDF**를 최우선으로 사용한다. Repository의 과거 번호 파일은 동일 주제의 1기 참고자료로 사용한다.

## 초압축 시간 예산

- 구분: **필수**
- 제2기 PDF 공식 학습시간: **80시간**
- Round 02 내부 초압축 목표: **9시간**
- 전체 계획: [2주 초압축 수행 계획](https://github.com/MetaStudy999/codyssey-basic/blob/main/training/round-02-clear/ACCELERATED-2WEEK-PLAN.md)

초압축 목표는 공식 학습시간이나 요구사항을 줄이는 기준이 아니다. `round-01-clear` 재사용, 중복 제거, 최소 통과 경로 집중으로 시간을 줄인다. 실제 Runtime, Verification, Evidence, Secret 점검, 평가 설명은 생략하지 않는다.

## 기준 우선순위

```text
제2기 현재 Mission PDF
→ 제2기 오리엔테이션 PDF
→ 기존 Mission
→ 기존 Evaluation
→ training/round-01-clear
→ 일반 지식·외부 자료
```

공통 운영 기준:
[ROUND-02-MISSION-EXECUTION-STANDARD.md](https://github.com/MetaStudy999/codyssey-basic/blob/main/standards/ROUND-02-MISSION-EXECUTION-STANDARD.md)

## 가장 효율적인 진행

```text
1. 현재 미션 기준 확정
2. 평가항목 먼저 정리
3. 최소 통과 경로 확정
4. 필요한 개념만 적시 학습(JIT Learning)
5. 한 단계씩 실제 수행
6. 검증하면서 Evidence 동시 확보
7. 평가 설명 준비
8. 모의평가 후 최종 CLEAR 점검
```

## 현재 진행 상태

- Gate 1 — 기준 확정: **완료**
- Gate 2 — 평가항목 연결: **대기**
- Gate 5 — 실행환경 Preflight: **진행 중**
- 실제 개발 환경: **학교 iMac → OrbStack → Ubuntu 24.04.5 LTS**
- 현재 사용자: `metastudy9997479`
- 셸: `/bin/bash`
- 패키지 관리자: `apt`
- Git: **설치 완료 — 2.43.0 (`/usr/bin/git`)**
- B1-1 로컬 Repository: **clone 완료 — `/home/metastudy9997479/projects/codyssey-basic-web-portfolio`**
- 코드 구현/수정: **아직 시작하지 않음**
- Runtime/Evidence: **아직 없음**

실행환경의 실제 확인 명령과 출력은 [environment/README.md](environment/README.md)에 누적 기록한다.

## Round 02 원칙

- Round 01을 삭제·덮어쓰기하지 않는다.
- Round 01의 PASS/Evidence를 Round 02 실제 PASS로 대신하지 않는다.
- 사용자의 실제 실행 결과 없이 PASS/CLEAR를 기록하지 않는다.
- 선택 고도화와 대규모 리팩터링은 필수 요구 완료 뒤로 미룬다.
- 평가 답변은 `WHAT → WHY → HOW → VERIFY → LIMITATION` 구조로 준비한다.
- Secret, Token, Password, Private Key는 Repository·Chat·Evidence에 남기지 않는다.

## 다음 작업

현재 환경 확인, Git 설치/검증, B1-1 Repository clone 및 원격·브랜치·작업트리 상태 확인까지 완료했다. Git 작성자 전역 설정은 둘 다 UNSET이었고, 학교 공유 환경을 고려하여 현재 B1-1 Repository에만 로컬 작성자 정보를 설정했다. `user.name`과 `user.email` 모두 SET이며 실제 값은 기록하지 않았다. 원격 `main` 동기화와 `round-02/b1-1-web-portfolio` 작업 브랜치 생성까지 완료했다. 원격에도 동일한 Round 02 작업 브랜치를 준비했다. 다음 실제 단계는 **Gate 2 — 공식 요구사항과 기존 Evaluation을 연결해 평가 기준을 먼저 확정**하는 것이다.

```bash
cd "$HOME/projects/codyssey-basic-web-portfolio"

git switch main
git fetch origin
git pull --ff-only origin main

git switch -c round-02/b1-1-web-portfolio

echo "=== CURRENT BRANCH ==="
git branch --show-current

echo "=== STATUS ==="
git status --short

echo "=== HEAD ==="
git log -1 --oneline
```

위 동기화 및 브랜치 생성은 아직 실제 결과가 없으므로 PASS 처리하지 않는다.
