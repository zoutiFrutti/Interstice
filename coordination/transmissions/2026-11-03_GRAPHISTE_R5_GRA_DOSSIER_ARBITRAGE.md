# LA FAILLE NOIRE × INTERSTICE — R5-GRA
## Dossier de comparaison artistique finale, sans visa attribué

**Date :** 3 novembre 2026  
**Atelier :** La Graphiste  
**Destinataire :** La Relieuse ; pour décision de Zout  
**Statut :** CANDIDAT — ARBITRAGE HUMAIN OBLIGATOIRE ; **ni fusion ni publication**.  
**Sources de code :** PR #137 `design/identite-faille-interstice-zoom-20261102`, HEAD vérifié `72c1edcda7336a893ab2b5d1485b3f53cc377366` ; PR #141 `integration/r4-convergence-relieuse-20261102`, HEAD de départ `9f733122c7196622d31e7996d1d0b4eea987a14d`.  
**Dossier HTML non public :** `design-system/comparaison-identite-r5-arbitrage.html` sur la branche `design/r5-gra-dossier-arbitrage-20261103`.

### 1. Chaîne de preuve, sans substitution de référence

Le brief artistique R4 cite une **planche raster approuvée par Zout** ainsi que deux recadrages `la_faille_noire_reference_validee.png` et `interstice_reference_validee.png` de **665 × 665 pixels**. Cette source **ne figure pas dans le dépôt GitHub** selon le rapport R4 et n'a pas été fournie comme fichier vectorisable à la branche R5. Deux planches iconographiques anciennes ont été retrouvées dans les ressources du projet (`Planche d’identité visuelle rouge et noire.png`, `Diptyque des fissures rouges.png`, datées du 28 octobre), mais **elles ne sauraient être présentées comme les deux PNG validés du 2 novembre**, faute de provenance formelle équivalente. Elles n'ont pas été recopiées dans GitHub.

**Résultat :** contrôle structurel SVG réalisable et effectué ; contrôle de similitude pixel par pixel, texture, ratio des formes exactes et positionnement sur référence finale **impossible à conclure**. Ne pas transformer une similarité approximative en approbation de Zout.

### 2. Quatre sources SVG réellement vérifiées sur PR #141

| Fichier | SHA blob contrôlé | Statut |
|---|---|---|
| `assets/candidats/logo-faille-noire-r4.svg` | `ec068bdca1999bb132380d6182341e863ef4df65` | Candidate, issu de PR #137 |
| `assets/candidats/logo-interstice-r4.svg` | `a577f915a61104d17712517ebfa55a3a0949cfb1` | Candidat, issu de PR #137 |
| `assets/archives/logo-faille-noire-pre-r4.svg` | `c5d545a762e0ae205b235cea6d17e2ec51d2eff7` | Archive / rollback |
| `assets/archives/logo-interstice-pre-r4.svg` | `7c863aa239462c82b5a5dbcf26e5981b9131b0e8` | Archive / rollback |

Les **actifs** `assets/logo-faille-noire.svg` et `assets/logo-interstice.svg` du HEAD de départ sont de SHA blob strictement identiques respectivement aux deux archives. Aucun SVG candidat n'a été déplacé vers ces chemins dans le travail R5.

### 3. Résultats des contrôles ciblés

