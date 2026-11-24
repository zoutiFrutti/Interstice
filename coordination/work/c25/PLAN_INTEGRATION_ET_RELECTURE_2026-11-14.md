# C25 — Mise en œuvre des décisions A / A / B

**14 novembre 2026 · La Relieuse · branche candidate**  
**Autorisation humaine :** intégration technique **A**, publication **A** (privée), contenus **B** (relecture par lots).

## 1. Intégration technique A

- Branche de consolidation `integration/c25-tech-private-editorial-review-20261114`, créée à partir du **HEAD C24 exact** `e42a32a9f7a5a18d007dbd1413f4ca9f05223a5c`.
- Cette branche descend de la candidate C23, du reçu C21/C22, du correctif C20 et de la convergence C19 : pas besoin de recopier ou fusionner en cascade #197, #198, #199, #200, #201.
- Les suites C23 (3 jobs) et C24 (suite R6) sont vertes sur leurs SHA respectifs. **Tout nouveau commit C25 devra passer ses propres contrôles.**
- Aucun fichier de rendu, navigation, SVG, CSS, texte public ou droits d'accès modifié dans C25.
- `main` inchangé ; aucune fusion, publication ou application Supabase.

## 2. Publication A : site privé

Maintenir la revue en privé. Aucune publicité d'URL, aucune modification des droits de l'aperçu, aucun redéploiement Work ni Pages. Ne pas confondre l'autorisation de travailler en branche d'intégration avec celle de fusionner `main`, qui pourrait déclencher une publication.

Le test humain Android 16/16 valide uniquement le rendu de l'aperçu privé effectivement consulté, non identifié par SHA. Un nouveau paquet candidat ne devient pas automatiquement une version visualisée/acceptée.

## 3. Contenus B : relecture structurée sans approbation

Source reprise telle quelle : `coordination/work/c07/nav7/received-work/readings.json` (24 textes R6).

- **15 textes** au statut documentaire `a_reconcilier` → trois lots candidats de cinq textes, dans `QUEUE_RELECTURE_PRIVEE_2026-11-14.json`.
- **9 textes** au statut documentaire `bloquee` → file bloquée, exclus de la revue ordinaire ; traiter la cause du blocage avant toute proposition de changement de statut.
- **Deux textes distincts portant le titre « Égalité, genres et inclusivité. »** : conserver leurs identifiants exacts, vérifier le contenu avant toute décision de doublon, pas de fusion par titre.
- **10 notices médias** candidates : pas de passage automatique dans les trois lots sans examen de la provenance et des droits.
- **219 objets maîtres C07** : `publication_denied=219`, PAR-005 bloqué. Aucun de ces éléments n'est nouvellement autorisé.

**La création de lots n'est ni une lecture réalisée ni une validation.** Pour chaque texte, comparer l'article Wikipédia pertinent au corpus ; éviter une notice redondante lorsque Wikipédia couvre déjà correctement le sujet. Vérifier les sources primaires et secondaires, les affirmations sensibles, la datation, les corrections possibles, les droits et données personnelles. Faire une proposition de `retenu`, `corriger`, `lier Wikipédia` ou `maintenir bloqué` avec raisons, sans modifier le statut source avant décision humaine explicite.

## 4. Prochain enchaînement

1. Vérifier CI de **ce HEAD C25 exact** et le format du registre des décisions.
2. Démarrer la lecture effective du lot `C25-R6-01` avec fiches de preuves et contradictions ; ne pas déduire la conformité du seul titre ou statut.
3. Préparer la décision humaine individuelle à partir d'une vraie relecture, puis les lots 02/03.
4. Maintenir en attente l'empreinte authentifiée de l'aperçu privé ; ne pas refaire les 16 tests utilisateur.
5. Si une future publication est envisagée, exiger d'abord une décision de publication spécifique et son plan de protection, distinct de l'intégration technique.

## 5. Registre

Décisions explicites conservées dans `coordination/REGISTRE_DECISIONS.md` : `D-C25-INT-01`, `D-C25-PUB-01`, `D-C25-ED-01`.

**Ce qui n'a pas été exécuté :** fusion dans `main`, publication, déploiement privé/public, migration, purge, activation de formulaires, levée des réserves juridiques ou relecture des textes en profondeur.
