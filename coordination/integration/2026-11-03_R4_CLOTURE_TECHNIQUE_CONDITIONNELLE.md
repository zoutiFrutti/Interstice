# R4 — clôture des contrôles automatisés, réserves humaines maintenues

Date : 2026-11-03. Branche : `integration/r4-convergence-relieuse-20261102` ; PR #141, toujours candidate, sans merge.

## Preuves contrôlées
- Commit testé : `7ece6f34d955fd2c5dd5802e84b159450b12f3b4`.
- GitHub Actions run : https://github.com/zoutiFrutti/Interstice/actions/runs/41541664015 ; conclusion **success**.
- Jobs `chromium` et `contracts` : **success** chacun.
- Artefact `r4-relieuse-captures` présent, 954189 octets.
- Tests : largeur 320/390/768/1280, navigation clavier, historique, ancre Entraide, destinations de la liste alternative, sans JS, réduction des mouvements, zoom CSS 400 % (présence des liens seulement), pincement par événements Pointer simulés.
- Corrections tracées : ancre Entraide, statut SVG provisoire, promesse du formulaire, libellé de sélection, test de navigation asynchrone.

## Verdict précis
**Contrôles automatisés R4 : validés** sur le commit ci-dessus. La **clôture complète R4 n'est pas prononcée** : les tests ne prouvent ni l'absence de perte d'information à 400 %, ni la compatibilité lecteur d'écran, ni le pincement sur matériel physique, ni les performances bas de gamme. Les deux SVG sont candidats, non approuvés artistiquement.

## Décisions réservées à Zout
1. Comparer les SVG à la planche artistique de référence, arbitrer ou demander corrections.
2. Accepter ou corriger la navigation immersive après essai réel sur téléphone et clavier/lecteur d'écran.
3. Décider explicitement de toute future fusion, publication ou suppression de branches. Aucune n'est effectuée ici.

## R5
Préinventaire : `coordination/integration/2026-11-02_R5_PREINVENTAIRE_BRANCHES.md` (218 branches recensées). Préparer lots de convergence et comparaisons, sans mutation destructive.
