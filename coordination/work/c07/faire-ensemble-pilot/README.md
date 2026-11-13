# Faire Ensemble — pilote propositions, préparation C08

**Non déployé. Envois réels toujours suspendus.** Zout a choisi les propositions seules et assure leur modération (`D-WORK-C08-PILOT-01/02`). Ce dossier réutilise les travaux existants, sans nouveau système de coordination.

- `submit-proposal.ts` : source de #13 `6eaf127`, avec arrêt par défaut avant lecture du corps, aucun accès DB avant activation explicite, réception seulement en `pending`. Dépendance épinglée à 2.119.0, version lue dans le registre npm le 6 novembre 2026 ; import réel Deno non exécuté ici.
- `frontend.diff` : patch préparé sur le seul `script.js` hérité, protections #42 `347f31c` et correction de l’accusé de réception. Aucun champ de contact, stockage local ou relais privé ajouté. Le patch n’est pas appliqué : sa reprise nécessite une revue des empreintes de préservation de ce chemin précis.
- `tests/nav01-faire-ensemble-pilot.test.mjs` à la racine du dépôt : handler exécuté avec environnement et DB simulés ; patch appliqué dans un dossier temporaire pour tester le frontend. Ni accès Supabase, ni données réelles, ni déploiement. La CI NAV existante exécute ces tests, sans nouveau workflow ou nouvelle permission.

## Fonctionnement préparé

OPTIONS 204 ; autres méthodes 405 ; POST fermé 503 tant que `FAIRE_ENSEMBLE_PROPOSALS_ENABLED` n’est pas exactement `true`. Aucun paramètre ni secret distant n’a été ajouté. La variable ne remplace pas une autorisation humaine de déploiement. En mode ouvert simulé : origine contrôlée, lecture bornée 7 000 octets, validation des champs, refus de coordonnées détectées, limitation de cadence, insertion `pending` et réponse 202 après retour sans erreur du client DB. Aucun chemin de publication ni rôle de modération nouveau.

Le filtre de coordonnées n’identifie pas toutes les données personnelles : la notice et la relecture humaine restent nécessaires. Une origine CORS n’authentifie pas l’émetteur. La confiance dans les en-têtes d’IP du fournisseur, la conservation des empreintes anti-abus et les conditions de purge restent à vérifier avant ouverture. Aucun compte de Zout ni file privée consulté pour vérifier sa capacité de modération.

## Avant toute ouverture, éléments encore manquants

1. Durée décidée : 30 jours pour les nouvelles propositions non traitées du pilote (D-WORK-C08-PILOT-03). La purge ci-dessous est préparée et simulée ; aucune suppression d’existant ni application distante autorisée. L’information destinée aux visiteurs reste à finaliser avant ouverture.
2. Vérifier le parcours de Zout avec un compte de test explicitement autorisé et des données fictives, puis le refus de publication par un autre compte. Les permissions de fonction seules ne suffisent pas.
3. Vérifier Deno/SDK, les migrations et contrôles serveur réels, la provenance des en-têtes anti-abus, les erreurs réseau et le retour à l’arrêt. Ces tests locaux ne certifient pas l’infrastructure.
4. Soumettre le lot et les messages à la revue juridique/éditoriale existante. Obtenir une autorisation explicite pour le handler, ses paramètres et son déploiement exact. Aucune réactivation ne découle des deux choix de périmètre/modérateur.

Les ressources, articles, coordonnées privées, annuaire et relais privé restent hors du pilote. L’aperçu et main restent inchangés. Ne jamais remplacer les handlers actifs par ce candidat pendant un simple test.

## Purge candidate — 6 novembre 2026

`purge-candidate.sql` est un **script candidat, pas une migration appliquée**. Les seules lectures Supabase de cette passe portent sur les métadonnées : colonnes, contraintes, déclencheurs et fonctions. Ni corps de proposition, ni identité, ni liste d’identifiants réels consultés. La colonne `pilot_cohort` et le schéma `interstice_fe_pilot` sont absents de la base réelle au relevé ; rien n’y a été ajouté.

