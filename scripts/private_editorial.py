#!/usr/bin/env python3
"""Owner-only editorial store and static preview builder. Never deploys."""
import argparse
import contextlib
import datetime
import fcntl
import hashlib
import html
import json
import os
from pathlib import Path
import re
import shutil
import tempfile
import urllib.request
from private_editorial_render import validate_markdown, render_markdown

REPO = Path(__file__).resolve().parents[1]
HELD = {"FN-018", "BIO-019", "BIO-021", "DROIT-001", "DROIT-002", "FN-022", "FN-048", "FN-038", "FN-057"}
ID = re.compile(r"[A-Z]+-[0-9]{3}")
SHA = re.compile(r"[0-9a-f]{64}")
MAX_BYTES = 2_000_000

def require(condition, message):
    if not condition:
        raise ValueError(message)

def outside(path):
    path = Path(path).expanduser().resolve()
    require(path != REPO and REPO not in path.parents, "Private data must stay outside the repository")
    require(not any((p / ".git").exists() for p in [path, *path.parents]), "No private data inside a Git checkout")
    return path

def digest(data):
    return hashlib.sha256(data).hexdigest()

def canonical(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":")).encode("utf-8")

def now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()

def catalog():
    resources = json.loads((REPO / "coordination/v2/work-c02-01/data/resources.json").read_text(encoding="utf-8"))["resources"]
    return {r["id"] for r in resources}

def normalize(text):
    text = text.decode("utf-8-sig").replace("\r\n", "\n").replace("\r", "\n").strip()
    require(100 <= len(text) and len(text.encode("utf-8")) <= MAX_BYTES, "Empty, incomplete or oversized text")
    return text + "\n"

def import_google(doc_id, source_format="text"):
    require(re.fullmatch(r"[A-Za-z0-9_-]{10,200}", doc_id), "Invalid document ID")
    token = os.environ.get("INTERSTICE_DOCS_TOKEN")
    require(token, "Provide a short-lived read-only Google access token in INTERSTICE_DOCS_TOKEN")
    # Drive exports text or restricted Markdown. No tokens or source content in public logs.
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *args, **kwargs):
            return None
    mime = "text%2Fmarkdown" if source_format == "markdown" else "text%2Fplain"
    url = "https://www.googleapis.com/drive/v3/files/" + doc_id + "/export?mimeType=" + mime
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + token})
    with urllib.request.build_opener(NoRedirect()).open(req, timeout=30) as response:
        data = response.read(MAX_BYTES + 1)
    return data

def atomic_json(path, value):
    fd, name = tempfile.mkstemp(dir=path.parent)
    try:
        with os.fdopen(fd, "wb") as stream:
            stream.write(canonical(value) + b"\n")
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(name, path)
    finally:
        if os.path.exists(name):
            os.unlink(name)

