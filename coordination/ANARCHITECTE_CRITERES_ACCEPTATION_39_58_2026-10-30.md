# Anarchitecte — critères d'acceptation du prototype local (études 39–58)

Date : 2026-10-30
Statut : **proposition technique à examiner, non adoptée collectivement**
Origine : `coordination/transmissions/2026-10-30_PENSEUR_VERS_DEVELOPPEUR.md`
Référence : `coordination/PENSEUR_FEUILLE_DE_ROUTE_ETUDES_39_58_2026-10-30.md`

## État réel contrôlé sur main

- `index.html` propose un besoin / une ressource. `script.js` appelle la fonction Supabase `submit-proposal`. Le fonctionnement d'un envoi complet n'est pas démontré par cette seule inspection.
- `participer.html` explique les parcours et renvoie à l'accueil et aux contributions Wiki ; elle ne réalise pas de mise en relation directe.
- `bibliotheque.html` propose une recherche de ressources et un formulaire de proposition de ressource, pilotés par `ressources.js`.
- `wiki.html` présente une recherche documentaire, qui ne constitue pas une recherche d'initiatives locales géolocalisées.
- Dans ces fichiers, aucun module de cartographie interactive, moteur de rapprochement géographique, export personnel ou workflow de consentement à une rencontre n'a été identifié.
- L'application mobile et son partage effectif de données avec le site ne sont **pas établis** par cet audit de cinq fichiers. Vérifier le dépôt/app existant avant de décider quoi construire.
- Le circuit documentaire GitHub → Supabase, déjà testé sur quinze brouillons, ne doit **pas** être confondu avec les propositions locales ni avec leur publication.

## Périmètre V0 testable proposé

Parcours à préserver : 1. publier un besoin local ; 2. découvrir une initiative ; 3. proposer une ressource ; 4. préparer une rencontre librement consentie. La même information pertinente doit pouvoir être trouvée sans application obligatoire. Aucune publication d'information privée par défaut, aucun score de popularité.

| ID | Test d'acceptation | Résultat attendu |
| --- | --- | --- |
| A01 | Besoin sans vote, seul, sur un secteur volontairement large | Visible dans la recherche autorisée, pas rétrogradé par absence de soutiens |
| A02 | Proposition depuis navigateur mobile, sans installation | Parcours complet et confirmation de réception accessibles |
| A03 | Recherche des initiatives par territoire et catégorie | Critères explicites ; aucun classement moral ou de popularité |
| A04 | Affichage carte et liste | Même ensemble de résultats, y compris accès en liste sans carte |
| A05 | Localisation demandée | Permission optionnelle ; localisation précise jamais publique par défaut |
| A06 | Mise en relation | Consentement positif des personnes concernées avant transmission de coordonnées |
| A07 | Rencontre hors plateforme | Participation possible sans conserver compte actif ni présence connectée |
| A08 | Ressource rare proposée par plusieurs personnes | État de disponibilité explicite, sans prime au plus grand nombre de soutiens |
| A09 | Désaccord sur un usage | Correction, contestation et explication accessibles sans bannissement arbitraire |
| A10 | Export demandé par une personne autorisée | Export limité aux informations auxquelles elle a droit, jamais aux données privées d'autrui |
| A11 | Panne réseau ou service Supabase | Échec lisible, pas de double enregistrement au nouvel essai |
| A12 | Navigation au clavier, lecteur d'écran et petit écran | Tous les contrôles accessibles et libellés, carte non obligatoire |
| A13 | Proposition non vérifiée | Distinction visible entre déclarée / documentée / validée |
| A14 | Site et application partagent une donnée | Même identifiant, version, statut et restrictions d'accès |
| A15 | Réutilisation d'une ressource ou projet après rencontre | L'initiative peut continuer hors Interstice et demander retrait de ses données |

## Ordre de réalisation suggéré

1. **V0 immédiate :** stabiliser accueil, participation, bibliothèque, Wiki et messages d'erreurs. Vérifier en navigateur les formulaires existants avant toute annonce de bon fonctionnement.
2. **Pilote local contrôlé :** établir le schéma commun besoins / initiatives / ressources, visibilité publique distincte des informations de contact, statut de vérification, consentement explicite.
3. **Carte et rencontres :** liste accessible d'abord, cartographie facultative ensuite. Aucune localisation exacte affichée automatiquement.
4. **Application :** reproduire les fonctions essentielles sur le même backend, après vérification du dépôt mobile et des autorisations.
5. **Export / corrections / contestation :** définir les destinataires et les durées de conservation avec le Juriste avant implémentation.

## Dépendances et contradictions à résoudre

- **Juriste :** base légale, finalités, effacement, preuve du consentement, sécurité des lieux et personnes vulnérables.
- **Organisateur :** scénarios de terrain avec participation hors ligne et observation non intrusive.
- **Graphiste :** recherche explicable, accessibilité de la liste et absence de pression au vote.
- **Développeur :** schéma de données commun et tests entre site et application ; ne pas dupliquer les systèmes existants.
- **Penseur / Lecteur :** confirmer les sources et contradictions des études. Les études 39–58 restent des hypothèses critiques et non des obligations du collectif.

**Limite de ce livrable :** audit statique ciblé et proposition de tests, sans expérience réelle de navigation, test d'intégration mobile ni déploiement. Aucun statut, droit de modération ni fiche Wiki modifié.
