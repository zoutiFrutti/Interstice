# C06-ANA-01 — Matrice des raccordements

**Décision Zout appliquée :** A, sept Parcours candidats visibles avec statuts explicites ; PAR-005 bloqué. Aucune demande de nouvel arbitrage.

## Sources et compatibilité
- Base candidate : #182 `c4f87abf75119d3e1927ece352efcde37d122eb1`, dépendante de #181/#174.
- #178 : `step-resources.mjs` repris sans liens ni visas ; mapping de #161 `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`.
- #184 : `C05_LEC_01_DECISION_ET_CORRECTIONS.md` ; sept libellés repris sans modifier les 19 relations documentaires ni importer les corrections de textes comme autorisations.
- Audit précédent : #177, non reproduit.

| Élément | État | Fichier / preuve | Correction réalisée ou restante |
|---|---|---|---|
| Quatre portes | Conforme structurellement | `assets/nav-01/graph-data.mjs` : quatre IDs | Aucune |
| Sept Parcours / 29 étapes | Conforme structurellement | `graph-data.mjs` ; #161 `data/parcours.json` | Aucune |
| Bifurcations / retours | Conforme dans le graphe, test navigateur à confirmer | `graph-data.mjs`, `navigation-state.mjs` | Test `tests/c06-ana-status-bridge.test.mjs` ajouté |
| Statuts candidats | **Corrigé dans cette branche** | `assets/nav-01/parcours-status.mjs` : sept libellés exacts #184 ; `explorer.mjs` | Présentés dans la liste des traversées et dans le panneau de Parcours |
| Correspondance étapes → IDs | **Raccordée, non publiée** | `assets/nav-01/step-resources.mjs` depuis #178 | Affiche seulement un décompte de références candidates par étape |
| PAR-005 | Conforme, volontairement non traversable | `graph-data.mjs` : `blocked_practical:true` ; `explorer.mjs` stoppe avant les liens d'étape | Maintenir fermeture, afficher « BLOQUÉ » |
| Ressources non visées | Conforme au verrou candidat | `authorizedResourceLinks()` retourne `[]` ; `PUBLIC_RESOURCES=[]` | Aucun visa inféré ; aucun lien documentaire ajouté |
| Réserves historiques #184 | Préservées comme réserves | #184 `data/relations.json` et Parcours documentaires ; pas de modification de ces sources ici | Collation et visa séparés |
| URLs historiques / Android / zoom | Non vérifiés dans cette passe | `graph-data.mjs` destinations `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html#entraide` | Tests HTTP, ancres, clavier, tactile, 400 %, sur SHA final |

## Modifications dans cette branche
1. `assets/nav-01/step-resources.mjs` : repris de #178, fermé par défaut.
2. `assets/nav-01/parcours-status.mjs` : sept statuts #184.
3. `assets/nav-01/explorer.mjs` : statuts dans la liste et les panneaux, décompte des IDs candidats.
4. `assets/nav-01/explorer.css` : lisibilité des libellés.
5. `tests/c06-ana-status-bridge.test.mjs` : garde-fous structurels et éditoriaux.

## Réserves de livraison
Revue statique et modifications de code uniquement ; tests non exécutés dans cette passe. Le rendu sur Android, les liens historiques et l'accessibilité ne sont pas certifiés. Les 36 objections C02 listées dans #167 (35 annoncées auparavant), les 30 réserves WORK et les réserves historiques #184 restent ouvertes selon leur état documentaire.

**Pas de nouveau choix architectural ouvert.** Aucune fusion, publication, visa documentaire, juridique ou sanitaire.
