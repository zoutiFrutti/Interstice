# Développeuse : premier assemblage frontend R1 — 2026-11-02

## Sources et arbitrages
Base commune `2864ada2a2847de7e8cc53d33ef14398c6389815` ; arbitrages 03, plan 04, mandat 05 consultés. Le frontend commun avait accueil/Wiki/Bibliothèque mais pas de nav vers Atlas/Parcours ; aucun véritable Atlas cartographique. Source graphique Graphiste C10 `design/graphiste-cycle10-delta-2026-11-01` comparée : `index.html`, `bibliotheque.html`, `style.css` à SHA identiques sur la base commune et la branche Graphiste, donc ne pas réimporter ces fichiers. L'identité officielle `assets/logo-interstice.svg` est préservée.

## Travail fonctionnel
Navigation commune accessible clavier sur accueil, Wiki, Bibliothèque, Atlas et Parcours. Nouvelles pages `atlas.html`, `parcours.html` : index navigables vers ressources existantes ; aucune géolocalisation, relation ou carte interactive simulée comme vérifiée. Style responsive `assets/integration-navigation.css`. Les fiches Wiki et le catalogue local restent dans leurs pages d'origine. Première situation « droits en manifestation » mentionnée sans contenu juridique non relu.

## Protection P0 et état honnête
Aucun formulaire de soumission ajouté, aucun service ni API activés, aucun fichier Supabase/SQL édité. Les fonctions de soumission restent suspendues dans l'état relevé précédemment. Le contrat Resource/SourceRef/Relation de R1 reste candidat, aucune migration/adoption. Accueil, Wiki et Bibliothèque : **fonctionnels statiques** ; Atlas **index documentaire seulement** ; Parcours **liens statiques** ; carte-logo, fiche offline, 10 notices et PWA **non implémentés**. Tests clavier/responsive automatisés ne remplacent pas les lecteurs d'écran réels.

## Rollback et suite
Revert du commit d'intégration sur cette seule branche, puis CI. Attente des variantes Graphiste, choix humain, statuts éditoriaux et droits. Aucun merge, déploiement, diffusion ou publication.
