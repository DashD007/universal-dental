---
name: Universal Dental
description: Multi-brand dental chair service and ortho-medical equipment supply, in an earthy, modern, premium workshop register.
colors:
  primary: "#9a522f"
  primary-hover: "#7c4126"
  accent: "#7d8b6a"
  highlight: "#b08d57"
  inverse: "#2f3a2e"
  inverse-deep: "#141a14"
  background: "#f4efe6"
  surface: "#e9e1d3"
  raised: "#faf7f2"
  foreground: "#2b2420"
  muted: "#6b6158"
  line: "rgb(43 36 32 / 0.12)"
  on-primary: "#f4efe6"
  on-inverse: "#f4efe6"
  danger: "#a8432f"
  placeholder-flag: "#e0c89c"
typography:
  display:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.8vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline-section:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.4rem + 2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.33
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  control: "9999px"
  media: "20px"
  card: "24px"
  card-lg: "32px"
spacing:
  unit: "4px"
  section: "clamp(4rem, 3rem + 4vw, 7rem)"
  section-sm: "clamp(3rem, 2.5rem + 2vw, 4.5rem)"
  header: "72px"
  container: "1280px"
  copy: "640px"
  gutter: "16px / 24px / 32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.control}"
    padding: "0 28px"
    height: "52px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.on-inverse}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-inverse:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-inverse}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  input-text:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "48px"
  chip-choice:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  chip-choice-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  placeholder-tag:
    backgroundColor: "{colors.placeholder-flag}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "4px 10px"
  card-surface:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "24px"
  card-raised:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.card}"
    padding: "32px"
  card-inverse:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-inverse}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: Universal Dental

## Overview

**Creative North Star: "The Restored Workshop"**

The system reads like a well-kept technician's workshop seen in warm light: bone and sand grounds, deep moss bands that run the full width of the page, terracotta clay reserved for the action, and a single brass glint for small marks of proof. It is a calm, editorial register for a technical trade. Large Fraunces headlines carry the voice; Geist carries everything that has to be read, tapped or filled in.

Density is generous. Sections breathe on a fluid vertical rhythm, content sits on a 12-column split (usually 5/7 or 7/5), and structure comes from hairline rules rather than boxes. Cards exist, but most lists are ruled rows: divided services, divided equipment categories, ruled FAQ disclosures, top-ruled steps. Photography is warm and close to the equipment, set in softly rounded frames.

The build rejects the category default of a blue-white clinic, a smiling stock dentist and three icon cards under a centred headline. Proof is shown, never invented: anything that is not yet real material is flagged in the interface itself.

**Key Characteristics:**
- Warm earth neutrals with full-width moss bands at page scale, not as accents.
- One clay action colour on pill-shaped controls.
- Fraunces display at medium weight with tight negative tracking; Geist for body and UI.
- Hairline-ruled lists over boxed cards.
- Headings stand alone on Home: no small labels above them.
- Visible placeholder conventions for anything that is not yet real.

## Colors

An earthy, low-saturation palette: warm paper neutrals, one terracotta action colour, a sage and brass pair for small marks, and deep moss for inverse bands. Every UI colour is a semantic role that flips in dark mode; components use the roles, never the raw scales.

### Primary
- **Fired Clay** (clay-600): the action colour in light mode. Primary buttons, the selected choice chip, the mobile "Report a fault" action, link and row hover states, focus rings, caret, text selection, the ticker separator dots and the contact icons in the quote section. It replaced clay-500 as light-mode primary so that bone text on it clears 4.5:1 (about 5.1:1).
- **Kiln Clay** (clay-700): primary hover in light mode.
- In dark mode primary becomes clay-400 and hover clay-300.

### Secondary
- **Dried Sage** (sage-500; sage-400 in dark mode): checkmark icons in light-ground lists (refurbishment scope, standard care plans) and success states.

