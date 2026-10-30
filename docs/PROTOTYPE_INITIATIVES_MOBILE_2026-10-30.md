# Développeuse — prototype mobile découvrir une initiative (transmission 011)
Date : 30 octobre 2026. **Branche et PR en brouillon, pas de déploiement ni migration.**

## Réalisé
Page `decouvrir-initiatives.html` partageant les logos et `style.css` du site, avec compléments `initiatives.css`. Recherche par commune et domaine, liste, état vide, fiche et bouton retour. URL profonde `?initiative=demo-jardin`, historique navigateur, focus clavier. Six fiches imaginées dans `initiatives-data.mjs`, sans coordonnées, contacts, latitude ou données personnelles ; les données simulées sont identifiées dans l'interface, la liste et la fiche. Aucun accès Supabase.

## Contrat de lecture
`initiatives-core.mjs` expose `createDemoRepository(items)`, qui implémente `list({commune,category})` et `getById(id)` en asynchrone. Un adaptateur HTTP en lecture seule pour les **seules fiches publiques validées** pourra ensuite remplacer les données fictives, sans créer une seconde base. Ne pas utiliser les tables de ressources documentaires comme répertoire de matériel.

## Tester sans changer la production
À la racine du dépôt sur cette branche :
```sh
node --test tests/initiatives-core.test.mjs
python3 -m http.server 8000
```
Ouvrir `http://localhost:8000/decouvrir-initiatives.html` (pas `file://`, modules ES). Chrome mobile : outils développeur / écran 390 × 844, ou depuis téléphone sur un réseau local de confiance avec l'IP du poste et le port 8000.

Scénario : rechercher `Lisle-sur-Tarn` ; filtrer `Écologie` ; ouvrir `Le jardin qu'on imagine` ; vérifier « fictif », les besoins et l'absence de contact ; revenir ; chercher `Gaillac`, puis une commune inexistante ; vider les filtres ; ouvrir directement `?initiative=demo-outils` et utiliser l'historique. Contrôler Tab/Entrée et un lecteur d'écran avant fusion.

## Distinctions et limites
- Fonctionnel dans le **code de prototype** : recherche, catégories, fiches, multi-territoire, retour, état vide, lien profond.
- Simulé : les six initiatives, tous leurs besoins, offres, activités et modalités de participation.
- Non fait : test sur Android physique, test lecteur d'écran, test réseau réel de bout en bout, rattachement à une API publique de fiches approuvées, modération, signalement, recours, PWA installable.
- Bloquant avant des initiatives réelles : processus de validation et retrait, garanties juridiques, RLS et publication contrôlée par l'Anarchitecte et le Juriste.
- Peut attendre : carte, GPS, rencontres automatisées, messagerie, Android natif.

## Coordination
Reprise de l'audit PR #36. Transmission juridique déjà consultée : `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md`. Revue graphique avec l'atelier Graphiste et PR #22 (la page d'accueil n'est pas modifiée). Relieur : suivre la PR et les tests sans supposer l'adoption collective. Relieur : coordonner contact public et participation hors application. Penseur : pas de classement moral ni adhésion obligatoire à la Charte.

## Complément Penseur 39–58 — mission reçue le 30 octobre 2026
Références consultées : `coordination/transmissions/2026-10-30_PENSEUR_VERS_DEVELOPPEUR.md`, feuille de route `coordination/PENSEUR_FEUILLE_DE_ROUTE_ETUDES_39_58_2026-10-30.md`, et études critiques 49–53, 56, 58. **Ce sont des propositions, pas des décisions adoptées.**

**Changement de code sur la même PR #41 :**
- Recherche explicite « besoin ou ressource », facultative, cumulable avec commune et domaine. Les données sont toujours des exemples fictifs.
- Chaque carte trouvée peut afficher les champs précis « Besoin : … » et « Ressource : … » qui justifient sa présence. Filtrage déterministe et **ordre source conservé**, sans score de popularité ni profilage (étude 51).
- Bouton d'export JSON des seuls exemples fictifs, avec liste blanche des champs publics de démonstration. Cet export **ne constitue pas un droit ni une méthode d'export de personnes réelles** (études 49–50).
- Aucun historique de recherches, aucune géolocalisation, aucune notification, aucun compte ni requête de données. La page reste dans le site, lisible sans installation ; CSS léger. Information sur l'absence de collecte (études 52–53).
- Absence volontaire de statistiques de clics / connexions. Les mesures utiles d'autonomie ou de rencontres devront être évaluées par méthodes choisies avec le Relieur, sans surveillance (études 56, 58).

