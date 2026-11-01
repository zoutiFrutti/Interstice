# L’Anarchitecte · Cycle 10 · Contrat vérifié 24 / 44 / 71
**1er novembre 2026 · PR #51 relue, branche candidate séparée. Aucun merge, aucune publication, aucune mutation de production.**

## Sources exactes
- Protocole d'ouverture C10 : `coordination/cycle10/PROTOCOLE_REGISTRE_OUVERTURE_C10_2026-11-01.md`, branche `coordination/cycle10-ouverture-20261101`.
- PR #51 au départ : `90c9928959b266a4b6641b37b5f909d7711771fa`. Schéma C9 blob `e019f20029462312dbb782625e71aff5259d7a3f`. Mapping C8 blob `0f8ad7c1cf5b02904233ea28c3643ee07d6df433`.
- Registre source PR #43, blob `f005414fc566cf020e2ac8931f4841e30ffde859` (44 fiches Drive, 71 FN, 24 Wiki). Journal commun consulté sur PR #43 blob `dd65b0be79a32194dcf4894c5747cb5cc3b64568`.
- Le protocole C10 indique que les dernières corrections de La Lectrice et de La Médiathèque sont des travaux de branches distinctes, non des permissions de publication. Ne jamais traiter le tri pré-sortie comme verdict contemporain universel.

## Passe 1 · Comparaison et construction
- Nouveau `coordination/cycle10/anarchitecte/MAPPING_C10_139.json` : 139 correspondances (24/44/71), clé stable, type, provenance, état, droits à vérifier, statut d'autorisation, alias non activés. Première création commit `cbfe9a7b7fecf4a68041c49b9df1f478a61b5dec`.
- Nouveau `coordination/cycle10/anarchitecte/SCHEMA_C10_V04.json` : v0.4, extension non destructive de v0.3 ; migration sans exécution et rollback par maintien des anciennes routes. Création commit `f590caf0836a9ca2aa08ee755f183116ce55075e`.
- Pas d'import des contenus privés Drive ni de créations de pages publiques. Le champ `rights_state` du mapping est volontairement conservateur, **non une certification individuelle des licences**. Le registre reste autorité pour les états éditoriaux.
- Les deux paires `FN-022/FN-048` et `FN-038/FN-057` gardent leurs quatre identifiants ; les alias restent `null` jusqu'à arbitrage documentaire. Ne pas confondre recoupement d'URL et duplication démontrée.

## Passe 2 · Échec réel et correction
- Test `tests/anarchitecte-cycle10-mapping.test.mjs`, commit `bdec3990518e035b7d2d79020d903679caae4082`, intégré au workflow de branche au commit `fd66b37b6aa9e430162ef24cdb7ae0aa1fb22976`.
- Première exécution [run 41306261665](https://github.com/zoutiFrutti/Interstice/actions/runs/41306261665) **FAIL** : 13 tests sur 14 passés. Divergence réelle `ARCH-002: review`, ancien `INVENTORIE_NON_REL_U` vs registre `RELU_SOURCES_RESERVES_ETAPE2_CANDIDAT`.
- Reprise complète des 139 lignes avec synchronisation des états du registre. **13 champs actualisés** : ARCH-002 (review, human_approval, editorial_source_sha), ARCH-003/004/005/006/008 (review), ARCH-007 (review, human_approval, editorial_source_sha), ASSO-007 (review), COL-003 (review). Correction commit `d6fdca261d78ab4a827f30684cb7ce32c4738f7a`, nouveau blob mapping `a02373657a552ebecf600fb54b8b5fe78bdedd69`. **Aucun visa inventé ou modifié** : copie de champs déjà présents dans le registre source.
- Nouvelle exécution [run 41306329734](https://github.com/zoutiFrutti/Interstice/actions/runs/41306329734) **SUCCESS**, SHA exact `d6fdca261d78ab4a827f30684cb7ce32c4738f7a`. Vérifie 139 clés, dossiers source vs types, SHA de référence des 24 pages, alias symétriques non activés, statuts de revue, blocage de publication, et tests C8/C9 des liens et du schéma. Ne certifie ni HTTP public, ni navigateur mobile, ni les licences médias.

## Contrat d'intégration pour La Développeuse
1. **Entrées** : registre source versionné + mapping C10 + schéma C10, en conservant `(corpus, canonical_key)` comme clé logique ; jamais écraser une décision humaine plus récente par une valeur issue d'un registre ancien.
2. **Transformation** : associer chaque ligne à la version exacte de son document ; préserver titres, textes, citations, contradictions, crédits et `source_folder`. Ne rendre aucun `alias_of` effectif avant validation de La Médiathèque et de Zout.
3. **Publication** : allowlist refus par défaut, visa Zout sur ID/version exacte **et autorisation de publication distincte**, droits par média/édition confirmés, tests d'accès requis. ARCH-002 et ARCH-007 possèdent un accord individuel enregistré, `publication_authorized:false`.
4. **Navigation** : réutiliser `wiki.html`, `bibliotheque.html`, les 24 chemins Wiki et les composants déjà disponibles. Un `related` non public demeure non cliquable. Préserver les routes, ancrages, retours aux sources ; aucune URL fictive.
5. **Migration candidate et rollback** : générer de nouveaux fichiers exclusivement sur branche de travail et les comparer ; revenir à l'index HTML/JS précédent sans suppression d'IDs ni DDL. **Aucune migration SQL, aucune nouvelle base.**
6. **QA sur assemblage HEAD réel** : test Node présent + tests Chromium/mobile/clavier, liens externes, refus d'accès, artefacts et index sans brouillons sensibles. Le P0 serveur et la sécurité effective des Edge/RPC sont sous responsabilité technique de La Développeuse ; aucun contrôle de rôle en production exécuté ici.

## Limites et classement
- **Objectif 1 : TERMINÉ pour la confrontation du registre source et des 139 identifiants.** Les travaux de correction éditoriale ultérieurs sur d'autres branches restent à assembler par leurs responsables, pas à absorber de force.
- **Objectif 2 : TERMINÉ** : table à 139 entrées, provenance, statuts et alias non destructifs, correction de treize champs prouvée par test.
- **Objectif 3 : TERMINÉ pour le contrat d'intégration et les tests de cohérence**, CI sur SHA exact ; assemblage et autorisation de publication **BLOQUÉS** hors périmètre de ce contrat.
- **DÉCISION HUMAINE** : choix de versions publiables et droits ; éventuel arbitrage FN ; accord de modification de production.
- Rien ici ne représente une adoption collective : Zout est actuellement seul porteur humain et les ateliers IA ne décident pas.

**Fichiers créés ou modifiés uniquement sur `atelier/anarchitecte-cycle10-20261101`.**
