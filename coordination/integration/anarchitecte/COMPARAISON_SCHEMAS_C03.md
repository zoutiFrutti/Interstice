# Courrier 03 — Comparaison des schémas existants, avant arbitrage
**2 novembre 2026 · branche candidate `atelier/anarchitecte-integration-c03-20261102` · aucune adoption/migration**.

## Mandat
Décisions Zout : `coordination/reprise-r1/03_ARBITRAGES_ZOUT_2026-11-02.md` (blob `f61b5b29b1757cf63a4c213ca7aa2524a14a04aa`) : **attendre cette comparaison avant de choisir**. Plan commun blob `88954ca172d10b5ffbb3fdb5daca0d0b5d91328e`, mandat blob `57f1f6724d8b4be42b770a48f94e5051ce4f7b23`. Aucun format proposé dans ce dossier n'est réputé adopté.

## Comparaison de représentations actuellement présentes
| Ensemble | Représentation constatée | Identifiant / lien | Champs ou limites | Perte possible si uniformisation aveugle |
|---|---|---|---|---|
| Wiki 24 | `wiki-*.html` à la racine, `wiki.html` index | **chemin HTML et fragments** | contenu et liens directement dans HTML, pas 24 lignes SQL canonisées | perdre ancres, URL existantes, nuances/provenance et réserves P0 |
| Fiches 44 | registre documentaire éditorial + Markdown candidats sur branches | `BIO-xxx`, `ASSO-xxx`, `ARCH-xxx`, `COL-xxx`, `EXP-xxx` | `source_folder` peut différer du préfixe ; visa éditorial individuel distinct de publication | effacer dossiers d'origine, réduire les réserves à un booléen, mélanger personnes distinctes |
| FN 71 | matrice Médiathèque, notices sources Drive, sélection secondaire | `FN-001..FN-071` | 70 URL renseignées, FN-018 source originale manquante ; deux alias candidats | dédoublonnage destructif, crédits/édition/droits/consultation perdus |
| Bibliothèque visible | `bibliotheque.html` (blob `0b86cad296695ead359b789a9fc280db4f6d996c`), sélection `coordination/mediatheque-selection-018-A.json` blob `82eb2f84eeec01292f0eadf0bb60448dad65c7d1` | liens dans HTML, IDs FN dans une sélection candidate | HTML public de navigation ≠ inventaire exhaustif des 71 FN ; disponibilité d'œuvre ≠ droit d'héberger | confondre rubrique publiée, sélection, métadonnées de catalogage et droit de reproduction |
| Wiki côté processus | `docs/proposals/wiki-document-handoffs-schema.sql` blob `91ec688dc024d9c349ee1d8c3c9f983b6bbdb68f`, outil `scripts/inventory-wiki-markdown.mjs` blob `bee96056b37d1fe7c9738cc14a1d0a65ecc5d1d6` | `document_id` slug et `source_sha` pour handoff | tables privées de transfert, refus publication par défaut ; inventaire des fichiers Markdown, **pas des 24 HTML** | assimiler une soumission ou un document découvert à une page approuvée, perdre SHA/version |
| Modèle Anarchitecte R1 | `CONTRAT_COMMUN_R1_V1.json`, objet Resource/SourceRef/Relation/SituationEntry/WorkAccess | `(corpus,stable_key)` proposés | contrat candidate non déployé ; graphe/logo et prototypes non implémentés | imposer un schéma neuf au lieu de réemployer les structures réelles |

## Rapprochement de données et cas particuliers
- Source de base contrôlée au cycle C10 : 24/44/71 = 139 clés uniques ; mapping `coordination/cycle10/anarchitecte/MAPPING_C10_139.json`, blob `a02373657a552ebecf600fb54b8b5fe78bdedd69`. Le registre source n'est **pas** dans la branche d'intégration commune au contrôle du 02/11 : le test doit donc conserver une copie/version de référence candidate et refuser toute promotion si la source n'est plus résoluble.
- `ARCH-001` situé dans dossier `COL`, `EXP-001/002/004/005` dans `ASSO` : préfixe typologique ≠ dossier historique ; conserver les deux.
- Alias documentaires FN-048 → FN-022 et FN-057 → FN-038 **proposés, non activés** ; garder les quatre clés, comparaison des éditions/licences et des traductions avant toute décision de relation.
- `BIO-009` Le Mel/Lemel : variante nominative, état civil contradictoire ; `BIO-019` Blanche Lefebvre/Lefèvre : identité civile non unifiable ; un alias d'orthographe n'est **pas** un lien d'identité.
- La Lectrice R1 : trois pages sensibles **BLOQUÉES**, deux **À POURSUIVRE** ; un encadré de réserve copié ne résout pas le corps du texte.
- Provenance et droits distincts : fichier source / auteur / édition / traduction / illustration / date de consultation / statut du visa ; aucune URL publique n'implique l'autorisation de reproduire.

## Trois options à soumettre à Zout
| Option | Mise en œuvre candidate | Avantages | Risques / décision |
|---|---|---|---|
| **A — Adaptateurs documentaires**, recommandation technique pour comparer | conserver HTML/Markdown/catalogues ; index JSON de correspondance `key↔route/source/état` généré hors production | faible risque, réversible, suit l'existant, interface Graphiste/Développeuse utilisable rapidement | doublons de champs provisoires ; règles de mise à jour à maintenir ; pas de publication automatique |
| **B — Catalogue commun en lecture seule** | vue générée depuis les sources vérifiées avec provenance et liens, sans migrer originaux | recherche, relations, carte-logo et trois prototypes plus cohérents | risque de valeurs périmées ou d'export sensible ; tests d'absence de champs privés et traçabilité nécessaires |
| **C — Unification persistante plus tard**, uniquement à soumettre | tables communes/normalisation Resource etc. après comparaison et visa explicite | requêtes relationnelles/évolutivité théoriques | migrations complexes, droits RLS, pertes d'ancres, dédoublonnage, rollback réels ; **interdite aujourd'hui** |

**Décision de schéma toujours réservée à Zout.** Aucune de ces options n'est déployée ou adoptée. Pour la branche Graphiste/Développeuse : commencer par des adaptateurs candidats et tests de non-perte, sans créer de site parallèle ni base.

## Contrôles à poursuivre
- Comparaison détaillée HTML + données de rendu JavaScript et éventuelles tables Supabase avec La Développeuse, sans DDL ; diff des 24 pages de la branche Lectrice, résolutions juridiques P0.
- Revoir toutes les 71 notices et droits d'images/œuvres avec La Médiathèque. Les contrôles réseau 59 URL restent hors de cet audit.
- Vérifier navigation mobile/clavier et recherche de la bibliothèque intégrée, et conservation des chemins/ancres sur HEAD d'assemblage unique.
- Tester code d'adaptateur (si retenu) et exclusions des champs internes avant toute sortie publique. **Aucun test navigateur ou serveur exécuté par L'Anarchitecte ici.**
