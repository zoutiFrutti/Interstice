# La Développeuse — Préparation technique du fonds écologique
Date : 31 octobre 2026. **Statut : maquette technique non publiée, contenus non validés.**

## Contrôles initiaux et preuves
- HEAD main avant création : 4e537be0a29a0bb90154353f4e4932c8fbed08fc.
- Référence de L'Archiviste (31/10) : coordination/transmissions/2026-10-31_ARCHIVISTE_PROPOSITION_HISTOIRE_ECOLOGIE_VEGETARISME_VEGANISME.md, blob 2d11da3d3056d9b83ffabaa6ab00f5852a644a5b.
- Contrat L'Anarchitecte : coordination/ANARCHITECTE_CONTRAT_INTEGRATION_FONDS_ECOLOGIQUE_2026-10-31.md, blob 41fca238fb74815112ddebdf3431c6cb8c940e45. **Contrat candidat non adopté**.
- Maquette Graphiste : design/eco-001-maquettes-documentaires-2026-10-31, HEAD a4e87e3d636e82ebc5033acd12270f348ea5c066 ; elle n'autorise aucune publication de contenu. Ne pas copier automatiquement ses maquettes.
- Wiki écologique existant : wiki-ecologie-sociale-environnement.html, blob dd6e149ad8d44b5db5180a800730617b116369f1. Six familles du Wiki et six catégories de la Médiathèque conservées.
- Les travaux de la Juriste, de l'Archiviste, de La Lectrice, de la Médiathèque et de la Tisseuse sont encore des dossiers d'étude, sans adoption collective ni autorisation générale des images et textes. Aucune conversion de recherche en fiche publique.
- V0 intégrée distincte : integration/v0-018a-candidate-2026-10-30, HEAD 9a56a490a3deef80a43ed83b2ff86c9f6c335b05, non modifiée.

## Candidate
- wiki-ecologie.html, index statique et autonome **non relié depuis wiki.html ou bibliotheque.html**, avec meta robots noindex, sans script, formulaire, image, graphique, chiffre scientifique ni contact.
- Trois axes ECO-A/B/C. Statut sources_a_verifier explicite, dates des documents, degré réel de lecture, statut, provenance, droits de réutilisation non établis, limites et objections.
- Liens vers les pages et documents déjà existants, pas de nouveaux FN/BIO/ARCH, carte ou annuaire concurrent. Pas de modification de la page écologique publique ni des modèles historiques.
- Reprend seulement le CSS général existant. Sommaire vertical, clavier, focus, impression, lecture sans JS, sans compte et sans transfert externe.
- Documentation des sources et de leurs licences toujours à contrôler ; cette page décrit les dossiers de travail, sans valider leurs affirmations.

## Vérifications
- Node : liens et ancres internes, trois axes, interdiction de liens entrants depuis le Wiki, statuts, absences de scripts, formulaires et images, CSS print.
- Chromium : 320/390/1280 px, Tab/Entrée, focus, sommaire et ancres, style print, JavaScript désactivé, pas de requête externe, captures si disponibles.
- Workflow : .github/workflows/wiki-ecologie-candidate.yml. Résultats à consulter sur le SHA exact, aucune réussite postulée ici.

## Blocage éditorial
**Le contrat n'est pas validé et les contenus ne sont pas approuvés.** Ne pas publier, ajouter les liens au Wiki, enregistrer une fiche FN/BIO/ARCH, réutiliser les visuels, promouvoir des recherches candidates en faits validés, ou ajouter une fonctionnalité de participation.
Prochaine décision humaine : approuver ou amender le contrat, fournir les fiches relues avec vérifications de faits/versions/archives/droits et l'ordre de publication. Alors seulement envisager le raccordement à la navigation publique.

## Garantie d'isolement
Aucun changement main, Supabase, schéma, backend, RLS, permissions, migration, formulaire, déploiement, fusion ou branche d'atelier. La transmission à La Relieuse via GitHub est une trace, pas une réception dans une autre conversation.
