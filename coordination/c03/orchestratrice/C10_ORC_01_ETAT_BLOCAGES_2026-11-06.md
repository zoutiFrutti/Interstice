# C10-ORC-01 — Audit vérifiable et blocages
**Relevé du 6 novembre 2026. P0. Branche candidate de la PR #186.** Aucun agent activé.

## Version des sources
- main HEAD `df73c5dabf47a0b73d2b55f0346c7006d485dd98`.
- PR #186 : HEAD de départ `b5ab7867fb0605d253659796f8aea05ad4b95236`, brouillon. PR #188 : HEAD `ed0c18a5332e731095e65ef34bb2ea43defc78b1`, base historique #186 `1a03c3ba9c8b9c94dcdc0e5e67f7f80270e8ab51`. Ne pas fusionner en bloc.
- #114 HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56` ; #180 `b01ad5a27cac4ff3b3d204ec73f92fc9c68808ac` ; #183 `80de177d16dd4f0c1860b8dba24ba510b59dc10b`. Tous brouillons au relevé.

## Neuf dimensions indépendantes : contrat C09 / C03 / console
Contrat C09 présent sur #186 et #188, blob `61442791765677230f29ca5d274f2718713ea7dd`.
La console réutilise sept champs depuis le JSON C03 du 03/11 ; `coordination-console/seed-public.json` blob `e6d2c340b840ccad074a1f9c404073604c70d137`, 19 profils et **8 missions présentées sur 12**. C'est un instantané, pas un registre à jour en temps réel.

| Dimension C09 | Réemploi C03 | Preuve indispensable pour « oui » | Limite actuelle |
|---|---|---|---|
| DEMANDEE | preparee sous condition | mandat daté, émettrice et destinataire | PREPARE ne suffit pas |
| ENVOYEE | transmise | remise/envoi attesté | fichier préparé ≠ transmis |
| RECUE_ATTESTEE | recue | accusé spécifique et provenance vérifiés | indicateur déclaratif C11 insuffisant |
| COMMENCEE | commencee | travail lié au mandat exact | rapport d'un cycle précédent insuffisant |
| LIVRABLE_CANDIDAT | livree | objet et commit liés à la mission | PR ne vaut pas approbation |
| VERIFIEE | controle_effectue | test, source, périmètre et HEAD contrôlé | CI ≠ contrôle historique |
| VALIDEE_HUMAINEMENT | validee | décision explicite sur la version exacte | acteur déclaré ≠ identité attestée |
| INTEGREE | non modélisé en C03 | merge confirmé, SHA, autorisation | INCONNU tant que pas de preuve |
| PUBLIEE | non modélisé en C03 | autorisation + URL publique et version observées | INCONNU tant que pas de preuve |

BLOQUE, OBJECTION_OUVERTE et EN_ATTENTE sont des **conditions**, pas des étapes. Conserver `null` plutôt que déduire `false` du silence. Ne pas migrer destructivement les sept anciens champs.

### Failles de preuve
Le script `coordination/agents/rapprochement_c11.py` de main (blob `8805a024a25aae1616d7f4c8641c6275d876dded`) vérifie syntaxe et indicateur `preuve_verifiee=true`, mais **n'authentifie ni auteur ni existence du SHA**. L'état de réception exige une preuve externe liée à un mandat précis.
Le journal C07 emploie `actor_declared` (chaîne) et des tests avec acteur synthétique. Les tests d'enchaînement sont utiles, mais ne prouvent jamais une décision réelle de Zout.

