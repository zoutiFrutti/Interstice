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


## Addendum critique — 30 octobre 2026 : deux taux de non-plainte non interchangeables

**Question nouvelle :** peut-on utiliser comme confirmation indépendante les « 97 % sans plainte » cités dans le communiqué CNCDH de juin 2026, alors que la publication SSMSI de mars 2026 annonçait « 3,5 % de plaintes » ? **Non, pas sans rapprocher leurs champs et leurs millésimes.**

- [CNCDH, communiqué publié le 24 juin 2026](https://www.cncdh.fr/communique-de-presse/racisme-antisemitisme-et-xenophobie-la-tolerance-resiste-mais-les-actes) : mentionne environ **1,2 million de personnes de plus de 14 ans** déclarant chaque année une atteinte raciste et **97 %** ne portant pas plainte, en renvoyant à une **enquête VRS publiée en décembre 2023**. La CNCDH est une source primaire pour sa propre analyse, mais **relaie ici une statistique de victimation** : ce n'est pas une mesure indépendante.
- [SSMSI, Info rapide n°61 du 25 mars 2026](https://statistiques.interieur.gouv.fr/ssmsi/publications/les-atteintes-caractere-raciste-xenophobe-ou-antireligieux-en-2025) : annonce **plus de 1,7 million de personnes de 18 ans ou plus** déclarant une atteinte raciste **subie en 2023**, et **3,5 %** ayant porté plainte. Le champ géographique et le logement ordinaire sont explicités dans cette publication.
- [SSMSI, rapport VRS du 29 octobre 2026](https://statistiques.interieur.gouv.fr/ssmsi/publications/vecu-et-ressenti-en-matiere-de-securite-victimation-delinquance-et-sentiment-0) : annonce la **révision méthodologique** des taux de plainte et la rétropolation des séries depuis 2021.

**Contradiction apparente, pas erreur démontrée :** 97 % de non-plainte et 3,5 % de plainte pourraient sembler complémentaires (96,5 %), mais **les populations d'âge, dates de référence, publications et méthodes ne sont pas établies comme identiques**. Ne pas écrire que l'une des estimations confirme ou réfute l'autre. Ne pas utiliser 97 % comme taux actualisé après la révision d'octobre. La page CNCDH de juin n'affiche pas à elle seule une révision de cette statistique.

**Avant une modification du Wiki :** retrouver la publication VRS citée par la CNCDH en décembre 2023, comparer les questionnaires, champs et années de victimation, puis extraire la série de plainte révisée correspondante. En attendant, conserver une attribution datée et l'avertissement méthodologique existant dans la PR #32.

**Contrôle statique complémentaire de la PR #32, sans prétendre à un test navigateur :** sur le HTML de la branche, 5 références locales (style, emblème et trois pages) ont été trouvées sur `main` ; les 3 ancres internes ont un identifiant correspondant ; un seul `h1` ; 19 URL externes distinctes, **sans test HTTP exhaustif**. Aucune ressource externe ni témoignage n'a été copié. Ce contrôle ne valide ni l'accessibilité réelle ni les formulaires.

**Statut :** addendum documentaire, non publié sur le Wiki ; aucun taux corrigé sans série homogène, aucune fusion, aucune adoption collective.


## Résolution documentaire — 31 octobre 2026 : série homogène retrouvée dans le PDF officiel

**Résultat nouveau qui remplace l'incertitude du paragraphe « Contradiction chiffrée » ci-dessus :** le PDF original [SSMSI, Interstats Info rapide n°61, mars 2026, page 2, figure 1](https://www.dilcrah.gouv.fr/files/2026-03/IR61%20Les%20atteintes%20a%CC%80%20caracte%CC%80re%20raciste%2C%20xe%CC%81nophobe%20ou%20antireligieux%20en%202025.pdf) contient directement les **deux années dans une même table** :

| Série « ensemble des crimes et délits à caractère raciste » | Nombre |
|---|---:|
| 2024, données stabilisées dans la publication 2025 | **9 295** |
| 2025, données provisoires extraites en janvier 2026 | **9 737** |
| Différence | **+442** |
| Variation calculée | **+4,755 %**, arrondie à **+5 %** |

Calcul reproductible : `(9737 - 9295) / 9295 * 100 = 4,755 %` (arrondi à trois décimales). **Le taux officiel de +5 % est ainsi réconcilié**. Le chiffre de **9 350 pour 2024**, publié antérieurement en 2025, correspond à une version antérieure des données ; le PDF n°61 indique explicitement dans l'encadré « Sources et méthodes » que **« Dans la figure 1, les données de 2024 ont été actualisées avec les bases statistiques stabilisées. »** La différence entre les deux millésimes de 2024 est de 55 faits. Cette mise à jour de la base des **infractions enregistrées** n'est **pas** la révision d'octobre 2026 des **taux de plainte VRS**, qui reste un chantier distinct.

**Avant / après :** avant cette passe, le dossier concluait que le dénominateur comparable n'avait pas été retrouvé et qu'il fallait rechercher les CSV/Parquet ; après cette passe, la figure 1 du PDF primaire fournit la paire exacte, sans dépendre du téléchargement de la base. Le passage de vigilance statistique dans `wiki-antiracisme-histoires-droits.html` a été corrigé sur la branche de la PR #32, commit [e9efac7](https://github.com/zoutiFrutti/Interstice/commit/e9efac7964cc4fb4d9b6a55b6a0f27a36ed8de5a). Les deux chiffres historiques sont conservés et attribués à leur millésime ; aucun taux de plainte n'a été modifié.

**Crédibilité et limites :** le SSMSI est la source primaire du comptage administratif ; la figure 1 et la note méthodologique sont consultables dans le même document officiel. La CNCDH relaie certaines statistiques et n'est pas une seconde mesure indépendante. L'extraction des taux VRS rétropolés, les perspectives directement produites par les collectifs concernés, les contrôles HTTP exhaustifs et les tests navigateur/accessibilité restent à faire. Aucun graphique ni tableau tiers n'a été reproduit sur le site ; cette note retranscrit uniquement les quatre valeurs utiles à la vérification. Aucun manifeste, charte, code d'application, formulaire, CSS, Supabase ou ressource graphique n'a été modifié.

---

## Addendum de veille — 31 octobre 2026 : avertissements rétrospectifs SSMSI

**Question :** comment éviter qu'une citation correcte au moment de sa publication devienne trompeuse après la révision méthodologique des taux de plainte d'octobre 2026 ?

**Nouvelles vérifications directes de pages officielles, sans extraction des fichiers de données :**

1. [SSMSI, rapport VRS 2023, publié le 14 novembre 2024](https://statistiques.interieur.gouv.fr/ssmsi/publications/rapport-denquete-vecu-et-ressenti-en-matiere-de-securite-2023-victimation-delinquance) : la page historique affiche désormais un avertissement explicite selon lequel ses taux de plainte ont été calculés selon une méthode révisée depuis octobre 2026 ; elle oriente vers le rapport VRS 2026. C'est un **avertissement rétrospectif de l'éditeur statistique**, pas une nouvelle enquête indépendante.
2. [SSMSI, rapport VRS édition 2024, publié le 30 octobre 2025](https://statistiques.interieur.gouv.fr/ssmsi/publications/vecu-et-ressenti-en-matiere-de-securite-victimation-delinquance-et-sentiment) : même avertissement sur les taux de plainte. La page contient aussi des avertissements distincts du 17 décembre 2025 sur l'harmonisation de certains indicateurs et la définition des signalements. **Ne pas fusionner ces différentes révisions en un seul événement méthodologique.**
3. [SSMSI, rapport VRS édition 2025, publié le 29 octobre 2026](https://statistiques.interieur.gouv.fr/ssmsi/publications/vecu-et-ressenti-en-matiere-de-securite-victimation-delinquance-et-sentiment-0) : confirme la rétropolation des séries de taux de plainte depuis 2021 et propose le rapport et les jeux de données ZIP. L'enquête 2025 décrit des victimations de 2024 : **année d'enquête, année des faits et date de publication sont trois dimensions distinctes**.

**Avant / après documentaire :** avant cet addendum, le dossier notait la révision et la nécessité d'extraire les séries, mais ne consignait pas que les pages officielles des anciens rapports portent elles-mêmes un avertissement de non-comparabilité. Après, la traçabilité du changement de méthode est vérifiable sur les pages historiques et la publication de référence. Cela justifie une note de bas de page ou un renvoi daté si le Wiki cite un taux de plainte antérieur, **pas** une substitution de chiffres.

**Contradiction et limites :** les 97 % de non-plainte repris par la CNCDH, les 3,5 % concernant les atteintes racistes et le 1 % publié pour les discriminations ne peuvent pas être rendus équivalents sans harmoniser champ, définition, âge, période et méthode. Les séries révisées *spécifiquement pour les atteintes racistes* n'ont pas été extraites pendant cette passe. Le PDF complet, les tableaux ZIP et les questionnaires n'ont pas été relus pendant cette vérification ; les mécanismes détaillés exposés lors de passes précédentes ne sont pas présentés ici comme une nouvelle lecture du PDF. Les pages officielles établissent la révision, pas le taux exact de notre indicateur.

**Sources et droits :** trois pages publiques du producteur de la statistique ; leur crédibilité est forte pour la date, le périmètre annoncé et la méthodologie officielle, mais elles ne remplacent ni les données élémentaires ni les voix des personnes concernées. Liens et paraphrases courtes seulement ; aucun tableau, graphique, média ou texte intégral tiers reproduit. Licence des fichiers ZIP non recontrôlée ici.

**Conséquence éditoriale :** conserver les citations historiques avec leur millésime, ajouter un avertissement daté quand elles sont réutilisées, et ne modifier le taux du Wiki qu'après identification d'un indicateur comparable et relecture de la PR #32. Aucun changement du site, de la charte, du manifeste, de la sécurité ou des fichiers graphiques.


---

## Addendum du 1er novembre 2026 — borne de disponibilité de l'indicateur « atteintes à caractère raciste »

**Question :** le rapport VRS 2026 permet-il de remplacer le taux historique de 3,5 % de plaintes après atteintes à caractère raciste en 2023 par une valeur révisée du *même indicateur* ?

**Sources primaires réellement consultées le 1er novembre :**
- SSMSI, [« Les atteintes à caractère raciste, xénophobe ou antireligieux en 2025 » (25 mars 2026)](https://statistiques.interieur.gouv.fr/ssmsi/publications/les-atteintes-caractere-raciste-xenophobe-ou-antireligieux-en-2025), avertissement ajouté après octobre 2026 : les taux de plainte de cette publication sont antérieurs à la révision ; la prochaine publication *thématique* intégrera les nouveaux taux. Son résumé conserve le 3,5 % **historique** pour les faits de 2023.
- SSMSI, [rapport VRS 2026 (édition d'enquête 2025), pages 64–67, figure 4](https://statistiques.interieur.gouv.fr/ssmsi/files/ssmsi/2026-10/SSMSI_VRS_2026.pdf) : changement de traitement des non-réponses partielles ; tableau ancien/nouveau pour les grandes catégories de victimations, **pas de ligne autonome « atteintes à caractère raciste » dans cette figure**. La catégorie « discriminations » affiche 1 % pour 2023 et 2024 selon les deux méthodes, valeurs arrondies, mais son périmètre est différent.

**Résultat et contradiction levée :** l'avertissement de la publication thématique et le tableau du rapport général sont compatibles. « Les séries révisées figurent dans VRS 2026 » ne signifie **pas** « le taux révisé propre aux atteintes racistes de 2023 y est directement publié ». La recherche textuelle du rapport n'a pas identifié un tableau dédié à ce sous-champ ; cela ne démontre pas l'inexistence de calculs dans les données détaillées non inspectées. Le 1 % « discriminations » **ne doit pas remplacer** le 3,5 % « atteintes racistes » : motifs, questionnaire, période et dénominateur doivent être harmonisés.

**Avant / après documentaire :** avant, la note demandait seulement « extraire le taux révisé spécifique ». Après, elle documente la limite précise des sources publiques examinées et le renvoi explicite du producteur à une publication thématique future. Le 3,5 % doit rester identifié comme **ancienne estimation non actualisée**, sans correction numérique spéculative.

**Droits et limites :** liens et synthèse originale, aucun graphique, tableau ou image du SSMSI reproduit ; licences des fichiers ZIP non vérifiées ; pas d'accès aux microdonnées, pas de test de tous les liens. **Aucun changement du Wiki ni approbation éditoriale.** Suite : rechercher une future publication thématique ou une table officielle exactement comparable ; à défaut, maintenir la réserve méthodologique. Transmettre à La Lectrice avant toute modification du HTML de la PR #32.
