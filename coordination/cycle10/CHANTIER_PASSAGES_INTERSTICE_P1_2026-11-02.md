# La Relieuse — chantier P1 haute : Les passages d’Interstice

Date : 2026-11-02. Mandat de Zout : **direction de recherche validée**, ni maquette définitive ni publication. Statut : **candidat, sans fusion**.

## Priorité
P1 haute, **derrière les P0 sécurité Supabase, protection des données et conformité juridique**. Chantier graphique/fonctionnel transverse, sans retarder les vérifications éditoriales indépendantes.

## Reprise de l'existant vérifié
- PR #117 (hiérarchie de l'accueil), #119 (prototype), #120 (défilement) : références fournies par Zout, état de fusion non présumé.
- Branche `design/passages-interstice-ux-pass2-20261102` : comparaison à `main` = 16 commits en avance, 0 en retard à la date du contrôle.
- `design-system/passages-interstice-prototype.html`, blob `e6451c261135be2b8bd0d431d18fb51d00e7e88c` : trois sections, ancres, routes existantes et lien vers accueil classique.
- `assets/passages-interstice.css`, blob `ea24d9ec68ac69cdc44652709c144ac215d3ebda` : snap proximity, reduced-motion, impression, petit écran.
- `coordination/transmissions/2026-11-02_GRAPHISTE_PASSAGES_PRIORISATION.md`, blob `902810c5278e858907267c4a36e101333324267b` : limites et intentions.
- Figma : https://www.figma.com/design/3Nx6Xlgoeeln01ZMujM9cw (trois écrans éditables annoncés par Zout ; vérification indépendante de ces écrans non effectuée dans cette passe).
- CI réussite sur `66d1366d4fda843750ffcf1ecfa7f8873961fa2c` rapportée par Zout ; non revérifiée ici, ni extrapolée à d'autres SHA.

## Répartition des missions
| Atelier | Mandat | Livrable candidat |
|---|---|---|
| Graphiste | Comparer trois directions : passages verticaux, constellation, composition éditoriale adaptative ; mobile/desktop, gestes et alternatives | variantes Figma et prototypes, limites et sources des médias |
| Anarchitecte | Routes, liens documentaires, relations, identifiants, statuts, retour arrière et liens profonds | architecture des parcours et contrat de compatibilité |
| Développeuse | Interactions progressives, performance mobile, dégradation sans JS, rollback, tests exacts | prototype GitHub et matrice de tests |
| Lectrice | Accès aux sources, lecture longue libre, objections, contradictions et visibilité des statuts | revue documentaire indépendante |
| Juriste | Accessibilité, licences médias, protection des données et éventuelles dépendances P0 | avis juridique avec réserves |

## Exigences transversales
- Ne pas forcer le snap sur les articles longs ; conserver la navigation directe et une interface simple accessible en permanence.
- Tester tactile, molette, clavier, focus, zoom 400 %, contraste, impression, reduced-motion, absence de JS si applicable, appareils modestes.
- VoiceOver, TalkBack et NVDA : **tests prévus, non attestés** tant qu'un rapport réel n'est pas reçu.
- Les modèles Figma ne valent pas preuve de comportement navigateur.
- Aucun atelier ne représente un collectif humain ; Zout garde les décisions éditoriales et artistiques.

## Portes de validation
A. Trois directions comparables et argumentées.
B. Contrat d'architecture préservant les routes et les identifiants.
C. Prototype interactif testé sur un SHA exact, rollback documenté.
D. Relecture Lectrice/Juriste et essais d'accessibilité effectivement rapportés.
E. Décision explicite de Zout avant fusion/publication.

## Coordination
Les courriers individuels seront préparés par La Relieuse sur cette branche et transmis à Zout sous forme de prompts. Aucun accusé de réception, test ou déploiement n'est présumé par la création de ce registre.
