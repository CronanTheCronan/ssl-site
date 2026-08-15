# Solace Signal Labs — Company Website

Official single-page site for **[Solace Signal Labs](https://solacesignallabs.com)**.

Human-governed AI tools for game creators. **GlyphKeeper** (coming soon) for Dungeon Masters. **Solace Forge** (in development) for solo developers and micro-studios.

Repository: [github.com/CronanTheCronan/ssl-site](https://github.com/CronanTheCronan/ssl-site)

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Static deploy on GitHub Pages (custom domain)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`. The build includes `dist/CNAME` with:

```text
solacesignallabs.com
```

### Asset pipeline (optional)

After replacing source images in `public/`, regenerate favicons / OG image:

```bash
node scripts/process-assets.mjs
```

## Deploy (GitHub Pages)

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci` + `npm run build`
2. Upload `dist/` as a Pages artifact
3. Deploy via GitHub Actions Pages

### First-time setup

1. Create public repo **`ssl-site`** under `CronanTheCronan` (if not already).
2. Push this project to `main`.
3. **Settings → Pages → Build and deployment**
   - Source: **GitHub Actions**
4. **Settings → Pages → Custom domain**
   - Enter `solacesignallabs.com` → Save
   - Enable **Enforce HTTPS** when DNS is green

### Retire the old site (`juris-ai-site`)

1. Open the old repo → **Settings → Pages**
2. Clear the custom domain and save
3. Disable Pages (or leave Actions/branch deploy off)
4. Optionally archive the repository

DNS A records for the apex (GitHub Pages) typically remain:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

`www` should CNAME to `CronanTheCronan.github.io` (or your org pages host).

## Contact

Primary: [matt@solacesignallabs.com](mailto:matt@solacesignallabs.com)

## License

Proprietary. © 2026 Solace Signal Labs. All rights reserved.
