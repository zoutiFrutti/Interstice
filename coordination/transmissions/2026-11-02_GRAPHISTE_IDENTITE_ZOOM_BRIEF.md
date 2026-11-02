# Identité validée et parcours de la faille — transmission Graphiste, 2026-11-02

## Décision artistique de Zout
Les deux logos sont validés visuellement à partir de la planche PNG « emblèmes fissurés réseau activé ». **La Faille noire** : cercle noir fissuré, faille rouge principale, rouge qui gagne progressivement les fissures secondaires. **Interstice** : exactement la même base, point rouge décentré *dans* la faille et réseau de points qui suivent les craquelures. **Aucune inscription dans les symboles**, pas de fond beige ni ruines, rendu d'impression artisanal sur gris pierre.

## Intégrité des fichiers
L'image source validée est disponible dans la conversation sous forme de planche raster, mais **pas encore versionnée dans GitHub** à ce stade. Deux recadrages PNG locaux sont préparés ; aucune image approximative ne doit écraser les actifs officiels par inadvertance. Les fichiers historiques `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` sont inchangés sur cette branche. Prévoir export/dessein vectoriel fidèle, validation du rendu recadré, puis remplacement coordonné de ces deux chemins sur une branche candidate et contrôles de toutes leurs références. Pas de prétention de mise à jour globale à ce stade.

## Parcours d'arrivée demandé
1. Arrivée : logo d'Interstice seul et lisible, pas d'introduction imposée ni de slogan encombrant.
2. Zoom progressif sur la faille et son gros point rouge, sans écran blanc ni prise de contrôle des gestes.
3. À l'intérieur du symbole agrandi : le visiteur peut **déplacer la vue** le long des fissures et choisir un nœud en suivant les ramifications vers Wiki, Médiathèque, Parcours, Atlas, Entraide/participation selon les routes réellement validées.
4. Cliquer/toucher un nœud amène à un aperçu de rubrique puis à sa page réelle ; retour au nœud précédent et vue d'ensemble conservés.
5. Les directions et flèches vont **du nœud vers la rubrique**, avec libellés rouges et pictogrammes déjà retenus.
6. Fonctionnement sans JS = liste et liens directs ; mode réduction des mouvements = pas de zoom automatique ; focus clavier, zoom 400 %, screen reader, appareils modestes testés réellement, aucun suivi nominatif ni collecte.
7. Ne pas fabriquer de relations historiques/partenariats : nœuds sommaire et liens documentaires sourcés sont deux niveaux différents. Le sommaire à cinq entrées n'est pas une architecture définitive adoptée.

## Premier prototype codé
`design-system/entree-faille-candidate.html` + `assets/entree-faille-candidate.css` : entrée visuelle, micro-animation progressive, carte avec nœuds cliquables et liste toujours accessible, sans JavaScript. **Limite** : ce prototype n'implémente pas encore le déplacement libre caméra/zoom entre les branches ; il utilise provisoirement le SVG ancien, clairement indiqué dans son attribut alt. Il est isolé de la production.

## Demandes
**Relieuse** : inscrire le flux identité → accueil → zoom → navigation parmi les travaux de convergence Développeuse/Graphiste, suivre P0, garder les droits/statuts/ID et les arbitrages.
**Développeuse** : concevoir un modèle de caméra pan/zoom touch/mouse/keyboard avec état URL partageable, comportement de repli, prévention scroll-jacking, focus et boutons accessibles, performances sur mobile, rollback. Aucun merge ni publication.
**Graphiste** : finaliser les 2 exports officiels depuis planche validée, audit de toutes les références SVG/HTML/CSS/PWA/favicons, tests de rendu et de contraste avant remplacement.

## Passe suivante exécutée — fichiers actifs / caméra (02-11-2026)
Sur **PR #137 candidate**, les fichiers `assets/logo-faille-noire.svg` (commit `639eb7d719da7701d57ac4b1c5ae129de2527a9e`) et `assets/logo-interstice.svg` (commit `d8b975c1dc3db55e1cb7747d24a0563cf37d834d`) ont été **modifiés sur la branche**. Les références `assets/logo-*.svg` utilisées dans le site candidat pointent donc vers les versions proposées, sans modification HTML de chaque chemin. Attention : SVG reconstruits en vecteur comme **interprétation provisoire**, pas vectorisation exacte de la planche PNG approuvée : comparaison visuelle et accord humain sur exports restent requis. Les chemins ne changent pas ; rollback via revert des deux commits. Aucun merge dans main.
`design-system/entree-faille-candidate.html` commit `c840a257e67396aae5f7456e68813293d475c9bf`, `assets/entree-faille-candidate.css` commit `1636aa84652460bdbd0b22f52f44bb273da27b9b`, `assets/entree-faille-candidate.js` commit `2bbfb16d60b8cac6948cd3bf76cf929d73175109` : commandes zoom +/−, réinitialisation, déplacement souris/tactile et liste de repli. **Ce n'est pas encore une carte où chaque branche est un chemin géométrique réellement suivi ; les points restent des portes de navigation, sans lien R0–R3.** Un zoom d'entrée réellement focalisé sur le point rouge et des animations de parcours sont encore à développer avec la Développeuse.
Test étendu `tests/entree-faille-candidate.test.mjs` commit `f6fb6ef45f05716a40133bb4d1d9052e7b8021c5` ; workflow `.github/workflows/entree-faille-candidate.yml`. CI d'étape `41512435161` SUCCESS sur `2bbfb16d60b8cac6948cd3bf76cf929d73175109`. CI SHA test `41512492343` : **verdict à consulter**. Tests réels de lecteurs d'écran, pinch à deux doigts, précision de la maquette, focus après caméra et performance mobile non faits.

## Nouvelle passe : navigation de nœud en nœud (20:39, 02-11-2026)
Modifications sur PR #137 :
- `design-system/entree-faille-candidate.html` commit `7c3caf749cff2335394bce9f9ee33975b1d1ec6e` : caméra, chemins SVG indicatifs, 5 boutons de nœuds accessibles et destinations explicites.
- `assets/entree-faille-candidate.js` commit `0707d0e3e5a0a0372160675bcb1c5d45fe5f1a66` : sélection d'un point, zoom dirigé vers ses coordonnées, annonce et lien de destination, retour au point central, recentrage, caméra déplaçable.
- `assets/entree-faille-candidate.css` commit `9540f3c739860e19e8f3b1da27a04ce4b0fcdfd7` : carte interactive et styles focus, mobile, réduit mouvement.
- `tests/entree-faille-candidate.test.mjs` commit `f67d8dfef28c5487b3f5c1ede899223adb93fc79` : navigation nœud Atlas, panneau de destination, recentrage, état aria-pressed, plus tests antérieurs sans JS.
- **CI du code SUCCESS** https://github.com/zoutiFrutti/Interstice/actions/runs/41513757853 sur `f67d8dfef28c5487b3f5c1ede899223adb93fc79`.

Limite fondamentale : les chemins SVG sont des **branches géométriques candidates**, non une extraction des fractures réelles pixel à pixel. La vue saute actuellement au nœud par translation animée, elle ne suit pas encore une courbe continue le long de chaque craquelure ; pas de pinch à deux doigts, pas de focus clavier automatique après recadrage, pas de test tactile physique/lecteurs d'écran. Les SVG restent des reconstructions candidates non identiques à la planche validée. Contrôler avec Zout avant identité définitive. Aucune fusion, déploiement ou publication.
