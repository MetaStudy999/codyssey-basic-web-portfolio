import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { verify } from "./slide-gate.mjs";
const base="training/round-03-apos/08-presentation/";
const manifest=JSON.parse(fs.readFileSync(base+"manifest.json","utf8"));
const ontology=JSON.parse(fs.readFileSync(base+"ontology.json","utf8"));
const policy=JSON.parse(fs.readFileSync(base+"zero-trust-policy.json","utf8"));
const copy=x=>structuredClone(x);
test("19 official evaluation and bonus nodes are valid while FINAL remains blocked",()=>{
 const r=verify();assert.equal(r.contract_valid,true,JSON.stringify(r.failures));
 assert.equal(r.assessment_nodes,19);assert.equal(r.release_eligible,false);
 assert.equal(r.hermes_runtime_verified,false);
});
test("false FINAL with missing deliverables and QA is denied",()=>{
 const m=copy(manifest);m.stage="FINAL";m.status="FINAL";
 const r=verify({manifest:m});assert.equal(r.contract_valid,false);
 assert.ok(r.failures.includes("GOLDEN_GATES_NOT_PASS"));
 assert.ok(r.failures.includes("OWNER_INDEPENDENT_QA"));
 assert.ok(!r.failures.includes("HERMES_RUN_NOT_PROVEN"),"Hermes absence must not block equivalent secure process");
});
test("Hermes execution requires actual digest-verified log",()=>{
 const m=copy(manifest);m.hermes.runtime_execution_status="EXECUTED";
 m.hermes.execution_log={path:"fake.log",sha256:"0".repeat(64)};
 assert.ok(verify({manifest:m}).failures.includes("HERMES_FALSE_EXECUTION"));
});
test("missing evaluation node fails closed",()=>{
 const o=copy(ontology);o["@graph"].pop();
 assert.ok(verify({ontology:o}).failures.includes("ONTOLOGY_OFFICIAL_EV_AND_BONUS"));
});
test("unsupported PASS status fails closed",()=>{
 const o=copy(ontology);o["@graph"][0].verification_status="PASS";
 assert.ok(verify({ontology:o}).failures.includes("UNSUPPORTED_PASS:EV01"));
});
test("path traversal fails closed",()=>{
 const o=copy(ontology);o["@graph"][0].code_ref="../../secrets";
 assert.ok(verify({ontology:o}).failures.includes("CODE_PATH:EV01"));
});
test("zero-trust default deny is mandatory",()=>{
 const p=copy(policy);p.default_deny=false;
 assert.ok(verify({policy:p}).failures.includes("ZERO_TRUST_DEFAULT_DENY"));
});
test("draft may not claim final",()=>{
 const m=copy(manifest);m.status="FINAL";
 assert.ok(verify({manifest:m}).failures.includes("DRAFT_CANNOT_CLAIM_FINAL"));
});

test("official EV01-EV05 keep exact functional evaluation mapping",()=>{
 const xs=ontology["@graph"].slice(0,5);
 const expected=[
  ["EV01","04-src/css/style.css","반응형"],
  ["EV02","04-src/js/main.js","다크"],
  ["EV03","04-src/js/main.js","햄버거"],
  ["EV04","04-src/js/main.js","GitHub API"],
  ["EV05","04-src/js/main.js","폼"]
 ];
 for(let i=0;i<5;i++){
  assert.equal(xs[i]["@id"],expected[i][0]);
  assert.equal(xs[i].code_ref,expected[i][1]);
  assert.ok(xs[i].title.includes(expected[i][2]));
 }
});

test("rejected original visual comparison prevents FINAL even with narrative claims",()=>{
 const m=copy(manifest); m.stage="FINAL"; m.status="FINAL";
 assert.ok(verify({manifest:m}).failures.includes("OWNER_ORIGINAL_VISUAL_APPROVAL"));
});

test("new draft slide without generated image is blocked before expansion",()=>{
 const m=copy(manifest);
 m.slides=[{id:"SL-EV10",image_generation:{kind:"PPT_NATIVE_CARD"},truth_overlays:[],learning_goal:"Explain real event and state rendering"}];
 const r=verify({manifest:m});
 assert.equal(r.contract_valid,false);
 assert.ok(r.failures.includes("EVERY_PAGE_IMAGE_GENERATED:SL-EV10"));
 assert.ok(r.failures.includes("FINAL_COMPOSITE_HASH:SL-EV10"));
});
test("duplicate generated visual across distinct slides is blocked",()=>{
 const m=copy(manifest);
 m.slides=[
  {id:"SL01",image_generation:{kind:"IMAGE_GENERATED",generated_image:{path:"bogus.png",sha256:"a".repeat(64)}},truth_overlays:[],learning_goal:"Explain stage one"},
  {id:"SL02",image_generation:{kind:"IMAGE_GENERATED",generated_image:{path:"bogus.png",sha256:"a".repeat(64)}},truth_overlays:[],learning_goal:"Explain stage two"}
 ];
 const r=verify({manifest:m});
 assert.ok(r.failures.includes("REUSED_GENERATED_IMAGE:SL02"));
});
test("AI-claimed runtime without original evidence is blocked",()=>{
 const m=copy(manifest);
 m.slides=[{id:"SL07",image_generation:{kind:"IMAGE_GENERATED"},learning_goal:"Explain theme rendering",truth_overlays:[{source_type:"RUNTIME",run_id:123,tested_sha:"abc",artifact_id:99}]}];
 assert.ok(verify({manifest:m}).failures.includes("ACTUAL_RUNTIME_PROVENANCE:SL07"));
});
test("FINAL must have full screen visual review and signed owner QA evidence",()=>{
 const m=copy(manifest);m.stage="FINAL";m.status="FINAL";
 m.slides=[{id:"SL01",image_generation:{kind:"IMAGE_GENERATED"},learning_goal:"Learn actual code",truth_overlays:[]}];
 const r=verify({manifest:m});
 assert.ok(r.failures.includes("FULL_SCREEN_VISUAL_QA:SL01"));
 assert.ok(r.failures.includes("OWNER_QA_EVIDENCE_FILES"));
});
test("optional Hermes runtime must not be mandatory for official evaluation",()=>{
 const m=copy(manifest);m.stage="FINAL";m.status="FINAL";
 const r=verify({manifest:m});
 assert.ok(!r.failures.includes("HERMES_RUN_NOT_PROVEN"));
 assert.ok(r.failures.includes("GOLDEN_GATES_NOT_PASS"));
});

test("Owner D15 all-page generation rule cannot be relaxed",()=>{
 const m=copy(manifest);
 m.image_generation_policy.all_pages_independently_generated=false;
 const r=verify({manifest:m});
 assert.ok(r.failures.includes("OWNER_D15_EVERY_PAGE_POLICY"));
});
test("D15/D16 ledger link and source digest cannot be removed",()=>{
 const m=copy(manifest);
 m.canonical_decisions.pending_owner_latest.decision_ids=["D14"];
 assert.ok(verify({manifest:m}).failures.includes("OWNER_D15_D16_SOURCE_PIN"));
});
