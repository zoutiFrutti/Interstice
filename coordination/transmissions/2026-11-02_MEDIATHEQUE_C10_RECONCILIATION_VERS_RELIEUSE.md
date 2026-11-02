# C10 — Réconciliation Médiathèque vers La Relieuse — 2026-11-02
**CANDIDAT — pas de fusion, publication, adoption ou hébergement.**

## Courrier reçu et état repris
Courrier `C10-REL-20261102-RECONCILIATION-MEDIATHEQUE.md` sur `coordination/c10-relieuse-reconciliation-20261102`, blob `2b3429ac90ab66f3eca932d335c0a1fd6327dcc1`.
Accusé : `coordination/messagerie/accuses/mediatheque_C10_REL_RECONCILIATION_2026-11-02.md`, commit `e9fbeb7e5a88c72216ecb52f289d56299ef93421`.

## Inventaires contrôlés sur la branche d'atelier
1. **Matrice FN** : `coordination/mediatheque/cycle10_matrice_71_sources_candidats_2026-11-01.json` sur `coordination/mediatheque-cycle10-messagerie-20261101` (également héritée dans la présente branche). Commit d'édition `45c72d215fd1b1dad794f322d2d44341db4a9de2` ; blob **`57ba0f38c37fa8027cf30ae28c921fae5ba0dad4`**. Test C10 du 02/11 : JSON relu et analysé, **71 entrées / 71 IDs uniques**, aucun ID FN-001..FN-071 absent ; **70 URL extraites** et **FN-018 sans URL ni notice structurée** ; **12 ressources sélectionnées**, toutes avec un état de page ouverte enregistré lors des passes précédentes ; **59 notices non sélectionnées** dont URL non retestée. L'état des 12 est une preuve d'ouverture documentaire historique, pas un nouveau test réseau du 02/11.
2. **Sélection** : IDs FN-001, FN-002, FN-007, FN-016, FN-017, FN-019, FN-022, FN-024, FN-038, FN-040, FN-052, FN-068. Métadonnées `selected_metadata` héritées de C9 ; pas de visa de droits. **16 notices** n'ont pas de champ de droits extrait automatiquement : FN-010, 011, 014, 015, 016, 017, 018, 019, 020, 022, 023, 030, 046, 048, 065, 067. Cela **ne prouve pas** absence de licence dans les sources. Les mentions d'auteur et d'édition proviennent du catalogue, non d'une vérification primaire systématique.
3. **Alias** : `FN-048 -> FN-022` (*La Commune*, Louise Michel), `FN-057 -> FN-038` (*Principes féministes de l'internet 2.0*, APC). Deux correspondances JSON contrôlées. **Conserver les quatre IDs**, ne pas créer deux fiches publiques identiques ; revoir les éditions/langues et crédits avant dédoublonnage éditorial.
4. **Sources zapatistes** : `coordination/mediatheque/cycle10_zap_sources_original_traductions_2026-11-01.json`, commit `29043d80b7dccf6fc6d35f6cc876982d89d4793a`, blob **`b754e59baf738353d48ac5c362322e08542e8eda`** ; test JSON : **9 références / 9 IDs distincts**. Sources reprises des PR #78/#82, originales et traductions séparées, aucune validation des droits de reproduction. Ce registre est séparé de la série FN, **aucun FN ajouté**.
5. **Transmission antérieure** : `coordination/transmissions/2026-11-01_MEDIATHEQUE_RETOUR_COURRIER_SUITE_RELIEUSE.md`, commit `e7aa6309de1b3ac8a0d2e4783964470f61fb20a4`, blob `933fbefd3f20a073bc7fc01a7a06007d12c7b246`.

## Dépendances vers L'Anarchitecte — Porte B
- **Prêt comme schéma candidat** : 71 identifiants stables, booléen `selected_12`, deux alias, champs de provenance, d'URL, de consultation et `hosting_allowed=false`. Un assemblage **non publiant** peut être testé sans attendre un audit intégral.
- **Non prêt pour une migration éditoriale définitive** : FN-018 à retrouver ; vérifier URL et métadonnées des 59 non sélectionnées ; vérifier licences et droits de traduction/illustration/projection ; résoudre les statuts des notices selon la Lectrice et la Juriste.
- **Ne pas lever la porte B** : l'assemblage 24/44/71 dépend aussi des inventaires Wiki/Bibliothèque et des statuts d'autres ateliers, non contrôlés ici. La Relieuse doit rapprocher les branches, et L'Anarchitecte doit vérifier les contraintes de son schéma.
- **Wikipédia** : seules les comparaisons thématiques antérieures Espagne 1936 / zapatisme sont documentées ; pas de nouvelle revue exhaustive des 71 sujets ni des historiques Wikipédia le 02/11. Pas d'article généraliste dupliqué sans plus-value vérifiable.

## Statuts par objectif
| Objectif | Statut | Vérification / suite |
|---|---|---|
| 71 notices, URL, auteurs, éditions, droits | **À POURSUIVRE** | JSON 71/71 unique ; FN-018 lacunaire, 59 URL non retestées, droits et éditions non audités intégralement |
| Douze ressources | **À POURSUIVRE** | 12 IDs présents, 12 états d'ouverture hérités ; audit juridique et éditions encore requis |
| Deux paires d'alias | **TERMINÉ (mapping technique candidat uniquement)** | Deux associations exactes dans JSON ; dédoublonnage éditorial reste soumis à contrôle |
| Transmettre dépendances à Anarchitecte via Relieuse | **TERMINÉ pour dépôt de transmission** | Présent rapport GitHub ; réception et validation par les destinataires non attestées |
| Autorisation d'hébergement/reproduction | **DÉCISION HUMAINE** | Aucun hébergement, avis Juriste et accord explicite Zout nécessaires |

**Aucune CI, migration, vérification HTTP des 59 autres URL, lecture intégrale ni comparaison Wikipédia exhaustive exécutée durant cette passe.** Ne pas les inscrire comme tests réussis.
