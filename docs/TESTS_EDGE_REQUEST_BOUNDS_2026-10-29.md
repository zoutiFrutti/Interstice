# Vérifications locales du correctif Edge — 29 octobre 2026

La branche contient deux fonctions Edge préparées, **non déployées** :
- `supabase/functions/submit-proposal/index.ts`
- `supabase/functions/submit-resource/index.ts`

## Tests effectués

Une reproduction isolée du helper `readBoundedBody` a été exécutée localement avec Node.js 22 et `Request`/`ReadableStream` natifs. Six tests ont réussi :

1. Corps absent → chaîne vide.
2. Corps exactement égal au plafond → accepté.
3. Corps au-delà du plafond → erreur `BODY_TOO_LARGE`.
4. Texte UTF-8 dépassant le plafond en octets → refus.
5. Texte UTF-8 de taille exacte → accepté.
6. Corps transmis en plusieurs morceaux → correctement reconstitué.

**Limite essentielle :** ce sont des tests du mécanisme reproduit, et non une exécution des sources Edge dans Deno. Le runtime Deno n'était pas disponible localement. Les appels Supabase, le flux HTTP complet, la modération, la limitation de fréquence et les en-têtes IP n'ont pas été testés en conditions réelles.

## Critères avant déploiement

- Tester les fichiers source exacts avec Deno (typecheck et tests automatisés).
- Tester les deux fonctions de bout en bout en environnement de préproduction, avec requêtes normales, trop longues, JSON mal formé, origine absente, méthodes non POST, IP absente et quotas.
- Déterminer si `cf-connecting-ip` ou `x-forwarded-for` est garanti par l'infrastructure de confiance ; ne pas se fier à un en-tête client arbitraire.
- Préparer un retour arrière vers les versions déployées (`submit-proposal` v2, `submit-resource` v1).
- Valider les parcours des formulaires avant bascule.

**Décision :** ne pas déployer à ce stade.


## Revue Anarchitecte — 29 octobre 2026 (passe complète)

- État de production interrogé directement dans Supabase `rpqiwxkaiyokmxbhxfvh` : `submit-proposal` ACTIVE v2 et `submit-resource` ACTIVE v1, toutes deux avec `verify_jwt=false`. Leur code en production conserve respectivement `req.json()` et `req.text()` non bornés pendant la lecture. Les correctifs de cette branche **ne sont pas déployés**.
- Revue GitHub : branche divergente de `main` (6 commits devant, 28 derrière au premier contrôle) ; la PR #13 ne doit pas être fusionnée aveuglément.
- Corrections enregistrées sur cette branche : contrôle des variables d'environnement avant création du client Supabase ; refus des valeurs JSON nulles, tableaux et primitives avant lecture de leurs champs ; gestion des erreurs de vérification des doublons ; nettoyage des espaces sur les en-têtes IP ; options de client sans persistance de session. Référence de la dernière correction : `5293a2d4397b2b7ff4eec15f477c000a344519b4`.
- **Risque résiduel bloquant :** `cf-connecting-ip` et `x-forwarded-for` sont lisibles depuis la requête ; leur origine fiable ou leur éventuelle réécriture par la passerelle Supabase n'est pas démontrée. Ne pas présenter le quota par IP comme une garantie de sécurité. L'en-tête `Origin` limite des clients navigateurs ordinaires mais n'authentifie pas les requêtes non navigateur.
- Contrôles à faire : exécuter `node --test tests/edge-bounded-body.test.mjs` et les tests Deno, tests HTTP de bout en bout avec environnement isolé, vérifier les paramètres `verify_jwt` et protections amont, comparer la branche à `main`, tests de formulaires puis revue humaine avant déploiement. L'existence du fichier de tests n'est **pas** une exécution réussie.

**Conclusion : RELECTURE DU CODE EFFECTUÉE ; CORRECTIONS ENREGISTRÉES ; TESTS COMPLETS NON CONFIRMÉS ; AUCUNE FUSION, AUCUN DÉPLOIEMENT.**
