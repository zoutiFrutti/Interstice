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

test("choisir les besoins ou ressources change les correspondances",async()=>{
 const {explainResourceMatch,filterInitiatives}=await import("../initiatives-core.mjs");
 const jardin=DEMO_INITIATIVES.find(x=>x.id==="demo-jardin");
 assert.ok(explainResourceMatch(jardin,"outils","besoin").includes("Besoin : Outils de jardinage"));
 assert.deepEqual(explainResourceMatch(jardin,"outils","ressource"),[]);
 assert.equal(filterInitiatives(DEMO_INITIATIVES,{objet:"outils",scope:"ressource"}).length,0);
});
test("tri A-Z explicite sans score, ordre source par défaut",async()=>{
 const inSource=await repo.list();
 const inAlpha=await repo.list({order:"titre"});
 const expected=[...inSource].sort((a,b)=>a.title.localeCompare(b.title,"fr"));
 assert.deepEqual(inAlpha.map(x=>x.id),expected.map(x=>x.id));
 assert.deepEqual((await repo.list({order:"source"})).map(x=>x.id),inSource.map(x=>x.id));
 assert.deepEqual((await repo.list({order:"non-connu"})).map(x=>x.id),inSource.map(x=>x.id));
});
test("chaque filtre explique un champ précis",async()=>{
 const {explainSearchMatch}=await import("../initiatives-core.mjs");
 const item=DEMO_INITIATIVES.find(x=>x.id==="demo-outils");
 const reasons=explainSearchMatch(item,{commune:"Gaillac",category:"Mutualisation",objet:"stockage",scope:"besoin"});
 assert.deepEqual(reasons,["Territoire : Gaillac","Domaine : Mutualisation","Besoin : Stockage"]);
 assert.deepEqual(explainSearchMatch(item,{}),[]);
});
test("export filtré liste blanche : aucun contact et uniquement les lignes passées",async()=>{
 const {buildPublicDemoExport}=await import("../initiatives-core.mjs");
 const filtered=await repo.list({commune:"Rabastens",category:"Culture"});
 const data=buildPublicDemoExport(filtered);
 assert.equal(data.initiatives.length,1);
 assert.equal(data.initiatives[0].id,"demo-couture");
 assert.deepEqual(Object.keys(data.initiatives[0]).sort(),["id","title","category","territories","stage","summary","needs","offers","source"].sort());
});
test("état inconnu, fiche imprimable, lien sans JS présents dans l'interface",()=>{
 const html=readFileSync(new URL("../decouvrir-initiatives.html",import.meta.url),"utf8");
 const app=readFileSync(new URL("../initiatives-app.mjs",import.meta.url),"utf8");
 const css=readFileSync(new URL("../initiatives.css",import.meta.url),"utf8");
 assert.match(html,/id="invalid-route"/);
 assert.match(html,/id="print-fiche"/);
 assert.match(html,/<noscript>[\s\S]*participer\.html/);
 assert.match(app,/history\.replaceState/);
 assert.match(css,/@media print/);
});

test("simulation : besoins dirigés vers offres et inversement, sans score",async()=>{
 const {findCompatibleExamples}=await import("../initiatives-simulation.mjs");
 const need=findCompatibleExamples(DEMO_INITIATIVES,{kind:"besoin",object:"perceuse"});
 assert.deepEqual(need.map(x=>x.item.id),["demo-outils"]);
 assert.equal(need[0].reason,"Ressource imaginée : Perceuse");
 const offer=findCompatibleExamples(DEMO_INITIATIVES,{kind:"offre",object:"stockage"});
 assert.deepEqual(offer.map(x=>x.item.id),["demo-outils"]);
 assert.equal(offer[0].reason,"Besoin imaginé : Stockage");
 assert.ok(!("score" in offer[0]));
});
test("simulation : aucun rapprochement hors du territoire choisi",async()=>{
 const {findCompatibleExamples}=await import("../initiatives-simulation.mjs");
 assert.deepEqual(findCompatibleExamples(DEMO_INITIATIVES,{kind:"besoin",object:"perceuse",territory:"Gaillac"}).map(x=>x.item.id),["demo-outils"]);
 assert.deepEqual(findCompatibleExamples(DEMO_INITIATIVES,{kind:"besoin",object:"perceuse",territory:"Rabastens"}),[]);
});
test("simulation : seules catégories prédéfinies, pas de texte libre ni contact",async()=>{
 const {findCompatibleExamples,SIMULATION_OBJECTS,SIMULATION_TERRITORIES}=await import("../initiatives-simulation.mjs");
 for(const args of [{kind:"need",object:"perceuse"},{kind:"besoin",object:"adresse privée"},{kind:"besoin",object:"perceuse",territory:"chez moi"}]){
  assert.deepEqual(findCompatibleExamples(DEMO_INITIATIVES,args),[]);
 }
 assert.ok(Object.isFrozen(SIMULATION_OBJECTS));
 assert.ok(!SIMULATION_TERRITORIES.includes("1 rue Exemple"));
 assert.deepEqual(findCompatibleExamples([...DEMO_INITIATIVES,{...DEMO_INITIATIVES[0],id:"non-demonstration",isDemo:false}],{kind:"besoin",object:"perceuse"}).map(x=>x.item.id),["demo-outils"]);
});
test("simulation : sections de saisie fermée et absence de collecte",()=>{
 const html=readFileSync(new URL("../decouvrir-initiatives.html",import.meta.url),"utf8");
 const app=readFileSync(new URL("../initiatives-app.mjs",import.meta.url),"utf8");
 assert.match(html,/id="simulation-form"/);
 assert.match(html,/id="simulation-results"/);
 const form=html.slice(html.indexOf('<form id="simulation-form">'),html.indexOf("</form>",html.indexOf('<form id="simulation-form">')));
 assert.doesNotMatch(form,/<input|<textarea/);
 assert.match(app,/findCompatibleExamples/);
 assert.doesNotMatch(app,/\bfetch\(|localStorage|sessionStorage|sendBeacon|geolocation/);
});
