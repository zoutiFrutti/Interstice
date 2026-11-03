# LA FAILLE NOIRE × INTERSTICE — R6-GRA

## Remplacement des logos, intégration technique candidate et arbitrage graphique

**Date :** 3 novembre 2026. **Responsables concernés :** La Graphiste, La Développeuse, L'Anarchitecte, La Relieuse.  
**Statut :** CANDIDAT SUR BRANCHE ISOLÉE — AUCUNE FUSION, AUCUNE PUBLICATION, AUCUN DÉPLOIEMENT.  
**Branche R6 :** `design/r6-remplacement-logos-officiels-candidat-20261103`.  
**Point de départ :** PR #141, branche `integration/r4-convergence-relieuse-20261102`, HEAD `9f733122c7196622d31e7996d1d0b4eea987a14d`.  
**Précédents :** #137 (prototypes SVG R4), #141 (convergence), #144 (audit R5 et décision de Zout sur les sources).

### 1. Trois originaux de Zout : octets exacts, contrôle de provenance

| Original nommé par Zout | Chemin conservé sur R6 | SHA-256 bytes attendu et vérifié | Git blob SHA |
|---|---|---|---|
| `logo_faille_noire_vectorise(2).svg` | `assets/identite/r6/sources/logo-faille-noire-zout-original.svg` | `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` | `72695015804e76abc0f61369ab0da7ea540ba1a2` |
| `interstice_retrace_vectoriel(1).svg` | `assets/identite/r6/sources/interstice-retrace-zout-original.svg` | `b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef` | `43598c91cf69e0144497672881ba7a2be3eb081b` |
| `interstice_logo_fidele(1).svg` | `assets/identite/r6/sources/interstice-reference-visuelle-zout-original.svg` | `659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6` | `a8646e604fd088cb6ded5fde0ec5b77b790f9f2d` |

Le troisième original est un **JPEG encapsulé en SVG** : référence visuelle uniquement, pas une version vectorielle de production. Les fichiers de Zout ont été importés par blob GitHub avec une empreinte Git blob conforme aux octets locaux, puis inscrits sur la branche R6. **Aucune reconstruction à partir d'une capture.**

### 2. Fichiers actifs remplacés, mais uniquement sur R6

- `assets/logo-faille-noire.svg` = **copie exacte** du premier original (blob Git `72695015804e76abc0f61369ab0da7ea540ba1a2`).
- `assets/logo-interstice.svg` = **candidat R6 harmonisé** (blob Git `dfce62b9fc3a064c2a22c1bad047e200f538f8b4`, SHA-256 `198cb3691ea13ea2e79b59f313ade9b4db84719e53e37ed6dd87395325101b43`).
- `assets/identite/r6/candidats/interstice-base-commune-r6.svg` = copie exacte de l'actif Interstice candidat.

**Construction de l'Interstice R6 :** reproduire **octet pour octet** les éléments de dessin de Faille noire (`rect` et ses quatre `path` de 665×665), uniquement remplacer le titre, ajouter une description d'accessibilité et ajouter en fin d'image le groupe de **30 cercles** `noeuds-cercles` issu, **octet pour octet**, du SVG Interstice retracé de Zout. Aucun raster, aucune photo, aucun script, aucune autre esthétique fabriquée. Le point majeur du groupe source est à `(350,377)` avec rayon `33` ; son halo et les cercles secondaires font partie du groupe.

**Réserve artistique explicite :** le rendu Interstice ainsi obtenu est *moins dense en rouge* que les deux représentations Interstice fournies. Le groupe ajouté ne recolore pas les ramifications comme le `interstice_retrace_vectoriel(1).svg`. Cette divergence relève **d'un arbitrage visuel de Zout** : conserver une base absolument identique ou autoriser l'ajout d'une couche de propagation rouge issue de l'original, à condition qu'elle ne dénature pas le logo Faille noire. Il serait trompeur de présenter l'Interstice R6 comme définitivement fidèle sans ce choix. **Ne pas déclarer Interstice validé.**

### 3. Archives et retour arrière

| État | Chemin | Git blob |
|---|---|---|
| Ancienne Faille noire | `assets/archives/logo-faille-noire-pre-r6.svg` | `c5d545a762e0ae205b235cea6d17e2ec51d2eff7` |
| Ancien Interstice | `assets/archives/logo-interstice-pre-r6.svg` | `7c863aa239462c82b5a5dbcf26e5981b9131b0e8` |