Le futur handler marque ses nouveaux dépôts `c08-fe-proposals-v1`, indépendamment du corps envoyé par le visiteur. Le script candidat conserve NULL pour toutes les anciennes lignes, interdit tout marquage rétroactif et toute modification ultérieure de l’horodatage pilote. L’horodatage d’un nouveau dépôt marqué est fixé par le serveur. Aucun ancien dépôt n’est assimilé au pilote par sa seule date.

La fonction privée `interstice_fe_pilot.purge_pending()` est en simulation par défaut : elle renvoie seulement le nombre de propositions éligibles, le nombre de leurs événements initiaux, le nombre supprimé (zéro en simulation), et le mode. Aucun corps, identifiant ou nom n’est renvoyé. Elle reste réservée à la maintenance, SECURITY INVOKER, sans privilège API anon/authenticated ni nouveau rôle. Les lots sont bornés à 100, verrouillés avec SKIP LOCKED. Les publications, rejets, retraits, traces de traitement, dates de modération ou publication non nulles sont exclus.

Seuil : plus de 720 heures depuis la création serveur (30 fois 24 h), en UTC ; à la frontière exacte rien n’est encore purgé. **Aucune planification n’est installée** : l’éligibilité après 30 jours ne garantit pas encore l’effacement effectif à cette date. La cadence et la supervision seront à rendre opérationnelles avant ouverture du pilote.

### Cascade du journal : préparation autorisée, exécution non autorisée

Le schéma réel comporte `moderation_events.proposal_id → proposals.id ON DELETE CASCADE`. Le dépôt crée automatiquement un événement `submitted`. Une suppression de parent effacerait donc ce journal initial. Le candidat compte ces événements en simulation et refuse l’exécution si leur suppression n’est pas explicitement autorisée. Les propositions avec toute autre trace de traitement sont exclues même avec ce paramètre. Toute nouvelle dépendance, règle ou déclencheur DELETE inconnu bloque le plan : pas de cascade silencieuse vers de nouvelles archives.

Aucune suppression réelle ne sera lancée par la CI. La branche d’exécution a été éprouvée seulement sur des fixtures synthétiques locales. Décision D-WORK-C11-PURGE-01 : Zout a choisi A le 6 novembre 2026, autorisant la préparation de la suppression avec les seuls événements initiaux submitted. Le paramètre explicite reste requis : cette décision ne vaut ni autorisation de suppression réelle, ni application du schéma à Supabase. Toute autre trace de modération exclut toujours la proposition. La revue juridique reste nécessaire.

### Preuves et limites

Dépendance de test PostgreSQL WASM PGlite épinglée (package.json et lockfile), sans accès au réseau ou à Supabase depuis le test. `npm ci --prefix coordination/work/c07/faire-ensemble-pilot --ignore-scripts` puis `node --test coordination/work/c07/faire-ensemble-pilot/purge.test.mjs`. Les fixtures reproduisent les champs utiles, contraintes de statut, RLS et cascade constatés ; elles ne prétendent pas copier toute la base. Le vieillissement des fixtures désactive le seul garde local le temps de leur insertion ; aucune protection distante n’est modifiée.

Les tests portent sur la simulation, la frontière de 30 jours, les anciens dépôts, tous les états protégés, les traces humaines, la cascade refusée puis l’exécution explicite dans la base fictive, les lots et leur reprise, les paramètres invalides, l’immutabilité, les rôles et l’évolution du schéma. Pas d’essai multi-session des courses entre modération et purge, ni test sur l’instance Supabase, ni test réel de sauvegarde/restauration.

La purge SQL vise la base active et les seuls événements initiaux autorisés. Elle ne promet pas l’effacement de sauvegardes, caches ou journaux du fournisseur. Les empreintes anti-abus suivent une finalité distincte ; aucune durée ni suppression n’en est décidée par ce lot. Ces points et l’information des personnes doivent être examinés dans les visas existants avant ouverture.

