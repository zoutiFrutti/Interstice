# R1 — huit axes, contrat commun et priorités
Date 2026-11-02. Statut candidat. Règle de toute fiche/fonction : **RELIER / COMPLÉTER / CRÉER** après inventaire.

## Axes transversaux
1. Atlas des communs (Tisseuse, Médiathèque, Anarchitecte, Graphiste, Juriste) : comparer Transiscope, ajouter contexte historique, éviter import non autorisé.
2. Médiathèque audiovisuelle/culturelle (Médiathèque, Lectrice, Juriste, Vigie) : dix œuvres candidates ARTE/Tënk/autres, notices pérennes malgré replay expiré.
3. Mémoire des luttes (Archéologue, Anarchivistes, Biographe, Lectrice) : chronologies, archives, contradictions, héritages.
4. Ressources d'entraide (Juriste, Lectrice, Développeuse, Graphiste, Tisseuse) : droits manifestation, logement, discriminations, handicap, féminisme, LGBTQIA+, travail ; guides existants avant création.
5. Navigation par situation vécue (Anarchitecte, Graphiste, Développeuse, Juriste) : index sans récit personnel ni compte.
6. Passages / logo-cartographie (Graphiste, Anarchitecte, Développeuse) : bras rouges extensibles, points-organigrammes, liens sourcés, mode liste permanent.
7. Observatoire des récits (Vigie, Lectrice, Penseuse) : faits/sources/témoignages/analyses/désaccords, sans fausse équivalence.
8. Gouvernance / coordination (Relieuse, Penseuse, Juriste, Orchestratrice) : décisions humaines, traçabilité, aucun partenariat supposé.

## Architecture candidate unique
`Resource(id, kind, title, summary_original, territory, dates, source_refs, rights, access, checked_at, editorial_state, evidence_state, canonical_url, alias_of)`;
`SourceRef(url, author, published_at, checked_at, kind, rights, verification)`;
`Relation(from_id,to_id,type,evidence_refs,state)`;
`SituationEntry(label_plain,resource_ids,territory_scope,review_due_at)`;
`WorkAccess(work_id,provider_url,terms,availability_checked_at)`.
Réutiliser IDs 24/44/71 et alias. Une relation R0–R3 ne doit jamais transformer une proximité en coopération. Les bras du logo sont des vues du graphe, pas des identifiants. Alternative textuelle, recherche, clavier, faible puissance, sans collecte.

## Prototypes communs
A : carte-logo → 4–6 ressources existantes → relations sourcées → lecture normale et index texte.
B : une fiche d'entraide mobile, imprimable, hors ligne, datée, territorialisée, révisable, relecture compétente.
C : dix notices œuvres, URL/droits/accès vérifiés, liens Wiki, aucun hébergement média présumé.
Pas trois bases de données indépendantes.

## Ordre
P0 : sécurité, RGPD, droit, cinq pages sensibles, staging/rollback.
P1a : rapprochement 24/44/71 et sources ; variante logo-cartographie ; prototypes A et B.
P1b : prototype C, Transiscope, liens documentaires et procédure de mise à jour.
P2 : mémoire des luttes approfondie, observatoire des récits, enrichissements à long terme.
Les chantiers indépendants peuvent avancer en parallèle sans lever les portes bloquées.

## Arbitrages Zout
Choix de la variante logo et éventuelle modification officielle ; première situation d'entraide et périmètre ; dix œuvres ; validation de l'architecture et politique de retrait ; éventuels contacts/partenariats ; coûts/IA ; fusion/publication. Aucune décision collective fictive.
