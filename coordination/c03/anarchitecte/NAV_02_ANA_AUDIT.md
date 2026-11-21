# INTERSTICE — NAV-02-ANA — Audit structurel candidat
Date : 2026-11-04. Destinataires : La Relieuse et La Développeuse.
Références figées : PR #174 `01811690ae5dbd8bef4db2100395feea77a55431` ; PR #161 `0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6` ; PR #164 `5f0320c13c34941b5acfbc09d306991840d54d09`.
**Audit de code, sans validation éditoriale ni test physique.**

## Matrice nœuds / destinations
| ID | Libellé | Route interne | Lien historique | Avis |
|---|---|---|---|---|
| encyclopedie | Encyclopédie | #porte/encyclopedie | wiki.html | Conforme |
| mediatheque | Médiathèque | #porte/mediatheque | bibliotheque.html | Conforme |
| carte | Carte des communs | #porte/carte | atlas.html | Sous réserve d'audit HTTP |
| entraide | Entraide | #porte/entraide | parcours.html#entraide | Cible provisoire ; ne pas annoncer un service opérationnel |
| manifeste | Projet fondateur | #document/manifeste | manifeste-v2-5.html | Hors des quatre portes, conforme |
| archive | Manifeste historique | #document/archive | manifeste.html | Accès documentaire distinct |
| traversees | Index des sept PAR | #traversees | aucune nouvelle URL canonique | Couche transversale, pas cinquième porte |

## Matrice Parcours / destinations
| PAR | Étapes (IDs dans graph-data.mjs) | Portes associées | Sortie terminale | Statut |
|---|---|---|---|---|
| PAR-001 | contexte → decret → travail → club/personnes | encyclopedie, mediatheque, carte | personnes | candidat |
| PAR-002 | contexte → catalogne → mai → comparaison | encyclopedie, carte, mediatheque | comparaison | candidat |
| PAR-003 | question → histoire/concepts/sciences → territoires | mediatheque, carte, encyclopedie | territoires | candidat |
| PAR-004 | cadre → informel → participation → experiences | encyclopedie, entraide, carte | experiences | candidat |
| PAR-005 | perimetre → sources → relecture | encyclopedie, entraide | relecture | **bloqué pratique/juridique/médical** |
| PAR-006 | histoires → commune/oeuvres → pouvoir | mediatheque, encyclopedie, entraide | pouvoir | candidat |
| PAR-007 | chronologie → autonomie → education → comparaisons | carte, encyclopedie, mediatheque | comparaisons | candidat |

### Résultats des contrôles
- Quatre portes uniques ; sept PAR uniques ; 29 étapes (5+4+5+4+3+4+4).
- Toutes les cibles `next_step_ids` et `return_step_ids` sont des étapes existantes du même PAR.
- Aucune étape isolée en entrée ; chaque PAR possède une étape terminale.
- Neuf retours sont des raccourcis non réciproques : PAR-002 comparaison→contexte/catalogne ; PAR-003 territoires→histoire ; PAR-004 participation→cadre et experiences→informel ; PAR-006 pouvoir→histoires ; PAR-007 education→chronologie et comparaisons→chronologie/autonomie. **Ce sont des raccourcis possibles, non des erreurs ni des filiations.**
- `PUBLIC_RESOURCES = []` : aucune ressource bloquée n'est exposée par le module ; les étapes restent des descriptions.
- Les traits `drawPaths()` sont construits en reliant les portes déclarées par PAR, et non à partir des 19 relations prouvées. **Ne jamais les légender comme filiations historiques attestées.**
- `renderPath()` ne fournit ni `resource_ids`, ni `source_refs`, ni cibles canoniques des étapes de #161. Le parcours est navigable, mais pas encore une traversée documentaire de ressources.
- Les quatre portes et le manifeste ont des nœuds SVG/HTML ; les PAR sont dans l'index/panneau et lignes, pas des nœuds de ressource.
- `PAR-005` ne montre aucune fiche pratique ; le panneau signale explicitement le blocage. L'alternative sans JS dit seulement « candidat en relecture » : renforcer l'avertissement spécifique.

## Corrections minimales, par fichier (propositions non appliquées)
1. **`assets/nav-01/graph-data.mjs`** : conserver DOORS et PARCOURS ; ajouter au besoin des métadonnées de présentation `edge_kind: "navigation_editoriale"` ou un libellé de légende ; ne pas recopier les 219 ressources ni les 19 relations dans ce fichier. Conserver `blocked_practical` et `editorial_state`.
2. **`assets/nav-01/explorer.mjs`** : près de `drawPaths()`, afficher « Chemins de navigation proposés, pas filiations historiques ». Dans `renderPath()`, distinguer raccourci de retour et étape précédente. Prévoir des liens vers ressources canoniques seulement après visa individuel et via le registre #161, jamais par URLs inventées.
3. **`explorer.html`** : préciser dans l'alternative sans JS de PAR-005 « fiches pratiques non disponibles, contrôle juridique et médical en cours ». Préserver le manifeste comme accès fondateur, pas porte.
4. **`assets/nav-01/graph-data.mjs` + `explorer.html`** : documenter `parcours.html#entraide` comme accès historique provisoire ; vérifier l'ancre réelle et l'URL `atlas.html` sur la cible avant tout changement.
5. **`tests/nav01.browser.test.mjs`** : ajouter assertions de cohérence PAR (unicité, cibles, atteignabilité, blocage PAR-005) et texte de légende des traits.
6. **`coordination/work/nav-01/MATRICE_FONCTIONNELLE.md`** : expliciter que « Traverser » signifie étapes de navigation candidates, pas consultation des ressources documentaires ; noter l'absence de liens canoniques.
7. **`coordination/v2/work-c02-01/data/resources.json`** (#161, hors périmètre de la PR #174) : conserver correction C03-ANA-03 de la porte principale des EXP-001/002/004/005 vers `carte`. Ne pas propager une classification non validée depuis la navigation.

## Objections ouvertes et arbitrages
- 35 objections C02 vs 30 réserves WORK non réconciliées : La Lectrice.
- ARCH-006/COL-003 : association bibliographique ≠ mandat historique de chaque article ; ASSO-007/ARCH-002 : convocation ≠ tenue attestée. Ne pas convertir un trait graphique en fait historique.
- PAR-002 chronologie/catalogue ; PAR-003 science vs interprétation ; PAR-007 textes du mouvement vs traduction : visas spécialisés.
- R6/preview : contrôles HTTP/ancres, téléphone Android physique, TalkBack, retour artistique et ergonomique encore nécessaires.
- Relieuse/Zout : décider de l'emplacement visuel de la légende et du principe d'ouverture progressive des ressources visées par lot. **Aucune publication sans décision explicite.**

### Avis
**Favorable sous corrections localisées pour la structure de navigation.** Quatre portes, sept Parcours et retours cohérents au niveau du graphe ; manque de raccordement documentaire, ce qui ne justifie pas une refonte d'architecture. Aucune fusion, suppression, publication ou modification de #174 effectuée par cette revue.
