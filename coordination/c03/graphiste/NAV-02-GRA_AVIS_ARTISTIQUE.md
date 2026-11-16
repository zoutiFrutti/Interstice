# NAV-02-GRA — Revue artistique localisée de la navigation immersive
**Émettrice :** La Relieuse. **Atelier :** La Graphiste. **Priorité :** P0. **Date :** 2026-11-04.
**Source exacte examinée :** PR #174, HEAD `01811690ae5dbd8bef4db2100395feea77a55431` ; captures suivies dans `coordination/work/nav-01/captures/`, SOURCE_HEAD `a69974101d0d8a14bbcda7313915d5dc6f51ec32`.
**Statut :** audit du code et des contrats de capture ; lecture directe des pixels PNG non réalisée. Pas de visa visuel définitif, pas d'approbation de Zout.

## Ce qui correspond à la vision
- `explorer.html` : entrée par `assets/logo-faille-noire.svg` puis identité Interstice, deux SVG officiels utilisés par référence, sans retouche des sources.
- `assets/nav-01/camera.mjs` et `explorer.mjs` : espace SVG pan/zoom, nœuds projetés dans la caméra, quatre portes, sept traversées transversales, retour et accès aux manifestes.
- Entrée immédiate sans animation, annuaire HTML, commande de mouvement réduit ; le contenu éditorial bloqué n'est pas publié.
- Tests consignés dans `RESULTATS_TESTS.md` : 13/13 scénarios navigateur et 8/8 contrôles caméra sur HEAD antérieur `a699741...`. Ces tests ne valent pas avis artistique.

## Ce qui reste en tension
1. **Ramifications et portes non organiquement liées.** Le SVG officiel est dessiné comme une image à coordonnées `0..1000` ; les quatre portes sont aux coordonnées `(160,190)`, `(850,240)`, `(150,765)`, `(850,785)`. Le calque `#branches` dessine quatre courbes supplémentaires partant de `(525,568)` et aboutissant aux portes, tandis que le logo possède ses ramifications propres. Cela risque de superposer deux réseaux graphiques distincts. Vérifier sur captures avant de changer une géométrie.
2. **Rupture spatiale au moment de lire.** `renderDoor()` ouvre `#panel` et propose « Consulter l’index R6 existant » dans un nouvel onglet externe. C'est une sortie fonctionnelle de l'exploration vers un site à index. Les traversées sont surtout des listes `panel-links`, pas encore des déplacements spatiaux perceptibles. C'est une limite du prototype, pas un motif pour inventer du contenu.
3. **Commandes et labels susceptibles d'occuper l'espace.** `.appbar`, `.map-controls`, `.top-actions`, `.space-note`, `.node-label` et `#panel` composent plusieurs couches d'interface. Sur 320–390 px, vérifier les masquages et la continuité visuelle. Les nœuds de 46 px et leurs labels opaques ne doivent pas effacer les ramifications ou le point central.

## Trois corrections visuelles prioritaires, localisées et réalisables
### P0-A — Réconcilier calque de routes et dessin officiel
**Fichiers :** `explorer.html` (groupe `#branches`), `assets/nav-01/graph-data.mjs` (positions), `assets/nav-01/explorer.css` (`.branch-line`, `.walk-line`, `.orb`).
- Conserver les SVG officiels intacts. Ne pas créer de « faux » traits rouges qui se font passer pour des ramifications du logo.
- Distinguer visuellement **ramification artistique** (source officielle) et **liaison de navigation** (calque discret, activé lors de la sélection). Tester une variante où les lignes guides inactives sont fortement atténuées, et où seul le chemin sélectionné s'affirme.
- Valider sur captures à 390 et 1280 px que les portes restent identifiables sans couvrir le point principal ni les nœuds originaux.
- Ne pas déplacer les portes arbitrairement sans comparer la projection aux captures et aux coordonnées du symbole.

### P0-B — Conserver le sentiment de lieu dans les panneaux
**Fichiers :** `assets/nav-01/explorer.mjs` (`renderDoor`, `renderPath`, `focusPoint`, `renderRoute`), `assets/nav-01/explorer.css` (`.panel`, `.map-wrap`).
- Faire du panneau une lecture contextuelle superposée à l'espace, pas une destination visuellement indépendante : conserver visible une partie de la branche et la porte active quand le panneau est ouvert.
- Hiérarchie : nom du lieu, courte description, bifurcations visibles, retour spatial explicite ; réduire la prééminence des liens d'index R6, qui restent nécessaires et clairement nommés.
- Ne pas inventer de contenu éditorial ; PAR-005 reste fermé.
- Tester le bouton Retour navigateur, le focus clavier et le scroll à 400 % avant d'accepter une disposition.

### P0-C — Mobile : moins de chrome, mêmes fonctions
**Fichiers :** `assets/nav-01/explorer.css` (règles responsive `.appbar`, `.map-controls`, `.top-actions`, `.space-note`, `.node-label`, `.panel`), `assets/nav-01/explorer.mjs` (`panelFocus`, `paint`).
- Sur 320/390 px, privilégier une carte lisible, une action principale contextuelle et des commandes secondaires regroupées, **sans** masquer la liste HTML ni le lien « Entrer sans animation ».
- Préserver le défilement vertical ; pas de geste pincement obligatoire, cibles ≥44 CSS px, commandes zoom/recentrage accessibles.
- Contrôler que `paint()` ne masque pas une porte sélectionnée sous le panneau ou en dehors de la zone visible sans alternative immédiate.

## Alternatives et tests
- Entrée sans animation : lien `data-enter="still"`, à tester en condition réelle ; `prefers-reduced-motion` doit empêcher toute caméra automatique.
- Sans JS : annuaire HTML, portes et manifestes restent lisibles. Les fragments `#porte/...` doivent conduire à une section HTML utile.
- Clavier : focus visible, Tab, Entrée, Escape, historique, focus rendu au déclencheur ; lecteurs d'écran matériels non testés.
- 320/390/768/1280 px + zoom navigateur 400 % ; captures de **l'entrée**, **l'exploration**, **une porte ouverte** et **une traversée active**, avant/après corrections.
- Examiner les PNG de `coordination/work/nav-01/captures/` (HEAD source indiqué) et les artefacts CI du HEAD exact. **Non examinés visuellement dans cette passe** : ne pas prétendre qu'une anomalie de cadrage est prouvée par capture.

## Transmission Développeuse / Relieuse
**Développeuse :** examiner P0-A/B/C et proposer un patch minimal sur une branche technique dépendante ; vérifier compatibilité des tests et de l'accessibilité. Aucun accord ou accusé de sa part présumé.
**Relieuse :** arbitrer les trois priorités après revue des captures et obtenir le retour artistique de Zout sur un aperçu réellement accessible. Aucun avis Zout inventé.
**Avis :** direction immersive cohérente au niveau du moteur, expérience encore partiellement structurée comme menus + panneaux. **Corrections artistiques ciblées recommandées, sans toucher aux logos ni à main.**
