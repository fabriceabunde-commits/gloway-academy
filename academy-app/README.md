# Gloway Academy — Phase 0 migration

This React + TypeScript + Vite application is a **non-production migration preview**. Root `index.html` remains the live website.

## Status
- [x] React/TypeScript project scaffold
- [x] Existing production page markup separated into per-page modules
- [x] Existing production CSS imported without redesign
- [x] Existing interactive behaviors preserved through temporary legacy JS bridge
- [x] Academy homepage, compliance, CIFT, learner portal, simulation lab and footer included
- [ ] Convert legacy HTML and global JS to idiomatic React components/hooks
- [ ] Copy/verify all image assets in preview build (existing paths reference site-root images)
- [ ] Verify visual and functional parity on desktop/mobile
- [ ] Verify build and test workflow
- [ ] Set Cloudflare build configuration only after parity checks

## Run
```sh
cd academy-app
npm install
npm run build
npm run dev
```

The existing Simulation Lab is a demonstration case, **not** the full shipment engine. Learner portal is illustrative; no account persistence is implemented.

## Safety
Do not deploy this preview to production until visual, interaction, asset, and accessibility checks pass. The compatibility bridge temporarily uses HTML injection of repository-controlled static content only. It must not accept untrusted content.
