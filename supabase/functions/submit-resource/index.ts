import {createClient} from "npm:@supabase/supabase-js@2";
const origin="https://zoutifrutti.github.io";
const headers={"Access-Control-Allow-Origin":origin,"Access-Control-Allow-Methods":"POST,OPTIONS","Access-Control-Allow-Headers":"content-type","Content-Type":"application/json","Vary":"Origin"};
const answer=(code,data)=>new Response(JSON.stringify(data),{status:code,headers});
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
 if(req.method==="OPTIONS")return new Response(null,{status:204,headers});
 if(req.method!=="POST")return answer(405,{error:"Méthode non autorisée"});
 if(req.headers.get("origin")!==origin)return answer(403,{error:"Origine non autorisée"});
 try{
  const raw=await readBoundedBody(req,4000);
  const b=JSON.parse(raw);
  if(!b||typeof b!=="object"||Array.isArray(b))return answer(400,{error:"Format invalide."});
  if(typeof b.website==="string"&&b.website.trim())return answer(202,{message:"Proposition reçue pour examen."});
  const title=String(b.title||"").trim(),description=String(b.description||"").trim(),url=String(b.url||"").trim(),category=String(b.category||"").trim(),license=String(b.license||"").trim();
  const cats=["Comprendre","Faire","S'organiser","Trouver","S'entraider","Bibliothèque"];
  if(title.length<3||title.length>120||description.length<15||description.length>1000||url.length>500||license.length>200||!cats.includes(category))return answer(400,{error:"Vérifie les champs du formulaire."});
  let parsed;try{parsed=new URL(url);if(!["https:","http:"].includes(parsed.protocol)||parsed.username||parsed.password)throw Error();}catch{return answer(400,{error:"Adresse web invalide."});}
  if(/(?:@|(?:\+33|0)[ .-]?[1-9](?:[ .-]?[0-9]{2}){4})/.test(title+" "+description))return answer(400,{error:"Ne transmets pas de coordonnées personnelles."});
  const supabaseUrl=Deno.env.get("SUPABASE_URL"),serviceKey=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if(!supabaseUrl||!serviceKey)return answer(503,{error:"Service temporairement indisponible."});
  const ip=req.headers.get("cf-connecting-ip")?.trim()||req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if(!ip)return answer(503,{error:"Vérification anti-abus indisponible."});
  const db=createClient(supabaseUrl,serviceKey,{auth:{persistSession:false,autoRefreshToken:false}});
  const secret=serviceKey;
  const bytes=new TextEncoder().encode(secret+":resource:"+ip);
  const digest=await crypto.subtle.digest("SHA-256",bytes);
  const fingerprint=Array.from(new Uint8Array(digest),x=>x.toString(16).padStart(2,"0")).join("");
  const {data:allowed,error:rateError}=await db.rpc("claim_submission_slot",{p_fingerprint:fingerprint});
  if(rateError)return answer(503,{error:"Service momentanément indisponible."});
  if(!allowed)return answer(429,{error:"Attends dix minutes avant un nouvel envoi."});
  const {data:duplicate,error:duplicateError}=await db.from("resource_submissions").select("id").eq("url",parsed.toString()).in("status",["pending","approved"]).limit(1);
  if(duplicateError)return answer(503,{error:"Vérification des doublons indisponible."});
  if(duplicate?.length)return answer(409,{error:"Cette adresse a déjà été proposée."});
  const reasons=[];if(parsed.protocol!=="https:")reasons.push("lien_non_chiffre");if(license.length===0)reasons.push("licence_inconnue");
  const {error}=await db.from("resource_submissions").insert({title,url:parsed.toString(),description,category,license_note:license||null,moderation_reasons:reasons});
  if(error)return answer(503,{error:"Enregistrement indisponible."});
  return answer(202,{message:"Ressource reçue. Elle sera examinée avant toute publication."});
 }catch(e){return answer(e?.message==="BODY_TOO_LARGE"?413:400,{error:e?.message==="BODY_TOO_LARGE"?"Message trop long":"Requête invalide."});}
});