# C03-ANA-03 — Avis sur le contrat collectif C03

Document examiné : `coordination/c03/orchestratrice/02_CONTRAT_RAPPORTS.md` de PR #132, HEAD `57a509257314d44cb15faf842395a21023e43335`. Index : `coordination/c03/INDEX_TRANSMISSIONS.md`.

**Avis : compatible sous réserves.** Le contrat C03 décrit la preuve de mission, pas un second système de classification des ressources. Il est compatible avec le registre V2 WORK et les boîtes C10/C11 si les identifiants de mission, d'atelier, de ressource, de relation et de Parcours ne sont jamais confondus.

### Statuts indépendants
- Cycle de transmission : `preparee`, `transmise`, `recue`, `commencee`, `livree`, `controle_effectue`, `validee` ; booléen ou inconnu avec preuve datée.
- Ressource V2 : `validation.technical`, `documentary`, `legal`, `publication`, `political`.
- Ces deux familles sont orthogonales. `livree: true` ne donne ni visa documentaire ni `publication_authorized: true`.
- `PREPARE` n'est ni `TRANSMIS` ni `RECU_ATTESTE`. L'index C03 signale explicitement les réceptions non attestées.

### Dépendances et C10/C11
- Le registre C03 annonce 19 rôles, 12 missions et conserve les rôles sans mission actuelle : compatible avec un historique C10/C11, sans réécriture de leurs identifiants ni du facteur historique C10 de 17 boîtes.
- Les dépendances réciproques C03-ANA-03 ↔ C03-LEC-03 / C03-PEN-03 / C03-TECH-02 sont des **consultations croisées**, pas des prérequis d'exécution bloquants. Marquer leur nature pour éviter les cycles de relance.
- Une pièce C02, C05 ou C10 est une antériorité ; elle ne clôt pas C03. Les SHA sont des instantanés, pas une synchronisation en temps réel.
- Les rapports sensibles ne doivent pas être déposés dans un dépôt public ; conserver uniquement des métadonnées non sensibles.
- Aucun automate, CI ou commentaire GitHub ne peut attribuer un visa politique ou éditorial humain.

### Incompatibilités à résoudre
1. Le contrat C03 exige un identifiant de mission et une preuve d'état ; WORK ne stocke pas les missions : **référencer** les ID, ne pas recopier le registre C03 dans WORK.
2. Les codes de preuve territoriaux R0-R3 ne sont pas les mêmes que les catégories `proof` WORK ; maintenir deux dimensions avec correspondance documentée, pas une conversion silencieuse.
3. Les 30 objections WORK ne remplacent pas les 35 objections C02.
4. Le lien C03 vers #161 fixe le HEAD de contrôle : réévaluer si la PR évolue.
5. Les entrées C03 `transmise: null` ne doivent pas être changées à true à partir de ce rapport sans preuve de dépôt et d'acheminement.

### Recommandation
Réutiliser `registre_collectif_c03.json`, `index_collectif_c03.py` et le registre WORK tels quels, avec références croisées et preuves versionnées. Ne pas créer un bus de messages ni un registre V2 bis.
