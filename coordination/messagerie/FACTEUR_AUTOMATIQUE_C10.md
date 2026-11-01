# Facteur automatique C10 — livraison candidate, sans faux agent

Date : 2026-11-01. Code : `coordination/messagerie/facteur.py` ; workflow : `.github/workflows/facteur-messagerie-c10.yml`.

## Réalisé
- Lit sur la branche centrale les **17 boîtes**, extrait les IDs de courriers, calcule une empreinte par boîte.
- Sur changement, crée un ticket GitHub Issues contenant atelier, lien, branche, blob, IDs et consigne de réception ; détecte les tickets existants par marqueur stable pour éviter les doublons d'une même version.
- Laisse les courriers, accusés, statuts, publications et décisions humaines intacts.
- Exécution planifiée toutes les 30 minutes **uniquement après présence du workflow sur la branche par défaut**. Un déclenchement manuel est également déclaré ; GitHub exige lui aussi que le workflow soit présent sur la branche par défaut pour `workflow_dispatch`.

## Limites impératives
**Pas encore activé :** les deux fichiers sont sur `coordination/cycle10-messagerie-v1-20261101`, branche candidate. Aucune exécution GitHub Actions ni ticket créé par le facteur n'est attesté à cette étape. Le workflow ne doit pas être déclaré opérationnel avant intégration contrôlée sur la branche par défaut et première exécution observée.

Le facteur **notifie par Issues**, mais **ne démarre pas les conversations ChatGPT** et **n'exécute pas les missions d'ateliers**. Un vrai agent autonome nécessiterait une exécution dédiée, des identités/permissions cloisonnées, un moteur, des secrets, des budgets et une validation de sécurité. Aucun jeton d'IA n'est utilisé ici.

## Activation humaine et contrôle
1. Examiner la PR/intégration de ces fichiers, sans fusionner tout le cycle 10 par inadvertance ; porter les deux fichiers et leurs dépendances de messagerie sur la branche par défaut par une intégration dédiée.
2. Autoriser GitHub Actions et les permissions `issues:write` pour le `GITHUB_TOKEN` si nécessaire.
3. Lancer le workflow manuellement, vérifier les logs et les tickets pour les 17 boîtes ; vérifier la déduplication au deuxième lancement.
4. Examiner les échecs : boîte manquante, token sans permission, quotas GitHub, courriers non référencés, détection de versions.
5. **Ne pas confondre ticket créé, accusé reçu et travail traité.**

## Tests à faire avant exploitation
- Test sans écriture `DRY_RUN=true python3 coordination/messagerie/facteur.py` avec accès réseau GitHub (ne nécessite pas de token pour dépôt public).
- Première exécution réelle sur la branche par défaut, puis deuxième exécution identique : 0 doublon attendu.
- Mise à jour d'une seule boîte : un nouveau ticket pour cette boîte, pas pour les seize autres.
