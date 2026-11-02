import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

from pont_relieuse_c14 import MARKER, commentaire, verifier_auteur

EXEMPLE = Path(__file__).with_name("exemple_mission_c14.json")
SCRIPT = Path(__file__).with_name("pont_relieuse_c14.py")


def event(body=None, login="zoutiFrutti", title="[RELIEUSE-C14] Test"):
    return {"issue": {"title": title, "user": {"login": login},
                      "body": EXEMPLE.read_text(encoding="utf-8") if body is None else body}}


class PontC14Test(unittest.TestCase):
    def test_authorized_receipt_contains_proof_and_no_personal_data(self):
        msg = commentaire(event(), "zoutiFrutti")
        self.assertIn(MARKER, msg)
        self.assertIn("RESULTAT_DETERMINISTE_CANDIDAT", msg)
        self.assertIn("MED-001", msg)
        self.assertIn("SHA-256 entrée", msg)
        self.assertNotIn("Archive publique A", msg)

    def test_foreign_author_ignored(self):
        self.assertFalse(verifier_auteur(event(login="intrus"), "zoutiFrutti"))
        self.assertIsNone(commentaire(event(login="intrus"), "zoutiFrutti"))

    def test_other_prefix_ignored(self):
        self.assertIsNone(commentaire(event(title="[RELIEUSE-LECTRICE] autre"), "zoutiFrutti"))

    def test_invalid_json_refused_with_no_details(self):
        body = '{"schema":"evil","secret":"ne pas afficher"'
        msg = commentaire(event(body=body), "zoutiFrutti")
        self.assertIn("REFUSEE_ENTREE", msg)
        self.assertNotIn("ne pas afficher", msg)

    def test_nonpublic_refused(self):
        mission = json.loads(EXEMPLE.read_text(encoding="utf-8"))
        mission["classification"] = "CONFIDENTIEL"
        msg = commentaire(event(body=json.dumps(mission)), "zoutiFrutti")
        self.assertIn("REFUSEE_ENTREE", msg)
        self.assertNotIn("CONFIDENTIEL", msg)

    def test_large_body_refused(self):
        msg = commentaire(event(body="X" * 50001), "zoutiFrutti")
        self.assertIn("REFUSEE_ENTREE", msg)

    def test_cli_output_only_for_authorized_mission(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            fichier = tmp / "event.json"
            fichier.write_text(json.dumps(event()), encoding="utf-8")
            fichier_sortie = tmp / "output.txt"
            env = os.environ.copy()
            env.update({"GITHUB_EVENT_PATH": str(fichier),
                        "GITHUB_REPOSITORY": "zoutiFrutti/Interstice",
                        "GITHUB_OUTPUT": str(fichier_sortie)})
            p = subprocess.run([sys.executable, str(SCRIPT)], cwd=tmp, env=env,
                               capture_output=True, text=True, timeout=10)
            self.assertEqual(p.returncode, 0, p.stderr)
            self.assertEqual(fichier_sortie.read_text(), "should_comment=true\n")
            self.assertIn(MARKER, (tmp / "commentaire-orchestratrice-c14.md").read_text())

    def test_bad_author_writes_no_comment(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            fichier = tmp / "event.json"
            fichier.write_text(json.dumps(event(login="autre")), encoding="utf-8")
            env = os.environ.copy()
            env.update({"GITHUB_EVENT_PATH": str(fichier),
                        "GITHUB_REPOSITORY": "zoutiFrutti/Interstice",
                        "GITHUB_OUTPUT": str(tmp / "output.txt")})
            p = subprocess.run([sys.executable, str(SCRIPT)], cwd=tmp, env=env,
                               capture_output=True, text=True, timeout=10)
            self.assertEqual(p.returncode, 0, p.stderr)
            self.assertFalse((tmp / "commentaire-orchestratrice-c14.md").exists())


if __name__ == "__main__":
    unittest.main()
