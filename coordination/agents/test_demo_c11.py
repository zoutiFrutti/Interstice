import unittest
from demo_c11 import run

class DemoTest(unittest.TestCase):
    def test_report(self):
        mission = {"id":"test","type":"audit_references","ressources":[
            {"titre":"A","url":"https://example.org/a"},
            {"titre":"A2","url":"https://example.org/a/"},
            {"titre":"B","url":""}]}
        report = run(mission)
        self.assertEqual(report["ateliers"][0]["resultat"]["doublons_url_exacts"][0]["seconde"], 2)
        self.assertEqual(report["ateliers"][1]["resultat"]["references_sans_url"][0]["ligne"], 3)
        self.assertEqual(report["statut"], "DEMONSTRATION_NON_IA")

    def test_reject_other_tasks(self):
        with self.assertRaises(ValueError):
            run({"type":"publication"})

if __name__ == "__main__":
    unittest.main()
