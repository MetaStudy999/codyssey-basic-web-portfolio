# B1-1 Round 02 — Environment Reproduction Log

> 목적: 학교 iMac 환경에서 B1-1 수행을 다시 재현할 수 있도록 **실제 확인 명령, 실제 출력, 판정, 다음 단계**를 기록한다.
>
> 상태: **IN PROGRESS**
>
> 원칙: 예상 결과와 실제 결과를 구분한다. 실제 실행하지 않은 단계는 PASS로 표시하지 않는다.

## 1. 실행 환경 식별

사용자는 학교 iMac에서 실습을 시작했으나, 처음 열린 터미널의 실제 실행환경을 확인한 결과 macOS가 아니라 **OrbStack 내부 Ubuntu Linux**였다.

### 최초 확인 명령

```bash
echo "=== SYSTEM ==="
sw_vers

echo "=== SHELL ==="
echo "$SHELL"

echo "=== GIT ==="
git --version

echo "=== HOME ==="
echo "$HOME"

echo "=== PROJECT CHECK ==="
if [ -d "$HOME/projects/codyssey-basic-web-portfolio/.git" ]; then
    cd "$HOME/projects/codyssey-basic-web-portfolio"

    echo "=== LOCATION ==="
    pwd

    echo "=== GIT STATUS ==="
    git status

    echo "=== REMOTE ==="
    git remote -v

    echo "=== CURRENT BRANCH ==="
    git branch --show-current

    echo "=== RECENT COMMITS ==="
    git log -5 --oneline
else
    echo "REPO_NOT_FOUND"
fi
```

### 실제 출력

```text
=== SYSTEM ===
-bash: sw_vers: command not found
=== SHELL ===
/bin/bash
=== GIT ===
-bash: git: command not found
=== HOME ===
/home/metastudy9997479
=== PROJECT CHECK ===
REPO_NOT_FOUND
```

### 판정

- `sw_vers` 없음 → 현재 셸은 macOS가 아님
- `/home/... ` 경로 → Linux 계열 환경
- `/bin/bash` 사용
- Git 미설치
- B1-1 Repository 미존재

이 단계에서는 설치나 수정 없이 환경 식별만 수행했다.

---

## 2. Linux 배포판/패키지 관리자 확인

### 확인 명령

```bash
echo "=== KERNEL ==="
uname -a

echo "=== OS ==="
cat /etc/os-release 2>/dev/null || echo "NO_OS_RELEASE"

echo "=== USER ==="
whoami
id

echo "=== PACKAGE MANAGER ==="
command -v apt || true
command -v dnf || true
command -v yum || true
command -v apk || true
command -v brew || true

echo "=== CURRENT LOCATION ==="
pwd
```

### 실제 출력

```text
=== KERNEL ===
Linux codyssey 6.17.8-orbstack-00308-g8f9c941121b1 #1 SMP PREEMPT Thu Nov 20 09:34:02 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux

=== OS ===
PRETTY_NAME="Ubuntu 24.04.5 LTS"
NAME="Ubuntu"
VERSION_ID="24.04"
VERSION="24.04.5 LTS (Noble Numbat)"
VERSION_CODENAME=noble
ID=ubuntu
ID_LIKE=debian
UBUNTU_CODENAME=noble

=== USER ===
metastudy9997479
uid=1267600747(metastudy9997479) gid=1267600747(metastudy9997479) groups=1267600747(metastudy9997479),4(adm),27(sudo),44(video),50(staff),67278(orbstack)

=== PACKAGE MANAGER ===
/usr/bin/apt

=== CURRENT LOCATION ===
/home/metastudy9997479
```

### 확정 환경

```text
학교 iMac (Host)
└── OrbStack
    └── Ubuntu 24.04.5 LTS (Guest)
        ├── Architecture: x86_64
        ├── Shell: Bash
        ├── User: metastudy9997479
        ├── Home: /home/metastudy9997479
        ├── Package Manager: apt
        └── sudo 권한: 있음
```

## 3. 현재 상태

| 항목 | 실제 상태 |
|---|---|
| iMac 호스트 | 확인 |
| OrbStack | 확인 |
| Ubuntu | 24.04.5 LTS |
| Architecture | x86_64 |
| Shell | Bash |
| Package Manager | apt |
| sudo 권한 | 있음 |
| Git | **설치 완료 — 2.43.0** |
| Git 경로 | **/usr/bin/git** |
| B1-1 로컬 Repository | **없음** |
| 코드 구현 | **미시작** |
| Runtime 검증 | **미시작** |
| Evidence | **미수집** |

