# C10-ORC-01 — Protocole de reprise après interruption de Work
**Reprise documentaire, aucune relance automatique, sans IA.** À exécuter par La Relieuse depuis le dépôt GitHub. Source de coordination : PR #186 candidate, pas main.

## Avant tout : sécuriser et figer une photographie
1. Vérifier le HEAD **courant** de #186 et le HEAD **courant** de main, sans supposer qu'ils sont restés ceux de ce rapport. Lire PR #186, puis journal des dernières décisions de Zout.
2. Confirmer l'arrêt C12 sur **main** : lire le YAML `.github/workflows/pont-relieuse-lectrice-c12.yml`, et contrôler que le job est toujours désactivé. Si la garde a changé, signaler **P0** avant de poursuivre. Ne pas lancer d'Issue, d'agent ou de workflow payant.
3. Lire `coordination/REFERENTIEL_VIVANT.md`, `coordination/REGISTRE_DECISIONS.md` et `coordination/c03/orchestratrice/JOURNAL_SYNCHRONISATION.md` sur le **même commit #186**. Comparer explicitement au référentiel candidat #188 et à son HEAD : ne jamais écraser la version récente par une ancienne.

## Retrouver le travail réellement accompli
4. Ouvrir `coordination/c03/INDEX_TRANSMISSIONS.md` et `coordination/c03/orchestratrice/registre_collectif_c03.json`. Ce sont des **instantanés** du cycle, non des boîtes de réception en temps réel. Les états historiques peuvent être dépassés.
5. Pour chaque atelier concerné par le prochain objectif, examiner seulement le **dernier rapport vérifiable**, sa branche, sa PR, son commit, son blob, ses tests et ses objections ouvertes. Conserver les autres rôles dans l'annuaire sans relance générale.
6. Différencier : mission transmise / reçue / commencée / rapport candidat / contrôle / décision humaine / intégration / publication. Les deux derniers états n'existent pas encore dans le JSON C03 ; les conserver comme **inconnus** sauf actes indépendants.
7. Avant de faire confiance à `preuve_verifiee: true` du rapprochement C11, ouvrir le commit et la pièce d'accusé, confirmer leur association à **ce** mandat et la provenance de l'accusé. Ne pas simuler une conversation ni créer un accusé rétroactif.
8. Examiner les checkpoints C07 seulement si un artifact est nécessaire à la reprise : `verify_checkpoint_c07.py` contrôle origine du run, acteur GitHub, branche et SHA ; `reunification_c07.py` contrôle chaîne d'événements et hachages. Si HEAD ou provenance divergent, **refuser la restauration**, reconstruire la vue en lecture seule depuis les fichiers. Un test `TEST_SYNTHETIQUE` n'est pas une autorisation de Zout.

## Contradictions et priorités humaines
9. Comparer le delta de #188 à #186 **fichier par fichier** avant tout transfert. PR #132 et #183 sont des travaux préparatoires déjà réutilisés dans #186, pas de nouvelles sources d'autorité. Ne pas ouvrir une PR supplémentaire.
10. Inscrire les contradictions non résolues avec les deux sources, leur date, leur SHA, une conséquence et la décision attendue. Conserver notamment les 36 objections thématiques et six réserves transversales répertoriées dans #186, et ne pas substituer les 30 réserves WORK.
11. Respecter les décisions acquises : quatre portes indépendantes en grille 2 × 2 ; Atlas des communs au premier rang de l'Encyclopédie, non cinquième porte ; sept Parcours secondaires ; PAR-005 bloqué ; logos SVG officiels intacts ; aucune publication des contenus sans visas. La priorité d'usage Faire Ensemble n'autorise pas un passage obligé.
12. Pour le prochain cycle, choisir trois actions maximum par **impact humain, risque de sécurité et dépendances réelles**, et poser un QCM court seulement pour les arbitrages qui n'ont pas déjà été décidés par Zout.

## Transmettre sans créer de bureaucratie
13. Mettre à jour une **entrée delta** du journal propre de l'atelier avec le HEAD, les pièces réellement lues et les changements de statut vérifiés. L'index central n'est actualisé qu'avec des preuves traçables, jamais depuis une intuition ou une réponse IA répétée.
14. Transmettre à La Relieuse un seul résumé : `HEAD source`, `travaux vérifiés`, `nouveautés`, `blocages`, `décisions humaines en attente`, `trois prochaines actions`. Ne créer aucun nouveau canal C10 ni nouvelle conversation.
15. Laisser **non commencé ou inconnu** ce qui n'a pas été observé ; aucun agent n'est contacté, aucun service n'est activé, aucun merge ni déploiement n'est effectué.

## Critère de réussite réel

La Relieuse doit pouvoir relancer une session avec **une lecture du point d'entrée**, retrouver les décisions sur le commit concerné, identifier au plus trois actions réalisables et comprendre les blocages sans être obligée de relire toutes les conversations. Ce protocole est un guide : il n'en fournit pas encore la preuve par test utilisateur.

## Transmission à La Relieuse

- Audit et blocages : [C10_ORC_01_ETAT_BLOCAGES_2026-11-06.md](./C10_ORC_01_ETAT_BLOCAGES_2026-11-06.md).
- Règles et états : [C09_CORRESPONDANCE_ETATS.md](./C09_CORRESPONDANCE_ETATS.md).
- Registre central : [INDEX_TRANSMISSIONS.md](../INDEX_TRANSMISSIONS.md).
- Référence : PR #186, brouillon, pour consolidation unique.
- Demande de décision : sécurisation C12 avant toute remise en service ; préférence pour un registre unique à états vérifiés ; traitement de #188 après comparaison de ses pièces uniques.
- Aucune réception de La Relieuse ni validation par Zout n'est induite par le dépôt de ces fichiers.
