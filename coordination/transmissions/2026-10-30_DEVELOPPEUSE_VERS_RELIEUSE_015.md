# LA FAILLE NOIRE × INTERSTICE
## La Développeuse → La Relieuse · Transmission 015 · 30 passes
**30 octobre 2026 · Rapport de stabilisation de PR #41 · Aucune fusion ni publication**

### Périmètre et attribution des travaux
- PR : https://github.com/zoutiFrutti/Interstice/pull/41 ; branche `feat/initiatives-decouverte-mobile-2026-10-30`.
- `main` contrôlé : `225a4bff0c98c2d605f5fd4382b5811dae36447f`, **non modifié** par cette session.
- Dernier code vérifié par CI : `ba2de98fd37ce5997e0eee8e2d432433398c6283`. Le run https://github.com/zoutiFrutti/Interstice/actions/runs/41118443716 a réussi **43/43 tests Node et 15/15 Chromium**, zéro échec, avec artefacts de captures.
- Les commits `0ecd371` (focus), `015d392` (attente du filtre Gaillac), `206020b` (confinement 320px) **étaient poussés par un autre travail parallèle sur cette même branche** pendant notre contrôle : leur auteur n'est pas réattribué à La Développeuse. Notre contribution nouvelle : `187aa248` (mapping fictif TIS-001 et 2 tests Node), `ba2de98` (2 tests Chromium supplémentaires), relecture des correctifs et CI vérifiée.
- Les 11 fiches restent inventées ; les cartes restent des **schémas SVG d'ancres communales**, et la liste demeure complète.

**Convention de preuve :** FAIT signifie une opération réellement vérifiée, testée, écrite ou corrigée. BLOQUE indique qu'une constatation exacte ne peut pas être démontrée ; aucun résultat n'est inventé. « Test vert » est réservé à une exécution GitHub Actions sur SHA identifié.

### Lot 1 · Reproduire les échecs (passes 01–05)
| # | État | Action et preuve |
|---|---|---|
| 01 | FAIT | Lire PR #41 et le HEAD réel ; identifier les commits concurrents et utiliser `expected_sha` pour ne pas écraser leur travail. |
| 02 | FAIT | Vérifier l'exécution Node du run initial #41101912014 : job `test-core` réussi, à distinguer du navigateur échoué. |
| 03 | FAIT | Ouvrir les logs Chromium du même run : **10/13 réussis**, trois échecs confirmés, sans assimiler la CI à un test physique Android. |
| 04 | FAIT | Relever le débordement reproductible dans les logs : `scrollWidth=339`, `innerWidth=320`, soit 19 px en trop. |
| 05 | BLOQUE | Le log initial ne donne pas le **sélecteur exact** du composant responsable des 339 px. Les styles ont été inspectés, mais l'attribution rétrospective précise serait inventée. Un test de diagnostic des éléments qui débordent est désormais écrit et exécuté sur le code corrigé. |