class Store:
    def __init__(self, path, allowed=None):
        self.root = outside(path)
        self.root.mkdir(mode=0o700, parents=True, exist_ok=True)
        require(self.root.stat().st_mode & 0o077 == 0, "Store permissions must be 0700")
        self.path = self.root / "registry.json"
        self.lock = self.root / ".lock"
        self.allowed = catalog() if allowed is None else set(allowed)

    @contextlib.contextmanager
    def state(self, write=False):
        for path in (self.path, self.lock):
            require(not path.is_symlink(), "Registry symlinks forbidden")
        fd = os.open(self.lock, os.O_RDWR | os.O_CREAT | os.O_NOFOLLOW, 0o600)
        with os.fdopen(fd, "r+") as lock:
            fcntl.flock(lock, fcntl.LOCK_EX)
            data = json.loads(self.path.read_text(encoding="utf-8")) if self.path.exists() else {"schema": 1, "articles": {}, "events": []}
            require(data.get("schema") == 1, "Unsupported registry schema")
            yield data
            if write:
                atomic_json(self.path, data)

    def check_id(self, item):
        require(ID.fullmatch(item) and item in self.allowed and item not in HELD, "Unknown or held editorial ID")

    def stage(self, item, title, text, source_format="text"):
        self.check_id(item)
        title = title.strip()
        require(1 <= len(title) <= 300, "Title required")
        body = normalize(text)
        require(source_format in ("text", "markdown"), "Unsupported source format")
        version = {"id": item, "title": title, "body": body}
        if source_format == "markdown":
            validate_markdown(body, title)
            version["format"] = "markdown"
        sha = digest(canonical(version))
        with self.state(True) as data:
            article = data["articles"].setdefault(item, {"versions": {}, "active": None})
            if sha not in article["versions"]:
                article["versions"][sha] = {"content": version, "approval": None, "staged_at": now()}
                data["events"].append({"event": "stage", "id": item, "sha": sha, "at": now()})
        return sha

    def approve(self, item, sha, decision, rights, privacy, second_read):
        self.check_id(item)
        require(SHA.fullmatch(sha) and decision.strip() and rights and privacy and second_read,
                "Exact version, decision reference, second reading, rights and privacy checks required")
        with self.state(True) as data:
            entry = data["articles"][item]["versions"][sha]
            require(digest(canonical(entry["content"])) == sha, "Content integrity failure")
            require(entry["approval"] is None, "Approval already recorded; stage new version for edits")
            entry["approval"] = {"scope": "owner_private", "decision": decision, "rights": True,
                                 "privacy": True, "second_read": True, "at": now()}
            data["events"].append({"event": "approve", "id": item, "sha": sha, "at": now()})

    def activate(self, item, sha, expected, decision):
        self.check_id(item)
        require(SHA.fullmatch(sha) and decision.strip(), "Exact SHA and activation decision required")
        with self.state(True) as data:
            article = data["articles"][item]
            require(article["active"] == expected, "Active version changed; inspect registry before retry")
            entry = article["versions"][sha]
            require(digest(canonical(entry["content"])) == sha, "Content integrity failure")
            approval = entry["approval"]
            require(approval and approval["scope"] == "owner_private" and all(approval[k] for k in ("rights", "privacy", "second_read")), "Version not approved for private publication")
            article["active"] = sha
            data["events"].append({"event": "activate", "id": item, "sha": sha, "previous": expected, "decision": decision, "at": now()})

    def active_versions(self):
        with self.state() as data:
            result = []
            for item, article in sorted(data["articles"].items()):
                sha = article["active"]
                if sha is None:
                    continue
                self.check_id(item)
                entry = article["versions"][sha]
                approval = entry["approval"]
                require(digest(canonical(entry["content"])) == sha and approval and approval["scope"] == "owner_private" and all(approval[k] for k in ("rights", "privacy", "second_read")), "Active version fails approval/integrity")
                result.append((sha, entry["content"]))
            return result

    def status(self):
        with self.state() as data:
            return {item: {"active": article["active"], "versions": [{"sha": sha, "approved": bool(v["approval"])} for sha, v in article["versions"].items()]} for item, article in data["articles"].items()}

def page(title, body):
    return '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="no-referrer"><title>' + html.escape(title) + ' · Interstice</title><link rel="stylesheet" href="../assets/nav-01/reading.css"></head><body><header><a href="../lectures/index.html">Retour aux lectures</a> · <a href="index.html">Publications privées</a></header><main id="lecture">' + body + '</main></body></html>\n'

