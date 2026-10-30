# Interstice · Note méthodologique SSMSI / VRS — 30 octobre 2026

**Statut : dossier de vérification pour la PR #32, non intégré au Wiki, non publié.** Chantier éditorial 1 : antiracisme. Cette note complète la correction VRS déjà proposée sans la dupliquer ni modifier le HTML.

## Question étudiée
Peut-on déduire une hausse de 5 % entre 2024 et 2025 en divisant directement les 9 737 faits cités en 2025 par les 9 350 faits d'une publication antérieure ? Et peut-on comparer sans précaution les taux de plainte et les effectifs de victimation de publications VRS différentes ?

## Sources primaires ouvertes et contrôlées le 30 octobre 2026
1. **SSMSI, Info rapide n°49 (14 mars 2025), faits enregistrés en 2024** : 9 400 crimes ou délits et 7 000 contraventions (valeurs arrondies), +11 % pour les crimes/délits. https://statistiques.interieur.gouv.fr/ssmsi/publications/info-rapide-ndeg49-les-atteintes-caractere-raciste-xenophobe-ou-antireligieux-en-2024
2. **SSMSI, Info rapide n°61 (25 mars 2026), faits enregistrés en 2025** : 9 700 crimes ou délits et 6 700 contraventions (valeurs arrondies), +5 % pour les crimes/délits. L'ancienne estimation VRS de 3,5 % de plaintes concernant les atteintes à caractère raciste en 2023 figure encore dans le corps du résumé, mais la page affiche un avertissement méthodologique. https://statistiques.interieur.gouv.fr/ssmsi/publications/les-atteintes-caractere-raciste-xenophobe-ou-antireligieux-en-2025
3. **SSMSI, rapport VRS édition 2025, paru le 29 octobre 2026** : la méthode d'estimation des taux de plainte a été améliorée, et les séries rétropolées depuis 2021. Les données de plainte des anciennes publications ne sont donc plus automatiquement comparables. La page affiche un taux de plainte de 1 % pour les **discriminations**, qui n'est pas interchangeable avec le taux initial de 3,5 % pour les **atteintes à caractère raciste**. https://statistiques.interieur.gouv.fr/ssmsi/publications/vecu-et-ressenti-en-matiere-de-securite-victimation-delinquance-et-sentiment-0
4. **SSMSI, base des séries chronologiques, data.gouv.fr**, dernière mise à jour indiquée le 14 octobre 2026 : contient des indicateurs d'atteintes à caractère raciste et de dépôt de plainte, avec définitions, unités, périodes, sources ; jeux CSV et Parquet sous **Licence Ouverte / Open Licence 2.0**. https://www.data.gouv.fr/datasets/service-statistique-ministeriel-de-la-securite-interieure-base-des-series-chronologiques

## Contradiction chiffrée et prudence
Calcul sur deux valeurs exactes précédemment citées dans le chantier : (9 737 − 9 350) / 9 350 × 100 = **4,139 %**. Il ne reproduit pas les **+5 %** publiés par le SSMSI. Ce constat ne démontre pas une erreur de l'institution : les chiffres proviennent de millésimes différents, et la série homogène de référence n'a pas encore été extraite. Ne pas inventer une valeur révisée de 2024 ni une cause de l'écart. Les chiffres arrondis 9 400 et 9 700 ne permettent pas de reconstituer précisément le taux.

**Autre écueil :** la publication SSMSI 2024 évoque des victimes en 2022 vivant en France métropolitaine, alors que le résumé SSMSI 2025 évoque des victimes en 2023 vivant en France métropolitaine, Martinique, Guadeloupe et Réunion, en logement ordinaire. La différence de champ géographique doit être vérifiée dans les tableaux homogénéisés avant toute comparaison brute des effectifs.

## État de la preuve et de l'accès
- Les quatre pages sources et les avertissements de méthode ont été consultés ; les dates, périmètres et licences ci-dessus sont visibles sur ces pages.
- **Les lignes de données de la base CSV/Parquet n'ont pas été lues** : le téléchargement direct du CSV a échoué dans l'environnement d'exécution (résolution réseau). La base existe, mais aucune extraction chiffrée n'est revendiquée.
- **Le PDF VRS et les tableaux ZIP n'ont pas été analysés ligne par ligne.** Le taux révisé spécifique aux atteintes racistes reste inconnu ici.
- Wikipédia n'a pas été utilisé comme preuve. Aucun graphique, photographie, citation longue ou fichier tiers n'a été reproduit.

## Procédure reproductible avant correction supplémentaire
1. Télécharger les données SSMSI de la publication 2025 et/ou la base chronologique, noter la date de mise à jour et l'identifiant de l'indicateur.
2. Extraire 2024 et 2025 **dans une même version de série**, avec même champ, unité, qualification et décompte. Calculer le taux, confronter aux arrondis et aux notes de révision.
3. Dans le rapport VRS 2026 et ses données ZIP, retrouver les taux rétropolés correspondant **exactement** à l'atteinte raciste, en distinguant discriminations et autres atteintes.
4. Soumettre le résultat à la relecture éditoriale de la PR #32 ; ne pas corriger le Wiki sur une branche concurrente. Vérifier les liens et l'accessibilité avant fusion.

**Décision de cette passe :** ajouter une note de méthode traçable, sans remplacer arbitrairement les chiffres, sans toucher au Wiki, au manifeste, à la charte, aux visuels, à Supabase ou aux formulaires. Aucun test navigateur, aucune fusion ni publication.
