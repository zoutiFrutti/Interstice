# Journal de synchronisation — L'Orchestratrice

**Candidat C09, créé le 5 novembre 2026.** Ce journal est nouveau : avant C09, les travaux étaient répartis entre transmissions C13/C14/C18/C03/C05, registre #132, console #183 et courrier C10. Ne pas prétendre qu'un tel journal unifié existait auparavant.

## Protocole de reprise

1. Lire explicitement `coordination/REFERENTIEL_VIVANT.md` puis `coordination/REGISTRE_DECISIONS.md` **sur la branche de référence désignée** (actuellement, branche candidate C09, non `main`).
2. Lire ce journal et les travaux C03/C05 ; comparer avec le dernier index / la dernière PR.
3. Pour les courriers, consulter la **branche centrale** `coordination/cycle10-messagerie-v1-20261101`, `coordination/messagerie/MESSAGES_C10.md` et les courriers correspondant au rôle. Il n'existe pas de boîte `orchestratrice.md` dans les 17 boîtes C10 historiques : consulter l'index central et le courrier `coordination/messagerie/courriers/C10-REL-20261102-RELANCE-AUDIT-ORCHESTRATRICE.md`, sans inventer d'accusé.
4. Vérifier les différences de version et les preuves (branche, commit, blob, CI), puis produire un *delta* pour La Relieuse. Pas de consultation automatique d'une conversation historique.

## Inventaire des travaux réellement retrouvés

| Cycle | Pièce ou PR | Fait historique vérifiable, non statut actuel |
| --- | --- | --- |
| C10 | `coordination/messagerie/` ; courrier C10-REL-20261102-RELANCE-AUDIT-ORCHESTRATRICE | Courrier **préparé, non distribué ni reçu** selon son propre texte |
| C11 | `coordination/agents/demande_relieuse_c11.py`, `rapprochement_c11.py` sur main | Normalisation et rapprochement de déclarations, pas réveil d'ateliers |
| C13 | PR #114 ; `coordination/transmissions/2026-11-02_ORCHESTRATRICE_C13.md` | Opt-in C13 candidat, non intégré à main au contrôle C09 |
| C14 | PR #115 ; `coordination/transmissions/2026-11-02_ORCHESTRATRICE_C14.md` | Ordonnanceur déterministe et dépendances, candidat |
| C15/R1 | PR #116 puis #126 ; documents `coordination/agents/` | Contrat Ollama local et double verrou opérateur, sans modèle réel exécuté |
| C18 | PR #132 ; `coordination/transmissions/2026-11-02_ORCHESTRATRICE_INTEGRATION_C18.md` | Suivi documentaire des états, sans validation inférée |
| C03 | `coordination/c03/orchestratrice/05_TRANSMISSION_RELIEUSE.md` et `registre_collectif_c03.json` dans #132/#186 | Point d'entrée et sources historiques conservées |
| C05 | `coordination/c05/orchestratrice/C05_ORC_01_SIMPLIFICATION_SECURITE.md` dans #183 | Console réutilisée, tableau ajouté sans backend |
| C07 | PR #186 ; `coordination/agents/reunification_c07.py` | Checkpoint et reprise déterministe **sur décision humaine**, pas agent IA |
| C09 | Présente PR candidate | Deux référentiels proposés et journal propre ajouté ; aucun merge ni activation |

## Entrée C09-ORCH-01 — 2026-11-05

**Mission demandée :** synchronisation des règles centrales, décisions et journaux des ateliers. **Reçue dans cette conversation**, ce qui ne crée pas d'accusé GitHub des autres ateliers.

**Sources effectivement consultées :**
- `main:coordination/JOURNAL_COMMUN.md` — blob `161fe5e4ae8127cd1a4bd6284d3d68100b03ebeb`.
- `main:coordination/messagerie/README.md` — blob `b0474237941f94869404c0508d60f0f753979509`.
- `main:coordination/messagerie/courriers/C10-REL-20261102-RELANCE-AUDIT-ORCHESTRATRICE.md` — blob `2103c1d6aa18effc0f7faa9b0453bc7042e9d82e`.
- `feature/integration-c18-orchestratrice-suivi-20261102:coordination/c03/orchestratrice/05_TRANSMISSION_RELIEUSE.md` — blob `4fbe39e790901a4654bf05f201fb1f8d8dc52d4b`.
- `work/coordination-console-demo-01:coordination/c05/orchestratrice/C05_ORC_01_SIMPLIFICATION_SECURITE.md` — blob `496f19d8a018af764d930ada6b9d5111beb5d42a`.
- `work/c07-reunification-20261104:coordination/work/c07/DECISIONS_CONTENUS_2026-11-05.md` — blob `674b2ac4081c53648dfa0f6c1f75c350269965c9`.
- `work/c07-reunification-20261104:.github/workflows/pont-relieuse-lectrice-c12.yml` — blob `47678fc2d5942aca5f795176ccdbed794111873a` : **correction candidate, non fusionnée**.

**Travail effectué :** absence des deux nouveaux chemins constatée sur `main`, #186, #132 et branche R1. Réutilisation des dossiers C03 et des rapports existants. Création candidate des deux sources, présent journal et liste de synchronisation des rôles ; aucune modification des archives.

**Décisions reprises :** 4 portes égales 2 × 2, noms C09 officiels, Faire Ensemble haut gauche non obligatoire, 7 Parcours secondaires, PAR-005 bloqué, fenêtres adaptées sous réserve de QA, logos intacts.

**Contradictions / réserves ouvertes :**
- Les décisions C07 parlent d'« Encyclopédie »/« Wiki » et de Mise en avant de Faire Ensemble ; le texte C09 prévaut sur **libellé officiel et égalité des quatre portes**, sans effacer les pièces historiques.
- La PR #186 intègre le correctif opt-in C13 dans sa **branche**, mais `main` possède encore l'ancienne version sans verrou C13. Ne jamais déduire une sécurisation active.
- Ancienne liste de sept états C18 vs neuf dimensions demandées C09 : table de correspondance requise, sans migration destructrice.
- La présence d'un rôle, d'une PR ou d'une CI verte n'est pas la réception d'une mission.

**Statut de la mission C09 :** demandée et commencée en cette conversation ; livrables candidats sur branche, contrôle GitHub et PR à renseigner après dépôt ; validation / intégration / publication **NON ATTESTÉES**.

**Dépendances :** La Relieuse (contrôle des sources et arbitrage des contradictions), Juriste + Développeuse (protection C12 et confidentialité), Anarchitecte + Graphiste (respect grille/accès), Lectrice (contradictions documentaires).

**Prochaine transmission :** envoyer à La Relieuse les chemins réels, commit, blobs, contrôles, réserves, et la liste d'ateliers ; ne pas ouvrir de nouvelles missions automatiquement.

## Règle des futures entrées

Chaque entrée comporte date, ID, mandat, fichiers réellement lus, preuves, travail nouveau, objections, changements **depuis la dernière entrée**, résultats vérifiés, blocages, décisions sollicitées et lien de transmission. Les décisions sont ajoutées au registre central sans réécrire cette histoire.
