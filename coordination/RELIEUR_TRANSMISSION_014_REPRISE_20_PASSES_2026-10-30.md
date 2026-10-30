# LA FAILLE NOIRE × INTERSTICE — Transmission 014 du Relieur
**30 octobre 2026, contrôle des branches vers 18 h, France.**
**Nature :** réorientation de dix conversations pour une **nouvelle phase de 20 passes effectives par atelier**, et plan de coordination du Relieur. **Les vingt passes sont demandées, pas prétendues déjà exécutées.** Les études critiques et V2.5 restent des propositions non adoptées.

## Priorités, inchangées au fond
1. **Wiki V0 :** deux articles seulement, finaliser PR #44 ; d'anciennes PR #23/#27 ne doivent pas être refusionnées.
2. **Site mobile :** accueil PR #35 (accroche « Et si on essayait autre chose ? »), tests Android, conformité des liens, CSS et formulaires.
3. **Découverte :** prototype PR #41 (commune, domaine, besoin/ressource, fiche, export fictif) à éprouver.
4. **Communications :** paquet de trois carrousels prêt à validation ; publicité honnête sur le prototype.
5. **Cartes :** deux lectures *communs* et *possibles* déjà développées sur **PR #41**, non à réécrire ; intégrer la présentation PR #35, vérifier la vue liste équivalente et ne pas importer de données réelles.

