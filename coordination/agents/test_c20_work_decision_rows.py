"""C20: non-regression on append-only human decisions C18/C19.

Run: python3 -m unittest discover -s coordination/agents -p 'test_*.py'
No network, no mutations, no publishing.
"""
from pathlib import Path
import unittest

from verifier_referentiel_c09 import decision_rows

ROOT = Path(__file__).resolve().parents[2]
DECISIONS = ROOT / "coordination" / "REGISTRE_DECISIONS.md"


class C20WorkDecisionRowsTests(unittest.TestCase):
    def test_recent_work_decisions_conform_to_existing_registry_parser(self):
        text = DECISIONS.read_text(encoding="utf-8")
        ids, errors = decision_rows(text)
        for ident in ("D-WORK-C18-PRIVATE-01", "D-WORK-C19-LOCAL-01"):
            self.assertEqual(ids.count(ident), 1, ident)
            self.assertFalse(
                any(ident in error for error in errors),
                f"{ident}: {errors}",
            )
        self.assertIn("| ID | Décision directe | Source | Portée |", text)
        self.assertIn("propriétaire seul, zéro autre utilisateur", text)
        self.assertIn("aucune nouvelle publication ou fusion autorisée", text)

    def test_historical_decisions_are_not_replaced(self):
        text = DECISIONS.read_text(encoding="utf-8")
        ids, _ = decision_rows(text)
        for ident in ("D-C09-001", "D-C09-011", "D-WORK-C08-PILOT-01"):
            self.assertEqual(ids.count(ident), 1, ident)


if __name__ == "__main__":
    unittest.main()
