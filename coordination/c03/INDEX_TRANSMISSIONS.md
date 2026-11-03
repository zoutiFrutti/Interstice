# INTERSTICE C03 — INDEX CENTRAL DES TRANSMISSIONS

**Point d’entrée de La Relieuse.** Relevé documentaire du 3 novembre 2026, **branche candidate de la PR #132**. Les contenus référencés ne sont ni fusionnés ni publiés. Ce document n’atteste pas l'ouverture automatique des conversations.

## À lire en premier

- [Registre collectif JSON](./orchestratrice/registre_collectif_c03.json), source structurée et datée des missions, rôles, preuves et relevés SHA.
- [Audit de la messagerie C10 à C18](./orchestratrice/01_AUDIT_MESSAGERIE.md) : ce qui fonctionne, ce qui est simulé et le risque P0 du pont C12.
- [Contrat de dépôt des rapports](./orchestratrice/02_CONTRAT_RAPPORTS.md) : preuve, corrections, objections, décisions, états indépendants.
- [Matrice des dépendances](./orchestratrice/03_DEPENDANCES.md) : interfaces entre ateliers et contradictions encore ouvertes.
- [Transmission de L'Orchestratrice](./orchestratrice/05_TRANSMISSION_RELIEUSE.md) : statuts, tests, réserves et prochaines décisions.
- [PR #161 WORK-C02-01](https://github.com/zoutiFrutti/Interstice/pull/161), HEAD 0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6 : 219 objets candidats, 19 relations, 30 réserves WORK et sept Parcours.

## Règle stricte des statuts

Les sept dimensions **préparée, transmise, reçue, commencée, livrée, contrôlée et validée** sont indépendantes. **Inconnu** signifie absence de preuve récupérée pendant cette passe, pas absence de travail. Les anciennes productions peuvent servir d'antériorité, jamais de preuve de réception des nouvelles missions.

## Registre des 12 missions C03 (11 missions des ateliers + Orchestratrice)

| Mission | Atelier(s) | P | Envoi | Réception | Livraison C03 courante | Dépendances | Blocage / prochaine action |
|---|---|---|---|---|---|---|---|
| C03-LEC-03 | lectrice | P0 | non attesté | non attestée | non attestée | C03-ANA-03, C03-PEN-03, C03-ARC-03, C03-CAT-03, C03-JUR-03, C03-MED-03 | Confronter 35 objections C02 annoncées aux 30 WORK; versions exactes à retrouver ; suite : Relever objections, décisions, sources et SHA sans les fermer |
| C03-ANA-03 | anarchitecte | P0 | non attesté | non attestée | non attestée | C03-LEC-03, C03-PEN-03, C03-MED-03, C03-TECH-02 | 219 objets et 19 relations candidats, types et identifiants à qualifier ; suite : Contrôler 4 portes, 7 PAR, alias, dépendances et relations typées |
| C03-PEN-03 | penseuse | P1 | non attesté | non attestée | non attestée | C03-ANA-03, C03-LEC-03 | Confusion possible comparaison/filiation, pouvoir informel, cas limites ; suite : Soumettre désaccords conceptuels avec identifiants précis |
| C03-ARC-03 | archeologue | P0 | non attesté | non attestée | non attestée | C03-LEC-03, C03-ANA-03, C03-HIST-04 | AFF5721, MP159, SHD Ly22 et originaux non collationnés ; suite : Réutiliser C03-ARC-02 PR #162, conserver WORK-COM ouverts |
| C03-CAT-03 | anarchiviste-catalan | P0 | non attesté | non attestée | non attestée | C03-LEC-03, C03-ANA-03 | Application locale et archives IISG non vérifiées ; suite : Réutiliser C03-CAT-02, éviter de dupliquer les six versions CAT |
| C03-JUR-03 | juriste | P0 | non attesté | non attestée | non attestée | C03-LEC-03, C03-TECH-02 | PAR-005 non publiable ; droits / données / santé ; suite : Documenter avis par SHA et conserver blocage pratique |
| C03-HIST-04 | biographe, anarchiviste-communs | P1 | non attesté | non attestée | non attestée | C03-ARC-03, C03-LEC-03, C03-PEN-03 | BIO-009/019/021/022 et Marmite : identités, rémunérations, continuité ; suite : Confronter WORK-COM-06/07 aux sources primaires sans fusion d'identités |
| C03-MED-03 | mediatheque | P1 | non attesté | non attestée | non attestée | C03-LEC-03, C03-ANA-03 | 71 FN, FN-018 et alias/éditions/droits ; 219 objets du registre ; suite : Rapprocher inventaires et sélection des 7 PAR sans supprimer ID |
| C03-ZAP-03 | anarchiviste-zapatiste | P1 | non attesté | non attestée | non attestée | C03-LEC-03, C03-PEN-03 | Sources du mouvement et études indépendantes à distinguer ; suite : Reprendre ZAP-C10-001, traductions et WORK-ZAP-01/02/03 |
| C03-TIS-03 | tisseuse | P1 | non attesté | non attestée | non attestée | C03-ANA-03, C03-JUR-03, C03-MED-03 | Territoires/relations R0-R3, partenariats non supposés ; suite : Relier fiches TIS existantes, sans coordonnées sensibles |
| C03-TECH-02 | developpeuse, graphiste | P0 | non attesté | non attestée | non attestée | C03-ANA-03, C03-LEC-03, C03-JUR-03, C03-MED-03 | R6 5 destinations vs V2 4 portes ; QA tactile et lecteurs d'écran manquante ; suite : Revoir modules PR #161, URL historiques, logos et rendu non public |

| C03-ORC-03 | orchestratrice | P0 | préparée | réception non attestée | livrable candidat vérifié PR #132 | C03-LEC-03, C03-ANA-03, C03-TECH-02 | Synthèse documentaire produite, mais visas des autres ateliers non démontrés ; suite : contrôle par La Relieuse |

## Tableau des ateliers, derniers rapports repérés

| Rôle du dépôt | Mission(s) C03 | Dernière preuve repérée dans la passe | Branche et PR | Réserves |
|---|---|---|---|---|
| relieuse | Aucune attribution C03 dans ce registre | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| orchestratrice | C03-ORC-03 | [EV-ORC-03](./orchestratrice/05_TRANSMISSION_RELIEUSE.md) | feature/integration-c18-orchestratrice-suivi-20261102 · PR #132 | Livraison de l'Orchestratrice attestée par fichier et SHA, réception/validation par La Relieuse inconnues |
| lectrice | C03-LEC-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| anarchitecte | C03-ANA-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| penseuse | C03-PEN-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| developpeuse | C03-TECH-02 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| graphiste | C03-TECH-02 | [EV-TECH-GRA](https://github.com/zoutiFrutti/Interstice/pull/161) | work/c02-v2-reconciliation-20261103 · PR #161 | Retour technique Graphiste publié en commentaire PR #161 ; absence de visa conjoint de Développeuse |
| juriste | C03-JUR-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| archeologue | C03-ARC-03 | [EV-ARC-02](https://github.com/zoutiFrutti/Interstice/blob/research/archeologue-c03-par001-20261103/coordination/c03/archeologue/C03_ARC_02_OBJECTIONS_PAR001.md) | research/archeologue-c03-par001-20261103 · PR #162 | Antériorité C03-ARC-02, non preuve d'exécution de C03-ARC-03 |
| anarchiviste-communs | C03-HIST-04 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| biographe | C03-HIST-04 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| anarchiviste-catalan | C03-CAT-03 | [EV-CAT-02](https://github.com/zoutiFrutti/Interstice/blob/recherche/anarchiviste-catalogne-c03-par002-20261103/recherche/catalogne/C03_CAT_PAR002_RECONCILIATION.md) | recherche/anarchiviste-catalogne-c03-par002-20261103 | Antériorité C03-CAT-02, pas une livraison C03-CAT-03 |
| anarchiviste-zapatiste | C03-ZAP-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| mediatheque | C03-MED-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| tisseuse | C03-TIS-03 | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| eclaireuse | Aucune attribution C03 dans ce registre | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| vigie | Aucune attribution C03 dans ce registre | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| reseaux-sociaux | Aucune attribution C03 dans ce registre | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |
| assistant-anarchiviste | Aucune attribution C03 dans ce registre | Non retrouvé dans cette passe | À rapprocher | Aucune réception ou livraison présumée |

## Écarts prioritaires et garde-fous

- **P0 C12** : le workflow actuellement sur main peut tenter un appel à une API si une Issue éligible arrive avec clé et modèle configurés. Le verrou indépendant de la PR #114 n’est pas fusionné. Ne pas ouvrir de nouvelle Issue de test ni activer les secrets sans arbitrage.
- **P0 PAR-005** : avis juridique défavorable et relecture santé manquante, aucune publication.
- **Documentaire** : comparer les 35 objections C02 non récupérées aux 30 réserves WORK, sans les déclarer équivalentes.
- **Historique** : les rapports vérifiés ARC-02 et CAT-02 sont des antériorités, pas la réception de ARC-03 et CAT-03.
- **TECH-02** : retour Graphiste connu sur #161 ; validation conjointe Développeuse non constatée.
- **Doublons** : conserver les alias FN-048/022, FN-057/038 et les anciennes identités ; éviter les doubles missions par objet et périmètre.

## Vérifier les SHA et reconstruire la vue sans Work

Le script Python existant complété ici permet une génération **hors réseau** :

    python3 coordination/agents/index_collectif_c03.py --entree coordination/c03/orchestratrice/registre_collectif_c03.json --sortie index-collectif-c03.md --json index-collectif-c03.json

Les comparaisons de SHA ne sont **pas** des contrôles temps réel. Il faut actualiser les relevés datés depuis GitHub et comparer les blobs. Un SHA différent entraîne le statut À RECONTRÔLER, jamais l'effacement d'une ancienne preuve.

**Aucune modification de main, aucune fusion, aucun agent activé, aucune relance automatique, aucun envoi externe.**
