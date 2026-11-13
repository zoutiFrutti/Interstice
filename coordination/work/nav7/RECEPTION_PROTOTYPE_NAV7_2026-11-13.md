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

## Complément · 13 novembre 2026, cycle de reprise des points tertiaires

**Nouveau commit candidat :** `db7f2a9576aa872c361bfc28bc5400076018fa8b`, puis corrections de tests `3cb6a0b9fe041ccf998b3ed18ce7c37968d1168b` et `1bf20ebc4b3ebee2af5b130d986ada8def172afc`.

- **15 accès tertiaires contextuels** configurés, uniquement vers des chemins et ancres publiques préexistants. Répartition : trois liens pour Faire Ensemble, Atlas, Encyclopédie, Archives et Médiathèque.
- **Vigie : zéro sous-menu fictif**. Aucun droit de publication inféré de sa présence parmi les six portes.
- Les liens sont créés comme éléments natifs `<a>` avec un repère graphique `span` décoratif `aria-hidden="true"`, sans rôle interactif mensonger sur les points dessinés.
- Aucun SVG officiel R6 modifié ; le nouveau panneau est une étape **fonctionnelle**, pas la géométrie finale des points tertiaires dans la fissure.
- Un test Node ciblé vérifie les quinze destinations et leurs ancres lorsque présentes. Une faute d'échappement dans son expression régulière, introduite pendant la rédaction, a été corrigée dans le dernier commit ci-dessus.
- **Relecture effective par l'API GitHub :** 15 couples titre/lien trouvés, 15 fichiers/ancres existants sur la branche, 0 lien inconnu dans le périmètre testé, six groupes `submenus` détectés. Ce contrôle n'exécute pas le test Node ni le navigateur.
- **CI toujours non attestée pour ce HEAD** : l'API disponible pour récupérer les runs d'un commit ne retourne que les runs liés à des PR, et aucun n'a été récupéré pour cette branche sans PR. Ne pas déclarer une suite verte.

**Reste à valider :** rendu graphique avec vraie capture Zout, placement exact du bouton 7, emplacement des petits points tertiaires sur le dessin, compatibilité avec NAV7 intégré à C07, essai clavier/tactile en navigateur et tests GitHub Actions sur HEAD réel.

**Aucune fusion, PR, activation, publication, suppression ou import de données.**

## Complément · R7 vectoriel et localisation authentique du point 7 (13 novembre 2026)

Ce complément **remplace les réserves historiques ci-dessus sur l'impossibilité de localiser le point 7** ; les autres limites, notamment navigateur et publication, restent valables.

**Provenance nouvelle :** la capture photographique annotée originale de Zout a été retrouvée parmi les pièces de cette conversation, fichier local `1000052612.jpg`, 691 × 1536 pixels, SHA-256 `0c4776abcb269809b75332d2ca5917e3d471de7cff46b44f31dbffa987119b30`. La pièce n'a pas été importée dans GitHub. Le bouton 7 dessiné sur la capture correspond au nœud rouge R6 de **(220, 327)** sur viewBox 665 × 665, confirmé dans `assets/logo-interstice.svg`, avec cercle `r="10"`.

**Travail Git effectué en branche candidate seulement :**
- Import octet-pour-octet du **vrai SVG vectoriel R7-B** depuis `design/r7-six-points-interstice-candidats-20261110` vers `assets/identite/r7/nav7/interstice-r7-b-base.svg` ; blob `6013477b26c25fc8c44546fb28a5de1b768121eb`.
- Nouvelle dérivation `assets/identite/r7/nav7/interstice-r7-nav7-candidate.svg` : base R7-B conservée, ajout **unique d'un groupe vectoriel** `id="r7-point-07-manifeste"` à (220,327), cercle `r=11.5` (un peu plus gros que les six autres nœuds). Aucune image raster intégrée ; la couleur et le nœud sont candidats, pas approuvés graphiquement.
- `nav7-candidate.html` : référence dorénavant cette dérivation SVG. Le bouton 7 cliquable se superpose au nœud à 33.08 % × 49.17 %, en reprenant les coordonnées de l'image originale. Suppression du bouton temporaire placé à côté du dessin ; point central toujours destiné au retour global.
- `tests/nav7-candidate.test.mjs` : contrôle des six coordonnées de portes contre les cercles R7 vectoriels, présence du nœud 7, détection d'images raster, lien Manifeste et six sous-menus.

