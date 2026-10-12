# Praveen Kakulandala — Portfolio

A responsive personal portfolio built with HTML, CSS, and JavaScript. The content is based on Praveen's supplied CV and project repositories. Do.lk uses seven original screenshots supplied by the owner. Luxury Wear Store and ACloth artwork are illustrative interface concepts. SkinSafe uses actual Flutter interface captures with explicit demonstration data, and its full case study opens only when its project is clicked.

## Run locally

Install Node.js 22 or newer. No npm dependencies are required.

```powershell
cd D:\Portfolio
npm.cmd run dev
```

Open http://localhost:5173. Use `npm.cmd run dev -- --port 5174` if the default port is occupied.

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

`build` copies only public website files into `dist/`; `preview` serves that output. Opening `index.html` directly is not supported because the project uses JavaScript modules. Always use the local server.

## Update the portfolio

- `src/content.js`: profile, contact links, project descriptions, project source links, and skills.
- `index.html`: page structure, hero heading, education, and employment history.
- `src/styles.css`: colours, typography, layouts, and responsive rules.
- `src/case-study.js`: SkinSafe case-study content, shown inside a project detail dialog.
- `src/gallery.js`: shared screenshot viewer with keyboard navigation and focus restoration for both Do.lk and SkinSafe.
- `skinSafeCaseStudy` in `src/content.js`: SkinSafe overview, features, workflow, architecture, technology stack, and screenshot captions.
- `assets/skinsafe/`: five original app screenshots: Home, Scan, History, Learn, and Profile.
- `assets/dolk/`: seven owner-supplied screenshots: Welcome, Home, Messages, Seller Profile, Service Packages, Order Summary, and Payment Method.
- `assets/database/`: seven owner-supplied ADBMS project captures covering the dashboard, inventory, customers, products, and SQL schemas.
- `assets/cv/Praveen-Kakulandala-CV.pdf`: the two-page Associate Software Engineer CV, including professional experience, current SkinSafe research, the ADBMS group project, and clickable portfolio, GitHub and LinkedIn links.
- `assets/`: favicon and optional artwork.

Use accurate descriptions when adding work. SkinSafe is presented as a working research prototype and does not claim clinical validation. Its repository link was explicitly provided by the owner and is labelled private, so visitors need GitHub access to view it. The CV is a searchable two-page document tailored to Associate Software Engineer opportunities. Its claims are based on the supplied CV and project evidence. Original CV files remain on the owner's desktop, alongside an editable HTML copy of the new CV. Do.lk payment screenshots document the interface; they do not establish live payment processing.

The Hardware Shop Database entry describes the owner's ADBMS group project and uses seven original JPEGs. Its landscape gallery includes the separate university course-management schema capture. The supplied LinkedIn short link is retained as a general project link because its GitHub destination could not be resolved; replace it with the direct repository URL when available.

## SkinSafe screenshots and content sources

The screenshots come from `docs/thesis_visuals_20260930/ui_*.png` in the local SkinSafe project. They were rendered from the real Flutter widgets by `scripts/thesis_ui_capture_test.dart` using the synthetic account `Demo User`, synthetic scan records, and a demonstration UV forecast. They show the interface and are not clinical results.

The feature and technical descriptions were checked against the SkinSafe repository README, Flutter dependencies, local implementation handover, and model release notes. No model accuracy percentage or independent clinical validation is claimed. Scan photos stay on the device; Firestore holds account-scoped metadata. Do not describe metadata sync as cloud photo backup or local preferences as encrypted medical storage.

## GitHub Pages

The `.github/workflows/deploy.yml` workflow checks and builds the site, then deploys `dist/` to GitHub Pages on pushes to `main`.

Repository: https://github.com/PraveenKakulandala/PraveenKakulandala.github.io

Website: https://praveenkakulandala.github.io/

In repository **Settings → Pages**, select **GitHub Actions** as the publishing source.

After editing files:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

See [GitHub's workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Add to your CV

The updated Associate Software Engineer CV includes this clickable portfolio link alongside GitHub and LinkedIn:

`Portfolio: https://praveenkakulandala.github.io/`
