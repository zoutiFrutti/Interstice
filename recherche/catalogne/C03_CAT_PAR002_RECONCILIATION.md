# C03-CAT-02 — Réconciliation historique de PAR-002, PR #161
2026-11-03. **Candidat documentaire, aucune modification de la PR #161 ni de main.**
Cible examinée : `coordination/v2/work-c02-01/parcours/PAR-002.md` et `03_MATRICE_OBJECTIONS.md`, **patchs de PR #161 réellement lus**. Le contenu présent dans la PR n'est pas un dossier historique validé.

## 1. Versions exactes CAT retrouvées
| Fichier sur branche | Blob SHA vérifié | Fonction |
|---|---|---|
| `recherche/catalogne/CAT-001_CYCLE10_CHRONOLOGIE_CORRIGEE.md` sur `recherche/anarchiviste-catalogne-cycle10-20261101` | `6b42e85078c870ad898cdd2c873cfe44c8c86f9d` | chronologie et décret |
| `recherche/catalogne/CAT-006_CYCLE10_DESACCORDS_TRADUCTIONS.md` sur même branche | `34f53f300e6d584cdc85b75d3d7be5a259c8d6a2` | controverses mai 1937 |
| `recherche/catalogne/CAT_R1_CORRECTIONS_SOURCES_DOUBLONS.md` sur `recherche/anarchiviste-catalogne-r1-20261102` | `73030e31f83f3ae62762aac577c2c76bc4b0c179` | correctifs R1 |
| `recherche/catalogne/CAT-001_INTEGRATION_CANDIDATE.md` sur `recherche/anarchiviste-catalogne-integration-20261102` | `bf9d616b88a52c60575eea313649a9818679e4fb` | fiche CAT-001 candidate |
| `recherche/catalogne/CAT-006_INTEGRATION_CANDIDATE.md` sur même branche | `0a5b2e78f58bd3e3dbab684a6589eda6c99e39b5` | fiche CAT-006 candidate |
| `recherche/catalogne/C05_CAT_CONSOLIDATION_PARCOURS_ESPAGNOL.md` sur `recherche/anarchiviste-catalogne-c05-20261103` | `bf2e4f4c008bb38023c91f39845c742b78642731` | relations, territoires et parcours |

Ces fichiers sont sur **branches candidates**, pas sur `main` ; ne pas convertir une référence retrouvée en validation éditoriale.

## 2. Chronologie qualifiée
- **Juillet 1936** : résistance au soulèvement militaire à Barcelone et expériences de prises de contrôle, antérieures au décret ; synthèse historique, événements locaux non collationnés un par un.
- **24 octobre 1936** : décret de collectivisation des entreprises industrielles et commerciales **daté du 24**. Le texte normatif est distinct des initiatives déjà engagées.
- **28 octobre 1936** : publication au *Diari Oficial de la Generalitat de Catalunya* **n°302, p.373–376**. Source primaire : https://dogc.gencat.cat/web/.content/continguts/serveis/republica/1936/19360302.pdf . Le décret de militarisation des milices publié dans le même numéro est **distinct**. La reproduction https://ca.wikisource.org/wiki/Fitxer:Decret_de_col%C2%B7lectivitzaci%C3%B3_de_les_empreses_industrials_i_comercials.pdf ne remplace pas l'original.
- **Avril 1937** : selon Danny Evans (2022), réseaux militants et comités de défense ; **analyse secondaire** fondée notamment sur une référence IISG CNT 40 F, original non consulté.
- **3 mai 1937** : intervention policière à la Telefónica de Barcelone ; déclencheur immédiat d'affrontements, non explication unique de la crise.
- **3 et 4 mai 1937** : réunions CNT citées par Evans dans ses notes 38 et 35, IISG CNT (España) Archives **85 C** ; **références d'archives citées, originaux non lus**.
- **5–8 mai 1937** : affrontements et appels à l'arrêt ; responsabilités individuelles, victimes et décisions particulières non collationnées.
- **Après mai** : répression et transformations politiques, sans affirmer une disparition simultanée de toutes les collectivités.

## 3. Acteurs, territoires, types de preuves
| Entité | Catégorie | Ce qu'on peut dire | Ce qu'il faut éviter |
|---|---|---|---|
| CNT | confédération syndicale | rôle majeur dans les expériences ouvrières et la crise de mai | la confondre avec tous les comités et ses directions avec tous ses membres |
| FAI | fédération anarchiste | réseaux d'affinité et militants impliqués selon Evans | l'assimiler à la CNT ou à une chaîne unique de commandement |
| POUM | parti marxiste | acteur distinct de mai 1937 | « section trotskiste » comme catégorie descriptive neutre |
| PSUC | parti communiste catalan | acteur distinct dans les conflits politiques | attribuer chaque action de police au parti sans document |
| Generalitat | institutions catalanes | auteur du décret et acteur institutionnel de la crise | déduire de la norme son application universelle |
| Comités de défense | structures militantes | rôle discuté par les historiens | les identifier à la direction confédérale CNT |
| Catalogne | territoire institutionnel | cadre du décret industriel et commercial de 1936 | généraliser toutes les expériences de Barcelone à toute la région |
| Aragon | territoire distinct | collectivités notamment agraires et institutions propres | appliquer le décret catalan à l'Aragon |
| Murcie–Albacete | autre contexte territorial | comparaison possible, à documenter séparément | supposer les mêmes institutions ou résultats qu'en Catalogne |

