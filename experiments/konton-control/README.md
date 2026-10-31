# KONTON Control · cockpit V0.7 — navigation Android simplifiée

**Statut : prototype sur branche, non déployé, non fusionné.**
**31 octobre 2026.**

Quatre modules coexistent :

1. **Pupitre d'agents** : GO, STOP, fiches, validation et journal entièrement fictifs. La simulation n'exécute aucun agent ChatGPT, CI ou automatisation réelle.
2. **Observatoire GitHub** : métadonnées réellement lues en GET, dernières PR ouvertes et exécutions de CI, avec dates, branches, erreurs et liens vérifiables. **Aucune écriture GitHub**.
3. **Orchestrateur local V0.3** : vérification d'une PR et de ses CI sur le SHA exact, rapport et accusé de lecture locaux. **Aucune écriture GitHub.**
4. **Relectrice IA V0.4/V0.5** : analyse de rapport par un modèle Ollama local facultatif. Vérification réelle de la présence du modèle sans prétendre avoir testé l'inférence.

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
export KONTON_CONTROL_SCOPE="personnel"
export KONTON_CONTROL_REPOS="zoutiFrutti/KawaGo,zoutiFrutti/Toto-Black"
node local-server.cjs
~~~

Ouvrir ensuite http://127.0.0.1:8765/

La variable KONTON_CONTROL_REPOS **est une liste d'autorisation côté serveur** ; les dépôts doivent tous appartenir au périmètre choisi par KONTON_CONTROL_SCOPE. Seuls les noms qui y figurent sont consultables. Si GH_TOKEN n'est pas disponible, le serveur peut seulement lire les dépôts publics ; les dépôts privés renverront une erreur. La commande gh auth token nécessite une session GitHub CLI existante. Ne jamais copier-coller le jeton dans un formulaire web, un fichier versionné, une capture d'écran ou une conversation.

**Précautions :**

- Le serveur est lié exclusivement à 127.0.0.1 et contrôle Host, Origin et Fetch Metadata ; il n'ajoute aucun en-tête CORS autorisant des sites externes.
- L'interface statique ne reçoit jamais le jeton, qui reste en mémoire du processus local.
- La passerelle n'autorise que GET, sur trois endpoints GitHub REST prédéfinis, pour les dépôts figurant dans la liste blanche.
- Réponses GitHub sans cache navigateur, cache mémoire court (90 secondes). **Les rapports des tâches sont bien écrits sur disque local** ; aucune donnée privée n'est envoyée au site public.
- Les informations de dépôts privés ne doivent pas être recopiées dans le site Interstice public ou dans des rapports accessibles publiquement.
- L'exposition locale est adaptée à un prototype monoposte, **pas à un serveur multicomptes ou à un hébergement public**. Une véritable interface mutualisée nécessitera authentification, gestion des rôles, isolation des organisations, journal d'audit, tests de sécurité et backend dédié.

## Orchestrateur réel, mais limité aux vérifications

Le pupitre d'agents demeure une démonstration ; ce nouvel espace est réellement exécutable lorsqu'on utilise le serveur Node local. Il n'est **pas disponible** dans une page GitHub Pages ou servie par le serveur statique Python.

1. Démarrer node local-server.cjs dans le dossier experiments/konton-control, avec KONTON_CONTROL_REPOS et éventuellement GH_TOKEN comme ci-dessus.
2. Ouvrir http://127.0.0.1:8765/. Dans le bloc « Vérifications à exécuter », choisir un dépôt autorisé, saisir un numéro de PR (par exemple 39 pour Interstice), puis créer la tâche.
3. Cliquer « Exécuter la lecture ». Le serveur fait uniquement des GET GitHub sur la PR et les exécutions Actions filtrées par son SHA.
4. Examiner la conclusion **prudente** et les liens vers les exécutions. Un résultat absent, incomplet ou non concordant ne sera jamais présenté comme une validation globale.
5. Choisir « Rapport lu » ou « À approfondir ». Cette décision confirme **uniquement la lecture du rapport local**, et ne modifie ni la PR, ni son approbation, ni son état de fusion.

Le journal et les rapports sont sauvegardés sur **la machine locale**, dans data/collectif/tasks.json ou data/personnel/tasks.json selon l'instance, ignoré par Git. On peut choisir un autre chemin avec KONTON_CONTROL_STATE_FILE. Le fichier n'est pas synchronisé, chiffré ou sauvegardé automatiquement ; prendre les précautions habituelles en cas d'ordinateur partagé.

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


## V0.4 · Premier agent IA réellement exécutable (facultatif)

