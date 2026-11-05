"""Reproductibilite C09, uniquement sur des textes publics du depot."""
import unittest
from pathlib import Path
from verifier_referentiel_c09 import verify

ROOT = Path(__file__).resolve().parents[2]
FILES = (
    "coordination/REFERENTIEL_VIVANT.md",
    "coordination/REGISTRE_DECISIONS.md",
    "coordination/c03/orchestratrice/ANNUAIRE_SYNCHRONISATION_C09.md",
)


class C09ReferenceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.reference, cls.decisions, cls.directory = [
            (ROOT/p).read_text(encoding="utf-8") for p in FILES
        ]

    def result(self, **changed):
        return verify(changed.get("reference", self.reference),
                      changed.get("decisions", self.decisions),
                      changed.get("directory", self.directory),
                      root=changed.get("root", ROOT))

    def test_current_reference(self):
        result = self.result()
        self.assertEqual(result["erreurs"], [])
        self.assertEqual(result["portes"], 4)
        self.assertGreaterEqual(result["roles"], 19)
        self.assertEqual(result["etats"], 9)
        self.assertGreaterEqual(result["decisions"], 17)

    def test_wrong_door_is_rejected(self):
        text = self.reference.replace("Haut gauche | **Faire Ensemble**",
                                      "Haut gauche | **Entraide**", 1)
        self.assertTrue(self.result(reference=text)["erreurs"])

    def test_wrong_door_position_is_rejected(self):
        text = self.reference.replace("Haut droite | **Encyclopédie des communs**",
                                      "Haut droite | **Médiathèque**", 1)
        self.assertTrue(self.result(reference=text)["erreurs"])

    def test_atlas_remains_inside_encyclopedie(self):
        text = self.reference.replace("Atlas des communs", "Carte autonome")
        self.assertTrue(self.result(reference=text)["erreurs"])

    def test_additional_role_does_not_break_future_cycles(self):
        extra = "| "+chr(96)+"futur-atelier"+chr(96)+" | "+chr(96)+"coordination/JOURNAL_COMMUN.md"+chr(96)+" | **non créé** | Rôle fictif uniquement pour test de structure |"
        self.assertEqual(self.result(directory=self.directory+"\n"+extra)["erreurs"], [])

    def test_missing_status_is_rejected(self):
        text = self.reference.replace("RECUE_ATTESTEE", "RECUE_PRESUMEE", 1)
        self.assertTrue(self.result(reference=text)["erreurs"])

    def test_missing_par005_block_is_rejected(self):
        text = self.reference.replace("**PAR-005 : BLOQUÉ**", "PAR-005 : disponible", 1)
        self.assertTrue(self.result(reference=text)["erreurs"])

    def test_duplicate_decision_is_rejected(self):
        lines = self.decisions.splitlines()
        row = next(s for s in lines if s.startswith("| "+chr(96)+"D-C09-001"))
        text = self.decisions + "\n" + row
        self.assertTrue(self.result(decisions=text)["erreurs"])

    def test_duplicate_role_is_rejected(self):
        row = next(s for s in self.directory.splitlines()
                   if s.startswith("| "+chr(96)+"lectrice"+chr(96)))
        self.assertTrue(self.result(directory=self.directory+"\n"+row)["erreurs"])

    def test_missing_journal_is_rejected(self):
        import tempfile
        with tempfile.TemporaryDirectory() as folder:
            result = self.result(root=Path(folder))
            self.assertTrue(any("absent" in x for x in result["erreurs"]))

    def test_existing_historical_aliases_are_not_false_positives(self):
        self.assertEqual(self.result()["erreurs"], [])
        self.assertIn("Entraide", self.reference)
        self.assertIn("Wiki", self.reference)


if __name__ == "__main__":
    unittest.main()
