# WORK-NAV-01 — résultats exécutés

Référence certifiée : `a69974101d0d8a14bbcda7313915d5dc6f51ec32`.

| Contrôle | Résultat | Preuve |
| --- | --- | --- |
| Caméra, identifiants, liens d’étapes, SVG et barrière d’artefact | **8/8**, aucun échec ni saut | [CI NAV01](https://github.com/zoutiFrutti/Interstice/actions/runs/41810009643) |
| Scénarios navigateur | **13/13**, aucun échec ni saut | Même CI, `PREUVES_NAVIGATEUR.json` et captures |
| Préservation de main | **524/524 fichiers inchangés**, main ancêtre du HEAD | `PREUVES_PRESERVATION.json`, contrôle Git dans la CI |
| Contrôles R6 et préflight Pages | **Réussis**, construction sans déploiement | [CI R6](https://github.com/zoutiFrutti/Interstice/actions/runs/41810009917) |
| Contrats existants hors navigateur, en atelier | **11/11 Node + 27/27 Python**, file documentaire validée | Commandes ci-dessous |
| Diff et syntaxe | Réussis pour les ajouts | `git diff --check`, `node --check` |

Les 13 scénarios couvrent les largeurs **320, 390, 768, 1280 px**, l’entrée animée et immédiate, déplacement souris et molette, zoom et recentrage, quatre portes, sept traversées et retours, historique, rechargement et liens profonds, HTML sans JavaScript, clavier et focus, mouvement réduit, axe et arbre d’accessibilité, absence de débordement et d’erreurs JavaScript.

**Android simulé** : profil Pixel 5 Chromium, événements CDP tactiles à un et deux doigts, pincement, sélection d’une porte et bascule de défilement. Aucun téléphone physique testé.

**Zoom navigateur réel 400 %** : `chrome.tabs.setZoom(4)`, valeur relue `3.9999999999999996` (arrondi flottant), largeur CSS **320 px**, largeur défilante **320 px**, DPR **4**. Aucun zoom CSS. Capture du viewport natif CDP **1280 × 761 px**, vérifiée non vide puis observée : le lecteur et son titre sont lisibles. La hauteur de la vue native diffère de la hauteur émulée ; elle est consignée plutôt que présentée comme 900 px.

**Accessibilité partielle** : axe WCAG A/AA ne trouve aucune violation dans cinq vues contrôlées. Il laisse des contrastes sur le SVG et des superpositions indécidables ; les détails restent dans le JSON. La palette opaque donne des ratios de texte de **4,88 à 16,05**, focus/fond **3,66** (`CONTRASTES.json`). Ces calculs ne certifient pas toutes les positions. Aucun essai TalkBack, VoiceOver ou NVDA ; l’arbre Chromium ne les remplace pas.

**Corrections apportées après essais** : environnement Ubuntu 24.04 compatible avec Playwright 1.56.1 ; profondeur d’historique préservée après rechargement ; retour mobile au début de l’espace ; nœud manifeste dégagé des commandes ; raccourcis navigateur préservés ; rôles accessibles ajustés ; capture 400 % vide rejetée et remplacée par une capture native contrôlée. Les premières exécutions en échec restent visibles dans GitHub ; aucun échec de ces contrôles ne subsiste dans la référence certifiée.

Les captures de `captures/` portent leur commit source dans `SOURCE_HEAD.txt`. Les commits suivants ajoutent les preuves et la transmission ; la CI du dernier HEAD produit à nouveau `artifacts/nav01/HEAD.txt`. L’artefact de référence est [téléchargeable ici](https://github.com/zoutiFrutti/Interstice/actions/runs/41810009643/artifacts/13312615020).

## Reproduire les contrôles

```sh
node --test tests/nav01-camera.test.mjs
node scripts/build-nav-preview.mjs
npm install --no-save --ignore-scripts playwright@1.56.1 @axe-core/playwright@4.10.2
npx playwright install --with-deps chromium
node --test tests/nav01.browser.test.mjs
```

Pour les contrôles existants d’atelier : `node --test tests/r1-frontend-navigation.test.mjs tests/r2-faille-navigation.test.mjs tests/r4-relieuse-convergence.test.mjs tests/wiki-handoff-idempotency.test.mjs tests/wiki-handoff-sql-contract.test.mjs`, puis `python3 -m unittest discover -s coordination/agents -p 'test_*.py'` et `node scripts/validate-wiki-review-queue.mjs`.

**Restent hors validation** : essais physiques, avis artistique/ergonomique Zout, services R6 externes, déploiement privé et ses contrôles d’accès. Aucun déploiement de production.
