# ORCH-C14-001 — Transmission à La Relieuse

Date : 2026-11-02
Atelier : L'Orchestratrice
Statut : candidat technique, **sans fusion ni publication**.

## Travail produit

- Branche `feature/c14-orchestratrice-moteur-missions-20261102`, indépendante de C13.
- `coordination/agents/orchestrateur_c14.py` : validation de schéma, graphe acyclique de
  dépendances, liste blanche d'exécutants locaux, refus et blocages explicites.
- `coordination/agents/exemple_mission_c14.json` : trois tâches publiques fictives.
- `coordination/agents/test_orchestrateur_c14.py` : sécurité, chemins heureux,
  cycles et tests CLI.
- `.github/workflows/orchestrateur-c14.yml` : CI sans secrets, sans écriture dans le dépôt.
- `coordination/agents/C14_CONTRAT_MOTEUR_MISSIONS.md` : limites et interfaces.

## Frontières maintenues

- Aucun modèle IA exécuté, aucun réseau contacté par le moteur.
- Aucun réveil automatique des conversations historiques.
- Les opérations `mediatheque`, `lectrice` et `relieuse` sont des fonctions techniques
  déterministes, **pas** l'exécution des ateliers historiques.
- Aucune publication, fusion ou validation éditoriale automatique.
- Aucun achat de matériel engagé ; chantier serveur personnel reporté.

## Coordination demandée

La Relieuse peut consulter la PR candidate et faire relire ce contrat par
L'Anarchitecte, La Développeuse et La Juriste. Ne pas marquer les dossiers historiques
comme traités à partir de cette démonstration. Prochaine étape : moteur IA local ou distant
avec protections explicites, preuves et budget, lorsque l'infrastructure sera prête.
