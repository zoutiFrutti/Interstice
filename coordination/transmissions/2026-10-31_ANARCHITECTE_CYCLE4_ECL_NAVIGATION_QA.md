# LA FAILLE NOIRE × INTERSTICE — L’Anarchitecte, cycle 4
31 octobre 2026 · **Contrat candidat**, aucune publication, fusion ni adoption collective.

## Références et versions observées
- PR #51 : branche `atelier/anarchitecte-contrat-editorial-20261031`, SHA de départ `d8266cbbc15dcbdc20ecfa4161ab61b50680c578`. Contrats précédents de recherche locale, 24 routes, parcours critiques.
- Branche d'intégration `integration/premiere-edition-candidate-2026-10-31` : **SHA documenté et inspecté** `0ad8532c6cda858dc059e62ba50bf31333779fc7`. Rapport cycle 3 : GitHub Actions run #41218947066 vert sur ce SHA, sans validation humaine ni publication. La lecture par chemin de branche a confirmé la présence de `wiki.html` avec trois parcours (`ecologie`, `democratie`, `cooperatives`), `assets/parcours-critiques.css`, tests Node et navigateur, et `edition-premiere/decisions.json` avec `authorizations: []`. Ne pas prétendre que le SHA historique est forcément le HEAD actuel de cette branche.
- ÉCL : `coordination/eclaireuse/REGISTRE_ECL_001_004_2026-10-31.json`, `coordination/eclaireuse/PLAN_INTEGRATION_LUTTES_ET_ENQUETES_2026-10-31.md`, `coordination/cycle4/ECL_TRANSMISSIONS_2026-10-31.md` sur PR #43, et revue Médiathèque Cycle 4. Ces fichiers sont des **candidats**, non publiés. Registre ÉCL-001 (8 sources), ÉCL-003 (4 sources dont EJAtlas commun : **11 uniques**), ÉCL-002 (13 LUT numérotées de travail), ÉCL-004 (CIC). Identités/licences et situation actuelle parfois non vérifiées.

## PASSE 1 — Réconciliation sans nouvelle architecture
Conserver les **six familles du Wiki** et les routes `wiki.html`, `bibliotheque.html`, `wiki-ecologie-sociale-environnement.html`, `wiki-politique-institutions-regimes.html`, `wiki-capitalisme-classes-travail.html`, `wiki-decision-collective.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`, `wiki-logement-habitat-droit-ville.html` et les autres pages thématiques. Garder les 3 parcours comme sections existantes de `wiki.html#parcours-critiques`, avec ancres `#ecologie`, `#democratie`, `#cooperatives`. Les pages de fond restent les articles, pas des duplications sous « parcours ».

ÉCL-001 = ressources d'enquête / institutions / entreprises, rattachées à politique, travail et Médiathèque. ÉCL-002 = LUT-001..LUT-013, reliées aux pages écologie, libertés, droit à la ville, histoire ; **pas 13 pages ajoutées par défaut**. ÉCL-003 = méthodes de vérification/recours/assemblée/carte, reliées aux mêmes contenus ; **EJAtlas une seule notice, deux relations**. ÉCL-004 = une étude spécifique de la Cooperativa Integral Catalana, renvois coopératives/autogestion, **ne pas assimiler** CIC à Calafou ou FairCoop ; présence actuelle à dater.

Charte et manifeste : **V2.6 candidate, non adoptée** ; chartes candidates, non approuvées collectivement. Aucun lien/badge « adopté », aucun calcul automatique d'adhésion ou de partenariat depuis une référence.

