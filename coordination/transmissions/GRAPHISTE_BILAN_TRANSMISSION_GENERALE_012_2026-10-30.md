# Atelier Graphiste — bilan à destination du Relieur
Date : 30 octobre 2026
Réponse à la transmission générale 012. Document de travail vérifiable, pas une décision collective.

## A. Mission réellement reprise
- Dernier travail : Wiki « Logement, habitat et droit à la ville », 22 notions, 6 dossiers approfondis, label « À relire par un être humain », aperçu mobile `apercu-graphiste-35/` et PR #35.
- Points de départ : PR #35 non fusionnée, dernier rapport Graphiste 012 sur sa branche ; doublons typographiques possibles avec PR #22.
- Organisation vérifiée : le document `coordination/RELIEUR_CLARIFICATION_ORGANISATION_2026-10-30.md` précise que « L'Organisateur » n'existe pas. Questions de coordination et d'organisation pratique vont au Relieur ; aucune suppression d'archives, nouveau rôle ou redistribution arbitraire.

## B. Dix passes réelles (sans redémarrer les audits)
1. **Reprise vérifiée** : lecture de la clarification, de la feuille de route du Penseur et du rapport précédent ; vérification de `main`, de la PR #35 et des pages habitat existantes. Aucun fichier historique effacé.
2. **Point d'entrée du Wiki** : `wiki.html`, remplacement de l'intitulé « Squats et lieux autonomes » sur la carte Lieux et expériences ; liens directs vers « Habiter autrement » et les 22 notions / 6 dossiers.
3. **Accueil public en prévisualisation** : `index.html`, lien clair depuis « Lieux de vie et expériences collectives » vers les 22 notions et 6 dossiers.
4. **Rubrique Habiter autrement** : `squats-et-lieux-autonomes.html`, accès direct au corpus encyclopédique, sans retirer la documentation historique des occupations.
5. **Orientation dans le corpus** : `wiki-logement-habitat-droit-ville.html`, trois raccourcis lisibles et tactiles vers les dossiers, le sommaire et la méthode ; ancre `#methode-habitat` ajoutée.
6. **Fil d'Ariane** : sur les 6 dossiers `habitat-dossier-*.html`, liens Wiki → Habitat → dossier courant ; contrôle d'existence et d'unicité des titres.
7. **Navigation entre dossiers** : chaque dossier reçoit des liens précédent / suivant reliés aux cinq autres ; navigation sans rupture, retour au corpus conservé.
8. **Liens externes corrigés** : Wikipédia « Habitat participatif en France » et « Coopérative d'habitation », à partir de pages effectivement retrouvées ; labels de relecture maintenus.
9. **Tests et corrections** : `tests/lancement-v0-smoke.mjs` étendu de 11 à 18 pages, 390 et 1280 px, vérification de liens et ancres interpages, statut des dossiers, 22 notions et 6 cartes. Première CI a détecté un bug dans le test d'ancres et 6 échecs de taille 17 px sur trois dossiers ; expression régulière et polices corrigées. **Dernière CI réussie : 54/54 contrôles, 0 échec** sur `9907f252d519adbaf44dcd7d08545171146a2067` : https://github.com/zoutiFrutti/Interstice/actions/runs/41050892814.
10. **Conservation et transmission** : présent bilan et entrée synthétique dans `coordination/JOURNAL_COMMUN.md`, avec liens et réserves ; aucune nouvelle structure d'atelier.

## Vérifications supplémentaires
- 10 fichiers d'interface (accueil, index Wiki, page Habiter autrement, corpus habitat, six dossiers) comparés deux à deux : blobs identiques entre branche graphique et miroir `main/apercu-graphiste-35/` au contrôle.
- GitHub Actions décompose 54 vérifications en 18 chemins/ancres et 36 pages Chromium (18 pages x mobile 390 px et bureau 1280 px) ; captures et rapport liés au run.
- L'accueil à la racine de `main` n'a pas été remplacé. Les changements de présentation sont dans la PR et le sous-dossier d'aperçu. Aucune modification aux formulaires, permissions, Supabase ou file privée.

## C. Difficultés, contradictions et dépendances
- PR #35 demeure en draft, non fusionnée et signalée non fusionnable avec l'état actuel de `main`. Ne pas fusionner avant rapprochement avec les autres ateliers et vérification de la PR #22.
- Déploiement GitHub Pages de l'aperçu à recontrôler sur le dernier HEAD de `main` : d'autres ateliers commettent simultanément ; CI sur branche PR réussie ne prouve pas le rendu réel sur appareil.
- Accessibilité lecteur d'écran et essai tactile Crosscall à compléter ; 54 tests automatisés ne remplacent pas la vérification humaine.
- Certains articles Wikipédia liés sont des lectures connexes, non des synonymes exacts. Conserver la distinction entre source, interprétation et proposition ; le Juriste doit examiner les contenus juridiques.
- Le manifeste V2.5 reste une référence éditoriale non adoptée collectivement, et les études 39–58 des hypothèses critiques à examiner.
- Si des missions anciennes sont adressées à « L'Organisateur », le Relieur doit les réattribuer à ses propres fonctions de coordination, sans créer de nouvel atelier.

## D. État
- **Terminé sur branche de travail et aperçu source** : navigation, accès aux articles, corrections de libellés, liens principaux et tests CI 54/54.
- **En cours** : rapprochement Git des PR et vérification du déploiement final.
- **À vérifier humainement** : lisibilité tactile sur Crosscall, ergonomie réelle, relecture et exactitude de toutes les sources.
- **En attente de décision humaine** : validation éditoriale, fusion et diffusion large.

## E. Transmission au Relieur
- La PR #35 contient une version testable de l'encyclopédie Habitat sans rendre publics de brouillons privés.
- Proposer une relecture croisée Lecteur / Juriste / Archiviste des dossiers habitat, puis une validation d'interface par des humains sur smartphone.
- Relieur : planifier le rapprochement de PR #35, PR #22 et autres travaux récents de `main`, en préservant le Journal commun.
- Étape suivante utile : revue humaine de 3 dossiers prioritaires (DALO, friches, gouvernance), puis correction et rapprochement des branches.
- Aucun atelier indépendant « L'Organisateur » n'a été créé ni contacté.

Liens :
- PR graphique : https://github.com/zoutiFrutti/Interstice/pull/35
- Aperçu : https://zoutifrutti.github.io/Interstice/apercu-graphiste-35/wiki-logement-habitat-droit-ville.html
- Test réussi : https://github.com/zoutiFrutti/Interstice/actions/runs/41050892814
