# R1-ORC — Accusé et audit de reprise de L'Orchestratrice

Date : 2026-11-02. État : **COURRIER LU DANS CETTE SESSION**, accusé technique candidat sur branche propre, sans modification du registre R1 central.

## Sources vérifiées (branche R1 centrale)
- `coordination/reprise-r1/courriers/R1-ORC.md` blob `ac39f672820c2e8a68e32ad8197786942923e0`.
- `coordination/reprise-r1/00_METHODE_ET_INVENTAIRE.md` blob `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8`.
- `coordination/reprise-r1/01_AXES_ARCHITECTURE_ET_PRIORITES.md` blob `a9070cd99b775d169415e3c991074dced1c6ffab`.
- `coordination/reprise-r1/02_INDEX_COURRIERS_ET_PROTOCOLE.md` blob `4982d1d2501af5665729cc99400c5915e94a6eb0`.

## Passe 1 — Inventaire d'antériorité
- PR #114 C13 : brouillon sur main, HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56`, non fusionné.
- PR #115 C14 : brouillon sur main, HEAD `e139a1286c361b85aacd62413475f26878595911`, non fusionné.
- PR #116 C15 : brouillon sur branche C14, HEAD `dac43f10d881af355da4a2214bd222b8e7ff4e39`, non fusionné.
- C10 historique : `coordination/messagerie/MESSAGES_C10.md`, blob `291ac1b38086df535b62ababc92278017123bb30` ; 17 boîtes historiques, **pas de boîte Orchestratrice C10**. Les états `ÉMISE` ne prouvent aucune réception.
- R1 : 18 courriers **PRÉPARÉS** dans le registre ; le présent courrier a été lu en réponse à sa transmission par Zout, mais **aucun accusé des 17 autres ateliers n'est présumé**.
- Aucun ancien accusé propre Orchestratrice C10 à réconcilier ; travail C13/C14/C15 documenté par PR et transmissions.

## Passe 2 — P0 et dépendances
1. **P0 autorisation IA C15** : le booléen `ia_active` situé dans une mission contrôlée par l'appelant n'est pas une authentification ; la commande `--executer-local` seule pourrait permettre une exécution involontaire si JSON activé.
2. **P0 réseau C15** : le transport HTTP standard peut hériter des variables proxy d'environnement ; mieux vaut désactiver explicitement ces proxys pour l'appel Ollama loopback. Pas de liaison à une Issue publique.
3. C13 : `LECTRICE_AI_ENABLED` requiert un choix de modèle/secret ; pas de compteur euros cumulatif ni d'exécution IA réelle démontrée. **BLOQUÉ** pour activation.
4. C14 : trois fonctions Python déterministes, pas de modèles ni sources externes ; réponse GitHub sur Issue publique après fusion seulement. Ne pas y verser de données sensibles.
5. C15 : le fournisseur distant reste non connecté, coût API zéro seulement pour l'API locale, non pour matériel/électricité.
6. Aucun code des PR #114–#116 n'est fusionné dans main.

## Passe 3 — Correction candidate ciblée
Branche `feature/r1-orchestratrice-audit-p0-20261102` **basée sur C15** (elle-même basée sur C14), sans créer de copie concurrente du moteur.
- Dans `coordination/agents/executant_c15.py` : second verrou `--autorisation-operateur` **et** `C15_LOCAL_EXECUTION_ENABLED=true` requis à la CLI ; `executer_local(..., operator_authorized=True)` requis via bibliothèque ; transport HTTP sans proxy hérité.
- Dans `coordination/agents/test_executant_c15.py` : tests de refus si simple booléen JSON, absence de variable d'environnement, exécution réseau simulée uniquement.
- Aucun changement sur les branches de La Développeuse, de L'Anarchitecte, de La Juriste ou de La Relieuse.

## Passe 4 — Tests
Sur le commit `c37ece6163503be8dce63f3d6eae76d8729d4bee`, workflow C15 run `41448191248` **SUCCESS**, tests C15 exécutés en CI sans appel Ollama réel. Suite C11 run `41448191231` lancée, état à vérifier sur SHA final. Le contrat C15 a ensuite été précisé sur un commit ultérieur. Tests prévus : `python3 -m unittest discover -s coordination/agents -p 'test_executant_c15.py' -v`. Les tests simulent Ollama, **aucun appel réel**. Test Linux/Ollama réel, tests multi-utilisateurs, étude des coûts et tests d'accès réseau local : **NON FAITS**.

## Passe 5 — Transmission et priorités
- **TERMINÉ documentaire** : inventaire, lecture R1, identification du risque d'autorisation, correctif candidat.
- **À POURSUIVRE** : revue de code, CI sur SHA exact, suivi séparé des courriers R1 sans déduction automatique d'accusé.
- **BLOQUÉ** : toute exécution IA non locale, toute liaison C14→C15 automatique, traitement de données sensibles, fusion sans validation.
- **DÉCISION ZOUT** : éventuelle activation IA, budget, déploiement et intégration.
- Dépendances : Développeuse (exécuteur), Anarchitecte (statuts / auth), Juriste (risques de sécurité, RGPD), Relieuse (arbitrage et calendrier).
- Chaîne Git prévue : C14 #115 → C15 #116 → correctif R1 candidat. Le retour R1 doit être rapproché par La Relieuse ; il ne modifie pas automatiquement son index.

**Aucune diffusion, aucun merge, aucune publication, aucun contact externe ni achat.**
