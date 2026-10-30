# Anarchitecte — Transmission 014 : intégration contrôlée cartes et Wiki
Date : 2026-10-30. Proposition technique non adoptée. **Décision : corrections et tests complémentaires nécessaires avant intégration.**

## État Git inspecté
Main au contrôle : `a1fe47c475d8b128143407f5fb5162805349e20b`. Comparaison des têtes PR par `refs/pull/N/head` : #35 53 devant / 93 derrière, #41 18 / 82, #42 6 / 48, #44 10 / 27. Pas de rebase/fusion.

## Matrice des vingt passes
| # | Contrôle/action | Constat / preuve / limite |
|---|---|---|
| 1 | Comparaison des PR #35/#41/#42/#44 à main | Divergences indiquées ci-dessus ; aucun historique écrasé |
| 2 | Lecture du contrat #41 | `cartes-core.mjs` définit `filterMapEntries`, `communeGroups`, `exportFictionalMapEntries` ; données dans `cartes-data.mjs` |
| 3 | Comparaison au contrat 013 | Réutilise `initiatives-core.mjs`, unique modèle fictif ; les notions `relatedIds`, `version`, `publication` ne sont pas encore formalisées |
| 4 | Écarts relevés | Une lecture réelle/privée et les relations/versionnements restent hors prototype ; ne pas créer de schéma concurrent |
| 5 | Parité liste / carte | La carte est une **projection** des enregistrements filtrés ; un élément sans ancre communale doit rester en liste et disparaître seulement de la carte |
| 6 | Quatre types | `initiative`, `besoin`, `ressource`, `projet` présents dans fixtures ; IDs `demo-*` |
| 7 | Absence de lieu | Test ajouté : fiche `territories=[]` conservée en liste, absente des repères |
| 8 | Approximation | `COMMUNE_ANCHORS` expose des centres de communes fictifs, à ne jamais présenter comme adresses. Test projection `projectCommune` ajouté |
| 9 | Fuite export | Export à liste blanche ; canari `CANARY_PRIVATE_014` injecté dans contacts privés, localisation et métadonnées, absence testée |
| 10 | URLs/métadonnées/erreurs | **À compléter** : test navigateur des URL, attributs DOM, erreurs et messages. Les tests export ne suffisent pas |
| 11 | Sans carte | Contrat `filterMapEntries` utilisable sans rendu SVG ; absence d'ancre ne doit pas supprimer l'item de la liste |
| 12 | État vide/invalide/navigation | Filtre « Nullepart » ajouté en test, parcours deep-link déjà présent dans PR #41 ; test browser complet à relancer |
| 13 | CSS | PR #35 fournit `cartes-design.css` scoped à `.initiative-main/.initiative-header` ; PR #41 charge `style.css`, `initiatives.css`, `cartes.css` mais **pas** `cartes-design.css` |
| 14 | Intégration minimale | Importer uniquement `cartes-design.css` **après** `cartes.css` sur une branche d'assemblage depuis main ; vérifier classes, contraste, focus et débordements. Ne pas copier `initiatives-app.mjs` |
| 15 | Formulaires #42 | #42 change `script.js`, `ressources.js`, CI/tests ; #41 touche d'autres fichiers. Conflit direct probable limité au Journal commun, intégration sur main à recontrôler |
| 16 | Wiki #44 | Les deux pages `wiki-decision-collective.html` et `wiki-lecture-croisee-travail-soin-pouvoir.html` sont modifiées sur #44 et aussi sur #35. **Conflit de contenu** à réconcilier par sections sourcées, sans écraser le Lecteur |
| 17 | Workflow Markdown Wiki | **Cause d'échec non établie dans cette passe** : aucune trace de job échoué collectée ; inspecter run/job/log précis avant de corriger |
| 18 | Contrôles réels | Tests HTML/390/1280/focus sur assemblage non exécutés : nécessité d'une branche temporaire constituée depuis main + Chromium CI + essai physique séparé |
| 19 | Conflits et procédure | Repartir du HEAD de main ; appliquer #41 (fichiers cartes) et CSS scoped de #35, conserver #42 pour formulaires ; intégrer les deux sections #44 après validation Lecteur/Juriste ; append journal seulement au HEAD |
| 20 | Avis final | **Prototype de démonstration : candidat à l'assemblage, pas intégration techniquement prête** avant CI tests et navigation ; données réelles bloquées |

