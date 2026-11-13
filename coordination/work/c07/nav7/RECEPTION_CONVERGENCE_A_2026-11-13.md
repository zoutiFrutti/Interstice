# LA RELIEUSE — CONVERGENCE A · 13 novembre 2026

**État : candidat isolé. Aucun merge, aucun déploiement, aucune publication.**

## Résumé exécutif

Reprise de NAV7 à **6 portes + Manifeste au point 7** et préparation d'un contrat lisible par machine, pour réconcilier sans duplication la grande candidate documentaire C07 et l'assemblage privé de Work.

Ce lot ne prétend PAS importer les 87 pages de Work, les 31 sous-menus, ni les 24 textes. Le commit local Work rapporté `7d61a53` **n'est pas résolu dans le dépôt GitHub** par le connecteur consulté (réponse 422). Aucun manifeste ni archive du build privé Work n'a été trouvé dans les fichiers disponibles lors de cette mission. L'aperçu privé est **rapporté comme déployé**, mais son contenu/son contrôle d'accès ne sont pas attestés ici.

## Origines observées

| Source | Existence vérifiée | État |
| --- | --- | --- |
| `main` | Oui, SHA `80ce56adfb9c3bc3275844b2847eac717b433aa5` au contrôle | Site historique ; barrière de sécurité existante |
| `work/nav7-accessible-prototype-20261113` | Oui, 29 commits devant main et 0 derrière au contrôle | Page NAV7 `nav7-candidate.html`, SVG vectoriel R7 + point 7, six boutons, 15 liens tertiaires, tests Node/Chromium candidats |
| `work/c07-reunification-20261104`, PR #186 | Oui, 157 commits devant main et 0 derrière au contrôle | Référentiel 219 IDs, master DEV-03 ; `candidat.html` et `explorer.html` ont toujours **quatre portes** |
| Assemblage privé Work `7d61a53` | **Non**, absent de GitHub accessible | 135 fichiers / 87 pages / 31 sous-menus / 24 textes et tests **déclarés dans les échanges**, non vérifiés depuis une archive |
| `work/c07-nav7-convergence-candidate-20261113` | Oui, créée à partir de NAV7 | Présente livraison candidate de coordination |

## Contrat produit

Fichier machine : `coordination/work/c07/nav7/convergence-contract.json`.

Affectation humaine (ne pas revoter) :
1. Faire Ensemble à (258,203)
2. Atlas à (397,178)
3. Vigie à (498,261)
4. Encyclopédie à (461,426)
5. Archives à (333,593)
6. Médiathèque à (233,450)
7. **Manifeste** à (220,327), issu d'un nœud de R6, **pas une septième porte documentaire**.

Les 15 sous-menus reconnus dans NAV7 sont des liens publics existants, pas des projections des 219 fiches C07. Pas de faux lien Vigie.

Les **31 sous-menus de Work ne sont pas interchangeables avec les 15** : le différentiel apparent de 16 doit être étudié **depuis un manifeste du build Work** ; il peut refléter des différences de périmètre, des doublons ou des sous-menus nouveaux, pas nécessairement 16 objets à copier.

## Conflits de convergence à résoudre

1. **4 contre 6 portes :** les pages `candidat.html` et `explorer.html` de C07 portent un schéma historique. Ne pas les recopier par-dessus NAV7. Le contrat 6+1 est prioritaire après décision Zout.
2. **Contenus :** l'overlay C07 `overlay-reviewed.json` constate `publication_denied=219`, `legal_unreviewed=217`, `legal_blocked=2`, `missing_canonical_url=190`, `per_id={}`. **Aucun transfert en export public ni promotion automatique.** Le paquet de 24 textes Work est à examiner par version et visa éditorial, pas importé sur la foi d'un nombre.
3. **SVG :** préserver les SVG officiels R6 et la source R7-B ; la dérivation NAV7 contient les sept positions. R7-B1 et la propagation rouge restent à recevoir artistiquement.
4. **Navigation & accessibilité :** conserver les chemins `index.html`, `atlas.html`, `wiki.html`, `bibliotheque.html`, `manifeste-v2-5.html`, `parcours.html`, les alias historiques et l'accès sans JS.
5. **Sécurité :** respecter les exclusions Pages, les garde-fous des localisateurs et le verrou d'import privé manuel sur main. Aucun build ni aperçu partagé sans contrôle des exports.
6. **PR #192/#193 :** cartographie encore construite pour quatre portes. Réconcilier les fichiers sans double import.

## Travail effectué au cours du cycle A

- Branche dédiée issue de NAV7, sans toucher `main` ni C07.
- Nouveau `convergence-contract.json` : positions, affectations, URLs de la base existante, données juridiquement bloquées, absence explicite de source Work reçue et chiffres Work séparés des preuves.
- Nouveau `tests/nav7-convergence.test.mjs` : vérification des six ports, point 7, géométrie du vrai SVG vectoriel, destinataires publics et ancres, statut non publiable des 219 objets, écart de provenance Work.
- Mise à jour de `.github/workflows/nav7-candidate-check.yml` : accepte uniquement les deux branches candidates, lance le test de convergence et les tests NAV7 déjà existants, sans déploiement.
- **Contrôles directs exécutés** sur les fichiers lus dans GitHub : 20 vérifications géométriques et structurelles positives. Il ne s'agit **pas** d'une exécution Node/Chromium ni d'une CI distante verte.

## Conditions précises pour réception du build privé Work

Ne demander ni les données privées ni la publication. Work doit remettre, dans un emplacement privé adapté :

- Le SHA exact du commit, ou une empreinte SHA-256 de l'archive de build ; ne pas inventer le chemin GitHub.
- Un inventaire (chemin relatif, type, statut `public_approuve` / `candidat` / `interdit_public`, source, hash, éventuelle ancienne URL), **sans URL privées ni données personnelles**.
- La table des 31 sous-menus (point parent 1–6, intitulé, destination, état légal/éditorial de la destination), les 24 textes et leurs visas.
- Les résultats CI par scénario et l'identité exacte du build testé.
- Un test indépendant du contrôle d'accès à l'aperçu privé.

**Réception future :** comparer l'inventaire aux fichiers NAV7 et C07, identifier les doublons par identité/source/hash, conserver les noms et alias, puis produire un diff à adopter ou à rejeter par Zout ; pas de fusion automatique.

## Conclusion

Convergence structurelle **préparée et testée statiquement**. Intégration des nouveaux artefacts Work **en attente faute de source accessible vérifiable**. Priorité suivante : réception documentaire technique du manifeste privé Work, puis revue de la différence 31/15 et des 24 textes sans déblocage implicite.
