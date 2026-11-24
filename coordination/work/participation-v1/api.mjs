import {FLAGS,Problem,text,validateProposal,validateContribution,validateArgument,reviewInput,filterResearch,reference} from './domain.mjs';
export async function sha256(value){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)))].map(x=>x.toString(16).padStart(2,'0')).join('');}
export function receiptToken(){return [...crypto.getRandomValues(new Uint8Array(32))].map(x=>x.toString(16).padStart(2,'0')).join('');}
async function readBody(request){
  const reader=request.body?.getReader();if(!reader)throw new Problem(400,'Message manquant.');
  let size=0;const chunks=[];
  try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>16000){await reader.cancel();throw new Problem(413,'Message trop long.');}chunks.push(value);}}finally{reader.releaseLock();}
  const bytes=new Uint8Array(size);let n=0;for(const chunk of chunks){bytes.set(chunk,n);n+=chunk.length;}
  let d;try{d=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));}catch{throw new Problem(400,'Format invalide.');}
  if(!d||typeof d!=='object'||Array.isArray(d))throw new Problem(400,'Format invalide.');return d;
}
function select(x,keys){return Object.fromEntries(keys.filter(k=>Object.hasOwn(x,k)).map(k=>[k,x[k]]));}
export function publicCatalogue(c){
 return {
  targets:c.targets.filter(x=>x.public_enabled&&!x.blocked).map(x=>select(x,['id','title','version','body','public_enabled','blocked'])),
  research:c.research.map(x=>select(x,['id','title','target_id','question','document','institution','area','locator','conditions','instructions','expectedProof','references','state','version','history','receivedCount','verifiedCount'])),
  threads:c.threads.map(x=>select(x,['id','title','context','version','decision'])),
  arguments:c.arguments.map(x=>select(x,['id','thread_id','kind','body','references']))
 };
}
export function createHandler({store,flags=FLAGS,origin,authorize=async()=>null,claimSlot=async(_request,_path)=>false,demoSession=null}){
 const cors={'Access-Control-Allow-Origin':origin,'Vary':'Origin','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Allow-Headers':'content-type, authorization'};
 const response=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{...cors,'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'}});
 return async request=>{
  try{
   const url=new URL(request.url),path=url.pathname;
   if(!path.startsWith('/api/'))return response({error:'Introuvable.'},404);
   if(request.method==='OPTIONS'){
    if(request.headers.get('origin')!==origin)return response({error:'Origine non autorisée.'},403);
    return new Response(null,{status:204,headers:{...cors,'Cache-Control':'no-store'}});
   }
   if(request.method==='GET'&&path==='/api/catalog'){
    if(!flags.contributions&&!flags.research&&!flags.discussion)return response({targets:[],research:[],threads:[],arguments:[],flags,demo:!!demoSession});
    const c=publicCatalogue(await store.command('catalog',{}));
    if(!flags.contributions&&!flags.research)c.targets=[];
    if(!flags.research)c.research=[];
    if(!flags.discussion){c.threads=[];c.arguments=[];}
    c.research=filterResearch(c.research,Object.fromEntries(url.searchParams));
    return response({...c,flags,demo:!!demoSession});
   }
   if(request.method==='GET'&&path==='/api/moderation'){
    const actor=await authorize(request);if(!actor)throw new Problem(403,'Compte de modération requis.');
    return response(await store.command('queue',{actor}));
   }
   if(request.method!=='POST')return response({error:'Méthode non autorisée.'},405);
   const needsFlag=path==='/api/proposals'?'proposals':path==='/api/contributions'?'contributions':/^\/api\/research\/[^/]+\/responses$/.test(path)?'research':/^\/api\/threads\/[^/]+\/arguments$/.test(path)?'discussion':null;
   // Independent fail-closed switches precede body reading and all storage calls.
   if(needsFlag&&!flags[needsFlag])throw new Problem(503,'Réception temporairement suspendue.');
   if(request.headers.get('origin')!==origin)throw new Problem(403,'Origine non autorisée.');
   if(path==='/api/demo-session'&&demoSession)return demoSession(request);
   let actor=null;
   if(path.startsWith('/api/moderation/')){actor=await authorize(request);if(!actor)throw new Problem(403,'Compte de modération requis.');}
   if(needsFlag||path==='/api/track')if(!await claimSlot(request,path))throw new Problem(429,'Limite de cadence atteinte. Réessaie plus tard.');
   const d=await readBody(request);
   if(path==='/api/track'){
    if(typeof d.receipt!=='string'||!/^[a-f0-9]{64}$/.test(d.receipt))throw new Problem(404,'Reçu introuvable.');
    return response(await store.command('track',{receipt_hash:await sha256(d.receipt)}));
   }
   let action,payload;
   if(path==='/api/proposals'){action='proposal';payload=validateProposal(d);}
   if(path==='/api/contributions'||/^\/api\/research\/[^/]+\/responses$/.test(path)){
    const c=publicCatalogue(await store.command('catalog',{}));let research=null;
    if(path!=='/api/contributions'){
     research=c.research.find(x=>x.id===decodeURIComponent(path.split('/')[3]));
     if(!research)throw new Problem(404,'Recherche introuvable.');
    }
    const target=c.targets.find(x=>x.id===(research?.target_id||d.targetId));
    payload=validateContribution(d,target,research);action='contribution';
   }
   if(/^\/api\/threads\/[^/]+\/arguments$/.test(path)){payload={...validateArgument(d),thread_id:decodeURIComponent(path.split('/')[3])};action='argument';}
   if(action){
    const receipt=receiptToken();
    await store.command(action,{...payload,receipt_hash:await sha256(receipt)});
    return response({receipt,state:'received',message:'Apport enregistré pour examen. Aucune publication autorisée.'},202);
   }
   if(/^\/api\/moderation\/(proposal|contribution|argument)\/[^/]+$/.test(path)){
    const [, , ,kind,id]=path.split('/');return response(await store.command('review',{...reviewInput(d),kind,id,actor}));
   }
   if(/^\/api\/moderation\/research\/[^/]+$/.test(path)){
    if(!['open','closed'].includes(d.state)||!Number.isSafeInteger(d.version))throw new Problem(400,'État de recherche invalide.');
    return response(await store.command('research_state',{id:decodeURIComponent(path.split('/')[4]),version:d.version,state:d.state,reason:text(d.reason,1000,true),actor}));
   }
   if(/^\/api\/moderation\/threads\/[^/]+$/.test(path)){
    if(!Number.isSafeInteger(d.version))throw new Problem(400,'Version invalide.');
    return response(await store.command('thread_decision',{id:decodeURIComponent(path.split('/')[4]),version:d.version,reason:text(d.reason,1000,true),agreements:text(d.agreements,2000,true),disagreements:text(d.disagreements,2000,true),nextSteps:text(d.nextSteps,1000,true),actor}));
   }
   return response({error:'Introuvable.'},404);
  }catch(error){
   // Never return SQL, tokens, submitted content or raw provider exceptions.
   if(error instanceof Problem)return response({error:error.message},error.status);
   if(error?.code==='40001')return response({error:'La version ou l’état a changé. Recharge avant de décider.'},409);
   if(error?.code==='P0002')return response({error:'Référence introuvable.'},404);
   return response({error:'Enregistrement non confirmé. Garde ton texte et réessaie plus tard.'},503);
  }
 };
}

