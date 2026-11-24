import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location("private_editorial", Path(__file__).resolve().parents[1] / "scripts/private_editorial.py")
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

class PrivateEditorial(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.store = m.Store(self.root / "store", {"BIO-009", "BIO-019"})
        self.body = ("Fictional test. No actual biography or private data. " * 5 + "<script>bad()</script>").encode()
        self.base = self.root / "base"
        (self.base / "lectures").mkdir(parents=True)
        (self.base / "lectures/index.html").write_text("<html><body>base</body></html>")
        (self.base / "unchanged.txt").write_text("original")
    def approve(self, sha):
        self.store.approve("BIO-009", sha, "synthetic-decision", True, True, True)
    def test_unapproved_and_held(self):
        sha = self.store.stage("BIO-009", "Fiction", self.body)
        with self.assertRaises(ValueError):
            self.store.activate("BIO-009", sha, None, "test")
        with self.assertRaises(ValueError):
            self.store.approve("BIO-009", sha, "test", False, True, True)
        with self.assertRaises(ValueError):
            self.store.stage("BIO-019", "Held", self.body)
        with self.assertRaises(ValueError):
            m.build(self.store, self.base, self.root / "out")
        self.assertFalse((self.root / "out").exists())
    def test_versions_rollback_and_cas(self):
        a = self.store.stage("BIO-009", "Fiction", self.body)
        self.assertEqual(a, self.store.stage("BIO-009", "Fiction", self.body))
        self.approve(a)
        self.store.activate("BIO-009", a, None, "test")
        b = self.store.stage("BIO-009", "Fiction V2", self.body)
        with self.assertRaises(ValueError):
            self.store.activate("BIO-009", b, a, "test")
        self.approve(b)
        with self.assertRaises(ValueError):
            self.store.activate("BIO-009", b, None, "test")
        self.store.activate("BIO-009", b, a, "test")
        self.store.activate("BIO-009", a, b, "rollback")
        self.assertEqual(self.store.status()["BIO-009"]["active"], a)
    def test_build_private_and_escape(self):
        sha = self.store.stage("BIO-009", "Fiction", self.body)
        self.approve(sha)
        self.store.activate("BIO-009", sha, None, "test")
        out = self.root / "out"
        self.assertEqual(m.build(self.store, self.base, out), 1)
        self.assertIn("&lt;script&gt;", (out / "publication-privee/BIO-009.html").read_text())
        self.assertNotIn("<script>", (out / "publication-privee/BIO-009.html").read_text())
        self.assertIn("publication-privee", (out / "lectures/index.html").read_text())
        self.assertEqual((self.base / "lectures/index.html").read_text(), "<html><body>base</body></html>")
        self.assertEqual((out / "unchanged.txt").read_text(), "original")
        self.assertFalse(json.loads((out / "publication-privee/manifest.json").read_text())["deployed"])
        with self.assertRaises(ValueError):
            m.build(self.store, self.base, out)
    def test_integrity_tamper_and_checkout_boundary(self):
        sha = self.store.stage("BIO-009", "Fiction", self.body)
        self.approve(sha)
        self.store.activate("BIO-009", sha, None, "test")
        with self.store.state(True) as data:
            data["articles"]["BIO-009"]["versions"][sha]["content"]["body"] += "tampered"
        with self.assertRaises(ValueError):
            m.build(self.store, self.base, self.root / "out")
        with self.assertRaises(ValueError):
            m.outside(m.REPO / "private")
    def test_real_catalog_ids(self):
        ids = m.catalog()
        self.assertTrue({"BIO-009", "BIO-010", "BIO-012", "BIO-014", "ASSO-008", "EXP-001"} <= ids)

if __name__ == "__main__":
    unittest.main()
