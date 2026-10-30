# Transmission 010 du Relieur — mise à niveau de l'accueil et de la typographie Interstice
**30 octobre 2026 · Atelier Graphiste et Intégrateur · Priorité : lancement public V0**  
**État : changements committés sur PR #35, Chromium testé, non fusionné, non publié.**

## 1. Demande et décision

Retour utilisateur mobile : ancien H1 trop abstrait, corps et boutons trop petits, accueil trop dense. Décision : remplacer l'accroche par **« Et si on essayait autre chose ? »**, montrer immédiatement ce qu'est Interstice puis proposer deux actions lisibles. Le slogan **« Des idées publiques. Des personnes protégées. »** a été retiré du titre principal ; le principe éthique « Rendre visibles les idées, jamais exposer les personnes » reste dans la section des engagements. Le texte politique du manifeste et les données de soumission sont préservés.

## 2. Modifications réellement effectuées

- **`index.html` :** un seul `h1` avec la nouvelle phrase, deux paragraphes d'introduction spécifiés par la transmission, CTA « Découvrir ce qui existe » et « Participer » en premier écran, section d'orientation (bibliothèque, Wiki, propositions), section autonome de La Faille noire et du manifeste V2.5 (non adopté collectivement), puis bibliothèque, Wiki, histoires, propositions, formulaire et participation. Toutes les destinations existantes sont conservées. Le `<form id="form">` et le chargement `script.js` sont strictement identiques au fichier de départ.
- **`style.css` :** hiérarchie globale des titres, corps et champs lisibles sur smartphone, commandes principales d'au moins 52 px et texte des actions à partir de 18 px, plus d'espace et alignement mobile. À 390 px : H1 rendu **41,73 px**, introduction **21 px**, corps **18 px**. À 1280 px : H1 **76 px**, intro **24 px**, corps **19 px**. Styles d'impression du manifeste renforcés et navigation clavier visible préservée.
- **`assets/fonts/` :** quatre fichiers WOFF2 et deux licences SIL OFL repris **avec leurs blob SHA inchangés** de la PR #22 (Barlow Condensed et Atkinson Hyperlegible Next, latin et latin étendu). Les logos validés sont conservés, aucune illustration redessinée.
- **`manifeste.html` V2.1 :** styles de son ancien H1 et des liens du sommaire corrigés après échec de contraste. Vérification automatique de l'identité du HTML hors styles. La V2.5 reste **non adoptée collectivement** ; aucune rédaction politique modifiée.
- **`tests/lancement-v0-smoke.mjs` :** évolution du test V0 vers 11 pages à 390 et 1280 px, plus 11 contrôles de chemins et d'ancres.

Sur la capture Chromium à 390 px, le logo apparaissait deux fois, ce qui repoussait le H1. Le second logo est maintenant **masqué seulement sur l'accueil mobile** ; celui de l'en-tête et la charte graphique restent visibles.

## 3. Résultats reproduits et captures

**Exécution du code final :** GitHub Actions [run #41026231076](https://github.com/zoutiFrutti/Interstice/actions/runs/41026231076) : **33/33 contrôles réussis** sur les fichiers applicatifs, 22 rendus Chromium sur 11 pages + 11 contrôles statiques de chemins/ancres. Les 11 pages :
- accueil ;
- manifeste V2.5 et archive V2.1 ;
- bibliothèque ;
- Wiki ;
- participation ;
- formulaire d'article ;
- deux articles Wiki représentatifs ;
- dossier « Squats et lieux autonomes » ;
- charte des contributions.

**Mesures observées :** H1 de l'accueil à 390 px 41,73 px, corps 18 px, introduction 21 px, CTA primaires 56 et 59 px au contrôle précédent ; contrastes des CTA mesurés à **7,19:1** sur la capture précédente. Les deux familles WOFF2 sont réellement chargées, l'unicité des IDs, l'absence de débordement horizontal, les images, les erreurs JavaScript détectables, les hauteurs de CTA et les contrastes sont vérifiés. La dernière capture 390 px a été examinée : phrase et boutons apparaissent avant le début de la section « Des pistes concrètes ».

Les artefacts de captures sont attachés à l'exécution GitHub Actions sous `interstice-v0-captures`, notamment `accueil-premier-ecran-mobile.png`, `accueil-premier-ecran-desktop.png`, `index-mobile.png`, `index-desktop.png` et `report.json`. Aucun fichier raster généré n'a été commité au site.

**Historique d'un défaut corrigé :** premier cycle étendu #41025612768 : 31/33 tests (2 échecs sur V2.1 à cause du sommaire et du H1). Après correction CSS : #41025803102, 33/33. Après dernier ajustement mobile : #41026231076, 33/33.

## 4. Coordination avec le dépôt et la PR #22

L'intégration a été effectuée **sur la PR #35 existante**, sans création d'une PR concurrente. Les changements récents de `main` ne touchaient directement que `coordination/JOURNAL_COMMUN.md`. Le journal de `main` a été conservé intégralement puis les notes de la branche ajoutées. Un commit de rapprochement **à deux parents** (branche PR #35 + dernier `main` connu) a permis de mettre la branche à jour sans forcer de réécriture et sans écraser les autres ateliers. Comparaison ultérieure à confirmer si `main` avance encore.

**Attention avant de fusionner #22 :** la typographie et ses six fichiers ont été repris dans #35, leur fusion ultérieure ne doit pas écraser les tailles et la hiérarchie modifiées ici. Les autres illustrations de #22 peuvent être ajoutées dans une passe compatible après le premier lancement ; elles ne bloquent pas la lisibilité V0. La PR #28 concerne la modération et **n'est pas un prérequis** à l'affichage des pages publiques V0.

## 5. Ce qui reste bloquant avant la première communication publique

- Relecture et accord explicites sur le texte d'accueil, l'architecture de premier écran et le statut « non adopté » de la V2.5 ; responsables éditoriaux/Relieur/Communications.
- Vérification finale de la PR #35 sur un **véritable smartphone Android**, y compris navigation au doigt, scroll et formulaire sans envoi de données personnelles. Les tests ici sont Chromium en CI, pas une session physique.
- Contrôle de la chaîne de déploiement **après** fusion, puis accès réel à l'URL publique, non encore vérifiés sur cette refonte.
- Relire les éventuels changements de `main` et les versions de PR #22 avant de fusionner. La conformité du code visuel ne vaut pas autorisation de publication.

## 6. Reportable après la V0

- Images additionnelles et panneaux illustrés de la PR #22 sur toutes les pages.
- Harmonisation exhaustive des fiches Wiki secondaires et design system complet de la publication structurée.
- Optimisation des captures d'impression, états animés et micro-interactions.
- Tests d'accessibilité manuelle approfondie (lecteurs d'écran/Firefox/Safari), sans minimiser leur importance mais sans confondre ces chantiers avec les corrections immédiatement demandées.

**Aucune permission, donnée Supabase, soumission, statut éditorial, texte de manifeste ou décision de modération n'a été changé.**
