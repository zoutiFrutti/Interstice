# Tisseuse · Cycle 8 · Index documentaire pour Médiathèque et contrat cartographique candidat
**1er novembre 2026 · interne / aucune mise en ligne.** Source : [index territorial TIS-001 existant](2026-11-01_TISSEUSE_C8_TIS001_INDEX_TERRITORIAL_CARTES_CANDIDATES.md) et [corrections de preuve](2026-11-01_TISSEUSE_C8_COMPLEMENT_VERIFICATIONS_ET_OBJECTIONS.md).

## Contrat minimal : ne pas remplacer cartes-data.mjs
Les deux cartes candidates de PR #41 conservent leur modèle `kind=initiative|besoin|ressource|projet`, `reading=communs|possibles`. Le présent document est **une projection proposée hors données publiques**, en attendant l'accord éditorial de Zout et l'avis de la Juriste.

| champ conceptuel interne | sens et contrainte |
|---|---|
| `source_id` | référence stable à notice originale TIS/ÉCO, ne pas attribuer un nouvel identifiant public en double |
| `label`, `public_region` | nom public et territoire général, **pas d'adresse privée** |
| `source_url`, `source_published_at`, `checked_at` | source exacte, date originelle si disponible, vérification distincte ; `null` si inconnue |
| `activity_period` | événement passé, annonce, procédure, activité opérateur récente, sans drapeau « ouvert maintenant » |
| `relationship_evidence` | R0 proximité ; R1 lien de lecture ; R2 relation extérieure attestée à date ; R3 coopération Interstice avec preuve explicite (absente) |
| `access_caveat` | liste d'attente, adhésion, date passée, visiteurs non confirmés, horaires inconnus |
| `editorial_state` | candidat / relu / accord de Zout ; jamais dérivé de l'activité locale |
| `source_kind` | institution publique, déclaration d'opérateur, étude indépendante, témoignage ou acte d'origine |
| `rights_check` | vérifier réutilisation textes/images/licences ; ne pas exposer de personnes non publiques |

Aucun `lat/lon` inventé. **Points géographiques candidats** : seulement les territoires « Lisle-sur-Tarn/bassin du Tescou », « Monestiés », « Toulouse », « Lahage », « plateau du Larzac ». Sans adresse vérifiée par l'opérateur, **pas de marqueur sur un bâtiment ou une maison**.

## Parcours candidats avec alternatives lisibles
**A. Eau et terres du Tarn** : texte/ordre = Tescou (rapport IGEDD) → Monestiés (Terre de Liens, plantation 2025) → SCTL Larzac (comparaison foncière, **halte documentaire éloignée**, pas proposition de marche). Lien Wiki `wiki-ecologie-sociale-environnement.html` + `wiki-decision-collective.html`.
**B. Entraide alimentaire et réemploi** : groupements VRAC Toulouse → réseau Partageons les Jardins → La Glanerie, parcours de **sites documentaires**, non itinéraire visite garanti. Lien Wiki `wiki-autonomie-materielle-savoir-faire.html` + `wiki-capitalisme-classes-travail.html`. Comparaison EXP-002 Montpellier en lecture, non étape locale.
**C. Réparer et transmettre** : Maison du Vélo Toulouse → 3PA Lahage → Partageons les Jardins ; une offre actuelle pour chaque organisme exige un contrôle de la page de service et de ses conditions avant toute visite. Lien Wiki `wiki-education-enfance-protection.html` + `wiki-autonomie-materielle-savoir-faire.html`.
Accessibilité : chaque carte doit offrir **liste textuelle ordonnée équivalente**, liens clairement nommés, contexte géographique et source, états incertains sans icônes seules, tabulation et focus visibles, contrastes, zoom 200–400 %, possibilité de ne pas autoriser la géolocalisation, aucune indication mensongère sur accessibilité PMR.

## Mini-catalogue de sources pour La Médiathèque : réutiliser les notices existantes
| sujet | source et période de publication vérifiables | type | limite scientifique ou de droits |
|---|---|---|---|
| Tescou et Sivens | https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html ; 23/05/2025, modif. 08/09/2025 | rapport public | résumé institutionnel, variantes et acteurs à lire dans rapport complet |
| La Salvetat plantation | https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/ ; 16/12/2025, modif. 17/12/2025 | compte rendu organisateur | actions réelles déclarées, survie non mesurée, photos tierces |
| La Salvetat bail | https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/retour-sur-notre-ag-2026-07-04-2026/ ; 07/04/2026 | compte rendu AG | changement de bail décrit, aucun acte de bail lu |
| VRAC Toulouse | https://toulouse.vrac-asso.org/adherer-commander/ ; page sans date certaine au contrôle 01/11/2026, formulaire référencé 2025 | modalités opérateur | attente et paiement, accès actuel inconnu |
| SCTL Larzac | https://larzac.org/accueil/la-sctl-recherche-un-e-assistant-e-de-direction/ ; 08/09/2026, date limite 09/10/2026 | offre de recrutement | annonce ne prouve pas embauche effective |
| TIS 015 | `coordination/ateliers/rapports/tisseuse/015.md` ; 30/10/2026 | transmission interne | carnet des 12 fiches séparé, pas d'assurance de dédoublonnage |
| ÉCO-TIS | `coordination/transmissions/2026-10-31_TISSEUSE_ECO_TIS_001_INITIATIVES_ET_CAS.md` ; 31/10/2026, complété | transmission interne | sources et cas à relier, pas publier automatiquement |

**Instructions de catalogage** : ne pas reproduire images, annexes, contenus sous droit ; vérifier si la notice FN existe déjà, garder le même ID, noter les URL originales et droits/accès ; distinguer PDF non collationné de page institutionnelle ouverte. Ne rien marquer « partenaire » ni « recommandé par » sans consentement.
**Pour La Relieuse** : transmission disponible sur la branche pré-sortie. **Pour La Lectrice** : objections de preuve et de temporalité dans fichier compagnon. **Pour L'Anarchitecte** : contrat candidat sans migration/écriture UI. Destinataires non présumés informés.
