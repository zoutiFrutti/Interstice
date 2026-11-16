"""Repeatable, explicitly synthetic approval test. No real human approval inferred."""
import json
import sys
from pathlib import Path
from reunification_c07 import start, decide, save, verify

root = Path(__file__).resolve().parents[2]
mission = json.loads((root/'coordination/agents/exemple_mission_c14.json').read_text())
mission['mission_id'] = 'C07-DEMO-001'
registry = json.loads((root/'coordination/c03/orchestratrice/registre_collectif_c03.json').read_text())
state = start(mission, registry)
state['demonstration'] = True
state['human_decision_simulated'] = True
state = decide(state, 'reprendre', 'TEST_SYNTHETIQUE_PAS_UN_VISA_ZOUT', state['report_hash'])
verify(state)
path = Path(sys.argv[1]) if len(sys.argv)>1 else root/'artifacts/c07/demo.json'
save(path, state)
print(json.dumps({'path': str(path), 'status': state['status'], 'tasks': state['report']['bilan'],
                  'human_decision_simulated': True, 'external_ai_called': False}))
