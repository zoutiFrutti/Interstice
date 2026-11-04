#!/usr/bin/env python3
"""Precontrole local et sans dependances du pilote GH-AW (PAS un compilateur)."""
from pathlib import Path
import re
import sys
import unittest

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / ".github/workflows/fn-observatrice-pilote.md"
C12 = ROOT / ".github/workflows/pont-relieuse-lectrice-c12.yml"


def get_frontmatter():
    source = SOURCE.read_text(encoding="utf-8")
    if not source.startswith("---\n") or "\n---\n" not in source[4:]:
        raise ValueError("Frontmatter YAML absent")
    return source.split("---", 2)[1]


class PilotStaticSafety(unittest.TestCase):
    """Verification volontairement stricte et limitee au fichier source."""

    @classmethod
    def setUpClass(cls):
        cls.front = get_frontmatter()

    def test_declenchement_uniquement_manuel(self):
        self.assertIn("\non:\n", self.front)
        on_block = self.front.split("\non:\n", 1)[1].split("\nif:", 1)[0]
        self.assertEqual(on_block.strip(), "workflow_dispatch:")

    def test_opt_in_et_auteur(self):
        self.assertIn("if: vars.FN_OBSERVATRICE_ENABLED == 'true' && github.actor == github.repository_owner", self.front)

    def test_lecture_seule(self):
        for scope in ("contents", "issues", "pull-requests", "actions"):
            self.assertRegex(self.front, rf"(?m)^  {re.escape(scope)}: read$")
        self.assertNotRegex(self.front, r"(?m)^\s*[\w-]+:\s*write\s*$")
        self.assertRegex(self.front, r"(?m)^  bash: false$")
        self.assertRegex(self.front, r"(?m)^  cli-proxy: false$")
        self.assertRegex(self.front, r"(?m)^    allowed-repos: current$")

    def test_pas_de_safe_output_public(self):
        self.assertRegex(self.front, r"(?m)^safe-outputs:\s*\n  report-failed-jobs: false$")
        for key in ("create-issue", "add-comment", "create-pull-request",
                    "push-to-pull-request-branch", "upload-assets"):
            self.assertNotRegex(self.front, rf"(?m)^  {key}:")

    def test_limites_et_strict(self):
        for expected in ("engine: gemini", "strict: true", "timeout-minutes: 8",
                         "max-turns: 6", "max-ai-credits: 500"):
            self.assertIn(expected, self.front)


if __name__ == "__main__":
    result = unittest.TextTestRunner(verbosity=2).run(
        unittest.defaultTestLoader.loadTestsFromTestCase(PilotStaticSafety))
    if C12.exists():
        c12 = C12.read_text(encoding="utf-8")
        if "LECTRICE_AI_ENABLED" not in c12:
            print("ALERTE P0 INDEPENDANTE : le pont C12 sur cette branche n'a pas d'opt-in explicite.", file=sys.stderr)
            print("Ce controle peut reussir sans que C12 soit securise.", file=sys.stderr)
    print("NOTA : controle statique seulement, GH-AW doit encore etre compile et valide.")
    sys.exit(0 if result.wasSuccessful() else 1)
