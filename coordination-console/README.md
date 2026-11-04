# Console de coordination candidate

Démonstration interactive, données publiques et aucune commande externe. Héberger derrière une protection authentifiée de plateforme si l’aperçu doit être privé ; le code ne prétend pas créer cette protection.

Construction : `node scripts/build-coordination-preview.mjs`, puis servir `dist-coordination/` par HTTP. La construction refuse un dossier de sortie contenant un fichier hors liste, sans le supprimer.

Trois vues : missions, profils d’ateliers, preuves. Détail de mission avec sept états ternaires indépendants. Préparation C11 simulée dans la mémoire de l’onglet ; déclenchement désactivé, sans gestionnaire et sans backend. Aucune Issue, appel IA, écriture GitHub, donnée privée ou clé ne figure dans l’application.

`seed-public.json` reprend l’adaptateur de recherche vérifié : 19 profils documentés, 8 missions, 8 exécutions GitHub datées. Le registre C03 complet compte 12 missions ; ses dépendances hors sélection renvoient vers la source. Les domaines proviennent de la revue C10 et des contrats C03/C15. Inconnu ne signifie pas absence de travail. Les profils ne sont jamais déclarés actifs par leur seule présence.

Sources principales : PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`, registre blob `321786c6f2b5138753abdfebcf930feb956d2170`, contrat des rapports C03, normaliseur C11 de main `7344591fa7f0f4f6951ea273525039cf2cb9982a`. C13 #114 et C14 #115 restent des propositions non fusionnées ; C14 est déterministe, sans IA. C12 garde un risque sur main : ne créer aucune Issue de test.

Les logos référencés sont les deux fichiers officiels du dépôt. Ils ne sont pas redessinés. Les copies d’aperçu sont contrôlées par SHA-256 dans `checksums.json` et les tests.

L’instantané ne se synchronise pas automatiquement. Un nouveau relevé doit conserver les inconnus, les réserves et les échecs techniques pertinents. Les données brutes de recherche, courriers et kits éditoriaux ne sont pas inclus dans le constructeur.