### Tertiary
- **Aged Brass** (brass-500; brass-400 in dark mode): small marks on dark ground only. The hero proof-point icons, the testimonial quote mark, checkmarks in the featured care plan, footer column headings and the utility-bar phone hover. Brass-200 is reserved for the placeholder flag.

### Neutral
- **Bone** (earth-100): page background, and the text colour on clay and moss.
- **Sand** (earth-200): tinted section bands (ticker, refurbishment, care plans, quote, image credits) and surface cards.
- **Paper** (earth-50): raised cards, such as the quote form, and the before/after handle.
- **Espresso** (earth-900): body text.
- **Worn Taupe** (earth-600): secondary text, captions, hints, inactive nav.
- **Hairline** (espresso at 12%): every rule, divider and quiet border.
- **Deep Moss** (moss-800; moss-950 in dark mode): inverse bands. The utility bar, the service-visit steps, testimonials, the footer and the featured care plan.
- **Night Moss** (moss-950): the hero scrim and the before/after overlay labels at 75%.
- **Fired Brick** (rust-500): errors and invalid fields only.

### Named Rules
**The One Action Colour Rule.** Clay means "act here". Use it for the primary action, selection, focus and hover feedback, and never as a decorative fill or section background.

**The Bands Not Accents Rule.** Moss appears as full-width bands or whole cards, at page scale. It is never a thin stripe, badge or small accent.

**The Brass On Dark Rule.** Brass is a small mark (icons, quote marks, small headings) placed on moss. It is never body text and never a fill, except for the placeholder flag.

## Typography

**Display Font:** Fraunces (falls back to ui-serif, Georgia)
**Body Font:** Geist Sans (falls back to ui-sans-serif, system-ui)
**Label/Mono Font:** Geist Mono, only for part numbers, model codes and specifications

**Character:** a soft, slightly old-style serif at medium weight, set tight and large, over a neutral modern sans. The result is crafted rather than clinical. Every h1 to h3 is Fraunces with balanced wrapping.

### Hierarchy
- **Display** (500, 44px to 80px fluid, 1.02, -0.025em): the Home hero headline only.
- **Headline** (500, 36px to 60px fluid, 1.05, -0.02em): inner-page hero titles and the two anchor headings on Home ("What you can hold us to.", "Tell us about the chair.").
- **Headline Section** (500, 30px to 48px fluid, 1.1, -0.015em): standard section titles.
- **Title** (500, 24px to 36px fluid, 1.15): service row titles, care plan names, the featured testimonial.
- **Title Small** (500, 24px, 1.2): ticker names, step titles, differentiator terms, FAQ questions.
- **Lead** (400, 18px, 1.7): section subheads and intro paragraphs, capped at the 640px copy measure.
- **Body** (400, 16px, 1.5): running copy. Secondary text in muted taupe.
- **Label** (500, 12px): chips, badges, the placeholder flag, overlay labels and sample captions (at 400 in muted).

### Named Rules
**The Heading Stands Alone Rule.** On Home, a heading is never preceded by a small uppercase label, kicker or eyebrow. The heading and its subhead carry the section. The `text-eyebrow` token (12px, 0.22em tracking, uppercase) exists in the theme. On Home its only use is footer column headings, where the tracked label is itself the heading.

**The Serif Is For Reading Big Rule.** Fraunces sets headings, ticker names, FAQ questions and the featured quote. Buttons, nav, forms and captions are always Geist.

## Layout

The page is a stack of full-bleed bands, alternating Bone, Sand and Moss, each inside a centred container (1280px max, 16px / 24px / 32px gutters at base / sm / lg). Vertical rhythm between sections is a fluid section space (64px to 112px); compact bands use the smaller step (48px to 72px). The sticky header is 72px, and in-page anchors scroll-offset by it.

Inside a band, content sits on a 12-column grid from lg up, usually split 5/7 or 7/5 with 48px to 64px gutters. The heading column is often sticky on desktop (services). Below lg everything collapses to a single column. Readable text is capped at 640px. The base spacing unit is 4px.

