# R5 — matrice de divergence, lot 1 navigation et identité

Base comparée : `integration/r4-convergence-relieuse-20261102`, branche candidate PR #141. Comparaisons GitHub réelles au 2026-11-03 ; les comptes ahead/behind sont des commits, non des fichiers. **Aucune fusion ni suppression.**

| Branche candidate | Relation à la base R4 | Ahead | Behind | Décision candidate |
|---|---|---:|---:|---|
| `test/r5-dev-accessibilite-20261103` | ahead | 3 | 0 | Examiner tests et matrice accessibilité, sans conclure à un essai physique |
| `design/r5-gra-dossier-arbitrage-20261103` | ahead | 7 | 0 | Examiner comparateur et rapport, arbitrage Zout obligatoire |
| `fix/r4-dev-cloture-validation-20261102` | diverged | 4 | 17 | Divergence : inspection des commits et contenus uniques avant décision |
| `integration/r4-dev-navigation-consolidee-candidate-20261102` | diverged | 7 | 29 | Divergence : inspection des commits et contenus uniques avant décision |
| `integration/r3-identite-navigation-immersive-candidate-20261102` | diverged | 5 | 43 | Divergence : inspection des commits et contenus uniques avant décision |
| `integration/r2-dev-navigation-faille-20261102` | behind | 0 | 29 | Historique ancêtre, ne pas supprimer sans preuve PR et provenance |
| `design/identite-faille-interstice-zoom-20261102` | diverged | 24 | 47 | Divergence : inspection des commits et contenus uniques avant décision |

## test/r5-dev-accessibilite-20261103

- Merge base : `9f733122c7196622d31e7996d1d0b4eea987a14d`.
- Fichiers différenciés :
  - `.github/workflows/r5-dev-accessibilite.yml (added)`
  - `coordination/transmissions/2026-11-03_DEVELOPPEUSE_R5_MATRICE_ACCESSIBILITE.md (added)`
  - `tests/r5-dev-accessibilite.browser.test.mjs (added)`

## design/r5-gra-dossier-arbitrage-20261103

- Merge base : `9f733122c7196622d31e7996d1d0b4eea987a14d`.
- Fichiers différenciés :
  - `.github/workflows/r5-gra-arbitrage-identite.yml (added)`
  - `coordination/transmissions/2026-11-03_GRAPHISTE_R5_GRA_DOSSIER_ARBITRAGE.md (added)`
  - `design-system/comparaison-identite-r5-arbitrage.html (added)`
  - `tests/r5-gra-arbitrage-identite.test.mjs (added)`

## fix/r4-dev-cloture-validation-20261102

- Merge base : `fb3c8470dccb5efbccf4849f0fca3a337491f871`.
- Fichiers différenciés :
  - `.github/workflows/r4-dev-cloture.yml (added)`
  - `assets/faille-navigation.js (modified)`
  - `tests/r4-dev-cloture.browser.test.mjs (added)`

## integration/r4-dev-navigation-consolidee-candidate-20261102

- Merge base : `bb9df932da8066c68131106a25625fb1db2bc796`.
- Fichiers différenciés :
  - `.github/workflows/r4-faille-navigation.yml (added)`
  - `assets/faille-navigation.js (modified)`
  - `tests/r4-faille-navigation-regression.test.mjs (added)`
  - `tests/r4-faille-navigation.browser.test.mjs (added)`

## integration/r3-identite-navigation-immersive-candidate-20261102

- Merge base : `256bf93379b3882e32827cbda706e2ceeaf63749`.
- Fichiers différenciés :
  - `.github/workflows/faille-immersive-candidate.yml (added)`
  - `assets/faille-navigation.js (modified)`
  - `coordination/integration/2026-11-02_IDENTITE_NAVIGATION_IMMERSIVE_SUIVI.md (added)`
  - `index.html (modified)`
  - `tests/faille-navigation-integration.test.mjs (added)`

## integration/r2-dev-navigation-faille-20261102

- Merge base : `bb9df932da8066c68131106a25625fb1db2bc796`.
- Fichiers différenciés :
  - Aucun fichier différencié dans la comparaison.

## design/identite-faille-interstice-zoom-20261102

- Merge base : `d6889d764b24d081692db8c9e3caf785f291ced3`.
- Fichiers différenciés :
  - `.github/workflows/r4-identite.yml (added)`
  - `assets/entree-faille-candidate.css (modified)`
  - `assets/entree-faille-candidate.js (added)`
  - `assets/logo-faille-noire.historique.svg (added)`
  - `assets/logo-faille-noire.svg (modified)`
  - `assets/logo-interstice.historique.svg (added)`
  - `assets/logo-interstice.svg (modified)`
  - `coordination/transmissions/2026-11-02_GRAPHISTE_IDENTITE_ZOOM_BRIEF.md (modified)`
  - `coordination/transmissions/2026-11-02_GRAPHISTE_R4_AUDIT_IDENTITE.md (added)`
  - `design-system/entree-faille-candidate.html (modified)`
  - `tests/entree-faille-candidate.test.mjs (modified)`
  - `tests/r4-identite-captures.test.mjs (added)`
  - `tests/r4-identite-pages.test.mjs (added)`


## Observations et décisions

1. `integration/r2-dev-navigation-faille-20261102` est ancêtre de R4 (ahead=0). **Ceci n'autorise pas à fermer sa PR ni à supprimer la branche** ; vérifier références et usages externes.
2. `fix/r4-dev-cloture-validation-20261102` a divergé de R4 : son moteur et ses tests ont été intégrés puis amendés en R4, mais les commits ne sont pas identiques. Une revue de patch doit vérifier les apports restants.
3. R5 Développeuse et R5 Graphiste sont toutes deux en avance sur la base R4 et ne la précèdent pas ; leurs nouveaux fichiers sont des **apports candidats distincts**. Préparer une convergence de tests/documents seulement après contrôle CI.
4. Le prototype graphique historique a modifié des logos actifs dans sa branche ; **ne pas propager ces fichiers actifs** sans arbitrage artistique.
5. Les contrats, droits et validations éditoriales ne se déduisent pas des résultats CI.

## Décisions réservées à Zout

- Approbation artistique des SVG et choix de la planche de référence.
- Autorisation de fusion ou d'activation publique.
- Autorisation éventuelle de fermer PR et supprimer branches après inventaire des références.
