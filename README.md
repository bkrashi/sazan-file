# Albania: Beyond the Investment

*Land, power, profit, and the future of a nation.*

An interactive, evidence-graded investigation into who owns Albania's future, who benefits from its transformation, who bears the costs, and whether transparency, responsible sourcing and emerging technology can create accountability. It began as *The Sazan File* and opens with the distinct Sazan Island and Zvërnec coastal proposals.

Live site: https://bkrashi.github.io/sazan-file/

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Homepage: opening, verified figures, questions, map, chapter path |
| `chapters/01-promise.html` | The Promise of Development: Sazan vs Zvërnec, proposal-to-permit ladder, timeline, profiles |
| `chapters/02-ownership.html` | Who Owns Albania's Future?: relationship network, ownership layers, conflicts of interest |
| `chapters/03-environment.html` | The Environmental Cost: protected areas, layered map with Bay of Vlorë zoom, satellite record |
| `chapters/04-made-in-albania.html` | Made in Albania: export charts, supply-chain explorer, wages |
| `chapters/05-evidence.html` | Follow the Evidence: case files and evidence-type exercises |
| `chapters/06-technology.html` | Can Technology Expose the Truth?: technology library and comparison tool |
| `chapters/07-decide.html` | Who Benefits? Who Decides?: stakeholders, policy comparison, recommendations, simulation |
| `sources.html` | Method, evidence standards, every source, image credits, glossary |
| `assets/js/data/` | Research content: sources, glossary, case, network, goods, evidence, tech, decide |
| `assets/js/components/` | Interactive components (timeline, map, network, explorer, labs, policy, simulation) |
| `assets/js/core.js` | Navigation, reading/chapter progress, citation and glossary popovers, mounting |
| `assets/css/main.css` | Design system |
| `assets/img/` | Licensed images (credits in `assets/js/data/sources.js` and on `sources.html`) |
| `src/pages/` | Page bodies; `tools/build.py` wraps them into the final HTML |

The old page URLs (`timeline.html`, `land.html`, `goods.html`, `verify.html`, `rules.html`, `recommendations.html`, `research.html`) redirect to their new chapters.

## Editing

Edit content in `assets/js/data/*.js` or page text in `src/pages/*.html`, then rebuild:

```
python3 tools/build.py
```

No other build step or dependency is needed; the site is plain HTML, CSS and JavaScript for GitHub Pages.

## Evidence standard

Every claim carries one of six labels: official record, independent reporting, NGO / research finding, allegation, unverified, or research question, and cites numbered sources. Sazan and Zvërnec are kept distinct, and no connection is drawn between the coastal projects and the export supply chains, because no record shows one. Nothing on the site is a legal finding; everyone named is presumed innocent unless a court rules otherwise.

Research retrieved 2 November 2026; legal statuses reviewed November 2026.
