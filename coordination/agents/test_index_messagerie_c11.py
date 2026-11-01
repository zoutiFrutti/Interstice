import unittest
from index_messagerie_c11 import parse_index, render

class IndexTest(unittest.TestCase):
    def test_issued_is_not_received(self):
        rows = parse_index("| C10-MSG-001 | Relieuse | Lectrice | Test | P0 | ÉMISE | Vérifier |")
        self.assertEqual(rows[0]["etat_documentaire"], "ÉMISE")
        self.assertFalse(rows[0]["reception_verifiee"])
        self.assertIn("Non", render(rows,"coordination/test"))
    def test_duplicate_rejected(self):
        row="| C10-MSG-001 | Relieuse | Lectrice | Test | P0 | ÉMISE | Vérifier |"
        with self.assertRaises(ValueError):
            parse_index(row+"\n"+row)
