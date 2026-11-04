# WORK-NAV-01 — aperçu indépendant

## Reproduire

```sh
node scripts/build-nav-preview.mjs
cd dist-nav
python3 -m http.server 8080
```

Ouvrir `http://localhost:8080/`. Un serveur HTTP est nécessaire pour les modules ; `file://` ne convient pas. Le même artefact est testé sous le préfixe `/Interstice/`. L’adresse `explorer.html` reste également disponible.

La construction copie exclusivement modules, CSS, deux SVG officiels, deux manifestes publics et leur style. Quatre pages de compatibilité conservent les anciens noms d’index et renvoient explicitement vers R6. Les fichiers historiques du dépôt sont inchangés. Un dossier de sortie contenant un fichier hors liste est refusé sans suppression.

`checksums.json` contrôle les fichiers copiés. Aucun catalogue éditorial, agent, coordination, extension QA, secret ou ressource bloquée n’entre dans cet aperçu.

## URL HTTPS : autorisation nécessaire

Aucun environnement Sites existant n’a été trouvé le 4 novembre 2026. L’aperçu d’atelier est local ; son adresse interne ne constitue pas une URL publique testable par Zout. Aucun déploiement n’a été effectué.

Action prête à autoriser : créer un aperçu Sites privé nommé **Interstice — WORK-NAV-01**, y déposer exclusivement ce dossier statique testé, puis contrôler l’entrée, le lecteur et les liens profonds derrière l’accès privé. GitHub Pages, son domaine et main restent inchangés. Consigner ensuite l’URL réellement créée ; aucune adresse n’est inventée avant cette étape.

## Captures et archive

Le workflow `WORK NAV01 isolated navigation QA` produit l’artefact `work-nav01-preview-and-evidence-<HEAD>`, contenant `dist-nav/`, captures, résultats et `artifacts/nav01/HEAD.txt`. Conservation CI : 14 jours ; sources reproductibles conservées dans la PR.

Les captures de ce dossier indiquent leur commit source dans `captures/SOURCE_HEAD.txt`. Les vues 390 px sont des simulations navigateur, jamais des photographies de téléphone. La capture 400 % doit montrer le viewport natif : une ancienne capture vide a été rejetée, le test interdit désormais ce résultat.
