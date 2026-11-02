# Graphiste — cycle d'intégration commune — 2026-11-02
Branche `design/integration-graphiste-20261102` ; PR #128 brouillon contre `integration/r1-commune-candidate-20261102`. Aucun merge/publication.

## Sources lues
`coordination/reprise-r1/03_ARBITRAGES_ZOUT_2026-11-02.md`, blob `f61b5b29b1757cf63a4c213ca7aa2524a14a04aa` ; `04_PLAN_INTEGRATION_COMMUNE_2026-11-02.md`, blob `88954ca172d10b5ffbb3fdb5daca0d0b5d91328e` ; `05_MANDAT_CYCLE_INTEGRATION_2026-11-02.md`, blob `57f1f6724d8b4be42b770a48f94e5051ce4f7b23`. Base exacte de la branche commune au départ : `2864ada2a2847de7e8cc53d33ef14398c6389815`.

## Inventaire évitant les doublons
- PR #68, #73, #76, #84 : composants fiches/statuts/provenance et QA, non fusionnés.
- PR #117 : correction hiérarchie d'accueil ; PR #119/#120 : Passages verticaux et snap souple ; PR #121 : trois directions ; PR #123 : carte-logo, modèles B/C. Ces travaux sur branches distinctes restent sources de conception, non copié-collé intégral.
- Figma `https://www.figma.com/design/3Nx6Xlgoeeln01ZMujM9cw`, trois frames éditables précédemment créées, non une validation d'interaction.

## Livrable d'intégration fonctionnelle candidate
- `integration-graphique/index.html`, commit dernier correctif `3073b73a6232885625752ec474d6e02b74a7fa55`, blob `3e76f12cfda3abc901fa7a40ddcf9fb8b506b245`.
- `integration-graphique/graphiste-integration.css`, commit `2a026704e11da5068f50db509431e657e72e097f`, blob `3f96e840e705618735e8168a21708ce328ba62d9`.
Deux variantes : **A logo radial compact** et **B logo fixe + points extensibles**, comparables dans une même page ; logo SVG officiel référencé sans modification. Index liste permanent, routes réelles Wiki/Bibliothèque/Participer/Lieux. Accueil, navigation, fiches, Atlas, Médiathèque, entraide manifestation et parcours réunis, en HTML/CSS utilisable sans JavaScript. B est gabarit avec sujet décidé mais textes non validés ; C est gabarit d’œuvre sans titres ni médias fictivement crédités. La carte ne fait aucune assertion de relation sourcée.
- Test `tests/graphiste-integration-20261102.test.mjs`, commit `1f676f8f9d19874c12462a0308fa235afbbf9e44`, blob `aca8cfc52506d585e723de011cbe4ff418449b12` ; workflow commit `6f907f381b2b6067b142cd60e7276ac2a792ce91`, blob `737e4e385e8d08f27a2565a9b268b39944f87a22`.
- Run CI `41451744709` lancé sur `6f907f381b2b6067b142cd60e7276ac2a792ce91` : contrôler verdict réel avant tout passage d'état à TERMINÉ. QA cible : 320/390/768/1280, liens 200, sans JS, clavier, impression CSS, images chargées. Les tests physiques de tactile, lecteurs écran (VO/TalkBack/NVDA), zoom réel 400%, performances réseau faible et inspection papier restent non effectués.

## Contrat de passage à La Développeuse
Utiliser PR #128 comme **lot graphique isolé**, jamais comme adoption du schéma Resource ni transfert prod. Inspecter routes, sécurité et version commune ; conserver la page classique et prévoir rollback par simple retrait du répertoire `integration-graphique/`, sans modifier les tables ni les endpoints. Vérifier responsive/focus/zoom et tester véritablement avant un arbitrage de Zout. Les scripts de capture Chromium ne remplacent pas revue humaine des rendus ; captures vérifiables à ajouter par QA dédiée.

## État des objectifs
1 inventaire : TERMINÉ documentaire ; 2 deux variantes : TERMINÉ candidates, choix Zout EN ATTENTE ; 3 gabarits : TERMINÉ structurel candidat, contenus/sources en attente ; 4 branche prête pour intégration Développeuse : À POURSUIVRE, aucun travail conjoint signé ou fusion prétendue ; 5 QA : À POURSUIVRE au-delà du run et essais physiques ; 6 preuves : fichiers/commits/blobs listés, captures non produites. P0 sécurité/justice/RGPD non levés, aucune publication.
