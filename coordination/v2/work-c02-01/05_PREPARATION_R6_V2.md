# Préparation R6 → V2

| Élément R6 réellement présent | Réemploi | Adaptation future nécessaire |
|---|---|---|
| `assets/logo-interstice.svg`, `assets/logo-faille-noire.svg` | Fichiers officiels inchangés | Calque indépendant ; ne pas redessiner |
| `assets/faille-navigation.js` : caméra, sélection, `pushState`/`popstate` | Principes de caméra et historique | Extraire la configuration des cinq destinations, distinguer portes et Parcours, revalider les interactions |
| `assets/faille-navigation.css` | Focus, styles de commandes et réduction des mouvements | Reflow, quatre portes, noms complets et panneau d’étapes |
| `design-system/faille-navigation-interactive.html` | Liste équivalente, commandes, SVG externe | Quatre portes ; les Parcours sont une vue transversale ; statut des logos à corriger séparément |
| `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html#entraide` | URL et contenu existants | Raccord documentaire après visas ; pas de redirection sans audit |
| Tests R1/R2/R4/R6 existants | Contrôles de non-régression | Les assertions « cinq nœuds » doivent rester vraies pour le site actif dans cette PR ; nouveaux critères seulement après autorisation d’intégration |

## Composants réalisés dans ce lot
- `lib/catalogue.mjs` : index des identifiants/alias, résolution des ressources, accès par porte, filtre public fermé et validation structurelle.
- `lib/navigation-plan.mjs` : lecture des fragments historiques et état de navigation candidat, bifurcations et retours sans DOM, réseau ni stockage.
- `schema/v2.schema.json` : schéma JSON candidat, contrôlé avec les contraintes de références croisées dans le validateur local.
- `tools/check.mjs` : validation des données, 524 empreintes de main, URL/ancres historiques et sources locales ; inventaire des liens internes cassés préexistants.
- `tests/contract.test.mjs` : invariants métier, refus des erreurs de graphe/alias et fermeture de publication, historique des étapes.

**Aucun module n’est importé par la page publique.** Aucun fichier applicatif, SVG, workflow existant ou configuration de production n’est modifié. Aucune migration de base de données ni dépendance ajoutée. Cette préparation peut être revue ou abandonnée en retirant son répertoire et le nouveau workflow `.github/workflows/work-c02-candidate.yml`. Le workflow a seulement la permission `contents: read` et ne déploie rien.

## Conditions pour une intégration ultérieure
Obtenir les sources C02 intégrales, arbitrer les manques documentaires, viser un lot exact ; autorisation de Zout pour modifier la navigation active ; branche dédiée au rendu ; tests clavier, tactile, lecteurs d’écran, zoom, sans JS, réduction des mouvements et préservation des URL. Une fusion documentaire éventuelle ne vaut pas autorisation de déployer une fonctionnalité.
