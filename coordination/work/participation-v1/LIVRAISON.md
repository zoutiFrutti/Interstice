# Bilan de livraison — outils participatifs

21 novembre 2026 · Branche candidate `work/participation-candidate-20261121`, issue de la PR #202 au SHA `9dd5fffc0bd9ff20aa1d8501be315e5ba97034ff`. Le commit de livraison et l'état CI sont indiqués dans la PR brouillon. Aucun résultat de test d'un parent n'est transféré au nouveau HEAD.

## Résultat par phase

| Phase / module | État exact | Livrables |
|---|---|---|
| 1. Comparaison | Terminée dans le périmètre documentaire ; 9 références demandées et 3 complémentaires | `COMPARAISON.md`, matrice de 10 critères et 4 stratégies, sources officielles et preuves de maintenance |
| 2. Audit | Terminé sur les sources accessibles ; état réel Supabase non certifié | `AUDIT.md`, références #186, #197–202, #193, décisions et réserves |
| 3. Conception | Candidate argumentée ; aucune adoption humaine présumée | `ARCHITECTURE.md`, séparation du traitement et des visas, six portes |
| A. Propositions | **Fonctionnel et testé localement**, ouverture réelle bloquée | Formulaire, types, références, reçu, suivi privé, modération motivée, historique/version ; stockage `proposals` et purge C08 réutilisés |
| B. Contributions | **Fonctionnel et testé localement**, catalogue réel non raccordé | ID stable et révision, provenance/cote/droits, original conservé, comparaison, revue et suivi ; adaptateur maître fermé sans manifeste humain |
| C. Recherches ouvertes | **Fonctionnel et testé localement** sur fixtures fictives | Catalogue, filtres, détail, réception des preuves textuelles, compte des apports/vérifications, clôture conditionnée à une preuve, réouverture et historique |
| D. Discussion | **Première version fonctionnelle locale**, raccord proposition → discussion partiel | Arguments/objections/sources/accords modérés, décision avec désaccords et suites ; pas d'amendements complets, de sondage ou d'analyse algorithmique |
| E. Carte et entraide | **Partiel : raccords préparés**, aucun lieu réel ajouté | Export minimal de références autorisées et vérifiées, exclusion des lieux sensibles/coordonnées, exemple fictif ; prototype carte #193 conservé |
| 8. Tests et livraison | Contrôles locaux exécutés et preuves fournies ; CI du HEAD à lire séparément | Tests Node/PGlite, Deno/SDK, préservation, suites de coordination et navigateur, documentation, workflow sans déploiement |

## Vérifications réellement exécutées

| Contrôle | Résultat local | Limite |
|---|---|---|
| Node/PGlite : nouveaux parcours + pilote existant + purge + maître | **66 tests réussis** | Base fictive en mémoire ; pas une preuve de schéma réel |
| Deno 2.5.6 : typage du pilote et du point d'entrée candidat | Réussi | Pas de passerelle Supabase hébergée |
| SDK réel 2.119.0 avec transport intercepté, réseau et environnement refusés | **1 test / 4 étapes réussies** | Aucun envoi distant |
| Coordination Python existante | **133 tests réussis** | Aucun agent IA lancé |
| Régression navigation C25/C27/NAV7 | **13 tests réussis** | Pas de nouveau test navigateur de la navigation immersive |
| Préservation historique | **524 fichiers, aucun changement refusé** | Contrôle de fichiers, pas visa éditorial |
| Navigateur Chrome | Réception, suivi, recherche, modération, clôture/réouverture, objection et refus avec texte conservé observés | Voir `BROWSER_QA.md` ; pas de test physique Android/assistance |
| Privilèges SQL | `anon`/`authenticated` refusés sur file/RPC privé/colonnes privées ; projection publiée limitée préservée ; ancien RPC de publication révoqué dans la fixture | Aucun rôle ni droit distant modifié |
| Export statique existant | **66 fichiers, frontière publique acceptée** | Pas une compilation Jekyll complète ni un déploiement |
| Fermeture | Quatre interrupteurs indépendants fermés avant lecture du corps ; catalogue de production vide | Pas de service ouvert |

Les journaux et empreintes des fichiers techniques sont dans `evidence/`. Les erreurs de typage et d'interface détectées pendant le développement ont été corrigées avant les résultats ci-dessus. Les essais multi-session PostgreSQL natif de l'ancienne purge **n'ont pas été rejoués localement** ; ne pas les compter parmi les 66 tests. Aucun bilan de conformité générale du site n'est déduit de ces contrôles ciblés.

## Réutilisation et changements importants

- Même `proposals`, champs besoin/ressource/secteur/catégorie, cohorte C08 et purge candidate. Aucune nouvelle base de propositions, aucun reclassement des archives.
- Ancien handler durci avec HMAC/secret dédié, valeur booléenne du limiteur et absence de faux accusé du piège anti-abus. Le nouveau contrat conserve reçus et suivi sans ajouter de compte obligatoire.
- Le SQL candidat ferme le raccourci historique vers `published` et restreint la lecture des colonnes ajoutées ; l'ancienne page de modération ne doit pas être branchée à ce nouveau contrat.
- Pas de modification du référentiel, de ses 219 objets, des SVG, du manifeste, des workflows C13/C14 ou des statuts de publication.
- Les dépendances de test sont celles déjà épinglées dans le pilote. PGlite et SDK restent séparés de l'interface publique ; aucun service financier ou de profilage n'est ajouté.

## Ce qui reste bloqué avant toute ouverture réelle

1. Accès de lecture technique au projet Supabase Interstice, actuellement refusé à la connexion disponible ; réconciliation des colonnes, contraintes, rôles, fonctions et dépendances de purge sur la version réelle.
2. Réception du contrat SQL candidat et de la nouvelle modération ; essai avec le vrai compte de test autorisé de Zout et un compte non habilité. Aucun compte réel consulté ou ajouté ici.
3. Notice complète du responsable/contact, conditions de traitement, retrait et conservation par statut ; revue juridique des sources/documents et traitement des journaux, copies et sauvegardes. Les décisions déjà prises ne sont pas remises en question.
4. Cadence et supervision permettant de tenir les 30 jours maximum des nouvelles propositions non traitées. La simulation de purge seule ne garantit pas l'effacement à l'échéance.
5. Provenance de l'en-tête IP et rétention/rotation du secret ; réglage d'un quota de suivi distinct du limiteur historique de soumission. Le réemploi direct de son délai de dix minutes ne convient pas à un suivi fréquemment rafraîchi.
6. Liste humaine des premières fiches/recherches publiables, avec IDs, versions et périmètre public ; les manifestations de blocage du maître restent fermées. Aucune lacune privée n'est publiée par cette livraison.
7. Vérification Android, clavier sur petits écrans, TalkBack et audit d'accessibilité approfondi ; raccord de l'interface candidate à la navigation existante après réception.
8. Autorisations d'exécution distinctes si une migration, un déploiement, une activation, une fusion ou une purge réelle est ensuite souhaitée. **Aucune n'est demandée ou exécutée par ce bilan.**

## Non commencés ou volontairement différés

Réception de photos/fichiers et leur stockage sécurisé ; import/fédération d'agendas ; raccord vivant à Mobilizon/Gancio/OSM ; messagerie ou mise en relation de personnes ; modération déléguée ; traitement massif scientifique ; classification algorithmique d'opinions ; financement ; planification réelle de purge. Les automatismes C14 conservent leur périmètre interne.

Le mode de démonstration n'est pas une autorisation d'ouverture. Les quatre réceptions et les catalogues réels restent fermés.
