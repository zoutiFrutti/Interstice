import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const read=p=>readFileSync(p,"utf8");
test("Cycle 3: seuls les deux visas ARCH exacts sont enregistrés ; droits non finalisés",()=>{
 const registry=JSON.parse(read("edition-premiere/inventaire-snapshot.json"));
 const approvals=registry.records.filter(r=>r.approval==="ACCORD_EDITO_ZOUT");
 assert.deepEqual(approvals.map(r=>r.id),["ARCH-002","ARCH-007"]);
 assert.deepEqual(approvals.map(r=>r.editorial_visa.source_blob_sha),[
  "f9f0b6edf09cf0e84fe7e46960f25df1a8e99dbb",
  "372bfcee95f7bd4a1f37dfa9393264662050e9ba"
 ]);
 for(const a of approvals){
  assert.equal(a.editorial_visa.rights_final,"A_VERIFIER");
  assert.equal(a.editorial_visa.publication_authorized,false);
  assert.equal(a.editorial_visa.merge_authorized,false);
 }
 assert.deepEqual(JSON.parse(read("edition-premiere/decisions.json")).authorizations,[]);
});
test("Cycle 3: trois parcours candidats, aucun compte, exercice enregistré ou brouillon ARCH exposé",()=>{
 const wiki=read("wiki.html"),js=read("wiki-local-search.js");
 for(const id of ["ecologie","democratie","cooperatives"])assert.ok(wiki.includes('id="'+id+'"'));
 assert.equal((wiki.match(/class="pc-step"/g)||[]).length,3);
 assert.match(wiki,/PROTOTYPE CANDIDAT/);
 assert.match(wiki,/non validé/i);
 assert.doesNotMatch(wiki,/(?:href|src)="(?:fiches\/)?(?:ARCH-002|ARCH-007)\.html"/);
 assert.doesNotMatch(js,/fetch\s*\(|localStorage|sessionStorage|navigator\.sendBeacon|XMLHttpRequest/);
 assert.doesNotMatch(read("proposer-article.html"),/<form\b|<script\b/i);
});
test("Cycle 3: risque serveur P0 explicitement gardé ouvert",()=>{
 const doc=read("edition-premiere/README.md");
 assert.match(doc,/submit-proposal/);
 assert.match(doc,/submit_wiki_article/);
 assert.match(doc,/P0 OUVERT/);
 assert.match(doc,/AUCUNE modification Supabase/i);
});
