# Cipher Networking Camp — Main Site

Static site (HTML, CSS, vanilla JS). No build step, no dependencies.

## Run locally
    python3 -m http.server 8000
Open http://localhost:8000 (opening `index.html` directly also works).

## Structure
- `index.html` — page markup
- `src/styles.css` — styles and design tokens
- `src/main.js` — renders cards from the registry
- `src/data/sessions.js` — **session registry (single source of truth)**
- `sessions/` — standalone presentation files

## Adding a presentation
1. Put the standalone HTML file in `sessions/`, e.g. `sessions/session-01-intro.html`.
2. In `src/data/sessions.js`, set that session's `href` to `"sessions/session-01-intro.html"`.
3. Refresh the page — the card becomes available and opens in the same tab.

`href: null` keeps a session as "upcoming" (not clickable). Paths must be relative
(no `http://`, no leading `/`). Order of cards follows the array order.
