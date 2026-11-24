import http from 'node:http';
import {Readable} from 'node:stream';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createLocalStore} from './local-store.mjs';
import {createHandler,receiptToken} from './api.mjs';
import {FLAGS,mapProjection} from './domain.mjs';
import {mapReferences} from './fixtures.mjs';
const demo=process.argv.includes('--demo');
const host=process.env.HOST||(process.env.SITES_MANAGED_LINUX_CONTAINER==='1'?'0.0.0.0':'127.0.0.1'),port=Number(process.env.PORT||4173);
if(!['127.0.0.1','localhost','0.0.0.0'].includes(host))throw Error('Test server host not supported');
if(host==='0.0.0.0'&&process.env.SITES_MANAGED_LINUX_CONTAINER!=='1')throw Error('Loopback required outside managed preview');
const store=await createLocalStore({seed:demo}),session=receiptToken(),rates=new Map();
const files=new Map([['/','ui/index.html'],['/index.html','ui/index.html'],['/app.mjs','ui/app.mjs'],['/style.css','ui/style.css'],['/domain.mjs','domain.mjs'],['/brand.svg','../../../assets/logo-interstice.svg']]);
const contentType={html:'text/html; charset=utf-8',mjs:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',svg:'image/svg+xml'};
function actualOrigin(req){
 // Native local requests use host. Managed proxy forwards the viewer origin.
 const supplied=req.headers.origin;
 if(process.env.SITES_MANAGED_LINUX_CONTAINER==='1'&&supplied){const u=new URL(supplied);if(u.protocol==='https:'&&u.hostname.endsWith('.chatgpt-team.site'))return u.origin;}
 return 'http://'+req.headers.host;
}
const server=http.createServer(async(req,res)=>{
 try{
  const origin=actualOrigin(req),url=new URL(req.url,origin);
  if(url.pathname.startsWith('/api/')){
   const handler=createHandler({store,origin,flags:demo?{proposals:true,contributions:true,research:true,discussion:true}:FLAGS,
    authorize:async request=>demo&&request.headers.get('cookie')?.split(';').some(x=>x.trim()==='demo_session='+session)?'DEMO-MODERATOR':null,
    claimSlot:async(request,path)=>{const now=Date.now(),key=req.socket.remoteAddress+':'+path;let hits=rates.get(key)||[];hits=hits.filter(at=>at>now-600000);if(rates.size>1000)rates.clear();if(hits.length>=60)return false;hits.push(now);rates.set(key,hits);return true;},
    demoSession:demo?async()=>new Response(JSON.stringify({demo:true}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store','Set-Cookie':`demo_session=${session}; HttpOnly; SameSite=Strict; Path=/api/`}}):null});
   const request=new Request(url,{method:req.method,headers:req.headers,...(!['GET','HEAD'].includes(req.method)?{body:Readable.toWeb(req),duplex:'half'}:{})});
   const response=await handler(request);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));return;
  }
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end();return;}
  if(url.pathname==='/map-references.json'){res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(demo?mapProjection(mapReferences):[]));return;}
  const file=files.get(url.pathname);if(!file){res.writeHead(404);res.end('Introuvable');return;}
  const bytes=await readFile(new URL(file,import.meta.url));
  res.writeHead(200,{'Content-Type':contentType[file.split('.').pop()],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; form-action 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"});res.end(req.method==='HEAD'?undefined:bytes);
 }catch{res.writeHead(503,{'Content-Type':'text/plain'});res.end('Service de test indisponible.');}
});
server.requestTimeout=10000;server.headersTimeout=10000;
server.listen(port,host,()=>console.log(`Participation ${demo?'DEMO FICTIVE':'FERMEE'} : http://${host}:${port}/`));
for(const signal of ['SIGTERM','SIGINT'])process.once(signal,()=>server.close(async()=>{await store.close();process.exit(0);}));
