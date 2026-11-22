# C03-ANA-03 — Relations contestées et limites des preuves

Référence : `coordination/v2/work-c02-01/data/relations.json` dans PR #161 au SHA `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`.

19 relations : WORK-REL-001 à 014, 101, 102, 105, 106, 107. Identifiants distincts ; extrémités résolues. Une référence `source_refs` non vide ne constitue pas à elle seule une preuve primaire.

| Relation | Type WORK | Avis précis | Correction proposée |
|---|---|---|---|
| WORK-REL-001 ARCH-005 / ARCH-007 | comparaison | Comparaison de projets d'organisation, sans équivalence | Conserver comparaison et absence de filiation |
| WORK-REL-002 ARCH-005 / ASSO-007 | comparaison | Pas de coopération démontrée | Conserver comparaison |
| WORK-REL-003 ARCH-006 / COL-003 | fait_historique_atteste | Notice BnF rapportée : association bibliographique, pas mandat de chaque article | Remplacer par `complement_documentaire` ou réserver `fait_historique_atteste` à l'association bibliographique explicitement bornée ; conserver `evidence_scope` |
| WORK-REL-004 ASSO-007 / ARCH-002 | complement_documentaire | Affiche n°373 : convocation du 21 mai, pas preuve de tenue | Conserver ; expliciter `event_status: annonce_non_tenue_attestee` seulement comme vocabulaire à définir, préférer `tenue_non_etablie` |
| WORK-REL-005 BIO-019 / ASSO-007 | controverse | Identité et nom imprimé disputés | Conserver controverse ; ne fusionner aucune identité |
| WORK-REL-006 ASSO-008 / ASSO-007 | comparaison | Continuité biographique possible, aucune continuité juridique démontrée | Conserver comparaison |
| WORK-REL-007 CAT-001 / CAT-006 | complement_documentaire | Dossiers non récupérés en versions intégrales | Conserver candidat non attesté |
| WORK-REL-008 ÉCO-001 / page écologie | complement_documentaire | Intégration éditoriale proposée | Conserver ; préciser trois axes A/B/C sans les inventer comme ressources approuvées |
| WORK-REL-009/010/011 | lien conceptuel ou complément | Notices FN / Wiki : portée liée aux éditions et textes non entièrement revérifiés | Conserver candidat ; source précise requise |
| WORK-REL-012/013 | comparaison | Zapatisme, décision collective, écologie : aucune filiation | Conserver comparaison |
| WORK-REL-101/102/105/106/107 | comparaison ou complément | Sources Tisseuse ; les niveaux historiques R1/R2 ne sont pas un visa de coopération | Conserver `cooperation_interstice: false` ; source et date à vérifier |
| WORK-REL-014 | Voir source JSON exacte | Relation supplémentaire du registre, non attestée par C02 seule | Contrôle documentaire ciblé avant visa |

### Règles
1. `fait_historique_atteste` ne doit pas signifier « fiche de catalogue présente » lorsque la proposition porte sur un événement ou un mandat.
2. `comparaison` est une construction éditoriale, pas une filiation.
3. `complement_documentaire` signifie rapprochement de pièces, pas identité de contenu ni approbation.
4. Conserver `source_refs`, `proof`, `state`, `evidence_scope`, `publication_authorized: false`.
5. Objections WORK et C02 restent ouvertes tant que sources exactes, originaux et arbitrages ne sont pas réunis.
