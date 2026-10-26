/* B1-1 Round 04 · Vanilla JavaScript, no external tokens or form submission.
 * Each interactive feature follows: Event → State → render DOM.
 * GitHub account below is the repository owner's public account, not verified personal identity.
 */
"use strict";

const GITHUB_USERNAME = "MetaStudy999"; // Confirm the actual portfolio owner's account before final assessment.
const GITHUB_ENDPOINT = "https://api.github.com/users/" +
  encodeURIComponent(GITHUB_USERNAME) + "/repos?per_page=12&sort=updated&type=owner";
const THEME_STORAGE_KEY = "b1-1-round04-theme";
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const elements = {
  menuButton: $("#menu-toggle"),
  menu: $("#site-navigation"),
  themeButton: $("#theme-toggle"),
  themeIcon: $(".theme-icon"),
  themeActionLabel: $(".theme-action-label"),
  header: $("#site-header"),
  topButton: $("#back-to-top"),
  projects: $("#projects-grid"),
  projectStatus: $("#project-status"),
  retry: $("#retry-projects"),
  ownerLabel: $("#github-owner-label"),
  profileLink: $("#github-profile-link"),
  form: $("#contact-form"),
  formStatus: $("#form-status")
};

const state = {
  menuOpen: false,
  theme: "light",
  showTop: false,
  headerScrolled: false,
  projects: { status: "idle", data: [], message: "", requestId: 0 },
  form: { status: "idle" }
};

function readSavedTheme() {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : "light";
  } catch {
    return "light"; // Restricted/private storage does not break the interface.
  }
}
function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Visual theme still works if browser storage is blocked.
  }
}
function renderTheme() {
  const dark = state.theme === "dark";
  document.documentElement.dataset.theme = state.theme;
  elements.themeButton.setAttribute("aria-pressed", String(dark));
  const action = dark ? "라이트 모드 켜기" : "다크 모드 켜기";
  elements.themeButton.setAttribute("aria-label", action);
  elements.themeActionLabel.textContent = action;
  elements.themeIcon.textContent = dark ? "☀" : "☾";
}
function onThemeClick() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  renderTheme();
  storeTheme(state.theme);
}

function renderMenu() {
  elements.menu.classList.toggle("is-open", state.menuOpen);
  elements.menuButton.setAttribute("aria-expanded", String(state.menuOpen));
  elements.menuButton.setAttribute("aria-label", state.menuOpen ? "메뉴 닫기" : "메뉴 열기");
}
function closeMenu(returnFocus = false) {
  if (!state.menuOpen) return;
  state.menuOpen = false;
  renderMenu();
  if (returnFocus) elements.menuButton.focus();
}
function onMenuClick() {
  state.menuOpen = !state.menuOpen;
  renderMenu();
}
function onMenuKeydown(event) {
  if (event.key === "Escape" && state.menuOpen) {
    closeMenu(true);
  }
}

function renderScroll() {
  elements.header.classList.toggle("is-scrolled", state.headerScrolled);
  elements.topButton.hidden = !state.showTop;
}
function onScroll() {
  const offset = window.scrollY || window.pageYOffset;
  const nextScrolled = offset >= 60;  // 59 / 60 / 61 threshold.
  const nextTop = offset >= 300;       // 299 / 300 / 301 threshold.
  if (nextScrolled !== state.headerScrolled || nextTop !== state.showTop) {
    state.headerScrolled = nextScrolled;
    state.showTop = nextTop;
    renderScroll();
  }
}
function onTopClick() {
  window.scrollTo({ top: 0, behavior: REDUCED_MOTION.matches ? "auto" : "smooth" });
}

let revealObserver;
function observeReveals(root = document) {
  if (!("IntersectionObserver" in window) || REDUCED_MOTION.matches) return;
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.2 }); // Recommended threshold; actual rendering to be tested.
  }
  root.querySelectorAll(".section-heading, .skill-card, .about-layout, .project-card")
    .forEach((item) => {
      if (!item.classList.contains("is-visible")) {
        item.classList.add("reveal-pending");
        revealObserver.observe(item);
      }
    });
}
function onReducedMotionChange() {
  if (!REDUCED_MOTION.matches) return;
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }
  $$(".reveal-pending").forEach((item) => item.classList.add("is-visible"));
}

