# C03-DEV-04 — Matrice de tests C12, CI R6 et V2

| Domaine | Scénario | Critère d'acceptation | État de cette mission |
|---|---|---|---|
| C12 | Opt-in absent, false, invalide | Zéro appel API, statut BLOQUEE_AUTORISATION | Analyse de code #114, non exécuté |
| C12 | Opt-in true mais clé/modèle absents | Zéro appel, BLOQUEE_CONFIGURATION | Analyse de code #114 |
| C12 | Issue non éligible, corps invalide | Ignorée/refusée, pas d'appel | Analyse de code #114 |
| C12 | Exception, secret dans exception | Pas de fuite en log ou commentaire | À tester avec mocks |
| C12 | Runs concurrents, commentaire déjà présent | Aucun doublon | À tester sans Issue réelle |
| R6 CI | Ascendance c613d9 et df3692 | Contrôles distincts avec messages explicites | Run #41727087199 : échec préflight |
| R6 | Logos officiels | SHA-256 inchangés | À recontrôler sur HEAD futur |
| V2 | Quatre portes | Exactement 4 liens fonctionnels, aucun PAR traité comme porte | Modules candidats lus |
| V2 | Sept PAR | Index transversal, bifurcations et retours déterministes | Contrats #161 existants |
| V2 | URL/ancres | 32 routes/ancres historiques + liens profonds | 32/32 annoncés #161 ; HTTP non testé |
| Clavier | Tab, Entrée, Espace, Échap, retour | Ordre logique, focus visible et restauré, aucun piège | À exécuter sur rendu V2 |
| Tactile | Scroll, tap, pinch facultatif | Pas de geste complexe obligatoire, cibles utilisables | Non testé matériellement |
| Lecteur d'écran | TalkBack/NVDA/VoiceOver | Noms, régions, annonces et liste équivalente | Non testé matériellement |
| Zoom 400 % | Reflow 320 CSS px | Aucun contenu essentiel inaccessible | Non testé V2 |
| Sans JS | Accueil, 4 portes, manifeste, index PAR autorisé | Liens HTML directs et utilisables | Session sans JS à exécuter |
| Reduced motion | Préférence activée | Pas de transition automatique, fonctions conservées | À exécuter V2 |
| Rollback | Retour version R6 | Liens, SVG, données et manifestes conservés | Procédure à préparer avant activation |

## Preuves existantes, non rejouées ici
PR #114 : 12/12 tests ciblés annoncés ; CI C11 run 41419789864 success.
PR #161 : 10/10 contrats WORK, 11/11 tests existants, 27/27 tests agents annoncés ; 32 URL/ancres ; contrôle Chromium R6.
PR #132 : run 41727087199 preflight failure, autres étapes skipped.
**Cette mission ne prétend pas avoir exécuté ces tests.** Aucun Issue de test, appel IA, déploiement ou essai matériel.