**Ce qui est réel :** un adaptateur local Ollama qui envoie une mission bornée à un modèle IA *uniquement si un modèle est explicitement configuré et démarré*. À ce stade, le dépôt ne démontre pas qu'un modèle est installé ou fonctionnel sur la machine de l'utilisateur. Les tests CI emploient un fournisseur simulé ; aucun modèle n'a été appelé pendant ces tests.

La mission est fixe : « La Relectrice technique » analyse un rapport GitHub de la V0.3 déjà terminé. Elle reçoit seulement des métadonnées bornées : nom du dépôt, titre de PR, SHA, état, noms de workflows et conclusions. Aucun diff, log, secret GitHub ou accès aux fichiers n'est transmis au modèle. Le contenu GitHub est **non fiable** et explicitement présenté au modèle comme des données, non des instructions.

### Démarrage sur une machine compatible

Ollama doit fonctionner **sur la même machine** que le serveur KONTON Control, sur 127.0.0.1:11434. Installation selon la documentation de son éditeur, puis téléchargement volontaire d'un modèle suffisamment léger pour la machine, par exemple :

~~~sh
ollama pull qwen2.5:3b
export KONTON_AI_MODEL=qwen2.5:3b
node local-server.cjs
~~~

Puis ouvrir http://127.0.0.1:8765/ . D'abord créer et **exécuter** une vérification GitHub V0.3 ; ensuite, sélectionner ce rapport dans « La Relectrice technique », créer une mission, GO, examiner la réponse, puis « Réponse lue » ou « À approfondir ».

**Sur un Mac Catalina (10.15) de 2013 :** la version actuelle d'Ollama nécessite macOS 14 Sonoma ou plus récent. L'installation n'est donc pas prévue sur cette configuration. Préférer le futur serveur / ordinateur compatible, et conserver le pupitre statique utilisable sur Catalina. On ne prétend pas que les modèles fonctionneront sur ce vieux Mac.

### Limites des commandes

- GO émet une requête locale réelle à un modèle, si configuré.
- STOP utilise AbortController pour interrompre le **client local**. Un retour « interrompu » ne prouve pas que le moteur d'inférence a physiquement arrêté tout calcul. Les réponses arrivées après STOP sont ignorées.
- En cas de redémarrage, une mission auparavant en cours passe au statut « interrompu », sans réponse validée.
- La réponse IA est présentée **comme texte non fiable**, jamais exécutée comme HTML ni interprétée comme un ordre.
- L'accusé de lecture est local, ne certifie pas les CI et n'approuve aucune PR.
- Aucune boucle autonome, navigation web, shell, modification de fichiers, fusion GitHub ou publication n'est accessible à l'agent.
- Les rapports IA peuvent contenir des informations sur les dépôts privés ; ils sont enregistrés dans data/collectif/ai-tasks.json ou data/personnel/ai-tasks.json (ignorés par Git), **non chiffré**. Réserver la passerelle à une machine personnelle de confiance et ne pas exposer son port.
- Les listes de dépôts et le filtrage Personnel/Collectif ne sont **pas** une sécurité multiutilisateurs. Il n'existe pas encore de rôles ou d'authentification côté serveur.

Les connexions IA restent strictement locales et facultatives ; pas de compte cloud, de clé API ou de dépense lancée par le prototype.

### Tests V0.4

~~~sh
node test-ai-engine.cjs
~~~

La CI teste les rapports figés, l'injection de texte hostile dans des titres de PR (traités comme données), l'interruption en course, la persistance, la reprise après arrêt et l'exigence d'une relecture humaine. **Les tests ne vérifient pas la qualité des réponses d'un modèle réel, ni le fonctionnement d'Ollama sur la machine.**

### Prochaine passe

Contrôle d'un vrai modèle sur une machine compatible, revue ergonomique mobile/desktop, audit de sécurité de la passerelle locale, puis séparation d'accès authentifiée si une version réseau doit exister. La connexion à des agents multi-outils reste un travail distinct, soumis à permissions et validation explicites.


## V0.5 · Séparation des instances et diagnostic du modèle

**Une seule catégorie de projets par processus local** : collectif ou personnel. C'est un garde-fou côté serveur et sur les fichiers de rapports, **pas une authentification des personnes**.

Démarrer l'instance collective, sans jeton si le dépôt est public :

~~~sh
export KONTON_CONTROL_SCOPE=collectif
export KONTON_CONTROL_REPOS=zoutiFrutti/Interstice
export KONTON_CONTROL_PORT=8765
node local-server.cjs
~~~

Démarrer, dans un autre terminal et seulement si nécessaire, l'instance personnelle :

