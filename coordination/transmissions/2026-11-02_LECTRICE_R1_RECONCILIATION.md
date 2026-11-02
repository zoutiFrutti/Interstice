# La Lectrice — R1, accusé et réconciliation candidate du 2 novembre 2026

**Branche : `atelier-lectrice/r1-reprise-20261102`.** Courrier `coordination/reprise-r1/courriers/R1-LEC.md`, blob `4b83eebe8e0b3fab98c56c0c8ba840c8af20c068`, lu directement sur `coordination/reprise-generale-r1-20261102`. **Réception effective dans la conversation par transmission de Zout**, sans changer l'index central. Documents R1 contrôlés : 00 `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8` ; 01 `a9070cd99b775d169415e3c991074dced1c6ffab` ; 02 `4982d1d2501af5665729cc99400c5915e94a6eb0`.

## Passes réellement faites
1. **Inventaire :** reprise de la branche Lectrice C10, de l'accusé porte A `f4b9c2748f0ce35129f61e5481ffa4699f5babec` (commit `557f4a6d0bbfcb5f5832af89f20a07a615ca7eab`), concordance C10 `8504cf639bca8a813439f7711d1f4250fb2383b8`, réconciliation du 2/11 `3519d1bfaa9d6fbbcb2c515c952d0c1483777dea`. Pas de duplication de ces audits.
2. **Confrontation P0 :** récupéré les cinq HTML C10 de la branche Lectrice et les cinq versions correspondantes sur `juriste/cycle10-verdicts-cinq-pages-20261101`, PR #75. Toutes les versions diffèrent ; sur PR #75, un encadré unique `Réserve juridique candidate` existe en tête du `main`, absent sur la branche Lectrice.
3. **Correction réelle :** extraction **exacte de cet encadré uniquement** depuis chaque version Juriste et insertion dans chaque HTML Lectrice, sans écraser le contenu ni les réserves Lectrice. Aucune fusion de branche ni transfert implicite de tous les autres commits.
4. **Nouvelle vérification :** cinq fichiers relus après chaque commit, une note Juriste + une section Lectrice par page (5/5), sections ouvrantes/fermantes et balises `aside` équilibrées (5/5). Contrôle structurel textuel, **pas** de CI/browser ni validation des consignes du corps.
5. **Transmission :** présent rapport et notification à La Relieuse.

## Tableau des corrections P0
| Fichier | Avant Lectrice blob | Source Juriste PR #75 blob | Nouveau blob R1 | Statut de fond |
|---|---|---|---|---|
| `wiki-education-enfance-protection.html` | `df853833b925771812b7adca954531b075c7291c` | `ef774f3cbcc61f94f8553edc61704f52774e5225` | `c85e952dcda0958c7d199145ee0eb239d0cd6c3e` | BLOQUÉ |
| `wiki-frontieres-migrations-colonialisme.html` | `8f529be68122e941da407328889a93c8b803f35e` | `f00ca6281a378614fad67c6e28c6a7613e6cca06` | `7e8ff4774d357906f2c5450ee91bb4ddf9296e41` | À POURSUIVRE |
| `wiki-logement-habitat-droit-ville.html` | `f3ff98cfbd712c60f78ed27426320eec023b8645` | `99193708552dcdefdf5c28af00c3a93b5872fb8b` | `9966024325a37fba9ac95470581b18dee1d06fc7` | À POURSUIVRE |
| `wiki-police-deces-memoire.html` | `250da16283fa24140d5060ae9ef302edfd515c1d` | `2917f9ec9440ce506338b2655c229b3d880b896e` | `75c07be67b559e8d343f15f652eee1cd67aa0312` | BLOQUÉ |
| `wiki-sante-psychiatrie-autonomie-soins.html` | `55707bb291a2db60de87d9b80070d1c16de7d4d9` | `e846859c672eb03e019d7c1469018b9c5b304ff5` | `b0deaf81d2041b5fe2e5a4eb01834cf761f60eef` | BLOQUÉ |

**Verdicts inchangés :** Enfance, Police/décès, Santé-psychiatrie **BLOQUÉES** ; Migrations et Logement **À POURSUIVRE** pour correction du corps (droit applicable, actes, délais et procédures). **La copie d'un encadré n'est pas une levée de blocage et n'établit pas que les textes sont juridiques complets.** Les versions et SHAs de La Juriste n'ont pas été modifiés.

## Histoire et douze autres Wiki
Les trois candidats historiques existent déjà avec réserves ARCH-005 (contradiction MP159/Frankel), COL-003 (Ly22 et identité André) et ASSO-007 (convocation ≠ tenue, solde demandée ≠ versée). PR #77 présente également ARCH-006, **hors matrice initiale de 20 contrôles** : conserver distinct. Aucune archive primaire nouvelle consultée cette passe ; dossiers **À POURSUIVRE**. Les 12 Wiki non sensibles ont un état candidate C10 dans la matrice `coordination/transmissions/2026-11-01_LECTRICE_CYCLE10_MATRICE_20.md`, blob `ffd4f7878154d3b24b8231e35d1820c0e1796e98` ; pas d'audit intégral du corps aujourd'hui, statut **À POURSUIVRE**.

## Élargissement R1 et non-doublons
- **Prototypes A (Atlas/logo), B (entraide), C (audiovisuel)** : RELIER d'abord aux ressources existantes et à leurs sources. Une fiche situation n'est pas un dispositif d'accueil de témoignages ou de données sensibles ; aucune licence sur photos/œuvres inférée de l'accessibilité d'un lien.
- **Observatoire des récits** : séparer fait vérifié, témoignage attribué, interprétation et contestation ; désaccord politique ≠ erreur de preuve ou injure. Aucune nouvelle notice publiée ni mandat de partenariat.
- **Mémoire des luttes** : conserver différence entre pièces, études et conclusions, sans reproduire les scans protégés. PR #77 et études restent références, pas archives collationnées.
- **Dépendances** : Développeuse P0 sécurité/staging et canal RGPD fonctionnel, Juriste pour chaque consigne opérationnelle, Médiathèque pour URL/licences/alias, Anarchitecte pour 24/44/71, Zout seul pour choix et visa.

## Statut par objectif
| Objectif | Preuve et test | Statut | Suite |
|---|---|---|---|
| R1 lecture et accusé | 4 blobs R1, branche vérifiée, présent fichier committé | **TERMINÉ documentaire** | Relieuse peut rapprocher accusé dans sa branche |
| P0 delta des cinq avis Juriste | 5 nouveaux blobs, notes Juriste+Lectrice testées dans HTML | **TERMINÉ documentaire pour l'insertion** ; fond **À POURSUIVRE/BLOQUÉ** | Contrôle exhaustif des procédures et QA de la version intégrée |
| 12 Wiki | Matrice antérieure, aucun test complet nouveau | **À POURSUIVRE** | Sources, liens, passages longs et licences |
| 3 historiques + ARCH-006 | PR #77, réserves conservées | **À POURSUIVRE** | Originaux, PV, registres et vérification des versions |
| Prototypes A/B/C, observatoire | Inventaire R1 et contrat commun lus | **À POURSUIVRE** | Critique de ressources exactes, droits, accès et statut avant édition |
| Approbation éditoriale | Aucune décision Zout prétendue | **DÉCISION ZOUT** | Choix des lots exacts et autorisation séparée de publication |

**Aucune fusion, publication, diffusion, contact, activation, frais ou modification de production.**
