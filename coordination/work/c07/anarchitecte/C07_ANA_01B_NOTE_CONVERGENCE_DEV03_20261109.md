# INTERSTICE — C07-ANA-01B · Note de convergence, instruction unique à DEV-03

**L'Anarchitecte → La Relieuse / La Développeuse · 9 novembre 2026 · P0 · CONTRAT CANDIDAT INTERNE**  
**Branche `work/c07-reunification-20261104` · PR #186 · Aucun changement des autres ateliers ni de `main`.**  
**Nature :** réconciliation *ciblée* des deux contrats ANA-01B apparus sur la branche commune, sans rouvrir l'audit général.

## 1. Constats contrôlés, pièces de référence
Deux livrables réels, non interchangeables pour un générateur :
- **ANA-01B-A (antérieur, norme recommandée pour DEV-03) :** `coordination/work/c07/anarchitecte/C07_ANA_01B_CONTRAT_TECHNIQUE_20261109.md` ; blob GitHub `b1204a04075293ae01cab8e647f233e642f4ee20` ; commit de livraison `4ee6cb0d2eb5ca6fb4d2a95fb567b3bc583de729`.
- **ANA-01B-B (complément de contrôles et de sécurité, non second modèle maître) :** `coordination/work/c07/anarchitecte/C07_ANA_01B_CONTRAT_TECHNIQUE_FINAL_20261109.md` ; blob `c816f690c31734258a4ee289b6163e8cfc1fca40` ; commit `68860f7f200c46651228b78be6b76a7d8c417f56`.

Tous deux relisent les mêmes pièces : nomenclature V1 blob `31e2bb214156c03ec4080807dc08a31389945e0e` ; MED-01B blob `dc695cecf288791ff71203415329df023b58c556` ; JUR-01B blob `787fb845db3582c43678bd0925a479700474475f`. Ils se rejoignent sur 219 IDs, 190 URL canoniques absentes (185 internes candidates, 1 lacunaire, 4 entrées de conflits de rapprochement), 217 légaux non examinés, 2 bloqués, 219 publications non autorisées, Atlas non cinquième porte, absence de publication.

**Écart bloquant avant implémentation :**
| Aspect | Contrat A | Contrat B |
|---|---|---|
| `schema_version` | `c07-master-projection/1` | `c07-master-v1` |
| Namespace des objets | `canonical_source`, `versions`, `status`, `rights`, `visas`, `presentation` | `canonical_locator`, `content_version`, `review`, `privacy`, `view_hints` |
| Confidentialité par défaut | `privacy.class=UNREVIEWED` | `privacy.class=unclassified_restricted` |
| Fichiers DEV-03 | `coordination/work/c07/developpeuse/master-v1/` | `coordination/work/c07/referentiel-master/` + `scripts/build-c07-master.mjs` |
| Autorisation publique | `projectPublic` et visas séparés | `buildPublicCards` et publication séparée |

Ces divergences sont de *nommage et contrat d'API*, pas une permission supplémentaire de sortie publique. **Ne pas construire les deux systèmes, ne pas auto-fusionner les structures.**

## 2. Arbitrage architectural de convergence (à faire recevoir par La Relieuse)
**Contrat normatif unique recommandé pour l'implémentation DEV-03 : ANA-01B-A** (premier dépôt, travail exclusivement dans le dossier de La Développeuse). Le contrat ANA-01B-B reste **annexe de contrôles P0 et de défenses**, sans deuxième schéma, deuxième enregistreur ni deuxième arborescence. La présente note précise le choix technique ; **la réception humaine de La Relieuse demeure distincte**.

