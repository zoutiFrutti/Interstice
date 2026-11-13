# INTERSTICE — C03-TIS-03 / INVENTAIRE_TERRITORIAL
**La Tisseuse · 2026-11-03 · P1 · Document candidat pour La Relieuse.** Branche `research/tisseuse-c03-territoires-20261103`. Lecture seule des sources de référence ; aucune donnée insérée dans les cartes publiques, aucun contact/accord/publi.

## Périmètre réellement comparé
- [PR #161](https://github.com/zoutiFrutti/Interstice/pull/161), HEAD documentaire `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` : `coordination/v2/work-c02-01/data/resources.json` (blob `66957e1b223f05642dcd69479ac48d0394797802`), 219 objets, 20 objets Carte, 19 relations typées et 7 Parcours. Ne pas toucher à son registre ; correction proposée seulement.
- [PR #132 / index C03](https://github.com/zoutiFrutti/Interstice/blob/feature/integration-c18-orchestratrice-suivi-20261102/coordination/c03/INDEX_TRANSMISSIONS.md), contrat C18 de suivi. Ce travail ne vaut ni validation de La Relieuse ni réception d'un autre atelier.
- [TIS-001/015 sur main](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/ateliers/rapports/tisseuse/015.md) + carnet séparé `TIS-001_carnet_015.md` (retrouvé parmi les fichiers de travail C05 ; contenu non reproduit ici) : douze fiches.
- [Atlas R1 et 9 lignes / 3 circuits](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-reprise-r1-20261102/coordination/reprise-r1/transmissions/R1_TIS_RECONCILIATION_ATLAS_TRANSISCOPE_20261102.md), [index C10](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-cycle10-tis001-20261101/coordination/transmissions/2026-11-01_TISSEUSE_C10_PARCOURS_SOURCES_MEDIATHEQUE_RELIEUSE.md), et livrables C05 de La Tisseuse. Les neuf lignes récentes comprennent huit ressources/organisations et une notice territoriale, `tis-c8-testet`.
- Arithmétique vérifiée sur le JSON de #161 : 12 anciennes + 9 récentes - 1 recoupement (`TIS-001-001` / `tis-c8-velo`, Maison du Vélo) = **20 identités documentaires distinctes**. Cela signifie **19 entités/ressources et 1 territoire**, pas 20 services actifs.

## Organigramme proposé, sans réduction des territoires à des États
```text
Monde / index non géolocalisant
 ├─ Pays / États, comme filtres administratifs facultatifs
 │   ├─ France → Occitanie
 │   │   ├─ Tarn : Albi, Gaillac, Rabastens-Couffouleux, Monestiés
 │   │   ├─ Haute-Garonne : Toulouse/Blagnac, Lahage, réseaux multi-communes
 │   │   ├─ Tarn-et-Garonne : Laguépie
 │   │   └─ Aveyron : Najac, Villefranche-de-Rouergue, plateau du Larzac
 │   ├─ Espagne → Catalogne / Aragon / Murcie-Albacete (situations historiques datées)
 │   └─ Mexique → Chiapas (périmètre général, pas communautés sensibles)
 ├─ Territoires vécus ou écologiques : bassin du Tescou, plateau du Larzac
 ├─ Régions autonomes, peuples, territoires revendiqués (nom et sources propres)
 ├─ Territoires transfrontaliers ou multi-régions (relations N–N)
 └─ Chronologies : événement, organisation, réseau, lieu, objet culturel
```
Un territoire peut avoir **plusieurs rattachements administratifs et politiques** et plusieurs noms datés. Ne pas coder la souveraineté étatique comme seul parent de vérité ; pour le Zapatisme, ne pas géolocaliser les communautés. `territory_scope` ≠ siège ≠ lieu d'activité ≠ zone de service ≠ adresse précise.

## Vingt notices présentes dans PR #161
Les sources renvoient aux déclarations des organismes ou à des publications institutionnelles antérieures. **Une page accessible n'établit pas l'ouverture actuelle, l'accès libre, l'affluence ni les droits de reproduction.** Vérifications ciblées nouvelles du 03/11/2026 : IGEDD, Afev Albi, Terre de Liens et La Glanerie ; pour les autres conserver les consultations C05/TIS de 30/10–02/11 et demander une nouvelle vérification avant usage pratique.

| ID du registre | Objet | Zone publique (sans coordonnées) | Nature à afficher | Temporalité et réserve | Source d'origine |
|---|---|---|---|---|---|
| `TIS-001-001` (alias `tis-c8-velo`) | La Maison du Vélo | Haute-Garonne ; Toulouse | organisation/initiative documentée | atelier documenté ; accueil/horaires saisonniers à reconfirmer | [source](https://www.maisonduvelotoulouse.com/atelier-participatif-reparation/) |
| `TIS-001-002`  | Afev Albi | Tarn ; Albi | organisation/initiative documentée | antenne documentée ; capacité d'accueil inconnue | [source](https://afev.org/occitanie/albi) |
| `TIS-001-003`  | MJC Rabastens-Couffouleux | Tarn ; Rabastens / Couffouleux | organisation/initiative documentée | saison 2026–2027 annoncée ; inscription à vérifier | [source](https://www.mjcrabastenscouffouleux.fr/) |
| `TIS-001-004`  | MJC de Gaillac | Tarn ; Gaillac | organisation/initiative documentée | notice municipale et agenda ; programme actuel à confirmer | [source](https://www.gaillac.fr/mon-quotidien/enfance-jeunesse/maison-des-jeunes-et-de-la-culture-mjc/) |
| `TIS-001-005`  | Le Pigeonnier | Tarn-et-Garonne ; Laguépie | organisation/initiative documentée | notice municipale non datée ; ouverture inconnue | [source](https://www.laguepie.fr/associations/culturelles-animations-loisirs/) |
| `TIS-001-006`  | L’R de Rien | Tarn-et-Garonne ; Laguépie | organisation/initiative documentée | boutique annoncée en 2026 ; camion-atelier terminé en 2018 | [source](https://www.lrderien.org/) |
| `TIS-001-007`  | P’tite Lumière et Cie | Tarn-et-Garonne ; Laguépie | organisation/initiative documentée | notice municipale non datée ; actualité inconnue | [source](https://www.laguepie.fr/associations/culturelles-animations-loisirs/) |
| `TIS-001-008`  | Lenga Viva | Tarn-et-Garonne ; Laguépie | organisation/initiative documentée | édition culturelle 2026 documentée ; prochaines sessions inconnues | [source](https://www.lengaviva.com/universite-occitane-2026/?lang=fr) |
| `TIS-001-009`  | Hors-Loge | Aveyron ; Najac | organisation/initiative documentée | activité historique sur blog ; dernier billet observé 2023 | [source](https://horsloge.blogspot.com/) |
| `TIS-001-010`  | L’Atelier de Najac | Aveyron ; Najac | organisation/initiative documentée | notice municipale ancienne ; friperie/activités non confirmées pour 2026 | [source](https://najac.fr/associations/) |
| `TIS-001-011`  | Sous les Toiles | Aveyron ; Najac | association organisant un festival (édition ≠ structure) | festival de juillet 2026 passé ; prochaine édition inconnue | [source](https://festivalsouslestoiles.fr/) |
| `TIS-001-012`  | Les Hauts Parleurs | Aveyron ; Villefranche-de-Rouergue | organisation/initiative documentée | programmation 2026 et travaux ; accueil actuel incertain | [source](https://leshautsparleurs.com/) |
| `tis-c8-testet`  | Testet / bassin du Tescou | Tarn et au-delà du seul lieu ; Bassin du Tescou / secteur du Testet | territoire hydrographique / dossier (pas organisation) | rapport institutionnel 2025 / historique de conflit ; ni collectif ni lieu d'accueil | [source](https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html) |
| `tis-c8-salvetat`  | La Salvetat / Les Chlorophy’liens | Tarn ; Monestiés | organisation/initiative documentée | ferme documentée ; plantation 120 arbres en 2025 déclarée ; baux évolutifs | [source](https://fermes.terredeliens.org/midi-pyrenees/fermes-de-la-r%C3%A9gion-midi-pyr%C3%A9n%C3%A9es/la-salvetat/) |
| `tis-c8-vrac`  | VRAC Toulouse | Haute-Garonne ; Toulouse Métropole (réseau de quartiers) | antenne et groupements (pas point de retrait unique) | groupements documentés ; adhésion/listes d'attente, retrait incertains | [source](https://toulouse.vrac-asso.org/adherer-commander/) |
| `tis-c8-jardins`  | Partageons les Jardins | Haute-Garonne ; Département (dont Toulouse) | réseau multi-sites (pas jardin unique) | réseau documenté ; chaque jardin a des règles propres | [source](https://www.partageonslesjardins.fr/) |
| `tis-c8-glanerie`  | La Glanerie | Haute-Garonne ; Toulouse et Blagnac | organisation multi-sites (pas boutique unique) | boutiques déclarées ; nouveaux horaires Blagnac annoncés pour le 04/11/2026 | [source](https://www.la-glanerie.org/redistribuer) |
| `tis-c8-3pa`  | 3PA / Bordanova | Haute-Garonne ; Lahage | organisation/initiative documentée | association et formations annoncées ; places et visites inconnues | [source](https://www.3paformation.fr/) |
| `tis-c8-tdl`  | Terre de Liens Midi-Pyrénées | Territoire de l’ancienne région Midi-Pyrénées ; Périmètre régional multi-départements | antenne régionale distincte de la Foncière | réseau foncier régional documenté ; disponibilité foncière non établie | [source](https://terredeliens.org/midi-pyrenees/) |
| `tis-c8-sctl`  | Société civile des terres du Larzac (SCTL) | Aveyron ; Plateau du Larzac (plusieurs communes) | personne morale foncière (pas la totalité du Larzac) | structure foncière / histoire des baux ; terres disponibles non prouvées | [source](https://larzac.org/accueil/un-territoire-organise/gestion-fonciere/sctl/) |

### États à distinguer impérativement
- **Épisode daté / ancien** : le camion itinérant de L'R de Rien est arrêté depuis 2018 ; la dernière trace citée de Hors-Loge est 2023 ; le festival Sous les Toiles de juillet 2026 est passé. Ne pas transformer une édition historique en ouverture actuelle.
- **Déclaration d'opérateur sans contrôle terrain** : MJC, ateliers, VRAC, 3PA, foncier, réseaux associatifs ; réserver une colonne `checked_at` distincte de `claim_at`.
- **Entité territoriale / processus administratif** : Tescou = rapport de 2025 et bassin, pas collectif automatiquement actif.
- **Foncier** : La Salvetat, Terre de Liens et SCTL forment **trois objets différents**. Association régionale Terre de Liens ≠ Foncière propriétaire ; Larzac ≠ SCTL.
- **Réseaux** : VRAC Toulouse, Partageons les Jardins et La Glanerie ne se réduisent pas à un marqueur unique. Lieux de retrait, jardins et boutiques ne sont pas implicitement ouverts ni accessibles.
- **Coordonnées** : `coordinates:null` pour les vingt objets du JSON #161. Garder cette valeur. Aucun centre de commune transformé en position réelle.

## Dossiers historiques et territoriaux hors de ces 20 objets
| Dossier existant | Périmètre de lecture | Séparation nécessaire |
|---|---|---|
| `ASSO-008`, `BIO-009`, `BIO-012`, `ARCH-005/007`, `COL-003`, `ARCH-006` | Paris, 1868 et 1871 / PAR-001 | projet, réunion, décision, application ; pas d'adresse inventée |
| `CAT-001`, `CAT-006` | Catalogne, Aragon, Murcie-Albacete / PAR-002 | collectivités locales, partis, décret et conflits historiques différents |
| `EXP-001` Freegan Pony | Paris, épisode 2015–2019 documenté | ne pas présenter l'ancien lieu comme cantine actuelle |
| `EXP-002` caisse alimentaire commune | Montpellier, dispositif contemporain sous réserve | plafonds/chiffres datés et méthode d'évaluation, accès non garanti |
| `EXP-004` Mondragón | Pays basque / réseau international | distinguer coopérateurs sociétaires, salariés et filiales |
| `EXP-005` Barcelona en Comú / Decidim | Barcelone, action municipale 2015–2023 et outil distinct | mouvement, municipalité et logiciel ≠ organisme unique |
| `ZAP-C10-001` | Chiapas / PAR-007 | transformations 2023–2026 et textes propres au mouvement ; **aucune localisation fine** |
| `DROIT-001/002` | périmètres juridiques à définir / Entraide | pas un annuaire de lieux d'aide ou de permanence |

## Croisements sans nouvelle fiche ni doublon
- **Carte ↔ Encyclopédie** : lire `tis-c8-vrac` avec `EXP-002`, `tis-c8-sctl` avec les pages foncier/écologie et `EXP-004` comme comparaison institutionnelle, jamais fusion. Les biographies et archives conservent leur porte `encyclopedie`.
- **Carte ↔ Médiathèque** : `FN-024` et dossiers `ECO-*` sont des ressources de lecture, pas des initiatives situées. Ne pas attribuer une localisation au lieu de production d'une œuvre sans preuve.
- **Carte ↔ Entraide** : `DROIT-001/002` gardent la porte `entraide`; lien contextuel possible mais aucun service juridique, urgence ou permanence déduit.
- **Cartes de démonstration PR #41** : contenu fictif ; ne pas l'identifier aux vingt notices réelles ni activer `isDemo=false`.
- Les trois anciennes lectures TIS (eau/foncier ; alimentation/mutualisation ; réparer/transmettre) ne sont pas **trois Parcours V2 supplémentaires** : elles peuvent servir de bifurcations dans PAR-003/004 après arbitrage.

**Décision requise :** La Relieuse organise la revue avec C03-ANA-03, C03-PEN-03, C03-MED-03, C03-JUR-03. Aucune fiche publiée ou coopérante par simple présence dans ce tableau.
