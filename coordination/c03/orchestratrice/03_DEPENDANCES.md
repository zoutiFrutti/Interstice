# C03-ORC-03 — Matrice des dépendances et alertes

**Liens de coordination, pas ordre d'activation d'agents.**

| Mission | Besoin principal | Interfaces | Priorité |
|---|---|---|---|
| C03-LEC-03 | Objections canoniques et 30 WORK | ANA, PEN, ARC, CAT, JUR, MED | P0 |
| C03-ANA-03 | Graphe 219 objets/19 relations et règles canoniques | LEC, PEN, MED, TECH | P0 |
| C03-PEN-03 | Critique des comparaisons/filiations et des pouvoirs | ANA, LEC | P1 |
| C03-ARC-03 | ARCH/ASSO et AFF5721, MP159, SHD Ly22 | LEC, ANA, HIST | P0 |
| C03-CAT-03 | CAT-001/006, décret et mai 1937 | LEC, ANA | P0 |
| C03-JUR-03 | PAR-005, RGPD, droits, fermeture publication | LEC, TECH | P0 |
| C03-HIST-04 | BIO-009/019/021/022, Marmite et travail invisible | ARC, LEC, PEN | P1 |
| C03-MED-03 | FN-018, 71 FN, alias, éditions et crédits | LEC, ANA | P1 |
| C03-ZAP-03 | Traductions 2023, post-2023 et preuves indépendantes | LEC, PEN | P1 |
| C03-TIS-03 | Relations territoriales et entraide, sans partenariats présumés | ANA, JUR, MED | P1 |
| C03-TECH-02 | Transition R6 → V2, URLs et accessibilité | ANA, LEC, JUR, MED | P0 pour publication |

## Objections et doublons transversaux

- Les objections C02 intégrales (35 annoncées) ne sont pas toutes retrouvées comme fichiers canoniques dans PR #161 ; ne jamais les déclarer résolues sur base des 30 WORK seulement.
- Le retour Archéologue C03-ARC-02, PR #162, ne clôt pas C03-ARC-03.
- Le rapport catalan C03-CAT-02 est retrouvé et vérifié sur sa branche ; cela ne constitue pas une livraison C03-CAT-03.
- FN-048/022 et FN-057/038 restent des alias candidats ; ne supprimer aucun identifiant.
- ASSO-007 → ARCH-002 : relation à confronter au contenu de la source Carnavalet AFF5721 ; ne pas substituer une relation causale.
- ARCH-005 et le décret du 16 avril : projet, norme et mise en œuvre matérielle distincts.
- CAT-001 et CAT-006 : décret du 24 octobre ≠ publication du 28 ≠ application en Aragon ou Murcie-Albacete.
- PAR-005 : blocage juridique et revue santé restent indépendants de la construction de la navigation V2.
- La revue Graphiste en commentaire PR #161 ne vaut pas visa Développeuse sur le rendu V2.

## Règle de travail

On peut avancer les recherches indépendantes en parallèle. En revanche, aucune mission dépendante d'un **visa** ne passe à « validée » si ce visa manque. Pour une contradiction, conserver les deux formulations et leurs preuves plutôt que d'écraser l'une par l'autre.
