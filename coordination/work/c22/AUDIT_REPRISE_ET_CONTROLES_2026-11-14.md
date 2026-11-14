# C22 — Audit complet de reprise et contrôle de réception

**14 novembre 2026 · La Relieuse**  
**Mandat :** audit avant modification. **État : candidat interne, aucune publication ni fusion.**

## 1. Relevé Git GitHub avant toute écriture

| Source | HEAD exact consulté | Statut |
| --- | --- | --- |
| `main` | `80ce56adfb9c3bc3275844b2847eac717b433aa5` | inchangé |
| PR #197 / `work/c07-nav7-convergence-candidate-20261113` | `366a33a5bad58e3c3942ec4e71eec8651a9e365d` | candidate unifiée |
| PR #198 / `work/c20-ci-registre-reception-20261113` | `586e91067216a1bd96e34c30ffca5f104fda192b` | correctif du registre en brouillon |
| `work/c21-android-visual-reception-20261114` | `66a8bff9cc37d7377699c33f5d3f5f370ca0593f` | reçu Android humain ; **point de départ de C22** |
| C07 source / `work/c07-reunification-20261104` | `3c21d7d8b4179adff6ce45b71efc9eb9f32bafcd` | référentiel maître candidat |

Comparaisons : C20 comporte cinq commits de plus que #197 ; C21 deux commits au-delà de C20. C21 est à 198 commits devant `main`, 0 derrière à la réception.

**Attention :** ces chiffres mesurent l'historique Git, pas le nombre de fonctionnalités prêtes à publier. Aucune intégration en cascade de #186/#197/#198 ne doit être engagée sans contrôle de recouvrement.

## 2. Architecture et graphisme

- Navigation canonique candidate : `explorer.html` ; compatibilité `nav7-candidate.html`.
- Six portes et **31 rubriques**, répartition 5 / 4 / 4 / 8 / 4 / 6.
- Les quinze raccourcis hérités sont des accès à des pages existantes, **pas** quinze catégories supplémentaires.
- Révision 2 du contrat après capture Zout : point 4 Encyclopédie (233,450), point 6 Médiathèque (461,426), point 7 Manifeste (272,354). Ne pas ressusciter les coordonnées de l'ancienne réception NAV7.
- Sources SVG R6 intactes selon contrôles C19 ; R7-B1 validé **par Zout** sur l'aperçu Android qu'il a ouvert. Ne pas redessiner les logos.
- Les 16 observations du test Android, toutes positives, sont inscrites dans `coordination/work/c21/RECEPTION_ANDROID_2026-11-14.json`. Aucune anomalie n'a été rapportée.

## 3. Documentation et contenu

- Inventaire Work C17 reçu : 135 fichiers de contenu, 87 HTML, manifest SHA-256 `b128b39132528695f67dde0f53989d45f61536c1ae658ec0a14113481bbdece7`.
- Paquet de revue C19 : 140 fichiers, 88 HTML, manifeste SHA-256 `b810dfbeda164b833dedd80220738521cd6eec0be42fc26508f698fee614034c`. Ce paquet est **une preuve de build local**, pas un certificat d'équivalence avec l'aperçu privé consulté sur téléphone.
- Les 24 textes R6 conservent les sources et l'état « pas de nouveau visa ».
- **Deux documents distincts portent le titre « Égalité, genres et inclusivité. »** : `wiki-egalite-fiches` et `wiki-egalite-genres-inclusivite`. Ne pas fusionner automatiquement leurs identifiants, fiches ou droits.
- Les dix notices médias sont candidates.
- L'overlay C07 indique 219 objets sans autorisation de publication, dont 217 juridiquement non examinés et deux bloqués ; `per_id={}`, PAR-005 bloqué. Les dossiers HELD ne sont pas rouverts.

## 4. Sécurité et publication

- `_config.yml` exclut les dossiers de coordination, scripts, tests, recherches et environnements de travail des exports Pages.
- Les contrôles C19 rapportent `missing_local_targets=0`, `known_sensitive_id_hits=0`, sept formulaires statiquement désactivés, aucun changement des deux SVG officiels.
- Reçu du déploiement privé antérieur : version 1, accès propriétaire seul, zéro utilisateur externe/groupes selon le contrôle C19. **Son contenu authentifié n'a pas été rouvert pendant C19.**
- La réception Android ne contient **ni URL privée ni SHA du build testé**, donc la correspondance entre le build privé, C19 et le commit C20 reste non démontrée.
- Ne pas attribuer à cette validation Android un droit de publier, une autorisation de collecte, un visa de licence ou une approbation des 219 dossiers.

## 5. CI confirmée et restant à prouver

Sur `586e91067216a1bd96e34c30ffca5f104fda192b`, GitHub a retourné trois workflows terminés **SUCCESS** :

1. `43505336605` Demo ateliers C11.
2. `43505336610` C07 secure deterministic missions.
3. `43505336765` WORK NAV01 isolated navigation QA. Son job `navigation` est terminé success.

La PR #197 seule avait auparavant quatre échecs CI causés par le format de deux lignes du registre C18/C19. La branche C20 porte leur correction, et les trois workflows précités passent sur son SHA. **Cela ne signifie pas** que tous les workflows de #197 ou R6 INT01 ont été réexécutés sur C20.

À contrôler avant fusion éventuelle : R6 INT01 sur HEAD exact candidat final, contrôles des exports Pages, correspondance du build privé, et revue juridique/éditoriale distincte.

## 6. Actions C22 après audit

Sans toucher au code de navigation ni aux SVG validés :

- Ajout de `tests/c22-reception-contract.test.mjs` : verrou d'intégrité des 16 assertions Android, de la bonne correspondance des six positions, des 31 menus, de la séparation des 24 textes et des 219 refus de publication.
- Ajout de `.github/workflows/c22-reception-check.yml` : workflow Node isolé, permissions `contents: read`, aucune étape de build Pages, migration, déploiement ou publication. Son déclenchement ne confère aucun visa à son résultat.
- Publication de **ce rapport de travail dans la seule branche candidate C21**, sans PR supplémentaire ni fusion.

## 7. Prochaines actions et conditions

**P0 technique :** faire contrôler le nouveau test C22 dans GitHub Actions, corriger toute assertion erronée sans déformer le compte rendu humain.

**P1 réception privée :** relever dans Work l'empreinte exacte et la version de l'aperçu privé testé. Ne demander aucune nouvelle navigation complète à Zout : les seize points ont déjà été acceptés.

**P1 convergence :** revoir et intégrer par action **distinctement autorisée** le correctif C20 et le reçu C21 dans une candidate unique, puis obtenir la CI du HEAD résultant. Ne pas fusionner automatiquement PR #198 ou PR #197.

**P2 édition :** étudier les deux titres « Égalité » et les 24 textes sans supprimer les identifiants et sans créer de nouveaux visas.

**P2 humanité et accessibilité :** un seul complément humain ciblé reste utile si la version du build est retrouvée ; inutile de répéter les seize tests.

## 8. Ce qui n'a pas été effectué

- Aucun test authentifié du site privé depuis cet environnement.
- Aucune inspection indépendante de captures graphiques au pixel près.
- Aucun déploiement, aucune fusion, aucun changement de permission.
- Aucun changement des SVG officiels ou des liens publics.
- Aucune autorisation éditoriale, juridique, de purge ou de collecte supposée.

**Conclusion :** la dette dominante est la traçabilité de version, non un défaut visuel ou fonctionnel remonté par l'utilisateur. Geler le graphisme accepté et demander une preuve de build avant de parler d'une candidate finale certifiée.
