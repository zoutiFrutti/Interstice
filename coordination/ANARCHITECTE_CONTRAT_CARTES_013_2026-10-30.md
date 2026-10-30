# Anarchitecte — Contrat minimal communs × possibles (Transmission 013)
Date : 2026-10-30. **Proposition technique, non adoptée.** Aucune migration, aucun backend supplémentaire. Base : PR #41 `initiatives-core.mjs`, `initiatives-data.mjs`, `initiatives-app.mjs`, `tests/initiatives-core.test.mjs`.

## Passes 1–10 : observations et contrat d'implémentation

1. **HEAD et reprise :** `main` contrôlé à `c679807e7e5e0b2c27018fbabcf6f3396672f4fd` ; PR #41 divergente au contrôle : 11 devant / 74 derrière. Aucun rebase ni fusion.
2. **Contrat réel :** `createDemoRepository(items)` expose `list(filters)` / `getById(id)`. Six enregistrements fictifs, `territories`, `needs`, `offers`, `stage`, provenance `source.type=simulation`, `locationLevel=commune`. Pas de connexion Supabase.
3. **Quatre objets logiques :** `initiative` (activité déclarée/documentée), `besoin` (demande sans score), `ressource` (offre avec disponibilité éventuelle), `projet` (intention/étapes), **sur un seul modèle** `publicItem` muni de `kind` `initiative|besoin|ressource|projet`. Une initiative peut lier des besoins et ressources sans prétendre qu'ils sont réalisés.
4. **Identité et relations :** `id` opaque stable et sans donnée personnelle ; `relatedIds[]` entre objets publics validés ; `version` monotone, `source:{type,reference,verifiedAt?}`; `status` séparé `demo|declared|documented|to_verify|contested|planned` et `publication` `private_draft|review|public|withdrawn`. Les labels descriptifs ne valent jamais adoption collective. Renommage ne change pas l'ID.
5. **Localisation :** `location:{level:none|territory|commune|approximate|authorized_exact, label?,publicGeometry?}`. `none` sans géométrie ; commune/territoire avec label vérifié ; géométrie publique approximative non réversible ; coordonnées exactes uniquement sur autorisation explicite documentée, jamais par inférence du serveur. Séparer commune de siège, lieu réel et zone d'activité ; pas de fausse épingle au centre d'une commune présentée comme adresse.
6. **Séparation public/privé :** sortie publique construite par **liste blanche serveur**, jamais `SELECT *` suivi de suppression cosmétique côté navigateur. Privé : identité de soumission, coordonnées, adresse complète, consentements, historique de modération, noms de personnes/lieux sensibles, IP, métadonnées de précision. Pas de `hiddenLat` ou champs privés dans JSON/HTML/CSV/GeoJSON, liens, attributs `data-*`, fichiers sources de démonstration publics.
7. **Liste et carte :** `list(filters)` et `map(filters)` dérivent du **même ensemble filtré et du même ID stable** ; la carte est une projection facultative des seules géométries publiques explicitement autorisées. Les éléments sans géométrie restent dans la liste avec indication « localisation non publiée » ; `visibleOnMap=false` ne signifie pas fiche exclue. Recherche transparente `text,commune,category,kind,status`, ordre alphabétique/source, sans votes ni score. Le fichier `initiatives-core.mjs` de PR #41 reste l'adaptateur du prototype fictif.
8. **Tests anti-fuite :** tester API JSON, export JSON, futur CSV/GeoJSON, métadonnées de pages, URLs, attributs DOM, messages d'erreur et journaux ; injecter `secretContact,privateLocation,lat,lng,internalNotes` et vérifier absence de chacune de ces clés ET valeurs. Comparer rôle public/non authentifié et rôle autorisé ; ne jamais exposer les détails internes d'un refus d'accès. Avant API réelle : audit RLS, comptes et droits Juriste/Developpeuse.
9. **Compatibilités :** PR #35 modifie `style.css` et les pages Wiki, #41 ajoute des fichiers `initiatives*` et `decouvrir-initiatives.html`, #42 modifie formulaires JS et leurs tests, #44 concerne les deux articles Wiki. Comparaisons au contrôle : #35 48 devant/85 derrière ; #42 6/40 ; #44 5/19 ; #41 11/74. Le journal commun est surface fréquente de conflit ; ne pas recopier sa version historique. Ne pas déduire compatibilité HTML/CSS d'une absence de collision de fichiers. Wiki V0 : contrôle technique antérieur = « corrections nécessaires » jusqu'aux preuves 390/1280, clavier, focus et liens externes.
10. **Acceptation / ordre d'intégration :** ajouter des filtres `kind` et deux onglets fictifs (« communs » / « possibles ») dans la PR #41 existante, préserver la vue liste. Ajouter des tests invariants sécurité ; ensuite tests Chromium à 390/1280 (dépassement, focus clavier, console) et Android physique séparément. **Ne pas** raccorder de données réelles avant procédure de retrait/contestation, consentement, contrôle de source, licence de carte, sécurité des lieux, responsable de traitement et décision humaine.

## Objet public minimal proposé (contrat, pas données réelles)

```json
{
  "id":"demo-jardin",
  "kind":"initiative",
  "title":"Le jardin qu'on imagine",
  "summary":"Scénario fictif",
  "category":"Écologie",
  "status":"demo",
  "publication":"public",
  "source":{"type":"simulation"},
  "location":{"level":"commune","label":"Lisle-sur-Tarn"},
  "relatedIds":[],
  "version":1
}
```

**IMPORTANT :** `publication=public` dans cet exemple ne concerne **que les données explicitement fictives**. Une initiative réelle ne passe jamais automatiquement de `review` à `public`. Si le format des cartes accepte seulement des marqueurs géographiques, montrer séparément une liste complète pour les fiches à localisation absente.

## Résultats vérifiés / limites

- Développement incrémental sur la PR #41 : quatre nouveaux tests de contrat démo, export et non-fuite, commit `c0f4344d8f10b102d78d96cacf3add6f438fa1c7`. Leur résultat CI reste à constater.
- Aucune fuite constatée sur le modèle fictif lu : pas de téléphone, adresse, GPS dans les six fixtures. Cela **ne prouve pas** la sûreté d'un futur endpoint public.
- Pas de migration, schéma SQL réel, second backend, collecte de données réelles, ni fusion.
- Dépendances : **Développeuse** pour code PR #41 / adaptateur ; **Graphiste** pour CSS/rendu ; **Juriste** pour droits/localisation/licences et recours ; **Relieur** pour scénarios et décision humaine ; **Lecteur** pour textes Wiki #44.
