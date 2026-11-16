# C09-ORCH-01 — Audit de reprise, contradictions et plan de contrôle

**Priorité : P0 documentaire.** Source de départ : PR #186 / `work/c07-reunification-20261104` ; corpus C10–C18 conservé. Aucun workflow ou agent déclenché.

## État réel des briques

| Contrat / dispositif | Produit existant | Statut / réserve |
| --- | --- | --- |
| C10 | `coordination/messagerie/`, boîtes C10, index, facteur GitHub planifié | Une émission/ticket ne constitue pas réception ; pas de boîte historique Orchestratrice ; courrier C10 explicite « candidat, non distribué, non reçu » |
| C11 | `demande_relieuse_c11.py`, `rapprochement_c11.py`, registre de rôles | Validation de format, sans authentifier une conversation ou un accusé |
| C12 sur main | `.github/workflows/pont-relieuse-lectrice-c12.yml`, `issues.opened` et `issues: write` | **RISQUE P0 :** aucun opt-in indépendant dans le workflow main ; si Issue admissible et clé/modèle présents, appel IA possible |
| C13 | PR #114 `f7811d3875d2fd39b7b37226d40ae9fb22c66a56` ; reprise présente dans #186 | Verrou `LECTRICE_AI_ENABLED` et refus sans autorisation **sur branche candidate** seulement ; secrets et dépense non vérifiés |
| C14 | PR #115, moteur déterministe ; repris dans #186 | Pas de conversation ChatGPT réactivée, pas d'agent distant |
| C15 / R1 | PR #116 et #126, Ollama candidat et double verrou | Modèles réels et dépenses non démontrés |
| C18 | PR #132, tableau et index C03, 19 rôles, 12 missions d'instantané | États déclaratifs, pas d'observation temps réel |
| Console | PR #183, reprise candidate #186 | Consultation + simulation de brouillon, pas backend de messagerie ni source de validation |
| C07 | PR #186, `reunification_c07.py`, `catalogue_c07.py` | Contrôle déterministe, checkpoint, décision liée à un hash ; **simulation de décision humaine** dans les tests, aucun visa réel inféré |
| GH-AW | PR #180, pilote Observatrice | Lock candidat, opt-in et contrôle d'acteur ; aucune activation attestée ; budget/secrets encore à contrôler |

Sur le HEAD `1a03c3ba9c8b9c94dcdc0e5e67f7f80270e8ab51` de #186 : neuf workflows GitHub sont en succès lors du relevé (ex. C07 `42015010214`, console `42015010182`). Cela atteste **les vérifications du code candidat**, pas la validation des neuf états de chaque mission, ni sa fusion.

## Contradictions / règles périmées détectées

1. **Ancien label Wiki / simple Archives / Entraide** : chemins, articles et anciens courriers doivent rester valables, mais les **intitulés officiels C09** sont Encyclopédie des communs, Archives des communs, Faire Ensemble.
2. **Faire Ensemble prioritaire vs quatre portes égales** : la « priorité » C07 était une proposition de mise en avant ; C09 spécifie la **position haut gauche sans supériorité fonctionnelle ou entrée obligatoire**. Une grille ou une carte privilégiant l'accès exclusif à Faire Ensemble serait non conforme.
3. **Sept Parcours dans le contenu vs leur présence forte en accueil** : garder données, relations et réserves, rendre la navigation secondaire, PAR-005 bloqué.
4. **Lot Commune 02 en attente de décision** : anciennes descriptions obsolètes après le choix de Zout dans la PR #186 ; quatre fiches retenues avec réserves, ARCH-003 non sélectionnée ce tour-ci, jamais supprimée.
5. **C12 sécurisé dans la PR #186 mais non dans main** : toujours critique ; présence d'un correctif sur une branche ne protège pas la production.
6. **Sept états C18 vs neuf attendus C09** : extension proposée, sans réécrire les données, et sans confondre `BLOQUE` avec une progression.
7. **Règles multipliées** : `JOURNAL_COMMUN`, C10, C03, C18 et C07 ne sont pas des registres à fusionner physiquement. Référentiel + décisions = source des règles, journal = delta de travail, index = vue ; liens plutôt que recopies.

## Contrôles / refus suggérés (candidats non exécutés)

- Contrôle de la **disposition 2 × 2 et des quatre intitulés** sur le code de navigation et dans les textes alternatifs, sans changer les SVG.
- Test que les quatre portes sont toutes directement accessibles au clavier et au tactile, que les 7 Parcours ne bloquent pas l'accueil et que PAR-005 reste fermé.
- Détection déterministe d'ancien intitulé **utilisé comme nom officiel** (ne pas signaler comme erreur chaque occurrence historique ou URL d'archive).
- Vérification absence de ligne `VALIDE`, `INTEGRE` ou `PUBLIE` sans preuve distincte de décision, merge ou publication.
- Contrôle opt-in C12 sur **main** et contrôle des permissions du pilote #180 ; signaler au lieu de déclencher.
- Contrôle de l'unicité des ID de règles et des liens `remplace` ; ne jamais supprimer les anciennes entrées.

## Évolutions proposées sans activation

1. Soumettre les deux fichiers de règle et le journal C09 à La Relieuse dans une PR brouillon issue de #186.
2. **Réutiliser** la matrice C03 et la console #183/#186. Élargir ultérieurement de 7 à 9 états indépendants et ajouter la provenance de chaque transition, seulement après revue des contrats.
3. Pour tous les ateliers, vérifier le point d'entrée existant de l'annuaire ; créer le journal manquant **à la première contribution réelle**, pas en masse.
4. Examiner C12/C13 en priorité sur main avant toute Issue de test, clé, modèle ou budget.

## Résultat de la présente passe

**Audit de fichiers et vérification GitHub réalisés.** Aucune CI nouvelle n'est nécessaire pour le seul dépôt documentaire ; toute CI déclenchée automatiquement par la PR relève des vérifications de branche, sans autorisation d'activation. **Aucun test fonctionnel de navigateur ou d'agent nouveau exécuté** par L'Orchestratrice. Le journal C09 reprend uniquement les pièces réellement retrouvées.

**À transmettre :** chemins, SHA et statut de la PR candidate, risque C12/main, et demandes de vérification de la grille par Anarchitecte/Graphiste et des secrets par Juriste/Développeuse. Aucune approbation humaine inférée.
