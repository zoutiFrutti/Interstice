# INTERSTICE — C03-TIS-03 / CORRECTIONS
**La Tisseuse · 3 novembre 2026 · Propositions au registre WORK, pas modification de la PR #161.**
Base de comparaison : PR [#161](https://github.com/zoutiFrutti/Interstice/pull/161) (HEAD documentaire `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`), `coordination/v2/work-c02-01/data/{resources,relations,parcours,sources}.json`, `02_MATRICE_PARCOURS.md`, sept fichiers `parcours/PAR-00x.md`. Voir [inventaire](./INVENTAIRE_TERRITORIAL.md), [preuves](./MATRICE_PREUVES.md) et [bifurcations](./BIFURCATIONS.md).

**Aucune écriture dans ces fichiers de #161, dans `main`, ni dans les cartes publiques.** Les numéros ci-dessous sont des propositions de corrections **à arbitrer**, non des identifiants de ressources supplémentaires.

## Corrections à instruire par priorité

| ID | Cible et état contrôlé | Correction candidate, non appliquée | Preuve, difficulté, responsable |
|---|---|---|---|
| **C03-TIS-COR-01** P1 | `data/relations.json`, cinq `WORK-REL-101/102/105/106/107`; `source_refs` pointe seulement `library:INTERSTICE_C05_TIS_01_inventaire_relations_candidat.json` | **Ajouter** URLs d'opérateurs/institution et dates directement dans `source_refs` et `data/sources.json`, sans supprimer le lien C05. Ne pas présenter une source de synthèse comme pièce primaire | IGEDD 2025, Terre de Liens 2025, Maison du Vélo, L'R de Rien, SCTL, VRAC, dossier EXP-002 ; **Anarchitecte + Médiathèque** |
| **C03-TIS-COR-02** P1 | `WORK-REL-102`, `proof:declaration_operateur_rapportee`, `legacy_level:R2` | Conserver R2 **uniquement pour chantier de décembre 2025** ; décrire explicitement « organisé par association Terre de Liens Midi-Pyrénées et CEN Occitanie », appui Arbres et Paysages Tarnais. Ne pas extrapoler partenariat durable, résultat écologique mesuré ou R3 | [Article de l'organisateur 16/12/2025](https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/) ; URL identique à la MATRICE_PREUVES ; **Lectrice + Tisseuse** |
| **C03-TIS-COR-03** P1 | `data/resources.json`, vingt notices Carte, `availability:inventaire_tisseuse_lu` | Renommer ou scinder en **preuve de lecture documentaire** versus **activité/accueil actuels**, avec `claim_at`, `checked_at`, `activity_status` (historique / déclaré / inconnu / confirmé daté) ; ne jamais convertir « fichier lu » en « ouvert aujourd'hui » | Carnet TIS 015 et C10 ; **Anarchitecte + Juriste**, aucun changement de schéma avant arbitrage |
| **C03-TIS-COR-04** P1 | `tis-c8-testet` classé `notice_territoriale` | Conserver ce type distinct ; séparer bassin Tescou, secteur Testet, dossier de projet d'eau et acteurs contestataires ; **aucun collectif/siège actuel déduit**. S'il existe une future fiche d'organisation, elle exigera une source et un ID séparés validés | [IGEDD 23/05/2025](https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html) ; **Tisseuse + Lectrice** |
| **C03-TIS-COR-05** P1 | `TIS-001-001` (Maison du Vélo), `aliases:[tis-c8-velo]` | **Ne rien dédoubler** : vingt objets distincts, un alias historique. Tester que la navigation vers `tis-c8-velo` résout le même dossier sans casser les anciens renvois ; l'alias n'est pas une seconde ressource | Carnet 015 / TIS C10, source officielle Maison du Vélo ; **Anarchitecte** |
| **C03-TIS-COR-06** P1 | `TIS-001-006`, `TIS-001-009`, `TIS-001-010`, `TIS-001-011`, `TIS-001-005/007` | Marquer épisodes **clos** et actualité **non vérifiée** : camion L'R de Rien arrêté en 2018 ; Hors-Loge documenté jusqu'en 2023 dans l'ancien relevé ; Sous les Toiles édition juillet 2026 passée ; autres notices communales sans date de service actuelle | Origines détaillées dans [INVENTAIRE_TERRITORIAL](./INVENTAIRE_TERRITORIAL.md) et carnet TIS 015 ; **Tisseuse + Lectrice** |
| **C03-TIS-COR-07** P1 | `tis-c8-glanerie`, pages opérateur discordantes | Consigner séparément **annonce du 26/10/2026** et **entrée en vigueur prévue le 04/11/2026** ; ne pas afficher « ouvert » sans contrôle à la date d'utilisation, ni confondre association, boutiques et stocks | [La Glanerie, actualités](https://www.la-glanerie.org/actualites) ; **Lectrice + Tisseuse** |
| **C03-TIS-COR-08** P1 | `tis-c8-salvetat`, `tis-c8-tdl`, `tis-c8-sctl`, `tis-c8-3pa` | Distinguer **entité, site, foncier, bail, réseau** : association Terre de Liens régionale ≠ Foncière ; ferme Salvetat ≠ individu/visiteur ; SCTL ≠ tout le Larzac ; 3PA ≠ ensemble des activités de Bordanova. Conserver contradiction 3 ha/13 ha comme non résolue | Fiches officielles, AG Terre de Liens 2026 ; bail SCTL non collationné ; **Tisseuse + Anarchitecte** |
| **C03-TIS-COR-09** P1 | `data/parcours.json` PAR-003 : étape `territoires` = `tis-c8-sctl` + `FN-024` ; relations TIS déjà liées à PAR-003 | Proposer **trois liens secondaires** vers Testet/Salvetat/Larzac, VRAC/jardins/Glanerie, Maison du Vélo/3PA/jardins. Préserver `PAR-003` comme Parcours unique et l'ordre de lecture indépendant ; chaque renvoi vers un ID existant avec preuve R1/R2 | Ancien TIS C10, [BIFURCATIONS](./BIFURCATIONS.md) ; **Penseuse + Anarchitecte** |
| **C03-TIS-COR-10** P1 | `data/parcours.json` PAR-004 ; quatre expériences listées et nombreuses relations TIS hors des étapes | Ajouter des renvois facultatifs vers SCTL/Salvetat/VRAC, **sans** assimiler ces initiatives à une forme aboutie d'autogestion ; les dossiers `EXP-004/005` restent en `encyclopedie` | [BIFURCATIONS](./BIFURCATIONS.md), WORK-AUT-03 ; **Penseuse + Lectrice** |
| **C03-TIS-COR-11** P1 | `EXP-001/002/004/005` et `CAT-001/006` en Encyclopédie | Ajouter **périodes et types de contexte** aux métadonnées de lecture : Freegan Pony expérience parisienne passée 2015–2019 ; Montpellier dispositif actuel à méthodologie sous réserve ; Mondragón droits variables selon statut ; Barcelone mandat municipal 2015–2023 et logiciel distinct ; Catalogne/Aragon/Murcie-Albacete non assimilés | Dossiers EXP C05, WORK-ESP-02 et CAT-03 ; **Lectrice + archivistes / Biographe** |
| **C03-TIS-COR-12** P0 pour sortie publique | `DROIT-001/002`, porte `entraide`, PAR-005 bloqué | **Refuser** toute projection automatique de « services proches », adresse de permanence, conseils pratiques ou coordonnées de manifestants. `territory_scope` de droit ≠ lieu d'aide ; aucune implication d'un R2/R3 via une simple notice | PR #161, avis Juriste défavorable pour PAR-005, `WORK-TR-04` ; **Juriste + Relieuse** |
| **C03-TIS-COR-13** P1 | Territoires administratifs dans les objets TIS ; études PAR-002/PAR-007 | Autoriser **plusieurs rattachements** : aire administrative, bassin, territoire historique, autonomie revendiquée et zone multi-communale. Chiapas uniquement région générale ; aucune localisation de communauté zapatiste ni centre d'une commune simulant GPS de site | WORK-ZAP-03, C03-ZAP-03 et contrat `location` Anarchitecte ; **Anarchitecte + Juriste + Tisseuse** |
| **C03-TIS-COR-14** P1 | `data/relations.json`, relations `WORK-REL-101/105/106/107` | Garder exactement **R1 comparaison**, jamais promouvoir R2 car deux associations se trouvent dans le Tarn ou parlent de foncier. Le niveau R0 voisinage est informatif, sans arête de partenariat | [MATRICE_PREUVES](./MATRICE_PREUVES.md), anciens rapports TIS ; **Lectrice + Penseuse** |
| **C03-TIS-COR-15** P1 | Carte, Méd., Encyclopédie, Entraide | Conserver la **porte principale unique** de #161 : les 20 objets TIS restent `carte`; `FN-024` reste `mediatheque`; `DROIT-001/002` restent `entraide`; fiches EXP/biographies restent `encyclopedie`. Les renvois sont des relations, **pas des copies** de dossiers ni de pages | Matrice des 219, couverture 24/44/71, contrat C03 ; **Anarchitecte + Médiathèque** |
| **C03-TIS-COR-16** P0 de confidentialité | Toutes cartes/exports possibles | Conserver `coordinates:null` pour les vingt objets du registre et `publication_authorized:false`. Pas de longitude, rue, centroïde inféré, habitat, bénéficiaire, mineur, militant ou localisation de ferme destinée à être occultée | Contrat Anarchitecte 013, note Juriste cartographie, [index C03 #132](https://github.com/zoutiFrutti/Interstice/pull/132) ; **Juriste + Développeuse** |

## Correspondance de champs à proposer, pas migration
```text
Resource.id / Resource.primary_door : inchangés
Resource.aliases : conserver TIS-001-001 ⇄ tis-c8-velo
Resource.external_url : provenance publique déjà présente, ne pas confondre licence
Resource.availability : actuellement « inventaire_tisseuse_lu » (lecture ≠ activité)
Candidat : documentation_checked_at / activity_claimed_at / activity_review_state
Resource.territory : un ou plusieurs scopes déclarés (pas lieu précis)
Relation.type : six catégories WORK existantes
Relation.legacy_level : R0..R3 (R3 toujours 0)
Relation.source_refs : ajouter les références primaires, garder les compilations
Relation.publication_authorized : false
Resource.coordinates : null
```
Le choix d'implémentation de nouveaux champs appartient à **C03-ANA-03** et à la Développeuse, après arbitrage. Rien ici n'autorise la création d'une base, d'une table, d'une épingle, d'un `relatedIds` public, ou l'activation de la navigation V2.

## Doublons observés et non-observés
- **Observé et déjà résolu dans les IDs** : Maison du Vélo `tis-c8-velo` = alias de `TIS-001-001`. Ne pas faire deux lieux sur la carte.
- **Non-doublons** : Terre de Liens régionale / Foncière / ferme Salvetat ; SCTL / territoire Larzac ; dispositif Montpellier / réseau VRAC ; outil Decidim / mouvement Barcelona en Comú ; association Sous les Toiles / une édition de son festival.
- **Entraide** : les dossiers `DROIT-001/002` ne sont ni des contacts d'urgence ni des variantes d'associations locales. Aucun doublon nominatif dans les vingt TIS constaté en comparant les clés/titres ; contrôle éditorial et évolution juridique restent à faire.
- **FN** : les éventuels doublons `FN-022/048` et `FN-038/057` sont hors périmètre de ce lot ; ne pas les fermer, supprimer, ni renuméroter.

## Conditions de sortie
**Terminé documentaire :** comparaison 20 TIS/7 Parcours/5 relations territoriales de #161, trois bifurcations TIS conservées, demandes de correction par cible et source. **À revoir** : activité actuelle des lieux avant usage de service ; droits, fiches historiques et limites de preuve R2. **Bloqué pour publication** : visa Zout, PAR-005, localisations, sécurité et QA de rendu. Les 35 objections C02 et 30 réserves WORK ne sont pas déclarées résolues.

**Aucune correction n'est appliquée au registre de PR #161 dans cette mission.** Les visas et la future intégration sont des décisions de La Relieuse, des ateliers responsables et de Zout.

---

## C05-TIS-01 — Passe unique de consolidation du 04/11/2026

**Objet :** contrôle postérieur à la PR #173, sur les HEAD réellement relevés le 04/11/2026 : PR #161 `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`, PR #173 avant consolidation `1dd2694fed35a973bebbde4a78c1ed5689809f8b`. Aucun de ces objets n'est publié, fusionné ou validé.

### Vérifications structurées réellement exécutées
Lecture JSON de `resources.json`, `relations.json`, `parcours.json` et `sources.json` sur #161, avec contrôles de clés en mémoire (aucune CI ou suite applicative exécutée).
- **219** ressources ; **20** objets TIS (`19 kind=initiative`, `1 kind=notice_territoriale`) ; **7** Parcours ; **19** relations globales, **5** touchant TIS.
- **0** identifiant de ressource dupliqué, **0** cible de relation absente, **0** référence d'étape absente, **0** relation référencée par un Parcours mais inconnue du registre.
- **1** alias déjà présent : `TIS-001-001.aliases=["tis-c8-velo"]` ; il ne produit pas une seconde ressource et ne résout pas l'état actuel de l'accueil.
- **20/20** ressources TIS avec `coordinates:null` et `validation.publication:"non_autorisee"` ; **20/20** avec `external_url` au format HTTPS. Format HTTPS vérifié, **pas code HTTP de chaque URL ni conditions d'ouverture**.
- **5/5** relations TIS référencent une pièce C05 existante dans `sources.json`, mais **0/5** comportent une référence directe à une URL externe de preuve dans leurs propres `source_refs` : défaut **de granularité de la provenance**, pas rupture des identifiants. Cette nuance remplace toute affirmation de « lien cassé ».

### Corrections indispensables, prêtes à intégrer **après validation** dans #161

**P1-A, relation et provenance** (reprend COR-01/02/14) : conserver `WORK-REL-101/102/105/106/107` et leurs types ; inscrire dans `source_refs` des identifiants `SourceRef` **ajoutés à `data/sources.json`** avec URL exacte, éditeur, date de publication connue et date de contrôle. Ne pas insérer une URL brute qui violerait les conventions de schéma ; suivre les clés réellement retenues par L'Anarchitecte. En particulier `WORK-REL-102` doit dire : *chantier de plantation de décembre 2025 organisé par Terre de Liens Midi-Pyrénées et CEN Occitanie, avec appui technique Arbres et Paysages Tarnais, selon la déclaration de Terre de Liens publiée le 16/12/2025 (mise à jour 17/12)*. R2 limité à cet événement, survie des arbres inconnue ; `cooperation_interstice:false`.

**P1-B, sémantique d'activité** (COR-03/06/07) : ne plus utiliser `availability:"inventaire_tisseuse_lu"` comme seul indicateur auprès de l'interface. Valeur = **contrôle documentaire**, distinct de l'accueil et des horaires. Identifier explicitement :
- `tis-c8-testet` : bassin et rapport IGEDD, aucun « collectif actif » ou visite déduit ;
- `TIS-001-006` : ancien camion arrêté en 2018 ; la boutique 2026 est un autre service déclaré ;
- `TIS-001-009` : dernière trace du carnet 2023, activité en 2026 non établie ;
- `TIS-001-011` : festival tenu en juillet 2026, édition passée ; association et programmation future distinctes ;
- `tis-c8-glanerie` : [annonce opérateur publiée le 26/10](https://www.la-glanerie.org/actualites), nouveaux horaires Blagnac **prévus à compter du 04/11/2026** ; publication du texte et entrée en vigueur ne valent pas visite sur place le même jour.
- `TIS-001-002` : [page Afev Albi](https://afev.org/occitanie/albi) accessible au contrôle ; elle décrit une antenne, des horaires de bureau et des actions éducatives, **pas capacité de prise en charge ni accord avec Interstice**.

**P0-C, anti-faux-partenariat / confidentialité** (COR-04/05/12/15/16) : conserver **R3=0**, `publication_authorized:false`, `coordinates:null`. Les 20 objets restent documentaires, **non 20 lieux d'accueil actifs**. Pas d'auto-géocodage à partir d'une adresse publique ; aucune adresse privée ou lieu de rassemblement exposés. `PAR-005` conserve ses blocages, aucune permanence ou service juridico-médical attribué à une association TIS. Alias `tis-c8-velo` préservé, sans seconde carte ni suppression d'ID. Aucun contenu réel n'est injecté dans les données fictives de PR #41.

**P1-D, navigation** (COR-09/10/11/13) : les sept Parcours restent exactement `PAR-001..007`. Les trois anciens circuits TIS sont des **renvois de lecture optionnels** pour PAR-003 et PAR-004, en liste textuelle avec période et statut, pas des itinéraires garantis ni de nouveaux Parcours. Les dossiers `EXP` gardent la porte Encyclopédie, `DROIT` gardent Entraide, `FN` Médiathèque, TIS Carte. Les territoires de Catalogne, Aragon, Murcie-Albacete et Chiapas restent situés et différenciés, sans localisation sensible.

### Incertitudes maintenues après le contrôle
- Statut d'accueil actuel, accessibilité PMR, modalités d'adhésion, horaires exceptionnels, finances/activité réelles de la plupart des vingt notices : **non vérifiés sur place**.
- Écologie : plantation attestée par son organisateur ≠ taux de survie indépendant. SCTL : actes de baux originaux non revus. 3PA : divergence documentaire sur la superficie de Bordanova non résolue.
- Patrimoine historique : Catalogne / Aragon / Murcie-Albacete, historiques de Paris et communautés zapatistes nécessitent contrôle des sources de leurs ateliers ; aucune filiation européenne/chiapanèque inférée.
- `SourceRef` aujourd'hui = provenance compilation C05, pas preuve détaillée par relation ; **ne pas dire que la source n'existe pas**.
- Aucun contrôle réseau des vingt liens externes, test automatisé applicatif, test navigateur, observation terrain ni réception de revue des autres ateliers.

### Arbitrages
**Aucun arbitrage humain territorial irréversible n'est nécessaire pour cette passe documentaire :** la conservation des identifiants, les relations R1/R2 et le refus de R3 découlent des preuves déjà présentes ; les corrections sont proposées et non publiées. Une décision de Zout sera nécessaire **au moment d'autoriser une intégration publique, une règle de géolocalisation, un contact ou une nouvelle politique d'annuaire**, mais aucune de ces décisions n'est sollicitée par C05-TIS-01.
