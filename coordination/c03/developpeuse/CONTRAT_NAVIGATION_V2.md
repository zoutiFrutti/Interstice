# C03-DEV-04 — Contrat de navigation V2 candidat, à viser avec La Graphiste

## Sources
main R6 : `index.html`, `assets/faille-navigation.js`, `assets/faille-navigation.css`, `design-system/faille-navigation-interactive.html`.
PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` : `coordination/v2/work-c02-01/lib/catalogue.mjs`, `lib/navigation-plan.mjs`, `schema/v2.schema.json`, `data/navigation.json`.

## Couche métier
Quatre portes exactes : `encyclopedie` → `wiki.html` ; `mediatheque` → `bibliotheque.html` ; `carte` → `atlas.html` ; `entraide` → `parcours.html#entraide` (alias provisoire). Les sept `PAR-001` à `PAR-007` sont des chemins transversaux, **pas sept portes ni une cinquième porte**. L'index `parcours.html` reste accessible.

Le module catalogue valide IDs, alias, portes, références croisées, sources, relations typées et statuts ; `getPublicResources()` retourne volontairement `[]`. Ne jamais contourner cette fermeture : les 219 ressources, 19 relations et 30 réserves sont candidates, et les 35 objections Lectrice restent à rapprocher. PAR-005 / DROIT-001 bloqués juridiquement.

Le module navigation-plan est pur, sans DOM : états `overview`, `door`, `parcours_index`, `step`, lecture des fragments, bifurcations, retours. Réutiliser les états sans remplacer automatiquement l'historique navigateur par un historique applicatif divergent.

## Couche graphique : contrat à valider par La Graphiste
Conserver les deux SVG officiels **octet pour octet**. Superposer des calques interactifs séparés, sans modifier leurs chemins. L'animation des deux clics reste une proposition à faire valider par Zout ; prévoir immédiatement une option statique et les quatre liens HTML visibles. Aucun mouvement automatique indispensable. La carte R6 possède cinq nœuds codés en dur : l'adaptateur V2 fournira quatre portes, et un accès distinct aux sept Parcours.

## Compatibilité publique
Conserver `index.html`, `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html`, les 24 `wiki-*.html`, `manifeste-v2-5.html`, `manifeste.html`, et `parcours.html#entraide`. Fragments R6 `#wiki`, `#bibliotheque`, `#atlas`, `#entraide`, `#parcours`, `#carte` à résoudre sans briser les liens entrants. Le manifeste doit être accessible dans chaque vue.

## Séparation des responsabilités
Développeuse : adaptateur de données, routage, historique, focus, tests et rollback.
Graphiste : composition, transformations, position des nœuds, contrastes, alternatives visuelles, fidélité SVG.
Relieuse/Anarchitecte/Lectrice/Juriste : contrat éditorial, visas et blocages.
Zout : arbitrage de l'expérience finale et autorisation d'activation.

**Aucun écran V2 intégré ni contrat graphique conjoint signé à ce stade.**
