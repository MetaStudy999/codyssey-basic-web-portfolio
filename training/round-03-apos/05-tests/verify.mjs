import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const scriptPath = fileURLToPath(import.meta.url);
const defaultRoot = path.resolve(path.dirname(scriptPath), '..');

const REQUIRED_AGENTS = [
  'AGENTS.md', '13-harness/AGENTS.md', '14-dashboard/AGENTS.md', '00-control/AGENTS.md', '01-mission/AGENTS.md',
  '02-research/AGENTS.md', '03-design/AGENTS.md',
  '05-tests/AGENTS.md', '06-evidence/AGENTS.md',
  'evidence/AGENTS.md', '07-evaluation/AGENTS.md',
  '08-presentation/AGENTS.md', '09-handoff/AGENTS.md',
  '10-performance/AGENTS.md', '11-improvement/AGENTS.md',
  '12-domains/AGENTS.md'
];

const REQUIRED_DOCS = [
  '13-harness/README.md', '14-dashboard/README.md', '01-mission/STAGE-ACCEPTANCE.md', '07-evaluation/HUMAN-LEARNING-PROTOCOL.md', '02-research/RESEARCH-VERIFICATION-PROTOCOL.md', '10-performance/EXPERIMENT-PROTOCOL.md', '11-improvement/ADOPTION-GATE.md', '00-control/CHARTER.md', '01-mission/REQUIREMENTS.md',
  '02-research/LEARNING-MAP.md', '03-design/ARCHITECTURE.md',
  '05-tests/VERIFY-PROCEDURE.md', '05-tests/VERIFICATION-MATRIX.md',
  '06-evidence/INDEX.md', '07-evaluation/BONUS.md',
  '08-presentation/PRODUCTION-BRIEF.md', '09-handoff/STATE.md',
  '10-performance/MEASUREMENT.md', '11-improvement/EXPERIMENT-LOOP.md',
  '12-domains/ADAPTER-CONTRACT.md', 'MISSING-WORK-REGISTER.md'
];

const PINNED_SOURCE = Object.freeze({
  '04-src/index.html': 'd616f4d58b257ddfc34432afbce678dc760864e4',
  '04-src/css/style.css': '7bd33fee813655149457a7a4107ae29764bbe65d',
  '04-src/js/main.js': '566849ab6f7a1cdba47eee727858c585379cba3b',
  '04-src/images/profile-placeholder.svg': '06682b1d2149620262a084aa22beaafff9fdae98'
});
const CANDIDATE = '95b5dd8283a611e27c0c0a9185060a213e53ada9';

function contained(root, rel) {
  if (typeof rel !== 'string' || !rel || path.isAbsolute(rel) || rel.includes('\\')) throw new Error('INVALID_PATH');
  const normalized = path.resolve(root, rel);
  if (normalized === root || !normalized.startsWith(root + path.sep)) throw new Error('PATH_ESCAPE');
  const stat = fs.lstatSync(normalized);
  if (!stat.isFile() || stat.isSymbolicLink()) throw new Error('NOT_REGULAR_FILE');
  return normalized;
}

function readFile(root, rel) {
  return fs.readFileSync(contained(root, rel));
}
function text(root, rel) {
  return readFile(root, rel).toString('utf8');
}
function json(root, rel) {
  return JSON.parse(text(root, rel));
}
function blobSha(bytes) {
  const h = crypto.createHash('sha1');
  h.update('blob ' + bytes.length + '\0');
  h.update(bytes);
  return h.digest('hex');
}

