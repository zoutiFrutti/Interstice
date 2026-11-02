# ORCH C14 — Contrat du moteur de missions déterministe

Date : 2026-11-02. Statut : **candidat**, destiné à La Relieuse et aux ateliers.

## Portée réelle

Le moteur C14 reçoit une mission publique structurée, vérifie le graphe de dépendances (DAG),
trie les tâches et **exécute uniquement trois opérations locales de lecture/analyse des données fournies** :

- `mediatheque/doublons_urls` : rapprochement approximatif des URL et indices de doublons ;
- `lectrice/controle_urls` : repérage des URL manquantes ou mal formées ;
- `relieuse/consolider` : résumé technique des résultats des dépendances.

Ce sont des fonctions Python déterministes, **pas** les conversations historiques de ces ateliers,
**pas** de véritables agents IA, **pas** une vérification web ou historique et **pas** de validation éditoriale.
Le résultat `TERMINE_DETERMINISTE` ne doit jamais être interprété comme « atelier humain/IA exécuté ».

## Usage

```bash
python3 coordination/agents/orchestrateur_c14.py \
  --entree coordination/agents/exemple_mission_c14.json \
  --sortie rapport-c14.json --markdown rapport-c14.md
```

Mode `--mode planifier` : aucun traitement de documents, retour `PLANIFIEE_NON_EXECUTEE` pour les tâches
autorisées non bloquées. Le workflow `.github/workflows/orchestrateur-c14.yml`
teste le moteur et fabrique **uniquement un artefact GitHub Actions** sur données fictives.

## Entrée et garde-fous

- Format strict `schema=c14.v1`, `mission_id`, `origine=RELIEUSE_CHATGPT`,
  `classification=PUBLIC`, `taches` (1 à 12).
- `origine` est une déclaration de l'appelant, **pas** une preuve d'authentification.
- Chaque tâche a `id`, `atelier`, `action`, `dependances` (IDs) et `entree`.
- Chaque ressource a `titre` et `url` ; au plus 30 ressources par tâche.
- Aucun champ d'écriture, diffusion, fusion, publication ou contrôle de coûts n'est accepté.
- Les tâches inconnues avec entrée vide sont `REFUSEE_ACTION` ; leurs dépendantes sont
  `BLOQUEE_DEPENDANCE` ; les tâches inconnues avec contenu sont rejetées.
- Dépendance absente, doublon d'ID, cycle, classification non publique, champ imprévu ou
  taille excessive : erreur de validation et **aucun rapport partiel**.
- Aucune requête HTTP, aucun appel de modèle, aucune dépense API, aucune modification GitHub.
  Attention : le simple fait de marquer une mission `PUBLIC` ne rend pas son contenu public.
  La Relieuse et la Juriste doivent empêcher l'envoi de données sensibles dans les Issues et
  les logs de ce dépôt public.

## Contrat de sortie

Le JSON comprend les empreintes SHA-256 du JSON de mission et de chaque tâche, un
`ordre_execution`, les statuts de chaque tâche, les résultats déterministes et un bilan.
L'empreinte prouve que **le rapport correspond aux données d'entrée encodées**, mais pas
que des sources ont été lues ni que des humains ont accusé réception.

Les statuts sont :

| Statut | Signification |
| --- | --- |
| `PLANIFIEE_NON_EXECUTEE` | Opération autorisée mais non exécutée |
| `TERMINE_DETERMINISTE` | Fonction locale effectuée et résultat produit |
| `REFUSEE_ACTION` | Action ou atelier hors liste blanche |
| `BLOQUEE_DEPENDANCE` | Une étape nécessaire a été refusée ou bloquée |

La sortie Markdown est un résumé technique consultable depuis GitHub Actions.
L'absence de résultat externe est explicite.

## Étapes suivantes (non comprises dans C14)

1. Développeuse : interface pour exécutants locaux ou distants, isolation, limites et logs.
2. Anarchitecte : contrat inter-ateliers, signatures, états et provenance des preuves.
3. Juriste : données publiques et sensibles, sous-traitants IA et permissions GitHub.
4. Orchestratrice : authentification réelle des missions, gestion de tentatives, coûts,
   files persistantes et intégration avec C13 après validation de sa PR.
5. Relieuse : arbitrages, revue et validation humaine avant fusion/publication.

La boîte historique C10 et les conversations ChatGPT ne sont pas modifiées.

## Pont GitHub préparé (non déployé)

Le workflow `.github/workflows/relieuse-c14-issues.yml` est **candidat sur la PR** :
il ne réagira aux Issues qu'après fusion autorisée sur `main`.

Contrat d'entrée depuis la conversation La Relieuse :
1. Créer une Issue publique par le compte propriétaire du dépôt.
2. Titre commençant par `[RELIEUSE-C14]`.
3. Corps = JSON **exactement conforme** au schéma C14 (pas de Markdown, pas de données privées).
4. Le workflow filtre l'auteur, teste le code, exécute les seules fonctions locales autorisées.
5. Il écrit un **unique commentaire** `C14-ORCHESTRATRICE-RESULTAT` dans l'Issue.
6. Une relance ne doit pas produire un deuxième commentaire. Une mission corrigée nécessite une nouvelle Issue afin de préserver le journal.

Le commentaire contient uniquement les identifiants de tâches, leur état, un bilan et
une empreinte SHA-256 ; ni texte de ressource, ni détails des erreurs d'entrée.
Les tests CLI de ce pont utilisent un événement GitHub **simulé** ; ils ne démontrent
pas encore le succès du workflow sur une Issue réelle. La création d'Issue ne réveille
aucune conversation ChatGPT.
