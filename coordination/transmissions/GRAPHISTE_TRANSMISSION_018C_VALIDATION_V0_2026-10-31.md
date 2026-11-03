# LA FAILLE NOIRE × INTERSTICE
## Transmission 018-C · La Graphiste → La Relieuse · 31 octobre 2026

**Verdict : PARCOURS TECHNIQUEMENT OPÉRATIONNEL EN CHROMIUM, mais PREMIER ÉCRAN NON VALIDÉ GRAPHIQUEMENT.** Ce document n'est ni une validation de publication ni un avis sur le fond des articles.

### 1. Version exacte, méthode et séparation des branches

- **Source intégrée contrôlée :** `integration/v0-018a-candidate-2026-10-30`, HEAD **`69fcd4701cefeb884fdd46fc14a6ad5bbae6108a`**. Vérification du Git ref `refs/heads/integration/v0-018a-candidate-2026-10-30` et du dernier commit.
- **CI source :** [run #41128062335](https://github.com/zoutiFrutti/Interstice/actions/runs/41128062335), statut **completed / success**, jobs Node et Chromium réussis, **58 tests Node + 19 Chromium** (selon leur rapport).
- **Réutilisation :** PR #35 pour l'identité, `style.css` et articles présentés ; PR #41 pour la seule carte/liste et le moteur ; PR #44 pour les deux articles. Les versions graphiques HTML des deux articles sont les blobs déjà validés `f601d706cdd154ebbc28589ed921befe5531b487` et `88025ed960e4bd7f9faf9088bb81b49b6524546b`. Aucun texte de la Lectrice n'a été modifié.
- **Contre-test propre à cet atelier :** branche indépendante `audit/graphiste-018c-v0-2026-10-31`, créée **à partir du SHA source exact**. Seuls fichiers ajoutés : test ciblé `tests/graphiste-018c-audit.mjs`, workflow `.github/workflows/graphiste-018c.yml`, présent rapport. La branche candidate intégrée est restée inchangée.
- **Contre-test réussi :** [run #41175965649](https://github.com/zoutiFrutti/Interstice/actions/runs/41175965649), **completed / success** au commit de QA `81e337d9d2861e98d9da6742a188a0035b5309bb` ; 30 états de page mesurés à **320, 390 et 1280 px**, aucune erreur JavaScript, aucune requête POST ou externe dans le parcours testé. Gestes `tap()` et clavier exécutés dans Chromium ; aucun Android matériel ni TalkBack.
- Le premier run exploratoire [#41175886938](https://github.com/zoutiFrutti/Interstice/actions/runs/41175886938) a mesuré le défaut du premier écran puis s'est arrêté sur une course de navigation du **script QA**, corrigée par attente explicite des pages avant mesure. Ce premier échec **ne prouve pas un dysfonctionnement produit**.

### 2. Éléments validés sur le candidat intégré

| Zone | Vérification | Statut |
|---|---|---|
| Identité et style | Même direction graphique noir / rouge / ivoire, typographies existantes, pas de nouvelle charte ni copie du moteur | VALIDÉ côté fichiers |
| Premier parcours | Accueil → Découvrir → simulation d'un besoin fictif → filtre Gaillac → carte/liste → fiche → retour → Participer → Wiki et deux articles | VALIDÉ sous Chromium simulé |
| 11 fiches | Bandeau `PROTOTYPE FICTIF`, 7 « communs », 4 « possibles », quatre types, fiches sans contacts réels | VALIDÉ côté contenu et tests |
| Carte | Alternative en liste par défaut, choix des communes, zoom et vues ; `#map-scroll-region` reçoit `tabindex="0"`, `aria-describedby="map-scroll-hint"`, flèches gauche/droite ; texte explicatif présent | VALIDÉ sous Chromium |
| Mesures carte | À 320 px, zone cartographique `scrollWidth 774` / `clientWidth 274` ; à 390 px, `774 / 332` ; le test d'appui sur flèche déplace effectivement `scrollLeft` | VALIDÉ (pas Android) |
| Fiches et filtres | Filtre Gaillac = 3 fiches ; filtre Réparation = 1 ; détail « Les vélos en partage », retour avec commune conservée | VALIDÉ sous Chromium |
| Wiki | Index et ouverture des deux articles, mentions « À relire par un être humain », textes et sommaires issus de PR35 / PR44 préservés | VALIDÉ dans le périmètre du parcours |
| Débordements | **0 débordement horizontal global** sur 30 états du parcours à 320/390/1280 px | VALIDÉ sous Chromium |
| Contraste de quatre couples principaux | Texte/fond V0 15,09:1 ; avertissement accueil 12,62:1 ; avertissement Découverte 12,59:1 ; CTA principal blanc/rouge 7,19:1 | VALIDÉ pour ces couples uniquement, pas audit exhaustif |
| Taille des actions | Contrôles structurés boutons/cartes et choix carto conservés ; des **liens textuels intégrés dans des paragraphes** restent en dessous de 44 px de hauteur, ce qui n'établit pas en soi une non-conformité grâce à l'exception liens en ligne | VALIDÉ pour le parcours ; vigilance ergonomique |

### 3. Défauts nouveaux réellement constatés

#### A. P1 — La première action d'accueil n'est pas visible sans défilement

Mesures en viewport Chromium de **hauteur 850 px**, première visite, scroll initial = 0 :

| Largeur | Hauteur du bandeau `#etats-demo` | Haut du H1 | Haut du premier CTA | Bas du dernier CTA |
|---|---:|---:|---:|---:|
| **320 px** | **739 px** | **1000 px** | **1372 px** | **1607 px** |
| **390 px** | **590 px** | **802 px** | **1100 px** | **1309 px** |
| **1280 px** | **338 px** | **725 px** | **1107 px** | **1166 px** |

Conséquence : l'explication administrative de la candidate arrive avant le projet et les choix. À 320 px, le H1 commence **150 px sous le bord inférieur** du viewport ; même à 1280×850 px, les CTA sont sous la ligne de flottaison. Cela n'annule pas les tests fonctionnels, mais c'est un **défaut réel de premier usage**, non repéré par le test de simple absence de débordement.

**Correctif minimal proposé, non appliqué sans coordination Développeuse/Relieuse :** dans `index.html`, conserver une **ligne visible et non ambiguë « Démonstration fictive — aucune initiative réelle »** avant le H1, transférer la liste détaillée des trois statuts après le bloc hero (ou dans une section explicative clairement annoncée). Ne pas cacher les statuts ni modifier le texte politique du manifeste. Ajuster localement `style.css` (`.candidate-states` et espacements), sans refaire la typographie ni les couleurs.

#### B. P1/P2 — Page Découverte : avertissement trop haut avant l'action

| Largeur | Hauteur `.demo-notice` | Haut du H1 Découverte |
|---|---:|---:|
| 320 px | **477 px** | **743 px** |
| 390 px | **386 px** | **600 px** |
| 1280 px | **170 px** | **381 px** |

Au format compact le titre arrive au bas du premier écran et les champs/action sont plus loin. **Correctif proposé :** condenser la notice introductive dans `decouvrir-initiatives.html` (mention fictive très visible en tête, détails après l'accroche et avant les premières fiches) et ne toucher à `initiatives.css` ou `cartes-compat.css` que si un ajustement d'espacement est nécessaire. Conserver les restrictions « sans GPS », « sans envoi », « sans partenariat réel ».

#### C. Point de vigilance sans défaut de fonctionnement démontré

La page `participer.html` renvoie vers `proposer-article.html`, qui charge une bibliothèque Supabase via CDN externe. Cette destination n'était **pas dans le chemin testé** (Participation → Wiki). L'essai confirme l'absence de réseau externe dans **le parcours contrôlé**, pas dans tous les liens annexes. À vérifier avec la Développeuse et la Juriste avant toute diffusion de l'ensemble du site. Pas de conclusion sur une soumission réelle.

### 4. Captures et limites des preuves

- **Artefact CI source déjà existant :** `interstice-v0-018a-candidate-captures` (run [41128062335](https://github.com/zoutiFrutti/Interstice/actions/runs/41128062335)).
- **Nouvelles captures nécessaires réellement générées en Chromium :** artefact `graphiste-018c-parcours-320-390-1280` dans le [run #41175965649](https://github.com/zoutiFrutti/Interstice/actions/runs/41175965649), [accès direct aux artefacts du run](https://github.com/zoutiFrutti/Interstice/actions/runs/41175965649). Il contient **33 PNG (11 vues × 3 largeurs)** : premier écran accueil, page accueil entière, arrivée Découverte, résultat de simulation, carte Gaillac, liste, fiche, Participation, index Wiki et les deux articles, plus `graphiste-018c-report.json` avec mesures. Les fichiers sont attestés par le script terminé et l'artefact GitHub ; **ils n'ont pas été revus manuellement pixel par pixel dans cette conversation**.
- Ces prises de vue sont des **captures Playwright**, pas un appareil Android réel. **Android physique non accessible à cet atelier, test tactile physique NON EFFECTUÉ, TalkBack NON EFFECTUÉ.** Aucune validation de rotation, tailles système Android, Safari ou Firefox ; pas de publication ni collecte de données réelle.
- Un contrôle humain sur le Crosscall Stellar X5 (premier écran, scroll, actions, régions carto, retour, taille de police 125–200 %, TalkBack) est toujours nécessaire pour une validation d'accessibilité complète.

### 5. Verdict pour La Relieuse

**V0 techniquement utilisable en démonstration encadrée**, avec identité cohérente, parcours clavier/tactile simulé, liste de secours, avertissements fictifs clairs et articles préservés. **Première visite non validée graphiquement** : la quantité de précautions légitimes placées avant l'action masque le projet et les CTA à toutes les largeurs testées (hauteur 850 px).

**Ordre recommandé :** (1) correction ciblée de hiérarchie sur accueil et Découverte, en accord avec la Développeuse et La Relieuse ; (2) re-tester uniquement le premier écran 320/390/1280 et vérifier que le statut fictif reste immédiatement lisible ; (3) revue humaine réelle sur Android/TalkBack ; (4) arbitrage éditorial des deux textes par La Lectrice. Aucun autre redesign, aucun merge automatique.

**SHA de la V0 auditée : `69fcd4701cefeb884fdd46fc14a6ad5bbae6108a`.** Le SHA de la branche QA n'est **pas** un nouveau candidat fonctionnel. Déposer ce rapport et une PR de QA ne constitue pas à soi seul un accusé de réception dans une autre conversation.
