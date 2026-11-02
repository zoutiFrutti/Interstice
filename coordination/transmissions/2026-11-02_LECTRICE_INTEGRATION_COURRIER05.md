# La Lectrice — courrier d'intégration 05, passe éditoriale
Date 2026-11-02. Branche `atelier-lectrice/r1-reprise-20261102`. Sans fusion, publication ou validation.

## P0 — cinq pages sensibles
Les cinq HTML ont déjà été corrigés sur cette branche : notes de la Juriste PR #75 et remarques Lectrice conservées. Relecture de structure effectuée : 5/5 balises section et aside équilibrées, une note de chaque rôle. **Trois BLOQUÉES** : enfance, police/décès, santé. **Deux À POURSUIVRE** : migrations et logement ; leurs délais, voies de recours et situations individuelles n'ont pas reçu un audit complet. Rapport précédent `coordination/transmissions/2026-11-02_LECTRICE_R1_RECONCILIATION.md`, blob `f4e220c948526f20d5238a89de9d96bc3b221c96`.

## P1 — douze Wiki
Matrice C10 `coordination/transmissions/2026-11-01_LECTRICE_CYCLE10_MATRICE_20.md` blob `ffd4f7878154d3b24b8231e35d1820c0e1796e98` : 12 corrections de portée éditoriale préexistantes, pas douze audits exhaustifs. Pas de promotion de statut. ARCH-005/COL-003/ASSO-007 conservent réserve sur normes/affiches ≠ exécution. ARCH-006 hors lot de vingt.

## P1 — prototype « droits en manifestation »
Dossier documentaire réellement relu sur `integration/r1-commune-candidate-20261102` : `coordination/mediatheque/DROIT-001_BIBLIO_MANIFESTATIONS_CONTROLES_GAV_2026-10-31.md`, blob `1657e925bc60d52456ecf02532cd1b7e0eb7b465`. Il référence 18 sources et distingue normatif / notice / association / extrait. **Ce répertoire n'est pas le prototype final d'une fiche d'entraide, encore moins une consultation juridique.** Sources importantes à dater pour la version poche : CSI L211-1 s. (déclaration, non autorisation universelle) ; CPP 78-2 vs 78-3 (contrôle ≠ vérification), 61-1 vs 63-1 (audition libre ≠ GAV), médecin 63-3 et avocat selon procédure. Ces références sont rapportées du dossier : pas de reconsultation Légifrance directe ici. Les conseils pratiques relatifs aux nasses, charges et contacts d'urgence requièrent sources, date, territoire, contrôle Juriste et avis d'accessibilité/impression. **Statut : À POURSUIVRE**.

## P1 — navigation et Graphiste
Source primaire candidat examinée : `design-system/passages-variantes-c10.html` sur `design/passages-interstice-c10-variantes-20261102`, blob `93482f6ee95ed4883f9356a4b1f2598d7483104b`; transmission Graphiste `coordination/transmissions/2026-11-02_GRAPHISTE_PASSAGES_C10_TROIS_DIRECTIONS.md` blob `af60adddf3107eddb8a21568ef4332efa5807be7`.
- **Passages** : bonne distinction lecture libre / parcours guidé, mais tester le snap, le retour à l'index et les états de clavier au zoom.
- **Constellation** : la phrase « sans relations historiques fictives » et la mention « traits décoratifs » sont utiles ; ne pas présenter les trois rubriques Wiki/Bibliothèque/Participer comme des relations historiques ou des partenariats.
- **Éditoriale** : « Participer — Entrer dans les initiatives » peut laisser croire qu'il existe un réseau d'initiatives ou un parcours d'inscription déjà opérationnel. **Correction candidate proposée : « Participer — Comprendre les contributions possibles »**, avec avis « formulaires non ouverts si sécurité P0 non testée ». Ne pas éditer silencieusement la branche Graphiste.
- **Statuts visibles** : les variantes portent « prototypes candidates », mais les liens vers Wiki et Bibliothèque peuvent mener à des contenus non approuvés. Ajouter statut au niveau de chaque notice/fiche, pas seulement dans l'en-tête.
- **Accessibilité** : l'élément `div role="navigation"` de constellation à comparer avec `nav` sémantique et libellés ; succès CI déclaré ne vaut pas audit physique VoiceOver/TalkBack ni test sur HEAD commun.
- **Articles longs** : vérifier que la navigation ne piège pas le défilement, que la source et sa date restent proches de chaque affirmation, et qu'une version texte à plat fonctionne sans animations.

## Sources, doublons, décisions
Convention R1 : RELIER / COMPLÉTER / CRÉER. Le prototype A/B/C doit réutiliser les identifiants 24/44/71 et les alias, sans prétendre un lien contractuel, médiatique ni géographique sans preuve. Médiathèque : contrôle URL/licence séparé de la simple consultation ; Wikipédia : éviter la répétition des articles complets sans apport précis. Distinguer texte original, citation, traduction, transcription historique et copie sous droits.

## Tests réellement faits et restant
**Fait** : lecture GitHub du guide DROIT-001 et du code HTML Graphiste, rapprochement avec les cinq vérifications structurelles effectuées dans R1, vérification de leurs blobs et transmissions. **Non fait** : nouvelle CI, revue exhaustive de tous liens, consultation Légifrance fraîche, test d'application réelle, relecture physique d'accessibilité, couverture intégrale des douze Wiki. Tous les contenus restent candidats et les statuts P0 inchangés.

**À La Relieuse** : faire transmettre la proposition de microcopie à La Graphiste, le dossier DROIT-001 et la réserve sur procédures à La Juriste, les SHA sensibles à La Développeuse. Demander à Zout une décision uniquement sur les versions et périmètres vérifiés. Aucun changement de production.
