# La Graphiste — R1 reprise générale, 2026-11-02
**Branche candidate** `design/graphiste-r1-logo-carte-20261102`. Aucune fusion, publication, contact externe ou visa inventé.

## Courrier et lecture
R1-GRA lu, branche `coordination/reprise-generale-r1-20261102`, blob `79d72c7e8b2bb5fe121c41cd67048938a25fe8a4`. Documents 00/01/02 lus : blobs `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8`, `a9070cd99b775d169415e3c991074dced1c6ffab`, `4982d1d2501af5665729cc99400c5915e94a6eb0`. Zout a effectivement transmis ce courrier dans la conversation. Antérieurs C10 et PR #117/#119/#120/#121 repris, pas dupliqués. CI #120 `41438062668` success, CI #121 `41442449072` success, selon vérification GitHub.

## Action et versions
HTML `design-system/graphiste-r1-prototypes-abc.html`, commit `d8ba2c4287f336709d22656570f3f332d2fec7a3`, blob `c083b947f3beada17c4e05284b02074fdcb137b7`.
CSS `assets/graphiste-r1-prototypes.css`, commit `3fb6ab1f661bc8703536787d72c6406c54b4e38d`, blob `37d5d355c0592a141b8e4fc095a13e363aec043d`.
Logo officiel **réutilisé intact** : `assets/logo-faille-noire.svg`, blob `c5d545a762e0ae205b235cea6d17e2ec51d2eff7`. Bras additionnels de la variante = traits CSS décoratifs, **pas des relations historiquement vérifiées ni modification du logo officiel**. Quatre portes sur routes publiques existantes et index texte en permanence. Les trois premières directions de #121 restent intactes.
Prototype B : gabarit générique d'entraide mobile/impression sans conseil juridique, territoire/date/source à vérifier. Prototype C : notice culturelle **vierge**, aucune œuvre ou média incorporé, droits non vérifiés. Pas de duplication de notices déjà existantes.

## QA
`tests/graphiste-r1-prototypes.test.mjs`, commit `58b922ebb58cc0853eda181c686ca6d6101c1525`, blob `79f305abee599ae67bd0d741bd221eaa4b53ae73`; workflow `.github/workflows/graphiste-r1-prototypes.yml`, commit `626ed8a719f4fce4149cff6e45b57c7784ef81fd`, blob `a67216e51aa903536e0015db43c1bc49cbdc0a8a`. Chromium 320/390/1280, sans JS, navigation clavier, routes HTTP, impression CSS. Verdict uniquement sur run HEAD après exécution ; pas de test tactile/VoiceOver/TalkBack/NVDA/zoom 400 % physique.

## Dépendances, statuts, suite
- R1 et anciennes PR relus : **TERMINÉ documentaire**.
- Variante carte-logo + gabarits B/C : **TERMINÉ comme candidats**, pas comme intégration.
- CI : **À POURSUIVRE** jusqu'au succès sur SHA final.
- Relations sourcées R0–R3, identifiants 24/44/71, alias et liens profonds : **BLOQUÉ** sur contrat/validation Anarchitecte, en attente d'une version commune consolidée ; aucun lien relationnel fictif intégré.
- Entr'aide réelle : **DÉCISION ZOUT** pour la première situation, territoire, relecture compétente et dates de révision. Notice culturelle réelle : choix œuvres et droits à vérifier par Médiathèque/Juriste.
- Revue juridique/éditoriale, sécurité/staging/rollback P0 et arbitrage esthétique : **BLOQUÉ / DÉCISION ZOUT** ; aucun déploiement.
- Figma : les trois frames précédents demeurent disponibles ; nouvelle variante R1 dans HTML/CSS, **aucun nouveau frame Figma certifié**.

## Demande à La Relieuse
Confronter les prototypes A/B/C à la matrice unique et organiser le passage à La Développeuse, L’Anarchitecte, La Lectrice et La Juriste sans considérer les P0 levés. Demander explicitement à Zout choix de variante logo-cartographie et première situation B, et arbitrage éventuelle adaptation du logo officiel avant tout changement de marque.
