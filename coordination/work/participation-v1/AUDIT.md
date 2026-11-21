# Audit ciblé de l'existant

21 novembre 2026. Recherche comparative achevée avant audit. Références obtenues par GitHub et clone direct ; aucune conversation d'atelier inaccessible n'est réputée lue.

## Versions examinées

| Référence | HEAD observé | État et usage |
|---|---|---|
| main | `80ce56adfb9c3bc3275844b2847eac717b433aa5` | Non modifiée ; ne contient pas la convergence complète |
| PR #186 | `b3cca52e46d99f76ad151699818856e006ff7873` | Brouillon ouvert ; source historique du pilote et du référentiel |
| PR #197 | `366a33a5bad58e3c3942ec4e71eec8651a9e365d` | Convergence à six portes ; brouillon |
| PR #198 | `586e91067216a1bd96e34c30ffca5f104fda192b` | Réception du registre, sans nouvelle décision de fond |
| PR #199 | `e0e79996a4b7436bf0934a165e7eeeff2780d133` | Réception Android et garde-fous C21/C22 |
| PR #200 | `6bb19d4370a919e4f74b95f36cc8e0bf45d79c35` | Pré-réception C23 |
| PR #201 | `e42a32a9f7a5a18d007dbd1413f4ca9f05223a5c` | Régression R6 C24 |
| PR #202 | `9dd5fffc0bd9ff20aa1d8501be315e5ba97034ff` | Base choisie : convergence et travaux C25–C27, brouillon, sans fusion |
| PR #193 | `e4f97498df8024e52c3b1b80cd91bed62ea0f390` | Cartes/initiatives, démonstrations fictives ; code inspecté via Git |

La branche de cette livraison est issue de #202. Comparaison des dossiers `faire-ensemble-pilot`, `master-v1` et `supabase` avec #186 : aucun delta. La différence globale entre les deux branches contient surtout la navigation et les lots récents ; reprendre #186 en bloc ferait perdre la convergence. Aucun ancien audit général recommencé.

## État fonctionnel vérifié dans les sources

| Élément | Déjà codé / réutilisable | Tests présents | Déploiement et limites |
|---|---|---|---|
| Réception des propositions | `coordination/work/c07/faire-ensemble-pilot/submit-proposal.ts` ; arrêt avant lecture, taille bornée, catégories, limiteur, cohorte et `pending` | `tests/nav01-faire-ensemble-pilot.test.mjs`, test Deno réel/SDK avec transport fictif | Candidat ; aucun déploiement par cette mission. Empreinte IP utilise encore clé service au point de départ : réserve juridique explicite |
| Frontend de propositions | `script.js` historique et `frontend.diff` non appliqué ; ce dernier corrige les faux accusés et double envoi | Patch exercé dans un répertoire temporaire | Ne pas modifier le fichier historique protégé ; réutiliser le contrat et les champs dans une interface candidate séparée |
| Modération historique | `moderation.html/js`, `is_moderator`, `moderate_proposal` | Audits antérieurs de fonctions/RLS ; compte réel non éprouvé ici | Bouton « Approuver » transmet `published` : insuffisant pour un circuit où instruction et publication sont distinctes |
| Purge | `purge-candidate.sql`, cohorte immuable, simulation par défaut, lots, exclusion des traces humaines et protection concurrence | 17 cas PGlite et 7 scénarios PostgreSQL multi-session présents | Pas de cadence installée, pas de preuve d'effacement des sauvegardes ; ne pas annoncer garantie 30 jours opérationnelle |
| Articles complets | `proposer-article.html`, suivi auteur, `submit_wiki_article`, charte et file de revue | Tests de handoff, idempotence et contrat SQL | Ce circuit propose un article complet, sans contribution ponctuelle ciblant un ID et une version de fiche. Ne pas le dupliquer |
| Sources / handoffs | `docs/proposals/wiki-document-handoffs-schema.sql`, outils de préparation/revue | Tests SQL et idempotence présents | Schéma candidat privé ; réutiliser provenance, empreintes et séparation des visas |
| Référentiel | `master-v1/build.mjs`, contrat `c07-master-projection/1` ; 219 ID, aliases, statuts et blocages | `master-v1/test.mjs` | Projection interne uniquement, `public_cards=[]`. Aucun titre ni dossier réservé exporté par le nouveau parcours |
| Navigation | `assets/nav-01/graph-data.mjs` ; six portes ; liens historiques et aperçu sur liste blanche | Suites NAV7, C22–C27 | Identité et SVG conservés ; outils participatifs sous Faire Ensemble, raccords contextuels aux autres portes |
| Carte | Code #193 : filtres, parité liste/carte, absence de point public possible, export explicitement fictif | Tests de branche présents, non repris comme succès actuel | Pas de données d'initiatives réelles, ni référentiel de lieux publiables certifié ; ne pas réécrire ou importer les fixtures comme lieux réels |
| C13 / C14 | Garde IA fermée et moteur de coordination des ateliers | Suites Python existantes | Les tâches C14 sont des automatismes de coordination, pas les recherches documentaires pour contributeurs humains |

