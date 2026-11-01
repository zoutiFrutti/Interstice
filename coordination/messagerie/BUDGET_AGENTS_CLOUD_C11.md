# Politique budgétaire agents cloud — décision Zout du 2026-11-01

**Plafond impératif : 10 EUR par mois civil**, pour **tous** les agents IA de La Faille noire × Interstice, cumulés. Ce n'est ni un budget par atelier, ni une autorisation de dépenser automatiquement.

## Conditions de sécurité avant tout appel payant
1. Aucun appel API payant sans fournisseur, clé secrète, tarifs vérifiés, accord explicite et dispositif de suivi des dépenses.
2. Préférer une **limite de facturation dure côté fournisseur**, si elle existe et couvre les usages visés. Sans coupure dure garantie côté fournisseur, **ne pas prétendre qu'un compteur local garantit le plafond réel** : les appels concurrents, la latence des factures, les autres clés/projets et les arrondis peuvent provoquer des dépassements.
3. **Désactiver par défaut** tous les jobs payants (`ENABLE_PAID_AGENTS=false`) ; autoriser seulement après contrôle. Les workflows gratuits de messagerie restent indépendants.
4. Un seul job IA simultané au départ ; réserver au moins 20 % du budget (2 EUR) pour marge d'incertitude ; **arrêt préventif à 8 EUR estimés** pour les agents de ce projet. Arrêt aussi sur absence de mesure fiable, erreur de tarification ou doute.
5. Limite initiale par mission : **0,20 EUR estimé**, appels et tokens bornés, zéro retry automatique payant. Un calcul de coût avant/après chaque appel est obligatoire, mais n'est qu'une estimation tant que le fournisseur ne confirme pas les montants.
6. Journaliser par mois : date, agent, mission, modèle, tokens d'entrée/sortie, tarif versionné, coût estimé, identifiant d'exécution, résultat, cumul. Ne jamais journaliser de secrets ni de données personnelles.
7. Aucune dépense sans supervision initiale ; interdiction de publication, fusion, messages externes, décisions éditoriales ou juridiques automatiques.

## Décision et état
- **Approuvé : plafond global de 10 EUR/mois.**
- **Non approuvés : fournisseur, modèle, prélèvement, clés API, activation de dépenses.**
- **Statut : préparation uniquement, dépense attestée = aucune dans cette mise en place ; dépenses extérieures inconnues.**
- Étape suivante : choisir le fournisseur et ses mécanismes de facturation, construire un pilote de lecture seule et vérifier le budget sur une exécution de test avant toute extension aux 17 ateliers.
