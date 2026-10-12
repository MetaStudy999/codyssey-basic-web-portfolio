import {createServer} from 'node:http';
import {readFileSync,existsSync,statSync,mkdirSync,writeFileSync} from 'node:fs';
import {resolve,join,extname,sep} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {chromium} from 'playwright';

const pr=Number(process.env.QA_PR),sha=process.env.QA_SHA,root=resolve('mission');
const output=resolve(process.env.QA_OUTPUT || 'qa-evidence/pr-'+pr);
const widths=[320,375,768,1024,1440];
const prefix=pr===22?'/codyssey-basic-web-portfolio/':'/training/round-03-apos/04-src/';
const checks=[],screenshots=[],errors=[];let formPosts=0,browser;
const hash=b=>createHash('sha256').update(b).digest('hex');
function assert(v,label){checks.push({name:label,ok:!!v});if(!v)throw Error('QA_FAIL: '+label);console.log('QA_PASS '+label);}
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml'};
const repos=[
{name:'safe-js',html_url:'https://github.com/MetaStudy999/safe-js',language:'JavaScript',fork:false},
{name:'safe-py',html_url:'https://github.com/MetaStudy999/safe-py',language:'Python',fork:false},
{name:'unsafe-js',html_url:'javascript:alert(1)',language:'JavaScript',fork:false},
{name:'unsafe-host',html_url:'https://github.com.evil.example/x',language:'Python',fork:false},
{name:'unsafe-credential',html_url:'https://bad:pw@github.com/x',language:'Python',fork:false},
{name:'fork-hidden',html_url:'https://github.com/MetaStudy999/fork-hidden',language:'Python',fork:true}
];
const server=createServer((req,res)=>{try{
let p=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
if(p==='/favicon.ico'){res.writeHead(204);res.end();return;}
if(pr===22){if(!p.startsWith(prefix)){res.writeHead(404);res.end();return;}p=p.slice(prefix.length-1);}
const file=resolve(root,'.'+p,p.endsWith('/')?'index.html':'');
if(!file.startsWith(root+sep)||!existsSync(file)||!statSync(file).isFile()){res.writeHead(404);res.end();errors.push({status:404,path:p});return;}
res.writeHead(200,{'content-type':mime[extname(file)]||'application/octet-stream'});res.end(readFileSync(file));
}catch(e){res.writeHead(500);res.end();errors.push({message:e.message});}});
async function image(page,width,tag){const height=await page.evaluate(()=>document.documentElement.scrollHeight);
for(let y=0;y<height;y+=600){await page.evaluate(v=>scrollTo(0,v),y);await page.waitForTimeout(20);}
await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(100);
const name='pr'+pr+'-'+width+'-'+tag+'.png',bytes=await page.screenshot({path:join(output,name),fullPage:true,animations:'disabled'});
const sha256=hash(bytes);screenshots.push({width,tag,name,sha256,full_page:true});console.log('QA_PNG_SHA256 '+name+' '+sha256);}
mkdirSync(output,{recursive:true});
try{
assert([19,21,22].includes(pr)&&/^[a-f0-9]{40}$/.test(sha),'valid pinned identity');
assert(execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim()===sha,'exact detached candidate HEAD');
if(pr>=21)for(const [name,expected] of [
['hero-mountain-sl02.jpg','942ec4bc3992acba8f7a0280eb6906a80c056dc61b9d0c8dbab6990115ae8748'],
['about-journey-sl02.jpg','a6ed6fe3cac5bbce05ed3e55c35dc3c0ec4cff71507631a07878232c89f08158']])
assert(hash(readFileSync(join(root,'training/round-03-apos/04-src/images',name)))===expected,'unaltered image '+name);
if(pr===22)for(const [name,expected] of [
['index.html','301ba10743cb80595eb20e243e7b1de4757e4dfa'],['css/style.css','63a67f2adca9815a31fc7aab439a1989a4d4887c'],
['js/script.js','e0b8c011fbae55c1a8913b3db0ceb7fe71cf2367'],['images/profile-placeholder.svg','8cf400174e07418a22a401e756230ec6d3feec0a']])
assert(execFileSync('git',['hash-object','legacy/round-01-portfolio/'+name],{cwd:root,encoding:'utf8'}).trim()===expected,'legacy source blob '+name);
await new Promise(done=>server.listen(0,'127.0.0.1',done));
const port=server.address().port;
browser=await chromium.launch({headless:true});
for(const width of widths){
const ctx=await browser.newContext({viewport:{width,height:900},colorScheme:'light',reducedMotion:'reduce'});
const page=await ctx.newPage();let api=200;let mockRepos=repos;let expectedApi403Console=0;let expectedMock500=false;let mocked500Console=0;
page.on('pageerror',e=>errors.push({width,pageerror:e.message}));
page.on('console',m=>{if(m.type()!=='error')return;const message=m.text();
if(api===403 && message.includes('403 (Forbidden)')){expectedApi403Console++;return;}
if(expectedMock500 && message.includes('500 (Internal Server Error)')){mocked500Console++;return;}
errors.push({width,console:message});});
page.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:')&&r.status()>=400)errors.push({width,response:r.url(),status:r.status()});});
await page.route('**/*',route=>{const u=route.request().url();
if(u.startsWith('https://api.github.com/users/MetaStudy999/repos'))return route.fulfill({status:api,contentType:'application/json',body:api===200?JSON.stringify(mockRepos):'{"message":"rate limit"}'});
if(u.startsWith('https://formspree.io/')){formPosts++;return route.abort('blockedbyclient');}
if(u.startsWith('http://127.0.0.1:'+port+'/'))return route.continue();
return route.abort('blockedbyclient');});
const response=await page.goto('http://127.0.0.1:'+port+prefix,{waitUntil:'networkidle'});
assert(response?.status()===200,'page 200 '+width);
await page.locator('.project-card').first().waitFor({timeout:12000});
assert(await page.locator('.project-card').count()===5,'fork exclusion '+width);
assert((await page.locator('.typing-target').textContent()).trim()===(await page.locator('h1').getAttribute('aria-label')),'reduced motion presents complete headline '+width);
const links=await page.locator('.project-grid .project-card a[href]').evaluateAll(ns=>ns.map(n=>n.href));
assert(links.length===2&&links.every(u=>u.startsWith('https://github.com/MetaStudy999/safe-')),'malicious links text only '+width);
assert(!(await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1)),'horizontal overflow '+width);
assert(await page.locator('.profile-image').evaluate(e=>e.complete&&e.naturalWidth>0),'decoded image '+width);
if(pr>=21)assert((await page.locator('.hero').evaluate(e=>getComputedStyle(e).backgroundImage)).includes('hero-mountain-sl02.jpg'),'mountain hero applied '+width);
assert(await page.locator('.contact-form').getAttribute('data-formspree-endpoint')==='','no configured delivery '+width);
for(const field of ['name','email','message']){
assert(await page.locator('#'+field).getAttribute('aria-describedby')===field+'-error','describedby '+field+' '+width);
assert(await page.locator('#'+field).getAttribute('aria-invalid')==='false','initial valid '+field+' '+width);}
if(width===375){
await page.getByRole('button',{name:'Python',exact:true}).click();
assert(await page.locator('.project-card').count()===3,'Python language filter count');
assert(await page.getByRole('button',{name:'Python',exact:true}).getAttribute('aria-pressed')==='true','Python selected ARIA');
await page.getByRole('button',{name:'JavaScript',exact:true}).click();
assert(await page.locator('.project-card').count()===2,'JavaScript language filter count');
await page.getByRole('button',{name:'전체',exact:true}).click();
assert(await page.locator('.project-card').count()===5,'language filter resets to all');
mockRepos=[...repos,
{name:'bad-data',html_url:'data:text/html,alert(1)',language:'JavaScript',fork:false},
{name:'bad-http',html_url:'http://github.com/MetaStudy999/bad',language:'JavaScript',fork:false},
{name:'bad-spoof',html_url:'https://github.com@evil.example/bad',language:'JavaScript',fork:false},
{name:'bad-quote',html_url:'https://github.com/MetaStudy999/bad" onclick="alert(1)',language:'JavaScript',fork:false},
{name:'bad-port',html_url:'https://github.com:444/MetaStudy999/bad',language:'JavaScript',fork:false},
{name:'bad-backslash',html_url:'https:\\\\github.com/MetaStudy999/bad',language:'JavaScript',fork:false}];
await page.reload({waitUntil:'networkidle'});
assert(await page.locator('.project-card').count()===11,'additional hostile URL fixtures loaded');
assert(await page.locator('.project-card a[href]').count()===2,'all bad protocols and spoofed URLs remain plain text');
for(const name of ['bad-data','bad-http','bad-spoof','bad-quote','bad-port','bad-backslash']){
const card=page.locator('.project-card').filter({has:page.getByRole('heading',{name,exact:true})});
assert(await card.count()===1 && await card.locator('a').count()===0,'nonclickable hostile card '+name);
}
mockRepos=repos;await page.reload({waitUntil:'networkidle'});
assert(await page.locator('.project-card').count()===5,'restore non-hostile mock data');
await page.locator('.contact-form button[type=submit]').click();
for(const field of ['name','email','message'])assert(await page.locator('#'+field).getAttribute('aria-invalid')==='true','required validation '+field);
await page.locator('#name').fill('QA Name');await page.locator('#email').fill('qa@example.com');await page.locator('#message').fill('QA isolated message');
for(const field of ['name','email','message'])assert(await page.locator('#'+field).getAttribute('aria-invalid')==='false','corrected validation '+field);
await page.locator('.contact-form button[type=submit]').click();
assert((await page.locator('.form-status').innerText()).includes('실제 발송하지 않았습니다'),'no real Formspree submission');
await page.locator('.contact-form').evaluate(form=>form.reset());
for(const field of ['name','email','message'])assert(await page.locator('#'+field).getAttribute('aria-invalid')==='false','reset valid '+field);
await page.locator('#name').focus();await page.keyboard.press('Tab');
assert(await page.evaluate(()=>document.activeElement.id)==='email','keyboard Tab name to email');
await page.keyboard.press('Tab');
assert(await page.evaluate(()=>document.activeElement.id)==='message','keyboard Tab email to message');
for(const field of ['name','email','message'])assert(await page.getByRole('textbox',{name:field==='name'?'이름':field==='email'?'이메일':'메시지'}).count()===1,'accessible textbox name '+field);
// All Formspree requests are blocked by the catch-all route unless explicitly fulfilled by this local-only mock.
const mockEndpoint='https://formspree.io/f/QA123';
let formMocks=0;
await page.route(mockEndpoint,route=>{formMocks++;return route.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'});});
await page.locator('.contact-form').evaluate((form,url)=>{form.dataset.formspreeEndpoint=url;},mockEndpoint);
await page.locator('#name').fill('QA Name');await page.locator('#email').fill('qa@example.com');await page.locator('#message').fill('QA mock success');
await page.locator('.contact-form button[type=submit]').click();
await page.getByText('전송 요청 성공. 실제 메일 수신은 별도 확인이 필요합니다.').waitFor();
assert(formMocks===1,'mock success intercepted exactly once');
for(const field of ['name','email','message']){
assert(await page.locator('#'+field).inputValue()==='','form reset after mocked success '+field);
assert(await page.locator('#'+field).getAttribute('aria-invalid')==='false','aria normalized after mocked success '+field);
}
await page.unroute(mockEndpoint);
await page.route(mockEndpoint,route=>{formMocks++;return route.fulfill({status:500,contentType:'application/json',body:'{"error":"mock"}'});});
await page.locator('#name').fill('QA Name');await page.locator('#email').fill('qa@example.com');await page.locator('#message').fill('QA mock failure');
expectedMock500=true;
await page.locator('.contact-form button[type=submit]').click();
await page.getByText('전송 실패. 네트워크와 설정을 확인하고 다시 시도해 주세요.').waitFor();
assert(formMocks===2,'mock failure intercepted exactly once');
await page.waitForTimeout(75);
assert(mocked500Console===1,'exactly one expected simulated 500 console error');
expectedMock500=false;
assert(await page.locator('#message').inputValue()==='QA mock failure','failure preserves user entry');
for(const field of ['name','email','message'])assert(await page.locator('#'+field).getAttribute('aria-invalid')==='false','aria valid after mock failure '+field);
await page.unroute(mockEndpoint);
await page.locator('.contact-form').evaluate(form=>form.dataset.formspreeEndpoint='');
assert(await page.locator('.contact-form').getAttribute('data-formspree-endpoint')==='','form endpoint restored blank');
const cdp=await ctx.newCDPSession(page),ax=await cdp.send('Accessibility.getFullAXTree');
assert(ax.nodes.length>40,'Chromium accessibility tree populated');
writeFileSync(join(output,'ax-tree-summary.json'),JSON.stringify({node_count:ax.nodes.length,digest:hash(Buffer.from(JSON.stringify(ax.nodes)))},null,2));
api=403;await page.reload({waitUntil:'networkidle'});assert(await page.locator('.retry-button').isVisible(),'API 403 retry enabled');
assert(expectedApi403Console===1,'exactly one expected mock API 403 console response');
api=200;await page.locator('.retry-button').click();await page.locator('.project-card').first().waitFor();
assert(await page.locator('.project-card').count()===5,'retry recovers API');
}
if(width<=768&&await page.locator('.menu-toggle').isVisible()){
await page.locator('.menu-toggle').click();assert(await page.locator('.menu-toggle').getAttribute('aria-expanded')==='true','mobile menu opens '+width);
await page.locator('.menu-toggle').click();assert(await page.locator('.menu-toggle').getAttribute('aria-expanded')==='false','mobile menu closes '+width);}
if(width===1440){
await page.locator('.theme-toggle').click();await page.locator('.theme-toggle').click();
assert(await page.evaluate(()=>localStorage.getItem('b1-1-theme'))==='dark','dark preference saved');
await page.reload({waitUntil:'networkidle'});
assert(await page.locator('html').getAttribute('data-theme')==='dark','dark theme survives reload');
await image(page,width,'dark');
await page.locator('.theme-toggle').click();await page.locator('.theme-toggle').click();
assert(await page.locator('html').getAttribute('data-theme')==='light','explicit light theme applied');
assert(await page.evaluate(()=>localStorage.getItem('b1-1-theme'))==='light','explicit light preference saved');
await page.locator('.theme-toggle').click();await page.locator('.theme-toggle').click();
assert(await page.evaluate(()=>localStorage.getItem('b1-1-theme'))==='system','system preference selected');
await page.emulateMedia({colorScheme:'dark'});
await page.waitForFunction(()=>document.documentElement.dataset.theme==='dark',{timeout:8000});
assert(await page.locator('html').getAttribute('data-theme')==='dark','system dark preference tracks OS');
await page.emulateMedia({colorScheme:'light'});
await page.waitForFunction(()=>document.documentElement.dataset.theme==='light',{timeout:8000});
assert(await page.locator('html').getAttribute('data-theme')==='light','system light preference tracks OS');
await page.locator('.theme-toggle').click();
assert(await page.evaluate(()=>localStorage.getItem('b1-1-theme'))==='light','explicit light restored for screenshot');}
await image(page,width,'full');
await ctx.close();
}
if(pr===22){const page=await browser.newPage();const r=await page.goto('http://127.0.0.1:'+port+'/codyssey-basic-web-portfolio/legacy/round-01-portfolio/');
assert(r?.status()===200,'legacy preserved HTTP 200');assert((await page.title()).length>0,'legacy title');
await page.screenshot({path:join(output,'legacy.png'),fullPage:true});
screenshots.push({name:'legacy.png',sha256:hash(readFileSync(join(output,'legacy.png'))),full_page:true});
await page.close();}
assert(formPosts===0,'Formspree outbound zero');
assert(errors.length===0,'console/page/network errors zero');
}catch(e){errors.push({failure:e.message});console.error(e.stack);process.exitCode=1;}
finally{if(browser)await browser.close();if(server.listening)await new Promise(done=>server.close(done));
const report={pr,head_sha:sha,tests_passed:checks.filter(x=>x.ok).length,tests_total:checks.length,
result:process.exitCode?'FAIL':'PASS',screenshots,errors,formspree_requests:formPosts,
evidence_authority:'MAKER_EXECUTION_CANDIDATE_NOT_QA_SEC_PASS'};
const bytes=Buffer.from(JSON.stringify(report,null,2)+'\n');writeFileSync(join(output,'report.json'),bytes);
console.log('QA23_REPORT_SHA256 '+hash(bytes));console.log('QA23_RESULT '+report.result+' '+report.tests_passed+'/'+report.tests_total);}
