// Read-only view adapter. The seven source dimensions never imply one another.
export const STATE_KEYS=['preparee','transmise','recue','commencee','livree','controle_effectue','validee'];
export const ALLOWED_ROLES=['relieuse','lectrice','mediatheque','biographe','anarchitecte','developpeuse','juriste','graphiste','vigie','tisseuse','eclaireuse','anarchiviste-catalan','anarchiviste-zapatiste','anarchiviste-communs','archeologue','reseaux-sociaux','assistant-anarchiviste'];
export const FILTERS=['toutes','blocages','controles','decisions'];
export function parseRoute(hash){
  let value;try{value=decodeURIComponent(String(hash||'#missions').replace(/^#/,''));}catch{return{view:'missions',filter:'toutes'};}
  const [path,query='']=value.split('?');const params=new URLSearchParams(query);
  const filter=FILTERS.includes(params.get('filtre'))?params.get('filtre'):'toutes';
  if(['ateliers','preuves','preparer'].includes(path))return{view:path,filter};
  const mission=/^mission\/([A-Za-z0-9_-]{3,80})$/.exec(path);
  return mission?{view:'mission',id:mission[1],filter}:{view:'missions',filter};
}
export function filterMissions(seed,filter='toutes',query=''){
  const q=query.trim().toLocaleLowerCase('fr');
  return seed.missions.filter(m=>{
    const matches=filter==='blocages'?m.reserves.length>0:filter==='controles'?m.states.controle_effectue!==true:filter==='decisions'?m.states.validee!==true:true;
    return matches&&(!q||[m.id,m.objective,...m.ateliers,...m.reserves].join(' ').toLocaleLowerCase('fr').includes(q));
  });
}
export function summarize(seed){
  const missions=seed.missions;
  return{missions:missions.length,profiles:seed.ateliers.length,declaredDeliveries:missions.filter(m=>m.states.livree===true&&m.deliverables.length).length,
    declaredInProgress:missions.filter(m=>m.states.commencee===true&&m.states.livree!==true).length,
    unknownProgress:missions.filter(m=>m.states.commencee===null).length,reserves:missions.filter(m=>m.reserves.length).length,
    controlsUnattested:missions.filter(m=>m.states.controle_effectue!==true).length,notValidated:missions.filter(m=>m.states.validee!==true).length};
}
export function prepareMission(input){
  if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(k=>!['id','objectif','ateliers'].includes(k)))throw new Error('Champs non admis par cette simulation.');
  const{id,objectif,ateliers}=input;
  if(typeof id!=='string'||!/^[A-Za-z0-9_-]{3,80}$/.test(id))throw new Error('Identifiant : 3 à 80 lettres, chiffres, tirets ou traits bas.');
  if(typeof objectif!=='string'||objectif.trim().length<3||objectif.trim().length>2000)throw new Error('Objectif : 3 à 2 000 caractères.');
  if(!Array.isArray(ateliers)||!ateliers.length||ateliers.length>17||new Set(ateliers).size!==ateliers.length||ateliers.some(r=>!ALLOWED_ROLES.includes(r)))throw new Error('Choisir un atelier admis par le contrat C11.');
  return{id,objectif:objectif.trim(),ateliers:[...ateliers],statut:'A_FAIRE',origine:'RELIEUSE_CHATGPT',decision_humaine_requise:true,execution_ateliers:'NON_DECLENCHEE'};
}
export function validateSeed(seed){
  if(seed?.public_only!==true||seed.mode!=='DEMONSTRATION_SANS_BACKEND')throw new Error('Données publiques de démonstration requises.');
  for(const key of ['external_writes_enabled','ai_execution_enabled','issue_creation_enabled'])if(seed.controls?.[key]!==false)throw new Error('Commande externe interdite.');
  if(new Set(seed.missions.map(m=>m.id)).size!==seed.missions.length)throw new Error('Mission dupliquée.');
  for(const m of seed.missions){
    if(Object.keys(m.states).length!==STATE_KEYS.length||STATE_KEYS.some(k=>![true,false,null].includes(m.states[k])))throw new Error('États ternaires manquants.');
    if(m.states.recue===true&&!m.deliverables.some(p=>p.type==='accuse'))throw new Error('Réception sans accusé spécifique.');
    if(m.states.validee===true&&!m.deliverables.some(p=>p.type==='decision_zout'))throw new Error('Validation sans décision humaine.');
    if(m.dependencies.some(id=>!seed.known_mission_ids.includes(id)))throw new Error('Dépendance inconnue.');
  }
  return seed;
}
