import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {DEMO_MAP_ENTRIES} from "../cartes-data.mjs";
import {filterMapEntries} from "../cartes-core.mjs";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const read=name=>readFileSync(path.join(root,name),"utf8");
const pageFiles=["index.html","decouvrir-initiatives.html","participer.html","wiki.html",
 "wiki-decision-collective.html","wiki-lecture-croisee-travail-soin-pouvoir.html","bibliotheque.html"];

test("018-A: tous les liens internes du parcours pointent vers un fichier et une ancre",()=>{
 let checked=0;
 for(const filename of pageFiles){
  const html=read(filename);
  for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
   if(/^(https?:|mailto:|tel:|data:|javascript:)/i.test(href))continue;
   const [beforeHash,hash=""]=href.split("#");
   const pathname=decodeURIComponent(beforeHash.split("?")[0]);
   if(!pathname && !hash)continue;
   const target=pathname?path.join(root,pathname):path.join(root,filename);
   assert.ok(target.startsWith(root+path.sep),"Lien hors dépôt : "+filename+" → "+href);
   assert.ok(existsSync(target),"Lien local cassé : "+filename+" → "+href);
   if(hash){
    const content=readFileSync(target,"utf8");
    const anchor=decodeURIComponent(hash);
    assert.ok(content.includes('id="'+anchor+'"')||content.includes("id='"+anchor+"'")||
      content.includes('name="'+anchor+'"'),"Ancre cassée : "+filename+" → "+href);
   }
   checked++;
  }
 }
 assert.ok(checked>40,"Contrôle des liens insuffisant");
});
test("018-A: les trois statuts sont affichés et les formulaires sont sans envoi par défaut",()=>{
 const index=read("index.html"),app=read("script.js"),lib=read("ressources.js");
 for(const label of ["Simulation fictive","Proposition réelle soumise à validation","Fonction non disponible"])assert.ok(index.includes(label));
 assert.ok(index.includes('href="decouvrir-initiatives.html"'));
 assert.ok(app.includes("proposition non transmise"));
 assert.ok(lib.includes("ressource non envoyée"));
 assert.doesNotMatch(app,/INTERSTICE_CANDIDATE_MODE|supabase|fetch\s*\(/i);
 assert.doesNotMatch(lib,/INTERSTICE_CANDIDATE_MODE|supabase|fetch\s*\(/i);
 assert.ok(read("participer.html").includes('href="wiki.html"'));
});
test("018-A: quatre kinds, deux lectures, onze exemples, aucune fiche réelle",()=>{
 assert.equal(DEMO_MAP_ENTRIES.length,11);
 assert.deepEqual(new Set(DEMO_MAP_ENTRIES.map(e=>e.kind)),new Set(["initiative","ressource","besoin","projet"]));
 assert.ok(DEMO_MAP_ENTRIES.every(e=>e.isDemo===true&&e.source?.type==="simulation"&&e.publicContact===null));
 assert.equal(filterMapEntries(DEMO_MAP_ENTRIES,{reading:"communs"}).length,7);
 assert.equal(filterMapEntries(DEMO_MAP_ENTRIES,{reading:"possibles"}).length,4);
});
test("018-A: les deux pages graphiques gardent les textes avec les paragraphes additionnels d'encadrement",()=>{
 assert.equal((read("wiki-decision-collective.html").match(/<p(?:\s[^>]*)?>/gi)||[]).length,24);
 assert.equal((read("wiki-lecture-croisee-travail-soin-pouvoir.html").match(/<p(?:\s[^>]*)?>/gi)||[]).length,21);
 assert.ok(read("wiki-decision-collective.html").includes("Lecteur PR44 blob 7be5bba6"));
 assert.ok(read("wiki-lecture-croisee-travail-soin-pouvoir.html").includes("Lecteur PR44 blob d521061"));
});
