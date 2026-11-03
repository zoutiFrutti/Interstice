# La Lectrice — R6-LEC-03, avis indépendant de navigation

**3 novembre 2026 · P1 · candidat sans publication ni validation éditoriale automatique.**
Branche de transmission : `atelier-lectrice/r6-controle-navigation-20261103`. Version examinée : PR #150 `integration/r6-dev03-logos-valides-20261103` HEAD `9f1ade55741be5ba90912dbbe463b1a3c87dec59`. Comparaison avec #143 `2d4dbc40f14f498e07028131d59d298ac9ab4c9f` et #148 `f661147e691178b5da4889136eba802e9daad1ef`.

## Fichiers source réellement lus
| Chemin | Git blob |
|---|---|
| `design-system/faille-navigation-interactive.html` | `eb9ba368def07797129d389a468b014fdbf31399` |
| `assets/faille-navigation.js` | `739e01e3d4ab2afafa1ce19e7e89d49c191b5591` |
| `assets/faille-navigation.css` | `ef2ca3a0ff3ef3c9be681acc9f58a1cd38c16295` |
| `parcours.html` | `7c7ba26834fcaebf43e38910394e688979ec9b16` |
| `tests/r6-identite-remplacement.browser.test.mjs` | `3910746d69d76180a412c0a8f25cdb8871ea4522` |
| `tests/r6-dev02-stabilisation.browser.test.mjs` (#148) | `3f91109dea9696964c7f8d1207005b28c8e2e2d3` |
| `coordination/transmissions/2026-11-03_DEVELOPPEUSE_R5_MATRICE_ACCESSIBILITE.md` (#143) | `7d5855de860d874f1f75c7c248fb180e5b1f8a78` |
| `coordination/transmissions/2026-11-03_DEVELOPPEUSE_R6_DEV02_AUDIT.md` (#148) | `97c53184c32f0b6072cb9978ab4f2e18e173bc03` |
| `coordination/transmissions/2026-11-03_DEVELOPPEUSE_R6_DEV03_INTEGRATION.md` (#150) | `fba0f9764206b67d33f0590e1b633fb63863d47b` |

## Huit verdicts motivés
| Point contrôlé | Verdict | Preuve, limite ou correction |
|---|---|---|
| Cinq destinations compréhensibles | **CONFORME** au niveau des libellés | Wiki, Médiathèque, Atlas, Parcours, Entraide visibles dans les nœuds SVG et dans les cinq liens du sommaire. La distinction « Parcours »/« Entraide » reste à expliciter : Entraide est une section de Parcours, non une page indépendante. |
| Intitulés accessibles et alternatives | **CORRECTION REQUISE** | `aria-label="Choisir …"` sur les cinq nœuds, boutons zoom nommés, nav textuel. Mais l'instruction « Sélectionnez un point rouge » reste visuelle ; écrire aussi « Choisissez une rubrique dans la liste » à proximité des commandes, et indiquer l'équivalence nœud/lien. L'état « rubrique candidate » figure dans le JS, pas les sources et réserves pour chacune. |
| Clavier, Escape, retour et historique | **NON VÉRIFIÉ** en comportement indépendant | Code : `tabindex=0`, Enter/Espace, flèches/zoom, `popstate`, bouton Retour ; tests Chromium annoncés par équipes mais non rejoués ici. Le traitement d'historique et de focus après Retour demande un test effectif, pas seulement présence de mots-clés. |
| Indicateurs de focus | **CONFORME** pour présence CSS, **NON VÉRIFIÉ** pour rendu | `:focus-visible` avec contour 3px et décalage 3px sur boutons, liens, nœuds et carte ; pas de vérification d'occlusion, de contraste réel ni de parcours après zoom. |
| Mode sans JavaScript | **CONFORME** structurellement | `nav#rubriques` présente cinq `<a href>` permanents, sans condition JS. Les quatre fichiers `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html` existent. Le lien `parcours.html#entraide` pointe désormais vers `section id="entraide"` : **anomalie R4 résolue dans la candidate R6**. Tests de clic sans JS non réexécutés. |
| Zoom navigateur 400 % | **NON VÉRIFIÉ** au sens demandé | #143 rapporte un run réussi pour contrôles automatisés ; #148 contient test de `document.documentElement.style.zoom='400%'`, inspecté dans le code, mais pas exécuté par La Lectrice. CSS zoom Chromium n'atteste ni reflow WCAG ni absence de perte au zoom natif. VoiceOver/TalkBack/NVDA non testés dans cet avis. |
| Nœuds et liens historiques | **CONFORME** pour le texte candidat | Avertissement explicite « calque de navigation provisoire, pas une cartographie des liens historiques » ; nœuds comme destinations, pas partenariats. Les flèches rouges décoratives restent susceptibles de suggérer une hiérarchie : ajouter éventuellement « les flèches indiquent des accès au site, non des relations entre personnes ou organisations ». |
| Statut réel des contenus et du logo | **CORRECTION REQUISE** | La liste mentionne « Entraide : droits en manifestation, contenu non validé » et `parcours.html` précise la relecture juridique. Mais le paragraphe du prototype dit « Symbole Interstice R6 candidat, non encore validé par Zout », formulation dépassée par la validation artistique de la variante GRA02 et son intégration candidate #150. Proposer : « Logo Interstice : variante artistique approuvée par Zout ; intégration technique et navigation encore candidates, sans publication. » Ne pas confondre cette décision avec validation de la navigation, des sources ou des fiches. |

## Points éditoriaux prioritaires à retourner à la Graphiste/Développeuse
1. Mettre à jour **uniquement après rapprochement avec La Relieuse** le paragraphe de statut graphique : approuvé artistiquement ≠ navigation/QA/publipostage autorisés. Le fichier de navigation ne doit pas démentir la décision humaine enregistrée.
2. Expliquer dans la liste que **Entraide** est une sous-partie de **Parcours** et que les droits en manifestation restent une fiche en relecture juridique, non un guide validé.
3. Ajouter une consigne non visuelle et conserver l'alternative permanente, sans dépendre des coordonnées SVG ni des pictogrammes.
4. Si le zoom 400 % est présenté comme « conforme », demander une preuve de lecture des libellés, d'absence d'occlusion et de reflow au zoom natif ; l'affirmation actuelle des rapports est plus prudente et doit rester telle.
5. Les sources et statuts doivent figurer **dans chaque fiche/document d'arrivée** ; la métaphore graphique n'est ni une preuve de lien documentaire ni un visa éditorial.

## Tests réellement effectués et absents
**Effectué indépendamment** : lecture du HTML/JS/CSS, de `parcours.html`, des tests source et des rapports des trois PR ; vérification dans l'arbre Git de la présence des quatre pages et de la page de comparaison ; confrontation textuelle de l'URL `#entraide` à l'identifiant de destination ; vérification de la présence du texte d'avertissement, des cinq nœuds et des cinq liens alternatifs. **Non effectué** : exécution Node/Playwright, test navigateur autonome au zoom 400 %, prise de focus à la souris/clavier, essais téléphone, lecteurs d'écran physiques, vérification visuelle des sept tailles des SVG. Les CI rapportées par les autres ateliers ne sont pas des tests exécutés ici.

## Conclusion et limites
Avis R6-LEC-03 **CORRECTION REQUISE** avant visa technique/éditorial : principalement le statut graphique périmé et la désambiguïsation Entraide, ainsi que la preuve manquante de zoom natif et de parcours focus. Pas de **BLOQUÉ** technique certain sur la seule inspection des fichiers, mais le statut juridique de DROIT-001 demeure non validé et ne doit pas être affiché comme prêt. Toutes les pages et les logos restent sur branche candidate. Aucun merge, publication, adoption collective ou décision automatique.
