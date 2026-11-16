# C04-GRA-01 — Convergence artistique NAV immersive
Date : 2026-11-04. Périmètre : PR #174 (HEAD `01811690`), #176 (HEAD `db46a013` avant rapport), #179 (HEAD `bb1d4e3e`). Aucune fusion ni publication.

## Preuves et limites
Captures **inspectées visuellement** issues de #174 : `coordination/work/nav-01/captures/entree-390.png`, `exploration-390.png`, `porte-390.png`, `exploration-1280.png` ; `SOURCE_HEAD.txt` = `a699741`, plus ancien que #174. Les CSS de #174, #176 et #179 ont été comparés directement sur GitHub. **Aucune nouvelle capture #176 ou #179 disponible/visionnée** et aucune URL HTTPS de prévisualisation réellement ouverte. Il est donc impossible de livrer honnêtement des captures « après » validées : ce document conserve la comparaison AVANT visuelle / APRÈS code à capturer. Ne pas utiliser les captures anciennes comme preuve des nouveaux correctifs.

## Convergence entre Graphiste et Développeuse
- **#174** : entrée logo Faille noire, quatre portes, sept traversées, pan/zoom, panneaux ; logo officiel Interstice sous surimpression de traits et de nœuds.
- **#179 Développeuse** : retouches CSS P0-A et P0-C : atténuation de lignes additionnelles, panneau un peu translucide, note mobile et ombres allégées. Aucun changement JS ; P0-B absent. Le même CSS de base est modifié que dans #176 : **ne pas fusionner les deux branches mécaniquement**.
- **#176 Graphiste** : CSS de repères et commandes, panneau de liens simplifié, JS `renderDoor()` (localisation de porte, traversées avant index R6), repère mobile sticky. **Conflits potentiels de cascade CSS et de sémantique visuelle** avec #179, à résoudre en un seul patch après tests. La propriété `position:sticky` sur un titre interne au panneau mobile ne prouve pas qu'il reste visible durant tout le défilement de la page : tester sur navigateur réel.
- Les SVG `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` ne sont pas modifiés par les corrections Graphiste ; ne pas les retoucher.

## Trois corrections artistiques maximales
1. **P0-A — Débarrasser la scène de la surcouche « carte à boutons ».** Conserver ramifications officielles et quatre portes (Q5 favorable). Converger vers les traits additionnels atténués de #179 et les repères de #176, sans cumuler des règles contradictoires. Les noms des portes doivent rester lisibles et accessibles au focus. Fichiers : `assets/nav-01/explorer.css`, éventuellement `explorer.html`.
2. **P0-B — Continuité porte → traversée → contenu.** Priorité artistique non résolue. Reprendre le réordonnancement `renderDoor()` de #176, garder le contexte spatial et vérifier une ancre mobile réellement persistante, la branche active visible lors de l'ouverture et un retour compréhensible. **Ne pas confondre panneau sticky avec continuité spatiale validée**. Fichiers : `assets/nav-01/explorer.mjs`, `assets/nav-01/explorer.css`.
3. **P0-C — Mobile 320/390 px et entrée.** Ne pas changer le logo ni inventer un nouveau passage ; tester animation et option sans animation, réduire le chrome et les instructions, conserver toutes les commandes tactiles ≥44 px, alternatives clavier/texte. Vérifier à 320, 390, zoom 400 %, orientation paysage et mouvement réduit. Fichiers : `assets/nav-01/explorer.css`, `explorer.html`.

## Avant/après honnête
| Vue | AVANT, capture #174 examinée | APRÈS attendu de #176/#179, non capturé |
|---|---|---|
| Entrée 390 | Grand logo Faille noire et CTA sur page classique | Identique à dessein ; vérifier la transition réelle et le ressenti, pas seulement l'image |
| Exploration 390 | Quatre grands cercles/étiquettes et barre d'outils masquent une partie du symbole | Lignes et cartouches moins dominants ; risque de densité et de petits textes |
| Porte 390 | Long panneau et listes de boutons sous le symbole ; impression de catalogue | Contexte de porte, parcours avant index R6, repère sticky ; risque de rupture carte/panneau inchangée |
| Exploration 1280 | Logo lisible, quatre portes, boîte de commandes type outil cartographique | Surcouches atténuées ; risque de manque de contraste ou de nœuds trop discrets |

## Régressions à vérifier
- #179 et #176 modifient la même CSS : ordre des règles, contraste, cohérence entre états actif et inactif.
- Sticky mobile : peut ne pas rester visible dans le scroll réel, se superposer au bouton fermer, dégrader la lecture à 400 %.
- À 320 px, grille des commandes sur deux lignes et titres longs peuvent gêner les nœuds ; vérifier sans réduire les cibles sous 44 px.
- Focus clavier, lecteurs d'écran, navigation arrière, sans JS, reduced-motion, scroll tactile et panneaux restent obligatoires.
- Ne jamais diffuser les ressources bloquées, ni publier la candidate.

## Protocole pour les captures « après »
La Développeuse doit générer sur **HEAD identifié** de la variante consolidée : entrée-390, exploration-320, exploration-390, porte-390, traversée-390, exploration-1280, porte-1280, zoom-400 ; inclure fichier SOURCE_HEAD. Comparer côte à côte avec captures #174 au même viewport et même état. Si les captures ne sont pas produites, signaler explicitement « comparaison non réalisée ».

## Questions de validation Zout, après URL HTTPS fonctionnelle
1. L'entrée dans la faille donne-t-elle envie de continuer, avec et sans animation ?
2. Les ramifications restent-elles lisibles et donne-t-on l'impression de **se déplacer dans un espace**, plutôt que de cliquer sur quatre boutons ?
3. Après ouverture d'une porte puis d'une traversée, sais-tu encore où tu es et comment revenir ?
4. À une main sur Android, peux-tu zoomer, recentrer et atteindre une porte sans commandes envahissantes ?
5. Les logos officiels te semblent-ils présents à la bonne échelle ?

**Décision :** corrections de #176 et #179 restent candidates. Priorité de livraison absolue à une URL réellement testable de #174, avant toute validation artistique. Aucun avis de Zout n'est présumé.
