// Existing NAV7 shortcuts, attached to the 31 navigation categories. No C07 bodies or visas.
export const LEGACY_QUICK_LINKS = Object.freeze([
  {
    "id": "legacy-nav7-01",
    "point": 1,
    "door": "entraide",
    "submenu": "decouvrir",
    "title": "Propositions publiques",
    "href": "index.html#propositions",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-02",
    "point": 1,
    "door": "entraide",
    "submenu": "proposer",
    "title": "Proposer une idée",
    "href": "index.html#proposer",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "suspended"
  },
  {
    "id": "legacy-nav7-03",
    "point": 1,
    "door": "entraide",
    "submenu": "participer",
    "title": "Décider ensemble",
    "href": "wiki-decision-collective.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-04",
    "point": 2,
    "door": "atlas",
    "submenu": "pistes",
    "title": "Sources de l’Atlas",
    "href": "atlas.html#atlas-sources",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-05",
    "point": 2,
    "door": "atlas",
    "submenu": "territoires",
    "title": "Cartes et symboles",
    "href": "atlas.html#cartes-logo",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-06",
    "point": 2,
    "door": "atlas",
    "submenu": "experiences",
    "title": "Parcours transversaux",
    "href": "parcours.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-07",
    "point": 4,
    "door": "encyclopedie",
    "submenu": "idees",
    "title": "Décision collective",
    "href": "wiki-decision-collective.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-08",
    "point": 4,
    "door": "encyclopedie",
    "submenu": "ecologie",
    "title": "Écologie sociale",
    "href": "wiki-ecologie-sociale-environnement.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-09",
    "point": 4,
    "door": "encyclopedie",
    "submenu": "habitat",
    "title": "Habiter et droit à la ville",
    "href": "wiki-logement-habitat-droit-ville.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-10",
    "point": 5,
    "door": "archives",
    "submenu": "memoires",
    "title": "Squats et lieux autonomes",
    "href": "squats-et-lieux-autonomes.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-11",
    "point": 5,
    "door": "archives",
    "submenu": "memoires",
    "title": "Habitat : références existantes",
    "href": "wiki-logement-habitat-droit-ville.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-12",
    "point": 5,
    "door": "archives",
    "submenu": "fonds",
    "title": "Bibliothèque publique",
    "href": "bibliotheque.html",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-13",
    "point": 6,
    "door": "mediatheque",
    "submenu": "*",
    "title": "Rechercher une ressource",
    "href": "bibliotheque.html#search",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-14",
    "point": 6,
    "door": "mediatheque",
    "submenu": "*",
    "title": "Explorer les ressources",
    "href": "bibliotheque.html#resources",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "not_applicable"
  },
  {
    "id": "legacy-nav7-15",
    "point": 6,
    "door": "mediatheque",
    "submenu": "*",
    "title": "Proposer une référence",
    "href": "bibliotheque.html#resource-form",
    "origin_status": "existing_public_r6_not_new_visa",
    "collection_state": "suspended"
  }
]);
export function quickLinkHref(item){return 'https://zoutifrutti.github.io/Interstice/'+item.href;}
export function quickLinksFor(door,submenu=null){return LEGACY_QUICK_LINKS.filter(item=>item.door===door&&(!submenu||item.submenu===submenu||item.submenu==='*'));}
