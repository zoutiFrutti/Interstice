# LA FAILLE NOIRE × INTERSTICE — Protocole GitHub de coordination inter-ateliers V0
**30 octobre 2026 · La Relieuse · Proposition technique, aucune automatisation d'exécution d'IA activée par ce seul document.**

## Problème à résoudre
Les conversations ChatGPT sont des sessions distinctes. Un commit GitHub ne les lit pas automatiquement, ne les réveille pas et ne confirme pas sa réception. Le `coordination/JOURNAL_COMMUN.md` actuel mélange des centaines de lignes et des écritures concurrentes ; le conflit de SHA y est fréquent. Les PR #35/#41/#42/#44 partagent ce journal, ce qui augmente les risques de pertes de contributions. Des transmissions « déposées » peuvent sembler « reçues » par abus de langage.

## Solution de base : GitHub = mémoire, enveloppes de transmission et preuves
1. **Registre versionné** `coordination/ateliers/registre.json` : identifiant stable par atelier, nom, contrat, branche/PR de travail, responsabilité. Aucun secret, aucune donnée privée.
2. **Enveloppes versionnées**, une par événement sous `coordination/ateliers/messages/<ID>.json` (ou JSONL validé si le volume le justifie) : `id`, `from`, `to`, `subject`, `mission_ref`, `source_refs`, `requires`, `status`, `created_at`, `ack_at`, `result_ref`. ID unique et immuable. Ne pas réutiliser l'ID pour un contenu différent.
3. **États de livraison à ne pas confondre :**
   - `PREPAREE` : enveloppe créée dans GitHub.
   - `DEPOSEE` : commit présent et vérifié dans GitHub.
   - `VUE_PAR_ORCHESTRATEUR` : un processus a lu l'ID et la référence source.
   - `ACCUSEE_PAR_ATELIER` : l'agent destinataire **a écrit** un accusé de réception avec horodatage et référence de session/run ; pas une simple lecture supposée.
   - `EN_COURS` : exécution attestée par run/commit.
   - `TERMINEE` / `BLOQUEE` : preuves de sortie exactes. Une valeur saisie à la main ne prouve pas une exécution.
4. **Une mission = un résultat unique** : bilan par atelier et cycle dans `coordination/ateliers/rapports/<atelier>/<cycle>.md` avec tableau FAIT / BLOQUE / A_FAIRE, liens de source et SHA. Le Journal commun reçoit **une seule synthèse** par résultat vérifié, et non trente petites écritures concurrentes.
5. **Boîtes logiques** : Inbox = messages dont `to` inclut l'atelier, et non terminés ; Outbox = messages `from` atelier. L'index est **calculé**, pas copié à plusieurs endroits. Les liens vers PR existantes sont conservés.

### Exemple public fictif de transmission (ne pas utiliser pour une vraie personne)
```json
{
  "id": "015-relieuse-developpeuse-001",
  "from": "relieuse",
  "to": ["developpeuse"],
  "subject": "Régressions navigateur de la PR #41",
  "mission_ref": "coordination/RELIEUSE_TRANSMISSION_015_CYCLE_30_PASSES_ET_ORCHESTRATION_2026-10-30.md",
  "source_refs": ["https://github.com/zoutiFrutti/Interstice/actions/runs/41101912014"],
  "requires": [],
  "status": "PREPAREE",
  "created_at": "2026-10-30",
  "ack_at": null,
  "result_ref": null
}
```

**Un changement de valeur `ACCUSEE_PAR_ATELIER` doit être écrit par l'exécutant effectif, pas par La Relieuse pour simuler une réception.** Les noms des rôles sont des identifiants techniques, pas des comptes ou pouvoirs accordés.

## Mise en route progressive, sans tromperie
**Niveau 0 — disponible aujourd'hui :** GitHub sert déjà d'archive et de preuves. Les prompts restent donnés aux conversations par l'utilisateur ; les conversations lisent `main`, travaillent, et déposent leur rapport dans un fichier séparé. Un contrôle en lecture seule détecte enveloppes invalides, doublons et transmissions sans preuve.

