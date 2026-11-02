# Courrier 06 — quatre fiches historiques : dossier d'intégration candidat

Date : 2026-11-02. Aucun visa, fusion, publication ou modification des fiches Drive. Ce dossier complète PR #77, sans dupliquer ses quatre matrices.

## Passe 1 — originaux candidats et SHA

| ID | Fichier de référence | Blob vérifié | Texte court intégrable, sous réserve |
|---|---|---|---|
| ARCH-005 | `coordination/cycle10/archeologue/ARCH-005.md` | `52f9299423eb639d4538ee9801db8371798a560e` | « Le 3 mai 1871, un projet de règlement des ateliers d'armes du Louvre prévoit des responsables élus et révocables. Son application complète n'est pas démontrée. » |
| ARCH-006 | `coordination/cycle10/archeologue/ARCH-006.md` | `342b962d42e2b209a2f218cb461fd3024f121cbf` | « Quatre numéros du journal *Le Prolétaire* sont signalés par la BnF pour mai 1871. Leur contenu ne peut être assimilé à des décisions unanimes du club. » |
| COL-003 | `coordination/cycle10/archeologue/COL-003.md` | `f1ed0ace96eb972db005d646320491d66aca3afa` | « Les réunions du Club des prolétaires à Saint-Ambroise sont rapportées par les études ; les chiffres de fréquentation et l'identité de la citoyenne André demeurent incertains. » |
| ASSO-007 | `coordination/cycle10/archeologue/ASSO-007.md` | `7a599c6c5178a98a1017fa15df7e15c96259ddee` | « Les statuts et affiches de l'Union des femmes attestent de projets d'organisation et de convocations ; ils ne suffisent pas à prouver la tenue de toutes les réunions ni les salaires effectivement versés. » |

## Passe 2 — objection croisée effectivement lue

La Lectrice, rapport `coordination/transmissions/2026-11-02_LECTRICE_C10_RECONCILIATION_P0.md` sur `atelier-lectrice/cycle10-vingt-controles-20261101`, blob **`3519d1bfaa9d6fbbcb2c515c952d0c1483777dea`**, confirme les réserves : MP159 et Frankel non résolus ; ARCH-006 hors lot de ses vingt contrôles ; Ly22 et chiffres contradictoires ; affiches de l'Union non équivalentes aux séances. **Aucune de ces objections n'est levée.** Elle mentionne une correction ARCH-005 sur sa branche (blob `69045a5cf2ea4a1ce0b99aaae8c2acfb6e046ccb`) : ne pas l'écraser ni prétendre l'avoir comparée ligne à ligne.

L'Anarchiviste des communs, matrice `coordination/transmissions/2026-11-01_ANARCHIVISTE_COMMUNS_C10_MATRICE_CORRECTIONS.md` sur `atelier-anarchiviste-communs/cycle10-preuves-20261101`, blob **`73c02d781169b5b10bdb655c21d5d339cb04b909`**, fournit des précautions convergentes et signale notamment *La Sociale* des 12/20 avril, cote BnF NUMP-20194, et SHD Ly108. Ce rapport **n'est pas la consultation directe des pièces de l'Assistant de l'Anarchiviste** ; leurs chemins et SHAs restent à identifier sur `research/assistant-anarchiviste-cycle10-20261101`, `research/assistant-anarchiviste-cycle10-inventaire-20261101` et `research/assistant-anarchiviste-r1-20261102`.

## Passe 3 — matrice des preuves, lacunes et liens

| ID | Niveau acquis | Manque pour valider E (réalisation) | Relations candidates sans inférence abusive |
|---|---|---|---|
| ARCH-005 | Notice BHVP / transcription moderne d'affiche-projet | Original MP159 et affiche 363, PV d'approbation, paies, élection | ARCH-005 ↔ ASSO-007 : **analogie de projets de travail**, pas coordination attestée |
| ARCH-006 | Notice BnF cb328445424, quatre numéros signalés | Fac-similés et manchettes, signatures, distribution | ARCH-006 ↔ COL-003 : **lien presse-club documenté**, sans mandat collectif automatique |
| COL-003 | Notice Carnavalet PH22310 et récits | SHD Ly22, PV datés, origine des nombres 4000/1000/3000, identification André | COL-003 ↔ ARCH-006 : relation documentaire ; biographie éventuelle Françoise André **non fusionnée** |
| ASSO-007 | Affiches Carnavalet 331/342/373, statuts rapportés | PV du 21 mai, registres de caisse, fascicules *La Sociale* 12 et 20 avril | ASSO-007 ↔ biographies : lien **à établir par noms et pièces**, sans identification ni nouvelle biographie inventée |

Sources à ouvrir avant validation : BHVP https://bibliotheques-specialisees.paris.fr/ark:/73873/pf0001490635 ; BnF https://catalogue.bnf.fr/ark:/12148/cb328445424 ; Carnavalet https://parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/portrait-de-francoise-andre-epouse-humbert-membre-de-la-commune-1871 ; Carnavalet AFF5721 https://www.parismuseescollections.paris.fr/fr/musee-carnavalet/oeuvres/republique-francaise-ndeg-373-liberte-egalite-fraternite-ndeg-373-commune . URLs reprises des matrices : **non revérifiées en direct dans cette passe**.

## Passe 4 — critères d'intégration et non-doublons

Ces textes sont **des résumés candidats**, non quatre nouvelles fiches. Réutiliser ARCH-005/006, COL-003, ASSO-007, avec liens sourcés vers biographies et Mémoire des luttes. Avant toute nouvelle notice : rechercher la page Wikipédia correspondante et choisir RELIER/COMPLÉTER/CRÉER ; aucune recherche Wikipédia exhaustive exécutée ici. Pour la carte-logo, relations documentaires qualifiées (pas « coopère avec »), avec vue liste accessible et niveau de preuve visible. Les niveaux projet P, décision D, affiche A, témoignage T, exécution E, notice N doivent rester distincts.

**Tests documentaires réellement effectués :** quatre récupérations GitHub des fichiers de PR #77, comparaison des quatre blobs, lecture du rapport Lectrice, lecture de la matrice Anarchiviste, recherche des branches Assistant (cinq branches trouvées), création et relecture du présent fichier à vérifier après commit. **Non effectués :** lecture directe des pièces Assistant, collation des scans, crawl des URLs, QA navigateur/CI, validation humaine.

**Statuts :** quatre résumés candidats **TERMINÉ documentaire** ; preuve E et résolution des contradictions **BLOQUÉ** par absence des originaux ; confrontation Assistant **À POURSUIVRE** ; rapprochement Lectrice **TERMINÉ documentaire** pour son rapport C10 ; publication et adoption **DÉCISION ZOUT**. Transmettre à La Relieuse avant toute intégration.
