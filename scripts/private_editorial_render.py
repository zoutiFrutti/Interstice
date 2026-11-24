"""Restricted Google Docs Markdown export renderer; no raw HTML or remote assets."""
import html
import re
from urllib.parse import urlsplit

ESCAPED = re.compile(r"\\([!\"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])")
LINK = re.compile(r"(?<![!\\])\[((?:\\.|[^\]\\\n])+)\]\((https://[^\s<>()\"']+)\)")
HEADING = re.compile(r"^(#{1,6})[ \t]+(.+)$")


def unescape_md(value):
    return ESCAPED.sub(r"\1", value)


def safe_https(url):
    try:
        parsed = urlsplit(url)
        return parsed.scheme == "https" and bool(parsed.hostname) and parsed.username is None and parsed.password is None and not any(ord(c) < 33 for c in url)
    except ValueError:
        return False


def inline(value):
    result = []
    last = 0
    for match in LINK.finditer(value):
        result.append(html.escape(unescape_md(value[last:match.start()])))
        label, url = match.groups()
        if safe_https(url):
            result.append('<a href="' + html.escape(url, quote=True) + '" rel="noopener noreferrer">' + html.escape(unescape_md(label)) + '</a>')
        else:
            result.append(html.escape(unescape_md(match.group(0))))
        last = match.end()
    result.append(html.escape(unescape_md(value[last:])))
    return "".join(result)


def validate_markdown(body, title):
    first = body.splitlines()[0]
    match = HEADING.fullmatch(first)
    if not match or unescape_md(match.group(2)) != title:
        raise ValueError("Google Docs Markdown title must match the approved title")
    if re.search(r"(?<!\\)!\[", body):
        raise ValueError("Images require a separate rights-reviewed publication route")


def render_markdown(body, title):
    validate_markdown(body, title)
    result = ['<h1>' + html.escape(title) + '</h1>']
    for line in body.splitlines()[1:]:
        line = line.strip()
        if not line:
            continue
        heading = HEADING.fullmatch(line)
        if heading:
            marker, value = heading.groups()
            if re.match(r"^[A-Z]+-[0-9]{3}\s*\\?\|", value):
                result.append('<p class="publication-meta">' + inline(value) + '</p>')
            else:
                level = min(6, len(marker) + 1)
                result.append(f'<h{level}>' + inline(value) + f'</h{level}>')
        else:
            result.append('<p>' + inline(line) + '</p>')
    return "".join(result)
