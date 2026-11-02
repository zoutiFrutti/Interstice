# ORCH-C15-001 — Transmission à La Relieuse

Date : 2026-11-02
Statut : candidat non fusionné

C15 développe un contrat pour les futurs exécutants IA, dans une branche issue de C14.

- Préparation déterministe sans réseau par défaut ;
- Connecteur local Ollama disponible **uniquement sur demande explicite** (`--executer-local` et autorisation JSON), limité à la boucle locale ;
- Fournisseur distant bloqué ;
- Un appel maximum par mission ; résultats candidates, sans validation éditoriale ;
- Tests de refus, validation et réponse Ollama simulée ;
- Aucune donnée privée, clé API, publication, fusion ou conversation historique ChatGPT activée.

C13 PR #114 et C14 PR #115 demeurent des candidats distincts. C15 doit cibler la branche C14 pour revue incrémentale, **pas `main` directement**, afin d'éviter de cacher des dépendances. La Relieuse peut transmettre à Développeuse, Anarchitecte et Juriste pour contrôle. Aucun déploiement sans accord.
