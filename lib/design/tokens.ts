// Documentation data for /styleguide.
// Source of truth for values is app/theme.css — keep the hex values here in sync when editing it.

export type Palette = {
  name: string;
  token: string;
  role: string;
  anchor: number;
  steps: Record<number, string>;
};

export const palettes: Palette[] = [
  {
    name: "Clay",
    token: "clay",
    role: "Terracotta. Primary accent: CTAs, links, key highlights.",
    anchor: 500,
    steps: {
      50: "#faf1ec", 100: "#f3ded2", 200: "#e7bda5", 300: "#d99a78", 400: "#cb7e57",
      500: "#b5643c", 600: "#9a522f", 700: "#7c4126", 800: "#5e321e", 900: "#432417",
    },
  },
  {
    name: "Sage",
    token: "sage",
    role: "Dried-herb green. Secondary accent, success states.",
    anchor: 500,
    steps: {
      50: "#f3f5ef", 100: "#e3e8da", 200: "#c8d1b8", 300: "#aab795", 400: "#93a27c",
      500: "#7d8b6a", 600: "#657155", 700: "#4f5843", 800: "#3b4232", 900: "#282d22",
    },
  },
  {
    name: "Moss",
    token: "moss",
    role: "Deep forest. Dark bands, footer, inverse surfaces.",
    anchor: 800,
    steps: {
      50: "#eef1ed", 100: "#d6ddd4", 200: "#aebbaa", 300: "#86997f", 400: "#5f7559",
      500: "#4a5e45", 600: "#3e4f3b", 700: "#344232", 800: "#2f3a2e", 900: "#222a21", 950: "#141a14",
    },
  },
  {
    name: "Brass",
    token: "brass",
    role: "Aged metal. Small highlights, ratings, warnings. Use sparingly.",
    anchor: 500,
    steps: {
      50: "#f8f3ea", 100: "#efe3cc", 200: "#e0c89c", 300: "#cfab73", 400: "#c29a62",
      500: "#b08d57", 600: "#8f7046", 700: "#6e5636", 800: "#4f3e27", 900: "#33281a",
    },
  },
  {
    name: "Earth",
    token: "earth",
    role: "Warm neutrals. 100 Bone (page), 200 Sand (surface), 900 Espresso (text).",
    anchor: 900,
    steps: {
      50: "#faf7f2", 100: "#f4efe6", 200: "#e9e1d3", 300: "#d8ccb9", 400: "#b5a794", 500: "#8f8272",
      600: "#6b6158", 700: "#4e4640", 800: "#3a332e", 900: "#2b2420", 950: "#1c1916",
    },
  },
  {
    name: "Rust",
    token: "rust",
    role: "Fired brick. Errors and destructive actions only.",
    anchor: 500,
    steps: { 100: "#f4dcd4", 500: "#a8432f", 700: "#7a2f21" },
  },
];

/** Signature colors with their brand names. */
export const namedColors = [
  { name: "Bone", token: "earth-100", hex: "#f4efe6", className: "bg-earth-100 text-earth-900", use: "Page background" },
  { name: "Sand", token: "earth-200", hex: "#e9e1d3", className: "bg-earth-200 text-earth-900", use: "Surfaces & cards" },
  { name: "Espresso", token: "earth-900", hex: "#2b2420", className: "bg-earth-900 text-earth-100", use: "Text" },
  { name: "Clay", token: "clay-500", hex: "#b5643c", className: "bg-clay-500 text-earth-100", use: "Primary actions" },
  { name: "Sage", token: "sage-500", hex: "#7d8b6a", className: "bg-sage-500 text-earth-100", use: "Secondary accent" },
  { name: "Moss", token: "moss-800", hex: "#2f3a2e", className: "bg-moss-800 text-earth-100", use: "Dark sections" },
  { name: "Brass", token: "brass-500", hex: "#b08d57", className: "bg-brass-500 text-earth-900", use: "Highlights" },
  { name: "Rust", token: "rust-500", hex: "#a8432f", className: "bg-rust-500 text-earth-100", use: "Errors" },
];

