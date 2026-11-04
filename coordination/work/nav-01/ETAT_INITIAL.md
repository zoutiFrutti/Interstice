# WORK-NAV-01 — état initial

Lecture du 4 novembre 2026. Base distante réelle : `7344591fa7f0f4f6951ea273525039cf2cb9982a`, arbre `205dfa683658589500b6d4e05cf1245002e0dcd7` (524 fichiers). R6 est publiée ; la nouvelle navigation n’y est pas intégrée. Branche candidate issue de cette base : `work/nav-immersive-convergence-01`.

| Source obligatoire | HEAD vérifié | Comparaison GitHub avec main (+ propres / − manquants) |
| --- | --- | --- |
| [#135](https://github.com/zoutiFrutti/Interstice/pull/135) | `69a4d41c68f68299d2a6227f146d6852ca8b50af` | behind ; +0 / −106 |
| [#137](https://github.com/zoutiFrutti/Interstice/pull/137) | `72c1edcda7336a893ab2b5d1485b3f53cc377366` | diverged ; +24 / −90 |
| [#138](https://github.com/zoutiFrutti/Interstice/pull/138) | `888015794b3ddbf4dddc1b43d2ba9af493971d09` | diverged ; +5 / −86 |
| [#141](https://github.com/zoutiFrutti/Interstice/pull/141) | `9f733122c7196622d31e7996d1d0b4eea987a14d` | behind ; +0 / −43 |
| [#143](https://github.com/zoutiFrutti/Interstice/pull/143) | `2d4dbc40f14f498e07028131d59d298ac9ab4c9f` | diverged ; +5 / −43 |
| [#153](https://github.com/zoutiFrutti/Interstice/pull/153) | `0c4ddfcc8b7a52ac773c61706fd5b5e2bc4f8187` | behind ; +0 / −2 |
| [#161](https://github.com/zoutiFrutti/Interstice/pull/161) | `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` | ahead ; +2 / −0 |
| [#163](https://github.com/zoutiFrutti/Interstice/pull/163) | `d9f771d5516048cfa2ad7639204443a10fb20f44` | ahead ; +6 / −0 |
| [#168](https://github.com/zoutiFrutti/Interstice/pull/168) | `4ae8afef9604fa55d3dda6c1400b8b8c139317c9` | ahead ; +5 / −0 |
| [#132](https://github.com/zoutiFrutti/Interstice/pull/132) | `57a509257314d44cb15faf842395a21023e43335` | diverged ; +26 / −340 |
| [#166](https://github.com/zoutiFrutti/Interstice/pull/166) | `16b5e034d5df14caf38cf1188c5f8112dc9c553c` | ahead ; +5 / −0 |

Les PR #135, #141 et #153 sont déjà dans l’ascendance de main. #137, #138, #143 et #132 divergent. Aucune fusion ancienne n’est supposée sûre ; adaptation ciblée des composants. #161, #163, #166, #168 restent candidates, non fusionnées.

Fichiers effectivement lus : moteurs `assets/faille-navigation.js` et `assets/entree-faille-candidate.js`, tests R5/R6, index C03 #132, contrat de navigation et audit C12 #163, quatre documents `coordination/c03/graphiste/` #168, catalogue et plan de navigation #161. Les sources exactes et leurs blobs figurent dans `SOURCES.json`.

Dépendances : application statique HTML/CSS/ES modules et SVG, sans paquet d’exécution. Tests : Node 22, Playwright 1.56.1 et axe 4.10.2, uniquement en QA. L’accès réseau de l’atelier ne permet pas d’installer Chromium ; exécution navigateur automatisée dans GitHub Actions, avec observation manuelle dans le navigateur de l’atelier.

C12 : le déclenchement `issues.opened` de main reste un risque non résolu dans #163/#166. Aucun test par Issue, appel IA ou changement de workflow C12. Aucun changement d’index actif, de domaine, de configuration Pages ou de fichier existant.

