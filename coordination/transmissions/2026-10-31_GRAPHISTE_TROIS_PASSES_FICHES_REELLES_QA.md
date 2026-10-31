# LA FAILLE NOIRE × INTERSTICE — Atelier Graphiste
## Trois passes réelles sur les fiches de première édition · Transmission à La Développeuse, L'Anarchitecte et La Relieuse

**31 octobre 2026 · Branche existante PR #50 :** « design/fiches-premiere-edition-contrat-2026-10-31 ».
**Statut : travail de présentation sur branche candidate, zéro fusion, zéro déploiement, aucun visa éditorial nouvellement accordé.**
**CI finale réussie :** https://github.com/zoutiFrutti/Interstice/actions/runs/41210590138 ; SHA exact testé **c06a5d0b4a3d248e87325c0b0a19792517c0991a** ; deux suites de tests **1/1 chacune**, dont **21 états navigateur réels** sur 7 pages × 320/390/1280 ; artefact **fiches-premiere-edition-captures-a4** (id 13045379311, 16,7 Mo) contenant les captures et l'export A4 de profil. Les captures existent mais n'ont **pas** été examinées visuellement une à une ni sur téléphone physique.

## 0. Références de travail vérifiées

- Décision pré-sortie de La Relieuse sur PR #43 et registre : 44 fiches Drive (22 BIO, 8 ASSO, 8 ARCH, 4 EXP, 2 COL), 71 notices FN et 24 pages Wiki **de natures différentes, non approuvées en bloc**.
- PR #28 (schéma, renderer, CSS de fiche), PR #35 (typographie Barlow Condensed / Atkinson Hyperlegible Next et charte), PR #47 (4 gabarits écologiques), PR #50 (contrat et extensions graphiques réutilisées ici).
- Ces pages sur \`main\` ont été comparées **au SHA des mêmes fichiers sur PR #50 avant intervention** : six contenus sont identiques entre les deux bases, **avant les ajouts purement HTML/CSS**. Au contrôle, la page de lecture croisée \`wiki-lecture-croisee-travail-soin-pouvoir.html\` **divergeait** sur \`main\` vs PR #50 : elle n'a **pas été modifiée**, pour préserver le travail de La Lectrice.
- Les 10 textes historiques entiers de La Relieuse sont dans \`coordination/candidats/2026-10-31\` sur PR #43. **Ils ne sont pas tous validés**. Les biographies de Drive n'ont pas été copiées ni rendues publiques par cette passe.

## Passe 1 — Application réelle sur les pages, et profils ARCH/ASSO/BIO

**Six vraies pages HTML Wiki modifiées uniquement dans les attributs/classes et référence de CSS** (aucun texte source, note de l'auteur, source ou lien éditorial remplacé) :
- \`wiki-feminismes-histoire-egalite.html\`
- \`wiki-association-collegiale.html\`
- \`wiki-capitalisme-classes-travail.html\`
- \`wiki-socialismes-communismes-anarchismes-autogestion.html\`
- \`wiki-politique-institutions-regimes.html\`
- \`wiki-ecologie-sociale-environnement.html\`

Chaque page reçoit la **même** référence \`assets/fiche-premiere-edition.css\`, \`main.interstice-fiche.fiche-wiki-candidate\`, et \`body.fiche-wiki-page\` pour que l'en-tête existant puisse revenir à la ligne. Le HTML a été relu après substitutions exactes avec vérification de réversibilité du contenu initial, pas de recréation des articles.

**Trois vraies références d'inventaire mises en situation graphique**, sans textes de fond du corpus non approuvé : \`design-system/apercu-profils-historiques-biographies-2026-10-31.html\`, **page interne non reliée à la navigation** et \`noindex\` (qui n'est pas une mesure de confidentialité) :
- **ARCH-003** : affiche n°331 du 15 mai 1871 ; lien vers **texte candidat exact de PR #43** et réserve « inscriptions annoncées ≠ réalisées » ;
- **ASSO-007** : Union des femmes ; **version courte alternative ≠ remplacement de la version longue de La Lectrice** ;
- **BIO-009** : Nathalie Le Mel ; **réserves sur lieu/date de naissance**, décès 1921, portrait non reproduit, corps de fiche Drive **non copié**. Source des métadonnées : registre PR #43 et décision éditoriale de La Relieuse.

**Limite importante :** **l'habillage complet d'une biographie textuelle Drive n'est pas exécuté** : seuls son titre, ID, réserves et statut ont été testés dans un aperçu de profil, pour ne pas transformer une fiche non autorisée en contenu GitHub librement accessible. L'Anarchitecte/Relieuse doivent apporter un extrait/publication autorisé par version pour la suite.

## Passe 2 — Écologie, politique, données, contradictions et sources

**Réemploi du CSS de PR #50** \`assets/fiche-premiere-edition.css\` :
- titres documentaires, sommaires, cartes thématiques, styles scientifiques/politiques **scopés** à \`.interstice-fiche.fiche-wiki-candidate\` ; fond #101014, rouge #c5212c et ivoire #e9e5db, pas de nouvelle palette ;
- blocs de preuves, objections, sources, crédits, liens de renvoi, métadonnées/états et dates **uniquement là où le contenu les fournit déjà ou dans la maquette**, sans fabriquer de sources ou statuts des six articles ;
- variantes \`fiche-timeline\`, \`fiche-comparison\`, \`fiche-primary-source\`, \`fiche-dispute\`, \`fiche-testimony\`, \`fiche-rights\`, \`fiche-historical-map\` disponibles dans le CSS et banc de maquette PR #50 ; **aucune carte historique/image/photo inventée**.
- Les pages existantes ont leurs manques documentaires propres ; la présentation CSS **n'atteste pas** de leur relecture scientifique, juridique, politique ou d'accessibilité exhaustive. Les notices FN restent des références externes, pas 71 articles.

**Conflit évité :** aucun remplacement de \`style.css\` global, \`assets/fiche-design-system.css\` de la PR #28, \`design-system/fiche-renderer.mjs\`, schema JSON, bibliothèque, wiki index, formulaire ou Supabase. Les styles des vraies pages sont opt-in par classes HTML. Les polices sont demandées par les variables \`--font-reading/--font-heading\` avec fallback : **les fichiers de fontes PR #35/#22 ne sont pas intégrés ici**.

## Passe 3 — QA Chromium sur vraies pages et profil

**Workflow existant PR #50**, étendu pour exécuter \`tests/graphiste-3-passes-pages-reelles-2026-10-31.test.mjs\` en plus de \`tests/fiches-premiere-edition-2026-10-31.test.mjs\`. **CI de référence success** : https://github.com/zoutiFrutti/Interstice/actions/runs/41210590138

| Test | Résultat documenté |
|---|---|
| 7 pages × 320, 390 et 1280 | **21 états réels ; 21/21 sans débordement global horizontal** |
| Lecture | **18px (320/390), 19px (1280)** ; un H1 par page |
| Contraste principal | **15,09:1** pour texte ivoire principal sur fond noir, calcul WCAG à partir des couleurs CSS mesurées ; **pas audit de tous les éléments** |
| Sommaire | Ancres locales présentes (0 cible manquante), clavier Enter sur premier lien sommaire lorsqu'il existe, focus CSS ≥3px |
| Source HTML | Aucun JS nouveau, aucune image ajoutée, aucun formulaire ajouté dans la maquette ; ressources locales chargées sans 404 dans les parcours |
| Grossissement texte simulé | Racine CSS 200 % à 320px, débordement au plus **+1px** selon cas : ne pas confondre avec zoom système Android ou zoom navigateur exhaustif |
| Impression | PDF A4 du profil ARCH/ASSO/BIO produit, autres captures 320 et 1280 des six pages (14 PNG en tout) |
| Médias | **Aucune nouvelle reproduction historique, aucun portrait, aucune photo, aucune nouvelle statistique fictive** |
| Relecture humaine | **Non effectuée** sur Android physique, TalkBack, contraste de chaque élément, visuels de chaque capture et PDF imprimé |

**Bugs trouvés par tests puis corrigés :**
1. [run #41210239014] échec : la page féminismes dépassait de **117px** à 320px, provenant de la navigation en ligne sans retour. Fix : classe de page + \`body.fiche-wiki-page > header\` flex-wrap, sans changer la navigation des autres pages.
2. [run #41210358410] échec : le titre écologie dépassait à 320px ; diagnostic DOM **EM « crise environnementale. » à right=433px**. Fix : \`overflow-wrap:anywhere\` sur H1 et EM de la fiche.
3. [run #41210501099] échec persistant : règle générale de césure insuffisante, diagnostics ciblés ci-dessus. Nouvelle correction du titre.
4. [run #41210590138] **succès** avec **0 overflow** sur les 21 états.

Le lien d'évitement et l'absence de données privées sont vérifiés dans le banc de maquette, **pas attestés universellement** sur les six pages d'origine. Les liens internes de page ont été contrôlés par la navigation aux ancres, mais pas tous les liens **externes** (sources, redirections, licences). Il existe des sujets P0 juridiques et de véracité indépendants des CSS.

## Points de livraison et décisions attendues

**À La Développeuse**
- Reprendre, lors de l'intégration autorisée, **ces six ajouts de lien CSS/classe** et le CSS scopé, plutôt que recopier d'anciens blobs des pages ; préserver les corrections concurrentes de La Lectrice.
- Réexécuter la CI sur le **SHA exact de la branche d'intégration**, vérifier routes/ancres, impression, clavier et non-collecte ; ne pas publier de brouillons à partir des maquettes.

**À L'Anarchitecte**
- Valider les styles opt-in avec PR #28, absence de conflit de classes et stratégie des fontes PR #35/#22 ; décider d'une évolution additive du schéma pour ASSO/COL/EXP/FN et des dates/provenances sans mapping implicite de statuts.
- Prévoir un rendu de fiche depuis la version **autorisée** du document, jamais depuis un lien de maquette publique vers un Drive privé.
- Contrôler les principes de navigation, les focus lecteurs d'écran réels, les alternatives texte, la compatibilité papier et le niveau de confidentialité des futurs aperçus.

**À La Relieuse**
- Maintenir les statuts documentaires et droits, spécialement **ASSO-007 long/court**, BIO-009 identité controversée et absence de visa pour ARCH-003.
- Présenter à Zout les fiches exactes par identifiant/version pour validation. **Aucune des 44/71/24 fiches n'acquiert un accord par la seule CSS ou une CI verte.**
- Vérifier qu'une page déjà sur \`main\` reste distincte d'une page approuvée pour la première édition, et que la mention « responsable éditorial Zout, sans adoption collective » est soumise à La Juriste.

**Publication : aucune. Fusion : aucune. Déploiement : aucun.** Les commentaires GitHub transmettent la documentation, mais **ne confirment pas la lecture dans les conversations des autres ateliers**.
