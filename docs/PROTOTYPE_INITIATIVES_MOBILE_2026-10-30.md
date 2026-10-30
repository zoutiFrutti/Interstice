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
