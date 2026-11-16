# C03-ANA-03 — MATRICE V2 (candidate)
Date : 2026-11-03. Mission C03-ANA-03. Référence immuable WORK : PR #161, HEAD `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6`. Contrat collectif : PR #132, HEAD `57a509257314d44cb15faf842395a21023e43335`. Aucun visa.

| Contrôle | Résultat lu | Décision proposée |
|---|---|---|
| Ressources | 219 entrées ; 219 identifiants uniques dans `data/resources.json` | Réutiliser registre, ne pas assimiler entrées à contenus validés |
| Portes | 74 encyclopedie, 121 mediatheque, 21 carte, 3 entraide | Corriger les quatre EXP classées encyclopedie |
| Parcours | PAR-001 à PAR-007, cinq prioritaires, deux progressifs | Conserver les identifiants réservés ; vérifier unicité hors lot |
| Étapes | Toutes les références `resource_ids` des étapes se résolvent dans le registre | Contrôle structurel uniquement |
| Relations | 19 identifiants distincts ; 38 extrémités résolues | Requalifier la portée des preuves, voir RELATIONS_CONTESTEES |
| Doublons | FN-022/FN-048 ; FN-038/FN-057 en doublons candidats réciproques | Ne pas supprimer ni fusionner ; contrôler éditions/œuvres |
| Écologie | `ÉCO-001` représente le chantier A/B/C ; `ECO-19` absent du fonds, `ECO-20` présent | Distinguer axes A/B/C de références ECO-xx, ne pas inventer ECO-19 |
| Provenance | `ARCH-001` original_folder COL ; quatre EXP original_folder ASSO | Conserver provenance, indépendamment de la porte |
| URL | `wiki.html`, `bibliotheque.html`, `atlas.html`, `parcours.html#entraide` ; anciennes pages et fragments documentés | Pas de redirection avant audit complet |
| Statuts | technique, documentaire, juridique, publication, politique distincts ; publication non autorisée | Ajouter visa explicite par lot hors validation de schéma |
| Objections | 30 WORK ; 35 C02 annoncées mais non collationnées | Aucune équivalence ou clôture automatique |

### Conformité des sept PAR à C02
- PAR-001 Commune : compatible ; ajoute La Marmite, club et presse ; réserves historiques maintenues.
- PAR-002 Espagne : compatible ; CAT-001/006 non collationnés ; bifurcations territoriales réservées.
- PAR-003 Écologie : compatible si A/B/C restent axes du dossier existant ; ressources ECO-xx et FN à contrôler.
- PAR-004 Autogestion : compatible ; gouvernance d'EXP-004/005 non établie.
- PAR-005 Droits en manifestation : bloqué ; pas de publication pratique sans avis juridique et médical approprié.
- PAR-006 Féminismes/LGBTQIA+ : compatible ; distinguer histoires et identités ; vérifier titres/éditions.
- PAR-007 Zapatisme : compatible ; source du mouvement, traductions et chronologies distinctes.

Les fichiers WORK restent la seule base de données candidate ; ce dossier ne crée pas de registre parallèle. Le présent contrôle vérifie les objets comme structures et références, non les 219 contenus source individuellement. 
