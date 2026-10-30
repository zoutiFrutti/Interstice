# KONTON Control · cockpit V0.1

**Statut : prototype interactif isolé, NON connecté, NON déployé.**
**30 octobre 2026.**

Le cockpit sert à expérimenter une régie d'agents IA avec les gestes GO / STOP / validation humaine. Il ne modifie ni le site Interstice, ni l'app Android KONTON, ni Supabase, ni GitHub Actions. Les noms des ateliers sont des **exemples de démonstration** : leurs statuts et résultats à l'écran sont entièrement fictifs.

## Essayer

Dans le dossier du prototype :

~~~sh
python3 -m http.server 8000
~~~

Ouvrir http://localhost:8000/experiments/konton-control/ si le serveur est lancé depuis la racine du dépôt. Pour un serveur lancé dans ce dossier, utiliser http://localhost:8000/.

Pas de compilation, pas de paquet externe, pas de connexion internet nécessaire. L'interface est mobile et utilisable au clavier. Le bouton GO lance une simulation de 2,4 secondes qui produit une sortie « à relire » ; STOP interrompt cette simulation ; les décisions « Valider » / « À revoir » ne changent que la mémoire de l'onglet. Un rafraîchissement réinitialise tout.

## Périmètre et responsabilités

- Deux périmètres dans l'interface : collectif (La Faille noire × Interstice) et personnel (KONTON et projets individuels). Il s'agit d'un **filtre d'affichage, pas d'une barrière de sécurité**. Ne jamais utiliser ce filtre comme contrôle d'accès réel.
- Aucun appel réseau, stockage navigateur, token, clé, connexion à un fournisseur d'IA ou exécution réelle.
- Aucune donnée personnelle réelle ni donnée de travail confidentielle dans le code.
- Aucune action ne doit pouvoir publier un article, fusionner une PR ou envoyer un message sans permission et vérification explicites côté serveur.
- Le cockpit ne se substitue pas au site public et ne doit pas rendre une application ou la participation citoyenne dépendante de ce pupitre.
- Le manifeste V2.5 de La Faille noire est une référence de travail non adoptée.

## Contrat de la future couche de connexion (proposition)

Implémenter les opérations suivantes dans un **adaptateur optionnel** remplaçable :

| Opération | Résultat attendu | Condition |
| --- | --- | --- |
| listAgents(scope) | identifiants, capacités, états permis | session autorisée |
| getRuns(agentId) | historique autorisé, horodaté | permissions par périmètre |
| requestRun(agentId, missionId) | identifiant d'exécution / erreur | permission explicite |
| requestCancel(runId) | statut réel d'annulation, pas une simple animation | permission et retour du service |
| listReviewQueue(scope) | sorties en attente, sources, niveau de risque | contrôle d'accès serveur |
| submitReview(reviewId, decision) | décision auditée et retour du serveur | revue humaine authentifiée |

**Ne pas connecter ce prototype tel quel à des services externes.** Avant tout connecteur : authentification et rôles côté serveur, séparation réelle des espaces et des bases de données, actions à privilèges en liste blanche, prévention des commandes répétées, secrets côté serveur, provenance des résultats, gestion des erreurs, traces durables, tests de sécurité et d'accessibilité.

Le moteur d'agents pourrait être local/auto-hébergé ; les API IA commerciales devraient rester facultatives, contrôlées et remplaçables. Les ateliers ChatGPT actuels ne sont pas présumés pilotables directement.

## Suite du chantier

1. Faire relire l'ergonomie V0 sur mobile et ordinateur ; ne pas fusionner automatiquement.
2. Ajouter tests d'interactions et simulateur de réponses d'adaptateur distinct de l'interface.
3. Définir un service local d'orchestration multi-agents, puis l'authentification et les autorisations réelles.
4. Brancher une seule source de statut autorisée en lecture seule, avant toute action distante.
5. Adapter la même interface au boîtier physique (écran, molette, GO/STOP).