**Tests d'acceptation supplémentaires :** combinaison des trois filtres, explication du rapprochement, ordre sans score, export limité à une liste blanche même en présence de champs secrets artificiels, absence de traceur. **Résultat constaté :** GitHub Actions `Découverte initiatives fictives` sur SHA `8ff4755568fb2660027b907f44a22a28dfa701b7` : **15 tests réussis, 0 échec** (journal de job lu). Preuve : https://github.com/zoutiFrutti/Interstice/actions/runs/41047101065 . Ce sont des tests Node, pas des tests navigateur.

**Non réalisé / bloquant :** publication effective d'un besoin ou d'une ressource, contact réel, consentement de mise en relation, traitement des corrections et recours, API publique et RLS validées, export autorisé de données réelles, mesure d'impact hors ligne. Ces fonctions nécessitent Anarchitecte, Juriste et Relieur ; pas de migration automatique.

**Coordination :** une transmission dédiée au Relieur est préparée sur la branche pour relecture. Aucune preuve de réception par sa conversation séparée.


## Transmission générale 012 du Relieur — dix passes techniques
**Correction de coordination :** l'atelier « L'Organisateur » n'existe pas ; le Relieur assure la coordination **et** l'organisation pratique, sans autorité politique. Les documents et transmissions historiques restent conservés. Aucune décision collective n'est déduite de cette clarification.
**Reprise :** PR #41, branche `feat/initiatives-decouverte-mobile-2026-10-30`, HEAD initial `beb832d`. Le `main` a évolué durant la session : **pas de fusion ni rebase automatique**. Audit PR #36 non recommencé. Document de référence : `coordination/RELIEUR_CLARIFICATION_ORGANISATION_2026-10-30.md`.

### Passes effectives, avec preuve
| Passe | Action exécutée et vérifiée | Trace |
|---|---|---|
| 1 | Consultation du HEAD réel de `main`, de la PR #41, de la clarification et des fichiers du prototype ; reprise sans perte. | GitHub PR #41, document Relieur 012 |
| 2 | Filtre « Je cherche : besoin / ressource / les deux », sans rapprochement automatique opaque. | `initiatives-core.mjs`, `initiatives-app.mjs`, test 16 |
| 3 | Tri alphabétique **choisi** ; ordre des exemples conservé par défaut, sans popularité. | `initiatives-core.mjs`, test 17 |
| 4 | Explication des correspondances par territoire, domaine et besoin ou ressource. | `explainSearchMatch`, test 18, essai Chromium |
| 5 | Export JSON **uniquement des résultats fictifs visibles**, par liste blanche. | `buildPublicDemoExport`, test 19, téléchargement Chromium |
| 6 | Bouton d'impression de fiche et CSS destiné au papier, pour usage hors écran. | `#print-fiche`, `@media print`, clic Chromium |
| 7 | Gestion explicite d'une URL de fiche inconnue, sans faux résultat ; retour à la liste. | `#invalid-route`, test 20 et Chromium |
| 8 | Alternative sans JavaScript vers `participer.html`, sans compte obligatoire pour consulter les informations générales. | `<noscript>`, vérification Chromium JS désactivé |
| 9 | Renforcement du noyau : **20/20 tests Node réussis**, 0 échec, sur les fonctionnalités précédentes et contrats de données. | https://github.com/zoutiFrutti/Interstice/actions/runs/41050764505 |
| 10 | **3/3 tests dans un vrai navigateur Chromium automatisé** avec écran 390×844 : parcours, retour, téléchargement, non-JS, absence d'appel réseau tiers ; génération de deux captures. Premier essai bloqué par Ubuntu 26.04 non pris en charge par Playwright 1.56.1 ; CI corrigée vers Ubuntu 24.04, seconde exécution verte. | https://github.com/zoutiFrutti/Interstice/actions/runs/41050764505 |

Les modifications du prototype sont enregistrées dans les commits `90ec708`, `0cdf92b`, `ec5fba9`. Les captures `initiatives-mobile-liste.png` et `initiatives-mobile-fiche.png` sont stockées en **artefact CI temporaire** `interstice-apercu-mobile-fictif` (rétention GitHub : 7 jours) sur l'exécution ci-dessus. **Captures générées, pas preuve d'une revue visuelle humaine.**

### État produit et limites
- **Terminé techniquement dans la PR :** consultation et filtre commune/besoin/ressource/catégorie, tri explicite, fiche, navigation, état vide, erreur d'URL, export fictif ciblé, bouton d'impression, lien sans JS ; tests Node et navigateur Chromium.
- **Simulé :** les six initiatives, leurs besoins, ressources et territoires.
- **À vérifier :** revues accessibilité lecteur d'écran, Android physique, relecture visuelle Graphiste, imprimerie réelle sur papier, comportement sur autres navigateurs, mise à jour de la base partagée et lien d'entrée depuis le site existant.
- **Bloqué avant publication réelle :** validation des sources et des initiatives, contact public consenti, sécurité API/RLS, suppression/correction/recours, modération et gouvernance des données.
- **Reportable :** carte, messagerie, push, Android natif, calculs de popularité (à éviter), PWA installable avant revue de ses caches.
- **Dépendances :** Anarchitecte pour futur adaptateur public sécurisé ; Juriste pour droits et recours ; Graphiste pour unifier la page à la nouvelle identité ; Relieur pour scénarios de rencontre, relais hors ligne, ressources, arbitrages humains et suivi du Journal. Penseur pour lecture critique des études 39–58 **non adoptées collectivement**.

