# Design System: Control Room

## Direction

The portfolio reads like the quiet room where a backend system is watched. It is a dark graphite field with bone-white type and one amber signal. The amber behaves like a status lamp: it lights up only where something is live, active, or worth attention. Real architecture from the four projects is the only diagram material. There are no fake terminals, matrix code, glass cards, gradients, badge clouds, or invented metrics.

## Palette

- Background: `#0e0f0f`
- Raised surface: `#151717` (systems panel and mobile pipelines only)
- Ink: `#ece8df`
- Soft ink: `#c9c5bb` (body copy)
- Muted: `#8f8b82` (labels and indices)
- Lines: ink at 12% and 26% opacity
- Signal amber: `#f2a43a`

Amber is limited to the italic emphasis word in each major heading, the section and project indices, the live status dot, traffic packets, the core PostgreSQL node, progress indicators, focus rings, and hover states. Everything else is ink on graphite.

## Typography

- **Geist Sans** (`--font-geist-sans`) sets display and body text. Display type is tightly tracked (`-0.045em` to `-0.06em`) in sentence case.
- **Instrument Serif italic** interrupts one decisive word or phrase per major statement: *calm*, *calm software*, *Four ways*, *Judgment stays*, *hold?*
- **Geist Mono** (`--font-geist-mono`) is evidence only: section indices, eyebrows, architecture order, stack lists, time, and figure captions.

## Layout

1. **Hero.** A 7/5 grid, with the statement, lede, and actions on the left and the Fig. 01 topology on the right. A meta rule above the statement carries the role and a live Istanbul clock.
2. **Approach (01).** A section head sits on a 3/9 grid, followed by three principles, each opened by a rule with an amber lead segment.
3. **Selected systems (02).** Four project articles scroll on the left. A sticky "Request path" panel on the right shows the active project's architecture pipeline, an `NN / 04` counter, and a four-segment progress rail.
4. **Working set (03).** A full-width definition table: mono category on the left, large sans items on the right.
5. **Contact (04).** An oversized question, one full-width GitHub row, and a mono footer base.

The layout changes at two breakpoints:

- **At 1024px and below**, the page collapses to one column. The sticky panel is removed, and each article renders its own inline pipeline on a raised surface.
- **At 640px and below**, the navigation keeps only Systems and Contact, the hero actions stretch to full width, and section heads stack.

## Motion

- **Entrance (GSAP).** Hero lines rise out of line masks. Meta, lede, and actions follow, and topology edges draw in.
- **Scroll reveals (GSAP ScrollTrigger, `once`).** Section headings lift in, and principle rules scale from the left. A 2px amber bar at the top of the viewport tracks page progress.
- **Live traffic (SVG `animateMotion`).** Packets travel fixed routes through the topology, and a pulse ring marks the core data node.
- **Pipelines (CSS).** A single packet travels the active pipeline top to bottom. Nodes stagger in when a panel slide becomes active.
- **Active project.** An IntersectionObserver tracks the middle band of the viewport. The active article becomes full opacity and the panel crossfades to its pipeline.

Reduced-motion mode removes packets, pulses, entrance and reveal animation, and transitions. All content remains in normal document flow.

## Interaction rules

- Use native scrolling and the native cursor.
- Animate only transform and opacity, plus SVG motion paths.
- Every hover change carries meaning: a link, a button, or a table row.
- Keep a visible amber `:focus-visible` outline on everything focusable.
- Maintain semantic heading order and ordinary DOM reading order.
- Label the topology as illustrative, and never attach numbers to it.
- Preserve all four verified projects and their repository destinations (`data/projects.ts`).
