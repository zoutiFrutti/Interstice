# C09-ORCH — Premier contre-audit intégré, 5 novembre 2026

**Fonction critique absorbée par L’Orchestratrice.** Pas de rôle, canal, agent ou cycle supplémentaire. **Relevé GitHub**, pas audit exhaustif du code, des expériences utilisateurs ou de Supabase. Les six failles initiales sont des hypothèses à confronter, pas six verdicts automatiques.

## Les cinq problèmes les plus urgents

### P0 — 1. Le pont C12 n'est pas protégé sur main par le correctif candidat

- **Constat.** Le workflow GitHub `.github/workflows/pont-relieuse-lectrice-c12.yml` de `main` déclenche `issues.opened` avec permissions `issues:write`. Il transmet `OPENAI_API_KEY` et `OPENAI_MODEL` ; le verrou indépendant `LECTRICE_AI_ENABLED` n'apparaît que sur la branche candidate #186 / PR #114.
- **Preuves.** `main` blob `a18e263972743a374e49fb07d9521efa9ace91b2` ; #186 blob `47678fc2d5942aca5f795176ccdbed794111873a` ; PR #114 non fusionnée au relevé du 05/11.
- **Gravité.** P0 conditionnel : un nouvel événement Issue admissible et des secrets/modèle configurés pourraient déclencher une API externe. L'existence des secrets et des dépenses réelles n'est **pas vérifiée**.
- **Conséquences.** Coût non autorisé ou exposition de texte d'Issue à un fournisseur externe ; confiance excessive dans une protection non déployée.
- **Correction proposée.** Faire auditer immédiatement l'état réellement actif des Actions et des secrets par Juriste/Développeuse. Décider d'un verrou actif désactivé par défaut et d'une limitation des autorisations sur `main` dans un lot séparé explicitement autorisé ; ne lancer aucune Issue test.
- **Vérification nécessaire.** Valeurs effectives des variables (sans révéler secrets), journal des déclenchements, tests de refus sur version destinée à `main`, permissions minimales, absence d'appels non autorisés.

### P1 — 2. Faire Ensemble annonce une fonction sociale qu'il ne permet pas encore d'exécuter complètement

- **Constat.** Les outils apparaissent mais leurs envois sont suspendus, selon la PR #186. L'expérience de bout en bout « proposer → recevoir → modérer → relier des personnes → suivre » reste non démontrée.
- **Preuves.** Description de la PR #186 HEAD `a43c0f2e8583b2a41779e86100b6d3a0b0f11dbf` : `submit-proposal` v3 et `submit-resource` v2 déployées avec réponse 503 sur POST ; `submit_wiki_article` non exécutable par anon/authenticated ; liens affichés avec statut suspendu. Ce sont les constats déclarés de WORK ; pas de nouvelle lecture directe des services dans cette passe.
- **Gravité.** P1 pour la valeur principale du produit ; P0 à qualifier s'il y a collecte trompeuse ou données sensibles.
- **Conséquences.** Une vitrine documentaire immersive peut masquer l'absence de dispositif de rencontre et d'entraide utilisable.
- **Correction proposée.** Suspendre les raffinements de navigation non indispensables ; spécifier **un seul** parcours Faire Ensemble sûr, clair et testable, avec modération humaine et données minimisées. Ne pas réactiver d'envoi avant sécurité et autorisation.
- **Vérification nécessaire.** Tests anonymes/authentifiés/modérateurs autorisés, consentement, statut réel des endpoints, revue RGPD, essai utilisateur volontaire sur prototype non public.

### P1 — 3. #186 et #188, plus #132, conservent des sources de coordination qui se chevauchent

- **Constat.** La PR #188 reconnaît cinq blobs de coordination identiques à ceux de #186 ; #132 apporte déjà un index, un JSON de missions et un générateur. Un autre registre serait une duplication pure.
- **Preuves.** #188 description mise à jour le 05/11 : `coordination/REGISTRE_DECISIONS.md` blob `c2af97b1ab09d6491bcf7270bbf846264113c39b`, journal C09 `4b97575d89fc1f6f7227ce7648f223ecce9e7bf2`, annuaire `eaa721190d1df59cfeb80e9b0e09886fe830c996`, audit `687100eec3f4782a5cccc70cd567a93f60c89496`, transmission `8103f0345eb13f0337b74899f95e53dc5f2c264e`, identiques à #186 au relevé C09. PR #132 brouillon, HEAD `57a509257314d44cb15faf842395a21023e43335`, index C03. Le référentiel vivant #186 a depuis évolué, donc son identité avec #188 n'est **pas** présumée.
- **Gravité.** P1 de maintenance et de perte de provenance.
- **Conséquences.** Fusion conflictuelle, comparaison éternelle des mêmes documents, décisions obsolètes et coûts de revue multipliés.
- **Correction proposée.** Garder #186 comme **candidate choisie par Zout**, comparer les apports réellement uniques de #188/#132, puis proposer leur fermeture ou archivage **après** transfert vérifié et accord de La Relieuse/Zout. Ne pas créer de rôle, branche ou PR pour cet audit.
- **Vérification nécessaire.** Comparatif blob par blob au HEAD final, liste des fichiers uniques, tests de non-régression et traçabilité des décisions ; aucun merge automatique.

