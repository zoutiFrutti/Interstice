# Journal de synchronisation — La Développeuse

Sources à lire : `coordination/REFERENTIEL_VIVANT.md`, `coordination/REGISTRE_DECISIONS.md`, puis ce journal et les courriers pertinents. Les états et contrôles ci-dessous sont datés ; aucun accusé, visa ou essai physique n’est déduit d’une CI.

## C09-DEV-01 — contrôle préparatoire (2026-11-05)

- HEAD audité PR #186 : `1a03c3ba9c8b9c94dcdc0e5e67f7f80270e8ab51` avant ce journal ; PR #151, #174, #178, #185 consultées, issue #187 lue.
- Protocole : `coordination/REFERENTIEL_VIVANT.md` et `coordination/REGISTRE_DECISIONS.md` introuvables (404) sur la branche candidate #186 ; recherche sur la branche par chemins exacts. Ne pas recréer de doublons. `coordination/JOURNAL_COMMUN.md`, cette boîte et `coordination/transmissions/2026-11-03_DEVELOPPEUSE_R6_DEV03_INTEGRATION.md` lus comme sources secondaires, sans prétendre qu'ils remplacent les deux fichiers manquants.
- Audit statique : `explorer.html` et `assets/nav-01/graph-data.mjs` affichent encore Encyclopédie / Médiathèque / Carte / Entraide. `explorer.mjs` met les Parcours dans les panneaux de porte avant les catalogues. `reading-catalogue.mjs` et `media-catalogue.mjs` existent ; index Archives distinct à vérifier/construire après synchronisation. Aucun contenu bloqué à ouvrir.
- Contrat cible C09 : grille 2 × 2, ordre DOM et clavier Faire Ensemble / Encyclopédie des communs / Archives des communs / Médiathèque ; quatre portes indépendantes. Conserver les outils Entraide et les anciens fragments comme alias, sept Parcours secondaires, 29 étapes et PAR-005 bloqué. Fenêtres 4:3 ou 16:9 selon contenu, mobile reflow et contraste vérifiable ; i18n selon #187 sans traduction externe silencieuse. SVG officiels intouchables.
- Contrôles exécutés : lecture des fichiers GitHub, comparaison structurelle des PR et de leurs dépendances, vérification des chemins exacts, inventaire des points d'entrée HTML/JS/CSS et du contrat i18n. **Aucun test navigateur, tactile physique, lecteur d'écran, zoom natif 400 %, sans JS ou CI exécuté dans cette passe.** Aucun résultat de conformité n'est revendiqué.
- Risques P0 : régression de #186 par modification du moteur partagé ; liens historiques `#porte/carte`/`#porte/entraide` ; disparition des fonctions Entraide ; ressources non visées ; pertes d'état historique ; contradiction des décisions si référentiel non retrouvé. Ne pas développer avant synchronisation avec La Relieuse.
- Ordre recommandé : retrouver les deux registres canoniques ; figer HEAD et dépendances #186 ; adapter données/alias et HTML sans JS ; reprendre outils Entraide ; catalogues directs ; Parcours secondaires ; fenêtres ; i18n ; tests multi-supports et non-régression. Aucun merge, publication, service ou dépense.


## PASSERELLE-WORK-C01 — décisions de Zout, 5 novembre 2026

- Décision directe QCM 1 : poursuivre sur la PR #186, branche `work/c07-reunification-20261104`, avec vérification du HEAD avant chaque écriture ; aucune nouvelle candidate parallèle.
- Décision directe QCM 1 : reprendre les six documents de #188 dans cette candidate, sans fusionner les PR. Source figée : `ae6bdf00f72043ffcca7ab53e2332aaf601c77ab` ; les six blobs sont repris à l’identique. Leur reprise ne vaut ni visa éditorial ni autorisation de publication.
- Audit de départ : #186 `2738a066055bd4f327f4f796d1fc90bd43d3b70a`, main `7344591fa7f0f4f6951ea273525039cf2cb9982a`. Les contrôles navigation et contrat échouent sur le seul ajout C09 dans la boîte historique. Déplacer cet ajout ici conserve le travail et restaure le blob historique, sans élargir les exceptions C13.
- Contrôles lus sur ce HEAD : 31 tests purs navigation réussis ; préservation ensuite refusée ; suite navigateur non exécutée. Aucun nouveau test ou visa physique revendiqué dans ce journal.
- Séquence suivante autorisée : adapter l’accueil aux quatre portes égales en grille 2 × 2, préserver l’Atlas dans l’Encyclopédie, l’entrée/zoom/animations/SVG et les sept Parcours/29 étapes ; pause QCM après les choix visuels réellement ouverts. PAR-005 demeure bloqué.
- Coordination : aucun merge, déploiement, activation d’agent ou service payant. Anciennes PR conservées. La Passerelle transmet, La Relieuse coordonne.
