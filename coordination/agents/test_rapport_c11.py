import unittest
from rapport_c11 import render

class RapportTest(unittest.TestCase):
    def test_markdown(self):
        report = {"statut":"DEMONSTRATION_NON_IA","mission":"TEST","ateliers":[
            {"atelier":"mediatheque","resultat":{"doublons_url_exacts":[{"premiere":1,"seconde":2,"url":"https://example.org"}]}},
            {"atelier":"lectrice","resultat":{"references_sans_url":[{"ligne":3,"titre":"Test","probleme":"URL absente"}]}},
            {"atelier":"relieuse","resultat":{"ressources_lues":3,"doublons":1,"a_verifier":1}}]}
        text = render(report)
        self.assertIn("References 1 et 2", text)
        self.assertIn("Reference 3", text)
        self.assertIn("pas des agents IA", text)
    def test_reject_non_demo(self):
        with self.assertRaises(ValueError):
            render({"statut":"PUBLIE"})
