import copy
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from executant_c15 import preparer, verifier

SOURCE = Path(__file__).with_name("exemple_mission_c15.json")
PROGRAM = Path(__file__).with_name("executant_c15.py")


class ExecutantC15Test(unittest.TestCase):
    def setUp(self):
        self.r = json.loads(SOURCE.read_text(encoding="utf-8"))

    def test_no_api_call_even_with_authorization(self):
        self.r["autorisation"]["ia_active"] = True
        result = preparer(self.r)
        self.assertFalse(result["appel_modele_effectue"])
        self.assertEqual(result["appels_effectues"], 0)
        self.assertEqual(result["statut"], "BLOQUEE_EXECUTEUR")
        self.assertIsNone(result["resultat_editorial"])

    def test_disabled_by_default(self):
        result = preparer(self.r)
        self.assertIn("IA_NON_AUTORISEE", result["blocages"])

    def test_local_connector_not_implemented(self):
        self.r["fournisseur"] = "ollama_local"
        result = preparer(self.r)
        self.assertIn("CONNECTEUR_LOCAL_NON_BRANCHÉ", result["blocages"])

    def test_remote_connector_not_implemented(self):
        self.r["fournisseur"] = "api_distante"
        result = preparer(self.r)
        self.assertIn("CONNECTEUR_DISTANT_NON_BRANCHÉ", result["blocages"])

    def test_no_private_inputs(self):
        self.r["classification"] = "CONFIDENTIEL"
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_reject_publication_permission(self):
        self.r["publication"] = True
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_reject_multiple_calls(self):
        self.r["limites"]["appels_max"] = 2
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_reject_big_cost(self):
        self.r["limites"]["cout_eur_max"] = 1000
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_reject_boolean_budget(self):
        self.r["limites"]["cout_eur_max"] = True
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_reject_zero_tokens(self):
        self.r["limites"]["tokens_sortie_max"] = 0
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_requires_candidate_only(self):
        self.r["autorisation"]["sortie_candidat_uniquement"] = False
        with self.assertRaises(ValueError):
            verifier(self.r)

    def test_cli(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "result.json"
            p = subprocess.run([sys.executable, str(PROGRAM), "--entree", str(SOURCE), "--sortie", str(out)], capture_output=True, text=True, timeout=10)
            self.assertEqual(p.returncode, 0, p.stderr)
            self.assertEqual(json.loads(out.read_text())["statut"], "BLOQUEE_EXECUTEUR")


if __name__ == "__main__":
    unittest.main()
