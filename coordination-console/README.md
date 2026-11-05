# Console de coordination candidate

Démonstration interactive, données publiques et aucune commande externe. Héberger derrière une protection authentifiée de plateforme si l’aperçu doit être privé ; le code ne prétend pas créer cette protection.

Construction : `node scripts/build-coordination-preview.mjs`, puis servir `dist-coordination/` par HTTP. La construction refuse un dossier de sortie contenant un fichier hors liste, sans le supprimer.

Trois vues : missions, profils d’ateliers, preuves. Détail de mission avec sept états ternaires indépendants. Préparation C11 simulée dans la mémoire de l’onglet ; déclenchement désactivé, sans gestionnaire et sans backend. Aucune Issue, appel IA, écriture GitHub, donnée privée ou clé ne figure dans l’application.

`seed-public.json` reprend l’adaptateur de recherche vérifié : 19 profils documentés, 8 missions, 8 exécutions GitHub datées. Le registre C03 complet compte 12 missions ; ses dépendances hors sélection renvoient vers la source. Les domaines proviennent de la revue C10 et des contrats C03/C15. Inconnu ne signifie pas absence de travail. Les profils ne sont jamais déclarés actifs par leur seule présence.

Sources principales : PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`, registre blob `321786c6f2b5138753abdfebcf930feb956d2170`, contrat des rapports C03, normaliseur C11 de main `7344591fa7f0f4f6951ea273525039cf2cb9982a`. C13 #114 et C14 #115 restent des propositions non fusionnées ; C14 est déterministe, sans IA. C12 garde un risque sur main : ne créer aucune Issue de test.

Les logos référencés sont les deux fichiers officiels du dépôt. Ils ne sont pas redessinés. Les copies d’aperçu sont contrôlées par SHA-256 dans `checksums.json` et les tests.

L’instantané ne se synchronise pas automatiquement. Un nouveau relevé doit conserver les inconnus, les réserves et les échecs techniques pertinents. Les données brutes de recherche, courriers et kits éditoriaux ne sont pas inclus dans le constructeur.

## C05-ORC-01 : tableau unique, sans duplication de messagerie

La vue **Ce qui circule** intègre désormais un tableau dérivé de `seed-public.json` avec mission, responsables, PR liées **typées** (livrable candidat / antériorité / dépendance technique), état de la source, blocage et prochaine action. Les autres vues et le contrat C11 restent inchangés. Aucun état reçu, validé ou exécuté n'est calculé depuis une PR.

Le tableau ne se synchronise **pas** : il affiche la photographie publique et datée du registre C03. Il ne faut pas utiliser ses liens PR comme preuve d'un nouveau rapport ni comme instruction d'activation. Les missions non incluses dans cette démonstration sont consultables par l'index GitHub du registre, pas ajoutées sous forme de faux résultats. La lecture est accessible sur mobile avec tableau défilant et liens clavier. Aucune commande supplémentaire.

La sécurité C12 sur `main` reste P0 : l'opt-in C13 de la PR #114 n'est pas fusionné. Le pilote #180 possède un lock GH-AW candidat mais aucune exécution d'agent ; la présence de variables ou de secrets n'est pas attestée. Ces changements ne branchent ni C12, ni C14, ni GH-AW à cette console.

## C01 — relevé structurel distinct des états d’ateliers

La console existante est réutilisée. Le relevé C03 du 3/4 novembre conserve ses états déclaratifs et inconnus ; le contrôle du catalogue du 5 novembre possède sa propre date, son commit de données et les empreintes de huit sources. Il dénombre 36 objections thématiques **plus six réserves transversales**, 30 WORK (27 ouvertes, trois bloquées), 19 relations et 71 FN, sans fermer aucune réserve.

Le champ `c07_catalogue.documentary_inventory` est produit par le contrôle déterministe C07 existant. Les neuf fiches Commune retenues avec réserves restent distinctes d’ARCH-003 non sélectionnée dans ce lot ; aucune n’est autorisée à être publiée par ce relevé. Le constructeur générique n’embarque aucun corps Drive ni lot privé.

Le bouton « Actualiser les états GitHub » lit les contrôles techniques courants de #186 en lecture seule ; il ne réécrit pas l’instantané documentaire et ne crée ni réception, activité, décision humaine ou publication. Le relevé structurel et la démonstration synthétique C07 sont présentés séparément, y compris dans le repli sans JavaScript pour le relevé.
