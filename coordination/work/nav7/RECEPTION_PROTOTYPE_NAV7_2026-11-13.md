# Interstice — NAV7 · Réception d'un prototype fonctionnel isolé

**13 novembre 2026 — La Relieuse — candidate de développement, aucune publication.**

## Périmètre exact

- Branche `work/nav7-accessible-prototype-20261113`, issue de `main` au SHA `80ce56adfb9c3bc3275844b2847eac717b433aa5`.
- `nav7-candidate.html` : nouvelle page autonome, `noindex,nofollow`, aucun changement de `index.html` ni des SVG officiels.
- `tests/nav7-candidate.test.mjs` : assertions Node ciblées (six portes, bouton 7, destinations et garde-fous).
- `.github/workflows/nav7-candidate-check.yml` : exécution isolée `node --test`, permissions `contents: read`, aucun déploiement, aucun import.

## Fonctionnellement réalisé en candidate

| Élément | Résultat |
|---|---|
| Porte 1 | Faire Ensemble → propositions publiques existantes |
| Porte 2 | Atlas → `atlas.html` |
| Porte 3 | Vigie → message de préparation, aucun lien mort/faux article |
| Porte 4 | Encyclopédie → `wiki.html` |
| Porte 5 | Archives → dossier public existant `squats-et-lieux-autonomes.html` ; **pas** de catalogue interne ouvert |
| Porte 6 | Médiathèque → `bibliotheque.html` |
| Bouton 7 | Manifeste → panneau `dialog` contenant la page actuelle `manifeste-v2-5.html`, et lien direct alternatif |
| Centre | Bouton de réinitialisation de la sélection et retour à la vue d'ensemble |
| A11Y | Boutons natifs, `aria-label`, `aria-controls`, `aria-pressed`, focus visible, lien d'évitement, navigation textuelle sans JS, mouvement réduit |

**Attention aux sous-menus :** ce prototype ne livre pas les ramifications tertiaires. Il livre la mécanique de sélection et la destination de chaque porte, dans l'attente du contrat de sous-menus.

## Fidélité aux décisions et limites artistiques

- La base graphique affichée est **le vrai fichier existant** `assets/logo-interstice.svg` (R6), non modifié. Ce n'est **pas** un nouveau logo ni une illustration inventée.
- Les six coordonnées graphiques sont dérivées des six positions candidates R7 déjà documentées : `(258,203)`, `(397,178)`, `(498,261)`, `(461,426)`, `(333,593)`, `(233,450)` sur `viewBox 0 0 665 665`. **Elles restent à rapprocher de la capture annotée originale de Zout.**
- La position géométrique exacte du point 7, distinct des six autres, **n'était pas récupérable de manière vérifiable dans les fichiers Git consultés**. Le bouton 7 est donc fonctionnel mais temporairement placé dans le panneau adjacent ; **ne pas le présenter comme le rendu final demandé**.
- Le choix graphique R7-B1 avec propagation rouge ne figure pas dans le SVG de cette page ; il s'agit d'un essai de navigation, pas d'une validation artistique.
- Les six portes comme noms et leur affectation aux numéros proviennent des décisions historiques de Zout, mais les raccords vers les pages actuelles constituent des solutions transitoires sans création de nouveaux contenus.
- Pas de chapitre Vigie public inventé, pas de point de géolocalisation réel, aucun lien à une source documentaire privée.

## Vérification effectuée dans cette passe

Lecture **effective après écriture GitHub**, depuis la branche candidate :
- six boutons uniques 1–6 dans l'ordre de décision : **OK** ;
- présence du bouton 7 et du `dialog` : **OK** ;
- présence du bouton de retour centre : **OK** ;
- présence du secours textuel sans animation : **OK** ;
- présence du `noindex,nofollow` : **OK** ;
- absence de lien direct `docs.google.com` / `drive.google.com` dans cette page : **OK** ;
- toutes les sept destinations/fichiers concernés existent sur la branche : **OK** ;
- l'ancre `#propositions` existe dans `index.html` de main : **OK**.

**Contrôle statique seulement.** L'exécution locale réelle de `node --test` et l'examen de la CI du dernier HEAD ne sont **pas encore attestés**. Une tentative de récupération du dépôt depuis l'environnement local a échoué pour cause d'accès réseau : ne pas présenter cela comme une réussite. Les tests navigateur, téléphone physique, lecteurs d'écran et captures graphiques n'ont pas été exécutés par cette livraison.

## À exécuter ensuite

1. Lire la CI `NAV7 candidate isolated checks` sur HEAD exact, traiter les échecs sans désactiver les contrôles.
2. Ouvrir `nav7-candidate.html` via un aperçu **isolé et non publié** après contrôle d'exposition ; tester clavier, tactile, lecteur d'écran.
3. Récupérer **la capture originale** de Zout et placer le point 7 à sa position exacte, sans reconstruire le logo.
4. Réconcilier avec R7-B1 (SVG source vrai, fissures rouges) et avec #186 : ne pas recopier les 219 fiches ni déverrouiller des contenus.
5. Définir les sous-menus tertiaires avec les données réellement autorisées.

**Statut final : CANDIDAT FONCTIONNEL PARTIEL, CONTRÔLÉ STATIQUEMENT, NON VALIDÉ GRAPHIQUEMENT, NON INTÉGRÉ, NON PUBLIÉ.**
