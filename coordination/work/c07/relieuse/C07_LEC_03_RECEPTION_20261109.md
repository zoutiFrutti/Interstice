# INTERSTICE — C07 · LEC-03 — Réception documentaire des statuts (contrelecture Relieuse)
**9 novembre 2026 · P0 · Contrôle de fichiers réels sur HEAD `d63317caec97f36557e72a78ecab58e2336b747f` · PR #186 · Aucun visa de publication**

## Méthode
Reprise des ressources C02, des 2 lots Commune, d'EDITORIAL_QUEUE, du constructeur DEV-03, de LEC-02 et de JUR-01B. Cette passe est une **contrelecture effectuée par la Relieuse**, jouant la fonction de vérification LEC-03 pour l'étape technique ; **ce n'est pas une certification indépendante par une personne ou un atelier distinct**.

## Résultats (lecture GitHub)
| Ensemble | Résultat documenté | Décision |
|---|---|---|
| Catalogue | 219 IDs distincts, aucun ID réaffecté, 100 sources | STRUCTURE VÉRIFIÉE |
| File éditoriale | 24 existants + 9 HELD + 38 lots (186 lignes en lots), 219 allocations uniques, max 5/lot | CONFORME STATIQUEMENT |
| Lots Commune | 9 retenus avec réserves, 1 ARCH-003 non sélectionné ; `human_visa=PENDING`, `publication_authorized=false` | 0 PRÊT À SOUMETTRE |
| Parcours | PAR-005 reste `bloque` au plan documentaire, aucune autorisation de publication | BLOQUÉ |
| Attentes spécialisées | BIO-019/021 ; FN-018, FN-022/048, FN-038/057 ; DROIT-001/002 | HELD |
| Ancien accord éditorial | ARCH-002 et ARCH-007 portent encore `ACCORD_EDITO_ZOUT`, mais `publication=non_autorisee` | NE VAUT PAS VISA |
| Projection DEV-03 | `projectPublic()` rend `null` et `buildPublicCards()` rend `[]` ; les quatre axes documentaires/juridiques/éditoriaux/publication demeurent distincts | FERMÉE PAR DÉFAUT |

## Trois archives prioritaires
| ID | Documentation actuelle | Réserves bloquantes |
|---|---|---|
| ARCH-005 | `documentary=sous_reserves`, `legal=non_examine`, `publication=non_autorisee` | Distinguer règlements des 2 avril / 3 mai ; confronter BHVP MP159 et affiche 363 ; application non démontrée ; droits de chaque reproduction |
| ARCH-006 | `documentary=sous_reserves`, `legal=non_examine`, `publication=non_autorisee` | Collation des quatre fascicules du *Prolétaire* ; signatures, attributions, chiffres d'affluence, droits des scans |
| ARCH-007 | `documentary=a_reconcilier`, `legal=non_examine`, `publication=non_autorisee` ; ancien `ACCORD_EDITO_ZOUT` historique | Décret 16 avril distinct de sa publication dans le JO et de l'application réelle ; original à collationner ; ancien accord jamais converti en visa |

Pour ces trois objets, DEV-03 conserve `versions.content_sha256_verified=null`, `visas.legal=pending`, `visas.publication=non_autorisee`. La facette Archives de la projection ne change pas l'identifiant et ne diffuse aucun contenu. Les empreintes SHA-256 des lots sont **déclarées** dans des manifestes historiques ; elles ne sont pas recalculées sur les corps Drive lors de cette passe.

## Tests de réception ajoutés
`coordination/work/c07/relieuse/lec03-status-reception.test.mjs` couvre :
1. Partition complète unique de 219 IDs et exclusion des 9 retenus des 38 lots normaux ;
2. 10 sélections Commune, dont neuf retenues sous réserves et une non sélectionnée, sans visa ;
3. Conservation PAR-005 / HOLD / anciens accords éditoriaux ;
4. ARCH-005/006/007 : versions non vérifiées, droits non examinés, facette transversale sans publication ;
5. Injection d'états artificiellement positifs, sans sortie publique.

**Limite :** les contrôles Node sont déposés pour exécution GitHub Actions sur HEAD exact ; leur succès ne doit pas être annoncé avant résultat du job dédié. Le moteur DEV-03 ne raccorde pas encore de nouveaux contenus publics aux quatre portes.

## Verdict
**LEC-03 : CONFORME POUR LES STATUTS ET REFUS DE PUBLICATION, sous réserve de la CI sur ce commit.**
**Prêt pour proposition de publication : 0.** ARCH-005/006/007 restent *à examiner*, jamais *juridiquement validés* ou *prêts à soumettre*.

Aucune modification des registres C02, des avis historiques, des corps Drive, du frontend, de `main`, aucune fusion, migration ou publication.
