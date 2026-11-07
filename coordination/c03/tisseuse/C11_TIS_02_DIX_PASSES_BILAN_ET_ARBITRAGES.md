# INTERSTICE — Dix passes de contrôle territorial et arbitrages
**Atelier : La Tisseuse · C11-TIS-02 (continuité C11-TIS-01) · 7 novembre 2026 · P1 documentaire.** Sans fusion, contact, publication ni géocodage.

## Objet, provenance et état du dépôt
Réutilise la [PR brouillon #173](https://github.com/zoutiFrutti/Interstice/pull/173) et la matrice [C11-TIS-01](./C11_TIS_01_MATRICE_RACCORDEMENTS.md). Vérifications croisées : [registre candidat #161](https://github.com/zoutiFrutti/Interstice/pull/161), [deux cartes fictives #41](https://github.com/zoutiFrutti/Interstice/pull/41), [pont documentaire #178](https://github.com/zoutiFrutti/Interstice/pull/178), [audit #177](https://github.com/zoutiFrutti/Interstice/pull/177) et [Faire Ensemble #186](https://github.com/zoutiFrutti/Interstice/pull/186). Les HEAD initiaux et les 20 enregistrements non sensibles sont enregistrés dans le [JSON de contrôle](./C11_TIS_02_PREUVES_DIX_PASSES.json).

Ces **dix passes correspondent à dix vérifications distinctes des sources, des données et du code**, non à dix cycles de CI. Relectures externes ciblées (pages officielles) ; aucun audit de terrain ni test de l'accessibilité physique.

## Dix passes exécutées

### Passe 01 · Vérification des HEAD et reprise sans perte

PR #173 au SHA 68d8e2c72b9171be85d0ea7a59194e2db8132ba5 lors de cette passe ; PR #161 SHA 0b5fb49b612bcb906126bf3cf9d58f13d9fac0d6, PR #41 e6817ec274b858a62b4918bfc22faa01d79b354d ; PR #186 relue au SHA 33e6c25cefe5b431e59b2fa0c201bee02678fc58. Toutes demeurent candidates en brouillon. Aucun merge ni rebase.

### Passe 02 · Inventaire et identifiants des vingt notices

219 objets globaux ; 20 objets TIS (19 initiatives et 1 notice de bassin) ; 20 IDs distincts ; le seul alias historique tis-c8-velo renvoie à TIS-001-001. Répartition : Haute-Garonne 5, Tarn 4, Tarn-et-Garonne 4, Aveyron 5, bassin Tescou 1, réseau ancienne région Midi-Pyrénées 1. Aucun doublon nouveau à créer.

### Passe 03 · R0–R3 et cinq liens probants

WORK-REL-101/105/106/107 sont R1 comparaisons, WORK-REL-102 R2 ponctuel (Terre de Liens/CEN, plantation décembre 2025 selon organisateur), R0 peut qualifier proximité sans arête nouvelle, R3 0. Cinq relations renvoient à la même source C05 résoluble : provenance réelle, mais précision primaire insuffisante. Ajouter les liens/date par SourceRef, sans déduire partenariat avec Interstice.

### Passe 04 · Intégrité des sept Parcours

Sept Parcours, 29 étapes vérifiées. Zéro ID de ressource absent, relation inconnue ou lien next/return vers une étape manquante. Une seule entrée TIS est dans les étapes actuelles : tis-c8-sctl dans PAR-003/territoires. PAR-004 mentionne les relations TIS mais n'en a aucune dans ses étapes. Les anciennes trois traversées TIS restent des suggestions, pas des PAR-008 à PAR-010.

### Passe 05 · Carte des communs / Atlas existant

main/atlas.html est une page documentaire sans les vingt fiches intégrées ; ses variantes A/B autour du logo sont des accès de navigation, pas un graphe R0–R3. Ne pas projeter les relations comme filiation ni lier les fiches non visées. Garder liste de territoires sans géométrie et liens éditoriaux désactivés avant visa.

### Passe 06 · Carte des possibles / code déjà développé

PR #41 : cartes-core.mjs n'affiche que isDemo===true et source.type===simulation ; cartes-data.mjs définit des centres de communes réservés aux scénarios fictifs, cartes-map.mjs les dessine. Les trois statuts fictifs repere/referencement_accepte/cooperation_convenue ne sont ni R0–R3 ni consentement d'acteurs réels. Ne pas supprimer ce garde pour brancher 20 TIS.

### Passe 07 · Faire Ensemble : interface avec besoins et offres

PR #186 : le pilote de propositions est non déployé et fermé par défaut via FAIRE_ENSEMBLE_PROPOSALS_ENABLED. Un dépôt futur va en pending ; catégories besoin/offre ≠ fiches associatives ni disponibilités documentées. Zéro proposition à attribuer automatiquement aux vingt organismes ; aucune activation ni contact.

### Passe 08 · Territoires hors découpages administratifs et confidentialité

20/20 coordonnées nulles, publication non autorisée ; Tescou = bassin, Larzac = plateau/SCTL distincts, Terre de Liens = réseau multi-départements, VRAC/jardins/Glanerie = multi-sites. Chiapas, Catalogne, Aragon et Murcie-Albacete doivent conserver périodes et territoires propres, sans GPS communautaire. La disponibilité de géométrie ne doit jamais être obligatoire pour la liste.

### Passe 09 · Sources contemporaines et contradictions concrètes

3PA/Bordanova : pages officielles contradictoires sur la superficie : accueil 3 ha, rapport annuel 2024 10 ha, pages lieu/qui sommes-nous 13 ha. Conserver trois versions et dates avant toute valeur de synthèse. La Glanerie : horaires Blagnac affichés sur boutique, non preuve d'ouverture sans exception. Afev Albi : organisme/mentorat déclaré, aucune capacité individuelle garantie. Maison du Vélo : horaires par service sur page pratique ; préciser la rubrique, ne pas extrapoler. Hors-Loge : dernière trace trouvée 2023 ; Sous les Toiles édition juillet 2026 terminée. La Salvetat : plantation 120 arbres annoncée par l'organisateur, pas survie mesurée.

### Passe 10 · Anti-doublon, intégration candidate et arbitrages

Liaisons textuelles Carte → Encyclopédie → Parcours ; garder primary_door carte pour les 20 TIS ; EXP-001/002/004/005 classés encyclopedie dans #161, mais audit NAV #177 suggère carte : désaccord encore ouvert. Les circuits TIS vers PAR-003/004 exigent choix éditorial antérieur non reçu. Les droits, retrait, géolocalisation et avis Juriste/Lectrice sont prérequis de publication, pas du catalogue candidat. Rien à fusionner automatiquement.

## Corrections documentaires réellement démontrées
| Priorité | Localisation | Constat | Suite concrète sans publication |
|---|---|---|---|
| P1 | `#161/data/relations.json` et `sources.json` | Cinq relations TIS ont uniquement la compilation C05 pour preuve détaillée ; leur `SourceRef` est valide mais trop général | Ajouter des références individuelles à [Terre de Liens 16/12/2025](https://terredeliens.org/midi-pyrenees/hub-actus-midi-pyr%C3%A9n%C3%A9e%C3%A9s/un-chantier-de-plantation-agroforesti%C3%A8re-sur-une-ferme-16-12-2025/), au [rapport IGEDD](https://www.igedd.developpement-durable.gouv.fr/appui-a-l-aboutissement-du-projet-de-territoire-a4159.html), aux pages des opérateurs, avec date/auteur/type de preuve, en conservant C05 |
| P1 | `tis-c8-3pa` et notes TIS | L'association indique [3 ha sur l'accueil](https://www.3paformation.fr/), [10 ha dans son rapport 2024](https://www.3paformation.fr/wp-content/uploads/2025/07/2024_Rapport-dactivite_3PA_compressed-1.pdf) et [13 ha sur la page du tiers-lieu](https://www.3paformation.fr/notre-tiers-lieu-bordanova/) et la présentation institutionnelle | Inscrire `superficie: non tranchée` et les trois revendications datées avec URLs ; pas de moyenne inventée, ne pas effacer les valeurs historiques |
| P1 | `tis-c8-glanerie` | [Les horaires Blagnac](https://www.la-glanerie.org/redistribuer) sont désormais affichés dans la fiche boutique et l'accueil ; anciens horaires ne suffisent pas | Qualifier comme « horaires opérateur publiés, consultés 07/11 », sans certifier ouvert actuellement ni disponibilité des produits |
| P1 | `TIS-001-001` | [Maison du Vélo](https://www.maisonduvelotoulouse.com/informations-pratiques/) distingue accueil, location, atelier participatif et autres services, avec leurs horaires respectifs | Conserver type de service et date de vérification ; ancien alias `tis-c8-velo` conservé |
| P1 | `TIS-001-002` | [Afev Albi](https://afev.org/occitanie/albi) documente mentorat et actions éducatives ; certaines impliquent des mineurs | Ne pas convertir documentation d'organisme en « place disponible » ; pas de publication de dossiers personnels |
| P1 | `TIS-001-011` | [Sous les Toiles](https://festivalsouslestoiles.fr/) documente l'édition du 6 au 10 juillet 2026, terminée | Conserver événement passé distinct de l'association organisatrice ; pas de disponibilité actuelle |
| P1 | `TIS-001-009` | [Hors-Loge](https://horsloge.blogspot.com/) a une dernière actualité trouvée en septembre 2023 ; pas de contrôle 2026 | `activité_actuelle: à vérifier`, **pas** « définitivement fermé » |
| P1 | `#161/resources.json` | `availability: inventaire_tisseuse_lu` est un statut de lecture, pas un état d'accueil | Proposer deux dimensions documentaires et d'activité, sans changer le contrat de #161 sans accord technique |
| P1 | `#177` audit NAV vs `#161` | Le classement principal de `EXP-001/002/004/005` est contesté : `encyclopedie` dans #161, candidat `carte` dans #177 | Ne modifier aucune porte principale tant que l'arbitrage documentaire n'est pas explicite ; maintenir les IDs et liens réversibles |
| P0 | Toutes sorties cartographiques, Entraide et Faire Ensemble | `coordinates:null` pour 20/20, R3=0, aucune offre et aucun besoin attribuables à une initiative externe ; pilote de propositions fermé | Interdire les points réels produits à partir d'ancres fictives et les engagements pris au nom de tiers ; préserver la liste non localisée et le retour de retrait |

## État de validation des vingt notices et des deux cartes

La matrice [C11-TIS-01](./C11_TIS_01_MATRICE_RACCORDEMENTS.md) contient les vingt lignes `ID / initiative / territoire / preuve / relations / Faire Ensemble / Parcours / lacunes`. Le [contrôle structuré](./C11_TIS_02_PREUVES_DIX_PASSES.json) conserve leurs IDs, leur scope et les cinq arêtes sans republier une adresse précise.

- **Structure documentaire** : 20/20 IDs distincts, alias Maison du Vélo préservé, 5/5 relations valides structurellement, 7 Parcours et 29 étapes à références non cassées.
- **Source d'activité/accès** : hétérogène, souvent déclarative et datée ; les inscriptions, stocks, horaires exceptionnels, capacités et disponibilités ne sont pas évalués pour les vingt structures.
- **R0** : proximité géographique documentée au niveau général uniquement, **pas coopération**. **R1** : quatre liens de comparaison dans #161. **R2** : un lien d'acte externe daté, rapporté par l'organisateur ; effets indépendants non mesurés. **R3** : zéro.
- **Carte des communs** : `main/atlas.html` n'est pas un rendu des vingt notices. **Carte des possibles** : PR #41 ne contient que des fixtures explicitement fictives. **Faire Ensemble** : PR #186 n'a pas de système autorisé d'offres/propositions au nom des vingt initiatives.
- **Territoires non administratifs** : bassin du Tescou, plateau du Larzac, région historique Midi-Pyrénées, réseaux multi-communes et territoires autonomes conservent une entrée textuelle sans centroïde.

## Interventions nécessaires de Zout : distinguer maintenant et plus tard

### Arbitrages réellement ouverts pour poursuivre l'intégration candidate

**D1 — Où situer les trois circuits historiques de la Tisseuse ?**
- **A recommandée :** liens secondaires et facultatifs dans PAR-003 et PAR-004, retour vers la Carte ; présentation purement documentaire.
- B : disponibles uniquement dans la Carte/Atlas.
- C : aucune intégration navigation pour le moment.
Cette décision avait été demandée dans la réponse C06, mais **aucune réponse explicite n'est présente dans la mission reçue** ; ne pas la considérer comme votée.

**D2 — Porte principale des quatre dossiers `EXP-001/002/004/005` ?**
- **A recommandée :** conserver `Encyclopédie` comme porte principale du dossier historique/expérimental et créer des liens contextuels vers Carte/Parcours ; non destructif, respecte #161.
- B : proposer la Carte comme porte principale après revue de type, portée et temporalité ; ne pas traiter automatiquement tous les `EXP` comme lieux d'accueil.
- C : garder le classement en réserve et ne pas modifier la candidate.

**D3 — Architecture du raccordement documentaire (si décision antérieure non retrouvée) :** préfèrer un **adaptateur non destructif** / index en lecture seule, plutôt qu'une migration des historiques et notices. Ce n'est pas un arbitrage nécessaire pour terminer cette mission documentaire : seul le passage à l'implémentation réelle le réclame.

### Intervention de Zout à ne demander qu'avant une autre étape
- **Publication / référencement** : consentement/procédure de rectification-retrait, champ exact visible, validation juridique et éditoriale par lot ; aucune validation générale des vingt.
- **Contacts extérieurs / partenaires** : sélection individualisée, objectif, mandat, protection des identités et consentement ; **aucune prise de contact autorisée** aujourd'hui.
- **Faire Ensemble** : toute activation réelle relève de sa propre procédure de tests/visa et de modération ; l'existence de dossiers TIS ne constitue pas une autorisation implicite.

## Dépendances sans relance générale
- **Anarchitecte** : contrat source `Resource/SourceRef/Relation`, export liste sans GPS, relation typée vs R0–R3, arbitragе EXP.
- **Développeuse** : gardes `isDemo`, `source=simulation`, liens `authorizedResourceLinks()=[]`, aucune auto-injection de TIS dans Carte des possibles.
- **Lectrice et Médiathèque** : contrôle des pages, date/auteur/licence et distinctions œuvre, réseau, association, événement et offre.
- **Juriste** : confidentialité, locaux ou mineurs, conditions d'accès, mentions et procédure de retrait.
- **Relieuse** : coordination des dépendances, pas fusion par défaut.

## Tests et limites
Les contrôles exécutés portent sur des documents GitHub et des sources web précises. **Aucun test local d'exécution du site, CI du dernier HEAD, requête Supabase sur des données personnelles, publication, contact, migration, téléversement d'image ni changement de logo.** Les corrections sont des propositions sourcées, non des modifications de #161 ni du code des cartes. Les décisions D1/D2 ne sont pas présumées acquises.

**État :** prêt pour revue documentaire et arbitrage de classement ; maintien des protections actuelles, PR brouillon et non fusionnée.
