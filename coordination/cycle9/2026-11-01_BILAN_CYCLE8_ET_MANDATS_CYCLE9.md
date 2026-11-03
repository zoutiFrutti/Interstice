# LA FAILLE NOIRE × INTERSTICE — Bilan de sortie C8 et répartition candidate C9
**Date : 1 novembre 2026 · La Relieuse · mandat documentaire candidat, sans autorité éditoriale.**

## Portée et méthode
Croisement du Journal commun de la branche de coordination, audit C8 des 17 ateliers, PR GitHub #52, #64, #67–70, branches C8 retrouvées et transmissions techniques/historiques accessibles. Une conversation indépendante ne reçoit pas automatiquement une transmission GitHub. Les sources de conversations non vérifiées en dépôt ne sont pas promues au rang de faits. Les tests CI, Drive et Supabase ne sont pas tous relus directement ; aucun résultat n'est inventé.

## Verdict C8
**Travail documentaire largement engagé, intégration et sortie non clôturées.** Le Journal commun contient désormais une entrée C8 sur la branche de coordination (commit `131245eb0a67d82a24159c6c27ef131914cce5c2`), mais les autres branches divergent et aucun HEAD unique testé/autorisé n'est démontré. Les candidats restent non publiables sans visas, droits et P0.

### Éditorial
Deux populations **distinctes** : tri initial 24 Wiki = 15 à corriger + 9 bloquées ; registre ultérieur 34 éléments mixtes = 14 prêts à soumettre + 15 à corriger (12 Wiki + 3 historiques) + 5 bloqués. Les 3 historiques ARCH-005, COL-003, ASSO-007 passent à « prêts à soumettre sous réserve » selon la Lectrice, sur blobs `352fcb67462cf1552106c88888701624408ca689`, `64249e03f55ac29e4fb6bd48266990f3b982477a`, `93f4dca9e93df2b5f287607357f3be40c68c946a`. Donc 17 candidats prêts à examen, 12 Wiki à corriger, 5 bloqués **dans cette lecture croisée** ; pas de mise à jour formelle du registre ni de visa Zout. ARCH-002/ARCH-007 ont deux visas limités ; droits de reproduction et publication non accordés.

Cinq blocages : `wiki-education-enfance-protection.html`, `wiki-frontieres-migrations-colonialisme.html`, `wiki-logement-habitat-droit-ville.html`, `wiki-police-deces-memoire.html`, `wiki-sante-psychiatrie-autonomie-soins.html`.

44 fiches Drive et 71 notices FN restent des ensembles distincts. FN-022/FN-048 et FN-038/FN-057 : doublons/alias à résoudre sans supprimer de provenance. La sélection de 12 FN n'est pas 12 droits acquis.

