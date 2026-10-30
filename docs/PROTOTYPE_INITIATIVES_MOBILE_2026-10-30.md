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
