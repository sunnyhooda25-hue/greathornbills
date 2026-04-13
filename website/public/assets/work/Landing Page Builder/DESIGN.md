# Design System Strategy: The Editorial Architect

### 1. Overview & Creative North Star
This design system is built upon the **"Editorial Architect"** North Star. We are moving away from the "SaaS template" aesthetic and toward a high-end, bespoke workspace that feels like a physical studio. 

The system treats the digital canvas as a layered environment where the builder interface acts as a silent, sophisticated frame for the user's creation. By utilizing intentional asymmetry, expansive breathing room, and a tonal-first depth model, we create a high-productivity tool that feels premium and effortless. The "Coral" accent is not just a button color; it is a surgical tool used to guide focus in an otherwise serene, cream-toned environment.

---

### 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in warmth and professional calm. We prioritize tonal shifts over structural lines to define boundaries.

*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Structural definition must be achieved through background shifts. For example, the sidebar (`surface-container-high`) should sit flush against the preview canvas (`surface`) without a stroke.
*   **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets of fine paper. 
    *   **Level 0 (Background):** `surface` (#fcf9f4) — The main application shell.
    *   **Level 1 (The Canvas):** `surface-container-low` (#f6f3ee) — The "work area" where the landing page lives.
    *   **Level 2 (Panels):** `surface-container-high` (#ebe8e3) — Sidebars and persistent tools.
    *   **Level 3 (Floating Elements):** `surface-container-lowest` (#ffffff) — Contextual menus and active cards.
*   **The Glass & Gradient Rule:** For floating inspectors or drag-and-drop ghosts, use `surface-variant` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** Main CTAs should utilize a subtle linear gradient from `primary` (#b90040) to `primary-container` (#e31754) at a 135° angle to add "soul" and dimension to the coral brand identity.

---

### 3. Typography: The Inter Editorial
We leverage **Inter** not as a generic sans-serif, but as a Swiss-style typographic grid.

*   **Display & Headline (The Statement):** `display-lg` through `headline-sm` use tighter tracking (-0.02em) to create an authoritative, editorial feel. These are reserved for the user's page content previews.
*   **Title & Body (The Interface):** `title-md` and `body-md` provide the functional scaffolding. Interface labels should use `label-md` with uppercase styling and +0.05em letter spacing to differentiate "App UI" from "User Content."
*   **Hierarchy through Tonality:** Use `on-surface-variant` for secondary labels and metadata. This soft contrast ensures the interface recedes, allowing the `primary` coral accents and the user's content to command attention.

---

### 4. Elevation & Depth: Tonal Layering
Traditional structural lines make a tool feel "boxed in." We achieve hierarchy through natural light and stacking.

*   **The Layering Principle:** Depth is created by placing a "brighter" surface on a "dimmer" one. Place a `surface-container-lowest` card on a `surface-container` background to create a lift that feels organic.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use a multi-layered shadow:
    *   *Shadow:* `0 4px 20px -2px rgba(92, 63, 66, 0.08)` (using a tinted `on-surface-variant` color).
*   **The "Ghost Border" Fallback:** If a divider is required for extreme accessibility needs, use `outline-variant` at 15% opacity. Never use a 100% opaque stroke.
*   **Interaction Feedback:** On hover, instead of a border, shift the background from `surface-container` to `surface-bright`.

---

### 5. Components: The Studio Kit

*   **Buttons:**
    *   *Primary:* Gradient fill (`primary` to `primary-container`), `xl` roundedness (0.75rem), `on-primary` text.
    *   *Secondary:* `surface-container-highest` fill with no border. Soft and integrated.
    *   *Tertiary:* `on-surface` text with no background. High-alpha `primary` hover state.
*   **Drag-and-Drop Blocks (Sidebar):** Use `surface-container-low` for block icons. On grab, transition to a "Glass" state (backdrop-blur) with a `primary` "Ghost Border" to indicate placement.
*   **Input Fields:** Ghost-style inputs. Use `surface-container-highest` for the field background. No border. Upon focus, a subtle `primary` 1px underline (the only exception to the border rule).
*   **Cards & Lists:** Prohibit dividers. Use `32px` vertical spacing (from the scale) to separate list groups.
*   **Tooltips:** Small, `inverse-surface` backgrounds with `label-sm` typography. 500ms delay to prevent visual noise.
*   **The "Preview Toggle":** A floating `surface-container-lowest` segmented control at the bottom center of the screen, using `md` roundedness for a pill-like, tactile feel.

---

### 6. Do's and Don'ts

**Do:**
*   **Do** use asymmetrical margins in the sidebar to create an editorial layout.
*   **Do** use `surface-container` shifts to define the "active" state of a tool.
*   **Do** embrace white space. If a section feels crowded, remove a border and add 16px of padding.

**Don't:**
*   **Don't** use pure black (#000000) for text; use `on-surface` (#1c1c19) to maintain the "cream" warmth.
*   **Don't** use standard "drop shadows" with grey colors. Always tint shadows with the surface's undertone.
*   **Don't** use 9999px (pill) buttons unless it's for a secondary "Tag" or "Chip." Stick to `xl` (0.75rem) for a more professional, architectural look.