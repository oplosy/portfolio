# Design System: Operational Editorial

## Direction

The portfolio presents backend engineering through an editorial document rather than a product dashboard. Oversized typography, strict rules, long horizontal movement, and measured technical labels provide the visual language. There are no generic cards, glass surfaces, gradients, badge clouds, or decorative network diagrams.

## Palette

- Paper: `#f0eee7`
- Ink: `#11110f`
- Muted ink: `#68675f`
- Signal red: `#ff3b18`

Red is limited to emphasis, indices, progress, and external-link direction. Black and paper carry the layout.

## Typography

Geist Sans is the primary display and reading face. Georgia italic creates deliberate contrast for one word or phrase in major statements. IBM Plex Mono is reserved for indices, coordinates, system labels, and architecture order.

Display typography is tightly tracked, uppercase, and allowed to become spatial. Body copy stays left-aligned with conventional line lengths and line height.

## Layout

The page alternates between large quiet fields and dense technical information:

1. A sticky 230vh hero with three independently moving lines.
2. A normal-flow positioning statement revealed through line masks.
3. A pinned horizontal project track containing an introduction and four full-viewport project chapters.
4. Opposing discipline tickers on the red signal field.
5. A two-column working-set index.
6. A full-height contact conclusion.

At `760px` and below, projects return to normal vertical reading order. Mobile retains a smaller independent hero scrub instead of inheriting desktop movement.

## Motion

GSAP ScrollTrigger owns only scroll-linked transforms. The hero lines separate in opposing directions, the project track maps vertical scrolling to horizontal travel, project content reveals inside that travel, and discipline rows counter-scroll. Movement is reversible and derives from the visitor's scroll position.

Reduced-motion mode removes the extended hero travel and all scripted motion. The document remains complete and readable.

## Interaction rules

- Use native scrolling and native cursor behavior.
- Keep links textual and visibly underlined by structure, not button chrome.
- Do not animate layout properties.
- Do not add isolated hover spectacle that has no navigational meaning.
- Maintain semantic heading order and ordinary DOM reading order.
- Preserve all four verified projects and their repository destinations.
