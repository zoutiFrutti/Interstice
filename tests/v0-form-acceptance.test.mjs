import {test} from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import vm from "node:vm";

function setup(script,values={},resources=[]){
 const nodes=new Map();
 function make(id){
  const el={id,value:values[id]??"",textContent:"",disabled:false,children:[],
   addEventListener(type,fn){this[type]=fn;},
   append(...children){this.children.push(...children);},
   replaceChildren(...children){this.children=children;},
   reset(){this.resetCount=(this.resetCount||0)+1;},style:{}};
  nodes.set(id,el);return el;
 }
 const document={getElementById:id=>nodes.get(id)||make(id),createElement:tag=>make(tag)};
 const calls=[];
 const context={document,URL,INTERSTICE_RESOURCES:resources,INTERSTICE_CANDIDATE_MODE:false,
  window:{INTERSTICE_CANDIDATE_MODE:false},
  fetch:async(...args)=>{calls.push(args);throw Error("Unexpected external request");}};
 vm.runInNewContext(readFileSync(new URL("../"+script,import.meta.url),"utf8"),context);
 const id=script==="script.js"?"form":"resource-form";
 return {el:document.getElementById,calls,submit:async()=>{
  let prevented=false;
  await document.getElementById(id).submit({preventDefault(){prevented=true;}});
  assert.equal(prevented,true);
 }};
}
test("018-D : besoin et offre vides gardent une validation locale",async()=>{
 const a=setup("script.js");await a.submit();
 assert.match(a.el("etat").textContent,/Indique/);assert.deepEqual(a.calls,[]);
});
test("018-D : un besoin ne peut pas être envoyé même si le mode est forcé à false",async()=>{
 const a=setup("script.js",{besoin:"Atelier fictif",lieu:"Gaillac"});
 await a.submit();assert.match(a.el("etat").textContent,/proposition non transmise/);
 assert.deepEqual(a.calls,[]);assert.equal(a.el("form").resetCount,undefined);
});
test("018-D : une ressource proposée seule ne déclenche rien",async()=>{
 const a=setup("script.js",{partage:"Outils fictifs"});
 await a.submit();assert.match(a.el("etat").textContent,/aucune publication ni contact/);
 assert.deepEqual(a.calls,[]);
});
test("018-D : plusieurs soumissions de proposition restent inertes",async()=>{
 const a=setup("script.js",{besoin:"Test"});
 for(let i=0;i<4;i++)await a.submit();
 assert.deepEqual(a.calls,[]);
});
test("018-D : bouton de proposition désactivé sans requête",async()=>{
 const a=setup("script.js",{besoin:"Test"});a.el("submit").disabled=true;
 await a.submit();assert.deepEqual(a.calls,[]);assert.equal(a.el("etat").textContent,"");
});
test("018-D : pas de chargement des propositions réelles",()=>{
 const a=setup("script.js");
 assert.match(a.el("liste-propositions").textContent,/désactivée/);assert.deepEqual(a.calls,[]);
});
test("018-D : soumission de ressource neutralisée",async()=>{
 const a=setup("ressources.js",{"resource-title":"Ressource imaginaire","resource-url":"https://example.invalid"});
 await a.submit();assert.match(a.el("resource-status").textContent,/ressource non envoyée/);
 assert.deepEqual(a.calls,[]);assert.equal(a.el("resource-form").resetCount,undefined);
});
test("018-D : soumissions répétées de ressources toujours inertes",async()=>{
 const a=setup("ressources.js",{"resource-title":"Exemple"});
 for(let i=0;i<4;i++)await a.submit();
 assert.deepEqual(a.calls,[]);
});
test("018-D : bouton ressource désactivé sans requête",async()=>{
 const a=setup("ressources.js");a.el("resource-submit").disabled=true;await a.submit();
 assert.equal(a.el("resource-status").textContent,"");assert.deepEqual(a.calls,[]);
});
test("018-D : liste des ressources locales, recherche et catégorie maintenues",()=>{
 const rows=[
  {title:"Guide vélo",description:"Réparation",category:"Faire",url:"https://example.invalid/1",license:"Libre"},
  {title:"Archive",description:"Documents",category:"Comprendre",url:"https://example.invalid/2",license:"Libre"}];
 const a=setup("ressources.js",{},rows);
 assert.match(a.el("count").textContent,/2 ressources/);
 a.el("search").value="vélo";a.el("search").input();
 assert.match(a.el("count").textContent,/1 ressource/);
 a.el("search").value="";a.el("category").value="Comprendre";a.el("category").change();
 assert.match(a.el("count").textContent,/1 ressource/);assert.deepEqual(a.calls,[]);
});
test("018-D : aucun endpoint, transport ni interrupteur dans les scripts de démonstration",()=>{
 const forbidden=["supabase","/functions/v1/submit-","/rest/v1/","public_proposals",
  "approved_resources","fetch(","XMLHttpRequest","sendBeacon","WebSocket",
  "EventSource","INTERSTICE_CANDIDATE_MODE"];
 for(const file of ["script.js","ressources.js"]){
  const source=readFileSync(new URL("../"+file,import.meta.url),"utf8");
  for(const token of forbidden)assert.equal(source.includes(token),false,file+" contient "+token);
 }
});
