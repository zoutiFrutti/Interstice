# R6-INT-01 — Réconciliation et prépublication

Destinataire : La Relieuse. Émettrice : La Développeuse. Date : 3 novembre 2026.

Statut à ce commit : réconciliation préparée ; CI, fusion et publication restent à certifier. Ce document sera complété avec les résultats effectifs. L'autorisation explicite de Zout couvre la fusion de la convergence R6 dans main, puis le déploiement après vérification.

## Références revérifiées

- Dépôt : https://github.com/zoutiFrutti/Interstice.
- Main avant opération : `c613d9f896fe94144264f6e78b7ac07893a75c67`.
- R6 certifiée, PR #151 : `df3692356b2309b77adf44e9cb1e68603edbb6cc`.
- Ancêtre commun : `7ff1f0a53554b9f63b19878906299da7fefe68e9`.
- Divergence réelle obtenue par Git : 17 commits propres à main, 335 propres à R6.
- Branche de réconciliation : `integration/r6-int01-reconciliation-20261103`, issue de main, avec les deux historiques comme parents. Les anciennes PR ne sont pas fusionnées séparément.

## Résolution du conflit

Un seul conflit, de type ajout/ajout : `.github/workflows/facteur-messagerie-c10.yml`.

Conservation intégrale de la version main. Elle inclut toutes les fonctions de la version R6, plus : déclenchement de vérification sur PR ciblées, job `verifier` de compilation Python, exclusion de la distribution pour l'événement pull_request, dépendance `needs: verifier`, groupe de concurrence par ref. La planification, le lancement manuel, la référence documentaire C10 et le mécanisme de distribution restent ceux de main. Aucune distribution n'est déclenchée par cette mission.

Les 37 autres fichiers propres à main ne présentent aucun conflit ; leurs blobs sont préservés intégralement, tout comme celui du workflow résolu : 38/38. Ils couvrent les agents et tests C11/C12, les workflows, l'interface de La Relieuse, le facteur et les transmissions de La Penseuse. Le contrôle `scripts/r6-preservation-check.py` produit la liste des 17 commits et des 38 chemins avec leurs blobs dans l'artefact CI. L'ascendance des deux parents est vérifiée par Git.

Une correction fonctionnelle minimale est ajoutée après un contrôle de 137 références locales : dans `parcours.html`, le lien Écologie pointait vers l'ancre absente `wiki.html#ecologie`. Il pointe désormais vers le dossier existant `wiki-ecologie-sociale-environnement.html`. Un contrôle des fichiers et fragments locaux des sept pages essentielles couvre cette anomalie. Aucun contenu éditorial ni logo n'est modifié.

Aucune suppression d'archive, source, branche ou variante historique. Les retours Markdown à deux espaces préexistants sont conservés.

## Identité officielle

| Fichier | SHA-256 obligatoire et recalculé |
| --- | --- |
| `assets/logo-faille-noire.svg` | `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` |
| `assets/logo-interstice.svg` | `0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453` |

Interstice est identique octet pour octet à `assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg`, présente dans la PR #149. Sources originales, archives R4/R6 et variantes maintenues. Aucune modification artistique.

## Contrôles

Exécutés localement sur l'arbre réconcilié : 27 tests Python des agents, 11 contrats Node (navigation R1/R2/R4, transmission documentaire), validation de la file documentaire et syntaxe JavaScript. Tous réussis. Le navigateur local n'est pas installé ; les tests Chromium sont exécutés dans GitHub Actions sur le HEAD explicite de la PR.

Le workflow `r6-int01-convergence.yml` vérifie le HEAD source exact, les deux ascendances, les 38 blobs, la configuration Pages effective, les agents et contrats, puis construit avec `actions/jekyll-build-pages@v1` comme la production. Il exécute sur les fichiers construits les tests R6 existants, le test DEV02 issu de #148, les régressions de navigation R1/R2/R4 et les contrôles graphiques et clavier existants.

Le contrôle INT01 complémentaire vérifie les SHA des SVG effectivement servis sous `/Interstice/`, les cinq destinations, clavier, focus visible, liens profonds, historique avant/arrière, reduced-motion, absence de JavaScript, images, erreurs JavaScript, erreurs de chargement locales et débordement aux six largeurs 320/390/768/1024/1280/1920. Les tests R6 vérifient les sept tailles 32/48/64/96/192/390/665, le zoom CSS 400 % et l'impression. Le filtrage du catalogue et la validation locale d'un formulaire vide sont testés sans envoi de contribution.

Les erreurs de services externes sont consignées séparément ; la conformité des fichiers du site ne certifie pas leurs services distants. Aucun essai d'écriture dans une base de production.

Après fusion, le même workflow s'exécute sur le commit main exact. Un job `production-smoke` attend que l'accueil, Parcours et les deux SVG servis correspondent aux octets attendus, puis exécute les cinq tests INT01 sur le site public : SHA, navigation et historique à six largeurs, absence de JavaScript à six largeurs, filtrage local et validation de formulaire vide, intégrité des ressources et fragments locaux. Il ne publie rien et n'envoie aucune contribution.

