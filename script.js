const $=id=>document.getElementById(id);
$("form").addEventListener("submit",async e=>{
 e.preventDefault();
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