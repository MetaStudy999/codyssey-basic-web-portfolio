import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import assert from 'node:assert/strict';

const siteRoot = resolve('training/round-03-apos/04-src');
const out = resolve('bonus-browser-evidence');
mkdirSync(out, { recursive: true });
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
const server = createServer((req,res)=>{
  const file = resolve(siteRoot, '.'+decodeURIComponent(new URL(req.url,'http://local.test').pathname));
  if (!file.startsWith(siteRoot+'/') && file!==siteRoot) {res.writeHead(403).end();return;}
  try {
    const data=readFileSync(file);
    res.writeHead(200, {'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
    res.end(data);
  }catch(e){res.writeHead(404).end('NOT FOUND');}
});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const base = 'http://127.0.0.1:'+server.address().port+'/index.html';
const browser=await chromium.launch({headless:true});
let checks=0;
const check=(condition,label)=>{assert.ok(condition,label);console.log('PASS: '+label);checks++;};
const repos = [
{name:'python-alpha',description:'파이썬 예제',language:'Python',html_url:'https://github.com/MetaStudy999/python-alpha',fork:false,stargazers_count:2},
{name:'js-beta',description:'JS 예제',language:'JavaScript',html_url:'https://github.com/MetaStudy999/js-beta',fork:false,stargazers_count:3},
{name:'python-gamma',description:'다른 예제',language:'Python',html_url:'https://github.com/MetaStudy999/python-gamma',fork:false,stargazers_count:1},
{name:'fork-extra',language:'Python',html_url:'https://github.com/MetaStudy999/fork-extra',fork:true,stargazers_count:0}
];
const assets=[];
try {
 const context=await browser.newContext({viewport:{width:1280,height:850},colorScheme:'dark',reducedMotion:'reduce'});
 const page=await context.newPage();
 page.on('pageerror',e=>{console.error('PAGE ERROR',e.message);});
 await page.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(repos)}));
 await page.goto(base);await page.locator('.project-card').first().waitFor();
 check(await page.locator('.project-card').count()===3,'BONUS01: excludes fork and shows 3 cards');
 check((await page.locator('.project-status').innerText()).includes('3개 표시'),'displayed item count is accurate');
 check(await page.locator('.retry-button').isVisible()===false,'CORE: retry button hidden on success');
 check(await page.locator('.project-filters button').count()===3,'BONUS01: All/Python/JavaScript controls');
 await page.getByRole('button',{name:'Python',exact:true}).click();
 check(await page.locator('.project-card').count()===2,'BONUS01: filters Python cards');
 check((await page.locator('.project-status').innerText()).includes('2개 표시'),'BONUS01: count updates with filter');
 await page.getByRole('button',{name:'전체',exact:true}).click();
 check(await page.locator('.project-card').count()===3,'BONUS01: reset all filter');
 check(await page.locator('.typing-target').innerText()==='안녕하세요. 배우고 만들며 성장하는 개발자입니다.','BONUS02: reduced motion displays complete headline');
 check(await page.locator('html').getAttribute('data-theme')==='dark','BONUS04: follows OS dark preference initially');
 await page.locator('.theme-toggle').click();
 check(await page.locator('html').getAttribute('data-theme')==='light','BONUS04: explicit light preference');
 await page.reload(); await page.locator('.project-card').first().waitFor();
 check(await page.locator('html').getAttribute('data-theme')==='light','BONUS04: explicit preference survives reload');
 await page.locator('.theme-toggle').click(); await page.locator('.theme-toggle').click();
 check(await page.locator('html').getAttribute('data-theme')==='dark','BONUS04: system follows OS again');
 await page.emulateMedia({colorScheme:'light',reducedMotion:'reduce'});
 await page.waitForFunction(() => document.documentElement.dataset.theme === 'light', null, { timeout: 3000 });
 check(await page.locator('html').getAttribute('data-theme')==='light','BONUS04: responds to OS theme change');
 await page.screenshot({path:join(out,'bonus-desktop-light.png'),fullPage:true,animations:'disabled'});assets.push('bonus-desktop-light.png');
 await page.emulateMedia({colorScheme:'dark',reducedMotion:'reduce'});
 await page.screenshot({path:join(out,'bonus-desktop-dark.png'),fullPage:true,animations:'disabled'});assets.push('bonus-desktop-dark.png');
 await page.locator('#email').fill('invalid');
 await page.locator('#name').fill('QA Test');
 await page.locator('#message').fill('A safe test message');
 await page.locator('.contact-form button[type=submit]').click();
 check((await page.locator('[data-error-for=email]').innerText()).length>0,'CORE: email validation catches invalid input');
 await page.locator('#email').fill('qa@example.com');
 await page.locator('.contact-form button[type=submit]').click();
 check((await page.locator('.form-status').innerText()).includes('실제 발송하지 않았습니다'),'BONUS03: missing endpoint sends no personal data');
 let posted=0;
 await page.route('https://formspree.io/f/*',r=>{posted++;return r.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'})});
 await page.locator('.contact-form').evaluate(e=>e.dataset.formspreeEndpoint='https://formspree.io/f/TESTFORM');
 await page.locator('#name').fill('QA Test');await page.locator('#email').fill('qa@example.com');await page.locator('#message').fill('A safe test message');
 await page.locator('.contact-form button[type=submit]').click();
 await page.getByText('전송 요청 성공.',{exact:false}).waitFor();
 check(posted===1,'BONUS03: mocked POST sends exactly one request');
 check((await page.locator('.form-status').innerText()).includes('수신은 별도'),'BONUS03: does not claim actual mailbox arrival');
 const mobile=await browser.newContext({viewport:{width:375,height:812},colorScheme:'light',reducedMotion:'reduce'});
 const mp=await mobile.newPage();await mp.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(repos)}));
 await mp.goto(base);await mp.locator('.project-card').first().waitFor();
 check(await mp.locator('.menu-toggle').isVisible(),'CORE: mobile menu button visible');
 await mp.locator('.menu-toggle').click();
 check(await mp.locator('#nav-menu').isVisible(),'CORE: mobile navigation opens');
 check(await mp.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'CORE: mobile has no horizontal overflow');
 await mp.screenshot({path:join(out,'bonus-mobile.png'),fullPage:true,animations:'disabled'});assets.push('bonus-mobile.png');
 await mobile.close();
 const empty=await browser.newContext(); const ep=await empty.newPage();
 await ep.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:200,contentType:'application/json',body:'[]'}));
 await ep.goto(base);
 await ep.getByText('표시할 프로젝트가 없습니다.').waitFor();
 check(await ep.locator('.project-filters').isVisible()===false,'CORE: empty list hides filters');
 await ep.unroute('https://api.github.com/users/MetaStudy999/repos**');
 await ep.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:403,body:'rate limit'}));
 await ep.reload();await ep.getByText('요청 한도에 도달했습니다.',{exact:false}).waitFor();
 check(await ep.locator('.retry-button').isVisible(),'CORE: retry button visible only after error');
 await ep.unroute('https://api.github.com/users/MetaStudy999/repos**');
 await ep.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(repos)}));
 await ep.locator('.retry-button').click();await ep.locator('.project-card').first().waitFor();
 check(!(await ep.locator('.retry-button').isVisible()),'CORE: retry disappears on recovery');
 await empty.close();
 const normal=await browser.newContext({reducedMotion:'no-preference'});const tp=await normal.newPage();
 await tp.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:200,contentType:'application/json',body:'[]'}));
 await tp.goto(base);
 await tp.waitForTimeout(150);
 const partial=await tp.locator('.typing-target').innerText();
 check(partial.length>0 && partial.length< '안녕하세요. 배우고 만들며 성장하는 개발자입니다.'.length,'BONUS02: ordinary mode types progressively');
 await tp.locator('.typing-target').getAttribute('class');
 await tp.waitForTimeout(2200);
 check(await tp.locator('.typing-target').innerText()==='안녕하세요. 배우고 만들며 성장하는 개발자입니다.','BONUS02: typing ends on full string');
 await normal.close();await context.close();
 console.log(JSON.stringify({status:'PASS',checks,artifacts:assets,scope:'stubbed API and Formspree POST; NO REAL EMAIL SEND'},null,2));
}finally{await browser.close();await new Promise(ok=>server.close(ok));}
