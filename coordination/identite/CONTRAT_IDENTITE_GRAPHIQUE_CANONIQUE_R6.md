# CONTRAT IDENTITÉ GRAPHIQUE CANONIQUE R6 — certification R6-ANA-03
**03/11/2026 · P0 · branche candidate `atelier/anarchitecte-r6-certification-20261103` · sources de référence PR #147, #149, #150 · aucune transformation artistique.**

## Statut de la décision
Zout a validé artistiquement la variante à ramifications rouges de la PR #149. **Ne pas rouvrir le débat esthétique.** Le chemin actif candidat dans la PR #150 est `assets/logo-interstice.svg` : copie exacte du candidat GRA02. Il ne faut plus comparer l'actif à l'ancien candidat Interstice R6 de la PR #147 comme s'il s'agissait du logo définitif. Les références ici désignent les fichiers **sur les branches R6 candidates** ; ni `main` ni un déploiement ne sont déclarés modifiés.

## Inventaire canonique et provenance
| Fonction | Chemin sur branche candidate | Git blob SHA | SHA-256 |
|---|---|---|---|
| Original Faille Zout, immuable | `assets/identite/r6/sources/logo-faille-noire-zout-original.svg` | `72695015804e76abc0f61369ab0da7ea540ba1a2` | `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` |
| Original Interstice vectoriel Zout, immuable | `assets/identite/r6/sources/interstice-retrace-zout-original.svg` | `43598c91cf69e0144497672881ba7a2be3eb081b` | `b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef` |
| Référence visuelle, JPEG encapsulé en SVG | `assets/identite/r6/sources/interstice-reference-visuelle-zout-original.svg` | `a8646e604fd088cb6ded5fde0ec5b77b790f9f2d` | `659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6` |
| Actif candidat Faille | `assets/logo-faille-noire.svg` | `72695015804e76abc0f61369ab0da7ea540ba1a2` | égal à l'original Faille |
| Actif candidat Interstice **approuvé artistiquement** | `assets/logo-interstice.svg` | `1e19320bcedb445175427dba92b229b7ee10d651` | à mesurer par test sur checkout exact |
| Candidat GRA02 validé | `assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg` | `1e19320bcedb445175427dba92b229b7ee10d651` | identique à l'actif candidat PR #150 |
| Ancien candidat sans les trois groupes rouges | `assets/identite/r6/candidats/interstice-base-commune-r6.svg` | `dfce62b9fc3a064c2a22c1bad047e200f538f8b4` | `198cb3691ea13ea2e79b59f313ade9b4db84719e53e37ed6dd87395325101b43` |
| Archives Faille/Interstice pré-R6 | `assets/archives/logo-faille-noire-pre-r6.svg`, `assets/archives/logo-interstice-pre-r6.svg` | `c5d545a762e0ae205b235cea6d17e2ec51d2eff7`, `7c863aa239462c82b5a5dbcf26e5981b9131b0e8` | à relever dans manifeste automatique |

Les archives pré-R4 et candidats R4 restent historiques, **non actifs**. Git blob SHA (empreinte Git) et SHA-256 brut (empreinte des octets) ne sont pas interchangeables. Les droits d'exploitation et redistribution ne sont pas déduits d'une empreinte : conserver le statut **droits à documenter** et les validations explicites de Zout.

## Géométrie : identité stricte versus superposition
Repère `viewBox="0 0 665 665"`. Base Faille = **un rect et quatre path**, avec données et attributs strictement identiques dans les deux SVG candidats. Interstice ajoute `g#noeuds-cercles` (30 éléments `circle`, point majeur 350,377, rayon 33) et, dans la variante GRA02 approuvée, les groupes rouges `halo-rouge`, `faille-et-ramifications`, `eclats-rouges` sous `g#r6-gra02-ramifications-originales`. Ces groupes sont des **surcouches** : ils peuvent changer les pixels visibles mais ne doivent ni remplacer ni modifier les cinq éléments de base Faille. Les groupes doivent être comparés par contenu et provenance à l'original Interstice retracé, sans prétendre qu'une superposition est une identité de rendu.

**Invariant certifiable** : base géométrique égale, éléments rouges supplémentaires isolés, source Faille intacte. **Ne pas inférer** d'une égalité des chemins que l'image Interstice est visuellement identique à Faille : la surcouche rouge est précisément voulue.

## Dépendances Git vérifiées
- PR #147 : HEAD `d90654f7572c0e0806c61cd6703c0d3092b26ba2`, base PR #141 `9f733122c7196622d31e7996d1d0b4eea987a14d`. Préserve les trois originaux, archives et base harmonisée.
- PR #149 : HEAD `b1d3b7773105c61843c1e7177315abb08da11114`, base **PR #147**, ajout du candidat GRA02 sans remplacement de l'actif.
- PR #150 : HEAD initial `9f1ade55741be5ba90912dbbe463b1a3c87dec59`, base **PR #149**, remplacement byte-for-byte de l'actif Interstice par GRA02. La branche de travail Anarchitecte descend de ce HEAD.
- La convergence R6 finale reste à identifier par La Relieuse au moment du choix de HEAD commun ; ne pas présumer que #147 ou #149 ont été fusionnées ni que la validation artistique autorise le déploiement.

## Contrôles et exports
Test candidat `tests/anarchitecte-r6-certification.test.mjs` : trois originaux SHA-256, égalité octet Faille, égalité octet Interstice/GRA02, comparaison stricte rect/path, présence des quatre groupes et des 30 cercles, point principal, exclusion de scripts/ressources externes. En complément : lister les références HTML/CSS/JS avec `scripts/r6-inventaire-identite.mjs`, contrôler les exports 32/48/64/96/192/390/665 et captures sur plusieurs fonds/écrans. Les tailles ne doivent pas produire de nouvelles sources artistiques ; elles sont des rendus du SVG actif inchangé. Les tests sur appareils physiques, lecteurs d'écran et zoom 400 % restent des vérifications distinctes. Aucun manifeste PWA ne doit être supposé.

## Procédure de restauration
1. **Avant fusion** : conserver PR #150 candidate non fusionnée ; retour immédiat par abandon de la branche candidate.
2. **Retour au candidat PR #147** : sur une branche de restauration dédiée, recopier `assets/identite/r6/candidats/interstice-base-commune-r6.svg` vers `assets/logo-interstice.svg` après décision explicite, puis vérifier son blob `dfce62b9...`.
3. **Retour pré-R6** : sur branche dédiée, restaurer les deux actifs depuis `assets/archives/logo-*-pre-r6.svg` (blobs ci-dessus) ou revenir au commit R4 `9f733122...`. Préserver les originaux et le candidat GRA02.
4. Réexécuter intégrité, inventaire des références, tests de navigation et comparaison visuelle ; consigner SHA/commit et décision. Aucun rollback de production exécuté ni autorisé ici.

**Réserves factuelles** : l'égalité de base ne valide pas à elle seule les exports aux différentes tailles ; la certification complète nécessite un test CI sur le HEAD exact de convergence. Aucune anomalie artistique signalée : choix déjà tranché par Zout.
