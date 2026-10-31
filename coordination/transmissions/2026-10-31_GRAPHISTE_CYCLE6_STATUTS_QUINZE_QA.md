# La Graphiste — Cycle 6 — Réconciliation, statuts, quinze articles, QA
**31 octobre 2026 · initiative individuelle de Zout · branche candidate · aucune fusion/publication.**

## Sources réellement consultées
- PR #50 HEAD `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb` ; PR #57 HEAD `2d8bb7960d7e2a4f1f3428841cbcc705a0962877` ; PR #59 HEAD `755588993e58e3a97d60d27be4d99f387a81316c` ; PR #61 HEAD `b101de10f8044ff486880c50a10091700428a4ca`.
- Journal commun de la PR #43, blob `5dd7279cc0fd82a24dbe0089e10a5255454bdf39` ; registre éditorial `coordination/ateliers/registre_editorial_pre_sortie_2026-10-31.json` blob `f005414fc566cf020e2ac8931f4841e30ffde859` ; transmission Lectrice 24 pages blob `393374859cfd6441ede366b9f77eb5b23329d9f0`.
- États constatés au registre : **2 accords éditoriaux individuels pour ARCH-002 et ARCH-007, aucun prêt pour publication**, 15 pages Wiki `A_CORRIGER`, 9 pages `BLOQUEE` dans la lecture de tri initiale. Les 15 ne sont pas des « 15 articles validés » ; leur statut peut évoluer dans d'autres branches, nécessitant une nouvelle vérification.

## Passes réelles
1. **Réconciliation et statuts** : `assets/graphiste-cycle6-statuts.css` (5 états visuellement et textuellement distingués : accord individuel, candidat, corrigé, réserve, bloqué). L'état n'est jamais calculé depuis le seul CSS. La gouvernance actuelle est une initiative individuelle portée par Zout, sans assemblée ni commission humaine ; les ateliers IA n'ont aucun pouvoir. Les chartes et manifeste restent candidats. Fichier CSS créé après lecture du journal.
2. **Inventaire versionné** : `design-system/cycle6-quinze-articles-candidats.json` : **15 chemins exacts, SHA du blob de tri, réserve de La Lectrice, aucun accord ni permission de publication**. Manifest source PR #43 enregistré. Aucune réécriture HTML des 15 pages.
3. **Assemblage HTML** : `design-system/maquette-cycle6-statuts-quinze-articles.html` : les dix gabarits existants de PR #61 sont conservés ; 5 états, déclaration de phase individuelle/futur collectif, 15 entrées par chemin/empreinte. Textes sources, personnalités historiques, archives et travaux de La Lectrice non remplacés. Les liens d'articles permettent de contrôler l'existence de routes, pas de démontrer leur visa.
4. **QA** : `tests/graphiste-cycle6-2026-10-31.test.mjs` et workflow `.github/workflows/graphiste-cycle6-2026-10-31.yml`, avec rendu Chromium 320/390/1280, contrôle de la structure H1/10 profils/5 états/15 liens, contrôle HTTP local des 15 routes, clavier et `details`, contraste du texte principal sur fond du corps, simulation CSS racine 200% à 320px, captures PNG et PDF A4. La conclusion effective dépend des logs d'Actions, pas de cette seule déclaration.

## Limites méthodologiques
- Les **15 pages sont réellement présentes dans le dépôt**, mais **leurs corrections éditoriales finales ne sont pas assemblées** dans cette maquette et aucune validation scientifique/juridique n'est déduite du test.
- Contraste global du texte principal seulement, pas inventaire exhaustif des contrastes d'états et de liens. Le zoom CSS de la racine n'est pas un zoom navigateur/OS.
- Structure sémantique, navigation clavier et `details/summary` sont testables automatiquement ; **aucun essai effectif TalkBack, VoiceOver ou NVDA** n'est réalisé depuis un appareil ou lecteur d'écran ici. Aucune inspection humaine des captures, aucune mesure de confort par lecteurs humains, aucune impression papier.
- La protection des identités consiste à ne pas importer de dossier nominatif privé dans la maquette : ce n'est **pas** un audit RGPD du site ou des formulaires.
- `noindex` ne protège rien de privé ; les fichiers candidats du dépôt peuvent rester publiquement accessibles. Ne jamais copier de matériau non autorisé.
- Les tests de liens locaux ne vérifient pas la disponibilité/droits des références externes.

## Reprise
**Développeuse** : assembler uniquement la version éditorialement autorisée par identifiant et SHA, préserver La Lectrice, puis rejouer QA sur le SHA d'intégration ; aucun nouveau backend.
**Relieuse** : tenir les états par fiches et versions, distinguer adoption individuelle du texte, contrôle de droits et autorisation de publication, demander si nécessaire des avis humains et une décision explicite de Zout.
**Anarchitecte** : décider du mapping additionnel des dix profils et liens de navigation. Ne pas présenter les gabarits comme pages Wiki approuvées.
**Zout** conserve seul la décision actuelle ; futur collectif humain uniquement prospectif.
