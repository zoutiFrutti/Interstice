# Éclaireuse — R1 : inventaire contradictoire et tri des nouvelles pistes
Date : 2026-11-02. **Candidat documentaire, non publié, non adopté.**

## Passe 1 — preuves relues
- R1-ECL sur `coordination/reprise-generale-r1-20261102` : blob `8b9bd6ac03758dc664fd18c3428517e9f4837541`.
- R1 00 méthode : `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8` ; 01 architecture : `a9070cd99b775d169415e3c991074dced1c6ffab` ; 02 index : `4982d1d2501af5665729cc99400c5915e94a6eb0`.
- Huit hypothèses : `coordination/cycle10/ECLAIREUSE_CONTROLE_HUIT_HYPOTHESES_2026-11-01.md` sur `research/eclaireuse-cycle10-20261101`, blob `f7e839a9f72c12e7744cfe32d1a1de22d10e5977`. PR #74 : sept lignes d'origine, huitième ÉCL-004e ajoutée C10.
- Six fiches manifestation : `coordination/eclaireuse/manifester/FICHES_MANIFESTATION_V0_2026-11-01.md`, blob `a125d0faa73be48a4fae08e829140b2da2e33080`.
- Proposition ARTE : `coordination/transmissions/2026-11-01_ECLAIREUSE_PROPOSITION_ARTE_MEDIATHEQUE.md`, blob `474c8e53c72a4d917c0e7085344a871d725e3d53`.
- Accusés historiques : `coordination/messagerie/accuses/ECLAIREUSE_C10_REL_SUITE_20261101.md`, blob `323658066d93484974346a2993f2421c6080f89a`; courrier C10 réellement lu antérieurement, ne pas réécrire l'histoire. Boîte centrale C10 consultée, blob `0a475fb5f7bf9a2cd5a1307c3a0cace07fdb3528`, état ancien non réconcilié avec accusés personnels.
- Transmission C10 antérieure : `coordination/transmissions/2026-11-01_ECLAIREUSE_C10_SUITE_RELIEUSE.md`, blob `6e9cbc5e9c84961a0f8d05dd3101d9de1d5c0f54`.

## Passe 2 — huit hypothèses : objections et besoins de preuve
| ID | Statut de fond | Objection / preuve manquante |
|---|---|---|
| ÉCL-001 | BLOQUÉ | Pas de corpus ni d'échantillonnage vérifiable ; ne pas affirmer biais établi |
| ÉCL-002 | À POURSUIVRE | 162 abandons/42 études approfondies ne constituent pas taux général de réussite ni causalité unique |
| ÉCL-003 | À POURSUIVRE | EJAtlas et Terres de Luttes : unités et périmètres non alignés ; licences/export à contrôler |
| ÉCL-004a | BLOQUÉ | Délibération CIC 2016 ne démontre pas transfert exécuté |
| ÉCL-004b | BLOQUÉ | Assemblée annoncée en 2017 ne prouve ni tenue ni flux |
| ÉCL-004c | BLOQUÉ | Déclaration Calafou 2023 ne remplace pas titre foncier |
| ÉCL-004d | BLOQUÉ | Proximité CIC/FairCoop/FairCoin n'établit ni contrôle ni faute |
| ÉCL-004e | BLOQUÉ | Récits contradictoires de continuité, sans registre juridique actuel |
Aucune accusation financière, aucune inférence de fraude.

## Passe 3 — RELIER / COMPLÉTER / CRÉER
| Chantier | Choix actuel | Antériorité / lacune / garde-fou |
|---|---|---|
| Atlas des communs | RELIER puis COMPLÉTER | Transiscope et TIS-001 existent ; ajouter provenance, contexte historique, relations R0–R3 ; aucune importation ou coopération présumée |
| Audiovisuel | RELIER puis COMPLÉTER | ARTE, Tënk et notices FN existantes ; notices originales pérennes, accès et droits vérifiés ; sélection de dix œuvres par Médiathèque/Zout |
| Mémoire des luttes | RELIER puis COMPLÉTER | Archives, LUT, biographies et travaux historiques existants ; chronologie contradictoire et sources primaires avant toute fiche |
| Entraide / manifestation | RELIER, COMPLÉTER sous revue | Guides LDH/Amnesty et V0 six fiches ; juridique et santé P0 bloquants avant publication |
| Entraide / logement, squats | RELIER d'abord | ADIL, Service-Public, associations spécialisées à inventorier ; différencier situations juridiques, territoire, urgence |
| Entraide / racisme, validisme, handicap, féminisme, LGBTQIA+, violences, travail, masculinisme | RELIER d'abord | Défenseur des droits, services publics, associations spécialisées à inventorier ; ne pas généraliser ni prétendre conseiller sans expertise ; confidentialité, accessibilité |
| Recherche par situation vécue | COMPLÉTER architecture | Index de formulations anonymes vers ressources, sans récit personnel ni collecte de données |
| Observatoire des récits | COMPLÉTER après P0 | Vigie/Lectrice/Penseuse ; pas de doublon de veille ni équivalence artificielle des sources |
| Passages/logo | RELIER architecture existante | Graphiste/Anarchitecte/Dev ; vue d'un graphe, jamais nouvelle base indépendante |

**CRÉER** seulement après démonstration documentée d'une lacune, relecture adaptée et décision Zout.

## Passe 4 — contrôle de risques et tests
- Contrôle manuel des documents récupérés via GitHub : 8 IDs ÉCL distincts, 6 sections de fiches, 3 documents R1 communs et 1 courrier ; SHA des blobs enregistrés.
- Fiches V0 : les affirmations sur masque, fouille, encerclement, garde à vue, gaz, sérum sont des **points à auditer**, pas des conseils approuvés. Liens juridiques et médicaux non réouverts individuellement dans cette passe ; aucune validation de leur actualité. Absence de revue spécialisée, d'arrêtés locaux et de tests d'accessibilité.
- ARTE : liens proposés et métadonnées non vérifiés œuvre par œuvre ; aucune licence d'import, aucun partenariat.
- Pas de tests applicatifs, CI, staging, tests multi-comptes, tests médicaux, revue juridique indépendante ou test de lien automatisé exécutés. Aucun code de production modifié.

## Priorités et dépendances
**P0** : préserver blocage des fiches sensibles ; Juriste/Lectrice/soins compétents ; P0 sécurité/RGPD de la Développeuse hors mandat Éclaireuse. **P1** : proposer prototype B après revue, puis liens Atlas et 10 œuvres, en réutilisant Resource/SourceRef/Relation/SituationEntry/WorkAccess. **P2** : mémoire des luttes et observatoire. Arbitrages Zout : périmètre de la première situation, dix œuvres, politique de retrait, toute publication/fusion/contact.
