import {createClient} from "npm:@supabase/supabase-js@2";
const origin="https://zoutifrutti.github.io";
const cors={"Access-Control-Allow-Origin":origin,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"content-type","Vary":"Origin"};
const reply=(obj,status=200)=>new Response(JSON.stringify(obj),{status,headers:{...cors,"Content-Type":"application/json","Cache-Control":"no-store"}});
// Refuse un corps trop grand pendant la lecture, sans le charger intégralement.
async function readBoundedBody(req,maxBytes){
 const reader=req.body?.getReader();if(!reader)return "";
 const chunks=[];let size=0;
 try{while(true){const {done,value}=await reader.read();if(done)break;
 size+=value.byteLength;if(size>maxBytes){await reader.cancel().catch(()=>{});throw new Error("BODY_TOO_LARGE");}
 chunks.push(value);
 }}finally{reader.releaseLock();}
 const bytes=new Uint8Array(size);let offset=0;
 for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
 return new TextDecoder("utf-8",{fatal:true}).decode(bytes);
}
Deno.serve(async req=>{
 if(req.method==="OPTIONS")return new Response(null,{status:204,headers:cors});
 if(req.method!=="POST")return reply({error:"Méthode non autorisée"},405);
 if(req.headers.get("origin")!==origin)return reply({error:"Origine non autorisée"},403);
 if(Number(req.headers.get("content-length")||0)>7000)return reply({error:"Message trop long"},413);
 let d;try{d=JSON.parse(await readBoundedBody(req,7000))}catch(e){return reply({error:e?.message==="BODY_TOO_LARGE"?"Message trop long":"Format invalide"},e?.message==="BODY_TOO_LARGE"?413:400)}
 if(!d||typeof d!=="object"||Array.isArray(d))return reply({error:"Format invalide"},400);
 if(d.website)return reply({ok:true,message:"Proposition reçue pour examen."},202);
 const need=typeof d.need==="string"?d.need.trim():"",offer=typeof d.offer==="string"?d.offer.trim():"",area=typeof d.area==="string"?d.area.trim():"",category=typeof d.category==="string"?d.category.trim():"Idées et projets";
 const cats=["Idées et projets","Lieux et espaces","Entraide","Savoirs et ateliers","Culture et création","Matériel et ressources"];
 if((!need&&!offer)||need.length>1500||offer.length>1500||area.length>100||!cats.includes(category))return reply({error:"Contenu invalide"},400);
 const content=[need,offer,area].join(" ");
 if(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(content)||/(?:\+33|0)[\s.-]?[1-9](?:[\s.-]?\d{2}){4}/.test(content)||/https?:\/\/\S+/i.test(content))return reply({error:"Une coordonnée ou un lien semble présent. Retire-le avant de soumettre."},400);
 const ip=req.headers.get("cf-connecting-ip")||req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
 if(!ip)return reply({error:"Vérification anti-abus indisponible"},503);
 const url=Deno.env.get("SUPABASE_URL"),key=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
 if(!url||!key)return reply({error:"Service indisponible"},503);
 const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(key+":"+ip));
 const fingerprint=Array.from(new Uint8Array(digest)).map(x=>x.toString(16).padStart(2,"0")).join("");
 const db=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 const {data:allowed,error:throttleError}=await db.rpc("claim_submission_slot",{p_fingerprint:fingerprint});
 if(throttleError)return reply({error:"Service temporairement indisponible"},503);
 if(!allowed)return reply({error:"Une proposition maximum toutes les dix minutes."},429);
 const {error}=await db.from("proposals").insert({need_text:need||null,offer_text:offer||null,area_text:area||null,category,status:"pending"});
 if(error)return reply({error:"Enregistrement impossible"},503);
 return reply({ok:true,message:"Proposition reçue. Elle attend une vérification avant publication."},202);
});