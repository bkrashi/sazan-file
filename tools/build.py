#!/usr/bin/env python3
"""Assemble the static site for GitHub Pages.

Page bodies live in src/pages/*.html. This script wraps each one in the shared
<head>, loads the research data, core and components, and writes the result to
the repository root (index.html, sources.html) and chapters/. Run from the repo root:

    python3 tools/build.py
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "Albania: Beyond the Investment"

PAGES = [
    # out path, source fragment, title, description, root, chapter, page id
    ("index.html", "home.html", SITE, "An interactive investigation into who owns Albania's future, who benefits from its transformation and who bears the costs.", "", "", "home"),
    ("chapters/01-promise.html", "01-promise.html", "The Promise of Development", "Sazan Island and Zvërnec: what is proposed for Albania's coast, and what has actually been approved.", "../", "01", "ch"),
    ("chapters/02-ownership.html", "02-ownership.html", "Who Owns Albania's Future?", "Investors, institutions, beneficial owners and the paper trail behind Albania's coastal deals.", "../", "02", "ch"),
    ("chapters/03-environment.html", "03-environment.html", "The Environmental Cost", "Protected lagoons, a marine park and a satellite record of change on Albania's coast.", "../", "03", "ch"),
    ("chapters/04-made-in-albania.html", "04-made-in-albania.html", "Made in Albania", "Chrome and garment supply chains: who mines, sews and buys, and what can be verified.", "../", "04", "ch"),
    ("chapters/05-evidence.html", "05-evidence.html", "Follow the Evidence", "An evidence laboratory: inspect documents and judge what the Albania claims really prove.", "../", "05", "ch"),
    ("chapters/06-technology.html", "06-technology.html", "Can Technology Expose the Truth?", "Satellites, AI, open data and digital identity applied to Albania, with their limits.", "../", "06", "ch"),
    ("chapters/07-decide.html", "07-decide.html", "Who Benefits? Who Decides?", "Stakeholders, rules, recommendations and a decision simulation for Albania's future.", "../", "07", "ch"),
    ("sources.html", "sources.html", "Method & Sources", "How this investigation was built: method, evidence standards, every source and image credit.", "", "", "sources"),
]

DATA = ["sources", "glossary", "case", "network", "goods", "evidence", "tech", "decide"]
COMPONENTS = ["timeline", "map", "network", "promise", "goods", "lab", "tech", "decide", "sources"]

HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="{desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="{root}assets/css/main.css">
</head>
<body data-root="{root}" data-chapter="{chapter}" data-page="{page}">
<a class="sr" href="#main">Skip to content</a>
<noscript><p style="padding:16px">This investigation uses JavaScript for its maps, timeline and exercises. <a href="{root}sources.html">The method and sources page</a> works without it.</p></noscript>
<main id="main">
"""

TAIL = """</main>
{scripts}
<script>BTB.boot();</script>
</body>
</html>
"""


def build():
    for out, src, title, desc, root, chapter, page in PAGES:
        body = open(os.path.join(ROOT, "src", "pages", src), encoding="utf-8").read()
        full_title = title if title == SITE else f"{title} · {SITE}"
        scripts = "\n".join(
            [f'<script src="{root}assets/js/data/{d}.js"></script>' for d in DATA]
            + [f'<script src="{root}assets/js/core.js"></script>']
            + [f'<script src="{root}assets/js/components/{c}.js"></script>' for c in COMPONENTS]
        )
        html = HEAD.format(title=full_title, desc=desc, root=root, chapter=chapter, page=page) + body + TAIL.format(scripts=scripts)
        path = os.path.join(ROOT, out)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        print("wrote", out)


if __name__ == "__main__":
    build()
