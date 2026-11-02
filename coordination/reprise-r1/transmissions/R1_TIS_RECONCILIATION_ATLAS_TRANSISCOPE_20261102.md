# R1 — La Tisseuse : réconciliation TIS-001 et Atlas des communs
**2 novembre 2026. Candidat interne sur `research/tisseuse-reprise-r1-20261102`.** Zout seul porteur humain, aucune fusion, publication ni prise de contact.

## Passe 1 : sources primaires de coordination lues
Courrier R1-TIS blob `7b35c9cbe179d304b081df896e7fe3e027a38e36` ; méthode R1 `5b7ef2fbdaaa88791bed86f00659fd8a76f44dd8` ; huit axes `a9070cd99b775d169415e3c991074dced1c6ffab` ; protocole R1 `4982d1d2501af5665729cc99400c5915e94a6eb0`, tous lus sur `coordination/reprise-generale-r1-20261102`.
Livrables Tisseuse C10 **non dupliqués** : `coordination/transmissions/2026-11-01_TISSEUSE_C8_INDEX_CANDIDAT.json`, branche `research/tisseuse-cycle10-tis001-20261101`, blob `beec593209b1e165bbcfa4d97012323c8077a3ff` (neuf entrées, huit structures + notice territoriale Testet/Tescou). Trois parcours `coordination/transmissions/2026-11-01_TISSEUSE_C10_PARCOURS_SOURCES_MEDIATHEQUE_RELIEUSE.md`, blob `ff8b541a0edbb85610a2193f9ad8d8766fcaed5a`. L'ancien rapport `coordination/ateliers/rapports/tisseuse/015.md`, blob `95d830ace60246a5d95835051004ebf82835ba59`, décrit un carnet séparé de **douze** fiches historiques non versé au dépôt. **Ces deux lots ne doivent pas être additionnés : recoupements inconnus.**

## Passe 2 : dédoublonnage prudent, état R1
- **Neuf clés TIS C10** : Testet/Tescou, La Salvetat, VRAC Toulouse, Partageons les Jardins, La Glanerie, Maison du Vélo, 3PA Lahage, Terre de Liens Midi-Pyrénées, SCTL Larzac. Le Testet est un **territoire/rapport**, pas une association à contacter. Terre de Liens **et** La Salvetat sont deux objets différents en relation foncière documentée : ne pas les fusionner.
- **Douze fiches TIS 015** : distribution connue Toulouse 1 / Albigeois 1 / Rabastinois 1 / Gaillacois 1 / Laguépie 4 / Najac 3 / Villefranche-de-Rouergue 1. **Noms et identifiants non visibles ici**, le carnet étant séparé : comparer par organisation et source sans exposer de coordonnées personnelles ; **exhaustivité BLOQUÉE**, pas 21 « initiatives uniques ».
- Le périmètre Tarn/Occitanie inclut le Larzac **comme étape documentaire distante**, non une visite locale autour de Lisle-sur-Tarn. Ne pas promettre d'accueil dans une ferme ou un atelier.

## Passe 3 : Transiscope, audit de compatibilité sans importer
Sources consultées le 02/11/2026 :
- https://transiscope.org/le-projet/comment-ca-marche/ : agrégation des sources, **les producteurs restent responsables de leurs données**, licences d'origine maintenues. La licence d'une carte agrégatrice **n'est pas une licence globale applicable à toutes les lignes**.
- https://transiscope.org/participer/comment-contribuer-a-la-carte/ : contribution d'alternatives et processus « devenir source partenaire » ; ce processus **n'est pas engagé**, aucune structure ni donnée soumise.
- https://transiscope.org/ et https://transiscope.org/actualites/ : carte et actualités visibles ; chiffres globaux de la plateforme (plus de 40 000 alternatives annoncées) **ne mesurent ni couverture Tarn ni qualité de chaque entrée**.
- https://www.cnil.fr/fr/comment-reutiliser-les-donnees-diffusees : exigences de pertinence, transparence et actualisation lors de réutilisations comportant données personnelles.
**API :** aucun contrat d'endpoint, clé d'accès, taux, schéma, versions ou test technique n'a été trouvé/validé dans ces pièces. **Statut API = À CONTRÔLER**, non « API publique gratuite ».
**Licence :** vérifier pour *chaque source d'origine* autorisation de réutilisation, attribution, date, partage à l'identique et données personnelles. **Aucun import de base, scrape ou copie d'image.**
**Couverture :** comparer éventuellement chaque nom TIS avec sa fiche source et Transiscope ; absence sur une carte ne prouve pas inexistence. Conserver les références de provenance et alias sans prétendre doublons établis.
**Décision :** privilégier **lien externe simple documenté** avant toute synchronisation. Étudier techniquement un flux uniquement après examen de droits et décision de Zout ; Transiscope n'est pas partenaire d'Interstice.

## Passe 4 : contrat documentaire Atlas (sans migration)
Compatible avec le modèle R1 `Resource/SourceRef/Relation/SituationEntry` :
- Ressources : `legacy_tis_id`, `kind=initiative|ressource|territoire`, `title`, `territory`, `canonical_url`, `source_refs`, `checked_at`, `date_of_claim`, `evidence_state`, `rights=unknown`, `editorial_state=candidate`.
- Liens R0 **proximité** ; R1 **comparaison documentaire** ; R2 **action commune de tiers datée et sourcée** ; R3 **accord explicite avec Interstice**. **R3=0** pour toutes les entrées. Exemples R2 externes : Terre de Liens/La Salvetat pour foncier et chantier ; VRAC Toulouse/réseau VRAC. Testet/Salvetat = R1 (comparaison eau et usages fonciers), **pas coopération**.
- Les trois parcours du C10 restent en **listes textuelles sourcées** : (A) Testet/Tescou → La Salvetat → Larzac ; (B) VRAC Toulouse → Partageons les Jardins → La Glanerie ; (C) Maison du Vélo → 3PA → jardins. Renvois possibles au Wiki écologie, autonomie matérielle, décision collective, travail, logement/foncier et aux dossiers historiques La Marmite/1871, sans filiation institutionnelle inventée.
- Aucun marqueur de maison, aucune photographie empruntée, aucun horaire garanti. Accessibilité numérique/PMR **pas testée** sur la carte publique. Pas de migration des cartes fictives PR #41.

## Transmission et actions restantes
**À La Relieuse :** ce dossier candidat, les deux blobs C10, le blocage matériel du carnet 12, l'audit Transiscope (licences par source/API non vérifiée). **À La Médiathèque via La Relieuse :** liens primaires et dates, dédoublonnage dans les 71 notices/alias existants sans créer FN supplémentaire. **À L'Anarchitecte :** contrat R0–R3 et trois parcours en texte, sans modification de code. **À La Lectrice :** Testet ≠ association ; changements de baux La Salvetat ; contradiction anciens/nouveaux horaires La Glanerie ; source opérateur ≠ mesure indépendante.
**Statuts :** neuf fiches héritées = TERMINÉ documentaire (ancienne branche) ; rapprochement exhaustif avec 12 = BLOQUÉ (carnet hors accès) ; examen Transiscope = TERMINÉ documentaire, API/licences détaillées = À POURSUIVRE ; prototype Atlas et passage public = DÉCISION ZOUT puis contrôles Juriste/Anarchitecte.
**Tests non faits :** aucun appel API Transiscope, aucune vérification terrain, aucune exécution UI/CI, aucune validation de droits des photos. Ne pas les déclarer réussis.
