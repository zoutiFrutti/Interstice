# Cycle 10 — Rapport 3 : candidate Wiki/Bibliothèque et PWA
**Branche distincte** `integration/cycle10-p0-rollback-wiki-biblio-20261101`, basée sur le SHA C9 `b016f1c1ff1ba5bff0fe90d18703bceee447b158`, sans réécriture des fiches, sources, identifiants, réserves ni visas éditoriaux.
- Routes `wiki.html` ↔ `bibliotheque.html`, recherche locale et composants des trois parcours critiques conservés ; contrôle des liens et ancrages C8 conservé.
- Les douze/quinze fiches en révision et les contenus Graphiste/Anarchitecte ne sont **pas importés automatiquement** : aucune validation humaine de publication n'en découle.
- Les formulaires de recherche ou démonstration ne prouvent pas une collecte serveur ; les fonctions de contribution réelles restent suspendues.
- PWA : aucun `manifest.webmanifest` ni service worker identifié dans la candidate précédemment. **Installation PWA et hors ligne non démontrés**, aucun test de réseau hors ligne complet réalisé. Tests mobiles Chromium ne suffisent pas à prouver ces fonctions.
- Tests C10 : `tests/cycle10-rollback-dryrun.test.mjs` et suites Node/Chromium conservées par workflow sur SHA exact ; consigner les résultats de CI après exécution. **Statut : À POURSUIVRE jusqu'à validation de la CI.**
