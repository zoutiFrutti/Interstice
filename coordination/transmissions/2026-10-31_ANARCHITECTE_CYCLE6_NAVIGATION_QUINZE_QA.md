# LA FAILLE NOIRE × INTERSTICE — L'Anarchitecte : cycle 6
**31 octobre 2026 · Contrat de navigation / lot quinze pages / QA. Document candidat non publié, sans visa autonome des ateliers IA.**

## Références inspectées
- PR #50 `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb` : gabarits de fiches, conception et CSS ; PR #57 `2d8bb7960d7e2a4f1f3428841cbcc705a0962877` : trois maquettes parcours candidats, non déjà publiées.
- PR #51 `7663f3549c14c4430ae3e22a7ff9dc465e930754` au début du cycle : contrat préalable. PR #43, branche coordination `7e2857ae3e0b1ab76af8172860d8183d5d9cda56` au contrôle : registre, journal, transmission Lectrice 24 pages.
- La candidate technique `integration/premiere-edition-candidate-2026-10-31` a été inspectée lors des cycles précédents au SHA `0ad8532c6cda858dc059e62ba50bf31333779fc7` ; les blobs de `wiki.html`, `edition-premiere/decisions.json` et du test de parcours correspondent toujours aux fichiers lus par chemin de branche durant le présent cycle. `authorizations: []` et `AUCUN_VISA_EDITO_EXPLICITE` observés. **Ce constat ne certifie pas le HEAD actuel de cette branche ni toutes les pages.**
- PR #44 de La Lectrice `b08ee0b915a162faa2d870debc6580b08ca29935` : enrichissements de `wiki-decision-collective.html` et `wiki-lecture-croisee-travail-soin-pouvoir.html`, à réconcilier avant toute intégration.
- **Il n'existe pas de collectif humain, commission ou assemblée décidant de l'adoption** : Zout seul peut adopter individuellement une version donnée. Texte adopté individuellement ≠ publication ≠ règles collectives futures.

## PASSE 1 — Réconciliation et défaut réellement corrigé
**Modification effectuée** sur PR #51 : `wiki-autonomie-materielle-savoir-faire.html`, ancien blob `160c5d46fdb7030c05c36e20dd46e3c96746a6b1`, remplacé au commit `1ebefa0efa3415b423cd14b74ef4ed89e1db6b21`, nouveau blob `7391802d790c3ef14afb06516ab1c907d008d74d`.
Une unique destination locale absente `wiki-mutualiser-materiel.html` a été remplacée par `wiki-ecologie-sociale-environnement.html#axe5` dont le fichier et l'ancre `axe5` avaient été vérifiés dans les contrôles précédents. **Aucune phrase du texte, ni statut ni source modifiés** ; un lien d'orientation corrigé. Correction sur branche PR, **pas sur main ni sur la candidate d'intégration**.
Routes à préserver : `wiki.html`, `bibliotheque.html` et les 24 pages `wiki-*.html`. Les ID de contenu BIO/ASSO/ARCH/COL/EXP/FN/ÉCL/LUT ne deviennent des URLs publiques que si une destination validée existe. Les annexes PR #50/#57 sont des composants, pas une autorisation de déploiement.

## PASSE 2 — Quinze articles du tri de La Lectrice
Le **premier tri** sur les 24 pages indique exactement **15 A_CORRIGER / 9 BLOQUEE / 0 VALIDABLE**. Ce lot de quinze est défini ci-dessous à partir des routes **exactes** du rapport Lectrice de PR #43. Ce sont des **pages existantes à corriger**, pas quinze nouveaux articles prêts à publier. Les améliorations récentes doivent être réconciliées version par version, sans ramener une page au statut antérieur ni écraser les corrections.

| Route conservée | État du premier tri |
| --- | --- |
| `wiki-antifascisme-histoire-et-mecanismes.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-antiracisme-histoires-droits.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-autonomie-materielle-savoir-faire.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-capitalisme-classes-travail.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-culture-creation-acces-art.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-ecologie-sociale-environnement.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-egalite-fiches.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-egalite-genres-inclusivite.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-feminismes-histoire-egalite.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-handicap-validisme-neurodiversite.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-justice-prisons-abolitionnisme.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-liberte-numerique-ia-surveillance.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-patriarcat-histoire-mecanismes.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-politique-institutions-regimes.html` | A_CORRIGER (tri initial, non visa) |
| `wiki-socialismes-communismes-anarchismes-autogestion.html` | A_CORRIGER (tri initial, non visa) |

