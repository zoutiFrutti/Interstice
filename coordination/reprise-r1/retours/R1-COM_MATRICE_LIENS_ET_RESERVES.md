# R1-COM — Confrontation, corrections candidates et liste des dépendances
**2026-11-02. Initiative individuelle portée par Zout. Aucun pouvoir éditorial des ateliers IA.**
**Branche** : `atelier-anarchiviste-communs/reprise-r1-20261102`. **Priorité P0** : aucun acte historique P2 ne doit être présenté comme solution à une barrière sécurité / droit / RGPD P0.

## Passe 1 — Inventaire sans perte ni duplication
Mandat R1 et 00/01/02 lus sur la branche `coordination/reprise-generale-r1-20261102`. Registre C10 propre : `coordination/transmissions/2026-11-01_ANARCHIVISTE_COMMUNS_C10_MATRICE_CORRECTIONS.md`, `atelier-anarchiviste-communs/cycle10-preuves-20261101`, blob **`73c02d781169b5b10bdb655c21d5d339cb04b909`**. Boîte C10 : `atelier-anarchiviste-communs/cycle10-messagerie-reprise-20261101`, blob **`700bb8fb8bfe5009f244ed9795e9abfa2607259e`**, courrier SUITE reçu sur cette branche et message 008 traité sur cette branche seulement ; aucune réconciliation centrale présumée. PR #43 reste sur branche de coordination historique, PR #77 sur `research/archeologue-communs-cycle10-20261101` (HEAD observé `f6a12b7ac4fa76c705a8978c62fb780af4b0b607`). Ne pas écraser les matrices de l'Archéologue. Les accusés historiques ont des portées distinctes des courriers R1 non distribués aux autres ateliers.

## Passe 2 — Règle RELIER / COMPLÉTER / CRÉER ; matrice de raccordement
Statuts proposés : **LIEN_CANDIDAT** (réutiliser une fiche), **COMPLÉMENT_CANDIDAT** (renforcer une fiche), **BLOQUÉ_SOURCE** (original requis). Relations ne prouvent ni coopération, ni contact, ni filiation.
| Ressource existante | Axe R1 et relation candidate | Evidence state | Limite / prochaine opération |
|---|---|---|---|
| ARCH-005 Louvre | Mémoire des luttes ↔ travail coopératif, projet de règlement | COMPLÉMENT_CANDIDAT | Affiche BHVP 363 et transcription Audin ; application sans preuve comptable ; l'Archéologue garde la pièce source |
| ARCH-006, COL-003 | Mémoire des luttes ↔ presse et clubs, relation **documente** | LIEN_CANDIDAT | BnF *Le Prolétaire* quatre n° ; journal ≠ séance ; Ly22 absent |
| ASSO-007 Union des femmes | Mémoire ↔ féminisme ↔ travail et solidarité | COMPLÉMENT_CANDIDAT | Statuts *La Sociale*, date 12/20 avril à collationner ; convocation ≠ réunion |
| ARCH-002, ARCH-007 | Mémoire ↔ affiche/décret | LIEN_CANDIDAT | seuls visas humains historiques sur versions exactes ; décret 16 avril ≠ atelier requisitionné |
| LUT-001 A69, LUT-003 Sivens, LUT-004 Sainte-Soline | Mémoire ↔ Atlas des conflits eau/terre, relation **même problème territorial** (pas même mouvement) | LIEN_CANDIDAT | Conseil d'État, préfet, DREAL ; décisions ≠ effets ; suivi matériel et juridique requis |
| LUT-002 Notre-Dame-des-Landes | Mémoire ↔ Atlas occupations et foncier | COMPLÉMENT_CANDIDAT | abandon aéroport 2018 ≠ régularisation universelle des terres ; témoignages et baux datés |
| LUT-005 Standing Rock, LUT-009 Yasuní | Mémoire ↔ territoire/eau/souveraineté, relation **comparaison thématique** uniquement | LIEN_CANDIDAT | nations et institutions distinctes ; vote ≠ fermeture des puits |
| LUT-006 Hambach, LUT-007 Chipko, LUT-008 Cherán | Mémoire ↔ forêts, autonomie et ressources | LIEN_CANDIDAT | accord ≠ restauration ; témoignages/assemblées réelles absents ; tribunal Cherán ≠ jugement sur couverture forestière |
| CIC / Calafou / FairCoop | Atlas ↔ économie coopérative, relation **proximité historique documentée à contrôler**, aucune identité juridique commune déduite | COMPLÉMENT_CANDIDAT | CIC résumé assemblée décembre 2015 ; décision ≠ versement ; registre 2026 inconnu |
| Écologie sociale, végétarisme/véganisme | Médiathèque et index thèmes ↔ controverses et pratiques de partage | BLOQUÉ_SOURCE | Aucun dossier primaire/ouvrage supplémentaire ici ; éviter une nouvelle fiche prescriptive ; croiser sources scientifiques et usages locaux avant ajout |

