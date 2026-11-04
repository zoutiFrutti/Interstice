# C03-ORC-03 — Transmission à La Relieuse

Date : 2026-11-03. Mission P0, mandat Zout. **Candidat sur la PR #132 existante**, sans nouvelle messagerie ni PR concurrente.

## Livrables candidats

1. coordination/c03/INDEX_TRANSMISSIONS.md : point d'entrée unique pour La Relieuse, 19 rôles documentés, 11 missions demandées, liens GitHub des pièces vérifiées et réserves.
2. coordination/c03/orchestratrice/registre_collectif_c03.json : source des états indépendants, antériorités, dépendances, relevés SHA.
3. coordination/agents/index_collectif_c03.py : contrôle du registre, comparaison de relevés SHA datés, génération d'une vue MD et JSON, sans réseau.
4. coordination/agents/test_index_collectif_c03.py : tests de non-régression et garde-fous.
5. coordination/c03/orchestratrice/01_AUDIT_MESSAGERIE.md : audit C10 à C18, preuves, P0.
6. coordination/c03/orchestratrice/02_CONTRAT_RAPPORTS.md : contrat de dépôt et transmission.
7. coordination/c03/orchestratrice/03_DEPENDANCES.md : matrice et objections.
8. coordination/c03/orchestratrice/04_PLAN_INTEGRATION.md : récupération de l'existant et seuils humains.
9. Ce document : synthèse opérationnelle.

## Constat GitHub réel

- PR #114 C13, #115 C14, #116 C15, #126 R1 et #132 C18 restent en brouillon non fusionné lors de la passe.
- Facteur C10 déjà présent sur main et dernier run programmé n° 41679296315 en succès ; aucune lecture automatique de conversation.
- C12 présent sur main sous déclencheur issues.opened : pas de verrou explicite LECTRICE_AI_ENABLED dans le workflow principal. Risque d'appel si un compte autorisé crée une Issue et qu'une clé/modèle existent. **Absence de secret non vérifiée**, ne pas présumer le système inoffensif.
- PR #161 WORK est candidate (HEAD 0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6). 219 objets, 19 relations et 30 réserves WORK ; pas de publication V2.
- PR #162 ARCH et note CAT C03 précédentes retrouvées sur branches candidates, avec blobs vérifiés. Leur présence n'atteste aucune livraison des nouvelles missions ARC-03 et CAT-03.
- Retour Graphiste sur PR #161 constaté, mais pas visa TECH-02 conjoint Développeuse.

## Statuts à transmettre

- TERMINÉ documentaire : relevé du système précédent, registre initial, index et contrat proposés dans #132.
- À CONTRÔLER : réception, début et livraisons réelles des 11 missions C03, exactitude des anciennes objections et des sources.
- BLOQUÉ P0 : publication PAR-005, activation IA hors opt-in contrôlé, données sensibles sur Issues publiques.
- À VALIDER : format commun, stratégie d'intégration, choix de fuseaux de preuves et toute fusion.
- Tests : le résultat GitHub Actions sera joint à la PR. Aucun test IA réel, aucune ouverture d'Issue ni modification de main.

## Règles impératives

Une mission préparée n'est pas envoyée. Un fichier Github n'est pas un accusé. Un commentaire ne valide pas un travail. Une PR et une CI ne valident aucun fait historique. Les anciennes preuves ne sont jamais effacées au profit d'une synthèse.

**La Relieuse doit reprendre à partir de coordination/c03/INDEX_TRANSMISSIONS.md.** Aucun envoi à d'autres ateliers n'a été déclenché par ce travail ; aucune activation, aucun merge, aucun déploiement et aucune dépense.
