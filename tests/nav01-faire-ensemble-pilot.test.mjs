import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,copyFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';

const root=new URL('../',import.meta.url);
const source=readFileSync(new URL('coordination/work/c07/faire-ensemble-pilot/submit-proposal.ts',root),'utf8');
const endpoint='https://example.test/proposals';
const origin='https://zoutifrutti.github.io';
function setup(flag,options={}){
 let handler;const writes=[],calls=[];
 const env={FAIRE_ENSEMBLE_PROPOSALS_ENABLED:flag,SUPABASE_URL:'https://example.test',SUPABASE_SERVICE_ROLE_KEY:'synthetic-test-key'};
 vm.runInNewContext(source.replace(/^import .*;\n/m,''),{
  Deno:{env:{get:k=>env[k]},serve:h=>handler=h},
  createClient:()=>({rpc:async(name,args)=>{calls.push(name);return {data:options.allowed!==false,error:options.rateError||null};},
   from:table=>({insert:async value=>{writes.push({table,value});return {error:options.insertError||null};}})}),
  Response,TextDecoder,TextEncoder,Uint8Array,Error,crypto:webcrypto
 });
 const request=(payload={need:'Un outil',offer:'',area:'secteur général',category:'Matériel et ressources'},headers={})=>new Request(endpoint,{
  method:'POST',headers:{origin,'cf-connecting-ip':'192.0.2.1',...headers},body:typeof payload==='string'?payload:JSON.stringify(payload)
 });
 return {handler,writes,calls,request};
}
for(const flag of [undefined,'false','TRUE'])test(`pilote fermé : ${String(flag)}, aucun corps ni DB`,async()=>{
 const a=setup(flag);let reads=0;
 const response=await a.handler({method:'POST',headers:new Headers(),body:{getReader(){reads++;throw Error('body must stay unread');}}});
 assert.equal(response.status,503);assert.equal(reads,0);assert.deepEqual(a.calls,[]);assert.deepEqual(a.writes,[]);
});
test('OPTIONS et méthodes sans collecte',async()=>{
 const a=setup();assert.equal((await a.handler(new Request(endpoint,{method:'OPTIONS'}))).status,204);
 assert.equal((await a.handler(new Request(endpoint))).status,405);assert.deepEqual(a.writes,[]);
});
for(const [label,payload,headers,status] of [
 ['origine refusée',undefined,{origin:'https://other.example'},403],
 ['taille annoncée excessive',undefined,{'content-length':'7001'},413],
 ['taille réelle excessive','x'.repeat(7001),{},413],
 ['JSON invalide','{',{},400],
 ['coordonnée refusée',{need:'contact@example.test',category:'Matériel et ressources'},{},400],
 ['IP absente',undefined,{'cf-connecting-ip':''},503]
])test(label,async()=>{const a=setup('true');const r=await a.handler(a.request(payload,headers));assert.equal(r.status,status);assert.deepEqual(a.writes,[]);});
for(const [label,opts,status] of [
 ['limite de cadence',{allowed:false},429],['limiteur indisponible',{rateError:'synthetic'},503],['écriture refusée',{insertError:'synthetic'},503]
])test(label,async()=>{const a=setup('true',opts);assert.equal((await a.handler(a.request())).status,status);});
test('réception simulée : pending seulement, aucune publication',async()=>{
 const a=setup('true');const r=await a.handler(a.request());assert.equal(r.status,202);
 assert.equal((await r.json()).ok,true);assert.equal(a.writes.length,1);
 assert.equal(a.writes[0].table,'proposals');assert.equal(a.writes[0].value.status,'pending');
 assert.deepEqual(a.calls,['claim_submission_slot']);
});
test('patch applicable au seul frontend propositions, confirmé avant reset',async()=>{
 const folder=mkdtempSync(join(tmpdir(),'interstice-pilot-'));
 try{
  copyFileSync(new URL('script.js',root),join(folder,'script.js'));
  execFileSync('git',['apply',new URL('coordination/work/c07/faire-ensemble-pilot/frontend.diff',root).pathname],{cwd:folder});
  const patched=readFileSync(join(folder,'script.js'),'utf8');
  async function run(reply,double=false){
   const nodes=new Map();let posts=0;let release;
   const gate=new Promise(r=>release=r);
   const el=id=>{if(!nodes.has(id))nodes.set(id,{value:id==='besoin'?'Un outil':'',textContent:'',disabled:false,
    addEventListener(t,f){this[t]=f;},reset(){this.resets=(this.resets||0)+1;},replaceChildren(){},append(){}});return nodes.get(id);};
   vm.runInNewContext(patched,{document:{getElementById:el,createElement:()=>({})},fetch:async(url,init)=>{
    if(init?.method==='POST'){posts++;if(double)await gate;return reply;}
    return {ok:false};
   }});
   const pending=el('form').submit({preventDefault(){}});
   if(double){await el('form').submit({preventDefault(){}});release();}
   await pending;return {posts,resets:el('form').resets||0,message:el('etat').textContent};
  }
  for(const reply of [{ok:true,status:200,json:async()=>({message:'Reçu'})},{ok:true,status:202,json:async()=>({})},
   {ok:false,status:503,json:async()=>{throw Error('not JSON');}}]){
   const r=await run(reply);assert.equal(r.resets,0);assert.match(r.message,/Échec/);
  }
  const r=await run({ok:true,status:202,json:async()=>({message:'Reçu'})},true);
  assert.equal(r.posts,1);assert.equal(r.resets,1);
 }finally{rmSync(folder,{recursive:true,force:true});}
});