**Niveau 1 — proposition de pilote technique :** un `scripts/coordination-check.mjs` sans dépendance, lancé manuellement par Node ou par un workflow GitHub Actions **lecture seule** sur PR de coordination. Il vérifie schéma, identifiants, états et écrit un rapport d'inbox en artefact CI. **Il n'envoie aucun prompt ni ne modifie le dépôt.**

**Niveau 2 — après approbation :** GitHub Issues ou un contrôleur connecté crée des tâches, met à jour les accusés de réception et construit un tableau des dépendances, avec un verrouillage par ID de mission et une validation humaine. Actions peut être déclenché par `workflow_dispatch`, `schedule` ou `repository_dispatch`, à condition que le workflow soit sur la branche par défaut. La planification GitHub n'est pas une garantie d'horaire exact. GitHub n'a pas le pouvoir de réveiller directement des conversations ChatGPT ordinaires.

**Niveau 3 — uniquement après accord et budget :** un **orchestrateur externe avec des agents IA via API** lit les missions, démarre des exécutions authentifiées, effectue des actions dans les limites du rôle, enregistre chaque sortie et la référence de run, puis demande un arbitrage humain pour publications, prise de contact, opérations sensibles, fusion et déploiement. Autre piste : utiliser des automatisations ChatGPT connectées à GitHub comme lecteurs périodiques, mais **ne pas confondre leur résultat avec une boîte mail inter-conversations**. La PR #39 KONTON Control peut **afficher** plus tard les états, mais ne contrôle aucun agent réel aujourd'hui.

## Contrôles nécessaires pour agents automatiques
- **Dépôt actuellement public :** ne jamais y écrire les courriels de personnes, dossiers de signalement, localisation sensible, promesses de partenariat ou preuves d'identité. Un dépôt privé ou service à accès restreint est requis pour ces informations si une base légale et responsable réels existent.
- **Permissions minimales :** GitHub Actions pilote = `contents: read`; n'activer `contents: write`, `issues: write` ou `pull-requests: write` qu'après revue, avec validation humaine. Garder OIDC/RLS et autres autorisations serveur, jamais secrets imprimés en logs.
- **Déclencheurs sûrs :** éviter d'exécuter du code non fiable avec `pull_request_target` et secrets ; ne pas traiter les commentaires ou textes d'Issues comme instructions d'autorité. Validation stricte des champs d'enveloppes et listes blanches.
- **Anti-boucles :** quota maximal de passes/tokens/coûts par mission, délai de refroidissement, compteur de tentatives, interdiction d'une mission réémise identique, statut `BLOQUEE` au lieu de retry sans fin, autonomie ne signifiant pas droit de publier.
- **Traçabilité :** SHA du code et des sources au début, modifications exactes, tests réellement exécutés, logs sans données personnelles, accusé prouvé ; écritures GitHub atomiques par fichier avec SHA frais et PR si conflit.
- **Validation humaine :** sorties publiques du Wiki, géolocalisation réelle, partenariats La Tisseuse, réponse à des signalements, changement de statuts du manifeste et fusions sont **toujours** soumis à des personnes légitimes.

## Ordre de déploiement
1. Faire examiner le présent contrat par **Anarchitecte + Juriste**.
2. Tester le validateur sur des messages **fictifs**, dans la PR #43 de coordination, en lecture seule.
3. Fixer un petit cycle pilote **trois ateliers** : Relieuse → Développeuse (régressions PR #41), Juriste (avis TIS-001), Tisseuse (recherche vérifiable). Le contrôle **n'envoie pas** ces missions aux conversations ; elles les reçoivent seulement lorsque l'utilisateur les transmet, ou si un orchestrateur effectivement connecté existe.
4. Conserver les 30 passes de chaque atelier dans la [Transmission 015](RELIEUSE_TRANSMISSION_015_CYCLE_30_PASSES_ET_ORCHESTRATION_2026-10-30.md), mais n'exécuter un cycle automatique qu'après décision explicite.
5. Envisager une UI KONTON Control en **lecture seule** des états après validation de provenance et d'authentification.

**But :** une vraie coopération entre ateliers basée sur des preuves et des accusés explicites. Ni illusion de mémoire partagée automatique, ni nouveau centre politique.
