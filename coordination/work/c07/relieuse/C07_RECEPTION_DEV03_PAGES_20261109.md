# INTERSTICE — C07 · Réception technique de DEV-03 et barrière Pages
**9 novembre 2026 · La Relieuse · PR #186 · HEAD vérifié avant rédaction : `ec47b7b576dc3f4e4ffe6275afa737e440d434bc`**

## Exécution réellement vérifiée
- Sur le HEAD `f26d5b38a38e3d21db80ded9aabccc3693f378c6`, job **42705838595 / 129462261633** : les tests DEV-03 et les tests synthétiques du garde-fou réussissent ; le build Jekyll `source: .` réussit, **le scanner échoue**. Log : `{"accepted":false,"files_checked":246,"unsafe_entries":6,"symlinks":0}`. Les logs Jekyll montrent effectivement des documents de `coordination`, `docs`, `propositions`, `recherche` convertis en HTML. Il s'agit d'une inclusion dans **l'artefact candidat**, pas d'une preuve que ce contenu est en ligne sur Pages.
- Correction sur la branche uniquement : `_config.yml` exclut du build Jekyll les arbres internes/outillages et quatre documents Markdown racines. Le workflow `.github/workflows/c07-master-reception.yml` recontrôle le changement de `_config.yml` en construisant `_site` sans déploiement.
- Sur le HEAD `ec47b7b576dc3f4e4ffe6275afa737e440d434bc`, job **42706682297 / 129465196225**, **réussi** : test `master-v1/test.mjs` réussi, CLI assainie réussie, tests du scanner réussis, build Jekyll réussi, scan de l'artefact réel réussi. **Preuve sortie** : `{"accepted":true,"files_checked":74,"unsafe_entries":0,"symlinks":0}`.
- La configuration et le scanner restent en place, sans neutralisation de la barrière. L'artefact Jekyll inspecté comprend **74 fichiers**, le filtre refuse les répertoires internes.
- **Aucune fusion, suppression de documents, migration Supabase, activation de traitement ni publication.**

## Verdict de réception
**DEV-03 moteur interne : réception TECHNIQUE FAVORABLE dans le périmètre exact des tests.**
**Barrière de chemins de l'artefact Pages candidat : réception FAVORABLE sur le HEAD `ec47b7b576dc3f4e4ffe6275afa737e440d434bc`.**

Cette validation **n'est pas** un visa global de sécurité ou de publication :
1. Les fichiers déjà présents dans le dépôt GitHub **public** sont directement consultables via GitHub, même s'ils sont exclus de Pages. Il faut traiter ce risque de diffusion indépendamment, sans déplacer à nouveau les données sensibles dans une branche publique.
2. Le scanner vérifie noms et types des chemins, pas le contenu sensible potentiel des 74 fichiers restants ; un audit de la surface HTML/JS/JSON autorisée reste nécessaire.
3. Le moteur construit une projection **interne en mémoire** et renvoie zéro carte publique. Il n'alimente pas encore les quatre portes en nouvelles fiches.
4. Les 219 publications restent `non_autorisee`, les 217 examens juridiques ne sont pas réalisés ; PAR-005, doublons FN et trois archives demeurent sous réserves.
5. La réception artistique/navigation sur appareils physiques et la compatibilité complète Atlas/#193 restent à effectuer. Les neuf contrôles CI précédents n'équivalent pas à ces vérifications.
6. Toute modification ultérieure de `_config.yml`, du moteur ou du scanner requiert un nouveau contrôle sur HEAD et une réévaluation du résultat.

## Suite priorisée
P0 : vérifier contenu des **74 fichiers publiables** et les autorisations médias ; identifier les risques liés à la visibilité native du dépôt public.
P1 : réception documentaire LEC-03 des statuts par ID ; Atlas et quatre portes uniquement sur données autorisées ; ne pas exposer les fiches en masse.
P1 : recevoir la navigation mobile/lecteur d'écran avec preuves et traiter le test séparé de la PR #193.
**Fusion/publication restent INTERDITES tant qu'une décision humaine explicite et des visas par lot ne sont pas fournis.**
