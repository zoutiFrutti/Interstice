# INTERSTICE — C06-TIS-01 · Clôture des relations territoriales
**Atelier :** La Tisseuse. **Mandat :** La Relieuse, P2, passe unique du 4 novembre 2026. **Livraison :** document candidat sur la PR brouillon #173. **Aucune publication ni modification de la PR #161.**

## Périmètre et versions vérifiées
- PR #161 `work/c02-v2-reconciliation-20261103`, HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` (inchangé à cette consultation), registre `coordination/v2/work-c02-01/data/{resources,relations,parcours,sources}.json`.
- PR #173 `research/tisseuse-c03-territoires-20261103`, HEAD avant clôture `d612cdecf692233274d712da2dbd76cca8a28041` : `INVENTAIRE_TERRITORIAL.md`, `MATRICE_PREUVES.md`, `BIFURCATIONS.md`, `CORRECTIONS.md`, `TRANSMISSION_RELIEUSE.md`. Les compléments C05 sont réellement présents dans les deux derniers fichiers.
- Sources publiques revérifiées le 04/11/2026 : [IGEDD, Tescou](https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html), [Terre de Liens, La Salvetat, 16/12/2025](https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/), [La Glanerie, actualités](https://www.la-glanerie.org/actualites) et [La Glanerie, boutiques](https://www.la-glanerie.org/redistribuer). Pas de vérification terrain ni d'audit exhaustif des vingt liens tiers.

## Contrôle structurel automatisé *en mémoire*, non déployé
| Vérification | Résultat |
|---|---|
| Objets dans `resources.json` | 219 |
| Notices TIS | 20 = 19 `initiative` + 1 `notice_territoriale` |
| Alias historique Maison du Vélo | `TIS-001-001` conserve `tis-c8-velo` |
| ID ressource répété / cible de relation manquante | **0 / 0** |
| Parcours | 7 (`PAR-001` à `PAR-007`), références d'étape et relation valides |
| Relations totales / relations ayant un objet TIS | 19 / 5 (`WORK-REL-101, 102, 105, 106, 107`) |
| Références `SourceRef` des cinq relations | 5 références syntaxiquement résolues, toutes vers compilation C05 ; **0 source primaire individualisée dans ces cinq relations** |
| Coordonnées non nulles des vingt TIS | 0 |
| Statuts de publication autorisés des vingt TIS | 0 |
| Coopérations explicitement attribuées à Interstice | 0 : **R3 non établi** |

**Nuance :** le résolveur de références fonctionne ; les sources ne sont pas « cassées ». C'est leur **granularité probante** qui manque. Un contrôle de clé valide ne certifie pas le contenu de la source. Les 20 champs `external_url` utilisent HTTPS ; leurs réponses HTTP et les conditions d'accueil n'ont pas toutes été revérifiées.

## Les seize propositions C03, examinées individuellement
| COR | Verdict C06 | Intervention exacte |
|---|---|---|
| **01** | **Applicable P1** | Garder la provenance C05 ; créer des `SourceRef` individuels dans `sources.json` puis les référencer sur les cinq relations concernées avec dates, type d'auteur et limites. |
| **02** | **Applicable P1** | `WORK-REL-102` = R2 **pour la plantation de 120 arbres en décembre 2025**, selon Terre de Liens. Organisateurs Terre de Liens Midi-Pyrénées / CEN Occitanie, appui Arbres et Paysages Tarnais, soutien financier régional déclaré ; pas de relation avec Interstice, pas d'efficacité biologique mesurée. |
| **03** | **Applicable P1 sous choix de schéma** | `availability:inventaire_tisseuse_lu` = disponibilité **documentaire**, pas lieu ouvert. Proposer `activity_claim_at`, `checked_at`, `activity_evidence_status`, sans migration destructive. |
| **04** | **Applicable immédiatement comme règle** | `tis-c8-testet` reste un territoire de bassin / dossier d'eau, aucune nouvelle organisation créée. Le rapport IGEDD publié 2025 documente un processus, pas un collectif actuel. |
| **05** | **Déjà appliquée** | `TIS-001-001.aliases` inclut `tis-c8-velo`. Tester la résolution d'alias à l'intégration, sans deuxième notice. |
| **06** | **Applicable P1** | Qualifier L'R de Rien (camion 2018 clos), Hors-Loge (trace C05 2023), Sous les Toiles (festival juillet 2026 passé), MJC et notices communales (activité actuelle à revalider) ; ne supprimer aucun organisme existant sur seule ancienneté d'une annonce. |
| **07** | **Mise à jour documentaire P1** | La Glanerie annonce de nouveaux horaires de Blagnac au 04/11/2026 ; **ils figurent désormais également sur les pages officielles de boutique**. Marquer « horaires publiés par opérateur au 04/11, fonctionnement physique non vérifié », plutôt que « annonce future » seulement. |
| **08** | **Applicable P1** | Terre de Liens association / Foncière / ferme, SCTL / Larzac, 3PA / site : distinguer entités et périmètres. Divergence de surface 3PA non résolue. |
| **09** | **Choix éditorial ouvert** | Trois itinéraires TIS peuvent devenir trois renvois facultatifs **textuels** de PAR-003, sans nouvel ID PAR ni coordonnées. Rien n'oblige à les insérer. |
| **10** | **Choix éditorial ouvert** | PAR-004 peut renvoyer à quelques comparaisons de gouvernance/réemploi, sans qualifier ces structures de démocratiques ou autogérées sans preuve. |
| **11** | **Applicable P1 sous contrôle documentaire** | Qualifier épisodes Freegan Pony, Barcelona en Comú, Catalogne 1936, Mondragón, Montpellier et périodes propres, sans ajouter de cartes réelles ni fusionner mouvement, logiciel, municipalité. |
| **12** | **Déjà exigée P0** | `PAR-005` reste bloqué pour la publication pratique. Aucun service d'assistance ou adresse de permanence dérivé des notices Carte. |
| **13** | **Applicable à la représentation, schéma à arbitrer** | Aires historiques, administratives, hydrographiques, autonomes et multi-territoriales : champs multiples possibles. Chiapas seulement à résolution non sensible ; aucune communauté localisée. |
| **14** | **Déjà correcte** | `WORK-REL-101/105/106/107` en R1 comparaison, `WORK-REL-102` en R2 d'acte ponctuel. **Pas de promotion R2/R3 par proximité.** |
| **15** | **Déjà correcte** | Porte principale TIS `carte` ; EXP `encyclopedie`, FN `mediatheque`, DROIT `entraide`. Ajouter des relations, pas des clones de ressources. |
| **16** | **Déjà appliquée P0 dans les vingt notices** | `coordinates:null` et `validation.publication:non_autorisee` pour tous les TIS ; contrôler la persistance de ces invariants au rendu. Aucun géocodage ni position de repli automatique. |

**Bilan :** 9 familles de corrections documentaires/techniques nouvelles immédiatement instruisibles (01–04, 06–08, 11, 13), 5 invariants ou rectifications déjà satisfaits (05, 12, 14–16), et **2 décisions de navigation** (09–10), à traiter ensemble, sans imposer de choix par défaut.

## Sept Parcours et relations territoriales
- **PAR-001 Commune** : seulement archives et dossiers historiques ; pas de carte d'adresses de personnes, distinction événements 1868/1871.
- **PAR-002 Espagne** : régions Catalogne/Aragon/Murcie-Albacete distinctes, aucun raccourci d'application locale du décret d'octobre 1936.
- **PAR-003 Écologie** : seule ressource TIS explicitement inscrite dans ses étapes actuelles = `tis-c8-sctl`. Ses cinq relations TIS figurent dans `relations`, mais ne signifient pas cinq étapes existantes.
- **PAR-004 Autogestion** : cinq relations TIS en métadonnées de parcours, **aucune** ressource TIS dans ses étapes. L'écart n'est pas une référence cassée, mais une possibilité de navigation.
- **PAR-005 Manifestation** : `DROIT-001`, publication pratique bloquée.
- **PAR-006 Féminismes** : biographies et organisations parisiennes historiquement situées, pas de données résidentielles.
- **PAR-007 Zapatisme** : Chiapas générique, chronologies/traductions et source autonome ; aucune géolocalisation fine, aucune filiation européenne supposée.

## Réserves à conserver expressément
- R2 chez Terre de Liens = preuve **déclarative de l'organisateur**, pas corroboration indépendante de l'impact ; aucun R3 attesté avec Interstice.
- Accueil, horaires exceptionnels, conditions d'adhésion, fonctionnement des sites, accessibilité, droits sur supports et données d'usagers non certifiés pour les vingt fiches.
- Écarts surface 3PA, baux SCTL non collationnés, activités 2026 insuffisamment attestées pour plusieurs anciennes fiches.
- Hors-Loge et Le Pigeonnier ne sont pas présumés fermés ; absence de preuve d'activité récente ≠ preuve d'arrêt.
- `PAR-005` toujours bloqué juridiquement ; 35 objections C02 canoniques non assimilées aux 30 réserves WORK.
- Aucun test GPS, carte, PMR, navigateur ou CI exécuté pendant cette passe. Pas de fusion, publication, contact, partenariat ou intégration au registre #161.

## Consultation directe de Zout : uniquement le choix éditorial encore ouvert
**Question unique groupée** : insérer les trois circuits TIS sous forme de **renvois documentaires secondaires, textuels et facultatifs** dans PAR-003/PAR-004 (recommandé), ou maintenir les circuits seulement dans l'index Carte, ou réserver entièrement l'arbitrage ? Aucun de ces choix n'autorise la publication ou des épingles GPS. Les autres seize propositions n'exigent pas de consultation pour être préparées ; leur intégration sera techniquement validée et contrôlée par les ateliers responsables.

**Transmission** : cette clôture C06 est un fichier GitHub candidat sur PR #173 ; le résultat d'une éventuelle consultation directe sera enregistré ultérieurement comme **décision spécifique de Zout**, distincte des preuves documentaires. Aucun consentement anticipé.
