# R4 REL — convergence technique et arbitrages

Date : 2026-11-02. **Candidate non fusionnée.**

## Comparaison et choix

Base de travail : `integration/r2-dev-navigation-faille-20261102` (branche fonctionnelle récente, tests navigateur et mode tactile opt-in). Comparée à `integration/r3-identite-navigation-immersive-candidate-20261102` (divergence 14 commits ahead / 5 behind pour R2 par rapport à R3 lors de la comparaison) et à `design/identite-faille-interstice-zoom-20261102` (divergence 21 ahead / 9 behind par rapport à R3).

Ne pas remplacer le moteur R2 par le script R3 : les versions ont divergé sur animation initiale, historique, déplacement, tactile et zoom. Le correctif R3 de pinch n'est pas repris aveuglément : R2 possède déjà un mode tactile opt-in. Les tests R2 sont conservés. La PR #135 fournit le socle, #136 l'intégration graphique, #137 les symboles candidats, #138 les expériences R3 ; la branche R4 est la convergence candidate.

## Réalisations R4 vérifiables

- Deux exports R4 conservés **sans substitution** : `assets/candidats/logo-faille-noire-r4.svg`, `assets/candidats/logo-interstice-r4.svg`.
- Deux anciens actifs archivés : `assets/archives/logo-faille-noire-pre-r4.svg`, `assets/archives/logo-interstice-pre-r4.svg`.
- Provenance et écarts graphiques : `coordination/transmissions/2026-11-02_GRAPHISTE_R4_AUDIT_IDENTITE.md`.
- Page comparative : `design-system/comparaison-identite-r4.html` ; lien depuis `design-system/faille-navigation-interactive.html`. La carte utilise toujours l'ancien symbole.
- Contrat de test : `tests/r4-relieuse-convergence.test.mjs` et workflow `.github/workflows/r4-relieuse-convergence.yml`.

## Vérification des droits, contrats et P0

Aucune migration SQL, changement Supabase, formulaire public, prise de contact, import média, collecte, fusion `main`, publication ou déploiement. Les nœuds graphiques sont un **sommaire provisoire** et non des partenariats ni des liens historiques attestés. Les contenus sur les droits en manifestation demeurent candidats et nécessitent revue juridique. La navigation textuelle sans JS reste dans la page.

## Limites et tests

Le workflow structurel R3 était indiqué **success** pour commit `888015794b3ddbf4dddc1b43d2ba9af493971d09` ; il ne valide pas le HEAD R4. **Attendre CI R4** avant toute affirmation de succès. Les tests navigateur R2 doivent être relancés sur le HEAD R4 ; vérifier réellement 320/390/768/1280, clavier, touch/pinch, focus, liens profonds, reduced-motion, no-JS, 400 %, lecteurs d'écran et performances mobiles. Les SVG candidats sont **des approximations** selon l'audit Graphiste, non des reproductions fidèles validées de la planche raster. Celle-ci n'est pas versionnée dans le dépôt.

## Rollback

Supprimer de la branche candidate les chemins `assets/candidats/`, `assets/archives/`, `design-system/comparaison-identite-r4.html`, le lien comparatif et les nouveaux tests/workflows ; la carte R2 et les logos actifs restent en place. Aucune opération de production à annuler.

## Arbitrages réservés à Zout

1. Validation visuelle des deux SVG par confrontation à la planche artistique ; **bloquant avant substitution**.
2. Validation de l'expérience de navigation immersive (entrée automatique, mode tactile, parcours et sommaire) après tests réels.
3. Validation des rubriques définitives et du remplacement global des actifs ; aucune fusion `main` sans accord explicite.

## Suivi ciblé

Graphiste : terminer la fidélité SVG et l'inventaire des références. Développeuse : tester la branche R4 et corriger les régressions sans réécrire le moteur. Juriste/Lectrice : seulement si une modification P0 ou éditoriale apparaît. Pas de nouvelle tournée des ateliers.
