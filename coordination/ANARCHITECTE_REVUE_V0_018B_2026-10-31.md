# Anarchitecte — Transmission 018-B : revue candidate V0
Date de revue : 2026-10-31
SHA contrôlé : `69fcd4701cefeb884fdd46fc14a6ad5bbae6108a` (HEAD de `integration/v0-018a-candidate-2026-10-30` constaté par lecture du commit de branche).
CI : https://github.com/zoutiFrutti/Interstice/actions/runs/41128062335 — jobs `node` et `browser` **success**, aucun job en échec. Compte rendu annonce 58 Node + 19 Chromium ; jobs contrôlés directement.

## VALIDÉ — dans la limite des tests automatisés
- Provenances PR #35/#41/#42/#44 identifiées dans `docs/INTEGRATION_V0_018A_CANDIDATE.md` ; contrôle documentaire des paragraphes Wiki : 22/22 de #44 dans copie graphique page 1, 19/19 page 2 selon dossier d'assemblage.
- Tests intégration Node : liens internes/ancres, 4 types, 2 lectures, 11 exemples fictifs, textes des articles.
- Chromium : navigation accueil → découverte → simulation → Gaillac → carte/liste → fiche → retour → participation → Wiki ; navigation clavier/focus des fiches, état vide ; 320/390/1280 contrôlés dans la suite ; aucune requête POST ni requête tierce pendant les parcours couverts.
- `script.js` et `ressources.js` : mode candidat activé par défaut, messages de non-envoi ; protections de réentrance et gestion erreurs réseau de #42 préservées dans les chemins hors candidat.

## À CORRIGER — réserve de sécurité concrète
- Dans `script.js` et `ressources.js`, `const INTERSTICE_CANDIDATE_MODE=globalThis.INTERSTICE_CANDIDATE_MODE!==false` permet à une page instrumentée de désactiver la garde **côté client** avant chargement du script, puis d'atteindre les appels réels Supabase déjà codés. Ce mode **n'est pas une frontière de sécurité** ; les tests couvrent un navigateur honnête seulement.
- Correction minimale proposée **avant mise en ligne ouverte, même comme démo** : livrer des scripts de démonstration ne contenant **aucun chemin POST vers une API réelle**, ni GET des données de propositions réelles ; ou désactiver côté serveur les routes de soumission depuis le contexte de démonstration (ce qui exige une conception/validation préalable). Ne pas effectuer de changement Supabase sans accord. Préserver le code du formulaire réel dans sa branche d'origine, non embarqué dans l'artefact démo.
- Contrôle supplémentaire à ajouter : test statique ou réseau garantissant absence de références à `/functions/v1/submit-` et aux vues réelles dans les scripts de démonstration. La CI actuelle ne prouve pas l'impossibilité d'un appel manipulé.

## NON PRÊT POUR LE RÉEL
- Modération et habilitations réelles, provenance et consentement des initiatives, source/autorisation du contact, retrait et contestation, localisation sensible, garanties juridiques/RGPD, droits des ressources, procédures de publication.
- Essais sur appareil Android physique, TalkBack, Firefox et Safari **non constatés** ; la suite Chromium ne vaut pas validation universelle. Aucune donnée réelle ni association partenaire attestée.
- Article Wiki : revue et décision éditoriales humaines encore nécessaires ; présence en candidate n'équivaut pas à publication autorisée.

## Verdict à La Relieuse
**OUI pour un essai encadré sur copie locale/isolée**, à partir du SHA vérifié, en précisant que les fiches sont fictives et en évitant toute interaction de saisie de données personnelles. **NON pour une ouverture publique libre ou une collecte réelle** tant que le chemin de soumission Supabase demeure dans le JavaScript de la démo. Pas de fusion, pas de déploiement ni d'édition de la branche candidate dans cette revue.
