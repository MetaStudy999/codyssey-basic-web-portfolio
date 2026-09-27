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

## 6. 재현 기록 규칙

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
