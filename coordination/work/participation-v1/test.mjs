import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createLocalStore} from './local-store.mjs';
import {createHandler,sha256,supabaseStore,supabaseAuthorization,supabaseLimiter,publicCatalogue} from './api.mjs';
import {FLAGS,validateProposal,reference,mapProjection,versionComparison} from './domain.mjs';
import {version} from './fixtures.mjs';
import {authorizedTargets} from './master-adapter.mjs';
let store;before(async()=>store=await createLocalStore());after(async()=>store?.close());
const origin='https://interstice.example.org';
const flags={proposals:true,contributions:true,research:true,discussion:true};
const proposal={title:'Un atelier partagé',type:'besoin',need:'Apprendre à réparer ensemble.',offer:'Des outils à partager',area:'Un secteur général',category:'Savoirs et ateliers',references:['https://example.org/']};
const contribution={targetId:'DEMO-001',version,kind:'transcription',body:'Mention du registre, transcription fictive.',provenance:'Catalogue fictif consulté pour le test.',locator:'Registre fictif, page 4.',rightsNote:'Exemple fictif, aucun document reproduit.',rightsDeclared:true,references:['https://example.org/']};
function handler(opts={}){return createHandler({store,flags,origin,claimSlot:async()=>true,authorize:async r=>r.headers.get('authorization')==='Bearer test-moderator'?'MOD-TEST':null,...opts});}
async function call(path,body,options={}){
 const response=await (options.handler||handler())(new Request(origin+path,{method:body===undefined?'GET':'POST',headers:{origin,...(options.moderator?{authorization:'Bearer test-moderator'}:{}),...options.headers},...(body===undefined?{}:{body:typeof body==='string'?body:JSON.stringify(body)})}));
 return {status:response.status,data:await response.json()};
}
async function queue(){return (await call('/api/moderation',undefined,{moderator:true})).data;}
test('all intake switches default closed before body/DB access',async()=>{
 let reads=0,calls=0;const h=createHandler({store:{command(){calls++;}},origin});
 for(const path of ['/api/proposals','/api/contributions','/api/research/demo/responses','/api/threads/demo/arguments']){
  const r=await h({url:origin+path,method:'POST',headers:new Headers({origin}),body:{getReader(){reads++;throw Error('not allowed');}}});assert.equal(r.status,503);
 }assert.equal(reads,0);assert.equal(calls,0);assert.deepEqual(FLAGS,{proposals:false,contributions:false,research:false,discussion:false});
});
test('independent activation: opening proposals does not open contributions',async()=>{
 const h=handler({flags:{...FLAGS,proposals:true}});assert.equal((await call('/api/contributions',contribution,{handler:h})).status,503);
 assert.deepEqual((await call('/api/catalog',undefined,{handler:h})).data.targets,[]);
});
test('closed catalogue makes no database call and cannot reveal another module',async()=>{
 let calls=0;const h=handler({flags:FLAGS,store:{command(){calls++;throw Error('must not read');}}});
 const result=await call('/api/catalog',undefined,{handler:h});assert.equal(result.status,200);assert.deepEqual(result.data.research,[]);assert.equal(calls,0);
});
test('wrong origin, malformed JSON, oversized streamed body, null and honeypot refused',async()=>{
 assert.equal((await call('/api/proposals',proposal,{headers:{origin:'https://elsewhere.example.org'}})).status,403);
 for(const [body,code] of [['{',400],['null',400],['[]',400],['a'.repeat(16001),413],[{...proposal,website:'bot'},400]])assert.equal((await call('/api/proposals',body)).status,code);
});
test('HTTP methods and limiter cannot create a receipt',async()=>{
 assert.equal((await call('/api/proposals',undefined)).status,405);
 const r=await call('/api/proposals',proposal,{handler:handler({claimSlot:async()=>false})});assert.equal(r.status,429);assert.equal(r.data.receipt,undefined);
});
test('untrusted fields do not control status, cohort, time or publication',async()=>{
 const result=await call('/api/proposals',{...proposal,status:'published',created_at:'2000-01-01',pilot_cohort:'forged',actor:'forged'});assert.equal(result.status,202);assert.match(result.data.receipt,/^[a-f0-9]{64}$/);
 const row=(await store.db.query('select * from public.proposals where participation_receipt_hash=$1',[await sha256(result.data.receipt)])).rows[0];
 assert.equal(row.status,'pending');assert.equal(row.pilot_cohort,'c08-fe-proposals-v1');assert.equal(row.participation_state,'received');assert.ok(new Date(row.created_at).getFullYear()>2020);
 assert.ok(!JSON.stringify(row).includes(result.data.receipt));
 const track=await call('/api/track',{receipt:result.data.receipt});assert.equal(track.status,200);assert.equal(track.data.published,false);assert.equal(track.data.need_text,undefined);assert.equal(track.data.id,undefined);
});
test('storage failure gives no receipt and no provider details',async()=>{
 const r=await call('/api/proposals',proposal,{handler:handler({store:{async command(){throw Error('sensitive-provider-information');}}})});assert.equal(r.status,503);assert.equal(r.data.receipt,undefined);assert.ok(!JSON.stringify(r).includes('sensitive-provider-information'));
});
test('private queue and decisions require server-verified moderation',async()=>{
 assert.equal((await call('/api/moderation',undefined)).status,403);
 assert.equal((await call('/api/moderation/proposal/unknown',{version:1,state:'examined',reason:'Test',actor:'MOD-TEST'})).status,403);
 for(const role of ['anon','authenticated']){
  await store.db.exec('set role '+role);
  try{await assert.rejects(store.db.query("select public.participation_command('queue','{}')"),/permission denied/);await assert.rejects(store.db.query('select * from participation_private.contributions'),/permission denied/);await assert.rejects(store.db.query('select * from public.proposals'),/permission denied/);}finally{await store.db.exec('reset role');}
 }
});
test('receipts cannot enumerate contributions or contain a private history',async()=>{
 for(const receipt of ['a'.repeat(64),'123',null])assert.equal((await call('/api/track',{receipt})).status,404);
 const q=await queue();assert.ok(!JSON.stringify(q).includes('receipt_hash'));
});
test('proposal review is versioned, reasoned and never publishes',async()=>{
 const received=await call('/api/proposals',proposal);const p=(await queue()).proposals.find(x=>x.title===proposal.title&&x.state==='received');
 assert.ok(p);
 assert.equal((await call('/api/moderation/proposal/'+p.id,{state:'instruction',version:1,reason:'Direct jump'},{moderator:true})).status,409);
 assert.equal((await call('/api/moderation/proposal/'+p.id,{state:'examined',version:1,reason:''},{moderator:true})).status,400);
 assert.equal((await call('/api/moderation/proposal/'+p.id,{state:'published',version:1,reason:'Forbidden'},{moderator:true})).status,400);
 assert.equal((await call('/api/moderation/proposal/'+p.id,{state:'examined',version:1,reason:'Premier examen effectif.'},{moderator:true})).status,200);
 assert.equal((await call('/api/moderation/proposal/'+p.id,{state:'rejected',version:1,reason:'Stale'},{moderator:true})).status,409);
 assert.equal((await call('/api/moderation/proposal/'+p.id,{state:'instruction',version:2,reason:'À instruire et sourcer.'},{moderator:true})).status,200);
 const row=(await store.db.query('select status,published_at,moderated_at,participation_history from public.proposals where id=$1',[p.id])).rows[0];assert.equal(row.status,'pending');assert.equal(row.published_at,null);assert.ok(row.moderated_at);assert.equal(row.participation_history.length,2);
 assert.equal((await call('/api/track',{receipt:received.data.receipt})).data.published,false);
});
test('contribution requires current stable target, exact version, provenance, locator and rights',async()=>{
 for(const [change,status] of [[{targetId:'BIO-UNKNOWN'},404],[{version:'b'.repeat(64)},409],[{provenance:''},400],[{locator:''},400],[{rightsDeclared:false},400],[{references:[]},400],[{kind:'photo'},400]])assert.equal((await call('/api/contributions',{...contribution,...change})).status,status);
});
test('blocked or nonpublic targets are absent and cannot accept contributions',async()=>{
 await store.db.query("insert into participation_private.targets(id,version,public_enabled,blocked,data) values('PRIVATE',$1,true,true,$2)",[version,{title:'Private sentinel',locator_private:'Never export'}]);
 const c=(await call('/api/catalog')).data;assert.ok(!JSON.stringify(c).includes('Private sentinel'));assert.equal((await call('/api/contributions',{...contribution,targetId:'PRIVATE'})).status,404);
 assert.deepEqual(publicCatalogue({targets:[{id:'x',public_enabled:true,blocked:false,title:'x',secret:'SENTINEL'}],research:[],threads:[],arguments:[]}).targets[0].secret,undefined);
});
test('research response verified by a human enables reasoned closure, then reopening',async()=>{
 const r=(await call('/api/catalog')).data.research[0];
 assert.equal((await call('/api/moderation/research/'+r.id,{version:r.version,state:'closed',reason:'No evidence yet'},{moderator:true})).status,409);
 const response=await call('/api/research/'+r.id+'/responses',contribution);assert.equal(response.status,202);
 const c=(await queue()).contributions.find(x=>x.research_id===r.id);assert.ok(c);
 assert.equal((await call('/api/moderation/contribution/'+c.id,{version:1,state:'examined',reason:'Source consultée.'},{moderator:true})).status,200);
 assert.equal((await call('/api/moderation/contribution/'+c.id,{version:2,state:'instruction',reason:'Texte collationné.',verified:true,rightsChecked:false},{moderator:true})).status,400);
 assert.equal((await call('/api/moderation/contribution/'+c.id,{version:2,state:'instruction',reason:'Référence et droits contrôlés dans la fixture.',verified:true,rightsChecked:true},{moderator:true})).status,200);
 assert.equal((await call('/api/moderation/research/'+r.id,{version:1,state:'closed',reason:'La réponse vérifiée résout la question fictive.'},{moderator:true})).status,200);
 assert.equal((await call('/api/research/'+r.id+'/responses',contribution)).status,409);
 assert.equal((await call('/api/moderation/research/'+r.id,{version:2,state:'open',reason:'Une nouvelle contradiction doit être examinée.'},{moderator:true})).status,200);
 const updated=(await call('/api/catalog')).data.research[0];assert.equal(updated.history.length,2);assert.equal(updated.state,'open');
 const tracked=(await call('/api/track',{receipt:response.data.receipt})).data;assert.equal(tracked.documentary,'verified');assert.equal(tracked.editorial,'not_validated');assert.equal(tracked.published,false);
});
test('changed target prevents validation of an older contribution',async()=>{
 const received=await call('/api/contributions',contribution);assert.equal(received.status,202);const c=(await queue()).contributions.find(x=>!x.research_id);
 await store.db.query("update participation_private.targets set version=$1 where id='DEMO-001'",['b'.repeat(64)]);
 try{assert.equal((await call('/api/moderation/contribution/'+c.id,{version:1,state:'examined',reason:'Outdated'},{moderator:true})).status,409);}finally{await store.db.query("update participation_private.targets set version=$1 where id='DEMO-001'",[version]);}
});
test('arguments remain private until moderation; decision keeps disagreements',async()=>{
 const result=await call('/api/threads/DISC-DEMO-001/arguments',{kind:'objection',body:'Objection fictive sourcée.',references:['https://example.org/']});assert.equal(result.status,202);
 assert.equal((await call('/api/catalog')).data.arguments.length,0);
 const a=(await queue()).arguments[0];
 for(const [state,v] of [['examined',1],['instruction',2]])assert.equal((await call('/api/moderation/argument/'+a.id,{state,version:v,reason:'Modération de la fixture.'},{moderator:true})).status,200);
 assert.equal((await call('/api/catalog')).data.arguments[0].kind,'objection');
 assert.equal((await call('/api/moderation/threads/DISC-DEMO-001',{version:1,reason:'Essai limité.',agreements:'Références précises.',disagreements:'Le périmètre reste discuté.',nextSteps:'Réexaminer après essai.'},{moderator:true})).status,200);
 const c=(await call('/api/catalog')).data;assert.equal(c.threads[0].decision.disagreements,'Le périmètre reste discuté.');assert.equal(c.arguments.length,1);
 assert.equal((await call('/api/threads/DISC-DEMO-001/arguments',{kind:'accord',body:'Late',references:[]})).status,409);
});
test('existing purge still excludes examined records; preview does not delete',async()=>{
 await store.db.exec("set role service_role");
 const plan=await store.db.query("select * from interstice_fe_pilot.purge_pending()");
 assert.ok(plan);await store.db.exec('reset role');
 const row=(await store.db.query("select count(*)::int as n from public.proposals where participation_state='instruction' and moderated_at is not null")).rows[0];assert.ok(row.n>0);
});
test('URL and personal information controls reject active links and credentials',()=>{
 for(const u of ['javascript:alert(1)','https://user:pass@example.org/','http://127.0.0.1/x','https://[::1]/','https://foo.local/','https://example.org/?token=secret'])assert.throws(()=>reference(u));
 assert.throws(()=>validateProposal({...proposal,need:'Écris à test@example.org'}));
 assert.throws(()=>validateProposal({...proposal,need:'Appelle le 06 12 34 56 78'}));
 assert.equal(reference('https://example.org/path#page=4'),'https://example.org/path#page=4');
});
test('map projection drops sensitive and unverified places and all coordinates',()=>{
 const base={id:'MAP-DEMO',title:'Exemple',area:'Secteur fictif',canonicalUrl:'https://example.org/',kind:'initiative',verified:true,permission:true,publicLocation:true,sensitive:false,lat:42,privatePhone:'SECRET'};
 const r=mapProjection([base,{...base,sensitive:true},{...base,verified:false},{...base,permission:false}]);assert.equal(r.length,1);assert.equal(r[0].lat,undefined);assert.equal(r[0].privatePhone,undefined);
});
test('master adapter stays empty without human manifest and rejects blocked records',()=>{
 assert.deepEqual(authorizedTargets([]),[]);assert.throws(()=>authorizedTargets([{id:'FN-018',publicMetadataApproved:true,version,decisionRef:'test'}]));
 assert.deepEqual(versionComparison('texte','texte corrigé'),{original:'texte',proposed:'texte corrigé',changed:true});
});
test('Supabase adapter and authorization never trust user_metadata or client actor',async()=>{
 let seen;const rpc=supabaseStore({async rpc(name,args){seen={name,args};return {data:{state:'received'},error:null};}});await rpc.command('proposal',{title:'x'});assert.equal(seen.name,'participation_command');
 const request=new Request(origin,{headers:{authorization:'Bearer token'}});
 const auth=supabaseAuthorization(()=>({auth:{getUser:async()=>({data:{user:{id:'real',user_metadata:{moderator:true}}}})},rpc:async()=>({data:false})}));assert.equal(await auth(request),null);
 const accepted=supabaseAuthorization(()=>({auth:{getUser:async()=>({data:{user:{id:'real'}}})},rpc:async()=>({data:true})}));assert.equal(await accepted(request),'real');
});
test('dedicated HMAC secret, trusted IP and strict limiter result required',async()=>{
 let seen;const db={async rpc(name,args){seen={name,args};return {data:true};}};
 await assert.rejects(supabaseLimiter(db,{secret:'short',trustedIp:()=>null})(new Request(origin)));
 const limiter=supabaseLimiter(db,{secret:'s'.repeat(32),trustedIp:()=> '192.0.2.1'});assert.equal(await limiter(new Request(origin)),true);assert.match(seen.args.p_fingerprint,/^[a-f0-9]{64}$/);assert.ok(!JSON.stringify(seen).includes('192.0.2.1'));
 assert.equal(await supabaseLimiter({rpc:async()=>({data:'true'})},{secret:'s'.repeat(32),trustedIp:()=> '192.0.2.1'})(new Request(origin)),false);
});
test('production configuration remains completely closed with no catalogue',async()=>{
 const c=JSON.parse(await readFile(new URL('./production-config.json',import.meta.url)));for(const key of Object.keys(FLAGS))assert.equal(c[key],false);assert.deepEqual(c.publicTargets,[]);assert.deepEqual(c.researchCatalogue,[]);
});
test('CORS preflight is bounded to configured origin without body or database',async()=>{
 let calls=0;const h=createHandler({origin,store:{command(){calls++;throw Error('unexpected');}}});
 const r=await h(new Request(origin+'/api/proposals',{method:'OPTIONS',headers:{origin}}));assert.equal(r.status,204);assert.equal(r.headers.get('Access-Control-Allow-Origin'),origin);assert.equal(calls,0);
 assert.equal((await h(new Request(origin+'/api/proposals',{method:'OPTIONS',headers:{origin:'https://other.example.org'}}))).status,403);
});
test('even a published row cannot expose private columns; legacy publication RPC revoked',async()=>{
 const p=(await queue()).proposals[0];await store.db.query("update public.proposals set status='published' where id=$1",[p.id]);
 for(const role of ['anon','authenticated']){
  await store.db.exec('set role '+role);
  try{
   assert.ok((await store.db.query("select category from public.proposals where status='published'")).rows.length>0);
   await assert.rejects(store.db.query('select participation_history from public.proposals'),/permission denied/);
   await assert.rejects(store.db.query('select participation_receipt_hash from public.proposals'),/permission denied/);
   await assert.rejects(store.db.query("select public.moderate_proposal($1,'published')",[p.id]),/permission denied/);
  }finally{await store.db.exec('reset role');}
 }
 await store.db.query("update public.proposals set status='pending' where id=$1",[p.id]);
});
