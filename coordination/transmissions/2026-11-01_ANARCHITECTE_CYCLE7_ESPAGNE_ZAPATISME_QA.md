# LA FAILLE NOIRE × INTERSTICE — L'Anarchitecte, cycle 7
**1er novembre 2026 — CONTRAT CANDIDAT, aucune fusion ni publication.** Zout porte seul l'initiative ; aucune décision d'un collectif humain ou des ateliers IA ne peut être présumée.

## Passe 1 — Branches et états effectivement rapprochés
| PR | SHA de tête au contrôle | Effet admissible |
|---|---|---|
| #42 | `347f31c9b2d6a9ad856dcb7500fb982dfc85a602` | Correctifs de formulaires, pas un moteur documentaire |
| #50 | `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb` | Contrat/gabarits fiches, non publication |
| #51 | `6808aec0f5d2d96e07702cf2c862aa383412fcee` avant cycle | Contrat Wiki + lien réparation matérielle corrigé sur cette seule branche |
| #57 | `2d8bb7960d7e2a4f1f3428841cbcc705a0962877` | Maquettes parcours critiques, non publication |
| #59 | `755588993e58e3a97d60d27be4d99f387a81316c` | Gabarits luttes/enquêtes/CIC candidats |
| #61 | `b101de10f8044ff486880c50a10091700428a4ca` | Dix profils documentaires candidats |
| #63 | `4988dbce3606fa6c319089354d11f32b47436b04` | États et 15 chemins de première édition dans une maquette |

La transmission Graphiste #63 a été lue : deux **accords éditoriaux individuels** signalés pour ARCH-002/ARCH-007, **aucun prêt pour publication** ; 15 pages `A_CORRIGER`, neuf `BLOQUEE` selon tri initial de La Lectrice. Les corrections finales ne sont pas assemblées. Le lien `wiki-mutualiser-materiel.html` a été remplacé **sur #51 uniquement** par `wiki-ecologie-sociale-environnement.html#axe5` au commit `1ebefa0efa3415b423cd14b74ef4ed89e1db6b21`. La présence du correctif ailleurs n'est pas acquise.

## Passe 2 — Contrat géographique sans nouveau site ni base
Conserver les routes `wiki.html`, `bibliotheque.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-politique-institutions-regimes.html`, `wiki-feminismes-histoire-egalite.html`, `wiki-capitalisme-classes-travail.html`, `wiki-frontieres-migrations-colonialisme.html`, `wiki-ecologie-sociale-environnement.html`, et `wiki-decision-collective.html`. Pas de nouvelle catégorie principale.

**Dossier Espagne candidat** : un dossier éditorial **parent documentaire**, non une page HTML publique créée immédiatement. Enfants documentaires : **Aragon**, **Catalogne**, **Murcie–Albacete**, puis autres ensembles territoriaux au fur et à mesure des recherches réelles. Relations typées :
- `est_un_territoire_de`, `periode`, `organisation_documentee`, `biographie_associee`, `source_attestant`, `evenement_lie`, `contradiction`, `comparaison_regionale`.
- Chaque territoire porte : époque, territoire/sous-région, organisations, acteurs individuels/collectifs, événements, sources **primaires et secondaires distinguées**, limites de consultation, désaccords et statut.
- Les relations entre Catalogne, Aragon et Murcie–Albacete **ne supposent pas la même expérience**. Un renvoi n'établit ni adhésion politique ni chaîne causale sans preuve.
- Depuis les articles Wiki existants : Espagne → `wiki-socialismes-communismes-anarchismes-autogestion.html`, histoire du travail et des luttes → `wiki-capitalisme-classes-travail.html`, trajectoires de femmes → `wiki-feminismes-histoire-egalite.html`, persécutions/exils → `wiki-frontieres-migrations-colonialisme.html`. Ces pages sont des **cibles confirmées par le dépôt**, non les nouveaux dossiers régionaux.
- Éviter Wikipédia redondant : une fiche régionale n'est justifiée que par une enquête autonome (pièces, conflits de sources, recoupement territorial), sinon renvoi bibliographique.

