# Audiothèque des voix et des luttes — mandat documentaire candidat

Date : 2026-11-02  
Origine : orientation proposée par Zout  
Responsable de coordination : La Relieuse  
Statut : **ORIENTATION RETENUE POUR ÉTUDE ; SÉLECTIONS ET DÉVELOPPEMENTS CANDIDATS**  
Priorité : **P2**, sans retarder les P0 sécurité, conformité, identité et navigation immersive.

## Objet

Intégrer podcasts, émissions radiophoniques et archives sonores dans la **Médiathèque existante** d'Interstice, sans créer de seconde base ni de plateforme de streaming. Inclure pensées anarchistes et libertaires, mouvements sociaux, féminismes, LGBTQIA+, antiracisme, décolonial, handicap, écologie sociale, communs, histoire populaire et médias indépendants. Ne pas exclure les ressources non explicitement militantes.

Langues de départ : français, anglais, espagnol, catalan ; élargissement seulement avec sources vérifiées. Distinguer transcription, traduction, résumé original et absence d'accessibilité.

## Pistes non validées

ARTE Radio / *Un podcast à soi* ; Gouinement Lundi ; Radio Libertaire ; Channel Zero Anarchist Podcast Network ; radios associatives et archives sonores des luttes. **Ces noms sont des pistes de contrôle, ni des notices sélectionnées, ni des partenaires.**

## Protocole de recherche

1. Auditer les **71 notices Médiathèque** et les branches candidates avant création ; vérifier doublons, IDs, alias et statuts.
2. Constituer jusqu'à **20 séries ou émissions candidates** et jusqu'à **10 épisodes précisément identifiés**, sans remplissage artificiel.
3. Pour chaque série : titre, producteur, équipe, langue, territoire pertinent, thèmes, site officiel, RSS s'il existe, accès, licence/droits et date de vérification.
4. Pour chaque épisode : titre exact, date, durée vérifiée, intervenants publiquement identifiés, type (entretien, témoignage, documentaire, analyse, fiction, archive), lien d'écoute, transcription et traduction existantes, résumé original sourcé, statut, relations documentaires.
5. Distinguer **lien de navigation** et **relation documentaire attestée** ; ne jamais inventer partenariat ou affiliation.
6. Appliquer **RELIER / COMPLÉTER / CRÉER**. Aucune production audio originale autorisée.
7. Préparer une maquette de notice mobile en HTML statique, sans lecteur tiers imposé, sans traceur ni import RSS.
8. Documenter liens testés, conditions d'accès, droits, chemins, branche, SHA, réserves et arbitrages.

## Métadonnées candidates, à comparer au schéma existant

- `type` : `audio_series` / `audio_episode` (valeurs proposées, **pas** une migration).
- `parent_id` : lien épisode → série.
- `title`, `creators`, `published_at`, `duration_seconds`, `language` (BCP 47), `territory`.
- `official_url`, `listen_url`, `rss_url`, `transcript_url`, `translation_languages`.
- `content_kind`, `themes`, `source_provenance`, `verified_at`, `rights_status`, `editorial_status`, `related_document_ids`.

Tous les champs doivent être alignés avec les identifiants et contrats de L'Anarchitecte ; ne pas créer de schéma parallèle.

## Répartition et dépendances

**Médiathèque** : audit, inventaire et notices. **Vigie** : découverte et vérification des références publiques. **Anarchitecte** : alignement ID/relations/métadonnées. **Lectrice** : contrôle des résumés et attributions. **Juriste** : droits, licences, liens, vie privée. **Graphiste/Développeuse** : avis de faisabilité seulement après stabilisation P0, sans détourner les ressources de la navigation immersive. **Relieuse** : suivi, doublons, arbitrages.

Les transmissions ne valent pas réception par les ateliers.

## Barrières

Aucun téléchargement ou hébergement d'audio, scraping/import RSS automatisé, transcription ou traduction intégrale non autorisée, visuel protégé réutilisé, lecteur tiers traçant imposé, prise de contact, dépense, publication, fusion `main`, ni annonce de partenariat.

## Point de contrôle initial

Ce mandat enregistre **le cadre**, pas un catalogue vérifié. Les 20 séries et 10 épisodes restent à rechercher. L'audit des 71 notices, les vérifications de liens, les licences et la maquette ne sont **pas encore réalisés**. Le premier lot devra comporter des preuves et réserves individuelles.

## Arbitrages réservés à Zout

Nom de l'audiothèque ; périmètre final des thèmes et langues ; sélection des séries et épisodes ; choix de présentation ; toute évolution de schéma ou fonctionnalité ; publication.
