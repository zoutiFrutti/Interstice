# La Lectrice — R4-LEC : revue navigation immersive et statuts
**2 novembre 2026.** Branche `atelier-lectrice/r4-navigation-revue-20261102`. **Avis éditorial, aucune modification des pages Graphiste/Développeuse, aucun visa, fusion ni publication.**

## Références exactes réellement examinées
PR #135 HEAD `69a4d41c68f68299d2a6227f146d6852ca8b50af`, #136 `d580b3f8dd13507964c9c397031aa87899c2bbec`, #137 `1f094d866a574905b98cf60c2e8aa172b3f81634`, #138 `888015794b3ddbf4dddc1b43d2ba9af493971d09`. Branche candidate consolidée examinée : `integration/r3-identite-navigation-immersive-candidate-20261102`.

- `design-system/faille-navigation-interactive.html` blob `b02b776c2dba6be208e255ddadecbc00dbde82e4`
- `assets/faille-navigation.js` blob `bdadce29a8468d5417f816bfd1abaf5639de9f78`
- `index.html` blob `bc892b19551a6870d001654f561da6a7bd488492`
- `parcours.html` blob `9d49e30f140b800ca6f235f43cd5728e8a8106c0`
- `coordination/integration/2026-11-02_IDENTITE_NAVIGATION_IMMERSIVE_SUIVI.md` blob `55c4a475aca6c82926f5fea3fe30cb2097fab6cd`
- `tests/faille-navigation-integration.test.mjs` blob `0df2a3df2be185115c7e6d9376fe6f5e3b07cb46`
- Branche Développeuse R2 : `integration/r2-dev-navigation-faille-20261102`, JS blob `626bcb6a05ab284a349e021a67fed6fa8c401613` différent de R3. **Pas de réconciliation de logique certifiée**.

## Matrice des six points de contrôle
| Problème / contrôle | Verdict | Preuve et objection | Action |
|---|---|---|---|
| 1. Nœuds interprétés comme partenariats/liens historiques | **CONFORME** pour le texte du prototype | Avertissement explicite « calque de navigation provisoire, pas une cartographie des liens historiques » ; traits SVG décoratifs | Conserver cette mention au voisinage immédiat des nœuds ; ne pas promouvoir la cartographie comme graphe sourcé |
| 2. Cinq rubriques provisoires | **CONFORME** | Wiki, Médiathèque, Atlas, Parcours, Entraide ; en-tête « prototype candidat » ; suivi d'intégration déclare cinq nœuds provisoires | Conserver statut candidat même si la variante est choisie |
| 3. Droits en manifestation non validés | **CONFORME** pour le statut textuel ; **CORRECTION NÉCESSAIRE** pour l'accès ciblé | Liste alternative dit « Entraide : droits en manifestation, contenu non validé » ; page `parcours.html` signale relecture juridique ; toutefois le lien `../parcours.html#entraide` n'aboutit à **aucun** `id="entraide"` dans cette page | Ajouter un identifiant stable à la section Entraide sur `parcours.html` ou pointer vers une destination existante ; tester clavier, JS/non-JS et chargement direct |
| 4. Libellés, pictogrammes, texte | **CORRECTION NÉCESSAIRE** | Nœud « Entraide » iconisé `✚`, potentiellement interprété comme sanitaire ; « point rouge » n'explique pas la destination au nouveau visiteur ; script annonce « destination accessible » sans prouver accessibilité du lien ou du contenu | Privilégier « Choisir Entraide » accessible et microcopie « Ouvrir la rubrique Entraide » ; icône décorative uniquement ; reformuler affirmation d'accessibilité non testée |
| 5. Alternatives textuelles effectives | **CORRECTION NÉCESSAIRE** | `nav#rubriques` permanent avec 5 liens HTML, présent sans JavaScript ; quatre destinations existent dans l'arbre ; le cinquième lien vers `#entraide` est cassé en tant que saut d'ancre. Les nœuds SVG avec `role=button` et clavier sont candidats ; lecteur d'écran réel non testé | Corriger l'ancre, s'assurer que le repli clavier ne dépend pas du SVG et vérifier les cinq destinations à taille mobile / sans JS |
| 6. Sources, réserves, statuts visibles | **CORRECTION NÉCESSAIRE** | Navigation mentionne le statut candidate et le statut non validé de l'entraide, mais ne montre pas source/date/version pour les autres rubriques ; la mention « export fidèle validé en attente de La Graphiste » est ambiguë : suivi dit que les SVG exportés **ne sont pas validés**, seule la planche artistique raster l'est | Remplacer par « Symbole SVG provisoire, fidélité à la planche artistique à contrôler » ; statut et sources au niveau de chaque fiche, pas seulement de la navigation |

## Problèmes supplémentaires et réserves P0
- **Promesse de confidentialité sur l'accueil** : `index.html` affirme « Ce formulaire transmet ta proposition à une file de validation privée », alors que la réalité des endpoints, permissions et collecte demeure P0. Il s'agit d'une formulation à suspendre ou conditionner avant mise en ligne. Aucun test serveur réalisé.
- **Représentation et décision humaine** : l'accueil emploie « Un projet de La Faille Noire », « notre manifeste » et « propositions approuvées » ; conserver le statut réel de l'initiative de Zout, sans faire croire à un collectif, un organe de modération constitué ou une validation automatique.
- **Logiciel en concurrence** : JS R2 et R3 ont des blobs différents. Les interactions zoom/pinch/historique ne sont pas déclarées vérifiées par cette revue. La PR #138 reste candidate.

## Vérifications réellement faites
**Effectuées** : ouverture des HEAD PR #135–138 ; récupération et lecture HTML de navigation, JS R3, accueil, page Parcours, suivi et fichier de tests ; recherche exacte de `id="entraide"` (absent), présence des 4 routes de destination à l'arbre du dépôt ; présence d'une alternative HTML. **Non effectuées** : exécution Node/Chromium, tests tactiles, VoiceOver/TalkBack, contrôle visuel des SVG, capture sur téléphone, audit de sécurité/serveur ou contrôle de tous les liens du site.

## Transmission et suites
**Graphiste** : clarifier SVG et microcopie, pictogramme et destination Entraide ; **Développeuse** : réconcilier R2/R3, corriger ancre, tester sans JS/mobile/clavier/historique et sources par fiche ; **Juriste** : valider uniquement les procédures de droits et la confidentialité ; **Relieuse** : conserver ces verdicts dans le registre avec leur niveau de preuve ; **Zout** : seul arbitre de l'identité et de la publication.

Les verdicts portent sur **les fichiers réellement inspectés**, sans autorisation d'intégration.