Les archives R4 antérieures restent également intactes. **Rollback simple** : fermer R6 sans fusion, aucune production touchée. **Rollback de la branche** : rétablir les deux actifs depuis les blobs d'archives et les deux références initiales ; revenir au commit de convergence `9f733122c7196622d31e7996d1d0b4eea987a14d`. Aucun rollback de production requis.

### 4. Références du site et navigation immersive

Les pages `index.html`, `wiki.html`, `bibliotheque.html`, `atlas.html`, `participer.html`, `integration-graphique/index.html`, les CSS et la page `design-system/faille-navigation-interactive.html` utilisent les chemins canoniques `assets/logo-*.svg` ou leurs formes relatives. Le remplacement de fichiers **réutilise donc les liens existants** sans modifier les contenus éditoriaux ou les pages Wiki. Les copies sous `apercu-graphiste-35/` restent des maquettes historiques et ne sont pas recâblées.

Les cinq nœuds du prototype immersif ont été **repositionnés à partir des coordonnées réelles des cercles** de l'Interstice source R6, après conversion du viewBox 665×665 vers la carte 1000×1000 :

- Wiki : (258,203) → environ (388,305).
- Médiathèque : (498,261) → environ (749,392).
- Atlas : (233,450) → environ (350,677).
- Parcours : (461,426) → environ (693,641).
- Entraide : (333,593) → environ (501,892).
- Point principal : (350,377) → environ (526,567), employé comme centre d'entrée.

**Attention** : l'attribution de ces points aux cinq rubriques reste une **navigation documentaire candidate**. Elle ne prouve aucune relation historique, coopération ou partenariat. Les chemins rouges de connexion demeurent des chemins schématiques ; les gestes tactile et clavier doivent rester accessibles. Aucune architecture ou doctrine nouvelle.

L'inventaire automatique `scripts/r6-inventaire-identite.mjs` recense tous les fichiers HTML/CSS/JS/JSON et leurs références logo, icône, SVG et manifest ; il produit `artifacts/r6-identite/inventaire-references.json`. **Aucun fichier PWA manifest n'avait été identifié dans l'arbre source R4 de départ ; ne pas inventer de déploiement d'icônes PWA.** Les favicons directement liés au chemin canonique Interstice se mettent à jour dans la candidate.

### 5. Comparaison et contrôle visuel

- **Comparateur candidat** : `design-system/comparaison-identite-r6.html`, six visuels (actifs R6, deux originaux Interstice, anciens actifs). Il est statique, non indexable, utilisable à différentes tailles, avec alternatives textuelles et réserve artistique visible.
- **Test automatisé** : `tests/r6-identite-remplacement.browser.test.mjs` ; vérifie les SHA-256, l'égalité des anciens actifs et archives, l'exactitude de la base harmonisée, le chargement SVG, 320/390/768/1024/1280/1920px, affichages 32/48/64/96/192/390/665px, alternatives textuelles, absence de script, mode réduction de mouvement, sans JS et A4.
- **Workflow** : `.github/workflows/r6-identite-remplacement.yml`, génère des captures et un PDF dans l'artefact `r6-identite-captures-320-1920-svgs-32-665-a4`.
- Les tests navigateur simulés ne remplacent **pas** les essais sur téléphone/tablette physiques, les lecteurs d'écran ni la vérification réelle du zoom à 400 % sans perte d'information. Ne pas les annoncer comme accomplis.

### 6. Critères d'arbitrage et responsabilités

**Graphiste** : confirmer à Zout le rendu de l'Interstice harmonisé vs l'Interstice retracé, corriger les seules différences visuelles autorisées. **Développeuse** : vérifier le parcours/zoom/pinch/alt et l'éventuel impact du poids des SVG sur téléphone physique. **Anarchitecte** : examiner la construction à base commune (quatre tracés identiques + surcouche nodale) et le statut canonique des originaux ; l'Interstice initial ne partageait pas ces chemins à l'identique. **Relieuse** : vérifier la CI sur HEAD, les conflits des PR #137/#141/#144, l'inventaire, la traçabilité, puis soumettre les **deux octets finaux et leurs SHA** à Zout pour visa.

**Décisions réservées à Zout :** (1) valider ou demander correction du SVG Interstice R6 harmonisé ; (2) autoriser éventuellement la fusion GitHub ; (3) autoriser séparément déploiement/publication. Aucune de ces trois décisions n'est déduite de l'autorisation de travailler en branche.

> **État R6 : travail technique candidat réalisé ; conformité artistique et activation finale restent conditionnelles.**
