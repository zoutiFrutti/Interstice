# La Faille noire × Interstice — Anarchitecte, cycle 9
**1 novembre 2026 · candidat technique, aucune publication ni fusion.**

## Sources lues et provenance
- PR #51 SHA initial `6ef9130eae777408b1bb4e1fd57396e391a3e379` ; PR #43 SHA `4436de90d7d55707ef2f5e812363a146a79b4c05`. Journal commun blob `dd65b0be79a32194dcf4894c5747cb5cc3b64568` ; registre source blob `f005414fc566cf020e2ac8931f4841e30ffde859`.
- PR #69 et #70 : travaux documentaires candidats spécialisés ; ne changent pas la liste des 139 références approuvées. ÉCL-005, CIC et ARCH-005 dans le Journal commun : ajouts et réserves de recherche, pas des visas.
- Contrats cycle 8 gardés ; fichier v0.3 ajouté `coordination/transmissions/2026-11-01_ANARCHITECTE_CYCLE9_SCHEMA_DOCUMENTAIRE_V03.json`, commit `e55f592c3cf6587888f5b361ef187501127eacdc`.

## Contrat versionné
- Clé primaire logique `(corpus, stable_key)`, alias réversibles et anciennes références intactes ; 24 pages Wiki, 44 Drive (BIO 22, ASSO 8, ARCH 8, COL 2, EXP 4) et 71 notices FN.
- Types normalisés : page, biographie, organisation, archive, collectif, expérience, notice bibliographique. **Préserver source_folder** : origine documentaire ≠ type du préfixe.
- Métadonnées séparées : version empreinte, provenance, titre, crédits (auteurs, éditeurs, traductions, photos), droits par média et édition, citations avec niveau réellement consulté, objections/contradictions, statut de relecture, accord humain de texte, autorisation de publication, éventuelle gouvernance future.
- FN-022/FN-048 et FN-038/FN-057 restent quatre identifiants et deux **candidatures au rapprochement**, non alias actifs ni doublons supprimés.
- Relations typées, sans relation publique automatique ; le lien n'est activé que si la destination est réellement accessible et éditorialement admise.

## Migration sans exécution et rollback
1. Comparer registre/versions 139 clés puis charger les seuls identifiants et relations non sensibles dans une compilation de travail **locale** ; garder l'ancien index intact.
2. Revoir par La Médiathèque les paires FN, les droits des notices et leurs crédits. Aucun alias canonique sans preuve de version et accord.
3. Générer une liste blanche **vide par défaut**, ne publier que les versions disposant d'autorisation expresse de Zout et des droits adéquats ; exclure les champs privés et les médias non autorisés.
4. QA statique des liens/ancres, recherche et accès sans compte ; QA navigateur mobile et clavier sur SHA d'intégration ; vérification des sources et droits sur chaque lot.
5. Rollback : écarter le nouvel index candidat sans modifier les anciennes URL/IDs ni les documents originaux.
6. **Zéro SQL/DDL, aucun backend, aucun service parallèle.** Le P0 serveur relève d'une intervention dédiée, après tests isolés et contrôle des dépendances.

## Permissions, états et confidentialité
- `ARCH-002` et `ARCH-007` ont un accord éditorial individuel au registre, mais `publication_authorized:false` et droits finaux à vérifier. Les statuts de chartes et V2.6 ne sont pas réputés adoptés collectivement. Zout reste l'unique porteur humain et décideur de publication.
- Supabase P0 contrôlé en lecture seule au cycle précédent : trois Edge Functions actives `verify_jwt=false`, cinq avertissements du conseiller sur fonctions privilégiées exécutables par `authenticated`. Contrôles internes existants pour `submit_wiki_article` et `moderate_proposal` ; **aucun nouveau test de rôles ni correction production dans ce cycle**. Ne pas confondre absence de JWT obligatoire et absence absolue d'autres garde-fous.
- Un dépôt et une branche publics restent consultables par URL ; ne pas exporter des brouillons sensibles dans HTML, JSON, sitemap, service worker, logs, artefacts ou index public. `noindex` n'est pas une barrière d'accès.

## Fichiers réellement créés et tests
- `coordination/transmissions/2026-11-01_ANARCHITECTE_CYCLE9_SCHEMA_DOCUMENTAIRE_V03.json`, commit `e55f592c3cf6587888f5b361ef187501127eacdc`.
- `tests/anarchitecte-cycle9-schema.test.mjs`, commit `ed214695d45ba99b0e3b045d8cc4e9ed32c5ec3b`.
- `.github/workflows/anarchitecte-cycle8-contract.yml` mis à jour, commit `cabc0e73b91a1cb38af0486dca8ec1fa4deee37a`.
- **GitHub Actions run [41300815161](https://github.com/zoutiFrutti/Interstice/actions/runs/41300815161), success au SHA `cabc0e73b91a1cb38af0486dca8ec1fa4deee37a`.** Couverture Node : 139 clés et provenance, candidats doublons symétriques, garde-fous publication, 24 routes/ancres locales. Pas de tests HTTP/navigation mobile ni de sécurité active.

## Coordination, limites et blocages
La Développeuse : réemployer contrat v0.3 et test sur branche d'assemblage, conserver le verrou de publication, préserver les corrections Lectrice, faire l'audit P0 actif en environnement adapté. Médiathèque : examiner paires FN et droits par édition/média avant assignation d'un alias canonique. La Relieuse : obtenir les visas individuels par version et arbitrer le classement ; aucune commission humaine constituée n'existe.

**Verdict : contrat technique v0.3 et tests CI achevés, migrations zéro exécutée, publication et P0 non levés.**
