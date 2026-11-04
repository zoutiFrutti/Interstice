# C03-ARC-02 — Objections historiques PAR-001 (PR #161)

**2026-11-03, P0, transmission candidate.** Source contrôlée : PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`, `coordination/v2/work-c02-01/parcours/PAR-001.md`, blob `19968ff668552eb7aef3e2f20385fcbd9f94b3f6` ; matrice `03_MATRICE_OBJECTIONS.md` blob `b0f964734edc38341e0f362e42c2c788cc7265f4`. **Aucune modification de la PR #161, main ou publication.**

## Passe 1 — Tableau de résolution

| ID | Vérification documentaire et niveau | Verdict | Correction précise |
|---|---|---|---|
| WORK-COM-01 | Carnavalet affiche n°373, 20 mai 1871, AFF5721 : **A/N** convocation pour le 21 mai, 13 h, mairie IVe ; aucun PV de séance collationné | **OUVERTE**, convocation attestée par notice, réunion non prouvée | « Une affiche du 20 mai convoque une réunion pour le 21 mai ; sa tenue n'est pas établie ici. » |
| WORK-COM-02 | Décret du 16 avril = **D**, projet d'atelier du Louvre 3 mai = **P/A**, registres d'application **E** non consultés ; l'Union a ses propres statuts et appels | **PARTIELLEMENT CLARIFIÉE**, E ouverte | Distinguer trois notices/étapes : décision publique, projet ouvrier, mise en œuvre non démontrée ; supprimer « ateliers autogérés en fonctionnement » sans registres |
| WORK-COM-03 | BHVP MP159 daté « 2 avril » et visa attribué à Frankel : notice **N**, original et PV de désignation non collationnés ; affiche n°363 du 3 mai distincte | **OUVERTE** | « La date et l'attribution du visa dans la notice MP159 présentent une contradiction chronologique non résolue. » Aucune correction silencieuse de date |
| WORK-COM-04 | Club Saint-Ambroise : SHD Ly22 cité mais folios non consultés ; chiffres 4000/1000/3000 = récits contradictoires **T** ; notice Carnavalet PH22310 ne suffit pas à identifier chaque « André » | **OUVERTE** | Supprimer toute proportion et identité affirmée sans PV ; conserver participation féminine rapportée, non quantifiée |
| WORK-COM-05 | BnF cb328445424, ISSN 2743-2033, Arsenal FOL-JO-213 (AI), NUMP-22102 : **N**, quatre numéros signalés 10/15/19/24 mai ; exemplaires non collationnés page à page | **OUVERTE** | « Quatre numéros sont répertoriés ; leurs contenus et conditions de circulation restent à collationner. » Ne pas attribuer chaque éditorial à l'assemblée |

## Passe 2 — Pièces et références

- **ASSO-007** : `coordination/cycle10/archeologue/ASSO-007.md`, blob `7a599c6c5178a98a1017fa15df7e15c96259ddee` ; Carnavalet AFF5721 https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/republique-francaise-ndeg-373-liberte-egalite-fraternite-ndeg-373-commune ; affiches n°331 et 342 à collationner.
- **ARCH-005** : `coordination/cycle10/archeologue/ARCH-005.md`, blob `52f9299423eb639d4538ee9801db8371798a560e` ; BHVP https://bibliotheques-specialisees.paris.fr/ark:/73873/pf0001490635 ; transcription/étude https://macommunedeparis.com/2023/05/31/3-mai-1871-le-reglement-des-ateliers-du-louvre-suite/ .
- **ARCH-006** : `coordination/cycle10/archeologue/ARCH-006.md`, blob `342b962d42e2b209a2f218cb461fd3024f121cbf` ; BnF https://catalogue.bnf.fr/ark:/12148/cb328445424 .
- **ARCH-007** : décret du 16 avril sur les ateliers abandonnés, acte distinct de MP159 et du projet du 3 mai ; source primaire du décret et PV Bourgin/Henriot p.241, 243–244 **non collationnés ici**.
- **COL-003** : `coordination/cycle10/archeologue/COL-003.md`, blob `f1ed0ace96eb972db005d646320491d66aca3afa` ; SHD Ly22 à retrouver par inventaire/folios ; Carnavalet https://parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/portrait-de-francoise-andre-epouse-humbert-membre-de-la-commune-1871 .

Les URL et cotes ci-dessus proviennent des matrices documentaires déjà contrôlées sur GitHub. **Le présent travail n'a pas ouvert les fac-similés, les PV ni les quatre numéros du journal.** Les références à des pièces non lues ne valent pas preuve de leur contenu.

## Passe 3 — Corrections à proposer à PAR-001

1. Conserver la succession « contexte → décret → travail → club → personnes », mais qualifier l'étape « travail » comme **comparaison de projets et de documents**, pas tableau de réalisations démontrées.
2. Dans `ASSO-007 → ARCH-002`, retirer l'identification automatique d'ARCH-002 à l'affiche n°373 **tant que le contenu canonique ARCH-002 n'est pas recollationné**. Remplacer provisoirement par « ASSO-007 → source Carnavalet AFF5721 », référence documentaire non relation inter-ressources ; demander à L'Anarchitecte de corriger la relation typée.
3. `ARCH-006 → COL-003` : préférer « association documentaire rapportée par la notice BnF » à une lecture forte de `fait_historique_atteste` qui ferait croire à un mandat collectif.
4. `ARCH-005 → ARCH-007` et `ARCH-005 → ASSO-007` : conserver `comparaison`, ne pas inférer coordination ou filiation.
5. Suspendre les identifications biographiques incertaines (dont BIO-019) dans les légendes publiques ; conserver les controverses en dossier interne.

**Texte d'introduction candidat :** « Les documents de la Commune de Paris témoignent de décisions, de projets d'organisation du travail, de publications et d'appels à réunion. Leur existence n'établit pas automatiquement la réalisation des mesures annoncées. Ce parcours distingue les actes officiels, les règlements proposés, les traces d'activité et les incertitudes laissées par les archives. »

## Passe 4 — PAR-004 et PAR-006

PAR-004 blob `9526237f9a46fc24bf8e38b572258dadfe382f45` : **avis favorable sous réserve** à une comparaison sur les pouvoirs et les règles prescrites ; ne pas appeler ARCH-005 une autogestion réalisée, ni ASSO-008 une continuité institutionnelle prouvée. PAR-006 blob `fce67c7190d16ef8da04d7d1dd2c70653a7ba77a` : **avis favorable sous réserve** à l'entrée ASSO-007 comme histoire documentée d'organisation des femmes ; distinguer signatures imprimées, identités vérifiées, convocations et séances. Aucun récit linéaire ou identité BIO-019 inventée.

## Passe 5 — Tests, blocages et suites

**Tests documentaires exécutés :** lecture GitHub de PAR-001, matrice des 30 objections, PAR-004, PAR-006 sur HEAD exact de PR #161 ; confrontation aux quatre matrices historiques de PR #77 précédemment lues et dont les blobs sont consignés ; contrôle logique des relations et formulations. **Non exécutés :** fac-similés AFF5721/MP159, SHD Ly22, originaux *Le Prolétaire*, vérification physique ou paléographique, CI et tests de navigation. Ces cinq objections restent ouvertes ; WORK-COM-02 est seulement clarifiée au niveau conceptuel.

**À La Relieuse et La Lectrice :** demander contrelecture des cinq libellés, collation de l'original AFF5721 et des pièces du 21 mai, recherche des PV/paies, et révision de la relation ARCH-002. Statuts : tableau et textes **TERMINÉ documentaire** ; résolution probatoire **BLOQUÉ / À POURSUIVRE** ; intégration dans PR #161 **non faite** ; publication **DÉCISION ZOUT**. Aucun merge ni modification de `main`.
