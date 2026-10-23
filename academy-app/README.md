# Gloway Academy — React migration preview

This app is a **separate migration workspace**. The current root `index.html` remains the production website and is intentionally unchanged.

## Development

```sh
cd academy-app
npm install
npm run dev
npm run build
npm test
```

## Migration status

- [x] React/TypeScript/Vite scaffold and route boundaries
- [x] Responsive base layout and brand tokens
- [ ] Port all existing homepage content, imagery, animations, and navigation
- [ ] Implement simulation state and rules packages
- [ ] Implement learner authentication and persistence
- [ ] Add end-to-end and accessibility tests
- [ ] Verify visual parity at mobile/tablet/desktop widths
- [ ] Update Cloudflare build configuration and deploy after verification

The Simulation Lab, Learner Portal and Reports pages are **explicit placeholders**, not working products.

**Deployment safety:** Do not point Cloudflare Pages at `academy-app` until parity and functional checks pass.
