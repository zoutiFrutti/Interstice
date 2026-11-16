# C05-ORC-01 — Simplification des ateliers et sécurité des agents

Date : 2026-11-04. Destinataire : La Relieuse. **Proposition technique sur la PR brouillon #183**.

## Passe 1 : état réel, HEAD contrôlés

| PR | Fonction | État |
|---|---|---|
| #114 — `f7811d3875d2fd39b7b37226d40ae9fb22c66a56` | C13 : opt-in du pont C12, filtrage, statuts, déduplication | Brouillon, non présent sur main |
| #115 — `e139a1286c361b85aacd62413475f26878595911` | C14 : tâches locales déterministes, suivi dépendances | Brouillon, pas un agent autonome |
| #132 — `57a509257314d44cb15faf842395a21023e43335` | C18/C03 : états ternaires, index public daté | Brouillon, pas un registre vivant |
| #163 — `d9f771d5516048cfa2ad7639204443a10fb20f44` | Diagnostic C12 / R6 de la Développeuse | Brouillon documentaire, pas de correction active |
| #180 — `b01ad5a27cac4ff3b3d204ec73f92fc9c68808ac` | Observatrice GH-AW : source + lock compilé | Brouillon, non lancé comme agent |
| #181 — `065584c65c6a77fe02e5488978b5c6d1753ba4c6` | Navigation : convergence technique | Brouillon, pas de certification Android |
| #182 — `10613aeaa9f7e021ac024746c299060fd2c36722` | Entrée immersive, plongée caméra | Brouillon, tests Android sur HEAD non attestés |
| #183 — `fae23aa8eed9b6af8b5b2bdacdb58b2d1ce84bcd` au début de la passe | Console existante, 3 vues et preuves | Tests QA réussis sur ce HEAD initial ; complément C05 en cours |

Le protocole direct de Zout est lu dans le commentaire #174 `6635352819`. Les décisions humaines ne sont demandées qu'après exécution de toutes les passes possibles.

## P0 : ponts, coûts, permissions et journaux

- **C12 sur main** : workflow `.github/workflows/pont-relieuse-lectrice-c12.yml` (blob `a18e263972743a374e49fb07d9521efa9ace91b2`), événement `issues.opened` et permission `issues: write`; filtre titre et auteur. Le script `pont_relieuse_c12.py` (blob `ad8e4622f5d324af7cfa5879ca4bd65f411507be`) peut tenter un appel API si clé et modèle présents. Absence d'opt-in `LECTRICE_AI_ENABLED` sur main. Les secrets et variables réels ne sont pas inspectés ; **ne pas déclarer risque levé**. C13 #114 doit être relue avant toute activation/usage des Issues concernées.
- **C10 facteur** : exécutions planifiées constatées et tickets potentiels. Une Issue ne prouve pas réception ni conversation ChatGPT réveillée.
- **C14 #115** : logique de tâches déterministes et réponse sur Issue candidate, sans IA. Ne pas activer avant revue des permissions `issues: write`.
- **C15 #116 / R1 #126** : connecteur Ollama candidat, double verrou opérateur, pas d'exécution locale réelle ; pas de budget global. **Aucune liaison à la console**.
- **GH-AW #180** : fichier `fn-observatrice-pilote.lock.yml` compilé par gh-aw v1.0.1, blob `ca2293cda641e9513cd529fe9ebefba670eb2ef4`; action manuelle, autorisation `vars.FN_OBSERVATRICE_ENABLED == 'true'` et contrôle d'acteur. La CI de compilation est verte au HEAD #180 (run 41854384087), mais **cela ne prouve aucune exécution d'agent ni coût nul si activé**.
- Le lock réserve `GEMINI_API_KEY`, `COPILOT_GITHUB_TOKEN`, jetons GH-AW et options de télémétrie. Leur présence effective n'est pas connue. L'exécution future a des coûts et paramètres de crédits à auditer séparément, même si le workflow n'a pas de permission write.
- **Secrets / journaux** : ne pas sérialiser les prompts, contenus d'Issues privées, variables secrètes ou corps de réponses dans les artefacts publics. Seuls IDs, SHA, résultats techniques et blocages non sensibles doivent être exposés.
- **PR #183** : aucune requête à l'API GitHub, aucun backend, aucun bouton d'exécution fonctionnel. Les données sont publiques, figées et datées ; l'absence de synchronisation est affichée.

## Passe 2 : simplification réelle, sans nouvelle console

Le code de la PR #183 est réutilisé :
- `coordination-console/model.mjs` : `coordinationRows(seed)` construit les six colonnes depuis les champs existants, sans inférer statut d'une CI ni d'une PR.
- `coordination-console/console.mjs` : le tableau est intégré à « Ce qui circule », sans création de quatrième vue.
- `coordination-console/console.css` : défilement horizontal mobile et liens clavier.
- `coordination-console/seed-public.json` : trois correspondances PR qualifiées : #132 livrable documentaire Orchestratrice, #162 antériorité Archéologue, #181 dépendance technique TECH-02. Toutes les autres missions affichent absence de PR propre attestée.
- `tests/coordination-console.test.mjs` : non-régression des états et rattachements PR typés.
- `coordination-console/README.md` : limites documentées.

Ce lot **ne supprime aucune transmission d'archive**. Les anciennes transmissions redondantes ne sont pas reprises dans l'interface : leur référence canonique est l'index #132, tandis que #183 reste une vue de lecture seule. Aucun second registre concurrent n'est introduit.

## Tableau de dépendances d'intégration

| Sujet | Responsable / PR | État | Suite |
|---|---|---|---|
| Opt-in C12 P0 | Développeuse, Juriste / #114, #163 | Correctif candidat, non actif | Vérifier secrets, auth, budgets et CI avant fusion décidée par Zout |
| Source des missions | Relieuse, Orchestratrice / #132 | Registre candidat | Réconcilier les vrais accusés et rapports C05 |
| Console | Orchestratrice / #183 | Tableau candidat en lecture seule | QA sur commit exact ; pas de déploiement |
| Pilote GH-AW | Observatrice, Orchestratrice / #180 | Lock compilé, agent non exécuté | Examiner fournisseur, quotas, données et décision explicite future |
| Navigation | Graphiste, Développeuse / #181, #182 | Candidats séparés | QA Android réel et arbitrage artistique distinct |
| Publications | Zout | Aucune autorisation donnée ici | Aucun merge/diffusion/déploiement |

## Validation / limites

La CI Node de la console est autorisée comme **test non-agent**, distincte d'un appel IA. Lire ses résultats et SHA exacts dans la PR #183. Les anciennes CI vertes ne certifient pas automatiquement ce nouveau lot. Aucun workflow agent, compte, secret, notification, modèle ou service payant n'a été déclenché volontairement par cette mission.

**Arbitrages à Zout :** aucun arbitrage nécessaire pour conserver cette amélioration en PR brouillon et sous contrôle technique. Les activations, fusions et dépenses ne sont pas demandées dans cette mission et restent interdites en l'absence de décision.
