# C11-ORC-01 — Réconciliation sélective des PR #186 et #188

**Relevé GitHub : 7 novembre 2026. Priorité P0.** Candidate unique #186, sans fusion de PR, sans réactivation IA ni nouvelle messagerie.

## 1. HEAD effectivement comparés

- PR **#186**, HEAD de départ `c7a8d41214e79e0b038d744152b9bfabb74ae08d`, base `main`, brouillon.
- PR **#188**, HEAD `ed0c18a5332e731095e65ef34bb2ea43defc78b1`, base `work/c07-reunification-20261104` au SHA historique `1a03c3ba9c8b9c94dcdc0e5e67f7f80270e8ab51`, brouillon.
- Arbres GitHub récursifs comparés **chemin et SHA de blob** : 810 fichiers sur #186, 791 sur #188 ; **756 blobs identiques** aux mêmes chemins, **35 chemins présents des deux côtés mais différents**, **zéro chemin propre à #188**, **19 chemins supplémentaires dans #186**.
- Cela prouve l'identité exacte des contenus lorsque les SHA de blob Git concordent, pas l'identité d'un comportement ou d'un historique de décision. Il ne faut **pas** cherry-picker #188 en bloc.

## 2. Matrice de réconciliation des pièces de coordination

| Pièce | Blob #188 | Blob #186 | Conclusion |
|---|---|---|---|
| `coordination/c03/orchestratrice/C09_CORRESPONDANCE_ETATS.md` | `61442791765677230f29ca5d274f2718713ea7dd` | **identique** | présent ; pas de copie |
| `coordination/agents/verifier_referentiel_c09.py` | `79e89bd159e40d0b61073948514982281d847a95` | `8e6f64da9caf37b478f0cd9e84c5c8eb7480243c` | nouvelle version #186, analyse conservée |
| `coordination/agents/test_verifier_referentiel_c09.py` | `3bf51cfd2cfe4012d74a46cecb25e7522b47a98d` | `30ec351c91803a61f26367ca21642af0b94e8c56` | tests #186 plus adaptés aux nouvelles décisions, ne pas écraser |
| `coordination/c03/orchestratrice/ANNUAIRE_SYNCHRONISATION_C09.md` | `eaa721190d1df59cfeb80e9b0e09886fe830c996` | **identique** | 19 rôles, aucun agent supplémentaire |
| `coordination/c03/orchestratrice/AUDIT_C09_CONTRADICTIONS.md` | `687100eec3f4782a5cccc70cd567a93f60c89496` | **identique** | audit ancien à lire avec ses dates |
| `coordination/c03/orchestratrice/TRANSMISSION_C09_VERS_RELIEUSE.md` | `8103f0345eb13f0337b74899f95e53dc5f2c264e` | `f77f6aa5d15e33d7a4e5c3f9fb5059b5bd7ae43c` | version plus récente #186, vérifier ses réserves, pas revenir au texte ancien |
| `coordination/c03/orchestratrice/JOURNAL_SYNCHRONISATION.md` | `4b97575d89fc1f6f7227ce7648f223ecce9e7bf2` | `4bac8d4e2633abd9e65d2445faf28d9bfea07acf` | journaux de nouveaux cycles déjà ajoutés sur #186 |
| `coordination/REGISTRE_DECISIONS.md` | `c2af97b1ab09d6491bcf7270bbf846264113c39b` | `382047ec22b7d1ca7f561a7061672fd66fea722d` | décisions plus récentes dans #186 : priorité absolue à leur provenance |
| `coordination/REFERENTIEL_VIVANT.md` | `fed3cefea08b52afb9760129f7f3943f9ce602a9` | `a039a5aa23486a60a1806bd12676d4feb4510328` | **R01 à R10 adoptées** et modifications C08/C11 ; ancien état de #188 obsolète |

Les **35 chemins divergents** incluent aussi workflows C12/NAV, fichiers de navigation, console, tests navigateur et constructeur : ces changements ne doivent pas être ramenés à la version ancienne. Une divergence de blob prouve une différence de contenu ; sa justification précise peut nécessiter la revue de son diff, de sa décision et de ses tests. **Aucun fichier de #188 ne manque dans l'arbre #186.**

## 3. Trois apports : état et qualité réellement observés

1. **Correspondance C09.** Déjà identique dans #186 et #188. Neuf dimensions définies, avec conditions de preuve distinctes. Le document est un **contrat**, pas une attestation d'événements ; il ne faut pas le recopier.
2. **Vérificateur C09.** #186 possède le parseur `decision_rows`, prend en charge les familles de décisions C09-RULES et WORK-C08, contrôle provenance et identifiants, conserve règles des quatre portes/Atlas/PAR-005 et 19 rôles. Il vérifie des textes et chemins **locaux**, pas l'identité d'un décideur, les SHA GitHub externes ou l'usage humain réel.
3. **Tests C09.** #186 ajoute des cas de familles de décision, de doublons et de provenance. Un test utilise un rôle fictif **dans une chaîne de test seulement**, sans le créer dans le registre. Il ne faut pas réimporter le jeu ancien de #188 (moins couvrant). La présence et la réussite CI ne donnent pas l'autorisation de publication.

