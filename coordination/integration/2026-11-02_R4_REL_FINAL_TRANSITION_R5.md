# R4 REL FINAL — état de clôture et transition R5
Date : 2026-11-02. **R4 non clôturé à ce stade.** PR #141 en brouillon, base `integration/r1-commune-candidate-20261102`.

## Contributions vérifiées
- Développeuse PR #142 : branche `fix/r4-dev-cloture-validation-20261102`, en avance de 4 commits sur la convergence au contrôle initial, sans divergence. Script `assets/faille-navigation.js` repris dans #141, test navigateur `tests/r4-dev-cloture.browser.test.mjs` et workflow `.github/workflows/r4-dev-cloture.yml` importés. Déclenchement du workflow étendu aux push sur R4.
- Graphiste PR #137 : audit `coordination/transmissions/2026-11-02_GRAPHISTE_R4_AUDIT_IDENTITE.md` et SVG R4 conservés uniquement sous `assets/candidats/`. Les deux SVG historiques sont sous `assets/archives/`. La planche artistique validée par Zout n'est pas versionnée dans GitHub ; la fidélité graphique reste **non validée**.
- Lectrice : `coordination/transmissions/2026-11-02_LECTRICE_R4_REVUE_NAVIGATION_STATUTS.md` lu sur branche `atelier-lectrice/r4-navigation-revue-20261102`. Corrections intégrées : cible `id="entraide"` sur `parcours.html` et libellé SVG provisoire sur la page immersive. Les autres réserves de la Lectrice restent à contrôler sur la version R4.
- La branche `integration/r4-dev-navigation-consolidee-candidate-20261102` est divergente : **pas de remplacement aveugle** du JS déjà repris depuis #142.

## Contrôles et état de preuve
- Workflow R4 structurel initial sur `fb3c8470dccb5efbccf4849f0fca3a337491f871` : success.
- Après intégration des correctifs et des tests navigateur : **attendre l'exécution sur HEAD final**. Ne pas déclarer de réussite sans run.
- Test physique pinch multi-touch, TalkBack/VoiceOver/NVDA, zoom navigateur 400 % sans perte d'information, performances appareil modeste : non prouvés.
- Aucune modification des SVG actifs, du backend Supabase, des migrations, de la publication, ni de `main`.

## Démonstration candidate
`design-system/faille-navigation-interactive.html` : navigation immersive sur SVG historique avec nœuds provisoires et accès textuel. `design-system/comparaison-identite-r4.html` : comparaison des SVG R4 candidats avec les archives. Site statique à servir localement depuis la racine du dépôt ; pas de déploiement.

## Rollback
Revenir au HEAD initial de la convergence `fb3c8470dccb5efbccf4849f0fca3a337491f871` pour retirer les corrections récentes, ou retirer spécifiquement les commits R4 de validation. Les anciens actifs et la page historique restent disponibles. Aucun rollback production nécessaire.

## Bloquants
1. CI navigateur sur le HEAD exact et correction de tout échec.
2. Validation de l'accessibilité et des liens essentiels ; réserves des tests réels à expliciter.
3. Arbitrage visuel des SVG par Zout avant remplacement des actifs.

## Décisions Zout (3)
1. Valider ou demander correction des SVG face à la planche approuvée.
2. Approuver ou corriger l'expérience immersive (entrée, tactile, cinq rubriques).
3. Autoriser ultérieurement la fusion de la candidate et toute publication ; aucune autorisation présumée.

## Préparation R5 — sans nettoyage
Première recherche GitHub : au moins 100 branches (pagination non épuisée) et 95 PR ouvertes dans le lot interrogé. Inventaire exhaustif, regroupement par chantiers et matrice des fusions **à faire** ; aucun merge ni suppression R5. Priorité aux doublons de branches R1–R4, puis aux contenus et contrats, en conservant identifiants, sources, droits, statuts et preuves.

## Addendum de vérification
- Workflow R4 sur HEAD `595d4fa33fdcd4cf72e07222b9bdea0108b8a552` : success, jobs `chromium` et `contracts` ; artefact captures présent.
- Contrôle de destination ajouté dans `tests/r4-dev-cloture.browser.test.mjs` au commit `b6173f8c964f9418d82c916629d54bdc073d7b2f` : les cinq liens sont visités par Chromium, l'ancre Entraide et la navigation clavier sont contrôlées. **Résultat du workflow à vérifier** avant de conclure.
- R5 : préinventaire complet 218 branches sur quatre pages, note `coordination/integration/2026-11-02_R5_PREINVENTAIRE_BRANCHES.md`.
