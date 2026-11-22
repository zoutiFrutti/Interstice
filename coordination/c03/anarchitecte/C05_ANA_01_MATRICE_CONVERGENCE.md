# C05-ANA-01 — Matrice de convergence (revue statique, sans validation navigateur)

Date : 2026-11-04. **HEAD de référence #182 :** `10613aeaa9f7e021ac024746c299060fd2c36722` ; base #181 `065584c65c6a77fe02e5488978b5c6d1753ba4c6` ; base #174 `01811690ae5dbd8bef4db2100395feea77a55431` ; registre #161 `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`. Audit antérieur : #177. Pont documentaire : #178, base #174 et **non inclus dans #182**.

| Contrôle | Verdict | Preuve / fichier | Correction minimale |
|---|---|---|---|
| Quatre portes | **Conforme (données)** | #182 `assets/nav-01/graph-data.mjs`, DOORS : encyclopedie, mediatheque, carte, entraide | Aucune |
| Sept Parcours, 29 étapes | **Conforme (données)** | #182 `graph-data.mjs`, PAR-001…007 ; comparaison par IDs avec `coordination/v2/work-c02-01/data/parcours.json` #161 | Aucune |
| Bifurcations et retours | **Conforme (données)** | Comparaison exacte de chaque `next_step_ids` et `return_step_ids` entre #182 et #161 : **0 différence sur 29 étapes**. `navigation-state.mjs` refuse les transitions non définies | Exécuter les tests sur le HEAD final, ne pas recréer les liens |
| Destinations historiques des portes | **Conforme comme déclaration, non vérifié comme URL fonctionnelle** | `graph-data.mjs` : `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html#entraide` | Tester la réponse HTTP et l'ancre Entraide sur l'URL candidate et l'hébergement historique |
| PAR-005 | **Conforme au verrou, limitation de parcours assumée** | `graph-data.mjs` : `blocked_practical:true`, `editorial_state:candidate_non_visee`. `explorer.mjs/renderPath()` renvoie la notice de blocage avant de créer les liens d'étape | Garder fermé. Préciser que les 3 étapes sont **définies** mais non traversables en interface tant que le visa manque |
| Documents associés aux 29 étapes | **Anomalie de convergence** | #161 `data/parcours.json` contient `resource_ids` ; #182 `graph-data.mjs` ne les embarque pas et `explorer.mjs` affiche une notice générique. #178 contient `assets/nav-01/step-resources.mjs`, absent de la chaîne #181→#182 | Reprendre sélectivement #178 sur la branche technique convergée après revue des conflits ; **aucun lien ouvert** sans visa |
| Statut des publications | **Conforme (verrou statique)** | #182 `graph-data.mjs` : `PUBLIC_RESOURCES=Object.freeze([])` ; `explorer.mjs` vérifie sa vacuité ; les parcours ont `editorial_state:candidate_non_visee` | Ne pas transformer les identifiants, les URLs ou les tests réussis en autorisation |
| Relations historiques vs lignes visuelles | **Réserve documentaire persistante, pas nouvelle anomalie** | #182 `explorer.mjs/drawPaths()` : tracé à partir de `path.doors`, non de `relations.json` | Légende explicite « Chemins de navigation proposés, pas filiations historiques attestées » (déjà signalé #177) |
| Tests tactile, clavier, Android, 400 % | **Non vérifié dans cette passe** | #182 hérite de `tests/nav01.browser.test.mjs` (#181) ; présence de tests ≠ résultat d'exécution ni validation physique | Exécuter sur SHA final, conserver captures/rapport, faire essayer Zout sur URL HTTPS |
| Entrée immersive et retours en situation | **Non vérifié visuellement** | #182 `explorer.html`, `explorer.mjs`, `explorer.css` ; code de plongée et de retour présent | Essai réel avant arbitrage artistique |

## Résultat de contrôle
- Vérification par comparaison structurée du tableau PARCOURS #182 et du registre #161 : **7/7 Parcours, 29/29 étapes, 0 divergence dans les transitions**.
- **Une anomalie de convergence documentaire concrète :** le pont #178 ne fait pas partie de #182 ; elle n'autorise pas à exposer les ressources.
- **Une limitation volontaire :** PAR-005 ne permet pas d'ouvrir ses étapes ; garder le verrou.
- Les 35 objections C02 et les 30 réserves WORK ne sont pas levées par la concordance structurelle. ARCH-006/COL-003 ≠ mandat général ; ASSO-007/ARCH-002 ≠ preuve de tenue de réunion.
- Pas de nouvelle décision architecturale nécessaire : quatre portes, sept Parcours et source de vérité #161 sont déjà arbitrés. **Aucun questionnaire à Zout** à ce stade.

## Transmission opérationnelle
Développeuse : intégrer uniquement la correspondance d'IDs de #178 si elle reste compatible avec le HEAD final #182 ; ne pas publier de ressources, puis tester les URLs, les fragments et les retours sur Android. Lectrice : maintenir les réserves documentaires et les visas séparés. Relieuse : ne pas confondre la présente revue statique avec une validation interactive.

**Aucune fusion, publication ou modification de la candidate convergée.**
