import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
import {createHash} from "node:crypto";
import {resolve,join,dirname} from "node:path";
import {fileURLToPath} from "node:url";
const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const read=p=>readFileSync(join(root,p),"utf8");
const gitsha=s=>createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0"+s).digest("hex");
const nine={
 "wiki-association-collegiale.html":"a88b58162bfb3c4c3f24556dbeba123da5f48294",
 "wiki-decision-collective.html":"e035ce0cf0b97c1b9ae985a2e7eb1e9753e4630c",
 "wiki-education-enfance-protection.html":"ff4a1b2cf13832dfc1050ce85d1b0d359c9f5e8a",
 "wiki-financements-culture-spectacle.html":"3018a7c430bea6bdc75b63f1468afa2935c9be63",
 "wiki-frontieres-migrations-colonialisme.html":"058e3629b172d88461a6d394c35809582739b6a6",
 "wiki-lecture-croisee-travail-soin-pouvoir.html":"3b6f80037ed4ec1859c681d89b53d3028c3c2456",
 "wiki-logement-habitat-droit-ville.html":"6a10c4a53d42debfd06526dd962cdc2fe502bd0a",
 "wiki-police-deces-memoire.html":"f0dda721586ac4c5e76400b1b1ecbeba714cf684",
 "wiki-sante-psychiatrie-autonomie-soins.html":"a7e026c3a66fd9d97a695db3bade1e86a89ff7ae"
};
test("passe 1: neuf corrections P0 exactes",()=>{
 for(const [path,sha] of Object.entries(nine))assert.equal(gitsha(read(path)),sha,path);
});
test("passe 1: proposer-article ne collecte rien",()=>{
 const p=read("proposer-article.html");
 for(const token of ["<form","<script","supabase","cdn.","type=\"email\"","id=\"login-form\""])assert.ok(!p.toLowerCase().includes(token.toLowerCase()),token);
 assert.match(p,/réception désactivée/);
 for(const path of ["script.js","ressources.js"])assert.doesNotMatch(read(path),/supabase|fetch\s*\(|xmlhttprequest|interstice_candidate_mode/i);
});
test("passe 2: deux lectures de carte et UX 018-E conservées",()=>{
 const d=read("decouvrir-initiatives.html");
 for(const id of ["reading-communs","reading-possibles","display-map","display-list","simulation-form"])assert.ok(d.includes('id="'+id+'"'));
 assert.ok(read("index.html").indexOf('class="home-hero"')<read("index.html").indexOf('id="etats-demo"'));
 assert.ok(d.indexOf('id="explorer-title"')<d.indexOf('class="demo-notice"'));
});
test("passe 3: recherche locale de 24 pages existantes",()=>{
 const html=read("wiki.html");
 const names=[...html.matchAll(/<li data-search="[^"]*"><a href="([^"]+\.html)">/g)].map(x=>x[1]);
 assert.equal(names.length,24);assert.equal(new Set(names).size,24);
 for(const path of names)assert.ok(existsSync(join(root,path)),path);
 assert.ok(!names.some(path=>/ARCH-\d+|BIO-\d+|ECO-/.test(path)));
 assert.doesNotMatch(read("wiki-local-search.js"),/fetch\s*\(|xmlhttprequest|supabase|localStorage/i);
 assert.match(html,/relecture en cours/);
});
test("passe 3: liens et ressources locaux des pages sélectionnées",()=>{
 const paths=[...Object.keys(nine),"wiki.html","wiki-autonomie-materielle-savoir-faire.html","index.html","bibliotheque.html","decouvrir-initiatives.html","proposer-article.html"];
 const missed=[];
 for(const path of paths){
  const s=read(path);
  for(const [,raw] of s.matchAll(/\b(?:href|src)=["']([^"'<>]+)["']/g)){
   if(raw.startsWith("#")||/^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(raw))continue;
   const file=raw.split(/[?#]/)[0];
   if(!file||file.includes("$"+"{"))continue;
   let name;
   try{name=decodeURIComponent(file)}catch{missed.push(path+" -> URI invalide "+raw);continue}
   const target=resolve(dirname(join(root,path)),name);
   if(!target.startsWith(root+"/")){missed.push(path+" -> chemin hors dépôt "+raw);continue}
   if(!existsSync(target))missed.push(path+" -> "+raw);
  }
 }
 assert.deepEqual(missed,[]);
});
test("passe 4: visas ARCH-002/007 versionnés, mais droits bloquants",()=>{
 const snap=JSON.parse(read("edition-premiere/inventaire-snapshot.json"));
 const decisions=JSON.parse(read("edition-premiere/decisions.json"));
 const listed=JSON.parse(read("edition-premiere/archives-en-attente.json"));
 assert.deepEqual(snap.records.filter(x=>x.approval==="ACCORD_EDITO_ZOUT").map(x=>x.id),["ARCH-002","ARCH-007"]);
 assert.equal(decisions.authorizations.length,0);
 for(const a of listed.records){
  const r=snap.records.find(x=>x.id===a.id);
  assert.equal(r.editorial_visa.source_blob_sha,a.source_blob_sha);
  assert.equal(r.editorial_visa.rights_final,"A_VERIFIER");
  assert.equal(r.editorial_visa.publication_authorized,false);
  const staged=read("coordination/candidats/2026-10-31/"+a.id+"_PREMIERE_EDITION.md");
  assert.equal(gitsha(staged),a.source_blob_sha);
  assert.match(staged,/Sources|Droits/);
  assert.ok(!existsSync(join(root,"fiches",a.id+".html")));
 }
});
test("passe 5: traçabilité et retour arrière documentés",()=>{
 assert.match(read("edition-premiere/README.md"),/retour arrière|revenir en arrière|annuler/i);
 assert.match(read(".github/workflows/edition-premiere-candidate.yml"),/node --test/);
});
