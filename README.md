# slowclaw.social (static site)

Static landing page for the minimal `slowclaw.social` workspace-only fork.

## What the page communicates

- Workspace-only execution model
- No external channel integrations
- PocketBase-first workflow (sidecar + local UI)
- Script scheduling via `workspace-script`
- Security warning: app policy is not a kernel sandbox

## Local preview

Open `index.html` directly, or serve it with any static server:

```bash
python3 -m http.server 8081
```

Then visit `http://127.0.0.1:8081/`.

## Deploy

This repo can be published as a static site (GitHub Pages, Cloudflare Pages, Netlify, etc.).