| Critère | Constat réel | Verdict |
|---|---|---|
| **Base strictement commune** | Groupe `<g id="base-identite">` identique entre les deux candidats ; même cercle, faille et microfissures. | **Conforme structurellement** |
| **Absence de lettres dans les symboles** | Aucun élément `<text>` dans les quatre SVG inspectés. | **Conforme** |
| **Fissures secondaires** | 55 chemins ivoire dans la base R4, géométrie simplifiée à segments droits. | Densification vérifiée ; organique / texture **à corriger ou arbitrer** |
| **Propagation rouge** | 17 chemins rouges secondaires partiels dans la base. Interstice comporte aussi 17 chemins rouges complets de surcouche, outre la grande fissure. | Progression **non démontrée fidèle** au raster, sous-réseau potentiellement uniformisé |
| **Gros point Interstice** | Cercle principal de rayon **17** en `(159,156)`, halo intérieur rayon 13 ; centre à environ **3,6 unités SVG** de l'axe de la grande faille. | Bien situé *dans la zone* de la fissure ; diamètre, silhouette et décentrement exacts **non prouvés** |
| **Points secondaires** | 30 petits cercles `r<10`, surcouche propre à Interstice. | Présence confirmée ; emplacement et densité à comparer au raster validé |
| **Fond / matière** | Pierre `#a5a5a2` + anneau ivoire `#dedbd2` + cercle noir `#151515`, globalement dessin plus net que référence d'impression artisanal décrite. | **Réserve de fidélité artistique** |
| **Lisibilité aux tailles 48/96/192** | Comparateur R5 et banc Chromium prévus, sans présumer de leur sortie. | Conclure à partir de l'artefact de captures et d'une inspection humaine, non du seul code |
| **Retour arrière** | Actifs et archives conservés, codes candidats séparés. | **Conforme structurellement**, test automatisé dédié |

**Attention :** « conforme structurellement » ne signifie jamais « approuvé par Zout ».

### 4. Corrections minimales proposées, seulement après arbitrage

1. **Établir les deux PNG de référence exacts, leur provenance, leurs dimensions et leurs empreintes SHA.** Sans cette étape, arrêter la validation de fidélité. Ne pas leur substituer les planches plus anciennes.
2. **Retoucher une seule base graphique maîtresse** sur copie candidate : bord de faille plus accidenté, réseau secondaire plus irrégulier, texture d'impression usée, anneau moins mécanique, uniquement si confirmé par le comparatif final. Propager la *même base*, octet pour octet, aux deux symboles.
3. **Diffusion rouge :** ajuster les longueurs et intensités par branche à partir de la fissure principale, notamment la surcouche Interstice, pour éviter un réseau uniformément rouge si le PNG montre une propagation progressive.
4. **Interstice seulement :** repositionner et retailler le point principal ainsi que les nœuds sur les ramifications d'après la planche de Zout, sans inventer de nouvelles connexions ni visuels.
5. **Captures et dernier visa :** comparer de nouveau à 48, 96, 192, 390 px, puis aux vues téléphone/tablette/ordinateur, à la source approuvée. Aucun remplacement automatique, y compris favicon/PWA.

Ne pas refaire l'accueil, le parcours ni les cinq rubriques : ce mandat est strictement graphique.

### 5. Dossier visuel et tests automatisés

- **Comparateur** : `design-system/comparaison-identite-r5-arbitrage.html`. Montre les quatre SVG originaux par référence de chemin, les tailles 48, 96, 192 et les réserves. Adapté téléphone, tablette et ordinateur, impression A4. Pas d'image pseudo-historique, pas de JavaScript, pas de formulaire.
- **Test** : `tests/r5-gra-arbitrage-identite.test.mjs`. Vérifie SHA implicite via égalité des sources, conservation des actifs, identité de la base, surcouche, compte de nœuds, rendu navigateur 320/390/768/1280, décodage des SVG, débordement, ancres et captures.
- **Workflow** : `.github/workflows/r5-gra-arbitrage-identite.yml`.
- **Captures attendues dans artefact CI** : `artifacts/r5-gra/comparatif-320px.png`, `comparatif-390px.png`, `comparatif-768px.png`, `comparatif-1280px.png`, `comparatif-impression-a4.pdf`.

Le rapport ne prétend pas que le CI est réussi ou que les captures existent avant vérification explicite de l'exécution exacte du HEAD.

### 6. Décision nécessaire de Zout, non enregistrée

