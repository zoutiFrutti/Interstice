# Juriste — Courrier 04 · Matrice P0 d'intégration (candidate)
Date : 2 novembre 2026. Base R1 : `coordination/reprise-r1/juriste/R1_MATRICE_P0_ET_DROITS_2026-11-02.md` blob `14d49f6e1706bb751657794bb44261b31bb067f2`. PR #122 candidate.

| Sujet | Preuve actuelle | Risque restant | Critère précis de levée |
|---|---|---|---|
| Contributions publiques | Supabase Edge submit-proposal ACTIVE v3 SHA256 `7b73efc02989548badcf078fb9c2c7777bc09f867e1d7a5c5d1cbde0350da71c` ; submit-resource ACTIVE v2 `9dedfc1c8a792b288c314c97269b52dd70373f506ded46023a50ab4e2cb30adc`. Code de refus 503 lu en R1. | Pas de test HTTP/non-écriture dynamique | Test négatif en environnement autorisé, journal de résultat, non-écriture prouvée, retour arrière réversible |
| RPC Wiki | EXECUTE anon/authenticated absent, constat SQL R1 | Autres rôles, APIs, journaux non exhaustifs | Matrice rôles et tests sur staging |
| Fonctions privilégiées/RLS | 4 avertissements SECURITY DEFINER et 4 INFO RLS au relevé R1 | Pas de tests d'isolation | Corps SQL, politiques, grants et essais multi-comptes |
| RGPD | Registre et canal de rectification non finalisés | Informations individuelles/manquantes | Titulaire réel, finalités, base, durée/critères, destinataires, sous-traitants, droits et contact humain testé |
| LCEN | Identification opérationnelle de l'éditeur et hébergeur non vérifiée | Mentions et contact incomplets | Vérifier personne responsable, qualification du service, hébergeur et coordonnées nécessaires selon régime |
| Médias | Aucun réemploi général autorisé | Photo, vidéo, capture, logo, témoignage, base tiers | Preuve par élément : auteur, droit/licence/exception, personnes et finalité, crédits, retraits |
| Wiki sensibles | PR #75 : enfance, police/décès, santé BLOQUÉS ; migrations, logement CORRECTION NÉCESSAIRE | Note seule insuffisante | Vérification des affirmations et sources datées, droits des personnes, contrôle Lectrice, validation Zout |
| Fiche droits en manifestation | DROIT-001 préexistant consulté, blob `1657e925bc60d52456ecf02532cd1b7e0eb7b465` | Risque d'affirmer une procédure uniforme, frais/avocat, délais non vérifiés | Prototype daté, sources officielles et notice imprimable, vérification Lectrice et décision éditoriale séparée |

**Droit / interprétation / position :** la règle de déclaration des manifestations sur voie publique relève du CSI L211-1 ; la déclaration ne signifie pas qu'une participation individuelle constitue une obligation personnelle de déposer une déclaration. La proposition d'information est distincte d'un conseil sur la situation d'une personne. En cas de doute pratique, distinguer constat, mesure de police, procédure de contrôle, audition libre et garde à vue. Aucune promesse de défense juridique individuelle.

Sources contrôlées : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025505133 ; https://www.service-public.fr/particuliers/vosdroits/F21899 (fiche vérifiée 03/09/2024 : revalider dates avant diffusion) ; https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra ; https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614 ; https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069414 .
**Tests effectués** : lectures fichiers GitHub et liste de versions Edge Supabase ; aucune requête POST, aucun test navigateur, aucune modification de production.