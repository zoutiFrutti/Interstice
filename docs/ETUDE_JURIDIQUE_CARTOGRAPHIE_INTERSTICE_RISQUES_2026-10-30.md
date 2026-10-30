# Interstice · Étude juridique de cartographie citoyenne
## A. Registre de risques et garanties minimales de lancement
**30 octobre 2026 · Atelier du Juriste · PROPOSITION NON ADOPTÉE**

**Saisine :** transmission du Penseur « participation citoyenne et cartographie des communs ». Ce dossier examine un outil futur : il **ne prouve ni le déploiement d'une carte ni l'existence d'une application Android**.

**État vérifié dans le dépôt :** formulaires publics de besoin/ressource, propositions Wiki, page de modération privée, charte Wiki V0.1. L'audit existant `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md` indique RLS sur sept tables et modération des soumissions ; il relève des limites concernant les contrôles `Origin` et IP, la taille des requêtes et les données personnelles. Ces constats datent de son audit et ne valent **ni pentest actuel ni audit d'une base géographique future**.

**Principe structurant :** une fiche peut être référencée sans adhésion idéologique. La documentation factuelle et les engagements volontaires sont deux couches distinctes. La V2.5 du manifeste est éditorialement validée, non adoptée collectivement.

### Échelle des risques

| Gravité | Scénario | Mesure avant lancement |
|---|---|---|
| **Critique** | Domicile, refuge, lieu de rencontre protégé, activité d'une personne menacée révélé par coordonnées exactes, image, métadonnées ou API | Aucun point précis par défaut ; granularité communale/quartier avec accord approprié ; suppression des coordonnées sources non nécessaires ; refus de publication des lieux à risque ; contrôle des exports et caches |
| **Critique** | Fiche accusatoire nommant des personnes, révélant santé, religion, orientation sexuelle, opinions ou faits pénaux allégués | Bloquer la publication automatique et les indexations ; interdiction des accusations nominatives non vérifiées en fiche publique ; canal de signalement confidentiel et revue humaine |
| **Critique** | Défaillance de contrôle d'accès sur fiches privées, brouillons, contact ou localisation | Séparer tables / vues publiques des données internes ; tests d'autorisation RLS et API négatifs ; examen des rôles, stockage, journaux et sauvegardes avant ouverture |
| **Élevée** | Usurpation d'un représentant d'initiative puis suppression de données utiles ou détournement de contact | Revendication de fiche avec vérification proportionnée, preuve d'habilitation, accès réversible et recours |
| **Élevée** | Suppression arbitraire d'une fiche pour dissidence politique | Motifs écrits, historique proportionné, médiation non imposée, examen indépendant si possible, possibilité de référencement sans charte |
| **Élevée** | Rencontre, prêt de matériel ou lieu d'accueil faussement « garanti » par Interstice | Identité de l'organisateur et rôle de la plateforme clairs ; pas d'assurance, contrôle de sécurité ni qualité de prestataire présumés ; fonctions à risque différées |
| **Élevée** | Import d'annuaire sans licence, image ou adresse privée ; fusion ODbL non conforme | Provenance de chaque champ et licence ; attribution ; vérification droit des bases et RGPD ; examen de la compatibilité ODbL avant mélange |
| **Modérée** | Fiche erronée, périmée ou ancienne activité fermée | Date de vérification, origine, statut, correction simple, réexamen périodique |
| **Modérée** | Score de « conformité éthique » transformé en liste noire | Aucun score de vertu, aucune accusation sous forme de label ; filtres factuels volontaires et critères publics |

### RGPD et localisation : qualification à faire **par finalité**

