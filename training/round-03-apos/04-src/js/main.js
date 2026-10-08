const GITHUB_USERNAME = 'MetaStudy999';
const THEME_STORAGE_KEY = 'b1-1-theme';
const systemThemeMedia = window.matchMedia?.('(prefers-color-scheme: dark)') || null;
const reducedMotionMedia = window.matchMedia?.('(prefers-reduced-motion: reduce)') || null;
const storedPreference = localStorage.getItem(THEME_STORAGE_KEY);
const initialPreference = ['system', 'light', 'dark'].includes(storedPreference) ? storedPreference : 'system';
const resolveTheme = (preference) => preference === 'system'
  ? (systemThemeMedia?.matches ? 'dark' : 'light') : preference;

const STATE = {
  themePreference: initialPreference,
  theme: resolveTheme(initialPreference),
  menuOpen: false,
  projects: {
    status: 'idle',
    data: [],
    error: '',
    selectedLanguage: 'all',
  },
  form: {
    errors: {},
    submitted: false,
    submitting: false,
    message: '',
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
  projectFilters: document.querySelector('.project-filters'),
  retryButton: document.querySelector('.retry-button'),
  contactForm: document.querySelector('.contact-form'),
  formStatus: document.querySelector('.form-status'),
  formSubmit: document.querySelector('.contact-form button[type="submit"]'),
  typingTarget: document.querySelector('.typing-target'),
  revealItems: document.querySelectorAll('.reveal'),
};

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

// BONUS-04: user preference overrides the operating-system choice.
const setTheme = (preference) => {
  STATE.themePreference = preference;
  STATE.theme = resolveTheme(preference);
  localStorage.setItem(THEME_STORAGE_KEY, preference);
  renderTheme();
};
const renderTheme = () => {
  STATE.theme = resolveTheme(STATE.themePreference);
  elements.documentRoot.dataset.theme = STATE.theme;
  const label = {system:'시스템',light:'라이트',dark:'다크'}[STATE.themePreference];
  elements.themeToggle.textContent = {system:'◐',light:'☀',dark:'☾'}[STATE.themePreference];
  elements.themeToggle.setAttribute('aria-label', '테마: '+label+' (다음 설정으로 전환)');
  elements.themeToggle.title = '테마 선택: '+label+' / 적용: '+STATE.theme;
};
systemThemeMedia?.addEventListener?.('change', () => {
  if (STATE.themePreference === 'system') renderTheme();
});
// BONUS-02: reduce-motion setting skips the animated typing.
const initTyping = () => {
  const target = elements.typingTarget;
  if (!target || reducedMotionMedia?.matches) return;
  const full = target.textContent;
  target.textContent = '';
  let i=0;
  const timer = window.setInterval(() => {
    target.textContent = full.slice(0, ++i);
    if (i>=full.length) window.clearInterval(timer);
  }, 45);
  reducedMotionMedia?.addEventListener?.('change',(event)=>{
    if (event.matches){window.clearInterval(timer);target.textContent=full;}
  });
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

// BONUS-01: render language controls from the actual non-fork repository list.
const renderProjectFilters = (repositories, status) => {
  const area = elements.projectFilters;
  area.replaceChildren();
  area.hidden = status!=='success' || !repositories.length;
  if(area.hidden)return;
  const languages = [...new Set(repositories.map(r=>r.language||'기타'))].sort((a,b)=>a.localeCompare(b,'ko'));
  if(STATE.projects.selectedLanguage!=='all' && !languages.includes(STATE.projects.selectedLanguage)){
    STATE.projects.selectedLanguage='all';
  }
  for(const language of ['all',...languages]){
    const button=document.createElement('button');
    button.type='button';
    button.textContent=language==='all'?'전체':language;
    button.setAttribute('aria-pressed',String(STATE.projects.selectedLanguage===language));
    button.addEventListener('click',()=>{
      STATE.projects.selectedLanguage=language;
      renderProjects();
    });
    area.append(button);
  }
};
const renderProjects = () => {
  const {status,data,error}=STATE.projects;
  elements.retryButton.hidden=status!=='error';
  elements.projectGrid.replaceChildren();
  const repositories=data.filter(r=>!r.fork);
  renderProjectFilters(repositories,status);
  if(status==='loading'){elements.projectStatus.textContent='로딩 중...';return;}
  if(status==='error'){elements.projectStatus.textContent=error||'프로젝트를 불러올 수 없습니다.';return;}
  if(status!=='success'||!repositories.length){
    elements.projectStatus.textContent='표시할 프로젝트가 없습니다.';return;
  }
  const matching=repositories.filter(r=>STATE.projects.selectedLanguage==='all'||(r.language||'기타')===STATE.projects.selectedLanguage);
  const shown=matching.slice(0,12);
  elements.projectStatus.textContent=shown.length
    ? `${shown.length}개 표시 (선택 ${matching.length}개, 전체 ${repositories.length}개)`
    : '선택한 언어에 해당하는 프로젝트가 없습니다.';
  elements.projectGrid.innerHTML=shown.map(({name,description,html_url:url,stargazers_count:stars,language})=>`
    <article class="project-card">
      <h3><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a></h3>
      <p>${escapeHtml(description||'설명이 등록되지 않은 저장소입니다.')}</p>
      <div class="project-meta"><span>${escapeHtml(language||'Language N/A')}</span><span>★ ${Number(stars)||0}</span></div>
    </article>`).join('');
};
const loadProjects = async () => {
  STATE.projects = { status: 'loading', data: [], error: '', selectedLanguage: 'all' };
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
      selectedLanguage: 'all',
    };
  } catch (error) {
    STATE.projects = {
      status: 'error',
      data: [],
      error: error instanceof Error ? error.message : '프로젝트를 불러올 수 없습니다.',
      selectedLanguage: 'all',
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
  document.querySelectorAll('[data-error-for]').forEach(element=>{
    element.textContent=STATE.form.errors[element.dataset.errorFor]||'';
  });
  elements.formSubmit.disabled=STATE.form.submitting;
  elements.formSubmit.textContent=STATE.form.submitting?'전송 중...':'보내기';
  elements.formStatus.textContent=STATE.form.message;
};
const updateFormState = () => {
  if(STATE.form.submitting)return;
  STATE.form.errors=validateForm(getFormValues());
  STATE.form.submitted=false;
  STATE.form.message='';
  renderFormFeedback();
};
// BONUS-03: no live endpoint is embedded; explicitly configured Formspree HTTPS only.
const getApprovedFormEndpoint = () => {
  const endpoint=(elements.contactForm.dataset.formspreeEndpoint||'').trim();
  return /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)?endpoint:null;
};
elements.menuToggle.addEventListener('click', () => {
  STATE.menuOpen = !STATE.menuOpen;
  renderMenu();
});

elements.themeToggle.addEventListener('click', () => {
  const modes=['system','light','dark'];
  setTheme(modes[(modes.indexOf(STATE.themePreference)+1)%modes.length]);
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
    window.history.pushState(null, '', targetId);
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

elements.contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if(STATE.form.submitting)return;
  STATE.form.errors=validateForm(getFormValues());
  STATE.form.submitted=false;
  if(Object.keys(STATE.form.errors).length){
    STATE.form.message='입력값을 다시 확인해 주세요.';
    renderFormFeedback();return;
  }
  const endpoint=getApprovedFormEndpoint();
  if(!endpoint){
    STATE.form.message='입력값 검증은 통과했지만 승인된 전송 주소가 없어 실제 발송하지 않았습니다.';
    renderFormFeedback();return;
  }
  STATE.form.submitting=true;
  STATE.form.message='전송 중...';
  renderFormFeedback();
  try{
    const response=await fetch(endpoint,{
      method:'POST',headers:{Accept:'application/json'},
      body:new FormData(elements.contactForm)
    });
    if(!response.ok)throw new Error('SEND_FAILED');
    STATE.form.submitted=true;
    STATE.form.message='전송 요청 성공. 실제 메일 수신은 별도 확인이 필요합니다.';
    elements.contactForm.reset();
  }catch(error){
    STATE.form.message='전송 실패. 네트워크와 설정을 확인하고 다시 시도해 주세요.';
  }finally{
    STATE.form.submitting=false;renderFormFeedback();
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
initTyping();
loadProjects();
