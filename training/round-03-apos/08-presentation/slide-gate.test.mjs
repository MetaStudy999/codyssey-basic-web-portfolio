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
 assert.ok(r.failures.includes("HERMES_RUN_NOT_PROVEN"));
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
