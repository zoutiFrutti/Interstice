import unittest
from unittest.mock import patch
from pont_relieuse_c12 import MARKER, extract, result_comment


def event(body="Texte historique a verifier soigneusement.", user="zoutiFrutti"):
    return {"issue": {"title": "[RELIEUSE-LECTRICE] Essai", "user": {"login": user}, "body": body}}


class BridgeTest(unittest.TestCase):
    def test_owner_mission(self):
        self.assertEqual(extract(event(), "zoutiFrutti"), "Texte historique a verifier soigneusement.")
        self.assertIn("exécution bloquée", result_comment(event(), "zoutiFrutti", "", ""))

    def test_unauthorised_ignored(self):
        self.assertIsNone(extract(event(user="autre"), "zoutiFrutti"))
        self.assertIsNone(result_comment(event(user="autre"), "zoutiFrutti", "key", "model", enabled=True))

    def test_short_body_rejected(self):
        with self.assertRaises(ValueError):
            extract(event(body="court"), "zoutiFrutti")

    @patch("pont_relieuse_c12.execute")
    def test_api_never_called_without_explicit_enable(self, execute):
        comment = result_comment(event(), "zoutiFrutti", "key", "model")
        self.assertIn("BLOQUEE_AUTORISATION", comment)
        self.assertIn(MARKER, comment)
        execute.assert_not_called()

    @patch("pont_relieuse_c12.execute")
    def test_missing_configuration_fails_closed(self, execute):
        comment = result_comment(event(), "zoutiFrutti", "", "model", enabled=True)
        self.assertIn("BLOQUEE_CONFIGURATION", comment)
        execute.assert_not_called()

    @patch("pont_relieuse_c12.execute")
    def test_enabled_creates_candidate_only(self, execute):
        execute.return_value = {"texte": "Ce fait demande une source."}
        comment = result_comment(event(), "zoutiFrutti", "key", "model", enabled=True)
        execute.assert_called_once()
        self.assertIn("ANALYSE_CANDIDATE", comment)
        self.assertIn("Ce fait demande une source.", comment)
        self.assertIn("non vérifiée", comment)

    @patch("pont_relieuse_c12.execute")
    def test_api_failure_still_returns_result(self, execute):
        execute.side_effect = RuntimeError("secret: should never leak")
        comment = result_comment(event(), "zoutiFrutti", "key", "model", enabled=True)
        self.assertIn("ECHEC_TECHNIQUE", comment)
        self.assertNotIn("secret:", comment)

    @patch("pont_relieuse_c12.execute")
    def test_invalid_text_returns_actionable_refusal(self, execute):
        comment = result_comment(event(body="court"), "zoutiFrutti", "key", "model", enabled=True)
        self.assertIn("REFUSEE_ENTREE", comment)
        execute.assert_not_called()

    def test_malformed_event_safely_ignored(self):
        self.assertIsNone(result_comment({"issue": {"user": "improper", "title": "[RELIEUSE-LECTRICE] test"}}, "zoutiFrutti", "key", "model", enabled=True))


if __name__ == "__main__":
    unittest.main()
