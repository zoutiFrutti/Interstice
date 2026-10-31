# LA FAILLE NOIRE × INTERSTICE — Graphiste, cycle 5
**31 octobre 2026. Trois passes réelles, branche candidate non fusionnée, zéro publication.**

## Passe 1 — Contrat de réconciliation
Contrat `design-system/CONTRAT_CYCLE5_GRAPHISTE_2026-10-31.md`. Base PR #59 au SHA `755588993e58e3a97d60d27be4d99f387a81316c` ; PR #57 au SHA `2d8bb7960d7e2a4f1f3428841cbcc705a0962877` ; PR #50 au SHA `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb`. Compatibilité en dérivation de branche, aucune modification des trois branches sources ni des pages corrigées de La Lectrice. Manifeste V2.6, charte des communs V0.8, charte éditoriale V0.1 : candidats, non adoptés collectivement ; liens vers fichiers de PR #58 et blobs exacts consignés au contrat.

## Passe 2 — Composants utilisables
Nouveaux fichiers : `assets/graphiste-cycle5-profils.css`, `design-system/maquette-cycle5-profils-reels.html`. Dix profils : manifeste, charte, biographie, lutte, chronologie, enquête, source, contradiction, résultat, exercice. CSS strictement opt-in `.interstice-fiche.graphiste-c5`, sans remplacement de palette ou moteur. Exemples fondés sur des références existantes (BIO-009, affiches 331/342/373, Sivens, sources Wiki, textes candidats), mais **la maquette n'est pas l'intégration d'articles entiers validés**. Les résultats documentaires séparent objectif, acte, résultat matériel et héritage. Aucune statistique, photographie, archive visuelle inventée. Identités sensibles absentes ; seuls des noms historiques déjà publics sont employés, sans adresses ou témoins privés.

## Passe 3 — Contrôles et limites
Test dédié `tests/graphiste-cycle5-2026-10-31.test.mjs`, workflow `.github/workflows/graphiste-cycle5-2026-10-31.yml` : Chromium 320/390/1280 ; H1 unique ; 10 blocs source, objection, incertitude ; liens locaux HTTP 200 ; ancres, focus 3px et activation Entrée ; texte courant ≥18px ; contraste calculé pour texte principal vs fond ; zoom par racine CSS simulé à 200 % à 320px ; captures PNG et export A4. **Lire les logs et conclusion GitHub Actions pour établir le succès effectif.** La présence d'un test n'est pas sa réussite.

**Non testés physiquement** : TalkBack/VoiceOver/NVDA, accessibilité avec technologie d'assistance réelle, consultation sur smartphone matériel, zoom navigateur/OS réel, impression papier et lecture ergonomique par des personnes participantes. Non couverts : audit WCAG exhaustif (tous contrastes/états), vérification de chaque lien externe ou des licences, vérité historique des sources, RGPD de la plateforme principale. Le `noindex` de la maquette n'est pas une protection de données privées : ne jamais y importer des brouillons nominatifs ni des informations non autorisées.

## Point de reprise
La Développeuse : intégrer uniquement après visa par identifiant/blob, préserver corrections éditoriales et retester le SHA candidat final. L'Anarchitecte : vérifier routes/taxonomie et accessibilité des fiches autorisées. La Relieuse : réviser dates, sources, obligations, droits, états et objections avant soumission à Zout. Aucune autorité d'assemblée imaginaire, aucune publication automatique.
