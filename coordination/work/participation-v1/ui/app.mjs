import {STATES,versionComparison} from '/domain.mjs';
const $=id=>document.getElementById(id);
let catalogue={targets:[],research:[],threads:[],arguments:[],flags:{}},selectedResearch=null,moderatorToken='';
function node(tag,text,className){const el=document.createElement(tag);if(text!=null)el.textContent=text;if(className)el.className=className;return el;}
function paragraph(parent,label,value){if(value){const p=node('p');p.append(node('strong',label+' '),document.createTextNode(value));parent.append(p);}}
function references(parent,items=[]){for(const value of items){try{const u=new URL(value);if(!['http:','https:'].includes(u.protocol))continue;const p=node('p'),a=node('a',value);a.href=u.href;a.rel='noreferrer noopener';a.target='_blank';p.append(a);parent.append(p);}catch{}}}
const lines=value=>String(value||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
async function api(path,body,moderation=false){
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),15000);
 try{
  const response=await fetch(path,{method:body===undefined?'GET':'POST',headers:{...(body===undefined?{}:{'Content-Type':'application/json'}),...(moderation&&moderatorToken?{Authorization:'Bearer '+moderatorToken}:{})},body:body===undefined?undefined:JSON.stringify(body),signal:controller.signal,credentials:'same-origin',cache:'no-store'});
  const d=await response.json().catch(()=>null);
  if(!response.ok||!d||(Array.isArray(d)&&path!=='/map-references.json'))throw Error(d?.error||'Réception non confirmée. Ton texte reste dans le formulaire.');
  if(['/api/proposals','/api/contributions'].includes(path)||path.endsWith('/responses')||path.endsWith('/arguments'))if(response.status!==202||!/^[a-f0-9]{64}$/.test(d.receipt)||d.state!=='received')throw Error('Réception non confirmée. Ton texte reste dans le formulaire.');
  return d;
 }catch(error){if(error.name==='AbortError')throw Error('Le délai est dépassé. Réception non confirmée ; garde ton texte avant de réessayer.');throw error;}finally{clearTimeout(timeout);}
}
function receive(result,status){
 $(status).replaceChildren(document.createTextNode('Reçu pour examen. Garde ce reçu privé : '),node('code',result.receipt));
 $('tracking-receipt').value=result.receipt;
 const link=node('a','Consulter le suivi');link.href='#suivi';const p=node('p');p.append(link);$(status).append(p);
}
function bindSubmission(id,status,send){
 $(id).addEventListener('submit',async event=>{event.preventDefault();const button=$(id).querySelector('button[type=submit]');if(button.disabled)return;button.disabled=true;$(status).textContent='Transmission en cours…';
  try{const d=await send(Object.fromEntries(new FormData($(id))));receive(d,status);$(id).reset();}catch(error){$(status).textContent=error.message;}finally{button.disabled=false;}
 });
}
bindSubmission('proposal-form','proposal-status',d=>api('/api/proposals',{...d,area:d.area||'',references:lines(d.references)}));
function target(){return catalogue.targets.find(t=>t.id===$('target-select').value);}
function context(){
 const t=target();
 $('contribution-form').querySelector('button').disabled=!t||(selectedResearch?(!catalogue.flags.research||selectedResearch.state!=='open'):!catalogue.flags.contributions);$('contribution-context').textContent=t?(selectedResearch?'Répondre à '+selectedResearch.id+' — ':'Contribuer à ')+t.title+' · '+t.id:'';
 const detail=$('target-detail');detail.replaceChildren();if(t){detail.append(node('h3',t.title),node('p',t.body));paragraph(detail,'Référence stable :',t.id);paragraph(detail,'Révision :',t.version);}else detail.append(node('p','Aucune fiche ouverte aux contributions pour le moment.'));
}
$('target-select').onchange=()=>{selectedResearch=null;context();};
$('article-contribute').onclick=()=>{selectedResearch=null;context();};
bindSubmission('contribution-form','contribution-status',d=>{
 const t=target();if(!t)throw Error('Aucune fiche sélectionnée.');
 return api(selectedResearch?'/api/research/'+encodeURIComponent(selectedResearch.id)+'/responses':'/api/contributions',{...d,targetId:t.id,version:t.version,rightsDeclared:d.rightsDeclared==='on',references:lines(d.references)});
});
$('tracking-form').onsubmit=async event=>{event.preventDefault();$('tracking-status').textContent='Recherche du reçu…';$('tracking-detail').replaceChildren();try{
 const d=await api('/api/track',{receipt:$('tracking-receipt').value.trim()});const box=node('div',null,'card');box.append(node('h3',STATES[d.state]||d.state));paragraph(box,'Motif :',d.reason||'En attente d’examen.');paragraph(box,'Vérification documentaire :',d.documentary==='verified'?'Vérification humaine consignée.':'À effectuer.');paragraph(box,'Validation éditoriale :','À effectuer ; aucune intégration ni publication autorisée par ce suivi.');$('tracking-detail').append(box);$('tracking-status').textContent='Suivi retrouvé.';
 }catch(error){$('tracking-status').textContent=error.message;}};
