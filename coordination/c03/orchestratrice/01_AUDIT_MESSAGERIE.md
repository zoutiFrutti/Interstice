# C03-ORC-03 — Audit du dispositif existant (03/11/2026)

**P0 de sécurité. Document candidat. Aucune activation ni modification de main.**

## Sources contrôlées sur GitHub

- Messagerie : coordination/messagerie/README.md (main, blob b0474237941f94869404c0508d60f0f753979509), MESSAGES_C10.md (blob 291ac1b38086df535b62ababc92278017123bb30).
- Workflow facteur C10 sur main : .github/workflows/facteur-messagerie-c10.yml (blob da72dbb32b0363971390aa6e13b29b25b5f871a3), exécution planifiée n° 41679296315 (success, 03/11). **Tickets ≠ accusés ni conversations ChatGPT démarrées**.
- Normalisation des rôles C11 : coordination/agents/demande_relieuse_c11.py (main, blob a963a276c91b68b13025601ded79afe8e81019f8). La liste C11 n'inclut pas Penseuse ni Orchestratrice ; l'union avec les 17 boîtes C10 et les deux rôles nouveaux donne **19 rôles documentés**, pas 19 boîtes historiques.
- Réconciliation C11 : coordination/agents/rapprochement_c11.py (main, blob 8805a024a25aae1616d7f4c8641c6275d876dded) ; format et indicateur « preuve vérifiée » ne suffisent pas sans contrôle externe des identités et des SHA.
- C12 sur main : .github/workflows/pont-relieuse-lectrice-c12.yml (blob a18e263972743a374e49fb07d9521efa9ace91b2), coordination/agents/pont_relieuse_c12.py (blob ad8e4622f5d324af7cfa5879ca4bd65f411507be). Déclencheur issues.opened pour propriétaire et préfixe ; **sans opt-in indépendant par variable** dans main. Si OPENAI_API_KEY et OPENAI_MODEL sont configurés, le code peut tenter un appel IA. Leur présence effective n'a pas été vérifiée. **Risque P0 à arbitrer avant une prochaine activation**.
- PR #114 C13 (brouillon) ajoute un opt-in explicite, statuts et garde-fous, mais ce correctif n'est pas fusionné.
- PR #115 C14 (brouillon) : tâches déterministes, DAG, contrat local, pas de réveil des ateliers historiques ; pont Issues candidat non opérationnel avant fusion.
- PR #116 C15 (brouillon, base #115) : connecteur Ollama candidat, tests simulés, pas de machine locale testée.
- PR #126 R1 P0 (brouillon, base #116) : double autorisation opérateur Ollama, sans authentification multi-comptes.
- PR #132 C18 (brouillon, main) : suivi documentaire sans réception déduite, CI hors ligne.
- PR #161 (brouillon, HEAD 0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6) : 219 objets, 19 relations, 30 réserves WORK, sept PAR. PR #162 : retour ARCH C03-ARC-02.
- Commentaire Graphiste sur PR #161, ID 6615790062 ; ce n'est pas un visa conjoint TECH-02.

## Ce qui fonctionne / n'est pas opérationnel

| Brique | Fonction réelle | Limite |
|---|---|---|
| Boîtes C10 | 17 boîtes + archive de courriers | État documentaire, pas réception automatique |
| Facteur C10 | Exécution GitHub planifiée confirmée | Crée des tickets ; ne lit pas les conversations |
| C11 | Scripts de validation et comparaison hors ligne | Simulations et preuves déclaratives |
| Pont C12 | Workflow potentiellement déclenché par une Issue | Manque verrou C13 sur main ; secret/modèle inconnus |
| C13 PR #114 | Garde-fous et tests candidats | Non fusionnée ; IA réelle non testée |
| C14 PR #115 | Calcul local déterministe et dépendances | Sans IA, missions historiques non exécutées |
| C15 / R1 #116/#126 | Ollama local sous opt-in renforcé en PR | Aucun modèle réel testé ; pas de budget agrégé |
| C18 PR #132 | État documentaire et CI | Pas d'index des 19 rôles avant ce complément C03 |

## Récupération : ne pas reconstruire

1. Garder les boîtes C10 et le facteur tels quels. Les courriers R1 préparés ne deviennent pas « reçus ».
2. Réutiliser le script de rapprochement C11 comme contrôle optionnel de preuves.
3. Compléter le format C18 par un registre C03 **strictement documentaire**, sans nouveau workflow.
4. Référencer fichiers C03 déjà déposés sur les branches des ateliers, en gardant leur SHA et leur date.
5. Réunir le tout dans coordination/c03/INDEX_TRANSMISSIONS.md ; éviter une nouvelle PR concurrente avec #132.

## P0 à ne pas effacer

- Aucun droit de création de mission ou de dépôt de texte sur Issues ne prouve le consentement à un appel IA.
- Pas de données personnelles ou textes privés dans GitHub public.
- Contrôler permission issues:write, secrets, coûts, journal d'erreurs et double exécution avant déploiement.
- L'opt-in de C13 n'est **pas présent** dans le workflow C12 actuellement sur main.
- PAR-005 et les contenus de droits pratiques restent bloqués par avis juridique/médical ; succès CI non pertinent.
