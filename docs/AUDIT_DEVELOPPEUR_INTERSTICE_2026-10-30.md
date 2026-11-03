# LA FAILLE NOIRE × INTERSTICE — Audit technique du Développeur n° 001
**Date :** 30 octobre 2026. **Statut :** rapport d'observation et propositions techniques, non adoptées collectivement. **Périmètre :** dépôt, code, métadonnées et contrôles SQL en lecture seule. **Aucun déploiement, migration ou donnée personnelle modifiée.**

## 1. Références et méthode
- Dépôt : https://github.com/zoutiFrutti/Interstice
- Branche de référence : `main`, HEAD relevé au dernier contrôle `50118bd60fc5d4fe75135afd6de9a9d0ec612663` (30-10-2026, 07:56:39 UTC). Le dépôt bouge : réactualiser le HEAD avant tout développement.
- Projet Supabase existant : `Interstice` (`rpqiwxkaiyokmxbhxfvh`), actif, région `eu-west-3`. Ne pas ouvrir de seconde base.
- Site : https://zoutifrutti.github.io/Interstice/ — URL ciblée par la configuration d'origine des fonctions Edge. Les requêtes de navigation externes effectuées durant cette passe n'ont pas permis un examen HTTP/navigateur de la page publiée ; on ne déclare donc pas les parcours utilisables en production sur la seule base du code.
- GitHub Pages : exécution `pages build and deployment` réussie sur le SHA ci-dessus, https://github.com/zoutiFrutti/Interstice/actions/runs/41023180793 . Un déploiement vert n'est pas un test fonctionnel.
- Sources consultées : `index.html`, `script.js`, `participer.html`, `proposer-article.html`, `moderation.js`, `ressources.js`, `README.md`, `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md`, `docs/wiki-github-synchronisation.md`, workflows GitHub, fonctions Edge déployées, tables/vues/RLS/fonctions SQL et linter de Supabase, PR #28 et #31, transmission du Juriste (`coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md`).
- Études du Penseur 34, 35 et 36 : indiquées dans la mission comme cadrage ; elles n'ont pas été identifiées sous ces numéros dans les fichiers de `main` lors de cet audit. Ne pas les déclarer approuvées ou intégrées techniquement sans leur version source.

## 2. Inventaire vérifié

### 2.1 Site et formulaires
Le dépôt est principalement constitué de HTML/CSS/JavaScript natifs, sans framework d'application ni manifeste PWA/service worker identifié dans `main`.
- `index.html` contient une collecte de besoin, offre, catégorie et zone textuelle. `script.js` transmet à `/functions/v1/submit-proposal`, puis lit la vue `public_proposals` pour les contenus publiés.
- `participer.html` renvoie vers le formulaire de l'accueil, le Wiki et le dépôt ; ne dispose pas d'un outil de regroupement citoyen.
- `bibliotheque.html` + `ressources.js` gèrent des références documentaires, notamment `/functions/v1/submit-resource` et la vue `approved_resources`. Ce ne sont pas des offres locales de matériel, de locaux ou de compétences structurées.
- `proposer-article.html` utilise Supabase Auth (lien e-mail) et la RPC `submit_wiki_article` ; circuit distinct des propositions générales.
- `moderation.js` présente des files de propositions et ressources sous contrôle `is_moderator()`, puis les RPC de décision. Les conditions d'authentification ne prouvent pas l'existence d'un modérateur habilité.
- Écart documentaire : le `README.md` annonce encore un « brouillon local » pour le formulaire historique, alors que `script.js` envoie une requête réseau. Corriger cette contradiction avant toute communication publique.
- L'interface de carte et les fiches d'initiatives n'ont pas été trouvées dans `main`. Pas de gestion de projet citoyen ni de discussion/gouvernance structurée.

### 2.2 Supabase : état observé le 30 octobre
Projet actif, 9 migrations recensées, 3 fonctions Edge `ACTIVE` : `submit-proposal` v2, `submit-resource` v1 et `github-wiki-ingest` v5.
Sept tables `public`, toutes avec RLS :
`proposals`, `submission_limits`, `moderation_events`, `moderator_accounts`, `resource_submissions`, `wiki_article_submissions`, `wiki_article_review_log`.
Deux vues `public_proposals` et `approved_resources` ont `security_invoker=true` et un filtrage de statut (`published` / `approved`). Politiques RLS inspectées : lecture publique des publications uniquement ; accès aux autres dossiers encadré par `is_moderator()` ou l'auteur.
Comptages SQL directs : **0 proposition citoyenne ; 0 ressource documentaire soumise ; 0 article Wiki soumis par formulaire ; 0 compte modérateur ; 16 brouillons de documents GitHub privés**. Les brouillons sont dans `wiki_ingest_private.github_document_drafts`, avec révisions dans `github_document_revisions` : ils ne sont ni des initiatives publiées ni des fiches Wiki approuvées.
La chaîne GitHub Actions → OIDC → `github-wiki-ingest` → `stage_github_wiki_document` est effectivement présente ; la publication éditoriale reste séparée. Les tests de PR #28 (24/24) utilisent un client Supabase simulé et ne prouvent pas la modération réelle. PR #22 et #28 toujours brouillons au contrôle.

