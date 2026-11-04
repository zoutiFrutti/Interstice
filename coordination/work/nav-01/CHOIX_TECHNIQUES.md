# WORK-NAV-01 — choix réalisés

Base : caméra SVG viewBox R2/R6, réécrite en fonctions pures testables ; import du réducteur et des fragments de #161. Reprise de l’entrée #137 et des gestes pan/zoom #138/#141, sans leurs anciens dictionnaires de coordonnées. Accessibilité #143 : liens HTML natifs, focus, texte alternatif, mode défilement. Contrat #168 : identité officielle inchangée, quatre portes distinctes des marques décoratives, traversées transversales et manifeste accessible.

- `explorer.html` : entrée et représentation textuelle complète, utilisable sans module.
- `assets/nav-01/camera.mjs` : conversion écran/espace, zoom ancré, limites.
- `explorer.mjs` : un doigt pour déplacer, deux pour pincer, molette, flèches, +/−, Début, Échap, sélection et lecteur.
- `graph-data.mjs` : quatre portes, sept questions et étapes candidates #161 ; aucune notice ni corps de ressource bloquée.
- Historique navigateur = référence : fragments, position de caméra et porte d’origine. SessionStorage optionnel pour reprendre la vue, sans compte ni requête distante.
- Cibles HTML gardées à 44 px minimum ; panneaux dans le flux sur mobile et au fort zoom. Liste indépendante pour qui ne souhaite pas déplacer l’espace.
- Logos : fichiers canoniques externes inchangés ; effets de caméra et surcouche interactive séparés. Les lignes des traversées indiquent des possibilités de navigation, sans affirmer de filiation historique.

Deux documents autorisés dans le lecteur : les manifestes déjà publics V2.5 et archive V2.1, avec leurs réserves conservées. Les quatre index R6 existants sont des liens externes explicites. Le catalogue candidat reste fermé (`PUBLIC_RESOURCES=[]`). PAR-005 n’ouvre aucune étape pratique. Les six autres Parcours exposent uniquement les intitulés d’étapes, les bifurcations et retours ; leurs ressources restent fermées.

Aucun paquet applicatif supplémentaire. Artefact construit par liste de fichiers autorisés ; ni coordination, ni agent, ni catalogue éditorial, ni extension QA n’y entre. L’extension Chromium de test sert uniquement à `tabs.setZoom(4)` dans un profil jetable de CI ; elle n’est pas installée dans le navigateur de Zout.

Retour arrière : avant intégration, ne pas fusionner la PR et ne pas promouvoir l’artefact. Le site actif reste exactement R6. Une future intégration exige une décision distincte et son propre contrôle de déploiement ; aucun remplacement automatique d’`index.html` de main.

