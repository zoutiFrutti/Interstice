# Cycle 8 — L'Anarchitecte — passes supplémentaires exécutées
**1er novembre 2026. Document candidat sans publication ni décision éditoriale.**

## Passes effectives depuis QA précédente
1. **Synchronisation** : PR #51 HEAD initial `d516424574b6f4d8769a135d6f01949e46aa730c` ; PR #43 HEAD `17caf07dcc82dd2a089ce2deb5691a27d2b8c1e5`. Journal commun relu sur coordination PR #43 : ÉCL-005 corrections audiovisuelles, statut CIC 2026 incertain, rappel Juriste P0 et absence de collectif humain constitué. Pas de duplication des contenus métiers des autres ateliers.
2. **Vérification réelle** : registre source PR #43 blob `f005414fc566cf020e2ac8931f4841e30ffde859`, 44 Drive + 71 FN + 24 Wiki ; ARCH-002/007 accords individuels, `publication_authorized:false`. Le document cycle8 de correspondance avait été complété à **139 entrées exactes** au commit `b9c6831670e049450d90257e1b767215e3af4820`.
3. **Automatisation réellement ajoutée** : `.github/workflows/anarchitecte-cycle8-contract.yml` commit `fdff5dca1749fc376d653dc41f001fb6c8e29c57`, déclencheur push PR #51 et manuel. Exécute Node 22 et `node --test tests/anarchitecte-cycle8-contract.test.mjs`. **GitHub Actions run [41297724715](https://github.com/zoutiFrutti/Interstice/actions/runs/41297724715), succès**, sur le SHA `fdff5dca1749fc376d653dc41f001fb6c8e29c57`.
4. **Correction de couverture** : test `tests/anarchitecte-cycle8-contract.test.mjs` complété au commit `d7b7e3120f901f60d67e9995bc679ee5bb842794`. Il compare désormais chaque clé des 139 lignes à la source canonique, vérifie `publication_authorized:false` et la symétrie des deux paires FN, en plus des 24 routes et ancres, états et sources. **GitHub Actions run [41297775646](https://github.com/zoutiFrutti/Interstice/actions/runs/41297775646), succès**, sur ce SHA.
5. **Lecture seule P0 Supabase Interstice** (contrôle précédent du cycle) : fonctions `submit-proposal`, `submit-resource`, `github-wiki-ingest` actives avec `verify_jwt=false` ; `submit-proposal` possède des contrôles de payload/origine/quota, mais Origin ne suffit pas pour authentifier. `submit_wiki_article` authentifie via `auth.uid()` et limite à 3/24h ; `moderate_proposal` vérifie `is_moderator()`. Conseiller Supabase : 5 warnings de fonctions privileged callable by `authenticated`. **Aucune modification SQL, Edge ou production** ; pas de test actif d'abus sur la production.

## Ce qui est vérifié / ce qui ne l'est pas
| Sujet | Vérifié | Limite |
|---|---|---|
| 139 références, clés, provenance et doublons | Deux runs CI réussis ; dernier au SHA d7b7e3 | Ne valide pas contenus historiques |
| 24 routes Wiki, liens de fichiers, ancres internes/interpages | Test Node sur branche PR #51, CI réussie | Pas HTTP public, liens distants ou JS dynamique |
| Statut des accords archivistiques | ARCH-002 et ARCH-007 selon registre PR #43 | Pas de droits finaux ni publication autorisée |
| Trois parcours critiques | Contrat et candidate technique historique | Pas de validation utilisateur mobile sur HEAD assemblé |
| Sécurité serveur | RLS, SQL et fonctions inspectés en lecture seule | Aucun test positif/négatif réel avec identités contrôlées ; avis P0 reste ouvert |
| Fuites d'informations privées | Risque décrit ; aucun document sensible recopié dans nouveaux fichiers | D'autres branches publiques et artefacts GitHub non audités exhaustivement |

## Blocages non résolubles par L'Anarchitecte seul
- La Relieuse et **Zout** doivent statuer individuellement, sur **chaque version** et ses droits, avant l'index public. Le fait de porter seul Interstice ne crée aucune adoption collective de la V2.6 et des chartes.
- La Développeuse doit vérifier sécurité effective et tests négatifs des endpoints P0 avec environnement approprié, revoir **toutes** les fonctions Edge et droits réels, puis proposer un correctif documenté et réversible si nécessaire. Aucune migration ou désactivation en production automatique.
- Assemblage technique des corrections de La Lectrice, gabarits Graphiste et trois parcours sur un SHA unique, puis tests navigateur 320/390/1280, clavier, retour aux sources, 404 et index publics. Le contrat de PR #51 ne réalise pas l'assemblage des branches concurrentes.

**Bilan : intégrité documentaire technique du lot PR #51 testée avec succès et surveillée par CI ; P0 serveur, droits, publication et validation humaine toujours bloqués.**
