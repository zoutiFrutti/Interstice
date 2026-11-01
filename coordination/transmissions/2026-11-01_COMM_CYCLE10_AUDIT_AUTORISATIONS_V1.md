# CYCLE 10 — Audit des communications héritées et registre d'autorisations
**1 novembre 2026. État observé, pas de validation, pas de diffusion.**

## Sources exactes consultées
- PR #52, branche `atelier/communication-premiere-edition-20261031`, HEAD `e2ea8997d3f9745fdbd306ec5844d39ff77a1150` au début de la passe, **ouverte et draft** ; 20 fichiers documentaires listés dans la PR. Aucun contenu de `main` modifié.
- `coordination/cycle10/PROTOCOLE_REGISTRE_OUVERTURE_C10_2026-11-01.md` sur `coordination/cycle10-ouverture-20261101`, protocole Relieuse.
- `coordination/JOURNAL_COMMUN.md` sur branche d'ouverture cycle 10 : confirmation écrite que la rectification V0.9 est déjà acquise en C9 et ne doit pas être rouverte.
- Manifeste V2.6 PR #58, blob `8aa342bc7b45dc6736499eb363c6c895c3bc3621` ; Charte éditoriale V0.1 blob `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`; Charte des communs V0.9 transitoire PR #62 blob `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b` (directement vérifiés au cycle 6 puis à la clôture C8).
- Contrôle ponctuel de cinq fichiers : `COMMUNICATION_PREMIERE_EDITION_CANDIDATE` blob `c5ef57bbd41da79553f528222d592803216d918b`, C5 présentation blob `a418f2cade77858bbe48453fa96174b72dabedc2`, C6 présentation blob `f95edd02c08d7b0f2df5e945ff13ccf6e7256892`, kit C8 blob `3241292b461172adea5ffd933caf918d34bf2d5f`, calendrier C8 blob `a11928dd99650018157ad2ec061f920bf9f7fac3`.
- C5 et C6 contiennent respectivement 4 et 2 mentions de **V0.8** dans leur contexte **historique** ; il ne faut pas modifier rétroactivement ces documents datés. Kit C8 : 3 mentions V0.9, deux mentions V0.8 seulement pour l'historique ; aucune erreur courant V0.8 détectée par motif `Charte des communs V0.8`.
- Dans ces cinq fichiers contrôlés, la recherche littérale `notre collectif`, `notre équipe`, `nos partenaires` donne **zéro occurrence**. Ceci n'est pas un audit exhaustif de toutes les formulations grammaticales des 20 fichiers.
- Kit C10 consolidé préparé séparément : texte long et copies courtes, story/carrousel, vidéo script, historique écologie/Espagne/zapatisme, droits et conditions de diffusion. Aucune image, archive, musique, voix ou marque externe incorporée.

## Test de vérité des affirmations du kit C10
| Assertion | Source | Résultat |
|---|---|---|
| Initiative individuelle et ateliers IA sans mandat | Instructions Zout C6/C7/C8/C10 et PR #52 | Conforme |
| V2.6 / V0.1 / V0.9 transitoire candidates non collectivement adoptées | PR #58, #62, Journal commun | Conforme |
| Wiki/Bibliothèque présents au dépôt, mais pas tout validé | fichiers `main` et Journal commun | Conforme ; tests site en production non refaits |
| 17 à examen, 12 à corriger, 5 bloqués | Journal C8 et dossier Zout, provisoire | Conforme **sans** statut publié |
| Trois parcours non opérationnels | PR #57/#68, non fusionnées | Conforme au stade de preuve de branche |
| Droits des photos/films non acquis automatiquement | Matrice Juriste / Médiathèque et dossiers PR #48/#52 | Aucun média intégré ; tout ajout exige contrôle |
| Aucun partenaire du projet | Communication précédente ; pas d'accord connu ni dossier d'accord fourni | Formulation prudente : « aucun partenaire revendiqué », non preuve métaphysique qu'aucun tiers n'a jamais été approché |
| Sécurité P0 | PR #65, protocole C10 ; pas de déploiement prouvé | Bloquant pour publicité de formulaire/collecte |
| Dates historiques | Balcells 2017, communiqué EZLN 5/11/2023, Scarborough 2023, sources en C7/C8 | Dates citées avec portée limitée ; lectures intégrales non attestées |

