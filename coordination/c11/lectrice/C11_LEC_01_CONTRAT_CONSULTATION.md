# C11-LEC-01 — Raccords Encyclopédie / Archives / Médiathèque, sans autorisation de publication

**Principe fondateur** : Interstice facilite d'abord les rencontres, le partage et l'action collective via Faire Ensemble. Les trois espaces documentaires restent consultables de façon indépendante ; les sept Parcours sont transversaux et secondaires. PAR-005 demeure bloqué.

## Raccords candidats
| Ressource / angle | Encyclopédie | Archives | Médiathèque | Frontière |
|---|---|---|---|---|
| Union des femmes / ASSO-007 | Article Wikipédia existant sur l'Union ; pas de doublon encyclopédique | Notice ASSO-007 et affiche ARCH-002 sous réserves | Œuvres féministes sourcées séparément, ne pas transformer une fiction en preuve | Source ≠ fait exécuté ; identités incertaines visibles |
| Eugène Varlin / BIO-012, ASSO-008 | Lien Wikipédia biographique | Dossier de coopération et pièces La Marmite | Œuvres sur les communs possibles par notice seulement, après droits | Retenue privée ≠ visa |
| Club / COL-003 et journal ARCH-006 | Contexte secondaire court, pas nouvel article généraliste sans lacune démontrée | Notice BnF / numéros et cotes, distinction des signatures | Éditions / fac-similés sans copie automatique | Association documentaire ≠ mandat collectif |
| Ateliers du Louvre / ARCH-005 et décret ARCH-007 | Lecture de projets d'autogestion et comparaison critique | Projet 3 mai, décret 16 avril : deux objets ; pièces d'exécution à trouver | Œuvres contemporaines contextualisées si droits | Projet ≠ application |
| Catalogne 1936 / CAT-001/006 | Wikipédia sur contexte général si contenu cohérent | Original du décret et dossiers locaux avec provenances | Documentaires distingués des archives primaires | Territorialités différentes, interprétations contradictoires |
| PAR-005 | Titre et statut « bloqué » seulement dans les chemins secondaires | Aucune fiche pratique ouverte | Aucun conseil pratique injecté via notice média | Visa juridique et sanitaire nécessaires |

## Contrat de fiche autonome
- Champs : `id`, `titre`, `type`, `date_document`, `date_publication`, `provenance`, `source_url`, `source_scope`, `niveau_preuve`, `licence_media`, `wikipedia_link`, `apport_original`, `relations_candidates`, `objections`, `statut_editorial`, `visa_publication`, `version_sha`.
- **Fait attesté** : description d'une source sur une assertion précise ; **interprétation** : attribuer auteur et date ; **hypothèse** : indiquer preuve manquante ; **proposition éditoriale** : annoncer explicitement le rapprochement.
- La relation entre notices est une propriété documentaire ; elle ne nécessite pas de passer par un Parcours. Les Parcours réutilisent les relations en seconde intention.
- Le lien vers Wikipédia est préféré si l'article existant couvre le sujet sans lacune importante. La notice locale doit apporter un document inédit, une critique sourcée ou un lien transversal vérifiable. Vérification thématique faite pour Union des femmes et Varlin ; audit exhaustif versionné de Wikipédia non effectué.
- Les 24 textes R6 existants peuvent être lus comme textes R6 avec réserves, **sans nouvel approbation historique**. Les notices Médias listées comme consultables doivent afficher édition, droit et source ; `embed_authorized:false` reste bloquant pour tout lecteur intégré.
- Les fenêtres de lecture adaptatives 4:3 ou 16:9 et légèrement transparentes ne doivent jamais masquer une cote, un avertissement ou une attribution ; tester clavier, mobiles, zoom, réduction des mouvements, contraste.
- La visibilité d'un titre, d'une cote ou d'un nombre de ressources n'ouvre pas le corps d'une fiche non visée. L'URL canonique et la présence d'un texte dans une branche GitHub ne constituent pas un visa.

## Portes
1. Faire Ensemble ; 2. Encyclopédie des communs (Wiki, Atlas en accès transversal) ; 3. Archives des communs ; 4. Médiathèque. Aucune modification des SVG officiels.

## Statuts indépendants
1. `candidate` : document ou relation proposée.
2. `verified_scope` : contrôle délimité, preuve et version consignées ; pas de certitude hors du périmètre.
3. `human_editorial_selected` : sélection de Zout limitée à la version et aux réserves.
4. `publication_authorized` : visa juridique / médical / licences / décision humaine appropriés.
5. `published` : uniquement preuve d'un déploiement réel ; ne jamais inférer de CI.

Dans ce cycle aucun nouveau visa ni déploiement n'est effectué.
