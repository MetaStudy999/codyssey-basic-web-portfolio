import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createServer} from 'node:http';
import {readFileSync,mkdirSync} from 'node:fs';
import {resolve,extname,sep,join} from 'node:path';
import {chromium} from 'playwright';

const root=resolve('.'), out=resolve('root-promotion-evidence');
mkdirSync(out,{recursive:true});
const prefix='training/round-03-apos/04-src/',legacy='legacy/round-01-portfolio/';
const sha1=b=>createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');
let checks=0;const check=(v,name)=>{assert.ok(v,name);console.log('PASS: '+name);checks++};
const expected={
 [legacy+'index.html']:'301ba10743cb80595eb20e243e7b1de4757e4dfa',
 [legacy+'css/style.css']:'63a67f2adca9815a31fc7aab439a1989a4d4887c',
 [legacy+'js/script.js']:'e0b8c011fbae55c1a8913b3db0ceb7fe71cf2367',
 [legacy+'images/profile-placeholder.svg']:'8cf400174e07418a22a401e756230ec6d3feec0a',
 [prefix+'index.html']:'2a751ab1e5dcf89eb90758fa209d6f3c6bc7292c',
 [prefix+'css/style.css']:'d1fae4a091440ae121a2ca98d55bbc5a61934a3b',
 [prefix+'js/main.js']:'adc9c757196847f4755ad1ecccaf8c0adfb6bea6',
 [prefix+'images/hero-mountain-sl02.jpg']:'f7bf0495af97d6bb99ac1c4ba866361f245be2a1',
 [prefix+'images/about-journey-sl02.jpg']:'7631db9c7a0fe23da44531e4a1e757b24b12f3b5'
};
for(const [path,hash] of Object.entries(expected))check(sha1(readFileSync(join(root,path)))===hash,'Git blob retained: '+path);
const html=readFileSync(join(root,'index.html'),'utf8');
for(const path of [prefix+'css/style.css',prefix+'js/main.js',prefix+'images/about-journey-sl02.jpg',legacy])
 check(html.includes(path),'New root link: '+path);
