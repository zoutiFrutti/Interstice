# La Faille noire × Interstice — Transmission Développeuse vers Relieur
**Date :** 2026-10-30
**Origine :** Atelier Développeuse
**Objet :** réponse ciblée aux études du Penseur 39–58 et suite du prototype de découverte
**Statut :** réalisation sur branche PR #41, propositions non adoptées, aucune fusion ni déploiement

## Réalisations vérifiables
La transmission du Penseur `2026-10-30_PENSEUR_VERS_DEVELOPPEUR.md`, la feuille de route 39–58 et les études 49–53, 56, 58 ont été lues. L'audit initial PR #36 et la PR #41 ont été réutilisés, sans duplication.
Sur la même branche PR #41, le prototype fictif reçoit : recherche explicite par besoins/ressources, champ de correspondance lisible sur la fiche-liste, conservation de l'ordre sans score, export JSON des seuls exemples fictifs avec liste blanche, et tests automatisés correspondants. Les autres parcours de base (commune → liste → fiche → retour) sont conservés.

## Frontières à préserver
- **Réel :** code et tests versionnés sur une PR brouillon ; résultat vérifié : 15 tests Node réussis, 0 échec, sur le SHA `8ff4755568fb2660027b907f44a22a28dfa701b7` (https://github.com/zoutiFrutti/Interstice/actions/runs/41047101065). Aucun test mobile/lecteur d'écran attesté.
- **Simulé :** toutes les fiches, ressources, besoins, territoires de démonstration et modalités de rencontre.
- **Manquant :** publication sûre d'un besoin individuel, offre réelle, mise en relation consentie, contact public vérifié, recours, backend des initiatives.
- **Bloquant avant production :** revue Anarchitecte (API/RLS), Juriste (droits, personnes, export et correction), Organisateur (rencontres et participation hors application), Graphiste (interface et intégration).
- **Reportable :** carte, notifications, Android natif, statistiques et messagerie.

## Contradictions à arbitrer collectivement
Un export libre des données du commun ne doit jamais inclure des contacts privés (études 49–50) ; la suggestion de rapprochement doit rester facultative et explicable (51) ; une mesure de réussite par nombre d'utilisations contredirait l'autonomie visée (56 et 58). Aucun classement de conformité morale.
Les travaux politiques du Penseur ne sont pas adoptés automatiquement par ce code.

## Traçabilité
- PR #41 : https://github.com/zoutiFrutti/Interstice/pull/41
- Journal commun sur la branche : `coordination/JOURNAL_COMMUN.md`
- Complément technique : `docs/PROTOTYPE_INITIATIVES_MOBILE_2026-10-30.md`

**Cette transmission est un dépôt documentaire. Elle ne prouve pas qu'une autre conversation l'a lue.**

 
## Complément — transmission générale 012 et bilan final de dix passes
**Correction d'organisation :** le Relieur est l'unique destinataire des questions de coordination ET d'organisation pratique ; aucune conversation « L'Organisateur » n'existe. Les mentions antérieures sont conservées pour mémoire, mais les tâches de rencontres, contribution hors ligne et choix de contacts publics sont remises au Relieur.
**Travail réellement accompli :** après contrôle de `main` et de la PR, dix passes concrètes ont fait évoluer le prototype : (1) reprise réelle et clarification, (2) recherche besoin/ressource, (3) ordre alphabétique choisi, (4) explication des résultats, (5) export filtré fictif, (6) impression, (7) URL inconnue gérée, (8) alternative sans JavaScript, (9) tests Node renforcés, (10) validation Chromium mobile et captures. Détails et critères dans `docs/PROTOTYPE_INITIATIVES_MOBILE_2026-10-30.md`.
**Résultat vérifié :** GitHub Actions https://github.com/zoutiFrutti/Interstice/actions/runs/41050764505 réussie : **20/20 tests Node, 3/3 tests Chromium, 0 échec**. Premier test navigateur échoué sur Playwright non compatible Ubuntu 26.04, corrigé vers Ubuntu 24.04 ; captures disponibles en artefact éphémère.
**Blocages :** aucun vrai contact ou initiative publiés ; permissions API et chaîne de modération non prêtes ; tests sur Android physique/lecteur d'écran et revue Graphiste non réalisés. Aucun déploiement ni fusion.
**Arbitrages pour le Relieur :** organiser relecture terrain sans app obligatoire, sélectionner première initiative volontaire et vérifiable, fixer la publication publique et les recours en lien avec le Juriste, demander adaptateur public en lecture seule à l'Anarchitecte, prioriser un accès simple sans carte imposée. Manifeste V2.5 et études 39–58 non adoptés collectivement.
**Prochaine action :** revue humaine de la PR #41 (fonctionnel, juridique, graphique, mobile), puis seulement raccordement à des fiches publiques autorisées.


## Incident de synchronisation après le bilan (30 octobre 2026)
Le `main` a continué d'évoluer pendant la session ; la PR #41 peut présenter des conflits sur `coordination/JOURNAL_COMMUN.md`. Une fusion préparée **uniquement dans la branche de prototype** avec le Journal de `main` préservé a été refusée par les contrôles de sécurité de l'outil GitHub. **Aucun commit de synchronisation appliqué, aucune modification sur `main`**. Ce blocage doit être traité par une revue humaine/un processus Git autorisé avant toute fusion. Il ne remet pas en cause le résultat CI déjà exécuté (20 tests Node et 3 tests Chromium réussis). Ne pas fusionner automatiquement les journaux ni écraser leurs ajouts.


## Transmission au Relieur — cycle supplémentaire de dix passes, transmission au Relieur · 30 octobre 2026

**Point de reprise vérifié :** PR #41 en brouillon, commit `4480327a`, tests antérieurs verts. Développement poursuivi sur la même branche, aucun nouveau dépôt, aucune migration Supabase, aucun déploiement ou fusion dans `main`. Les documents 012 et anciens journaux sont conservés.

| Passe | Résultat concret | Contrôle / trace |
|---|---|---|
| 1. Reprise | Lecture du HEAD de `main`, de la PR #41, du contenu des fichiers et de l'état CI ; conflit historique de Journal non résolu. | PR #41, état GitHub |
| 2. Choix sans données personnelles | Ajout dans `decouvrir-initiatives.html` d'une simulation de proposition avec uniquement des listes fermées pour besoins/offres/communes. | `#simulation-form`, test noyau |
| 3. Besoin vers ressource | Fonction `findCompatibleExamples` : une personne fictive cherche une perceuse, fiche fictive portant l'offre. | `initiatives-simulation.mjs`, tests Node et Chromium |
| 4. Ressource vers besoin | Même fonction, sens inverse : stockage proposé → besoin de stockage. | Tests Node et Chromium |
| 5. Commune protectrice | Filtrage facultatif par commune parmi les territoires connus ; aucun GPS, adresse précise ou donnée de proximité personnelle. | Tests Rabastens/Gaillac |
| 6. Explication et cas sans réponse | Fiches de correspondance avec le **champ source lisible**, aucun score ; message honnête quand aucun exemple, état réinitialisable. | `initiatives-app.mjs`, test Chromium |
| 7. Navigation et clavier | Lien de correspondance vers fiche, bouton retour et historique ; restauration du focus vers le lien à l'origine de la navigation. | Test Chromium clavier/retour |
| 8. Écran étroit et sobriété | Contrôles réactifs et taille cliquable au téléphone, test d'absence de débordement à 320/360/390/768/1024 px. | Test Chromium viewport |
| 9. Tests et aperçu | Exécution GitHub Actions : **24/24 tests Node et 6/6 tests Chromium réussis** ; captures de liste, fiche et simulation produites. | https://github.com/zoutiFrutti/Interstice/actions/runs/41082721386 |
| 10. Documentation/transmission | Journal commun et dossier du prototype actualisés dans la branche ; complément de transmission au Relieur et commentaire de PR, sans adoption ni fusion. | Cette entrée, transmission et PR #41 |

**Statut :** développement effectif et tests automatisés vérifiés, mais **aucune initiative réelle ni mise en relation effective**. Les six fiches et leurs territoires sont inventés ; la simulation ne demande aucune saisie libre et n'envoie ni ne conserve de données personnelles. Aucune mesure de popularité et aucune suggestion politique.

**Captures :** artefact temporaire GitHub Actions `interstice-apercu-mobile-fictif`, contenant `initiatives-mobile-liste.png`, `initiatives-mobile-fiche.png` et `initiatives-mobile-simulation.png`. À ouvrir depuis l'exécution CI ; cette capture automatisée n'est pas une revue visuelle humaine.

**À vérifier avant revue/fusion :** Android réel, lecteur d'écran, lecture des captures par le Graphiste et une personne utilisatrice, compatibilité autres navigateurs. La PR #41 reste **conflictuelle vis-à-vis de `main`**, notamment son Journal commun ; la tentative de synchronisation antérieure a été refusée par l'outil. Préserver les entrées concurrentes et confier la résolution à un processus autorisé.

**Bloquant avant données réelles :** vérification des sources et des droits de publication, contrôle des API/RLS par l'Anarchitecte, correction/signalement/recours par le Juriste, organisation pratique des contacts volontaires et accès hors ligne par le Relieur. Ne pas créer un nouvel « Organisateur ». Les études 39–58 et le Manifeste V2.5 ne sont pas des décisions collectives adoptées.

**Prochaine action :** revue collective de cette page pilote, puis conception d'un adaptateur lecture publique des seules fiches consenties et validées. Carte, PWA installable, messagerie et notifications peuvent attendre.


## Bilan ciblé — Transmission 013 : cartographie des communs × possibles — dix passes de développement
**Reprise vérifiée :** PR brouillon #41, HEAD de la branche `c0f4344d` après ajout de tests par un autre atelier ; `main` consulté. La PR #36 n'a pas été réauditée ; aucun deuxième site ni application. L'intégration est dans `decouvrir-initiatives.html`, sans changer l'accueil ni le CSS global de la PR #35.

| Passe | Réalisation concrète | Contrôle |
|---|---|---|
| 1 | Contrôle HEAD `main`, PR #41 et tests existants ; reprise du dernier commit réellement écrit. | GitHub HEAD/PR + fichiers |
| 2 | Modèle fictif `initiative`, `besoin`, `ressource`, `projet`, onze objets stables dont 7 communs et 4 possibles. | `cartes-data.mjs`, tests Node |
| 3 | Sélecteur « Carte des communs / Carte des possibles », deux lectures du même modèle. | `#reading-communs`, `#reading-possibles`, Chromium |
| 4 | Carte SVG interactive d'origine, boutons zoom, repères communaux cliquables et activables au clavier. | `cartes-map.mjs`, captures Chromium |
| 5 | Repères géographiques approximatifs des communes Rabastens, Lisle-sur-Tarn, Gaillac et Albi. Aucun objet ne porte de latitude/longitude ou d'adresse. | `COMMUNE_ANCHORS`, tests de séparation |
| 6 | Synchronisation effective des filtres commune, domaine, besoin/ressource, liste, carte et fiches ; sélection de commune filtre la liste, liens profonds conservés. | `filterMapEntries`, tests 390/1280 |
| 7 | Statuts visuellement explicites : **toutes les fiches sont fictives** ; « documenté dans un scénario » et « en projet » ne signifient pas existence réelle, pas de score politique. | Titres, fiches, légende, tests |
| 8 | Consultation sans géolocalisation ou serveur de tuiles ; si le module SVG échoue à charger, la liste entière reste disponible avec message et bouton carte désactivé. | Test Chromium de blocage volontaire du module |
| 9 | Tests Node **32/32** et Chromium **8/8**, tous réussis sur commit `79b5857`; contrôles 390/1280px, clavier, navigation, erreurs, vides, fallback, export et réseau tiers ; captures sauvegardées. | https://github.com/zoutiFrutti/Interstice/actions/runs/41093502850 |
| 10 | Consignation des résultats sur la même branche et transmission au Relieur, sans fusion ni déploiement. | `coordination/JOURNAL_COMMUN.md`, PR #41 |

### Contrat et schéma utilisé
- `cartes-data.mjs` : `DEMO_MAP_ENTRIES` avec identifiant, `kind` (quatre objets), `reading`, territoires multiples, besoins/offres, `source.type=simulation`, états de vie descriptifs et avertissement `isDemo=true`. **Aucun organisme, personne, adresse, rendez-vous ou contact réel**.
- `cartes-core.mjs` : filtre et tri des deux lectures, `communeGroups()`, projection approximative et export explicite à champs autorisés. Le même résultat pilote les listes et repères.
- `cartes-map.mjs` : SVG natif contrôlé au clavier et à la souris, sans dépendance cartographique installée, sans service externe.
- `cartes.css` : compléments propres à la page, réutilisant l'identité Interstice en place.
- `initiatives-app.mjs` : intégration dans le parcours existant, avec repli si la carte est indisponible.
- `tests/initiatives-core.test.mjs` et `tests/initiatives-browser.test.mjs` : tests du contrat fictif, fuite et parcours 390/1280px.

**Repères d'échelle :** latitudes/longitudes des centres de communes, seulement pour disposer les étiquettes les unes par rapport aux autres ; les chiffres sont arrondis au millième de degré et **ne sont pas des coordonnées de lieux ou collectifs**. Points de recoupement consultés (sans importer de fonds de carte ni de géométries) : Rabastens https://www.gaillacinfo.fr/visiter/villages/rabastens/ ; Lisle https://www.voldoiseau.com/commune/lisle-sur-tarn/ ; Gaillac https://www.france-voyage.com/villes-villages/gaillac-commune-32805.htm ; Albi https://www.voldoiseau.com/commune/albi/ . La représentation est **un schéma local d'ancres communales**, pas une carte cadastrale, un fond IGN ou un tracé de limites administratives.

### Licence et confidentialité cartographique
Le SVG et les styles ont été écrits pour le projet, sans tuiles, sans fournisseur externe, sans JavaScript d'une CDN et sans requête de géocodage. Il n'y a donc pas de contrat de tuiles à souscrire ou d'images cartographiques tierces à republier. Pour une future carte réelle utilisant OpenStreetMap ou des fonds publics, il faudra vérifier **les attributions, licences ODbL/fonds, conditions d'usage du fournisseur, quotas, caches et journaux réseau** ; ne pas supposer que le prototype autorise leur usage. La carte présente des centres de communes seulement, sans donner de coordonnées de domiciles dans l'API, l'export ou les fichiers des fiches.

### Vérification reproductible et aperçus
```sh
node --test tests/initiatives-core.test.mjs
python3 -m http.server 8000
```
Ouvrir `http://localhost:8000/decouvrir-initiatives.html`, choisir « Carte des possibles », « Carte interactive », puis choisir Gaillac pour filtrer les résultats. Sans carte, choisir « Liste complète » et retrouver les mêmes fiches.
Pour reproduire les tests navigateur sur Ubuntu 24.04/Node 22 : `npm install --no-save --ignore-scripts playwright@1.56.1`, `npx playwright install --with-deps chromium`, démarrer un serveur HTTP local, puis `node --test tests/initiatives-browser.test.mjs`.
**Captures CI** dans l'artefact `interstice-apercu-mobile-fictif` (rétention 7 jours) de l'exécution liée ci-dessus : liste/fiche/simulation et cartes des deux lectures à 390 et 1280px. Tests Chromium simulés ≠ test Android physique ni revue visuelle du Graphiste.

### État et blocages
**Fonctionnel et vérifié par CI :** carte SVG, liste équivalente, deux lectures, filtres, commune choisie par clavier, ouverture de fiches, export fictif par liste blanche, zoom, erreurs et états vides, fonctionnement sans module de carte.
**Simulé :** 11 fiches de tous types, y compris l'existence prétendument « documentée » **dans le scénario** ; aucune activité réelle ni rencontre n'est attestée.
**En attente :** relecture Graphiste, essais Android et lecteur d'écran, politique d'un fond géographique si un jour retenu, rôle/contestation/effacement des données réelles, revue API/RLS et consentement des initiatives.
**À reporter :** GPS, messagerie, fond cartographique détaillé, algorithme de rapprochement, PWA installable et cache hors ligne de vraies données.
**Git :** PR #41 toujours brouillon ; le conflit entre son Journal et les ajouts parallèles sur `main` n'est pas contourné, ne pas fusionner sans résolution conservatrice.
**Coordination :** Anarchitecte (contrat API/données), Juriste (garanties et licences), Graphiste (lecture mobile), Penseur (lecture critique), Relieur (scénarios humains/recours/coordination). « L'Organisateur » reste un nom historique sans atelier actif. Les études 39–58 et Manifeste V2.5 ne sont pas adoptés.

**Prochaine action à demander au Relieur :** revue conjointe UX sur Android réel + lecture clavier/lecteur d'écran ; une fois les garanties vérifiées, choix d'une seule initiative volontaire et sourcée avant de brancher l'API publique. Aucun déploiement ni collecte maintenant.
