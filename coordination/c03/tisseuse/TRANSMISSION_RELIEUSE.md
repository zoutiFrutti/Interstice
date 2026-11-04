# INTERSTICE — C03-TIS-03 / TRANSMISSION_RELIEUSE
**Émettrice :** La Tisseuse · **Destinataire :** La Relieuse · **Priorité :** P1 · **Date :** 2026-11-03.  
**Mandat :** C03-TIS-03 « Territoires et Carte des communs ».  
**Dépôt :** `zoutiFrutti/Interstice`, branche `research/tisseuse-c03-territoires-20261103`, **[PR brouillon #173](https://github.com/zoutiFrutti/Interstice/pull/173)** vers `main`.

## Résultat précis
La réconciliation documentaire C05/TIS-001 ↔ PR #161 a été **effectuée** pour les entrées disponibles : 12 anciennes fiches + 9 lignes C10 − 1 recoupement Maison du Vélo = **20 objets documentaires uniques**, dont 19 organismes/ressources et le bassin du Tescou comme notice territoriale. Le registre WORK contient **219 objets** et **19 relations au total**. Cinq de ces 19 sont des relations territoriales directes `WORK-REL-101/102/105/106/107`, contrôlées ici au titre de R0–R3 ; deux relations R2 supplémentaires impliquant des organismes extérieurs sont signalées comme contexte, **sans création de nœud**.

Les sept Parcours V2 `PAR-001` à `PAR-007` ont été relus sur leur candidat de la PR #161. Les trois anciens itinéraires TIS (eau/foncier ; alimentation/mutualisation ; réparer/transmettre) sont réemployés comme **bifurcations** à proposer, pas comme des Parcours V2 supplémentaires.

### Cinq livrables, fichiers et preuves
Les SHA ci-dessous sont les **blobs GitHub réellement relus** sur la branche de travail, à la date indiquée ; ils n'attestent pas un contrôle éditorial externe.

| Fichier exact | Blob SHA lu | Taille | État |
|---|---|---:|---|
| [`INVENTAIRE_TERRITORIAL.md`](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-c03-territoires-20261103/coordination/c03/tisseuse/INVENTAIRE_TERRITORIAL.md) | `25884bb3504ec69e0ebff8934a608ffb34f7eca3` | 12440 caractères | Document candidat |
| [`MATRICE_PREUVES.md`](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-c03-territoires-20261103/coordination/c03/tisseuse/MATRICE_PREUVES.md) | `40a2e2832204c1c8d6a2a41f7929e27fc2d40e07` | 10836 caractères | Document candidat |
| [`BIFURCATIONS.md`](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-c03-territoires-20261103/coordination/c03/tisseuse/BIFURCATIONS.md) | `266a0cb941b7ff242fdb2dcab2a7aab51a2c7d17` | 9856 caractères | Document candidat |
| [`CORRECTIONS.md`](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-c03-territoires-20261103/coordination/c03/tisseuse/CORRECTIONS.md) | `3ea199ed1cb738cd413ccaafdaee24219cff1c3c` | 10702 caractères | Document candidat |
| [`TRANSMISSION_RELIEUSE.md`](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-c03-territoires-20261103/coordination/c03/tisseuse/TRANSMISSION_RELIEUSE.md) | auto-référence : lire le SHA du fichier sur GitHub | présent dépôt | Candidat transmis par PR |

## Travaux exécutés, indépendamment des accords
1. Consultation de l'[index C03 #132](https://github.com/zoutiFrutti/Interstice/blob/feature/integration-c18-orchestratrice-suivi-20261102/coordination/c03/INDEX_TRANSMISSIONS.md) et du [contrat de rapport](https://github.com/zoutiFrutti/Interstice/blob/feature/integration-c18-orchestratrice-suivi-20261102/coordination/c03/orchestratrice/02_CONTRAT_RAPPORTS.md), sans modification de leur branche.
2. Consultation de la [PR #161](https://github.com/zoutiFrutti/Interstice/pull/161), commit de lecture `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`. Blobs vérifiés : `resources.json` `66957e1b223f05642dcd69479ac48d0394797802`, `relations.json` `412336741a879b7faf0e800edd0589b5e415bdab`, `parcours.json` `be242baf409d0715bc870af68c15f75ae4ae770a`.
3. Contrôle des antériorités [TIS-001 / rapport 015](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/ateliers/rapports/tisseuse/015.md), du carnet C05 distinct retrouvé dans les fichiers de travail (non copié dans GitHub), de la [reprise R1](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-reprise-r1-20261102/coordination/reprise-r1/transmissions/R1_TIS_RECONCILIATION_ATLAS_TRANSISCOPE_20261102.md) et du [rapport C10](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-cycle10-tis001-20261101/coordination/transmissions/2026-11-01_TISSEUSE_C10_PARCOURS_SOURCES_MEDIATHEQUE_RELIEUSE.md).
4. Contrôles externes ciblés le **03/11/2026** : [IGEDD Tescou](https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html), [Terre de Liens chantier](https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/), [Afev Albi](https://afev.org/occitanie/albi) et [La Glanerie actualités](https://www.la-glanerie.org/actualites). **Pas de revérification live exhaustive des vingt opérateurs**, pas de visite sur place.
5. Rédaction de **seize propositions** ciblées, sans modification des données de #161.

## Principales corrections et objections non fermées
- **Provenance** : les cinq relations territoriales du registre ont pour source quasi unique `library:C05`. Proposer l'ajout des sources primaires et des dates à `source_refs` / `data/sources.json`, sans supprimer l'antériorité.
- **Statut d'activité** : `availability:inventaire_tisseuse_lu` veut dire *dossier consulté*, pas *lieu actif aujourd'hui*. Hors-Loge : dernier billet cité 2023 ; ancien camion de L'R de Rien arrêté 2018 ; édition Sous les Toiles 2026 passée ; La Glanerie : nouveaux horaires seulement **annoncés** pour le 04/11.
- **Territoire ≠ organisation** : `tis-c8-testet` désigne le bassin/rapport IGEDD, pas une association active. Région, bassin, plateau, siège et multi-sites doivent être représentables séparément.
- **R2 extérieur, R3 Interstice absent** : le chantier La Salvetat/Terre de Liens/CEN 2025 est une action datée décrite par un opérateur ; aucune relation avec Interstice. Le taux de survie des arbres n'est pas établi. Toutes les comparaisons Testet/Salvetat, SCTL/Salvetat, Maison du Vélo/L'R de Rien, VRAC/Montpellier restent **R1**.
- **Doublons** : `TIS-001-001` et `tis-c8-velo` ont un seul dossier et un alias déjà présent dans #161 ; ne pas renuméroter. FN-022/048 et FN-038/057 restent à la Médiathèque. Ne pas dupliquer les fiches EXP dans la Carte ni présenter Entraide comme annuaire de permanences.
- **Sept Parcours** : PAR-003 et PAR-004 gagneraient des bifurcations territoriales textuelles. PAR-001/002/006/007 exigent sources et périodes propres ; **PAR-005 demeure bloqué juridiquement et médicalement pour la pratique**, sans service localisé proposé.
- **P0 sécurité** : `coordinates:null`, `publication_authorized:false`, aucune géolocalisation sensible, aucun nom de bénéficiaire ou mineur, aucune carte d'accès militante. Ne pas activer de pont IA/Issues C12 comme effet de cette mission.

## Interfaces à transmettre sans réception fictive
| Mission destinataire | Besoin ciblé | Nature |
|---|---|---|
| `C03-ANA-03` L'Anarchitecte | valider les clés, un alias, vingt objets/une notice territoriale, R0–R3 en plus des types WORK, et les liens vers étapes ; contrôler la non-publication | **consultation/contrat**, pas autorisation d'intégrer |
| `C03-PEN-03` La Penseuse | critiquer les trois bifurcations TIS réinjectées dans PAR-003/004 ; pouvoir réel et fausses filiations | consultation |
| `C03-LEC-03` La Lectrice | sources de R2, annonces passées, contradictoires et faits réellement mesurés ; conserver les objections du registre | contrôle éditorial indépendant |
| `C03-JUR-03` La Juriste | droits de publication, localisation sensible, statut Entraide/PAR-005, correction/retrait | **prérequis** pour toute sortie publique |
| `C03-MED-03` Médiathèque | œuvres FN, droits par média, sources historiques, liens sans créer des doublons | consultation |
| `C03-CAT-03` / `C03-ZAP-03` / `C03-ARC-03` | périmètres historiques, peuples et territoires, dates et sources primaires ; pas de coordonnées fines | consultation documentaire |

**La transmission consiste en cette PR brouillon et ces cinq fichiers.** L'ouverture, la lecture ou l'approbation par une autre conversation ne sont pas prouvées ; **ne pas renseigner « reçue » ou « validée » à vrai** dans l'index de #132 sur cette seule base.

## États indépendants (contrat C18)
| Dimension | État daté | Justification |
|---|---|---|
| préparée | **vrai** | mission structurée et livrables rédigés |
| transmise / déposée | **vrai sur GitHub** | PR brouillon #173 et fichiers sous `coordination/c03/tisseuse/` ; aucun message cross-chat exécuté |
| reçue | **inconnu** | aucun accusé des autres ateliers récupéré |
| commencée | **vrai** | sources et registre effectivement consultés |
| livrée | **vrai documentaire** | cinq fichiers dont cette transmission en PR #173 |
| contrôlée | **partiel** | compteurs, IDs, liens de source ciblés, relectures ; **pas d'audit complet indépendant** |
| validée | **faux / en attente** | aucun visa de Zout, de La Lectrice, de La Juriste, de La Relieuse ni de L'Anarchitecte |

## Tests et limites
**Faits exécutés** : lecture des 20 entrées du JSON WORK ; test logique des 12+9−1 ; unicité de la liste de vingt par ID ; contrôle que ces vingt fiches appartiennent à la porte `carte` et ont `coordinates:null` ; lecture des 19 relations et sept Parcours ; relecture des quatre fichiers GitHub avant émission de la transmission.  
**Non exécutés** : tests d'application, CI, calcul de géocodage, Google Maps/OSM, tests navigateur, accessibilité réelle, sécurité backend/RLS, licences d'images, consultation des exploitants, actualisation complète de chaque lieu, contrôles sur place et preuve de réception par les ateliers.

## Pour décision de La Relieuse
1. Faire relire les **16 COR** par Anarchitecte, Lectrice, Juriste, Penseuse et Médiathèque selon le tableau, sans en forcer l'application.
2. Si retenues, préparer **une autre PR d'intégration dédiée** contre les **versions exactes** de la PR #161 ; préserver les 219 IDs et les 19 relations, et expliciter tout ajout.
3. Conserver les bifurcations géographiques **en texte complet**, y compris les objets sans géométrie, et ne débloquer publication qu'après décision de Zout.

**Aucune fusion, déploiement, correction du registre #161, prise de contact, dépôt d'Issue d'activation, publication ni approbation.**

---

## Complément C05-TIS-01 — Consolidation territoriale du 04/11/2026

**Nouvelle mission P2, exécutée en passe unique, sans modification du registre ni de la navigation.** Les HEAD de PR #161 et #173 (avant cette passe) ont été contrôlés et n'avaient pas évolué. [Complément de corrections et incertitudes](./CORRECTIONS.md#c05-tis-01--passe-unique-de-consolidation-du-04112026).

**Résultat vérifié par lecture des quatre fichiers JSON de #161 :** 219 ressources, 20 objets TIS, 7 Parcours, 19 relations dont 5 territoriales ; aucun ID dupliqué, aucune référence de relation/étape absente, aucun `coordinates` non nul parmi les 20, aucune autorisation de publication de ces vingt, et un seul alias `tis-c8-velo` lié à `TIS-001-001`. Tous les vingt liens externes sont formellement HTTPS ; **aucun test HTTP exhaustif** des vingt destinations.

**Corrections indispensables ordonnées** :
1. **P1 provenance** : pour les cinq relations territoriales `WORK-REL-101/102/105/106/107`, compléter les `SourceRef` individuelles avec URLs de pièces primaires, date et origine sans perdre la référence C05. **R2** uniquement pour coopération extérieure datée Salvetat/Terre de Liens/CEN, 120 arbres plantés selon l'organisateur, effet écologique indépendamment mesuré inconnu ; **R3=0**.
2. **P1 temporalité** : `availability:inventaire_tisseuse_lu` représente un inventaire relu et **non l'activité actuelle**. Conserver les limites historiques L'R de Rien (camion arrêté 2018), Hors-Loge (dernière trace citée 2023), Sous les Toiles (édition juillet 2026 passée) et La Glanerie (nouveaux horaires Blagnac annoncés à compter du 04/11/2026).
3. **P0 protection** : ne pas géocoder automatiquement le Testet, les fermes, les collectifs, les territoires zapatistes ou les dossiers Entraide ; aucune fiche de lieu d'aide active ni de permanence déduite, PAR-005 toujours bloqué.
4. **P1 navigation** : préserver les sept Parcours V2 et les trois circuits TIS comme bifurcations textuelles. Maintenir quatre portes principales et aucune duplication Carte/Encyclopédie/Médiathèque/Entraide.

**Incertitudes :** conditions d'accueil et horaires réels non vérifiés sur le terrain ; surfaces 3PA contradictoires ; termes originaux du bail SCTL non revus ; droits, accessibilité et disponibilité des vingt lieux non certifiés ; source d'opérateur ≠ évaluation indépendante. Aucun avis/accord d'autre atelier ou de Zout reçu pendant ce contrôle.

**Aucun questionnaire requis** : la mission présente un contrôle documentaire et des corrections sans intégration, publicité, relation extérieure ni choix territorial irréversible. Les décisions humaines restent nécessaires si une version publique, une règle de localisation, des contacts ou une politique d'annuaire sont ultérieurement envisagés.

**État C05** : contrôles documentaires réalisés ; corrections proposées dans PR brouillon #173 ; intégration dans PR #161 **non réalisée**, publication **interdite**, fusion **non réalisée**. Ceci n'est ni une demande de validation implicite ni un accusé de lecture d'autres conversations.