Pour DEV-03, fixer explicitement :
1. **Schéma versionné unique :** `schema_version="c07-master-projection/1"` ; utiliser les champs `canonical_source`, `versions`, `status`, `rights`, `privacy`, `relations_ids`, `objection_ids`, `presentation` et `visas` du contrat A. Aucun second objet `MasterRecord` du contrat B. `basis_commit` issu de B peut être ajouté au manifeste de build **non public**, pas comme troisième empreinte du contenu. Les inconnues restent `null` ou `UNREVIEWED`, jamais « validées » par présence dans MED.
2. **Chemins uniques de la Développeuse :** `coordination/work/c07/developpeuse/master-v1/{schema.json,overlay-reviewed.json,build.mjs,test.mjs,README.md}`. Aucun nouveau fichier de code dans `coordination/work/c07/referentiel-master/`, `assets/nav-01/`, `scripts/`, `main` ou les dossiers des autres ateliers pour ce lot. Fichiers proposés mais **non créés ici**.
3. **Correspondance sans import du modèle B :** `canonical_locator` → `canonical_source` ; `content_version.sha256` → `versions.content_sha256_verified` **uniquement si le corps exact a été lu et haché** ; `review.publication` → `visas.publication` **sans promotion** ; `view_hints` → `presentation` ; `unclassified_restricted` → `UNREVIEWED` (aucune libération de métadonnées). Ne jamais copier `public_approved` du modèle B comme simple droit lié à la confidentialité : seule une décision de publication **séparée, humaine, ID+SHA+support**, peut rendre une fiche affichable.
4. **Overlay de décision et non transcodage implicite :** joindre C02, MED, JUR, TIS et décisions de lots par **ID exact + provenance blob**. Ne pas parser des avis textuels par simple correspondance de mots pour créer `JURIDIQUE_EXAMINE`, `ALIAS`, `PUBLIC` ou `R3`. Toute ambiguïté produit une réserve bloquante pour l'objet. Conserver trois aliases historiques C02, FN-018 sans réconciliation inventée, et les deux couples FN-022/048 et FN-038/057 **distincts**.
5. **Route unique, zéro migration :** `entraide` → porte Faire Ensemble ; `encyclopedie` → Encyclopédie ; `mediatheque` → Médiathèque ; `carte` → vue Encyclopédie avec facette Atlas. La porte Archives est une **facette transversale** d'objets historiques explicitement qualifiés et **visés**, sans nouvelle identité. 21 valeurs `carte` restent inchangées ; 7 Parcours/29 étapes et blocage `PAR-005` conservés. Conserver fragments et retours historiques. `coordinates=null` / absent = liste, **jamais** épingle calculée. Les cartes PR #41/#193 restent fictives, pas d'initiative réelle créée.
6. **Privacy & supports :** toute fiche sans classement explicite reste `UNREVIEWED` ; metadata publique = faux ; `projectPublic() → null` pour les 219 objets présents. Exiger séparément `documentary/editorial/legal/publication` sur la **version et le support exacts** (notice, texte, traduction, image, localisation). Les rapports ARCH-005/006/007 restent des **repérages**, pas des visas ; ne pas recopier les URL Drive/Library, corps, identités sensibles, notes, positions ou métadonnées de compte en JSON ou logs publics.
7. **Sorties :** projection en mémoire, manifeste assaini et chiffres seulement ; **pas** de `master.json` complet committé ou téléchargé comme artefact CI, **pas** de nouveau front branché. Ne pas modifier `getPublicResources()===[]`, les 24 pages historiques, ni source data.
8. **Retour arrière :** avant tout lot, épingler HEAD Git et SHA/blobs des 6 JSON + avis ; construire dans un dossier temporaire isolé ; conserver copie des rapports assainis et liste des fichiers écrits. Injection d'échec ⇒ code retour non nul, fichier de sortie `public.cards` vide, aucune modification des entrées / artefacts précédents, sans changement de `main` ni appel Supabase.

## 3. Tests P0 DEV-03 à exécuter et à prouver, hérités des deux contrats
- **Jointures/versions** : 219 IDs uniques ; 100 sources ; 19 relations ; 30 objections WORK ; 7 Parcours/29 étapes ; 71 FN ; 24 IDs `wiki-*.html`, sans créer d'IDs concurrents. Distinguer 190 URL canoniques manquantes MED des 168 fiches sans `canonical_url` **et** `dossier_locator` dans C02. Toute divergence de blob ⇒ arrêt et rapport.
- **Alias/doublons** : collisions=0 ; 3 alias conservés ; FN-018 non rapproché ; 2 paires FN sans suppression/alias ; valeur historique `carte` préservée 21/21 ; `PAR-005` toujours bloqué.
- **Negative privacy / visas** : 217 `legal=non_examine` ; 2 `legal=bloque` ; 219 `publication=non_autorisee` ; `projectPublic` retourne `null` pour chaque objet. Injection d'URL Drive interne, image sans droits, géolocalisation sensible, SHA divergent ou texte bloqué doit **échouer ou supprimer la sortie**, sans log brut.
- **Build Jekyll Pages réel** : reconstruire `_site` à partir de la même racine que Pages et scanner *tous* les chemins générés ; aucune copie interne `coordination/**`, `docs/**` non publique, fichiers d'ateliers, ressources privées ou liens Drive internes ne doit être exposée. Les logs CI antérieurs ont montré des fichiers `coordination/...html` dans un build, **pas** la preuve d'une exposition en production ; cette barrière doit être **démontrée** avant fusion/publication, et peut nécessiter une tâche CI/Page distincte autorisée.
- **Navigation & rollback** : tests sans-JS, clavier, fragments, liens historiques, 320/390/1280 px, zoom 400 %, reduced motion ; retour arrière isolé mesuré ; appareils physiques, TalkBack/VoiceOver et revue humaine notés « non effectués » s'ils ne le sont pas.

## 4. Réception / blocages transmis à La Relieuse
**État à ce stade :** contrat technique **convergé sur le papier** ; aucune nouvelle implémentation DEV-03 ni tests dédiés revendiqués par cette note. Les neuf workflows GH Actions du HEAD précédent `f096e44f6ee256457a289977523a95b165975c99` étaient au vert, mais ne testent **pas** automatiquement cette note ni un futur DEV-03.

**P0 :** arbitrage humain sur la référence A recommandé pour éviter deux schémas ; cloisonnement vrai des artefacts Pages ; classe privacy absente du C02 ; absence de visa de publication sur 219 objets ; avis JUR limités.  
**P1 :** FN-018 ; doublons candidats FN ; corps Drive/Library et licences, ARCH-005/006/007 sous réserves ; 20 TIS + 4 EXP sans géométrie attribuable, aucun R3 Interstice ; compatibilité future PR #193 distincte.

**Aucun fichier existant réécrit, aucun champ de registre modifié, aucune migration, fusion, publication ni approbation humaine présumée.**