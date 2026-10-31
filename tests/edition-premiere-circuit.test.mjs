import test from "node:test";
import assert from "node:assert/strict";
import {mkdtempSync,writeFileSync,mkdirSync,readFileSync} from "node:fs";
import {tmpdir} from "node:os";
import {join,resolve} from "node:path";
import {createHash} from "node:crypto";
import {buildEdition} from "../scripts/build-premiere-edition.mjs";
const repo=resolve(new URL("../",import.meta.url).pathname);
const j=x=>JSON.stringify(x);
const ids=JSON.parse(readFileSync(join(repo,"edition-premiere/inventaire-snapshot.json"),"utf8"));
const decisions=JSON.parse(readFileSync(join(repo,"edition-premiere/decisions.json"),"utf8"));
function env(){
 const root=mkdtempSync(join(tmpdir(),"interstice-lot-"));
 mkdirSync(join(root,"edition-premiere/dossiers"),{recursive:true});
 mkdirSync(join(root,"assets"),{recursive:true});
 writeFileSync(join(root,"style.css"),"body{color:black}");
 writeFileSync(join(root,"assets/fiche-design-system.css"),"");
 writeFileSync(join(root,"assets/fiche-premiere-edition.css"),"");
 writeFileSync(join(root,"wiki.html"),"<h1>Wiki</h1>");
 const dossier={id:"BIO-999",kind:"BIO",title:"Exemple totalement inventé",version:"0.1",media:[],
  sources:[{id:"s1",title:"Source imaginée de test",read_level:"notice",date:"2026-10-31",rights:"Sans réutilisation de texte",url:"https://example.invalid/source",credit:"Exemple test"}],
  blocks:[{type:"fait",text:"&lt;script&gt; fictif, aucun événement réel.",source_ids:["s1"]}],
  related_ids:["FN-998"],contradictions:"Fiche synthétique de test, non factuelle."};
 const content=j(dossier);
 const source_path="edition-premiere/dossiers/BIO-999.json";
 writeFileSync(join(root,source_path),content);
 const inventory={schema:"edition-pre-sortie-inventaire-v1",source:{blob_sha:"fixture-only"},records:[
  {id:"BIO-999",kind:"BIO",approval:"ACCORD_EDITO_ZOUT"},
  {id:"FN-998",kind:"FN",approval:"A_FAIRE"}]};
 const auth={id:"BIO-999",lot:"BIO",authorization:"ACCORD_EDITO_ZOUT",
  sources_review:"lecture-fictive-1",critical_review:"lecture-fictive-2",
  rights_review:"droits-fictifs-1",zout_decision:"visa-exclusivement-fictif",
  verified_at:"2026-10-31",rights_status:"DROITS_OK_OU_SANS_MEDIA",no_media:true,source_path,
  source_sha256:createHash("sha256").update(content).digest("hex")};
 const inventoryPath=join(root,"inventory.json"),decisionPath=join(root,"decisions.json");
 const out=join(root,"artifacts/edition-preview");
 const save=(approval=[])=>{writeFileSync(inventoryPath,j(inventory));writeFileSync(decisionPath,j({authorizations:approval}))};
 save();
 return{root,inventoryPath,decisionPath,out,auth,dossier,inventory,save};
}
test("première édition: inventaire stable, zéro visa réellement attribué",()=>{
 assert.equal(ids.records.length,139);
 assert.equal(ids.records.filter(x=>x.source==="drive").length,44);
 assert.equal(ids.records.filter(x=>x.source==="mediatheque").length,71);
 assert.equal(ids.records.filter(x=>x.source==="wiki").length,24);
 assert.equal(new Set(ids.records.map(x=>x.id)).size,139);
 assert.deepEqual(decisions.authorizations,[]);
 assert.deepEqual(ids.records.filter(x=>x.approval==="ACCORD_EDITO_ZOUT").map(x=>x.id),["ARCH-002","ARCH-007"]);
});
test("première édition: aucun lot ni fiche généré sans visa",()=>{
 const e=env(),r=buildEdition(e);
 assert.equal(r.approved,0);
 assert.equal(r.blocked,2);
 const html=readFileSync(join(e.out,"index.html"),"utf8");
 assert.match(html,/Aucun contenu admissible/);
 assert.doesNotMatch(html,/fiche-BIO-999\.html/);
});
test("première édition: refus de faux visa sans accord source, même JSON signé",()=>{
 const e=env();e.inventory.records[0].approval="A_FAIRE";e.save([e.auth]);
 assert.throws(()=>buildEdition(e),/deux visas explicites/);
});
test("première édition: jeu fictif autorisé dans un bac à sable seulement",()=>{
 const e=env();e.save([e.auth]);const r=buildEdition(e);
 assert.deepEqual(r.ids,["BIO-999"]);
 const page=readFileSync(join(e.out,"fiche-BIO-999.html"),"utf8");
 const index=readFileSync(join(e.out,"index.html"),"utf8");
 assert.match(page,/visa-exclusivement-fictif/);
 assert.match(page,/non adoptés collectivement/);
 assert.match(page,/source-s1/);
 assert.match(page,/FN-998 · lien documentaire non résolu/);
 assert.doesNotMatch(page,/<script&gt; fictif/);
 assert.match(page,/&amp;lt;script&amp;gt;/);
 assert.match(index,/fiche-BIO-999\.html/);
});
test("première édition: contenu modifié, droits incomplets, média ou doublons bloqués",()=>{
 const e=env();e.save([e.auth]);
 e.auth.source_sha256="0".repeat(64);e.save([e.auth]);
 assert.throws(()=>buildEdition(e),/modifié depuis visa/);
 e.auth.source_sha256=createHash("sha256").update(j(e.dossier)).digest("hex");
 e.auth.rights_status="A_FAIRE";e.save([e.auth]);
 assert.throws(()=>buildEdition(e),/Droits non acquis/);
 e.auth.rights_status="DROITS_OK_OU_SANS_MEDIA";e.dossier.media=["photo-protegee.jpg"];
 writeFileSync(join(e.root,e.auth.source_path),j(e.dossier));
 e.auth.source_sha256=createHash("sha256").update(j(e.dossier)).digest("hex");e.save([e.auth]);
 assert.throws(()=>buildEdition(e),/média non autorisé/);
 e.dossier.media=[];writeFileSync(join(e.root,e.auth.source_path),j(e.dossier));
 e.auth.source_sha256=createHash("sha256").update(j(e.dossier)).digest("hex");e.save([e.auth,e.auth]);
 assert.throws(()=>buildEdition(e),/Double autorisation/);
});
test("première édition: liens croisés hors inventaire interdits",()=>{
 const e=env();e.dossier.related_ids=["BIO-123"];
 writeFileSync(join(e.root,e.auth.source_path),j(e.dossier));
 e.auth.source_sha256=createHash("sha256").update(j(e.dossier)).digest("hex");e.save([e.auth]);
 assert.throws(()=>buildEdition(e),/Lien vers identifiant absent/);
});
test("première édition: aucune écriture sur le Wiki réel ni scripts réseau",()=>{
 const m=readFileSync(join(repo,"scripts/build-premiere-edition.mjs"),"utf8");
 for(const forbidden of ["/rest/v1/","/functions/v1/submit","supabase.co","fetch(","XMLHttpRequest","sendBeacon"])
  assert.equal(m.includes(forbidden),false,forbidden);
 assert.equal(ids.records.filter(x=>x.approval===true).length,0);
});

test("première édition: visas ARCH-002/007 réels mais droits bloquants",()=>{
 for(const id of ["ARCH-002","ARCH-007"]){
  const record=ids.records.find(x=>x.id===id);
  assert.equal(record.editorial_visa?.decision,"ACCORD_EDITO_ZOUT");
  assert.equal(record.editorial_visa?.rights_final,"A_VERIFIER");
  assert.equal(record.editorial_visa?.publication_authorized,false);
  const e=env();
  const candidate={...e.auth,id,lot:"ARCH",source_editorial_blob_sha:record.editorial_visa.source_blob_sha};
  e.inventory.records=[record];e.save([candidate]);
  assert.throws(()=>buildEdition(e),/Réserve de droits toujours ouverte/);
 }
});