### 2.3 Vérifications de sécurité et limites
- Linter Supabase : **5 avertissements** « SECURITY DEFINER callable par authenticated » (`is_moderator`, `moderate_proposal`, `moderate_resource`, `review_wiki_article`, `submit_wiki_article`). Ce sont des points d'audit de contrôle interne, non des preuves d'exploitation. Lire les corps et tester les autorisations avant d'envisager une modification des privilèges.
- Quatre informations `rls_enabled_no_policy` sur des tables de rôles/limites et archives privées. L'absence de politique peut être une protection volontaire : ne pas ouvrir ces tables pour « réparer » le linter.
- `submit-proposal` et `submit-resource` acceptent les requêtes sans JWT, ce qui correspond au formulaire ouvert. Elles contrôlent l'origine, les champs, le honeypot et un quota. Mais `Origin`/CORS n'authentifie pas un appel serveur ; les en-têtes IP doivent être évalués sur leur provenance réelle. Lecture non bornée du corps : `submit-proposal` dépend d'un `Content-Length` déclaratif ; `submit-resource` vérifie la taille après lecture intégrale et retombe sur `unknown` en cas d'IP absente. Le correctif non fusionné de PR #13 ne doit pas être confondu avec le code en service.
- `github-wiki-ingest` vérifie les claims OIDC et relit GitHub avant stockage ; sa protection doit rester auditée indépendamment de la collecte citoyenne.
- Aucune soumission de test, aucun compte fictif, aucune modification de configuration, aucune vérification de parcours navigateur ou de lecteur d'écran n'a été effectuée durant cette passe. **Ne pas affirmer « fonctionnel de bout en bout ».**

## 3. Architecture commune candidate, sans duplication

**Principe :** garder le site comme unique surface publique initiale ; conserver le projet Supabase existant comme source de vérité pour les données citoyennes, et GitHub comme source de vérité pour le code et les documents versionnés. Les deux circuits ont des règles de publication distinctes. Prévoir l'accès aux mêmes comptes/données via le navigateur et une éventuelle PWA, et n'étudier une application Android native qu'après mesure des besoins spécifiques.

### 3.1 Modèle logique proposé, non créé
1. `community_entries` : identifiant permanent d'une entrée citoyenne, catégorie documentaire (`initiative`, `besoin`, `offre`, `lieu`, `projet`), description publique, statut de **publication** distinct du stade de vie. Une entrée initiée comme proposition peut devenir projet puis initiative active **sans changer d'identifiant**.
2. `entry_revisions` : versions, provenance, motif de correction, statut de relecture, auteur si consenti, droits et masquage des anciennes valeurs sensibles. Historique public épuré distinct d'un journal privé nécessaire et limité.
3. `entry_relations` : liens explicites `besoin ↔ offre ↔ projet ↔ initiative`, signés, datés et contestables ; pas de rapprochement opaque.
4. `entry_locations` : zéro, une ou plusieurs zones/implantations pour une entrée ; localisation `absente`, `zone approximative`, `rendez-vous public`, `adresse d'activité publique autorisée`. Ne pas envoyer l'adresse privée dans les réponses publiques, même « masquée » à l'écran.
5. `entry_sources` et `entry_practices` : faits sourcés et datés d'un côté, pratiques volontaires et déclarées de l'autre. **Aucun score moral global.** Le référencement ne dépend pas de l'adhésion à la Charte.
6. `entry_reports`, `entry_claims` et permissions privées, seulement lorsque les règles de correction, représentation et recours sont validées. Contrôle d'accès serveur, pas sur les seuls boutons HTML.

Cette nomenclature est une **proposition**, pas une migration. Dédupliquer les entités et conserver les champs `need_text` / `offer_text` existants comme sources d'entrée. Ne pas transformer silencieusement `resource_submissions` (liens documentaires) en inventaire de matériel.

### 3.2 Schéma des flux
```
Navigateur actuel / PWA candidate / éventuel Android ultérieur
                    |
       même authentification et mêmes autorisations
                    |
        API et fonctions Supabase existantes
                    |
         base citoyenne unique (évolutive)
          |                    |
  saisies et révisions      lectures publiques filtrées
   privées / modérées       + liste et recherche
          |
       validation humaine
```
Parallèlement, les documents Wiki continuent leur parcours GitHub → archives Supabase privées → relecture séparée → publication éventuelle. La participation **hors ligne humaine** passe par des relais locaux choisis avec l'Organisateur, sans obligation de compte ou d'installation.

