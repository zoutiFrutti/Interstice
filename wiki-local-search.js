/* Filtrage local des titres du Wiki existant. Aucun réseau, compte ou collecte. */
const input=document.getElementById("wiki-local-query");
const items=[...document.querySelectorAll("#wiki-local-results li")];
const status=document.getElementById("wiki-local-count");
const normal=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("fr").trim();
input?.addEventListener("input",()=>{
 const term=normal(input.value);
 let visible=0;
 for(const li of items){
  const match=normal(li.dataset.search||li.textContent).includes(term);
  li.hidden=!match;if(match)visible++;
 }
 status.textContent=visible+" page(s) existante(s) correspondante(s) · relecture en cours";
});
