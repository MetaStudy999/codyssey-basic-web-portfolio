import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {verifyRound03} from './verify.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('Round 03 static/provenance contract passes the unchanged source',()=>{
  const result=verifyRound03(root);
  assert.equal(result.status,'PASS',JSON.stringify(result.checks.filter(x=>x.status==='FAIL')));
  assert.equal(result.new_runtime_executed,false);
  assert.equal(result.independent_qa_executed,false);
});

function isolated(mutator) {
  const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'b1-1-verify-'));
  const copy=path.join(temporary,'round-03-apos');
  try {
    fs.cpSync(root,copy,{recursive:true,filter:(src)=>!src.includes('/node_modules/')&&!src.includes('/.git/')});
    mutator(copy);
    return verifyRound03(copy);
  } finally {
    fs.rmSync(temporary,{recursive:true,force:true});
  }
}
test('tampered runtime source must fail closed',()=>{
  const result=isolated(copy=>{
    fs.appendFileSync(path.join(copy,'04-src/js/main.js'),'\n// accidental mutation\n');
  });
  assert.equal(result.status,'FAIL');
  assert.ok(result.checks.some(x=>x.id==='SOURCE_BLOB_04-src/js/main.js'&&x.status==='FAIL'));
});
test('missing scoped AGENTS rules must fail closed',()=>{
  const result=isolated(copy=>fs.rmSync(path.join(copy,'05-tests/AGENTS.md')));
  assert.equal(result.status,'FAIL');
  assert.ok(result.checks.some(x=>x.id==='RULE_05-tests/AGENTS.md'&&x.status==='FAIL'));
});
test('false final-clear gate must fail closed',()=>{
  const result=isolated(copy=>{
    const f=path.join(copy,'mission.yml');
    fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('mission_state: CLEAR','mission_state: IN_PROGRESS'));
  });
  assert.equal(result.status,'FAIL');
  assert.ok(result.checks.some(x=>x.id==='MISSION_CORE_CLEAR'&&x.status==='FAIL'));
});
test('missing evidence must fail closed',()=>{
  const result=isolated(copy=>fs.rmSync(path.join(copy,'evidence/runtime-summary.json')));
  assert.equal(result.status,'FAIL');
  assert.ok(result.checks.some(x=>x.id==='RUNTIME_PROVENANCE'&&x.status==='FAIL'));
});
test('a tampered expected digest cannot hide source change',()=>{
  const result=isolated(copy=>{
    const file=path.join(copy,'05-tests/VERIFICATION-CONTRACT.json');
    const v=JSON.parse(fs.readFileSync(file,'utf8'));
    v.authoritative_source_blobs['04-src/js/main.js']='0'.repeat(40);
    fs.writeFileSync(file,JSON.stringify(v));
  });
  assert.equal(result.status,'FAIL');
  assert.ok(result.checks.some(x=>x.id==='SOURCE_BLOB_04-src/js/main.js'&&x.status==='FAIL'));
});
