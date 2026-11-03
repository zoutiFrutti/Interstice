# R6-ANA-04 — Registre et avis de clôture candidat
Date 2026-11-03. Branche `atelier/anarchitecte-r6-certification-20261103`. HEAD testé initialement `aefb0a80db71321e3c11588a95a06946e8f39c88` ; le SHA du présent document modifie le HEAD et exige une nouvelle vérification avant certification finale de convergence.

## Actifs et originaux
| Ressource | Chemin | Git blob SHA | SHA-256 brut |
|---|---|---|---|
| Faille originale | `assets/identite/r6/sources/logo-faille-noire-zout-original.svg` | `72695015804e76abc0f61369ab0da7ea540ba1a2` | `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` |
| Faille active candidate | `assets/logo-faille-noire.svg` | `72695015804e76abc0f61369ab0da7ea540ba1a2` | **identique à l'original** |
| Interstice original retracé | `assets/identite/r6/sources/interstice-retrace-zout-original.svg` | `43598c91cf69e0144497672881ba7a2be3eb081b` | `b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef` |
| Interstice référence visuelle | `assets/identite/r6/sources/interstice-reference-visuelle-zout-original.svg` | `a8646e604fd088cb6ded5fde0ec5b77b790f9f2d` | `659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6` |
| Interstice approuvé actif candidat | `assets/logo-interstice.svg` | `1e19320bcedb445175427dba92b229b7ee10d651` | à consigner depuis exécution `sha256sum` ; blob égal au candidat GRA02 |
| Interstice candidat GRA02 | `assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg` | `1e19320bcedb445175427dba92b229b7ee10d651` | égal à l'actif, par identité de blob |
| Interstice candidat antérieur | `assets/identite/r6/candidats/interstice-base-commune-r6.svg` | `dfce62b9fc3a064c2a22c1bad047e200f538f8b4` | `198cb3691ea13ea2e79b59f313ade9b4db84719e53e37ed6dd87395325101b43` |
| Archives pré-R6 | `assets/archives/logo-faille-noire-pre-r6.svg` et `assets/archives/logo-interstice-pre-r6.svg` | `c5d545a762e0ae205b235cea6d17e2ec51d2eff7`, `7c863aa239462c82b5a5dbcf26e5981b9131b0e8` | à calculer lors d'une passe dédiée |

## Contrôles et anomalie de test objectivée
La CI [41623401942](https://github.com/zoutiFrutti/Interstice/actions/runs/41623401942) a **échoué** avec 3/4 tests Anarchitecte réussis. Les SHA-256 des originaux et l'égalité des actifs, la présence des groupes et la sécurité de base étaient **réussis**. Le test de base échouait car il comparait les quatre chemins de Faille à **tous** les chemins d'Interstice, y compris les ramifications ajoutées volontairement. Il s'agissait d'une erreur de périmètre du test, pas d'une preuve de divergence de la base. Correction commit `aefb0a80db71321e3c11588a95a06946e8f39c88` : comparer uniquement les primitives **avant** `g#r6-gra02-ramifications-originales`. Rejouer sur ce SHA, puis sur le HEAD de convergence finale.

Contrôles pérennes : SHA-256 des trois sources ; égalité de blobs des deux actifs et références ; base `rect+4 path` strictement égale avant superpositions ; groupes `halo-rouge`, `faille-et-ramifications`, `eclats-rouges`, `noeuds-cercles` ; 30 cercles et centre majeur (350,377), rayon 33 ; absence scripts et dépendances externes ; captures 32/48/64/96/192/390/665 et inventaire HTML/CSS. Les contrôles actuels de primitives utilisent des expressions régulières, pas un parseur XML canonique : maintenir cette limite dans le registre.

## Dépendances et restauration
PR #147 `d90654f7` → PR #149 `b1d3b777` → PR #150 `9f1ade55` → branche Anarchitecte. L'approbation artistique de Zout porte sur GRA02 ; elle ne prouve ni merge ni déploiement. Restaurer avant fusion en abandonnant le candidat ; pour retour PR #147 restaurer `interstice-base-commune-r6.svg` sur branche dédiée ; pour pré-R6 restaurer les actifs depuis `assets/archives/logo-*-pre-r6.svg` après accord, relancer les tests et vérifier routes. **Rollback documenté, pas exécuté en production.** Pas de suppression d'archives.

## Avis
**RÉSERVES** jusqu'à succès de CI sur HEAD exact, mesure complète des empreintes non encore relevées et revue des captures / références sur convergence. Aucune anomalie artistique à rouvrir. Aucun changement des SVG approuvés.
