# Design System Document: Great Hornbills Marketing Performance Dashboard

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Navigator"**

This design system is built to transcend the "standard dashboard" aesthetic. Instead of a flat, utility-first interface, we are crafting a high-end, editorial environment for marketing intelligence. The system moves away from rigid, boxy layouts in favor of **Tonal Depth** and **Intentional Asymmetry**.

The goal is to make the user feel like they are looking into a sophisticated, backlit command center. We achieve this by layering dark, matte surfaces with high-chroma accents (Coral and Indigo), creating a "lit from within" effect that guides the eye toward critical data points without overwhelming the senses.

---

## 2. Colors & Surface Logic

### The Palette
The color logic is rooted in a "Deep Space" philosophy, using high-contrast accents to punctuate a dark, immersive background.

*   **Background (`#0f0f14`):** The foundational layer. Deep, void-like, and matte.
*   **Surface Low (`#1a1a24`):** Navigation, sidebars, secondary panels.
*   **Surface Mid (`#1f1f2a`):** Data cards, interactive modules.
*   **Surface High (`#2a2a36`):** Hover states, floating modals.
*   **Primary Accent (`#ff3366` / Coral):** Used for "Critical Momentum" — primary CTAs, positive growth trends, active states, chart lines, and the main action color.
*   **Secondary Accent (`#6366f1` / Electric Indigo):** Used for "Analytical Depth" — secondary data sets, sidebar highlights, campaign badges, and navigational indicators.
*   **Tertiary Accent (`#8b5cf6` / Violet):** Used for gradient endpoints, AI/insight features, and premium visual flourishes.
*   **Success (`#10b981` / Emerald):** Positive trends, active badges, growth indicators.
*   **Error (`#ef4444` / Red):** Negative metrics, alerts, cost increases.
*   **Text Primary (`#ffffff`):** Hero metrics, KPI numbers, headings.
*   **Text Body (`#a1a1aa` / Zinc Gray):** Body copy, descriptions, secondary info.
*   **Text Mute (`#71717a` / Dim Gray):** Timestamps, metadata, labels.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections or cards.
*   **Boundary Definition:** Use background color shifts. A `#1a1a24` card sitting on a `#0f0f14` background provides enough contrast to be felt, not just seen.
*   **Tonal Transitions:** Use soft, internal glows (inner shadows) rather than external strokes to define shape.

### Glass & Gradient Logic
To move beyond a "template" feel, floating elements (modals, dropdowns) must utilize **Glassmorphism**:
*   **Background:** `#2a2a36` at 70% opacity.
*   **Effect:** `backdrop-filter: blur(20px)`.
*   **Signature Gradient:** Main hero charts or primary CTAs should utilize a linear gradient transitioning from `#ff3366` (Coral) to `#8b5cf6` (Violet) at a 135-degree angle.
*   **Performance Ribbon:** A thin 2px bar at the top of data cards using a gradient from `#6366f1` (Indigo) to `#ff3366` (Coral) — the visual signature of the brand.

---

## 3. Typography
We utilize the **Inter** family to maintain a sleek, Swiss-inspired precision, but we apply an **Editorial Scale** to create hierarchy.

*   **Display Scale (`display-lg` to `display-sm`):** Reserved for "The Big Number" — KPIs like Total Revenue or Conversion Rate. Use `letter-spacing: -0.02em` to feel tighter and more authoritative. Color: `#ffffff`.
*   **Headline & Title (`headline-lg` to `title-sm`):** Used for section headers. Ensure `headline-lg` is paired with significant whitespace to act as an anchor for the page. Color: `#ffffff`.
*   **Body & Labels (`body-lg` to `label-sm`):** Used for data descriptions and micro-copy. Color: `#a1a1aa` (Zinc Gray) for labels so the primary data (white) remains the focal point.
*   **Category Headers:** Use `label-sm` in all-caps with `letter-spacing: 0.1em` and color `#71717a` for a "technical" look without adding weight.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are replaced by **Ambient Luminance**.

### The Layering Principle
Depth is achieved by stacking surface tiers:
1.  **Level 0 (Base):** `#0f0f14` — The main canvas.
2.  **Level 1 (Sections):** `#1a1a24` — Large content areas, sidebars.
3.  **Level 2 (Cards):** `#1f1f2a` — Interactive data modules.
4.  **Level 3 (Elevated):** `#2a2a36` — Hover states, tooltips, modals.

### The "Ghost Border" Fallback
If a boundary is required for accessibility, use a **Ghost Border**:
*   **Stroke:** 1px
*   **Color:** `#2a2a36` at **15% opacity**.
*   **Purpose:** To catch the light, not to draw a box.

