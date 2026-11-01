# Cycle 8 — État d'intégration et preuves de test

**Branche de coordination uniquement. Aucun merge.**

| Branche / PR | Livrable | État d'intégration | Preuve de tests et limites |
|---|---|---|---|
| `atelier-lectrice/cycle8-qualite-20261101` | Lots de QA et trois fiches historiques réévaluées | Candidate distincte | Rapport consulté, tests CI de ce HEAD non exécutés ici |
| `juriste/cycle8-matrice-risques-20261101` / #67 | Matrice risques, P0 et droits | Candidate distincte | Vérification documentaire, pas de test serveur d'écriture |
| `design/graphiste-cycle8-integration-2026-11-01` / #68 | CSS opt-in, maquette quatre domaines | Candidate distincte | Workflow Chromium décrit, résultat du HEAD non revalidé ici ; VoiceOver/TalkBack/NVDA non exécutés |
| `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01` | Wiki/Bibliothèque et patchs P0 réversibles | Candidate distincte | Rapport : tests antérieurs, pas de validation P0 serveur ; PWA non démontrée |
| `coordination/mediatheque-cycle8-consolidation-20261101` | Notices FN et parcours | Candidate distincte | Branche repérée, licences/URLs non entièrement auditées ici |
| `atelier/communication-premiere-edition-20261031` / #52 | Kit candidat | Candidate distincte | Blob `8daf6869876d722ae33e9cf9ed31ab4b1788cd12`, référence Charte V0.8 à rectifier |
| `coordination/cycle7-reconciliation-2026-11-01` / #64 | Audit, Journal commun, décision, coordination | Candidate distincte | Contrôles de lecture GitHub et écriture GitHub ; aucune suite Node/Chromium exécutée ici |

## Critères de convergence à tester sur un futur HEAD unique
1. Rebase/intégration sans perte des corrections des neuf HTML et des statuts éditoriaux.
2. Vérification des droits et verrou double de publication : accord Zout + décision versionnée.
3. Node/Chromium sur SHA exact ; navigation clavier, 320/390/1280 px, liens et imprimabilité.
4. Tests de lecteurs d'écran physiques et documentation des anomalies.
5. Vérification serveur en environnement isolé et retour arrière avant toute autorisation de production.

**Interdictions maintenues :** aucune fusion, déploiement, publication ou changement de privilèges en production sans décision humaine explicite. Les tests listés sont des critères, pas des succès inventés.
