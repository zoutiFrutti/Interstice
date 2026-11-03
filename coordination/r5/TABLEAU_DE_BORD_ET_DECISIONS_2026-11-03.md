# Tableau de bord R5 — 3 novembre 2026

## Situation vérifiée
- 221 branches, 98 PR ouvertes au moment du relevé. Ces chiffres évoluent avec les contributions des ateliers.
- Registre : `coordination/r5/REGISTRE_BRANCHES_PR_2026-11-03.md`.
- Comparaison du lot 1 : `coordination/r5/MATRICE_LOT1_NAVIGATION_IDENTITE_2026-11-03.md`.
- PR #141 R4 : tests automatisés validés, sans validation artistique ni essais physiques complets.
- PR #143 R5 Développeuse : trois commits candidats nouveaux, trois fichiers (workflow, tests, matrice) ; **pas de changement au moteur**. Ne pas intégrer avant vérification du CI propre à son HEAD.
- PR #144 R5 Graphiste : sept commits candidats nouveaux, quatre fichiers (workflow, comparateur, test, rapport) ; **pas de remplacement de logos actifs**. Référence raster finale manquante ; arbitrage Zout P0.

## Lots et priorités
| Lot | Action immédiate | Sortie exigée | État |
|---|---|---|---|
| 1 Navigation R1–R5 | Examiner #143, #144, les divergences et la CI ; consolider seulement tests et documents compatibles | PR de convergence candidate et matrice des preuves | En cours |
| 2 Conformité | Audit branches Juriste, formulaires, P0, données et contrats | Matrice de risques avec SHA et source | À ouvrir |
| 3 Graphisme | Comparer les SVG à la planche approuvée, conserver rollback | Arbitrage artistique explicite | Bloqué par source raster absente |
| 4 Éditorial | Préserver sources, statuts, droits et doublons Wikipédia | Matrice de provenance par dossier | À ouvrir |
| 5 Coordination | Recouper PR→branches HEAD/BASE, doublons, journaux et références | Registre qualifié et décisions humaines | Préinventaire fait |

## Gains constatés
- Pagination exhaustive des noms de branches réalisée.
- Registre des 98 PR ouvertes à cet instant créé.
- Sept branches prioritaires réellement comparées à R4 (ahead/behind, merge-base, fichiers).
- Deux contributions R5 identifiées comme apports candidats sans modification du moteur.
- **Zéro** branche supprimée, **zéro** PR fermée, **zéro** fusion ou publication.

## Réserves de méthode
- Le registre est exhaustif en **noms**, pas encore en SHA de chaque branche ni en associations PR→HEAD/BASE. Ne pas déclarer ce volet achevé.
- Les intitulés seuls ne prouvent pas un doublon.
- Aucun contenu candidat ne devient validé par une réussite CI.
- Toute proposition de suppression doit citer la PR, le SHA, les fichiers uniques et l'accord de Zout.

## Addendum : preuves du lot 1
- Registre certifié de 14 PR : `coordination/r5/REGISTRE_HEAD_BASE_LOT1_2026-11-03.md` (HEAD, BASE et SHA contrôlés via métadonnées GitHub).
- #143 HEAD `88175668422dbf373d948f9a1164c97961f12401` : workflow « R4 DEV closure verification » réussi (run 41543235241). **Aucune preuve fournie ici de succès du workflow R5 DEV dédié**.
- #144 HEAD `ac41830d757e5c7811ca7d18d5aa6edde13f663f` : workflow « R5 GRA - comparatif graphique non publie » réussi (run 41544253498) et contrôles R4 réussis. Cela ne vaut pas visa artistique.
- #145 : CI de la branche documentaire à confirmer sur son dernier HEAD.
- La chaîne R1→R5 des PR #129, #133–#145 est explicitée par les SHA HEAD/BASE ; pas de clôture automatique des PR anciennes.

## Addendum — qualification du lot 2
- Matrice : `coordination/r5/MATRICE_LOT2_CONFORMITE_CONTRATS_2026-11-03.md`.
- 12 PR de conformité/contrats qualifiées par métadonnées HEAD/BASE et SHA ; 5 branches comparées à R4 avec chemins différenciés.
- Chaînes documentaires Juriste identifiées, pas de doublon déclaré.
- #42 touche `script.js` et `ressources.js` : pas d'intégration de code sans tests et revue P0.
- Orchestratrice : permissions/autorisation restent des conditions d'activation.
- Décompte initial R5 : 99 PR ouvertes après création de #145, sous réserve de nouvelles contributions.
