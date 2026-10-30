# LA FAILLE NOIRE × INTERSTICE — Le Relieur
## Cycle 014 — bilan de 20 passes distinctes de coordination et d'organisation pratique
**30 octobre 2026.** Reprise du cycle 013 et de [la transmission 014](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/RELIEUR_TRANSMISSION_014_REPRISE_20_PASSES_2026-10-30.md).

**Portée des « vingt passes » :** vingt **opérations de lecture, recoupement, diagnostic et production documentaire effectivement faites** dans cette session, non vingt tests automatisés ou rendez-vous réels. Une lecture du code n'est jamais présentée comme un essai mobile. Les décisions collectives restent humaines. Aucun atelier « Organisateur » séparé.

## Journal des vingt passes

| # | Action réellement effectuée | Preuve vérifiable / résultat | Limite |
| --- | --- | --- | --- |
| **01** | Relire le `HEAD` de `main`. | GitHub API, `2eeb189c9cc0f257a448bfe8feacefc3f62e2cea` au début du contrôle. | Le dépôt évolue pendant le travail. |
| **02** | Relire les cinq PR prioritaires. | [#35](https://github.com/zoutiFrutti/Interstice/pull/35), [#41](https://github.com/zoutiFrutti/Interstice/pull/41), [#42](https://github.com/zoutiFrutti/Interstice/pull/42), [#43](https://github.com/zoutiFrutti/Interstice/pull/43), [#44](https://github.com/zoutiFrutti/Interstice/pull/44) : quatre ateliers et la coordination. | Les états affichés restent ponctuels. |
| **03** | Qualifier leur possibilité d'intégration, sans merger. | #35/#41/#44 **non fusionnables** au contrôle ; #42/#43 **fusionnables** techniquement, toutes en brouillon. | Fusionnable ≠ approuvé ni prêt à publier. |
| **04** | Inspecter les derniers workflows. | Nouvelles exécutions #41/#35/`main` relevées **en attente** ; anciens runs verts, mais pas une réussite sur le HEAD non terminé. | Pas de déclaration de CI verte sur dernier SHA sans résultat. |
| **05** | Reprendre les garanties de la Juriste. | Documents de cartographie et avis Wiki sur `main` ; modèle F1–F10 fictif, R1–R10 futur réel. Corrections juridiques du Wiki rapportées comme écrites sur PR #44. | Ne pas assimiler avis juridique à habilitation RGPD ou règles adoptées. |
| **06** | Reprendre bibliographie et avis critiques. | Transmission Médiathèque 014 dans `coordination/transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md` ; relectures de Young, Freeman, Tebble, Berenstain, Ahmed, etc. | Pages primaires de tous les livres non lues intégralement. |
| **07** | Contrôler la première page Wiki candidate. | `wiki-decision-collective.html` sur PR #44, statut candidat, objection Tebble, liens de sources et de retour ; ancienne expression « Leur droit à être informées… » **absente** dans la copie consultée. | Aucun vrai navigateur Android ni validation humaine. |
| **08** | Contrôler la seconde page Wiki. | `wiki-lecture-croisee-travail-soin-pouvoir.html` sur PR #44 ; contribution décrite comme « correction documentaire » et avertissement sur l'absence de canal confidentiel. | Le canal privé n'existe toujours pas, ne pas solliciter de plaintes sensibles. |
| **09** | Confronter les pages Wiki #44 à leurs copies #35. | Extraction de tous les paragraphes de chaque version : **22/22** paragraphes du premier article et **19/19** du second retrouvés textuellement dans la copie graphique à la date du contrôle. | Présence du texte ≠ contrôle visuel, ordre, ou validation des liens. |
| **10** | Vérifier le modèle fictif de carte #41. | `cartes-data.mjs` : six initiatives + cinq objets, **11 fiches**, deux lectures, types `initiative/besoin/ressource/projet`, `source.type=simulation`. | Fiches imaginaires, aucune initiative réelle. |
| **11** | Examiner le mécanisme liste/carte. | `cartes-core.mjs` et `initiatives-app.mjs` : `filterMapEntries` unique pour résultats, `communeGroups` pour points, `withoutPublicMapLocation` pour fiches sans point. | Vérification statique du code, non nouveau test navigateur réussi. |
| **12** | Contrôler la confidentialité de la projection de données. | `exportFictionalMapEntries` autorise explicitement les champs fictifs ; `cartes-data.mjs` garde `publicContact:null`, identités et prêts fictifs. Le test canari est présent dans les tests navigateur. | Aucune API, base réelle ou RLS testée ici ; dernière CI du canari en attente. |
| **13** | Vérifier la provenance géographique. | `COMMUNE_ANCHORS` contient des **centres de communes** (Rabastens, Lisle-sur-Tarn, Gaillac, Albi), pas les coordonnées d'une activité. Deux cartes SVG sans service de tuiles. | Ne pas afficher les points comme adresses d'initiatives. |
| **14** | Contrôler le raccordement CSS et son intégrité. | `cartes-design.css` présent dans PR #35 et PR #41 avec **SHA de contenu identique** `07e8c54fff6cc4dfc66f42ba19cf364962e400c5`. `decouvrir-initiatives.html` charge ce CSS puis `cartes-compat.css`. | L'égalité CSS ne constitue pas validation physique du rendu Android. |
| **15** | Construire une matrice de collisions Git. | `list_pr_changed_filenames` : #35×#41 : CSS + Journal ; #35×#44 : deux HTML + Journal ; la plupart des autres paires : Journal ; #43 n'entre en collision avec aucune de ces quatre PR à ce contrôle. | Résolution conservatrice des historiques restant à faire par les ateliers autorisés. |
| **16** | Diagnostiquer **dans les logs** l'échec Wiki. | [run #41094247759](https://github.com/zoutiFrutti/Interstice/actions/runs/41094247759), job `124195744721` : inventaire 43/43 succès ; **ingestion** échoue HTTP `409` car lecture de fichier Penseur côté service `status:403`. [run précédent #41094181659](https://github.com/zoutiFrutti/Interstice/actions/runs/41094181659) vert. | Cause fine du 403 non démontrée ; aucun assouplissement de permission effectué. |
| **17** | Tenter la vérification directe du site public. | `https://zoutifrutti.github.io/Interstice/` ouvert par lecteur web : **accès impossible avec cet outil**. | Aucune validation de l'affichage public revendiquée. |
| **18** | Vérifier l'état de diffusion sociale. | Connecteur Metricool : compte `faille.noire` récupéré ; **0 post programmé** du 30/10 au 31/12/2026. Paquet de lancement 013 inspecté, erreur `03_04_interstice.jpg` au présent identifiée. | Les brouillons ne sont pas listés par cette requête ; pas de publication ni de modification d'image. |
| **19** | Produire un exercice testable et raccorder S1–S3 au prototype. | [Fiche S1 papier/interface](RELIEUR_014_FICHE_TEST_S1_PAPIER_CARTES_2026-10-30.md) créée, liée au [kit S1–S3](RELIEUR_PILOTE_3_SCENARIOS_CONCRETS_2026-10-30.md). L'exemple `demo-cycles` est à Gaillac, pas Lisle ; distinguer recherche trop locale et absence de ressource réelle. S2 La Marmite et S3 non remplacés. | **Zéro essai humain**, aucune invitation, aucune adresse réelle. |
| **20** | Produire une procédure d'arbitrage et consigner les dépendances. | [Dossier d'intégration V0](RELIEUR_014_DOSSIER_ARBITRAGE_INTEGRATION_V0_2026-10-30.md) créé dans **la PR #43 existante** ; ordre de revue #44, #41, #35, #42 ; protections avant données réelles, décision humaine. Présent bilan ajouté à la même PR. | Aucune fusion, migration, publication ni décision collective. Journal commun à mettre à jour séparément et vérifier. |

