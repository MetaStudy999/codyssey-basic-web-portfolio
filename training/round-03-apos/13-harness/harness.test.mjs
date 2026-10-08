import test from 'node:test';
import assert from 'node:assert/strict';
import {evaluateHarness,loadPilot,proposeTool} from './harness.mjs';
const clone=x=>structuredClone(x);
const fresh=()=>clone(loadPilot());
test('baseline evaluates incomplete without invented PASS',()=>{
 const {contract,observations,registry}=fresh();
 const r=evaluateHarness(contract,observations,registry);
 assert.equal(r.overall,'PILOT_INCOMPLETE');
 assert.equal(r.ready_count,0);
 assert.equal(r.quality_pass_rate,null);
 assert.equal(r.learning.independent_reproduction,'NOT_MEASURED');
 assert.equal(r.mcp_tool_invocations,0);
});
test('missing P00-P07 stage fails closed',()=>{
 const x=fresh();x.observations.stages.pop();
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/STAGE_OBSERVATIONS/);
});
test('invented PASS without evidence fails closed',()=>{
 const x=fresh();x.observations.stages[3].status='PASS';
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/UNSUPPORTED_PASS/);
});
test('learning gain requires independent work and comparison',()=>{
 const x=fresh();x.observations.stages[5].status='PASS'; x.observations.stages[5].evidence_refs=['ref:learning'];
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/FALSE_LEARNING_GAIN/);
});
test('research PASS requires real sources/reproducibility',()=>{
 const x=fresh();x.observations.research.status='PASS';
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/RESEARCH_UNSUPPORTED_CLAIM/);
});
test('cross domain PASS without experiments fails',()=>{
 const x=fresh();x.observations.stages[7].status='PASS';x.observations.stages[7].evidence_refs=['ref:pilot'];
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/FALSE_GENERALIZATION/);
});
test('MCP write is always denied even when claiming owner approval',()=>{
 const x=fresh();assert.equal(proposeTool(x.registry,{capability:'repo.write',operation:'WRITE',owner_approved:true}).decision,'DENY');
});
test('unverified tool cannot be called',()=>{
 const x=fresh();const r=proposeTool(x.registry,{capability:'repo.read'});
 assert.equal(r.decision,'DENY');assert.equal(r.reason,'CONNECTION_NOT_VERIFIED');
});
test('unknown capability and mutating tool cannot be used as READ',()=>{
 const x=fresh();assert.equal(proposeTool(x.registry,{capability:'nonexistent'}).decision,'DENY');
 assert.equal(proposeTool(x.registry,{capability:'repo.write',operation:'READ'}).reason,'MUTATING_TOOL_DENIED');
});
test('valid verified read is proposal only not execution',()=>{
 const x=fresh();x.registry.tools[0].connection='VERIFIED';x.registry.tools[0].connection_evidence='ref:actual-connection-check';
 assert.equal(proposeTool(x.registry,{capability:'repo.read'}).decision,'PROPOSE_ONLY');
});
test('invalid metrics or stage statuses fail closed',()=>{
 const x=fresh();x.observations.performance.quality_test_count=2;x.observations.performance.quality_pass_count=5;
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/INCONSISTENT_TEST_COUNTS/);
 const y=fresh();y.observations.stages[0].status='AUTO_PASS';
 assert.throws(()=>evaluateHarness(y.contract,y.observations,y.registry),/INVALID_STAGE_STATUS/);
});
test('unsafe auto-merge policy rejected',()=>{
 const x=fresh();x.contract.risk_policy.auto_merge_allowed=true;
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/POLICY_BOUNDARY/);
});

test('tool registry denies unsafe retry and missing audit metadata',()=>{
 const x=fresh();x.registry.tools[0].retry_policy.retry_unknown_outcome=true;
 assert.throws(()=>evaluateHarness(x.contract,x.observations,x.registry),/TOOL_REGISTRY_INVALID/);
 const y=fresh();delete y.registry.tools[1].audit_required;
 assert.throws(()=>evaluateHarness(y.contract,y.observations,y.registry),/TOOL_REGISTRY_INVALID/);
});
test('dashboard prototype is DOM-safe and visibly marked as snapshot',async()=>{
 const fs=await import('node:fs');
 const path=await import('node:path');
 const url=await import('node:url');
 const here=path.dirname(url.fileURLToPath(import.meta.url));
 const page=fs.readFileSync(path.resolve(here,'../14-dashboard/index.html'),'utf8');
 assert.ok(page.includes('스냅샷'));
 assert.ok(page.includes('textContent'));
 assert.ok(!page.includes('innerHTML'));
 assert.ok(page.includes('../13-harness/observations.json'));
});
