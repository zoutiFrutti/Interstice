# Interstice · Mission 018-A · assemblage candidat V0

**Statut : candidate locale de test, non publiée, non fusionnée.** Aucune donnée fictive n'est une initiative réelle. Aucune coopération/partenariat n'est confirmée.

## Provenances figées au moment de l'assemblage
- PR #35 : 9df37c5cd8532598928fd5dd8b795e5ba2e667f4 (accueil, typographie, Wiki, deux présentations).
- PR #41 : e6817ec274b858a62b4918bfc22faa01d79b354d (11 exemples fictifs, deux cartes, liste, focus, navigation).
- PR #42 : 347f31c9b2d6a9ad856dcb7500fb982dfc85a602 (gestion des formulaires et tests).
- PR #44 : b08ee0b915a162faa2d870debc6580b08ca29935 (texte de référence des deux articles).
- PR #43 transmission 016 : 30cec27be0c5c04052934ebc3d79b46f73f3061b (cible T0, critères, aucune publication).
- Base main au moment de la préparation : 73ae54f4f327a04fa6c22dfc78e9a9b2f253ac7d.

**Contrôle éditorial :** les 22 paragraphes de PR #44 article « Décider ensemble » se retrouvent tous et exactement dans la version graphique PR #35 (24 paragraphes, +2 encadrements). Les 19 paragraphes de « Qui fait vivre les communs ? » y sont aussi tous conservés (21 paragraphes, +2 encadrements). Les blobs des versions graphiques sont f601d706cdd154ebbc28589ed921befe5531b487 et 88025ed960e4bd7f9faf9088bb81b49b6524546b. Ne pas remplacer par une copie antérieure.

## Parcours candidat
Accueil (index.html) → **Découvrir les exemples fictifs** (decouvrir-initiatives.html) → simulation « besoin/ressource » (#experiment) → filtre commune → résultats et explications → liste/carte → fiche → retour → Participer (participer.html) → Wiki (wiki.html) et deux articles candidats.

**Statuts visibles :**
1. Exemples fictifs uniquement : 11 fiches de simulation, quatre kinds et deux readings, sans coordonnées ni contacts.
2. Proposition réelle soumise à validation : fonction distincte, formulaire en lecture/essai **non envoyant** dans cette candidate.
3. Fonctions non disponibles : messagerie, coopération réelle, mise en relation à travers la carte.

**Sécurisation 018-D :** les fichiers `script.js` et `ressources.js` distribués avec cette candidate ne contiennent plus aucun chemin de requête réelle, ni de commutateur `INTERSTICE_CANDIDATE_MODE`. Les formulaires sont strictement locaux et affichent les messages explicites de non-envoi ; le catalogue de ressources local reste consultable. Le code de production de la PR #42 est conservé intact sur sa branche originale. Les tests statiques et Chromium vérifient que forcer cette ancienne variable à `false` ne produit aucune requête.

## Démarrer sans publier
Sur une copie locale de la branche :
\`\`\`sh
python3 -m http.server 8000 --bind 127.0.0.1
\`\`\`
Ouvrir http://127.0.0.1:8000/index.html et naviguer vers Découvrir, Participer, puis le Wiki.

Tests Node :
\`\`\`sh
node --check script.js && node --check ressources.js
node --test tests/initiatives-core.test.mjs tests/v0-form-acceptance.test.mjs tests/integration-v0-018a.test.mjs
\`\`\`

Tests Chromium :
\`\`\`sh
npm install --no-save --ignore-scripts playwright@1.56.1
npx playwright install chromium
node --test tests/initiatives-browser.test.mjs tests/integration-v0-018a.browser.test.mjs
\`\`\`

Workflow dans .github/workflows/integration-v0-018a.yml, déclenché sur le push de la branche, capture des écrans 320/390/1280px. Ne pas présenter ce document pré-CI comme une preuve de succès : consulter le run associé au SHA candidat.

## Réserves
Essais sur Android physique, TalkBack, Safari et Firefox **non exécutés**. Pas de test POST réel. Aucun changement de permissions, RLS, Supabase, base, messagerie, droits ou contenu sur main. PR d'origine préservées. Publier ou adopter nécessite une décision humaine. Les liens de contribution à d'autres formulaires du site ne font pas partie du test de soumission.

## Transmission 018-D : isolement des scripts de démonstration

- Le JavaScript livré pour les formulaires et le catalogue ne comporte plus de soumission ni de lecture des propositions/ressources réelles.
- Le bouton de proposition et le formulaire ressource affichent un état explicite, sans effacer les saisies ni envoyer les données.
- Les tests précédents qui simulaient une soumission de production en mémoire ont été remplacés **sur cette seule branche** par des tests de non-envoi et un contrôle statique des scripts.
- Un test Chromium force l'ancienne variable de mode à `false` avant et après chargement, puis réessaie les deux formulaires à 320, 390 et 1280 px.
- Le jeu des onze fiches, les deux cartes, le Wiki, la navigation, le CSS commun et les branches sources ne sont pas modifiés.
- L'état du dernier run GitHub Actions sur le nouveau SHA fait foi : ce document ne prétend pas avoir exécuté de tests physiques sur téléphone.
