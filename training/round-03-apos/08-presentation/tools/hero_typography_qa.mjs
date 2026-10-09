/** Independent local Chromium visual regression. No live GitHub or Formspree calls. */
import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const urls = ['http://127.0.0.1:8765/', 'http://127.0.0.1:8766/'];
const output = join(process.env.HOME, 'projects/b1-1-qa/evidence/hero-typo-v2-'+new Date().toISOString().replace(/[:.]/g,'-'));
mkdirSync(output,{recursive:true});
const results = [], screenshots=[];
const sha = b => createHash('sha256').update(b).digest('hex');
const check = (name,ok,detail='')=>{
 results.push({name,verdict:ok?'PASS':'FAIL',detail});
 console.log(`${ok?'PASS':'FAIL'} | ${name}${detail?' | '+detail:''}`);
};
const demo = [{name:'python-alpha',description:'Mock only',language:'Python',html_url:'https://github.com/MetaStudy999/python-alpha',fork:false,stargazers_count:1}];
let browser;
try {
  const fetched = await Promise.all(urls.map(url=>fetch(url+'css/style.css',{signal:AbortSignal.timeout(9000)}).then(r=>{
    if(!r.ok)throw new Error('HTTP '+r.status);
    return r.arrayBuffer();
  }).then(b=>Buffer.from(b))));
  check('8765/8766 stylesheet byte parity',sha(fetched[0])===sha(fetched[1]));
  check('V2 CSS marker exists',fetched[1].toString('utf8').includes('SL02-HERO-TYPO-FIX-V2'));
  browser=await chromium.launch({headless:true});
  for (const width of [320,375,768,1024,1440]) {
    const context=await browser.newContext({viewport:{width,height:920},colorScheme:'light',reducedMotion:'reduce'});
    const page=await context.newPage();
    await page.route('**/*',route=>{
      const u=new URL(route.request().url());
      if(u.hostname==='api.github.com'&&u.pathname.startsWith('/users/MetaStudy999/repos'))return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(demo)});
      if(u.hostname==='127.0.0.1'&&u.port==='8766')return route.continue();
      return route.abort('blockedbyclient');
    });
    const pageErrors=[];
    page.on('pageerror',e=>pageErrors.push(e.message));
    await page.goto(urls[1],{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>document.querySelector('.typing-target')?.textContent==='안녕하세요. 배우고 만들며 성장하는 개발자입니다.');
    await page.evaluate(()=>document.fonts.ready);
    const geometry=await page.evaluate(()=>{
      const span=document.querySelector('.typing-target');
      const text=span.firstChild;
      if(!text||text.nodeType!==Node.TEXT_NODE)throw Error('typing target must be text node');
      const tokens=[...text.textContent.matchAll(/[^\s]+/gu)];
      const fragments=tokens.map(({0:word,index})=>{
        const y=[];let outside=false;
        for(let i=index;i<index+word.length;i++){
          const range=document.createRange();range.setStart(text,i);range.setEnd(text,i+1);
          const r=range.getBoundingClientRect();y.push(Math.round(r.top));
          if(r.left<-1||r.right>innerWidth+1)outside=true;
        }
        return {word,rows:[...new Set(y)],outside};
      });
      return {words:fragments,documentWidth:document.documentElement.scrollWidth,viewport:innerWidth,
        cssWordBreak:getComputedStyle(document.querySelector('.hero h1')).wordBreak,
        heading:span.textContent};
    });
    const broken=geometry.words.filter(w=>w.rows.length>1||w.outside);
    check(`${width}px Korean tokens unbroken`,broken.length===0&&geometry.cssWordBreak==='keep-all',broken.map(w=>w.word).join(', '));
    check(`${width}px no horizontal overflow`,geometry.documentWidth<=width+1,`documentWidth=${geometry.documentWidth}`);
    check(`${width}px JavaScript errors`,pageErrors.length===0,pageErrors.join('; ').slice(0,120));
    if(width===375||width===1440){
      const file=join(output,`hero-${width}-light.png`);
      await page.locator('.hero').screenshot({path:file,animations:'disabled'});
      screenshots.push(file);
    }
    if(width===1440){
      await page.emulateMedia({colorScheme:'dark',reducedMotion:'reduce'});
      await page.locator('.theme-toggle').click(); // system -> light
      await page.locator('.theme-toggle').click(); // light -> dark
      const file=join(output,'hero-1440-dark.png');
      await page.locator('.hero').screenshot({path:file,animations:'disabled'});
      screenshots.push(file);
    }
    await context.close();
  }
} catch(error){check('Browser test execution',false,String(error?.message||error).slice(0,360));}
finally{if(browser)await browser.close();}
const passed=results.filter(x=>x.verdict==='PASS').length;
const failed=results.length-passed;
const report={status:failed?'FAIL_NEEDS_REPAIR':'PASS_FOR_LOCAL_HERO_TYPO_V2',passed,failed,checks:results.length,results,screenshots,scope:'Local 8766 actual HTML/CSS runtime, mocked GitHub API, no Formspree send, no independent owner acceptance'};
const dest=join(output,'hero-typography-report.json');writeFileSync(dest,JSON.stringify(report,null,2)+'\n');
console.log(`RESULT: ${report.status} | ${passed}/${results.length} | Evidence: ${output}`);
process.exitCode=failed?1:0;