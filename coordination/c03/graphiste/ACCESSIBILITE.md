# C03-GRA-03 — Matrice d'accessibilité V2
**Date :** 2026-11-03. **Statut :** critères d'acceptation, non résultats de tests.

| Scénario | Critère vérifiable | Preuve attendue |
|---|---|---|
| Clavier | Quatre portes et index des sept PAR au Tab, Entrée/Espace selon sémantique, focus visible, Échap et retour sans piège | Parcours clavier filmé / assertions Playwright sur HEAD |
| Lecteur d'écran | NVDA/VoiceOver/TalkBack annonce porte, état et destination ; titres/landmarks corrects ; SVG ne double pas la liste | Relevé manuel appareil et navigateur |
| Tactile | Tap, scroll vertical, pan/zoom optionnel, cibles visées ≥44×44 CSS px ; aucun pinch obligatoire | Test téléphone et tablette |
| Zoom 400 % | À 320 CSS px, portes, manifestes, index et actions accessibles, reflow sans perte ni scroll horizontal imposé | Captures à zoom 400 % et test de navigation |
| Sans JS | Liens HTML des quatre portes, manifestes et index des Parcours présents dès le HTML initial | Session navigateur JS désactivé |
| Mouvement réduit | Aucune entrée caméra animée automatiquement ; transitions non indispensables | Émulation `prefers-reduced-motion: reduce` et essai manuel |
| Contraste et état | Texte, focus, boutons et sélection lisibles sur les fonds réels ; pas d'information transmise par la couleur seule | Mesures de contraste et captures multi-fonds |
| Historique | Liens profonds, rechargement, retour/avance, anciens fragments R6 | Matrice d'URL/ancres et tests automatisés |
| Logos | SVG identiques aux références R6, aucune superposition de cible masquant les détails significatifs | SHA-256 + captures à 32,48,64,96,192,390,665 px |
| Publication | Aucune ressource WORK ou PAR-005 pratique non autorisée rendue publique | Assertions négatives sur HEAD exact |

**Seuil :** aucune mise en public avant résolution des échecs bloquants, revue Développeuse, contrôle de La Relieuse et autorisation explicite de Zout.