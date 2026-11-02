# Transmission C12 — Médiathèque → La Relieuse
Date 2026-11-02. **Sélection éditoriale candidate uniquement**. Aucun merge, publication, diffusion ou hébergement.

## Sources réutilisées
- Matrice 71 FN `coordination/mediatheque/cycle10_matrice_71_sources_candidats_2026-11-01.json` blob `57ba0f38c37fa8027cf30ae28c921fae5ba0dad4`, commit `45c72d215fd1b1dad794f322d2d44341db4a9de2`. 71 IDs, 12 ressources R1 distinctes de la sélection C12, alias FN-048→022 et FN-057→038, FN-018 lacunaire.
- Prototype technique R1 `coordination/mediatheque/R1_PROTOTYPE_C_DIX_OEUVRES_CANDIDATES_2026-11-02.json`, blob `7bdccd69541ad6dbb184f02c35547b10d5facabd`, commit `20a1e0a8bc45ad60949f68b6441e763955e70c08`. Dix lignes d'essai non adoptées, ne pas les confondre avec C12.
- Sélection C12 `coordination/mediatheque/C12_SELECTION_DIX_OEUVRES_LUTTES_COMMUNS_2026-11-02.json`, commit correctif `c40c8c268102f921092223c54ca92e324efb2694`, blob `83f3386558538db06b95b8709b9665436e981f64`.

## Sélection candidate et antériorité
Cinq FN existantes : FN-024 *The Seedkeepers*, FN-025 *Women at work – Chatpatit*, FN-047 *L'Urgence de ralentir*, FN-051 *Jamais sans ma visseuse*, FN-044 *Dulce*. **COMPLÉTER** les notices, pas créer de nouveaux FN.

Cinq œuvres extérieures proposées : *Utopiaggia* (Denise Jacobs, 2023), *ARTE Regards : Quand les ouvriers deviennent patrons* (2025), *Direct Action* (Cailleau/Russell, 2024), *The Last Town* (Fabien Benoît, 2022), *Est-il vrai que nous avons toujours fait grève ?* (Banu Kepenek, 2025). **RELIER** aux fiches et thèmes existants ; contrôle anti-doublon complet FN/Wiki à faire avant création.

## Tests et limites
JSON rechargé sur GitHub après correction ; tests structuraux prévus : 10 IDs distincts, 10 URL distinctes, 5 références FN, 10 hébergements désactivés, dix URL HTTPS. Les sources ARTE ont été consultées en résultats web officiels ; aucune lecture vidéo ni contrôle de lecture géolocalisée. ARTE annonce *Direct Action* indisponible dans la région ; le signalement ne constitue pas un test depuis la France. ARTE annonce des dates de fin d'accès pour *Utopiaggia*, *ARTE Regards*, *Est-il vrai...*, non garanties. Les cinq autres URL proviennent du catalogue FN antérieur, sans test HTTP C12. Droits de reproduction, vignettes et sous-titres non audités. Aucun titre Tënk retenu sans source suffisante. Crédits de *ARTE Regards* incomplets, à compléter.

## Instructions à relayer par La Relieuse
- **Graphiste** : vue liste accessible, dix cartes texte sans vignettes non autorisées, libellés « accès externe », « disponibilité à confirmer », statut candidat. Mobile/clavier/lecteur d'écran à tester réellement.
- **Développeuse** : importer JSON comme données candidates dans une branche non publiable, route de détail + retour liste + lien externe sécurisé ; ne pas intégrer de lecteur tiers, média ni écriture publique. Tests compilation/navigation/accessibilité sur HEAD exact avant tout changement de statut.
- **Anarchitecte** : préserver IDs FN-024/025/047/051/044, distinguer `C12-C-xxx` de l'identifiant canonique ; `WorkAccess` séparé de `Resource` ; alias historiques intacts ; aucune nouvelle fiche automatique.
- **Lectrice** : contrôler pertinence, synopsis originaux, antériorité Wikipédia, crédits ; signaler divergences.
- **Juriste** : droits des affiches, extraits, images, diffusion, licences des cinq FN ; pas de reprise automatique des contenus ARTE.
- **Zout** : arbitrer les dix œuvres définitives et les remplacements éventuels, en particulier *Direct Action* à accès signalé restreint.

## Statuts
Structure des dix notices **TERMINÉ documentaire candidat** ; sélection éditoriale **DÉCISION ZOUT** ; contrôle exhaustif des accès/crédits/droits **À POURSUIVRE** ; intégration Graphiste/Développeuse **À POURSUIVRE** et dépendante des P0 ; publication **BLOQUÉE**.
