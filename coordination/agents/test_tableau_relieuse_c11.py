import unittest
from tableau_relieuse_c11 import render

class TableauTest(unittest.TestCase):
    def test_rows(self):
        text = render({"statut":"DEMONSTRATION_NON_IA","resultats":[
            {"id":"C11-001","statut":"SIMULEE","rapport":{"ateliers":[{"atelier":"mediatheque"},{"atelier":"lectrice"}]}},
            {"id":"C11-002","statut":"REFUSEE"}]})
        self.assertIn("C11-001 | SIMULEE", text)
        self.assertIn("C11-002 | REFUSEE", text)
    def test_refuse_non_demo(self):
        with self.assertRaises(ValueError):
            render({"statut":"PUBLICATION","resultats":[]})
