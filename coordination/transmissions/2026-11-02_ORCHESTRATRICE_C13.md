# ORCH-C13-001 — Transmission de L'Orchestratrice à La Relieuse
Date : 2026-11-02
Statut : **CANDIDAT TECHNIQUE — NE PAS FUSIONNER AUTOMATIQUEMENT**

## Diagnostic vérifié
- Dépôt : `zoutiFrutti/Interstice`, branche de référence `main`.
- PR #95 et #96 fusionnées : prototype Lectrice et pont Issue.
- Le code C12 peut faire un appel à l'API IA à partir d'un secret et d'une variable de modèle ; aucune preuve d'appel IA réel observée.
- Les runs récents du facteur C10 sont verts, sans réveil de conversations ChatGPT.

## Travail soumis en C13
1. Ajout d'un verrou explicite `LECTRICE_AI_ENABLED=true` avant tout appel IA.
2. Retour structuré en Issue, y compris en cas de mauvaise saisie ou de panne.
3. Masquage des détails d'erreur susceptibles de contenir des données sensibles.
4. Tests de non-appel IA, autorisation, refus, succès candidat et échec.
5. Concurrence par Issue, garde-fou anti-doublon des commentaires du bot.
6. Enregistrement de `orchestratrice` dans la liste C11 des rôles admissibles (sans modifier le facteur C10 de 17 boîtes), avec test de normalisation.
7. Contrat opératoire dans `coordination/agents/C13_CONTRAT_RETOUR_LECTRICE.md`.

## Ce qui n'est PAS réalisé
- Aucune clé ni modèle IA configuré par cet atelier.
- Aucune exécution payante ou validation d'un résultat produit par IA.
- Aucun réveil de conversation historique ChatGPT.
- Aucune fusion ou publication.
- Aucune orchestration multi-ateliers réelle.

## Décisions et étapes suivantes
- Relecture technique par La Développeuse et contrat de statuts par L'Anarchitecte.
- Analyse des risques GitHub public / IA par La Juriste.
- Validation d'une démonstration sans coût par La Relieuse.
- Choix explicite du fournisseur, du modèle et du plafond de dépense avant activation.
- Extension aux autres ateliers uniquement après test du circuit de retour complet.

La Relieuse conserve la coordination, et Zout les décisions éditoriales et financières.
