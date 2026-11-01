# Démonstration C11 : circulation de mission sans IA ni dépense

**Statut : prototype candidat, non déployé.** Les ressources de l'exemple sont fictives. Aucune recherche web n'est réalisée.

La mission JSON passe par trois fonctions déterministes : Médiathèque (doublons d'URL), Lectrice (URL manquantes), Relieuse (synthèse). Ce sont des **simulations de rôles**, pas des agents autonomes. L'objectif est de tester le contrat des missions et la traçabilité, sans API ni secrets.

Exécuter localement : `python3 coordination/agents/demo_c11.py --sortie rapport-demo-c11.json`.

Tests : `python3 -m unittest discover -s coordination/agents -p 'test_*.py'`.

Le workflow GitHub est manuel ou déclenché sur PR. Il ne crée ni Issue ni commit ni publication. Le rapport est un artifact GitHub Actions. Coût API IA : **0 €**. L'exécution GitHub Actions peut consommer des minutes selon les quotas du compte.

**Prochain seuil de décision :** examiner le résultat du prototype et définir ce qu'un vrai agent aurait le droit de lire, de faire et de payer. Aucune clé ni activation payante à ce stade.
