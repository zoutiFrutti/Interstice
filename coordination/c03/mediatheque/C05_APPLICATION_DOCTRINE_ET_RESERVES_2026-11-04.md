# C05-MED-01 — Application des décisions de Zout et réserves restantes

Date : 2026-11-04. **Document candidat, sans publication.**

## Décisions actées, pas à redemander
Référence : `DOCTRINE_EDITORIALE_PROPOSITION_V01.md` (version déjà mise à jour sur cette branche avant cette passe, blob `73950c9873b039d93d8dcd2285bd19514ae6d6f7`).
- Wikipédia : **RELIER** par défaut ; **CRÉER** seulement si l'apport distinct est documenté.
- Notice incomplète : publication envisageable seulement si identité, source et éléments essentiels sont établis, incertitudes visibles, droits et risques traités.
- Zout arbitre en dernier, après travail maximal des ateliers et relecture indépendante obligatoire des contenus sensibles. Aucun automatisme de publication.

## Application concrète au catalogue
| Objet | Décision documentaire candidate | Justification | Condition de déblocage |
|---|---|---|---|
| FN-018 *Pepper et Superflu* | **CONSERVER EN INTERNE / BLOQUER PUBLICATION** | Registre PR #161 : `canonical_url:null`, `metadata_gap` ; identité bibliographique insuffisante | Retrouver source primaire, auteur, édition et URL fiable ; vérifier les droits |
| FN-022 / FN-048 | **CONSERVER LES DEUX IDS ; ALIAS CANDIDAT 048→022** | C10 rapproche les notices, mais les éditions et traductions ne sont pas établies identiques | Comparaison titre, auteur, édition, année, langue, traduction et fichier |
| FN-038 / FN-057 | **CONSERVER LES DEUX IDS ; ALIAS CANDIDAT 057→038** | Même thème et rapprochement C10, mais version linguistique ou éditoriale à contrôler | Comparer version 2.0, crédits, langue et licences |
| FN-024 / ECO-19 | **RELIER** | Alias de provenance écologique dans PR #161, pas de seconde œuvre | Conserver relation et source sans duplication |
| Douze ressources historiques FN | **CONSERVER LA SÉLECTION HISTORIQUE** | Pas équivalente aux dix fiches R1 ni aux dix œuvres C12 | Validation individuelle avant toute exposition publique |
| Dix œuvres C12 | **CANDIDATES NON ADOPTÉES** | Métadonnées, disponibilité, licences variables ; hébergement interdit par défaut | Contrôle des dix accès et crédits, décision éditoriale de Zout |
| PAR-001 à PAR-007 | **LIENS DOCUMENTAIRES CANDIDATS** | Présence des clés prouvée, pas la qualité ou la sûreté des contenus | Lectrice, Juriste et expertise spécialisée selon contenu ; PAR-005 bloqué |

## Contrôles et limites
Sources vérifiées directement dans le dépôt : `coordination/v2/work-c02-01/data/resources.json` blob `66957e1b223f05642dcd69479ac48d0394797802`, 219 objets ; doctrine V0.1 blob `73950c9873b039d93d8dcd2285bd19514ae6d6f7` ; C03 `CORRECTIONS_REGISTRE.md` blob `1214db68183aaabe59dfaa2e1b2eba935f3ba445` ; `DROITS_DISPONIBILITES.md` blob `29d6bf3ebae668321bc3d101ca3dc53cc7181761`.

**Non exécutés** : contrôle URL en direct, comparaison complète des éditions, relecture intégrale des 71 œuvres, licences des fichiers, tests CI et navigateur. Le présent document n'est pas une certification de ces contrôles.

## Prochaines corrections critiques, sans nouvelle enquête générale
1. Retrouver l'identification primaire de FN-018 avant de produire une fiche publique.
2. Établir une matrice d'équivalence d'éditions pour les deux paires de doublons ; conserver les quatre IDs et ne pas créer de redirection automatique.
3. Appliquer un état `RELIER/COMPLÉTER/CRÉER` motivé et un champ `apport_distinct` pour les futures notices ; comparaison Wikipédia documentée au cas par cas.
4. Vérifier les droits et accès des dix œuvres candidates avant de proposer leur publication ; garder les notices lors de l'expiration des replays.
5. Séparer validation documentaire, juridique, technique et **visa final explicite de Zout**. Les ateliers ne peuvent pas s'auto-attribuer le visa humain.

**Statut : arbitrages de principe actés ; application aux objets candidate, publication bloquée.**
