import unittest
from mission_queue_c11 import process

class QueueTest(unittest.TestCase):
    def test_safe_queue(self):
        report = process({"missions":[
            {"id":"a","type":"audit_references","ressources":[]},
            {"id":"b","type":"publication","publication":True}]})
        self.assertEqual([x["statut"] for x in report["resultats"]], ["SIMULEE","REFUSEE"])
        self.assertEqual(report["depense_api_eur"], 0)
    def test_duplicate_id(self):
        with self.assertRaises(ValueError):
            process({"missions":[{"id":"a"},{"id":"a"}]})
    def test_refuse_external_write(self):
        result = process({"missions":[{"id":"a","type":"audit_references","ecriture":True}]})
        self.assertEqual(result["resultats"][0]["statut"],"REFUSEE")