## PASSE 2 — Rubriques candidates à insérer
**« Enquêter sur le pouvoir »** : une section d'orientation **proposée dans `wiki.html`**, avec point d'entrée depuis `wiki-politique-institutions-regimes.html` et `wiki-capitalisme-classes-travail.html` après visa. Fil de lecture : question → affirmation datée → entité/organisation précisément identifiée → document primaire → méthode et limites → réponse/objection → conséquence vérifiée → retour à la page d'origine. Sources dans `bibliotheque.html` via fiches FN/sources existantes approuvées ; sinon **texte non cliquable « dossier en préparation »**, pas faux lien. BL00D.MONEY : responsable, méthode et licence non corroborés, **ne pas reprendre d'allégation**. Who Profits et AFSC Investigate sont potentiellement dépendantes, pas deux preuves indépendantes automatiques. OpenCorporates : ne pas importer une base entière ni scraper. EJAtlas : une référence canonique, droits des médias distincts.

**« Luttes et héritages »** : section d'orientation **proposée dans `wiki.html` et pages pertinentes déjà présentes**, en réutilisant les cartes, tableaux et CSS de PR #50/#57 sans nouveau menu racine, carte ou backend. Un **tableau accessible natif** ou liste filtrable facultativement par JS et entièrement lisible sans JS. Navigation à cinq facettes éditoriales **déjà stockables dans un document de travail** : `territoire` (pays/région, précision connue), `epoque` (intervalle ou période documentée), `type_lutte` (environnement, droits sociaux, antiracisme, foncier, etc.), `resultat` (attesté, contesté, non établi ; séparer statut administratif/judiciaire du résultat matériel), `source` (primaire, secondaire, témoignage, avis contradictoire, degré de consultation). Ne pas appeler « victoire » un recours ou une intention. Garder le nombre, les liens et les filtres uniquement sur dossiers visés.

**Modèle minimal d'une ligne LUT, interne à la coordination tant que non visée :**
`{id, titre, territoire, periode, type_lutte[], objectif, evenement_et_decision[], resultat_materiel, heritage, incertitudes[], sources[{url,document,date,type,niveau_lecture}], objections[], editorial_status, version, rights_status, related_ids[]}`.
Utiliser uniquement les identifiants LUT-001..013 du registre ÉCL existant ; une relation vers ÉCO/EXP/ARCH/FN est une **relation documentaire**, non un partenariat. Garder URL canonique de destination et anchor uniquement si le texte HTML correspondant est réellement inclus et autorisé.