- **VALIDÉ** : seulement après confrontation avec les **deux PNG approuvés exacts**. Doit citer les deux SVG et leurs SHA ; ne constitue pas une autorisation de fusion ni de déploiement.
- **CORRECTIONS DEMANDÉES** : préciser fissures, diffusion, point et nœuds à modifier, toujours sur nouvelle candidate.
- **REFUSÉ** : les actifs restent en place ; conserver la candidate comme recherche, ne rien substituer.

**Verdict de La Graphiste à transmettre à La Relieuse : « corrections à examiner ; validation artistique finale bloquée faute de la source raster finale accessible et de visa explicite sur ces deux SVG ».**

### 7. Transmission / rollback

**Relieuse** : reporter la réserve P0, transmettre à Zout le comparateur, les captures effectives et le tableau de décision ; ne pas annoter « validé » en l'absence d'accord. **Développeuse** : ne pas adapter définitivement la géométrie interactive aux SVG R4 avant validation, ne remplacer aucun actif/favicons ni publier.

**Rollback** : fermer la PR R5 sans fusion, et/ou revenir au HEAD R4 de départ `9f733122c7196622d31e7996d1d0b4eea987a14d`. Les dossiers `assets/archives/` et `assets/candidats/` restent conservés sur PR #141. Aucun changement sur `main` et aucune opération de production à annuler.


### 8. Addendum CI réellement vérifié (03-11-2026)

