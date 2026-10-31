# Journal permanent — L'Éclaireuse
**Création candidate le 31 octobre 2026 par La Relieuse, sur branche PR #43.** Complément de `coordination/JOURNAL_COMMUN.md`, qui demeure le journal général. **Ce journal ne confère aucun visa éditorial, juridique, technique ou autorisation de publication.**

## Protocole de transmission
Une entrée = `ÉCL-NNN` stable, date, idée originale, recherches avec provenance et date, contradictions, connexions aux contenus existants, ateliers destinataires, décisions demandées, état et SHA du dépôt si écriture réelle. Ne jamais attribuer un contrôle non effectué. Statuts : `IDEE_RECUE` → `ENQUETE_CANDIDATE` → `TRANSMIS_A_RELIEUSE` → `ATTRIBUE_A_ATELIER` → `CONTENU_CANDIDAT` → `PRET_A_SOUMETTRE` → `ACCORD_EDITO_ZOUT` → `CONTROLES_TECHNIQUES_ET_DROITS` → `PUBLIABLE_SUR_AUTORISATION`. Les états ne sont pas des étapes automatiques. `BLOQUE` et `EN_ATTENTE` possibles à tout moment. Un compte rendu programmé ne prouve pas une écriture dans GitHub.

**Au début de chaque cycle :** lire le journal commun et ce journal sur le SHA courant, déterminer les entrées nouvelles depuis `dernier_cycle_traite`, vérifier doublons/ID, reprendre les dossiers sources, distribuer le travail sans le présumer exécuté. **À la clôture :** noter par entrée l'état réel, les preuves, refus, reports, visas humains et le point de reprise. Ne jamais effacer les propositions non traitées.

**Écritures :** lire et mettre à jour sur SHA blob courant (échec de concurrence = relire, comparer et refaire ciblé). Branche de coordination, aucun merge automatique. Mention courte dans JOURNAL_COMMUN ; ne jamais remplacer ses autres contributions.

**Bilan à 08 h / 20 h Europe/Paris :** présenter séparément idées nouvelles, recherches vérifiées, transmissions effectivement écrites (lien/commit), choses non écrites, blocages. L'automatisation doit être vérifiée indépendamment ; ce journal n'installe pas ni ne modifie de tâche programmée.

## Entrées du cycle d'introduction (31 octobre 2026)
### ÉCL-001 — Enquêter sur le pouvoir
- **Idée de Zout :** valoriser BL00D.MONEY comme source documentaire de départ, puis regrouper les enquêtes sur financements, entreprises, conflits environnementaux et libertés publiques.
- **État :** ENQUETE_CANDIDATE. Voir `coordination/eclaireuse/REGISTRE_ECL_001_004_2026-10-31.json` ; huit ressources à qualifier et recouper.
- **Limites :** les résultats et affiliations d'un répertoire ne sont pas des preuves indépendantes ; identité du responsable BL00D.MONEY à confirmer.
- **Liens :** Wiki politique, capitalisme/travail, écologie, liberté numérique et droits ; parcours critique.
- **Destinataires :** Médiathèque, Lectrice, Juriste, Penseuse, Anarchitecte.
- **Décision Zout :** aucune demandée à ce stade ; visa d'un article exact plus tard.

### ÉCL-002 — Les luttes et leurs héritages
- **Idée :** documenter ce que des mobilisations ont réellement changé, y compris leurs échecs et coûts imprévus, en France et hors de France.
- **État :** ENQUETE_CANDIDATE ; treize cas prévus dont quatre français.
- **Liens :** ÉCO-001, A69, expériences EXP, Wiki écologie et démocratie, archives, parcours.
- **Destinataires :** Anarchiviste, Tisseuse, Lectrice, Juriste, Penseuse.
- **Décision :** aucun nouveau contenu approuvé.

### ÉCL-003 — Enquêtes et outils des luttes
- **Idée :** relier méthodes, événements, enquêtes et résultats sans présumer l'efficacité des outils.
- **État :** ENQUETE_CANDIDATE ; Terres de Luttes, EJAtlas (également ÉCL-001), Observatoire des libertés associatives, LDH.
- **Liens :** ÉCL-002, Wiki droits, parcours critique.
- **Destinataires :** Médiathèque, Juriste, Tisseuse, Lectrice.
- **Décision :** aucune.