### P1 — 4. Les inventaires risquent de remplacer les résultats et une fausse indépendance peut valider les erreurs

- **Constat.** La PR #186 référence 219 objets candidats, 71 notices FN et une file éditoriale. Ce sont des unités de préparation, pas 219 textes publiables ni une expérience humaine mesurée. Plusieurs ateliers IA peuvent reprendre les mêmes sources et autocertifier leurs jugements.
- **Preuves.** PR #161 et description #186 : inventaires et sélection de lots, réserves, procédures de relecture, sans visa de publication automatique. #188/C09 : distinction neuf états et avertissement contre les validations déduites. Aucun test externe d'indépendance méthodologique ou de bénéfice pour un public n'a été effectué ici.
- **Gravité.** P1 pour l'allocation du temps ; pas une preuve que les contenus seraient inutiles.
- **Conséquences.** Travail perpétuel de catalogage, multiplication des revues croisées à source unique, impression de progrès par volume.
- **Correction proposée.** Définir un échantillon réduit de contenus réellement utiles aux parcours Faire Ensemble ; exiger source primaire ou contradiction humaine qualifiée pour une validation indépendante ; arrêter les nouvelles files de catalogage sans usage démontré.
- **Vérification nécessaire.** Suivi des usages (respectueux de la vie privée), entretiens volontaires, qualité réelle d'un échantillon, provenance indépendante des avis ; compteur « candidats / revus / publiés / utilisés » sans fusion des états.

### P1 — 5. L'autogestion est une aspiration non encore prouvée par des droits de participation

- **Constat.** Le référentiel C09 donne priorité à la rencontre et à l'action collective, mais les arbitrages continuent de dépendre de Zout et d'une coordination IA. Cela peut être légitime pour un projet individuel ; **ce n'est pas encore la preuve d'une gouvernance partagée**.
- **Preuves.** `coordination/REFERENTIEL_VIVANT.md`, `coordination/REGISTRE_DECISIONS.md` et PR #186 : validations finales réservées à Zout, mécanismes Faire Ensemble suspendus. Aucun protocole vérifié de délégation, recours, sortie, modération partagée ou décision collective ne ressort des pièces lues ici.
- **Gravité.** P1 de cohérence et de conception, non jugement moral sur le porteur.
- **Conséquences.** Horizontalité proclamée sans distribution des pouvoirs ni contrôle collectif ; épuisement de Zout comme goulot de décision.
- **Correction proposée.** Décrire honnêtement « initiative individuelle en construction ». Concevoir avec de vraies personnes participantes, lorsqu'elles existent, des droits explicites de contribution, contestation, modération et reprise, sans exposition publique forcée ni abdication automatique des responsabilités juridiques.
- **Vérification nécessaire.** Prototype de gouvernance, accords des participants, essais de recours et de révocation, matrice des permissions, décision explicite sur le moment où un collectif existe.

## Ce que nous devrions peut-être arrêter de faire

1. **Créer de nouvelles PR de consolidation** tant que #186, #188 et #132 n'ont pas de sort clair.
2. **Produire des revues IA en cascade** sur les mêmes sources et les qualifier d'indépendantes.
3. **Étendre les listes de ressources** sans démonstration de qualité ou d'utilité d'un échantillon.
4. **Peaufiner la décoration de la faille** avant de résoudre l'usage sûr de Faire Ensemble, hors accessibilité essentielle.
5. **Multiplier les rôles, journaux et registres** : la fonction Démolisseuse est précisément absorbée, pas ajoutée.

Ces arrêts sont des **propositions**, pas des suppressions autorisées. La relieuse doit traiter le risque P0 C12 et les dépendances de #186 en priorité.

## Méthode de vérification et limite de l'audit

Consultation GitHub : PR #114/#115/#116/#126/#132/#161/#186/#188 ; workflow C12 sur main et #186 ; référentiel, annuaire, journal et index C03. Les affirmations sur Supabase proviennent de la transmission WORK #186 et **n'ont pas été vérifiées de manière indépendante** dans cette passe. Aucune source externe ni retour utilisateur nouveau ; aucun audit de sécurité exhaustif, test multi-comptes, déploiement ou migration.

**À La Relieuse :** décider des cinq suites ; soumettre les dix règles R01–R10 en tant que **PROPOSITIONS**, sans les déclarer adoptées.