## 4. Prototype minimal centré sur les besoins, initiatives et ressources
**V0.1 candidate sur site existant, pas une seconde interface autonome :**
- Vue **liste/recherche** des besoins et offres, par zone générale, avec consultation publique sans compte. Préparer un adaptateur sur `public_proposals` pour les premières fiches modérées ; afficher clairement « besoin exprimé », pas « décision collective ».
- Formulaire **besoin seul autorisé**, sans seuil de soutien ni obligation de position GPS ; reprise de `submit-proposal` sous réserve de tests anti-abus et de confidentialité.
- Fiche d'**initiative pilote** sourcée, créée et vérifiée humainement ; états `proposée → projet → activité` visibles dans un historique proportionné, quand le modèle de données sera validé.
- Offre de **ressource locale** distincte des références de bibliothèque ; liaison facultative et explicable à un besoin.
- Signalement/correction minimal, consentement, retrait et traitement par personne effectivement habilitée avant lancement public.
- Carte **facultative**, construite ensuite à partir des mêmes fiches que les listes ; pas d'adresse personnelle, pas de GPS obligatoire. Prévoir les projets mobiles / multiterritoriaux et la navigation sans carte.
- PWA après les tests du noyau : manifeste/installabilité, service worker minimal, cache strictement public, aucun cache hors ligne d'une fiche privée, synchronisation des modifications lors du retour en ligne seulement avec consentement. Aucun envoi silencieux de brouillon personnel.

## 5. Feuille de route et critères d'acceptation
| Étape | Livrable contrôlable | Critère de sortie |
|---|---|---|
| P0 — Sécurisation de l'existant | matrice des droits, tests d'API contrôlés, correction de documentation, revue PR #13/#22/#28 | droits, quotas et cas de refus démontrés sans exposition de données privées ; relecture humaine réellement réalisable |
| P1 — Parcours citoyen | liste de besoins, offres, fiches d'initiatives vérifiées, recherche par zone et signalement | besoin unique soumis sans soutien, publication humaine et correction/retrait réellement testés |
| P2 — Modèle commun | migrations proposées en PR, revisions, liens et localisations prudentes | stabilité des ID, pas de données dupliquées, aucune adresse privée lisible en public, tests de RLS négatifs |
| P3 — PWA progressive | installation et consultation publique hors ligne | toutes les fonctions essentielles disponibles dans le navigateur, cache public uniquement, tests clavier/screen reader/mobile |
| P4 — Évaluation Android | note d'usage comparant navigateur/PWA et besoin natif | Android natif seulement si besoin matériel justifié et sans compte, droits ou fonctionnalités citoyennes exclusifs |

**Tests indispensables :** (1) besoin sans offre accepté en brouillon ; (2) absence de publication automatique ; (3) accès anonyme limité aux données modérées ; (4) contribution d'une personne seule recevable ; (5) droit de correction/retrait et recours opérationnels ; (6) communes et zones sans coordonnées privées récupérables par API ou export ; (7) aucune inférence de score moral ; (8) historique conservé hors exposition de données sensibles ; (9) listes et recherche accessibles sans carte ; (10) mobile/clavier/lecteur d'écran testés ; (11) changement d'état sans perte d'identité ; (12) navigateur et PWA utilisent exactement les mêmes données.

## 6. Questions à transmettre horizontalement
- **Anarchitecte :** confirmer l'URL canonique et le déploiement, l'architecture d'authentification, l'habilitation réelle des modérateurs, le périmètre de PR #13/#22/#28 et le contrôle des fonctions privilégiées ; préparer la revue d'une future migration sans l'exécuter.
- **Juriste :** valider le traitement des données privées, la séparation documentaire/affinités, les preuves, la représentation d'une initiative, le signalement et les délais réalistes de recours. La transmission `coordination/JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md` et son brouillon de règles sont déjà consultés ; **ne pas recommencer son étude**.
- **Organisateur :** définir trois parcours concrets (personne seule avec un besoin ; initiative existante ; relais humain sans smartphone), les personnes capables de modérer et les rencontres réelles non gouvernées par l'app.
- **Graphiste :** réutiliser le kit #22 et les composants de #28 après rapprochement ; concevoir les cinq types de fiches, la liste accessible et les indicateurs de provenance sans jugements moraux.
- **Penseur :** mettre à disposition les versions exactes des études 34–36 ; éprouver les tensions référencement large / vérification / filtres volontaires, sans en faire des normes adoptées.
- **Relieur :** rattacher cette note au registre des ateliers et signaler les dépendances ; pas de relance des missions déjà attribuées. Une PR de documentation n'atteste pas de lecture par les autres conversations.

## 7. Décision / limites
**Proposition de travail :** évolution incrémentale du site, puis étude PWA, puis éventuelle application native. **Pas encore une décision d'architecture adoptée.**
**Non réalisé :** tests navigateur réels, accès utilisateur, validation de sécurité exhaustive, modification du site, migration, choix juridique, adoption de la Charte, publication de fiches, déploiement PWA.
**État :** prêt pour revue croisée, pas pour fusion automatique ou annonce de disponibilité citoyenne.