## Recontrôle réel le 30 octobre, après la transmission 013
- `main` : `832a1ffce21ff2d3217f32c74a8c757ee2164853` à la consultation ; HEAD **évolutif**. 27 PR ouvertes à ce point.
- [PR #41](https://github.com/zoutiFrutti/Interstice/pull/41) : HEAD `ba28d0d4dc`, deux lectures, carte **SVG originale** et non un fond géographique réel, recherche/filtres/fiches et liste équivalente, onze exemples fictifs (sept communs, quatre possibles). Tests Node/Chromium dans [la dernière exécution](https://github.com/zoutiFrutti/Interstice/actions/runs/41094075338) **verts** sur le SHA contrôlé. Données réelles, API, géolocalisation de lieux réels, intégration et Android physique : non validés.
- [PR #35](https://github.com/zoutiFrutti/Interstice/pull/35) : HEAD `f9558d0c11`, accueil, lisibilité, deux textes Wiki copiés depuis une version de PR #44, style `cartes-design.css` et tests d'intégration cartes sur copie locale. [Dernière CI d'accueil](https://github.com/zoutiFrutti/Interstice/actions/runs/41094575808) verte. **Attention : le CSS cartographique n'est pas encore raccordé sur la branche #41** ; CI croisée sur *snapshot* de prototype, pas déploiement de la combinaison.
- [PR #44](https://github.com/zoutiFrutti/Interstice/pull/44) : HEAD `51d3a72399`, deux pages Wiki existantes, Young/Freeman/Tebble et Berenstain/Ahmed, sections remises en ordre et corrections bibliographiques apportées par la Médiathèque. **Toujours candidat**, avis juridique sur droit général de participation et vrai canal de rectification, derniers contrôles sources/mobile à fermer. Pas de publication des enrichissements.
- [PR #42](https://github.com/zoutiFrutti/Interstice/pull/42) : formulaires améliorés et tests, pas validation de soumission réelle de bout en bout.
- [PR #43](https://github.com/zoutiFrutti/Interstice/pull/43) : scénarios S1 besoin vélo, S2 partage d'atelier avec complément La Marmite, S3 conflit jardin/concerts. **Préparés, zéro essai humain.**
- [Études du Penseur 60–79](PENSEUR_ETUDES_60_79_VINGT_PASSES_CARTES_COMMUNS_POSSIBLES_2026-10-30.md) **déjà écrites** : ne pas lui demander de rédiger 20 nouvelles études identiques, mais **mettre à l'épreuve** vingt critères sur les prototypes et scénarios.
- [Contrat Anarchitecte 013](ANARCHITECTE_CONTRAT_CARTES_013_2026-10-30.md) **déjà écrit** : quatre objets, séparation public/privé, localisation, tests anti-fuite ; la priorité est l'intégration et les tests, pas une seconde architecture.
- [Juriste 013](JURISTE_TRANSMISSION_CARTOGRAPHIE_2026-10-30.md) et règles brouillon `propositions/REGLES_FICHES_MODERATION_CARTOGRAPHIE_INTERSTICE_2026-10-30.md` : deux couches de critères F1–F10 démo, R1–R10 pour futur réel ; les R ne sont pas tous remplis.
- [Médiathèque 013](transmissions/2026-10-30_MEDIATHEQUE_VERS_RELIEUR_TRANSMISSION_013.md) : sources vérifiées et corrections effectuées sur PR #44 ; poursuivre QA, ne pas recopier son audit.
- **Communications :** kit de lancement 013 préparé, correction de la formulation « sert à cartographier » proposée, pas de publication programmée par cette transmission ; état des **brouillons** Metricool non attesté. L'archive ZIP de son atelier n'est pas un site publié.
- **CI main :** GitHub Pages réussi sur HEAD consulté ; dernier inventaire Wiki Markdown échoué sur ce même SHA, diagnostiquer le *workflow* et son impact réel. Aucune fusion de ce cycle.
- **Atelier Organisateur : inexistant**. Le Relieur est coordinateur et organisateur pratique, jamais autorité décisionnelle ou responsable RGPD présumé.

## Ordre effectif, sans immobiliser l'ensemble
**Vague A en parallèle** : 1 L'Anarchitecte (intégration/CI), 2 La Juriste (blocages juridiques et cas testables), 3 La Médiathèque (clore références/licences), 4 Le Penseur (validation contradictoire des études 60–79). Ne pas produire un deuxième cadre à la place du premier.
**Vague B sans attendre une clôture complète de A** : 5 La Développeuse (stabiliser PR #41 et intégrer uniquement les styles validés), 6 Le Lecteur (appliquer retours juridiques/sources dans PR #44). Travaillent en parallèle.
**Vague C** : 7 Le Graphiste (raccorder site + articles + cartes après évolution des branches, tests Android).
**Vague D, indépendantes** : 8 Archiviste et 9 Biographe (sources historiques et doutes d'identité, sans fabriquer des épingles).
**Vague E** : 10 Communications (pack final après états réellement vérifiés).
**En continu** : 11 Le Relieur (suivi, scénarios S1–S3, test humain volontaire, rapprochement de PR et avis, arbitrages humains).

## Contrat des vingt passes par atelier
Vingt **actions distinctes avec preuves** quand faisable, en priorité modifier, corriger, tester et publier en branche existante plutôt que refaire des audits. Les premières passes doivent vérifier HEAD actuels et résultats déjà obtenus, puis **continuer à partir de là** ; jamais recommencer les vingt passes de la phase 013.
Un retour doit dire pour chaque passe : opération faite, vérification, lien/commit/SHA ou obstacle. Ne pas inventer de tests, ne pas découper artificiellement une seule lecture en dix vérifications. En cas de blocage, poursuivre ce qui est réalisable, signaler les passes non exécutées.
Aucune publication, fusion, appel à volontaires, traitement réel de données, changement de permission, import Metricool ou engagement d'une organisation **sans décision humaine et protections nécessaires**. Les ateliers ne reçoivent pas automatiquement ce document : le texte doit leur être donné dans leur conversation. Journaliser sans effacer des entrées concurrentes.

## Livrables convergents du cycle
- Une **version candidate** d'accueil et deux articles harmonisés et testables, dont les corrections de droit et de sources sont vérifiées.
- Un **prototype démo** à deux cartes et **une vue liste équivalente**, utilisable au clavier et sur petit écran, avec statut fictif omniprésent.
- Une **matrice de non-fuite** et de provenance, séparant le test fictif de tout projet d'ouverture réelle.
- Un **protocole S1** papier, invitabilité laissée à la personne humaine, aucun essai prétendu accompli.
- Une **communication exacte**, carrousels à valider et vérification des canaux avant programmation.
- Un **paquet de décision humaine** sur ce qui peut être montré et sur les garde-fous qui manquent.

**Ne pas déplacer la barre :** la mise en place de données et contacts réels, la géolocalisation exacte et les rencontres garanties restent hors périmètre de cette V0.