### Information visiteur à préparer avant ouverture

« Les propositions du pilote sont relues par Zout avant toute publication. Une proposition non traitée est conservée 30 jours maximum. N’y indique pas de coordonnées ni d’informations personnelles sensibles. » Ce texte est un projet : ne pas l’afficher comme garantie actuelle tant que la purge, sa cadence, les informations complètes et le parcours de retrait ne sont pas opérationnels et validés.

### Concurrence — reprise WORK-C11 du 6 novembre 2026

Le candidat exige maintenant READ COMMITTED et une FK immédiate validée. Après les verrous parents, il verrouille les événements existants avec FOR UPDATE NOWAIT ; une trace occupée fait échouer la transaction sans suppression. Cela vise aussi une modification concurrente de submitted en trace humaine. Aucun droit distant supplémentaire n'est accordé : la lecture des seuls privilèges SQL a confirmé UPDATE pour service_role sur moderation_events ; les fixtures reproduisent ce droit. Les deux anciens tests PGlite supplémentaires contrôlent le refus d'un snapshot ancien et d'une FK différée, soit 17 tests locaux.

`purge-concurrency.test.mjs` utilise plusieurs connexions PostgreSQL et exige une base **neuve**, exclusivement 127.0.0.1:55439/interstice_purge_test, avec opt-in INTERSTICE_PURGE_LOCAL_TEST=1 et mot de passe synthétique fixé dans le service CI. Il refuse toute table publique préexistante et n'accepte aucune URL ou clé Supabase. La CI NAV existante fournit un PostgreSQL 17.6 jetable ; les chemins du lot pilote déclenchent désormais ce contrôle.

Sept scénarios : modération UPDATE en cours, événement humain INSERT en cours, lots concurrents disjoints, modération après suppression, reproduction de la cascade sur le SQL immuable 3ef0d20, protection du même scénario dans la candidate, refus REPEATABLE READ. Le SQL antérieur est rejoué sous un autre nom uniquement dans la base de test. Les fixtures reproduisent les mécanismes utiles ; elles ne certifient pas le parcours réel moderate_proposal ou le compte de Zout.

L'environnement local ne permet pas de changer d'utilisateur pour démarrer le serveur natif : ces sept essais doivent être qualifiés sur les résultats CI, et non présentés comme exécutés localement. Les tests PGlite locaux et la vérification syntaxique passent. Les protections restent candidates ; aucun effet distant, cron ou ouverture de formulaire. Références techniques : https://www.postgresql.org/docs/17/transaction-iso.html et https://www.postgresql.org/docs/17/explicit-locking.html .

### Deno et SDK — essai hors service réel

Deno 2.5.6 a reproduit cinq erreurs de typage dans le handler (trois paramètres implicites et deux accès à une exception unknown). Les annotations et le traitement explicite d'Error les corrigent. Le test Node utilise le décapage TypeScript natif de Node 22.13+ avant sa VM, au lieu de traiter un fichier TypeScript comme du JavaScript brut.

`submit-proposal.deno-test.ts` exécute le module candidat et le **vrai SDK 2.119.0**, épinglé dans le lockfile de test. Deno.serve et Deno.env.get sont remplacés pendant l'essai ; fetch accepte exclusivement les deux chemins synthétiques attendus sur example.test. Les permissions réseau et environnement sont refusées. Quatre étapes réussies localement : fermeture sans lecture ni SDK, insertion pending avec cohorte serveur en ignorant les champs forgés du visiteur, refus du limiteur sans insertion, échec SDK sans accusé de réception. Aucun serveur HTTP réel, requête Supabase, secret, compte ou écriture distante.

La CI NAV existante reproduit le contrôle de types et cet essai après installation verrouillée des dépendances et de Deno 2.5.6. Pas un test de la passerelle Supabase hébergée, de l'authentification de Zout ou de la chaîne réseau réelle. La cadence/supervision de purge et l'information complète des visiteurs restent à préparer avant ouverture.