### Test reproductible
```sh
git checkout feat/initiatives-decouverte-mobile-2026-10-30
node --test tests/initiatives-core.test.mjs
python3 -m http.server 8000
```
Puis ouvrir `http://localhost:8000/decouvrir-initiatives.html`.
Pour Chromium automatisé : installer Playwright 1.56.1 et Chromium sur OS pris en charge, démarrer le serveur HTTP en tâche du terminal, puis `node --test tests/initiatives-browser.test.mjs`. Les captures sont des artefacts CI, pas un déploiement.

### Prochaine étape utile demandée au Relieur
Organiser une relecture mobile réelle (une personne avec téléphone Android + une personne concernée par accessibilité), et demander à l'Anarchitecte/Juriste les critères stricts d'une **première fiche réelle publiable** ; sélectionner une initiative volontaire sans exposer d'adresse ni contact privé. S'assurer qu'une personne sans application peut participer. **Aucune collecte réelle n'est ouverte par cette PR.**


## Développeuse — cycle supplémentaire de dix passes, transmission au Relieur · 30 octobre 2026

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


## Transmission 013 : cartographie des communs × possibles — dix passes de développement
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


## Transmission 014 — Stabilisation des cartes, 20 passes · 30 octobre 2026
**Mission :** maintenir et durcir la PR brouillon #41, sans refaire la carte ni l'audit #36. HEAD initial `a59268357812d730f95b4cbad75275e4ac4d9e57`; `main` initial `3fc268c5978307332dca2473e0a690444b15d24b`. Le CSS graphique provient de la PR #35, HEAD lu `f9558d0c112f65b2ba22bcee4d9355034edc98b8`.

**Légende du tableau :** « vérifié avant modifications » = CI verte sur le SHA initial ; « code poussé » = contrôlé par lecture GitHub mais nouvelle CI en attente ; « régression écrite » = test présent dans le dépôt, **pas** un test réussi tant que GitHub ne l'a pas exécuté.

