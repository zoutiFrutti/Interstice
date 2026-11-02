# Tisseuse — Courrier 13, intégration Atlas et parcours
**2 novembre 2026 · pour La Relieuse, La Graphiste, La Développeuse et La Médiathèque.** Réception des autres ateliers non attestée. Aucun merge, publication, appel téléphonique, visite, autorisation, donnée importée de Transiscope ou partenariat.

## Action 1 : héritage et vérification
Repris sans refaire la recherche : `coordination/transmissions/2026-11-01_TISSEUSE_C8_INDEX_CANDIDAT.json` sur `research/tisseuse-cycle10-tis001-20261101` (blob `beec593209b1e165bbcfa4d97012323c8077a3ff`) et `coordination/reprise-r1/transmissions/R1_TIS_RECONCILIATION_ATLAS_TRANSISCOPE_20261102.md` sur `research/tisseuse-reprise-r1-20261102` (blob `b56f2936f8113c0aeb9b3b7378af2897f2a9db43`). Rapports C3/C4/C8/C9 et carnet TIS 015 signalés ; ce dernier ne fournit pas les douze noms. Aucune garantie d'exhaustivité ni de zéro doublon avec ces douze recherches.
Le frontend candidate de La Développeuse a été **lu réellement**, `atlas.html` blob `4189adaf25ffa5062b05bd55652705a13fb9edc5` et `parcours.html` blob `af345d3f81405b6637e0570f8d5ff8416bbf241a`, branche `integration/r1-dev-frontend-fonctionnel-20261102` (PR #129). Les pages sont des entrées documentaires sans fiches TIS intégrées. La Graphiste PR #128 est sur `design/integration-graphiste-20261102` ; les deux HTML précédents n'y ont pas été trouvés au même chemin : **ne pas supposer le contrat d'intégration identique**.

## Action 2 : fiches candidates réconciliées
`coordination/reprise-r1/transmissions/R1_TIS_ATLAS_DONNEES_CANDIDATES_20261102.json`, branche `research/tisseuse-reprise-r1-20261102`, commit `7cdc60675f288d75daa6a64923bf2f4479f05de3`, blob `58f43a36ab96df2cf1327974e1cef8f49d7126a7`.
Contient 9 entrées, dont **Testet/Tescou type territoire**, La Salvetat / VRAC / jardins / Glanerie / Maison du Vélo / 3PA / Terre de Liens / SCTL typées par nature. Le lien vers un opérateur est une source, pas un partenariat ni une permission de visite.
Les adresses publiques provenant du corpus C10 sont reportées lorsqu'elles existent, en **texte seul** sans latitude/longitude. Le reste est `null`, pas inventé. Mise à jour de contrôle documentaire du 02/11/2026 pour la structure, **pas nouveau contrôle individuel de toutes les sources**. La page officielle Maison du Vélo confirme 12 boulevard Bonrepos, 31000 Toulouse et horaires de l'atelier participatif mercredi–samedi 14h30–17h30 : https://www.maisonduvelotoulouse.com/informations-pratiques/ . La Glanerie annonce nouveaux horaires de Blagnac dès 04/11/2026, à différencier de ses anciens horaires : https://www.la-glanerie.org/actualites . Éviter les garanties d'ouverture hors de ces annonces.

## Action 3 : parcours + affichage concret, sans écraser les ateliers
`coordination/reprise-r1/prototypes/atlas-tis001-candidat.html`, même branche, commit `d88274914b3cb8df1fe8f07fd4da3ead815a5863`, blob `5e83c3390c46d306cab9f0d675bdc2d0553b4ce0`.
Une page de **prévisualisation statique interne** charge le JSON par chemin relatif, affiche 3 parcours avec listes ordonnées, puis 9 fiches avec catégorie, source, date, éventuelle adresse publique et réserve ; affichage sans GPS, sans collecte, sans fournisseur tiers, sans ajout aux pages de production, sans écriture. Création d'éléments `textContent` et liens publics ; erreurs de chargement affichées, ne prétend pas être une carte interactive ni permettre une visite.
**À La Graphiste** : examiner la hiérarchie visuelle et l'accessibilité, aligner à la charte graphique sur branche candidate ; ne pas changer le sens des statuts. **À La Développeuse** : raccord possible à `atlas.html` et `parcours.html` une fois schéma/validation stabilisés ; tester dans le navigateur, focus, contraste, URL et petit écran avant intégration. Ces demandes sont des instructions candidates transmises **via La Relieuse** ; aucun dialogue direct entre conversations revendiqué.

## Contrôles réellement exécutés
- JSON : vérifications en JavaScript lors de sa génération, **8/8** : 9 entrées, IDs uniques, 3 parcours, toutes références de parcours résolues, GPS tous null, aucun partenariat Interstice, import Transiscope interdit, URLs sources HTTPS.
- Relecture des fichiers après écriture par fetch GitHub et blobs cités ; HTML : **4 contrôles de source**, chemin JSON relatif, utilisation `textContent`, liste `ol`, présence du message d'erreur. **Pas de test navigateur/DOM réel, de serveur HTTP, de CI, Lighthouse ou lecteur d'écran**.
- Transiscope : https://transiscope.org/le-projet/comment-ca-marche/ confirme responsabilité des sources et licences d'origine ; **aucune API testée, aucune licence de jeu de données présumée**.
- Carte PR #41 toujours distincte et fictive : aucune modification.
- Statuts documentaires `RELIER/COMPLÉTER` appliqués, aucune nouvelle entité publique, aucun `EXP-003`.

## Tableau final
| Objectif | statut | résultat et suite |
|---|---|---|
| Reprendre 9 entrées et parcours | **TERMINÉ documentaire** | JSON neuf entrées + trois parcours, références validées ; les 12 anciennes fiches hors dépôt demeurent **BLOQUÉES** pour rapprochement |
| Contrôler coordonnées et informations pratiques | **À POURSUIVRE** | sources officielles, vérifications partielles, contacts publics historiques, pas de contrôle temps réel ou visites ; revalider chaque page avant publication |
| Distinguer territoire / acteur / relation | **TERMINÉ candidat** | types, relation Interstice toujours « AUCUNE », aucune API ou partenariat |
| Construire affichage concret | **TERMINÉ prototype** | HTML autonome déposé ; essai navigateur, accessibilité et intégration avec Graphiste/Développeuse **À POURSUIVRE** |
| Transmettre à La Relieuse | **TERMINÉ dépôt GitHub** | fichier candidat, commits et blobs vérifiés ; réception non présumée |
| Publier/fusionner | **DÉCISION ZOUT** | droits, visa, sécurité P0 et tests préalables |

**Dépendance forte :** carnet des douze fiches initiales accessible à La Relieuse/Zout dans espace autorisé ; pas le publier si données privées. Les neuf documents récents et douze recherches historiques ne peuvent être additionnés sans comparaison des noms/sources.
