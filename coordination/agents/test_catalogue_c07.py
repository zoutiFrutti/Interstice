import copy
import json
import unittest
import tempfile
import shutil
from pathlib import Path
from catalogue_c07 import examine, documentary_inventory, DOCUMENTARY_PATHS
from reunification_c07 import verify

ROOT = Path(__file__).resolve().parents[2]

class CatalogueTests(unittest.TestCase):
    def setUp(self):
        self.raw = (ROOT/'coordination/v2/work-c02-01/data/resources.json').read_bytes()
        self.registry = json.loads((ROOT/'coordination/c03/orchestratrice/registre_collectif_c03.json').read_text())
    def test_real_catalogue_covered_once_with_no_approval(self):
        summary, states = examine(self.raw, self.registry)
        expected = [r['id'] for r in json.loads(self.raw)['resources']]
        actual = [ident for state in states for ident in state['resource_ids']]
        self.assertEqual(expected, actual)
        self.assertEqual(summary['resources_checked'], 219)
        self.assertEqual(summary['batches'], 8)
        self.assertEqual(summary['tasks_completed'], 24)
        self.assertEqual(summary['canonical_url_present']+summary['canonical_url_absent'], 219)
        for state in states:
            verify(state)
            self.assertFalse(state['demonstration'])
            self.assertFalse(state['human_decision_simulated'])
            self.assertEqual(state['status'], 'ATTENTE_VALIDATION')
            self.assertFalse(state['editorial_approval'])
    def test_duplicates_across_batches_are_probable_only(self):
        entries = [{'id': 'OBJ-'+str(i), 'canonical_url': None} for i in range(31)]
        entries[0]['canonical_url'] = 'https://example.org/a#one'
        entries[-1]['canonical_url'] = 'https://EXAMPLE.org/a/#two'
        summary, _ = examine(json.dumps({'resources': entries}).encode(), self.registry)
        self.assertEqual(summary['global_probable_duplicate_groups'], [['OBJ-0','OBJ-30']])
        self.assertFalse(summary['editorial_approval'])
    def test_invalid_metadata_and_duplicate_ids_rejected(self):
        for entries in [[{'id':'one'},{'id':'one'}], [{'id':'one','canonical_url':42}]]:
            with self.assertRaises(ValueError):examine(json.dumps({'resources':entries}).encode(), self.registry)

    def test_documentary_inventory_keeps_separate_reserves_and_human_choices(self):
        result = documentary_inventory(ROOT)
        self.assertEqual((result['thematic_objections'],result['transverse_reserves']), (36,6))
        self.assertEqual((result['work_reserves'],result['documentary_relations'],result['fn_notices']), (30,19,71))
        self.assertEqual((result['parcours'],result['steps']), (7,29))
        self.assertEqual(result['retained_with_reservations'],9)
        self.assertEqual(result['not_selected_in_review'],1)
        self.assertEqual(result['new_publication_authorizations'],0)
        self.assertTrue(result['par005_blocked'])
        self.assertEqual(len(result['sources']),8)
        self.assertEqual(result['held_resources'],9)

    def test_documentary_inventory_refuses_lost_notice_or_fake_publication(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for path in DOCUMENTARY_PATHS.values():
                target = root/path;target.parent.mkdir(parents=True,exist_ok=True)
                shutil.copyfile(ROOT/path,target)
            resource = root/DOCUMENTARY_PATHS['resources']
            original = json.loads(resource.read_text())
            missing = copy.deepcopy(original)
            missing['resources'] = [r for r in missing['resources'] if r['id'] != 'FN-048']
            resource.write_text(json.dumps(missing))
            with self.assertRaises(ValueError):documentary_inventory(root)
            resource.write_text(json.dumps(original))
            lot = root/DOCUMENTARY_PATHS['commune01']
            fake = json.loads(lot.read_text());fake['publication_authorized'] = True
            lot.write_text(json.dumps(fake))
            with self.assertRaises(ValueError):documentary_inventory(root)
