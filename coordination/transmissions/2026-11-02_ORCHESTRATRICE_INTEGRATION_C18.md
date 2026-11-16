# C18 — Transmission de L'Orchestratrice à La Relieuse

Date : 2026-11-02. **Statut : candidat d'intégration, non fusionné, aucune IA activée.**

## Sources et arbitrages lus
- Branche `integration/r1-commune-candidate-20261102` : inventaire de la coordination commune.
- Branche `coordination/r1-arbitrages-zout-20261102`, fichier `coordination/reprise-r1/03_ARBITRAGES_ZOUT_2026-11-02.md` : Zout autorise uniquement préparation et tests en branches, refuse activation IA et fusions automatiques ; l'architecture documentaire reste en comparaison.
- Branche `coordination/reprise-generale-r1-20261102` : 18 courriers **PRÉPARÉS**, et non reçus globalement.
- `coordination/messagerie/MESSAGES_C10.md` : historique 17 boîtes, états documentaires distincts des accusés réels.

## Audit technique des travaux existants
- PR #114 C13 : issue `[RELIEUSE-LECTRICE]`, filtre propriétaire, variable `LECTRICE_AI_ENABLED` et secrets GitHub ; draft/non fusionnée. La permission `issues: write` peut écrire un commentaire lors d'une activation future ; vérifier le déclenchement `issues.opened` avant merge. Le compteur cumulatif d'euros et la politique de données privées restent bloquants.
- PR #115 C14 : DAG de tâches, statut déterministe, Issue publique candidate ; pas de conversation ChatGPT réveillée. Draft/non fusionnée.
- PR #116 C15 : connecteur Ollama loopback, uniquement sur commande ; tests simulés, pas de machine Ollama utilisée. Draft/non fusionnée.
- PR #126 R1 P0 : double opt-in opérateur et désactivation des proxys hérités, tests CI sur commit `dcef468e5c5a2936ba0a807f08cdfb944a422067`, mais non fusionnée. Les autorisations ne constituent pas une authentification multi-utilisateurs.
- Risque P0 : Issues et commentaires sont **publics** ; aucun texte sensible n'y est autorisé. Logs d'erreur sans prompt ni secrets, et tests hors ligne. Risque résiduel : entrée marquée PUBLIC par l'auteur sans classification vérifiable, secrets seulement à l'intérieur de l'environnement Actions autorisé, coût sans coupe-circuit agrégé.
- Aucun changement au code des autres ateliers. Le contrat de La Lectrice ne vaut pas publication éditoriale.

## Amélioration ciblée C18
Réutilisation de la logique documentaire de `rapprochement_c11.py`, **sans la modifier** :
- `coordination/agents/suivi_integration_c18.py` : un tableau séparant PREPARE, TRANSMIS_DECLARATIF, RECU_ATTESTE, TRAVAIL_EN_COURS, LIVRABLE_CANDIDAT, CONTROLE_TECHNIQUE, BLOQUE, DECISION_ZOUT ; jamais de statut TERMINE déduit.
- `coordination/agents/exemple_suivi_c18.json` : deux entrées fictives/déclaratives ; pas un registre autoritatif des 18 ateliers.
- `coordination/agents/test_suivi_integration_c18.py` : tests d'états, rejet des preuves mal formées, aucune fusion.
- `.github/workflows/suivi-integration-c18.yml` : tests et rapports en artefact uniquement ; aucun secret ni permission d'écriture.

## Statuts et blocages
- **TERMINÉ documentaire** : inventaire des PR, arbitres de Zout, critères de suivi.
- **À POURSUIVRE** : réconciliation effective de chaque courrier avec accusé signé/contrôlé ; mettre à jour uniquement sur preuves spécifiques.
- **BLOQUÉ** : activation IA, exécution distante, coût API global, données personnelles sur Issues, liaison C14 vers C15, merge.
- **DÉCISION ZOUT** : fusion des candidats, budget IA, choix machine et déploiement.
- Dépendances : Relieuse (réconciliation), Juriste (RGPD), Développeuse (CI/permissions), Anarchitecte (contrat preuve).
- **Tests** : l'exécution locale de tests C18 n'est pas revendiquée ; voir le résultat Actions de la PR, et vérifier le HEAD exact.

Ne pas modifier automatiquement les courriers et leurs accusés. Aucune diffusion, contact, publication, déploiement, dépense ou merge.