**Exécution de contrôle sur HEAD `538f59dddba1c3478a272b9f9beca729f41fc7af` :** [GitHub Actions R5-GRA, run 41544046807](https://github.com/zoutiFrutti/Interstice/actions/runs/41544046807), **completed / success**, 3 tests réussis sur 3, zéro échec. Contrat vérifié : archives égales aux actifs, base des deux candidats identique, overlay Interstice exclusif, contrôle de chemins et cercles. Visites Chromium à 320, 390, 768, 1280 px :

| Largeur viewport | ScrollWidth document | Images décodées | Débordement global |
|---:|---:|---:|---|
| 320 px | 320 px | 10 / 10 | Aucun détecté |
| 390 px | 390 px | 10 / 10 | Aucun détecté |
| 768 px | 768 px | 10 / 10 | Aucun détecté |
| 1280 px | 1280 px | 10 / 10 | Aucun détecté |

**Artefact vérifié** : `r5-gra-comparatifs-320-390-768-1280-et-a4`, identifiant GitHub `13187244402`, taille 2 714 385 octets, non expiré au contrôle. Comprend quatre captures PNG (320/390/768/1280) et impression PDF A4 du comparateur.

**Limites des preuves :** captures générées dans Chromium, sans lecture visuelle humaine certifiée ni comparaison pixel à pixel aux PNG approuvés (absents du dépôt). Pas de smartphone ou de tablette physique testés. La validation artistique reste bloquée en attente de la comparaison des sources exactes et de la décision personnelle de Zout. Ce nouvel addendum documentaire n'altère pas les SVG ni les tests ; le HEAD de la PR qui le contient doit être identifié distinctement de celui qui a produit l'artefact.


### 9. Retour de Zout — référence utilisateur Faille noire, 3 novembre 2026

Zout a joint et désigné explicitement **« Le bon SVG pour le logo faille noire »**, fichier joint à la conversation **`logo_faille_noire_vectorise(2).svg`**. Cette identification est une **décision de référence artistique pour le seul symbole La Faille noire**, distincte de la validation des anciens SVG R4 et distincte d'une autorisation de publication ou d'activation.

**Contrôle local des octets originaux :** fichier SVG valide, UTF-8, **216 933 octets**, `width=665`, `height=665`, `viewBox="0 0 665 665"`, empreinte **SHA-256 `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6`**. Cinq éléments graphiques directs après le titre (fond pierre, chemins couleur matière, noir et rouge) ; absence de script, de référence HTTP externe, de `foreignObject` et d'événement `onload`. Son élément `<title>` porte encore la mention **« La Faille noire, vectorisation approchée »** : respecter néanmoins le choix de Zout, sans inventer de fidélité mathématique ou d'officialisation de la deuxième marque.

**Point de traçabilité :** ce fichier original reste **joint dans la conversation**, **pas encore intégré comme blob GitHub** : ne pas inventer de chemin GitHub ni de SHA blob pour l'original ; distinguer son SHA-256 de son éventuel SHA Git futur. Il est disponible en copie originale et une prévisualisation locale a été rendue, sans altération du SVG source. Le comparateur GitHub R5 affiche encore les candidats R4 historiques, et devra être étendu lorsque le fichier utilisateur exact y sera importé avec vérification des octets.

**Conséquence éditoriale** : le R4 Faille noire `ec068bdca1999bb132380d6182341e863ef4df65` n'est **plus la référence artistique prioritaire** : comparer désormais les futures retouches à **ce nouveau fichier explicitement fourni par Zout**. La référence et validation **d'Interstice** restent ouvertes. Ne pas prétendre que les bases des deux marques sont toujours identiques à ce nouveau SVG tant qu'une déclinaison Interstice partageant cette base n'a pas été conçue et testée.

**Maintien des réserves techniques** : aucun remplacement de `assets/logo-faille-noire.svg`, aucun favicon, aucune fusion, aucun déploiement, aucune décision pour Interstice. La Relieuse doit utiliser l'empreinte SHA-256 ci-dessus et demander une intégration du SVG joint exact au dépôt avant tout arbitrage de remplacement, et non substituer le R4 provisoire.


### 10. Retour de Zout — deux fichiers Interstice fournis, 3 novembre 2026

Zout a désigné deux nouveaux fichiers joints comme étant **Interstice**, sans préciser lequel constitue l'export SVG final à activer. Ces deux originaux sont stockés en pièces jointes de conversation et **ne sont pas des blobs GitHub**.

| Original joint | Octets | SHA-256 | Nature réellement vérifiée |
|---|---:|---|---|
| `interstice_retrace_vectoriel(1).svg` | 117 305 | `b73b35b50f9ac94c933467e71e0eeb2750006fa18d719279e9b8356397adfeef` | SVG 665×665, `viewBox 0 0 665 665` ; vrais chemins vectoriels (5 `path`), 32 `circle`, six groupes, pas d'image embarquée |
| `interstice_logo_fidele(1).svg` | 345 206 | `659133e892072e91f61bb018421ea9d96ac4016f21da5aa4bfbc806efca82cf6` | SVG 665×665 contenant **une seule image JPEG embarquée en base64** ; aucun `path` ou `circle` SVG, donc **non vectorisé**, même si l'extension est `.svg` |

Les deux documents sont XML lisibles ; aucun élément `script` identifié. Ne pas confondre le second avec un dessin vectoriel éditable ni affirmer que le premier correspond pixel à pixel au deuxième. **Le SVG de La Faille noire `logo_faille_noire_vectorise(2).svg`** a quant à lui un SHA-256 `7bd0cfe8cf984f421b2377802ef97a0df843158217ad569ddd838313d4e73cb6`, contient quatre chemins et un fond, sans `circle` ni groupe. La construction des fichiers Interstice n'est donc pas actuellement une simple surcouche SVG sur ce **fichier exact** de La Faille noire ; une base commune doit encore être démontrée, sans changer la silhouette approuvée.

**Conséquence :** prendre `interstice_logo_fidele(1).svg` comme **référence de rendu raster embarqué** et `interstice_retrace_vectoriel(1).svg` comme **candidat vectoriel à comparer**, sous réserve du choix explicite de Zout sur les deux. Les deux fichiers sont reconnus comme références fournies par Zout, mais leur mise en production, fusion et substitution d'actifs **ne sont pas autorisées**. Les candidats R4 de PR #141 ne deviennent pas officiels.

**Suite indispensable :** comparaison visuelle directe des deux Interstice, puis contrôle de la géométrie commune avec le fichier Faille noire retenu, et validation spécifique de chaque export et de son SHA avant activation.
