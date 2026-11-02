# Transmission Médiathèque R1 à La Relieuse — 2026-11-02
Branche candidate `coordination/mediatheque-r1-prototype-c-20261102`. **Erreur d'adressage :** Zout a indiqué R1-ECL, courrier réservé à L'Éclaireuse (blob `8b9bd6ac03758dc664fd18c3428517e9f4837541`). La Médiathèque a aussi lu son courrier réel R1-MED (blob `67da7dffad72fef7ff6a37406f3c3e69ac488006`) et travaillé uniquement dans son périmètre.

## Accusé
`coordination/messagerie/accuses/mediatheque_R1_MED_2026-11-02.md`, commit `9feebd1c4285e4146a13cba013fb8dceae2e6f97`. Ne pas marquer R1-ECL reçu à la place de L'Éclaireuse.

## Passes et contrôles
1. Relecture R1 méthode blob `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8`, architecture blob `a9070cd99b775d169415e3c991074dced1c6ffab`, index blob `4982d1d2501af5665729cc99400c5915e94a6eb0`.
2. Reprise de la matrice C10 existante : `coordination/mediatheque/cycle10_matrice_71_sources_candidats_2026-11-01.json`, commit `45c72d215fd1b1dad794f322d2d44341db4a9de2`, blob `57ba0f38c37fa8027cf30ae28c921fae5ba0dad4`. Test JSON effectué le 02/11 lors de C10 : 71 IDs uniques, 12 sélectionnées, alias FN-048→FN-022 et FN-057→FN-038 ; FN-018 sans URL/fiche ; 59 URL non sélectionnées non retestées ; 16 notices sans champ de droits extrait. Pas de nouveaux contrôles réseau exhaustifs.
3. Prototype C : **RELIER/COMPLÉTER**, pas créer dix fiches supplémentaires. `coordination/mediatheque/R1_PROTOTYPE_C_DIX_OEUVRES_CANDIDATES_2026-11-02.json`, commit `20a1e0a8bc45ad60949f68b6441e763955e70c08`, blob `7bdccd69541ad6dbb184f02c35547b10d5facabd`. Tests JSON exécutés et relecture GitHub : 10 entrées, 10 IDs uniques présents dans les 71, 10 `hosting_allowed=false`. IDs : FN-014/015/016/024/025/040/044/047/051/052. **Ce sont des exemples techniques, pas les dix œuvres choisies par Zout.** FN-047 référence ARTE ; aucune œuvre Tënk vérifiée, donc aucune inventée.
4. Schéma : `Resource` candidat R1 peut pointer vers ces notices avec `source_refs`, `rights`, `access`, `checked_at`, `editorial_state`, `alias_of`. Champs de résumé original, liens Wiki, édition et disponibilité sont explicitement **non remplis/non vérifiés**, pas simulés. Aucune œuvre téléchargée ni reproduite.

## Statuts / dépendances
| Objectif | Statut | Dépendance et suite |
|---|---|---|
| 71 FN et 12 candidates | À POURSUIVRE | FN-018, 59 URL non retestées, droits, auteurs, éditions |
| Alias | TERMINÉ pour mapping technique | Anarchitecte conserve IDs historiques et `alias_of`, Juriste/Lectrice pour sens éditorial |
| Prototype C, dix lignes de test | TERMINÉ documentaire pour structure | Vérification des dix URL, droits, crédits, accès, replay, résumés originaux et Wikipédia : À POURSUIVRE |
| Choix final des dix œuvres | DÉCISION ZOUT | ARTE/Tënk et autres, sans présumer de la sélection |
| Porte B et publication | BLOQUÉ pour intégration finale | Inventaires 24/44/71, Lectrice/Juriste, P0 sécurité Développeuse ; pas de merge |

**À La Relieuse pour distribution :** Anarchitecte : réutiliser les 71 IDs, alias, indicateurs de vérification, ne pas considérer une URL de catalogue comme une URL testée ; Lectrice : comparer Wikipédia et contrôler les résumés et sources ; Juriste : licences, extraits, droits voisins, disponibilité ARTE/Tënk ; Éclaireuse : R1-ECL est son courrier, non reçu par Médiathèque.

Aucun test CI, HTTP R1, lecture intégrale des œuvres, validation juridique, fusion, publication ou contact externe effectué.
