# C03-ANA-03 — Corrections localisées proposées (non appliquées)

Sources : PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` et PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`.

| Priorité | Fichier source à corriger sur sa PR d'origine | Correction exacte attendue |
|---|---|---|
| P0 | `coordination/v2/work-c02-01/data/resources.json` (#161) | Pour `EXP-001`, `EXP-002`, `EXP-004`, `EXP-005` : `primary_door: "carte"` au lieu de `encyclopedie` ; préserver `original_folder: "ASSO"` et IDs |
| P0 | `coordination/v2/work-c02-01/01_ORGANIGRAMME_V2.md` (#161) | Retirer les quatre EXP de `encyclopedie/dossiers_a_preciser` ; les inscrire dans Carte des communs, avec statut candidat |
| P0 | `coordination/v2/work-c02-01/data/relations.json` (#161) | WORK-REL-003 : requalifier association de presse ARCH-006/COL-003 en complément documentaire (ou borner strictement le fait à l'association bibliographique) ; garder source BnF à vérifier |
| P0 | `coordination/v2/work-c02-01/data/relations.json` (#161) | WORK-REL-004 : préserver convocation du 21 mai, indiquer explicitement `tenue_non_etablie`, ne pas ajouter d'événement attesté |
| P0 | `coordination/v2/work-c02-01/data/objections.json` (#161) | Maintenir 30 WORK, ajouter référence à la matrice des 35 C02 dès récupération, sans déclarer équivalence ni effacer les réserves |
| P1 | `coordination/v2/work-c02-01/data/resources.json` (#161) | ÉCO-001 : expliciter A/B/C comme axes documentaires du dossier existant ; ne pas confondre avec les notices `ECO-xx` |
| P1 | `coordination/v2/work-c02-01/data/parcours.json` (#161) | Pour PAR-003 et PAR-004, vérifier les liens EXP après reclassement ; préserver retour à la ressource canonique |
| P1 | `coordination/v2/work-c02-01/data/navigation.json` (#161) | Préserver les routes et fragments ; `parcours.html#entraide` reste une compatibilité provisoire, pas un service opérationnel |
| P1 | `coordination/v2/work-c02-01/schema/v2.schema.json` (#161) | Conserver verrou publication ; ajouter contrôles métiers sur types de preuve, origine, alias et visas par lot sans transformer schéma en autorité de publication |
| P1 | `coordination/c03/orchestratrice/registre_collectif_c03.json` (#132) | Typage des dépendances : `consultation`, `prerequis`, `contradiction`, `approbation` ; ne pas transformer les cycles de consultation en blocages |
| P1 | `coordination/c03/orchestratrice/02_CONTRAT_RAPPORTS.md` (#132) | Ajouter la distinction explicite entre statut de mission et statut de ressource V2, et entre visa documentaire, autorisation de publication, adoption politique |
| P1 | `coordination/c03/INDEX_TRANSMISSIONS.md` (#132) | Lors de la prochaine mise à jour, référencer la présente PR avec SHA exact et état de transmission attesté, sans inventer une réception |

### Contrôles complémentaires requis
- Réexécuter `node coordination/v2/work-c02-01/tools/check.mjs` et tests WORK sur HEAD corrigé.
- Vérifier unicité des ID hors #161, notamment C10/C11 et autres branches ; contrôle réalisé ici seulement dans les 219 ressources.
- Refaire audit HTTP, fragments et navigation intégrée avant toute redirection.
- Réconcilier les 35 objections C02 et les 30 WORK.
- Vérifier titres, éditions, licences, droits et sources originales.
- Aucun changement de `main`, aucune fusion, aucune publication.