On small screens (below md), a fixed 64px bottom action bar (Call, Report a fault, Quote list) replaces the header CTA, and the hero holds nearly a full viewport (100svh minus the header and utility chrome). Every page works at 375px.

## Elevation & Depth

Mostly flat, built on tonal layering: Bone page, Sand bands, Paper raised cards, Moss inverse bands. Two warm, espresso-tinted shadows exist and are used sparingly. Depth on the hero comes from a moss gradient scrim over photography rather than from shadows.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgb(43 36 32 / 0.06), 0 8px 24px -12px rgb(43 36 32 / 0.18)`): raised cards (the quote form), primary buttons and the before/after divider.
- **Lift** (`box-shadow: 0 2px 4px rgb(43 36 32 / 0.06), 0 24px 48px -20px rgb(43 36 32 / 0.3)`): hover state of interactive cards, the featured care plan and the before/after handle.

### Named Rules
**The Tone Before Shadow Rule.** Separate surfaces by stepping Bone, Sand, Paper and Moss first. A shadow is for a surface that floats (a form, a featured plan, a draggable handle) or for hover feedback.

## Shapes

Two shape families. Controls are full pills: buttons, chips, text inputs, badges, the placeholder flag and nav items. Containers are softly rounded: images at 20px, cards at 24px, and the hero-scale feature panels (before/after frame, equipment photo) at 32px. Textareas use the 20px media radius so they don't stretch into a pill. Borders are 1px hairlines at 12% espresso. Small dots (6px circles in clay) separate ticker items.

## Components

### Buttons
Confident, tactile pills.
- **Shape:** full pill (9999px).
- **Primary:** clay fill, bone text, card shadow. Sizes are 36px (sm), 44px (md) and 52px (lg) tall, with 16px, 20px and 28px horizontal padding. The label is Geist medium at 14px (16px at lg). Icons are 16px, and a trailing arrow marks forward actions.
- **Hover / Focus:** hover deepens to kiln clay over 200ms on the soft ease. Focus is a 2px clay outline offset by 2px. Disabled drops to 45% opacity.
- **Secondary:** transparent with a 1px espresso border at 20% (60% on hover) and a 5% espresso wash on hover. Pairs with primary, and is the default action inside sections.
- **Light:** the outline variant for moss bands: bone border at 30%, full bone on hover with a 10% wash. Used for "Call" beside "Book a service" in the hero.
- **Inverse / Ghost:** a solid moss pill (moss-700 on hover), and a borderless low-emphasis action. Both are defined but secondary in use.
- **Icon:** a 44px square secondary button (the mobile menu open and close controls).

### Chips
- **Style:** choice chips are 44px pills with a 1px espresso border at 20% (50% on hover) and 14px Geist.
- **State:** a selected chip fills clay with bone text. They are native radios, so focus shows the clay outline on the chip.
- **Badges:** 12px medium pills on a 12% to 15% tint of their role colour.

### Cards / Containers
- **Corner Style:** 24px (cards), 32px (feature panels).
- **Background:** Sand (surface), Bone with a hairline (outline), Paper with card shadow (raised), Moss (inverse), or Clay (promotional, at most one per view).
- **Shadow Strategy:** flat by default. Raised cards take the card shadow, and interactive cards lift 4px with the lift shadow on hover (motion-safe only).
- **Border:** a hairline on outline cards only.
- **Internal Padding:** 20px (sm), 24px to 32px (md), 32px to 40px (lg).

### Inputs / Fields
- **Style:** 48px pill inputs on Bone, a 1px espresso border at 20% (40% on hover) and 16px text with 16px side padding. Labels are 14px medium above the field, with an "Optional" marker right-aligned in muted 12px. Hints are 12px muted.
- **Focus:** the border turns clay and a 2px clay outline sits flush.
- **Error:** the border turns brick, with a 14px brick message below linked by aria-describedby.

### Navigation
- **Header:** sticky, Bone at 85% with a medium backdrop blur and a hairline bottom. It holds the logo, pill nav items (14px medium, muted, foreground on hover, active state on a 8% espresso wash), the phone link at lg, and a small primary "Request a quote" from md.
- **Utility bar:** a 40px moss strip above the header with the "Chair down?" line and the phone link.
- **Mobile:** a full-screen native dialog menu that fades and rises 8px (no motion under reduced motion), plus the fixed bottom action bar with the clay centre action.
- **Footer:** a moss band with 4 columns, Brass tracked-uppercase column headings, links at 80% opacity (100% on hover) and a legal bar at 60%.

### Ruled Lists (signature)
The default way to present a set: rows separated by hairlines, with no boxes. Service rows are Fraunces titles with a muted summary and an up-right arrow that nudges diagonally and turns clay on hover. Equipment categories are 18px medium rows. FAQ entries are exclusive `details` disclosures with a plus that rotates 45 degrees. Steps and differentiators are top-ruled blocks, and the differentiators use a heavier 80% espresso rule.

### Before/After Slider (signature)
A 4:3 frame (3:2 from sm) at the 32px radius. A native range input covers the frame, so drag and arrow keys both work. The split drives a clip-path, and the divider is a 2px Paper line with a 48px Paper handle carrying a chevrons icon and the lift shadow. "Before" and "After" labels are pills in Night Moss at 75% with a backdrop blur.

### Systems Ticker (signature)
A Sand band of Fraunces 24px chair-system names separated by 6px clay dots. It drifts on a 60s linear loop, pauses on hover and is static under reduced motion.

### Placeholder Conventions
Three ways the interface tells the truth about material that is not yet real:
- **PlaceholderTag:** a pill in brass-200 with espresso 12px medium text, placed inline with the content it qualifies (for example "Placeholder quote" in a testimonial caption). The default label is "Placeholder".
- **"Sample" captions:** a 12px muted line directly under the sample content, starting with "Sample" and saying what replaces it ("Sample image with simulated wear. Your own before and after photos go here.", "Sample categories. The full catalogue arrives with the Shop."). A placeholder before/after uses one photo with simulated wear on the before layer.
- **Image credits:** a collapsed "Placeholder photography credits" disclosure in a Sand strip with a hairline top, at the very end of the page. It lists subject, author, source and licence for each placeholder photo, and disappears once the list is empty.

## Do's and Don'ts

### Do:
- **Do** use the semantic roles (background, surface, raised, foreground, muted, line, primary, accent, highlight, inverse, danger) in components, never the raw scales. The one exception is the brass-200 placeholder flag.
- **Do** keep clay for the single primary action per view, plus selection, focus and hover feedback.
- **Do** run moss as full-width bands or whole cards, with bone text and brass small marks.
- **Do** separate lists with 1px hairlines before reaching for cards.
- **Do** set h1 to h3 in Fraunces at weight 500 with the fluid display steps, and keep body copy within 640px.
- **Do** put every control on the pill radius and every container on the 20px, 24px or 32px radius.
- **Do** gate decorative motion (hero settle, ticker drift, card lift) behind reduced-motion, using the soft ease (cubic-bezier(0.22, 1, 0.36, 1)).
- **Do** mark any non-real content with a PlaceholderTag or a "Sample" caption, and credit placeholder photography.

### Don't:
- **Don't** place a small uppercase label, kicker or eyebrow above a heading on Home.
- **Don't** use clay as a section background or a decorative fill.
- **Don't** set brass as body text or on light grounds, apart from the placeholder flag.
- **Don't** show numbers, ratings, response-time promises or client names that the owner has not supplied. Leave a flagged gap instead.
- **Don't** reach for blue-white clinical palettes or Tailwind's default colours. They are switched off in the theme.
- **Don't** use Geist Mono for anything but part numbers, model codes and specifications.