~~~sh
export GH_TOKEN="$(gh auth token)"
export KONTON_CONTROL_SCOPE=personnel
export KONTON_CONTROL_REPOS=zoutiFrutti/KawaGo,zoutiFrutti/Toto-Black
export KONTON_CONTROL_PORT=8766
node local-server.cjs
~~~

Ouvrir l'instance personnelle sur http://127.0.0.1:8766/. Les processus doivent utiliser deux ports différents. Le jeton doit avoir des droits minimaux et ne doit jamais entrer dans le dépôt.

Le serveur **refuse de démarrer** si la liste mélange Interstice avec un projet personnel, ou si un ancien journal chargé comporte des tâches d'un autre périmètre. La classification est volontairement limitée aux dépôts de l'utilisateur : Interstice = collectif, les autres dépôts zoutiFrutti = personnel. Un futur dépôt collectif supplémentaire demandera une mise à jour explicite de la politique.

Les nouveaux rapports sont rangés séparément sous data/collectif/ ou data/personnel/. Les anciens rapports sous data/tasks.json et data/ai-tasks.json ne sont **pas migrés automatiquement**. Avant un déplacement manuel : arrêter le serveur, sauvegarder, vérifier le périmètre des données. Ne jamais donner le même chemin de stockage personnalisé aux deux instances.

### Disponibilité réelle du modèle

GET /api/ai/readiness interroge http://127.0.0.1:11434/api/tags et cherche le **nom exact du modèle installé**. Aucune connexion cloud.

- Modèle repéré : le service local répond et le modèle configuré est dans la liste. Cela ne prouve pas qu'une génération réussira.
- Modèle absent : le service répond, mais le modèle n'est pas installé.
- Service indisponible : aucune réponse locale valide. Le cockpit désactive les nouveaux GO d'agent.
- Sans KONTON_AI_MODEL, l'IA reste désactivée. La CI simule les réponses HTTP ; elle ne lance pas un vrai modèle.

### Tests

~~~sh
node test-scope-policy.cjs
node test-ollama-readiness.cjs
node test-local-api.cjs
~~~

Les tests couvrent le refus de mélanger les espaces, le rejet d'historiques d'un autre périmètre, l'absence du modèle et les erreurs de disponibilité. Reste à effectuer un **vrai essai sur une machine compatible**, la QA mobile et une revue de sécurité avant toute exposition réseau.

**Aucune publication, fusion GitHub, création de compte, approbation ni autonomie éditoriale n'est ajoutée.**

## V0.7 · Interface mobile simplifiée après test sur Crosscall

Retour utilisateur : l'APK V0.6 s'installe et s'ouvre sur le Crosscall Stellar X5, mais l'écran initial est trop chargé. La V0.7 sépare l'interface en **Accueil / Agents / GitHub / Outils**, via une navigation fixe en bas sur téléphone.

- **Accueil** : deux actions principales, état explicite de la simulation et aperçu des compteurs fictifs. Pas de formulaires serveur.
- **Agents** : un pupitre de démonstration. Les commandes GO, STOP et les validations locales restent fictives.
- **GitHub** : informations publiques réelles uniquement après réponse de l'API, en lecture seule.
- **Outils** : fonctions techniques séparées. Dans l'APK, les formulaires serveur qui ne peuvent pas fonctionner sont masqués au profit d'une explication claire.

Ce changement **ne rend pas Ollama accessible à distance** et ne connecte pas les dépôts privés. L'application Android reste une APK de développement sans signature stable : la signature de debug peut changer à chaque compilation et exiger la désinstallation de la V0.6 avant la V0.7.

La nouvelle navigation est couverte par le test Node test-navigation.cjs. Une compilation Android réussie ne remplace pas un contrôle visuel et fonctionnel sur le téléphone, notamment la largeur réelle de son écran et les boutons système Android.


## V0.8 · Petites améliorations proactives

- **Chargement GitHub à la demande** : la lecture API publique ne commence que lorsque l'utilisateur ouvre l'écran GitHub. Cela économise les requêtes et rend l'accueil plus rapide. L'actualisation reste manuelle.
- **Choix d'un agent sur téléphone** : une fois un agent sélectionné dans la liste, le navigateur défile vers son pupitre GO/STOP uniquement sur les écrans étroits.
- **Version Android/PWA incrémentée** : versionCode 8, cache statique renouvelé. Aucun changement de permissions, de dépôt personnel ou d'accès aux données privées.
- Les tests Node incluent la lecture GitHub et la navigation. Le rendu réel sur Crosscall après installation reste à valider.

Il s'agit d'améliorations autonomes à faible risque. Le pupitre des agents demeure fictif, l'observatoire GitHub est toujours en lecture seule, et le modèle Ollama reste uniquement accessible sur un serveur local compatible.
