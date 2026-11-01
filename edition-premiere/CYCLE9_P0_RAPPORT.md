# Développeuse — Cycle 9 · contrôles P0 et intégration candidate (01/11/2026)

## Faits vérifiés et périmètre
- Base candidate Cycle 8 : `cb248d15cb4e0dfc87ec0f3b76e68ebc1f6dc60e`, CI antérieure 100/100 Node et 24/24 Chromium.
- Branche distincte `integration/cycle9-p0-wiki-bibliotheque-candidate-2026-11-01` ; aucun fichier éditorial réécrit.
- PR #56 `1388742996cec71e138446914cc508ddd9e267c2`, #62 `41f5c11bef690ca473f23b6674930dc03a9`, #65 `2251be00f50a96233d7a0289fe32ee216d2f7e09`, dernières PR #69/#70 et Journal commun de La Relieuse (blob `dd65b0be79a32194dcf4894c5747cb5cc3b64568`) consultés. Les nouveaux travaux documentaires ne constituent pas des visas.
- Supabase projet Interstice **consulté sans mutation** : Edge `submit-proposal` ACTIVE v2 JWT non vérifié ; `submit-resource` ACTIVE v1 JWT non vérifié ; `github-wiki-ingest` ACTIVE v5 JWT non vérifié par plateforme mais contrôle OIDC GitHub interne observé aux cycles précédents. `submit_wiki_article` et `review_wiki_article` SECURITY DEFINER, EXECUTE anon=false, authenticated=true ; quatre tables RLS sans policy et cinq fonctions SECURITY DEFINER accessibles authenticated (advisors). Statut P0 **OUVERT**.
- Les handlers de suspension proposés dans `edition-premiere/security-p0` sont **non déployés**. Un contrôle Origin HTTP ne prouve pas l'identité d'un utilisateur.
## Tests hors production
- Nouveau `tests/cycle9-server-sandbox.test.mjs` exécute les deux handlers candidats avec **Deno.serve simulé dans Node vm**. Cas POST fictif → 503, GET → 405, OPTIONS → 204, aucune lecture de corps, aucun client Supabase ni envoi réseau. Ce test vérifie les handlers candidats, **pas** la production ni le traitement réel de JWT.
- Contrôle de signature SQL de révocation et de commande de restauration, sans exécution SQL DDL.
- Régressions du Wiki, Bibliothèque, ancrages, statut éditorial et navigation mobile couvertes par les suites Node/Chromium héritées.
## Plan de correction serveur et rollback, soumis à décision de Zout
1. Répertorier les consommateurs réels et conserver les versions Edge v2/v1 et la définition/grants RPC (ne pas exporter de clés ni de données).
2. Mettre en place un environnement Supabase **isolé et autorisé** ; comptes factices distincts anon/auth/non autorisé. Exécuter POST et opérations de lecture/écriture/modification/suppression avant et après suspension ; prouver l'absence d'insertion sur sandbox.
3. Si Zout autorise le changement de production, déployer chaque handler de refus ciblé, puis appliquer une migration de révocation RPC à part, avec contrôle après chaque opération.
4. Vérifier HTTP 503 des deux endpoints, les permissions RPC et les erreurs/journaux dépourvus de données personnelles ; ne pas rouvrir la collecte par défaut.
5. Retour arrière **seulement sur décision humaine** : redéployer les versions archivées et rétablir le `GRANT` authenticated exact, après validation des risques. Aucun rollback automatisé d'une suspension de sécurité.
## État honnête
- Wiki/Bibliothèque : HTML statique et recherche locale existante testables sans compte ; consultation Wikipédia déclenche une requête externe à l'initiative de l'utilisateur, donc **pas de promesse d'absence totale de réseau**.
- PWA : manifeste et service worker non trouvés dans cette candidate ; installabilité et hors ligne non démontrés.
- ARCH-002/007 : visas sur versions exactes, droits toujours à vérifier, publication interdite ; ÉCL/CIC/15 articles non approuvés restent candidats. L’absence de lien public ne rend pas un fichier confidentiel dans un dépôt visible.
- Blocages : autorisation Zout pour toute production, environnement isolé avec comptes fictifs, licences, RGPD et tests physiques d'accessibilité.
- Rollback Git : revert uniquement le commit Cycle 9 sur sa branche, revenir à `cb248d15cb4e0dfc87ec0f3b76e68ebc1f6dc60e`, puis relancer CI. Aucune modification Supabase à annuler.
