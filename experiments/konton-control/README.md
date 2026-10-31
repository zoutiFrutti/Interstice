# KONTON Control · cockpit V0.3 — tâches locales de vérification GitHub

**Statut : prototype sur branche, non déployé, non fusionné.**
**31 octobre 2026.**

Trois espaces indépendants coexistent :

1. **Pupitre d'agents** : GO, STOP, fiches, validation et journal entièrement fictifs. La simulation n'exécute aucun agent ChatGPT, CI ou automatisation réelle.
2. **Observatoire GitHub** : métadonnées réellement lues en GET, dernières PR ouvertes et exécutions de CI, avec dates, branches, erreurs et liens vérifiables. **Aucune écriture GitHub**.
3. **Orchestrateur local V0.3** : création d'une tâche précise de vérification d'une PR, exécution à la demande, récupération de son SHA exact et des exécutions GitHub Actions correspondantes, rapport enregistré localement, puis accusé de lecture humain. **Aucune action GitHub distante en écriture.**

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

## Orchestrateur réel, mais limité aux vérifications

Le pupitre d'agents demeure une démonstration ; ce nouvel espace est réellement exécutable lorsqu'on utilise le serveur Node local. Il n'est **pas disponible** dans une page GitHub Pages ou servie par le serveur statique Python.

1. Démarrer node local-server.cjs dans le dossier experiments/konton-control, avec KONTON_CONTROL_REPOS et éventuellement GH_TOKEN comme ci-dessus.
2. Ouvrir http://127.0.0.1:8765/. Dans le bloc « Vérifications à exécuter », choisir un dépôt autorisé, saisir un numéro de PR (par exemple 39 pour Interstice), puis créer la tâche.
3. Cliquer « Exécuter la lecture ». Le serveur fait uniquement des GET GitHub sur la PR et les exécutions Actions filtrées par son SHA.
4. Examiner la conclusion **prudente** et les liens vers les exécutions. Un résultat absent, incomplet ou non concordant ne sera jamais présenté comme une validation globale.
5. Choisir « Rapport lu » ou « À approfondir ». Cette décision confirme **uniquement la lecture du rapport local**, et ne modifie ni la PR, ni son approbation, ni son état de fusion.

Le journal et les rapports sont sauvegardés sur **la machine locale**, dans data/tasks.json par défaut, ignoré par Git. On peut choisir un autre chemin avec KONTON_CONTROL_STATE_FILE. Le fichier n'est pas synchronisé, chiffré ou sauvegardé automatiquement ; prendre les précautions habituelles en cas d'ordinateur partagé.

L'API POST ne crée et ne modifie que les enregistrements locaux, avec taille limitée et garde-fous d'origine. Le moteur ne sait exécuter qu'une opération prédéfinie : github-pr-check. Aucune commande arbitraire, prompt, shell, workflow GitHub, action d'agent ou fusion de PR n'est exposé. Les exécutions ne sont ni planifiées, ni automatiques ; c'est une V0.3 **à déclenchement manuel**.

**Limitation de sécurité :** ce serveur suppose un poste personnel de confiance et n'a **pas d'authentification multicomptes**. Ne pas le publier derrière un reverse proxy, ouvrir son port au réseau local ou le mettre sur un serveur distant sans authentification, autorisations, chiffrement et audit de sécurité. Les filtres collectif/personnel ne sont pas une séparation de sécurité côté utilisateur.

## Ce qui est effectivement connecté

| Fonction | Statut |
| --- | --- |
| Sélection d'un agent, GO, STOP, relecture | Simulation, en mémoire de l'onglet |
| Métadonnées du dépôt public Interstice | Lecture GitHub réelle en mode web |
| PR ouvertes et exécutions GitHub Actions | Lecture réelle, limitée aux premières réponses |
| Dépôts privés configurés par une personne authentifiée | Via passerelle locale, quand le jeton est présent |
| Tâche GitHub PR + CI exacte, rapport et revue locale | **Fonctionnel en mode serveur local** ; aucune modification distante |
| Démarrage/annulation de GitHub Actions, merge, publication | **Désactivés** |
| Collecte WhatsApp, KONTON Bridge, Supabase | **Aucun accès** |
| Interaction directe avec les conversations ChatGPT | **Aucun accès** |

## Exécuter les tests

Depuis experiments/konton-control :

~~~sh
node test.cjs
node test-github.cjs
node test-task-engine.cjs
node test-local-api.cjs
~~~

Les tests vérifient les transitions, l'affichage read-only, le moteur durable, l'audit et la protection HTTP locale avec réponses API simulées. La lecture effective chez GitHub dépend d'une connexion internet et des permissions ; le test navigateur mobile et les outils d'accessibilité restent à faire.

## Suite de la roadmap

1. Relecture du rendu réel, largeur 390 px et bureau, puis navigation clavier/lecteur d'écran.
2. Tester l'orchestrateur sur le poste cible, vérifier les droits d'accès GitHub et la restitution des rapports en conditions réelles.
3. Formaliser les permissions par espace, les identités d'agents et les tâches futures. Le type PR-check est la première tâche réellement exécutable.
4. Après validation humaine explicite, introduire un moteur d'orchestration local indépendant, puis un boîtier physique.
5. Garder personnels / communs réellement séparés côté backend ; le filtre visuel de la démo ne vaut pas contrôle d'accès.

Le manifeste V2.5 de La Faille noire et la charte sont des références éditoriales **non adoptées collectivement**. L'observatoire n'implique aucune adoption, validation juridique ou publication.
