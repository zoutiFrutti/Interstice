# LA FAILLE NOIRE × INTERSTICE · La Graphiste
## Reprise de la transmission 015 : contre-vérification et petite extension accessibilité · 30 octobre 2026

**Statut : candidat PR #35, toujours sans fusion ni publication.** Ce document **complète** la transmission 015 déjà enregistrée (30 passes antérieures) ; il ne réattribue ni ses corrections ni ses captures. Les 30 points ci-dessous sont des **contrôles ciblés** sur les artefacts et branches actuels, et non 30 nouveaux essais Chromium ou Android.

### Références de reprise
- PR #35 : `design/lancement-v0-verifications-2026-10-30`, HEAD lu avant nouveau correctif `d5a806e7a9c9e6ef4af2733505f3c41989aeb5bd`. Après addition de deux assertions de test : commit `e32cc435b1ed1f272e62c1b714bfdc19879df4cc`.
- PR #41 : `bc9da7d57806aee2b5bdcba8afb79dec0ed6d80a` ; PR #44 : `b08ee0b915a162faa2d870debc6580b08ca29935`. PR ouvertes, en brouillon, non fusionnables à l'inspection.
- L'ancien code PR35 testé au SHA `89951c219a4b04b93c8a2906d9b90e01127c81e3` a **57/57** assertions site/Wiki (run [41119393673](https://github.com/zoutiFrutti/Interstice/actions/runs/41119393673)) et **21/21** séquences graphiques carte (run [41119393582](https://github.com/zoutiFrutti/Interstice/actions/runs/41119393582)). Le diff de ce SHA à `d5a806e` est documentaire uniquement : Journal commun + rapport 015. Cela **ne valide pas par anticipation** le nouveau commit de tests.
- Sur PR41 : run [41118818959](https://github.com/zoutiFrutti/Interstice/actions/runs/41118818959), succès au SHA `bc9da7d`, jobs Node et navigateur. Sur PR35 au SHA `d5a806e` : run site [41119904365](https://github.com/zoutiFrutti/Interstice/actions/runs/41119904365), succès.
- Nouvelle exécution déclenchée par `e32cc435` : [41122254985](https://github.com/zoutiFrutti/Interstice/actions/runs/41122254985), **queued à la rédaction** ; ne pas la déclarer verte sans lecture ultérieure de son SHA et de son résultat.

### Trente contrôles de reprise (FAIT = consultation/contrôle réel ; EN ATTENTE = preuve insuffisante)

| # | Lot | Contrôle et trace | État |
|---|---|---|---|
| 01 | Références | Relire le HEAD PR35, branche et état draft. | FAIT |
| 02 | Références | Relire le HEAD PR41, même statut. | FAIT |
| 03 | Références | Relire le HEAD PR44 et ses fichiers changés. | FAIT |
| 04 | Références | Comparer `89951c` à `d5a806` : uniquement bilan et journal, **pas** de changement exécutable. | FAIT |
| 05 | Références | Identifier les blobs éditoriaux PR44 `7be5bba6...` et `d5210611...` comme sources des copies graphiques. | FAIT |
| 06 | Articles | Comparer réellement les paragraphes de « Décider ensemble » : **22/22** textes sources identiques dans copie ; deux paragraphes de présentation en plus. | FAIT |
| 07 | Articles | Même vérification « Qui fait vivre les communs ? » : **19/19** conservés ; deux paragraphes de présentation ajoutés. | FAIT |
| 08 | Articles | Confirmer l'ordre de ces 22 puis 19 paragraphes ; aucune permutation de source. | FAIT |
| 09 | Articles | Confirmer un seul H1 par page et respectivement **6/8 H2** comme dans les sources. | FAIT |
| 10 | Articles | Vérifier zéro ID dupliqué et zéro lien `#ancre` manquant sur les deux copies ; 15 et 9 liens externes présents, sans valider leur destination distante. | FAIT |
| 11 | Accueil | Vérifier H1 unique, accroche « Et si on essayait autre chose ? » et CTA `#decouvrir` / `participer.html`. | FAIT |
| 12 | Accueil | Contrôler l'absence d'IDs HTML en double, la mention de projet non adopté et le caractère fictif de l'exemple d'atelier. | FAIT |
| 13 | Responsive | Relire la règle CSS PR35 `@media(max-width:360px)` et les correctifs des boutons/colonnes. | FAIT (statique) |
| 14 | Responsive | Vérifier la preuve précédente Chromium 320×760 sur trois pages principales, sans réattribuer l'exécution. | FAIT (preuve historique) |
| 15 | Responsive | Vérifier les preuves 390×844 et 1280×800 des 18 pages, captures mentionnées par les artefacts de run. | FAIT (preuve historique) |
| 16 | Cartes | Confirmer le **même blob** `cartes-design.css` PR35/PR41 : `07e8c54fff6cc4dfc66f42ba19cf364962e400c5`. Pas de seconde copie nécessaire. | FAIT |
| 17 | Cartes | Inspecter `cartes-compat.css` PR41 : correctifs 320 px, boutons de commune, règles de débordement. | FAIT |
| 18 | Cartes | Vérifier la séparation de `cartes-integration-014.css` : delta graphique uniquement dans PR35, injecté aux tests, **non chargé dans le HTML PR41**. | FAIT |
| 19 | Cartes | Examiner les six `DEMO_INITIATIVES` et cinq objets ajoutés : **11 fiches fictives**, 7 « communs », 4 « possibles », quatre `kind`. | FAIT |
| 20 | Cartes | Contrôler l'existence de la liste initiale, bascule liste/carte, SVG étiqueté, boutons communaux et alternative au module cartographique en panne dans les tests. | FAIT (statique + preuves CI antérieures) |
| 21 | Accessibilité | Vérifier le libellé SVG `aria-label` avec commande Tab/Entrée ; les petits marqueurs possèdent aussi leurs boutons de commune. | FAIT (code) |
| 22 | Accessibilité | Relever un manque réel : `#map-panel` sans `tabindex`, aucune instruction visible ou référencée de défilement horizontal. Le scroll graphique existe dans le candidat PR35. | FAIT : réserve |
| 23 | Accessibilité | Transmettre à la Développeuse une suggestion limitée d'aide de balayage et `aria-describedby`, sans refonte du SVG, sans modifier PR41. | FAIT : commentaire PR41 |
| 24 | Accessibilité | Contrôler `@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}` existant dans PR35. | FAIT |
| 25 | Accessibilité | **Éditer le test existant** : vérifier effectivement le `scrollBehavior:auto` en contexte `reducedMotion:reduce` sur chaque page et une épaisseur de contour du sommaire d'au moins 3 px. | FAIT (commit `e32cc435`), CI en attente |
| 26 | CI | Vérifier run PR35 `41119393673` et artefact `interstice-v0-captures` ; présence de captures, sans prétendre les avoir ici ouvertes image par image. | FAIT (métadonnées) |
| 27 | CI | Vérifier run carto `41119393582`, artefact `graphiste015-cartes-320-390-1280` ; la lecture mobile est testée sur **snapshot de la PR41** et CSS injecté, pas sur Android. | FAIT (métadonnées) |
| 28 | CI | Vérifier CI **du nouveau commit** `e32cc435` et ses nouvelles assertions ; mise à jour du bilan uniquement après conclusion et logs. | EN ATTENTE au dépôt |
| 29 | Mobile physique | Distinguer Chromium simulé de Crosscall Stellar X5 / TalkBack / zoom système ; **aucun essai matériel effectué** ni attesté. | A_FAIRE (test humain) |
| 30 | Transmission | Ajouter ce bilan sur la branche existante, consigner le point d'accessibilité au Journal commun, et renvoyer à La Relieuse sans présumer qu'une autre conversation l'a reçu. | FAIT après écritures GitHub |

### Corrections et périmètre strict
- **Une seule modification fonctionnelle de cette reprise, dans les tests de PR35** : `tests/lancement-v0-smoke.mjs` ajoute les deux assertions d'accessibilité. Le produit n'a pas été redessiné.
- **Pas de changement** aux textes éditoriaux PR44, au code ou au CSS de PR41, aux 11 fiches de démonstration, au manifeste, aux formulaires et à la publication.
- Le delta SVG mobile de la PR35 reste une **proposition à valider par la Développeuse**, et le CSS partagé est déjà identique.
- Vérification physique à garder au protocole `tests/GRAPHISTE_014_ANDROID_PHYSIQUE_A_FAIRE.md`, avec lecture sans zoom forcé, orientation, TalkBack, taille de police système, ordre Tab et facilité à revenir en liste.
- **Pas de validation graphique finale, fusion ou publication sans les arbitrages humains et les nouvelles preuves de CI.**

### Pour La Relieuse
Garder l'ordre d'intégration : **PR44 pour le fond éditorial**, **PR35 pour la présentation**, **PR41 pour la seule application cartographique**. Résoudre les conflits par fichiers plutôt que fusionner en bloc. Les deux cartes restent fictives et aucun partenaire TIS-001 n'a été introduit.

Le présent dépôt GitHub ne constitue pas une notification automatiquement reçue dans la conversation de La Relieuse.