### Glow Effects (Status Badges)
Status indicators (e.g., "Active Campaign") must use a **Luminescent Glow**:
*   **Coral Glow:** `box-shadow: 0 0 12px rgba(255, 51, 102, 0.3)` — for primary active states.
*   **Indigo Glow:** `box-shadow: 0 0 12px rgba(99, 102, 241, 0.3)` — for secondary highlights.
*   **Emerald Glow:** `box-shadow: 0 0 12px rgba(16, 185, 129, 0.3)` — for success/active badges.

---

## 5. Components

### Buttons
*   **Primary:** Solid `#ff3366` background with `#ffffff` text. No border. Maximum (`pill-shaped`) corner radius. On hover, increase glow (`box-shadow: 0 8px 32px rgba(255, 51, 102, 0.4)`) rather than changing background.
*   **Secondary:** Glass-style. `#2a2a36` background at 70% opacity with `#a1a1aa` text and 15% ghost border.
*   **Accent:** `#6366f1` background with `#ffffff` text. Glow: `box-shadow: 0 8px 32px rgba(99, 102, 241, 0.4)`.

### Data Cards
*   **Design:** Forbid the use of divider lines. Separate "Card Header" from "Card Body" using a 24px vertical gap.
*   **Background:** `#1f1f2a` on `#0f0f14` base.
*   **Charts:** Line charts use `#ff3366` stroke with gradient fill (`#ff3366` at 30% opacity → transparent). Data points carry a soft coral glow.
*   **Trends:** Use `#10b981` (Emerald) for positive and `#ef4444` (Red) for negative, as small chips or icon accents only.

### The "Performance Ribbon" (Unique Component)
A horizontal 2px bar at the top of data cards:
*   **Gradient:** `linear-gradient(90deg, #6366f1, #ff3366)` — Indigo to Coral.
*   **Opacity:** 40% default, 100% on card hover.
*   **Purpose:** The visual signature of the Great Hornbills brand.

### Input Fields
*   **Style:** `#2a2a36` background. No border. On focus, a 2px outer glow using `#ff3366` at 30% opacity.

### Status Badges
*   **Shape:** Pill/full roundedness.
*   **Active:** `#10b981` at 15% opacity background, solid 4px emerald dot with luminescent glow.
*   **Warning:** `#f59e0b` at 15% opacity background.
*   **Error:** `#ef4444` at 15% opacity background.

---

## 6. Do's and Don'ts

### Do:
*   **Use Compact Spacing:** Give more room to high-level KPIs than to secondary lists to create a sense of importance.
*   **Embrace the Dark:** Allow large areas of `#0f0f14` to exist. Negative space in a dark UI creates a "premium" feel.
*   **Layer Textures:** Use a very subtle noise texture (2-3% opacity) over background surfaces to prevent "banding" in gradients.

### Don't:
*   **Don't use 100% white text for everything:** Use `#ffffff` for hero metrics and headings only. Use `#a1a1aa` for body text and `#71717a` for metadata.
*   **Don't use standard shadows:** Never use pure black (`#000000`) for shadows. Tint shadows with `#0f0f14` or accent colors to maintain color harmony.
*   **Don't use dividers:** If you feel the need to add a line, add 8px of extra padding instead. Whitespace is your primary organizational tool.
*   **Don't use pure black backgrounds:** Always use `#0f0f14` (near-black with warmth) to maintain depth.

---

## 7. Spacing Scale
The system relies on a strict 8pt grid to maintain mathematical harmony amidst the visual asymmetry.
*   **Minimal:** 4px, 8px (Inner component spacing)
*   **Compact:** 16px, 24px (Component to component)
*   **Normal:** 48px, 64px, 80px (Section to section)

---

## 8. Brand Color Quick Reference

| Token | Hex | Usage |
|-------|-----|-------|
| Base | `#0f0f14` | Page background |
| Surface Low | `#1a1a24` | Sidebars, nav |
| Surface Mid | `#1f1f2a` | Cards |
| Surface High | `#2a2a36` | Hover, modals |
| Coral | `#ff3366` | Primary CTA, chart lines, active |
| Indigo | `#6366f1` | Secondary accent, nav highlights |
| Violet | `#8b5cf6` | Gradient endpoint, AI features |
| Emerald | `#10b981` | Success, active badges |
| Red | `#ef4444` | Error, negative metrics |
| White | `#ffffff` | Headings, KPI numbers |
| Zinc Gray | `#a1a1aa` | Body text |
| Dim Gray | `#71717a` | Labels, metadata |

*Director's Note: Every pixel must feel intentional. If an element doesn't have a reason to glow, let it recede into the shadows. We are building a cockpit, not a spreadsheet.*