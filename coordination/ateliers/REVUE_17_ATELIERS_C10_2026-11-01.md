# La Relieuse — audit organisationnel des 17 ateliers, cycle 10

Date : 2026-11-01. **Décision utilisateur : intégrer La Vigie ; examiner les fusions sans diminuer l'avancement.** Cette revue est candidate, sans fusion ni publication.

## Prompt de coordination exécuté
« Auditer les 17 rôles et leurs interfaces, vérifier les sources et dépendances GitHub accessibles, intégrer La Vigie au registre et à la messagerie, recommander une fusion seulement si elle augmente la capacité et ne détruit aucune expertise ni vérification indépendante. Consigner limites et preuves. »

## Les 17 ateliers et leur propriété de mission
1. **Développeuse** : code, tests, sécurité, rollback et intégration technique.
2. **Juriste** : droit, risques, droits médias, autorisations.
3. **Lectrice** : contrôle indépendant des arguments, sources, rédaction.
4. **Penseuse** : concepts, philosophie, cohérence des textes.
5. **Biographe** : identités, trajectoires, chronologies des personnes.
6. **Anarchitecte** : architecture documentaire, alias, identifiants, relations.
7. **Graphiste** : expérience visuelle, accessibilité, représentation prudente des données.
8. **Éclaireuse** : idées, prospective, enquêtes exploratoires.
9. **Médiathèque** : catalogage, dédoublonnage, conservation, ressources.
10. **Anarchiviste des communs** : histoire des communs, contextes et continuités.
11. **Assistant de l'Anarchiviste** : repérage de sources primaires, inventaires et soutien documentaire.
12. **Archéologue** : provenance, archives originales, confrontation des pièces.
13. **Tisseuse** : acteurs, réseaux et ancrages territoriaux.
14. **Anarchiviste catalan** : histoire et sources locales Catalogne/Espagne.
15. **Anarchiviste zapatiste** : histoire, traductions et sources zapatistes.
16. **Responsable réseaux sociaux** : adaptation des formats et circulation publique sous validation.
17. **Vigie** : veille médiatique, critique de la propriété/financement des médias, sources contemporaines et corrections.

## Comparaison de fusions possibles
| Ateliers | Recouvrement | Gain potentiel | Risque d'une fusion | Décision |
|---|---|---|---|---|
| Vigie + Éclaireuse | Détection de sujets | Un tableau de pistes commun | Perdre distinction veille factuelle/prospective et deux pistes simultanées | **Maintenir deux** ; point de synchronisation via Relieuse |
| Vigie + Médiathèque | Sélection de médias | Une fiche source normalisée | Confondre découverte/évaluation et conservation/accès ; goulot | **Maintenir deux** ; contrat de fiche partagé |
| Archéologue + Assistant anarchiviste | Sources primaires | Inventaire partagé | Perdre capacité de collation indépendante et soutien aux recherches | **Maintenir deux** ; réduire doublons par registre de sources |
| Anarchiviste communs + Catalan + Zapatiste | Histoire libertaire | Taxonomie, bibliographie commune | Effacer expertises régionales/langues et parallélisme | **Maintenir trois** ; protocoles communs |
| Juriste + Lectrice | Contrôle de publications | File d'attente commune | Perdre contre-lecture et séparation droit/critique | **Maintenir deux** ; revue croisée |
| Développeuse + Graphiste | Interface | Contrat de composants partagé | Perdre QA visuelle/accessibilité indépendante et rythme parallèle | **Maintenir deux** |
| Anarchitecte + Médiathèque | Métadonnées et alias | Schéma commun | Mélanger design des structures et contrôle du catalogue | **Maintenir deux** |
| Vigie + Réseaux sociaux | Choix de sujets | Calendrier de ressources | Confondre information, promotion et autorisation de diffusion | **Maintenir deux** |
| Penseuse + Lectrice | Cohérence | Échanges critiques | Confondre production d'analyse et relecture indépendante | **Maintenir deux** |
| Biographe + Anarchivistes | Personnes historiques | Sources communes | Dissoudre contrôle des identités et chronologies | **Maintenir séparés** |

## Réduction des coûts sans supprimer d'ateliers
- Un seul format de rapport : objectif, statut, branche, chemin, commit SHA, blob SHA, tests/sources, incertitudes, destinataires proposés.
- Une seule Relieuse comme routeur, **pas comme goulot d'approbation de tout travail indépendant** : les ateliers avancent en parallèle, elle ne bloque que les dépendances réelles.
- Une fiche source commune entre Vigie/Médiathèque/Éclaireuse et des identifiants stables Anarchitecte ; chacun garde sa responsabilité.
- Inventaires partagés et règles anti-doublons pour les archivistes ; revue indépendante maintenue.
- Tester une coopération de deux cycles avant toute proposition de fusion. Mesurer délai, nombre de fiches vérifiées, erreurs corrigées, doublons, blocages, temps de coordination. **Sans mesure démontrant un gain, pas de fusion.**

## Vérifications et limites
- Vérifiés sur GitHub : branche Vigie `atelier/vigie-cycle0-20261101`, `README.md` blob `e769a3b01b19d2b8049592f37bc4087d5e316680`, registre médias blob `4c1eab805962cc7f4f5907c1591d2a8682900090`, pistes blob `a1a125ceb3cfc1976d78660ead476d5864105398`, boîte C0 blob `4120108a7c0724ae975c7985cd20b0615f9e773a`, registre décisions blob `3448ef8238f130dc710c7a6ed27438b3b528263c`.
- Boîte candidate `coordination/messagerie/boites/vigie.md` et courrier `C10-VIG-001` existent sur branche de coordination. Les douze fichiers C0 ne sont **pas** tous contrôlés ; aucune qualification externe des médias certifiée.
- Index C10 blob `a74246853864a9067355ab3b80d9cb4116365110` et dépendances blob `26bf396c4f0c2440a26f120c66316395b4bdcb58` étaient toujours au périmètre seize et portes A–E en ATTENTE avant mise à jour.
- Aucune mesure empirique de productivité comparative de fusion disponible ; décision conservatrice pour ne pas casser l'avancement.

## Verdict
**17 ateliers reconnus dans l'organisation candidate ; aucune fusion recommandée maintenant.** Réévaluer sur preuves après deux cycles. Pas de fermeture, merge, publication, modification silencieuse des responsabilités, ni décision éditoriale automatique.
