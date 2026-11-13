# C03-DEV-04 — Analyse de l'échec du preflight R6 sur PR #132

## Preuve GitHub Actions
PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`.
Run : https://github.com/zoutiFrutti/Interstice/actions/runs/41727087199
Job `certify` ID `126234604488` : échec à `Exact HEAD and preserved main ancestry`.

Le log exécute successivement :
```sh
git rev-parse HEAD
git merge-base --is-ancestor c613d9f896fe94144264f6e78b7ac07893a75c67 HEAD
git merge-base --is-ancestor df3692356b2309b77adf44e9cb1e68603edbb6cc HEAD
python3 scripts/r6-preservation-check.py
```
Après l'affichage du HEAD `57a509257314d44cb15faf842395a21023e43335`, le script sort avec code 1 **sans lancer** le contrôle Python. Le log ne trace pas quelle commande `merge-base` échoue ; la première ascendance R6 ou la seconde est donc à confirmer par deux contrôles indépendants. La branche #132 a pour base historique `c613d9...`, antérieure à la fusion R6 dans main : l'absence d'ascendance R6 est une explication très plausible.

## Interprétation
La CI teste une condition de provenance Git et non le comportement du site. Aucune preuve de régression graphique ou JS. Le build Pages, les tests navigateur et le smoke de production sont `skipped`, donc **non certifiés**. Ne pas rendre la CI verte en supprimant aveuglément les contrôles de conservation.

## Recommandation
Comparer explicitement les deux `merge-base` sur un checkout complet, afficher l'ascendance attendue et la base de PR, puis distinguer :
- sur branche candidate ancienne : contrôle de compatibilité / diff avec main actuel ;
- sur branche destinée à l'intégration : exigence stricte d'ascendance du main fusionné R6 et préservation des fichiers.

Réutiliser le workflow R6 existant après adaptation de son périmètre, sans modifier ce workflow dans C03-DEV-04. Aucune CI exécutée par la présente mission.