## 4. Neuf dimensions et preuve individuelle

| Dimension | Source C03 actuelle | Preuve de transition positive | Audit du registre C03 |
|---|---|---|---|
| DEMANDEE | `preparee` | mandat daté et identifiable | 12/12 déclarées préparées ; mandat individuel et provenance pas systématiquement établis |
| ENVOYEE | `transmise` | envoi effectif attesté | 12/12 inconnues |
| RECUE_ATTESTEE | `recue` | accusé spécifique, auteur et provenance contrôlés | 12/12 inconnues |
| COMMENCEE | `commencee` | travail attribuable à la mission | 1 oui (C03-ORC-03), 11 inconnues |
| LIVRABLE_CANDIDAT | `livree` | fichier/PR et commit liés au mandat | 1 oui (EV-ORC-03), 11 inconnues |
| VERIFIEE | `controle_effectue` | preuve de contrôle lié au contenu et HEAD | 12/12 inconnues |
| VALIDEE_HUMAINEMENT | `validee` | décision humaine positive ou refus explicite sur cette version | **12/12 false**, sans refus nominatif par mission : **contradiction avec null = inconnu** |
| INTEGREE | absent du schéma C03 | merge GitHub réellement constaté + autorisation | aucun état à inférer |
| PUBLIEE | absent du schéma C03 | autorisation + version publique effectivement constatée | aucun état à inférer |

**Source :** `coordination/c03/orchestratrice/registre_collectif_c03.json` blob `321786c6f2b5138753abdfebcf930feb956d2170`, 12 missions, 19 rôles et 20 pièces datées. Le fait qu'un SHA existe dans le registre ne prouve pas automatiquement que chaque événement a eu lieu.

**Contradiction non résolue :** les douze `validee=false` sont une politique de refus d'auto-validation, pas nécessairement une **preuve explicite de refus humain** pour chacune. Ne pas les transformer en `true`; préparer une revue ligne par ligne avant un passage éventuel à `null`, en conservant le snapshot ancien. La console montre encore sept dimensions datées ; **INTEGREE/PUBLIEE** ne doivent pas être affichées comme étapes franchies.

## 5. Décisions à préserver et mandats obsolètes

- **R01–R10 adoptées sur #186**, références `D-C09-RULES-01/03/04/05` et historique `D-C09-RULES-02` conservé. R05 = suppression après contrôle et autorisation ; R08 = construction de la gouvernance avec les personnes participantes ; R10 = simplification déclenchée par un problème, sans bureaucratie obligatoire.
- Zout a retenu #186 comme candidate unique et autorisé la reprise sélective des apports de #188/#189, **pas** leur fusion aveugle ; décision `D-WORK-C08-PHASEC-01`.
- C12 sur `main` au SHA `df73c5dabf47a0b73d2b55f0346c7006d485dd98` : workflow `pont-relieuse-lectrice-c12.yml` blob `e0961a3a4fb9544f8778b9a61e428d4b36cedb34`, **job désactivé inconditionnellement**. #186 garde l'arrêt dans `false && ...` (blob `60f80a7a48174c3b839115088f8a9627c5b0f8c3`). Les récits antérieurs « pont actif sans opt-in » sont historiques et **ne décrivent plus l'état actuel**.
- Quatre portes égales, Atlas des communs composante principale de l'Encyclopédie sans cinquième porte, sept Parcours secondaires, PAR-005 bloqué, logos SVG officiels inchangés.
- Décisions WORK-C08 sur futur pilote Faire Ensemble, modération par Zout et 30 jours de conservation pour les **nouvelles propositions non traitées** : préparation uniquement, aucun envoi/réactivation/suppression de données autorisé.
- Documents #188 donnant encore des instructions générales de transférer leurs fichiers vers #186 : **mandat déjà accompli sur les chemins concernés**. Ne pas ouvrir une nouvelle PR/boîte/mission de rapprochement.

## 6. Tests observés sur HEAD de départ de #186

| Workflow GitHub | Résultat sur `c7a8d412` |
|---|---|
| R6 INT01 preflight | SUCCESS, run 42357441379 |
| C11 sans IA | SUCCESS, run 42357441226 |
| C07 secure deterministic sans IA | SUCCESS, run 42357441185 |
| C18 suivi hors ligne | SUCCESS, run 42357441174 |
| Compilation GH-AW candidate sans IA | SUCCESS, run 42357441153 |
| C14 local sans IA | SUCCESS, run 42357441118 |
| WORK C02 contrat hors publication | SUCCESS, run 42357441109 |
| Console read-only QA | SUCCESS, run 42357441106 |
| NAV01 navigateur | **FAILURE**, run 42357441316, étape « Responsive, simulated Android, keyboard, no-JS and real browser zoom » |