1. Une fiche portant seulement sur une personne morale peut contenir des données non personnelles, mais le nom d'une personne, un numéro direct, une adresse d'exercice à domicile, une photo ou une localisation permettant de l'identifier relèvent potentiellement du RGPD.
2. Pour chaque traitement : déterminer **qui décide des finalités et moyens**, informer les personnes, identifier une base juridique article 6 (consentement, intérêt légitime réellement mis en balance, contrat, etc. selon le cas). Ne pas prétendre que toutes les fiches exigent le même consentement. Une initiative qui « gère sa fiche » ne devient pas nécessairement responsable exclusif du traitement.
3. Les catégories particulières de l'article 9, notamment les opinions politiques attribuées à une personne, demandent un motif d'exception supplémentaire ; les données d'infractions article 10 exigent un régime spécifique. Ne pas déduire une idéologie personnelle de la présence d'un lieu sur une carte politique.
4. Distinguer la **permission du système mobile** et la base juridique du traitement. La recherche « près de moi » doit fonctionner sans géolocalisation obligatoire : saisie de commune, navigation manuelle et choix d'une précision minimale ; pas de localisation en arrière-plan ni d'historique individuel pour le MVP.
5. **Ne pas envoyer** à la carte, à la recherche, aux analytics, à la console ou à l'export des coordonnées sensibles exactes, même masquées visuellement par un cercle approximatif. Pour un lieu sensible, afficher uniquement une zone large choisie avec les responsables ; parfois aucun point.
6. Définir les durées *par finalité*, avec une politique de suppression, rectification, limitation, information, opposition et effacement selon les cas. Les délais internes de revue sont à voter ; le RGPD exige en principe une réponse aux demandes de droits dans **un mois**, avec extensions légales possibles.
7. Évaluer une AIPD au regard des risques **avant lancement** ; haute précision, personnes vulnérables, grande échelle, croisements et scoring peuvent modifier ce diagnostic. Recommandation : interdire au MVP toute cartographie des mouvements personnels et toute géolocalisation précise de lieux sensibles.

### Conditions de sortie d'un premier MVP, recommandées (pas lois universelles)

- Des personnes peuvent **consulter et contribuer sans application installée**, avec site utilisable sur mobile ; voie non numérique réaliste pour les initiatives qui la demandent, à définir avec les moyens disponibles.
- Une personne responsable du traitement effectivement identifiée, des informations RGPD lisibles, un canal de contact fonctionnel, des droits testés et des durées définies.
- Trois statuts publics distincts : **référencée**, **informations vérifiées jusqu'à telle date**, **pratiques déclarées et documentées**. Pas de « certifiée conforme à la charte » automatique.
- Une fiche créée par un tiers reçoit une source, un degré de vérification, un mécanisme de revendication et de correction ; pas de publication d'adresse privée.
- Recherche par commune sans permission de localisation ; affichage uniquement des coordonnées publiques licites et sécurité testée côté serveur.
- Procédure de signalement et de suppression provisoire, réponse motivée, recours accessible, récusation en cas de conflit d'intérêts, conservation privée des traces réellement nécessaires.
- Aucun annuaire importé en masse, fiche accusatoire, notation nominative, paiement, réservation de lieu, prêt garanti, mise en relation de mineurs ou messagerie privée sensible au lancement sans nouvelle analyse.

### Points de droit à requalifier avant le déploiement

**DSA / règlement (UE) 2022/2065 :** le régime dépend de la qualification exacte du service (simple annuaire éditorial, hébergement de contributions, plateforme diffusant au public), de son rôle actif et de sa taille. Les obligations de notification de contenus illicites d'un hébergeur (article 16), de motivation (article 17) et de réclamation interne d'une plateforme (article 20) ne s'appliquent pas indistinctement à un annuaire statique. Certaines dispositions supplémentaires connaissent des exceptions pour petites/micro-entreprises ; aucune exemption générale RGPD ne s'en déduit. Analyse spécialisée nécessaire avant ouverture de contributions publiques.

**Responsabilités :** Interstice n'est pas juridiquement organisateur de tous les événements du seul fait du référencement. En revanche, il conserve des responsabilités en tant qu'éditeur de ses propres informations, éventuel hébergeur, responsable de traitement et, s'il organise lui-même une activité, organisateur réel. Un avertissement « nous ne sommes pas responsables » ne supprime pas le droit applicable.

### Sources vérifiées

- CNIL, géolocalisation mobile : https://www.cnil.fr/fr/geolocalisation-applications-mobiles-quelles-regles
- CNIL, droits dans les annuaires : https://www.cnil.fr/fr/reutilisation-de-donnees-par-des-annuaires-en-ligne-quels-droits-pour-les-professionnels-concernes
- CNIL, intérêt légitime : https://www.cnil.fr/fr/les-bases-legales/interet-legitime
- CNIL, RGPD : https://www.cnil.fr/fr/reglement-europeen-protection-donnees
- Commission européenne / EUR-Lex, DSA : https://eur-lex.europa.eu/eli/reg/2022/2065/oj/fra
- data.gouv.fr, Licence ouverte 2.0 : https://www.data.gouv.fr/pages/legal/licences/etalab-2-0
- OpenStreetMap, conditions ODbL : https://www.openstreetmap.org/copyright

**Travaux nécessaires :** choisir le responsable de traitement réel, finalités et catégories de fiches, schéma public/privé, cartographie de données, politique de conservation, contrôle de sécurité, qualification DSA, responsabilités des rencontres et sources de licences. Aucun développement ni configuration de production modifiés par cette note.

