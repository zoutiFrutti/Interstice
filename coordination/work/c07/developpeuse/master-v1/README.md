# C07 DEV-03 — projection maître déterministe interne

Contrat unique : `c07-master-projection/1`, note de convergence ANA-01B. Aucun nouveau registre éditable, aucune migration, aucun déploiement.

Entrées en lecture seule : six JSON C02 épinglés à leurs blobs Git exacts ; overlay de garde-fous MED-01B/JUR-01B. Les décisions de revue par ID restent vides tant qu'aucune table approuvée n'est fournie. La matrice MED est reçue comme pièce de contrôle, **pas** transcodée depuis le Markdown pour créer des autorisations.

Exécuter depuis la racine : `node --test coordination/work/c07/developpeuse/master-v1/test.mjs` puis `node coordination/work/c07/developpeuse/master-v1/build.mjs`.

Le constructeur produit une projection **en mémoire uniquement**, puis un résumé sans titres ni URLs et une liste `public_cards: []`. Il ne crée aucun artefact de site, n'écrit aucun fichier, n'ouvre aucune connexion réseau, ne consulte pas Supabase et ne modifie aucune source. Les SHA de contenu restent nuls sans lecture du corps exact. Les données TIS/EXP sont non géolocalisées. Les 24 pages R6 restent indépendantes, sans nouveau visa.

**P0 restant** : le contrat ANA demande également la vérification du build Jekyll Pages réel et des routes navigateur ; cette implémentation isolée ne prétend ni exécuter ces tests ni alimenter les interfaces publiques. Aucun raccordement front avant réception humaine et preuve de non-exposition des fichiers de travail. Pour revenir en arrière : retirer uniquement ce dossier sur la branche candidate après revue, sans toucher aux six JSON ni à main.
