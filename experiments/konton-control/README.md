# KONTON Control · cockpit V0.2 — GitHub en lecture seule

**Statut : prototype sur branche, non déployé, non fusionné.**
**31 octobre 2026.**

Deux espaces indépendants coexistent :

1. **Pupitre d'agents** : GO, STOP, fiches, validation et journal entièrement fictifs. La simulation n'exécute aucun agent ChatGPT, CI ou automatisation réelle.
2. **Observatoire GitHub** : métadonnées réellement lues en GET, dernières PR ouvertes et exécutions de CI, avec dates, branches, erreurs et liens vérifiables. **Aucune écriture GitHub**.

**Ne pas exposer de secrets ni fusionner sans revue.** Ce prototype n'est pas intégré au site public Interstice.

## Usage immédiat : Interstice public

Depuis la racine du dépôt :

~~~sh
python3 -m http.server 8000
~~~

Dans le navigateur : http://127.0.0.1:8000/experiments/konton-control/

Cette version tente de lire trois endpoints publics de l'API REST GitHub, sur le dépôt public zoutiFrutti/Interstice uniquement :

- métadonnées du dépôt ;
- PR ouvertes, dix premières maximum ;
- dix dernières exécutions de workflows, toutes branches confondues.

La page indique précisément l'échec des lectures, les limites de la collecte et la date de récupération. Un « succès » de CI est propre à une exécution donnée, pas au dépôt entier. Si une réponse échoue ou n'est pas accessible, aucun résultat fictif n'est présenté comme réel.

Le navigateur n'a pas de jeton. Les limites de l'API GitHub sans authentification peuvent ralentir ou bloquer temporairement les lectures. La page n'a aucun mécanisme de suivi automatique en arrière-plan.

## Usage local : ses dépôts privés, sans jeton dans le navigateur

Node.js récent installé sur l'ordinateur, puis depuis experiments/konton-control :

~~~sh
export GH_TOKEN="$(gh auth token)"
export KONTON_CONTROL_REPOS="zoutiFrutti/Interstice,mon-compte/mon-depot-prive"
node local-server.cjs
~~~

Ouvrir ensuite http://127.0.0.1:8765/

La variable KONTON_CONTROL_REPOS **est une liste d'autorisation côté serveur**, à adapter avant l'utilisation. Seuls les noms qui y figurent sont consultables. Si GH_TOKEN n'est pas disponible, le serveur peut seulement lire les dépôts publics ; les dépôts privés renverront une erreur. La commande gh auth token nécessite une session GitHub CLI existante. Ne jamais copier-coller le jeton dans un formulaire web, un fichier versionné, une capture d'écran ou une conversation.

**Précautions :**

- Le serveur est lié exclusivement à 127.0.0.1 et contrôle Host, Origin et Fetch Metadata ; il n'ajoute aucun en-tête CORS autorisant des sites externes.
- L'interface statique ne reçoit jamais le jeton, qui reste en mémoire du processus local.
- La passerelle n'autorise que GET, sur trois endpoints GitHub REST prédéfinis, pour les dépôts figurant dans la liste blanche.
- Réponses sans cache navigateur, cache mémoire côté serveur court (90 secondes), aucune écriture sur disque ni journalisation de contenus privés.
- Les informations de dépôts privés ne doivent pas être recopiées dans le site Interstice public ou dans des rapports accessibles publiquement.
- L'exposition locale est adaptée à un prototype monoposte, **pas à un serveur multicomptes ou à un hébergement public**. Une véritable interface mutualisée nécessitera authentification, gestion des rôles, isolation des organisations, journal d'audit, tests de sécurité et backend dédié.

## Ce qui est effectivement connecté

| Fonction | Statut |
| --- | --- |
| Sélection d'un agent, GO, STOP, relecture | Simulation, en mémoire de l'onglet |
| Métadonnées du dépôt public Interstice | Lecture GitHub réelle en mode web |
| PR ouvertes et exécutions GitHub Actions | Lecture réelle, limitée aux premières réponses |
| Dépôts privés configurés par une personne authentifiée | Via passerelle locale, quand le jeton est présent |
| Démarrage/annulation de GitHub Actions, merge, publication | **Désactivés** |
| Collecte WhatsApp, KONTON Bridge, Supabase | **Aucun accès** |
| Interaction directe avec les conversations ChatGPT | **Aucun accès** |

## Exécuter les tests

Depuis experiments/konton-control :

~~~sh
node test.cjs
node test-github.cjs
~~~

Les tests vérifient les transitions locales et l'affichage read-only avec réponses API simulées. La lecture effective chez GitHub dépend d'une connexion internet et des permissions ; le test navigateur mobile et les outils d'accessibilité restent à faire.

## Suite de la roadmap

1. Relecture du rendu réel, largeur 390 px et bureau, puis navigation clavier/lecteur d'écran.
2. Adapter la même lecture de statuts au cockpit sans exposer d'identifiants privés dans du code public.
3. Définir des **tâches exécutables** et **des permissions côté serveur** avant tout vrai GO/STOP.
4. Après validation humaine explicite, introduire un moteur d'orchestration local indépendant, puis un boîtier physique.
5. Garder personnels / communs réellement séparés côté backend ; le filtre visuel de la démo ne vaut pas contrôle d'accès.

Le manifeste V2.5 de La Faille noire et la charte sont des références éditoriales **non adoptées collectivement**. L'observatoire n'implique aucune adoption, validation juridique ou publication.
