/* B1-1 Round04: reproducible V8 mock-DOM tests for actual 04-src/js/script.js
 * No external packages, network, browser, WSL or deployment.
 * Run after approval: node training/round-04-agent/05-tests/v8-mock-checks.cjs
 * Mock results are NOT Chrome, accessibility, real API, or end-to-end PASS.
 */
async function runMockChecks(source, URLConstructor) {
  class MockEl {
    constructor(tag = "div") {
      this.tagName = tag.toUpperCase();
      this.dataset = {};
      this.attrs = {};
      this.children = [];
      this.textContent = "";
      this.value = "";
      this.validity = {valid: true};
      this.hidden = false;
      this.disabled = false;
      this.classes = new Set();
      this.listeners = {};
      this.classList = {
        add: key => this.classes.add(key),
        remove: key => this.classes.delete(key),
        contains: key => this.classes.has(key),
        toggle: (key, force) => {
          const next = force === undefined ? !this.classes.has(key) : Boolean(force);
          if (next) this.classes.add(key);
          else this.classes.delete(key);
          return next;
        }
      };
    }
    setAttribute(key, value) { this.attrs[key] = String(value); }
    getAttribute(key) { return this.attrs[key] ?? null; }
    addEventListener(key, callback) { (this.listeners[key] ??= []).push(callback); }
    append(...items) { this.children.push(...items); }
    replaceChildren(...items) { this.children = items; }
    querySelector(selector) {
      return selector === 'button[type="submit"]' ? nodes.get("#submit") : null;
    }
    querySelectorAll() { return []; }
    focus() { runtime.focused = this; }
  }
  const runtime = {savedTheme:null, throwOnSave:false, focused:null, fetchImpl:null, scrollCalls:[]};
  const nodes = new Map();
  const ids = ["menu-toggle","site-navigation","theme-toggle","site-header","back-to-top",
    "projects-grid","project-status","retry-projects","github-owner-label","github-profile-link",
    "contact-form","form-status","current-year","contact-name","contact-email","contact-message",
    "name-error","email-error","message-error","submit"];
  ids.forEach(id => nodes.set("#" + id, new MockEl()));
  ["theme-icon","theme-action-label"].forEach(name => nodes.set("." + name, new MockEl("span")));
  nodes.get("#submit").disabled = true;
  const documentMock = {
    readyState:"loading", documentElement:new MockEl("html"),
    querySelector:sel => nodes.get(sel) ?? null, querySelectorAll:()=>[],
    createElement:tag=>new MockEl(tag), addEventListener(){}
  };
  const windowMock = {
    scrollY:0, pageYOffset:0, innerWidth:375,
    matchMedia:()=>({matches:false,addEventListener(){}}), addEventListener(){},
    setTimeout:()=>1, clearTimeout(){}, scrollTo:arg=>runtime.scrollCalls.push(arg)
  };
  const storage = {
    getItem:()=>runtime.savedTheme,
    setItem:(_key,val)=>{if(runtime.throwOnSave) throw Error("Storage forbidden");runtime.savedTheme=val;}
  };
  class MockAbort {
    constructor() { this.signal = {aborted:false}; }
    abort() { this.signal.aborted = true; }
  }
  const proxyFetch = (...args)=>runtime.fetchImpl(...args);
  const code = source + "\nreturn {state,elements,init,onThemeClick,onMenuClick,onMenuKeydown,onScroll,onTopClick,renderProjects,loadProjects,onFormSubmit,mapRepository,trustedGithubUrl};";
  const app = new Function("window","document","localStorage","fetch","AbortController","URL",code)(
    windowMock, documentMock, storage, proxyFetch, MockAbort, URLConstructor
  );
  const checks = [];
  function check(name, predicate) {
    try { checks.push({name, pass:Boolean(predicate())}); }
    catch(e) { checks.push({name,pass:false,error:String(e)}); }
  }
  check("github URL accepted",()=>app.trustedGithubUrl("https://github.com/test/repo")!==null);
  for(const [name,url] of [
    ["javascript URL rejected","javascript:alert(1)"],
    ["fake GitHub domain rejected","https://github.com.attacker.example/x"],
    ["http URL rejected","http://github.com/example"],
    ["GitHub subdomain rejected","https://gist.github.com/test"]
  ])check(name,()=>app.trustedGithubUrl(url)===null);
  const item = app.mapRepository({
    name:"<b>untrusted</b>",description:null,html_url:"javascript:alert(1)",
    language:null,stargazers_count:-1
  });
  check("missing API fields safely normalized",()=>item.url===null&&item.stars===0&&item.language==="기타"&&item.description.length>0);
  app.state.projects.status = "success"; app.state.projects.data=[item]; app.renderProjects();
  check("untrusted project title rendered as text",()=>app.elements.projects.children[0].children.find(x=>x.tagName==="H3")?.textContent==="<b>untrusted</b>");
  app.state.projects.status="empty";app.state.projects.data=[];app.renderProjects();
  check("empty API result is not failure",()=>app.elements.projects.children.length===0&&app.elements.projectStatus.textContent.includes("없습니다"));
  app.state.projects.status="forbidden";app.renderProjects();
  check("403 shows retry and explanation",()=>app.elements.retry.hidden===false&&app.elements.projectStatus.textContent.includes("403"));
  app.onMenuClick();
  check("menu opens with aria-expanded",()=>app.state.menuOpen&&app.elements.menu.classList.contains("is-open")&&app.elements.menuButton.getAttribute("aria-expanded")==="true");
  app.onMenuClick();
  check("menu closes with aria-expanded",()=>!app.state.menuOpen&&app.elements.menuButton.getAttribute("aria-expanded")==="false");
  app.onMenuClick();app.onMenuKeydown({key:"Escape"});
  check("Escape closes menu and returns focus",()=>!app.state.menuOpen&&runtime.focused===app.elements.menuButton);
  app.onThemeClick();
  check("dark theme DOM and storage",()=>app.state.theme==="dark"&&documentMock.documentElement.dataset.theme==="dark"&&runtime.savedTheme==="dark");
  app.onThemeClick();
  check("light theme restored in DOM and storage",()=>app.state.theme==="light"&&runtime.savedTheme==="light");
  runtime.throwOnSave=true;app.onThemeClick();
  check("theme still works when localStorage write throws",()=>app.state.theme==="dark"&&documentMock.documentElement.dataset.theme==="dark");
  runtime.throwOnSave=false;
  for(const [offset,header,backTop] of [[59,false,false],[60,true,false],[61,true,false],
    [299,true,false],[300,true,true],[301,true,true],[0,false,false]]) {
    windowMock.scrollY=offset;app.onScroll();
    check("scroll threshold "+offset,()=>app.state.headerScrolled===header&&app.state.showTop===backTop);
  }
  app.onTopClick();check("back to top triggers scroll",()=>runtime.scrollCalls.at(-1)?.top===0);
  function field(id,value,valid=true) {
    nodes.get("#contact-"+id).value=value;
    nodes.get("#contact-"+id).validity={valid};
  }
  field("name","");field("email","");field("message","Valid message");
  let prevented=0;app.onFormSubmit({preventDefault:()=>prevented++});
  check("blank name/email rejected and submission prevented",()=>app.state.form.status==="invalid"&&nodes.get("#contact-name").getAttribute("aria-invalid")==="true"&&prevented===1);
  field("name","Jane");field("email","not-valid",false);app.onFormSubmit({preventDefault(){}});
  check("malformed email rejected",()=>app.state.form.status==="invalid"&&nodes.get("#contact-email").getAttribute("aria-invalid")==="true");
  field("email","jane@example.com");app.onFormSubmit({preventDefault(){}});
  check("valid form confirms verification, not sending",()=>app.state.form.status==="validated"&&app.elements.formStatus.textContent.includes("전송하거나 저장하지 않습니다"));
  for(const [label,expected,response] of [
    ["API 200 empty","empty",async()=>({status:200,ok:true,json:async()=>[]})],
    ["API 403 forbidden","forbidden",async()=>({status:403,ok:false})],
    ["API network exception","error",async()=>{throw Error("network down");}],
    ["API success with one repository","success",async()=>({status:200,ok:true,json:async()=>[{name:"repo",html_url:"https://github.com/x/repo"}]})],
    ["API nonarray response rejected","error",async()=>({status:200,ok:true,json:async()=>({bad:"shape"})})],
    ["API 404 error","error",async()=>({status:404,ok:false})],
    ["API 429 error","error",async()=>({status:429,ok:false})],
    ["API 500 error","error",async()=>({status:500,ok:false})],
    ["API JSON parsing failure","error",async()=>({status:200,ok:true,json:async()=>{throw SyntaxError("bad json")}})]
  ]) {
    runtime.fetchImpl=response;app.state.projects.status="idle";
    try {await app.loadProjects();check(label,()=>app.state.projects.status===expected);}
    catch(e){checks.push({name:label,pass:false,error:String(e)});}
  }
  const failures=checks.filter(x=>!x.pass);
  return {suite:"B1-1 Stage05 isolated fake-DOM integration checks",cases:checks.length,passed:checks.length-failures.length,failed:failures.length,checks};
}
if (typeof require === "function" && typeof module !== "undefined") {
  module.exports = {runMockChecks};
  if(require.main === module) {
    const fs=require("node:fs"),path=require("node:path");
    const src=fs.readFileSync(path.resolve(__dirname,"../04-src/js/script.js"),"utf8");
    runMockChecks(src,URL).then(result=>{
      process.stdout.write(JSON.stringify(result,null,2)+"\n");
      if(result.failed) process.exitCode=1;
    }).catch(err=>{process.stderr.write(String(err)+"\n");process.exitCode=1;});
  }
}
