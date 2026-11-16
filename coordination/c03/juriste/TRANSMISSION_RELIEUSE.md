# C03-JUR-04 — TRANSMISSION À LA RELIEUSE
**La Juriste · 3 novembre 2026 · P0 · dépôt candidat, aucune validation ni activation.**
**Dossier :** `coordination/c03/juriste/` sur branche `juriste/c03-jur-04-c12-par005-20261103`, issue de `main` `7344591fa7f0f4f6951ea273525039cf2cb9982a`.

## Pièces livrées et contenu
1. `AVIS_SECURITE_C12.md` : permissions C12 `issues:write`, déclencheur public, comparaison HEAD et blobs #114/#132, C13 opt-in nécessaire mais non suffisant, test et sécurité non démontrés.
2. `RISQUES_DONNEES.md` : exposition des Issues publiques, transfert API des corps et reprise dans commentaires, catégories RGPD art.6/9/10, art.28/35, transferts, logs, secrets, conservation, droits, rôle des tiers et fournisseur.
3. `MATRICE_PAR005.md` : PAR-005 PR #161, DROIT-001 (18 références), 3 prototypes/fiches, avis par version et par source, objections L001-01 à L001-12 et WORK-DRO-01 à -03.
4. `CORRECTIONS_JURIDIQUES.md` : dix formulations candidates, distinctes selon droit positif, jurisprudence, pratique et recommandation ; médical isolé.
5. `TRANSMISSION_RELIEUSE.md` : présente synthèse et conditions de suite.

## Verdicts P0

- **C12 sur `main`** : défaut d'un verrou IA indépendant ; appel API *possible* si une Issue autorisée est ouverte et que secret et modèle existent, sans démonstration d'une activation réelle. **Avis défavorable à toute activation en l'état**.
- **PR #114** : gardes opt-in explicites, statuts, antidupli et journal moins bavard, **mais aucune barrière juridique autonome contre les données personnelles d'une Issue publique**. Faire réaliser les tests Développeuse et obtenir qualification RGPD de l'externalisation. L'opt-in GitHub ne vaut pas consentement des tiers.
- **PR #132** : audit documentaire C03, index et contrat de dépôt vérifiés ; **ne corrige pas C12 de main**. La PR #132 n'atteste pas réception par les autres ateliers et ne change pas les obligations RGPD.
- **PAR-005 PR #161** : état **`bloque` maintenu**. Structure documentaire candidate admissible ; **aucune fiche pratique publiable** en V0 ou prototype B ; DROIT-001 est un répertoire de références, pas une certification de droit individuel. Trois réserves WORK-DRO maintenues et L001-01 à -12 ouvertes.
- **Santé** : gaz, irritants, pression de foule, blessures et soins **hors visa juridique** ; validation médicale indépendante obligatoire avant consignes pratiques.

## Actions ciblées, sans relance générale

| Destinataire | Attendu / preuve |
|---|---|
| **Développeuse** | Auditer `main` C12 et #114 : opt-in serveur désactivé par défaut, permissions minimales, absence de copie corps sensibles, appels API impossibles sans validation, logs sans secrets, antidupli et budget ; tests hors réseau, aucune Issue de test réelle ou IA avant autorisation |
| **Orchestratrice** | Conserver index de #132 et codes de retour exacts ; distinguer document disponible, réception et validation ; pas de réactivation C10/C12 ni fausse alerte reçue |
| **Anarchitecte** | Découpler flux de missions publiques et traitement potentiel de données individuelles ; donner à PAR-005 uniquement accès à DROIT-001 comme documentation candidate, jamais au dossier de personnes |
| **Lectrice** | Vérifier les douze objections L001 sur la future fiche canonique et les versions des quatre blocs critiques (contrôle/fouille, GAV, encerclement, recours), sans fermer les 35 objections C02 par supposition |
| **Médiathèque** | Actualiser les références datées D001 et droits des guides LDH/Amnesty, notices officielles et jurisprudence, sans reproduction des PDF |
| **Compétence santé/secours** | Évaluer séparément F01/F05, et toutes consignes médicales de B ; produire une validation précise ou un retrait de ces passages |
| **Relieuse et Zout** | Décider si une API externe est nécessaire, désigner responsable réel, notice et bases RGPD, autorisation budgétaire, conditions de conservation, capacité de retrait ; visas éditoriaux humains sur SHA finaux, sans publication directe |

## Sources primaires et versions

- C12 `main` workflow blob `a18e263972743a374e49fb07d9521efa9ace91b2` ; script blob `ad8e4622f5d324af7cfa5879ca4bd65f411507be`.
- PR #114 HEAD `f7811d3875d2fd39b7b37226d40ae9fb22c66a56`, workflow corrigé blob `47678fc2d5942aca5f795176ccdbed794111873a`.
- PR #132 HEAD `57a509257314d44cb15faf842395a21023e43335`, `coordination/c03/INDEX_TRANSMISSIONS.md` blob `ac8dc7ee0a00417e6e5bed39c7eafff49a83fb50` ; contrat `02_CONTRAT_RAPPORTS.md` blob `b3f68b210055e32de0d8741b2b43ded0be3a92a8`.
- PR #161 HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`, PAR-005 blob `edc7b01e556c2420a0ef74f07a818ea148582edd`.
- DROIT-001 `1657e925bc60d52456ecf02532cd1b7e0eb7b465` ; prototype Juriste `f87b39f0a5d2a6cd255fbf9445eed8496f9cbbd3` ; fiches V0 `a125d0faa73be48a4fae08e829140b2da2e33080` ; prototype B `88e00a20835a3833c28796c4f01ba793f9939f01`.
- Réglementation : https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra ; https://developers.openai.com/api/docs/guides/your-data ; https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative ; Légifrance et décisions CE recensées dans `MATRICE_PAR005.md`.

## Tests réellement effectués et limites

**Exécutés :** lecture des workflows/scripts `main`, PR #114, registre/index/contrat #132, PAR-005 PR #161, bibliographie DROIT-001 et prototypes des ateliers ; vérification externe de textes officiels et décision CE 520729 ; production documentaire sur branche sans changement de fonctionnalité. **Non exécutés :** analyse des secrets GitHub, appel API, Issue réelle, analyse logs/permissions réelles du compte, audits fournisseur sur contrat signé, test physique des fiches, validation médicale, test multi-rôles, QA du site public.

## Décision attendue

1. **Ne pas activer C12/C13** avec des Issues individuelles ; toute reprise exige contrôle technique et licéité du traitement.
2. **Ne pas publier PAR-005 pratique** : ne pas lever `WORK-DRO-01/02/03` ni qualifier les fiches de « vérifiées » sans visas pertinents.
3. Conserver ce dossier comme **transmission disponible** dans GitHub. **Une PR n'est pas un accusé de lecture de La Relieuse.**
4. **Aucune fusion, activation IA, publication, suppression de ressources, ni modification de main** n'est autorisée par ces conclusions.
