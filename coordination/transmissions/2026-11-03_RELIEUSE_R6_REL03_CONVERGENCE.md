# R6-REL-03 — Registre de convergence des identités officielles

Date : 2026-11-03. Statut : validation artistique acquise par Zout ; validation technique et autorisation de fusion non acquises.

## Décisions artistiques

- La Faille noire : `assets/identite/r6/sources/logo-faille-noire-zout-original.svg`, original `logo_faille_noire_vectorise(2).svg`, SHA-256 de référence `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6`. Ne pas redessiner.
- Interstice : variante approuvée `assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg` (PR #149). Recalculer SHA-256 des octets exacts avant promotion ; Git blob observé `1e19320bcedb445175427dba92b229b7ee10d651` (ceci n'est pas un SHA-256).

## Dépendances Git vérifiées

- PR #147 branche `design/r6-remplacement-logos-officiels-candidat-20261103` ; HEAD observé `d90654f7572c0e0806c61cd6703c0d3092b26ba2`.
- PR #149 branche `design/r6-gra02-ramifications-compare-20261103` ; comparaison : ahead 2, behind 0 par rapport à #147, merge-base identique au HEAD #147 ; ajouts : SVG candidat et comparateur HTML.
- Sur la branche #149, `assets/logo-interstice.svg` conserve encore le candidat de #147 (Git blob `dfce62b9fc3a064c2a22c1bad047e200f538f8b4`). La variante artistique n'est donc PAS active.

## Travaux à terminer

1. Recalculer les SHA-256 indépendants des deux SVG retenus, vérifier les octets de l'original Faille noire et la base graphique commune.
2. Promouvoir la variante Interstice approuvée dans `assets/logo-interstice.svg` sur une branche candidate, sans modifier la source ni l'original Faille noire.
3. Inventorier HTML/CSS/navigation/Wiki/Atlas/Médiathèque/favicons/scripts/tests et vérifier les liens, tailles, transparence, rendu et navigation immersive.
4. Exécuter les tests et GitHub Actions sur le HEAD exact après modification ; documenter les limites des tests physiques, lecteurs d'écran, pincement et zoom réel 400 %.
5. Vérifier archives, chemins canoniques, provenance, rollback et interactions avec PR #143/#146.
6. Préparer dossier avant/après, captures, SHA et verdict technique pour Zout.

## Garde-fous

Aucune fusion, publication, activation production, suppression d'archives ou décision de Zout présumée. Verdict actuel : **CORRECTIONS TECHNIQUES REQUISES** jusqu'à promotion du SVG et contrôles du HEAD final.