Les **neuf bloquées** ne doivent pas être intégrées dans un lot autorisé par erreur : `wiki-association-collegiale.html`, `wiki-decision-collective.html`, `wiki-education-enfance-protection.html`, `wiki-financements-culture-spectacle.html`, `wiki-frontieres-migrations-colonialisme.html`, `wiki-lecture-croisee-travail-soin-pouvoir.html`, `wiki-logement-habitat-droit-ville.html`, `wiki-police-deces-memoire.html`, `wiki-sante-psychiatrie-autonomie-soins.html`. Les corrections de PR #44 peuvent les rendre **candidates à une nouvelle revue**, pas automatiquement « validées ». Les pages déjà accessibles sur main peuvent rester publiquement accessibles historiquement : le verrou concerne leur **réédition / promotion comme contenu approuvé**, pas une prétendue suppression déjà réalisée.

Pour chacune des quinze : conserver URL, titres, texte et citations, corrections de sources/contradictions identifiées par La Lectrice, provenance, licences et marque de version ; ajouter des renvois seulement vers des cibles existantes et éditorialement autorisées. Préparer une comparaison ancien/nouveau `git diff` avant toute reprise sur branche assemblée. Aucun gabarit ne doit effacer bibliographie, réserve, objection ou version.

## PASSE 3 — Trois parcours critiques et deux rubriques
**Parcours dans `wiki.html` de la candidate** : `#ecologie`, `#democratie`, `#cooperatives` et `#parcours-critiques` sont présents au contrôle des cycles précédents ; sources, objection, exercice facultatif, retour à l'article. Parcours non équivalents à une validation de leurs thèses ; conserver `details/summary`, navigation Tab, sans compte, score ou POST.
- Écologie : `wiki-ecologie-sociale-environnement.html#axe3` et `#axe5`, ÉCO-001A/B/C **candidats** ; luttes ÉCL-002 après approbation.
- Démocratie : `wiki-politique-institutions-regimes.html`, `wiki-decision-collective.html`/PR #44 (bloquée initialement), objections Jo Freeman/Young, et ÉCL-001/003 en candidat.
- Communs : `wiki-capitalisme-classes-travail.html`, `wiki-socialismes-communismes-anarchismes-autogestion.html`, étude ÉCL-004 CIC en candidat, distincte de Calafou et FairCoop.
**« Enquêter sur le pouvoir »** : nouvelle **rubrique de navigation** uniquement, par liens internes des pages politique/travail vers méthodes, sources primaires et contradictions dans pages existantes. **« Luttes et héritages »** : navigation territoire, époque, source, résultat administratif/judiciaire/matériel et héritage, tableau/HTML statique, liste filtrable facultative (sans JS lisible). Aucun `enqueter.html`, `luttes.html`, aucune base.
Respecter `ÉCL-001..004` et `LUT-001..013` en registres candidats ; EJAtlas 1 seul item malgré 2 usages. Aucun lien public vers une notice non visée.

## Avis QA et tests encore exigés
**PASS réel** : 15 routes retrouvées dans le tableau de La Lectrice et reprises exactement ; correction du lien mort exécutée et SHA renvoyé ; `decisions.json` relu sur candidate avec `authorizations: []` ; 3 parcours présents dans `wiki.html` lu, PR #50/#57 non publiées.
**NON EXÉCUTÉ dans ce cycle** : suite automatisée complète sur le SHA nouveau, clic navigateur à 320/390/1280, lecteur d'écran et clavier humain, tests des liens externes, accès aux erreurs HTTP et RLS, scan de **tous** les 24 liens/ancres et artefacts de CI ; pas de qualification « QA verte ».
**BLOQUANTS** : aucun lot des quinze avec autorisation explicite ID/chemin+version, droits et nouvelles contrelectures ; neuf bloquées non levées ; aucun chemin sûr pour exposer les ÉCL ; correction du lien effectuée dans PR #51 mais non reportée sur la branche candidate d'intégration. Prendre en compte textes V2.6 et chartes seulement à leur état de décision réellement attesté : ne pas inventer adoption collective, ne pas déduire de la responsabilité fondatrice une autorisation de toutes les fiches.
**Risque de brouillons** : dépôt public GitHub lisible même sans lien d'accueil. Les brouillons présents dans le dépôt doivent être traités comme publiquement accessibles au niveau GitHub ; ne jamais ajouter de données personnelles confidentielles en pensant les cacher via navigation. Prévisualisations, sitemap, JSON et index doivent exclure tout candidat non approuvé.

## Transmission et règle d'arrêt
Développeuse : répercuter **uniquement** la correction du lien vers `#axe5` sur branche candidate après vérification ; préserver PR #44 et statuts. Construire ensuite QA automatique de toutes routes/ancres, retour, ressources, états et index, plus tests navigateur sur SHA exact.
Relieuse : arbitrer les quinze pages après rapprochement des dernières relectures, obtenir versions exactes et décisions individuelles, distinguer les neuf bloquées ; aucun avis d'atelier ne vaut visa de Zout.
**Aucun merge, publication, nouveau backend ni modification des textes adoptés.**
