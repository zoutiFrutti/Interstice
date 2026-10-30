// V0 candidate : aucun POST ni lecture réelle en mode démonstration.
const INTERSTICE_CANDIDATE_MODE=globalThis.INTERSTICE_CANDIDATE_MODE!==false;
const root=document.getElementById("resources"),count=document.getElementById("count"),search=document.getElementById("search"),category=document.getElementById("category");function render(){const term=search.value.trim().toLocaleLowerCase("fr"),cat=category.value;const rows=INTERSTICE_RESOURCES.filter(r=>(!cat||r.category===cat)&&(!term||[r.title,r.description,r.category].some(v=>v.toLocaleLowerCase("fr").includes(term))));root.replaceChildren();count.textContent=rows.length+" ressource"+(rows.length>1?"s":"")+" trouvée"+(rows.length>1?"s":"");for(const r of rows){const card=document.createElement("article");card.className="resource-card";const tag=document.createElement("p");tag.className="tag";tag.textContent=r.category;const title=document.createElement("h3");title.textContent=r.title;const desc=document.createElement("p");desc.textContent=r.description;const a=document.createElement("a");a.href=r.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent="Consulter la source";const license=document.createElement("small");license.textContent="Réutilisation : "+r.license;card.append(tag,title,desc,a,license);root.append(card);}}search.addEventListener("input",render);category.addEventListener("change",render);render();
const resourceForm=document.getElementById("resource-form");
resourceForm.addEventListener("submit",async event=>{
 event.preventDefault();
 if(document.getElementById("resource-submit").disabled)return;
 const status=document.getElementById("resource-status"),button=document.getElementById("resource-submit");
 if(INTERSTICE_CANDIDATE_MODE){status.textContent="Version candidate : ressource non envoyée. Une proposition réelle nécessiterait validation.";return;}
 const payload={title:document.getElementById("resource-title").value.trim(),url:document.getElementById("resource-url").value.trim(),description:document.getElementById("resource-description").value.trim(),category:document.getElementById("resource-category").value,license:document.getElementById("resource-license").value.trim(),website:document.getElementById("resource-website").value};
 button.disabled=true;status.textContent="Envoi en cours…";
 try{const response=await fetch("https://rpqiwxkaiyokmxbhxfvh.supabase.co/functions/v1/submit-resource",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const data=await response.json().catch(()=>({}));if(!response.ok)throw Error(typeof data.error==="string"?data.error:"Envoi impossible");status.textContent=data.message||"Ressource reçue pour examen.";resourceForm.reset();}
 catch(error){status.textContent="Échec : "+(error.message||"Réessaie plus tard.");}
 finally{button.disabled=false;}
});
async function loadApprovedResources(){
 try{const response=await fetch("https://rpqiwxkaiyokmxbhxfvh.supabase.co/rest/v1/approved_resources?select=title,url,description,category,license&limit=200",{headers:{apikey:"sb_publishable_1DU9r6S02VARRsyBJx2fIg_0Z0bc7DX"}});if(!response.ok)return;const rows=await response.json();const known=new Set(INTERSTICE_RESOURCES.map(r=>r.url));for(const r of rows){if(known.has(r.url))continue;try{const u=new URL(r.url);if(!["https:","http:"].includes(u.protocol))continue;}catch{continue;}INTERSTICE_RESOURCES.push({...r,id:"community-"+INTERSTICE_RESOURCES.length});known.add(r.url);}render();}catch{}}
if(!INTERSTICE_CANDIDATE_MODE)loadApprovedResources();
