# WORK-NAV-01 — résultats

Premier contrôle local : 7/7 tests Node passés (`node --test tests/nav01-camera.test.mjs`). Syntaxe des modules vérifiée. Construction de l’artefact statique réussie. Ouverture manuelle dans Chromium : entrée, quatre portes et lecteur latéral observés ; correction du défilement d’entrée et de la restauration de caméra.

La suite navigateur est écrite et son exécution CI reste à constater à ce stade. Elle couvre 320, 390, 768, 1280 px, Android simulé Pixel 5 (CDP tactile, un/deux doigts), zoom/pan/recentrage, sélection, clavier, focus visible, arbre d’accessibilité, axe WCAG A/AA, mouvement réduit, HTML sans JS, historique, liens profonds et absence de débordement/erreurs JavaScript.

Le contrôle 400 % utilise le zoom réel Chromium `chrome.tabs.setZoom(4)`, contrôlé par `getZoom` et la largeur interne ; aucun `style.zoom`. Un échec du mécanisme est un test échoué, jamais transformé en réussite.

Preuves générées par CI : `artifacts/nav01/HEAD.txt`, `evidence.json`, captures d’entrée, exploration et panneau aux quatre largeurs, Android simulé, 400 %, lecteur et sans JS. Les résultats effectifs et liens d’exécution seront ajoutés après lecture des journaux.

Non réalisés : téléphone physique, TalkBack, VoiceOver, NVDA et validation artistique/ergonomique par Zout. L’arbre Chromium et axe ne remplacent pas ces essais. Les contenus et services R6 liés à l’extérieur ne sont pas recertifiés par cette mission.

