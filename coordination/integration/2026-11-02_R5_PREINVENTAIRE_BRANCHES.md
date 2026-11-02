# R5 — préinventaire exhaustif des branches (sans mutation)

Date : 2026-11-02. Recherche paginée GitHub (4 pages) : **218 branches** recensées. Recherche PR ouvertes : **95 PR** au moment du contrôle. Ces chiffres sont un instantané, non une autorisation de nettoyage.

## Répartition par préfixe
| Préfixe | Nombre |
|---|---:|
| agent | 15 |
| atelier | 16 |
| atelier-lectrice | 12 |
| atelier-lecteur | 7 |
| atelier-lecture | 8 |
| coordination | 24 |
| design | 27 |
| feature | 10 |
| fix | 11 |
| integration | 15 |
| juriste | 16 |
| research | 23 |
| recherche | 6 |
| prototype | 7 |
| audit | 4 |
| autres préfixes | 17 |

## Règles de tri
1. Préserver la branche principale et les HEAD de PR actives, les sources, droits, identifiants et statuts éditoriaux.
2. Comparer chaque branche à son ancêtre commun et aux branches candidates, identifier commits uniques, fichiers uniques, conflits et tests.
3. Classer : à intégrer, à archiver, doublon prouvé, bloqué, à conserver.
4. Consolider par lots cohérents avec PR de convergence, CI et rollback ; **aucune fusion automatique**.
5. Proposer séparément la fermeture de PR et la suppression de branches devenues inutiles, uniquement après accord explicite de Zout.

## Priorité R5
D'abord la famille frontend R1–R4, ensuite les contrats P0 et la documentation, puis les lots éditoriaux avec provenance. Ne pas mélanger données historiques candidates et code validé.
