import copy
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from orchestrateur_c14 import digest, markdown, normaliser_url, traiter, valider

EXEMPLE = Path(__file__).with_name("exemple_mission_c14.json")
SCRIPT = Path(__file__).with_name("orchestrateur_c14.py")


class OrchestrateurTest(unittest.TestCase):
    def setUp(self):
        self.mission = json.loads(EXEMPLE.read_text(encoding="utf-8"))

    def test_order_and_deterministic_real_work(self):
        rapport = traiter(self.mission)
        self.assertEqual(rapport["ordre_execution"], ["MED-001", "LEC-001", "REL-001"])
        self.assertEqual(rapport["bilan"]["terminees_deterministes"], 3)
        self.assertEqual(rapport["taches"][0]["resultat"]["doublons_url_probables"],
                         [{"premiere": 1, "seconde": 2}])
        self.assertEqual(rapport["taches"][1]["resultat"]["urls_absentes"], [3])
        self.assertFalse(rapport["taches"][2]["resultat"]["controle_editorial_effectue"])
        self.assertEqual(rapport, traiter(self.mission))

    def test_plan_only_does_not_compute_outputs(self):
        rapport = traiter(self.mission, "planifier")
        self.assertEqual(rapport["bilan"]["terminees_deterministes"], 0)
        self.assertEqual(rapport["bilan"]["planifiees"], 3)
        self.assertTrue(all("resultat" not in t for t in rapport["taches"]))

    def test_invalid_dependency_refused(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][0]["dependances"] = ["INCONNU"]
        with self.assertRaisesRegex(ValueError, "Dépendance"):
            valider(mission)

    def test_cycle_refused(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][1]["dependances"] = ["REL-001"]
        with self.assertRaisesRegex(ValueError, "Cycle"):
            valider(mission)

    def test_duplicate_ids_refused(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][2]["id"] = "MED-001"
        with self.assertRaisesRegex(ValueError, "dupliqué"):
            valider(mission)

    def test_sensitive_write_flag_refused_even_false(self):
        mission = copy.deepcopy(self.mission)
        mission["publication"] = False
        with self.assertRaisesRegex(ValueError, "champ sensible"):
            valider(mission)

    def test_non_public_rejected(self):
        mission = copy.deepcopy(self.mission)
        mission["classification"] = "CONFIDENTIEL"
        with self.assertRaisesRegex(ValueError, "publiques"):
            valider(mission)

    def test_unapproved_action_blocked_and_no_side_effect(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][1]["action"] = "publier"
        mission["taches"][1]["entree"] = {}
        rapport = traiter(mission)
        self.assertEqual([x["statut"] for x in rapport["taches"]],
                         ["REFUSEE_ACTION", "TERMINE_DETERMINISTE", "BLOQUEE_DEPENDANCE"])
        self.assertEqual(rapport["bilan"]["refusees"], 1)

    def test_unknown_action_with_payload_rejected(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][1]["action"] = "executer_shell"
        with self.assertRaisesRegex(ValueError, "non autorisée"):
            valider(mission)

    def test_bad_urls_reported_without_network(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][2]["entree"]["ressources"][0]["url"] = "file:///etc/passwd"
        mission["taches"][2]["entree"]["ressources"][1]["url"] = "https://example.org:bad/"
        rapport = traiter(mission)
        self.assertEqual(rapport["taches"][1]["resultat"]["urls_invalides"], [1, 2])
        self.assertEqual(rapport["taches"][1]["resultat"]["urls_visitees"], 0)

    def test_case_sensitive_path(self):
        self.assertNotEqual(normaliser_url("https://host/Doc"), normaliser_url("https://host/doc"))
        self.assertEqual(normaliser_url("HTTPS://HOST/Doc/"), normaliser_url("https://host/Doc"))

    def test_oversized_input_rejected(self):
        mission = copy.deepcopy(self.mission)
        mission["taches"][2]["entree"]["ressources"] = [
            {"titre": "X" * 200, "url": "https://x.io/" + "x" * 1800} for _ in range(30)
        ]
        with self.assertRaisesRegex(ValueError, "volumineuse"):
            traiter(mission)

    def test_markdown_stays_candidate(self):
        self.assertIn("sans IA ni validation éditoriale", markdown(traiter(self.mission)))

    def test_cli_creates_both_reports(self):
        with tempfile.TemporaryDirectory() as tmp:
            out = Path(tmp) / "result.json"
            md = Path(tmp) / "result.md"
            p = subprocess.run([sys.executable, str(SCRIPT), "--entree", str(EXEMPLE),
                                "--sortie", str(out), "--markdown", str(md)],
                               capture_output=True, text=True, timeout=10)
            self.assertEqual(p.returncode, 0, p.stderr)
            report = json.loads(out.read_text(encoding="utf-8"))
            self.assertEqual(report["empreinte_mission"], digest(self.mission))
            self.assertIn("MED-001", md.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