**Schéma R1 ciblé**, compatible avec `Resource / SourceRef / Relation` : préserver chaque ID, `relation.type` = « comparaison_thématique », « documente », « contexte_historique » ; `relation.evidence_refs` contient les références exactes, et `relation.state` = « candidate_non_validée ». Aucun ID nouveau ou relation R0–R3 attribuée sans le contrat de La Tisseuse.

## Passe 3 — Corrections rédactionnelles qui ne revendiquent pas l'exécution
1. **Louvre** : « Le règlement du 3 mai 1871 proposait l'élection et la révocabilité de responsables et une organisation du travail ; sa mise en œuvre complète n'est pas démontrée par la seule affiche. » Source : https://macommunedeparis.com/2023/05/31/3-mai-1871-le-reglement-des-ateliers-du-louvre-suite/ ; https://bibliotheques-specialisees.paris.fr/ark:/73873/pf0001490635 .
2. **Le Prolétaire** : « Quatre numéros parurent en mai 1871 ; leur contenu ne restitue pas nécessairement toutes les délibérations du club. » BnF https://catalogue.bnf.fr/ark:/12148/cb328445424 .
3. **Union des femmes** : « Les textes définissent des comités et annoncent des ateliers ; l'étendue des activités et paiements nécessite des pièces d'exécution distinctes. » https://macommunedeparis.com/2016/05/30/union-des-femmes-pour-la-defense-de-paris-et-les-soins-aux-blesses-les-statuts/ .
4. **CIC** : « Le compte rendu du 21 décembre 2015 décrit des difficultés de traçabilité financière et des décisions de réorganisation ; il n'atteste ni un détournement ni les paiements effectifs ni l'activité de la CIC en 2026. » https://cooperativa.cat/resum-de-lacta-de-lassemblea-permanent-del-21-de-desembre.htm .
5. **Cherán** : « Un litige juridictionnel de mars 2026 documente une procédure contestée de révocation ; il ne permet ni de présumer le résultat d'une nouvelle assemblée ni d'évaluer la forêt. » https://www.te.gob.mx/sentenciasHTML/convertir/expediente/ST-JDC-0012-2026- .
Ces corrections sont des **deltas éditoriaux candidats**, non modifications silencieuses des fiches de l'Archéologue.

## Passe 4 — Vérification critique et liste fermée R1
**Sources effectivement contrôlées pour ce R1** : GitHub des quatre textes R1 ; ancien rapport C10 GitHub et boîte C10 ; PR #43 et #77 HEAD. Les URL externes ci-dessus sont **reprises de vérifications C8–C10**, non toutes rouvertes en temps réel ici. Pas de nouvelles images copiées ; pas de scan source, de test juridique ou d'observation de terrain. Wikipédia déjà comparé par sujet dans C8 ; **aucune nouvelle comparaison exhaustive pour le présent R1** et donc **aucune création d'article**.
**Dépendances finies :**
- **B01 (P0)** : sécurité Supabase, RGPD, cinq pages sensibles, droits, staging réel et rollback ; responsabilité Développeuse/Juriste/Lectrice/Relieuse ; **aucune intervention de notre atelier et aucune porte levée**.
- **B02 (P1)** : mapping 24/44/71, schéma Relations et R0–R3, vérification des alias et droits FN ; Anarchitecte/Médiathèque/Tisseuse ; **attente**.
- **B03 (P2)** : Louvre BHVP MP159 et n°363, livres de paie, Ly108 ; Assistant/Archéologue ; **sources originales non collationnées**.
- **B04 (P2)** : *Le Prolétaire* BnF quatre fascicules et Ly22, identité citoyenne André et chiffres femmes ; Assistant/Archéologue ; **attente**.
- **B05 (P2)** : *La Sociale* 12/20 avril et preuves d'activités Union ; Assistant/Médiathèque ; **attente**.
- **B06 (P2)** : CIC comptes CASX, PV complémentaires et immatriculation actuelle, Calafou distinct ; Tisseuse/Assistant ; **attente**.
- **B07 (P2)** : LUT : résultats matériels, documents de prolongation SEV15, procès-verbaux Cherán, suivis eau/territoire ; Éclaireuse/Tisseuse/Anarchivistes selon spécialité ; **attente**.
- **B08** : décision éditoriale Zout sur fiches/relations et toute éventuelle publication ; **DÉCISION ZOUT**.

## État à La Relieuse
- O1 inventaire / non-duplication : **TERMINÉ documentaire**, chemins et SHAs vérifiés.
- O2 architecture/relations : **À POURSUIVRE**, candidates seulement, dépendance B02.
- O3 corrections historiques/écologiques : **À POURSUIVRE**, deltas sourcés, originaux B03–B07.
- O4 P0 : **BLOQUÉ dans notre périmètre**, interdiction de prétendre lever B01.
- O5 adoption/édition/pub : **DÉCISION ZOUT**.
- O6 transmission : enregistrée dans GitHub sous ce rapport, puis commenter PR de La Relieuse et y reporter les identifiants vérifiés.

**Tests documentaires** : lecture de fichiers GitHub et contrôles de SHA de contenu ; pas de CI ni de test applicatif, pas de fusion, publication, achat, contact ou décision automatique.
