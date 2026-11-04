import copy
import json
import unittest
from pathlib import Path
from reunification_c07 import start, decide, verify

ROOT = Path(__file__).resolve().parent

class C07Tests(unittest.TestCase):
    def setUp(self):
        self.mission = json.loads((ROOT/'exemple_mission_c14.json').read_text())
        self.registry = json.loads((ROOT.parent/'c03/orchestratrice/registre_collectif_c03.json').read_text())

    def test_full_execution_validation_resume(self):
        state = start(self.mission, self.registry)
        self.assertEqual(state['report']['bilan']['terminees_deterministes'], 3)
        self.assertEqual(state['status'], 'ATTENTE_VALIDATION')
        state = decide(state, 'reprendre', 'test-humain-simule', state['report_hash'])
        verify(state)
        self.assertEqual(state['status'], 'TERMINE_TECHNIQUE')
        self.assertEqual(len(state['artifacts']), 1)
        self.assertFalse(state['editorial_approval'])
        self.assertFalse(state['external_ai_called'])
        with self.assertRaises(ValueError):
            decide(state, 'reprendre', 'test', state['report_hash'])

    def test_stale_or_modified_result_refused(self):
        state = start(self.mission, self.registry)
        with self.assertRaises(ValueError):
            decide(state, 'reprendre', 'test', 'old')
        state['report']['mode'] = 'modifie'
        with self.assertRaises(ValueError):
            decide(state, 'reprendre', 'test', state['report_hash'])

    def test_stop_and_no_unknown_worker(self):
        with self.assertRaises(ValueError):
            start(self.mission, self.registry, stopped=True)
        state = start(self.mission, self.registry)
        with self.assertRaises(ValueError):
            decide(state, 'reprendre', 'test', state['report_hash'], stopped=True)
        self.mission['taches'][0]['atelier'] = 'worker-inconnu'
        with self.assertRaises(ValueError):
            start(self.mission, self.registry)

    def test_review_stop_and_tampering(self):
        for decision, expected in [('revoir', 'A_REVOIR'), ('arreter', 'ARRETEE')]:
            state = start(self.mission, self.registry)
            self.assertEqual(decide(state, decision, 'test', state['report_hash'])['status'], expected)
        state = start(self.mission, self.registry)
        state['history'][0]['action'] = 'fausse'
        with self.assertRaises(ValueError):
            verify(state)
