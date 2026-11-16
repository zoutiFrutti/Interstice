# C07 — La Relieuse · Bilan de cloisonnement des liens Drive / dépôt GitHub public
**10 novembre 2026 · P0 · Branche `work/c07-reunification-20261104` · PR #186 · HEAD audité `7fd6593aaf8ef488c89e33fbf6dd512b397b0bb0`**

## Actions effectuées (preuves candidates)
1. Registre C02 `resources.json` : **22** champs `dossier_locator` contenant une URL Google Docs/Drive transformés en `null`, sans changement d'ID, `source_refs`, statut ni relations. Blob Git candidat : `ba88b78064921a2232ac0000e71f2120d5fa500b`.
2. Registre C02 `sources.json` : **26** champs `locator` de sources Google Docs/Drive transformés en `null` en conservant les 100 ID de source et leurs métadonnées de provenance. Blob Git candidat : `726fa0e1d8961548498bd1db72cd418057e2f54b`.
3. Moteur DEV-03 : les blobs d'entrée épurés sont réépinglés ; les tests C02/DEV-03 et les statuts fermés ont été conservés.
4. Page racine `manifeste-v2-5.html` : remplacement d'**un lien direct** vers une source Google privée par un libellé indiquant une conservation hors site. La modification est autorisée **seulement en candidat**, et son blob unique est inscrit comme exception de sécurité dans `C13_EXCEPTIONS.json` ; le texte manifeste n'est pas réécrit.
5. `check-public-locators.mjs` et tests : interdisent les liens directs Google Docs/Drive dans les deux registres C02. `check-pages-content.mjs` et tests : refusent les liens directs dans les fichiers Jekyll générés. La CI `c07-master-reception.yml` exécute ces filtres sur chaque changement ciblé ; les rapports n'impriment ni IDs ni URL.
6. `audit-public-tree.mjs` et test : nouvel **inventaire en lecture seule de tout le checkout Git public**, sans noms de fichiers, titres ou liens dans ses résultats ; ceci est un audit, **pas** un certificat d'absence de fuite.

## Preuve de la sortie Jekyll
Workflow C07 `42770081520`, job `master-and-pages` : **réussi**. Résultat : `{"accepted":true,"files_checked":81,"unsafe_entries":0,"symlinks":0}` ; filtre des liens `{"accepted":true,"files_scanned":81,"violating_files":0}`. Tests de registres, DEV-03, LEC-03, cas négatifs et reconstruction Jekyll réussis. **Aucun déploiement**.

## Contrôle externe des permissions Drive
Sur les **22 documents** dont les liens figuraient dans `resources.json`, lecture de métadonnées Google Drive (sans modification) : **22/22 accessibles à la lecture de métadonnées**, `shared:false`, seules permissions de type `user`, aucune entrée `anyone` ou `domain` retournée. Ces résultats portent sur ces documents précis, selon les permissions au moment du contrôle ; ils ne certifient ni le contenu des documents ni l'ensemble des 26 autres références de source.

## P0 non clos : le dépôt GitHub lui-même
L'inventaire complet du HEAD `7fd6593aaf8ef488c89e33fbf6dd512b397b0bb0` a constaté :
- **852 fichiers Git suivis** ; **841 fichiers texte inspectés** ;
- **38 fichiers** contenant encore au moins un lien Google Docs/Drive direct ;
- **177 occurrences** de liens directs : `apercu-graphiste-35` : 12 fichiers / 48 liens ; `coordination` : 18 / 118 ; `docs` : 2 / 2 ; `propositions` : 6 / 9.
Ces liens ne sont pas tous qualifiés comme des **documents privés** : certains peuvent désigner des sources de recherche intentionnellement publiques. **La classification source par source n'a pas été réalisée.** Aucun lien n'est recopié dans ce bilan.
- Les commits GitHub **antérieurs** et les clones restent accessibles même après épuration des fichiers courants. Ni la branche candidate, ni `_config.yml`, ni les permissions Drive ne suppriment des données de l'historique public.
- Le dépôt reste **public** ; `main` n'est pas modifié ; ne jamais qualifier cette intervention de nettoyage total, d'effacement d'historique ou de confidentialité garantie.

## Suite de réduction du risque, sans perte de preuve
**P0-A** : classer les 177 liens par cible et permission (document public intentionnel / source privée / accès inconnu). **N'ouvrir aucun contenu sensible pour ces contrôles de diffusion si seules les permissions suffisent.**
**P0-B** : pour les liens privés ou non vérifiables, substituer un identifiant de source opaque dans les 38 fichiers candidats, avec table de correspondance dans un emplacement privé réellement contrôlé, **jamais committée dans GitHub public**. Conserver titre, version, ID et origine documentaires, sans injecter d'identifiants Drive dans les diagnostics et logs.
**P0-C** : décider séparément avec le propriétaire la stratégie de remédiation d'historique GitHub et des clones. Une réécriture d'historique ou un changement de visibilité peut interrompre les références, contributions et site : **aucune action destructive implicite**.
**P0-D** : vérifier les informations personnelles, lieux sensibles, images et droits de reproduction indépendamment des seules URL. Tester les 81 fichiers autorisés, les pages historiques et les aperçus avant une fusion.
**P0-E** : blocage éditorial inchangé : **219/219 fiches candidates non autorisées**, `PAR-005` bloqué, **9 HELD**, `public_cards=[]`.

## Verdict
**Réduction effective de l'exposition sur la branche candidate : OUI.**
**Partage public des 22 documents Drive contrôlés : NON, selon métadonnées lues.**
**Sortie Jekyll candidate conforme aux tests ciblés : OUI.**
**Sécurité complète du dépôt GitHub public et de son historique : NON ATTESTÉE.**
**Fusion / migration / publication : NON AUTORISÉES.**
