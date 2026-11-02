# Graphiste → Développeuse / Relieuse — Convergence frontend R1 — 2026-11-02
Branche candidate `design/r1-dev-frontend-convergence-20261102`, PR #133 brouillon, base exacte `integration/r1-dev-frontend-fonctionnel-20261102` HEAD au départ `44cce59893cff027c3e5b0e6ccf3155b06b4b9c1`. Aucune fusion, publication ni modification de production.

## Comparaison source
PR #128 fournit une maquette autonome `integration-graphique/index.html` sur une branche qui n'intégrait pas `atlas.html` ni `parcours.html`. Le frontend de La Développeuse contient les pages réelles `index.html`, `atlas.html`, `parcours.html`, `wiki.html`, `bibliotheque.html` et `assets/integration-navigation.css`. Pour éviter les doublons, cette branche dérive du frontend **réel de La Développeuse** : aucune substitution globale de pages, routes, formulaires, scripts ou contenus.

## Modifications réellement commitées
- CSS commun `assets/graphiste-dev-convergence.css` (commit `1186d2619e7b971ac0695c4844ca626996719d9a`, blob `993bec6e209b810a39704ecb903d090568875e30`) : hiérarchie logo/titre/slogan, variante A radiale, variante B bras graphiques extensibles, mobile, focus, reduced-motion, impression.
- `index.html` commit `d12bc053178ea281315ba69d81cb83eed12dc2fb`, blob `2da51ecc40318bde789da80e71c12581b40bf61f`.
- `atlas.html` commit `bed8dfb0e53929b2aa5a9515e79afaa1c9d4b8d4`, blob `b895c9f0b7a5b700c4aa669646dddcdfcd13ca7b`. Deux variantes et index liste permanent, logo SVG officiel `assets/logo-faille-noire.svg` **non modifié**. Aucun partenariat ou relation R0–R3 inventé.
- `parcours.html` blob `8b5ffc6a48edc0657a668b7dbf80f189e14edf0a` ; `bibliotheque.html` blob `3d3180a24c51ae1cf1a5d4b7a4e4b400ca990761` ; `wiki.html` blob `c4cd5ef1f0107989422f314bcd27a2d6bb329977` : inclusion CSS de convergence sans réécriture éditoriale.
- Test `tests/graphiste-dev-frontend.test.mjs`, blob après correction `5d11007ba36c51bdb92c2d585eacc93b8c7a4f76`, commit correctif `10c026db5aed5c7dececf6f93d1526b14acfa87b`. Workflow `.github/workflows/graphiste-dev-frontend.yml` commit `5ac83bbe81ba9777820da533ae1508aad1a6b4f8`. Chromium sur cinq pages et quatre largeurs 320/390/768/1280, navigation clavier, routes HTTP, images, captures Atlas + PDF A4.
- Premier run `41485695232` **FAIL** : assertion trop immédiate sur navigation clavier, pas de conclusion sur l'accessibilité. Test corrigé pour attendre l'URL. Run `41485872983` : verdict à contrôler sur HEAD indiqué.

## Intégration et limites
Ce lot est directement exploitable par La Développeuse sur un frontend déjà fonctionnel ; aucun schéma adopté ni publication effectuée. La Relieuse garde l'arbitrage de priorités P0. Droits et identités inchangés. Variante carte-logo **DÉCISION ZOUT**. Statuts : comparaison **TERMINÉ**, composant CSS et pages **TERMINÉ candidat**, QA **À POURSUIVRE** jusqu'au run final, tests VoiceOver/TalkBack/NVDA physiques, zoom 400% réel et inspection humaine de captures **NON EFFECTUÉS**, fusion/publication **INTERDITES sans accord**. Rollback candidat : retirer la feuille CSS importée et la section `#cartes-logo` de l'Atlas, sans mutation serveur.
