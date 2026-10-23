# Gloway Academy — Phase 0 migration

The existing root `index.html` remains the **live production website**. The modular Vite app in this directory is a development preview.

## Architecture now
- React/TypeScript/Vite foundation
- React mobile navigation, hash-based page selection, and accessibility landmarks
- Native React simulation decision demonstration
- Native React facility readiness checklist, progress tracking and action plan export
- Dedicated homepage, CIFT, learner portal, compliance and simulation page modules
- Original static editorial markup and CSS temporarily retained while JSX conversion continues

## Remaining migration gates
1. Move editorial markup from static HTML fragments into semantic JSX sections.
2. Replace legacy image references with bundled assets, checking the files against production.
3. Run CI build and unit tests, resolve any failures.
4. Compare desktop and mobile visuals and all interactions against production.
5. Configure Cloudflare Pages build output to `academy-app/dist` only after approval.

## Local development
```sh
cd academy-app
npm install
npm run build
npm test
npm run dev
```

**No learner data is saved.** The simulation is a single educational demonstration, not a full export simulation engine. CIFT is in development and is not presented as an accredited qualification.

## Cloudflare preview deployment

A manually gated preview workflow is defined at `.github/workflows/academy-preview.yml` on the migration branch. It uses GitHub Actions secrets `CLOUDFLARE_API_TOKEN` (Pages edit permission) and `CLOUDFLARE_ACCOUNT_ID`, plus an explicit Cloudflare Pages project name. The branch alias must not be `main` or `production`.

**GitHub limitation:** A new `workflow_dispatch` workflow must first be registered on the repository's default branch before it can be launched from the Actions UI. Merely committing it to this feature branch does not activate its Run workflow button. Do not merge the React application or change production build settings just to activate this workflow. An administrator may copy **only the workflow file** to the default branch after reviewing it, then select `phase-0-react-migration` when manually dispatching the preview. Alternatively, create a separate Cloudflare Pages preview project with root `academy-app`, build command `npm run build`, output `dist`, and branch `phase-0-react-migration`.

No Cloudflare deployment has been made by this repository change.
