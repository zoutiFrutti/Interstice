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
Reprise de l'audit PR #36. Transmission juridique déjà consultée : `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md`. Revue graphique avec l'atelier Graphiste et PR #22 (la page d'accueil n'est pas modifiée). Relieur : suivre la PR et les tests sans supposer l'adoption collective. Organisateur : définir contact public et participation hors application. Penseur : pas de classement moral ni adhésion obligatoire à la Charte.

## Complément Penseur 39–58 — mission reçue le 30 octobre 2026
Références consultées : `coordination/transmissions/2026-10-30_PENSEUR_VERS_DEVELOPPEUR.md`, feuille de route `coordination/PENSEUR_FEUILLE_DE_ROUTE_ETUDES_39_58_2026-10-30.md`, et études critiques 49–53, 56, 58. **Ce sont des propositions, pas des décisions adoptées.**

**Changement de code sur la même PR #41 :**
- Recherche explicite « besoin ou ressource », facultative, cumulable avec commune et domaine. Les données sont toujours des exemples fictifs.
- Chaque carte trouvée peut afficher les champs précis « Besoin : … » et « Ressource : … » qui justifient sa présence. Filtrage déterministe et **ordre source conservé**, sans score de popularité ni profilage (étude 51).
- Bouton d'export JSON des seuls exemples fictifs, avec liste blanche des champs publics de démonstration. Cet export **ne constitue pas un droit ni une méthode d'export de personnes réelles** (études 49–50).
- Aucun historique de recherches, aucune géolocalisation, aucune notification, aucun compte ni requête de données. La page reste dans le site, lisible sans installation ; CSS léger. Information sur l'absence de collecte (études 52–53).
- Absence volontaire de statistiques de clics / connexions. Les mesures utiles d'autonomie ou de rencontres devront être évaluées par méthodes choisies avec l'Organisateur, sans surveillance (études 56, 58).

**Tests d'acceptation supplémentaires :** combinaison des trois filtres, explication du rapprochement, ordre sans score, export limité à une liste blanche même en présence de champs secrets artificiels, absence de traceur. **Résultat constaté :** GitHub Actions `Découverte initiatives fictives` sur SHA `8ff4755568fb2660027b907f44a22a28dfa701b7` : **15 tests réussis, 0 échec** (journal de job lu). Preuve : https://github.com/zoutiFrutti/Interstice/actions/runs/41047101065 . Ce sont des tests Node, pas des tests navigateur.

**Non réalisé / bloquant :** publication effective d'un besoin ou d'une ressource, contact réel, consentement de mise en relation, traitement des corrections et recours, API publique et RLS validées, export autorisé de données réelles, mesure d'impact hors ligne. Ces fonctions nécessitent Anarchitecte, Juriste et Organisateur ; pas de migration automatique.

**Coordination :** une transmission dédiée au Relieur est préparée sur la branche pour relecture. Aucune preuve de réception par sa conversation séparée.
