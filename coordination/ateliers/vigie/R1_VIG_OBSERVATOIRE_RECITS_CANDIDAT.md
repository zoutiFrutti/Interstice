# Observatoire des récits — prototype documentaire candidat R1
Priorité P2, sans développement ni base autonome. RELIER d'abord les Resource/SourceRef/Relation de l'architecture R1 et les notices 24/44/71.

## Objet
Comparer des récits publics sur un même événement sans transformer la Vigie en arbitre automatique du vrai. Distinguer :
- FAIT ÉTABLI : proposition datée et vérifiée, avec pièce et portée exacte ;
- SOURCE PRIMAIRE : jugement, délibération, document d'origine, déclaration enregistrée ;
- TÉMOIGNAGE : récit attribué, contexte, consentement et possibilité de contradiction ;
- INTERPRÉTATION : analyse explicitement signée et séparée des faits ;
- DÉSACCORD : propositions incompatibles, avec preuves et asymétrie éventuelle ;
- INCERTITUDE : preuve absente, source contradictoire, date à contrôler.
La présence de deux versions n'implique ni égalité de preuves ni fausse équivalence.

## Structure proposée (documentaire, sans base de données)
NarrativeClaim { id, topic, wording, asserted_by, asserted_at, evidence_refs, category, verification_state, contradictions, checked_at, editorial_state, rights_note }.
Liens par IDs canoniques Resource et SourceRef ; aucun doublon d'identifiant, aucune relation de coopération inférée.

## Cas pilote A69
A : « Le TA a annulé les autorisations environnementales le 27 février 2025 » ; catégorie fait, primaire tribunal administratif, vérifier texte et portée.
B : « Le chantier a pu reprendre à la suite du sursis du 28 mai 2025 » ; fait juridique, primaire CAA, distinguer sursis du jugement au fond.
C : « Passage en force » ; qualification attribuée aux opposants, ne pas la traiter comme constat d'illégalité.
D : « 100 millions d'euros d'indemnité » ; information attribuée à Mediacités, documents primaires à obtenir/contrôler ; ne pas déclarer enquête exclusive.
E : « 20,40 € aller-retour » ; tarif rapporté par Mediacités, validité et conditions à recontrôler.
Aucune assertion ci-dessus n'est promue automatiquement au statut publiable par ce prototype.

## Contrôle de publication
Pour chaque assertion : URL canonique, auteur/date, date de vérification, pièce ou limite, réponse adverse si nécessaire, relecture Lectrice/Juriste si sensible, décision humaine. Ne jamais ingérer des témoignages personnels sans base légale et cadre de protection ; prototype purement documentaire, sans données personnelles.

## Connexions
Mémoire des luttes : Sivens/A69 par relations sourcées, pas assimilation.
Médiathèque : liens vers travaux existants et licences ; aucun hébergement média présumé.
Tisseuse : territoire Tarn, relation géographique n'implique pas partenariat.
Graphiste : éventuelle vue de graphe avec alternative texte ; pas de nouvelle architecture.
Statut : CANDIDAT / À POURSUIVRE.
