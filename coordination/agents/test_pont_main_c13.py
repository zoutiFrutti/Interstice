"""Test de bout en bout du pont C13 sans réseau ni modèle IA."""
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).with_name("pont_relieuse_c12.py")


class BridgeIntegrationTest(unittest.TestCase):
    def run_event(self, title, body, login="zoutiFrutti", enabled="false"):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            event = root / "event.json"
            output = root / "output.txt"
            event.write_text(json.dumps({"issue": {"title": title, "body": body,
                                                  "user": {"login": login}}}), encoding="utf-8")
            env = os.environ.copy()
            env.update({"GITHUB_EVENT_PATH": str(event), "GITHUB_OUTPUT": str(output),
                        "GITHUB_REPOSITORY": "zoutiFrutti/Interstice", "OPENAI_API_KEY": "",
                        "OPENAI_MODEL": "test-model", "LECTRICE_AI_ENABLED": enabled})
            result = subprocess.run([sys.executable, str(SCRIPT)], cwd=root,
                                    env=env, capture_output=True, text=True, timeout=10)
            comment = root / "commentaire-lectrice-c12.md"
            return result, output.read_text(encoding="utf-8") if output.exists() else "", \
                comment.read_text(encoding="utf-8") if comment.exists() else ""

    def test_owner_receives_blocked_receipt_without_api(self):
        proc, output, comment = self.run_event("[RELIEUSE-LECTRICE] Démo", "Texte historique a verifier soigneusement.")
        self.assertEqual(proc.returncode, 0, proc.stderr)
        self.assertEqual(output, "should_comment=true\n")
        self.assertIn("BLOQUEE_AUTORISATION", comment)

    def test_uppercase_true_does_not_authorize_ai(self):
        proc, output, comment = self.run_event(
            "[RELIEUSE-LECTRICE] Démo", "Texte historique a verifier soigneusement.", enabled="TRUE")
        self.assertEqual(proc.returncode, 0, proc.stderr)
        self.assertEqual(output, "should_comment=true\n")
        self.assertIn("BLOQUEE_AUTORISATION", comment)

    def test_untrusted_issue_is_ignored(self):
        proc, output, comment = self.run_event("[RELIEUSE-LECTRICE] Démo", "Texte historique a verifier soigneusement.", login="intrus")
        self.assertEqual(proc.returncode, 0, proc.stderr)
        self.assertEqual((output, comment), ("", ""))

    def test_malformed_owner_mission_gets_refusal(self):
        proc, output, comment = self.run_event("[RELIEUSE-LECTRICE] Démo", "trop court", enabled="true")
        self.assertEqual(proc.returncode, 0, proc.stderr)
        self.assertEqual(output, "should_comment=true\n")
        self.assertIn("REFUSEE_ENTREE", comment)


if __name__ == "__main__":
    unittest.main()
