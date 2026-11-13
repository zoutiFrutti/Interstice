// C09 branch layout over PR161: no editorial resource bodies or publication approvals.
export const DOORS = [
  {
    "id": "entraide",
    "title": "Faire Ensemble",
    "short": "Faire Ensemble",
    "x": 300,
    "y": 330,
    "number": "01",
    "legacy": "parcours.html#entraide",
    "description": "Se rencontrer, partager des moyens et construire des initiatives communes."
  },
  {
    "id": "encyclopedie",
    "title": "Encyclopédie des communs",
    "short": "Encyclopédie",
    "x": 750,
    "y": 330,
    "number": "02",
    "legacy": "wiki.html",
    "description": "Des histoires, des idées et des pratiques à explorer, avec l’Atlas des communs."
  },
  {
    "id": "archives",
    "title": "Archives des communs",
    "short": "Archives",
    "x": 300,
    "y": 790,
    "number": "03",
    "legacy": "archives.html",
    "description": "Retrouver les documents, leurs provenances et leurs limites de consultation."
  },
  {
    "id": "mediatheque",
    "title": "Médiathèque",
    "short": "Médiathèque",
    "x": 750,
    "y": 790,
    "number": "04",
    "legacy": "bibliotheque.html",
    "description": "Des textes, des œuvres et des sources pour prolonger les découvertes."
  }
];
export const DOOR_IDS = DOORS.map(door => door.id);
export const PARCOURS = [
  {
    "id": "PAR-001",
    "title": "Commune de Paris",
    "priority": "prioritaire",
    "question": "Que peut-on établir des projets d’organisation du travail, de leurs décisions et de leurs réalisations pendant la Commune ?",
    "steps": [
      {
        "id": "contexte",
        "title": "Situer la Commune",
        "next_step_ids": [
          "decret"
        ],
        "return_step_ids": []
      },
      {
        "id": "decret",
        "title": "Lire la décision du 16 avril",
        "next_step_ids": [
          "travail"
        ],
        "return_step_ids": [
          "contexte"
        ]
      },
      {
        "id": "travail",
        "title": "Comparer projets et institutions",
        "next_step_ids": [
          "club",
          "personnes"
        ],
        "return_step_ids": [
          "decret"
        ]
      },
      {
        "id": "club",
        "title": "Clubs, presse et parole",
        "next_step_ids": [
          "personnes"
        ],
        "return_step_ids": [
          "travail"
        ]
      },
      {
        "id": "personnes",
        "title": "Personnes, signatures et incertitudes",
        "next_step_ids": [],
        "return_step_ids": [
          "travail",
          "club"
        ]
      }
    ],
    "blocked_practical": false,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "encyclopedie",
      "mediatheque"
    ]
  },
  {
    "id": "PAR-002",
    "title": "Révolution sociale espagnole",
    "priority": "prioritaire",
    "question": "Comment distinguer les expériences de collectivisation, les organisations et les conflits dans l’Espagne révolutionnaire de 1936–1937 ?",
    "steps": [
      {
        "id": "contexte",
        "title": "Organisations et termes",
        "next_step_ids": [
          "catalogne"
        ],
        "return_step_ids": []
      },
      {
        "id": "catalogne",
        "title": "Catalogne : pratiques et décret",
        "next_step_ids": [
          "mai"
        ],
        "return_step_ids": [
          "contexte"
        ]
      },
      {
        "id": "mai",
        "title": "Mai 1937 et controverses",
        "next_step_ids": [
          "comparaison"
        ],
        "return_step_ids": [
          "catalogne"
        ]
      },
      {
        "id": "comparaison",
        "title": "Comparer les pouvoirs collectifs",
        "next_step_ids": [],
        "return_step_ids": [
          "contexte",
          "catalogne",
          "mai"
        ]
      }
    ],
    "blocked_practical": false,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "encyclopedie",
      "mediatheque"
    ]
  },
  {
    "id": "PAR-003",
    "title": "Écologie sociale",
    "priority": "prioritaire",
    "question": "Comment relier histoire des luttes, connaissances scientifiques et propositions d’organisation sans confondre leurs preuves ?",
    "steps": [
      {
        "id": "question",
        "title": "Poser les distinctions",
        "next_step_ids": [
          "histoire",
          "concepts",
          "sciences"
        ],
        "return_step_ids": []
      },
      {
        "id": "histoire",
        "title": "Luttes et voix situées",
        "next_step_ids": [
          "concepts"
        ],
        "return_step_ids": [
          "question"
        ]
      },
      {
        "id": "concepts",
        "title": "Domination, communs et écologies",
        "next_step_ids": [
          "sciences"
        ],
        "return_step_ids": [
          "question",
          "histoire"
        ]
      },
      {
        "id": "sciences",
        "title": "Études et limites des scénarios",
        "next_step_ids": [
          "territoires"
        ],
        "return_step_ids": [
          "question",
          "concepts"
        ]
      },
      {
        "id": "territoires",
        "title": "Lire les situations territoriales",
        "next_step_ids": [],
        "return_step_ids": [
          "sciences",
          "histoire"
        ]
      }
    ],
    "blocked_practical": false,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "mediatheque",
      "encyclopedie"
    ]
  },
  {
    "id": "PAR-004",
    "title": "Autogestion",
    "priority": "prioritaire",
    "question": "Qui peut réellement participer, décider et contester, et qui supporte le travail visible ou invisible ?",
    "steps": [
      {
        "id": "cadre",
        "title": "Décider et répartir les pouvoirs",
        "next_step_ids": [
          "informel"
        ],
        "return_step_ids": []
      },
      {
        "id": "informel",
        "title": "Interroger les hiérarchies informelles",
        "next_step_ids": [
          "participation"
        ],
        "return_step_ids": [
          "cadre"
        ]
      },
      {
        "id": "participation",
        "title": "Accessibilité et travail invisible",
        "next_step_ids": [
          "experiences"
        ],
        "return_step_ids": [
          "cadre",
          "informel"
        ]
      },
      {
        "id": "experiences",
        "title": "Comparer des expériences situées",
        "next_step_ids": [],
        "return_step_ids": [
          "informel",
          "participation"
        ]
      }
    ],
    "blocked_practical": false,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "encyclopedie",
      "entraide"
    ]
  },
  {
    "id": "PAR-005",
    "title": "Droits en manifestation",
    "priority": "prioritaire",
    "question": "Comment séparer les règles, leurs conditions d’application et les orientations vers une aide compétente ?",
    "steps": [
      {
        "id": "perimetre",
        "title": "Définir le périmètre documentaire",
        "next_step_ids": [
          "sources"
        ],
        "return_step_ids": []
      },
      {
        "id": "sources",
        "title": "Examiner les références et objections",
        "next_step_ids": [
          "relecture"
        ],
        "return_step_ids": [
          "perimetre"
        ]
      },
      {
        "id": "relecture",
        "title": "Relecture juridique et médicale — aucune fiche pratique diffusée",
        "next_step_ids": [],
        "return_step_ids": [
          "sources"
        ]
      }
    ],
    "blocked_practical": true,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "encyclopedie",
      "entraide"
    ]
  },
  {
    "id": "PAR-006",
    "title": "Féminismes et luttes LGBTQIA+",
    "priority": "progressif",
    "question": "Comment lire des histoires distinctes, leurs convergences et leurs désaccords, à partir de voix situées ?",
    "steps": [
      {
        "id": "histoires",
        "title": "Histoires et catégories",
        "next_step_ids": [
          "commune",
          "oeuvres"
        ],
        "return_step_ids": []
      },
      {
        "id": "commune",
        "title": "Organisation et signatures dans la Commune",
        "next_step_ids": [
          "oeuvres"
        ],
        "return_step_ids": [
          "histoires"
        ]
      },
      {
        "id": "oeuvres",
        "title": "Voix, œuvres et contrepoints",
        "next_step_ids": [
          "pouvoir"
        ],
        "return_step_ids": [
          "histoires",
          "commune"
        ]
      },
      {
        "id": "pouvoir",
        "title": "Travail, soin et pouvoir",
        "next_step_ids": [],
        "return_step_ids": [
          "histoires",
          "oeuvres"
        ]
      }
    ],
    "blocked_practical": false,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "mediatheque",
      "encyclopedie",
      "entraide"
    ]
  },
  {
    "id": "PAR-007",
    "title": "Zapatisme",
    "priority": "progressif",
    "question": "Comment suivre les transformations de l’autonomie zapatiste en distinguant paroles du mouvement, traductions et observations ?",
    "steps": [
      {
        "id": "chronologie",
        "title": "Chronologie et traductions",
        "next_step_ids": [
          "autonomie"
        ],
        "return_step_ids": []
      },
      {
        "id": "autonomie",
        "title": "Transformations après 2023",
        "next_step_ids": [
          "education"
        ],
        "return_step_ids": [
          "chronologie"
        ]
      },
      {
        "id": "education",
        "title": "Escuelita, commun et travail invisible",
        "next_step_ids": [
          "comparaisons"
        ],
        "return_step_ids": [
          "chronologie",
          "autonomie"
        ]
      },
      {
        "id": "comparaisons",
        "title": "Comparaisons situées avec les autres Parcours",
        "next_step_ids": [],
        "return_step_ids": [
          "chronologie",
          "autonomie"
        ]
      }
    ],
    "blocked_practical": false,
    "editorial_state": "candidate_non_visee",
    "doors": [
      "encyclopedie",
      "mediatheque"
    ]
  }
];
export const NAVIGATION = {
  "historical_fragments": {
    "wiki": {
      "kind": "door",
      "id": "encyclopedie"
    },
    "bibliotheque": {
      "kind": "door",
      "id": "mediatheque"
    },
    "atlas": {
      "kind": "door",
      "id": "encyclopedie",
      "section": "atlas"
    },
    "entraide": {
      "kind": "door",
      "id": "entraide"
    },
    "parcours": {
      "kind": "parcours_index"
    },
    "carte": {
      "kind": "overview"
    },
    "porte/encyclopedie": {
      "kind": "door",
      "id": "encyclopedie"
    },
    "porte/mediatheque": {
      "kind": "door",
      "id": "mediatheque"
    },
    "porte/carte": {
      "kind": "door",
      "id": "encyclopedie",
      "section": "atlas"
    },
    "porte/entraide": {
      "kind": "door",
      "id": "entraide"
    },
    "exploration": {
      "kind": "overview"
    },
    "traversees": {
      "kind": "parcours_index"
    },
    "porte/atlas": {
      "kind": "door",
      "id": "encyclopedie",
      "section": "atlas"
    },
    "archives": {
      "kind": "door",
      "id": "archives"
    },
    "porte/archives": {
      "kind": "door",
      "id": "archives"
    },
    "faire-ensemble": {
      "kind": "door",
      "id": "entraide"
    },
    "porte/faire-ensemble": {
      "kind": "door",
      "id": "entraide"
    }
  }
};
export const BUNDLE = {parcours: PARCOURS, navigation: NAVIGATION};
export const PUBLIC_RESOURCES = Object.freeze([]);
export const DOCUMENTS = Object.freeze({manifeste: {title:"Le manifeste V2.5", file:"manifeste-v2-5.html"}, archive: {title:"Le manifeste V2.1 — archive", file:"manifeste.html"}});


// Historical R6 URLs are preserved. Statuses are a dated read-only observation,
// not an automatic service probe or permission to reopen collection.
export const COLLECTIVE_TOOLS_OBSERVED_ON = '2026-11-05';
export const COLLECTIVE_TOOLS_NOTICE = 'Les formulaires historiques restent consultables, mais les envois de propositions, de ressources et d’articles sont actuellement suspendus. N’y saisis pas de données personnelles.';
export const COLLECTIVE_TOOLS = Object.freeze([
  {id:'propositions',title:'Consulter les propositions',url:'https://zoutifrutti.github.io/Interstice/index.html#propositions',status:'Propositions déjà publiées',detail:'Accès à la liste publique ; aucune nouvelle publication automatique.'},
  {id:'proposer',title:'Préparer une proposition',url:'https://zoutifrutti.github.io/Interstice/index.html#proposer',status:'Envois suspendus',detail:'Le formulaire historique est visible ; il ne peut pas enregistrer de nouvelle proposition actuellement.'},
  {id:'participer',title:'Participer au projet',url:'https://zoutifrutti.github.io/Interstice/participer.html',status:'Informations sur le projet',detail:'Les formulaires reliés à cette page restent soumis à la suspension des envois.'}
]);
