# Cycle 7 — Réconciliation initiale de La Relieuse (candidate)

Date : 2026-11-01. Statut : **transmission de coordination, sans adoption, fusion ni publication**.

## Méthode et limites
- Relecture des descriptions des PR du dépôt et du Journal commun sur `main` (blob `4d82278d6dbc7b1c6e4088b3f2b809e3541f6fae`).
- Confrontation avec les conversations antérieures accessibles au contexte de coordination ; **pas d'inventaire exhaustif garanti de toutes les conversations**.
- Le fichier `coordination/REGISTRE_EDITORIAL.md` n'existe pas à cet emplacement sur `main` ; ne pas présenter son contenu comme vérifié.
- Une transmission dans GitHub n'atteste pas de sa réception par une autre conversation IA.

## Personnalités et attributions
| Statut | Rôles / dossiers | Consigne |
|---|---|---|
| Conversations ou missions explicitement retrouvées | La Relieuse, La Développeuse, La Juriste, La Lectrice, La Penseuse, La Biographe, L'Anarchitecte, La Graphiste, L'Éclaireuse, La Responsable réseaux sociaux, La Médiathèque des communs, L'Anarchiviste des communs, La Tisseuse, L'Anarchiviste catalan, L'Anarchiviste zapatiste, L'Archéologue des communs, L'Assistant de l'Anarchiviste | Vérifier les intitulés exacts et ne pas créer de doublons. |
| Dossiers territoriaux sans conversation autonome certifiée | Aragon ; Murcie-Albacete | Conserver les enquêtes, ne pas créer de rôle par déduction. |
| Intitulés GitHub non équivalents à une conversation distincte | Le Relieur ; L'Organisateur | Conserver les livrables PR #43 ; attribuer la coordination à La Relieuse et les scénarios aux fonctions existantes. |

## Matrice des chantiers
| Priorité | Chantier | Preuves et état | Suite nécessaire |
|---|---|---|---|
| P0 | Collectes et backend | PR #56 : suspension navigateur uniquement ; PR #62 : fonction `submit-proposal` active et RPC `submit_wiki_article` exécutable par `authenticated` selon contrôle documenté | Audit serveur actualisé, correction autorisée, tests et contrôle RGPD/LCEN avant toute réouverture. |
| P1 | Manifeste V2.6 et Charte éditoriale V0.1 | PR #58 : textes candidats ; adoption individuelle conditionnelle évoquée, aucun acte enregistré ici | Vérifier versions intégrales, réserves et autorisation exacte de Zout ; enregistrer seulement si les conditions sont remplies. |
| P1 | Charte des communs V0.9 | PR #62 : candidate, article 48 transitoire | Relecture et décision humaine distincte. |
| P1 | Inventaires éditoriaux | PR #63 : quinze pages Wiki ; transmissions antérieures : quinze textes à corriger et cinq bloqués | Comparer identifiants et statuts, retrouver le registre effectif, ne pas confondre les listes. |
| P2 | Wiki, architecture, accessibilité | PR #51, #57, #59, #61, #63 | Réconcilier les branches et dépendances, tests avant proposition d'intégration. |
| P2 | Fonds, biographies et expériences | Journal commun, transmissions Médiathèque, Tisseuse, Biographe et Anarchiviste | Relier sources, statuts et réserves sans nouveaux doublons. |
| P2 | Enquêtes territoriales | Conversations Aragon, Catalogne, Murcie-Albacete, zapatisme | Vérifier Wikipédia avant tout article, travailler les apports originaux, transmettre aux ateliers documentaires. |
| P3 | Communication et coopérations | PR #43, #48, #52 | Préparation seulement ; aucune prise de contact ou publication présumée. |

## Règles permanentes
Zout est actuellement l'unique personne humaine portant l'initiative. Aucun collectif humain, assemblée ou commission n'existe ; les IA n'ont aucun pouvoir décisionnaire. Chaque passe doit apporter un résultat vérifiable, conserver les sources, les contradictions et les SHA, et éviter de refaire les audits conclus. Aucun merge, déploiement, publication, contact externe ou changement irréversible sans autorisation applicable.

## État
- **Vérifié** : existence et descriptions des PR #56, #58, #62, #63 et du Journal commun sur `main`.
- **Corrigé dans cette transmission** : séparation entre rôles conversationnels, appellations GitHub et dossiers territoriaux.
- **Candidat** : présente matrice de cycle 7.
- **Bloqué** : localisation du registre éditorial complet ; contrôle serveur actuel ; réconciliation exacte des quinze textes/pages et cinq blocages.
- **Décisions Zout attendues** : adoption individuelle documentée sur versions vérifiées, validation de publication future, autorisation d'éventuelles interventions serveur de production.

## Passe complémentaire — recherche ciblée du registre et clarification des nombres
- Recherche dans l'index de fichiers du dépôt sur `main` avec « REGISTRE », « quinze », « bloqués » et « INVENTAIRE » : aucun résultat ; ce résultat de recherche **ne prouve pas** l'absence des documents dans les branches de PR ou Drive.
- Recherche dans les descriptions des PR : la PR #62 affirme une revue de « 15 textes à corriger et 5 bloqués du registre de coordination », sans fournir dans sa description les quinze identifiants ni les cinq identifiants.
- La PR #63 décrit un **inventaire versionné de 15 pages Wiki** à corriger. **Équivalence avec les quinze textes de #62 non établie** : comparaison fichier par fichier indispensable.
- La PR #53 parle de **neuf pages initialement bloquées** ; ne pas confondre cet état antérieur avec les cinq dossiers du registre cité par #62.
- La PR #43 mentionne **A01–A15** comme critères d'essai et trois scénarios écrits, sans essai terrain ; ce ne sont ni quinze articles ni quinze pages.
- La PR #51 cite **24 pages Wiki, 44 fiches Drive et 71 notices FN** comme ensembles distincts, avec réserves d'intégration.
- Prochaine vérification : lire les fichiers de transmission précis sur les branches des PR #62 et #63, puis retrouver le registre d'origine avant toute affirmation nominative.
