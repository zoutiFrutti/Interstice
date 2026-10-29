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
