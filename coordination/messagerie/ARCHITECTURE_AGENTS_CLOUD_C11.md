# Agents cloud C11 — architecture candidate, sans ordinateur Linux

Date : 2026-11-01. **Proposition**, pas un service actif.

## But
Remplacer progressivement les relances manuelles par un orchestrateur GitHub Actions + API de modèles, tout en gardant GitHub comme journal et Zout comme autorité éditoriale.

## Déploiement en trois niveaux
1. **Facteur** : surveille les boîtes, ouvre des Issues. Workflow fusionné sur main via PR #85 ; première exécution réelle et permissions à vérifier.
2. **Agent pilote en lecture seule** : sur déclenchement manuel, reçoit une Issue de mission structurée, consulte une liste autorisée de fichiers GitHub, produit un rapport candidat avec références, incertitudes et consommation de tokens. Aucun push automatique, aucun envoi externe, aucune publication.
3. **Multi-agents bornés** : routeur Relieuse répartit des tâches spécialisées, parallélisme plafonné, plafond financier, sandbox, branches de travail distinctes, PR candidates, contrôle indépendant des preuves et approbation humaine avant intégration ou publication.

## Prérequis avant niveau 2
- Choisir un fournisseur API, établir une clé via secrets GitHub Actions (jamais dans le dépôt), définir plafond mensuel et par mission.
- Définir quelles données peuvent quitter GitHub vers le fournisseur API ; ne pas transmettre dossiers personnels, secrets ou données sensibles sans examen.
- Tester une mission non sensible sur un seul atelier avec rapport et coût mesurés.
- Prévoir arrêt d'urgence, logs expurgés, retries limités, idempotence et signalement d'échec.

## Ce qui reste humain
- Orientations et priorités ; validation de publication ; autorisation de partenariats, messages externes et décisions juridiques ; arbitrages de sources sensibles.
- Une Issue créée par le facteur ne signifie ni travail effectué ni agent réveillé.

## Architecture portable
Les jobs GitHub Actions fonctionnent sur runners cloud. Un serveur Linux personnel peut remplacer les runners ultérieurement, sans changement du contrat des missions ni du journal GitHub.
