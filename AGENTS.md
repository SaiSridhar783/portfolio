<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project notes

Personal portfolio: Next.js 16 App Router, React 19, TypeScript, SCSS + Tailwind 4, `motion`, Prisma 6 (MongoDB). Deployed on Vercel.

### Tooling
- Use `bun` / `bunx` only (never npm/npx). `bun dev`, `bun run build`, `bun run lint` (oxlint), `bunx tsc --noEmit -p .`.
- `postinstall` runs `prisma generate --schema=./src/prisma/schema.prisma`; the schema is not at the default path. Stay on Prisma 6: Prisma 7 does not support MongoDB.
- After deleting a route, clear stale generated types with `bunx rimraf .next/types` before typechecking.

### Layout
- `/` is landing + navigation in one: intro on the left, `HeroOrb` with the five `NavTab` sections in a ring. `/home` and `/v2/*` permanently redirect (see `next.config.ts`).
- Back links point to `/` and use `transitionTypes={["nav-back"]}`; forward links use `nav-forward`.
- `/admin` is protected by HTTP Basic auth (`src/proxy.ts`, `src/lib/adminAuth.ts`, env `ADMIN_PASSWORD`); it fails closed when unset.
- The contact form posts to `/api/hello`, which validates name ≤100, email ≤254, message ≤5000. Keep `ContactForm` limits in sync.

### Styling conventions
- Design tokens live at the top of `src/styles/globals.css` (`--bg`, `--surface`, `--accent`, `--dur-*`, `--ease-*`). Use them instead of raw colours. SCSS `$green`/`$blue` are aliases.
- Responsive rules use container queries on the `.page` wrapper: `@container page (width < #{$narrow})` (48rem). Only viewport-fixed things use `@media`.
- Motion: shared presets in `src/lib/motion.ts`. `MotionProvider` and a global CSS rule honour `prefers-reduced-motion`; keep both working.
- Page transitions: wrap page content (not layouts) in `PageTransition`; use `Shared` for elements that morph between routes.
- Body text colour is not set globally (many legacy components rely on inherited black on light backgrounds); set colours explicitly on new components.

### Gotchas
- The CSS minifier drops `translate: none`. Reset with `transform: none` or fold the offset into `transform`.
- Global `svg { max-width: 100% }`: an icon inside a zero-width absolutely positioned wrapper collapses to 0px. Set `max-width: none` on it.
- Blurred decorative glows can widen the page on phones; clip with `overflow-x: clip` on the section.
- Verify UI at 375px and desktop widths, checking `document.documentElement.scrollWidth` for horizontal overflow.
