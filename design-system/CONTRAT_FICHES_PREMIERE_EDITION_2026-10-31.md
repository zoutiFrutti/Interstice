# LA FAILLE NOIRE × INTERSTICE
## La Graphiste → L'Anarchitecte, La Développeuse et La Relieuse
### Contrat graphique commun des fiches de première édition · candidat 0.1
**31 octobre 2026 · DOCUMENT DE TRAVAIL NON ADOPTÉ · AUCUNE PUBLICATION**

> Contrat de présentation, pas arbitrage documentaire ni permission de publier. L'édition est préparée sous la responsabilité éditoriale déclarée de Zout, **sans adoption collective** ; cela ne lui attribue pas un titre juridique de directeur de publication. Aucun contenu ou média n'est autorisé par la mise en page.

## 1. Sources réelles et anti-doublon

- Décision de La Relieuse sur PR #43, « RELIEUSE_DECISION_EDITORIALE_PRE_SORTIE_2026-10-31.md », blob c457d9153b8a8173d0a3c1d0d80397f3ab0d8435 ; **44 fiches Drive** (22 BIO, 8 ASSO, 8 ARCH, 4 EXP, 2 COL), **71 notices FN**, **24 pages Wiki existantes**, soit 139 **entrées de trois natures différentes**, jamais 139 fiches publiables. Une partie des 44 fiches est documentaire/privée.
- **PR #28** : les pièces techniques existent déjà, « design-system/fiche.schema.json », « design-system/fiche-renderer.mjs », « assets/fiche-design-system.css », « design-system/PROFILS_DE_FICHES_V0_1.md » et la prévisualisation d'un texte public préexistant. Ce contrat **n'altère ni le schéma, ni le renderer, ni l'accès aux brouillons**.
- **PR #35** : identité noir #101014, rouge #c5212c, blanc cassé #e9e5db ; titres Barlow Condensed, lecture Atkinson Hyperlegible Next, fallbacks natifs, tailles 18–19 px, focus visible, 320/390/1280 et impression. Les fontes locales et leurs licences doivent être résolues sur la branche d'intégration ; ne pas les copier ici.
- **PR #47 ÉCO-001** : frise, lutte, biographie et comparaison scientifique déjà proposés. Reprendre leurs contrats plutôt que créer un design écologique séparé.
- Système **candidat empilé sur PR #28**, dans la branche « design/fiches-premiere-edition-contrat-2026-10-31 », sans toucher à la racine du site, aux articles historiques, à Supabase, aux formulaires ni au manifeste.

## 2. Une fiche = une identité de contenu, plusieurs présentations

L'ordre de lecture est identique sur mobile, ordinateur, imprimé et lecteur d'écran.

| Ordre | Composant / classe compatible PR #28 | Règle de présentation |
|---|---|---|
| 1 | fiche-hero, fiche-kind | Catégorie explicite, ID **existant**, titre, résumé. Un seul H1. Aucune catégorie déduite du seul préfixe si le registre est contradictoire |
| 2 | fiche-state | Deux états indépendants : **révision éditoriale** et **visibilité/publication**. « Candidate non publiée » sauf décision et publication attestées. Ne pas confondre « déjà visible sur site » et « approuvée » |
| 3 | fiche-dates | Première publication sur site (ou « non publiée »), dernière mise à jour éditoriale (ou « inconnue »), version et date de la source historique séparées |
| 4 | fiche-contents | Sommaire d'ancres descriptives, clavier, facultatif pour les fiches courtes |
| 5 | fiche-section, fiche-claim | Faits sourcés, interprétations, témoignages, objections, propositions ; la qualification concerne **chaque passage**, pas la page entière |
| 6 | fiche-section--discussion, fiche-dispute | Contradictions et incertitudes attribuées et visibles, jamais enfouies dans un accordéon fermé |
| 7 | fiche-section--sources, fiche-credit | Sources, édition/cote, niveaux réellement consultés, date de consultation et crédits/licence par **fichier média** |
| 8 | fiche-related | Liens vers fiches connexes par ID connu et route réellement existante ; lien documentaire ≠ partenariat |
| 9 | fiche-revision, fiche-responsabilite | Version, changements, auteur/atelier seulement si divulgation autorisée, rectification non sensible et mention de responsabilité éditoriale |

**Mention éditoriale candidate, à revoir par La Juriste :**
« Édition documentaire coordonnée sous la responsabilité éditoriale de Zout. Projet La Faille noire × Interstice en construction, non adopté collectivement. »

