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
  const real=validFile(fp)?fs.realpathSync(fp):"";
  return real.startsWith(fs.realpathSync(missionRoot)+path.sep) &&
    crypto.createHash("sha256").update(fs.readFileSync(real)).digest("hex")===art.sha256;
};

const requiredTroubleshootingIds=["B1-SL03-001","B1-SL03-002","B1-SL03-003"];
const slideOrdinal=value=>typeof value==="string"&&/^SL(0[1-9]|[1-3][0-9]|4[0-5])$/.test(value)?Number(value.slice(2)):null;
export function verifyTroubleshooting({ledger=load("TROUBLESHOOTING.json"),targetSlide="SL04"}={}){
 const failures=[],warnings=[],blocking=[];
 const ensure=(condition,id)=>{if(!condition)failures.push(id)};
 ensure(ledger?.schema_version==="1.0"&&ledger?.mission_id==="B1-1","INCIDENT_SCHEMA_MISSION");
 ensure(Array.isArray(ledger?.incidents)&&ledger.incidents.length>0,"INCIDENTS_REQUIRED");
 const ids=(Array.isArray(ledger?.incidents)?ledger.incidents:[]).map(i=>i.id);
 ensure(ids.length===new Set(ids).size && requiredTroubleshootingIds.every(id=>ids.includes(id)),"KNOWN_SL03_INCIDENTS_PRESERVED");
 ensure(Array.isArray(ledger?.lessons) && ["R01","R02","R03","R04","R05","R06","R07"].every(id=>ledger.lessons.some(x=>x.rule_id===id&&typeof x.prevention==="string"&&x.prevention.length>15)),"LESSONS_AND_PREVENTIONS_REQUIRED");
 ensure(slideOrdinal(ledger?.current_slide)!==null && slideOrdinal(ledger?.next_planned_slide)!==null,"INCIDENT_PAGE_SEQUENCE");
 const target=slideOrdinal(targetSlide);
 ensure(target!==null,"INVALID_PRODUCTION_TARGET");
 for(const incident of Array.isArray(ledger?.incidents)?ledger.incidents:[]){
  const id=incident.id||"UNIDENTIFIED";
  const sourceOrdinal=slideOrdinal(incident.slide_id);
  ensure(sourceOrdinal!==null && ["P0","P1","P2"].includes(incident.severity),"INCIDENT_ID_AND_SEVERITY:"+id);
  ensure(["OPEN","IN_REPAIR","RETEST_FAILED","CLOSED_VERIFIED"].includes(incident.status),"INCIDENT_STATUS:"+id);
  for(const field of ["symptom","reproduction","root_cause","repair_required"]){
   ensure(typeof incident[field]==="string"&&incident[field].trim().length>20,"INCIDENT_DETAIL:"+id+":"+field);
  }
  ensure(Array.isArray(incident.prevention_rule_ids)&&incident.prevention_rule_ids.length>0&&incident.prevention_rule_ids.every(rule=>ledger.lessons?.some(x=>x.rule_id===rule)),"INCIDENT_RULE_LINK:"+id);
  if(incident.status==="CLOSED_VERIFIED"){
   ensure(validArtifact(incident.repair_artifact)&&incident.retest?.result==="PASS"&&validArtifact(incident.retest?.evidence_artifact)&&incident.full_screen_review?.status==="PASS"&&validArtifact(incident.full_screen_review?.evidence_artifact)&&incident.owner_review?.status==="APPROVED"&&validArtifact(incident.owner_review?.evidence_artifact),"UNPROVEN_INCIDENT_CLOSURE:"+id);
  }
  if(incident.blocks_next_page===true && sourceOrdinal!==null && target!==null && sourceOrdinal<target && incident.status!=="CLOSED_VERIFIED"){
   blocking.push({id,slide:incident.slide_id,status:incident.status});
  }
 }
 if(blocking.length)warnings.push("NEXT_SLIDE_BLOCKED_BY_OPEN_INCIDENTS");
 return {contract_valid:failures.length===0,production_allowed:failures.length===0&&blocking.length===0,target_slide:targetSlide,blocking_incidents:blocking,failures,warnings};
}

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
 must(manifest.image_generation_policy?.all_pages_independently_generated===true && manifest.image_generation_policy?.same_grade_as_cover===true && manifest.image_generation_policy?.minimal_truth_overlay_only===true,"OWNER_D15_EVERY_PAGE_POLICY");
 must(manifest.canonical_decisions?.pending_owner_latest?.decision_ids?.includes("D15") && manifest.canonical_decisions?.pending_owner_latest?.decision_ids?.includes("D16") && /^[0-9a-f]{40}$/.test(manifest.canonical_decisions?.pending_owner_latest?.blob_sha||""),"OWNER_D15_D16_SOURCE_PIN");
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
 // Every staged page must have its own image-generated visual, including body pages.
 // A digest verifies bytes, not aesthetics: human full-screen visual review is separate.
 const stagedSlides=Array.isArray(manifest.slides)?manifest.slides:[];
 const seenGeneratedDigests=new Set();
 for(const slide of stagedSlides){
  const id=slide.id||"UNIDENTIFIED";
  const visual=slide.image_generation||{};
  const explicitException=visual.kind==="EVIDENCE_ONLY_EXCEPTION"&&visual.owner_exception_approval==="APPROVED";
  if(!explicitException){
   must(visual.kind==="IMAGE_GENERATED","EVERY_PAGE_IMAGE_GENERATED:"+id);
   must(validArtifact(visual.generated_image),"GENERATED_IMAGE_HASH:"+id);
   must(validArtifact(visual.prompt_record),"PROMPT_PROVENANCE:"+id);
   const sha=visual.generated_image?.sha256;
   if(typeof sha==="string"&&seenGeneratedDigests.has(sha))must(false,"REUSED_GENERATED_IMAGE:"+id);
   if(typeof sha==="string")seenGeneratedDigests.add(sha);
  }
  must(validArtifact(slide.final_composite||slide.image),"FINAL_COMPOSITE_HASH:"+id);
  must(typeof slide.learning_goal==="string"&&slide.learning_goal.trim().length>5,"LEARNING_GOAL:"+id);
  must(Array.isArray(slide.truth_overlays),"TRUTH_OVERLAY_LIST:"+id);
  const allowed=new Set(["CODE","EVIDENCE","RUNTIME","OFFICIAL","AI-VISUAL","EXPLAIN"]);
  for(const overlay of Array.isArray(slide.truth_overlays)?slide.truth_overlays:[]){
   must(allowed.has(overlay.source_type),"OVERLAY_SOURCE_TYPE:"+id);
   if(overlay.source_type==="RUNTIME")
    must(Boolean(overlay.run_id&&overlay.tested_sha&&overlay.artifact_id)&&validArtifact(overlay.original),"ACTUAL_RUNTIME_PROVENANCE:"+id);
   if(overlay.source_type==="CODE")
    must(Boolean(overlay.file_path&&overlay.git_sha)&&validArtifact(overlay.original),"ACTUAL_CODE_PROVENANCE:"+id);
   if(overlay.source_type==="EVIDENCE")
    must(validArtifact(overlay.original),"ACTUAL_EVIDENCE_PROVENANCE:"+id);
  }
 }
 const incidents=verifyTroubleshooting({targetSlide:"SL04"});
 for(const error of incidents.failures)must(false,error);
 // The ordinary contract CI validates incident integrity while SL03 is in repair.
 // Progression is blocked separately via --next-slide, or if a later slide appears in the manifest.
 const addedLater=Array.isArray(manifest.slides)?manifest.slides.filter(x=>slideOrdinal(x.id)>=4):[];
 if(addedLater.length&&!incidents.production_allowed)must(false,"UNRESOLVED_INCIDENTS_BLOCK_REGISTERED_LATER_SLIDE");
 const final=manifest.stage==="FINAL";
 if(final){
  must(manifest.status==="FINAL","FINAL_STATUS");
  must(manifest.design_reference_review?.release_approval==="APPROVED" && manifest.design_reference_review?.status!=="REJECTED_BY_OWNER","OWNER_ORIGINAL_VISUAL_APPROVAL");
  must(Object.values(gates).every(x=>x==="PASS"),"GOLDEN_GATES_NOT_PASS");
  // Hermes use is optional; falsely claiming execution is denied above.
  // Equivalent documented tools plus independent QA may be used before the deadline.
  must(manifest.review?.owner_status==="APPROVED"&&manifest.review?.independent_qa_status==="PASS","OWNER_INDEPENDENT_QA");
  must(validArtifact(manifest.review?.owner_approval_artifact)&&validArtifact(manifest.review?.independent_qa_artifact),"OWNER_QA_EVIDENCE_FILES");
  must(manifest.zero_trust?.secret_scan==="PASS"&&manifest.zero_trust?.artifact_hashes_verified===true,"RELEASE_ZERO_TRUST");
  for(const [name,art] of Object.entries(manifest.deliverables||{}))must(validArtifact(art),"ARTIFACT_MISSING_OR_TAMPERED:"+name);
  must(Array.isArray(manifest.slides)&&manifest.slides.length>=30,"STUDY_30_SLIDES");
  const present=new Set((manifest.slides||[]).flatMap(x=>x.assessment_ids||[]));
  must(allIds.every(x=>present.has(x)),"ASSESSMENT_19_COVERAGE");
  for(const s of manifest.slides||[]){
   must(s.full_screen_review?.status==="PASS"&&validArtifact(s.full_screen_review?.review_artifact),"FULL_SCREEN_VISUAL_QA:"+s.id);
   must(s.full_screen_review?.no_repeated_template===true && s.full_screen_review?.text_readable===true,"COVER_GRADE_VISUAL_REVIEW:"+s.id);
   must(validArtifact(s.image),"SLIDE_HASH:"+s.id);
   if(s.evidence_type==="RUNTIME")must(Boolean(s.run_id&&s.artifact_id&&s.tested_sha),"RUNTIME_PROVENANCE:"+s.id);
   if(s.evidence_type==="AI-VISUAL")must(s.claims_runtime_pass!==true,"AI_AS_FAKE_EVIDENCE:"+s.id);
  }
 }else warnings.push("DRAFT_ONLY_NOT_ELIGIBLE_FOR_FINAL");
 return {schema_version:"1.0",contract_valid:failures.length===0,release_eligible:final&&failures.length===0,hermes_runtime_verified:Boolean(hermesExecuted),assessment_nodes:ids.length,golden_gates:Object.keys(gates).length,stage:manifest.stage,failures,warnings};
}
if(process.argv[1]&&path.resolve(process.argv[1])===scriptPath){
 if(process.argv[2]==="--next-slide"){
  const target=process.argv[3]||"";
  const result=verifyTroubleshooting({targetSlide:target});
  console.log(JSON.stringify(result,null,2));
  process.exit(result.production_allowed?0:2);
 }
 const result=verify();
 console.log(JSON.stringify(result,null,2));
 process.exit(result.contract_valid?0:1);
}
