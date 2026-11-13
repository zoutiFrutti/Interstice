# C07 · Contrôle complémentaire du contenu public
**9 novembre 2026 · La Relieuse · candidature #186**

Les fichiers Pages autorisés par nom peuvent malgré tout contenir des URLs internes. Le contrôle `check-pages-content.mjs` parcourt la sortie Jekyll et recherche **les identifiants exacts** des documents Google Docs repérés dans le champ `dossier_locator` ou `canonical_url` de C02. Il ne copie pas ces identifiants dans les scripts, logs, rapports ou artefacts, et n'imprime que des compteurs.

Cette vérification s'ajoute à `check-pages-boundary.mjs` : elle ne remplace ni l'audit RGPD, ni la recherche d'autres données sensibles (images, noms, coordonnées ou informations déjà publiées sur GitHub). Les tests synthétiques couvrent le refus et l'acceptation.

En cas de détection positive, le job doit rester rouge, sans l'effacer arbitrairement. Aucune fusion ou publication autorisée.
