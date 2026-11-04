# NAV-02-GRA — Retour d'audit Zout et arbitrage graphique
**Date :** 2026-11-04. **PR de référence :** #174 HEAD `01811690ae5dbd8bef4db2100395feea77a55431`. **Branche graphique :** PR #176 HEAD initial `4ff7df665f5459e6cd9169172c6ceb1b7e8d6621`.

## Interprétation exacte du retour
- Q1 direction visuelle : **NON**, sur les éléments visibles ; la candidate interactive n'a pas été ouverte par Zout.
- Q4 impression d'exploration : **NON**, même limite.
- Q2 envie d'explorer : **non vérifié**.
- Q3 logos officiels intégrés à bonne taille : **non vérifié par Zout**.
- Q5 lisibilité ramifications/nœuds : **OUI**.
**Conclusion :** insatisfaction réelle sur les éléments visibles ; ni validation ni rejet définitif de l'expérience interactive. L'absence d'URL HTTPS testable est un blocage de réception, à traiter par la Développeuse sans déploiement public.

## Trois corrections artistiques localisées au maximum
### 1. P0 — Supprimer la sensation de « menu posé sur le logo »
**Causes plausibles :** gros cercles numérotés, étiquettes opaques permanentes et lignes de guidage supplémentaires dans `explorer.html` / `assets/nav-01/explorer.css`. Sur les captures `exploration-390.png` et `exploration-1280.png`, la lecture des quatre portes ressemble à quatre choix de menu répartis sur une image.
**Correction :** conserver les nœuds et ramifications officiels lisibles ; alléger les cartouches et guides non officiels ; renforcer visuellement uniquement la porte active au focus/sélection. Garder noms textuels et cibles tactiles ≥44 px ; ne pas cacher l'information au clavier ou au lecteur d'écran.
**Fichiers :** `explorer.html`, `assets/nav-01/explorer.css`, au besoin `assets/nav-01/explorer.mjs`.
**État :** première atténuation CSS déjà candidate en PR #176 ; pas encore vérifiée par nouvelle capture.

### 2. P0 — Faire sentir qu'on reste dans le même espace en lisant
**Causes plausibles :** sur `porte-390.png`, la carte laisse place à un long panneau de liens ; `renderDoor()` met en avant un index R6 externe. L'ouverture d'une porte donne l'impression d'une page classique.
**Correction :** conserver un repère visible de la porte et de sa branche active ; hiérarchiser « lieu → ramifications → traversées → index R6 secondaire » ; faire de la lecture une étape dans l'espace, non une sortie automatique. Maintenir retours, historique, manifeste et alternative HTML.
**Fichiers :** `assets/nav-01/explorer.mjs` (`renderDoor`, `renderPath`, `focusPoint`), `assets/nav-01/explorer.css` (`.panel`, `.map-wrap`, `.panel-links`).
**État :** contexte de porte et lien R6 secondaire déjà candidats en PR #176 ; aucune preuve d'effet immersif en navigateur.

### 3. P1 — Libérer la scène mobile sans retirer les fonctions
**Causes plausibles :** à 390 px, commandes et textes d'instruction occupent une part importante du viewport ; le panneau en flux repousse la scène.
**Correction :** commandes plus compactes et groupées, note d'instruction discrète, scène et porte active visibles autant que possible ; accès clavier, tactile, mode défilement, zoom, recentrage, manifeste, sans JS et réduction des mouvements maintenus. Ne pas cacher des commandes essentielles derrière un geste non documenté.
**Fichiers :** `assets/nav-01/explorer.css` (responsive), éventuellement `explorer.html` pour la hiérarchie.
**État :** première proposition CSS en PR #176, à valider à 320/390 px et zoom 400 %.

## À montrer à Zout, dans cet ordre
1. **Entrée réelle** sur URL HTTPS isolée : logo Faille noire, passage vers Interstice, avec/sans animation ; Zout juge alors Q2 et l'échelle des logos (Q3).
2. **Exploration libre sur son Android** : quatre portes, ramifications lisibles, déplacement, recentrage ; comparer le ressenti à l'image statique et réévaluer Q1/Q4.
3. **Porte et traversée** : ouverture, bifurcation, retour dans l'espace, sans rupture vers un catalogue ; démontrer l'alternative accessible sans animation.

## Dépendances et limites
- **Développeuse :** fournir une URL HTTPS isolée réellement testée et accessible sur Android, avec contrôle d'accès, sans toucher à main/production ; réaliser captures et tests sur le HEAD corrigé ; indiquer si une correction CSS/JS de #176 peut être reprise dans #174 après QA. Aucune acceptation technique présumée.
- **Relieuse :** recueillir le retour de Zout après accès à la candidate. Ne pas transformer Q1/Q4 en rejet définitif avant essai.
- **Graphiste :** protège `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` ; aucun remplacement ni redessin.
- **Publication :** aucune fusion, aucun déploiement public, aucune ressource candidate débloquée.
- **Preuve :** captures inspectées `entree-390.png`, `exploration-390.png`, `porte-390.png`, `exploration-1280.png`, dont SOURCE_HEAD `a69974101d0d8a14bbcda7313915d5dc6f51ec32`, antérieur au HEAD #174. Les changements #176 n'ont pas encore de captures après correction.

**Avis :** trois corrections ciblées suffisent pour un prochain essai ; l'étape bloquante reste l'accès effectif de Zout à la candidate.
