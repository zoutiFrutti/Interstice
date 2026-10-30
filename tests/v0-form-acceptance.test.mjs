import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

function setup(script,values={},respond=async()=>({ok:true,json:async()=>({message:'Reçu'})}),candidateMode=false){
 const nodes=new Map();
 const make=(id)=>{const el={id,value:values[id]??'',textContent:'',disabled:false,children:[],
  addEventListener(type,fn){this[type]=fn;},append(...children){this.children.push(...children);},
  replaceChildren(...children){this.children=children;},reset(){this.resetCount=(this.resetCount||0)+1;},
  setAttribute(){},style:{}};nodes.set(id,el);return el;};
 const document={getElementById:id=>nodes.get(id)||make(id),createElement:tag=>make(tag)};
 const calls=[];
 const context={document,URL,INTERSTICE_RESOURCES:[],INTERSTICE_CANDIDATE_MODE:candidateMode,fetch:async(...args)=>{calls.push(args);return respond(...args);}};
 vm.runInNewContext(readFileSync(new URL('../'+script,import.meta.url),'utf8'),context);
 const submit=script==='script.js'?'form':'resource-form';
 return {nodes,el:document.getElementById,calls,submit:async()=>{
  let prevented=false;
  await document.getElementById(submit).submit({preventDefault(){prevented=true;}});
  assert.equal(prevented,true);
 }};
}
test('A02: demande vide rejetée sans requête',async()=>{
 const a=setup('script.js');await a.submit();assert.equal(a.calls.filter(x=>x[1]?.method==='POST').length,0);
 assert.match(a.el('etat').textContent,/Indique/);
});
test('A02: envoi de besoin et reset après confirmation',async()=>{
 const a=setup('script.js',{besoin:'Besoin de vélo',lieu:'secteur Gaillac'});
 await a.submit();const posts=a.calls.filter(x=>x[1]?.method==='POST');
 assert.equal(posts.length,1);assert.equal(JSON.parse(posts[0][1].body).need,'Besoin de vélo');
 assert.equal(a.el('form').resetCount,1);assert.match(a.el('etat').textContent,/Reçu/);
});
test('A11: panne réseau ne réinitialise pas le formulaire',async()=>{
 const a=setup('script.js',{besoin:'Un outil'},async()=>{throw Error('offline')});
 await a.submit();assert.equal(a.el('form').resetCount||0,0);
 assert.match(a.el('etat').textContent,/Échec/);assert.equal(a.el('submit').disabled,false);
});
test('A11: réponse non JSON en erreur reste explicite',async()=>{
 const a=setup('script.js',{besoin:'Un outil'},async()=>({ok:false,json:async()=>{throw Error('not-json')}}));
 await a.submit();assert.match(a.el('etat').textContent,/Envoi impossible/);
});
test('A11: double soumission en cours bloquée',async()=>{
 let release;const gate=new Promise(r=>release=r);
 const a=setup('script.js',{besoin:'Un outil'},async()=>{await gate;return {ok:true,json:async()=>({message:'Reçu'})}});
 const pending=a.submit();await Promise.resolve();await a.submit();release();await pending;
 assert.equal(a.calls.filter(x=>x[1]?.method==='POST').length,1);
});
test('A02: formulaire ressource transmet la source et ne publie pas',async()=>{
 const a=setup('ressources.js',{'resource-title':'Un guide','resource-url':'https://example.org',
 'resource-description':'Ressource pédagogique','resource-category':'Faire'});
 await a.submit();const posts=a.calls.filter(x=>x[1]?.method==='POST');
 assert.equal(posts.length,1);assert.equal(JSON.parse(posts[0][1].body).url,'https://example.org');
 assert.match(a.el('resource-status').textContent,/Reçu/);
});
test('A11: formulaire ressource gère les erreurs non JSON',async()=>{
 const a=setup('ressources.js',{'resource-title':'Un guide'},async()=>({ok:false,json:async()=>{throw Error('invalid')}}));
 await a.submit();assert.match(a.el('resource-status').textContent,/Envoi impossible/);
 assert.equal(a.el('resource-form').resetCount||0,0);
});
test('A11: ressource protège contre le double clic',async()=>{
 let release;const gate=new Promise(r=>release=r);
 const a=setup('ressources.js',{'resource-title':'Un guide'},async()=>{await gate;return {ok:true,json:async()=>({message:'Reçu'})}});
 const pending=a.submit();await Promise.resolve();await a.submit();release();await pending;
 assert.equal(a.calls.filter(x=>x[1]?.method==='POST').length,1);
});

test('018A: candidate proposal never sends POST',async()=>{
 const a=setup('script.js',{besoin:'Exemple de test'},undefined,true);
 await a.submit();
 assert.equal(a.calls.filter(x=>x[1]?.method==='POST').length,0);
 assert.match(a.el('etat').textContent,/non transmise/);
});
test('018A: candidate resource never sends POST',async()=>{
 const a=setup('ressources.js',{'resource-title':'Exemple fictif'},undefined,true);
 await a.submit();
 assert.equal(a.calls.filter(x=>x[1]?.method==='POST').length,0);
 assert.match(a.el('resource-status').textContent,/non envoyée/);
});
