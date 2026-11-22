// Candidate data contract only. No imports from the public application.
export const DOOR_IDS = Object.freeze(['encyclopedie', 'mediatheque', 'carte', 'entraide']);
export const PARCOURS_IDS = Object.freeze(Array.from({length: 7}, (_, i) => `PAR-${String(i + 1).padStart(3, '0')}`));
export const RELATION_TYPES = Object.freeze(['fait_historique_atteste', 'filiation_revendiquee', 'comparaison', 'lien_conceptuel', 'complement_documentaire', 'controverse']);

export function createIndex(resources) {
  const index = new Map();
  for (const resource of resources) {
    for (const key of [resource.id, ...(resource.aliases || [])]) {
      if (typeof key !== 'string' || !key || index.has(key)) throw new Error(`Identifiant ou alias ambigu : ${key}`);
      index.set(key, resource);
    }
  }
  return index;
}

export function resolveResource(resources, id) {
  return createIndex(resources).get(id) || null;
}

export function resourcesForDoor(resources, doorId) {
  if (!DOOR_IDS.includes(doorId)) throw new Error('Porte inconnue');
  return resources.filter(resource => resource.primary_door === doorId);
}

// The WORK lot is closed to publication. A future integration must supply its
// own reviewed publication adapter; changing one resource flag cannot open it.
export function getPublicResources(bundle) {
  validateBundle(bundle);
  return [];
}

