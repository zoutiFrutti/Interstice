import copy
import json
import unittest
from pathlib import Path

from index_collectif_c03 import build, check, render

SOURCE = Path(__file__).resolve().parent.parent / "c03" / "orchestratrice" / "registre_collectif_c03.json"


class CollectifTests(unittest.TestCase):
    def setUp(self):
        self.data = json.loads(SOURCE.read_text(encoding="utf-8"))

    def test_all_missions_roles_and_no_false_receipts(self):
        result = build(self.data)
        self.assertEqual(len(result["roles"]), 19)
        self.assertEqual(len(result["missions"]), 12)
        self.assertTrue(all(m["etat"]["recue"] is None for m in result["missions"]))
        self.assertFalse(any(m["etat"]["validee"] is True for m in result["missions"]))
        self.assertIn("C03-TECH-02", render(result))

    def test_own_report_is_a_cited_delivery_not_an_ack(self):
        result = build(self.data)
        own = next(m for m in result["missions"] if m["id"] == "C03-ORC-03")
        self.assertTrue(own["etat"]["livree"])
        self.assertIsNone(own["etat"]["recue"])
        self.assertFalse(own["etat"]["validee"])
        self.assertEqual(own["preuves_mission"], ["EV-ORC-03"])

    def test_old_report_never_completes_new_mission(self):
        result = build(self.data)
        arc = next(m for m in result["missions"] if m["id"] == "C03-ARC-03")
        self.assertEqual(arc["preuves_anterieures"], ["EV-ARC-02"])
        self.assertIsNone(arc["etat"]["livree"])
        self.assertIsNone(arc["etat"]["recue"])

    def test_cyclic_coordination_is_warning_not_executor(self):
        self.assertTrue(build(self.data)["boucles_consultation"])

    def test_duplicate_mission_rejected(self):
        d = copy.deepcopy(self.data)
        d["missions"].append(copy.deepcopy(d["missions"][0]))
        with self.assertRaisesRegex(ValueError, "duplique"):
            check(d)

    def test_unknown_role_rejected(self):
        d = copy.deepcopy(self.data)
        d["missions"][0]["ateliers"] = ["faux-atelier"]
        with self.assertRaisesRegex(ValueError, "Atelier"):
            check(d)

    def test_receipt_requires_specific_evidence(self):
        d = copy.deepcopy(self.data)
        d["missions"][0]["etat"]["recue"] = True
        with self.assertRaisesRegex(ValueError, "Reception"):
            check(d)

    def test_validation_requires_zout_decision(self):
        d = copy.deepcopy(self.data)
        d["missions"][0]["etat"]["validee"] = True
        with self.assertRaisesRegex(ValueError, "Validation"):
            check(d)

    def test_staleness_detected_against_new_observation(self):
        d = copy.deepcopy(self.data)
        p = d["preuves"][0]
        d["comparaisons_sha"] = [{
            "branch": p["branch"], "path": p["path"],
            "blob_sha": "a" * 40, "verified_at": "2026-11-03"}]
        result = build(d)
        self.assertIn(p["id"], result["preuves_a_recontroler"])

    def test_matching_observation_is_dated_not_realtime(self):
        d = copy.deepcopy(self.data)
        p = d["preuves"][0]
        d["comparaisons_sha"] = [{
            "branch": p["branch"], "path": p["path"],
            "blob_sha": p["blob_sha"], "verified_at": "2026-11-03"}]
        result = build(d)
        role = next(x for x in result["roles"] if x["role"] == p["atelier"])
        self.assertEqual(role["preuves"][0]["comparaison_sha"], "IDENTIQUE_AU_RELEVE")
        self.assertIn("pas GitHub temps reel", " ".join(result["avertissements"]))

    def test_no_mission_proof_from_previous_report(self):
        d = copy.deepcopy(self.data)
        d["missions"][3]["etat"]["livree"] = True
        with self.assertRaisesRegex(ValueError, "Livraison"):
            check(d)

    def test_unknown_evidence_rejected(self):
        d = copy.deepcopy(self.data)
        d["missions"][0]["preuves_mission"] = ["EV-INEXISTANT"]
        with self.assertRaisesRegex(ValueError, "introuvable"):
            check(d)


if __name__ == "__main__":
    unittest.main()