Un champ inconnu se rend en **texte honnête** : « Publication : non attestée », « Mise à jour éditoriale : non renseignée », « Licence : à vérifier ». Ne jamais remplacer une date de recherche, de commit ou d'import Drive par une date de publication inventée.

### Statuts et dates : deux systèmes à ne pas mélanger

Le registre de la Relieuse conseille INVENTORIE → RELU_SOURCES → RELU_CRITIQUE → DROITS_OK_OU_SANS_MEDIA → CANDIDAT_SITE → ACCORD_EDITO_ZOUT → INTEGRE_BRANCHE → TESTS_OK → PRET_POUR_SORTIE → PUBLIE, et peut indiquer BLOQUE_MOTIVE / EN_CORRECTION.

La PR #28 distingue **editorial_status** (draft/pending/needs_review/approved/rejected) et **publication_status** (not_published/published/archived). **Ne pas écrire un statut du registre dans Supabase ni inventer un mapping sans validation L'Anarchitecte.** Une CI verte, un style ou un fichier en ligne ne génèrent ni ACCORD_EDITO_ZOUT ni published.

Dates distinctes :
- événement/biographie : date historique, parfois imprécise ou contestée ;
- source : date du document/édition, date de consultation et niveau de lecture ;
- fiche : date réelle de première publication, date réelle de mise à jour, version ;
- juridique/média : contrôle des droits daté s'il existe, sinon « non vérifié ».

## 3. Profils pour les inventaires existants

| Famille | Profil obligatoire en plus du socle | Précaution |
|---|---|---|
| BIO (22) | parcours, chronologie, œuvres, contextes, contributions collectives | identité incertaine, faux portraits, héroïsation, personnes privées |
| ASSO (8) | statuts déclarés **et** pratiques réellement attestées, décisions, évolution | intentions ≠ résultats ; aucune affiliation au projet inventée |
| COL (2) | lieux documentés, voix, décisions, période, participants attestés | pas de parole attribuée à tout un collectif sans source |
| ARCH (8) | cote/dépôt, support, provenance, transcription séparée, authenticité/limites | fac-similé **facultatif** si droits non établis ; caricature ≠ reportage fidèle |
| EXP (4) | activité et date de vérification, zone, conditions d'accès, limites | structure recensée ≠ partenaire ni structure forcément active aujourd'hui |
| FN (71) | **notice bibliographique seulement** : édition, auteur, lien légal, résumé original, niveau de lecture, restrictions | ne pas reproduire les livres et revoir les doublons FN-022/048 et FN-038/057 |
| Wiki (24) | chapô, plan, sources à l'assertion, objections, liens thématiques | une page existante ≠ édition validée ; ne pas écraser PR #44 / La Lectrice |

**Limite existante du schéma** : les types admis dans PR #28 sont biographie, lecture, archive, article, bibliographie, tutoriel. **ASSO/COL/EXP/FN ne disposent pas de types spécifiques**. Ne pas modifier l'énumération en douce ; L'Anarchitecte examine s'il faut garder un type générique avec une étiquette de catégorie distincte, puis teste rétrocompatibilité, renderer et droits.

## 4. Mission complémentaire : sept composants, aucune nouvelle page décorative

| Composant proposé | Sémantique et repli indispensables | Priorité |
|---|---|---|
| fiche-timeline, **chronologie** | liste ordonnée verticale, dates exactes ou « incertaine », événements sourcés ; jamais seulement une image SVG | P1 |
| fiche-historical-map, **carte historique** | figure uniquement si document/lieux vérifiés ; **liste textuelle de lieux d'abord** ; pas de GPS, carte fictive présentée comme preuve ou localisation sensible | P2 |
| fiche-comparison, **comparaison d'études** | table/caption/th scope, unités, échantillons, périodes, méthodes et limites ; défilement local au clavier sur mobile, équivalent textuel | P1 |
| fiche-testimony, **témoignage** | blockquote/cite/provenance si droit de citation établi ; expliciter qui parle, contexte, transcription, incertitude ; anonymiser selon risque | P1 |
| fiche-rights, **fiche de droit** | sections poche/détail/orientation, texte applicable daté et exceptions, périmètre France ou autre réel, pas de promesse d'assistance ni formulaire personnel | P0 |
| fiche-primary-source, **document primaire** | cote + support + « ce que la pièce établit / n'établit pas », fac-similé seulement après licence établie, transcription distincte | P1 |
| fiche-dispute, **dossier contradictoire** | versions attribuées, preuve de chaque thèse, objections, incertitudes, décision éditoriale distincte et contestable | P0 |