**Pas de CI globale verte** sur ce HEAD. L'échec NAV01 est distinct du sujet C09 et doit rester visible. Les tests d'agent et la compilation n'attestent aucun appel au modèle. Aucun événement IA n'a été déclenché pendant cet audit. Les permissions et secrets effectifs ne sont pas inspectables depuis ces seules sources.

## 7. Correction minimale candidate et plan de validation

- Conserver les trois pièces C09 **déjà présentes** dans #186, sans réécriture ni portage de versions anciennes.
- Ajouter dans le dossier existant ce rapprochement fondé sur les blobs et les états, sans modifier le registre des décisions.
- Préparer un test de non-régression réutilisant le vérificateur C09 : existence des neuf dimensions distinctes dans la table de correspondance, maintien de la politique `null` pour toute absence de preuve, intégration/publication non déduites automatiquement. Ne pas créer un deuxième validateur.
- Différer toute migration des douze `validee=false` à un contrôle des pièces et des usages de la console ; garder le snapshot antérieur, le journal et les scripts.
- Ne jamais automatiser une décision humaine ni une fusion en fonction d'une CI réussie.
- La Relieuse peut proposer la clôture administrative de #188 après contrôle final des différences, **sans l'effectuer à la place de Zout**.

## 8. Ce que nous devrions peut-être arrêter de faire

Comparer sans fin des copies identiques, promouvoir une déclaration de script au rang de décision humaine et entretenir plusieurs branches documentaires obsolètes. Le besoin central est une **reprise fiable, non une nouvelle messagerie**.

**Transmission à La Relieuse :** aucune réception attestée par le dépôt de ce rapport ; demander uniquement arbitrage sur le nettoyage des `false` historiques et sur le sort de #188 après revue. Aucune fusion, aucun service, aucun agent externe activé.


## 9. Passe supplémentaire : contrôle contradictoire non destructif

Le vérificateur C09 existant `coordination/agents/verifier_referentiel_c09.py` a reçu une fonction **`audit_etats_c03(data)`**, exclusivement en mémoire, qui restitue neuf dimensions sans migration du registre C03. Les tests correspondants ont été ajoutés à `test_verifier_referentiel_c09.py`, pas dans un nouveau système :

- `INTEGREE` et `PUBLIEE` restent **INCONNUES** en absence de preuves individuelles de merge ou de publication.
- `validee=false` apparaît comme `NEGATION_SANS_PREUVE`, non comme refus humain certifié ; cette annotation **n'écrase pas** la valeur historique.
- La présence d'un document propre à `C03-ORC-03` peut être `PIECE_CANDIDATE`, sans inférer une réception ou une approbation.
- Une `validee=true` insérée sans preuve de décision ne reçoit que `DECLARATION_A_CONTROLER` : ce contrôle n'authentifie pas Zout.
- L'audit n'ouvre pas GitHub, n'émet aucun courrier, ne dépense rien et ne déclenche aucun workflow IA.

Une première CI du code ajouté a trouvé une indentation invalide (`33e6c25`, tests C07/C11/C02 rouges). Correction déposée au commit `7995d279969d7c111dc2c0b6a49688e7274b2abb`. **Le HEAD définitif et les résultats des neuf vérifications suivantes doivent être contrôlés à nouveau après le dépôt de cette note.** Ne pas présenter les premiers échecs comme un succès ni généraliser les précédents succès au nouveau code.


## 10. Correction ciblée de préservation C10 (contribution concurrente)

Pendant la présente mission, un atelier a ajouté une note `C11-DEV-01` dans `coordination/messagerie/boites/developpeuse.md` sur #186. Le contrôle historique WORK-C02 et NAV01 a ensuite échoué à cause du changement de cette boîte : ce n'était pas une erreur de la comparaison #188, mais une violation réelle du contrat de préservation.

- **Pièce reçue :** boîte modifiée, blob `09c64dc476d01fca7e4e2b3b6575d03c2cebeed0`, avec 1 959 caractères de compte rendu C11 supplémentaires.
- **Conservation :** transfert intégral du compte rendu dans le journal déjà existant `coordination/c03/developpeuse/JOURNAL_SYNCHRONISATION.md`, avec sa provenance, commit `a58934b54de28cd1904f09406a6f6dcf6edfe0a7` et nouveau blob `2a1e4917a3714396fe2535a1d807133d9ca26365`.
- **Restauration :** boîte C10 exactement identique à `main`, blob `e070737aab1ddbb13d85a92967310f2914b4101d`, commit `3494d4e379f0ef2f74e3fe3516d93469118ae09c`.
- **Portée :** aucune nouvelle boîte, aucune suppression du rapport, aucune réception déduite du déplacement. Les affirmations techniques du rapport Développeuse restent **celles de l'atelier**, pas une nouvelle vérification indépendante par L'Orchestratrice.
- **Validation :** les contrôles du nouveau HEAD sont à consulter ; un test vert sur un autre HEAD ne suffit pas.

Cette correction évite de résoudre un conflit documentaire en effaçant le travail d'un autre atelier.
