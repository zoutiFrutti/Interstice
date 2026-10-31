# La Graphiste — Cycle 7 — Rapport de conception et QA
**1er novembre 2026. Candidate sans fusion, publication ni mandat des IA.**

## Passe 1 : réconciliation
Branches examinées : PR #50 SHA `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb`, PR #57 SHA `2d8bb7960d7e2a4f1f3428841cbcc705a0962877`, PR #59 SHA `755588993e58e3a97d60d27be4d99f387a81316c`, PR #61 SHA `b101de10f8044ff486880c50a10091700428a4ca`, PR #63 SHA de base `4988dbce3606fa6c319089354d11f32b47436b04`. Réemploi intégral des dix gabarits et des cinq statuts dans la maquette dérivée. Aucun texte Wiki ni correction La Lectrice modifié.

## Passe 2 : profils et provenance
- Nouveau CSS scopé `assets/graphiste-cycle7-provenance-medias.css`. Marquages visuels ET textuels distincts pour **archive authentique, illustration contemporaine et reconstitution**. Les exemples sans médias sont explicitement marqués **droits non vérifiés / diffusion bloquée**. Une couleur ou un type déclaré n'établit jamais l'authenticité.
- Assemblage `design-system/maquette-cycle7-medias-territoires.html` : base C6, dix gabarits, cinq statuts, quinze liens de tri avec réserves, trois notices de média *sans image* et trois profils candidats (dossier territorial Aragon/Catalogne, biographie Nathalie Le Mel, enquête sur les mouvements zapatistes). Pas d'adresse, localisation précise de personnes vivantes, portrait inventé ou source confidentielle.
- Provenance requise avant publication de chaque média : auteur/crédit, institution conservatrice, cote/URL, date, conditions de licence et autorisation, type d'image, degré de reconstitution, droits de la personne représentée si applicable. **Ce ne sont pas des validations obtenues : les trois exemples restent non autorisés à diffuser.**

## Passe 3 : tests ciblés
Tests `tests/graphiste-cycle7-2026-11-01.test.mjs` ; CI `.github/workflows/graphiste-cycle7-2026-11-01.yml`. Sur Chromium, 320/390/1280 px : structure, dix gabarits via contenu C6, cinq statuts, quinze liens, trois types de média, trois profils, focus/Entrée, exercice `details`, absence de formulaire/image/script, débordement horizontal, police principale, contraste texte principal/fond, simulation de taille CSS 200 % à 320 px et production de captures et PDF A4. **Le succès exact doit être lu dans le workflow exécuté sur le SHA livré.**

## Limites et réserves ouvertes
- Aucun audit complet des médias présents dans *tout* le dépôt ; trois exemples textuels ne démontrent pas l'autorisation des images existantes. Aucun lien ni licence externe n'a été vérifié manuellement dans cette passe.
- Aucun TalkBack, VoiceOver, NVDA ou autre lecteur d'écran lancé sur appareil réel. Le focus clavier et la sémantique HTML ne remplacent pas cet essai. Absence de tests physiques sur mobile, zoom système/navigateur, impression papier, inspection humaine du PDF ou tests utilisateurs de compréhension. Contraste testé sur texte principal seulement.
- Les documents V2.6 et chartes restent candidats selon la PR #58 consultée lors des passes précédentes ; les états ont pu évoluer, à recontrôler sur le registre de décision avant intégration. Pas d'adoption collective fictive. Seul Zout détient actuellement la décision.
- Le fichier `noindex` est publiquement lisible si la branche est visible ; ne pas importer de matières privées. L'enquête zapatiste doit éviter données sensibles et identification de personnes vivantes.
- Les quinze entrées existantes restent des pages en tri, **pas quinze textes corrigés fusionnés**.

## Point de reprise
L'Anarchitecte : valider la taxonomie des médias, routes et liens d'archive sur la branche d'intégration. La Développeuse : importer le CSS par opt-in seulement et exécuter tests sur SHA final, sans écraser La Lectrice. La Relieuse : déterminer les versions et médias autorisés par Zout, demander les preuves de droits et organiser le contrôle humain d'accessibilité. Aucun merge ou publication.
