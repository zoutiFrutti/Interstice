# C03-DEV-04 — Audit du pont C12 sur main

Date : 2026-11-03. Priorité P0. Analyse statique GitHub, aucune Issue de test ni appel IA.

## Sources exactes
- `.github/workflows/pont-relieuse-lectrice-c12.yml` sur main, confronté à PR #114 HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56`.
- `coordination/agents/pont_relieuse_c12.py` sur main et PR #114.
- PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`, index `coordination/c03/INDEX_TRANSMISSIONS.md`, audit et contrat C03.
- PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`.

## Constat P0
Le workflow main utilise `on: issues: types: [opened]`, permissions `contents: read` et `issues: write`. Le job est conditionné au préfixe `[RELIEUSE-LECTRICE]` et à `github.event.issue.user.login == github.repository_owner`. Les tests unitaires s'exécutent avant le traitement. Le script lit `OPENAI_API_KEY` et `OPENAI_MODEL`; si les deux sont définis, `execute(text,key,model)` peut appeler un service externe. **Aucun opt-in indépendant n'existe sur main.** Les valeurs réelles des secrets et variables ne sont pas accessibles ici et ne sont pas présumées absentes.

L'Issue et son corps sont publics si le dépôt est public ; l'auteur du dépôt peut y placer par erreur des données sensibles. Le filtrage par propriétaire et préfixe ne constitue pas un consentement à transfert externe. Les permissions `issues:write` servent au commentaire de retour ; `contents:read` au checkout. Le workflow ne demande pas de permission de fusion ni de déploiement.

## Correctif candidat déjà disponible
PR #114 ajoute `LECTRICE_AI_ENABLED` avec comparaison stricte à `true`, un timeout de 5 minutes, la sérialisation par numéro d'Issue, une marque anti-doublon et des retours typés. Ses 12 tests locaux ciblés et sa CI C11 ont été annoncés réussis ; **aucune exécution C12 réelle avec IA n'a été réalisée**.

## Risques résiduels
Le garde-fou de #114 est principalement dans le script Python : le job peut encore démarrer, exécuter les tests et écrire un commentaire sans activation IA. L'activation `true` demeure une décision explicite, séparée des secrets et du modèle. Une configuration d'environnement mal maîtrisée, les coûts API, les entrées sensibles et la visibilité des commentaires nécessitent une revue Juriste/Orchestratrice. Le marqueur anti-doublon est vérifié avant écriture, mais la robustesse face à deux exécutions simultanées et aux permissions GitHub doit être testée sans ouvrir d'Issue réelle.

**Avis : P0 confirmé sur main ; PR #114 à réutiliser, aucune activation autorisée.**