def build(store, base, output):
    base, output = outside(base), outside(output)
    require(base.is_dir() and not output.exists() and base != output and base not in output.parents and output not in base.parents, "Distinct existing base and new output directory required")
    require(store.root != output and store.root not in output.parents and output not in store.root.parents and store.root != base and store.root not in base.parents and base not in store.root.parents, "Registry must be separate from both preview directories")
    require((base / "lectures/index.html").is_file() and not (base / "publication-privee").exists(), "Expected clean private navigation preview")
    for p in base.rglob("*"):
        require(not p.is_symlink() and (p.is_dir() or p.is_file()), "Unsafe preview entry")
    versions = store.active_versions()
    require(versions, "No approved active versions")
    output.parent.mkdir(parents=True, exist_ok=True)
    tmp = Path(tempfile.mkdtemp(prefix=".interstice-private-", dir=output.parent))
    try:
        shutil.copytree(base, tmp, dirs_exist_ok=True)
        folder = tmp / "publication-privee"
        folder.mkdir(mode=0o700)
        listing = []
        manifest = []
        for sha, item in versions:
            name = item["id"] + ".html"
            # Restricted Markdown preserves headings and safe source links; plain text remains escaped.
            body = render_markdown(item["body"], item["title"]) if item.get("format") == "markdown" else "<h1>" + html.escape(item["title"]) + "</h1>" + "".join("<p>" + html.escape(line) + "</p>" for line in item["body"].splitlines() if line.strip())
            (folder / name).write_text(page(item["title"], body), encoding="utf-8")
            listing.append('<li><a href="' + name + '">' + html.escape(item["title"]) + '</a></li>')
            manifest.append({"id": item["id"], "version_sha256": sha, "page_sha256": digest((folder / name).read_bytes())})
        (folder / "index.html").write_text(page("Publications privées", "<h1>Publications privées</h1><p>Accès réservé au propriétaire par l’hébergeur.</p><ul>" + "".join(listing) + "</ul>"), encoding="utf-8")
        atomic_json(folder / "manifest.json", {"audience": "owner_private", "deployed": False, "articles": manifest})
        index = tmp / "lectures/index.html"
        text = index.read_text(encoding="utf-8")
        require(text.lower().count("</body>") == 1, "Preview index structure not recognized")
        pos = text.lower().rfind("</body>")
        index.write_text(text[:pos] + '<nav aria-label="Publications privées"><a href="../publication-privee/index.html">Articles validés · espace privé</a></nav>\n' + text[pos:], encoding="utf-8")
        # Entire generated directory is private; never upload this archive to GitHub.
        checksums = {str(p.relative_to(tmp)): digest(p.read_bytes()) for p in sorted(tmp.rglob("*")) if p.is_file() and p != tmp / "checksums.json"}
        atomic_json(tmp / "checksums.json", checksums)
        require(not output.exists(), "Output already exists")
        tmp.rename(output)
    finally:
        if tmp.exists():
            shutil.rmtree(tmp)
    return len(versions)

def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--store", required=True)
    cmd = p.add_subparsers(dest="cmd", required=True)
    s = cmd.add_parser("stage")
    s.add_argument("id"); s.add_argument("--title", required=True); s.add_argument("--format", choices=("text", "markdown"), default="text")
    src = s.add_mutually_exclusive_group(required=True)
    src.add_argument("--file"); src.add_argument("--google-doc")
    a = cmd.add_parser("approve")
    a.add_argument("id"); a.add_argument("--sha", required=True); a.add_argument("--decision", required=True)
    for flag in ("rights-reviewed", "privacy-reviewed", "second-read"):
        a.add_argument("--" + flag, action="store_true")
    v = cmd.add_parser("activate")
    v.add_argument("id"); v.add_argument("--sha", required=True); v.add_argument("--expected", required=True); v.add_argument("--decision", required=True)
    b = cmd.add_parser("build")
    b.add_argument("--base", required=True); b.add_argument("--output", required=True); b.add_argument("--owner-private", action="store_true")
    cmd.add_parser("status")
    args = p.parse_args()
    try:
        store = Store(args.store)
        if args.cmd == "stage":
            data = outside(args.file).read_bytes() if args.file else import_google(args.google_doc, args.format)
            print(store.stage(args.id, args.title, data, args.format))
        elif args.cmd == "approve":
            store.approve(args.id, args.sha, args.decision, args.rights_reviewed, args.privacy_reviewed, args.second_read)
            print("Private approval recorded")
        elif args.cmd == "activate":
            store.activate(args.id, args.sha, None if args.expected == "none" else args.expected, args.decision)
            print("Active private version recorded; not deployed")
        elif args.cmd == "build":
            require(args.owner_private, "Explicit owner-private flag required; this is not hosting authentication")
            print(f"{build(store, args.base, args.output)} articles built locally; not deployed")
        else:
            print(json.dumps(store.status(), indent=2))
    except (ValueError, KeyError, OSError) as exc:
        # No remote response body or private text in output.
        p.exit(1, f"Editorial operation refused ({type(exc).__name__}): {exc if isinstance(exc, ValueError) else 'check local inputs/access'}\n")

if __name__ == "__main__":
    main()
