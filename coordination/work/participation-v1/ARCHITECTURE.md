# Architecture candidate des outils participatifs

L'étude et l'audit précèdent cette conception. Cette V1 est un parcours fonctionnel de test, pas une ouverture du service public.

## Navigation et périmètre

Six portes conservées. **Faire Ensemble** accueille Proposer, Contribuer et Recherches ouvertes ; une fiche des autres portes propose un lien contextuel de contribution avec son ID et sa révision. Les recherches localisées peuvent être référencées dans l'Atlas. Aucun changement des logos ni septième porte. La démonstration utilise seulement des fiches et institutions signalées fictives.

## Modèle de suivi

Deux axes indépendants :

| Axe | États | Effet |
|---|---|---|
| Traitement d'un apport | reçu → examiné → retenu pour instruction, ou rejeté | Motif, date, responsable et version ; aucune publication |
| Chaîne éditoriale | à vérifier → vérifié → validé humainement → intégré → publié | Visas spécifiques à une empreinte de contenu ; aucun de ces quatre derniers états n'est déduit d'un accord sur une proposition |

Le présent récepteur gère le premier axe. La revue documentaire conserve explicitement la vérification de la source et des droits ; elle ne confère pas les visas de la chaîne éditoriale existante. Le code de réception n'a **aucune fonction de publication**. Une proposition retenue reste privée. Le suivi par reçu affiche des états et motifs destinés à la personne, jamais le contenu brut ou le journal interne.

## Données et frontières

- `public.proposals` et la cohorte historique sont réutilisés, avec colonnes additives candidates pour type/titre/références, empreinte du reçu et historique privé. `status` demeure `pending` durant examen/instruction et `rejected` en cas de refus. Un véritable examen remplit `moderated_at`, excluant la ligne de la purge des non-traités.
- `participation_private` reçoit les contributions, les recherches et leur historique, les arguments modérés et les références de Carte/agendas. Aucun accès direct anon/authenticated. RLS + privilèges restrictifs ; RPC accessibles au seul serveur. Aucun bucket ni fichier joint créé.
- Le récepteur public vérifie activation, origine, taille, schéma, ID/empreinte courants et données personnelles détectables. Limitation d'abus côté serveur. Un reçu aléatoire de 256 bits est remis une seule fois ; seul son SHA-256 est stocké. Le reçu est transmis en corps POST, jamais dans une URL, un journal ou un stockage navigateur.
- Le modérateur est authentifié côté passerelle via Supabase Auth puis `is_moderator` avec son JWT. Le backend privilégié n'est accessible que côté serveur, jamais dans l'interface. La démonstration locale utilise un jeton temporaire distinct, uniquement sur bouclage, sans compte réel.
- La source/version d'une contribution est figée ; un changement de fiche impose une nouvelle revue. Aucun identifiant du référentiel réservé n'est sérialisé par défaut. L'adaptateur maître lit les 219 ID et blocages ; le catalogue participatif public nécessite une liste d'autorisation distincte, vide en production candidate.
- Les liens sont des références textuelles HTTP(S) sans identifiants d'authentification, hôtes locaux, adresses IP ou schémas actifs ; aucune récupération serveur ou prévisualisation distante. Les fichiers/photos restent hors V1, dans l'attente du stockage sécurisé et de l'examen des droits.

## Recherches, discussion et Carte

Une recherche est une question précise, un document/fonds/institution, une cote, des conditions, des consignes et une preuve attendue. Le catalogue n'affiche que les fiches publiables explicitement approuvées ; les réponses sont privées. Filtre par texte, institution, secteur public général et état. La clôture doit citer une réponse réellement vérifiée ; une réouverture doit être motivée. Pas de classement ni score de contributeurs.

La discussion accepte argument, objection, source ou accord explicite ; chaque apport est modéré avant affichage. Une décision garde les objections et les suites, sans vote converti en vérité. Les contributions restent distinctes des automatismes C14.

Les références de Carte exigent vérification, consentement de référencement et adresse déjà publique, avec retrait des coordonnées précises pour les lieux sensibles. La V1 prépare un export minimal sur liste blanche et une référence canonique d'événement Mobilizon/Gancio ; aucun fond de carte, profil, flux, géocodage ou import n'est ajouté. Le prototype #193 garde son rôle de démonstration de carte.

## Livraison technique

JavaScript ESM sans framework ajouté ; SDK Supabase déjà épinglé ; base locale PGlite existante pour les tests. Adaptateur RPC commun au serveur local et au futur backend Supabase. SQL candidat additif, jamais exécuté sur le projet distant. Interrupteurs indépendants pour propositions, contributions, réponses aux recherches et discussion, tous fermés par défaut. Le catalogue de production est vide tant qu'aucune fiche n'a reçu son autorisation propre.

L'aperçu construit une liste blanche de fichiers statiques et de fixtures fictives ; il n'embarque ni catalogue maître, ni file privée, ni secret. Le mode démonstration explicite utilise une base PGlite temporaire en mémoire côté serveur ; les formulaires vérifient les vrais enregistrements SQL locaux. Rien n’est enregistré dans le stockage du navigateur. L'exécution distante reste bloquée par les réserves de l'audit.
