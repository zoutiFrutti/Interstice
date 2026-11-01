# La Graphiste — Cycle 10, delta réel PR #73 / #68
**1er novembre 2026 · candidate non fusionnée · initiative individuelle de Zout.**

## Prérequis contrôlés
- PR #68 HEAD `d4dc9be115a208dfd02f717b74ecedce3d754940`.
- PR #73 HEAD avant C10 `3d67c13c82a0843ecd8b4035ae330e5d431bbc56`, base #68. La liste GitHub des modifications de #73 ne contient que cinq ajouts : un workflow, un CSS, un rapport, une maquette et un test. Aucune modification de la page Wiki, Bibliothèque ou des textes de La Lectrice.
- Protocole C10 `coordination/cycle10/PROTOCOLE_REGISTRE_OUVERTURE_C10_2026-11-01.md` ref `coordination/cycle10-ouverture-20261101`, blob `20f9e4364e25c7f62865635d3b4825d205004631`. PR #43 HEAD consulté `c7e6c3a3a0ac8f4831b7998cc1d2056b2f2a0bfa`.
## Passe 1 — Comparaison / suppression d'un doublon
Fichier `assets/graphiste-cycle9-provenance.css`. Modification commit `a0f041093fc289cb44a806baa0319d704cc8573a` : suppression de la déclaration `.c9-provenance a{overflow-wrap:anywhere}`, qui faisait doublon avec la règle existante `.graphiste-c8 a` héritée de #68. Les autres styles C9 restent nécessaires pour la fiche de provenance, distincte des simples trois catégories d'illustrations de C8 ; aucune suppression destructive de composant de droits.
## Passe 2 — QA additionnelle ciblée
Fichier `tests/graphiste-cycle9-2026-11-01.test.mjs` : commit `d8429686148f58fdfc7feeefcff123e389d5e33e`. Aux tests précédents mobile 320/390/1280, clavier, ancres, liens locaux, statuts, zoom CSS simulé à 200 %, contrastes base/nav/carte et PDF A4 : ajout du contraste calculé de la vraie fiche provenance ainsi que de la présence des champs Nature, Crédit, Licence / autorisation, Personnes concernées, Décision de diffusion. La valeur et le verdict sont **uniquement ceux des logs CI du HEAD testé**.
## Passe 3 — Technologies d'assistance
La présence de HTML sémantique, de focus et de `details` ne prouve pas l'expérience d'un lecteur d'écran. Protocole : VoiceOver+iOS/Safari, TalkBack+Android/Chrome, NVDA+Windows/Firefox, parcours d'ancres, annonce de la restriction de diffusion, champs de description et contrôles de zoom. **Aucun test physique exécuté** dans cet environnement GitHub/Chromium automatisé ; aucun résultat n'est revendiqué. Pour un essai futur, consigner OS, modèle/version, AT, navigateur, reproductibilité, capture, résultat observé et décision humaine. Le contrôle de contraste ciblé n'est pas un audit WCAG exhaustif.
## Réserves et reprise
- Aucun média réel autorisé ni licence vérifiée par le simple gabarit : les fiches indiquent « droits non vérifiés / diffusion bloquée ».
- Test navigateur automatisé avec zoom CSS n'est pas zoom navigateur/OS ni essai physique ; PDF généré n'est pas papier inspecté.
- L'intégration véritable des contenus Wiki/Bibliothèque/BIO/enquête réclame SHA éditoriaux et droits contrôlés par les responsables ; texte La Lectrice inchangé. Pas de publication.
**Statuts :** (1) comparaison/doublon : TERMINÉ sur le delta constaté ; (2) QA : TERMINÉ seulement si GitHub Actions du HEAD conclut success, sinon À POURSUIVRE ; (3) protocole : TERMINÉ ; essai physique réel : BLOQUÉ par absence d'environnement OS/AT compatible, sans affirmation de résultat.
