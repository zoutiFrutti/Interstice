# Contribution au journal commun — 2026-10-29 — Atelier Identité graphique

1. **Date :** 29 octobre 2026.
2. **Atelier :** Identité graphique / ergonomie de lecture.
3. **Sujet :** Refonte typographique et légère harmonisation des composants du site Interstice.
4. **Connaissances :** le site utilisait `system-ui` comme police générale. Proposition : Barlow Condensed (titres) et Atkinson Hyperlegible Next (textes courants), contraste ivoire/noir/rouge, marges de lecture et niveaux de titres explicités.
5. **Sources :** `style.css` du dépôt GitHub `zoutiFrutti/Interstice` sur `main`, spécimens des familles de police Google Fonts, maquettes validées dans la conversation des 28-29 octobre. L'audit est statique, sans test navigateur.
6. **Articles Wiki concernés :** charte graphique, accessibilité, interface et rédaction Wiki, si des pages correspondantes existent (non vérifié).
7. **Contradictions :** la proposition CSS charge temporairement les fontes à partir d'un service tiers, ce qui contredit l'objectif d'autonomie et de réduction de requêtes externes. **Ne pas fusionner en production avant auto-hébergement des WOFF2 sous licence compatible et vérification de l'accessibilité**.
8. **Modification réelle :** fichier `style.css` modifié dans une branche indépendante ; aucun contenu rédactionnel, logo, ni fichier de production `main` changé.
9. **Restant :** auto-héberger les polices ; essai visuel navigateur sur mobile et ordinateur ; tester contraste, débordement des titres, impression, pages longues et formulaires ; intégrer après validation.

**Coordination :** `coordination/JOURNAL_COMMUN.md` est encore absent de `main` lors de cette passe. Cette contribution autonome doit être intégrée au journal central après fusion ou reprise de la PR #3. Ne pas créer un second journal concurrent.


### Suite de la passe : hébergement des polices (29 octobre 2026)
- **Effectué et vérifié par relecture du fichier GitHub :** retrait de l'import Google Fonts ; Barlow Condensed Bold et Atkinson Hyperlegible Next variable intégrés au début de `style.css` par règles `@font-face` avec données TTF encodées en URI interne, sans requête à un serveur de polices.
- **Licences conservées :** `assets/fonts/BarlowCondensed-OFL.txt` et `assets/fonts/AtkinsonHyperlegibleNext-OFL.txt`, issus de `google/fonts`.
- **Limites :** feuille CSS d'environ 305 Ko, polices uniquement en style droit et Barlow uniquement en graisse 700 (les graisses intermédiaires peuvent être simulées). Optimisation recommandée en fichiers WOFF2 séparés, puis sous-ensemble latin avec accents. Tests navigateur, rendu, accessibilité et impression non encore effectués.
- **Rectification :** l'avertissement précédent sur les requêtes externes est résolu dans la branche à cette date ; il ne justifie plus à lui seul de bloquer la fusion. La décision de fusion dépend désormais des vérifications de rendu et de performance.
