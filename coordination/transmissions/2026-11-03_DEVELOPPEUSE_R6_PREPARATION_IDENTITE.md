# R6-DEV — Préparation du remplacement des logos (BLOQUÉE SOURCES)

Base de branche : `integration/r4-convergence-relieuse-20261102` au commit `9f733122c7196622d31e7996d1d0b4eea987a14d`.

## Sources imposées, non encore récupérées
- `logo_faille_noire_vectorise(2).svg` SHA-256 attendu : `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6`.
- `interstice_retrace_vectoriel(1).svg` SHA-256 attendu : `b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef`.
- `interstice_logo_fidele(1).svg` SHA-256 attendu : `659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6` ; contient un JPEG intégré, référence visuelle uniquement.

Aucun de ces trois originaux n'a été récupéré et vérifié dans ce passage. Ne pas fabriquer de substitut. Aucun fichier actif remplacé.

## Archives créées
- `assets/archives/r6-pre-remplacement-logo-faille-noire.svg` : copie exacte de `assets/logo-faille-noire.svg`, blob Git `c5d545a762e0ae205b235cea6d17e2ec51d2eff7`.
- `assets/archives/r6-pre-remplacement-logo-interstice.svg` : copie exacte de `assets/logo-interstice.svg`, blob Git `7c863aa239462c82b5a5dbcf26e5981b9131b0e8`.

Les SHA de blob Git ne sont pas des SHA-256. Les empreintes SHA-256 des sources archivées restent à calculer à partir des octets.

## Inventaire initial confirmé
- `index.html` : favicon et affichage de `logo-interstice.svg`.
- `design-system/faille-navigation-interactive.html` : image `logo-interstice.svg` dans la carte SVG, nœuds interactifs et routes superposés.
- `assets/faille-navigation.js` : géométrie des nœuds codée en coordonnées 1000 × 1000, à réaligner sur la géométrie Interstice validée.
- `assets/faille-navigation.css` : dimensions et gestes tactiles de la carte, à contrôler sans étirement.
- Autres pages, CSS, PWA, gabarits, scripts : inventaire exhaustif non encore démontré.

## Portes de validation
1. Obtenir les trois fichiers originaux et vérifier les SHA-256 attendus.
2. Comparer vectoriel Interstice à la base Faille noire ; arbitrage Graphiste/Zout en cas de divergence.
3. Archiver les originaux immuables, produire exports candidats et contrôler dimensions, proportions, microfissures et nœuds.
4. Remplacer les actifs uniquement sur cette branche, scanner toutes les références et adapter les nœuds.
5. Tests Chromium aux 6 largeurs, zoom 400 %, clavier, sans JS, reduced-motion, captures ; appareils physiques et lecteurs d'écran explicitement non testés si absents.
6. Vérifier CI sur le HEAD exact, puis transmettre à La Relieuse pour arbitrage, sans fusion ni déploiement.

## Rollback
Fermer la PR sans fusion. Si remplacement ultérieur, restaurer les fichiers depuis `assets/archives/r6-pre-remplacement-*.svg` ; les actifs de la convergence restent inchangés à ce stade.
