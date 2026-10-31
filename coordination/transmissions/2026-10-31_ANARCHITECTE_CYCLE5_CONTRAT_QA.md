# L'Anarchitecte — Cycle 5 : contrat de navigation et QA
31/10/2026. **Candidate interne ; aucun visa, publication, fusion ou adoption collective.**

## Passe 1 — Réconciliation précise
Référence PR #51, tête avant écriture `65bfd9add17ccdf5e79eb2a425d44f78285869b7`. La branche `integration/premiere-edition-candidate-2026-10-31` contient `wiki.html` (blob `6886f47be35f2ca66c5fdd1e979df04e7709b53e`), `edition-premiere/decisions.json` (blob `730a68e5a3a95dbd5c938523b27cbe8b84b8e935`) et `tests/parcours-critiques-integration.test.mjs` (blob `6d6659d9fff73c28747379693d7a5064948584dd`), consultés sur la branche. SHA historique d'assemblage attesté dans la transmission de La Relieuse : `0ad8532c6cda858dc059e62ba50bf31333779fc7`. Les blobs cités correspondent aux mêmes éléments de ce SHA dans le contrôle précédent ; le HEAD actuel n'a pas été certifié indépendamment.

La candidate conserve trois blocs dans `wiki.html`, ancres `#ecologie`, `#democratie` et `#cooperatives`. **Aucune occurrence** `ÉCL-`/`LUT-`/« Enquêter sur le pouvoir »/« Luttes et héritages » détectée dans ce `wiki.html`. PR #57 reste une maquette graphique ; PR #41 relève d'un prototype d'initiatives et ne constitue pas la navigation documentaire. Préserver les corrections de La Lectrice, notamment PR #44.

Les identifiants `ÉCL-001..004` et `LUT-001..013` appartiennent au registre documentaire de la branche de coordination PR #43 ; ne pas les créer une seconde fois en URL, catalogue ou base. Onze ressources uniques pour ÉCL-001/003 car EJAtlas est commun aux deux. CIC, Calafou, FairCoop sont liés historiquement mais **distincts**.

## Passe 2 — Architecture candidate, mêmes routes
- **« Enquêter sur le pouvoir »** : point d'entrée candidat dans le bloc démocratie de `wiki.html` après relecture, et renvois de `wiki-politique-institutions-regimes.html`, `wiki-capitalisme-classes-travail.html` et `wiki-liberte-numerique-ia-surveillance.html`. Chaîne : affirmation → enquête signée/datée → pièce primaire → méthode et attribution → objections et réponses → retour à l'article. Les organisations tierces n'ont pas de partenariat implicite.
- **« Luttes et héritages »** : point d'entrée candidat dans le bloc écologie de `wiki.html` après relecture ; pages cibles `wiki-ecologie-sociale-environnement.html` (ancres existantes `#axe3` et `#axe6`), `wiki-logement-habitat-droit-ville.html`, `wiki-politique-institutions-regimes.html` et `wiki-socialismes-communismes-anarchismes-autogestion.html`. Navigation en HTML natif (sommaire/table) par **territoire, époque, type de source, résultat matériel/judiciaire/administratif et héritage** ; tout filtre interactif reste facultatif et sans compte. Résultat « inconnu » jamais assimilé à « victoire ».
- **Parcours coopératives** : relier `ÉCL-004` au bloc `#cooperatives` déjà présent, en respectant incertitude d'activité 2026 ; relier ÉCL-003 comme méthode, et non troisième base de fiches.
- Réutiliser les CSS/gabarits de PR #50/#57 après diff ; pas de nouvelle route `luttes.html`, `enqueter.html`, pas de nouveau backend et pas de système de comptes.
- **Plan de renvois** : `wiki.html#democratie` ⇄ politique/décision/travail ⇄ sources ÉCL-001/003 si visées ; `wiki.html#ecologie` ⇄ écologie/territoires ⇄ luttes ÉCL-002 si visées ; `wiki.html#cooperatives` ⇄ autogestion/travail ⇄ CIC ÉCL-004 si visée. Les flèches ne sont **pas des liens actuels** : ne les créer qu'en présence d'une véritable destination approuvée.

## Passe 3 — Résultats QA exacts et limites
- La candidate intégrée contient trois parcours ; le test Node existant vérifie l'existence des IDs `ecologie`/`democratie`/`cooperatives`, 3 exercices, des liens vers 3 pages, et les ancres internes de `wiki.html`. C'est **une couverture partielle**, pas un test de tous les liens.
- `edition-premiere/decisions.json` retourne `"authorizations": []` et `"status": "AUCUN_VISA_EDITO_EXPLICITE"` : **zéro dossier supplémentaire admissible** par le double verrou sur cette version.
- Sources ÉCL et LUT : aucune occurrence dans le `wiki.html` inspecté, donc **non intégrés** et non accessibles comme parcours publiés.
- Le lien manquant `wiki-mutualiser-materiel.html` et la faiblesse des renvois des quatre pages étaient identifiés dans l'audit précédent PR #51 ; leur correction sur le SHA assemblé **n'a pas été revalidée**.
- L'audit exhaustif des 24 pages a été tenté, mais interrompu par la limite d'appels de l'outil ; **ne pas déclarer le test 24/24 réussi ni supposer tous les liens valides**.
- Pas de test navigateur mobile exécuté par ce cycle ; CI verte **rapportée** par la coordination sur l'ancien SHA `0ad8532...`, pas une exécution du présent contrat. 320/390/1280, clavier, zoom 200 %, navigation retour, liens vers sources, statut V2.6, contrôle des artefacts et sécurité RLS restent une QA à réaliser sur un nouvel assemblage.
- Risque de confidentialité : les brouillons dans ce dépôt GitHub **public** sont accessibles par URL même lorsqu'ils ne figurent pas dans les menus ; ne pas y stocker de données privées. Aucun document ÉCL candidat ne doit se retrouver dans HTML/JS/JSON, sitemap ou artefact de prévisualisation destinés à la publication.

**Verdict : CONTRAT DOCUMENTAIRE ACCUEILLABLE, INTÉGRATION ÉCL NON RÉALISÉE, QA DE SORTIE BLOQUÉE.** La V2.6 et les chartes restent des propositions **non adoptées collectivement**. Les contenus ÉCL restent candidats. Ne jamais modifier les textes approuvés ni leurs statuts.

### Changements exactement réalisés dans cette passe
1. Ajout de ce document dans la **PR #51**, sans modification des HTML éditoriaux.
2. Transmission aux PR de La Développeuse, Graphiste et Relieuse (commentaires GitHub séparés).
3. Aucun fichier de l'assemblage technique modifié : ce n'est pas une fausse prétention de correction fonctionnelle.

### Contrôles exigés au prochain SHA d'assemblage
Existence et unicité ID ; tous chemins/ancres internes et retour à source ; liens croisés par cible publique visée ; ne pas exposer les dossiers candidats ; V2.6/chartes jamais « adoptées » ; HTML accessible sans compte/JS, mobile/Tab/Entrée/impression, test réel et rapport de CI sur HEAD exact ; aucun déploiement automatique.