export function verifyRound03(root=defaultRoot) {
  const checks=[];
  const check=(name,action)=>{
    try {
      const value=action();
      if (value !== true) throw new Error(typeof value==='string' ? value : 'ASSERTION_FAILED');
      checks.push({id:name,status:'PASS'});
    } catch(error) {
      checks.push({id:name,status:'FAIL',reason:error.code || error.message || 'UNKNOWN'});
    }
  };
  let contract;
  check('CONTRACT_SCHEMA',()=>{
    contract=json(root,'05-tests/VERIFICATION-CONTRACT.json');
    return contract.schema_version==='1.0' &&
      contract.mission_id==='B1-1' &&
      contract.execution_round==='round-03-apos' &&
      contract.candidate_sha===CANDIDATE &&
      contract.scope==='STATIC_CONTRACT_AND_LOCAL_EVIDENCE_PROVENANCE_ONLY' &&
      contract.verdict_policy.startsWith('FAIL_CLOSED');
  });

  for(const rel of REQUIRED_AGENTS) check('RULE_'+rel,()=>text(root,rel).includes('## Exit Gate'));
  for(const rel of REQUIRED_DOCS) check('DOC_'+rel,()=>readFile(root,rel).length>15);

  for (const [rel, expected] of Object.entries(PINNED_SOURCE)) {
    check('SOURCE_BLOB_'+rel,()=>{
      if(!contract || contract.authoritative_source_blobs[rel]!==expected) return 'EXPECTED_SHA_MISMATCH';
      return blobSha(readFile(root,rel))===expected;
    });
  }

  check('MISSION_CORE_CLEAR',()=>{
    const value=text(root,'mission.yml');
    return /mission_state:\s*CLEAR\b/.test(value) && /clear_gate:\s*\n\s+status:\s*PASS\b/.test(value);
  });
  check('OWNER_MINIMUM',()=>text(root,'LEARNING-GATE.md').includes('Status: **PASS — OWNER EXPLANATION RECORDED**'));
  check('RUNTIME_PROVENANCE',()=>{
    const v=json(root,'evidence/runtime-summary.json');
    return v.mission_candidate===CANDIDATE &&
      v.runtime_status==='PASS' &&
      v.visual_review.status==='PASS' &&
      v.artifact.id===11465355693 &&
      contract?.evidence?.chromium_run_id===v.runtime_run_id &&
      contract?.evidence?.chromium_artifact_id===v.artifact.id;
  });
  check('PUBLIC_PROVENANCE',()=>{
    const v=json(root,'evidence/public-runtime-summary.json');
    return v.mission_id==='B1-1' &&
      v.public_runtime.status==='PASS' &&
      v.public_runtime.checks.index_http_200===true &&
      v.public_runtime.checks.css_http_200===true &&
      v.public_runtime.checks.javascript_http_200===true;
  });
  check('NO_STALE_EVIDENCE_STATUS',()=>{
    const v=text(root,'evidence/README.md');
    return v.includes('B1-1 CORE FINAL CLEAR PASS') &&
      !/Public GitHub Pages Runtime PENDING|Learning Minimum Gate PENDING|FINAL CLEAR PENDING/.test(v);
  });
  check('SOURCE_STRUCTURE',()=>{
    const html=text(root,'04-src/index.html');
    const css=text(root,'04-src/css/style.css');
    const js=text(root,'04-src/js/main.js');
    return ['id="hero"','id="about"','id="skills"','id="projects"','id="contact"'].every(x=>html.includes(x)) &&
      css.includes('min-width: 768px') && css.includes('min-width: 1024px') &&
      ['const STATE =','addEventListener','renderTheme','renderProjects','validateForm','loadProjects'].every(x=>js.includes(x));
  });
  check('PROCEDURE_ORDER',()=>{
    const v=text(root,'05-tests/VERIFY-PROCEDURE.md');
    return Array.from({length:11},(_,i)=>'CHECK_'+String(i).padStart(2,'0')).every(x=>v.includes(x));
  });
  check('TRAINING_SCHEMA_PARITY',()=>{
    const v=text(root,'02-research/LEARNING-MAP.md');
    return ['DISCOVER','UNDERSTAND','PRACTICE','REPRODUCE','APPLY','EXPLAIN','EVALUATE','MASTER','TRANSFER'].every(x=>v.includes(x));
  });
  check('HONEST_UNMEASURED',()=>text(root,'10-performance/MEASUREMENT.md').includes('NOT_MEASURED'));
  check('PRESENTATION_STILL_PENDING',()=>text(root,'08-presentation/PRODUCTION-BRIEF.md').includes('PLANNED'));

  const failures=checks.filter(x=>x.status==='FAIL');
  return {
    schema_version:'1.0',
    mission_id:'B1-1',
    scope:'STATIC_CONTRACT_AND_LOCAL_EVIDENCE_PROVENANCE_ONLY',
    status:failures.length ? 'FAIL' : 'PASS',
    passed:checks.length-failures.length,
    failed:failures.length,
    checks,
    new_runtime_executed:false,
    independent_qa_executed:false,
    human_transfer_measured:false
  };
}

if (process.argv[1] && path.resolve(process.argv[1])===scriptPath) {
  const result=verifyRound03();
  console.log(JSON.stringify(result,null,2));
  if (result.status!=='PASS') process.exitCode=1;
}
