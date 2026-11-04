# C05 — Vérification ciblée des alias

Source : matrice C10 des 71 notices, blob `57ba0f38c37fa8027cf30ae28c921fae5ba0dad4`, et registre PR #161, blob `66957e1b223f05642dcd69479ac48d0394797802`.

## FN-022 / FN-048
Les deux notices attribuent *La Commune* à Louise Michel, édition Stock 1898. Elles donnent exactement la même URL Wikisource `https://fr.wikisource.org/wiki/La_Commune_(Michel)/Texte_entier`. FN-048 mentionne aussi une édition numérique UQAM. C10 établit `FN-048.alias_of=FN-022`. Identité de l'œuvre fortement étayée ; identité des transcriptions, notes et éditions numériques non prouvée. Conserver les deux IDs et la provenance ; proposer alias documentaire orienté, sans fusion de fichiers.

## FN-038 / FN-057
Même URL française APC `https://www.apc.org/fr/pubs/principes-feministes-de-linternet-20`, même version 2.0, même attribution collective et date août 2016. C10 établit `FN-057.alias_of=FN-038`. La licence CC BY 4.0 est signalée pour le site APC par défaut, avec exceptions possibles. Ne pas appliquer cette licence automatiquement aux PDF, illustrations et traductions. Conserver les IDs ; proposer alias documentaire orienté, et traiter les traductions comme versions distinctes après vérification.

## FN-018
C10 : `title_catalogue:null`, `source_url_catalogue:null`, `source_evidence:FN-018_REFERENCE_SEULEMENT_CATALOGUE`. PR #161 mentionne « Pepper et Superflu » sans URL canonique. Ne pas assimiler à FN-017 Pepper&Carrot sans preuve. Notice interne bloquée.

## Application de la doctrine
RELIER les doublons plutôt que CRÉER des articles redondants ; préserver les références historiques. Pas de publication, pas de validation juridique, pas de contrôle HTTP ou de comparaison intégrale des éditions dans cette passe. Les sept Parcours conservent leurs liens candidats et leurs réserves.
