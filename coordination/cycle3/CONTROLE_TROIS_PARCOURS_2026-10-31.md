# Cycle 3 — Passe 3 : rapprochement et vérification des parcours

**Candidate technique contrôlée** : `integration/premiere-edition-candidate-2026-10-31` SHA `0ad8532c6cda858dc059e62ba50bf31333779fc7`. Workflow GitHub « Première édition - candidat fermé et lots à visa », run [41218947066](https://github.com/zoutiFrutti/Interstice/actions/runs/41218947066), **succès sur ce SHA**. Ce constat CI ne constitue pas un test physique ni un audit complet de sécurité.

**Preuve de présence** : `wiki.html`, `assets/parcours-critiques.css`, `tests/parcours-critiques-integration.test.mjs` et `tests/parcours-critiques-integration.browser.test.mjs` dans la candidate. Les tests définissent trois exercices, ancrages `ecologie`, `democratie`, `cooperatives`, contrôles navigateur 320/390/1280, clavier/retour et interdiction d'introduire des articles historiques en tant que pages approuvées. L'exécution CI du SHA est constatée réussie, sans prétendre à une épreuve avec de vrais utilisateurs.

| Parcours | Articles et sources | Apports spécialisés | Fonction technique / réserve |
|---|---|---|---|
| Écologie et alimentation | `wiki-ecologie-sociale-environnement.html`, ÉCO-001A/B/C, fonds 20 ressources, étude écologie et alimentation | La Penseuse : distinctions faits/choix éthiques ; Tisseuse : cas alimentaires/écologiques ; Médiathèque : liens de sources ; Lectrice : page écologie **À CORRIGER** | Exercice en prototype candidat dans le Wiki ; les chiffres, liens externes et la bibliographie finale nécessitent visa avant publication |
| Démocratie et pouvoir | `wiki-politique-institutions-regimes.html`, `wiki-decision-collective.html`, études de pouvoir informel | Lectrice : deux pages **PRÊTES À SOUMETTRE**, pas approuvées ; Tisseuse : expérience démocratique candidate ; Anarchitecte : routes | Navigation et ancrages implémentés en prototype ; aucune procédure présentée comme charte adoptée |
| Coopératives, travail et communs | ASSO-008 La Marmite, ARCH-007 déjà approuvé éditorialement, `wiki-socialismes-communismes-anarchismes-autogestion.html`, `wiki-capitalisme-classes-travail.html` | Lectrice : ASSO-008 et page autogestion prêts à soumettre ; page travail À CORRIGER ; Tisseuse : cas coopératif candidat | Exercice de comparaison règles / pratiques, sans preuve d'application implicite |

**États à ne pas confondre :** trois prototypes intégrés dans une branche candidate **avec CI verte** ; **zéro parcours rendu public par ce constat**, aucune validation du contenu de ces exercices par Zout. Maquettes de PR #57 et composants de PR #50 sont des sources graphiques distinctes ; les éventuelles corrections concurrentes exigent un diff avant fusion.

**Blocage commun** : `edition-premiere/decisions.json` reste sans `authorizations` malgré les deux accords individuels au registre. Double verrou non réconcilié ; droits, RGPD, identité réelle d'éditeur, canaux de rectification et exposition brouillons restent à contrôler sur l'ensemble de l'assemblage. Ne pas ouvrir les formulaires sans validation serveur.

**Action suivante de La Développeuse/L'Anarchitecte/La Graphiste** : tester sur un nouvel SHA d'assemblage après reprises éditoriales et juridiques ; étiqueter les exercices candidats et vérifier le contenu exact affiché. La Relieuse demande des visas sur texte exact ; elle ne les présume pas. Aucun merge ni déploiement.
