# C06-ARC-01 — Réconciliation finale des preuves Commune

**2026-11-04 — Passe unique, P2.** Références vérifiées : PR #154, #162, #184, PAR-001 de #161. Candidat documentaire uniquement ; aucune fusion ni publication.

## Contrôle des versions et de la Lectrice

- PR #184, branche `review/c05-lectrice-01-corrections-20261104` : `PAR-001.md` blob `777e88c183c2291cda51ba2eb33cebb53fc5cb99` ; `PAR-004.md` blob `3ab39277f72422b6333bb7bd21ade45137d13961` ; `PAR-006.md` blob `9055c8d31dfd953486f30f8daba746201b90e966` ; `data/relations.json` blob `b59d03362798947ee7e31202b0466848bf5627e7` ; bilan Lectrice `C05_LEC_01_DECISION_ET_CORRECTIONS.md` blob `e7270dbea73d39f3f71c1cd8037b4366c1ee4d5c`.
- PR #162 : complément probatoire `COMPLEMENT_PREUVES.md` blob `ba6068c4f467e466dc34bb2d1be10d598973a98a` ; inventaire PR #154 `C05_ARC_01_INVENTAIRE_PARCOURS_COMMUNE.md` blob `bee5702c28344b91c0d35a80a70a04121b057435`.
- La décision de Zout déjà consignée dans #184 : afficher **sept Parcours candidats avec statuts explicites**, PAR-005 bloqué, aucune ressource non visée ouverte. **Ne pas reconsulter Zout** sur ce choix.

## Matrice des objections, à la date de cette passe

| Objection | Acquis étayé | Réserve qui subsiste | Correction / compatibilité #184 |
|---|---|---|---|
| WORK-COM-01 | Notice Carnavalet AFF5721 : convocation datée 20 mai pour le 21 mai, 13 h, mairie IVe | Séance tenue, PV et présences non établis ; original non examiné | #184 indique explicitement convocation ≠ réunion : **compatible** |
| WORK-COM-02 | Décret 16 avril, projet Louvre 3 mai et application sont trois objets distincts | Aucune preuve primaire nouvelle d'élections, paies, comptes, mise en œuvre | #184 préserve comparaison, pas filiation : **compatible** |
| WORK-COM-03 | Contradiction de date/visa Frankel pour BHVP MP159 recensée | Fac-similé MP159, affiche 363 et PV de désignation non collationnés | Ne pas corriger silencieusement : **compatible** |
| WORK-COM-04 | SHD Ly22 identifié comme piste, non comme pièce lue ; chiffres contradictoires écartés | Folios, procès-verbaux, chiffres et identité de « citoyenne André » inconnus | #184 maintient réserve : **compatible** |
| WORK-COM-05 | BnF cb328445424 : quatre numéros du *Prolétaire* catalogués, 10–24 mai | Pages, signatures et rapports institutionnels au club non collationnés | REL-003 reclassée `complement_documentaire` : **compatible** |
| WORK-COM-06 | La Marmite 1868 ≠ société de 1894 par simple dénomination | Comptes, rémunérations et filiation non démontrés | REL-006 comparaison sans filiation : **compatible** |
| WORK-COM-07 | Noms sur documents et biographies sont des objets différents | BIO-019/021 bloquées ; BIO-009/022 incertaines | REL-005 reclassée `complement_documentaire` : **compatible** |

## Relations et dates : corrections démontrées

1. REL-003 ARCH-006→COL-003 : la notice BnF atteste le périodique, **pas** une représentation unanime du club ; #184 corrige correctement le type et l'étendue de preuve.
2. REL-004 ASSO-007→ARCH-002 : **identification AFF5721 non recollationnée** ; #184 l'indique. À ne pas exposer comme équivalence attestée ; garder en interne, candidate.
3. REL-005 BIO-019→ASSO-007 : identité nominative incertaine, **pas une controverse prouvée** ; #184 corrige correctement.
4. REL-006 ASSO-008→ASSO-007 : comparaison La Marmite 1868 / Union des femmes 1871, **pas de filiation institutionnelle** ; #184 corrige correctement.
5. PAR-001 conserve les étapes « décret » / « travail » / « club » / « personnes » avec statut partiel et publication interdite. PAR-004 compare les prescriptions aux expériences sans les confondre ; PAR-006 ne reconstruit pas de biographies incertaines. **Pas de correction concurrente nécessaire.**

## Sources, statut et limites

- Carnavalet AFF5721 : https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/republique-francaise-ndeg-373-liberte-egalite-fraternite-ndeg-373-commune ; transcription de notice antérieurement contrôlée, **original non consulté**.
- BnF cb328445424 : https://catalogue.bnf.fr/ark:/12148/cb328445424 ; notice bibliographique contrôlée, **numéros non collationnés**.
- BHVP MP159 : https://bibliotheques-specialisees.paris.fr/ark:/73873/pf0001490635 ; **original non consulté**.
- SHD Ly22 : cote signalée, **folios non identifiés**.
- Courriels BnF SINDBAD et SHD : métadonnées Gmail retrouvées ; lecture intégrale refusée, **aucune conclusion archivistique tirée du contenu absent**. Voir `SUITE_COURRIERS_BNF_SHD_20261104.md`.

**Tests effectués :** relecture GitHub des cinq fichiers de #184 et des références #154/#162, contrôle manuel de cohérence des 19 relations et des fiches PAR-001/004/006, vérification des statuts. **Non effectués :** consultation de nouveaux originaux, collation physique, tests CI, vérification de licence et déploiement.

**Verdict :** corrections éditoriales de #184 **compatibles**, sept objections historiques conservées à leur juste niveau ; aucune objection probatoire globale levée. Aucune décision éditoriale nouvelle indispensable : **pas de questionnaire**. Les statuts déjà choisis par Zout s'appliquent. Prochaine action documentaire : obtenir les originaux/PV, pas demander un vote sur les faits. Aucun changement sur la branche de #184 ou sur `main`.