### Lot 2 · Responsive et clavier (passes 06–10)
| # | État | Action et preuve |
|---|---|---|
| 06 | FAIT | Vérifier le confinement conservateur ajouté dans `cartes-compat.css` (`min-width:0`, retour de l'en-tête à la ligne sous 350px), **sans modifier** `cartes-design.css` du Graphiste ; commit contrôlé `206020b`. |
| 07 | FAIT | Ajouter dans Chromium la vérification des modes `communs/possibles × liste/carte` en **320/390/1280 px** avec description des éléments en débordement et captures 320px. CI verte #41118443716. |
| 08 | FAIT | Reproduire depuis les logs l'échec du focus au retour d'une fiche sans lieu ; comparer les sélecteurs et le test de clavier. |
| 09 | FAIT | Vérifier la correction `#map-unlocated-results a[data-id]` dans le sélecteur de restauration (commit existant `0ecd371`) et son test avec activation Entrée puis retour. |
| 10 | FAIT | Contrôler l'exécution Chromium corrigée : **15/15 tests réussis** au SHA `ba2de98`, incluant le retour clavier et le test historique qui échouait. |

### Lot 3 · Filtres et parité (passes 11–15)
| # | État | Action et preuve |
|---|---|---|
| 11 | FAIT | Lire les logs du désaccord « 3 attendus, 2 obtenus » après passage à la lecture possibles. |
| 12 | FAIT | Inspecter `filterMapEntries`, les ancres et la conservation volontaire du filtre `commune=Gaillac`. |
| 13 | FAIT | Confirmer que le test a été corrigé pour attendre **2 communes avec Gaillac actif**, puis **3 après effacement** (commit parallèle `015d392`), sans modifier les données pour satisfaire une attente fausse. |
| 14 | FAIT | Vérifier les tests de parité liste / groupes communaux, y compris plusieurs territoires pour un même projet ; mêmes filtres, sans score de popularité. |
| 15 | FAIT | Vérifier les états vides, la commune inconnue et le reset ; les tests Node et Chromium correspondants sont réussis dans #41118443716. |

### Lot 4 · Onze exemples, navigation, sécurité (passes 16–20)
| # | État | Action et preuve |
|---|---|---|
| 16 | FAIT | Examiner les **11 fixtures** de `cartes-data.mjs`, tous fictifs, sans contact ou adresse privée. |
| 17 | FAIT | Vérifier les quatre `kind` : initiative, besoin, ressource, projet, et les deux lectures préexistantes ; couverture Node réussie. |
| 18 | FAIT | Vérifier qu'une fiche sans commune reste lisible et ne crée pas de faux marqueur, puis contrôler son retour clavier. |
| 19 | FAIT | Contrôler le comportement si le module `cartes-map.mjs` échoue : repli vers la liste et impossibilité d'activer la carte ; test navigateur réussi. |
| 20 | FAIT | Ajouter un test qui ouvre **les onze URL profondes** une par une, confirme titre et provenance fictive, puis revient à la liste ; CI Chromium verte. |

### Lot 5 · Compatibilité documentaire TIS-001 (passes 21–25)
| # | État | Action et preuve |
|---|---|---|
| 21 | FAIT | Lire `coordination/TISSEUSE_CADRAGE_COOPERATIONS_ANNUAIRE_2026-10-30.md` et `coordination/TIS_001_PREPARATION_BILAN_PARTIEL_2026-10-30.md`. **Aucune structure réelle vérifiée** dans le bilan partiel au moment de la lecture ; aucune importation légitime. |
| 22 | FAIT | Préparer `cartes-tis-documentation.mjs` : statut de relation **distinct de `kind`**, sans nouvelle catégorie d'objet. `repere`, `referencement_accepte`, `cooperation_convenue` ne prouvent pas la publication. |
| 23 | FAIT | Définir **trois cas entièrement inventés** pour tester ces trois états, séparés du jeu des 11 fiches affichées et sans « partenaire » présumé. |
| 24 | FAIT | Tester le rejet des données non simulées et des IDs non fictifs, et une liste blanche qui ne recopie ni email, ni téléphone, ni nom injecté, ni adresse ; **deux nouveaux tests Node réussis**. |
| 25 | FAIT | Vérifier que `publicReady:false` est constant dans l'adaptateur et qu'aucune fonction d'import, de publication, de nouveau serveur ou de messagerie n'a été créée. Aucun nom de structure réelle n'a été ajouté au prototype. |

### Lot 6 · CI, compatibilité et rapport (passes 26–30)
| # | État | Action et preuve |
|---|---|---|
| 26 | FAIT | Exécutions automatisées déclenchées par les commits de la PR ; **run #41118443716 réussi sur `ba2de98`, 43 tests Node + 15 Chromium, tous réussis** ; logs et SHA consultés. |
| 27 | FAIT | Contrôle de l'intégrité de `cartes-design.css` : blob `07e8c54fff6cc4dfc66f42ba19cf364962e400c5`, identique à celui de PR #35 ; ajustements limités à `cartes-compat.css`. |
| 28 | FAIT | Artefact `interstice-apercu-mobile-fictif` confirmé sur #41118443716 (capture et preuves accessibles dans GitHub Actions, non publiées en tant que site). Tests 320/390/1280 et 11 liens profonds verts. |
| 29 | FAIT | Blocages restants établis : PR encore brouillon et **conflit Git avec `main`**, essais TalkBack et téléphone physique non réalisés ; consentement, corrections, publication et gestion des données réelles toujours non autorisés. |
| 30 | FAIT | Présent rapport déposé sur la **branche existante**, Journal commun complété sans effacer les archives, notification en commentaire de la PR. Une écriture GitHub **ne vaut pas accusé de réception par la conversation de La Relieuse**. |

### Contrat TIS-001 : séparation stricte
La Tisseuse distingue trois dimensions : **vérification documentaire**, **état de relation** et **autorisation de publication**. Une structure repérée ne devient pas une fiche publique. Une fiche acceptée ne prouve pas une coopération. Une coopération envisagée n'est ni une adhésion ni un mandat de contact.

`cartes-tis-documentation.mjs` est uniquement un outil de **prévisualisation documentaire en mémoire, avec champs fermés et valeurs inventées**. Les trois cas A/B/C ne figurent pas sur les cartes. Il ne traite aucun résultat de recherche de La Tisseuse, ne charge pas de fichier réel et ne produit aucune fiche publiable. Tout passage à des fiches réelles exige un contrat supplémentaire validé par l'Anarchitecte, la Juriste et les personnes concernées ; ne pas confondre accord de référencement et base légale.

### Résultat, captures, reproductibilité
- **Preuve d'échec initial :** https://github.com/zoutiFrutti/Interstice/actions/runs/41101912014 ; 10/13 tests navigateur, 3 échecs ; le job Node est réussi.
- **Preuve des trois corrections :** https://github.com/zoutiFrutti/Interstice/actions/runs/41118005969 ; **41/41 Node, 13/13 navigateur**.
- **Dernier code vérifié :** https://github.com/zoutiFrutti/Interstice/actions/runs/41118443716 ; **43/43 Node, 15/15 navigateur**, les deux jobs réussis au SHA `ba2de98`.
- **Captures :** artefact `interstice-apercu-mobile-fictif` dans le dernier run, avec notamment les nouvelles vues 320px. Les captures sont provisoires et n'attestent pas une revue humaine.
- **Reproduction :** `node --test tests/initiatives-core.test.mjs`, serveur HTTP local `python3 -m http.server 8000`, puis `node --test tests/initiatives-browser.test.mjs` après installation de Playwright 1.56.1 et du Chromium correspondant. Le workflow du dépôt décrit l'environnement Ubuntu 24.04.

### État final à transmettre
**Terminé dans la démonstration :** corrections des trois régressions testées et vertes, parité de navigation et filtres, surveillance 320/390/1280, onze liens profonds, revue de la confidentialité, mapping TIS de démonstration isolé.

**À vérifier hors CI :** lecteur d'écran réel, téléphone Android physique, revue graphique des captures et traçabilité de la cause exacte des anciens 339px si encore utile. **En attente d'une décision humaine :** publication et échanges avec des organisations réelles, intégration source/API/RLS, confidentialité et droit au retrait. **Non fusionné et non déployé.**

La prochaine action utile de La Relieuse est de faire vérifier la PR #41 par le Graphiste, la Juriste et une personne utilisatrice sur téléphone, puis de préparer une résolution conservatrice des conflits avec `main`, **sans effacer le Journal des autres ateliers**.
