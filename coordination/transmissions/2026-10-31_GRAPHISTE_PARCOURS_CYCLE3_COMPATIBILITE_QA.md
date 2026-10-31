# CYCLE 3 — La Graphiste : réconciliation PR #57 / PR #50, deux passes
**31 octobre 2026 — candidat non publié, aucune fusion, aucun visa collectif.**

## Passe 1 — Assemblage
- PR #50 HEAD vérifiée : `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb`. PR #57 était déjà empilée sur cette branche. Le CSS des parcours `assets/parcours-critiques.css` est scopé à `.interstice-fiche.parcours-critique`. Il utilise les variables de fontes et les styles de la PR #50, sans modifier le schéma, le moteur ni les textes Wiki.
- Les trois variantes (écologie, démocratie, coopératives) existent dans `design-system/maquette-parcours-critiques-2026-10-31.html` : une affirmation qualifiée, des références, une objection, une incertitude, un exercice facultatif et un retour à la page existante, sans collecte de réponse.
- **Correctif réel** : douze liens locaux de source ou retour vers les pages Wiki ont été changés de `wiki-*.html` en `../wiki-*.html`. La maquette se trouve dans `design-system/` et les articles dans la racine. Aucun texte d'article ou commentaire de La Lectrice modifié.
- Aucun graphique scientifique, portrait, fac-similé, nouvelle page Wiki, formulaire ou backend ajouté.

## Passe 2 — QA et limites
Test `tests/parcours-critiques-graphiste-2026-10-31.test.mjs` étendu pour contrôler : nombre de parcours, présence de faits/sources/objections/incertitudes/exercices, routes Wiki réelles avec réponse HTTP 200, focus/Entrée et `details`, police et largeur à 320/390/1280, contraste principal calculé, zoom du texte simulé à 200 % sur 320 et génération du PDF A4. Workflow dédié `.github/workflows/parcours-critiques-graphiste-2026-10-31.yml`.

**Séparation des preuves :** l'exécution Chromium est un test automatisé du DOM et du CSS ; le 200 % est une simulation de taille de texte CSS, **pas** un zoom système ni navigateur ; l'A4 est un PDF généré, **pas** une relecture humaine du papier ; les balises structurées, labels et `details/summary` ne prouvent **pas** la qualité de lecture réelle avec VoiceOver ou TalkBack. Aucun essai physique, entretien utilisateur ni audit WCAG complet exécuté. La vérification de la véracité et des droits des sources citées relève des ateliers et de La Relieuse.

**Défauts et points d'attention :** les sources scientifiques restent externes et sans chiffres insérés ; l'exercice n'enregistre pas de progression ; la maquette `noindex` est potentiellement accessible si un jour fusionnée, donc aucun brouillon privé ne doit y entrer. La route vers les pages corrigées de La Lectrice doit être revalidée sur le SHA d'intégration et non fusionnée implicitement depuis la maquette.

### Transmission
- **L'Anarchitecte** : contrôler mapping des routes avec les 24 pages existantes, modèle source/contradiction, absence de fuite des brouillons, version d'intégration et sécurité des URLs.
- **La Développeuse** : n'utiliser que les classes CSS et HTML candidats, préserver les corrections de La Lectrice et rejouer QA sur SHA candidat, sans nouvelle publication.
- **La Relieuse** : garder les trois contenus comme parcours candidats de La Penseuse, obtenir contre-lecture des assertions, avis droits et décision expresse de Zout.
Aucune fusion, aucune publication et aucune adoption collective.
