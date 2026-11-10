# C07 · Première version candidate de navigation
**10 novembre 2026 — PR #186 — base `78ca0ae18bcebd78ddbcb0b0e46dbf53b8a10c0c`**

## Problème
Le `index.html` de `main` et de C07 était identique, encore orienté « Wiki / Médiathèque / Atlas / Parcours ». `explorer.html` a une entrée immersive et quatre portes, mais `archives.html` manquait. Des liens de `lectures/` et `relectures/` présents dans le prototype pointent vers des pages absentes du HEAD : le prototype ne doit pas être présenté comme un catalogue intégral.

## Livraison candidate
- `candidat.html` : point d'audit, quatre portes ordonnées Faire Ensemble / Encyclopédie / Archives / Médiathèque, Atlas et Parcours transversaux, entrée immersive facultative, avertissements et liens réels.
- `archives.html` : porte Archives avec accès à des pages existantes, sans déverrouiller les dossiers réservés.
- `assets/candidat.css` : interface lisible mobile/clavier, SVG officiels inchangés.
- `index.html` : **retour au blob historique strictement intact** pour respecter la barrière C13. La page candidate autonome est `candidat.html` ; les sous-pages conservent provisoirement leurs anciens menus.
- Le workflow C07 fournit un artefact statique téléchargeable, contrôlé avant empaquetage et sans déploiement.
- Tests de présence de la navigation, de la porte Archives et des interdictions de publication ajoutés au workflow C07.

## À réceptionner
Vérifier sur un navigateur Android les quatre portes, les traversées, l'Atlas, les liens retour, l'animation et les menus hérités. Omeka S, l'import des 219 fiches et la migration des sources restent à faire. Aucune fusion dans `main`, publication, migration ou suppression de données.
