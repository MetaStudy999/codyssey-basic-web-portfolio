import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here=path.dirname(fileURLToPath(import.meta.url));
const statuses=new Set(['PASS','PENDING','NOT_RUN','NOT_MEASURED','INSUFFICIENT_EVIDENCE','FAIL']);
const mastery=new Set(['DISCOVER','UNDERSTAND','PRACTICE','REPRODUCE','APPLY','EXPLAIN','EVALUATE','MASTER','TRANSFER']);
const stageNames=['P00','P01','P02','P03','P04','P05','P06','P07'];
function ensure(x,code) {if(!x) throw Error(code);}
function object(x){return x!==null && typeof x==='object' && !Array.isArray(x);}
function unique(arr){return Array.isArray(arr) && new Set(arr).size===arr.length;}
function readJSON(name){return JSON.parse(fs.readFileSync(path.join(here,name),'utf8'));}
function positiveMetric(value){return value===null||(Number.isFinite(value)&&value>=0);}
function validReference(value){return typeof value==='string' && value.length>4 && !value.includes('..') && !value.startsWith('data:');}

export function evaluateHarness(contract, obs, registry) {
 ensure(object(contract)&&object(obs)&&object(registry),'INVALID_DOCUMENTS');
 ensure(contract.schema_version==='1.0'&&obs.schema_version==='1.0'&&registry.schema_version==='1.0','SCHEMA_VERSION');
 ensure(contract.authority==='PILOT_ONLY'&&contract.execution_mode==='PLAN_AND_VERIFY_READ_ONLY','UNSAFE_EXECUTION_MODE');
 ensure(contract.risk_policy?.default_deny===true && contract.risk_policy?.source_write_allowed===false && contract.risk_policy?.auto_merge_allowed===false && contract.risk_policy?.auto_promotion_allowed===false && contract.risk_policy?.independent_checker_required===true,'POLICY_BOUNDARY');
 ensure(registry.default_deny===true && registry.network_execution_enabled===false,'TOOL_GATEWAY_MUTATION_BLOCK');
 ensure(contract.mission_id===obs.mission_id && obs.known_source_candidate=== '95b5dd8283a611e27c0c0a9185060a213e53ada9','SOURCE_IDENTITY');
 ensure(JSON.stringify(contract.stage_order)===JSON.stringify(stageNames),'MISSING_OR_UNORDERED_STAGE');
 ensure(Array.isArray(contract.stages)&&contract.stages.length===8&&contract.stages.every((s,i)=>s.id===stageNames[i]&&typeof s.exit==='string'&&s.exit.length>8),'STAGE_CONTRACT');
 ensure(Array.isArray(contract.gates)&&contract.gates.length===11&&contract.gates.every((g,i)=>g==='CHECK_'+String(i).padStart(2,'0')),'CHECKS_MISSING');
 ensure(Array.isArray(obs.stages)&&obs.stages.length===8&&unique(obs.stages.map(x=>x.id)),'STAGE_OBSERVATIONS');
 ensure(obs.stages.every((s,i)=>s.id===stageNames[i]),'STAGE_ORDER_MISMATCH');
 for(const stage of obs.stages) {
  ensure(statuses.has(stage.status),'INVALID_STAGE_STATUS:'+stage.id);
  ensure(typeof stage.reason==='string'&&stage.reason.length>=10,'MISSING_REASON:'+stage.id);
  ensure(Array.isArray(stage.evidence_refs)&&stage.evidence_refs.every(validReference),'INVALID_EVIDENCE_REF:'+stage.id);
  if(stage.status==='PASS') ensure(stage.evidence_refs.length>0,'UNSUPPORTED_PASS:'+stage.id);
 }
 ensure(object(obs.learning)&&mastery.has(obs.learning.canonical_stage),'TRAINING_STAGE_SCHEMA');
 ensure(obs.learning.minimum_explanation==='PASS'&&validReference(obs.learning.source_ref),'MINIMUM_LEARNING_EVIDENCE');
 ensure(['PASS','NOT_MEASURED','FAIL','NOT_RUN'].includes(obs.learning.independent_reproduction),'REPRODUCTION_VERDICT');
 ensure(object(obs.research)&&Array.isArray(obs.research.claims)&&Array.isArray(obs.research.sources),'RESEARCH_CONTRACT');
 if(obs.research.status==='PASS') ensure(obs.research.sources.length>0 && obs.research.reproducibility==='PASS' &&
 obs.research.claims.length>0 && obs.research.claims.every(c=>typeof c.source_id==='string'&&obs.research.sources.some(s=>s.id===c.source_id&&validReference(s.url))),'RESEARCH_UNSUPPORTED_CLAIM');
 ensure(object(obs.performance),'METRICS_OBJECT');
 for(const field of ['quality_test_count','quality_pass_count','elapsed_ms','cost_usd','tool_call_count','rework_count']) ensure(positiveMetric(obs.performance[field]),'INVALID_METRIC:'+field);
 const counts=[obs.performance.quality_test_count,obs.performance.quality_pass_count];
 ensure((counts[0]===null && counts[1]===null) || (counts[0]!==null && counts[1]!==null && counts[1]<=counts[0]),'INCONSISTENT_TEST_COUNTS');
 const stages=Object.fromEntries(obs.stages.map(s=>[s.id,s]));
 if(stages.P05.status==='PASS') ensure(obs.learning.independent_reproduction==='PASS' && obs.learning.delayed_recall==='PASS' && obs.learning.transfer==='PASS' && validReference(obs.performance.baseline_ref),'FALSE_LEARNING_GAIN');
 if(stages.P06.status==='PASS') ensure(obs.research.status==='PASS','FALSE_RESEARCH_GAIN');
 if(stages.P07.status==='PASS') ensure(obs.cross_domain_experiments>=3 && obs.independent_qa?.status==='PASS' && validReference(obs.independent_qa.evidence_ref),'FALSE_GENERALIZATION');
 if(stages.P03.status==='PASS') ensure(Array.isArray(registry.tools)&&registry.tools.some(t=>t.connection==='VERIFIED' && validReference(t.connection_evidence)),'MCP_NOT_VERIFIED');
 ensure(Array.isArray(registry.tools)&&unique(registry.tools.map(t=>t.id)) && registry.tools.every(t=>
  t.id && typeof t.version==='string' && t.version.length>2 &&
  Array.isArray(t.capabilities) && t.capabilities.length>0 &&
  typeof t.mutating==='boolean' && typeof t.approval_required==='boolean' &&
  ['LOW','MEDIUM','HIGH','CRITICAL'].includes(t.risk) &&
  Number.isInteger(t.timeout_ms) && t.timeout_ms>0 && t.timeout_ms<=120000 &&
  (t.cost_estimate_usd===null || (Number.isFinite(t.cost_estimate_usd)&&t.cost_estimate_usd>=0)) &&
  t.retry_policy?.max_retries===0 && t.retry_policy?.retry_unknown_outcome===false &&
  t.audit_required===true && t.fallback==='STOP_AND_REPORT' &&
  t.idempotency_key_required===t.mutating &&
  Array.isArray(t.allowed_operations) && t.allowed_operations.includes('READ') &&
  (!t.mutating || (t.approval_required===true && t.permission_scope==='EXPLICIT_OWNER_AND_APOS_GUARD'))
),'TOOL_REGISTRY_INVALID');
 const tests=obs.performance.quality_test_count;
 const passed=obs.performance.quality_pass_count;
 return {
   schema_version:'1.0', kind:'MISSION_HARNESS_PILOT_READ_ONLY',
   mission_id:contract.mission_id,domain:contract.domain,
   observation_date:obs.recorded_at,
   verified_core_candidate:obs.known_source_candidate,
   stages:obs.stages.map(s=>({id:s.id,label:contract.stages.find(c=>c.id===s.id).label,status:s.status,reason:s.reason,evidence_refs:s.evidence_refs})),
   ready_count:obs.stages.filter(x=>x.status==='PASS').length,
   total_stages:obs.stages.length,
   overall:obs.stages.every(x=>x.status==='PASS')?'REQUIRES_INDEPENDENT_QA':'PILOT_INCOMPLETE',
   quality_pass_rate:tests===null||tests===0?null:passed/tests,
   learning:{stage:obs.learning.canonical_stage,minimum:obs.learning.minimum_explanation,independent_reproduction:obs.learning.independent_reproduction,transfer:obs.learning.transfer},
   research:{status:obs.research.status},
   mcp_tool_invocations:0,source_mutations:0,automatic_approvals:0,independent_qa_performed:false,
   note:'Declared observations and evidence references only. Does not perform network/MCP calls or independent QA.'
 };
}

