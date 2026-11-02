# Assemblage Graphiste + Développeuse — première passe réelle

Date : 2026-11-02. **Branche candidate, pas une validation de sortie.**

## Origine et méthode

Base : `integration/r1-commune-candidate-20261102`. Sources :
- `integration/r1-dev-frontend-fonctionnel-20261102` (5 commits en avance à la comparaison initiale, sans retard) ;
- `design/integration-graphiste-20261102` (10 commits en avance, sans retard), PR #128.

Les deux branches étaient **ahead 5/10, behind 0** par rapport à la base commune au moment de la comparaison. Aucun conflit de chemin entre leurs changements : la Développeuse modifie les pages racine ; la Graphiste fournit un répertoire autonome `integration-graphique/`.

## Fichiers effectivement intégrés

**Développeuse** : `index.html`, `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html`, `assets/integration-navigation.css`, deux tests de navigation, workflow `r1-frontend-candidate.yml`, rapport frontend.

**Graphiste** : `integration-graphique/index.html`, `integration-graphique/graphiste-integration.css`, test graphique, workflow `graphiste-integration-20261102.yml`, transmission. Les variantes **A radiale** et **B bras extensibles** sont conservées sans modifier `assets/logo-faille-noire.svg`.

**Raccord réel** : lien sur la page d'accueil vers `integration-graphique/index.html`, commit `3ef68fffc892eedfd60add255c32af1c93eba915`.

## État honnête

- Accueil/Wiki/Bibliothèque/Atlas/Parcours : **pages statiques reliées**, pas un produit complet.
- Carte-logo A/B : **comparaison graphique accessible par lien**, **non adoptée** et non intégrée comme composant de l'accueil définitif.
- Atlas : **index documentaire**, pas une carte interactive ni des données géolocalisées validées.
- Entraide, notices des dix œuvres, fiche hors ligne, PWA : **non intégrées** dans cette passe.
- P0 : aucune modification des formulaires, endpoints Supabase ou schémas ; blocages juridiques maintenus.
- QA : tests des branches sources déclarés par les ateliers ; **tests du HEAD assemblé à confirmer par CI**. Pas de revendication de test tactile, lecteurs d'écran réels, ni d'inspection visuelle finale.

## Prochaines passes

1. Contrôler les deux workflows sur le SHA de cette branche et corriger les régressions.
2. Faire examiner les variantes par Zout.
3. Harmoniser la navigation, les gabarits et le CSS entre les pages racine et les prototypes, sans remplacer la structure fonctionnelle par une maquette.
4. Ajouter les contenus vérifiés et seulement après revue des droits/P0.
5. Tests multi-écrans, clavier, zoom, lecteur d'écran et vérification humaine.

**Aucune fusion vers `main`, publication, déploiement, activation de service ni adoption de schéma.** L'intégration est sur une branche candidate avec PR à relire.