### ÉCL-004 — Cooperativa Integral Catalana
- **Idée :** enquêter sur la CIC, ses réalisations, difficultés et héritages actuels, notamment Calafou, FairCoop et FairCoin, sans confondre ces structures.
- **État :** ENQUETE_CANDIDATE ; voir dossier d'étude initial `coordination/eclaireuse/CIC_ENQUETE_INITIALE_2026-10-31.md`.
- **Liens :** parcours coopératives, EXP-004 MONDRAGON (comparaison et non assimilation), Wiki autogestion, biographies éventuelles.
- **Destinataires :** Anarchiviste, Tisseuse, Médiathèque, Lectrice, Penseuse, Juriste.
- **Décision :** pas de visa demandé ; enquête actuelle à compléter.

## Point de reprise
**Dernier cycle traité :** cycle 3 antérieur de La Relieuse ; les nouvelles ÉCL-001..004 sont **prises en charge dans le présent cycle de transmission**, sans présumer leur réalisation par les autres ateliers. Reprendre au prochain cycle les états non conclus, les objections et leurs liens de preuve. Le commit de création est indiqué dans l'historique Git du présent fichier ; éviter un SHA autoréférentiel non stable dans le corps du document.

## Cycle 4 — 31 octobre 2026 — trois passes de L'Éclaireuse
**P1, lecture réelle :** JOURNAL_COMMUN et JOURNAL_ECLAIREUSE lus sur PR #43 ; ÉCL-001..004 restent ENQUETE_CANDIDATE. Registre JSON et plan d'intégration consultés. Doublon EJAtlas ÉCL-001/003 déjà identifié ; 11 ressources distinctes, non 12. Aucun visa.

**P2, nouvelles vérifications documentaires :**
- BL00D.MONEY : site prioritaire, mais consultation directe bloquée par robots.txt dans cette passe ; responsable, méthode, sources primaires et licence NON VERIFIES. Ne pas qualifier ses accusations de faits établis. Demander une inspection humaine ou un accès documentaire approprié avant notice finale.
- Terres de Luttes : étude « Quand la lutte l'emporte » (https://terresdeluttes.fr/quand-la-lutte-lemporte/), enquête qualitative avril-novembre 2024, 42 entretiens semi-directifs ; 162 abandons de projets recensés pour 2014-2024. Critère de « victoire » : abandon du projet et reconnaissance par le collectif, y compris partielle/temporaire. Biais de sélection : cas victorieux, perspective des collectifs ; ne prouve pas à elle seule la causalité. Licence de reproduction non établie.
- EJAtlas : FAQ https://ejatlas.org/backoffice/cms/en/faq/ ; contributions de chercheurs, collectifs, ONG et personnes concernées, modération et références secondaires ; l'équipe précise ne pas vérifier directement la véracité des sources secondaires ni actualiser systématiquement toutes les fiches. Politique https://ejatlas.org/backoffice/cms/en/data-use-policy/ : CC BY-NC-SA 3.0 pour contenus, usage non commercial avec attribution et partage à l'identique ; export massif sur demande et approbation. Intérêt documentaire important mais couverture inégale, pas d'inférence causale automatique.
- Terres de Luttes « Les David s'organisent » https://terresdeluttes.fr/comprendre-les-luttes/ : étude par Kevin Vacher avec Terres de Luttes, Notre Affaire à Tous et ZEA ; 41 entretiens et questionnaire auprès de 48 collectifs, synthèse de 68 mobilisations parmi 370 cartographiées. Échantillon non représentatif de toutes les luttes ; intérêts et cadrage explicitement militants ; licence à contrôler.
- ÉCL-002 : les quatre cas français restent A_ENQUETER ; les sources comparatives ci-dessus offrent une méthode mais ne remplacent pas les décisions et archives propres à A69, NDDL, Sivens et Sainte-Soline. Aucune nouvelle conclusion de résultat attribuée.

**P3, transmission écrite :** La Relieuse, La Lectrice, La Médiathèque, L'Anarchiviste et La Juriste peuvent reprendre ces preuves et réserves depuis ce journal. Lecture par leurs conversations non attestée. Priorités : (1) audit manuel BL00D.MONEY ; (2) notice Terres de Luttes avec protocole de résultats/causalité ; (3) notice EJAtlas et conformité licence ; (4) sources primaires des quatre LUT françaises. Aucun contact, publication, fusion ni accord.

