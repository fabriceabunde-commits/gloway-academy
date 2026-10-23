# Gloway Academy — Phase 0 React migration

Non-production migration preview. Root `index.html` is still the production website.

## Completed
- React/TypeScript/Vite foundation and CI workflow
- Original page markup and CSS preserved as repository-controlled legacy fragments
- Native React navigation with mobile menu and hash-based page selection
- Native React interactive simulation demo with local decision state and feedback
- Existing CIFT, homepage, compliance and learner portal pages preserved

## Still required
- Convert facility readiness checklist into native React state/hooks
- Convert remaining static pages into React components
- Replace remaining legacy JS bridge (readiness and scroll animations)
- Verify image assets, interactions, desktop/mobile visual parity, accessibility and build
- Deploy only after acceptance checks

## Local commands
```sh
cd academy-app
npm install
npm run build
npm test
npm run dev
```

The simulation demonstration is not the full shipment simulator. No real learner authentication, regulatory determination, persistent progress or live submission is provided.