### Ce qui a changé de manière concrète dans ce cycle
- Une **cause d'échec CI précisément localisée** (service d'ingestion, non construction du Wiki) avec run, job et message d'erreur.
- Une **preuve de raccordement CSS déjà présent**, qui évite de demander un import redondant à la Développeuse.
- Une **preuve de conservation des paragraphes** lors de l'habillage graphique des deux articles, sous réserve de vérifier le rendu.
- Une **matrice de conflits** qui empêche d'intégrer les quatre branches concurrentes en écrasant le Journal ou les dernières corrections du Lecteur.
- Une **fiche d'essai humain faisable**, sans smartphone obligatoire, reliée aux vrais exemples fictifs du prototype.
- Un **ordre de préparation de décision humaine** sans ouvrir le service à des données personnelles réelles.

### Décision de coordination recommandée, non adoptée
1. **Valider une démo fictive** sur version candidate commune, après test navigateur sur SHA exact et essai mobile réel.
2. **Finaliser les deux articles** par relecture humaine des sources et du statut ; conserver la voie de correction documentaire non sensible sans promettre de canal privé fictif.
3. **Harmoniser accueil + cartes** en partant des fichiers sources les plus récents et en préservant le Journal commun.
4. **Résoudre le 403 du service d'ingestion Wiki** par diagnostic serveur, pas par suppression des contrôles.
5. **Corriger le visuel 03_04**, vérifier les fichiers et ne communiquer que sur le niveau fonctionnel effectivement observé.
6. **Tester S1 d'abord sur papier**, seulement avec participation volontaire et aucun traitement de données sensibles.

### Reprises des autres ateliers sans doublons
- Développeuse #41 : tests canari et responsive sur HEAD final ; ne pas recréer les cartes, ne pas re-importer `cartes-design.css` déjà identique.
- Graphiste #35 : surveiller les évolutions #44 et #41, Android physique et cohérence du CSS.
- Lecteur/Médiathèque/Juriste : deux articles #44, même source, corrections avec preuves, aucune nouvelle page.
- Anarchitecte : diagnostic ciblé service d'ingestion et contraintes de rapprochement, aucun audit général.
- Communications : corriger `03_04` si validé, vérifier l'état des brouillons par outil approprié, aucun import automatique.
- Archiviste/Biographe : continuer les sources ASSO-008/BIO-019 ; ne pas fabriquer des épingles d'organisations réelles.
- Le Relieur : organiser le protocole S1, recueillir **les réponses réellement reçues** et préparer le dossier d'arbitrage.

**Métriques honnêtes :** 20 passes d'observation/coordination/production consignées ; **3 pièces écrites/actualisées dans PR #43** en plus du présent bilan ; **0 test physique de personnes, 0 contribution réelle, 0 fusion, 0 déploiement, 0 publication**, aucun droit de gouvernance attribué à l'IA.

**Validation :** le présent document est vérifiable sur la branche de la PR #43. Les engagements de personnes et règles politiques restent soumis aux personnes concernées.
