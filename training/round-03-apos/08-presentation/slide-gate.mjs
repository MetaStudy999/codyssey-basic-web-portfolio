import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const scriptPath=fileURLToPath(import.meta.url);
const missionRoot=path.resolve(path.dirname(scriptPath),"..");
const repoRoot=path.resolve(missionRoot,"..","..");
const folder=path.dirname(scriptPath);
const load=name=>JSON.parse(fs.readFileSync(path.join(folder,name),"utf8"));
const allIds=[
  ...Array.from({length:15},(_,i)=>"EV"+String(i+1).padStart(2,"0")),
  ...Array.from({length:4},(_,i)=>"BONUS-0"+(i+1))
];
const safePath=value=>typeof value==="string" && !path.isAbsolute(value) &&
  !value.includes("\\") && value.split("/").every(part=>part && part!=="." && part!=="..");
const validFile=fp=>{try{const s=fs.lstatSync(fp);return s.isFile()&&!s.isSymbolicLink()}catch{return false}};
const validArtifact=art=>{
  if(!art||!safePath(art.path)||!/^[a-f0-9]{64}$/.test(art.sha256||""))return false;
  const fp=path.resolve(missionRoot,art.path);
  return fp.startsWith(missionRoot+path.sep) && validFile(fp) &&
    crypto.createHash("sha256").update(fs.readFileSync(fp)).digest("hex")===art.sha256;
};
export function verify({manifest=load("manifest.json"),ontology=load("ontology.json"),
 policy=load("zero-trust-policy.json"),
 skill=fs.readFileSync(path.join(repoRoot,".hermes/skills/codyssey-golden-slides/SKILL.md"),"utf8")}={}){
 const failures=[],warnings=[];
 const must=(ok,id)=>{if(!ok)failures.push(id)};
 must(manifest.schema_version==="1.0"&&ontology.schema_version==="1.0"&&policy.schema_version==="1.0","SCHEMA_VERSION");
 must(manifest.mission_id==="B1-1"&&ontology.mission_id==="B1-1"&&policy.mission_id==="B1-1","MISSION_ID");
 must(policy.default_deny===true&&manifest.zero_trust?.default_deny===true,"ZERO_TRUST_DEFAULT_DENY");
 must(manifest.canonical_decisions?.path==="standards/PRESENTATION-CANONICAL-DECISIONS.md"&&
  /^[a-f0-9]{40}$/.test(manifest.canonical_decisions?.blob_sha||""),"CANONICAL_DECISION_PIN");
 must(manifest.golden_profile?.image_first===true&&manifest.golden_profile?.study_first===true&&
  manifest.golden_profile?.comic_diagram_code_evidence===true,"GOLDEN_PROFILE");
 must(skill.startsWith("---")&&skill.includes("name: codyssey-golden-slides")&&
  skill.includes("Zero trust"),"HERMES_SKILL_CANDIDATE");
 const graph=ontology["@graph"];
 must(Array.isArray(graph)&&graph.length===19,"ONTOLOGY_COUNT");
 const ids=Array.isArray(graph)?graph.map(x=>x["@id"]):[];
 must(new Set(ids).size===19&&allIds.every(id=>ids.includes(id)),"ONTOLOGY_OFFICIAL_EV_AND_BONUS");
 for(const x of Array.isArray(graph)?graph:[]){
  must(["OfficialEvaluationCriterion","OptionalBonusCriterion"].includes(x["@type"]),"TYPE:"+x["@id"]);
  must(safePath(x.code_ref)&&x.code_ref.startsWith("04-src/"),"CODE_PATH:"+x["@id"]);
  if(x["@type"]==="OfficialEvaluationCriterion"){
   must(validFile(path.join(missionRoot,x.code_ref)),"CODE_MISSING:"+x["@id"]);
   must(x.official_source==="responsive_web_javascript.md"&&x.official_source_class==="A","OFFICIAL_SOURCE:"+x["@id"]);
  }
  must(Array.isArray(x.slide_ids)&&Array.isArray(x.evidence_ids),"ONTOLOGY_EDGES:"+x["@id"]);
  if(x.verification_status==="PASS")must(x.slide_ids.length>0&&x.evidence_ids.length>0,"UNSUPPORTED_PASS:"+x["@id"]);
 }
 must(["DRAFT","FINAL"].includes(manifest.stage),"UNKNOWN_STAGE");
 if(manifest.stage==="DRAFT")must(manifest.status==="NOT_FINAL","DRAFT_CANNOT_CLAIM_FINAL");
 const gates=manifest.golden_gates||{};
 must(Object.keys(gates).length===10&&Array.from({length:10},(_,i)=>"G"+(i+1)).every(k=>Object.hasOwn(gates,k)),"G1_G10_REQUIRED");
 must(manifest.hermes?.skill_repository_status==="STAGED","HERMES_SKILL_STAGED");
 const hermesExecuted=manifest.hermes?.runtime_execution_status==="EXECUTED"&&validArtifact(manifest.hermes.execution_log);
 if(manifest.hermes?.runtime_execution_status==="EXECUTED")must(hermesExecuted,"HERMES_FALSE_EXECUTION");
 const final=manifest.stage==="FINAL";
 if(final){
  must(manifest.status==="FINAL","FINAL_STATUS");
  must(Object.values(gates).every(x=>x==="PASS"),"GOLDEN_GATES_NOT_PASS");
  must(hermesExecuted,"HERMES_RUN_NOT_PROVEN");
  must(manifest.review?.owner_status==="APPROVED"&&manifest.review?.independent_qa_status==="PASS","OWNER_INDEPENDENT_QA");
  must(manifest.zero_trust?.secret_scan==="PASS"&&manifest.zero_trust?.artifact_hashes_verified===true,"RELEASE_ZERO_TRUST");
  for(const [name,art] of Object.entries(manifest.deliverables||{}))must(validArtifact(art),"ARTIFACT_MISSING_OR_TAMPERED:"+name);
  must(Array.isArray(manifest.slides)&&manifest.slides.length>=30,"STUDY_30_SLIDES");
  const present=new Set((manifest.slides||[]).flatMap(x=>x.assessment_ids||[]));
  must(allIds.every(x=>present.has(x)),"ASSESSMENT_19_COVERAGE");
  for(const s of manifest.slides||[]){
   must(validArtifact(s.image),"SLIDE_HASH:"+s.id);
   if(s.evidence_type==="RUNTIME")must(Boolean(s.run_id&&s.artifact_id&&s.tested_sha),"RUNTIME_PROVENANCE:"+s.id);
   if(s.evidence_type==="AI-VISUAL")must(s.claims_runtime_pass!==true,"AI_AS_FAKE_EVIDENCE:"+s.id);
  }
 }else warnings.push("DRAFT_ONLY_NOT_ELIGIBLE_FOR_FINAL");
 return {schema_version:"1.0",contract_valid:failures.length===0,release_eligible:final&&failures.length===0,hermes_runtime_verified:Boolean(hermesExecuted),assessment_nodes:ids.length,golden_gates:Object.keys(gates).length,stage:manifest.stage,failures,warnings};
}
if(process.argv[1]&&path.resolve(process.argv[1])===scriptPath){
 const result=verify();
 console.log(JSON.stringify(result,null,2));
 process.exit(result.contract_valid?0:1);
}
