import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {DEMO_INITIATIVES} from "../initiatives-data.mjs";
import {normalizeSearch,filterInitiatives,getInitiativeById,createDemoRepository} from "../initiatives-core.mjs";
const repo=createDemoRepository(DEMO_INITIATIVES);
test("accents, casse et tirets ne bloquent pas la recherche",()=>{assert.equal(normalizeSearch("  LISLE-sur-Tarn "),"lisle sur tarn");assert.equal(normalizeSearch("ÉCOLOGIE"),"ecologie");});
test("commune peut être recherchée sans GPS",()=>{const r=filterInitiatives(DEMO_INITIATIVES,{commune:"lisle sur tarn"});assert.ok(r.length>=2);assert.ok(r.every(x=>x.territories.includes("Lisle-sur-Tarn")));});
test("une initiative mobile apparaît sur plusieurs territoires",()=>{assert.ok(filterInitiatives(DEMO_INITIATIVES,{commune:"Albi"}).some(x=>x.id==="demo-outils"));assert.ok(filterInitiatives(DEMO_INITIATIVES,{commune:"Gaillac"}).some(x=>x.id==="demo-outils"));});
test("catégories et communes sont combinées",()=>{assert.equal(filterInitiatives(DEMO_INITIATIVES,{commune:"Lisle-sur-Tarn",category:"Réparation"}).length,0);assert.ok(filterInitiatives(DEMO_INITIATIVES,{category:"Réparation"}).every(x=>x.category==="Réparation"));});
test("une commune inconnue reste un résultat vide",()=>assert.deepEqual(filterInitiatives(DEMO_INITIATIVES,{commune:"Nullepart"}),[]));
test("liste publique fictive consultable sans compte",async()=>{assert.equal((await repo.list()).length,DEMO_INITIATIVES.length);assert.equal(repo.mode,"demo");});
test("fiche par identifiant et identifiant absent",async()=>{assert.equal((await repo.getById("demo-jardin")).title,"Le jardin qu'on imagine");assert.equal(await repo.getById("inconnu"),null);assert.equal(getInitiativeById(DEMO_INITIATIVES,"inconnu"),null);});
test("toutes les fiches sont fictives sans contact ni GPS",()=>{for(const x of DEMO_INITIATIVES){assert.equal(x.isDemo,true);assert.equal(x.publicContact,null);assert.equal(x.source.type,"simulation");assert.ok(!("address" in x)&&!("latitude" in x)&&!("longitude" in x));}});
test("repository en lecture seule",async()=>{assert.equal(repo.create,undefined);const item=await repo.getById("demo-jardin");assert.throws(()=>item.territories.push("Adresse privée"),TypeError);});
test("la page est dans le site et n'accède à aucune donnée personnelle",()=>{const html=readFileSync(new URL("../decouvrir-initiatives.html",import.meta.url),"utf8"),app=readFileSync(new URL("../initiatives-app.mjs",import.meta.url),"utf8");assert.match(html,/style\.css/);assert.match(html,/initiatives\.css/);assert.match(html,/PROTOTYPE FICTIF/);assert.doesNotMatch(app,/fetch\(|geolocation|createClient\(|localStorage|innerHTML/);});

test("recherche facultative par besoin ou ressource et explications",async()=>{
 const {explainResourceMatch}=await import("../initiatives-core.mjs");
 const rows=await repo.list({objet:"outil"});
 assert.ok(rows.length>0);
 assert.ok(rows.every(x=>explainResourceMatch(x,"outil").length>0));
 const jardin=rows.find(x=>x.id==="demo-jardin");
 assert.ok(explainResourceMatch(jardin,"outils").includes("Besoin : Outils de jardinage"));
 assert.deepEqual(explainResourceMatch(jardin,""),[]);
});
test("combinaison commune + domaine + besoin respecte la recherche manuelle",async()=>{
 const rows=await repo.list({commune:"gaillac",category:"Mutualisation",objet:"stockage"});
 assert.deepEqual(rows.map(x=>x.id),["demo-outils"]);
 assert.deepEqual((await repo.list({objet:"aucun-match"})),[]);
});
test("les résultats n'ont pas de score et conservent l'ordre de la liste",async()=>{
 const all=await repo.list();
 const hits=await repo.list({objet:"outil"});
 assert.deepEqual(hits.map(x=>x.id),all.filter(x=>hits.some(y=>y.id===x.id)).map(x=>x.id));
 assert.ok(hits.every(x=>!("score" in x)&&!("popularity" in x)));
});
test("export fictif utilise une liste blanche, sans contacts, géolocalisation ni texte de recherche",async()=>{
 const {buildPublicDemoExport}=await import("../initiatives-core.mjs");
 const example={...DEMO_INITIATIVES[0],privateEmail:"example@example.invalid",address:"adresse privee",
   exactGps:[1,2],sourcesPrivate:["prive"]};
 const dump=buildPublicDemoExport([example,{...DEMO_INITIATIVES[1],isDemo:false}]);
 const serialized=JSON.stringify(dump);
 assert.equal(dump.format,"interstice-fictif-v1");
 assert.equal(dump.initiatives.length,1);
 assert.equal(dump.initiatives[0].id,"demo-jardin");
 for(const value of ["privateEmail","example@example.invalid","address","exactGps","sourcesPrivate","publicContact"])
  assert.ok(!serialized.includes(value),value+" ne doit pas sortir");
});
test("prototype ne transmet aucun texte de recherche : aucun fetch ni traceur",()=>{
 const source=readFileSync(new URL("../initiatives-app.mjs",import.meta.url),"utf8");
 assert.doesNotMatch(source,/fetch\(|localStorage|sessionStorage|geolocation|navigator\.sendBeacon|WebSocket/);
 assert.match(source,/Pourquoi cette fiche/);
 assert.match(source,/buildPublicDemoExport/);
});
