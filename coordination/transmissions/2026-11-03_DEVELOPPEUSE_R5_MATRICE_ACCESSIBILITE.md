# R5-DEV — Matrice d'accessibilité et stabilité (candidate)

Base : `integration/r4-convergence-relieuse-20261102`. Aucun changement aux actifs graphiques ou au moteur dans cette branche.

| Contrôle | Statut | Preuve / limite |
|---|---|---|
| CI R4 sur commit 7ece6f34 | réussi | https://github.com/zoutiFrutti/Interstice/actions/runs/41541664015 ; rapport de La Relieuse |
| 320/390/768/1280 px | réussi (automatisé R4) | tests/r4-dev-cloture.browser.test.mjs ; captures R4 |
| Liens directs / historique simple | réussi (automatisé R4) | tests/r4-dev-cloture.browser.test.mjs |
| Sans JavaScript | réussi (automatisé R4) | 5 liens alternatifs présents ; tests R4 |
| Réduction des mouvements | réussi (automatisé R4) | contexte Playwright reducedMotion=reduce |
| Pincement à deux pointeurs | réussi (simulation R4) | événements PointerEvent synthétiques ; **pas de preuve sur appareil réel** |
| Zoom à 400 % : présence des liens | réussi (automatisé R4) | test CSS zoom uniquement ; ne prouve pas la conformité WCAG |
| Zoom à 400 % : commandes focalisables et activables | réussi (Chromium R5) | tests/r5-dev-accessibilite.browser.test.mjs, run 41612382950 |
| Focus visible / Space / Escape | non testé sur HEAD R5 | tests/r5-dev-accessibilite.browser.test.mjs, CI à attendre |
| Région live et annonces réelles | partiellement vérifié (attributs ARIA) | role=status, aria-live=polite ; **lecteur d'écran non testé** |
| Lecteur d'écran NVDA / VoiceOver / TalkBack | non testé | matériel et session d'essai absents |
| Pincement et pan sur smartphone physique | non testé | matériel et session d'essai absents |
| Performances téléphone modeste | non testé | mesures de transfert réseau R4 insuffisantes |
| Absence de services tiers / Supabase / publication | vérification partielle | moteur de navigation lu ; audit global réseau non exécuté |

## Dernière exécution R5 vérifiée\n- HEAD testé : `5c5f5c00769504222ec02fedca89cda09dae2b5d`.\n- GitHub Actions : https://github.com/zoutiFrutti/Interstice/actions/runs/41612382950 — **success**.\n- 6 tests Node et 9 tests navigateur : **15 réussis, 0 échec**.\n- Artefact captures : `r4-dev-cloture-captures`, ID `13220005925`, 1 738 734 octets, SHA-256 `a772adbc4b42bf21ca641593bb4b73f187157f5b7844ec94e1c452a48b515247`.\n- Limite : contrôle 400 % par zoom CSS Chromium, non équivalent à une validation manuelle exhaustive du reflow WCAG ; les annonces vocales ne sont pas écoutées.\n\n## Réserves
- Ne pas déclarer le zoom 400 % conforme tant que l'absence de perte d'information et l'accès à toutes les commandes n'ont pas été vérifiés visuellement.
- Les tests Chromium ne sont pas des essais sur matériel physique.
- Les attributs ARIA ne prouvent pas la qualité des annonces vocales.
- Aucun merge, déploiement ou remplacement de SVG autorisé.

## Rollback
Fermer la PR R5 sans fusion : la convergence R4 reste inchangée. Les changements R5 se limitent au workflow, aux tests et à ce rapport.
