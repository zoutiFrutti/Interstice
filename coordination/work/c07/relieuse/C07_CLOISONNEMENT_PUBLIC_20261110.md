# C07 — Épuration candidate des localisateurs privés
**Branche de travail, aucune fusion ni publication.**

Les registres C02 contenaient 22 `dossier_locator` et 26 `sources[].locator` avec des URLs directes Google Docs/Drive. Ces champs ont été remplacés par `null` **dans la branche candidate** ; les 219 identifiants, les 100 sources, leurs références opaques `drive-meta:...` et les relations documentaires sont conservés. Le moteur DEV-03 a ses nouvelles empreintes Git épinglées.

Le test `check-public-locators.mjs` refuse la réintroduction de liens directs dans C02. `check-pages-content.mjs` refuse les URLs directes Google Docs/Drive dans le répertoire Jekyll construit, même si elles n'ont jamais figuré dans C02. Aucun identifiant ou lien n'est inscrit dans les logs de ces scanners.

**Limites incontournables :**
- Cette épuration n'efface pas les anciens commits, les PR publiques, les fichiers sur `main` et leurs copies/clones. Une branche de dépôt public n'est jamais un coffre privé.
- Le scanner ne couvre que les deux registres C02 et les fichiers Jekyll générés : les autres documents du dépôt et les médias sont à auditer séparément.
- Le rapprochement aux documents originaux doit passer par un **inventaire privé hors GitHub**, lié par les IDs opaques. Ne jamais créer un nouveau manifeste public avec la table correspondante.
- Si les documents Drive contiennent des données sensibles, vérifier les permissions et les accès dans Google Drive ; les URL connues ne prouvent pas l'accès au contenu.

**Aucune réécriture d'historique, aucun retrait de fichiers, changement de visibilité, changement d'autorisations Drive, fusion ou déploiement sans décision séparée.**
