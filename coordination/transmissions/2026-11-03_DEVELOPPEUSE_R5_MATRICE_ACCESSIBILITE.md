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
| Zoom à 400 % : commandes focalisables et activables | non testé sur HEAD R5 | tests/r5-dev-accessibilite.browser.test.mjs, CI à attendre |
| Focus visible / Space / Escape | non testé sur HEAD R5 | tests/r5-dev-accessibilite.browser.test.mjs, CI à attendre |
| Région live et annonces réelles | partiellement vérifié (attributs ARIA) | role=status, aria-live=polite ; **lecteur d'écran non testé** |
| Lecteur d'écran NVDA / VoiceOver / TalkBack | non testé | matériel et session d'essai absents |
| Pincement et pan sur smartphone physique | non testé | matériel et session d'essai absents |
| Performances téléphone modeste | non testé | mesures de transfert réseau R4 insuffisantes |
| Absence de services tiers / Supabase / publication | vérification partielle | moteur de navigation lu ; audit global réseau non exécuté |

## Réserves
- Ne pas déclarer le zoom 400 % conforme tant que l'absence de perte d'information et l'accès à toutes les commandes n'ont pas été vérifiés visuellement.
- Les tests Chromium ne sont pas des essais sur matériel physique.
- Les attributs ARIA ne prouvent pas la qualité des annonces vocales.
- Aucun merge, déploiement ou remplacement de SVG autorisé.

## Rollback
Fermer la PR R5 sans fusion : la convergence R4 reste inchangée. Les changements R5 se limitent au workflow, aux tests et à ce rapport.
