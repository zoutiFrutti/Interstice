# Faire Ensemble — pilote propositions, préparation C08

**Non déployé. Envois réels toujours suspendus.** Zout a choisi les propositions seules et assure leur modération (`D-WORK-C08-PILOT-01/02`). Ce dossier réutilise les travaux existants, sans nouveau système de coordination.

- `submit-proposal.ts` : source de #13 `6eaf127`, avec arrêt par défaut avant lecture du corps, aucun accès DB avant activation explicite, réception seulement en `pending`. Dépendance épinglée à 2.119.0, version lue dans le registre npm le 6 novembre 2026 ; import réel Deno non exécuté ici.
- `frontend.diff` : patch préparé sur le seul `script.js` hérité, protections #42 `347f31c` et correction de l’accusé de réception. Aucun champ de contact, stockage local ou relais privé ajouté. Le patch n’est pas appliqué : sa reprise nécessite une revue des empreintes de préservation de ce chemin précis.
- `tests/nav01-faire-ensemble-pilot.test.mjs` à la racine du dépôt : handler exécuté avec environnement et DB simulés ; patch appliqué dans un dossier temporaire pour tester le frontend. Ni accès Supabase, ni données réelles, ni déploiement. La CI NAV existante exécute ces tests, sans nouveau workflow ou nouvelle permission.

## Fonctionnement préparé

OPTIONS 204 ; autres méthodes 405 ; POST fermé 503 tant que `FAIRE_ENSEMBLE_PROPOSALS_ENABLED` n’est pas exactement `true`. Aucun paramètre ni secret distant n’a été ajouté. La variable ne remplace pas une autorisation humaine de déploiement. En mode ouvert simulé : origine contrôlée, lecture bornée 7 000 octets, validation des champs, refus de coordonnées détectées, limitation de cadence, insertion `pending` et réponse 202 après retour sans erreur du client DB. Aucun chemin de publication ni rôle de modération nouveau.

Le filtre de coordonnées n’identifie pas toutes les données personnelles : la notice et la relecture humaine restent nécessaires. Une origine CORS n’authentifie pas l’émetteur. La confiance dans les en-têtes d’IP du fournisseur, la conservation des empreintes anti-abus et les conditions de purge restent à vérifier avant ouverture. Aucun compte de Zout ni file privée consulté pour vérifier sa capacité de modération.

## Avant toute ouverture, éléments encore manquants

1. Définir la durée des propositions non traitées et l’information affichée. Une purge candidate doit être bornée au pilote et aux données/états définis ; aucune suppression d’existant autorisée.
2. Vérifier le parcours de Zout avec un compte de test explicitement autorisé et des données fictives, puis le refus de publication par un autre compte. Les permissions de fonction seules ne suffisent pas.
3. Vérifier Deno/SDK, les migrations et contrôles serveur réels, la provenance des en-têtes anti-abus, les erreurs réseau et le retour à l’arrêt. Ces tests locaux ne certifient pas l’infrastructure.
4. Soumettre le lot et les messages à la revue juridique/éditoriale existante. Obtenir une autorisation explicite pour le handler, ses paramètres et son déploiement exact. Aucune réactivation ne découle des deux choix de périmètre/modérateur.

Les ressources, articles, coordonnées privées, annuaire et relais privé restent hors du pilote. L’aperçu et main restent inchangés. Ne jamais remplacer les handlers actifs par ce candidat pendant un simple test.