**Renvois candidats** (ne pas ajouter d'ancres sans sections effectivement présentes) :
- `wiki.html#parcours-critiques` → parcours `#ecologie` : ÉCL-002/LUT A69, Sivens, Sainte-Soline, EJAtlas et luttes écologiques ; `wiki-ecologie-sociale-environnement.html#axe3` et `#axe6`.
- `wiki.html#democratie` → ÉCL-001/003 (sources, pouvoir informel, droit d'association) ; `wiki-politique-institutions-regimes.html`, `wiki-decision-collective.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`.
- `wiki.html#cooperatives` → ÉCL-004 (CIC), EXP-004 Mondragón, EXP-002 caisse alimentaire, liens à `wiki-socialismes-communismes-anarchismes-autogestion.html` et `wiki-capitalisme-classes-travail.html`.
- `wiki-logement-habitat-droit-ville.html` et `wiki-autonomie-materielle-savoir-faire.html` : territoire, foncier, droits d'usage, sans attribuer de services ou coopération à des collectifs non consultés.

**Exercice critique** : article → affirmation → sources → objections → question de comparaison facultative → retour à ancre de l'article. Consultation sans compte, sans collecte ni score, nav clavier/320-390-1280px, zoom 200 %, impression avec sources. Si des filtres client sont ajoutés, HTML de base doit rester exhaustif sur le **sous-ensemble approuvé**, sans dépendre d'une API.

## PASSE 3 — QA du SHA exact de la candidate intégrée
**SHA contrôlé : `0ad8532c6cda858dc059e62ba50bf31333779fc7`**, lecture GitHub des éléments mentionnés ci-dessus. Résultats fondés sur fichiers exacts et rapport cycle 3 ; **pas de nouvelle exécution navigateur dans cette passe**.

| Critère | État et preuve | Verdict |
|---|---|---|
| Même site, mêmes routes | `wiki.html`, pages Wiki existantes et `assets/parcours-critiques.css` | Présence vérifiée |
| Trois parcours | dans `wiki.html`, IDs `ecologie`, `democratie`, `cooperatives`, titres et blocs sources/objection/exercice | Présence vérifiée, contenu candidat |
| Test automatisé local | `tests/parcours-critiques-integration.test.mjs` vérifie 3 IDs, 3 `pc-step`, ancres internes du Wiki, liens vers articles | Couverture partielle |
| CI cycle 3 | run #41218947066 rapporté success sur ce SHA | Succès rapporté, pas nouvelle vérification indépendante du navigateur |
| Visas | `edition-premiere/decisions.json` : `authorizations: []` | **BLOQUANT** pour nouvelle édition |
| Les pages d'articles contiennent-elles les nouveaux ECL ? | Pas d'ID ÉCL/LUT observé dans trois pages thématiques inspectées ; dossiers ÉCL restent en coordination PR #43 | **NON INTÉGRÉ** |
| Retour à l'article | Tests sont présents, mais aucune nouvelle action utilisateur testée directement ici | À éprouver sur SHA d'assemblage |
| 24 pages / liens internes | Audit antérieur PR #51 : `wiki-mutualiser-materiel.html` absent et certains renvois thématiques faibles | **Non soldé** : audit complet 24/24 non terminé dans ce cycle |
| Exposition des brouillons | Preview locale `artifacts/edition-premiere-preview/` non reliée au Wiki d'après README ; dépôt GitHub public ≠ stockage privé | **À auditer** sur artefacts et chemins publics avant sortie |
| V2.6/chartes | Aucun statut adopté collectif autorisé ; toute représentation « adoptée » interdite | Critère éditorial bloquant |

**Note QA sécurité :** Une URL GitHub publique d'un dossier « candidat » peut être accessible même si elle n'apparaît pas dans la navigation. Ne verser aucune information personnelle sensible dans ce dépôt ; l'absence de lien depuis l'accueil n'est pas une mesure d'accès privé. La vérification des fichiers HTML statiques ne suffit pas à exclure un brouillon dans un artefact CI, sitemap, JSON ou prévisualisation publique.

### Corrections précises demandées à La Développeuse
1. Sur branche candidate existante, **ne pas créer** `enqueter.html` ou `luttes.html` : commencer par sections et ancres dans les routes existantes, uniquement après visa des notices.
2. Préserver les corrections des articles de La Lectrice, en particulier PR #44 ; ne pas écraser les sources/objections par les styles de PR #50/#57.
3. Maintenir et tester les liens de retour avec ancre, vérification réelle des IDs/targets et absence de liens vers LUT/ÉCL non publiés.
4. Produire un rapport sur SHA nouvellement assemblé : tous les liens locaux/ancres, catalogue approuvé uniquement, recherche et filtres dégradés sans JS, nav mobile/clavier, doublons EJAtlas et FN, erreurs, droits, indices non adoptés, absence d'exposition de brouillons.
5. Ne pas confondre CI verte du prototype avec validation éditoriale ou sécurité complète. Ne pas faire de nouvelle migration Supabase, ni ouvrir les formulaires.

### Décision pour La Relieuse
Conserver les quatre ÉCL à `CANDIDAT_NON_APPROUVE`; demander pour chaque notice/cas exact version + sources primaires + objections + droits + visa humain et état des dates. **V2.6 et chartes restent candidates / non adoptées collectivement.** Le double verrou technique doit rester fermé avant approbation humaine exacte.

**Conclusion :** contrat de navigation et matrice de renvois prêts pour revue, pas de nouveau contenu public, pas de nouvelle plateforme ni de base. QA **RÉSERVÉE / sortie bloquée** jusqu'à visas et audit complet du SHA assemblé.
