// 018-D : copie de démonstration isolée. Aucun transport vers un service réel.
const $=id=>document.getElementById(id);
$("form").addEventListener("submit",event=>{
 event.preventDefault();
 if($("submit").disabled)return;
 const need=$("besoin").value.trim(),offer=$("partage").value.trim();
 if(!need&&!offer){
  $("etat").textContent="Indique au moins un besoin ou une ressource.";
  return;
 }
 $("etat").textContent="Version candidate : proposition non transmise, aucune publication ni contact. La validation réelle est une fonctionnalité distincte.";
});
$("liste-propositions").textContent="Consultation des propositions réelles désactivée dans cette candidate. Voir les exemples fictifs via Découvrir.";
