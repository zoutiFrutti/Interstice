# R5 — lot 2, conformité, formulaires et contrats : préqualification vérifiée

Date : 2026-11-03. **Aucune fusion, fermeture ou suppression.**

## Métadonnées GitHub individuelles
| PR | HEAD | SHA | BASE | Mergeable à l'instantané | Décision |
|---|---|---|---|---|---|
| #130 | `juriste/integration-courrier04-20261102` | `5ce59e04d1981207bd6f316bf2b70ec667b2f19a` | `juriste/reprise-r1-p0-20261102` | true | Réserver dossiers P0 et droits en manifestation |
| #122 | `juriste/reprise-r1-p0-20261102` | `8ef64051fde98e1ac6efbe0c1beefb28a6e4a284` | `coordination/reprise-generale-r1-20261102` | true | Ancêtre documentaire de #130 |
| #81 | `juriste/cycle10-messagerie-reprise-20261101` | `ff6715f3cbc1669bb874b5a4735d4be880fd60ab` | `coordination/cycle10-messagerie-v1-20261101` | false | Vérifier divergence avant toute proposition |
| #75 | `juriste/cycle10-verdicts-cinq-pages-20261101` | `229dfc883fb1f3204f65c96db4ea5b38406366cc` | `juriste/cycle9-corrections-5-pages-20261101` | true | Chaîne de revue éditoriale, statuts candidats |
| #71 | `juriste/cycle9-corrections-5-pages-20261101` | `d5bb04911e43b878ee0c665f7c3698aa0550db4d` | `atelier-lectrice/8-passes-pre-sortie-20261031` | true | Préserver références et réserves |
| #67 | `juriste/cycle8-matrice-risques-20261101` | `29ddfd167621782e76c94e67ac9e76929361b422` | `juriste/cycle7-reserves-fondatrices-securite-20261101` | true | Chaîne historique P0 |
| #65 | `juriste/cycle7-reserves-fondatrices-securite-20261101` | `2251be00f50a96233d7a0289fe32ee216d2f7e09` | `juriste/cycle6-charte-v09-reserves-20261031` | true | Chaîne historique P0 |
| #62 | `juriste/cycle6-charte-v09-reserves-20261031` | `41f5c11bef690ca473f23b6674930dc3c7a344b3` | `juriste/manifeste-v26-chartes-candidates-20261031` | true | Charte candidate, non adoptée |
| #58 | `juriste/manifeste-v26-chartes-candidates-20261031` | `79baeb8448652e855f411b5adccacbb6f42cb25f` | `main` | true | Ne pas substituer V2.6 à V2.5 |
| #42 | `fix/anarchitecte-v0-acceptance-2026-10-30` | `347f31c9b2d6a9ad856dcb7500fb982dfc85a602` | `main` | false | Audit ciblé formulaires avant réutilisation |
| #126 | `feature/r1-orchestratrice-audit-p0-20261102` | `dcef468e5c5a2936ba0a807f08cdfb944a422067` | `feature/c15-orchestratrice-executants-20261102` | true | Ne pas activer exécutants sans double autorisation |
| #132 | `feature/integration-c18-orchestratrice-suivi-20261102` | `6c95034e5fe5cd17d5cd0f393d9007e7bc8f367b` | `main` | true | Vérifier suivi documentaire, pas d'accusés inventés |

## Comparaisons réelles contre R4
| Branche | Statut | Ahead | Behind | Fichiers distincts |
|---|---|---:|---:|---|
| `juriste/integration-courrier04-20261102` | diverged | 6 | 84 | 6 documents de coordination, aucun fichier d'application dans le diff |
| `juriste/reprise-r1-p0-20261102` | diverged | 3 | 84 | 3 documents de coordination |
| `fix/anarchitecte-v0-acceptance-2026-10-30` | diverged | 6 | 467 | workflow, tests, `ressources.js`, `script.js`, journal et critères |
| `feature/r1-orchestratrice-audit-p0-20261102` | diverged | 48 | 314 | workflows, agents Python, contrats et exemples |
| `feature/integration-c18-orchestratrice-suivi-20261102` | diverged | 22 | 314 | workflows, agents Python et suivi documentaire |

## Risques et suite

1. **P0 conformité** : ne pas présenter la présence de rapports Juriste comme preuve de conformité RGPD/LCEN. Revue des traitements réels et des formulaires obligatoire.
2. **P0 sécurité des agents** : aucune activation de connecteur IA, exécution autonome ou prise de contact sans contrôle des permissions et autorisation explicite.
3. **P1 historique** : les chaînes de PR Juriste sont des dépendances documentaires, pas des doublons démontrés. Conserver les références des versions antérieures.
4. **P1 code des formulaires** : #42 touche du JavaScript applicatif ; pas de recopie sans tests de non-régression et contrôle du contrat serveur.
5. **Lot de convergence candidat** : intégrer d'abord uniquement les matrices P0 et les contrats sous statut « candidat », après lecture complète et vérification des chemins ; code, publication et statuts d'adoption restent exclus.
