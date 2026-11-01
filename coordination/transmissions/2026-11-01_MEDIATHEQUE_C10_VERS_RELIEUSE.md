# Médiathèque — Cycle 10 — transmission à La Relieuse / L'Anarchitecte / La Lectrice / La Juriste
2026-11-01 — **CANDIDAT, NON PUBLIÉ, AUCUNE AUTORISATION DE REPRODUCTION**.
Branche : `coordination/mediatheque-cycle10-complet-20261101`.
Livrable machine : `coordination/mediatheque/cycle10_matrice_71_sources_candidats_2026-11-01.json`.

## Réconciliation avec le protocole C10
Protocole lu sur `coordination/cycle10-ouverture-20261101` : `coordination/cycle10/PROTOCOLE_REGISTRE_OUVERTURE_C10_2026-11-01.md`, blob `20f9e4364e25c7f62865635d3b4825d205004631`. Matrice C9 lue blob `dac76baebba15af70ccbe6b9c64f26477b3a1ff2`. Catalogue Drive maître lu : https://docs.google.com/document/d/1YYXcY6x4GoJU924kSqLWBGZ96rwt3ko3ELabGlMo3gs/edit.

## Passes réellement exécutées
1. Extraction du catalogue Drive : **71 identifiants** préservés ; **70 fiches avec en-tête identifiable et URL extraite**, 1 référence seulement (**FN-018, « Pepper et Superflu »**). Cette référence apparaît dans les notes du catalogue et les journaux Drive, **mais aucune fiche structurée ni URL/source primaire n'a été retrouvée dans le catalogue maître**. **ANOMALIE P1**, ne pas fabriquer auteur, édition, URL ni droits. Les 70 URL sont *extraites*, pas 70 URL testées.
2. Enrichissement : titres/mentions d'auteur/édition issus des en-têtes du catalogue, indication de droits et consultation lorsque champ explicitement extractible, sinon `MENTION_DROITS_NON_EXTRAITE_CONTROLE_MANUEL_REQUIS`. **16 identifiants sans extraction structurée de droits** (liste dans `quality_control.rights_without_structured_extract`), ce qui ne prouve pas absence de licence dans le document. Les mentions en en-tête ne sont pas une vérification externe de l'édition.
3. Sélection C9 des 12 préservée avec ses métadonnées ; 8 conditionnelles conservées en C9. Deux alias : `FN-048 -> FN-022` et `FN-057 -> FN-038`, aucun effacement.
4. Quatre URL **ouvertes directement en C10** : FN-017 https://www.peppercarrot.com/fr/webcomic/ep26_Books-Are-Great.html (crédits FR et CC BY 4.0), FN-019 https://seedsforchange.org.uk/downloads/consensus.pdf (PDF 80 pages, anti-copyright, pas CC), FN-024 https://commons.wikimedia.org/wiki/File:The_Seedkeepers.webm (auteur collectif, CC BY 3.0, revue 2017), FN-038 https://www.apc.org/fr/pubs/principes-feministes-de-linternet-20 (texte français APC, licence du site avec exceptions). **Aucun film visionné**, aucune œuvre copiée, aucun contrôle exhaustif des droits annexes.
5. Comparaison Wikipédia : réutilisation des deux contrôles C9, *Révolution sociale espagnole de 1936* et *Zapatisme*, **non retestés C10**. Ne pas lancer de nouvelle page généraliste. Le rapprochement détaillé de tous les autres sujets à Wikipédia reste à faire avant proposition d'article.

## Schéma pour L'Anarchitecte
Chaque entrée contient `id`, `title_catalogue`, `attribution_edition_catalogue`, `source_url_catalogue`, `rights_claim_catalogue`, `consultation_claim_catalogue`, `source_evidence`, `url_check_c10`, `rights_check_c10`, `reading_status`, `hosting_allowed=false`, `alias_of`, `selected_12`, `selected_metadata`. **Ne pas considérer ces champs comme une migration prête à publier**. Ne pas remplacer le catalogue maître par les champs extraits. FN-018 est explicitement lacunaire.

## Tests / preuves
JSON écrit sur branche candidate et relecture GitHub demandée. Comptage extraction : 71 IDs uniques, 70 en-têtes, 70 URL extraites, 1 lacune, 12 sélectionnées, 2 alias, 4 pages/PDF ouverts en C10. Aucun test CI ni HTTP automatisé des 66 URL restantes, aucune lecture intégrale ou expertise légale.

## Transmissions ciblées
**Relieuse** : ne pas déclarer TERMINÉ ; anomalie FN-018 à investiguer auprès de l'historique original ; maintenir le verrou humain.
**Anarchitecte** : importer seulement comme *candidat de mapping*, préserver identifiants et alias, ajouter un statut `source_evidence` explicite et rejeter toute intégration de média.
**Lectrice** : confirmer auteurs/éditions des 66 sources non revérifiées, rechercher l'original FN-018 et les exceptions de traduction/illustration.
**Juriste** : clarifier anti-copyright FN-019, licences fichier vs œuvres incorporées, domaine public territorial, droit à l'image/consentement FN-024.
**Zout** : sélection, approbation éditoriale, hébergement et publication restent de son ressort.

## Statuts C10
1. 71 notices URL/auteurs/éditions/droits : **À POURSUIVRE** (70 extraites, 4 URL revérifiées, FN-018 lacunaire, contrôle de droits incomplet).
2. 12 ressources + 2 alias : **À POURSUIVRE** (identifiants et données préservés, 4/12 sources revérifiées, droits restants).
3. Wikipédia + Anarchitecte : **À POURSUIVRE** (matrice exploitable comme brouillon, 2 comparaisons héritées C9, contrôles spécifiques restants).
Aucun de ces objectifs n'est « TERMINÉ ». Aucun média hébergé, fusionné ou publié.
