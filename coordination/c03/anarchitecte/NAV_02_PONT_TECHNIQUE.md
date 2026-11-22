# NAV-02 — Pont documentaire candidat, sans ouverture éditoriale

Dépendance : PR #174 (HEAD initial `01811690ae5dbd8bef4db2100395feea77a55431`) ; source de données PR #161 (`0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`). Audit Anarchitecte : PR #177.

## Modification
- `assets/nav-01/step-resources.mjs` : correspondance figée de 29 couples `PAR/étape` vers les IDs documentaires de #161. Aucun corps, URL ou visa importé.
- `assets/nav-01/explorer.mjs` : affiche uniquement le nombre de références candidates par étape ; ne crée aucun lien documentaire.
- `tests/nav02-resource-bridge.test.mjs` : contrôle les 29 clés et l'absence de liens autorisés.

## Verrou
`authorizedResourceLinks()` retourne toujours `[]`. Un futur manifeste explicitement visé par lot, signé/attesté par la coordination humaine, devra fournir les URLs canoniques autorisées et les dates de visa. **Ne jamais déduire une autorisation de `canonical_url`, d'un identifiant existant, d'un statut technique ou d'une réussite CI.**

## À faire avant intégration
- Exécuter `node --test tests/nav02-resource-bridge.test.mjs` et la suite nav01 sur la branche.
- Vérifier les 219 objets et les 19 relations avec La Lectrice ; maintenir les 35 objections C02 distinctes des 30 WORK.
- Reclasser les EXP-001/002/004/005 dans #161 après arbitrage ; cela ne change pas les identifiants d'étape.
- Vérifier les liens historiques, les retours et le lecteur sur Android physique.
- Ne pas fusionner, publier ni activer de contenus bloqués sans visas.
