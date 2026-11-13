# NAV-02-ANA — Correspondance vérifiée des étapes #174 vers #161

Références figées : #174 `01811690ae5dbd8bef4db2100395feea77a55431` et #161 `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`.

## Résultat
Les **29 couples (PAR, step.id)** de `assets/nav-01/graph-data.mjs` correspondent aux 29 étapes du registre `coordination/v2/work-c02-01/data/parcours.json` : mêmes ID et même graphe de `next_step_ids` / `return_step_ids`. Le module #174 **omet toutefois `resource_ids` et `relations`** de #161. Cette omission est volontairement protectrice pour la publication, mais empêche de certifier des traversées documentaires.

| PAR | Étape | Ressources candidates dans #161 (non ouvertes par #174) |
|---|---|---|
| 001 | contexte | wiki-socialismes-communismes-anarchismes-autogestion.html ; FN-045 |
| 001 | decret | ARCH-007 |
| 001 | travail | ARCH-005 ; ASSO-007 ; ASSO-008 |
| 001 | club | COL-003 ; ARCH-006 |
| 001 | personnes | BIO-009 ; BIO-010 ; BIO-012 ; BIO-019 |
| 002 | contexte | wiki-socialismes-communismes-anarchismes-autogestion.html |
| 002 | catalogne | CAT-001 |
| 002 | mai | CAT-006 |
| 002 | comparaison | wiki-decision-collective.html |
| 003 | question | wiki-ecologie-sociale-environnement.html ; ÉCO-001 |
| 003 | histoire | ECO-02 ; ECO-03 ; ECO-04 ; ECO-05 |
| 003 | concepts | ECO-07 ; ECO-08 ; ECO-09 ; ECO-10 |
| 003 | sciences | ECO-16 ; ECO-17 ; ECO-18 |
| 003 | territoires | tis-c8-sctl ; FN-024 |
| 004 | cadre | wiki-decision-collective.html ; wiki-association-collegiale.html |
| 004 | informel | FN-009 ; FN-019 |
| 004 | participation | wiki-handicap-validisme-neurodiversite.html ; wiki-lecture-croisee-travail-soin-pouvoir.html ; FN-058 |
| 004 | experiences | ASSO-008 ; ARCH-005 ; EXP-004 ; EXP-005 |
| 005 | perimetre | DROIT-001 (bloqué) |
| 005 | sources | DROIT-001 (bloqué) |
| 005 | relecture | DROIT-001 (bloqué) |
| 006 | histoires | wiki-feminismes-histoire-egalite.html ; wiki-egalite-genres-inclusivite.html |
| 006 | commune | ASSO-007 ; BIO-010 ; BIO-019 |
| 006 | oeuvres | FN-015 ; FN-016 ; FN-055 ; FN-069 |
| 006 | pouvoir | wiki-lecture-croisee-travail-soin-pouvoir.html ; FN-009 |
| 007 | chronologie | ZAP-C10-001 |
| 007 | autonomie | ZAP-C10-001 |
| 007 | education | ZAP-C10-001 |
| 007 | comparaisons | wiki-decision-collective.html ; wiki-ecologie-sociale-environnement.html |

**Important :** répétition d'un identifiant dans plusieurs étapes ≠ doublon de ressource. Exemple : DROIT-001 sur trois étapes et ZAP-C10-001 sur trois étapes. Les identifiants `ECO-xx` sont distincts du chantier `ÉCO-001`.

## Connexions visuelles non attestées
- `drawPaths()` construit les courbes à partir de la liste des portes de chaque PAR. Ces courbes représentent des **passages éditoriaux** et ne correspondent ni à des relations `WORK-REL-xxx` ni à des affiliations.
- `PAR-004` passe par Entraide, mais aucun service réel n'est attesté par le seul graphe.
- `PAR-005` relie graphiquement Encyclopédie et Entraide ; le code empêche l'ouverture de DROIT-001, et cette barrière doit demeurer.
- Les 19 relations de #161 portent sur des objets documentaires et des comparaisons ; elles ne doivent pas être reconstruites depuis les traits SVG.

## Contrat minimal de raccordement futur
1. Garder #161 comme source de vérité pour les couples `(parcours_id, step_id) -> resource_ids`.
2. Construire un manifeste de publication **séparé et explicitement visé** : `resource_id`, `canonical_url`, `publication_authorized`, `visa_lot_id` et preuve de visa. Ne jamais déduire un visa de l'existence de l'URL.
3. Tant que le visa manque, afficher seulement les étapes et leur statut candidat, sans lien vers les ressources bloquées.
4. Pour les ressources ouvertes, conserver le retour `#parcours/PAR-xxx/step` et l'accès à la porte principale.
5. Tests : comparer automatiquement les 29 clés et transitions entre #174 et #161 ; vérifier que chaque ressource exposée est explicitement autorisée, que `DROIT-001` reste fermée et que les retours fonctionnent.

Aucune modification du prototype, aucune ouverture documentaire ni publication.
