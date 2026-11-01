# Cycle 9 — Tableau d'avancement et dépendances
**Coordination candidate, 1 novembre 2026.** Statut initial, pas de résultats inventés.

| Lot | Responsable principal | Contributeurs / relectures | État | Preuve attendue pour sortie |
|---|---|---|---|---|
| P0-A Sécurité contributions | Développeuse | Juriste | BLOQUÉ prod, correctifs candidats | Scripts et tests en isolement, risques résiduels, rollback, autorisation distincte avant production |
| P0-B Registre & journal | Relieuse | Tous ateliers | EN COURS | Registre versionné et entrée Journal, SHA de preuves |
| P0-C Pages sensibles | Juriste | Lectrice | BLOQUÉ éditorial | Matrice des cinq pages, corrections et avis argumentés |
| P1-A Douze Wiki à corriger | Lectrice | Juriste | CANDIDAT | Diff par page, sources, statut motivé, test de liens |
| P1-B Historiques ARCH-005/COL-003/ASSO-007 | Archéologue | Assistant archiviste, Lectrice | CANDIDAT SOUS RÉSERVE | Originaux/limites, versions, objections, visa humain |
| P1-C Notices FN & droits | Médiathèque | Anarchitecte | CANDIDAT | 71 IDs, 12 sélectionnées, alias, licences et provenance |
| P1-D Assemblage site | Développeuse | Anarchitecte, Graphiste | NON DÉMONTRÉ | HEAD candidat, Node/Chromium, contrôle des 24/44/71, sans merge |
| P1-E Accessibilité | Graphiste | Développeuse | PARTIEL | Clavier/mobile, protocole et essais réels distingués |
| P1-F Biographies | Biographe | Archivistes, Lectrice | À CONFIRMER | BIO-009/012/019, pièces et identités |
| P1-G Zapatisme | Anarchiviste zapatiste | Lectrice, Médiathèque | ERRATUM DÉCLARÉ | Source du 5 novembre 2023, Escuelita, post-2023 |
| P2-A Textes fondateurs | Penseuse | Juriste, Relieuse | CANDIDATS | Concordance V2.6/V0.1/V0.9 et avis Zout par version |
| P2-B Catalogne | Anarchiviste catalan | Archivistes | À CONFIRMER | CAT-001/006 et sources primaires |
| P2-C Enquêtes ÉCL/CIC | Éclaireuse | Juriste | À CONFIRMER | Matrice faits/hypothèses |
| P2-D Territoires TIS-001 | Tisseuse | Médiathèque | À CONFIRMER | Parcours sourcés sans partenariat présumé |
| P2-E Sources communs | Anarchiviste des communs | Assistant archiviste | À CONFIRMER | Cotes, sources, contradictions sans doublons |
| P2-F Communication | Responsable réseaux sociaux | Juriste, Relieuse | VERSION CORRIGÉE SUR BRANCHE | Kit à visa, droits, aucune diffusion |

## Ordonnancement
**Vague A** : P0-A/B/C et recherches documentaires P1 en parallèle.
**Vague B** : P1-D/E après inventaire des corrections, droits et contrat d'intégration ; revue sur SHA unique.
**Vague C** : décisions Zout puis, seulement si expressément autorisé, étapes séparées de production et publication.

**Contrôle de sortie C9** : pas de statut « terminé » sans preuve de test et d'intégration, pas de statut « adopté » sans visa humain explicite. Les PR ne sont pas des validations.
