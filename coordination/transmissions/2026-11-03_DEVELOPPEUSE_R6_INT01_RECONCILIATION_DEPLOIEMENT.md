# R6-INT-01 — Transmission finale à La Relieuse

Émettrice : La Développeuse. Date : 3 novembre 2026.

**Résultat : convergence R6 fusionnée dans main, GitHub Pages déployé et contrôlé.** Les logos officiels sont conservés strictement. La certification couvre les tests automatisés et les contrôles navigateur décrits ci-dessous. Un workflow documentaire distinct reste en échec ; il est détaillé dans les réserves.

L'autorisation explicite de Zout a été appliquée après vérification des prérequis. Aucun push forcé, aucune réécriture de main, aucune suppression de branche, archive ou source historique.

## 1. Commits, branche et fusion

| Référence | Valeur vérifiée |
| --- | --- |
| Main avant opération | `c613d9f896fe94144264f6e78b7ac07893a75c67` |
| R6 certifiée, PR #151 | `df3692356b2309b77adf44e9cb1e68603edbb6cc` |
| Ancêtre commun | `7ff1f0a53554b9f63b19878906299da7fefe68e9` |
| Divergence initiale Git | 17 commits propres à main, 335 propres à R6 |
| Branche de réconciliation | `integration/r6-int01-reconciliation-20261103` |
| HEAD final de cette branche | `0c4ddfcc8b7a52ac773c61706fd5b5e2bc4f8187` |
| Arbre candidat et arbre fusionné | `17af7720ef9ee664bc50b54dc17285445d08ccf5` |
| PR finale | [#153](https://github.com/zoutiFrutti/Interstice/pull/153) |
| Commit de fusion GitHub | `46ee7e8ee2c52e8d1baaad41f8e977e41b4f1311` |
| Parents du commit de fusion | main préopération, puis HEAD final de réconciliation |

Le dépôt a été réellement cloné, ses branches récupérées et la fusion effectuée et inspectée dans Git local. Les objets ont été inscrits avec le connecteur GitHub, puis récupérés à nouveau par Git ; l'identité des arbres locaux et distants a été vérifiée. Le commit initial de réconciliation a pour parents main et R6 certifiée. Deux commits complémentaires portent la correction d'un lien et le contrôle de production.

Aucune ancienne PR n'a fait l'objet d'une fusion distincte. GitHub a automatiquement marqué #152 comme incluse/fermée après #153, puisque son historique est désormais accessible depuis main.

Ce rapport décrit la version applicative publiée au commit de fusion ci-dessus. Son enregistrement final ajoute uniquement des pièces documentaires descendantes de ce commit ; les fichiers applicatifs certifiés restent identiques. Les contrôles Pages et INT01 se relancent automatiquement sur ce descendant documentaire.

## 2. Conflit et préservation

Un seul conflit Git, de type ajout/ajout : `.github/workflows/facteur-messagerie-c10.yml`.

**Résolution : conservation intégrale de la version main.** Elle reprend les fonctions de R6 et conserve les ajouts récents de main : vérification de syntaxe Python, contrôle lors des PR ciblées, distribution exclue sur pull_request, dépendance `needs: verifier` et concurrence par ref. La planification, le lancement manuel, la référence documentaire C10 et le mécanisme de distribution restent intacts. Cette mission n'a pas déclenché de distribution manuelle.

Les 37 autres fichiers propres à main se sont intégrés sans conflit. Les **38/38 blobs** sont strictement identiques à ceux de main préopération : workflows, agents et tests C11/C12, interface de La Relieuse, facteur, études et transmissions de La Penseuse. Les **17/17 commits** restent des ancêtres de la convergence et du merge. La liste complète des commits, des chemins et des blobs est enregistrée dans [les preuves JSON](2026-11-03_R6_INT01_PREUVES.json), et reproduite par `scripts/r6-preservation-check.py` dans les artefacts CI.

Une correction fonctionnelle minimale a été nécessaire : dans `parcours.html`, Écologie visait `wiki.html#ecologie`, ancre absente. Le lien vise désormais le dossier existant `wiki-ecologie-sociale-environnement.html`. Le contrôle des 137 références locales et le test des ressources/fragments du site construit passent. Aucun article ni contenu artistique n'a été réécrit.

## 3. Logos et provenance

| Actif canonique | SHA-256 recalculé localement, en CI et sur le site publié |
| --- | --- |
| `assets/logo-faille-noire.svg` | `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6` |
| `assets/logo-interstice.svg` | `0fe365cd02a238bf4486f936683d194aab6a1ee2e62e2d5a2eaee9b72eff0453` |

L'actif Interstice est identique octet pour octet au candidat `assets/identite/r6/candidats/interstice-ramifications-originales-gra02.svg` de la PR #149, HEAD `b1d3b7773105c61843c1e7177315abb08da11114`. L'identité a aussi été contrôlée directement avec `git show` sur ce commit. La Faille noire est identique à la source de Zout. Originaux R6, archives R4/R6 et variantes historiques préservés. Aucune modification, simplification ou régénération des SVG.

## 4. Tests avant fusion, sur le HEAD exact

Les quatre exécutions suivantes portent toutes sur `0c4ddfcc8b7a52ac773c61706fd5b5e2bc4f8187`, avec statut final completed/success :

| Contrôle | Preuve GitHub Actions |
| --- | --- |
| INT01 sur PR | [41640022741](https://github.com/zoutiFrutti/Interstice/actions/runs/41640022741) |
| INT01 sur push de branche | [41640015036](https://github.com/zoutiFrutti/Interstice/actions/runs/41640015036) |
| R6 officiel, dont DEV02 issu de #148, 6/6 | [41640022776](https://github.com/zoutiFrutti/Interstice/actions/runs/41640022776) |
| Régressions R4 et contrats | [41640022880](https://github.com/zoutiFrutti/Interstice/actions/runs/41640022880) |

Le workflow INT01 exécute :

- 27 tests Python des agents C11/C12 et compilation du facteur.
- 11 contrats Node, syntaxe JavaScript et validation de la file documentaire.
- Construction candidate Jekyll selon le mécanisme de production, sans publication.
- 17 tests navigateur existants : R6, DEV02, R1/R2/R4, intégration graphique et accessibilité clavier.
- 5 tests INT01 complémentaires sur les fichiers construits servis sous `/Interstice/`.

Les tests couvrent Wiki, Médiathèque, Atlas, Parcours et Entraide ; sélection clavier, focus visible, liens profonds, historique avant/arrière, commandes de caméra et alternatives sans JavaScript ; reduced-motion sans animation automatique ; six largeurs 320/390/768/1024/1280/1920 ; sept tailles SVG 32/48/64/96/192/390/665 ; zoom CSS 400 % ; chargement des images, erreurs JavaScript, erreurs de chargement locales et débordement. Le catalogue et la validation locale d'un formulaire vide sont contrôlés sans envoi de contribution. Les tests R6 conservent aussi captures et PDF A4.

Les jobs production-smoke sont normalement skipped sur les branches et PR : ils s'exécutent uniquement après un push sur main. Aucune réussite de production n'a été déduite de ces skips.

## 5. Prérequis de publication

Le contrôle authentifié en CI a confirmé la configuration effective :

| Élément | État observé |
| --- | --- |
| GitHub Pages | Activé ; build_type `legacy` |
| Source | Branche main, chemin `/` |
| Publication automatique | Chaque modification de main lance le workflow dynamique Pages |
| Construction | `actions/jekyll-build-pages@v1`, source `.`, destination `./_site` |
| Déploiement | `actions/deploy-pages@v5`, artefact github-pages |
| HTTPS | Activé ; aucun CNAME personnalisé |
| Main | Non protégé, liste de rulesets vide ; aucun contournement |
| Secrets/variables personnalisés pour publier | Aucun requis |
| Identité technique de publication | Jeton éphémère GitHub et OIDC, valeurs masquées et non divulguées |

Les pages et ressources ont été testées après la construction Jekyll, puis directement en production. Les secrets des agents ne sont pas nécessaires à Pages et n'ont pas été lus. Les accès administratifs non exposés par le connecteur ont été remplacés par des lectures ciblées Pages/branches/rulesets avec le jeton CI, sans modification des réglages.

## 6. Production vérifiée

Adresse vérifiée par HTTP, navigateur et tests Chromium : **https://zoutifrutti.github.io/Interstice/**.

- [Pages 41640478872](https://github.com/zoutiFrutti/Interstice/actions/runs/41640478872) : completed/success sur `46ee7e8ee2c52e8d1baaad41f8e977e41b4f1311`. Les logs de déploiement indiquent cette même révision, « Reported success! » et l'URL ci-dessus.
- [INT01 main et production 41640480206](https://github.com/zoutiFrutti/Interstice/actions/runs/41640480206) : completed/success sur le même commit, jobs certify et production-smoke réussis.
- Production-smoke : **5/5 tests réussis**, six largeurs, cinq destinations, clavier/focus/historique/liens profonds, alternatives sans JS, catalogue, validation locale vide et intégrité de **47 ressources locales distinctes**. Zéro erreur JavaScript, de chargement local ou externe dans la matrice de navigation enregistrée, zéro débordement détecté.
- Contrôle HTTP indépendant : 11 pages/ressources en 200 et strictement identiques aux octets fusionnés, dont les deux SVG, le candidat artistique Interstice, le JavaScript et le CSS de navigation. Détails dans les preuves JSON.
- Contrôle navigateur supplémentaire : accueil R6, accès à la faille, choix Entraide, ouverture de `parcours.html#entraide`, arrivée sur la section et présence du lien Écologie corrigé. Aucun défaut applicatif observé sur ce parcours ; les messages de l'extension du navigateur sont distincts du JavaScript du site.

Artefacts conservés par Actions pendant 14 jours :

| Artefact | ID | Empreinte du ZIP |
| --- | --- | --- |
| Preuves et captures du main fusionné | `13233141397` | `sha256:bebd30bb69b0efea396e814f3441e00271128851e68d60376cb3cab8e831336f` |
| Captures et résultats de production | `13232302392` | `sha256:4d5e983ff2eb2da0f2c121e8b15aa18fc5ca5b6576768529ee01b307732d72c4` |

Les preuves essentielles de préservation, HTTP, configuration et résultats de navigation sont aussi enregistrées dans le dépôt pour ne pas dépendre de la rétention des artefacts.

## 7. Rollback testé

Une simulation a été effectuée dans un worktree isolé : fusion locale du candidat final depuis le main préopération, puis `git revert --no-commit -m 1 HEAD`. L'arbre obtenu est `256f25cc69ca48e991e227bc57a5481ea23cade8`, **strictement identique à l'arbre du main préopération**. Aucune réversion n'a été appliquée en production.

Pour un retour complet après cette mission :

1. Créer une branche depuis le main courant.
2. Exécuter `git revert -m 1 46ee7e8ee2c52e8d1baaad41f8e977e41b4f1311`.
3. Vérifier les conflits et les éventuels travaux arrivés après la convergence. Préserver les pièces documentaires postérieures.
4. Ouvrir une PR de retour, comparer les fichiers applicatifs au commit préopération, puis fusionner après contrôles. Pages republie la réversion.
5. Vérifier la production et les deux anciens actifs attendus : Faille `6747a714279f50988dd6b9364c871c3d513f70e639033f62d1e497efcdc65241`, Interstice `50174acc597d424170bcb41c6541ce5894c1a6dab7cecf1f8df77128ee0f8f38`.

La réversion complète ramène la navigation et les logos ensemble. Restaurer seulement les deux SVG depuis les archives ne constitue pas ce rollback complet. Aucun reset de main, aucun push forcé, aucune suppression des sources.

## 8. Réserves et limites

**Inventaire documentaire distinct de Pages : échec résiduel.** Le workflow [41640480142](https://github.com/zoutiFrutti/Interstice/actions/runs/41640480142), sur le merge exact, s'arrête à la collecte : 241 fichiers examinés, 235 préparés, 6 erreurs ; synchronisation du staging privé et dépôt d'artefact skipped. Avant cette mission, [41623267956](https://github.com/zoutiFrutti/Interstice/actions/runs/41623267956) échouait déjà sur main préopération : 83 examinés, 82 préparés, 1 erreur. Le script, les paramètres et le workflow de cet inventaire sont inchangés. Le nombre d'erreurs augmente avec le périmètre ; les logs ne donnent pas les chemins concernés, et la cause exacte des six erreurs n'est donc pas certifiée. Aucune synchronisation privée n'a été effectuée par cette exécution. Ce résultat ne doit pas être présenté comme une CI entièrement verte du dépôt ; il n'invalide pas les succès prouvés de Pages et du site. Suivi documentaire à reprendre séparément.

Autres limites :

- Aucun essai physique sur téléphone, aucun TalkBack/VoiceOver/NVDA, aucun zoom natif navigateur à 400 %. Le zoom CSS et les événements tactiles simulés ne certifient pas ces usages.
- La matrice constitue une vérification technique Chromium ; elle ne certifie ni l'exhaustivité éditoriale, ni le fonctionnement d'écriture des formulaires et services distants.
- Atlas et Parcours restent des prototypes documentaires ; Entraide reste explicitement en relecture juridique.
- Des mentions d'atelier « candidat », « non publié » et « non encore validé par Zout » subsistent malgré la validation artistique et le déploiement. Elles sont une anomalie de statut éditorial à actualiser avec La Relieuse, sans toucher aux SVG.

**Transmission déposée pour La Relieuse. Un dépôt de rapport n'est pas un accusé de lecture d'une autre conversation.**
