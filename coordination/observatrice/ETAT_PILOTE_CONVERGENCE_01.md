# WORK-CONVERGENCE-01 — état vérifié du pilote GH-AW

**PR [#180](https://github.com/zoutiFrutti/Interstice/pull/180), HEAD `b5cd15ea7de3c35075adcb19ae18d65c465fcc6d`. Verrou officiel committé et recompilé ; agent non lancé.**

Le fichier `.github/workflows/fn-observatrice-pilote.lock.yml` est désormais présent au vrai emplacement de workflow. L’écriture standard **API Contents**, avec la connexion GitHub Work existante et autorisée, a réussi. Son blob `ca2293cda641e9513cd529fe9ebefba670eb2ef4` a été relu indépendamment : il est identique à l’artefact officiel, sans reconstruction ni retouche.

## Contrôles sur le HEAD livré

| Contrôle | Résultat |
| --- | --- |
| Source réelle et verrou au commit `b5cd15e…` | Blobs vérifiés |
| Tests statiques du pilote | **5/5 réussis**, sans IA |
| Contrôles du verrou committé | **5/5 réussis**, Python standard, sans réseau/modèle |
| Contrôles R6 existants | **Réussis**, [run 41852755473](https://github.com/zoutiFrutti/Interstice/actions/runs/41852755473), sans déploiement public |
| Nouvelle compilation cloud | **Réussie**, [run 41852755476](https://github.com/zoutiFrutti/Interstice/actions/runs/41852755476), job `126653143911` |
| Compilateur / moteur compilé | GH-AW **v1.0.1**, Gemini **0.64.0**, strict |
| Nouvel artefact | **13337020326**, identique au verrou committé et à la première compilation |

Le verrou fait **129 493 octets**, SHA-256 `75347e4b70a0b92889e84e5276477c6fd8cea5665ce743db2cb056415e088410`. Le ZIP du nouvel artefact a pour SHA-256 `17eb19d8d61209aaf3c0111bf03999388635edba34557dbc018e1f72afc4da99` ; conservation annoncée jusqu’au **11 novembre 2026, 15 h 57 (Paris)**.

## Refus Actions initial : contexte distinct, livraison résolue

Le [run 41838170283](https://github.com/zoutiFrutti/Interstice/actions/runs/41838170283) refusait le push effectué avec le **`GITHUB_TOKEN` éphémère du job Actions** : `contents: write` n’accordait pas la permission spéciale `workflows`. Le checkout persistait ce jeton, sans remplacement personnalisé.

Ce refus ne déterminait pas les permissions de la connexion Work. L’opération Contents autorisée a livré le verrou sans changer les permissions du jeton Actions, sans affaiblir GitHub et sans repli GitData après rejet. Le travail temporaire de push Actions reste retiré ; la compilation actuelle conserve `contents: read`.

**Le blocage de dépôt du fichier est donc résolu. Cela n’autorise ni fusion ni activation.**

## Garde-fous et réserves toujours présents

Seul `workflow_dispatch` est déclaré. Le job `activation` exige `FN_OBSERVATRICE_ENABLED == 'true'` et l’acteur propriétaire. Les cinq jobs `activation`, `agent`, `conclusion`, `detection`, `safe_outputs` ne possèdent **aucune permission write**. Les safe outputs exposent seulement `noop`, `report_missing_data`, `report_missing_tool`, sans création d’Issue.

- **Moteur** : le nouvel essai confirme que Gemini est déprécié au profit d’`agy`, signalé expérimental. Compatibilité et fournisseur restent à décider avant activation.
- **Détection de menaces** : Gemini n’est pas supporté pour cette étape. Le verrou génère un traitement **Copilot**, avec authentification et frais éventuels distincts. Cet avertissement persiste : une compilation réussie n’est pas une validation d’exécution du moteur.
- **Secrets** : `GEMINI_API_KEY`, `COPILOT_GITHUB_TOKEN` et les autres références sont des noms, pas une preuve de configuration. L’ancien avertissement « nouveau secret restreint » n’apparaît plus dans la compilation de ce HEAD ; aucun secret n’a été configuré ou inspecté.
- **OTLP** : les références optionnelles de destination/en-têtes doivent être examinées avant activation ; leurs valeurs effectives restent inconnues.
- Les limites de tours, durée et crédits techniques ne garantissent pas un coût de zéro euro.

**C12 reste indépendant** : son workflow hérité sur ce HEAD n’a pas d’opt-in explicite. C13 [#114](https://github.com/zoutiFrutti/Interstice/pull/114) reste un correctif candidat distinct. Ses **3/3 tests locaux** avaient réussi sans Issue ni modèle ; cela ne prouve ni son intégration ni une mission reçue. Aucun test d’Issue n’a été créé.

## Reproduire hors IA

Commandes pour Work/CI ; aucun terminal n’est demandé à Zout. Elles lisent les fichiers de la branche candidate, sans les modifier.

```sh
python3 coordination/observatrice/controle_pilote_gh_aw.py
python3 - .github/workflows/fn-observatrice-pilote.lock.yml <<'PY'
import hashlib, json, re, sys, unittest
from pathlib import Path
path = Path(sys.argv[1])
raw = path.read_bytes()
text = raw.decode("utf-8")
metadata = json.loads(re.search(r"(?m)^# gh-aw-metadata: (.+)$", text).group(1))
manifest = json.loads(re.search(r"(?m)^# gh-aw-manifest: (.+)$", text).group(1))
class CompiledLockSafety(unittest.TestCase):
    def test_official_artifact_bytes(self):
        self.assertEqual(hashlib.sha256(raw).hexdigest(),
          "75347e4b70a0b92889e84e5276477c6fd8cea5665ce743db2cb056415e088410")
    def test_compiler_and_engine(self):
        self.assertEqual(metadata["compiler_version"], "v1.0.1")
        self.assertTrue(metadata["strict"])
        self.assertEqual(metadata["agent_id"], "gemini")
    def test_manual_trigger_and_opt_in(self):
        block = text.split("\non:\n", 1)[1].split("\npermissions:", 1)[0]
        self.assertRegex(block, r"^  workflow_dispatch:")
        self.assertNotRegex(block, r"(?m)^  (push|pull_request|issues|schedule|issue_comment):")
        self.assertIn("if: vars.FN_OBSERVATRICE_ENABLED == 'true' && github.actor == github.repository_owner", text)
    def test_no_write_permission(self):
        self.assertIn("\npermissions: {}", text)
        self.assertNotRegex(text, r"(?m)^[ \t]+[\w-]+:[ \t]*write[ \t]*$")
    def test_no_automatic_public_output(self):
        tools = next(s["tools"] for s in manifest["mcp_servers"] if s["name"] == "safeoutputs")
        self.assertEqual(set(tools), {"noop", "report_missing_data", "report_missing_tool"})
unittest.main(argv=[sys.argv[0]], verbosity=2)
PY
```

Le hash vise le verrou officiel vérifié : toute recompilation différente exige un nouvel audit. Aucun `gh aw run`, `gh workflow run`, configuration de secret ou changement d’activation n’a été exécuté. Les preuves détaillées sont dans `PREUVES_COMPILATION_CONVERGENCE_01.json`.

**À décider séparément avant tout lancement** : fournisseur et compatibilité moteur/détection, périmètre des données et traces, budget et moyen d’arrêt, configuration des secrets/opt-in, fusion éventuelle, puis première exécution manuelle expressément autorisée. Le pilote reste une livraison technique, pas un atelier IA actif.