## Autorisations manquantes, individualisées
| Code | Demande à qui ? | Décision/proof à produire | Condition d'arrêt |
|---|---|---|---|
| A01 | Zout | Accord sur **la copie exacte** du support avec version/commit et citations | Approbation traçable |
| A02 | Zout | Accord distinct sur **compte, format, date, public cible et diffusion** | Autorisation explicite, pas visa article |
| A03 | La Relieuse + La Lectrice | Liste de fiches publiables par identifiant, SHA, sources et objections ; ne pas changer un statut sans décision | Registre concordant |
| A04 | Développeuse + Juriste + Zout | Vérification P0 serveur, plan de test isolé/rollback puis autorisation de déploiement et preuve d'effet | Contrôles réels satisfaits |
| A05 | Éditeur/La Juriste/Zout | Mentions légales, hébergeur, RGPD, canal de correction réellement géré | Pièces juridiques effectives |
| A06 | La Graphiste / testeur·euse | Vérification réelle du support final : contraste, mobile, texte alternatif, sous-titres, VoiceOver/TalkBack/NVDA si interface concernée | Résultats datés sur version |
| A07 | Ayants droit / La Médiathèque / La Juriste | Permissions fichiers médias, identité des auteurices, crédits, domaine ou licence documentés | Dossier droit par média |
| A08 | Tiers concerné et Zout | Accord documenté avant tout nom/logo de partenaire, atelier ou renvoi réciproque revendiqué ; conditions de coût si service | Acceptation de chaque partie |
| A09 | Zout et ateliers historiques | Avis sur deux copies Espagne/zapatisme, contradictions et voix situées | Visa du texte et des sources exacts |

## Statuts protocole cycle 10
- Objectif 1 : **TERMINÉ** pour reprise de PR #52 et préservation sans réouverture du correctif V0.9.
- Objectif 2 : **À POURSUIVRE** pour revue exhaustive des vingt fichiers ; l'ensemble des 20 fichiers a subi un contrôle littéral automatisé des principales expressions à risque et un nouveau kit conforme est déposé, mais aucun visa humain ni test production n'est prétendu.
- Objectif 3 : **TERMINÉ** pour rédaction et conservation du kit avec critères d'autorisation ; **DÉCISION HUMAINE** pour toute utilisation et publication.

**Séparation fondamentale :** fermeture des tâches de préparation documentaire ≠ autorisation de lancement. Aucun post, prise de contact, programmation, fusion, modification serveur ou publication réalisée.

## Transmission
Mettre ce document sur branche dédiée candidate avec lien dans PR draft destinée à La Relieuse. Un dépôt GitHub ne garantit pas notification à sa conversation.

## Complément de passe de vérification — audit littéral des 20 fichiers PR #52
**Méthode réellement exécutée :** lecture via GitHub de l'ensemble des vingt chemins renvoyés par `list_pr_changed_filenames`, avec recherche des occurrences `V0.8`, `V0.9`, `notre collectif`, `notre équipe`, `nos partenaires`, `nous sommes un collectif`. Quinze fichiers supplémentaires ont été contrôlés après l'échantillon initial de cinq ; cinq mentions ambiguës de terminologie collective proviennent des documents C7/C8 qui listent des formulations explicitement **à proscrire**. Une occurrence n'a donc pas été traitée à tort comme assertion publique.

**Résultat** : aucun des vingt fichiers n'affirme que La Faille noire est un collectif humain constitué sous les quatre motifs littéraux testés. Quelques brouillons historiques des cycles 5–7 mentionnent V0.8 comme état alors courant ; ils sont conservés en archive et ne doivent pas remplacer le kit de référence C10. Le kit C8 corrigé conserve V0.8 dans sa chronologie et adopte V0.9 comme dernière candidature vérifiée. **Limite** : ce contrôle lexical et la lecture des statuts ne constituent pas une vérification linguistique exhaustive de chaque phrase, un audit de toutes licences sur Internet ou un test du site réellement déployé.

**Statut mis à jour** : objectif 2 **TERMINÉ pour contrôle documentaire de la PR #52 et production de copies conditionnelles conformes** ; **DÉCISION HUMAINE** pour visa de chaque copie ou nouveau média et **BLOQUÉ** pour les tests de production/serveur hors périmètre. Zéro correction rétroactive inutile.
