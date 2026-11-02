# La Graphiste — C10, chantier P1 haute « Les passages d’Interstice »
Date : 2026-11-02. Projet individuel de Zout. **Candidat**, aucune fusion, publication ou modification de production.

## Réception et références vérifiées
Courrier `coordination/messagerie/courriers/C10-REL-20261102-PASSAGES-GRAPHISTE.md`, branche `coordination/c10-relieuse-reconciliation-20261102`, blob `2c13fc429f650ac1463eabcd0f9a9c72cf6d580f`. Mandat `coordination/cycle10/CHANTIER_PASSAGES_INTERSTICE_P1_2026-11-02.md`, même branche, blob `3a4dfef77a22f7aedc96f87e4af8462ee5af7eae`. PR #117 HEAD `67f47446cef4a817711de0c1690c1e4a6e7dfd37`, #119 `4c808a1597cb10103e2aeb5e6923c84f00461edc`, #120 `66d1366d4fda843750ffcf1ecfa7f8873961fa2c`. CI de #120 `41438062668` relue : réussite sur SHA exact. Mandat : priorité P1 haute **après** les P0 protection/sécurité/conformité.

## Trois directions graphiques comparables
Nouvelle page `design-system/passages-variantes-c10.html`, commit `61ddbcf1119240402d25e4348323b7a944c7266f`, blob `93482f6ee95ed4883f9356a4b1f2598d7483104b`; CSS `assets/passages-variantes-c10.css`, commit `23b8fae4b240cc4d35d1c952000ebca9024c0597`, blob `5eeb80587d4a589e9d3f390154620582c89eef6b`.
1. **Passages** : garde la navigation verticale progressive de la PR #120, avec accès classique, ancres, snap souple ; épreuve interactive existante non réinventée.
2. **Constellation** : proposition *HTML/CSS accessible* de trois nœuds documentaires reliés par la composition, sans déclarer les liens historiques ni les identifiants du mapping final. Liens au clavier vers routes déjà existantes. Une animation de constellation complète n'est pas encore codée ni validée.
3. **Éditoriale adaptative** : composition en grille fluide vers Wiki, Bibliothèque, Participer ; articles longs conservent leur défilement libre. Adaptation mobile et impression prévues en CSS.
Ces trois variantes sont des expériences **candidates**, non une décision artistique de Zout. Aucun média externe ni licence inventée.

## QA exécutée et limites
Test `tests/passages-variantes-c10.test.mjs`, commit `cb0d8b11c93db46c76795303be24a9825eb7b96e`, blob `2c169dc74c6404cf2bd25a8b70053038e5a33547`. Workflow `.github/workflows/passages-variantes-c10.yml`, commit `5fbae89316a4e22d6a91379fe60e9d0f0fc2d7cb`, blob `10ca81e75ea40173af6282372e0287ec0aa06ad5`. Tests prévus sur 320/390/768/1280, trois sections, ancres au clavier, routes HTTP, impression simulée et JavaScript désactivé. **Ne déclarer leur réussite qu'après examen du run du SHA final.**
Les essais tactiles sur appareil réel, VoiceOver, TalkBack, NVDA, zoom navigateur 400 %, mesures de performance sur matériel modeste et inspection PDF papier ne sont pas attestés. Figma existant https://www.figma.com/design/3Nx6Xlgoeeln01ZMujM9cw ; trois écrans éditables vérifiés lors de l'atelier précédent, mais ces nouvelles variantes HTML ne constituent pas trois nouveaux frames Figma.

## Instructions à transmettre via La Relieuse
L'Anarchitecte : vérifier les routes, identifiants, liens profonds, provenance et statuts, sans inventer de relations sémantiques. La Développeuse : comparer progressive enhancement, performance et rollback du parcours. La Lectrice : vérifier lecture longue et présence des sources. La Juriste : audit accessibilité et droits média. Zout : arbitrer direction graphique après essais, avant toute fusion/publication.

## Statuts
- Réception et reprise des PR : **TERMINÉ** pour lecture et comparaison.
- Trois variantes comparables : **TERMINÉ** comme prototypes candidats, non comme intégration.
- QA automatisée : **À POURSUIVRE** jusqu'au verdict CI final.
- Intégration commune : **BLOQUÉ** par contrat, vérifications P0 et HEAD commun.
- Accessibilité physique et choix final : **DÉCISION HUMAINE / BLOQUÉ** jusqu'aux essais attestés et arbitrages.
