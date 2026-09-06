# Eitucaru — website

Personal homepage + guides + documentation for Eitucaru's tools, built with **Tailwind CSS (Play CDN, no build step)** and a "Candy Pop" theme.

## Structure

```
project website/
├── index.html                          ← homepage (root)
├── guides/
│   ├── index.html                      ← guides & resources hub
│   ├── resources.json                  ← data for the hub cards
│   └── install-studio-library-manager/ ← main guide (only this shows on the hub)
│       ├── index.html                  ← part 1 · Install Studio Library Manager
│       ├── custom-options/             ← part 2 · sub-page (nested, not on the hub)
│       │   └── index.html
│       └── configure-your-library/     ← part 3 · sub-page (nested, not on the hub)
│           └── index.html
├── docs/
│   ├── index.html                      ← Studio 2.0 documentation hub
│   └── conn-file-format.html           ← a document (live-rendered from GitHub)
├── assets/
│   ├── tailwind.config.js              ← DESIGN TOKENS: colors, font, shadows (single source of truth)
│   ├── css/
│   │   ├── base.css                    ← global: focus rings, skip link, reduced motion
│   │   └── theme.css                   ← shared Candy Pop theme + dark-mode overrides (all pages)
│   ├── js/
│   │   └── theme.js                    ← shared light/dark toggle (all pages)
│   ├── icons/                          ← project icons
│   ├── screenshots/                    ← hero carousel images
│   └── (keep /_preview out of the live site — it's just design screenshots)
└── README.md
```

**Link conventions:** root pages use `assets/…`; pages inside `docs/` use `../assets/…`; the main guide page (`guides/<id>/index.html`) uses `../../assets/…`; nested guide sub-pages (`guides/<id>/<part>/index.html`) use `../../../assets/…`. Guides are served as folder URLs (`guides/install-studio-library-manager/`) — like the projects category pages, a folder resolves to its `index.html` on GitHub Pages. A main guide lists only itself on the hub (`guides/resources.json`); its sub-pages are nested folders that link up to it (`../index.html`) and across to each other, and don't appear on the hub. All pages share the same header nav, footer and dark-mode behaviour — keep them consistent when editing.

## How it works (no build step)

- `index.html` loads the Tailwind Play CDN, then `assets/tailwind.config.js` (palette, Nunito Sans, `shadow-lift-*`), then `assets/css/base.css` + `assets/css/theme.css`.
- Every page loads `assets/css/theme.css` (shared readability + dark-mode rules) and `assets/js/theme.js` (theme toggle). Page-specific styles (carousel, guide TOC, rendered-markdown `.md-body`) live in each page's own `<style>` block.
- Dark mode follows the OS/browser setting unless the visitor toggles it (saved to `localStorage`). The `<html data-theme>` value is set before first paint by a tiny inline head script on every page.
- **Docs page (`docs/conn-file-format.html`) is live-rendered**: it fetches a markdown source from GitHub (raw.githubusercontent.com) and renders it client-side (marked → DOMPurify → KaTeX). It needs internet; the other pages are fully static.

## Adding pages

- **New guide**: copy an existing guide page's `<head>` + header nav into a new `guides/<id>/index.html` folder (clean URL), use `../../assets/…` paths, fix the chapter ids/TOC, and add it to `guides/resources.json`.
- **New sub-page of a guide**: create `guides/<id>/<part>/index.html` (one level deeper, `../../../assets/…` paths), and link it from its parent's "More from this guide" block (`<id>/` root links it as `custom-options/`-style child). Sub-pages are NOT added to `guides/resources.json`, so they never show up as separate hub cards — they're reachable from the parent guide.
- **New document**: copy `docs/conn-file-format.html`, update the `DOC` config at the bottom (raw GitHub URL + source link) and the title/blurb, then add a card on `docs/index.html`.

## Theme

Edit `assets/tailwind.config.js` to change colors/font/shadows — everything updates from there. Fonts load from Google Fonts (Nunito Sans). The Tailwind Play CDN logs a production warning in the console; that's expected (swap to a real Tailwind build if you ever outgrow it — the classes stay the same).

## Deploying to GitHub Pages

- Repo name must be `<your-username>.github.io`.
- Push everything at the project root (keep `index.html`, `guides/`, `docs/`, `assets/` together).
- Settings → Pages → Deploy from branch `main` / root.
- Live at `https://<your-username>.github.io/`.