**Lecture/contrôle des fichiers sur GitHub** : original R6 inchangé au blob `1e19320bcedb445175427dba92b229b7ee10d651`. La source R7-B reste intacte et disponible dans un fichier distinct. La dérivation NAV7 n'est ni une validation artistique R7-B1 ni un remplacement automatique des logos.

**Tests navigateur et tests Node réels** : non attestés. Le dépôt GitHub n'est pas récupérable depuis le terminal de contrôle de cette conversation (résolution réseau refusée). Les assertions de contenu/GitHub sont des vérifications statiques, **pas** une CI verte. Reprendre l'essai sur un runner GitHub et examiner son résultat exact avant toute acceptation.

**Statut :** nouveau candidat SVG authentique, positions 1–7 cohérentes avec la capture, liens conservés, **non intégré à main, non déployé, non publié**.

## Complément · correction fonctionnelle et essais candidats (cycle suivant, 13 novembre 2026)

**Bug reproductible par lecture du code :** la sélection des portes utilisait `document.querySelectorAll('.node[data-point]')`, qui capturait également le bouton `data-point="7"`. Un clic sur Manifeste appelait alors `routes['7']` (absent), avant l'ouverture du dialogue, et déclenchait une erreur JavaScript. Corrigé en sélectionnant uniquement `'.node[data-door]'`.

**Amélioration graphique sans changement de SVG :** zones tactiles superposées devenues transparentes hors sélection/survol/focus, afin de ne pas cacher les nœuds et fissures du vrai SVG candidat. Les contrastes et états de focus sont conservés ; la restitution visuelle et le contrôle tactile réel restent à éprouver.

**Tests ajoutés :**
- `tests/nav7-candidate.test.mjs` : nouvelle assertion de non-régression sur le sélecteur excluant le point 7.
- `tests/nav7-interactions.test.mjs` : exécute le script inline réellement présent dans la page dans un faux DOM Node isolé ; vérifie l'ouverture/fermeture du Manifeste, la sélection des six portes, les trois liens tertiaires sur chacune des cinq portes qui en possèdent et le retour au centre.
- `tests/nav7-browser.test.mjs` : scénarios Chromium à taille mobile (390×844 et 375×812), avec et sans JS, ouverture de dialogue, clics et chargement du vrai SVG.
- `.github/workflows/nav7-candidate-check.yml` : `node --test` sur les deux suites sans navigateur, installation Playwright/Chromium sur runner isolé, puis exécution des scénarios navigateur. Branche NAV7 seule, permission `contents: read`, **aucun déploiement**.

**Vérification effectivement réalisée lors de cette reprise :** le script inline exact de la branche a été exécuté dans un isolate V8 avec un DOM simulé distinct du fichier de test ajouté. Cinq scénarios ont passé sans erreur : bouton 7 ouvrant le dialogue, fermeture, porte 1 affichant trois tertiaires, porte Vigie ne fabriquant aucun lien et retour au centre. Le SHA HTML contrôlé à ce stade était `8450eeb3819036af82a172d9650c5d953c41f9e9`.

**Non encore attesté :** exécution distante du workflow sur le HEAD le plus récent ; Chromium réel, captures, tactile et lecteurs d'écran. Les API disponibles ne remontent pas les runs de push en branche sans PR, et l'accès réseau direct à GitHub depuis le terminal local échoue. Le test navigateur est donc **écrit et connecté**, pas déclaré réussi.

**Respect du mandat :** aucune fusion, PR ouverte, publication, migration, activation de données privées, modification des SVG sources ni suppression. La branche demeure **candidate isolée**. Les 219 objets internes restent fermés. La fidélité artistique B1 et le placement graphique des tertiaires autour des nœuds restent à valider séparément.
