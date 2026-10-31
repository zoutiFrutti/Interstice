import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
import {createHash} from "node:crypto";
const read=p=>readFileSync(p,"utf8");
const sha=s=>createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0"+s).digest("hex");
test("C5 P1 : aucun texte concurrent écrasé, corrections Lectrice maintenues",()=>{
 const wiki=read("wiki.html");
 for(const p of ["wiki-decision-collective.html","wiki-lecture-croisee-travail-soin-pouvoir.html"]){
  assert.ok(existsSync(p));assert.match(read(p),/<details/);
 }
 assert.ok(wiki.includes("PROTOTYPE CANDIDAT"));
 const report=read("edition-premiere/CYCLE5_RAPPORT.md");
 for(const pr of ["#50","#51","#56","#57","#58","#59"])assert.ok(report.includes(pr));
 assert.match(report,/CANDIDATS, aucune adoption collective/);
});
test("C5 P2 : deux visas vérifiés sur leurs blobs, aucun accord de publication",()=>{
 const inv=JSON.parse(read("edition-premiere/inventaire-snapshot.json"));
 const approved=inv.records.filter(x=>x.approval==="ACCORD_EDITO_ZOUT");
 assert.deepEqual(approved.map(x=>x.id),["ARCH-002","ARCH-007"]);
 for(const item of approved){
  assert.equal(sha(read(item.editorial_visa.source_path)),item.editorial_visa.source_blob_sha);
  assert.equal(item.editorial_visa.rights_final,"A_VERIFIER");
  assert.equal(item.editorial_visa.publication_authorized,false);
  assert.equal(item.editorial_visa.merge_authorized,false);
  assert.ok(!existsSync("fiches/"+item.id+".html"));
 }
 assert.deepEqual(JSON.parse(read("edition-premiere/decisions.json")).authorizations,[]);
});
test("C5 P3 : les trois parcours conservent navigation, objections et exercices",()=>{
 const wiki=read("wiki.html");
 for(const id of ["ecologie","democratie","cooperatives"])assert.ok(wiki.includes('id="'+id+'"'));
 assert.equal((wiki.match(/class="pc-step"/g)||[]).length,3);
 assert.ok((wiki.match(/<details\b/g)||[]).length>=3);
 assert.doesNotMatch(read("wiki-local-search.js"),/fetch\s*\(|localStorage|XMLHttpRequest/i);
});
test("C5 P4 : composants candidats PR59 intégrés en maquette uniquement",()=>{
 const html=read("design-system/maquette-ecl-cycle4-interne.html");
 assert.ok(html.includes("../assets/graphiste-cycle4-composants.css"));
 for(const id of ["pouvoir","luttes","cic"])assert.ok(html.includes('id="'+id+'"'));
 assert.doesNotMatch(html,/<form\b|<script\b|<iframe\b|<img\b/i);
 assert.ok(!read("wiki.html").includes("maquette-ecl-cycle4-interne.html"));
});
test("C5 P5 : sécurité documentée, P0 API encore ouvert, rollback",()=>{
 assert.doesNotMatch(read("proposer-article.html"),/<form\b|<script\b/i);
 const report=read("edition-premiere/CYCLE5_RAPPORT.md");
 for(const term of ["submit-proposal","submit_wiki_article","P0 SERVEUR OUVERT","git revert"])assert.ok(report.includes(term));
});