## Mécanismes vérifiés
| Composant | Preuve | Constat précis |
|---|---|---|
| C10 facteur | main `.github/workflows/facteur-messagerie-c10.yml`, blob `da72dbb32b0363971390aa6e13b29b25b5f871a3` | planification et `issues:write` : tickets possibles, **pas** une messagerie ChatGPT |
| C11 mission | main `.github/workflows/lancer-mission-c11.yml`, blob `54df47306e3b663c699a03463fd5ac6948139944` | lancement manuel déterministe, résultats en artefacts |
| C12 pont | main `.github/workflows/pont-relieuse-lectrice-c12.yml`, blob `e0961a3a4fb9544f8778b9a61e428d4b36cedb34` | **arrêt d'urgence effectif : condition du job toujours fausse** ; présence éventuelle des secrets inconnue |
| C12 préparation | main `.github/workflows/lectrice-agent-c12.yml`, blob `df199f0056c0780c992da55c0378470f2374256b` | dispatch manuel, script sans option d'appel réel ; produit un rapport préparatoire |
| C13 | #114 et #186 ; pont candidat #186 blob `60f80a7a48174c3b839115088f8a9627c5b0f8c3` | arrêt conservé + verrou opt-in à toute reprise ; **pas activé sur main** |
| C14/C07 | #186 `coordination/agents/reunification_c07.py`, blob `9062a4ada9c948443c06febc366d8880903539f5` | calcul déterministe, journal d'événements chaîné et états refusés si altérés |
| Checkpoint distant | #186 `coordination/agents/verify_checkpoint_c07.py`, blob `3f6a1ceb8b608b50f67b02199e64cde332e7f210` | contrôle run, dépôt, branche, HEAD, acteurs du run, conclusion et artefact ; **pas** visa humain |
| Console | #186 `coordination-console/README.md`, blob `0a1fee20cfa3b49630a580eba6d3944d7beaaa78` | affichage en lecture seule, simulation de préparation, rafraîchissement technique GitHub à la demande ; aucune sync des ateliers |
| GH-AW | #180/#186, lock candidat `.github/workflows/fn-observatrice-pilote.lock.yml` blob `ca2293cda641e9513cd529fe9ebefba670eb2ef4` | compilation, opt-in manuel candidat ; **aucune exécution réelle de modèle vérifiée**. Des secrets/quotas seraient nécessaires à une activation |

**Risque IA :** le pont C12 sur main est désactivé réellement depuis l'arrêt autorisé par Zout. Ne pas répéter qu'il peut aujourd'hui lancer son job. Il reste nécessaire de vérifier les autres déclencheurs, les settings et les secrets avant d'affirmer « aucun IA possible partout ». Aucun workflow ou service IA n'est activé par cet audit.

## Registre des blocages
| ID | Gravité | Constat et conséquence | Mesure et preuve restante |
|---|---|---|---|
| B01 | P0 maîtrisé, reprise interdite | C12 arrêté ; un futur changement de garde pourrait rétablir un appel externe | garder l'arrêt ; audit Juriste/Développeuse des permissions, logs et opt-in avant toute autorisation Zout |
| B02 | P1 | reçu C11 reposant sur un booléen déclaratif | contrôle indépendant auteur, pièce, commit et mandat |
| B03 | P1 | neuf états C09, sept champs console/C03 | correspondance non destructive ; INTEGREE/PUBLIEE inconnus |
| B04 | P1 | console montre 8/12 missions sur instantané daté | lier au registre exact et montrer sa fraîcheur |
| B05 | P1 | #188 à base ancienne et doublons #186 | comparer les blobs uniques ; ne pas écraser les dernières décisions |
| B06 | P1 | acteur C07 seulement déclaré, pas authentifié | ne pas marquer validation humaine sans acte Zout |
| B07 | P1 | GH-AW candidat compilé, secrets/coûts possibles | ne pas activer ; contrôle des budgets et déclencheurs si un pilote est redemandé |
| B08 | P1 | interruption Work et états dispersés | protocole de reprise par HEAD exact, décision prioritaire, aucune relance fictive |
| B09 | P2 | nombre de vues/rapports de coordination | arrêter nouveaux registres, réduire doublons, privilégier preuve d'usage Faire Ensemble |

## Résultats et limites
Vérifié **par lecture GitHub** : HEAD, fichiers et contrats ci-dessus ; CI préexistantes C07/C18/console/compilation en succès sur l'ancien HEAD #186 `b5ab7867fb0605d253659796f8aea05ad4b95236`. Ces succès ne valent ni essai utilisateur ni visa éditorial. **Non vérifiés** : valeurs des secrets, dépenses, véracité des accusés, reprise Work end-to-end, permissions du fournisseur IA, usage social réel.
Aucune nouvelle fonctionnalité, automation ou procédure de messagerie n'est justifiée par ces constats.

## Ce que nous devrions peut-être arrêter de faire
Revalider en cascade les mêmes déclarations IA ; créer des registres de registres ; confondre test déterministe et décision Zout ; rouvrir C12 pour tester une interface ; multiplier les consoles sans fonction réellement disponible pour les utilisateurs.
