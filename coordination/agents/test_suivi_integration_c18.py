import copy
import json
import tempfile
import subprocess
import sys
import unittest
from pathlib import Path

from suivi_integration_c18 import generate, markdown
from test_index_collectif_c03 import CollectifTests  # Suite C03 réutilisée par CI C18

EXAMPLE = Path(__file__).with_name("exemple_suivi_c18.json")
SCRIPT = Path(__file__).with_name("suivi_integration_c18.py")


class TrackerTests(unittest.TestCase):
    def setUp(self):
        self.data = json.loads(EXAMPLE.read_text(encoding="utf-8"))

    def test_distinguishes_prepared_from_received(self):
        r = generate(self.data)
        self.assertEqual(r["bilan"]["PREPARE"], 1)
        self.assertEqual(r["bilan"]["RECU_ATTESTE"], 0)
        self.assertEqual(r["bilan"]["CONTROLE_TECHNIQUE"], 1)
        self.assertIn("non authentifie", " ".join(r["avertissements"]))

    def test_technical_ci_does_not_imply_editorial_completion(self):
        r = generate(self.data)
        self.assertNotIn("TERMINE", r["bilan"])
        self.assertEqual(r["lignes"][1]["etat"], "CONTROLE_TECHNIQUE")

    def test_receipt_needs_evidence(self):
        d = copy.deepcopy(self.data)
        d["livrables"][0]["etat"] = "RECU_ATTESTE"
        with self.assertRaisesRegex(ValueError, "Preuve"):
            generate(d)

    def test_bad_sha_rejected(self):
        d = copy.deepcopy(self.data)
        d["livrables"][1]["commit_sha"] = "123"
        with self.assertRaisesRegex(ValueError, "Empreinte"):
            generate(d)

    def test_unknown_field_rejected(self):
        d = copy.deepcopy(self.data)
        d["livrables"][0]["publication"] = True
        with self.assertRaises(ValueError):
            generate(d)

    def test_duplicate_refused(self):
        d = copy.deepcopy(self.data)
        d["livrables"].append(copy.deepcopy(d["livrables"][0]))
        with self.assertRaises(ValueError):
            generate(d)

    def test_table_escapes_separator(self):
        d = copy.deepcopy(self.data)
        d["livrables"][0]["reserve"] = "à revoir | impossible"
        self.assertIn("à revoir / impossible", markdown(generate(d)))

    def test_cli_offline(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "r.json"
            md = Path(tmp) / "r.md"
            p = subprocess.run([sys.executable, str(SCRIPT), "--entree", str(EXAMPLE),
                                "--sortie", str(out), "--markdown", str(md)],
                               capture_output=True, text=True, timeout=10)
            self.assertEqual(p.returncode, 0, p.stderr)
            self.assertEqual(json.loads(out.read_text())["schema"], "c18.result.v1")
            self.assertIn("PREPARE", md.read_text())


if __name__ == "__main__":
    unittest.main()
