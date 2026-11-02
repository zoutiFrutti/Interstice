import copy
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from executant_c15 import preparer, verifier, executer_local

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

    def test_local_disabled_fails_without_transport(self):
        with self.assertRaises(PermissionError):
            executer_local(self.r, opener=lambda *a, **k: self.fail("appel réseau interdit"))

    def test_external_host_rejected(self):
        self.r["autorisation"]["ia_active"] = True
        with self.assertRaises(ValueError):
            executer_local(self.r, url="http://192.168.1.10:11434",
                           opener=lambda *a, **k: self.fail("appel réseau interdit"))

    def test_local_mock_produces_candidate(self):
        self.r["autorisation"]["ia_active"] = True

        class MockResponse:
            headers = {}
            def __enter__(self): return self
            def __exit__(self, *args): return False
            def read(self, size): return b'{"response":"Analyse candidate non verifiee"}'

        calls = []
        def open_mock(req, timeout=60):
            calls.append((req.full_url, timeout))
            return MockResponse()

        report = executer_local(self.r, opener=open_mock)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0][0], "http://127.0.0.1:11434/api/generate")
        self.assertEqual(report["statut"], "ANALYSE_CANDIDATE")
        self.assertTrue(report["validation_humaine_requise"])
        self.assertFalse(report["sources_verifiees"])

    def test_remote_cannot_be_executed_locally(self):
        self.r["autorisation"]["ia_active"] = True
        self.r["fournisseur"] = "api_distante"
        with self.assertRaises(ValueError):
            executer_local(self.r, opener=lambda *a, **k: self.fail("appel réseau interdit"))

    def test_cli(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "result.json"
            p = subprocess.run([sys.executable, str(PROGRAM), "--entree", str(SOURCE), "--sortie", str(out)], capture_output=True, text=True, timeout=10)
            self.assertEqual(p.returncode, 0, p.stderr)
            self.assertEqual(json.loads(out.read_text())["statut"], "BLOQUEE_EXECUTEUR")


if __name__ == "__main__":
    unittest.main()