**Enquêtes zapatistes : architecture documentaire distincte du dossier Espagne, même Wiki.**
- Une collection/thème autonome **ZAP candidat** sous histoire des mouvements, territoires/communs et expériences d'autonomie. Ne pas l'imbriquer comme sous-dossier « Espagne », ne pas adopter un unique modèle « anarchisme » comme qualification imposée.
- Trame : territoire/moment historique, organisation ou communiqué **public**, chronologie, voix de la communauté, sources, traductions et biais, contradictions, conséquences concrètes et réserves. Distinguer historique documenté/activité présente/hypothèse.
- Informations concernant des personnes vivantes, lieux précis, itinéraires, réseaux et données sensibles : **pas de fiches exposant des renseignements privés ou des cibles vulnérables**. Privilégier déclarations publiques, collectifs et localisation large quand approprié.
- Renvois vers `wiki-frontieres-migrations-colonialisme.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-ecologie-sociale-environnement.html`, sans mélanger documents zapatistes et anarchisme espagnol.

**Parcours critiques existants** : `wiki.html#ecologie`, `#democratie`, `#cooperatives` sur la candidate d'intégration historique (SHA `0ad8532c6cda858dc059e62ba50bf31333779fc7`, non démontré comme HEAD actuel). L'Espagne est un renvoi historique/contextuel aux parcours démocratie/communs ; les zapatistes apportent une analyse distincte des communs, non une simple illustration idéologique. La chaîne article → affirmation → sources → objections → exercice facultatif → retour à l'article reste inchangée.

**Antidoublon et IDs** : conserver `BIO`, `ASSO`, `ARCH`, `COL`, `EXP`, `FN`, `ÉCL`, `LUT` existants. Les titres « Espagne », « Aragon », « Catalogne », « Murcie–Albacete », « Zapatistes » sont à ce stade des **intitulés candidats, sans attribution d'ID public ou création d'URL**. `related_ids` n'est cliquable que si la cible est présente ET visée. Éviter les fiches sans renvoi entrant ou des pages de recherche isolées.

## Passe 3 — Plan précis de navigation et QA
**Ajouts de liens à préparer**, non écrits dans les pages publiques tant que textes et visas manquent :
1. `wiki-socialismes-communismes-anarchismes-autogestion.html` : bloc « enquêtes territoriales » contenant Espagne, Aragon/Catalogne/Murcie-Albacete **seulement lorsque leurs documents sont admis**.
2. `wiki-feminismes-histoire-egalite.html` : renvois vers biographies/organisations documentées des femmes et travaux situés, pas une liste de noms non sourcés.
3. `wiki-frontieres-migrations-colonialisme.html` : exils espagnols et communautés autochtones du Chiapas uniquement lorsque la comparaison et les sources sont précises ; ne pas assimiler des situations différentes.
4. `wiki.html#democratie` et `#cooperatives` : liens de retour depuis des dossiers historiques éventuellement approuvés ; conserver navigation sans JS.
5. `bibliotheque.html` : sources FN approuvées, références espagnoles et zapatistes différenciées par auteur/édition/langue/niveau de lecture, sans reproduire sans droit.

**QA sur SHAs vérifiés** : existence de `wiki.html` à l'identique sur les branches #51 et #63, blob `a1a96cffed19dacd12016c30325fe395a00abba7` ; aucun chemin Espagne/zapatistes trouvé dans les arbres de `main` et #63 lors de la recherche sur noms de fichiers. Ce contrôle **ne prouve pas qu'aucun document source n'existe ailleurs dans Drive, les conversations ou d'autres branches**. La candidate PR #63 ne fournit pas de nouvelle page régionale vérifiable, et ses gabarits restent des maquettes.

**Test à faire sur une branche d'assemblage au SHA exact**, sans publication : index de tous les fichiers locaux, liens `href` et ancres, retour à l'affirmation, sources et niveau de lecture, statut vs droits vs publication, 320/390/1280 px, clavier et focus, affichage sans JS, noindex sans prétention de confidentialité, absence de brouillons non autorisés dans sorties HTML/JS/JSON/sitemap et artefacts. Les versions approuvées doivent rester immuables. **Aucun essai navigateur réel ou vérification de chaque lien externe n'est revendiqué dans cette passe.**

**Blocages** : aucun fichier régional/ZAP admis et figé sur SHA pour créer les liens ; ni source primaire ni revue contradictoire individuelle consolidées dans #51 ; maquettes #63 sans intégration des quinze corrections ; verrou de publication distinct de tout avis Graphiste/IA. La V2.6 et les chartes ne sont **pas adoptées collectivement**, l'initiative reste individuelle.

**Résultat concret du cycle 7** : contrat territorial/chronologique inédit déposé dans la PR #51, cartographie des routes existantes, blocages vérifiables. Pas de nouveau backend, page vide, migration, merge ni publication.
