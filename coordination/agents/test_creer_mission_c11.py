import unittest
from creer_mission_c11 import build

class CreateMissionTest(unittest.TestCase):
    def test_create(self):
        m=build("C11-USER-01",["https://example.org/a","https://example.org/a/"])
        self.assertEqual(len(m["missions"][0]["ressources"]),2)
    def test_reject_bad_url(self):
        with self.assertRaises(ValueError):
            build("C11-USER-01",["file:///etc/passwd"])
    def test_reject_empty(self):
        with self.assertRaises(ValueError):
            build("C11-USER-01",[])