## 4. Corrections exactes proposées à PAR-002
**Dans la section « Étapes proposées » :**
- Après `catalogne — Catalogne : pratiques et décret`, préciser dans la description : « expériences de collectivisation dès l'été 1936 ; décret daté du 24 octobre, publié le 28 octobre 1936, DOGC n°302 p.373–376 ; texte normatif ≠ application locale ».
- Après `mai — Mai 1937 et controverses`, préciser : « Barcelone, à partir du 3 mai 1937 ; Telefónica ; distinguer CNT, FAI, POUM, PSUC, Generalitat, comités de défense ; références IISG 85 C citées par Evans, originaux non lus ».
- Pour `comparaison`, remplacer l'implicite d'une filiation par : « comparaison analytique datée avec d'autres pratiques d'autogestion, sans continuité historique présumée ».

**Dans « Bifurcations et retours » :**
- Conserver les branches Aragon et Murcie–Albacete comme **réservées** tant que les dossiers territoriaux ne sont pas sourcés et intégrés ; ne pas créer de faux nœuds.
- Mentionner que la législation de la Generalitat ne s'applique pas automatiquement aux autres territoires.
- Renvoi à PAR-004 = **comparaison**, jamais « héritage direct » sans sources explicites.

**Dans « Relations typées » :**
- `CAT-001 → CAT-006` : conserver `complement_documentaire` avec preuve `CAT-001_INTEGRATION_CANDIDATE.md` blob `bf9d616b88a52c60575eea313649a9818679e4fb` et `CAT-006_INTEGRATION_CANDIDATE.md` blob `0a5b2e78f58bd3e3dbab684a6589eda6c99e39b5` ; statut `candidate`, non causalité.
- `CAT-001 → DOGC n°302` : `source_primaire_normative`, source DOGC 28/10/1936, sous réserve de conformité au schéma de relations.
- `CAT-006 → Evans 2022` : `analyse_secondaire`, DOI 10.1177/02656914221103464, non source primaire.
- Ne pas ajouter des relations ou des types non autorisés au JSON avant validation du schéma par l'Anarchitecte.

**Dans « Objections et corrections nécessaires » :**
- `WORK-ESP-01` : **résoluble pour l'accès documentaire**, six versions exactes identifiées ; **ne pas fermer la validation historique**.
- `WORK-ESP-02` : **partiellement traitée**, matrice organisations/territoires fournie ; pièces nominatives et régionales manquantes.
- `WORK-ESP-03` : **traitée pour dates, publication et portée normative**, mais **application locale non prouvée** ; conserver réserve d'interprétation.
- `WORK-ESP-04` : **partiellement traitée**, chronologie et controverses attribuées ; originaux CNT/FAI/POUM/IISG et gouvernementaux non collationnés.
- `WORK-AUT-03` : **ouverte** ; aucune filiation Commune/Espagne/Zapatisme/autogestion contemporaine prouvée par la simple proximité thématique.

## 5. Sources réellement consultées / non consultées
**Consultées au fil des cycles, avec trace dans les dossiers R1/C10 :** fac-similé DOGC et reproduction documentaire (localisation du décret) ; étude Evans 2022 (texte et notes rapportés dans les dossiers) ; étude Balcells 2017 (analyse secondaire) ; index de documents de mai 1937. **Dans cette passe C03**, lecture directe des fichiers GitHub CAT et des patchs de la PR #161 ; **pas de nouvelle collation externe du fac-similé**.
**Non consultés directement :** originaux IISG CNT 85 C, 40 F, 94 C ; originaux individuels de la presse CNT, FAI, POUM, PSUC ; procès-verbaux d'entreprises ; sources locales Aragon/Murcie–Albacete ; sources prouvant une filiation contemporaine. Ne pas présenter les cotes rapportées par Evans comme archives lues.

## 6. Objections et dépendances
- Pas de correction directement dans la PR #161 ; La Relieuse et La Lectrice doivent rapprocher cette note de leur matrice et des 35 objections C02-VAL-01.
- Contrôle des ressources réelles du registre `resources.json`, de `relations.json` et du schéma nécessaire avant toute modification structurée.
- P0 documentaire : traçabilité des versions et distinction décret/pratiques ; la documentation répond aux lacunes, pas aux validations finales.
- À poursuivre : sources primaires IISG, presse contradictoire, données locales et comparaison Wikipédia/Viquipèdia ; pas de doublon créé.
- Décision humaine : choix éditoriaux, intégration, fusion et publication.