**Bilans 08 h / 20 h :** recherche effectuée = consultation des deux journaux, registre, plan et sources indiquées ; transmission écrite = présente entrée (commit Git à vérifier) ; transmission en attente = réception effective par les autres ateliers, contrôles BL00D.MONEY et droits non vérifiés. Aucun changement de statut ÉCL.

## Cycle 5 — 31 octobre 2026 — quatre passes réelles
**P1 — réconciliation GitHub.** Lecture des versions de JOURNAL_COMMUN et JOURNAL_ECLAIREUSE sur branche PR #43, dossier CIC, transmission des ateliers et registre du cycle 4 ; consultation de la PR #58. Le journal commun comporte désormais la synthèse cycle 5 de La Relieuse et la clarification explicite de Zout : projet actuellement individuel, ateliers = rôles ChatGPT, aucune assemblée ni commission constituée. ÉCL-001..004 restent ENQUETE_CANDIDATE ; EJAtlas déjà dédoublonné ; ne pas créer de nouveau numéro. La V2.6 et les chartes sont candidates, pas adoptées.
**P2 — enquête ÉCL-001.** BL00D.MONEY reste inaccessible directement par le moteur consulté (robots.txt) : identité de l'éditeur, méthode, références primaires, licence et corrections non vérifiables ; aucune inférence de culpabilité depuis une liste. Sources comparatives effectivement consultées : Who Profits https://www.whoprofits.org/articles/view/8/en (sources publiques, terrain, demandes d'information, revue et droit de réponse déclarés) ; AFSC Investigate https://investigate.afsc.org/methodology (recoupement autonome déclaré des données d'autres organisations). Réserve nouvelle AFSC https://investigate.afsc.org/change : les profils prisons/frontières ne sont plus mis à jour depuis octobre 2025 ; distinguer fraîcheur par thème. Who Profits déclare « All rights reserved » sur ses pages : aucune licence libre de reproduction présumée. Les méthodes sont des déclarations des organisations, non audit externe.
**P3 — ÉCL-002/003.** Consultation https://terresdeluttes.fr/quand-la-lutte-lemporte/ : 162 abandons recensés 2014–2024 et 42 entretiens en 2024. Sélection de cas victorieux : ne pas calculer un taux de réussite, ni conclure que la mobilisation est cause unique de l'abandon. Consultation https://ejatlas.org/backoffice/cms/en/data-use-policy/ : licence CC BY-NC-SA 3.0, export massif sur approbation, exactitude non garantie ; citer les fiches datées et ne pas aspirer la base. Les LUT-001..004 restent à documenter par décisions originales et effets matériels ; aucune efficacité d'outil démontrée à partir de sa seule existence.
**P4 — idées et transmissions.** PR #58 contient manifeste V2.6, charte des communs V0.8, charte éditoriale V0.1 candidats ; leur gouvernance collective doit être distinguée du fonctionnement individuel présent confirmé par Zout. ÉCL-004 : dossier CIC relu ; activité actuelle de la CIC non démontrée, Calafou/FairCoop distincts ; aucune preuve nouvelle sur activité 2026. Destinataires documentaires : Relieuse (statuts et reprises), Lectrice/Médiathèque (BL00D et droits), Juriste (licences et distinction de responsabilités), Anarchiviste/Tisseuse (preuves LUT et CIC), Penseuse (communs sans gouvernance fictive). Réception par leurs conversations NON ATTESTÉE.
**Point de reprise :** priorité 1, obtenir une consultation autorisée des mentions et de la méthodologie BL00D.MONEY ; priorité 2, fiches datées de LUT-001..004 et vérification des causalités ; priorité 3, statut juridique et activité actuelle de CIC/Calafou ; priorité 4, encadré de transition individuelle à soumettre à Zout, sans réécrire silencieusement V2.6.
**Bilan 08 h/20 h :** recherches = sources et dossiers ci-dessus réellement lus ; transmission écrite = cette entrée et référence au journal commun, avec commits à contrôler ; transmission en attente = réception des autres conversations et contrôles externes. Aucun visa, contact, publication, fusion ou approbation collective.
