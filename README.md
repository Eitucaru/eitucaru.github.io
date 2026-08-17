# Build Log — GitHub Pages hub

A small Jekyll site: a homepage with two category "bins" (Roblox/Rojo, and
Studio 2.0/LDraw), each listing your projects. GitHub Pages builds Jekyll
sites automatically — no build step to run yourself.

## 1. Rename it to your GitHub Pages repo

GitHub Pages serves the *default* username site from a repo literally named
`yourusername.github.io`. Rename this folder's repo to that (or copy these
files into that repo) before pushing.

## 2. Fill in your details

Edit `_config.yml`:
- `github_url` → your GitHub profile
- `bricks_site_url` / `bricks_site_name` → already set to minibrickcraze.com

## 3. Add or edit projects

Everything project-related lives in one file: `_data/projects.yml`.
Each entry looks like:

```yaml
- id: RBX-004
  name: "Project Name"
  category: roblox        # must be "roblox" or "bricks"
  description: "One or two sentences, plain language."
  tags: ["Tag One", "Tag Two"]
  repo: "https://github.com/yourusername/project-name"
  demo: ""                 # optional — leave blank if none
```

Add a new entry and it shows up automatically on the matching category page
and in the homepage's project count. Delete the six placeholder entries
once you've swapped in your real projects.

## 4. Push

```
git add -A
git commit -m "set up site"
git push
```

GitHub Pages will build and publish it within a minute or two, at
`https://yourusername.github.io/`.

## 5. If you outgrow two categories

Add a third bin the same way: a new `category` value in `projects.yml`,
a new `/newcategory/index.html` copied from `roblox/index.html` with the
`where` filter changed, and a card added to `index.html`.
