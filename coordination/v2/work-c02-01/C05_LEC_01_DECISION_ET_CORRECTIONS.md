# C05-LEC-01 — Décision éditoriale A et corrections documentaires

**La Lectrice · 2026-11-04 · P1 · candidat non publié**

## Décision prise directement dans la conversation

Zout a choisi **A : afficher les sept Parcours candidats avec des statuts explicites ; PAR-005 reste bloqué et aucune fiche non visée ne peut être ouverte**. Il s'agit d'un **choix éditorial sur la présentation**, ni d'un visa documentaire sur les sept Parcours, ni d'une autorisation de fusion/déploiement.

### Présentation publique à construire ultérieurement, sans l'activer dans cette PR

| Parcours | Libellé de statut à afficher | Conditions |
|---|---|---|
| PAR-001 — Commune de Paris | En préparation · sources historiques en vérification | ARCH-002/AFF5721, ARCH-006/COL-003, BIO-019 non visés |
| PAR-002 — Révolution sociale espagnole | En préparation · archives et interprétations à vérifier | CAT-001/006 sans corps canonique contrôlé |
| PAR-003 — Écologie sociale | En préparation · structure examinée sous réserves | Études et droits non visés |
| PAR-004 — Autogestion | En préparation · structure examinée sous réserves | Projets et effets de terrain distincts |
| PAR-005 — Droits en manifestation | BLOQUÉ · contrôles juridique et sanitaire nécessaires | Aucune fiche pratique, aucun service garanti, aucune autorisation tacite |
| PAR-006 — Féminismes et luttes LGBTQIA+ | En préparation · identités et éditions à vérifier | BIO-019, droits FN et histoire plurielle |
| PAR-007 — Zapatisme | En préparation · traductions et sources à vérifier | Communiqués attribués, recherches indépendantes attendues |

Les titres, questions et étapes de lecture peuvent être affichés ; les associations d'IDs de la PR #178 ne doivent pas être présentées comme ressources accessibles. Le pont NAV-02 doit continuer de renvoyer `authorizedResourceLinks() = []` jusqu'à la production d'un manifeste de visas par versions et une décision distincte.

## Modifications candidates appliquées à ce lot documentaire (branche de relecture)

- `data/relations.json` : REL-003 de `fait_historique_atteste` à `complement_documentaire` ; REL-004 documente l'identification ARCH-002/AFF5721 non collationnée ; REL-005 de `controverse` à `complement_documentaire` pour identité incertaine ; REL-006 reformule la comparaison sans filiation supposée. **19 relations préservées, `publication_authorized:false` partout.**
- `parcours/PAR-001.md` et `PAR-006.md` : relations alignées sur ces catégories et réserves.
- `parcours/PAR-002.md` : décret du 24 octobre 1936, publication du 28, pratiques antérieures, controverses de mai 1937, sans prétendre que les dossiers CAT ont été lus.
- `parcours/PAR-005.md` : blocage juridique indépendant de la revue sanitaire ; seule visibilité du statut candidat proposée.

## Objections à conserver

La PR [#167](https://github.com/zoutiFrutti/Interstice/pull/167) conserve la matrice **36 entrées C02 effectivement listées contre 35 annoncées**, plus 6 transversales, la correspondance 30 WORK et l'examen des 19 relations. Aucune objection supprimée dans cette mission. Les libellés corrigés ne prouvent ni le contenu des originaux MP159, AFF5721, SHD Ly22, ni la responsabilité des organisations en mai 1937.

## Autres réserves et sources

- [PR #162](https://github.com/zoutiFrutti/Interstice/pull/162) : contrelecture historique, originaux non intégralement collationnés.
- [PR #174](https://github.com/zoutiFrutti/Interstice/pull/174) : navigation candidate, textes réellement exposés limités aux titres, questions, étapes et manifestes déjà publics.
- [PR #178](https://github.com/zoutiFrutti/Interstice/pull/178) : pont de 29 étapes fermé, aucun lien de contenu non visé autorisé.
- Wikipédia : ne pas produire de nouvelle synthèse généraliste redondante lorsque l'article existant est cohérent ; préférer la lecture croisée sourcée et les archives. Vérification bibliographique version par version toujours à faire.
- Médias, textes et traductions : contrôler licences par édition et support avant utilisation ; aucun média tiers reproduit ici.

## Interdictions et suite

Cette PR est documentaire et distincte de #174/#178 : **elle ne met pas à jour l'interface publique, n'ouvre aucun contenu et ne transforme pas la décision A en consentement au déploiement**. L'intégration ultérieure des statuts dans le prototype devra être testée et documentée sur un SHA exact. Les visas documentaire, juridique, sanitaire et la décision de publication restent indépendants.
