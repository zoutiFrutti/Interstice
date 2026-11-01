import unittest
from lectrice_agent_c12 import prepare, execute

class LectriceTest(unittest.TestCase):
    def test_prepare(self):
        messages=prepare("Un texte historique a relire et verifier.")
        self.assertEqual(messages[0]["role"],"system")
        self.assertIn("N'invente",messages[0]["content"])
    def test_missing_key_blocks_call(self):
        with self.assertRaises(RuntimeError):
            execute("Un texte historique a relire et verifier.","","example")
    def test_short_text_rejected(self):
        with self.assertRaises(ValueError):
            prepare("trop court")
