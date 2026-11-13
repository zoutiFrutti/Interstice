# INTERSTICE — C03-TIS-03 / MATRICE_PREUVES
**La Tisseuse · 3 novembre 2026 · Preuves documentaires candidates ; aucune validation de partenariat.**
Références comparées : [PR #161 / relations](https://github.com/zoutiFrutti/Interstice/blob/work/c02-v2-reconciliation-20261103/coordination/v2/work-c02-01/data/relations.json) (19 relations, blob `412336741a879b7faf0e800edd0589b5e415bdab`), [registre 219 objets](https://github.com/zoutiFrutti/Interstice/blob/work/c02-v2-reconciliation-20261103/coordination/v2/work-c02-01/data/resources.json), [TIS C10](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-cycle10-tis001-20261101/coordination/transmissions/2026-11-01_TISSEUSE_C10_PARCOURS_SOURCES_MEDIATHEQUE_RELIEUSE.md), [contrat C03 #132](https://github.com/zoutiFrutti/Interstice/blob/feature/integration-c18-orchestratrice-suivi-20261102/coordination/c03/orchestratrice/02_CONTRAT_RAPPORTS.md).

## Méthode : deux axes indépendants
La PR #161 autorise les types de graphe `fait_historique_atteste`, `filiation_revendiquee`, `comparaison`, `lien_conceptuel`, `complement_documentaire`, `controverse`. Ils qualifient le **sens du lien documentaire**, pas son intensité institutionnelle. Les niveaux historiques TIS `R0` à `R3` qualifient **ce qu'on peut prouver de la relation entre acteurs**.

| Niveau TIS | Preuve minimale | Ce que cela ne prouve pas |
|---|---|---|
| **R0** : voisinage ou territoire commun | deux rattachements territoriaux datés et sourcés | échange, aide mutuelle, coopération, même lieu exact |
| **R1** : comparaison opérée par Interstice | deux dossiers réellement identifiés, motif et limite documentés | lien réel entre organisations, filiation historique |
| **R2** : acte commun de **tiers** | une pièce datée qui nomme les acteurs externes, l'action et son périmètre ; dire si l'origine est déclaration d'opérateur ou source indépendante | partenariat institutionnel permanent, efficacité mesurée, lien avec Interstice |
| **R3** : relation explicite avec Interstice | accord documenté, objet/contributions/durée/consentement et décision de Zout | simple référencement, proximité, courrier envoyé, visite ou avis favorable |

**Constat systématique : R3 = 0 pour tous les vingt objets.** La présence dans la PR #161 n'autorise ni contact, ni référencement, ni entraide effective, ni publication. Pour toutes les preuves, distinguer date d'événement, date de publication, consultation, mise à jour, territoire et version.

## Contrôle nominatif des relations de #161 qui touchent la Carte

| Relation | Type #161 / R0–R3 | Pièce externe et portée | État et correction |
|---|---|---|---|
| `WORK-REL-101` `tis-c8-testet` → `tis-c8-salvetat` | `comparaison` / **R1** | [IGEDD, rapport Tescou publié 23/05/2025, modifié 08/09/2025](https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html) ; [Terre de Liens, ferme Salvetat](https://fermes.terredeliens.org/midi-pyrenees/fermes-de-la-r%C3%A9gion-midi-pyr%C3%A9n%C3%A9es/la-salvetat/) | Comparaison eau/foncier licite ; **aucune relation réelle entre Testet et ferme** attestée. Remplacer référence unique `library:C05` par ces deux URLs + fiche C10 et dates |
| `WORK-REL-102` `tis-c8-salvetat` → `tis-c8-tdl` | `complement_documentaire` / **R2**, déclaration opérateur | [Terre de Liens, chantier publié 16/12/2025, actualisé 17/12/2025](https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/) : 24 personnes, 120 arbres ; organisation par **association Terre de Liens Midi-Pyrénées et CEN Occitanie**, appui technique Arbres et Paysages Tarnais | R2 valable **pour ce chantier daté** seulement, sous réserve d'attribution opérateur. Terre de Liens association ≠ Foncière propriétaire. Taux de survie inconnu ; pas de R3 |
| `WORK-REL-105` `TIS-001-001` → `TIS-001-006` | `comparaison` / **R1** | [Maison du Vélo, atelier participatif](https://www.maisonduvelotoulouse.com/atelier-participatif-reparation/), [L'R de Rien, présentation](https://lrderien.org/l-association/presentation-de-l-asso) ; carnet TIS 015 | Réparation vélo / textile : comparaison éditoriale uniquement. Camion-atelier de L'R de Rien arrêté en **2018** ; ne pas signaler de service itinérant actuel |
| `WORK-REL-106` `tis-c8-sctl` → `tis-c8-salvetat` | `comparaison` / **R1** | [SCTL / gestion foncière du Larzac](https://larzac.org/accueil/un-territoire-organise/gestion-fonciere/sctl/), [La Salvetat, Terre de Liens](https://fermes.terredeliens.org/midi-pyrenees/fermes-de-la-r%C3%A9gion-midi-pyr%C3%A9n%C3%A9es/la-salvetat/) | Deux dispositifs de foncier, **pas les mêmes personnes, pas partenariat**. Bail SCTL 1985/avenant 2013/échéance 2083 : pièce d'origine non relue ; ne pas l'énoncer comme validation juridique nouvelle |
| `WORK-REL-107` `tis-c8-vrac` → `EXP-002` | `comparaison` / **R1** | [VRAC Toulouse, adhésion et commande](https://toulouse.vrac-asso.org/adherer-commander/) ; [dossier EXP-002](source-reservee:DRV-022) et corrections 31/10/2026 | Achat groupé VRAC ≠ caisse/monnaie conventionnée MonA. Chiffres Montpellier et effets causaux non à reprendre sans date/méthode ; aucun programme commun démontré |

La PR #161 comporte **19 relations en tout**, dont **5 relations WORK-REL-10x** ci-dessus, non sept relations Carte. Le fonds C05 conserve **2 autres relations R2 externes**, non intégrées dans le graphe de #161 : elles ne deviennent pas automatiquement des objets ni identifiants publics.

## Deux relations externes à examiner, sans création de nœud
| Description | Niveau | Source | Réserve |
|---|---|---|---|
| La Salvetat / chantier avec CEN Occitanie | **R2** ponctuel | [bilan Terre de Liens, 16/12/2025](https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/) | Ne pas créer « CEN partenaire Interstice » ; nom d'organisme externe mentionnable, aucune fiche ni localisation créée |
| Partageons les Jardins / collectivités toulousaines | **R2 déclaré par l'opérateur**, à confirmer dans les documents de collectivité | [site Partageons les Jardins](https://www.partageonslesjardins.fr/) | Jardins accompagnés ≠ jardins ouverts ; ne pas déduire que chaque collectivité ou jardin constitue une nouvelle coopération avec Interstice |

## Matrice des faits spatiaux et temporels sensibles
| Objet | Source et date retenues | Ce qui est établi / déclaré | Ce qui demeure inconnu |
|---|---|---|---|
| `tis-c8-testet` | IGEDD, 23/05/2025, MAJ 08/09 | bassin et ancien projet de barrage arrêté ; rapport sur concertation et scénarios | état complet du processus au 03/11/2026, participants actuels, collectif actuel |
| `tis-c8-salvetat` | Terre de Liens, décembre 2025 et AG 2026 | plantation **effectuée** de 120 arbres selon organisateur ; renouvellement de baux évoqué en 2026 | survie des arbres, composition actuelle des exploitants, accueil de visites |
| `tis-c8-glanerie` | [actualité opérateur du 26/10/2026](https://www.la-glanerie.org/actualites) | nouveaux horaires **annoncés pour le 04/11/2026** à Blagnac | réalisation effective demain, exceptions, stock ou accès actuel |
| `TIS-001-002` | [Afev Albi, site officiel](https://afev.org/occitanie/albi), consulté 03/11 | antenne et mentorat présentés par opérateur | capacités, acceptation individuelle, information sur mineurs à ne pas collecter |
| `TIS-001-009` | blog ancien, dernier billet cité 09/2023 dans carnet TIS 015 | lieu/activité historiquement décrits | activité en 2026, horaires, équipe et admission |
| `TIS-001-011` | festival Sous les Toiles, édition 06–10/07/2026 | manifestation passée documentée | prochaine édition ; association et événement distincts |
| `tis-c8-3pa` | sites de 3PA, consultations TIS 01–02/11 | formations et lieu général déclarés | admission/places, **contradiction de surface 3 ha / 13 ha** non résolue |
| `tis-c8-tdl` | site antenne Terre de Liens et dossier Salvetat | réseau foncier, coopération externe datée | disponibilité de foncier ; mandat de représentation interorganisationnel |
| `tis-c8-sctl` | site SCTL, historique de baux | gouvernance foncière revendiquée par l'opérateur | validité juridique des termes sans originaux, disponibilité actuelle, droits individuels |
| `EXP-001` | dossier Freegan Pony, corrections C05 31/10 | épisode parisien documenté **2015–2019** | cantine présente aujourd'hui à la même adresse : **non établie** |
| `EXP-005` | dossier Barcelona en Comú / Decidim | exercice du pouvoir municipal **2015–2023** historiquement attribué, outil Decidim distinct | activité actuelle du mouvement, état du logiciel, limites des enquêtes |
| `CAT-001`, `CAT-006` | dossiers historiques PAR-002 | régions nommées, décret octobre 1936, conflits mai 1937 | application locale exacte, distinctions Aragon/Murcie et pièces primaires à recoller |
| `ZAP-C10-001` | dossier chronologique et textes du mouvement 2023–2026 | déclarations et datations à comparer | fonctionnement actuel vérifié indépendamment, localisation sûre de communautés |

## Contrôles négatifs et risques de faux positifs
1. `source_refs:["library:..."]` signifie **provenance de compilation**, pas source externe primaire. Des `external_url` existent déjà dans les 20 ressources #161, mais les cinq relations territoriales n'ont pas de lien direct sourcé : ajouter les URL et les dates **sans effacer** la référence C05.
2. `publication_authorized:false` et `coordinates:null` sont des invariants. Ne pas fabriquer d'épingle pour un territoire sans géométrie publique explicitement autorisée ; conserver une liste sans carte.
3. Aucun R2 entre Maison du Vélo / L'R de Rien ; ni entre SCTL / Salvetat ; ni entre VRAC / caisse Montpellier ; ni entre Testet / Salvetat. Aucune filiation juridique Commune → Espagne → Zapatisme → collectifs 2026.
4. Un rapport institutionnel, une annonce, un recrutement, un programme, une visite, une présence active, un résultat écologique ou un partenariat sont **des assertions différentes**.
5. Sauf contrôle explicite de chaque service, la temporalité de tous les autres opérateurs est **source TIS 30/10–02/11** et non contrôle terrain du 03/11. La navigation publique, les droits médias, l'accessibilité PMR et la carte réelle ne sont pas testés ici.

## Avis à solliciter
**C03-ANA-03** : valider séparation R0–R3 / six types et ajout de source_refs sans migration automatique. **C03-MED-03** : vérifier les éditions, sources, droits des images et des notices historiques. **C03-JUR-03** : arbitrer géolocalisation non exacte, publication, rectification/retrait et données personnelles. **La Lectrice** : réexaminer les preuves R2 et les dossiers contestés. Aucun avis présumé reçu.
