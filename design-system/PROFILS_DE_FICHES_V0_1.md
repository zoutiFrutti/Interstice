# Profils de fiches et composants — V0.1
**Proposition de l'atelier Graphiste, à discuter avec l'Anarchitecte et les ateliers documentaires.**

Ce document définit les **zones d'affichage**. Il ne prétend ni vérifier les contenus ni imposer une ontologie politique au Wiki. Tous les types utilisent `design-system/fiche.schema.json`, `assets/fiche-design-system.css` et la même séparation des statuts.

| Genre | Informations à fournir par l'atelier | Affichage proposé | Risques et vérifications |
|---|---|---|---|
| **Biographie** | nom/publication autorisée, périodes et lieux documentés, œuvres et expériences, citations attribuées, versions contradictoires, sources | notice + chronologie lisible + parcours thématique + sources | éviter profils de personnes privées sans consentement, identifications incertaines, photos non autorisées |
| **Lecture croisée** | éditions consultées, thèses attribuées, comparaisons, accords et désaccords, pages à compléter, interprétations du collectif | cartouche de statut + auteurs/œuvres + confrontation + questions + bibliographie | ne pas inventer de citations ou confondre les livres avec leur interprétation |
| **Archive** | cote, lieu de conservation, date, provenance, authenticité/limites, droits de reproduction, documents liés | provenance bien visible + fac-similé autorisé + transcription séparée + ce que la pièce établit et n'établit pas | éviter d'exposer objets sensibles et données personnelles ; distinguer transcription et inférence |
| **Article documentaire** | problématique, faits qualifiés, sources par paragraphe, méthodes, controverses, corrections | chapô + sections + notes de preuve + contradictions + historiques | ne pas convertir une hypothèse en fait ; dater les chiffres et les règles |
| **Bibliographie** | auteur·ice, titre, édition, date, traduction, lieu d'accès légal, licence éventuelle, note de lecture | listes structurées, regroupements et filtres accessibles | distinguer livre possédé, consulté et seulement repéré ; ne pas exposer liens pirates |
| **Tutoriel / savoir-faire** | matériel, prérequis, étapes, conditions de test, entretien, risques, coûts, variantes et provenance | étapes numérotées + photos anonymisées si besoin + précautions + limites de reproductibilité | ne pas présenter une méthode comme certifiée ; distinguer test local d'une garantie de sécurité |

## Composants communs

- `fiche-hero` : rubrique, type, titre, résumé ; un `h1` unique.
- `fiche-state` : statut éditorial **issu du système autorisé**, écrit en toutes lettres et lisible sans couleur.
- `fiche-contents` : sommaire d'ancres calculées sur les titres, navigation clavier.
- `fiche-section` : corps de lecture et unités de sens ; source attachée au passage pertinent.
- `fiche-section--discussion` : divergences attribuées, interprétations et limites sans mise en équivalence artificielle.
- `fiche-section--sources` : bibliographie et provenance contrôlables ; « source citée » n'est jamais synonyme de « source vérifiée ».
- **Révision** : auteur·ice/atelier si divulgation autorisée, numéro, date, changements, anciens états ; décision éditoriale traçable à part.

## Règles d'affichage et de confidentialité

**Couleurs :** noir profond `#101014`, ivoire `#E9E5DB`, rouge `#C5212C`. Les surfaces ivoire signalent les données de lecture et de référence ; ne pas utiliser uniquement la couleur pour signaler une incertitude. `font-display: swap` et fontes locales prévues dans la PR #22, avec repli natif tant que celle-ci n'est pas publiée.

**Dégradé d'attestation :** `fait_documente` et `analyse` sont des qualifications proposées par l'atelier contributeur, non des résultats automatiques. Les autres classes `hypothese`, `temoignage`, `proposition`, `a_verifier` doivent rester visibles et être reliées à leurs sources/limites. Les contenus dangereux ou identifiants ne deviennent jamais publics parce qu'ils sont bien formatés.

**Écran et papier :** ordre de lecture identique sur mobile et ordinateur, sommaire utilisable sans souris, titres non coupés, liens sourcés, impression sans fond coloré indispensable. Contrôles Chrome mobile et desktop à compléter par lecteurs d'écran et autres navigateurs.

## Convention anti-doublon

Une **fiche** existe d'abord comme contribution avec un identifiant et des versions. Ses différentes vues (HTML, PDF, aperçu de modération) ne sont pas de nouvelles fiches et doivent préserver le même identifiant source. Ne pas créer de page Wiki supplémentaire lorsqu'une référence ou une correction suffit. Le Graphiste prépare un habillage, l'Anarchitecte définit le rendu et les permissions, les ateliers produisent les preuves ; la décision de publication demeure indépendante.

**État des réalisations :** seul le modèle « lecture croisée » est actuellement appliqué à une page existante dans la PR #24. Les cinq autres genres sont des **profils graphiques proposés**, non des fonctionnalités déjà développées.