/** Role-based tokens. Use these in components; they flip in dark mode. */
export const semanticColors = [
  { name: "background", className: "bg-background", light: "earth-100", dark: "earth-950", use: "Page" },
  { name: "surface", className: "bg-surface", light: "earth-200", dark: "#26221e", use: "Tinted sections, cards" },
  { name: "raised", className: "bg-raised", light: "earth-50", dark: "#2e2924", use: "Elevated cards" },
  { name: "foreground", className: "bg-foreground", light: "earth-900", dark: "#f1ebe1", use: "Body text" },
  { name: "muted", className: "bg-muted", light: "earth-600", dark: "#a89d91", use: "Secondary text" },
  { name: "line", className: "bg-line", light: "earth-900 / 12%", dark: "#f1ebe1 / 12%", use: "Borders, dividers" },
  { name: "primary", className: "bg-primary", light: "clay-600", dark: "clay-400", use: "CTAs, links" },
  { name: "primary-hover", className: "bg-primary-hover", light: "clay-700", dark: "clay-300", use: "CTA hover" },
  { name: "accent", className: "bg-accent", light: "sage-500", dark: "sage-400", use: "Secondary accent" },
  { name: "highlight", className: "bg-highlight", light: "brass-500", dark: "brass-400", use: "Ratings, small marks" },
  { name: "inverse", className: "bg-inverse", light: "moss-800", dark: "moss-950", use: "Dark bands, footer" },
  { name: "danger", className: "bg-danger", light: "rust-500", dark: "#d0705c", use: "Errors" },
  { name: "on-primary / on-inverse", className: "bg-on-primary", light: "earth-100", dark: "earth-100", use: "Text on dark fills" },
];

export const fonts = [
  {
    name: "Fraunces",
    token: "font-display",
    role: "Headings, logo wordmark, large numerals",
    className: "font-display",
    sample: "Restored to clinical precision.",
  },
  {
    name: "Geist Sans",
    token: "font-sans",
    role: "Body copy, UI, navigation, buttons",
    className: "font-sans",
    sample: "Multi-brand chair repair with genuine parts.",
  },
  {
    name: "Geist Mono",
    token: "font-mono",
    role: "Part numbers, model codes, specifications",
    className: "font-mono",
    sample: "UD-HP-450 · 24 V DC · 320 kg load",
  },
];

export const typeScale = [
  { token: "text-display-2xl", className: "font-display text-display-2xl font-medium", size: "44 → 80px", use: "Home hero" },
  { token: "text-display-xl", className: "font-display text-display-xl font-medium", size: "36 → 60px", use: "Page heroes" },
  { token: "text-display-lg", className: "font-display text-display-lg font-medium", size: "30 → 48px", use: "Section titles" },
  { token: "text-display-md", className: "font-display text-display-md font-medium", size: "24 → 36px", use: "Feature titles" },
  { token: "text-display-sm", className: "font-display text-display-sm font-medium", size: "24px", use: "Card titles" },
  { token: "text-lead", className: "text-lead text-muted", size: "18px / 1.7", use: "Intro paragraphs" },
  { token: "text-base", className: "text-base", size: "16px / 1.5", use: "Body" },
  { token: "text-sm", className: "text-sm text-muted", size: "14px", use: "Meta, captions" },
  { token: "text-eyebrow", className: "text-eyebrow font-semibold uppercase text-primary", size: "12px · 0.22em", use: "Section labels" },
];

/** Tailwind spacing steps (base unit 4px). Class names are literal so Tailwind generates them. */
export const spacingScale = [
  { step: "1", px: 4, className: "w-1" },
  { step: "2", px: 8, className: "w-2" },
  { step: "3", px: 12, className: "w-3" },
  { step: "4", px: 16, className: "w-4" },
  { step: "6", px: 24, className: "w-6" },
  { step: "8", px: 32, className: "w-8" },
  { step: "10", px: 40, className: "w-10" },
  { step: "12", px: 48, className: "w-12" },
  { step: "16", px: 64, className: "w-16" },
  { step: "20", px: 80, className: "w-20" },
  { step: "24", px: 96, className: "w-24" },
  { step: "32", px: 128, className: "w-32" },
];

export const layoutSpacing = [
  { token: "py-section", value: "64 → 112px (fluid)", use: "Vertical rhythm between page sections" },
  { token: "py-section-sm", value: "48 → 72px (fluid)", use: "Compact bands, CTA strips" },
  { token: "h-header", value: "72px", use: "Sticky header height" },
  { token: "max-w-site", value: "1280px", use: "Page container" },
  { token: "max-w-copy", value: "640px", use: "Readable text column" },
  { token: "Container gutter", value: "16 / 24 / 32px", use: "px-4 → sm:px-6 → lg:px-8" },
];

export const radii = [
  { token: "rounded-control", value: "pill", className: "rounded-control", use: "Buttons, chips, inputs" },
  { token: "rounded-media", value: "20px", className: "rounded-media", use: "Images" },
  { token: "rounded-card", value: "24px", className: "rounded-card", use: "Cards" },
  { token: "rounded-card-lg", value: "32px", className: "rounded-card-lg", use: "Hero & feature panels" },
];

export const shadows = [
  { token: "shadow-card", className: "shadow-card", use: "Raised cards, primary buttons" },
  { token: "shadow-lift", className: "shadow-lift", use: "Hover state of interactive cards" },
];
