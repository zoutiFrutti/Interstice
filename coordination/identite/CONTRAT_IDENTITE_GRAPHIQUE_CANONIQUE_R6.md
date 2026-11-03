# CONTRAT D’IDENTITÉ GRAPHIQUE CANONIQUE — R6
**3 novembre 2026 · P1 · proposition technique, non adoptée · PR #147 HEAD initial `d90654f7572c0e0806c61cd6703c0d3092b26ba2`.**

## 1. Autorité, origine et archivage
Les **octets originaux** priment sur les exports, captures, copies et modèles futurs. Les deux logos actifs de PR #147 sont **candidats**, pas des validations artistiques nouvelles.

| Rôle | Chemin | SHA-256 connu | Git blob vérifié dans arbre PR #147 |
|---|---|---|---|
| Original Faille noire retenu par Zout | `assets/identite/r6/sources/logo-faille-noire-zout-original.svg` | `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` | `72695015804e76abc0f61369ab0da7ea540ba1a2` |
| Original Interstice retracé | `assets/identite/r6/sources/interstice-retrace-zout-original.svg` | `b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef` | `43598c91cf69e0144497672881ba7a2be3eb081b` |
| Référence visuelle Interstice | `assets/identite/r6/sources/interstice-reference-visuelle-zout-original.svg` | `659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6` | `a8646e604fd088cb6ded5fde0ec5b77b790f9f2d` |
| Export candidat Faille noire | `assets/logo-faille-noire.svg` | identique à l'original Faille | `72695015804e76abc0f61369ab0da7ea540ba1a2` |
| Export candidat Interstice | `assets/logo-interstice.svg` | `198cb3691ea13ea2e79b59f313ade9b4db84719e53e37ed6dd87395325101b43` | `dfce62b9fc3a064c2a22c1bad047e200f538f8b4` |
| Export Interstice de comparaison | `assets/identite/r6/candidats/interstice-base-commune-r6.svg` | même octets que l'export candidat | `dfce62b9fc3a064c2a22c1bad047e200f538f8b4` |
| Archives pré-R6 | `assets/archives/logo-faille-noire-pre-r6.svg`, `assets/archives/logo-interstice-pre-r6.svg` | recalculer sur checkout | `c5d545a762e0ae205b235cea6d17e2ec51d2eff7`, `7c863aa239462c82b5a5dbcf26e5981b9131b0e8` |

Les anciens candidats R4 `assets/candidats/logo-*-r4.svg` et les archives pré-R4 sont conservés, sans promotion automatique. La référence visuelle Interstice est un **JPEG encapsulé dans un SVG**, non un vecteur éditable de référence. Ne pas confondre SHA-256 (empreinte des octets) et Git blob SHA (objet Git).

## 2. Base commune et couches spécifiques
Espace canonique **665 × 665**, `viewBox="0 0 665 665"`. Base Faille : `rect` + **quatre `path`** dans l'ordre, avec attributs et données géométriques identiques. Interstice : **même base**, puis un groupe `<g id="noeuds-cercles">` de **30 `circle`**. Ne pas comparer seulement les pixels, ni normaliser la géométrie en arrondissant les valeurs : les attributs et chemins doivent être strictement identiques.

Point majeur Interstice : centre **(350, 377)**, rayon **33**, dans le repère 665. Les autres cercles, leurs coordonnées, rayons, halos et couleurs doivent être extraits et versionnés **directement** depuis `interstice-retrace-zout-original.svg` ; aucune liste de coordonnées reconstruite à l'œil. Les cercles de halo/intérieur peuvent partager le centre : ne pas assimiler 30 cercles à 30 nœuds indépendants. Le groupe exact constitue la liste de coordonnées canonique candidate.

**Réserve P0 artistique** : le rouge des ramifications du candidat Interstice est moins dense que celui des références de Zout. L'égalité de la base est une preuve géométrique, **pas** une preuve de fidélité artistique. Le candidat n'est pas validé par ce contrat.

## 3. Règles de production et d'intégrité
- Sources originales **immutables** : ne jamais écrire dessus ; stocker leur chemin, SHA-256, Git blob, date de réception, auteur déclarant et décision de Zout. Toute correction crée une nouvelle version candidate et un nouveau rapport de différence.
- Une future source canonique commune pourrait contenir la base seule et un manifeste des couches spécifiques Interstice. Un générateur déterministe produirait les deux SVG avec mêmes chemins et un ordre stable. **Étude seulement** : les exports de PR #147 restent inchangés tant que Zout n'a pas approuvé le rendu et autorisé leur remplacement.
- Tests bloquants : comparer les octets de l'original Faille et son export candidat ; vérifier SHA-256 des trois originaux ; comparer les éléments `rect/path` des deux exports, **hors `title`, `desc` et groupe de cercles** ; comparer le groupe `noeuds-cercles` à celui du retracé source ; vérifier 665×665, 30 cercles, point (350,377) r33 ; détecter scripts, références externes, `foreignObject`, `image` non autorisée dans les exports ; tester SVG XML valide.
- Comparaison des tailles 32/48/64/96/192/390/665 : les miniatures sont **dérivées du même SVG** et jamais des sources concurrentes. Générer une matrice de captures et contrôler lisibilité, contraste, position des points et densité rouge. Les captures visuelles nécessitent jugement artistique ; une égalité SHA des fichiers source ne prouve pas une fidélité des pixels aux petites tailles.
- Vérifier tous les usages réels : HTML, CSS, navigation immersive, Wiki, Atlas, Bibliothèque, Médiathèque, raccourcis, favicons ; `apercu-graphiste-35/` est une ancienne maquette, ne pas la confondre avec les chemins actifs. Un manifeste PWA n'est **pas attesté** ; si absent, aucun contrôle PWA déclaré réussi.
- Droits : la fourniture d'un fichier par Zout n'établit pas automatiquement une licence ouverte ou une autorisation de sous-licencier. Déclarer `droits: à confirmer` et ne pas associer les droits des illustrations, photographies et polices à ceux du symbole.

## 4. Versionnement, dépendances et retour arrière
Référencer chaque version par `source_sha256`, `git_blob_sha`, `commit_sha`, `status` (original / archive / candidat / approuvé par Zout), `approved_by` et `approval_scope` si une décision explicite existe. Aucun renommage destructif, aucune suppression d'archive ; garder l'export actif séparé de l'original.

Pour abandonner PR #147 : **ne pas fusionner**. Pour restaurer sur une branche de travail, repartir du commit R4 `9f733122c7196622d31e7996d1d0b4eea987a14d` ou recopier les deux blobs `assets/archives/logo-*-pre-r6.svg` dans les actifs, puis relancer l'inventaire des références et les tests multi-tailles. Le rollback de production n'est **pas testé** et n'est pas autorisé ici.

Dépendances : Graphiste pour la densité rouge et les comparaisons visuelles ; Développeuse pour l'inventaire d'usages et la CI ; Relieuse pour la coordination ; **Zout** pour la fidélité artistique, les droits et tout changement de statut. Aucune transformation artistique, fusion, publication, déploiement ou adoption automatique.
