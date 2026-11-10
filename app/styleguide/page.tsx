import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Clock, Phone, Plus, ShieldCheck, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import LogoMark from "@/components/brand/LogoMark";
import StyleguideSection from "@/components/styleguide/StyleguideSection";
import ColorScale from "@/components/styleguide/ColorScale";
import CodeTag from "@/components/styleguide/CodeTag";
import { cn } from "@/lib/cn";
import type { ButtonSize, ButtonVariant } from "@/lib/ui/button";
import {
  fonts,
  layoutSpacing,
  namedColors,
  palettes,
  radii,
  semanticColors,
  shadows,
  spacingScale,
  typeScale,
} from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "Styleguide",
  description: "Universal Dental design system: colors, typography, spacing, buttons and cards.",
  robots: { index: false, follow: false },
};

const sections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing & shape" },
  { id: "buttons", label: "Buttons" },
  { id: "cards", label: "Cards" },
];

const buttonVariantList: { variant: ButtonVariant; use: string }[] = [
  { variant: "primary", use: "One main action per view" },
  { variant: "secondary", use: "Paired with primary" },
  { variant: "inverse", use: "Solid dark action" },
  { variant: "ghost", use: "Low emphasis, toolbars" },
];
const buttonSizeList: ButtonSize[] = ["sm", "md", "lg"];

