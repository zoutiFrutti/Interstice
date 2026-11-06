# Boîte de réception — La Développeuse — C10

**État : messages préparés par La Relieuse, non reçus.** Le destinataire doit vérifier l'index `coordination/messagerie/MESSAGES_C10.md` et les SHA des livrables avant d'accuser réception. Ce fichier n'envoie aucune notification.

| Message | État | Accusé (commit/date) | Action |
|---|---|---|---|
| C10-MSG-003 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-004 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |
| C10-MSG-008 | ÉMISE | Aucun | Lire l'index et produire un accusé vérifiable |

## À renseigner par l'atelier
Pour chaque message : réception datée, commit de l'accusé, livrable traité, commit/blob SHA, vérification réellement effectuée, blocage éventuel. Ne jamais remplacer ÉMISE par REÇUE sans lecture et accusé.

## Courrier de reprise émis par La Relieuse — 2026-11-01
- **C10-REL-20261101-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-developpeuse.md` sur `coordination/cycle10-messagerie-v1-20261101`, vérifier les références, accuser réception et transmettre un compte-rendu à La Relieuse. Ne pas considérer ce dépôt comme un accusé.

- **C10-REL-20261101-SUITE-developpeuse** : ÉMISE ; lire `coordination/messagerie/courriers/C10-REL-20261101-SUITE-developpeuse.md`, accuser réception, rendre compte à La Relieuse.

## Point d'entrée V2
À chaque « T'as du courrier », consulter cette boîte et `MESSAGES_C10.md` sur la branche `coordination/cycle10-messagerie-v1-20261101`, jamais uniquement sur sa branche personnelle. Signaler une erreur de lecture plutôt qu'une boîte vide. Accuser réception avec SHA.

## Activation explicite commune — 2026-11-01
Lire `coordination/messagerie/PROTOCOLE_ACTIVATION_17_ATELIERS_C10.md` sur la branche centrale. Pour les courriers **ÉMISE** ci-dessus, faire une lecture réelle, accuser réception sur branche personnelle avec commit/blob, puis transmettre preuves et résultats à La Relieuse. L'activation de la boîte ne constitue **pas** une réception. En cas d'erreur d'accès, la signaler précisément.


## C10-DEV-01 — contrôle ciblé du 6 novembre 2026
- Base vérifiée avant écriture : PR #186, HEAD `b5ab7867fb0605d253659796f8aea05ad4b95236` ; PR brouillon.
- Neuf workflows associés à ce HEAD : 9 terminés en succès, IDs 42189089219, 42189088994, 42189088973, 42189088970, 42189089017, 42189088974, 42189089166, 42189089009, 42189088962. Ce sont des résultats CI, **pas** une validation fonctionnelle sur appareil.
- Sécurité : `main:.github/workflows/pont-relieuse-lectrice-c12.yml` contient encore le verrou d'urgence `if: ${{ false }}`. La branche candidate contient C13 avec opt-in explicite ; vérifier avant fusion que le verrou ne disparaît pas sans autorisation.
- Navigation : `assets/nav-01/graph-data.mjs` blob `0d4cb2aea291477bd02ff31ce2e05f248b15c996` expose désormais les quatre portes officielles 2x2, IDs internes `entraide,encyclopedie,archives,mediatheque`. `assets/nav-01/explorer.mjs` blob `4d314bae7f80cb9847392da78b034e194fb4e05d` relie l'Atlas via une URL GitHub Pages publique en dur, malgré le statut d'aperçu candidat ; préférer un lien relatif `atlas.html` avec test de non-régression sur prévisualisation privée.
- `atlas.html` blob `072c2e10316b26bc3129616184d82f2f0b601b87` est une page documentaire candidate sans carte géolocalisée ; elle conserve dans sa navigation l'ancien intitulé Wiki. Ne pas qualifier cette page de carte interactive finalisée.
- Contrat des deux cartes documenté dans `coordination/RELIEUR_TRANSMISSION_013_CARTES_COMMUNS_POSSIBLES_PRIORITES_2026-10-30.md` blob `57d2f1a54b91356b9d039d9d3c9cd4b3c55fb440` : objets communs, lectures « communs » (existant documenté/déclaré) et « possibles » (besoins/offres/projets), liste équivalente, localisation approximative, données fictives pour prototype. Implémentation réelle à retracer dans PR #41 et ses commits ; ne pas présumer qu'elle est intégrée à #186.
- Contributions : `docs/AUDIT_CONTRIBUTIONS_SUPABASE_2026-10-29.md` blob `20885cfd5bd149260a85bbe93084e3ac08ba6c9b` décrit des fonctions Edge et RLS historiquement contrôlées, mais aucun état production actuel ni test d'envoi n'a été vérifié ici. Garder les formulaires publics fermés ; revue juridique préalable.
- Correctifs candidats : liens relatifs Atlas et alias historiques, remplacement des libellés Wiki résiduels, conservation des routes et outils existants, tests JS désactivé, clavier, reduced-motion, mobile 390px/400%, échec réseau, contrôle non-régression C12/C13 et zéro envoi réel.
- Tests réellement exécutés dans cette passe : lecture des fichiers et comparaison statique, interrogation des conclusions GitHub Actions du HEAD ; **aucun** navigateur Android/iPad, aucun test réseau, aucun appel IA, aucun déploiement. Écarts non clos : carte interactive des possibles, accès au prototype #41, modération réelle, accessibilité physique et provenance de l'aperçu privé.
