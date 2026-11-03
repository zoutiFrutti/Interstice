# INTERSTICE — C03-TIS-03 / BIFURCATIONS
**La Tisseuse · 2026-11-03 · Proposition de navigation transversale, non intégrée.** Référence : [7 Parcours WORK de la PR #161](https://github.com/zoutiFrutti/Interstice/blob/work/c02-v2-reconciliation-20261103/coordination/v2/work-c02-01/data/parcours.json), blob `be242baf409d0715bc870af68c15f75ae4ae770a`, et [matrice](https://github.com/zoutiFrutti/Interstice/blob/work/c02-v2-reconciliation-20261103/coordination/v2/work-c02-01/02_MATRICE_PARCOURS.md). Aucun Parcours V2 n'est adopté ni publié.

## Principe d'architecture
La porte **Carte des communs** est une lecture territoriale des mêmes identifiants, **pas une encyclopédie bis, ni un annuaire d'aide en direct, ni une liste de partenaires**. Les sept Parcours `PAR-001..007` sont transversaux ; l'ancien carnet TIS C10 contient *trois itinéraires de lecture thématiques*, non trois nouveaux Parcours V2. Pour chaque bifurcation : conserver `from_resource_id`, `to_resource_id` ou destination documentaire réelle, `comparison_reason`, `evidence_refs`, `claim_period`, `R_level`, retour lisible et `publication_authorized=false`. Aucune nouvelle `Resource` n'est créée ici.

## PAR-001 — Commune de Paris : une ville, plusieurs temps
**Repères généraux :** Paris, expérience de La Marmite (à partir de 1868), Commune de 1871, textes de 1871 et leurs réalisations à distinguer.
- **Bifurcation A** : `ASSO-008` La Marmite → `ARCH-007` décret du 16 avril 1871 → `ARCH-005` projets des Ateliers du Louvre. Relation **R1, comparaison temporelle** : société civile, norme et projet de règlement ne sont pas les mêmes objets ; aucun fonctionnement d'atelier inféré par le texte d'un décret.
- **Bifurcation B** : `ASSO-007`, `COL-003`, `ARCH-006`, puis `BIO-009`, `BIO-010`, `BIO-012`, `BIO-019` pour observer personnes, archives et controverses de noms. Les informations biographiques incertaines ne produisent **aucune épingle résidentielle** ; conserver objections `WORK-COM-*`.
- **Retour** : PAR-004 pour poser qui décidait et qui travaillait, PAR-006 pour histoire des femmes. Ne pas présumer d'une filiation avec une association contemporaine.

## PAR-002 — Espagne révolutionnaire : ne pas écraser les régions
**Repères :** Catalogne / Aragon / Murcie-Albacete ; temporalité 1936–1937. Les zones de collectivisation, les autorités et les conflits ne coïncident pas mécaniquement.
- **Bifurcation A (déjà candidate)** : `CAT-001` collectivisations → `CAT-006` mai 1937 : **R1 de lecture**, pas causalité ou continuité institutionnelle automatiquement établie.
- **Bifurcation B (réservée)** : recherches sur le décret catalan du **24 octobre 1936** (publication du 28 octobre) versus son application pratique ; ne pas injecter une fiche Aragon/Murcie sans source locale et ID validé par C03-CAT-03.
- **Retour** : PAR-004 pour comparer les règles de décision ; la comparaison avec `EXP-004` Mondragón ou `EXP-005` Barcelona en Comú reste **R1, comparaison distante**, sans filiation CNT/POUM/FAI établie.
- **Risque** : « Espagne » n'est pas un territoire homogène ni un acteur révolutionnaire unique. Conserver `WORK-ESP-02` et recherches historiques des autres ateliers.

## PAR-003 — Écologie sociale : trois bifurcations territoriales existantes
**Sources :** [TIS C10](https://github.com/zoutiFrutti/Interstice/blob/research/tisseuse-cycle10-tis001-20261101/coordination/transmissions/2026-11-01_TISSEUSE_C10_PARCOURS_SOURCES_MEDIATHEQUE_RELIEUSE.md), [études ÉCO-TIS-001](https://github.com/zoutiFrutti/Interstice/blob/main/coordination/transmissions/2026-10-31_TISSEUSE_ECO_TIS_001_INITIATIVES_ET_CAS.md), `wiki-ecologie-sociale-environnement.html`.
1. **Eau, luttes, droits d'usage** : `tis-c8-testet` (territoire/rapport IGEDD) → `tis-c8-salvetat` (ferme/plantation) → `tis-c8-sctl` (gestion foncière, Larzac). Relations `WORK-REL-101/106` R1. La Salvetat ↔ `tis-c8-tdl` `WORK-REL-102` R2 daté pour une action agricole 2025. **Pas d'itinéraire physique** ni d'atteinte à des propriétés privées.
2. **Alimentation, réemploi et dignité** : `tis-c8-vrac` → `tis-c8-jardins` → `tis-c8-glanerie`. R1 de comparaison éditoriale ; lien `WORK-REL-107` vers `EXP-002` (Montpellier) pour opposer achat groupé et caisse conventionnée ; pas de relation VRAC↔Montpellier démontrée.
3. **Réparer / transmettre** : `TIS-001-001` Maison du Vélo (alias `tis-c8-velo`) → `tis-c8-3pa` → `tis-c8-jardins` ; comparer au besoin `TIS-001-006` L'R de Rien via `WORK-REL-105`. Aucun atelier ni séance accessible à la demande.
**Écart constaté dans #161 :** l'étape `PAR-003/territoires` cite seulement `tis-c8-sctl` et `FN-024`, alors que cinq liens territoriaux figurent dans `relations` du Parcours. Proposer **des renvois secondaires sourcés** vers les autres clés TIS, sans imposer de parcours linéaire, ni ajouter vingt objets à l'étape. Conserver les sources de science/impact distinctes des déclarations des organismes.
**Retour** : PAR-004 sur gestion du pouvoir ; PAR-006 sur répartition du travail et genre ; PAR-007 comme comparaison de contexte, non modèle à copier.

## PAR-004 — Autogestion : branche historique et branches contemporaines
- **Historique** : `ASSO-008`, `ARCH-005` et retour PAR-001 ; ne pas confondre formes de propriété, droit d'usage, accès aux décisions et charge de soin.
- **Coopératives et outils** : `EXP-004` Mondragón (droits des sociétaires ≠ votes de tous les salariés et des filiales), `EXP-005` Barcelona en Comú / Decidim (mouvement municipal, institution et logiciel distincts). Comparaison avec `tis-c8-sctl` et `tis-c8-tdl` comme gouvernances foncières, **R1** uniquement.
- **Réemploi/entraide** : `TIS-001-001`, `TIS-001-006`, `tis-c8-vrac` et `EXP-002` comme pratiques avec conditions d'accès concrètes, sans qualifier automatiquement toutes d'autogestion égalitaire.
- **Écart constaté dans #161 :** étape `PAR-004/experiences` porte `ASSO-008`, `ARCH-005`, `EXP-004`, `EXP-005`, mais les relations territoriales de #161 ne sont pas toutes représentées dans les étapes. Proposition : liens secondaires depuis les fiches de lecture, pas fusion de lieux et de ressources.
- **Retour** : PAR-002 et PAR-007 en comparaisons **sans filiation** ; `FN-009` et `FN-058` pour contester pouvoir informel et exclusions.

## PAR-005 — Droits en manifestation : pas de « services proches » inventés
- Territoire = juridiction de la fiche de droit, **pas localisation d'une permanence, d'une personne ou d'un rassemblement**.
- `DROIT-001` reste en `entraide`; état **bloqué** dans #161 pour la publication pratique et relecture juridique/médicale. La présence de `parcours.html#entraide` ne constitue pas une assistance opérationnelle ni une validation.
- Aucune géolocalisation de personnes militantes, points de rassemblement ou coordonnées de défense ; ne pas inventer de permanence d'urgence. Retour uniquement vers le dossier en lecture sous réserve.
- **Proposition** : séparation `jurisdiction` / `service_area` / `location_public`, sans carte d'aide automatique.

## PAR-006 — Féminismes et luttes LGBTQIA+ : histoires situées, pas assignations
- Bifurcation parisienne : `ASSO-007`, `BIO-009`, `BIO-010`, `BIO-019` et archives correspondantes ; **identités disputées** et droits d'image hors de cette mission.
- Bifurcation vers œuvres `FN-015/016/055/069` : territoire de sujet, période étudiée et territoire de diffusion ne sont pas une même métadonnée. Ne pas géolocaliser des personnes réelles à partir d'une œuvre, d'une appartenance ou de l'orientation supposée.
- Bifurcation travail invisible/accès : `wiki-lecture-croisee-travail-soin-pouvoir.html`, `FN-009`, `FN-058`, et comparaisons sur projets de fermes, cantines et coopératives. Aucun label « espace sûr » présumé pour les associations TIS.
- Retour : PAR-001/004, sans traiter les histoires féministes comme simple annexe à la Commune.

## PAR-007 — Zapatisme : autonomie située, localisation protégée
- Périmètre documentaire **Chiapas / Mexique**, sans communautés, coordonnées, bases ou adresses sensibles. Ne pas assimiler juridiquement une autonomie revendiquée à la subdivision officielle d'un État.
- `ZAP-C10-001` : originaux, traductions et annonces de **novembre–décembre 2023**, évolutions post-2023, notes de 2026 à vérifier par C03-ZAP-03. Les sources du mouvement ne prouvent pas à elles seules les effets indépendamment observés.
- Retour PAR-004 (pouvoir et recours) et PAR-003 (foncier, écologie) par **comparaison R1**. Pas d'arête « filiation » vers la Commune, Catalogne, Larzac ou associations occitanes sans déclaration explicite et preuves.
- Prévoir la mention « localisation volontairement non publiée » sans la remplacer par une épingle au centroïde du Chiapas.

## Représentation accessible, sans métriques ni coordonnées inventées
```text
Parcours transversal → question et période → trois choix textuels
  ├─ dossier historique (sources et incertitudes)
  ├─ cas contemporain (activité déclarée, accès non garanti)
  └─ comparaison (R1) / acte extérieur daté (R2) si preuve
Retour → source initiale / autre question / liste complète
```
Chaque branche doit fonctionner au clavier, sans JavaScript et en mode texte ; les ressources sans géométrie restent dans la liste. **Aucun essai navigateur, clavier, GPS, mobile ou lecteur d'écran n'est effectué dans C03-TIS-03.** Ne pas appeler ce document « navigation intégrée » ou un plan de visite.

## Arbitrages et contrôles
- **C03-ANA-03** : identifiants, `relatedIds` et types, compatibilité du prototype #41 sans import.
- **C03-PEN-03** : distinguer comparaison, filiation et décisions de pouvoir.
- **C03-JUR-03** : territoires sensibles, droits et recours.
- **C03-CAT-03 / C03-ZAP-03 / C03-ARC-03** : faits historiques, dates et sources primaires.
- **La Relieuse / Zout** : décider si ces bifurcations sont retenues, avec relecture de C03-LEC-03. Aucune adoption supposée.
