// Candidate correspondence copied from PR #161 at 0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6.
// This file contains IDs only: no publication approval and no resource URLs.
export const STEP_RESOURCES = Object.freeze({
  "PAR-001/contexte": [
    "wiki-socialismes-communismes-anarchismes-autogestion.html",
    "FN-045"
  ],
  "PAR-001/decret": [
    "ARCH-007"
  ],
  "PAR-001/travail": [
    "ARCH-005",
    "ASSO-007",
    "ASSO-008"
  ],
  "PAR-001/club": [
    "COL-003",
    "ARCH-006"
  ],
  "PAR-001/personnes": [
    "BIO-009",
    "BIO-010",
    "BIO-012",
    "BIO-019"
  ],
  "PAR-002/contexte": [
    "wiki-socialismes-communismes-anarchismes-autogestion.html"
  ],
  "PAR-002/catalogne": [
    "CAT-001"
  ],
  "PAR-002/mai": [
    "CAT-006"
  ],
  "PAR-002/comparaison": [
    "wiki-decision-collective.html"
  ],
  "PAR-003/question": [
    "wiki-ecologie-sociale-environnement.html",
    "ÉCO-001"
  ],
  "PAR-003/histoire": [
    "ECO-02",
    "ECO-03",
    "ECO-04",
    "ECO-05"
  ],
  "PAR-003/concepts": [
    "ECO-07",
    "ECO-08",
    "ECO-09",
    "ECO-10"
  ],
  "PAR-003/sciences": [
    "ECO-16",
    "ECO-17",
    "ECO-18"
  ],
  "PAR-003/territoires": [
    "tis-c8-sctl",
    "FN-024"
  ],
  "PAR-004/cadre": [
    "wiki-decision-collective.html",
    "wiki-association-collegiale.html"
  ],
  "PAR-004/informel": [
    "FN-009",
    "FN-019"
  ],
  "PAR-004/participation": [
    "wiki-handicap-validisme-neurodiversite.html",
    "wiki-lecture-croisee-travail-soin-pouvoir.html",
    "FN-058"
  ],
  "PAR-004/experiences": [
    "ASSO-008",
    "ARCH-005",
    "EXP-004",
    "EXP-005"
  ],
  "PAR-005/perimetre": [
    "DROIT-001"
  ],
  "PAR-005/sources": [
    "DROIT-001"
  ],
  "PAR-005/relecture": [
    "DROIT-001"
  ],
  "PAR-006/histoires": [
    "wiki-feminismes-histoire-egalite.html",
    "wiki-egalite-genres-inclusivite.html"
  ],
  "PAR-006/commune": [
    "ASSO-007",
    "BIO-010",
    "BIO-019"
  ],
  "PAR-006/oeuvres": [
    "FN-015",
    "FN-016",
    "FN-055",
    "FN-069"
  ],
  "PAR-006/pouvoir": [
    "wiki-lecture-croisee-travail-soin-pouvoir.html",
    "FN-009"
  ],
  "PAR-007/chronologie": [
    "ZAP-C10-001"
  ],
  "PAR-007/autonomie": [
    "ZAP-C10-001"
  ],
  "PAR-007/education": [
    "ZAP-C10-001"
  ],
  "PAR-007/comparaisons": [
    "wiki-decision-collective.html",
    "wiki-ecologie-sociale-environnement.html"
  ]
});
export const STEP_RESOURCES_SOURCE = '0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6';
export function candidateResourceIds(parcoursId, stepId) {
  return STEP_RESOURCES[`${parcoursId}/${stepId}`] || [];
}
export function authorizedResourceLinks(_parcoursId, _stepId) {
  // Fail closed until a separate, human-approved per-lot publication manifest exists.
  return [];
}