---

## Transmission 013 — Cahier minimal, passes 1 à 4 et 8 — 30 octobre 2026

**Portée :** additif opérationnel au dossier existant, **non adopté**. Source : `coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md`. Prototype actuel : [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41), ouverte **en brouillon, non fusionnée** au HEAD observé `d45d2cba40ba0f1e89000888820e3ac2f490b21e`. N'intervenir ni sur Supabase ni sur la branche du prototype.

### Passe 1 — Garanties réelles des fiches et vérification de la démo

**Actions :** relecture des données et fonctions sur `feat/initiatives-decouverte-mobile-2026-10-30` : `initiatives-data.mjs`, `initiatives-core.mjs`, `initiatives-app.mjs`, `initiatives-simulation.mjs`, `decouvrir-initiatives.html`, tests Node et Playwright. **15 assertions statiques sur ces fichiers** ont toutes observé les propriétés ciblées : six fiches de démonstration, bannière fictive, contacts nuls, absence de latitude/longitude dans les fiches, aucun appel GPS ni API dans le module examiné, pas de persistance locale de recherche, simulation à choix fermés, export de démonstration à liste blanche, pas de fond cartographique externe, présence de tests de navigateur 390px.

**Limite des preuves :** tests statiques de présence/absence de chaînes, **pas** test d'exécution, audit complet du réseau, essai Android ou validation d'un backend géographique. Une « recherche » par texte existe ; la simulation de besoin/offre n'enregistre aucune identité. Les villes citées sont réelles, les structures et actions sont inventées. **J013-01** : afficher partout « fictif », interdire tout texte laissant penser que des rencontres, initiatives ou prêts sont actuellement disponibles. Vérification attendue : captures liste, fiche, simulation et export.

### Passe 2 — Public, privé, jamais collecté dans le prototype

| Objet | **Public pour la démonstration** | **Restreint seulement si future activité réelle et base légale** | **Jamais dans le prototype fictif** |
|---|---|---|---|
| Initiative, besoin, offre, projet | `id_demo`, titre fictif, catégorie, commune, statut `simulation`, description et sources de démonstration, besoins et ressources inventés | Mandat revendication, contacts officiels vérifiés, historique détaillé non public, signalements | Nom d'une personne réelle, email/téléphone, pseudonyme de test réidentifiant, date de naissance |
| Localisation | Nom de commune / zone de démonstration, sans position attribuée à une initiative réelle | Adresse professionnelle publique licite uniquement dans futur modèle avec droits et sécurité démontrés | Adresse privée, coordonnées exactes de domicile/refuge, points des mineurs, géolocalisation de l'utilisateur |
| Interaction | Filtre manuel, résultat de correspondance fictif, export fictif à liste blanche | Consentements de mise en relation et demandes de retrait dans un service réel, sous accès limité | Messages réels, carnet de contacts, traces nominatives de présence et historique de déplacement |
| Administration | Sources de test et version de démonstration | Dossier de modération strictement restreint, minimisé et limité dans le temps | Fiche d'alerte réelle dans GitHub, Analytics individuel ou clés privées dans le navigateur |

**J013-02 (test négatif à ajouter)** : construire une fixture **purement inventée** avec champs `privateEmail`, `exactLocation`, `moderationNote`, puis vérifier que la fonction d'export et **la réponse publique** n'exposent aucun de ces champs. La liste blanche du démo-export est déjà présente ; ce résultat ne vaut pas test d'une API future.

### Passe 3 — Quatre niveaux de localisation (proposition de politique)

| Niveau | Sens | Information exposée | Garde-fou / critère de test |
|---|---|---|---|
| **L0 — non localisé** | Présence descriptive sans position sur carte | Aucune paire lat/lon ; territoire facultatif non déductible de la fiche | **J013-03** : aucune épingle ni centre renvoyé par l'API ; fiche accessible en liste hors carte |
| **L1 — commune ou zone large** | Zone choisie pour rendre un projet découvrable, **pas emplacement du projet** | Libellé de commune/zone ; si la carte dessine un symbole, légende « zone indicative, emplacement inconnu » ; pas de précision cachée | **J013-04** : impossible de reconstruire l'adresse exacte depuis JSON, GeoJSON, export, deep-link, images, recherche ou cache |
| **L2 — lieu public de rendez-vous** | Point de rencontre réellement public, **distinct d'une habitation** | Coordonnée du lieu public seulement si source et intérêt licites vérifiés, sans pointer un lieu sensible | **J013-05** : point lié au rendez-vous autorisé, non à une résidence ; aucune rencontre réelle dans la V0 fictive |
| **L3 — adresse d'activité ouverte au public** | Établissement/lieu public réellement exploité et volontairement affichable | Adresse ou point strictement justifié, base légale et source documentées, rectification/opposition possible | **J013-06** : contrôle humain avant affichage, droits, provenance, exactitude et risques de préjudice ; **niveau interdit à la V0 fictive** |