## Déploiement : mécanisme observé et prérequis

- Métadonnées du dépôt : Pages activé, dépôt public, branche par défaut main.
- La branche main est déclarée non protégée par l'API branches ; la liste des rulesets est vide. Aucun contournement de protection.
- Exécution Pages existante sur le main exact : https://github.com/zoutiFrutti/Interstice/actions/runs/41355947085, completed/success, événement dynamic, chemin `dynamic/pages/pages-build-deployment`.
- Logs de build : checkout `main`, source `.`, destination `./_site`, sans configuration Jekyll locale ; révision `c613d9f896fe94144264f6e78b7ac07893a75c67`.
- Logs de déploiement : `actions/deploy-pages@v5`, artefact github-pages, jeton GitHub masqué et OIDC masqué, permission Pages write, succès constaté. Aucun secret ni variable personnalisée nécessaire au site statique. Les secrets des agents sont hors périmètre de cette publication et ne sont pas lus.
- Une fusion dans main déclenche donc une publication automatique. La fusion est suspendue jusqu'au succès du contrôle Pages effectif et de la construction candidate.
- Les endpoints Pages et de protection administrative ne sont pas exposés par le connecteur ; un contrôle Pages read est prévu dans la CI avec le jeton éphémère GitHub. Aucune valeur de secret n'est affichée.
- Le workflow d'inventaire documentaire préexistant s'exécute aussi sur certaines modifications de main et peut synchroniser un staging éditorial privé. Il n'est pas un mécanisme de publication du site ; son état sera rapporté distinctement.

## Rollback sans réécriture de main

Avant fusion, simulation dans un worktree jetable : inverser le commit de convergence avec `git revert --no-commit -m 1 COMMIT_CONVERGENCE`, puis vérifier que `git write-tree` égale l'arbre du main préopération. Ne pas exécuter cette simulation sur main.

Après fusion GitHub, en cas de défaut de production : créer une branche depuis main, exécuter `git revert -m 1 COMMIT_FUSION_GITHUB`, ouvrir une PR de retour, vérifier que l'arbre applicatif et les deux anciens SVG correspondent au main préopération, puis fusionner. Pages republie cette réversion. Si d'autres travaux sont arrivés après la convergence, examiner les conflits et limiter la réversion aux changements R6. Aucun reset de main, aucun push forcé, aucune suppression des sources historiques. Restaurer seulement les SVG ne rétablit pas l'ensemble de la navigation : ce n'est pas le rollback complet proposé ici.

## Limites et anomalies résiduelles

- Aucun test physique sur téléphone, aucun TalkBack/VoiceOver/NVDA, aucun zoom natif navigateur à 400 %. Le zoom CSS et les événements tactiles simulés ne valent pas certification physique.
- Les pages Atlas/Parcours restent des prototypes documentaires ; Entraide reste explicitement non validée juridiquement. La validation des logos ne valide pas ces contenus.
- Des mentions historiques « candidat / non publié / non encore validé par Zout » subsistent dans les pages d'atelier. Elles sont préservées dans cette convergence technique ; leur actualisation éditoriale est à coordonner séparément, sans modifier les SVG.

## Résultats finaux

- PR de convergence réconciliée : https://github.com/zoutiFrutti/Interstice/pull/153. La PR #152 n'est pas fusionnée.
- Premier HEAD réconcilié récupéré par Git : `b3b84e70de566db68ecb65d26cff1302dd6a3eff`, arbre `04e1727530cd2347c3b81c304ba138ad52f65902`, parents main et R6 exacts.
- Sur ce HEAD : vérification locale renouvelée, 27 tests agents et 11 contrats Node réussis, 38 blobs et 17 commits main conservés ; tests navigateur et construction Jekyll du run https://github.com/zoutiFrutti/Interstice/actions/runs/41639613120 réussis. Les nouveaux tests de liens nécessitent un nouveau HEAD et une nouvelle CI.
- Rollback effectivement simulé dans un worktree séparé sur ce premier HEAD : `git revert --no-commit -m 1 b3b84e70de566db68ecb65d26cff1302dd6a3eff`. L'arbre obtenu `256f25cc69ca48e991e227bc57a5481ea23cade8` est strictement identique au main préopération.
- Site avant opération vérifié par HTTP et navigateur : accueil 200 ; anciens logos servis avec SHA Faille `6747a714279f50988dd6b9364c871c3d513f70e639033f62d1e497efcdc65241` et Interstice `50174acc597d424170bcb41c6541ce5894c1a6dab7cecf1f8df77128ee0f8f38`. Il s'agit de l'état antérieur, pas de R6 déployée.

À compléter uniquement après preuves : HEAD réconcilié final, CI sur ce HEAD, commit de fusion, production, SHA servis et contrôles post-déploiement. Aucune réussite de fusion ou publication R6 n'est affirmée à ce stade.
