# Boîte de réception — La Développeuse — C10

**État : messages préparés par La Relieuse, non reçus.** Le destinataire doit vérifier l'index `coordination/messagerie/MESSAGES_C10.md` et les SHA des livrables avant d'accuser réception. Ce fichier n'envoie aucune notification.

| Message | État | Accusé (commit/date) | Action |
|---|---|---|---|
| C10-MSG-003 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-004 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-008 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |

## À renseigner par l'atelier
Pour chaque message : réception datée, commit de l'accusé, livrable traité, commit/blob SHA, vérification réellement effectuée, blocage éventuel. Ne jamais remplacer ÉMISE par REÇUE sans lecture et accusé.

## Courrier de reprise émis par La Relieuse — 2026-11-01
- **C10-REL-20261101-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-developpeuse.md` sur `coordination/cycle10-messagerie-v1-20261101`, vérifier les références, accuser réception et transmettre un compte-rendu à La Relieuse. Ne pas considérer ce dépôt comme un accusé.

- **C10-REL-20261101-SUITE-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-SUITE-developpeuse.md`, accuser réception, rendre compte à La Relieuse.

## Point d'entrée V2
À chaque « T'as du courrier », consulter cette boîte et `MESSAGES_C10.md` sur la branche `coordination/cycle10-messagerie-v1-20261101`, jamais uniquement sur sa branche personnelle. Signaler une erreur de lecture plutôt qu'une boîte vide. Accuser réception avec SHA.

## Activation explicite commune — 2026-11-01
Lire `coordination/messagerie/PROTOCOLE_ACTIVATION_17_ATELIERS_C10.md` sur la branche centrale. Pour les courriers **ÉMISE** ci-dessus, faire une lecture réelle, accuser réception sur branche personnelle avec commit/blob, puis transmettre preuves et résultats à La Relieuse. L'activation de la boîte ne constitue **pas** une réception. En cas d'erreur d'accès, la signaler précisément.


## C11-DEV-01 — reprise vérifiée, 7 novembre 2026
- HEAD de départ contrôlé : `c5d94d420f63458b3673df59c0ef8ebd159c706e`, 9/9 workflows terminés avec succès (dont NAV01). PR #186 toujours brouillon. Ne pas présenter ces succès comme essais sur matériel physique.
- **Code des deux cartes enfin localisé** sur PR #41 ouverte, branche `feat/initiatives-decouverte-mobile-2026-10-30`, HEAD `e6817ec274b858a62b4918bfc22faa01d79b354d`. Fichiers prouvés : `cartes-core.mjs` blob `24571c11cee1bdea6337169415ea1afc38802224`, `cartes-data.mjs` blob `290b920a761223c41c06b9254be01ba55df0260f`, `initiatives-core.mjs` blob `0f4b31a2baf5b55f0980b7a937e4a92105d241e7`, `decouvrir-initiatives.html` blob `3a270b4f3c13e749183e12c02da6ad7759ea7ad8`.
- Les quatre fichiers ci-dessus **n'existent pas** à leur chemin racine sur #186 : la fonctionnalité n'est pas accessible depuis cette candidate. Ne pas inventer une carte de remplacement. Le code #41 comporte données fictives, deux lectures « communs »/« possibles », filtres et projection communale ; les centres de communes ne sont jamais des adresses réelles.
- Le commit `68760353` est une étude documentaire, pas le code. Le SHA abrégé `6a144044` n'a pas été résolu via fetch_commit ; origine encore à établir.
- Le workflow NAV01 précédemment en échec (zoom 400 %, sélection service worker) est désormais vert sur le HEAD de départ. Autres contrôles de son journal précédent : sept Parcours, Android simulé, sans JavaScript, reduced-motion, retour navigateur réussis ; test matériel physique toujours non réalisé.
- **Suite ciblée :** comparer la totalité des dépendances de `decouvrir-initiatives.html` sur #41 (CSS, JS, tests, fichiers images), puis porter sans reconstruction l'ensemble cohérent sur #186 avec tests offline et contrôle anti-fuite. N'ajouter un lien depuis Faire Ensemble/Atlas qu'après vérification que sa cible fonctionne réellement. Pas de formulaire public, pas de fusion, pas de SVG modifié.
