# C03-ORC-03 — Contrat commun de dépôt des rapports

**Version candidate v1 ; aucun workflow nouveau.** Tout atelier doit privilégier son dossier C03 existant, notamment coordination/c03/<atelier>/, sinon conserver le chemin historique et le référencer depuis l'index.

## Fiche de dépôt minimale

- Identité : ID unique de mission, rôle(s) réellement inscrits, émettrice, destinataire, date ISO, priorité.
- Origine : mandat envoyé, branche et version ; ne pas supposer lecture à partir du fichier.
- Sources : fichiers consultés, liens et provenances, versions, dates, limites de vérification.
- Travail : recherches exécutées, constatations, objections et contradictions **ouvertes**, corrections proposées, références croisées.
- Preuve : branche, PR, commit SHA, chemin exact, blob SHA, tests réellement exécutés et non exécutés.
- Dépendances : ID des missions liées, nature de la relation (consultation, prérequis, contradiction, approbation).
- Décisions : arbitrages attendus de La Relieuse ou de Zout ; indiquer « en attente » sans présumer accord.
- Statuts séparés : préparee, transmise, recue, commencee, livree, controle_effectue, validee. Chaque champ = vrai / faux / inconnu, avec preuve datée pour la valeur vraie.
- Transmission : un résumé consultable par La Relieuse, proposant la prochaine action **sans déclenchement automatique**.

## Règles d'intégrité

1. Un message préparé n'est pas un envoi ; un ticket créé n'est pas un accusé ; un accusé n'est pas un rapport.
2. Un rapport existant d'une ancienne mission peut être une **antériorité utile**, jamais la preuve de clôture d'une nouvelle mission.
3. Un commit et un blob syntaxiquement corrects ne garantissent pas provenance, qualité ou légitimité ; relever les SHA sur GitHub à la date de lecture.
4. Comparer les blobs de même branche/chemin entre relevés. Si différent, état « à recontrôler », et conserver les anciennes pièces.
5. Ne jamais écraser une objection, une contradiction ou un refus de publication pour simplifier le tableau.
6. Traiter les liens de consultation mutuelle séparément des dépendances d'exécution bloquantes ; les cycles ne doivent pas devenir des boucles de relance.
7. Les missions et rapports sensibles n'ont pas leur place dans un dépôt public. Les documents de GitHub contiennent seulement des métadonnées non sensibles.
8. Les anciens rôles restent enregistrés même sans rapport actuel ; n'inventer ni connexion de conversation ni accusé.
9. Une décision Zout doit être accompagnée de son acte identifiable avant de renseigner « validee : true ».
10. Les validations et publications ne sont jamais déclenchées par une CI, une Issue, un script ni une PR brouillon.

## Mise à jour et compatibilité

- Réutiliser coordination/agents/suivi_integration_c18.py comme contrôle C18.
- Registre candidat : coordination/c03/orchestratrice/registre_collectif_c03.json.
- Index local reproductible : python3 coordination/agents/index_collectif_c03.py --entree coordination/c03/orchestratrice/registre_collectif_c03.json.
- Le moteur ne consulte **aucun réseau**. Le contrôle de fraîcheur compare des relevés de SHA fournis manuellement ; la phrase « à jour » est datée, jamais garantie en temps réel.
- Mise à jour des index GitHub uniquement via nouvelle PR/revue ; pas de modification automatique des boîtes C10.

## Transmission à La Relieuse

Pour le cycle suivant, La Relieuse lit d'abord coordination/c03/INDEX_TRANSMISSIONS.md, contrôle les preuves manquantes, puis choisit les ateliers à solliciter sans relance générale inutile.
