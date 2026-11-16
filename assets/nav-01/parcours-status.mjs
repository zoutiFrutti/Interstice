// Editorial display labels from PR #184, not publication visas.
export const PARCOURS_STATUSES = Object.freeze({
  'PAR-001':'En préparation · sources historiques en vérification',
  'PAR-002':'En préparation · archives et interprétations à vérifier',
  'PAR-003':'En préparation · structure examinée sous réserves',
  'PAR-004':'En préparation · structure examinée sous réserves',
  'PAR-005':'BLOQUÉ · contrôles juridique et sanitaire nécessaires',
  'PAR-006':'En préparation · identités et éditions à vérifier',
  'PAR-007':'En préparation · traductions et sources à vérifier'
});
export function parcoursStatus(path){
  return PARCOURS_STATUSES[path.id] || 'En préparation · statut à vérifier';
}
