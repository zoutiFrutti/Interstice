// 018-D : catalogue local et formulaire de démonstration. Aucun transport réel.
const root=document.getElementById("resources"),count=document.getElementById("count"),search=document.getElementById("search"),category=document.getElementById("category");function render(){const term=search.value.trim().toLocaleLowerCase("fr"),cat=category.value;const rows=INTERSTICE_RESOURCES.filter(r=>(!cat||r.category===cat)&&(!term||[r.title,r.description,r.category].some(v=>v.toLocaleLowerCase("fr").includes(term))));root.replaceChildren();count.textContent=rows.length+" ressource"+(rows.length>1?"s":"")+" trouvée"+(rows.length>1?"s":"");for(const r of rows){const card=document.createElement("article");card.className="resource-card";const tag=document.createElement("p");tag.className="tag";tag.textContent=r.category;const title=document.createElement("h3");title.textContent=r.title;const desc=document.createElement("p");desc.textContent=r.description;const a=document.createElement("a");a.href=r.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent="Consulter la source";const license=document.createElement("small");license.textContent="Réutilisation : "+r.license;card.append(tag,title,desc,a,license);root.append(card);}}search.addEventListener("input",render);category.addEventListener("change",render);render();

const resourceForm=document.getElementById("resource-form");
resourceForm.addEventListener("submit",event=>{
 event.preventDefault();
 if(document.getElementById("resource-submit").disabled)return;
 document.getElementById("resource-status").textContent="Version candidate : ressource non envoyée. Une proposition réelle nécessiterait validation.";
});