## 4. Git 설치 및 검증 — PASS

### 실제 실행 명령

```bash
sudo apt update
sudo apt install -y git

echo "=== GIT VERSION ==="
git --version

echo "=== GIT PATH ==="
command -v git
```

### 실제 확인 결과

```text
All packages are up to date.
...
Setting up git (1:2.43.0-1ubuntu7.3) ...

=== GIT VERSION ===
git version 2.43.0

=== GIT PATH ===
/usr/bin/git
```

### 판정

**PASS**

- Ubuntu 패키지 목록 최신 상태 확인
- Git 패키지 설치 완료
- Git 실행 버전: `2.43.0`
- Git 실행 경로: `/usr/bin/git`

## 5. 다음 재현 단계 — B1-1 Repository 준비

다음 단계에서는 사용자 작업 공간 `$HOME/projects`를 준비한 뒤 공개 Repository를 clone하고, 원격 주소·브랜치·상태를 확인한다.

아직 실제 clone 결과가 없으므로 이 단계는 PASS 처리하지 않는다.



## 6. B1-1 Repository Clone 및 상태 검증 — PASS

### 실제 실행 위치

```text
/home/metastudy9997479/projects
```

### 실제 실행 결과 요약

```text
Repository:
  /home/metastudy9997479/projects/codyssey-basic-web-portfolio

Branch:
  main

Remote:
  origin -> https://github.com/MetaStudy999/codyssey-basic-web-portfolio.git

Status:
  Your branch is up to date with 'origin/main'.
  nothing to commit, working tree clean
```

### 실제 최근 커밋

```text
42d9aab HEAD -> main, origin/main, origin/HEAD
         docs: advance B1-1 next step to repository clone
af00184  docs: mark B1-1 Git setup progress
7665ac1  docs: record Git install verification for B1-1
008487d  docs: add reproducible B1-1 environment log
5175c52  docs: update B1-1 round 02 checklist
```

### 판정

**PASS**

- GitHub Repository clone 완료
- 로컬 Repository 경로 확인
- `origin` fetch/push URL 확인
- 현재 브랜치 `main` 확인
- `origin/main`과 동기화 확인
- 작업 트리 clean 확인
- Round 02 문서화 커밋이 로컬 clone에 포함된 것 확인

## 7. 다음 재현 단계 — Git 작성자 설정 상태 확인

다음 단계에서는 Git 커밋에 기록되는 작성자 이름/이메일 설정이 이미 존재하는지 **값을 노출하지 않고 설정 여부만 확인**한다.

아직 실제 결과가 없으므로 PASS 처리하지 않는다.

## 8. 재현 기록 규칙

앞으로 각 단계는 이 문서 또는 관련 Evidence 문서에 다음 형식으로 누적한다.

```text
1. 무엇을 하는가
2. 왜 필요한가
3. 실행 위치
4. 실행 전 상태
5. 실제 실행 명령
6. 실제 출력
7. PASS / FAIL 판정
8. 오류가 있으면 원인과 최소 수정
9. 다음 단계
```

Password, API Key, Token, Private Key, Secret, Cloud Credential은 이 문서와 Evidence에 기록하지 않는다.


## 8. Git 작성자 설정 상태 확인 — NEEDS CONFIG

### 실제 확인 명령

```bash
cd "$HOME/projects/codyssey-basic-web-portfolio"

git config --global --get user.name >/dev/null 2>&1 && echo "SET" || echo "UNSET"
git config --global --get user.email >/dev/null 2>&1 && echo "SET" || echo "UNSET"
git status --short
```

### 실제 출력

```text
=== GIT USER NAME CONFIGURED ===
UNSET
=== GIT USER EMAIL CONFIGURED ===
UNSET
=== REPO STATUS ===
```

### 판정

- Git 전역 작성자 이름: **UNSET**
- Git 전역 작성자 이메일: **UNSET**
- 작업 트리: **clean**
- 설치/clone 문제는 아님
- 실제 커밋 전에 작성자 설정이 필요함

### 환경 정책

학교 iMac의 공유 환경일 수 있으므로, 이번 B1-1에서는 전역 설정(`--global`)보다 **Repository 로컬 설정**을 우선한다. 이렇게 하면 다른 Repository의 Git 작성자 정보에 영향을 주지 않는다.

