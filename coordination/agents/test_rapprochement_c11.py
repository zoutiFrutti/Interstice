import unittest
from rapprochement_c11 import reconcile

MESSAGES=[{"id":"C10-MSG-001","etat_documentaire":"ÉMISE"}]
SHA="a"*40
class ReconciliationTest(unittest.TestCase):
    def test_no_evidence(self):
        result=reconcile(MESSAGES,[])
        self.assertEqual(result["total_accuses_verifies"],0)
        self.assertFalse(result["courriers"][0]["accuse_verifie"])
    def test_unverified_not_counted(self):
        result=reconcile(MESSAGES,[{"message_id":"C10-MSG-001","commit_sha":SHA,"branch":"research/a","preuve_verifiee":False}])
        self.assertEqual(result["total_accuses_verifies"],0)
        self.assertEqual(len(result["exceptions"]),1)
    def test_verified_receipt(self):
        result=reconcile(MESSAGES,[{"message_id":"C10-MSG-001","commit_sha":SHA,"branch":"research/a","preuve_verifiee":True}])
        self.assertTrue(result["courriers"][0]["accuse_verifie"])
    def test_duplicate_receipts(self):
        item={"message_id":"C10-MSG-001","commit_sha":SHA,"branch":"research/a","preuve_verifiee":True}
        with self.assertRaises(ValueError):
            reconcile(MESSAGES,[item,item])
