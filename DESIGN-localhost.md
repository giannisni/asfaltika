# Design System Inspired by ΠΑΣΧΑΛΙΔΗΣ

> Auto-extracted from `http://localhost:5000/` on 2026-05-12

## 1. Visual Theme & Atmosphere

Clean, minimal, and product-focused with deliberate use of whitespace.

The hero section leads with "Χτίζουμε τους Δρόμουςπρος το Μέλλον" followed by "Κορυφαία παραγωγή ασφάλτου και ανάπτυξη υποδομών σε όλη την Ελλάδα. Ποιότητα, αντοχή και καινοτομία ".

**Key Characteristics:**
- Inter as the heading font
- Inter as the body font for all running text
- Heading weight 900, letter-spacing -2.4px
- Light/white background (#e8e6e1) as the primary canvas
- Primary accent `#f5dc0a` used for CTAs and brand highlights
- 2 shadow level(s) detected — tinted shadows
- Moderate border-radius (4px) — balanced and professional
- Tags: light, soft, accented, bold-typography, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#f5dc0a`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#1e3d8f`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#e8e6e1`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#ffffff`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#414448`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#2a2d3a`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#2a2d3a` | `--palette-1` | section | large | text-light |
| 2 | `#ffffff` | `--palette-2` | section | large | text-dark |
| 3 | `#f5dc0a` | `--palette-3` | text-accent | large | text-dark |
| 4 | `#000000` | `--palette-4` | block | large | text-light |
| 5 | `#1e3d8f` | `--palette-5` | text-accent | medium | text-light |

## 3. Typography Rules

- **Heading Font:** `Inter`, sans-serif
- **Body Font:** `Inter`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Inter | 96px | 900 | 96px | -2.4px |
| H2 | Inter | 36px | 700 | 40px | -0.9px |
| H3 | Inter | 18px | 700 | 28px | -0.45px |
| Body | Inter | 20px | 400 | 28px | normal |
| Small | Inter | 14px | 700 | 20px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `96px` | headings |
| H1 | `48px` | headings |
| H2 | `36px` | headings |
| H3 | `20px` | headings |
| H4 | `18px` | headings |
| Body L | `16px` | body / supporting text |
| Body | `14px` | body / supporting text |
| Small | `12px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #f5dc0a;
  color: #1e3d8f;
  border-radius: 3px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 700;
  border: 0.555556px solid rgb(30, 61, 143);
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #ffffff;
  border-radius: 0px;
  padding: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `8px` — use multiples (16px, 24px, 32px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `8px` | element |
| spacing-2 | `24px` | card |
| spacing-3 | `16px` | element |
| spacing-4 | `64px` | section |
| spacing-5 | `80px` | section |
| spacing-6 | `96px` | section |
| spacing-7 | `6px` | element |
| spacing-8 | `32px` | card |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-subtle | `4px` | subtle |
| radius-subtle | `3px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#e8e6e1` as the primary background color
- Use `Inter` for all headings and `Inter` for body text
- Use `#f5dc0a` as the single dominant accent/CTA color
- Maintain `8px` as the base spacing unit — all gaps should be multiples
- Make headlines large and bold — typography is the hero element
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 900 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Inter/Inter with generic alternatives
- Don't use irregular spacing — stick to 8px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use pure black (#000000) for text — use `#414448` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 8px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #e8e6e1
Text:        #414448
Accent:      #f5dc0a
Secondary:   #1e3d8f
Border:      #2a2d3a
```

### Example Prompts

1. "Build a hero section with a `#e8e6e1` background, `Inter` heading in `#414448`, and a `#f5dc0a` CTA button with 3px radius."
2. "Create a pricing card using background `#ffffff`, border `#2a2d3a`, `Inter` for text, and 24px padding."
3. "Design a navigation bar — `#e8e6e1` background, `#414448` links, `#f5dc0a` for active state."
4. "Build a feature grid with 3 columns, 24px gap, each card using the card component style."
5. "Create a footer with `#414448` background, `#e8e6e1` text, and 16px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 18 custom properties extracted from `:root` / `html` stylesheets.

### Spacing Variables

| Variable | Value |
|---|---|
| `--radius` | `0.25rem` |

### Typography Variables

| Variable | Value |
|---|---|
| `--font-display` | `'Inter', sans-serif` |
| `--font-body` | `'Inter', sans-serif` |

### Other Variables

| Variable | Value |
|---|---|
| `--background` | `0 0% 100%` |
| `--foreground` | `220 5% 27%` |
| `--primary` | `54 93% 50%` |
| `--primary-foreground` | `220 65% 34%` |
| `--secondary` | `220 12% 20%` |
| `--secondary-foreground` | `0 0% 100%` |
| `--muted` | `40 5% 93%` |
| `--muted-foreground` | `0 0% 45%` |
| `--accent` | `46 80% 55%` |
| `--accent-foreground` | `220 12% 20%` |
| `--destructive` | `0 84% 60%` |
| `--destructive-foreground` | `0 0% 98%` |
| `--border` | `0 0% 85%` |
| `--input` | `0 0% 91%` |
| `--ring` | `54 93% 50%` |
