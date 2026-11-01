import unittest
from demande_relieuse_c11 import normalize, render

class DemandeTest(unittest.TestCase):
    def test_chat_request(self):
        mission=normalize({"id":"C11-BIO-009","objectif":"Verifier les provenances de BIO-009","ateliers":["biographe","lectrice"]})
        self.assertEqual(mission["execution_ateliers"],"NON_DECLENCHEE")
        self.assertIn("n'ont pas ete executes",render(mission))
    def test_refuse_publication(self):
        with self.assertRaises(ValueError):
            normalize({"id":"C11-BIO-009","objectif":"Publier un article","ateliers":["relieuse"],"publication":True})
    def test_unknown_role(self):
        with self.assertRaises(ValueError):
            normalize({"id":"C11-BIO-009","objectif":"Faire une recherche","ateliers":["robot-inconnu"]})
