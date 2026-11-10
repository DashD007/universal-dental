# Project rules
- Stack: Next.js (App Router), TypeScript, Tailwind CSS
- Use Server Components by default; "use client" only when needed
- Components live in /components, one per file
- Never use inline styles; use Tailwind classes
- Run `npm run lint` and `npm run build` before saying a task is done
- Mobile-first; every page must work at 375px wide

# Design tokens
- All tokens live in `app/theme.css` (Tailwind v4 `@theme`; there is no `tailwind.config.js`). Browse them at `/styleguide`.
- Tailwind's default colors are disabled; only the brand palette exists (clay, sage, moss, brass, earth, rust).
- In components use semantic colors, not scale steps: `background`, `surface`, `raised`, `foreground`, `muted`, `line`, `primary`, `primary-hover`, `accent`, `highlight`, `inverse`, `danger`, `on-primary`, `on-inverse`. They flip in dark mode.
- Type: `font-display` for headings, `font-sans` for body, `font-mono` for part numbers/specs. Sizes: `text-display-{2xl,xl,lg,md,sm}`, `text-lead`, `text-eyebrow`.
- Layout: `py-section` / `py-section-sm` between sections, `max-w-site` via `<Container>`, `max-w-copy` for text, `h-header`.
- Shape: `rounded-control` (buttons/chips), `rounded-media`, `rounded-card`, `rounded-card-lg`; `shadow-card`, `shadow-lift`.
- Reuse `<Button>` / `<ButtonLink>` (styles in `lib/ui/button.ts`), `<Card>`, `<Badge>` and `<SectionHeader>` from `components/ui` instead of restyling.
- When changing a token in `theme.css`, update `lib/design/tokens.ts` (the styleguide's documentation data) to match.