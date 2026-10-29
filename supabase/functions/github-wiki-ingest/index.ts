import {createRemoteJWKSet,jwtVerify} from "npm:jose@5.9.6";
const jwks=createRemoteJWKSet(new URL("https://token.actions.githubusercontent.com/.well-known/jwks"));
const AUD="interstice-wiki-import-rpqiwxkaiyokmxbhxfvh";
const REPO="zoutiFrutti/Interstice";
const workflow=REPO+"/.github/workflows/wiki-markdown-inventory.yml@refs/heads/main";
function json(x:unknown,status=200){return Response.json(x,{status,headers:{"Cache-Control":"no-store"}});}
async function bounded(req:Request,maximum=950000){
 let bytes=0;const chunks:Uint8Array[]=[];
 const reader=req.body?.getReader();if(!reader)throw Error("body absent");
 while(true){const {done,value}=await reader.read();if(done)break;bytes+=value.byteLength;
  if(bytes>maximum){await reader.cancel();throw Error("body too large");} chunks.push(value);}
 const data=new Uint8Array(bytes);let offset=0;for(const c of chunks){data.set(c,offset);offset+=c.byteLength;}
 return JSON.parse(new TextDecoder().decode(data));
}
Deno.serve(async(req:Request)=>{
 try{
  if(req.method!=="POST")return json({error:"method"},405);
  const bearer=req.headers.get("authorization")||"";
  if(!bearer.startsWith("Bearer "))return json({error:"authorization"},401);
  const {payload}=await jwtVerify(bearer.slice(7),jwks,{issuer:"https://token.actions.githubusercontent.com",audience:AUD,algorithms:["RS256"]});
  if(payload.repository!==REPO||payload.ref!=="refs/heads/main"||payload.workflow_ref!==workflow
   ||!["push","schedule","workflow_dispatch"].includes(String(payload.event_name)))
   return json({error:"claim mismatch"},403);
  const data=await bounded(req);
  if(!Array.isArray(data.items)||data.items.length>20)return json({error:"batch size"},400);
  const key=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const base=Deno.env.get("SUPABASE_URL");
  if(!key||!base)throw Error("service configuration missing");
  const results=[];
  for(const i of data.items){
   if(typeof i.path!=="string"||!i.path.startsWith("coordination/")&&!i.path.startsWith("wiki/")&&!i.path.startsWith("encyclopedie/"))
    return json({error:"invalid path"},400);
   const gh=await fetch("https://api.github.com/repos/"+REPO+"/contents/"+i.path.split("/").map(encodeURIComponent).join("/")+"?ref=main",{headers:{Accept:"application/vnd.github+json","User-Agent":"interstice-ingest"}});
   if(!gh.ok) return json({error:"github source unavailable",path:i.path,status:gh.status},409);
   const file=await gh.json();
   if(file.sha!==i.github_blob_sha)return json({error:"github version changed",path:i.path},409);
   if(file.encoding!=="base64"||typeof file.content!=="string")return json({error:"github contents"},409);
   const raw=Uint8Array.from(atob(file.content.replace(/\s/g,"")),c=>c.charCodeAt(0));
   const actual=new TextDecoder().decode(raw);
   if(actual!==i.markdown)return json({error:"github text mismatch",path:i.path},409);
   const args={p_id:i.id,p_path:i.path,p_blob_sha:i.github_blob_sha,p_content_sha:i.content_sha256,
    p_title:i.title,p_atelier:i.atelier,p_markdown:i.markdown,p_sources:i.sources,p_url:i.source_url};
   const s=await fetch(base+"/rest/v1/rpc/stage_github_wiki_document",{
    method:"POST",headers:{"apikey":key,"Authorization":"Bearer "+key,"Content-Type":"application/json"},
    body:JSON.stringify(args)
   });
   if(!s.ok){console.error("RPC failure",s.status,await s.text());return json({error:"db import failed",path:i.path},502);}
   results.push({id:i.id,status:await s.json()});
  }
  return json({processed:results.length,results});
 }catch(e){console.error("wiki importer",String(e));return json({error:"request rejected"},401);}
});