## Décisions humaines acquises et réserves

Sources : `coordination/REGISTRE_DECISIONS.md`, README pilote, `AVIS_JURIDIQUE_C11_DECISIONS_20261107.md`, avis JUR-01B, note de convergence ANA-01B, réception LEC-02, corps des PR #186/#197/#198/#202.

- Propositions seules pour la première ouverture ; Zout modère initialement ; réception `pending`, aucune publication automatique.
- 30 jours maximum pour les seules nouvelles propositions non traitées de la cohorte pilote ; préparation de purge avec leurs seuls événements initiaux autorisée, aucune suppression réelle.
- Publication et visas séparés ; 219 objets sans nouveau visa, dossiers bloqués maintenus, pas d'export de corps réservés.
- C25 A/A/B : branche candidate d'intégration, maintien du site privé sans nouveau déploiement, relecture documentaire par lots.
- Juriste : qualifier responsable/contact/base de traitement, durées par statut, logs/sauvegardes, secret anti-abus distinct, droit de retrait, vérification des droits des documents et parcours de modération.
- Lectrice : une sélection ou un accord éditorial historique ne vaut pas autorisation de publication ; source et décision liées à la version exacte.

## Vérification distante et blocages concrets

La connexion Supabase disponible liste un autre projet, inactif. La lecture des métadonnées d'Interstice `rpqiwxkaiyokmxbhxfvh` est refusée pour absence de permission. Aucune ligne, identité, clé, sauvegarde ou file réelle consultée. Aucun changement d'accès demandé ou effectué. Les constats du 7 novembre (handlers de suspension v3/v2, RLS, schéma sans cohorte) restent **historiques**, non une certification du 21 novembre.

Les nouveaux schémas devront donc refuser de s'appliquer à une structure inattendue ; les essais actuels utilisent exclusivement des fixtures et ne prouvent pas une migration réelle. Sans autorisation distincte et accès adapté, pas de parcours réel Zout, déploiement, cron, activation ou garantie juridique d'ouverture.

## Développements nécessaires

Réutiliser le stockage `proposals` et son pilote ; ajouter une présentation accessible, un reçu opaque, un suivi privé, un traitement motivé distinct de la publication et un secret anti-abus dédié. Construire les apports ponctuels avec ID/version/provenance, puis un catalogue de recherches avec preuves et clôture/réouverture motivées. Préparer discussion modérée et références géographiques/agendas sans profils ni import. Conserver tout ce code dans un lot exclu de Pages, avec adaptateurs testables et activation indépendante par fonction.

Les résultats de tests réellement exécutés pendant cette mission figurent dans `LIVRAISON.md` et `evidence/`, séparément des résultats historiques cités ici.
