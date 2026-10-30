# LA FAILLE NOIRE × INTERSTICE — Graphiste
## Transmission 013 au Relieur · 30 octobre 2026
Statut : **bilan technique d'un candidat graphique non fusionné et non publié**, à relire humainement.

### A. Mission et point de reprise
Reprise de la PR #35 (accueil « Et si on essayait autre chose ? », CSS de lisibilité mobile, deux articles Wiki), sans identité nouvelle ni fusion de la PR #22.
PR #44 : les textes corrigés par le Lecteur ont évolué ; priorité à leurs nouvelles versions.
PR #41 : prototype cartographique **unique**, fictif, à deux lectures, par la Développeuse. Ne pas développer une deuxième application ni recopier ses fichiers applicatifs dans la PR #35.
Vérification des HEAD et de la transmission du Relieur `coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md`.

### B. Dix passes réelles (actions, preuves, corrections)
1. **État réel.** PR #35 vérifiée à partir du HEAD `7d269cab4ae96ff6d95a52535dd5c24bfe23e620`. PR #41 et PR #44 inspectées ; aucun merge ni réorganisation.
2. **Accueil.** Styles ciblés dans `style.css` : largeur du premier écran, hiérarchie H1/introduction, boutons de 58 px et texte 19 px en mobile ; accroche, identité et textes politiques conservés.
3. **Lisibilité Android.** CI de la PR #35 sur 390 px et 1280 px étendue et exécutée : `Verifications lancement public V0` **60/60 succès**, https://github.com/zoutiFrutti/Interstice/actions/runs/41094118135 . Test automatisé, **pas** essai physique sur Crosscall.
4. **Deux articles Wiki.** Versions éditoriales les plus récentes de la PR #44 copiées dans la PR #35 et habillées avec le style scoped `body.wiki-reading` existant : `wiki-decision-collective.html` (source blob `45a0f246d7cb88d837d1d6ec268cc562bf2fc0f4`), `wiki-lecture-croisee-travail-soin-pouvoir.html` (source blob `e478811c6c5b4108621ca90033f601b7fca76ebd`). **Tous les paragraphes du Lecteur sont conservés**, y compris les derniers ajouts ; sommaires et actions de correction conservés. Aucune mutation dans PR #44.
5. **Unité graphique des cartes.** Création de `cartes-design.css` : noirs, rouges et ivoire Interstice, Atkinson/Barlow existantes, mêmes boutons et cartes dans les lectures « communs » et « possibles ». Aucun logo spécifique « Carte des possibles ».
6. **Filtres et fiches tactiles.** Labels et contenus de fiche de 18–19 px, cibles de 52–60 px ; formes de cartes à une colonne sur mobile et deux sur ordinateur, liens de consultation bien visibles ; règles de focus clavier.
7. **Statuts explicites.** Signal `PROTOTYPE FICTIF` conservé en évidence ; étiquettes textuelles `Initiative`, `Ressource`, `Besoin`, `Projet`, avec état de simulation ; aucune couleur n'est la seule information ni aucune initiative fictive présentée comme vraie.
8. **Liste prioritaire.** La liste demeure vue initiale et retrouve toutes ses fiches après passage par la carte ; le test vérifie 7 cartes des communs et 4 des possibles sur le snapshot de la PR #41. Les filtres et la fiche de détail sont utilisables depuis la liste. Le fond de carte SVG demeure facultatif et aucune tuile externe n'est appelée.
9. **Tests croisés 390/1280.** Création `tests/graphiste-cartes-013.mjs` et workflow `.github/workflows/graphiste-cartes-013.yml`. Checkout du snapshot du prototype PR #41 dans un sous-dossier temporaire CI ; remplacement local de style.css par les fontes/valeurs PR #35 et injection de `cartes-design.css` **uniquement pendant le test**, sans toucher aux branches PR #41/#44, à `main` ou à la base de données. Résultat final : **10/10 séquences Chromium réussies**, dont lectures, liste, carte, filtre, fiche, contraste notice, focus, absence de JS error / requête tierce ; https://github.com/zoutiFrutti/Interstice/actions/runs/41094118134 .
10. **Corrections et captures.** Premier test carto rejeté car PR #41 avait évolué et le SHA figé testait une ancienne variante sans deux lectures ; workflow repointé sur le snapshot applicatif `79b5857a1212179be124aa0da97c3f03ea4c4325`. Deuxième test réel : échec du focus zoom ; CSS corrigé avec contour clavier visible. Troisième test réussi ; **10 captures réelles** 390/1280 (communs-liste/carte, possibles-liste/carte, fiche), artefact `graphiste013-cartes-390-1280` attaché au run. Captures lues visuellement : les commandes et fiches sont lisibles ; les labels directement tracés dans le petit SVG demeurent moins confortables sur mobile, donc la liste ne doit jamais devenir secondaire.

### C. Vérifications et sources
- Site + Wiki : **60/60 contrôles réussis** sur `9f4af11dd855e6abc26075be945c75bfbdb27152`, https://github.com/zoutiFrutti/Interstice/actions/runs/41094118135 .
- Cartographie : **10/10 séquences réussies** sur le même HEAD de PR #35, https://github.com/zoutiFrutti/Interstice/actions/runs/41094118134 .
- Prototype cartographique de test figé au commit PR #41 `79b5857a1212179be124aa0da97c3f03ea4c4325`. La branche PR #41 a ensuite avancé à `ba28d0d4dc71d09e9bb4ef278afbd642ff29091f` **sur documentation/journal seulement**, sans modification de l'interface testée (comparaison GitHub).
- Le CSS `cartes-design.css` est **proposé à l'intégration**, pas chargé dans l'application source en production.
- Aucune publication automatique, fusion, remplacement de manifeste ou collecte de données.

### D. États et obstacles
**Terminé sur PR #35 :** styles candidats, récupération des articles corrigés, tests et captures.
**À vérifier :** validation tactile sur Android physique, tests de lecteur d'écran, lisibilité des noms dessinés dans la petite carte SVG, vérification des pages après fusion candidate.
**Bloqué avant intégration effective :** rapprocher PR #35 et PR #41 (sans dupliquer l'application), puis PR #44 (ne pas écraser les dernières corrections) ; PR #22 en conflit potentiel. Le Relieur coordonne, pas d'autorisation éditoriale ou technique de merger implicite.
**Non traité et non autorisé :** ouverture à initiatives réelles, localisation précise, contacts, modération réelle, partage de données ou annonce publique.

### E. Transmission au Relieur
Demander à la Développeuse d'importer uniquement `cartes-design.css` après les CSS existants de son prototype ou de transférer ses règles dans son fichier, après revue des interactions et des cibles de carte. Le Lecteur doit valider les deux textes corrigés dans PR #44 et leur intégration sans perte de paragraphes. Le Graphiste peut fournir les screenshots et corriger les retours sur Android. Avant fusion, la coordination doit planifier tests tactiles, lecteur d'écran et relecture des statuts fictifs.
Conserver la V2.5 comme référence éditoriale non adoptée collectivement.