export default function StyleguidePage() {
  return (
    <>
      {/* Intro */}
      <section className="py-section-sm">
        <Container>
          <p className="text-eyebrow font-semibold uppercase text-primary">Design system · v1</p>
          <h1 className="mt-4 max-w-3xl text-display-xl font-medium">Universal Dental styleguide.</h1>
          <p className="mt-5 max-w-copy text-lead text-muted">
            Earthy, modern, premium. Every token here is defined once in{" "}
            <CodeTag>app/theme.css</CodeTag> and available as a Tailwind utility.
          </p>
          <nav aria-label="Styleguide sections" className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <ButtonLink key={s.id} href={`#${s.id}`} variant="secondary" size="sm">
                {s.label}
              </ButtonLink>
            ))}
          </nav>
        </Container>
      </section>

      {/* ── Colors ─────────────────────────────────────── */}
      <StyleguideSection
        id="colors"
        eyebrow="01 · Colors"
        title="A palette drawn from clay, herbs and aged brass."
        subtitle="Six brand scales with fixed values, plus role-based tokens that adapt to dark mode. Build UI with the semantic tokens; reach for scale steps only for illustration and data."
      >
        <h3 className="text-display-sm font-medium">Signature colors</h3>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {namedColors.map((c) => (
            <li key={c.name} className={cn("flex min-h-36 flex-col justify-between rounded-card p-5", c.className)}>
              <span className="font-display text-2xl font-medium">{c.name}</span>
              <span className="text-xs leading-relaxed opacity-80">
                {c.use}
                <br />
                <span className="font-mono">
                  {c.token} · {c.hex}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-14 space-y-10">
          {palettes.map((p) => (
            <ColorScale key={p.token} palette={p} />
          ))}
        </div>

        <h3 className="mt-14 text-display-sm font-medium">Semantic tokens</h3>
        <p className="mt-2 max-w-copy text-sm text-muted">
          Use these in components, e.g. <CodeTag>bg-surface</CodeTag> <CodeTag>text-muted</CodeTag>{" "}
          <CodeTag>border-line</CodeTag>. The swatch shows the value for your current theme.
        </p>
        <div className="mt-5 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-xl text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Token</th>
                <th className="px-4 py-3 font-medium">Light</th>
                <th className="px-4 py-3 font-medium">Dark</th>
                <th className="px-4 py-3 font-medium">Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {semanticColors.map((t) => (
                <tr key={t.name}>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-3">
                      <span className={cn("size-7 shrink-0 rounded-lg border border-line", t.className)} />
                      <CodeTag>{t.name}</CodeTag>
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{t.light}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{t.dark}</td>
                  <td className="px-4 py-3 text-muted">{t.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </StyleguideSection>

      {/* ── Typography ─────────────────────────────────── */}
      <StyleguideSection
        id="typography"
        eyebrow="02 · Typography"
        title="A warm serif for character, a precise sans for detail."
        subtitle="Display sizes are fluid: they scale smoothly from a 375px phone to a wide desktop."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {fonts.map((f) => (
            <Card key={f.name} variant="surface">
              <p className="text-eyebrow font-semibold uppercase text-muted">{f.token}</p>
              <p className={cn("mt-4 text-5xl", f.className)}>Aa</p>
              <h3 className="mt-4 text-display-sm font-medium">{f.name}</h3>
              <p className="mt-1 text-sm text-muted">{f.role}</p>
              <p className={cn("mt-5 border-t border-line pt-4", f.className)}>{f.sample}</p>
            </Card>
          ))}
        </div>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {typeScale.map((t) => (
            <li key={t.token} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8">
              <div className="space-y-1">
                <CodeTag>{t.token}</CodeTag>
                <p className="text-xs text-muted">
                  {t.size} · {t.use}
                </p>
              </div>
              <p className={cn("min-w-0 break-words", t.className)}>Chair care, done properly.</p>
            </li>
          ))}
        </ul>
      </StyleguideSection>

      {/* ── Spacing & shape ────────────────────────────── */}
      <StyleguideSection
        id="spacing"
        eyebrow="03 · Spacing & shape"
        title="A 4px rhythm with generous breathing room."
        subtitle="Tailwind’s numeric scale uses a 4px base unit. Named tokens handle layout-level spacing so every page keeps the same rhythm."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-display-sm font-medium">Spacing scale</h3>
            <ul className="mt-5 space-y-2.5">
              {spacingScale.map((s) => (
                <li key={s.step} className="grid grid-cols-[3rem_3.5rem_1fr] items-center gap-3 text-sm">
                  <CodeTag>{s.step}</CodeTag>
                  <span className="font-mono text-xs text-muted">{s.px}px</span>
                  <span className={cn("h-3 rounded-sm bg-primary", s.className)} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-display-sm font-medium">Layout tokens</h3>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {layoutSpacing.map((l) => (
                <div key={l.token} className="grid grid-cols-[minmax(0,9rem)_1fr] gap-4 py-3 text-sm">
                  <dt>
                    <CodeTag>{l.token}</CodeTag>
                  </dt>
                  <dd>
                    <span className="font-medium">{l.value}</span>
                    <span className="block text-xs text-muted">{l.use}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-display-sm font-medium">Radius</h3>
            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {radii.map((r) => (
                <li key={r.token}>
                  <div className={cn("aspect-square border-2 border-primary bg-primary/10", r.className)} />
                  <p className="mt-2 font-mono text-xs">{r.token}</p>
                  <p className="text-xs text-muted">
                    {r.value} · {r.use}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-display-sm font-medium">Elevation</h3>
            <ul className="mt-5 grid grid-cols-2 gap-6">
              {shadows.map((s) => (
                <li key={s.token}>
                  <div className={cn("aspect-[4/3] rounded-card bg-raised", s.className)} />
                  <p className="mt-3 font-mono text-xs">{s.token}</p>
                  <p className="text-xs text-muted">{s.use}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StyleguideSection>

      {/* ── Buttons ────────────────────────────────────── */}
      <StyleguideSection
        id="buttons"
        eyebrow="04 · Buttons"
        title="Pill-shaped, confident, never shouty."
        subtitle="Use <Button> for actions and <ButtonLink> for navigation. Both share the same variants and sizes."
      >
        <div className="divide-y divide-line border-y border-line">
          {buttonVariantList.map(({ variant, use }) => (
            <div key={variant} className="grid gap-4 py-6 md:grid-cols-[12rem_1fr] md:items-center">
              <div>
                <CodeTag>variant=&quot;{variant}&quot;</CodeTag>
                <p className="mt-1 text-xs text-muted">{use}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {buttonSizeList.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {variant === "primary" ? "Book a service" : "View details"}
                    {size === "lg" ? <ArrowRight aria-hidden="true" /> : null}
                  </Button>
                ))}
                <Button variant={variant} size="icon" aria-label="Add to quote list">
                  <Plus aria-hidden="true" />
                </Button>
                <Button variant={variant} disabled>
                  Disabled
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-card-lg bg-inverse p-6 text-on-inverse sm:p-10">
          <CodeTag className="bg-on-inverse/10 text-on-inverse">variant=&quot;light&quot;</CodeTag>
          <p className="mt-1 text-xs opacity-70">Outline action on moss and dark imagery</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button>
              Request a quote <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="light">
              <Phone aria-hidden="true" /> Call the workshop
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium">Sizes</p>
            <p className="mt-1 text-sm text-muted">
              <CodeTag>sm</CodeTag> 36px · <CodeTag>md</CodeTag> 44px · <CodeTag>lg</CodeTag> 52px. Keep
              touch targets at <CodeTag>md</CodeTag> or larger on mobile.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Pairing</p>
            <p className="mt-1 text-sm text-muted">One primary per view, optionally followed by a secondary. Never two primaries side by side.</p>
          </div>
          <div>
            <p className="text-sm font-medium">Badges</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge tone="primary">Same day</Badge>
              <Badge tone="accent">In stock</Badge>
              <Badge tone="highlight">4.9 rated</Badge>
              <Badge>Refurbished</Badge>
              <Badge tone="danger">Urgent</Badge>
            </div>
          </div>
        </div>
      </StyleguideSection>

      {/* ── Cards ──────────────────────────────────────── */}
      <StyleguideSection
        id="cards"
        eyebrow="05 · Cards"
        title="Soft corners, quiet surfaces, clear hierarchy."
        subtitle="<Card> takes a variant, a padding size and an optional hover lift for clickable cards."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* surface — service card */}
          <Card variant="surface" interactive as="article">
            <span className="inline-flex size-11 items-center justify-center rounded-control bg-primary/12 text-primary">
              <Wrench className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-display-sm font-medium">Hydraulic repair</h3>
            <p className="mt-2 text-sm text-muted">
              Leaks, slow recline and drifting seats diagnosed and fixed on site.
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted">
              <Clock className="size-3.5" aria-hidden="true" /> 2–4 h on site
            </p>
            <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-muted">variant=&quot;surface&quot; interactive</p>
          </Card>

          {/* raised — product card */}
          <Card variant="raised" padding="none" interactive as="article">
            <div className="flex aspect-[4/3] items-center justify-center bg-earth-300/50">
              <LogoMark className="size-16 opacity-60" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-2">
                <Badge tone="accent">In stock</Badge>
                <span className="font-mono text-xs text-muted">UD-OR-112</span>
              </div>
              <h3 className="mt-4 text-display-sm font-medium">Orthopedic knee brace</h3>
              <p className="mt-1 text-sm text-muted">Hinged, adjustable · S–XXL</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium">Price on request</span>
                <Button size="sm" variant="secondary">
                  <Plus aria-hidden="true" /> Quote
                </Button>
              </div>
              <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-muted">variant=&quot;raised&quot; padding=&quot;none&quot;</p>
            </div>
          </Card>

          {/* inverse — stat / testimonial */}
          <Card variant="inverse" className="flex flex-col justify-between">
            <div>
              <p className="text-eyebrow font-semibold uppercase text-highlight">Chairs serviced</p>
              <p className="mt-4 font-display text-display-xl font-medium">2,400+</p>
              <p className="mt-2 text-sm opacity-75">Across clinics, colleges and hospital dental wings.</p>
            </div>
            <p className="mt-8 border-t border-on-inverse/15 pt-4 font-mono text-xs opacity-70">variant=&quot;inverse&quot;</p>
          </Card>

          {/* outline — spec list */}
          <Card variant="outline">
            <h3 className="text-display-sm font-medium">Specifications</h3>
            <dl className="mt-4 divide-y divide-line text-sm">
              {[
                ["Model", "UD-HP-450"],
                ["Supply", "24 V DC"],
                ["Max load", "320 kg"],
                ["Warranty", "12 months"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-mono">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-muted">variant=&quot;outline&quot;</p>
          </Card>

          {/* primary — promo */}
          <Card variant="primary" padding="lg" className="flex flex-col justify-between">
            <div>
              <ShieldCheck className="size-8" aria-hidden="true" />
              <h3 className="mt-5 text-display-md font-medium">Annual care plans for every chair.</h3>
              <p className="mt-3 text-sm opacity-85">Scheduled maintenance, priority breakdown visits, one invoice.</p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/services" variant="light" size="sm">
                Explore plans <ArrowUpRight aria-hidden="true" />
              </ButtonLink>
              <p className="mt-6 border-t border-on-primary/20 pt-4 font-mono text-xs opacity-75">variant=&quot;primary&quot; padding=&quot;lg&quot;</p>
            </div>
          </Card>

          {/* usage notes */}
          <Card variant="outline" className="border-dashed">
            <h3 className="text-display-sm font-medium">When to use which</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><span className="font-medium text-foreground">surface</span>: default content card</li>
              <li><span className="font-medium text-foreground">outline</span>: dense grids, cards on tinted sections</li>
              <li><span className="font-medium text-foreground">raised</span>: products, pricing, image overlays</li>
              <li><span className="font-medium text-foreground">inverse</span>: stats and testimonials</li>
              <li><span className="font-medium text-foreground">primary</span>: one promo per view, at most</li>
            </ul>
          </Card>
        </div>
      </StyleguideSection>
    </>
  );
}
