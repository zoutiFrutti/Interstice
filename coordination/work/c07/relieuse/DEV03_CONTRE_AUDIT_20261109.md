# C07 — La Relieuse · Réception technique intermédiaire DEV-03
**9 novembre 2026 · lecture HEAD `50fcac2906a5dea8f3d8e4f4ffde6d491a1e2f38` · P0 · sans visa de publication**

## Pièces vérifiées
- `coordination/work/c07/developpeuse/master-v1/{build.mjs,test.mjs,schema.json,overlay-reviewed.json,README.md}` sont effectivement présents sur le HEAD cité. Le moteur annonce `c07-master-projection/1`, construit en mémoire, n'écrit pas les JSON maîtres et renvoie `public_cards: []`.
- Les six JSON C02 sur ce HEAD contiennent **219 IDs distincts, 100 sources, 19 relations, 30 objections WORK, 7 Parcours / 29 étapes**. Recalcul indépendant par lecture des JSON via GitHub : **zéro** référence `source_refs` et **zéro** extrémité de relation / référence d'étape orpheline ; les trois alias historiques correspondent au contrat ANA-01B.
- Les cinq FN sensibles `FN-018, FN-022, FN-048, FN-038, FN-057` sont présents ; les quatre derniers portent des candidats doublons, sans fusion. `PAR-005` demeure fermé.
- Les neuf jobs GitHub réellement exécutés au HEAD `50fcac2906a5dea8f3d8e4f4ffde6d491a1e2f38` étaient au vert ; **les tests spécifiques `master-v1/test.mjs` ne sont pas dans les commandes des workflows existants vérifiés**. Ne pas les déclarer exécutés par ces neuf jobs.

## Contrôle additionnel livré séparément
- `check-pages-boundary.mjs` vérifie **un répertoire construit, jamais le dépôt source** : refuse les répertoires documentaires internes et les liens symboliques, sans imprimer les noms des fichiers sensibles.
- `check-pages-boundary.test.mjs` : **3 tests Node sur cas synthétiques exécutés en environnement local indépendant, 3 réussis**. Ces tests prouvent uniquement le comportement de ce garde-fou sur les trois fixtures ; **aucun build Jekyll réel ni contenu de `_site` analysé**.
- Commandes à exécuter dans un clone autorisé, sur HEAD figé :
  `node --test coordination/work/c07/developpeuse/master-v1/test.mjs`
  `node --test coordination/work/c07/relieuse/check-pages-boundary.test.mjs`
  `node coordination/work/c07/relieuse/check-pages-boundary.mjs _site` **immédiatement après** `actions/jekyll-build-pages` sur la même source et avant tout déploiement.
- N'ayant pas modifié le workflow GitHub dans cette passe, **la barrière n'est pas encore intégrée à CI** et aucun faux feu vert « confidentialité Pages » n'est attribué.

## Réserves bloquantes
1. **P0 Pages** : build GitHub Pages depuis `source: .` ; l'absence de `coordination/**`, `docs/**` et autres fichiers internes dans la sortie `_site` **n'est pas attestée**. Le dépôt GitHub étant public, toute donnée déjà commitée dans GitHub reste publiquement consultable, même si Pages exclut le fichier. Le filtrage de Pages ne répare pas une divulgation GitHub.
2. **P0 DEV-03** : la revue des cinq fichiers source et le contrôle indépendant des jointures **ne remplacent pas l'exécution du test Node `master-v1/test.mjs` sur une copie complète du dépôt**. Les 9 réussites CI portent sur d'autres commandes.
3. **P0 autorisations** : 219 statuts de publication `non_autorisee`, 217 contrôles juridiques `non_examine` et deux `bloque`. Aucun nouveau contenu ne doit rejoindre les cartes publiques, même si le moteur fonctionne.
4. **P1 enrichissements** : l'overlay MED/JUR est un contrôle de totaux, pas 219 décisions individuelles : `per_id={}`. L'index complet reste en mémoire ; les 190 URL canoniques absentes, les doublons et les sources Drive doivent rester explicitement candidats. Le `canonical_source.kind` devra accepter des références typées réellement collationnées sans reprendre les URL Drive privées dans la sortie publique.
5. **P1 navigation Atlas** : la PR #193 reste distincte et son test de navigation échoue ; les 24 TIS/EXP ne sont pas publiés comme lieux géocodés. Aucune connexion finale site/Atlas démontrée par DEV-03, intentionnellement hors du lot.

## Verdict
**DEV-03 : livré en code candidat, réception intégration documentaire et sécurité = PARTIELLE.**
C07 peut passer en **contre-audit ANA-02B / LEC-03**, tout en laissant P0 Pages ouvert et sans demander de fusion, migration Supabase ou publication.
Aucune modification des fichiers de la Développeuse, de `main`, des originaux, des SVG ni des workflows dans ce lot.
