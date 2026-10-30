const INTERSTICE_RESOURCES = [
  {
    "id": 1,
    "category": "Comprendre",
    "title": "Leurs Votes",
    "description": "Explorer les votes parlementaires par thème et groupe politique.",
    "url": "https://leurs-votes.fr/",
    "license": "Consultation publique ; licence à vérifier"
  },
  {
    "id": 2,
    "category": "Comprendre",
    "title": "Bon Pote",
    "description": "Articles et décryptages sur le climat et les enjeux écologiques.",
    "url": "https://bonpote.com/",
    "license": "Contenus protégés ; lien uniquement"
  },
  {
    "id": 3,
    "category": "Comprendre",
    "title": "Ritimo",
    "description": "Ressources pédagogiques et analyses sur la solidarité et les droits.",
    "url": "https://www.ritimo.org/",
    "license": "Licences selon les documents"
  },
  {
    "id": 4,
    "category": "Comprendre",
    "title": "data.gouv.fr",
    "description": "Jeux de données publiques et documentation des producteurs.",
    "url": "https://www.data.gouv.fr/",
    "license": "Licences indiquées par jeu de données"
  },
  {
    "id": 5,
    "category": "Faire",
    "title": "Low-tech Lab",
    "description": "Tutoriels et documentation de techniques sobres.",
    "url": "https://wiki.lowtechlab.org/",
    "license": "Licence à vérifier par ressource"
  },
  {
    "id": 6,
    "category": "Faire",
    "title": "L'Atelier Paysan",
    "description": "Documentation sur l'autoconstruction d'outils agricoles.",
    "url": "https://www.latelierpaysan.org/",
    "license": "Licence à vérifier par document"
  },
  {
    "id": 7,
    "category": "Faire",
    "title": "Open Source Ecology",
    "description": "Plans et documentation de machines open source.",
    "url": "https://www.opensourceecology.org/",
    "license": "Licences selon les plans"
  },
  {
    "id": 8,
    "category": "Faire",
    "title": "Wikilivres",
    "description": "Manuels et livres pédagogiques collaboratifs.",
    "url": "https://fr.wikibooks.org/",
    "license": "Licences libres indiquées sur le site"
  },
  {
    "id": 9,
    "category": "S'organiser",
    "title": "Movilab",
    "description": "Wiki de documentation des tiers-lieux et pratiques collectives.",
    "url": "https://movilab.org/wiki/Accueil",
    "license": "Licences à vérifier par page"
  },
  {
    "id": 10,
    "category": "S'organiser",
    "title": "Réseau des communs",
    "description": "Ressources et échanges sur les communs.",
    "url": "https://lescommuns.org/",
    "license": "Licences selon les contenus"
  },
  {
    "id": 11,
    "category": "S'organiser",
    "title": "Framasoft",
    "description": "Services et guides pour la coopération numérique.",
    "url": "https://framasoft.org/",
    "license": "Licences selon les outils et contenus"
  },
  {
    "id": 12,
    "category": "S'organiser",
    "title": "CHATONS",
    "description": "Collectif d'hébergeurs alternatifs de services numériques.",
    "url": "https://www.chatons.org/",
    "license": "Annuaire et ressources ; licences variables"
  },
  {
    "id": 13,
    "category": "Trouver",
    "title": "OpenStreetMap",
    "description": "Cartographie collaborative ouverte des territoires.",
    "url": "https://www.openstreetmap.org/",
    "license": "Données sous ODbL"
  },
  {
    "id": 14,
    "category": "Trouver",
    "title": "Transiscope",
    "description": "Carte collaborative d'initiatives de transition.",
    "url": "https://transiscope.org/",
    "license": "Licences selon les jeux de données"
  },
  {
    "id": 15,
    "category": "Trouver",
    "title": "FabLabs.io",
    "description": "Répertoire international de fablabs.",
    "url": "https://www.fablabs.io/",
    "license": "Répertoire ; conditions à vérifier"
  },
  {
    "id": 16,
    "category": "Bibliothèque",
    "title": "Framalibre",
    "description": "Annuaire de logiciels et outils libres.",
    "url": "https://framalibre.org/",
    "license": "Licences propres à chaque logiciel"
  },
  {
    "id": 17,
    "category": "Bibliothèque",
    "title": "Wikisource",
    "description": "Bibliothèque de textes libres de droits ou sous licence libre.",
    "url": "https://fr.wikisource.org/",
    "license": "Statut selon les textes"
  },
  {
    "id": 18,
    "category": "Bibliothèque",
    "title": "Internet Archive",
    "description": "Bibliothèque numérique et archives multimédias.",
    "url": "https://archive.org/",
    "license": "Droits selon les documents"
  },
  {
    "id": 19,
    "category": "S'entraider",
    "title": "Repair Café",
    "description": "Réseau d'ateliers de réparation participatifs.",
    "url": "https://www.repaircafe.org/fr/",
    "license": "Informations publiques ; licences variables"
  },
  {
    "id": 20,
    "category": "S'entraider",
    "title": "Open Food Facts",
    "description": "Base ouverte d'informations sur les produits alimentaires.",
    "url": "https://fr.openfoodfacts.org/",
    "license": "Données sous ODbL"
  },
  {
    "id": 21,
    "category": "Bibliothèque",
    "title": "CIRA Marseille",
    "description": "Centre international de recherches sur l'anarchisme : documentation, histoire et archives.",
    "url": "https://www.cira-marseille.info/",
    "license": "Documents soumis à des droits variables ; lien uniquement"
  },
  {
    "id": 22,
    "category": "Bibliothèque",
    "title": "Bibliothèque anarchiste",
    "description": "Collection de textes et d'essais sur les courants anarchistes.",
    "url": "https://bibliotheque-anarchiste.com/",
    "license": "Droits à vérifier texte par texte"
  },
  {
    "id": 23,
    "category": "Bibliothèque",
    "title": "Anarchist Libraries (français)",
    "description": "Catalogue de textes historiques et contemporains sur l'autogestion et les mouvements libertaires.",
    "url": "https://fr.anarchistlibraries.net/library",
    "license": "Droits à vérifier texte par texte"
  },
  {
    "id": 24,
    "category": "Bibliothèque",
    "title": "Éditions du Monde Libertaire",
    "description": "Catalogue de livres et brochures sur l'histoire et les idées libertaires.",
    "url": "https://editionsmondelibertaire.org/",
    "license": "Ouvrages protégés ; notices et liens uniquement"
  },
  {
    "id": 25,
    "category": "Bibliothèque",
    "title": "Éditions Libertaires",
    "description": "Maison d'édition publiant des travaux sur les idées et pratiques libertaires.",
    "url": "https://editions-libertaires.org/",
    "license": "Ouvrages protégés ; notices et liens uniquement"
  },
  {
    "id": 26,
    "category": "S'organiser",
    "title": "Service-Public : créer une association",
    "description": "Informations officielles sur les démarches de création et de déclaration d'une association en France.",
    "url": "https://www.service-public.fr/associations",
    "license": "Informations administratives ; vérifier les règles en vigueur"
  },
  {
    "id": 27,
    "category": "S'organiser",
    "title": "Associations.gouv.fr",
    "description": "Guides, ressources et informations sur la vie associative.",
    "url": "https://associations.gouv.fr/",
    "license": "Conditions selon les contenus"
  },
  {
    "id": 28,
    "category": "Bibliothèque",
    "title": "La Contemporaine",
    "description": "Bibliothèque et archives sur les mouvements sociaux et l'histoire contemporaine.",
    "url": "https://www.lacontemporaine.fr/",
    "license": "Droits selon les collections"
  },
  {
    "id": 29,
    "category": "S'organiser",
    "title": "CoopCycle",
    "description": "Projet de fédération de coopératives de livraison à vélo et outils numériques associés.",
    "url": "https://coopcycle.org/",
    "license": "Licences et conditions propres aux outils"
  },
  {
    "id": 30,
    "category": "S'entraider",
    "title": "Emmaüs Connect",
    "description": "Ressources et actions contre l'exclusion numérique.",
    "url": "https://emmaus-connect.org/",
    "license": "Conditions selon les ressources"
  }
];
