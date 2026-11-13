import copy
import unittest
from verify_checkpoint_c07 import verify_source, WORKFLOW

class CheckpointSourceTests(unittest.TestCase):
    def setUp(self):
        self.run = {'id': 10, 'repository': {'full_name': 'owner/repo'}, 'head_repository': {'full_name': 'owner/repo'},
                    'event': 'workflow_dispatch', 'path': WORKFLOW, 'status': 'completed', 'conclusion': 'success',
                    'head_sha': 'a'*40, 'head_branch': 'candidate', 'actor': {'login': 'owner'}, 'triggering_actor': {'login': 'owner'}}
        self.artifacts = {'artifacts': [{'id': 20, 'name': 'c07-checkpoint', 'expired': False,
                                       'workflow_run': {'id': 10, 'head_sha': 'a'*40}}]}
    def check(self):
        return verify_source(self.run, self.artifacts, 'owner/repo', 'candidate', 'a'*40, 'owner', '10', '11')
    def test_valid_owner_checkpoint(self):
        self.assertEqual(self.check(), 20)
    def test_pr_other_workflow_branch_commit_or_failure_refused(self):
        original = copy.deepcopy(self.run)
        for key, value in [('event', 'pull_request'), ('path', 'other.yml'), ('head_sha', 'b'*40),
                           ('head_branch', 'main'), ('conclusion', 'failure')]:
            self.run = copy.deepcopy(original);self.run[key] = value
            with self.assertRaises(ValueError):self.check()
    def test_actor_fork_and_rerun_actor_refused(self):
        for key, value in [('actor', {'login': 'stranger'}), ('triggering_actor', {'login': 'stranger'}),
                           ('head_repository', {'full_name': 'fork/repo'})]:
            original = copy.deepcopy(self.run);self.run[key] = value
            with self.assertRaises(ValueError):self.check()
            self.run = original
    def test_expired_ambiguous_or_stale_artifact_refused(self):
        original = copy.deepcopy(self.artifacts)
        for mutate in [lambda a:a['artifacts'][0].update(expired=True),
                       lambda a:a['artifacts'].append(copy.deepcopy(a['artifacts'][0])),
                       lambda a:a['artifacts'][0]['workflow_run'].update(head_sha='b'*40)]:
            self.artifacts = copy.deepcopy(original);mutate(self.artifacts)
            with self.assertRaises(ValueError):self.check()
