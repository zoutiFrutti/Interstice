# Vérifications navigateur — 21 novembre 2026

Interface servie par `sites-preview`, URL retournée `http://127.0.0.1:4173/`, navigateur Chrome de l'environnement Work. Données exclusivement fictives. Ce sont des actions automatisées dans le navigateur et observations de l'interface, pas un test du site distant ou d'un appareil Android.

| Scénario réellement exécuté | Résultat observé |
|---|---|
| Titre et besoin fictifs → Envoyer pour examen | Reçu privé affiché ; succès uniquement après enregistrement |
| Consulter le suivi | État reçu ; vérification et validation éditoriale encore à effectuer ; aucune publication autorisée |
| Contribuer à une recherche avec provenance, cote, référence et droits | Reçu affiché, apport visible dans la file de modération fictive |
| Examiner la contribution, instruire avec vérification de source et droits | Texte d'origine et apport affichés côte à côte ; traitement enregistré |
| Clôturer la recherche avec motif | État « Close » et motif affichés dans le catalogue |
| Rouvrir avec nouvelle contradiction | Recherche accessible à nouveau ; nouvelle contribution possible |
| Déposer une objection | Absente du catalogue avant modération, visible après examen et admission dans la discussion |
| Proposition contenant une adresse e-mail fictive | Refus explicite et texte conservé dans le formulaire |
| Tab depuis le titre | Focus observé sur le sélecteur du type de proposition |
| Contrôle DOM des champs input/textarea/select présents | Aucun champ sans label associé, y compris dans les formulaires de revue générés |
| Case de déclaration des droits au clavier | Activation avec Espace réussie. Le clic automatisé `check` du pilote navigateur avait échoué ; aucune conclusion d'inaccessibilité de la case n'en est déduite |
| Capture visuelle ordinateur | Charte sombre et rouge, texte lisible, formulaires et comparaisons visibles |

Le premier essai a révélé une erreur DOM après l'enregistrement : une chaîne d'appels à `append` utilisait une valeur de retour inexistante. Correction effectuée dans `ui/app.mjs`, puis parcours de réception et suivi rejoué avec succès. Aucun succès revendiqué pour cet essai initial.

Les raccourcis de zoom et F12 n'ont produit aucun changement de largeur exploitable dans ce navigateur : ce n'est **pas** un test à 400 %. Aucune émulation mobile, vérification sur téléphone physique, TalkBack, VoiceOver ou analyse Axe exécutée. Les contrôles de labels et de focus ne constituent pas un audit WCAG.

Les tests SQL/HTTP automatisés couvrent séparément refus de permission, erreurs réseau/stockage, versions périmées, fermeture sans lecture du corps, absence de publication, refus des liens dangereux et protection des colonnes privées. Voir `test.mjs` et le journal d'exécution.

Dernière passe après redémarrage sur le code final : passage recherche → contribution de fiche vérifié, puis réception et suivi rejoués avec succès. La démonstration est limitée à la session de test ; son URL de bouclage ne constitue pas une adresse consultable depuis un téléphone extérieur.
