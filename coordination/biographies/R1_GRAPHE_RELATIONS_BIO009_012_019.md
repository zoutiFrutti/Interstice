# R1 — Graphe documentaire biographique, couche candidate
2 novembre 2026. **Statut : candidat d'assemblage, aucune publication ni validation de Zout.** Règle : RELIER/COMPLÉTER/CRÉER ; aucun nouvel identifiant BIO créé.

## Objets sources réutilisés (pas trois nouveaux articles)
- BIO-009 : `coordination/biographies/candidats_cycle10/BIO-009-Nathalie-Le-Mel.md`, blob `2d7fb44649ee78f41fb1e3474d6a59d39bb28d0c`, commit création `ca3b0b76b183d623613e5bb9f71b245eac70c3d3`.
- BIO-012 : `coordination/biographies/candidats_cycle10/BIO-012-Eugene-Varlin.md`, blob `710874d9d04d64b5c26c6a7435c8025bf32758c7`, commit `479fb5bdbfe2087721a282be7508b0dcb0659d60`.
- BIO-019 : `coordination/biographies/candidats_cycle10/BIO-019-Blanche-Lefebvre.md`, blob `d5ca3fc167dcc8632ad2c95539e466fa4fb9ddac`, commit `2c645a3884bf6ae95983999e0cbc4db125180e69`. **Note de désambiguïsation, pas identité unifiée.**
- ASSO-008 La Marmite, ASSO-007 Union des femmes et ARCH-002 AFF5721 : IDs déjà présents dans l'inventaire historique, références de relation à vérifier sur leurs branches propres, **pas une affirmation d'intégration sur `main`**.

## Relations candidates à fournir à L'Anarchitecte via La Relieuse
| from_id | to_id | Type candidat | Appui documentaire | État de preuve |
|---|---|---|---|---|
| BIO-009 | ASSO-008 | participe_aux_statuts_de | Appel janvier 1868 et statuts 19 janvier, https://macommunedeparis.com/2018/08/01/statuts-de-la-marmite-19-janvier-1868/ | Mention nominative dans transcription de source primaire, original non collationné |
| BIO-012 | ASSO-008 | participe_aux_statuts_de | Même statuts, Eugène distinct de Louis-Benjamin Varlin | Même réserve |
| BIO-009 | BIO-012 | cosignataires_document | Statuts de janvier 1868 | **Ni parenté ni accord politique total inférés** |
| BIO-009 | ASSO-007 | signataire_ou_membre_documente | Affiche Carnavalet AFF5721 du 20 mai 1871 | Vérifier libellé exact, ne pas prouver activité quotidienne |
| BIO-019 | ASSO-007 | signataire_document | « BLANCHE LEFEVRE » dans AFF5721 | Signature ≠ rédaction ni présence à la réunion |
| BIO-019 | ARCH-002 | mention_nominale_sur | Musée Carnavalet AFF5721 | Relation documentaire à l'archive, pas état civil |
| BIO-012 | BIO-009 | collaboration_documentaire | La Marmite, au niveau des signatures | Pas d'attribution précise des tâches |

## Mentions de personnes distinctes, non alias techniques
| Mention | Règle |
|---|---|
| « Nathalie Lemel », « Nathalie Le Mel », née Duval | Variantes rapportées au dossier BIO-009 ; naissance 24/26 août et Brest/Ivry non tranchées ; Brest 1E73 vue 26/115 non lue |
| Louis-Benjamin Varlin | **Pas un alias de BIO-012 Eugène Varlin** |
| Mme Delacour sans prénom | Personne mentionnée dans l'étude de Cordillot, aucune identification civile ou travail individuel étayé par registre du personnel |
| Relieur Appert | **Ne pas assimiler au photographe judiciaire Appert** |
| Blanche Lefebvre, « BLANCHE LEFEVRE » | Variantes de la mention de BIO-019, identité civile incomplète |
| « femme Lefèvre » blanchisseuse | Distincte de Blanche selon Rougerie ; rapprochement proposé à Gorget non démontré |
| Victorine Gorget | Mention séparée, interrogation SHD GR 8 J 119 ; **pas alias de BIO-019** |
| « Lefèvre » masculin dans une transcription de l'interrogatoire | Mention distincte, nom incomplet ; **pas alias de BIO-019** |

## Architecture R1 proposée
`Relation(from_id,to_id,type,evidence_refs,state)` : `state = candidature_documentee`, `state = reserve_source_originale` ou `state = identification_bloquee` comme **valeurs de travail non adoptées**, à traduire dans le contrat officiel par L'Anarchitecte. Les champs de provenance doivent distinguer imprimé d'époque/transcription, commentaire muséal, étude historique et hypothèse. Un lien entre une biographie et une lutte postérieure est un **rapprochement thématique**, jamais une participation historique. Garder chaque relation consultable en mode liste pour la navigation Passages.

## Droits et limites
Crédits : travaux de synthèse originaux de La Biographe, sources archivistiques/historiographiques attribuées. Pas de portrait ni fac-similé utilisé. La preuve d'une signature ne suffit pas à valider des activités matérielles ; les originaux de Brest, SHD et La Marmite restent à lire. Ce fichier ne remplace pas une matrice 24/44/71, n'ouvre pas de partenariat, et ne change aucun statut éditorial sans décision humaine.
