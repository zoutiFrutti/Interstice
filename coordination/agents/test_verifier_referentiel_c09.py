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

    def test_each_existing_decision_family_rejects_duplicates(self):
        for ident in ("D-C09-001", "D-C09-RULES-03", "D-WORK-C01-Q1-01"):
            with self.subTest(ident=ident):
                row = next(s for s in self.decisions.splitlines()
                           if s.startswith("| `"+ident+"`"))
                errors = self.result(decisions=self.decisions+"\n"+row)["erreurs"]
                self.assertTrue(any("dupliques" in e for e in errors))

    def test_each_existing_decision_family_requires_provenance(self):
        for ident, source in (("D-C09-001", "Mandat C09 reçu, 5 novembre 2026"),
                              ("D-WORK-C01-Q1-01", "Réponse au QCM 1 dans PASSERELLE-WORK-C01, 5 novembre 2026")):
            with self.subTest(ident=ident):
                self.assertTrue(self.result(decisions=self.decisions.replace(source, "", 1))["erreurs"])
        import re
        text = re.sub(r"\*\*Provenance :\*\*[^\n]*", "", self.decisions)
        self.assertTrue(any("Provenance manquante : D-C09-RULES" in e
                            for e in self.result(decisions=text)["erreurs"]))

    def test_new_work_decisions_are_counted_and_unknown_ids_rejected(self):
        from verifier_referentiel_c09 import decision_rows
        ids, errors = decision_rows(self.decisions)
        self.assertEqual(errors, [])
        self.assertIn("D-WORK-C08-PHASEC-01", ids)
        self.assertIn("D-WORK-C08-CI-01", ids)
        self.assertTrue(self.result(decisions=self.decisions.replace(
            "D-WORK-C08-CI-01", "D-WORK-malformed", 1))["erreurs"])

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


    def test_nine_state_contract_has_distinct_evidence_requirements(self):
        """Contrat documentaire : n'infere pas un evenement depuis un titre."""
        import re
        contract = (ROOT/"coordination/c03/orchestratrice/C09_CORRESPONDANCE_ETATS.md").read_text(encoding="utf-8")
        names = ("DEMANDEE", "ENVOYEE", "RECUE_ATTESTEE", "COMMENCEE",
                 "LIVRABLE_CANDIDAT", "VERIFIEE", "VALIDEE_HUMAINEMENT",
                 "INTEGREE", "PUBLIEE")
        rows = [line for line in contract.splitlines() if line.startswith("| `")]
        parsed = [re.match(r"\| `([A-Z_]+)`", line).group(1)
                  for line in rows if re.match(r"\| `([A-Z_]+)`", line)]
        self.assertEqual(parsed, list(names))
        for name in names:
            row = next(line for line in rows if line.startswith("| `"+name+"`"))
            cols = [part.strip() for part in row.strip("|").split("|")]
            self.assertGreaterEqual(len(cols), 4)
            self.assertTrue(cols[-1])
        self.assertIn("conserver `INCONNU`", contract)
        self.assertIn("`false` désigne une négation explicitement vérifiée", contract)

    def test_legacy_register_does_not_prove_eight_or_nine_states(self):
        """Le snapshot C03 n'est pas une preuve de merge ou de publication."""
        import json
        data = json.loads((ROOT/"coordination/c03/orchestratrice/registre_collectif_c03.json").read_text(encoding="utf-8"))
        self.assertGreaterEqual(len(data["missions"]), 12)
        self.assertGreaterEqual(len(data["roles"]), 19)
        seven = {"preparee", "transmise", "recue", "commencee", "livree",
                 "controle_effectue", "validee"}
        self.assertTrue(all(set(m["etat"]) == seven for m in data["missions"]))
        self.assertTrue(all(m["etat"]["recue"] is None for m in data["missions"]))
        proof_by_id = {p["id"]: p for p in data["preuves"]}
        for mission in data["missions"]:
            if mission["etat"]["validee"] is True:
                self.assertTrue(any(
                    proof_by_id.get(pid, {}).get("type") == "decision_zout"
                    for pid in mission["preuves_mission"]))
        self.assertFalse(any("integree" in m["etat"] or "publiee" in m["etat"]
                             for m in data["missions"]))

    def test_c03_read_only_nine_state_audit_is_conservative(self):
        import json
        from verifier_referentiel_c09 import audit_etats_c03
        source = json.loads((ROOT/"coordination/c03/orchestratrice/registre_collectif_c03.json").read_text(encoding="utf-8"))
        before = json.dumps(source, sort_keys=True)
        report = audit_etats_c03(source)
        self.assertEqual(len(report["missions"]), len(source["missions"]))
        self.assertTrue(report["lecture_seule"])
        for row in report["missions"]:
            self.assertEqual(len(row["dimensions"]), 9)
            self.assertEqual(row["dimensions"]["INTEGREE"]["statut_controle"], "INCONNU")
            self.assertEqual(row["dimensions"]["PUBLIEE"]["statut_controle"], "INCONNU")
            self.assertEqual(row["dimensions"]["VALIDEE_HUMAINEMENT"]["statut_controle"],
                             "NEGATION_SANS_PREUVE")
        self.assertEqual(before, json.dumps(source, sort_keys=True))

    def test_c03_read_only_audit_cannot_authenticate_a_fake_decision(self):
        import copy
        import json
        from verifier_referentiel_c09 import audit_etats_c03
        source = json.loads((ROOT/"coordination/c03/orchestratrice/registre_collectif_c03.json").read_text(encoding="utf-8"))
        mutated = copy.deepcopy(source)
        mutated["missions"][0]["etat"]["validee"] = True
        result = audit_etats_c03(mutated)
        self.assertEqual(result["missions"][0]["dimensions"]["VALIDEE_HUMAINEMENT"]["statut_controle"],
                         "DECLARATION_A_CONTROLER")

    def test_c03_observed_delivery_does_not_imply_received_or_published(self):
        import json
        from verifier_referentiel_c09 import audit_etats_c03
        data = json.loads((ROOT/"coordination/c03/orchestratrice/registre_collectif_c03.json").read_text(encoding="utf-8"))
        report = audit_etats_c03(data)
        own = next(row for row in report["missions"] if row["mission_id"] == "C03-ORC-03")
        self.assertEqual(own["dimensions"]["LIVRABLE_CANDIDAT"]["statut_controle"], "PIECE_CANDIDATE")
        self.assertEqual(own["dimensions"]["RECUE_ATTESTEE"]["statut_controle"], "INCONNU")
        self.assertEqual(own["dimensions"]["PUBLIEE"]["statut_controle"], "INCONNU")



if __name__ == "__main__":
    unittest.main()
