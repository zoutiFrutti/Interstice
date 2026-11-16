# C03-GRA-03 — Composants R6 et réemploi
**Date :** 2026-11-03. **Audit de sources, non essai V2.**

| Source R6 | Réemploi | Condition |
|---|---|---|
| `assets/logo-faille-noire.svg` | Identité Faille noire | Octets inchangés |
| `assets/logo-interstice.svg` | Identité Interstice | Octets inchangés |
| `design-system/faille-navigation-interactive.html` | Structure d'entrée, SVG et liste HTML | Retirer uniquement les libellés périmés lors d'un lot autorisé ; ne pas reprendre ses cinq cibles comme V2 |
| `assets/faille-navigation.js` | Caméra SVG, zoom, panoramique, historique, gestion des mouvements réduits | Extraire la logique du dictionnaire `specs` de cinq destinations ; restaurer correctement le focus et les fragments |
| `assets/faille-navigation.css` | Styles de calques, focus et viewport | Auditer contraste, cibles tactiles et reflow 400 % |
| `coordination/v2/work-c02-01/lib/catalogue.mjs` (#161) | Quatre portes, sept PAR, alias et validations | Module candidat non importé par le public ; `getPublicResources()` renvoie [] |
| `coordination/v2/work-c02-01/lib/navigation-plan.mjs` (#161) | État, étapes, retours, fragments | Adapter au navigateur après revue Développeuse |
| `coordination/v2/work-c02-01/schema/v2.schema.json` (#161) | Contrat de données | Ne constitue pas un visa documentaire ou juridique |

## Écarts vérifiés
Le prototype R6 définit les cinq identifiants `wiki`, `bibliotheque`, `atlas`, `parcours`, `entraide` dans le JS et le SVG. V2 définit quatre portes `encyclopedie`, `mediatheque`, `carte`, `entraide` et sept PAR transversaux. La liste HTML sans JS et la caméra sont conservables, mais pas la cartographie de destinations en dur.

## Deux anomalies WORK existantes
1. `wiki-autonomie-materielle-savoir-faire.html` renvoie vers `wiki-mutualiser-materiel.html` absent : cible canonique à établir avant correction.
2. Le prototype immersif affiche encore « Symbole Interstice R6 candidat, non encore validé par Zout » : libellé périmé à corriger séparément sans toucher au logo.

## Vérifications manquantes
Pas d'écran V2 intégré, pas de test V2 sur matériel tactile ou lecteur d'écran. Les tests R6/WORK ne valent pas certification V2.