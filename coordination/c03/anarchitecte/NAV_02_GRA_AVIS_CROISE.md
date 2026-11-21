# NAV-02-GRA — Avis croisé Anarchitecte / Graphiste (candidat)

**Source inspectée :** PR #174, HEAD `01811690ae5dbd8bef4db2100395feea77a55431` ; `explorer.html`, `assets/nav-01/explorer.css`, `assets/nav-01/explorer.mjs`. **Pas de prévisualisation interactive ni de test Android réalisé**. Q1 et Q4 négatifs sont provisoires ; Q2/Q3 non vérifiés ; Q5 positif.

## Diagnostic plausible et éléments concrets

1. **La carte est encadrée comme une application classique.** `explorer.html` superpose `.appbar`, `.map-controls`, `.top-actions`, `.map-meta` et `.panel` à une scène SVG ; `explorer.css` leur donne des fonds opaques, bordures et panneaux rectangulaires. L'ensemble peut rappeler un tableau de bord malgré le pan/zoom.
2. **La lecture quitte l'espace au lieu de s'y ancrer, surtout sur téléphone.** Sous 768 px, `.panel,.panel.wide` deviennent `position:relative;width:100%`, après la scène ; `panelFocus()` déclenche `scrollIntoView()`. Le geste d'exploration peut alors ressembler à « carte puis fiche web ».
3. **Les ramifications existent mais restent schématiques.** Les portes sont quatre nœuds positionnés autour du logo Interstice ; `drawPaths()` trace des courbes entre portes selon l'ordre éditorial des Parcours. Leur géométrie ne prouve aucune filiation historique ; il faut garder cette distinction visible.

## Trois corrections localisées proposées, sans toucher aux SVG officiels

### P0-A — Faire disparaître l'effet « barre d'application »
**Fichier :** `assets/nav-01/explorer.css`, avec éventuellement une classe d'état dans `explorer.mjs`.

À l'état exploration, alléger visuellement `.appbar` et `.map-meta`, réduire les fonds rectangulaires, maintenir les contrôles comme commandes discrètes mais lisibles et accessibles au clavier. Ne pas masquer les contrôles nécessaires, l'état candidat ni l'accès textuel. Conserver une zone tactile d'au moins 44 px.

**Montrer à Zout :** capture avant/après de la vue globale sur Android, avec quatre portes, accès aux traversées et commandes visibles.

### P0-B — Ancrer le contenu dans la scène sur mobile
**Fichiers :** `assets/nav-01/explorer.css`, `assets/nav-01/explorer.mjs`.

Expérimenter une fiche courte superposée à la scène (panneau bas à hauteur limitée, défilable), laissant visibles le nœud actif et une portion des ramifications. Éviter de faire défiler automatiquement toute la page vers une fiche située sous la carte. Maintenir le focus clavier, la fermeture, le retour et un accès textuel complet ; proposer un mode liste si le panneau réduit ne suffit pas.

**Montrer à Zout :** ouverture d'une porte puis d'une étape de PAR-003, retour et bifurcation, sans rupture visuelle de l'espace ; vérifier 320/390 px et zoom navigateur 400 %.

### P0-C — Clarifier le statut des lignes et donner une profondeur de parcours
**Fichiers :** `assets/nav-01/explorer.css`, `assets/nav-01/explorer.mjs`, éventuellement `explorer.html`.

Renforcer la distinction visuelle entre branche structurelle, chemin candidat actif et chemins atténués, sans remplacer les 4 portes/7 Parcours ni inventer de liens historiques. Ajouter une légende discrète : « Chemins de navigation proposés, pas filiations historiques attestées ». Préserver la lisibilité des nœuds (Q5 positif), les préférences de mouvement réduit et le contraste.

**Montrer à Zout :** même cadrage sans Parcours actif, puis PAR-002 actif, puis retour à la vue entière.

## Ordre de livraison / réserves

**P0 technique avant jugement artistique :** La Développeuse doit fournir une URL HTTPS isolée effectivement ouvrable sur Android, avec permission et coût vérifiés. Les captures statiques ne remplacent pas ce test. Ne pas bloquer cette URL en attendant P0-A/B/C.

- La Graphiste définit la variante visuelle et les critères de comparaison ; La Développeuse implémente sur branche dépendante de #174, sans écraser le travail de #178 (pont documentaire).
- La Lectrice contrôle le texte de légende et les statuts des contenus bloqués, notamment PAR-005.
- Q1/Q4 : avis sur aperçu, non verdict sur expérience non testée. Q2/Q3 restent ouverts ; Q5 ne doit pas régresser.
- Aucun SVG officiel modifié, aucune fusion, aucune publication.