**Précision :** un niveau L1 peut toujours réidentifier un refuge isolé ou petit collectif. **Si risque de déduction, basculer L0, sans point.** Les quatre niveaux ne sont pas quatre cases de consentement : ce sont quatre **options d'exposition proposées**, chacune devant être légalement justifiée en production. La commune représentée par son centre géométrique n'est **jamais l'adresse d'une initiative**.

### Passe 4 — Tests de révélation indirecte de lieux sensibles

- **J013-07 : déduction par rareté.** Fixture inventée « lieu de soutien sensible dans une unique commune » : pas d'épingle, ni zone réduite, ni combinaison de filtres permettant de déduire l'adresse ; éventuellement L0 ou fiche non publique.
- **J013-08 : recoupement.** Combiner catégorie rare + événement/heure + territoire + photo, ne pas exposer le lieu réel par résultat de filtre, EXIF ou document lié. Aucune vraie personne ne doit servir de sujet au test.
- **J013-09 : suppression effective.** Une demande simulée de masquage doit retirer toute coordonnée sensible **de chaque représentation** (API/GeoJSON, cache, export, URL et mémoire d'événements) ; ne pas garder l'ancienne valeur dans un Git public.
- **J013-10 : fond cartographique.** Le fait qu'une source OSM affiche un bâtiment ou une adresse n'autorise pas Interstice à lui associer une catégorie vulnérable ou un point de contact. La provenance cartographique ne justifie pas la publication de liens entre personnes et lieux.

### Passe 8 — Droits des données, fonds de carte et fournisseurs

**Constat sur la PR #41 à ce HEAD :** inspection statique de la page et du module : pas d'intégration de `tile.openstreetmap.org`, MapLibre, Leaflet, Mapbox ni Nominatim. **Aucun fournisseur de fonds de carte n'est donc retenu par ce prototype au stade inspecté.**

- **Données OpenStreetMap :** [ODbL](https://www.openstreetmap.org/copyright), attribution `© OpenStreetMap contributors` et indication de licence ; dérivation d'une base peut engager les clauses de partage à l'identique. Une carte produite, une base dérivée et une base collective requièrent des analyses différentes.
- **Service de tuiles OSMF :** [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/) distincte de la licence de données. Attribution visible, identification du client, respect cache HTTP, HTTPS et **interdiction de précharger massivement les tuiles ou de proposer un mode hors-ligne avec les serveurs publics**. Ce n'est ni un hébergement garanti ni une offre illimitée.
- **Nominatim public :** [politique de géocodage](https://operations.osmfoundation.org/policies/nominatim/) : usage léger, plafond absolu d'**une requête/seconde** pour l'ensemble du service utilisateur, identification, attribution, cache et interdictions concernant usages systémiques/autocomplétion ; **inutile pour la V0 à communes choisies**. Si une recherche libre de lieux était envisagée, choisir un service et faire un contrôle spécifique avant intégration.
- **OpenStreetMap France :** [conditions des serveurs français](https://www.openstreetmap.fr/usage/) propres au fournisseur (non lucratif, public, trafic modéré et exigences mobiles spécifiques). **Ne pas présumer** que les serveurs français et OSMF ont des conditions identiques.
- **Etalab Licence Ouverte 2.0 :** [texte officiel](https://www.data.gouv.fr/pages/legal/licences/etalab-2-0) : source/producteur et date de dernière mise à jour, absence de caution implicite du fournisseur et respect du RGPD.
- **Fonds de carte commerciaux ou données cadastrales :** pas de droit d'emploi sans vérifier **leur** contrat, la conservation, les quotas et les droits sur les images ; fond et fiches ont des régimes distincts.

**J013-11 :** avant tout fond réel, consigner fournisseur choisi, licence **des données**, licence/CGU **des tuiles ou images**, attribution visible sur mobile et écran large, cache, hors-ligne, quotas, éventuelle télémétrie/transfert de requêtes, URL vers politique d'usage et option de repli. Aucun choix technique ou commercial n'est adopté ici.