check(!html.includes('src="js/script.js"'),'No legacy JavaScript on root');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg'};
const projectPath='/codyssey-basic-web-portfolio/';
const server=createServer((req,res)=>{try{
 const requestPath=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
 if(!requestPath.startsWith(projectPath)){res.writeHead(404).end('WRONG_PROJECT_PREFIX');return;}
 let pathname=requestPath.slice(projectPath.length);
 if(pathname==='' || pathname.endsWith('/'))pathname+='index.html';
 const file=resolve(root,pathname);
 if(!file.startsWith(root+sep)){res.writeHead(403).end();return;}
 const data=readFileSync(file);
 res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(data);
}catch(e){res.writeHead(404).end('NOT_FOUND')}});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const base='http://127.0.0.1:'+server.address().port+projectPath;
let browser;
try{
 browser=await chromium.launch({headless:true});
 const ctx=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 const page=await ctx.newPage(), errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://api.github.com/users/MetaStudy999/repos**',r=>r.fulfill({status:200,contentType:'application/json',body:'[]'}));
 check((await page.goto(base,{waitUntil:'load'})).status()===200,'GitHub Pages project-prefix root HTTP 200');
 check((await page.title()).includes('B1-1'),'Root new B1-1 title');
 check((await page.locator('.typing-target').textContent()).includes('안녕하세요'),'New hero rendered');
 const image=await page.locator('.hero').evaluate(e=>getComputedStyle(e).backgroundImage);
 check(image.includes('hero-mountain-sl02.jpg'),'Mountain background applied in CSS');
 for(const a of [prefix+'css/style.css',prefix+'js/main.js',prefix+'images/about-journey-sl02.jpg',prefix+'images/hero-mountain-sl02.jpg']){
  const resp=await fetch(base+a);
  check(resp.status===200&&(await resp.arrayBuffer()).byteLength>256,'Root asset HTTP 200 '+a);
 }
 check(await page.locator('.about-visual img').evaluate(e=>e.complete&&e.naturalWidth>0),'About image decoded');
 const screenshots=[];
 for(const width of [320,375,768,1024,1440]){
  await page.setViewportSize({width,height:900});
  check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal overflow at '+width);
  await page.locator('#hero').scrollIntoViewIfNeeded();
  const shot='root-'+width+'.png';
  await page.screenshot({path:join(out,shot),animations:'disabled'});
  screenshots.push(shot);
 }

 // P2-02: root page is independent from Round-03 source HTML.
 for(const field of ['name','email','message']){
  check(await page.locator('#'+field).getAttribute('aria-describedby')===field+'-error',
    'Root ARIA describedby '+field);
  check(await page.locator('#'+field+'-error').count()===1,'Root unique error '+field);
  check(await page.locator('#'+field).getAttribute('aria-invalid')==='false','Root initial valid '+field);
 }
 check(await page.locator('.form-status').getAttribute('aria-live')==='polite','Root aria-live preserved');
 await page.locator('#name').focus();
 await page.keyboard.press('Tab');
 check(await page.evaluate(()=>document.activeElement.id)==='email','Root keyboard field order');
 await page.locator('.contact-form button[type=submit]').click();
 for(const field of ['name','email','message'])
  check(await page.locator('#'+field).getAttribute('aria-invalid')==='true','Root invalid '+field);
 await page.locator('.contact-form').evaluate(e=>e.reset());
 for(const field of ['name','email','message'])
  check(await page.locator('#'+field).getAttribute('aria-invalid')==='false','Root reset '+field);
 await page.locator('#name').fill('QA Test');
 await page.locator('#email').fill('qa@example.com');
 await page.locator('#message').fill('Mocked page test only');
 await page.locator('.contact-form button[type=submit]').click();
 check((await page.locator('.form-status').innerText()).includes('실제 발송하지 않았습니다'),
  'Root missing Formspree endpoint blocks live submit');

 check(errors.length===0,'No root script errors');
 check((await page.locator('a[href="legacy/round-01-portfolio/"]').count())===1,'Legacy link available');

 // P2-01: root DOM must not turn API-provided executable/foreign URLs into links.
 const securityPage=await ctx.newPage();
 const candidates=[
  {name:'approved',html_url:'https://github.com/MetaStudy999/approved',fork:false,language:'JS'},
  {name:'bad-scheme',html_url:'javascript:alert(1)',fork:false,language:'JS'},
  {name:'bad-host',html_url:'https://github.com.evil.example/repo',fork:false,language:'JS'},
  {name:'bad-user',html_url:'https://who@github.com/repo',fork:false,language:'JS'}
 ];
 await securityPage.route('https://api.github.com/users/MetaStudy999/repos**',
   r=>r.fulfill({status:200,contentType:'application/json',body:JSON.stringify(candidates)}));
 await securityPage.goto(base);await securityPage.locator('.project-card').first().waitFor();
 check(await securityPage.locator('.project-card').count()===candidates.length,'Root bad-link card count retained');
 check(await securityPage.locator('.project-card a').count()===1,'Root rejects unsafe href anchors');
 check(await securityPage.locator('.project-card a').first().getAttribute('href')==='https://github.com/MetaStudy999/approved',
   'Root safe href DOM exactly GitHub HTTPS');
 await securityPage.close();
 const old=await ctx.newPage();
 check((await old.goto(base+legacy,{waitUntil:'load'})).status()===200,'Legacy HTTP 200');
 check((await old.title()).includes('1기'),'Legacy original title');
 for(const a of ['css/style.css','js/script.js','images/profile-placeholder.svg']){
   const resp=await fetch(base+legacy+a);
   check(resp.status===200&&(await resp.arrayBuffer()).byteLength>50,'Legacy asset HTTP 200 '+a);
 }
 await old.screenshot({path:join(out,'legacy-first-generation.png'),animations:'disabled'});
 await old.close();await ctx.close();
 const hashes=Object.fromEntries(screenshots.concat('legacy-first-generation.png').map(name=>[name,createHash('sha256').update(readFileSync(join(out,name))).digest('hex')]));
 console.log(JSON.stringify({status:'PASS',checks,screenshot_sha256:hashes,scope:'ISOLATED_PREDEPLOY',live_release:'NOT_EXECUTED'},null,2));
}finally{if(browser)await browser.close();await new Promise(ok=>server.close(ok));}