// Only allow exactly https://github.com links received from the public API.
function trustedGithubUrl(raw) {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" || url.hostname !== "github.com") return null;
    return url.href;
  } catch {
    return null;
  }
}
function mapRepository({ name, description, html_url, language, stargazers_count }) {
  return {
    name: typeof name === "string" && name.trim() ? name.trim() : "이름 없는 저장소",
    description: typeof description === "string" && description.trim()
      ? description : "설명이 등록되지 않은 공개 저장소입니다.",
    url: typeof html_url === "string" ? trustedGithubUrl(html_url) : null,
    language: typeof language === "string" && language.trim() ? language.trim() : "기타",
    stars: Number.isSafeInteger(stargazers_count) && stargazers_count >= 0
      ? stargazers_count : 0
  };
}
function makeProjectCard(repo) {
  const article = document.createElement("article");
  article.className = "project-card";

  // A template literal with *trusted, static* HTML only.
  // Never insert API-supplied strings via innerHTML (XSS prevention).
  article.innerHTML = `<div class="card-topline">
    <span class="card-icon" aria-hidden="true">✧</span>
    <span class="card-badge">PUBLIC</span>
  </div>`;

  const title = document.createElement("h3");
  title.textContent = repo.name;
  const description = document.createElement("p");
  description.textContent = repo.description;
  const footer = document.createElement("div");
  footer.className = "card-footer";
  const language = document.createElement("span");
  language.className = "card-language";
  language.textContent = repo.language + " · ★ " + repo.stars;
  footer.append(language);

  if (repo.url) {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = repo.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "코드 보기 ↗";
    link.setAttribute("aria-label", repo.name + " GitHub 저장소를 새 창에서 열기");
    footer.append(link);
  }
  article.append(title, description, footer);
  return article;
}

let activeRequest = null;
let requestTimeoutId = null;
function renderProjects() {
  const { status, data, message } = state.projects;
  elements.retry.hidden = !(status === "error" || status === "forbidden");
  elements.retry.disabled = status === "loading";
  elements.projects.setAttribute("aria-busy", String(status === "loading"));
  // Explicit add/remove make the error state easy for beginners to trace.
  elements.projectStatus.classList.remove("is-error");
  if (status === "error" || status === "forbidden") {
    elements.projectStatus.classList.add("is-error");
  }
  elements.projects.replaceChildren();

  if (status === "loading") {
    elements.projectStatus.textContent = "공개 프로젝트를 불러오는 중입니다…";
  } else if (status === "success") {
    elements.projectStatus.textContent = "공개 프로젝트 " + data.length + "개를 불러왔습니다.";
    // forEach renders normalized API data; map() performs data transformation.
    data.forEach((repo) => elements.projects.append(makeProjectCard(repo)));
    observeReveals(elements.projects);
  } else if (status === "empty") {
    elements.projectStatus.textContent = "표시할 공개 프로젝트가 없습니다.";
  } else if (status === "forbidden") {
    elements.projectStatus.textContent = "GitHub 요청이 거부되었습니다(HTTP 403). 잠시 뒤 다시 시도해 주세요.";
  } else if (status === "error") {
    elements.projectStatus.textContent = message || "프로젝트를 불러오지 못했습니다. 다시 시도해 주세요.";
  } else {
    elements.projectStatus.textContent = "공개 프로젝트를 준비합니다.";
  }
}

