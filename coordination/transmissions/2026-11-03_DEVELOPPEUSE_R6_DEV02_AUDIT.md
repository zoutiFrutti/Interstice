# R6-DEV-02 — Audit technique et stabilisation (candidate)

Date : 2026-11-03. Base de travail : PR #147, HEAD initial `d90654f7572c0e0806c61cd6703c0d3092b26ba2` ; base de convergence PR #141 `9f733122c7196622d31e7996d1d0b4eea987a14d`.

## Comparaison PR
- #142 : corrections navigation, pan, pinch, historique et tests ; moteur de #147 en reprend les mécanismes ; **ne pas appliquer le patch #142 en bloc**.
- #143 : tests 400 %, focus, ARIA, sans JS et réduction des mouvements ; tests R6 DEV02 complémentaires, sans reprise de la configuration CI R5.
- #146 : archives des actifs historiques et rapport d'attente des sources ; #147 contient les originaux contrôlés et ses propres archives. Doublons d'archives, conserver la provenance sans les supprimer.
- #147 : remplace les deux SVG actifs, archive les anciens, conserve les trois originaux, adapte le moteur et l'overlay de navigation, ajoute inventaire, tests et captures.

## Vérifications sur PR #147
- GitHub Actions au HEAD initial : R4 DEV run 41618201303, convergence run 41618201315, R6 run 41618201516, tous success.
- Origine SVG : tests R6 existants vérifient les trois SHA-256 fournis par Zout, l'absence d'image JPEG intégrée dans le logo actif et l'égalité de la base graphique.
- Inventaire : `scripts/r6-inventaire-identite.mjs` scanne HTML/CSS/JS/MJS/JSON/webmanifest ; exclusions `.git`, `node_modules`, `artifacts`. Ne prétend pas analyser les fichiers binaires ni démontrer une absence absolue de références obsolètes dans tout le dépôt.
- Géométrie : Wiki (258,203)→(388,305), Médiathèque (498,261)→(749,392), Atlas (233,450)→(350,677), Parcours (461,426)→(693,641), Entraide (333,593)→(501,892), conversion 665→1000 arrondie.
- Nouvelles preuves DEV02 : `tests/r6-dev02-stabilisation.browser.test.mjs`, six largeurs, zoom CSS 400 %, focus, clavier, lien profond, retour, sans JS, captures. **Résultats de la CI sur le HEAD final à confirmer après ce rapport.**

## Matrice honnête
| Contrôle | Statut | Preuve / réserve |
|---|---|---|
| Tests R4 et R6 sur HEAD initial #147 | réussi | runs 41618201303 / 41618201315 / 41618201516 |
| Sources SVG, SHA, base commune | réussi (automatisé R6) | tests/r6-identite-remplacement.browser.test.mjs |
| Rendu comparatif 320/390/768/1024/1280/1920 | réussi (automatisé R6) | tests R6, captures CI |
| Correspondance des 5 nœuds | à confirmer CI DEV02 | nouveau test géométrique |
| Zoom CSS 400 %, clavier, focus, liens profonds | à confirmer CI DEV02 | nouveau test Chromium |
| Sans JavaScript et reduced-motion | réussi (automatisé R6) | tests R6 |
| Pincement multipoint simulé | réussi sur R4, à revalider sur R6 | tests/r4-dev-cloture.browser.test.mjs |
| Zoom navigateur natif 400 % sans perte | non testé physiquement | zoom CSS Chromium ≠ preuve complète |
| TalkBack, VoiceOver, NVDA | non testé | appareil/session absents |
| Pan et pincement sur appareil réel | non testé | appareil/session absents |
| Performance téléphone bas de gamme | non testé | aucun profil matériel |
| Contrastes microfissures, fidélité artistique | réserve | arbitrage Graphiste et Zout |

## Réserves / rollback
Le logo Interstice R6 est candidat, rendu rouge moins dense que la référence visuelle selon la Graphiste. Ne pas valider graphiquement par la seule CI.

Cette PR fille ne modifie aucun logo ni contenu éditorial. Rollback DEV02 : fermer la PR #148 sans fusion. Rollback R6 : restaurer les SVG archivés dans `assets/archives/logo-*-pre-r6.svg` et vérifier leurs chemins ; ne jamais effacer les sources `assets/identite/r6/sources/`.

Aucune fusion, aucun déploiement, aucune publication.
