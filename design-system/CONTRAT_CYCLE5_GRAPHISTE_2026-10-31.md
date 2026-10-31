# Graphiste — Cycle 5 : contrat d'assemblage (passe 1)
Date : 31 octobre 2026. **Travail candidat, aucun visa ni publication.**
## Réconciliation exacte
- PR #50 : HEAD `2ab552e9dfb13a2d3e3dbcce91423fe1e64968eb` ; composants des fiches éditoriales, palette noir #101014, rouge #c5212c, ivoire #e9e5db.
- PR #57 : HEAD `2d8bb7960d7e2a4f1f3428841cbcc705a0962877` ; parcours critiques, CSS `assets/parcours-critiques.css`, sans JS ni collecte.
- PR #59 : HEAD initial `755588993e58e3a97d60d27be4d99f387a81316c` ; CSS `assets/graphiste-cycle4-composants.css` et maquette documentaire. La branche présente est dérivée de cette version, sans modifier ces trois branches.
- PR #58 : Manifeste V2.6 candidat `8aa342bc7b45dc6736499eb363c6c895c3bc3621`, Charte des communs V0.8 candidate `cbfd028e13aba2b5ee31d2af8b669552c840c8ed`, Charte éditoriale V0.1 candidate `57b9a8bd9db6280d6a2c753082310c25b0ea32ec`. **Aucune adoption collective ni publication déduite des présentations.**
## Interface commune
L'extension CSS `assets/graphiste-cycle5-profils.css` s'applique uniquement à `.interstice-fiche.graphiste-c5`. Aucun remplacement de `style.css`, du renderer, des états JSON ou des textes de La Lectrice.
Les profils réutilisables sont : manifeste, charte, biographie, lutte, chronologie, enquête, source primaire/bibliographique, dossier contradictoire, résultat vérifiable et exercice pédagogique.
Chaque fiche réelle doit conserver titre, identifiant, source originale et version, date de consultation **distincte** de publication, statut éditorial, faits, objections, limites et médias autorisés. Une carte de résultats historiques distingue **objectif annoncé, acte administratif/judiciaire, effet matériel attesté, héritage discuté** ; sans substituer une de ces catégories à une autre.
La démonstration HTML `design-system/maquette-cycle5-profils-reels.html` utilise des **références réelles et des textes courts de balisage graphique**, pas de copie de dossiers privés, pas de données chiffrées reconstituées, aucun portrait ou fac-similé inventé.
## Sécurité et limites
Une page accessible dans GitHub n'est jamais une prévisualisation privée, même avec noindex. L'absence d'image ne remplace pas le contrôle de consentement pour les données personnelles ; ne pas inclure noms ou localisations sensibles issus des enquêtes. Les données publiques historiques ne sont pas une autorisation générale de diffuser images ou adresses privées.
## Point de reprise
Sur branche d'intégration, rapprocher chaque fiche de son **blob SHA approuvé par Zout**, résoudre les routes Wiki exactes et rejouer les tests sans effacer les versions concurrentes. Les essais physiques, technologies d'assistance, licences et exactitude documentaire doivent être attestés séparément.