| Passe | Action concrète et résultat | Preuve / état |
|---|---|---|
| 01 | Vérification du HEAD de `main`, du HEAD de la PR #41 et des branches pertinentes | Consultation réelle de l'API GitHub |
| 02 | Examen des tests Node et Chromium du dernier HEAD pré-cycle : **38 Node / 38, 8 Chromium / 8, zéro échec** | CI https://github.com/zoutiFrutti/Interstice/actions/runs/41099508020 — **vérifié avant modifications** |
| 03 | Lecture du moteur, du SVG, de la page, du CSS et des derniers tests ; identification du problème de fiche sans repère et des petits libellés SVG sur mobile | Sources de la branche, corrections ci-dessous |
| 04 | Contrôle des 11 fiches fictives, IDs stables et quatre types (`initiative`, `besoin`, `ressource`, `projet`) | Tests Node historiques réussis ; cas de régression conservés |
| 05 | Contrôle du filtre « communs » (7 fiches initiales) et de ses 4 communes de démonstration | Tests existants dans la CI de référence |
| 06 | Contrôle du filtre « possibles » (4 fiches initiales) et des marqueurs correspondants | Tests existants dans la CI de référence |
| 07 | Vérification des deux sélecteurs et du passage entre lectures, sans changer d'application | Tests préexistants et nouveaux contrôles UI |
| 08 | Contrôle des filtres cumulés commune + domaine + recherche besoin/ressource | Nouveau scénario Chromium « Réparation + Outils » **écrit, CI en attente** |
| 09 | Vérification de la parité : même source filtrée pour SVG et liste, et conservation des fiches sans repère | `filterMapEntries`, `communeGroups`, `withoutPublicMapLocation` |
| 10 | Correction : section « Fiches sans localisation publique » dans la vue carte, sans coordonnées inventées ; sécurisation de l'absence de `territories` pour les fonctions et les libellés | `cartes-core.mjs`, `initiatives-app.mjs`, tests synthétiques Node/Chromium **écrits** |
| 11 | Correction de la sélection de commune : clic, Entrée ou bouton tactile filtrent et ouvrent la vue liste, puis focus sur le compteur ; retour de fiche vers l'élément d'origine | Code poussé, cas de test navigateur ajouté |
| 12 | Lien profond invalide : restauration de la liste, nettoyage de l'URL et focus direct sur le message d'alerte | Code poussé, contrôle navigateur ajouté |
| 13 | Vérification de l'alternative si le module de carte échoue : boutons désactivés, liste complète maintenue, avertissement | Test Chromium préexistant réussi sur le SHA de référence ; revalidation à venir |
| 14 | Inspection des exports et des injections de champs privés : liste blanche et exclusion d'un item réel conservées | Tests canari antérieurs verts ; nouveau traitement de `territories` absent couvert par un test écrit |
| 15 | Copie **bit à bit identique** de `cartes-design.css` de la PR #35 dans #41 et ajout du lien CSS **après** `cartes.css`, sans modifier la source du Graphiste | Blob SHA identique `07e8c54fff6cc4dfc66f42ba19cf364962e400c5` |
| 16 | Création de `cartes-compat.css` séparé, réglage des repères SVG et ajout de grands boutons communaux accessibles sous le schéma (sans augmenter les chevauchements d'étiquettes) | Code poussé ; contrôle tactile et clavier ajouté |
| 17 | Ajout d'une suite de captures et de vérifications de typographie, contrôles et débordement à **390 et 1280 px**, pour les deux lectures en liste et carte | Suite navigateur **écrite**, CI en attente |
| 18 | Contrôle du retour clavier, de la navigation sans JS, du lien de repli et du focus d'erreur ; aucun essai avec lecteur d'écran réel ni Android physique | Base CI verte ; nouveaux cas de non-régression à exécuter |
| 19 | Ajout de tests spécifiques à la localisation absente, CSS du Graphiste, erreur d'URL, filtres cumulés, boutons communaux, et correction des exceptions possibles sur `territories` manquant | **41 tests Node et 12 Chromium présents**, exécution récente encore en attente |
| 20 | Commits poussés sur la branche existante ; mise à jour du Journal et de la transmission au Relieur, avec limites explicitement distinguées | PR #41 et lien CI ci-dessous ; pas de fusion ni déploiement |

### Interface harmonisée
- `cartes-design.css` : **copie strictement identique** de la proposition du Graphiste sur PR #35, chargée après les styles existants.
- `cartes-compat.css` : adaptations propres à PR #41, sans modifier le fichier fourni par le Graphiste.
- Carte : SVG schématique avec **repères de communes**, pas une carte de rues, de bâtiments ou de domiciles ; les boutons textuels sous le schéma évitent de dépendre des minuscules étiquettes SVG.
- La vue liste couvre les résultats filtrés complets. Les éléments sans localisation sont aussi récapitulés dans la carte, sans marqueur fictivement précis.
- La carte peut être désactivée sans perte de la liste ; aucune donnée réelle, GPS, adresse ou contact exposé.

### Tests, captures et statut exact
**CI de référence exécutée :** https://github.com/zoutiFrutti/Interstice/actions/runs/41099508020, SHA `a592683`, 38 tests Node réussis et 8 Chromium réussis, zéro échec.

**CI sur nouvelles corrections :** https://github.com/zoutiFrutti/Interstice/actions/runs/41101545237 sur SHA `1bfde0e`, **encore en file d'attente au moment du bilan**. Le dépôt connaît une file d'attente GitHub Actions générale, y compris pour des workflows de `main` et de la PR du Graphiste. Ne pas confondre « test écrit » avec « test exécuté ». Les screenshots des quatre combinaisons en 390 et 1280 px sont configurés comme artefacts `interstice-apercu-mobile-fictif` après une exécution Chromium aboutie ; les captures nouvelles ne sont **pas encore confirmées**. Les captures antérieures sont dans l'exécution verte de référence.

**Limites à faire vérifier :** voix de lecteur d'écran (TalkBack, VoiceOver), navigation sur Android physique, revue de captures après CI, revue CSS des derniers ajustements par Graphiste, et conflits de `coordination/JOURNAL_COMMUN.md` entre cette branche et `main`. Ne pas forcer la fusion.

**Blocages avant données réelles :** consentement explicite, provenances vérifiées, droit de correction/masquage, autorisations des contacts publics, sécurité des accès et capacités de modération, revue Anarchitecte/Juriste. Pas de Supabase, de géocodage, de messagerie, de réservation ou de déploiement dans ce cycle. Les fiches restent intégralement fictives ; les mentions « documenté » ne valent que **dans le scénario inventé**.

**Pour le Relieur :** demander validation Graphiste de `cartes-compat.css` vis-à-vis de PR #35 ; organiser un test humain mobile/lecteur d'écran ; reprendre la CI quand la file se vide ; préparer une résolution conservatrice des conflits du Journal, sans supprimer les apports des ateliers. Les études critiques 39–58 et le manifeste V2.5 ne sont pas collectivement adoptés.
