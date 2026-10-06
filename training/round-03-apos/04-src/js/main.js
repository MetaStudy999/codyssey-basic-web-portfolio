const GITHUB_USERNAME = 'MetaStudy999';
const THEME_STORAGE_KEY = 'b1-1-theme';

const STATE = {
  theme: localStorage.getItem(THEME_STORAGE_KEY) || 'light',
  menuOpen: false,
  projects: {
    status: 'idle',
    data: [],
    error: '',
  },
  form: {
    errors: {},
    submitted: false,
  },
};

const elements = {
  documentRoot: document.documentElement,
  header: document.querySelector('.site-header'),
  menuToggle: document.querySelector('.menu-toggle'),
  navMenu: document.querySelector('#nav-menu'),
  navLinks: document.querySelectorAll('a[href^="#"]'),
  themeToggle: document.querySelector('.theme-toggle'),
  scrollTop: document.querySelector('.scroll-top'),
  projectStatus: document.querySelector('.project-status'),
  projectGrid: document.querySelector('.project-grid'),
  retryButton: document.querySelector('.retry-button'),
  contactForm: document.querySelector('.contact-form'),
  formStatus: document.querySelector('.form-status'),
  revealItems: document.querySelectorAll('.reveal'),
};

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const setTheme = (theme) => {
  STATE.theme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  renderTheme();
};

const renderTheme = () => {
  elements.documentRoot.dataset.theme = STATE.theme;
  elements.themeToggle.textContent = STATE.theme === 'dark' ? '☀' : '◐';
  elements.themeToggle.setAttribute(
    'aria-label',
    STATE.theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'
  );
};

const renderMenu = () => {
  elements.navMenu.classList.toggle('active', STATE.menuOpen);
  elements.menuToggle.setAttribute('aria-expanded', String(STATE.menuOpen));
  elements.menuToggle.querySelector('[aria-hidden="true"]').textContent = STATE.menuOpen ? '✕' : '☰';
};

const closeMenu = () => {
  STATE.menuOpen = false;
  renderMenu();
};

const renderProjects = () => {
  const { status, data, error } = STATE.projects;

  elements.retryButton.hidden = status !== 'error';
  elements.projectGrid.innerHTML = '';

  if (status === 'loading') {
    elements.projectStatus.textContent = '로딩 중...';
    return;
  }

  if (status === 'error') {
    elements.projectStatus.textContent = error || '프로젝트를 불러올 수 없습니다.';
    return;
  }

  if (status === 'success' && data.length === 0) {
    elements.projectStatus.textContent = '표시할 프로젝트가 없습니다.';
    return;
  }

  if (status === 'success') {
    elements.projectStatus.textContent = `${data.length}개의 공개 프로젝트를 불러왔습니다.`;

    const cards = data
      .filter((repo) => !repo.fork)
      .slice(0, 12)
      .map(({ name, description, html_url: url, stargazers_count: stars, language }) => `
        <article class="project-card">
          <h3><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a></h3>
          <p>${escapeHtml(description || '설명이 등록되지 않은 저장소입니다.')}</p>
          <div class="project-meta">
            <span>${escapeHtml(language || 'Language N/A')}</span>
            <span>★ ${Number(stars) || 0}</span>
          </div>
        </article>
      `);

    elements.projectGrid.innerHTML = cards.join('');
  }
};

const loadProjects = async () => {
  STATE.projects = { status: 'loading', data: [], error: '' };
  renderProjects();

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
      { headers: { Accept: 'application/vnd.github+json' } }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('GitHub API 요청 한도에 도달했습니다. 잠시 후 다시 시도해 주세요.');
      }

      throw new Error(`GitHub API 오류: HTTP ${response.status}`);
    }

    const repositories = await response.json();

    STATE.projects = {
      status: 'success',
      data: Array.isArray(repositories) ? repositories : [],
      error: '',
    };
  } catch (error) {
    STATE.projects = {
      status: 'error',
      data: [],
      error: error instanceof Error ? error.message : '프로젝트를 불러올 수 없습니다.',
    };
  }

  renderProjects();
};

const getFormValues = () => {
  const formData = new FormData(elements.contactForm);
  return {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    message: String(formData.get('message') || '').trim(),
  };
};

const validateForm = ({ name, email, message }) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    errors.name = '이름을 입력해 주세요.';
  }

  if (!email) {
    errors.email = '이메일을 입력해 주세요.';
  } else if (!emailPattern.test(email)) {
    errors.email = '올바른 이메일 형식을 입력해 주세요.';
  }

  if (!message) {
    errors.message = '메시지를 입력해 주세요.';
  }

  return errors;
};

const renderFormFeedback = () => {
  const errorElements = document.querySelectorAll('[data-error-for]');

  errorElements.forEach((element) => {
    const fieldName = element.dataset.errorFor;
    element.textContent = STATE.form.errors[fieldName] || '';
  });

  elements.formStatus.textContent = STATE.form.submitted
    ? '입력값 검증을 통과했습니다. 현재 학습 버전에서는 실제 전송하지 않습니다.'
    : '';
};

const updateFormState = () => {
  STATE.form.errors = validateForm(getFormValues());
  STATE.form.submitted = false;
  renderFormFeedback();
};

elements.menuToggle.addEventListener('click', () => {
  STATE.menuOpen = !STATE.menuOpen;
  renderMenu();
});

elements.themeToggle.addEventListener('click', () => {
  setTheme(STATE.theme === 'dark' ? 'light' : 'dark');
});

elements.navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  });
});

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  elements.header.classList.toggle('scrolled', y >= 60);
  elements.scrollTop.hidden = y < 300;
});

elements.scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

elements.retryButton.addEventListener('click', loadProjects);

elements.contactForm.addEventListener('input', updateFormState);

elements.contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  STATE.form.errors = validateForm(getFormValues());
  STATE.form.submitted = Object.keys(STATE.form.errors).length === 0;

  renderFormFeedback();

  if (STATE.form.submitted) {
    elements.contactForm.reset();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

elements.revealItems.forEach((item) => observer.observe(item));

renderTheme();
renderMenu();
renderFormFeedback();
loadProjects();