export function proposeTool(registry,{capability,operation='READ',owner_approved=false}={}) {
 if(!object(registry)||registry.default_deny!==true||registry.network_execution_enabled!==false) return {decision:'DENY',reason:'INVALID_POLICY'};
 if(typeof capability!=='string'||!capability.trim()) return {decision:'DENY',reason:'INVALID_CAPABILITY'};
 const matching=(registry.tools||[]).find(t=>t.capabilities?.includes(capability));
 if(!matching) return {decision:'DENY',reason:'UNREGISTERED_CAPABILITY'};
 if(operation!=='READ'&&operation!=='WRITE') return {decision:'DENY',reason:'INVALID_OPERATION'};
 if(operation==='WRITE') return {decision:'DENY',reason:owner_approved?'EXECUTION_DISABLED_IN_PILOT':'OWNER_APPROVAL_REQUIRED'};
 if(matching.mutating) return {decision:'DENY',reason:'MUTATING_TOOL_DENIED'};
 if(matching.connection!=='VERIFIED'||!validReference(matching.connection_evidence)) return {decision:'DENY',reason:'CONNECTION_NOT_VERIFIED'};
 return {decision:'PROPOSE_ONLY',tool_id:matching.id,reason:'READ_CAPABILITY_ELIGIBLE_NO_EXECUTION'};
}

export function loadPilot() {
 return {contract:readJSON('contract.json'),observations:readJSON('observations.json'),registry:readJSON('tool-registry.json')};
}
const direct=process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url);
if(direct){
 try {
  const input=loadPilot();
  console.log(JSON.stringify(evaluateHarness(input.contract,input.observations,input.registry),null,2));
 }catch(e){
  console.error(JSON.stringify({overall:'FAIL',error:String(e.message)}));
  process.exitCode=1;
 }
}
