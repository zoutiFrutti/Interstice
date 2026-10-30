# Proposition — Médiathèque vivante et sélection hebdomadaire
Date : 2026-10-30. Statut : proposition de conception, non implémentée et non publiée.

## Intention
Créer sur la page Médiathèque d'Interstice une programmation de découvertes issues de portails culturels libres et patrimoniaux : films de la semaine, musiques, archives sonores, documents éducatifs, créations militantes, patrimoine mondial et découvertes aléatoires.

## Sources candidates
Internet Archive, Wikimedia Commons, Openverse, Gallica, Library of Congress National Screening Room, European Film Gateway, Musopen, Freesound. La disponibilité d'API, de flux, de licences et de métadonnées doit être évaluée source par source ; ne pas présumer qu'un portail peut être aspiré.

## Architecture progressive
1. Prototype statique : 10 œuvres sélectionnées manuellement avec URL canonique, attribution, image autorisée, langue, format, durée, époque, thème, licence exacte, date de vérification, accessibilité.
2. Récolte automatisée limitée à des API ou flux officiels autorisés ; stockage local d'une liste de candidats, cache, déduplication par identifiants source et URL canonique, journal des échecs, fréquence raisonnable, aucune copie de média sans droit.
3. Proposition hebdomadaire diversifiée : 3 films, 3 musiques/sons, 2 patrimoines, 2 œuvres éducatives ou militantes ; rotation, hasard et choix humains, sans prétendre à un classement de popularité objectif.
4. Interface : « Cette semaine », « À écouter », « Radical et libertaire », « Patrimoine », « Surprends-moi », filtres thème/langue/durée/droits, liens « Voir à la source ».
5. Sécurité éditoriale : séparer domaine public vérifié, licence libre vérifiée, consultation gratuite à droits réservés et droits incertains ; ne pas afficher « libre de droit » pour une simple lecture gratuite ; signaler les descriptions ou images non autorisées ; ne pas republier les fichiers sans vérification.
6. Tests : source indisponible, retrait d'une œuvre, changement de licence, métadonnées manquantes, doublons, accessibilité mobile, navigation clavier, liens cassés.

## Dépendances
Médiathèque : inventaire et provenance des sources. Développeuse et Anarchitecte : intégration technique sans casser la page existante. Graphiste : lisibilité et design. Juriste : politique de droits et retrait. Relieuse : coordination. Validation humaine avant toute publication ou activation automatique.

## État
Aucune API branchée, aucun crawler lancé, aucun classement hebdomadaire effectif, aucune page modifiée. Cette proposition n'autorise pas à engager une nouvelle vague de passes sans objectif concret.
