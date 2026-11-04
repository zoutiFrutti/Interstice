# C05-GRA-01 — Contrôle artistique provisoire de la candidate réelle
Date : 2026-11-04. Branches examinées : #174 `01811690`, #176 `fd879d63`, #181 `065584c6`, #182 `2604be97` (HEAD avant ce rapport).

## Passe 1 : preuves exactes
- Captures de référence **ancien état uniquement** : `coordination/work/nav-01/captures/entree-390.png`, `exploration-390.png`, `porte-390.png`, `exploration-1280.png` (SOURCE_HEAD `a699741`, antérieur à #174). Elles ne prouvent ni #181 ni #182.
- Fichiers de #181 inspectés : `assets/nav-01/explorer.css`, avec reprise des corrections Graphiste #176 et Développeuse #179. Le panneau mobile reste à éprouver.
- Fichiers de #182 inspectés : `explorer.html`, `assets/nav-01/explorer.css`, `assets/nav-01/explorer.mjs`. L'entrée devient un grand lien-logo contenant « entrer » ; `enter()` anime la caméra vers `{cx:525,cy:568,span:180}`, avec états `data-dive` puis `data-orienting` pour l'apparition des directions. L'option sans animation est maintenue.
- **Aucune capture nouvelle sur les HEAD #181/#182 ni essai interactif Android vérifié par la Graphiste**. Comparaison après = analyse de code, non validation visuelle.

## Passe 2 : trois corrections ciblées au maximum
1. **P0-A — Entrée / centre rouge : contrôle avant correction.** Le lien-logo est `width:min(83vw,72svh,660px)`, « entrer » centré à 51 %, fond sombre. Le point rouge visé est `(525,568)` mais le centrage perceptif dépend du SVG et du viewport. **Ne pas déplacer le point ni retoucher le logo sans capture du trajet réel**. Si « entrer » couvre le centre rouge, ajuster uniquement `.threshold-enter` dans `assets/nav-01/explorer.css`, avec état focus visible.
2. **P0-B — Directions et continuité : contrôle avant correction.** `data-dive=true` cache les nœuds et les désactive temporairement ; `data-orienting=true` les réintroduit à 48 % d'opacité. Vérifier que l'état est toujours retiré après la première interaction et que les portes redeviennent accessibles. Le repère sticky de #181 et la lecture en panneau peuvent encore casser l'espace sur Android. **Pas de nouvelle animation ajoutée sans test**. Fichiers : `assets/nav-01/explorer.mjs`, `explorer.css`.
3. **P0-C — Chrome mobile 320/390 : contrôle avant correction.** #181 cache certaines commandes jusqu'à ouverture des outils ; risque de découvrir trop tard les fonctions. Vérifier que l'accès est explicite et toutes les cibles ≥44 px, et qu'il n'y a pas de débordement à 320 px ou zoom 400 %. Fichiers : `assets/nav-01/explorer.css`, `explorer.html`.

## Comparaison avant/après, avec niveau de preuve
| Vue | AVANT constaté sur capture ancienne | APRÈS #182 déduit du code, à capturer |
|---|---|---|
| Entrée 390 | Logo et gros appel à entrer, page conventionnelle | Logo cliquable plus grand, petit « entrer » superposé, lien sans animation |
| Plongée | Ancien passage caméra, sans preuve du ressenti | Caméra ciblée (525,568), span 180, repères temporairement masqués |
| Exploration 390 | Cercles et étiquettes au-dessus des branches, commandes présentes | Surcouches atténuées, apparition graduelle, certaines commandes secondaires masquées |
| Porte 390 | Panneau long sous la carte | Contexte spatial et parcours hiérarchisés, mais continuité réelle non démontrée |

## Passe 3 : avis artistique provisoire
- **Conforme au cahier des intentions dans le code :** SVG officiels non redessinés, entrée par logo, option sans animation, quatre portes et ramifications conservées.
- **À corriger si les captures le confirment :** « entrer » trop voyant, cible de plongée mal centrée, apparition des portes trop tardive, repère de porte perdu pendant la lecture, outils trop cachés sur petit écran.
- **Impossible à juger sans essai physique :** qualité de la plongée, sensation d'espace, confort tactile Android, lisibilité 320/390, continuité pendant le scroll, animations réduites et zoom 400 %.

## Cinq questions simples à poser à Zout
1. Quand tu touches le logo, as-tu vraiment l'impression d'entrer dans la faille ?
2. Le petit « entrer » te gêne-t-il visuellement ?
3. La plongée arrive-t-elle au bon endroit, au centre rouge ?
4. Comprends-tu où aller et où tu es quand tu ouvres une porte puis une traversée ?
5. Sur ton téléphone, les commandes sont-elles accessibles sans masquer l'espace ?

## Prochaine preuve indispensable
Développeuse : capturer **sur le HEAD exact de #182 après consolidation** l'entrée à 320/390, la plongée (début/centre/fin), l'exploration 320/390/1280, porte ouverte et traversée ; fournir SOURCE_HEAD et une URL isolée fonctionnelle pour essai Android. Tester clavier, focus, sans animation, réduction des mouvements et 400 %. Priorité à la livraison de la candidate, pas à des retouches spéculatives.

**Corrections de code effectuées pendant cette passe : aucune.** Le présent rapport est seul ajouté sur la branche #182. Pas de validation de Zout, aucune fusion, aucune publication.
