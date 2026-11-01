import unittest
from pont_relieuse_c12 import extract, result_comment

class BridgeTest(unittest.TestCase):
    def test_owner_mission(self):
        event={"issue":{"title":"[RELIEUSE-LECTRICE] Essai","user":{"login":"zoutiFrutti"},"body":"Texte historique a verifier soigneusement."}}
        self.assertEqual(extract(event,"zoutiFrutti"),"Texte historique a verifier soigneusement.")
        self.assertIn("exécution bloquée",result_comment(event,"zoutiFrutti","",""))
    def test_unauthorised_ignored(self):
        event={"issue":{"title":"[RELIEUSE-LECTRICE] Essai","user":{"login":"autre"},"body":"Texte historique a verifier soigneusement."}}
        self.assertIsNone(extract(event,"zoutiFrutti"))
    def test_short_body_rejected(self):
        event={"issue":{"title":"[RELIEUSE-LECTRICE] Essai","user":{"login":"zoutiFrutti"},"body":"court"}}
        with self.assertRaises(ValueError):
            extract(event,"zoutiFrutti")