### Textes fondateurs
Manifeste V2.6 blob `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, Charte éditoriale V0.1 blob `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`, Charte communs V0.9 transitoire blob `aa3e38a21e76890072ef1f6a57863c55ce7d2a2b`. Non adoptés collectivement. La communication C8 blob `8daf6869876d722ae33e9cf9ed31ab4b1788cd12` mentionne encore V0.8 : corriger dans sa source et contrôler les versions ultérieures, sans modifier une charte antérieure.

### Technique et droit
Rapport Développeuse `edition-premiere/CYCLE8_P0_RAPPORT.md` blob `1313d589fb9b8ca691a6fdad8e6417070ba6e637` : `submit-proposal` et `submit-resource` actives avec `verify_jwt=false`, protections internes non entièrement vérifiées ; `submit_wiki_article`/`review_wiki_article` SECURITY DEFINER exécutables par `authenticated`. Correctifs réversibles candidats préparés, **non déployés**. Pas de PWA démontrée. La Graphiste fournit une maquette opt-in PR #68, tests automatisés décrits mais pas de test réel VoiceOver/TalkBack/NVDA vérifié. Double verrou éditorial première édition, droits à vérifier, aucune sortie autorisée.

### Nouvelles preuves découvertes depuis le précédent audit
- PR #69 Anarchiviste zapatiste, branche `research/anarchiviste-zapatiste-cycle8-20261101` : deux fichiers `recherches/zapatisme/` et erratum ZAP-C8-002 rectifiant **5 novembre 2023**, pas 6 ; emplacement exact du second fichier non confirmé par lecture directe. Post-2023, Escuelita et comparaison Wikipédia restent ouverts.
- PR #70 Archéologue des communs, branche `research/archeologue-communs-cycle8-20261101` : transmission `coordination/transmissions/2026-11-01_ARCHEOLOGUE_COMMUNS_CYCLE8_TRACES_RESERVES.md`, blob `b847caef714fb414e9300a27ba461752cefe9654`. Archives ARCH-005/006, COL-003, ASSO-007 ; avertit que règlements publiés ne prouvent pas application, et chiffres de fréquentation contradictoires. Pièces primaires manquantes.
- Branches C8 retrouvées également : `research/assistant-anarchiviste-cycle8-20261101`, `recherche/anarchiviste-catalogne-cycle8-20261101`, `coordination/mediatheque-cycle8-consolidation-20261101`, `atelier-lectrice/cycle8-qualite-20261101`, `juriste/cycle8-matrice-risques-20261101`, `design/graphiste-cycle8-integration-2026-11-01`, `integration/cycle8-wiki-bibliotheque-p0-candidate-2026-11-01`. Existence d'une branche ≠ clôture de ses travaux.

## Cycle 9 : répartition par responsable, dépendances et livrables
**Règle commune :** un propriétaire principal par tâche, contributeurs en revue, pas de doublons, sources/objections/SHAs, tests exacts, PR candidate et transmission au Journal commun. Les ateliers IA ne constituent pas une assemblée et n'ont aucun mandat de publication.

| Atelier | Mission C9 prioritaire | Livrable vérifiable / condition de fin |
|---|---|---|
| **La Relieuse** | P0 coordination : consolider branches/PR et registre unique, vérifier les errata C8, établir tableau de décisions Zout sans redemander les accords déjà pris | `coordination/cycle9/REGISTRE_UNIQUE.md`, matrice de dépendances, journal et bilan avec SHA, 0 statut inventé |
| **La Développeuse** | P0 serveur : audit des protections, protocole de test isolé et rollback des correctifs préparés ; intégration candidate sans merge | Patchs/test scripts sur branche dédiée, résultats reproductibles et rapport ; **aucune production sans autorisation** |
| **La Juriste** | P0 : valider le périmètre de sécurité/RGPD/LCEN et relire les 5 Wiki sensibles ; comparer V2.6/V0.1/V0.9 article par article | Matrice par risque et texte, références, conditions de levée et décisions humaines |
| **La Lectrice** | P1 : traiter 12 Wiki à corriger, relire 3 historiques sous réserve et 5 sensibles avec la Juriste | Tableau par ID/ancien SHA/nouveau SHA/objection/source/statut ; aucun « prêt » sans relecture |
| **La Penseuse** | P1 : concordance politique des trois textes et critique de leurs contradictions, sans réécriture juridique | Note de divergences, formulations candidates et références de versions |
| **La Biographe** | P1 : BIO-009 Nathalie Le Mel, BIO-012 Eugène Varlin, BIO-019 Blanche Lefebvre/Lefèvre ; dates, homonymies, rôles | Trois fiches et chronologies sourcées, objections et pièces primaires manquantes |
| **L'Anarchitecte** | P1 : contrat d'assemblage 24 Wiki/44 Drive/71 FN, types de documents, provenance, permissions et alias | Schéma versionné, plan de migration **sans exécution**, tests de cohérence |
| **La Graphiste** | P1 : préparer assemblage des composants sans écraser les textes ; audit mobile, clavier et lecteurs d'écran physiques si appareils disponibles | QA sur SHA d'intégration, anomalies et protocole/essais effectivement réalisés distingués |
| **L'Éclaireuse** | P2 : vérifier les découvertes ÉCL/CIC, relier les objections et orienter sans dupliquer les chercheurs | Registre des hypothèses, sources croisées et transmissions ciblées |
| **La Médiathèque** | P1 : contrôle des 71 notices, 12 sélectionnées, deux paires d'alias, droits, licences et comparaison Wikipédia | Matrice source/licence/URL/consultation/réutilisation ; aucune reproduction non autorisée |
| **L'Anarchiviste des communs** | P2 : contrôler sources historiques des communs, écologie et luttes, transmettre aux spécialistes sans refaire leurs dossiers | Notices primaires/secondaires, contradictions et liens |
| **L'Assistant de l'Anarchiviste** | P1 : récupérer/qualifier originaux prioritaires *La Sociale*, Louvre, Club, décret du 16 avril | Inventaire de pièces avec cotes et consultation réelle ou non |
| **L'Archéologue des communs** | P1 : lever contradictions ARCH-005/006, COL-003, ASSO-007, séparer projet/règlement/application | Errata versionnés, cotes et pièces manquantes, PR #70 reprise |
| **La Tisseuse** | P2 : TIS-001 Tarn/Occitanie, cartographie des initiatives documentées sans contact ni partenariat présumé | Parcours sourcés, liens et état des autorisations |
| **L'Anarchiviste catalan** | P2 : CAT-001/006, Mai 1937, collectivisations, presse et conflits ; confronter originaux | Chronologie et matrice contradictions, branche C8 réutilisée |
| **L'Anarchiviste zapatiste** | P1 : intégrer erratum 5 novembre 2023, Escuelita, changements post-2023 et Wikipédia | Fiches ZAP corrigées avec URL/date/source et objections, PR #69 |
| **La Responsable réseaux sociaux** | P2 : corriger V0.8/V0.9, harmoniser les présentations avec statuts réels, vérifier crédits et accessibilité | Kit prêt à visa, aucune programmation ni diffusion |

## Ordre d'exécution / dépendances
**Vague A — immédiatement, en parallèle :** Développeuse + Juriste (P0) ; Lectrice + spécialistes des archives (sources) ; Médiathèque (droits) ; Relieuse (registre). Les travaux documentaires n'attendent pas le déploiement.
**Vague B — après les premières corrections :** Anarchitecte (contrat), Graphiste + Développeuse (assemblage candidate), Lectrice/Juriste (QA), Penseuse (concordance), Relieuse (matrice de visas).
**Vague C — après tests et décisions explicites :** kit communication candidat, première édition éventuellement autorisée par Zout. Aucun automatisme.

## Conditions de sortie du C9
1. Inventaire unique avec liens vers les 24 Wiki, 44 Drive, 71 FN et alias, sans doublons ni statuts implicites.
2. P0 serveur caractérisé, correctifs testés en isolement, risques résiduels et rollback documentés ; déploiement distinctement autorisé s'il a lieu.
3. Cinq Wiki sensibles avec décision motivée « reste bloqué » ou « prêt à examen », jamais promotion mécanique.
4. Un HEAD candidat d'intégration avec tests Node/Chromium, accessibilité documentée et aucune perte de sources/crédits.
5. Dossier de décisions par version et droits ; aucune publication sans visa explicite.

**État final de ce document :** proposition de mandats C9, pas validation de Zout, pas démarrage des ateliers par simple dépôt de fichier. Aucun merge, déploiement, publication, communication extérieure ni adoption effectués.
