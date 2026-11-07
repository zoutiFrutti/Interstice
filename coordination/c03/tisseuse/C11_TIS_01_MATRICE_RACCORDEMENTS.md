# INTERSTICE — C11-TIS-01 · Matrice territoriale et raccordements candidats

**Atelier :** La Tisseuse · **Priorité :** P1 · **Date de contrôle :** 7 novembre 2026 · **Statut :** document de travail, aucune publication autorisée.

**Sources vérifiées :**
- [PR #173, carnet C03–C06](https://github.com/zoutiFrutti/Interstice/pull/173), HEAD initial du contrôle `a3a0f07c590389b165c78a80552929de8c4f4818` ;
- [PR #161, registre WORK](https://github.com/zoutiFrutti/Interstice/pull/161), HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`, `data/resources.json`, `data/relations.json`, `data/parcours.json` ;
- [PR #41, deux cartes, code fictif](https://github.com/zoutiFrutti/Interstice/pull/41), `cartes-core.mjs`, `cartes-data.mjs`, `cartes-tis-documentation.mjs`, `initiatives-core.mjs` ;
- [PR #186, pilote Faire Ensemble](https://github.com/zoutiFrutti/Interstice/pull/186), `coordination/work/c07/faire-ensemble-pilot/README.md` et `submit-proposal.ts` ;
- `main/atlas.html`, `main/parcours.html`, contrat [Anarchitecte 013](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/ANARCHITECTE_CONTRAT_CARTES_013_2026-10-30.md), [NAV-02-ANA #177](https://github.com/zoutiFrutti/Interstice/pull/177) et [pont de 29 étapes #178](https://github.com/zoutiFrutti/Interstice/pull/178).

## Les deux cartes et Faire Ensemble : trois statuts différents

**Carte des communs / Atlas.** `main/atlas.html` déclare explicitement que les fiches de lieux, les relations R0–R3 et la carte géolocalisée ne sont pas intégrées. Les vingt objets TIS relèvent du registre *candidat* #161 ; chacun garde `primary_door:"carte"`, `coordinates:null`, `validation.publication:"non_autorisee"`. L'Atlas ne prouve ni l'existence d'une épingle ni une fiche publique.

**Carte des possibles.** PR #41 possède un prototype `cartes-core.mjs` / `cartes-data.mjs`. Les données passent seulement si `isDemo===true` et `source.type==="simulation"` ; les ancres sont des centres de communes **pour la simulation**, jamais des adresses d'initiatives. `cartes-tis-documentation.mjs` contient trois cas fictifs : `repere`, `referencement_accepte`, `cooperation_convenue`. **Ces états ne sont pas R0–R3** et ne valent aucun consentement réel. Ne pas fusionner, injecter ni publier les vingt TIS dans ces fixtures.

**Faire Ensemble.** PR #186 conserve un **pilote de propositions candidat, désactivé par défaut** `FAIRE_ENSEMBLE_PROPOSALS_ENABLED`, avec besoin/offre/localité textuelle, modération `pending`, sans annuaire public ni connexion à des structures réelles. La référence à une initiative est une **suggestion documentaire interne**, pas la déclaration d'une ressource disponible et **pas l'autorisation d'envoyer des messages**. Ne pas lier automatiquement une nouvelle proposition au nom d'une association.

## Tableau exhaustif · 20 notices territoriales

Le niveau indiqué dans **relations** correspond à une relation **présente ou directement déduite comme comparaison de sources**, pas au niveau général d'activité du lieu. R0 = co-présence territoriale sans coopération ; R1 = comparaison éditoriale ; R2 = action extérieure datée documentée ; R3 = accord explicite avec Interstice, **aucun**. Les pistes de Faire Ensemble sont **thématiques et internes**, jamais de véritables offres de services.

| ID | Initiative / objet | Territoire public, sans géométrie | État documentaire | Relations et preuve R0–R3 | Faire Ensemble : rapprochement thématique candidat | Encyclopédie / Parcours | Lacune, interdiction ou risque |
|---|---|---|---|---|---|---|---|
| `TIS-001-001` (alias : `tis-c8-velo`) | La Maison du Vélo | Haute-Garonne · Toulouse | Atelier vélo déclaré, horaires contradictoires | R1 comparatif avec L’R de Rien (WORK-REL-105) | Réparation / autonomie matérielle | PAR-003/004 | Atelier/places/outils disponibles : non attestés |
| `TIS-001-002` | Afev Albi | Tarn · Albi | Antenne Afev documentée ; disponibilité non attestée | R0 Albi, aucun partenariat TIS | Mentorat et éducation, lecture thématique | PAR-004/006 (comparaison candidate) | Mineurs, accompagnement individuel et capacités : données à ne pas exposer |
| `TIS-001-003` | MJC Rabastens-Couffouleux | Tarn · Rabastens / Couffouleux | MJC, saison 2026–27 mentionnée | R0 Rabastens-Couffouleux | Ateliers / culture uniquement comme piste éditoriale | PAR-004/006 (candidate) | Programme et accès actuels à vérifier |
| `TIS-001-004` | MJC de Gaillac | Tarn · Gaillac | MJC municipale documentée ; agenda ponctuel | R0 Gaillac | Éducation, ateliers, création | PAR-004/006 (candidate) | Programme régulier à revoir |
| `TIS-001-005` | Le Pigeonnier | Tarn-et-Garonne · Laguépie | Café associatif décrit par une notice non datée | R0 Laguépie | Lieu collectif seulement comme thème possible | PAR-004 (candidate) | Ouverture actuelle non démontrée |
| `TIS-001-006` | L’R de Rien | Tarn-et-Garonne · Laguépie | Boutique textile déclarée 2026 ; camion clos en 2018 | R1 réparation vélo/textile (WORK-REL-105) | Réemploi et savoir-faire, sans offre ni stock présumé | PAR-003/004 | Pas de retour du camion itinérant |
| `TIS-001-007` | P’tite Lumière et Cie | Tarn-et-Garonne · Laguépie | Association culturelle, notice non datée | R0 Laguépie | Culture et ateliers, lecture uniquement | PAR-006 (candidate) | Activité 2026 non vérifiée |
| `TIS-001-008` | Lenga Viva | Tarn-et-Garonne · Laguépie | Événement occitan 2026 documenté | R0 Laguépie | Langues, culture et transmission | PAR-006 (candidate) | Édition future non annoncée ici |
| `TIS-001-009` | Hors-Loge | Aveyron · Najac | Lieu décrit, dernier compte rendu retrouvé 2023 | R0 Najac ; aucune relation externe établie | Histoire des lieux autogérés, uniquement historique/critique | PAR-004 (candidate) | Ouverture 2026 inconnue ; pas d’invitation |
| `TIS-001-010` | L’Atelier de Najac | Aveyron · Najac | Association/friperie citée par mairie | R0 Najac | Réemploi et ateliers, lecture conditionnelle | PAR-003/004 (candidate) | Statut actuel et service inconnus |
| `TIS-001-011` | Sous les Toiles | Aveyron · Najac | Festival juillet 2026 passé | R0 Najac | Culture, programmation et organisation d'événements | PAR-006 (candidate) | Festival ≠ salle ouverte à l'année |
| `TIS-001-012` | Les Hauts Parleurs | Aveyron · Villefranche-de-Rouergue | Café associatif, annonces 2026 et travaux | R0 Villefranche-de-Rouergue | Culture et rencontres, aucune permanence présumée | PAR-004/006 (candidate) | Horaires, repas et travaux à revérifier |
| `tis-c8-testet` | Testet / bassin du Tescou | Tarn et au-delà du seul lieu · Bassin du Tescou / secteur du Testet | Territoire bassin Tescou et rapport IGEDD 2025 | R1 comparaison eau/foncier (WORK-REL-101) | Aucun raccordement à l'entraide : notice de territoire | PAR-003 | Ce n'est ni une organisation ni un service |
| `tis-c8-salvetat` | La Salvetat / Les Chlorophy’liens | Tarn · Monestiés | Ferme collective déclarée, plantation 2025 | R1 Testet/SCTL (101/106) ; R2 acte daté Terre de Liens (102) | Foncier / agroécologie comme lecture, pas accueil garanti | PAR-003/004 | Pas d'offre de terrain, d'hébergement ou de bénévolat attestée |
| `tis-c8-vrac` | VRAC Toulouse | Haute-Garonne · Toulouse Métropole (réseau de quartiers) | Groupements d'achats documentés ; conditions d'accès | R1 comparaison caisse Montpellier (WORK-REL-107) | Mutualisation alimentaire, pas commande depuis Interstice | PAR-003/004 | Retraits, places, prix et éligibilité non garantis |
| `tis-c8-jardins` | Partageons les Jardins | Haute-Garonne · Département (dont Toulouse) | Réseau de jardins et accompagnement déclaré | R0 territorial ; coopération publique à qualifier séparément | Jardins comme sujets documentaires, pas jardins tous ouverts | PAR-003/004 | Ne pas présenter de parcelles disponibles |
| `tis-c8-glanerie` | La Glanerie | Haute-Garonne · Toulouse et Blagnac | Recyclerie multi-sites, horaires affichés par opérateur | R0 territoire toulousain | Réemploi / ressources comme thème sans stock attesté | PAR-003/004 | Pas de réservation ni de disponibilité présumée |
| `tis-c8-3pa` | 3PA / Bordanova | Haute-Garonne · Lahage | Formation/éducation annoncées à Lahage | R0 Haute-Garonne, aucune relation R2/R3 TIS | Ateliers / écologie, uniquement catégorie potentielle | PAR-003/004 | Places, critères et superficie 3 ha/13 ha incertains |
| `tis-c8-tdl` | Terre de Liens Midi-Pyrénées | Territoire de l’ancienne région Midi-Pyrénées · Périmètre régional multi-départements | Association régionale foncière documentée | R2 chantier La Salvetat (WORK-REL-102) | Foncier et communs, information non offre de terre | PAR-003/004 | Foncière propriétaire distincte de l'association |
| `tis-c8-sctl` | Société civile des terres du Larzac (SCTL) | Aveyron · Plateau du Larzac (plusieurs communes) | Structure foncière, baux historiques à collationner | R1 comparaison Salvetat (WORK-REL-106) | Gouvernance foncière, lecture documentaire | PAR-003/004 | Aucune terre libre ni statut juridique actualisé attestés |

## Matrice des cinq relations effectivement présentes dans #161

| Arête | Type WORK et niveau TIS | Vérification, limites et sens |
|---|---|---|
| `WORK-REL-101` : Testet → Salvetat | `comparaison` **R1** | Deux dossiers différents, eau et foncier ; aucune action commune attestée. IGEDD 2025 + Terre de Liens ; `source_refs` n'indexe encore que la compilation C05. |
| `WORK-REL-102` : Salvetat → Terre de Liens | `complement_documentaire` **R2** | Chantier daté décembre 2025 (120 arbres selon opérateur) avec Terre de Liens Midi-Pyrénées/CEN Occitanie ; **ne prouve pas** un partenariat avec Interstice ni survie des arbres. |
| `WORK-REL-105` : Maison du Vélo → L’R de Rien | `comparaison` **R1** | Réparation vélo contre textile ; pas de coopération et camion de L’R de Rien clos en 2018. |
| `WORK-REL-106` : SCTL → Salvetat | `comparaison` **R1** | Deux mécanismes de gestion foncière, pas de filiation ni offre de terre. |
| `WORK-REL-107` : VRAC Toulouse → `EXP-002` | `comparaison` **R1** | Achat groupé et caisse alimentaire de Montpellier : outils et garanties différents ; pas de programme commun. |

**Preuve :** les cinq arêtes sont des références structurées existantes, avec une provenance C05 résoluble. Le manque est **la source externe fine et datée par relation**, à ajouter dans `SourceRef` avant tout usage d'un graphe de preuves. Toute proximité supplémentaire R0 est un filtre de lecture, pas une arête partenariale à créer automatiquement.

## Hiérarchie territoriale non administrative et sans coordonnées

La représentation candidate doit permettre des **rattachements multiples** : `France > Occitanie > département > commune` est une vue administrative seulement. Coexistent des territoires de bassin (`Testet/Tescou`), plateau (`Larzac`), réseaux multi-communes (VRAC / jardins / Glanerie), ancienne région (`Terre de Liens Midi-Pyrénées`), projets fonciers et territoires autonomes ou revendiqués. Catalogne/Aragon/Murcie-Albacete (PAR-002) sont des situations historiques datées ; Chiapas (PAR-007) reste une désignation très large sans coordonnées de communautés ou lieux sensibles. Une ressource **sans géométrie reste dans les listes et les liens textuels**. Pas de centroïde présenté comme localisation de lieu.

## Raccordements minimaux proposés

1. **Adapter sans migrer :** même identifiant opaque du registre #161, alias Maison du Vélo conservé ; liste de dossiers documentaires, puis liens typés. `publicItem.kind=initiative` du prototype #41 n'implique pas `status=public`. Pas de copie en dur des vingt ressources dans le code des cartes.
2. **Carte des communs → Encyclopédie :** lier par comparaison contextualisée à `wiki-ecologie-sociale-environnement.html`, `wiki-decision-collective.html`, `wiki-autonomie-materielle-savoir-faire.html`, `EXP-002/004/005` selon pertinence. **Ne pas reclasser EXP sans l'arbitrage de l'Anarchitecte :** #161 les attribue à `encyclopedie`, tandis que l'audit candidat #177 évoque un reclassement vers `carte`. Contradiction **ouverte** ; ne pas compter EXP comme notices TIS ni en créer de copies.
3. **Carte des communs → sept Parcours :** liens de lecture candidat surtout PAR-003 (eau/foncier, alimentation/réemploi, apprendre/réparer) et PAR-004 (gouvernance, travail invisible). Les autres PAR gardent leurs dossiers historiques, culturels et leurs propres réserves ; **PAR-005 est bloqué**. Pas de nouveau huitième Parcours. Le pont #178 de 29 étapes retourne zéro lien ressource publiable par défaut ; aucune URL publique à inférer.
4. **Carte des possibles :** pour chaque TIS candidat, aucune offre ou besoin réel saisi, aucun rattachement automatique à une proposition. Seulement des catégories de lecture susceptibles d'aider la modération humaine si un jour un organisme consent et un service est vérifié. Le principe `liste + carte` dérivées du même sous-ensemble ne doit jamais cacher les ressources sans coordonnées.
5. **Faire Ensemble :** les propositions citoyennes futures sont des objets distincts `besoin|ressource|projet`, soumis à la revue/modération; **aucune déclaration faite au nom des vingt initiatives**. Les bénévoles, les enfants, les personnes vulnérables et les adresses privées ne sont pas des contenus cartographiques.
6. **Statuts différents :** `relation_evidence_level (R0..R3)` ≠ `WORK-REL.type` ≠ `TIS availability=inventaire_tisseuse_lu` ≠ `Cartes publication=private_draft|review|public` ≠ `Faire Ensemble pending/moderated`. Garder chacun dans son champ et sa provenance.

## Lacunes P0/P1 et conditions avant une intégration

| P | Contrôle manquant | Condition minimale |
|---|---|---|
| P0 | publication/localisation | `coordinates:null`, interdiction de rendu sans visa, aucun contact réel ; contrôle des données publiques/privées serveur ; retrait/rectification et validation Juriste |
| P0 | faire ensemble | fonction de propositions non déployée, `pending` et modération, aucune liaison automatique à des organisations ; pilote et délai de 30 jours non opérationnels tant qu'autorisation/test réel ne sont pas acquis |
| P1 | sources relationnelles | ajouter des `SourceRef` individuels pour `WORK-REL-101/102/105/106/107`, conserver C05, date/version, opérateur vs source indépendante |
| P1 | activité/accès | séparer `dossier inventorié` d'un accueil **aujourd'hui** ; absence de preuve ne signifie pas fermeture ; vérifier chaque lieu avant utilisation pratique |
| P1 | territoires | introduire plusieurs portées possibles, sans géocodage forcé ni insertion de données GPS sensibles |
| P1 | plan navigation | tester les liens de retour sans transformer un trait de navigation en relation ou filiation historique. L'arbitrage de rattachement EXP et des bifurcations reste ouvert |
| P1 | sources historiques | CAT, BIO/ARCH, ZAP, œuvres FN et droits indépendants ; PAR-005 bloqué |
| P1 | qualité et sécurité | tests d'absence de fuite dans JSON, export, DOM, URL ; test liste sans localisation ; clavier/lecteur d'écran/réduction de mouvement ; aucune validation implicite CI |

## État de cette passe

**Réalisé :** lecture GitHub des PR #173/#161/#41/#177/#178/#186 et de `main/atlas.html`, `main/parcours.html` ; rapprochement des vingt IDs et cinq arêtes du registre avec les trois systèmes documentaires/prototypes ; rédaction du tableau exhaustif, preuves, lacunes et intégrations candidates.

**Non réalisé :** tests automatisés nouveaux, audit des vingt sites en temps réel, relecture humaine indépendante de chaque organisme, vérification d'ouverture physique, activation du pilote, création/édition de relations réelles dans #161, migration, fusion, publication, contacts. Aucun R3. **Toutes les décisions de publication demeurent fermées.**

**Décisions à instruire sans les présumer :** classement primaire des EXP, adoption d'un adaptateur documentaire, choix de rendre ou non les anciens circuits TIS accessibles comme bifurcations. Ces arbitrages ne sont pas demandés par cette mission pour déposer une matrice candidate.
