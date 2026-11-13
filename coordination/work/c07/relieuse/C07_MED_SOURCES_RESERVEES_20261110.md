# C07 · La Relieuse — correction ciblée de la matrice MED-01B
**10 novembre 2026, PR #186, branche candidate uniquement. Avant correction : HEAD a09d406acc52788624b7e2c84515df2c5e8a8745.**

22 localisateurs Google Docs directs présents dans la matrice `C07_MED_01B_MATRICE_219.md` correspondent **exactement** aux 22 localisateurs précédemment retirés de `resources.json` et dont les permissions avaient été contrôlées (pas de partage `anyone` dans les métadonnées lues). La correction substitue l'expression `Source Drive réservée (lien direct retiré du dépôt public)` sans déplacer les sources et sans supprimer de ligne : **219 IDs conservés**.

Nouveau blob MED Git attendu : `509b7961210e71650be293ceba03cac1224ae5ef` ; nouveau pointeur dans `overlay-reviewed.json` et assertion du moteur `build.mjs`. L'ancien blob `dc695cecf288791ff71203415329df023b58c556` n'est plus celui du document candidat actif. Les **vieux commits publics continuent de l'exposer** et sont hors de portée de cette correction non destructive.

Deux contrôles ajoutés à la réception CI : test de 219 lignes et absence de liens directs dans MED, et plafond non croissant de **155 occurrences restantes** dans l'arbre complet après réduction des 177 anciennes occurrences par 22 liens. Ce plafond n'est pas une attestation de confidentialité ; il empêchera la croissance des références détectables mais permet encore des liens non qualifiés. Toute nouvelle occurrence, y compris dans des fichiers d'audit, doit faire échouer le job plutôt qu'être ajoutée silencieusement.

Aucune édition juridique, aucun visa, aucune fusion, aucun retrait d'historique, aucun changement de droits Drive, aucune publication. La classification des 155 occurrences et des autres catégories sensibles demeure P0.
