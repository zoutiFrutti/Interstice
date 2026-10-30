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

test("carte V0: les six fiches fictives ont une provenance et aucun contact",()=>{
 for(const item of DEMO_INITIATIVES){
  assert.equal(item.isDemo,true);
  assert.equal(item.source.type,"simulation");
  assert.equal(item.locationLevel,"commune");
  assert.equal(item.publicContact,null);
  assert.ok(Array.isArray(item.territories)&&item.territories.length>0);
  for(const forbidden of ["latitude","longitude","lat","lng","email","phone","address","privateLocation"]){
   assert.equal(Object.hasOwn(item,forbidden),false,"champ privé "+forbidden+" de "+item.id);
  }
 }
});
test("carte V0: export en liste blanche, sans champs privés injectés",async()=>{
 const {buildPublicDemoExport}=await import("../initiatives-core.mjs");
 const rows=DEMO_INITIATIVES.map(i=>({...i,secretContact:"secret@example.org",latitude:43.8,privateLocation:"domicile",internalNotes:"jamais public"}));
 const exported=buildPublicDemoExport(rows);
 assert.equal(exported.demo,true);assert.equal(exported.initiatives.length,DEMO_INITIATIVES.length);
 for(const row of exported.initiatives){
  for(const field of ["secretContact","latitude","privateLocation","internalNotes","join","description","publicContact"]){
   assert.equal(Object.hasOwn(row,field),false,"fuite export "+field);
  }
 }
});
test("carte V0: un objet réel injecté n'entre pas dans l'export démo",async()=>{
 const {buildPublicDemoExport}=await import("../initiatives-core.mjs");
 const records=[...DEMO_INITIATIVES,{...DEMO_INITIATIVES[0],id:"initiative-reelle",isDemo:false,source:{type:"declaration"}}];
 const out=buildPublicDemoExport(records);
 assert.equal(out.initiatives.some(i=>i.id==="initiative-reelle"),false);
});
test("carte V0: le dépôt démo reste lisible sans filtrage de popularité",async()=>{
 const {createDemoRepository}=await import("../initiatives-core.mjs");
 const repo=createDemoRepository(DEMO_INITIATIVES);
 const all=await repo.list();
 assert.deepEqual(all.map(i=>i.id),DEMO_INITIATIVES.map(i=>i.id));
 assert.ok(all.every(i=>!("popularity" in i)&&!("score" in i)&&!("votes" in i)));
});

test("cartes : quatre familles, deux lectures et provenances de démonstration",async()=>{
 const {DEMO_MAP_ENTRIES,COMMUNE_ANCHORS}=await import("../cartes-data.mjs");
 const {filterMapEntries}=await import("../cartes-core.mjs");
 assert.deepEqual(new Set(DEMO_MAP_ENTRIES.map(x=>x.kind)),new Set(["initiative","ressource","besoin","projet"]));
 assert.ok(DEMO_MAP_ENTRIES.every(x=>x.isDemo&&x.source.type==="simulation"&&x.publicContact===null));
 assert.equal(filterMapEntries(DEMO_MAP_ENTRIES,{reading:"communs"}).length,7);
 assert.equal(filterMapEntries(DEMO_MAP_ENTRIES,{reading:"possibles"}).length,4);
 assert.deepEqual(filterMapEntries(DEMO_MAP_ENTRIES,{reading:"inconnu"}),[]);
 assert.equal(COMMUNE_ANCHORS.length,4);
});
test("cartes : liste et groupes communaux partagent strictement les mêmes fiches filtrées",async()=>{
 const {DEMO_MAP_ENTRIES,COMMUNE_ANCHORS}=await import("../cartes-data.mjs");
 const {filterMapEntries,communeGroups}=await import("../cartes-core.mjs");
 const filtered=filterMapEntries(DEMO_MAP_ENTRIES,{reading:"possibles",commune:"Gaillac",category:"Mutualisation"});
 assert.deepEqual(filtered.map(x=>x.id),["demo-offre-gaillac"]);
 const groups=communeGroups(filtered,COMMUNE_ANCHORS);
 assert.deepEqual(groups.map(g=>g.anchor.id),["Gaillac"]);
 assert.deepEqual(groups[0].items.map(x=>x.id),filtered.map(x=>x.id));
});
test("cartes : positions communales séparées des fiches, sans lieu privé",async()=>{
 const {DEMO_MAP_ENTRIES,COMMUNE_ANCHORS}=await import("../cartes-data.mjs");
 const {projectCommune}=await import("../cartes-core.mjs");
 const cities=new Set(COMMUNE_ANCHORS.map(x=>x.id));
 for(const item of DEMO_MAP_ENTRIES){
  assert.ok(item.territories.every(t=>cities.has(t)));
  for(const field of ["lat","lon","latitude","longitude","address","email","phone","privateLocation"])assert.ok(!Object.hasOwn(item,field));
 }
 for(const city of COMMUNE_ANCHORS){const point=projectCommune(city);assert.ok(point.x>0&&point.x<760&&point.y>0&&point.y<420);}
 assert.equal(projectCommune(null),null);
});
test("cartes : export public fictif liste blanche sans fuite après injection",async()=>{
 const {DEMO_MAP_ENTRIES}=await import("../cartes-data.mjs");
 const {exportFictionalMapEntries}=await import("../cartes-core.mjs");
 const evil={...DEMO_MAP_ENTRIES[0],privateEmail:"secret@invalid.local",latitude:43.88,address:"domicile prive",internalNotes:"secret"};
 const result=exportFictionalMapEntries([evil,{...DEMO_MAP_ENTRIES[1],isDemo:false}]);
 assert.equal(result.entries.length,1);assert.equal(result.entries[0].provenance,"simulation");
 for(const forbidden of ["privateEmail","secret@invalid.local","latitude","domicile","internalNotes","address"])assert.ok(!JSON.stringify(result).includes(forbidden));
});
