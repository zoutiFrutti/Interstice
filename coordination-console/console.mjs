import {STATE_KEYS,FILTERS,parseRoute,filterMissions,summarize,prepareMission,validateSeed,ALLOWED_ROLES,coordinationRows} from './model.mjs';

import {observeCandidate} from './github-observer.mjs';

const view=document.querySelector('#view'),status=document.querySelector('#status');
let seed=null,query='',lastOverview='#missions',githubObservation=null;
const el=(tag,text,className)=>{const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;};
const link=(label,href,className='')=>{const node=el('a',label,className);node.href=href;return node;};
function external(label,href,className=''){
  try{const u=new URL(href);if(u.origin!=='https://github.com'||!u.pathname.startsWith('/zoutiFrutti/Interstice/'))return el('span',label,className);}catch{return el('span',label,className);}
  const a=link(label,href,className);a.target='_blank';a.rel='noopener noreferrer';return a;
}
const nameOf=id=>seed.ateliers.find(a=>a.id===id)?.name||id;
const date=value=>{if(!value)return'Date non attestée';const d=new Date(value.length===10?value+'T12:00:00Z':value);return Number.isFinite(d.getTime())?new Intl.DateTimeFormat('fr-FR',{dateStyle:'short',...(value.length>10?{timeStyle:'short'}:{}),timeZone:'Europe/Paris'}).format(d):'Date non attestée';};
function heading(title,eyebrow,description){
  const block=el('div',undefined,'view-top'),copy=el('div',undefined,'intro-copy');
  copy.append(el('p',eyebrow,'eyebrow'));const h=el('h1',title);h.tabIndex=-1;copy.append(h,el('p',description));block.append(copy);return block;
}
function summaryCards(){
  const totals=summarize(seed),grid=el('div',undefined,'summary-grid');
  for(const [count,label,note,filter] of [[totals.reserves,'Réserves signalées','Blocages déclarés, pas une mesure d’activité.','blocages'],[totals.controlsUnattested,'Contrôles non attestés','Une CI ne remplace pas une réception.','controles'],[totals.notValidated,'Visas non accordés','Décisions humaines, jamais automatiques.','decisions']]){
    const a=link('','#missions?filtre='+filter,'summary-card');a.append(el('strong',String(count)),el('span',label),el('small',note));grid.append(a);
  }
  return grid;
}
function missionCard(m){
  const a=link('','#mission/'+encodeURIComponent(m.id),'mission-card');a.dataset.id=m.id;
  const meta=el('div',undefined,'mission-meta');meta.append(el('span',m.id),el('span',m.priority,'priority'));
  a.append(meta,el('h3',m.objective),el('p',m.ateliers.map(nameOf).join(' · '),'muted'));
  const signals=el('div',undefined,'mission-signals');
  for(const label of [m.states.livree===true?'Livraison candidate documentée':'Livraison non attestée',m.states.recue===true?'Accusé spécifique':'Réception inconnue']){const span=el('span');span.append(el('i',undefined,'signal-dot'),document.createTextNode(label));signals.append(span);}
  a.append(signals);return a;
}
function appendMissions(container,filter){
  container.replaceChildren();const items=filterMissions(seed,filter,query);
  if(items.length)for(const mission of items)container.append(missionCard(mission));
  else container.append(el('p','Aucune mission de cet instantané ne correspond à cette recherche.','empty'));
  document.querySelector('#mission-count').textContent=items.length+' mission'+(items.length>1?'s':'')+' dans cette sélection publique';
}
function executionList(runs){
  const list=el('ul',undefined,'execution-list');
  for(const run of runs){
    const li=el('li'),result=run.conclusion==='success'?'Réussi techniquement':run.conclusion==='failure'?'Échec technique':'État GitHub : '+run.status;
    li.append(el('span',result,'technical-result '+(run.conclusion==='failure'?'failure':'')),external(run.name+' ↗',run.url));
    const meta=el('div',undefined,'run-meta');const time=el('time',date(run.updated_at)+' · Paris');time.dateTime=run.updated_at;
    meta.append(time,el('span','HEAD '+run.head.slice(0,12)),el('span','Événement : '+run.event));li.append(meta);list.append(li);
  }return list;
}
function coordinationTable(){
  const section=el('section',undefined,'coordination-summary');
  const h=el('h2','Tableau unique des missions');h.id='coordination-table-title';
  const note=el('p','Responsable, PR et états issus du même instantané documentaire. Une PR apparentée ne prouve pas la livraison de la mission.','small muted');
  const scroll=el('div',undefined,'coordination-table-scroll');
  const table=el('table',undefined,'coordination-table');table.setAttribute('aria-labelledby','coordination-table-title');
  const head=el('thead'),header=el('tr');
  for(const label of ['Mission','Responsable(s)','PR reliées','État vérifiable','Blocage','Prochaine action']){
    header.append(el('th',label));
  }
  head.append(header);table.append(head);
  const body=el('tbody');
  for(const m of coordinationRows(seed)){
    const tr=el('tr'),id=el('td'),owner=el('td'),prs=el('td'),state=el('td'),block=el('td'),next=el('td');
    id.append(link(m.id,'#mission/'+encodeURIComponent(m.id)));
    owner.textContent=m.ateliers.map(nameOf).join(', ');
    if(!m.prs.length)prs.append(el('span','Aucune PR propre attestée'));
    for(const p of m.prs){
      if(prs.childNodes.length)prs.append(document.createTextNode(' · '));
      prs.append(external('#'+p.number+' ('+({livrable_documentaire:'livrable candidat',anteriorite:'antériorité',dependance_technique:'dépendance'}[p.nature])+')',p.reference.url));
    }
    state.textContent=m.status;block.textContent=m.blockage;next.textContent=m.nextAction;
    tr.append(id,owner,prs,state,block,next);body.append(tr);
  }
  table.append(body);scroll.append(table);section.append(h,note,scroll);
  return section;
}
function overview(route){
  lastOverview=location.hash||'#missions';const top=heading('Ce qui circule','LA FAILLE NOIRE × INTERSTICE','Les missions, les pièces déposées et les décisions qui restent à prendre.');
  top.append(link('Préparer une mission · simulation','#preparer','prepare-link'));view.append(top,summaryCards());
  const t=summarize(seed);
  view.append(el('p',t.declaredInProgress?`${t.declaredInProgress} commencement(s) déclaré(s), à confronter aux preuves.`:'Aucune activité en cours n’est attestée dans cette sélection. '+t.unknownProgress+' commencements restent inconnus. Ce constat ne signifie pas que les ateliers ne travaillent pas.','overview-note'));
  view.append(el('p','Registre documentaire du '+date(seed.source_snapshot)+' · relevé public du '+date(seed.observed_on)+' · '+t.declaredDeliveries+' livraison candidate documentée.','small muted'));
  view.append(coordinationTable());
  if(seed.c07_catalogue){
    const proof=seed.c07_catalogue, section=el('section',undefined,'overview-note');section.id='catalogue-proof';
    section.append(el('h2','Contrôle automatique du registre réel'),
      el('p',proof.resources_checked+' objets · '+proof.batches+' lots · '+proof.tasks_completed+' tâches exécutées sans IA'),
      el('p','État : '+proof.status+' · relevé du '+date(proof.observed_at)),
      el('p',proof.canonical_url_present+' URL canoniques renseignées ; '+proof.canonical_url_absent+' absentes du champ. Des dossiers sont internes : ce nombre ne signifie pas autant d’erreurs.'),
      el('p','Empreinte de la source : '+proof.source_sha256));
    if(proof.source_commit)section.append(external('Données contrôlées : '+proof.source_commit.slice(0,12)+' ↗','https://github.com/zoutiFrutti/Interstice/tree/'+proof.source_commit));
    const inventory=proof.documentary_inventory;
    if(inventory){
      section.append(el('h3','Réserves documentaires conservées'),
        el('p',inventory.thematic_objections+' objections thématiques + '+inventory.transverse_reserves+' réserves transversales · '+inventory.work_reserves+' réserves WORK · '+inventory.documentary_relations+' relations · '+inventory.fn_notices+' notices FN'),
        el('p',inventory.retained_with_reservations+' fiches retenues avec réserves ; '+inventory.not_selected_in_review+' non sélectionnée dans ce lot. Aucun nouveau visa de publication.'),
        el('p',inventory.held_resources+' ressources en attente spécialisée. PAR-005 reste bloqué. Les choix éditoriaux, les droits et la publication sont contrôlés séparément.'));
    }
    for(const limit of proof.limits)section.append(el('p',limit));
    section.append(el('p','Aucune décision humaine, publication ou validation éditoriale déduite de ces contrôles. Les résultats complets sont conservés dans les artefacts C07.'));
    view.append(section);
  }
  if(seed.c07_execution){
    const proof=seed.c07_execution, section=el('section',undefined,'overview-note');
    section.append(el('h2','Test de validation · décision simulée'),el('p',proof.mission_id+' · '+proof.status+' · '+proof.report.bilan.terminees_deterministes+' tâches exécutées'),el('p','Médiathèque : doublons URL. Lectrice : format des URL. Relieuse : consolidation. Aucun site consulté.'),el('p','La décision de reprise est simulée dans ce test. Aucun visa de Zout, aucune publication.'),el('p','Empreinte du résultat : '+proof.report_hash));
    const list=el('ol');for(const event of proof.history)list.append(el('li',event.action+' · '+date(event.at)));section.append(list);view.append(section);
  }

  const filters=el('nav',undefined,'filter-bar');filters.setAttribute('aria-label','Filtres des missions');
  const labels={toutes:'Toutes',blocages:'Blocages déclarés',controles:'Contrôles',decisions:'Décisions'};
  for(const f of FILTERS){const a=link(labels[f],'#missions?filtre='+f);a.setAttribute('aria-current',String(route.filter===f));filters.append(a);}view.append(filters);
  const label=el('label',undefined,'search');label.htmlFor='mission-search';label.append(document.createTextNode('Chercher une mission ou un atelier'));
  const input=el('input');input.id='mission-search';input.type='search';input.placeholder='Identifiant, sujet, atelier…';input.value=query;label.append(input);view.append(label);
  const count=el('p',undefined,'result-count');count.id='mission-count';count.setAttribute('aria-live','polite');const list=el('div',undefined,'mission-list');view.append(count,list);appendMissions(list,route.filter);
  input.addEventListener('input',()=>{query=input.value;appendMissions(list,route.filter);});
  const row=el('div',undefined,'section-heading');row.append(el('h2','Derniers contrôles relevés'),link('Toutes les preuves','#preuves'));view.append(row,executionList(seed.executions.slice(0,3)));
}
function ateliers(){
  view.append(heading('Les ateliers','19 PROFILS DOCUMENTÉS','Des domaines distincts, sans présumer qu’un atelier est connecté, actif ou en train d’exécuter une mission.'));
  view.append(el('p','Le registre rassemble 19 profils. La messagerie C10 possède 17 boîtes historiques : ce ne sont pas deux boîtes nouvelles.','overview-note'));
  const profiles=el('div',undefined,'profiles');
  seed.ateliers.forEach((atelier,index)=>{
    const article=el('article',undefined,'profile');article.dataset.role=atelier.id;
    const title=el('div',undefined,'profile-head');title.append(el('span',String(index+1).padStart(2,'0'),'profile-mark'),el('h2',atelier.name));
    article.append(title,el('p',atelier.domain),el('p','Activité non attestée','no-activity'));
    const missions=el('div',undefined,'profile-missions');
    for(const id of atelier.registered_missions){const m=seed.missions.find(m=>m.id===id);missions.append(m?link(id,'#mission/'+id):external(id+' · registre ↗',seed.source_registry.url));}
    if(!atelier.registered_missions.length)article.append(el('p','Aucune mission affectée dans ce relevé.','small muted'));
    article.append(missions,external('Source du domaine ↗',atelier.source,'source-link'));profiles.append(article);
  });view.append(profiles);
}
function preuves(){
  view.append(heading('Ce qui est attesté','PIÈCES · CONTRÔLES · LIMITES','Des liens GitHub datés. Un succès technique ne valide ni une source historique ni le travail d’un atelier.'));
  view.append(el('p',seed.freshness_note,'overview-note'),executionList(seed.executions));
  const h=el('h2','Livraisons candidates');view.append(h);
  for(const mission of seed.missions.filter(m=>m.deliverables.length)){
    const block=el('section',undefined,'detail-block');block.append(link(mission.id,'#mission/'+mission.id));
    for(const proof of mission.deliverables)block.append(proofCard(proof));view.append(block);
  }
  view.append(el('h2','Références candidates'));
  const references=el('ul',undefined,'execution-list');for(const pr of seed.references){const li=el('li');li.append(external('#'+pr.number+' · '+pr.title+' ↗',pr.url));const meta=el('p','Brouillon '+(pr.draft?'oui':'non')+' · non fusionnée · HEAD '+pr.head.slice(0,12),'small muted');li.append(meta);references.append(li);}view.append(references);
  const details=el('details',undefined,'detail-block');details.append(el('summary','Ce que ces preuves ne permettent pas de conclure'));const list=el('ul');for(const warning of seed.warnings)list.append(el('li',warning));details.append(list);view.append(details);
}
function proofCard(proof){
  const block=el('div',undefined,'source-card');block.append(external(proof.path||proof.id,proof.url));
  block.append(el('p','Commit '+proof.commit_sha,'fingerprint'));if(proof.blob_sha)block.append(el('p','Blob '+proof.blob_sha,'fingerprint'));
  block.append(el('p',proof.warning||proof.notes));
  block.append(el('p',proof.verified_in_this_pass?'Fichier revérifié le '+date(proof.observed_on)+'. Réception et validation non déduites.':'Antériorité référencée le '+date(proof.verified_at)+' ; pas une livraison de la mission actuelle.'));
  return block;
}
function missionDetail(id){
  const m=seed.missions.find(m=>m.id===id);
  const crumb=el('div',undefined,'breadcrumb');crumb.append(link('← Ce qui circule',lastOverview),el('span',id));view.append(crumb);
  if(!m){view.append(heading('Mission hors de la sélection','SOURCE À CONSULTER','Cet aperçu ne reconstruit pas les missions absentes de ses données.'));view.append(external('Consulter le registre complet ↗',seed.source_registry.url));return;}
  view.append(el('p',m.id+' · '+m.priority,'eyebrow'));const title=el('h1',m.objective,'mission-detail-title');title.tabIndex=-1;view.append(title,el('p',m.ateliers.map(nameOf).join(' · '),'muted'));
  view.append(el('p','Objectif affiché : prochaine action du registre C03, sans nouvel ordre d’exécution.','small muted'));
  const stateTitle=el('h2','Sept statuts, séparément');stateTitle.id='state-title';view.append(stateTitle,el('p','Ces dimensions sont indépendantes. Inconnu n’est pas « non fait ». Aucun accusé ou visa n’est créé par cette interface.','independent-note'));
  const states=el('dl',undefined,'state-grid');states.setAttribute('aria-labelledby','state-title');
  for(const key of STATE_KEYS){const box=el('div',undefined,'state-item'),dt=el('dt'),dd=el('dd');box.dataset.state=key;box.dataset.value=String(m.states[key]);dt.append(el('strong',seed.status_labels[key]));dd.append(el('span',m.states[key]===null?'Inconnu':m.states[key]?'Oui, déclaré':'Non dans la source'));box.append(dt,dd);states.append(box);}view.append(states);
  view.append(el('p','Source des états : registre du '+date(m.state_provenance.source_date)+', consulté le '+date(m.state_provenance.observed_on)+'.','small muted'));
  const grid=el('div',undefined,'detail-grid');
  const reserves=el('section',undefined,'detail-block');reserves.append(el('h2','Réserves conservées'));const list=el('ul');for(const reserve of m.reserves)list.append(el('li',reserve));reserves.append(list);grid.append(reserves);
  const dependencies=el('section',undefined,'detail-block');dependencies.append(el('h2','Autres fils à reprendre'));const links=el('div',undefined,'dependencies');
  for(const dep of m.dependencies)links.append(seed.missions.some(x=>x.id===dep)?link(dep,'#mission/'+dep):external(dep+' ↗',seed.source_registry.url));dependencies.append(links,el('p',m.dependency_semantics,'small muted'));grid.append(dependencies);view.append(grid);
  view.append(el('h2','Livrables de cette mission'));
  if(m.deliverables.length)for(const proof of m.deliverables)view.append(proofCard(proof));else view.append(el('p','Aucun livrable de cette mission n’est attesté dans cet instantané. Une ancienne pièce ne le remplace pas.','overview-note'));
  if(m.prior_evidence.length){view.append(el('h2','Pièces antérieures'));for(const proof of m.prior_evidence)view.append(proofCard(proof));}
  view.append(el('h2','Décision humaine nécessaire'));for(const decision of m.human_decisions)view.append(el('p',decision,'decision-note'));
  for(const source of m.sources){const box=el('div',undefined,'source-card');box.append(external('Lire les états et dépendances dans leur source ↗',source.url),el('p',source.path,'fingerprint'),el('p','Commit '+source.commit+' · Blob '+source.blob,'fingerprint'));view.append(box);}
  view.append(link('← Revenir à la vue des missions',lastOverview,'quiet-return'));
}
function preparation(){
  view.append(heading('Préparer, sans envoyer','SIMULATION LOCALE','Écrire un brouillon pour comprendre le contrat C11. Aucun appel GitHub, aucune Issue, aucune IA.'));
  view.append(el('p','Ne saisir aucune donnée personnelle ou confidentielle. Ce formulaire de démonstration travaille seulement dans la mémoire de cet onglet.','overview-note'));
  const form=el('form',undefined,'demo-form');form.noValidate=true;form.id='prepare-form';
  const field=(labelText,id,input,help)=>{const label=el('label',undefined,'field');label.htmlFor=id;input.id=id;label.append(document.createTextNode(labelText),input);if(help)label.append(el('small',help));form.append(label);return input;};
  const id=field('Identifiant de démonstration','draft-id',el('input'),'Lettres, chiffres, tirets et traits bas.');id.value='DEMO-C11-LOCAL';id.maxLength=80;
  const objective=field('Objectif du brouillon','draft-objective',el('textarea'));objective.value='Simulation locale de préparation, non envoyée.';objective.maxLength=2000;
  const atelier=field('Atelier admis par C11','draft-atelier',el('select'),'17 rôles admis dans le normaliseur C11 de main. Le registre documentaire en décrit 19, sans modifier ce contrat.');
  for(const role of ALLOWED_ROLES){const option=el('option',nameOf(role));option.value=role;atelier.append(option);}atelier.value='lectrice';
  const actions=el('div',undefined,'form-actions');const build=el('button','Générer le brouillon local');build.type='submit';
  const trigger=el('button','Déclencher une exécution');trigger.type='button';trigger.disabled=true;trigger.id='trigger-execution';trigger.setAttribute('aria-describedby','disabled-reason');actions.append(build,trigger);form.append(actions,el('p','Déclenchement indisponible : aucun backend authentifié et autorisé n’est raccordé.','small muted'));form.lastChild.id='disabled-reason';
  const error=el('p','','error');error.id='prepare-error';error.setAttribute('role','alert');form.append(error);view.append(form);
  const output=el('section',undefined,'draft');output.id='draft-output';output.hidden=true;view.append(output);
  form.addEventListener('submit',event=>{
    event.preventDefault();error.textContent='';
    try{
      const draft=prepareMission({id:id.value,objectif:objective.value,ateliers:[atelier.value]});
      output.replaceChildren();const h=el('h2','Brouillon local — rien envoyé');h.tabIndex=-1;
      output.append(h,el('p','Aucune mission transmise. Aucun atelier lancé. Aucun état du registre modifié.','decision-note'),el('pre',JSON.stringify(draft,null,2)));output.hidden=false;h.focus({preventScroll:true});output.scrollIntoView({block:'start',behavior:'instant'});status.textContent='Brouillon de simulation généré dans cet onglet uniquement.';
    }catch(reason){error.textContent=reason.message;error.scrollIntoView({block:'center',behavior:'instant'});}
  });
  view.append(external('Contrat C11 : normaliseur présent sur main ↗',seed.preparation_example.source));
}
function githubSection(){
  const section=el('section',undefined,'github-observation overview-note');
  section.id='github-observation';
  const title=el('h2','État GitHub de la candidate');
  const refresh=el('button','Actualiser les états GitHub');refresh.type='button';
  const output=el('div');output.id='github-observation-result';output.setAttribute('aria-live','polite');
  const paint=observation=>{
    output.replaceChildren();
    if(!observation){output.append(el('p','Non vérifié dans cette session. Actualisez pour lire le commit et les contrôles actuels.'));return;}
    output.append(external('PR #186 · commit '+observation.head.slice(0,12),observation.pr_url),
      el('p','Lecture GitHub du '+date(observation.observed_at)+' · ces contrôles ne valident aucun contenu éditorial.'));
    if(!observation.complete)output.append(el('p','Relevé partiel : tous les contrôles ne sont pas représentés.'));
    if(!observation.runs.length)output.append(el('p','Aucune exécution attestée pour ce commit.'));
    const list=el('ul');
    for(const run of observation.runs){
      const state=run.status==='completed'?(run.conclusion==='success'?'Réussi':run.conclusion==='failure'?'Échec':run.conclusion||'Conclusion inconnue'):'En attente ou en cours · '+run.status;
      const item=el('li');item.append(external(run.name+' · '+state,run.url));list.append(item);
    }output.append(list);
    const proofs=el('ul');
    for(const artifact of observation.artifacts){const item=el('li');
      item.append(artifact.expired?el('span',artifact.name+' · artefact expiré'):external('Résultat récupérable : '+artifact.name,artifact.url));proofs.append(item);}
    output.append(el('p','Artefacts C07 : '+observation.artifact_state),proofs);
  };
  paint(githubObservation);
  refresh.addEventListener('click',async()=>{
    refresh.disabled=true;output.replaceChildren(el('p','Lecture des métadonnées publiques GitHub…'));
    try{githubObservation=await observeCandidate();paint(githubObservation);}
    catch(error){
      output.replaceChildren(el('p','État actuel INCONNU · '+(error.code||'ECHEC_TECHNIQUE')+'. Aucun ancien succès ne vaut résultat actuel.'));
      if(githubObservation)output.append(el('p','Dernier relevé conservé en mémoire : '+date(githubObservation.observed_at)+', commit '+githubObservation.head.slice(0,12)+'.'));
    }finally{refresh.disabled=false;}
  });
  section.append(title,el('p','Lecture seule, sans connexion GitHub ni déclenchement d’atelier. Le registre documentaire reste distinct des exécutions techniques.'),refresh,output);
  view.append(section);
}
function render({focus=true}={}){
  if(!seed)return;const route=parseRoute(location.hash);view.replaceChildren();
  const active=route.view==='mission'||route.view==='preparer'?'missions':route.view;
  for(const a of document.querySelectorAll('[data-view]')){if(a.dataset.view===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
  if(route.view==='ateliers')ateliers();else if(route.view==='preuves')preuves();else if(route.view==='mission')missionDetail(route.id);else if(route.view==='preparer')preparation();else overview(route);
  if(['missions','preuves'].includes(route.view))githubSection();
  if(focus){
    const title=view.querySelector('h1');title?.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});
    if(title&&title.getBoundingClientRect().top>innerHeight*.7)title.scrollIntoView({block:'start',behavior:'instant'});
  }
  document.title=(view.querySelector('h1')?.textContent||'Coordination')+' · La Faille noire × Interstice';
}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();const main=document.querySelector('#main');main.focus();main.scrollIntoView({block:'start',behavior:'instant'});});
addEventListener('hashchange',()=>render());
try{
  const response=await fetch('seed-public.json',{credentials:'same-origin'});if(!response.ok)throw new Error('source');
  seed=validateSeed(await response.json());document.documentElement.classList.add('enhanced');render({focus:!!location.hash});
}catch{
  status.textContent='La démonstration interactive ne peut pas charger ses données. Les liens HTML et les sources publiques ci-dessus restent disponibles.';
}
