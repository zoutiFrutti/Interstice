# La Juriste — Cycle 6 : P0 et décision de publication

## Vérifications réellement effectuées, 31 octobre 2026
Lecture connectée Supabase Interstice, **sans mutation** : `submit-proposal` **ACTIVE v2, verify_jwt=false**, code déployé empreinte SHA256 `5e9b2a9131209e3050e793355fa358e91b4166e48d9bfed2e6e51dd42f06f623`; `submit-resource` **ACTIVE v1, verify_jwt=false** et `github-wiki-ingest` **ACTIVE v5, verify_jwt=false** (une absence de JWT ne prouve pas à elle seule un contournement, contrôles applicatifs à examiner). SQL : `public.submit_wiki_article` est **SECURITY DEFINER** et exécutable par le rôle `authenticated`. Agrégats `public.proposals = 0`, `public.wiki_article_submissions = 0`, `public.resource_submissions = 0` lors du contrôle, sans consultation du contenu personnel. Ne déduire aucune absence de données Auth, logs, sauvegardes, cookies ou autres tables.

## Tableau de clôture des P0
| P0 | Statut | Preuve nécessaire |
|---|---|---|
| P0-Front, désactivation sur branche PR #56 | **FERMÉ, portée limitée au code candidat** | Le front bloque le clic ordinaire sur sa branche, pas les API déployées |
| P0-Serveur, arrêt réel des collectes | **OUVERT** | Désactivation documentée de chaque endpoint de collecte visé ou authentification/contrôles autorisés, puis tests de requêtes fictives rejetées ; choisir le périmètre sans casser le service d'autres projets |
| P0-RLS et fonctions privilégiées | **OUVERT** | Matrice anon/auth/propriétaire/autre/modérateur, opérations SELECT/INSERT/UPDATE/DELETE + RPC, tests sur environnement adapté, contrôle des vues et fonctions SECURITY DEFINER |
| P0-RGPD | **OUVERT** | Responsable, finalités, bases, destinataires, prestataires, localisation/transferts, durées, droit d'accès/rectification/effacement, gestion Auth/logs/sauvegardes, réponse effective. RGPD art.5,6,9,12–22,28/32 |
| P0-LCEN | **OUVERT** | Éditeur réel, directeur publication si applicable, hébergeur(s) et informations exigées, régime non pro/pro, contact opérationnel. LCEN art.1-1, loi 1982 art.93-2 |
| P0-Contributions publiques sensibles | **CONDITIONNEL** | Examen du passage précis, sources et autorisations, pas blocage global sur théorie divergente |

**Limites** : il n'y a pas eu de test de POST, de démonstration d'accès par deux comptes distincts, ni de déploiement, d'effacement ou de validation technique complète. Les contrôles de La Développeuse en PR #55/#60 et dernières branches doivent être comparés sur SHA exact avant tout changement de production.

## Dossier décision humaine et rectification
À renseigner par la personne réellement responsable : éditeur personne physique ou entité effectivement constituée, directeur de publication selon statut, hébergeur et contact déclarés, régime éditorial, responsable des traitements, finalités et durée de chaque collecte, autorisation ou refus de maintenir les formulaires actifs, répartition des accès, canal réel de demandes confidentielles, rectification/retrait et preuve de traitement. **La formule impersonnelle du manifeste ne décharge pas de ces obligations.** Le régime LCEN du non-professionnel peut sous conditions protéger l'identité publique, mais oblige à communiquer à l'hébergeur les informations requises ; ne pas publier automatiquement une adresse privée.

## Qualification avant diffusion/coopération
- **Publier** : seulement si visa éditorial du texte/SHA, citations et faits contrôlés, droit d'auteur et droits de la personne, QA puis acte de diffusion distinct.
- **Autorisation particulière** : reproduction intégrale, photo/film/audio, image de personne, logos, usage de nom comme soutien, témoignages, intégration vidéo à traceurs, supports contractuels, intervention rémunérée et accords de collaboration. Une exception légale est à vérifier et ne se présume pas.
- **Maintenir candidat** : identité sensible non autorisée, sources insuffisantes pour accusation ou délai juridique, contrat/media manquant, statut bloqué motivé, ou absence de décision humaine sur fichier exact.
- **Référencement indépendant** : citer factuellement une initiative et fournir un lien licite ne signifie pas accord ni représentation ; ne pas bloquer une enquête critique du seul fait de l'absence de partenariat.

**Source** : CPI L.122-4/5 https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069414 ; Code civil art.9 https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419288 ; LCEN art.1-1 https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614 ; RGPD https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra.
