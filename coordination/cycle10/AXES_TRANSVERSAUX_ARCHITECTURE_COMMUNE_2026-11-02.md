# Architecture commune candidate — RELIER / COMPLÉTER / CRÉER
Date : 2026-11-02. **Proposition non adoptée techniquement**.

## Modèle de données commun
`Resource` : `id` stable, `kind` (wiki|biography|archive|work|initiative|struggle|help|investigation), `title`, `summary_original`, `language`, `topics[]`, `territory_public`, `period`, `source_refs[]`, `rights`, `access`, `checked_at`, `valid_from`, `review_due_at`, `editorial_state`, `evidence_state`, `sensitivity`, `canonical_url`, `alias_of`. Champs inconnus = null, pas de fausse précision.
`SourceRef` : `url`, `creator`, `date_published`, `checked_at`, `source_kind` (primaire|secondaire|témoignage|opérateur|interprétation), `scope`, `rights_claim`, `verification_state`.
`Relation` : `from_id`, `to_id`, `relation_type`, `evidence_refs[]`, `confidence_state`, `editorial_state`, `last_checked`. **Aucune inférence graphique ne vaut preuve de coopération**. Reprendre R0–R3 Tisseuse : R3 exige preuve explicite de partenariat Interstice.
`SituationEntry` : `id`, `plain_language_label`, `territory_scope`, `resource_ids[]`, `emergency_caveat`, `review_due_at`. Pas de champ récit personnel, compte ou profil.
`WorkAccess` : `work_id`, `provider_url`, `availability_checked_at`, `access_terms`, `licence`, `link_status`. Une œuvre reste référencée si son replay disparaît, avec statut de lien mis à jour.

## Schéma des passages
`logo officiel` → `déclinaison cartographique SVG` → `bras thématiques non exclusifs` → `points Resource` → `Relation sourcée` → `page canonique`.
La carte est une **vue** du graphe, pas la base de données ; ajout de bras possible sans changement d'ID ni refonte de l'identité officielle. La recherche et l'index textuel donnent les mêmes destinations. Articles longs sans snap, navigation au clavier et lecteurs d'écran, liens profonds et retour arrière.

## Flux de production
Inventaire de l'existant → contrôle des droits/qualité/actualité → décision RELIER (lien et notice) ou COMPLÉTER (métadonnées/contextualisation) ou CRÉER (lacune prouvée) → Lectrice/Juriste selon sensibilité → approbation explicite Zout → publication séparée et réversible. Le pipeline doit permettre correction, retrait, signalement de liens périmés et archivage documentaire sans hébergement de média sous droit.

## Prototypes liés au même contrat
A : parcours de 4 à 6 `Resource` existantes, relations justifiées, logo SVG, liste équivalente, aucune source fictive.
B : une `Resource(kind=help)` à partir d'une situation vécue ; périmètre géographique, date, sources, version imprimable/offline, expiration et contrôle juridique.
C : dix `Resource(kind=work)` candidates, pas dix vidéos copiées ; vérifier disponibilité, droits et liens individuellement. Préserver les notices si replay expiré.
Trois rendus, **un même référentiel d'identifiants, de sources, de droits et de statuts**.

## Risques P0
Aucune collecte de récit sensible, géolocalisation obligatoire, publication de coordonnées privées, image non autorisée, affirmation de service « ouvert », diagnostic ou conseil juridique individualisé non vérifié. Les contenus sensibles Juriste #75 restent bloqués tant que non corrigés/validés.
