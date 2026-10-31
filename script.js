const $=id=>document.getElementById(id);
$("form").addEventListener("submit",async e=>{
 e.preventDefault();
 $("etat").textContent="Envoi suspendu dans cette version candidate jusqu’à validation des protections des données.";
 return;
 const need=$("besoin").value.trim(),offer=$("partage").value.trim(),area=$("lieu").value.trim(),category=$("categorie").value||"Idées et projets";
 if(!need&&!offer){$("etat").textContent="Indique au moins un besoin ou une ressource.";return;}
 const button=$("submit");button.disabled=true;$("etat").textContent="Envoi en cours…";
 try{
 const response=await fetch("https://rpqiwxkaiyokmxbhxfvh.supabase.co/functions/v1/submit-proposal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({need,offer,area,category,website:$("website").value})});
 const data=await response.json();
 if(!response.ok)throw new Error(data.error||"Envoi impossible.");
 $("etat").textContent=data.message||"Proposition reçue pour examen.";
 $("form").reset();
 }catch(err){$("etat").textContent="Échec de l'envoi : "+(err.message||"Réessaie plus tard.");}
 finally{button.disabled=false;}
});
const publicList=$("liste-propositions");
async function loadPublicProposals(){
 try{
  const response=await fetch("https://rpqiwxkaiyokmxbhxfvh.supabase.co/rest/v1/public_proposals?select=public_ref,category,need_text,offer_text,area_text,published_at&order=published_at.desc&limit=30",{
   headers:{"apikey":"sb_publishable_1DU9r6S02VARRsyBJx2fIg_0Z0bc7DX"}
  });
  if(!response.ok)throw new Error("Chargement impossible");
  const items=await response.json();
  publicList.replaceChildren();
  if(!items.length){const p=document.createElement("p");p.textContent="Aucune proposition validée pour le moment.";publicList.append(p);return;}
  for(const item of items){
   const card=document.createElement("article");card.className="proposal";
   const title=document.createElement("h3");title.textContent=item.category||"Proposition";card.append(title);
   for(const [label,value] of [["Besoin",item.need_text],["Ressource",item.offer_text],["Secteur",item.area_text]]){
    if(value){const p=document.createElement("p");const strong=document.createElement("strong");strong.textContent=label+" : ";p.append(strong,document.createTextNode(value));card.append(p);}
   }
   if(item.public_ref){const small=document.createElement("small");small.textContent="Référence : "+item.public_ref;card.append(small);}
   publicList.append(card);
  }
 }catch(error){publicList.textContent="Les propositions publiques sont momentanément indisponibles.";}
}
loadPublicProposals();
