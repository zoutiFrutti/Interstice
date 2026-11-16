# WORK-NAV-01 — choix réalisés

Base : caméra SVG viewBox R2/R6 adaptée en fonctions pures testables ; fragments de #161. Socle HTML et liens historiques #135, entrée #137, gestes pan/zoom #138/#141, accessibilité #143, stabilisation #153. Contrat visuel #168 appliqué : identité officielle inchangée, quatre portes distinctes des marques décoratives, Parcours transversaux et manifestes accessibles.

| Composant | Responsabilité |
| --- | --- |
| `explorer.html` | Entrée, espace, liens natifs, alternative HTML sans module |
| `assets/nav-01/camera.mjs` | Conversion écran/espace, zoom ancré, limites de caméra |
| `explorer.mjs` | Gestes, clavier, sélection, lecteur, historique et reprise de position |
| `graph-data.mjs` | Quatre portes, sept questions et intitulés d’étapes issus de #161 |
| `navigation-state.mjs` | Lecture des fragments V2 et historiques, adaptée de #161 |
| `scripts/build-nav-preview.mjs` | Artefact statique séparé, construit par liste autorisée |

Un doigt déplace la carte ; deux doigts pincent ; une bascule libère le défilement de page. Souris : glisser et molette. Clavier : flèches, +/−, Début, Échap, liens et boutons natifs. Les combinaisons Ctrl/Commande restent disponibles pour le navigateur.

L’historique conserve fragment, caméra et porte d’origine, y compris après rechargement. SessionStorage est optionnel et sert uniquement à reprendre la dernière vue ; aucune position n’est envoyée au serveur. Les cibles HTML gardent une taille utile d’au moins 44 px. Les panneaux passent dans le flux sur mobile et au fort zoom. Une liste équivalente évite toute obligation de manipuler la carte. Les textes de surcouche ont un fond protecteur pendant les déplacements.

Les deux SVG sont chargés comme fichiers externes, inchangés. La transition agit sur une copie de l’image et sur la caméra, sans modifier les tracés. Les lignes des Parcours indiquent des possibilités de navigation, sans affirmer de filiation historique.

Deux documents autorisés dans le lecteur : manifestes publics V2.5 et archive V2.1, avec leurs réserves conservées. Le chargement reste limité à ces deux fichiers de même origine ; les cookies de cette origine permettent un futur hébergement privé. Les quatre index R6 sont des liens externes explicites. Le catalogue candidat demeure fermé (`PUBLIC_RESOURCES=[]`). PAR-005 n’ouvre aucune étape pratique. Les six autres Parcours montrent seulement les intitulés, bifurcations et retours ; leurs ressources restent fermées.

Application sans dépendance supplémentaire. Playwright et axe ne servent qu’aux tests. L’extension Chromium de QA règle le zoom réel à 400 % dans un profil jetable ; elle n’est ni livrée dans l’artefact ni installée chez Zout.

Retour arrière : avant intégration, ne pas fusionner la PR et ne pas promouvoir l’artefact. Le site actif reste R6. Aucune opération sur la production n’est nécessaire. Une future activation publique exige un mandat distinct.
