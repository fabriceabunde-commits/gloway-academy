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
