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
