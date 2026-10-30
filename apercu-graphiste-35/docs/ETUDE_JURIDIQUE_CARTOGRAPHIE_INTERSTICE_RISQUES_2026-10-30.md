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
