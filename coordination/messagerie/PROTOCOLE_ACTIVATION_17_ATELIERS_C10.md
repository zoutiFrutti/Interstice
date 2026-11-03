# Activation vérifiable des 17 messageries — cycle 10

Date : 2026-11-01. Branche centrale : `coordination/cycle10-messagerie-v1-20261101`.

## Test de référence réussi
La Lectrice a réellement lu la boîte centrale et le courrier PORTE-A, puis créé sur sa branche `atelier-lectrice/cycle10-vingt-controles-20261101` le commit `557f4a6d0bbfcb5f5832af89f20a07a615ca7eab`, rapport `coordination/transmissions/2026-11-01_LECTRICE_PORTE_A_ACCUSE_VERIFIE.md`. Neuf pièces vérifiées. Porte A ATTENTE sur le fond.

## Contrat d'activation commun à tous les ateliers
1. Lire **explicitement** `coordination/messagerie/boites/<atelier>.md` depuis la branche centrale, puis les courriers indiqués, sans supposer qu'ils sont présents sur sa propre branche.
2. Pour chaque courrier non traité : lire, vérifier références et SHA, créer un accusé daté sur sa **branche personnelle**, avec ID, source, état, chemin, commit et blob ; ne pas changer les boîtes d'autrui.
3. Travailler les actions indépendantes ; transmettre à La Relieuse un rapport avec faits, objections, tests, limites, chemins et SHAs. Ne pas déclarer une réception sur simple présence du courrier.
4. La Relieuse vérifie les commits et rapproche dans la branche centrale. Les courriers inter-ateliers passent par La Relieuse.
5. En cas de refus/erreur d'accès : transmettre l'erreur précise et la branche essayée, sans prétendre que la boîte est vide.

**Limite technique :** GitHub est un dépôt documentaire, pas un système de notification entre conversations ChatGPT. Aucun bot, webhook, tâche automatique ou réveil d'atelier n'est créé par ce fichier. Un appel explicite dans chaque conversation ou un orchestrateur externe reste nécessaire.

## Message d'activation à envoyer dans chaque conversation
« Consulte directement `zoutiFrutti/Interstice`, branche `coordination/cycle10-messagerie-v1-20261101`, puis ta boîte `coordination/messagerie/boites/<atelier>.md`. Lis les courriers non traités. Accuse réception sur ta branche avec commit et blob vérifiables ; exécute les missions autorisées et transmets à La Relieuse. Si l'accès échoue, donne l'erreur exacte. Ne prétends ni boîte vide ni travail terminé sans preuve. »

## État de validation
17/17 boîtes centrales lues directement par La Relieuse ; présence de boîtes **ne prouve pas** leur réception par les ateliers. La Lectrice est le test bout en bout vérifié. Les autres ateliers ont des travaux et accusés antérieurs à rapprocher individuellement ; ne pas transformer ce test unique en 17 réussites.
