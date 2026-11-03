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

## Tableau des ateliers : dernière pièce identifiée dans cette passe

**Le relevé couvre les 19 rôles.** Certaines pièces datent de C10, R1 ou C05 ; elles ne valent pas livraison des missions C03 en cours.

| Rôle | Mission(s) C03 | Pièce retrouvée | Branche / PR | Commit de relevé | Blob (complet dans JSON) | État |
|---|---|---|---|---|---|---|
| relieuse | Rôle historique sans mission C03 attribuée | [2026-11-01_RELIEUSE_CYCLE7_RECONCILIATION_INITIALE.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-11-01_RELIEUSE_CYCLE7_RECONCILIATION_INITIALE.md) | main | 7344591fa7f0 | 6a2f9fac05db | Document historique, réception C03 inconnue |
| orchestratrice | C03-ORC-03 | [05_TRANSMISSION_RELIEUSE.md](https://github.com/zoutiFrutti/Interstice/blob/feature/integration-c18-orchestratrice-suivi-20261102/coordination/c03/orchestratrice/05_TRANSMISSION_RELIEUSE.md) | feature/integration-c18-orchestratrice-suivi-20261102 · #132 | 6fec697d47b5 | 4fbe39e79090 | Livrable Orchestratrice constaté, réception inconnue |
| lectrice | C03-LEC-03 | [2026-11-03_LECTRICE_R6_AVIS_INDEPENDANT_NAVIGATION.md](https://github.com/zoutiFrutti/Interstice/blob/atelier-lectrice/r6-controle-navigation-20261103/coordination/transmissions/2026-11-03_LECTRICE_R6_AVIS_INDEPENDANT_NAVIGATION.md) | atelier-lectrice/r6-controle-navigation-20261103 | 9e881a09669f | 96786f9a5f1c | Document historique, réception C03 inconnue |
| anarchitecte | C03-ANA-03 | [ANARCHITECTE_REVUE_V0_018B_2026-10-31.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/ANARCHITECTE_REVUE_V0_018B_2026-10-31.md) | main | 7344591fa7f0 | 7cf9f4bf8696 | Document historique, réception C03 inconnue |
| penseuse | C03-PEN-03 | [2026-11-01_PENSEUSE_CYCLE8_RELIEUSE_CONTROLES_EFFECTIFS.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-11-01_PENSEUSE_CYCLE8_RELIEUSE_CONTROLES_EFFECTIFS.md) | main | 7344591fa7f0 | 2c85bc526c6b | Document historique, réception C03 inconnue |
| developpeuse | C03-TECH-02 | [2026-11-03_DEVELOPPEUSE_R6_INT01_RECONCILIATION_DEPLOIEMENT.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-11-03_DEVELOPPEUSE_R6_INT01_RECONCILIATION_DEPLOIEMENT.md) | main | 7344591fa7f0 | db660a706678 | Document historique, réception C03 inconnue |
| graphiste | C03-TECH-02 | [Commentaire PR #161](https://github.com/zoutiFrutti/Interstice/pull/161) | work/c02-v2-reconciliation-20261103 · #161 | 0b5fb49b612b | commentaire | Antériorité ou retour partiel, nouvelle mission non attestée |
| juriste | C03-JUR-03 | [2026-10-31_JURISTE_VERS_RELIEUSE_LECTRICE_DROITS_ECOLOGIQUES.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_JURISTE_VERS_RELIEUSE_LECTRICE_DROITS_ECOLOGIQUES.md) | main | 7344591fa7f0 | 2df0162aa851 | Document historique, réception C03 inconnue |
| archeologue | C03-ARC-03 | [C03_ARC_02_OBJECTIONS_PAR001.md](https://github.com/zoutiFrutti/Interstice/blob/research/archeologue-c03-par001-20261103/coordination/c03/archeologue/C03_ARC_02_OBJECTIONS_PAR001.md) | research/archeologue-c03-par001-20261103 · #162 | 2e4a70615b35 | fa109c97909e | Antériorité ou retour partiel, nouvelle mission non attestée |
| anarchiviste-communs | C03-HIST-04 | [2026-10-30_ANARCHIVISTE_VERS_RELIEUR_REPRISE_HISTORIQUE_PARTIELLE.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_ANARCHIVISTE_VERS_RELIEUR_REPRISE_HISTORIQUE_PARTIELLE.md) | main | 7344591fa7f0 | b6cdf98f51b7 | Document historique, réception C03 inconnue |
| biographe | C03-HIST-04 | [2026-11-02_LES_VOIX_DE_L_OMBRE_BIOGRAPHE_P2.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/propositions/2026-11-02_LES_VOIX_DE_L_OMBRE_BIOGRAPHE_P2.md) | main | 7344591fa7f0 | 01381f793c3f | Document historique, réception C03 inconnue |
| anarchiviste-catalan | C03-CAT-03 | [C03_CAT_PAR002_RECONCILIATION.md](https://github.com/zoutiFrutti/Interstice/blob/recherche/anarchiviste-catalogne-c03-par002-20261103/recherche/catalogne/C03_CAT_PAR002_RECONCILIATION.md) | recherche/anarchiviste-catalogne-c03-par002-20261103 | 2ed930219fa8 | 576657bebe13 | Antériorité ou retour partiel, nouvelle mission non attestée |
| anarchiviste-zapatiste | C03-ZAP-03 | [2026-11-02_ZAP_R1_RELIEUSE.md](https://github.com/zoutiFrutti/Interstice/blob/research/zapatiste-r1-20261102/coordination/transmissions/2026-11-02_ZAP_R1_RELIEUSE.md) | research/zapatiste-r1-20261102 | f27aedea5d4f | 22990e710b71 | Document historique, réception C03 inconnue |
| mediatheque | C03-MED-03 | [2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md) | main | 7344591fa7f0 | f66e7f91c8fa | Document historique, réception C03 inconnue |
| tisseuse | C03-TIS-03 | [2026-10-31_TISSEUSE_ECO_TIS_001_INITIATIVES_ET_CAS.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_TISSEUSE_ECO_TIS_001_INITIATIVES_ET_CAS.md) | main | 7344591fa7f0 | 6d1ef709cff7 | Document historique, réception C03 inconnue |
| eclaireuse | Rôle historique sans mission C03 attribuée | [2026-11-03_ECLAIREUSE_C05_RELIEUSE.md](https://github.com/zoutiFrutti/Interstice/blob/research/eclaireuse-c05-lacunes-20261103/coordination/transmissions/2026-11-03_ECLAIREUSE_C05_RELIEUSE.md) | research/eclaireuse-c05-lacunes-20261103 | 2c57015ab001 | da5117630c06 | Document historique, réception C03 inconnue |
| vigie | Rôle historique sans mission C03 attribuée | [DECISION_INTEGRATION_2026-11-01.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/ateliers/vigie/DECISION_INTEGRATION_2026-11-01.md) | main | 7344591fa7f0 | 5c421c330d3f | Document historique, réception C03 inconnue |
| reseaux-sociaux | Rôle historique sans mission C03 attribuée | [2026-11-02_RESEAUX_C17_KIT_INTEGRATION_CANDIDAT.md](https://github.com/zoutiFrutti/Interstice/blob/atelier/reseaux-integration-c17-20261102/coordination/transmissions/2026-11-02_RESEAUX_C17_KIT_INTEGRATION_CANDIDAT.md) | atelier/reseaux-integration-c17-20261102 | 7981d1f0297b | a14f9c33fefc | Document historique, réception C03 inconnue |
| assistant-anarchiviste | Rôle historique sans mission C03 attribuée | [2026-10-31_ASSISTANT_ANARCHIVISTE_ICONOGRAPHIE_CLUBS_FEMMES.md](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_ASSISTANT_ANARCHIVISTE_ICONOGRAPHIE_CLUBS_FEMMES.md) | main | 7344591fa7f0 | c96fead0080d | Document historique, réception C03 inconnue |

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