async function loadProjects() {
  if (state.projects.status === "loading") return; // Avoid duplicate clicks.
  const requestId = ++state.projects.requestId;
  if (activeRequest) activeRequest.abort();
  activeRequest = new AbortController();
  const controller = activeRequest;
  state.projects.status = "loading";
  state.projects.message = "";
  renderProjects();

  requestTimeoutId = window.setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(GITHUB_ENDPOINT, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
      credentials: "omit"
    });
    if (requestId !== state.projects.requestId) return; // Ignore stale result.
    if (response.status === 403) {
      state.projects.status = "forbidden";
      return;
    }
    if (!response.ok) {
      state.projects.status = "error";
      state.projects.message = "GitHub 서버가 요청을 처리하지 못했습니다(HTTP " + response.status + ").";
      return;
    }

    const result = await response.json();
    if (requestId !== state.projects.requestId) return;
    if (!Array.isArray(result)) throw new TypeError("Expected GitHub repository list");
    state.projects.data = result.map(mapRepository);
    state.projects.status = state.projects.data.length ? "success" : "empty";
  } catch (error) {
    if (requestId !== state.projects.requestId) return;
    state.projects.status = "error";
    state.projects.message = error && error.name === "AbortError"
      ? "요청 시간이 초과되었습니다. 다시 시도해 주세요."
      : "네트워크 연결 또는 데이터 처리에 실패했습니다. 다시 시도해 주세요.";
    // Never log sensitive request details or user input.
  } finally {
    window.clearTimeout(requestTimeoutId);
    if (requestId === state.projects.requestId) {
      activeRequest = null;
      renderProjects();
    }
  }
}

const formFields = [
  { id: "contact-name", error: "name-error", type: "name" },
  { id: "contact-email", error: "email-error", type: "email" },
  { id: "contact-message", error: "message-error", type: "message" }
];
function fieldMessage(config) {
  const input = $("#" + config.id);
  const value = input.value.trim();
  if (!value) return config.type === "name" ? "이름을 입력해 주세요."
    : config.type === "email" ? "이메일을 입력해 주세요."
    : "메시지를 입력해 주세요.";
  if (config.type === "email" && !input.validity.valid) {
    return "올바른 이메일 주소를 입력해 주세요.";
  }
  return "";
}
function validateField(config) {
  const message = fieldMessage(config);
  const input = $("#" + config.id);
  const output = $("#" + config.error);
  output.textContent = message;
  input.setAttribute("aria-invalid", String(Boolean(message)));
  return message === "";
}
function onFormInput(event) {
  const config = formFields.find((item) => item.id === event.target.id);
  if (!config) return;
  validateField(config);
  state.form.status = "idle";
  elements.formStatus.textContent = "";
}
function onFormSubmit(event) {
  event.preventDefault(); // Never contact an external email service.
  const results = formFields.map((config) => ({ config, valid: validateField(config) }));
  const failed = results.find((item) => !item.valid);
  if (failed) {
    state.form.status = "invalid";
    elements.formStatus.textContent = "입력 내용을 확인해 주세요. 표시된 항목을 수정하면 됩니다.";
    $("#" + failed.config.id).focus();
    return;
  }
  state.form.status = "validated";
  elements.formStatus.textContent =
    "입력 형식을 확인했습니다. 이 데모에서는 메시지를 전송하거나 저장하지 않습니다.";
}

function init() {
  // Missing elements must not produce unhandled errors.
  if (Object.values(elements).some((element) => !element)) return;
  document.documentElement.classList.add("js-enhanced");

  state.theme = readSavedTheme();
  renderTheme();
  elements.themeButton.addEventListener("click", onThemeClick);

  renderMenu();
  elements.menuButton.addEventListener("click", onMenuClick);
  elements.menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu(false);
  });
  document.addEventListener("keydown", onMenuKeydown);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu(false);
  });

  elements.topButton.addEventListener("click", onTopClick);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (typeof REDUCED_MOTION.addEventListener === "function") {
    REDUCED_MOTION.addEventListener("change", onReducedMotionChange);
  } else if (typeof REDUCED_MOTION.addListener === "function") {
    REDUCED_MOTION.addListener(onReducedMotionChange);
  }
  observeReveals();

  const accountUrl = trustedGithubUrl("https://github.com/" + GITHUB_USERNAME);
  elements.ownerLabel.textContent = GITHUB_USERNAME;
  if (accountUrl) elements.profileLink.href = accountUrl;
  elements.retry.addEventListener("click", loadProjects);
  loadProjects();

  elements.form.addEventListener("input", onFormInput);
  elements.form.addEventListener("submit", onFormSubmit);
  const submit = elements.form.querySelector('button[type="submit"]');
  if (submit) submit.disabled = false; // No-JS fallback must not submit private data.
  const year = $("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
