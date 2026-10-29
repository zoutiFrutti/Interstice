# Passe de contrôle du 29 octobre 2026 — sources et identité commune

**Statut : branche de travail uniquement, non fusionnée, non publiée.** Branche : `agent/revue-sources-identite-2026-10-29`, créée depuis `main` au commit `f7e9c3b2cdf8f8b1bd98a6b308358a3dc4c03e5a`. L'ancienne branche `design/identite-commune-audit-2026-10-28` était divergente de `main` (3 commits d'avance, 5 de retard) ; aucun écrasement ni fusion automatique.

## Éditorial — chantier 1 encore ouvert

- `wiki-antiracisme-histoires-droits.html` : ajout du total non arrondi de **9 737 crimes et délits** à caractère raciste, xénophobe ou antireligieux enregistrés en 2025 (+5 % sur 2024), distinct des **6 700 contraventions** et des enquêtes de victimation (faits subis en 2023 ; 3,5 % des personnes concernées déclarent avoir porté plainte). Attention : années, unités et méthodes distinctes.
- Ajout du signalement **institutionnel et attribué** de la CNCDH du 8 octobre 2026 sur la place insuffisante de l'antitsiganisme dans le plan national 2026-2029. Les voix de collectifs roms, sintés et manouches restent à documenter par des sources directes et autorisées, sans parler à leur place.
- Sources : https://statistiques.interieur.gouv.fr/ssmsi/publications/les-atteintes-caractere-raciste-xenophobe-ou-antireligieux-en-2025 ; https://www.cncdh.fr/communique-de-presse/racisme-antisemitisme-et-xenophobie-la-tolerance-resiste-mais-les-actes ; https://www.cncdh.fr/publications/la-cncdh-alerte-la-ministre-aurore-berge-sur-la-place-de-la-lutte-contre
- Vérification : relecture du fichier écrit et présence des deux ajouts. **Pas d'audit exhaustif**, pas de validation par des personnes concernées. Wikipédia n'est pas utilisé comme preuve.

## Identité graphique — passage phase 1 → phase 2 (préparation sur branche)

- Originaux approuvés : `Planche d’identité visuelle rouge et noire.png` et `Diptyque des fissures rouges.png`, archivés dans Drive. Aucune nouvelle forme de logo inventée.
- Deux recadrages WebP fidèles au diptyque, 512 × 512 : `assets/interstice-embleme.webp` (77 972 octets, SHA-256 `893929e6ba240d146f5b0ef76071d757a60290dec72cb72a5d0d198c82761fb6`) et `assets/faille-noire-embleme.webp` (70 224 octets, SHA-256 `fceba34111d1cb88031c96c1ec730da6840e5e82b6093d2de2ec77e7faeeee0e`).
- `index.html` et `manifeste.html` : `picture/source` WebP et `img` SVG de secours, avec texte alternatif. Aucun paragraphe politique changé.
- `style.css` : `image-set` des mêmes WebP pour le symbole d'en-tête et la vignette du manifeste, avec SVG de secours. Favicon SVG conservé volontairement : le dessin texturé devient difficile à distinguer à 16 px.
- Tests effectivement réalisés : lecture GitHub après chaque écriture ; comparaison `main...branche` (6 fichiers ciblés avant cette note, aucun JS, SQL, formulaire, secret ni fichier Supabase modifié) ; hachage Git des WebP comparé aux sources ; **simulation locale de composants** sous Chromium à 320, 375 et 768 px : chargement des WebP, présence des textes alternatifs et absence de débordement horizontal dans ce banc d'essai. Inspections visuelles à 16, 32, 128 px.
- **Tests non réalisés :** navigation réelle sur le site complet, lecteurs d'écran, formulaires/Supabase de bout en bout, CSP, navigateur mobile réel, impression/PDF, CI complète. Statuts GitHub disponibles : aucun check associé au HEAD de cette passe. Ne pas fusionner ni publier sans ces contrôles.

## Phases suivantes

1. **Phase 2** : tests complets sur site de prévisualisation, puis revue de PR ; pas de déploiement automatique.
2. **Phase 3** : site autonome La Faille noire non identifié ; aucune URL supposée.
3. **Phase 4** : manifeste HTML/PDF, comparaison du texte original et rendu imprimé ; aucun amendement politique sans décision collective.
4. **Phase 5** : inventaire et contrôle des autres supports.

**Proposition de méthode pour le pilier 7 (non appliquée) :** distinguer gratuité d'accès, domaine public et licences de réutilisation ; exiger consentement et attribution pour les témoignages et respecter les protocoles propres aux savoirs autochtones. Le manifeste reste un texte vivant sans privilège fondateur.