// Supabase adapter uses the same command contract as the isolated SQL test DB.
export function supabaseStore(db){return {async command(action,payload){const {data,error}=await db.rpc('participation_command',{p_action:action,p_payload:payload});if(error)throw error;if(data==null)throw Error('Empty RPC result');return data;}};}
export function supabaseAuthorization(clientForJwt){return async request=>{
 const value=request.headers.get('authorization');if(!value?.startsWith('Bearer '))return null;
 const token=value.slice(7),db=clientForJwt(token);
 const {data,error}=await db.auth.getUser(token);if(error||!data?.user)return null;
 const permission=await db.rpc('is_moderator');return !permission.error&&permission.data===true?data.user.id:null;
};}
export function supabaseLimiter(db,{secret,trustedIp}){
 return async request=>{
  if(typeof secret!=='string'||secret.length<32)throw new Problem(503,'Vérification anti-abus indisponible.');
  const ip=trustedIp(request);if(!ip)throw new Problem(503,'Vérification anti-abus indisponible.');
  const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
  const bytes=new Uint8Array(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(ip)));
  const fingerprint=[...bytes].map(x=>x.toString(16).padStart(2,'0')).join('');
  const {data,error}=await db.rpc('claim_submission_slot',{p_fingerprint:fingerprint});if(error)throw error;return data===true;
 };
}
