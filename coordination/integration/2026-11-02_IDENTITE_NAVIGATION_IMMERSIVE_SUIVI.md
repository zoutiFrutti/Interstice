# Convergence identité graphique et navigation immersive — contrôle Relieuse

Date : 2026-11-02. Statut : **candidate, non adoptée techniquement**.

## Mandat artistique confirmé par Zout

Deux symboles **sans écriture**, sur gris pierre, aspect impression artisanale, sans éléments post-apocalyptiques :
- Faille noire : cercle noir craquelé, fissure principale rouge irrégulière, rouge diffusant vers les fissures secondaires.
- Interstice : même base, point rouge légèrement excentré **dans** la faille principale, réseau de points suivant les ramifications.

La validation artistique de la planche raster **n'est pas** une validation de SVG exportés. Ne pas remplacer les fichiers historiques avant contrôle visuel et versionnement fidèle.

## Travaux effectivement repris

- PR #135 : premier assemblage frontend et variantes A/B.
- PR #136 : convergence graphique des pages, liens d'évitement, cartes A/B dans Atlas.
- PR #137 : entrée visuelle candidate, micro-animation et sommaire.
- Branche `integration/r2-dev-navigation-faille-20261102` : `design-system/faille-navigation-interactive.html`, `assets/faille-navigation.css`, `assets/faille-navigation.js` : contrôles zoom, déplacement pointer/clavier, retour, vue d'ensemble, nœuds et sommaire textuel. **Implémentation candidate**, pas testée ici sur appareil réel.
- Cette branche `integration/r3-identite-navigation-immersive-candidate-20261102` reprend la branche développeuse et ajoute un **lien depuis l'accueil** vers le prototype immersif. Le sommaire classique reste accessible ; aucune activation forcée de l'expérience.

## Vérifications de structure

Le prototype référence le SVG historique `assets/logo-interstice.svg`, contient cinq nœuds provisoires (Wiki, Médiathèque, Atlas, Parcours, Entraide), et propose une liste textuelle permanente. Les cinq nœuds **ne valent pas architecture définitive**. Les lignes sont une métaphore de navigation, **pas des relations documentaires ni des partenariats**. La feuille de style comporte une règle `prefers-reduced-motion`. Le script est référencé et présent dans la branche.

## Inventaire des remplacements à mener

Avant modification, rechercher les références à `assets/logo-faille-noire.svg`, `assets/logo-interstice.svg` et aux éventuels PNG/ICO dans :
1. HTML racine, pages d'ateliers, composants et fragments.
2. CSS (images de fond, masques, pseudo-éléments).
3. Favicon, `manifest.webmanifest` / manifest PWA, icônes Android/Apple et raccourcis.
4. Documents, exports, captures, supports de communication et assets dérivés.
5. Tests, workflows et chemins relatifs.

**Cet inventaire est une checklist, pas un balayage exhaustif attesté du dépôt.** Ne pas renommer les SVG historiques ni modifier les liens tant que les deux exports fidèles n'ont pas été validés et versionnés sous de nouveaux chemins candidats.

## Tests requis avant arbitrage technique

- Navigation et contrôles clavier, focus, historique URL, retour, vue entière, liste sans JavaScript.
- Pointer souris, tactile un doigt et pinch, scroll normal de la page, absence de scroll-jacking.
- Mobile 320/390, tablette, bureau, zoom navigateur 200–400 %, lecteurs d'écran réels.
- Réduction de mouvement, contraste, performance sur appareils modestes, sans réseau, sécurité des liens.
- Contrôle de toutes les références et rollback par retrait du lien et des fichiers candidats ; aucun SQL, formulaire ou endpoint touché.

**État de la Relieuse** : revue des fichiers et de la structure effectuée ; **aucun résultat CI du HEAD R3 ni test physique confirmé**. Les exports officiels fidèles restent à produire. Aucune fusion dans `main`, aucun déploiement, publication ou migration.