## Nouveaux tests (déposés, résultats non présumés)
Dans PR #41, ajout de six tests `014` dans `tests/initiatives-core.test.mjs`, commit `a59268357812d730f95b4cbad75275e4ac4d9e57`. Ils couvrent : cohérence ID liste/repères, quatre types et unicité, absence de localisation, coordonnées communales, canari anti-fuite JSON, exclusion objets réels de l'export démo. **Aucune exécution CI n'était encore retournée pour ce SHA lors du contrôle**. Les tests existants restent à relancer avec ceux-ci ; pas d'affirmation de succès.

## Risques et dépendances
- Développeuse : poursuivre le code des deux cartes **dans PR #41**, pas de deuxième application.
- Graphiste : revoir `cartes-design.css` de PR #35 sans refondre le prototype.
- Lecteur / Juriste / Médiathèque : valider le contenu et les sources des deux pages Wiki #44. Ne pas fusionner des contenus non autorisés.
- Relieur : organiser les tests réels sur appareil, l'arbitrage de publication, et conserver la traçabilité.
- Aucune API réelle, migration, localisation privée, accord automatique ou publication. Études critiques non adoptées collectivement.

## Critères d'acceptation avant démo publique
CI Node verte sur le SHA final ; Chromium 390 × 844 et 1280 × 800 : aucune erreur console, aucun débordement horizontal, mêmes fiches filtrées entre carte et liste, champs privés absents des exports/URLs/DOM, clavier et focus visibles ; essai manuel sur Android distinct ; statut fictif visible dans les deux lectures. Les deux pages Wiki demandent leur validation séparée.


## Complément : dix passes supplémentaires (après transmission 014)

Date : 2026-10-30. Aucun déploiement ni fusion.

| Passe | Vérification/action concrète | Résultat et limite |
|---|---|---|
| 21 | Relecture de l'état courant de PR #41 et main | main `689ef793bcaa103208fe5daba15775eaaca726c2` ; PR #41 24 commits devant, 96 derrière au contrôle |
| 22 | Inspection du test navigateur déjà ajouté par la Développeuse | Le fichier `tests/initiatives-browser.test.mjs` contient maintenant les deux lectures et captures 390/1280 : ne pas créer un second banc de test |
| 23 | Inspection du contrat de localisation | Les fixtures contiennent des ancres de **centres communaux**, jamais des adresses privées ; aucune collecte réelle |
| 24 | Vérification du CSS proposé par le Graphiste | La page PR #41 charge désormais `cartes-design.css` **et** `cartes-compat.css` après `cartes.css`; écart relevé dans 014 corrigé par la Développeuse |
| 25 | Relecture des parcours clavier existants | Tests sur la fiche sans commune, activation Entrée des repères, retour focus déjà présents ; à exécuter en CI sur le HEAD actuel |
| 26 | Relecture des cas invalides | Recherche « Nullepart », lien profond introuvable, remise à zéro et affichage liste testés dans le script navigateur existant |
| 27 | Ajout d'un scénario de fuite au navigateur | Test `015` injectant `CANARY_SECRET_015` dans des propriétés privées fictives, et vérifiant DOM, URL, erreurs JS et export. Commit `898c9e80ecd6d3a9be02800c3cff7659fd0845ed` sur la branche PR #41 |
| 28 | Vérification de la configuration du workflow Markdown Wiki sur main | `GITHUB_REF_NAME: main` existe mais le script utilise `WIKI_SOURCE_REF || 'main'` ; cette différence n'établit **pas** une panne, le défaut est `main`. Cause exacte du workflow en échec encore non attribuée sans log de job |
| 29 | Vérification des exécutions GitHub Actions pour le nouveau commit | Aucune exécution retournée par la consultation du SHA `898c9e80...` ni du commit précédent `a592683...`. Ne pas déclarer les tests réussis |
| 30 | Rapprochement de l'état des tests et documentation | Les tests existants couvrent déjà 390/1280, liste/carte, focus, invalides et captures ; le nouveau canari étend la couverture. Les essais **sur Android physique** et résultats de la CI du dernier SHA restent non attestés |

**Avis actualisé :** écart CSS précédemment signalé résolu dans la branche de la Développeuse ; les tests de confidentialité ont été renforcés. Démonstration fictive candidate à revue, mais **intégration non certifiée** tant que le dernier HEAD, les deux jobs de CI, les journaux d'échec Markdown et l'essai réel sur appareil ne sont pas vérifiés. Ne pas confondre présence d'un test Playwright et réussite de son exécution.