function renderResearch(rows){
 $('research-list').replaceChildren();$('filter-status').textContent=rows.length+' recherche(s) affichée(s).';
 for(const r of rows){const card=node('article',null,'card');card.append(node('h3',r.title));paragraph(card,'Référence :',r.id);paragraph(card,'État :',r.state==='open'?'Ouverte':'Close');paragraph(card,'Suivi documentaire :',(r.receivedCount||0)+' apport(s) reçu(s), '+(r.verifiedCount||0)+' vérification(s) consignée(s).');
 const dl=node('dl');for(const [label,key] of [['Question','question'],['Document','document'],['Institution','institution'],['Secteur public','area'],['Cote ou page','locator'],['Conditions','conditions'],['Consignes','instructions'],['Preuve attendue','expectedProof']]){dl.append(node('dt',label),node('dd',r[key]||'À préciser'));}card.append(dl);references(card,r.references);
 for(const h of r.history||[])paragraph(card,h.state==='closed'?'Clôture motivée :':'Réouverture motivée :',h.reason);
 if(r.state==='open'){const button=node('button','Contribuer à cette recherche');button.type='button';button.disabled=!catalogue.flags.research;button.onclick=()=>{selectedResearch=r;$('target-select').value=r.target_id;context();location.hash='contribution';$('contribution-kind').focus();};card.append(button);}
 $('research-list').append(card);}
}
$('filter-form').onsubmit=async e=>{e.preventDefault();try{const c=await api('/api/catalog?'+new URLSearchParams(new FormData(e.currentTarget)));renderResearch(c.research);}catch(error){$('filter-status').textContent=error.message;}};
function renderDiscussion(){
 const thread=catalogue.threads[0];$('thread-detail').replaceChildren();$('arguments').replaceChildren();if(!thread)return;
 $('thread-detail').append(node('h3',thread.title),node('p',thread.context));
 if(thread.decision){const d=thread.decision;const box=node('div',null,'card');box.append(node('h3','Décision motivée'));for(const [label,key] of [['Décision :','reason'],['Accords :','agreements'],['Désaccords conservés :','disagreements'],['Suites :','nextSteps']])paragraph(box,label,d[key]);$('thread-detail').append(box);}
 for(const a of catalogue.arguments.filter(x=>x.thread_id===thread.id)){const card=node('article',null,'card');card.append(node('h3',a.kind),node('p',a.body));references(card,a.references);$('arguments').append(card);}
 $('argument-form').querySelector('button').disabled=!catalogue.flags.discussion||!!thread.decision;
}
bindSubmission('argument-form','argument-status',d=>{const t=catalogue.threads[0];if(!t)throw Error('Discussion indisponible.');return api('/api/threads/'+t.id+'/arguments',{...d,references:lines(d.references)});});
async function loadCatalogue(){
 const previous=$('target-select').value;catalogue=await api('/api/catalog');
 $('demo-notice').textContent=catalogue.demo?'Démonstration fictive : les envois restent dans une base de test temporaire. Aucun document, lieu ou événement présenté ici n’est une donnée réelle.':'Candidate fermée : aucun envoi public activé.';
 $('target-select').replaceChildren();for(const t of catalogue.targets){const o=node('option',t.title);o.value=t.id;$('target-select').append(o);}if(catalogue.targets.some(t=>t.id===previous))$('target-select').value=previous;context();
 $('proposal-form').querySelector('button').disabled=!catalogue.flags.proposals;
 if(selectedResearch)selectedResearch=catalogue.research.find(r=>r.id===selectedResearch.id)||null;context();
 $('demo-login').hidden=!catalogue.demo;$('moderator-login').hidden=catalogue.demo;
 renderResearch(catalogue.research);renderDiscussion();
}
function comparison(card,record){
 const original=record.original_body||'Version d’origine indisponible ; relecture nécessaire.';
 const compared=versionComparison(original,record.body);const box=node('div',null,'comparison');
 for(const [title,value] of [['Version de la fiche',compared.original],['Apport proposé',compared.proposed]]){const part=node('div');part.append(node('h4',title),node('pre',value));box.append(part);}card.append(box);
}
function reviewForm(card,record,kind){
 if(record.state==='rejected')return;
 const form=node('form');const id=kind+'-'+record.id;
 const select=node('select');select.id=id+'-state';const label=node('label','Suite proposée');label.htmlFor=select.id;
 const states=record.state==='received'?['examined','rejected']:record.state==='examined'?['instruction','rejected']:['examined','rejected'];for(const value of states){const o=node('option',kind==='argument'&&value==='instruction'?'Afficher cet argument modéré':STATES[value]);o.value=value;select.append(o);}form.append(label,select);
 const reason=node('textarea');reason.id=id+'-reason';reason.required=true;reason.maxLength=1000;const reasonLabel=node('label','Motif destiné au suivi');reasonLabel.htmlFor=reason.id;form.append(reasonLabel,reason);
 let verified,rights;
 if(kind==='contribution'){for(const [name,title] of [['verified','J’ai vérifié la référence et ce qu’elle permet d’affirmer.'],['rights','J’ai examiné les droits et les conditions de réutilisation.']]){const l=node('label',null,'check'),check=node('input');check.type='checkbox';l.append(check,document.createTextNode(title));form.append(l);if(name==='verified')verified=check;else rights=check;}}
 const button=node('button','Enregistrer le traitement');button.type='submit';const feedback=node('p');feedback.setAttribute('role','status');form.append(button,feedback);
 form.onsubmit=async event=>{event.preventDefault();button.disabled=true;try{await api('/api/moderation/'+kind+'/'+record.id,{state:select.value,reason:reason.value,version:record.version,verified:!!verified?.checked,rightsChecked:!!rights?.checked},true);await loadCatalogue();await queue();$('moderation-status').textContent='Décision enregistrée. Aucun contenu éditorial publié.';}catch(error){feedback.textContent=error.message;button.disabled=false;}};card.append(form);
}
async function queue(){
 try{const data=await api('/api/moderation',undefined,true);$('moderation-queue').replaceChildren();
  for(const [key,kind] of [['proposals','proposal'],['contributions','contribution'],['arguments','argument']])for(const r of data[key]){
   const card=node('article',null,'card');card.append(node('h3',r.title||r.target_id||r.kind));paragraph(card,'État :',STATES[r.state]);
   if(kind==='contribution'){comparison(card,r);paragraph(card,'Provenance :',r.provenance);paragraph(card,'Cote/page :',r.locator);paragraph(card,'Droits déclarés :',r.rights_note);}else paragraph(card,'Apport :',r.need||r.body||r.offer);
   references(card,r.references||r.source_references);
   for(const h of r.history||[])paragraph(card,'Historique :',(STATES[h.state]||h.state)+' — '+h.reason);
   reviewForm(card,r,kind);$('moderation-queue').append(card);
  }
  $('moderation-status').textContent='File chargée. Les reçus privés ne sont pas affichés.';management();
 }catch(error){$('moderation-status').textContent=error.message;$('moderation-queue').replaceChildren();$('research-management').replaceChildren();$('thread-management').replaceChildren();}
}
function management(){
 $('research-management').replaceChildren();for(const r of catalogue.research){const form=node('form',null,'card');form.append(node('h3',r.id+' · '+(r.state==='open'?'Clôturer':'Rouvrir')));const reason=node('textarea');reason.id='research-'+r.id;reason.required=true;reason.maxLength=1000;const label=node('label','Motif public, sans information personnelle');label.htmlFor=reason.id;const button=node('button',r.state==='open'?'Clôturer avec preuve vérifiée':'Rouvrir la recherche');button.type='submit';const status=node('p');status.setAttribute('role','status');form.append(label,reason,button,status);form.onsubmit=async e=>{e.preventDefault();button.disabled=true;try{await api('/api/moderation/research/'+r.id,{version:r.version,state:r.state==='open'?'closed':'open',reason:reason.value},true);await loadCatalogue();management();}catch(error){status.textContent=error.message;button.disabled=false;}};$('research-management').append(form);}
 $('thread-management').replaceChildren();for(const t of catalogue.threads.filter(t=>!t.decision)){const form=node('form',null,'card');form.append(node('h3','Consigner la décision de discussion'));const fields={};for(const [key,title] of [['reason','Décision motivée'],['agreements','Points d’accord'],['disagreements','Désaccords conservés'],['nextSteps','Suites prévues']]){const field=node('textarea');field.id=t.id+'-'+key;field.required=true;field.maxLength=key==='agreements'||key==='disagreements'?2000:1000;const label=node('label',title);label.htmlFor=field.id;form.append(label,field);fields[key]=field;}const button=node('button','Consigner la décision');button.type='submit';const status=node('p');status.setAttribute('role','status');form.append(button,status);form.onsubmit=async e=>{e.preventDefault();button.disabled=true;try{await api('/api/moderation/threads/'+t.id,{version:t.version,...Object.fromEntries(Object.entries(fields).map(([key,value])=>[key,value.value]))},true);await loadCatalogue();management();}catch(error){status.textContent=error.message;button.disabled=false;}};$('thread-management').append(form);}
}
$('demo-login').onclick=async()=>{try{await api('/api/demo-session',{});await queue();}catch(error){$('moderation-status').textContent=error.message;}};
$('moderator-login').onsubmit=async e=>{e.preventDefault();moderatorToken=$('moderator-token').value;$('moderator-token').value='';await queue();};$('refresh-queue').onclick=queue;
try{await loadCatalogue();const rows=await api('/map-references.json');for(const r of rows){const box=node('div',null,'card');box.append(node('h3',r.title),node('p',r.area));references(box,[r.canonicalUrl]);$('map-list').append(box);}}catch(error){$('demo-notice').textContent='Parcours indisponible : '+error.message;}