다음 단계에서 `git config user.name`, `git config user.email`을 현재 Repository에만 설정하고, 실제 값은 문서/Evidence에 기록하지 않는다.


## 9. Repository 로컬 Git 작성자 설정 — PASS

### 실제 확인 결과

```text
=== LOCAL GIT USER NAME ===
SET
=== LOCAL GIT USER EMAIL ===
SET
=== REPO STATUS ===
```

### 판정

**PASS**

- 현재 B1-1 Repository의 로컬 `user.name` 설정 확인
- 현재 B1-1 Repository의 로컬 `user.email` 설정 확인
- 실제 이름/이메일 값은 문서와 Evidence에 기록하지 않음
- `git status --short` 출력 없음 → 작업 트리 clean
- 전역 설정을 건드리지 않고 현재 Repository에만 작성자 정보를 적용

## 10. 다음 재현 단계 — main 동기화 후 Round 02 작업 브랜치 생성

GitHub의 Round 02 문서가 로컬 clone 이후 갱신되었으므로, 먼저 `main`을 `origin/main`과 fast-forward 방식으로 동기화한 뒤 작업 브랜치를 만든다.

예정 브랜치:

```text
round-02/b1-1-web-portfolio
```

아직 실제 실행 결과가 없으므로 PASS 처리하지 않는다.


## 10. Round 02 작업 브랜치 생성 — PASS

### 실제 결과

```text
=== CURRENT BRANCH ===
round-02/b1-1-web-portfolio
=== STATUS ===
=== HEAD ===
2506903 (HEAD -> round-02/b1-1-web-portfolio, origin/main, origin/HEAD, main)
docs: set B1-1 next step to round 02 branch
```

### 판정

**PASS**

- 현재 작업 브랜치: `round-02/b1-1-web-portfolio`
- 작업 트리 clean
- 브랜치 생성 기준점은 당시 `main`/ `origin/main`의 동일 HEAD
- 이후 Round 02 구현·검증·증빙은 이 브랜치에서 수행
- 원격에도 동일 이름의 Round 02 작업 브랜치를 생성하여 로컬/원격 작업 축을 맞춤

## 11. 다음 단계 — Gate 2 평가항목 연결

구현 전에 공식 요구사항과 기존 평가자료를 비교해 다음 연결표를 확정한다.

```text
Requirement
→ Implementation
→ Verification
→ Evidence
→ Evaluation Explanation
```

이 단계가 끝나기 전에는 본 구현을 시작하지 않는다.


## 12. 원격 Round 02 브랜치 추적 동기화 — PASS

### 실제 결과

```text
[new branch] round-02/b1-1-web-portfolio -> origin/round-02/b1-1-web-portfolio
branch 'round-02/b1-1-web-portfolio' set up to track 'origin/round-02/b1-1-web-portfolio'.
Updating 2506903..7f7fd84
Fast-forward

=== CURRENT BRANCH ===
round-02/b1-1-web-portfolio

=== STATUS ===
On branch round-02/b1-1-web-portfolio
Your branch is up to date with 'origin/round-02/b1-1-web-portfolio'.

nothing to commit, working tree clean

=== RECENT COMMITS ===
7f7fd84 docs: advance B1-1 to evaluation mapping
6f05176 docs: mark B1-1 round 02 branch pass
4046898 docs: record B1-1 round 02 branch creation
```

### 판정

**PASS**

- 로컬 Round 02 브랜치가 원격 동일 브랜치를 추적
- fast-forward 동기화 성공
- 작업 트리 clean
- 구현 시작 전 로컬/원격 기준점 일치 확인


## 13. Gate 3 문서 동기화 확인 — PASS

### 실제 결과

```text
Updating 26417b6..9e60b99
Fast-forward
create mode 100644 training/round-02-clear/docs/minimum-passing-path.md

=== BRANCH ===
round-02/b1-1-web-portfolio

=== STATUS ===

=== GATE 3 DOCUMENT ===
FOUND

=== RECENT COMMITS ===
9e60b99 docs: advance B1-1 to JIT learning
380500c docs: complete B1-1 gate 3
e83f6d5 docs: define B1-1 minimum passing path
```

### 판정

**PASS**

- Gate 3 문서 로컬 반영 확인
- 현재 브랜치 정상
- 작업 트리 clean
- 최소 통과 경로 문서 존재 확인