export function validateBundle(bundle) {
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(message); };
  const {resources, parcours, relations, objections, sources, navigation} = bundle;
  for (const [name, list] of Object.entries({resources, parcours, relations, objections, sources})) {
    if (!Array.isArray(list)) throw new Error(`Collection absente : ${name}`);
    const ids = list.map(item => item.id);
    check(ids.every(id => typeof id === 'string' && id.length > 0), `${name} : identifiant vide`);
    check(new Set(ids).size === ids.length, `${name} : identifiants dupliqués`);
  }
  let index;
  try { index = createIndex(resources); } catch (error) { errors.push(error.message); index = new Map(); }
  const canonical = new Map(resources.map(resource => [resource.id, resource]));
  const sourceIds = new Set(sources.map(source => source.id));
  const objectIds = new Set(objections.map(objection => objection.id));
  const relationIds = new Set(relations.map(relation => relation.id));
  const parIds = new Set(parcours.map(path => path.id));
  const refs = (object, label) => {
    check(Array.isArray(object.source_refs) && object.source_refs.length > 0, `${label} : provenance absente`);
    for (const id of object.source_refs || []) check(sourceIds.has(id), `${label} : source inconnue ${id}`);
  };
  const validation = (object, label) => {
    const value = object.validation || {};
    for (const field of ['technical', 'documentary', 'legal', 'publication', 'political']) check(typeof value[field] === 'string', `${label} : statut ${field} absent`);
    check(value.publication === 'non_autorisee', `${label} : ouverture de publication interdite dans WORK`);
  };
  check(navigation?.public_activation === false, 'Navigation candidate activée publiquement');
  check(JSON.stringify(navigation?.doors?.map(door => door.id)) === JSON.stringify(DOOR_IDS), 'Quatre portes exactes requises');
  check(parcours.length === 7 && PARCOURS_IDS.every(id => parIds.has(id)), 'Sept Parcours exacts requis');
  for (const resource of resources) {
    check(DOOR_IDS.includes(resource.primary_door), `${resource.id} : porte principale inconnue`);
    check(typeof resource.kind === 'string', `${resource.id} : type absent`);
    check(resource.title === null || typeof resource.title === 'string', `${resource.id} : titre invalide`);
    refs(resource, resource.id); validation(resource, resource.id);
    check(typeof resource.availability === 'string', `${resource.id} : disponibilité non qualifiée`);
    check(resource.canonical_url === null || (typeof resource.canonical_url === 'string' && !/^(?:[a-z]+:|\/\/|\/)|(?:^|\/)\.\.(?:\/|$)/i.test(resource.canonical_url)), `${resource.id} : URL canonique non locale ou chemin sortant`);
    for (const duplicate of resource.duplicate_candidates || []) {
      check(duplicate !== resource.id && canonical.has(duplicate), `${resource.id} : doublon cible absent`);
      check(canonical.get(duplicate)?.duplicate_candidates?.includes(resource.id), `${resource.id} : doublon non réciproque`);
      check(!resource.aliases.includes(duplicate), `${resource.id} : doublon possible converti en alias`);
    }
  }
  for (let i = 1; i <= 71; i++) check(canonical.has(`FN-${String(i).padStart(3, '0')}`), `Notice FN-${i} perdue`);
  check(resources.filter(resource => /^BIO-\d{3}$/.test(resource.id)).length === 22, '22 BIO historiques à conserver');
  for (const path of parcours) {
    refs(path, path.id); validation(path, path.id);
    check(path.publication_authorized === false, `${path.id} : autorisation inventée`);
    check(path.priority === (Number(path.id.slice(4)) <= 5 ? 'prioritaire' : 'progressif'), `${path.id} : priorité incorrecte`);
    const steps = path.steps || [];
    check(steps.length > 0, `${path.id} : aucune étape`);
    const stepIds = new Set(steps.map(step => step.id));
    check(stepIds.size === steps.length, `${path.id} : étape dupliquée`);
    for (const step of steps) {
      check(step.resource_ids?.length > 0, `${path.id}/${step.id} : aucune ressource`);
      for (const id of step.resource_ids || []) check(canonical.has(id), `${path.id}/${step.id} : ressource canonique inconnue ${id}`);
      for (const id of [...(step.next_step_ids || []), ...(step.return_step_ids || [])]) check(stepIds.has(id) && id !== step.id, `${path.id}/${step.id} : retour ou bifurcation invalide ${id}`);
    }
    // Every step must be reachable from the entry, including optional branches.
    const reached = new Set(); const visit = id => {
      if (reached.has(id)) return;
      reached.add(id);
      for (const next of steps.find(step => step.id === id)?.next_step_ids || []) visit(next);
    };
    if (steps.length) visit(steps[0].id);
    check(reached.size === steps.length, `${path.id} : étape inaccessible`);
    check(path.bifurcations?.length > 0 && path.returns?.length > 0, `${path.id} : bifurcations/retours absents`);
    for (const id of path.objection_ids || []) {
      check(objectIds.has(id), `${path.id} : objection inconnue ${id}`);
      check(objections.find(object => object.id === id)?.parcours_ids.includes(path.id), `${path.id} : objection non réciproque`);
    }
    check(path.relations?.length > 0, `${path.id} : aucune relation documentée`);
    for (const id of path.relations || []) check(relationIds.has(id), `${path.id} : relation inconnue ${id}`);
  }
  for (const relation of relations) {
    check(canonical.has(relation.from_id) && canonical.has(relation.to_id), `${relation.id} : extrémité non canonique`);
    check(relation.from_id !== relation.to_id, `${relation.id} : auto-relation`);
    check(RELATION_TYPES.includes(relation.type), `${relation.id} : type non qualifié`);
    check(relation.publication_authorized === false, `${relation.id} : publication non autorisée`);
    check(typeof relation.proof === 'string' && typeof relation.label === 'string', `${relation.id} : preuve/portée absentes`);
    refs(relation, relation.id);
    for (const id of relation.parcours_ids || []) check(parIds.has(id), `${relation.id} : Parcours inconnu`);
    if (relation.type === 'filiation_revendiquee') check(typeof relation.claimant === 'string' && typeof relation.claim_date === 'string' && typeof relation.exact_claim_locator === 'string', `${relation.id} : filiation sans revendication attribuée`);
  }
  for (const objection of objections) {
    refs(objection, objection.id);
    check(objection.owners?.length > 0 && !!objection.resolution_condition, `${objection.id} : résolution sans responsable/preuve`);
    check(objection.state !== 'levee', `${objection.id} : objection levée sans nouveau visa`);
    for (const id of objection.parcours_ids || []) check(parIds.has(id), `${objection.id} : Parcours inconnu`);
  }
  check(parcours.find(path => path.id === 'PAR-005')?.validation.legal === 'bloque', 'Blocage juridique PAR-005 perdu');
  check(canonical.get('DROIT-001')?.validation.legal === 'bloque', 'Blocage DROIT-001 perdu');
  if (errors.length) throw new Error(errors.join('\n'));
  return {resources: canonical.size, aliases: index.size - canonical.size, parcours: parcours.length, relations: relations.length, objections: objections.length, sources: sources.length, public_resources: 0};
}
