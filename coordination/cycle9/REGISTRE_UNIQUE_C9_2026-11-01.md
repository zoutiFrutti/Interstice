# Cycle 9 — Registre unique de convergence (état candidat)
**La Relieuse · 2026-11-01.** Référentiel de coordination, sans fusion, publication ni adoption. Ne remplace pas les registres sources.

## Statuts normalisés
- **VÉRIFIÉ SUR BRANCHE** : fichier lu et blob SHA identifié, pas nécessairement testé ou publié.
- **CANDIDAT** : livrable existant, décision/QA manquante.
- **BLOQUÉ** : obstacle documenté, non levé.
- **À CONFIRMER** : signalement de PR/conversation, sans lecture exhaustive du contenu.
- **VALIDATION HUMAINE** : visa explicite sur version précise, jamais déduit de l'état « prêt ».

## Inventaire transversal
| Atelier | Preuve GitHub / point d'entrée | État C9 | Dépendance / prochain acte |
|---|---|---|---|
| Relieuse | PR #64 ; `coordination/audits/2026-11-01_CYCLE8_AUDIT_TRANSVERSAL_17_ATELIERS.md` blob `bd691d9ea9695e2ef385660eda3eaa0c2fbdd39c` | Vérifié sur branche | Rapprocher registre, Journal, décisions |
| Développeuse | `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01` ; `edition-premiere/CYCLE8_P0_RAPPORT.md` blob rapporté `1313d589fb9b8ca691a6fdad8e6417070ba6e637` | P0 bloqué | Tester isolation, droits serveur, rollback, sans déployer |
| Juriste | PR #67 ; `coordination/juriste/2026-11-01_CYCLE8_MATRICE_RISQUES_CORRECTIONS.md` blob rapporté `51af4e26f734f8346e467790ff48140ba8617086` | Candidat | Relecture cinq sensibles et sécurité |
| Lectrice | `atelier-lectrice/cycle8-qualite-20261101` ; transmission blob rapporté `01299b8241c970dcc709ae6bc50f1fa92f396b72` | Candidat | 12 corrections Wiki, 3 historiques sous réserve |
| Penseuse | PR #58 textes candidats en revue | À confirmer C9 | Concordance philosophique sans adoption |
| Biographe | BIO-009/012/019 ; rapport de conversation | À confirmer | Homonymies, sources et chronologies |
| Anarchitecte | PR #51 | Candidat | Contrat d'assemblage 24/44/71 |
| Graphiste | PR #68 ; `design/graphiste-cycle8-integration-2026-11-01` | Candidat | Tests lecteur d'écran et assemblage |
| Éclaireuse | Dossiers ÉCL/CIC rapportés | À confirmer | Pièces, contradictions, transmission |
| Médiathèque | `coordination/mediatheque-cycle8-consolidation-20261101` | Candidat | Licences et alias FN |
| Anarchiviste des communs | Dossiers historiques rapportés | À confirmer | Sources primaires, pas de doublon |
| Assistant de l'Anarchiviste | `research/assistant-anarchiviste-cycle8-20261101` | Branche vérifiée, contenu à confirmer | Originaux et cotes |
| Archéologue des communs | PR #70 ; transmission blob `b847caef714fb414e9300a27ba461752cefe9654` | Vérifié sur branche, candidat | Pièces Louvre, Club, Union |
| Tisseuse | TIS-001 rapporté | À confirmer | Sources Tarn/Occitanie |
| Anarchiviste catalan | `recherche/anarchiviste-catalogne-cycle8-20261101` | Branche vérifiée, contenu à confirmer | CAT-001/006, Mai 1937 |
| Anarchiviste zapatiste | PR #69, `research/anarchiviste-zapatiste-cycle8-20261101` | Erratum déclaré, contenu à confirmer | Contrôler 5 novembre 2023 et sources |
| Responsable réseaux sociaux | PR #52 ; kit blob **actuel** `3241292b461172adea5ffd933caf918d34bf2d5f` | **Correction V0.9 vérifiée sur branche** | QA autres messages, pas de diffusion |

## Rapprochement éditorial, sans confusion de périmètre
- Premier tri 24 pages Wiki : 15 à corriger + 9 bloquées ; photographie ancienne.
- Registre mixte ultérieur 34 éléments : 14 prêts à soumettre, 15 à corriger (12 Wiki, 3 historiques), 5 bloqués.
- Trois historiques ARCH-005, COL-003, ASSO-007 reclassés « prêts à examen sous réserve » par La Lectrice : **17 candidats à examen, 12 Wiki à corriger, 5 bloqués** en lecture croisée, pas de registre officiellement remplacé ni de publication.
- ARCH-002/ARCH-007 : deux visas limités, droits médias toujours à vérifier.
- 44 fiches Drive, 71 notices FN : catalogues distincts, non publiés en bloc. Alias FN-022/FN-048 et FN-038/FN-057 à documenter, pas à supprimer sans provenance.
- Cinq Wiki sensibles bloqués : `wiki-education-enfance-protection.html`, `wiki-frontieres-migrations-colonialisme.html`, `wiki-logement-habitat-droit-ville.html`, `wiki-police-deces-memoire.html`, `wiki-sante-psychiatrie-autonomie-soins.html`.

## Corrections de coordination
**Résolu sur branche source** : la Responsable réseaux sociaux a corrigé la référence Charte communs V0.8 vers V0.9 transitoire candidate, avec section explicite « Rectification de version C8 » ; blob `3241292b461172adea5ffd933caf918d34bf2d5f`. V0.8 reste une version historique, non une erreur à effacer partout. Les audits précédents décrivent l'état antérieur et doivent être lus avec cet addendum.

**Non résolu** : P0 serveur, accessibilité lecteurs d'écran, PWA, droits médias, cinq Wiki sensibles, versions éditoriales candidates, intégration unique testée.

## Preuves et limites
Contrôle GitHub PR #52, #64, #67–70, branches cycle8 et lecture directe des fichiers communication et archéologue. Aucune prétention de consultation de tous les messages privés, de tout Drive, de la production Supabase ni de CI HEAD. L'existence d'une branche ou d'un commit n'atteste ni succès de tests ni approbation humaine.