Cette proposition **étend des composants**, pas le nombre d'articles. Les objets médiatiques historiques doivent rester absents si droit de fichier, crédit, licence et personnes représentées n'ont pas été vérifiés.

## 5. Modèle de provenance et lien connexe : données à étudier, aucune migration

La PR #28 porte déjà id, type, titre, résumé, bloc et qualification, sources, contradictions, incertitudes, workflow, droits et révision. Extensions **demandées mais non implémentées dans le renderer** :
- catalogue_kind et catalogue_id existants (BIO/ASSO/ARCH/COL/EXP/FN/WIKI/DROIT/ÉCO) ;
- published_at et updated_at **réels ou null**, versions documentaires ;
- source_edition, source_level_read (original/fac-similé/transcription/extrait/notice/non consulté), source_checked_at et source_rights ;
- media: source exacte, créateur, licence du fichier, crédit, consentement pertinent, droits vérifiés à une date **réelle** ;
- editorial_stage et record_decision_id issus du registre (sans écraser workflow PR #28) ;
- related[] avec type de lien, ID réel, route existante vérifiée ou null ;
- correction_route uniquement si effectivement habilitée, sinon « procédure de rectification à définir ».

Une référence sans route publique reste un simple texte avec identifiant, pas un lien 404. Le livre FN est une ressource **tierce**, pas une nouvelle fiche de lecteur ni un partenaire.

## 6. Accessibilité, mobile, long format et impression

- **320/390/1280**, zoom 200 % et 400 % à contrôler : ordre en colonne mobile, aucune largeur globale > viewport, texte courant ~18–19px, notes importantes ≥16px, colonne longue ≤74ch.
- Clavier : lien d'évitement, focus visible 3px, sommaire et retour vers Wiki, ancres stables et descriptives ; pas de section critique visible uniquement au survol.
- Contraste cible WCAG AA (texte 4,5:1, gros texte 3:1 et composants importants 3:1), statut explicite en mots indépendamment des couleurs.
- **Sans JS** : les sources, faits, limites et corrections sont lisibles en HTML statique ; aucune bibliothèque externe obligatoire pour les états.
- **Lecture longue** : chapô bref, sommaire ancré, paragraphes limités en largeur, glossaire/sources au même endroit d'une fiche à l'autre ; liens connexes accessibles et cohérents.
- **A4/PDF** : fond blanc, texte noir, version/statut/source/crédit/mention éditoriale, contradictions imprimées, URLs visibles si significatives, ne pas couper une référence courte ou une légende ; Ctrl+P fonctionne sans script.
- Aucun contenu protégé ni personnel sensible dans les tests, maquettes ou fichiers JSON accessibles publiquement. Le chemin « noindex » **n'est pas** une protection pour des brouillons privés.

## 7. Intégration et visas

1. Relieuse + ateliers vérifient chaque fiche et les réserves de source/droits ; **Zout valide explicitement** le lot/version autorisé, pas les 139 fiches d'un coup.
2. L'Anarchitecte décide de l'extension additive du schéma, du renderer DOM sûr, de la correspondance de statuts et de l'étiquetage de responsabilité, sans modifier le flux de modération avant preuve.
3. La Développeuse intègre seulement les contenus autorisés sur branche candidate, sans écraser les corrections de La Lectrice, avec test routes/ancres/droits et sans nouvelle collecte.
4. La Graphiste contrôle le rendu issu du moteur réel, les contrastes, impression, écran tactile et lecteur d'écran, **sur le SHA exact** de l'intégration.
5. Seule une décision humaine explicite peut lancer fusion et publication. Les principes du manifeste et de la charte restent **critiques et non adoptés collectivement**.

## 8. Statut des livrables et verdict

La proposition fournit :
- **ce contrat**, comme extension de la PR #28 ;
- **CSS de composants scopé** conservant le socle PR #28 ;
- une **maquette interne** sans articles historiques, avec placeholdings explicitement fictifs ;
- **un test de régression** sur la maquette, pas une relecture documentaire.

**Verdict : candidat à la revue technique de L'Anarchitecte, à la planification de La Développeuse et à l'arbitrage éditorial de La Relieuse.** Aucune des 44/71/24 entrées n'est nouvellement approuvée par ce travail. Une PR ou un commentaire GitHub ne prouve pas à lui seul la lecture par une autre conversation d'atelier.
