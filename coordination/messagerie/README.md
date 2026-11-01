# Messagerie inter-ateliers V1 — candidate C10

## But
Séparer **archive**, **messages**, **réceptions**, **dépendances** et **décisions**. Ne pas remplacer ni réécrire `coordination/JOURNAL_COMMUN.md` (historique). V1 = fichiers GitHub, **pas de notification automatique ni de réception présumée**.

## Sources canoniques et parcours
- `coordination/messagerie/MESSAGES_C10.md` : index des transmissions, identifiants uniques, émetteur, destinataire, SHA, statut.
- `coordination/messagerie/DEPENDANCES_C10.md` : prérequis de lancement et preuves de déblocage.
- `coordination/messagerie/boites/<atelier>.md` : vue de réception de chaque atelier, tenue par les ateliers sur leur branche, puis réconciliée par La Relieuse. Ne pas modifier la boîte d'un autre atelier sans coordination.
- `coordination/journaux/CYCLE10.md` : journal synthétique du cycle. Le Journal commun historique conserve les liens de clôture, pas les comptes rendus dupliqués.
- `coordination/cycle10/REGISTRE_CLOTURE_PROVISOIRE_C10_2026-11-01.md` : audit de clôture, non final.

## Contrat d'une transmission
ID `C10-MSG-NNN` unique ; date ISO ; atelier source ; destinataire(s) ; objet ; priorité P0/P1/P2 ; chemin + branche + commit SHA + blob SHA ; action attendue ; dépendances ; état `ÉMISE | REÇUE | TRAITÉE | BLOQUÉE` ; accusé de réception (qui, date, commit) ; preuve de traitement et résultat. **Une transmission sans accusé reste ÉMISE**, même si le fichier est visible dans GitHub. L'accusé ne signifie pas validation éditoriale.

## Workflow
1. L'atelier vérifie les messages le concernant dans l'index et sa boîte ; compare les références GitHub à leur SHA.
2. Il ajoute un accusé vérifiable sur sa branche, puis agit sur les tâches réalisables.
3. Il transmet résultat, preuves et statuts par objectif. La Relieuse consolide sur sa branche ; en cas de conflits, ne pas écraser silencieusement.
4. La Relieuse ouvre la vague suivante seulement si la dépendance bloquante est prouvée levée. Les tâches indépendantes peuvent continuer.
5. Les décisions humaines sont enregistrées uniquement sur instruction explicite de Zout ; aucun atelier ne s'auto-autorise.

## Contrôles V1
- Unicité des IDs et cohérence émetteur/destinataire.
- Chaque statut REÇUE porte un accusé et un SHA.
- Chaque statut TRAITÉE porte un livrable vérifié.
- Chaque dépendance levée porte la preuve, sinon `ATTENTE`.
- Un chemin ou un SHA non vérifié est indiqué `À CONTRÔLER`, jamais inventé.

## Limites
Ce système est **un prototype documentaire sur branche candidate** : pas de bot, GitHub Action, webhook, fusion ni messagerie entre conversations exécutée. Les liens entre branches ne deviennent visibles dans une branche commune qu'après réconciliation explicite. Les droits, données personnelles et secrets ne doivent pas être déposés dans les messages publics.
