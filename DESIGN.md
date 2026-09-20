---
name: Living Infrastructure
description: A continuous portfolio world where one root node unfolds into backend topology and project architecture.
colors:
  canvas: "#0b0d0e"
  surface: "#15191b"
  surface-raised: "#1a1f21"
  ink: "#e9ece8"
  ink-soft: "#9ba39e"
  line: "#353b38"
  signal: "#ff5a36"
  signal-ink: "#140b08"
typography:
  display:
    fontFamily: "Geist Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(4rem, 9vw, 9.5rem)"
    fontWeight: 620
    lineHeight: 0.92
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Geist Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 5.5rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.2vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.65
  technical-label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    lineHeight: 1.45
    letterSpacing: "0.08em"
rounded:
  structural: "8px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  project-node:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.structural}"
    padding: "1.15rem 1.25rem"
  project-node-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.structural}"
  skip-link:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    padding: "0.7rem 1rem"
---

# Design System: Living Infrastructure

## Overview

**Creative North Star: "Living Infrastructure"**

The interface behaves like a backend system inspected from inside. One root node expands into services, routes, reading surfaces, and project modules; geometry is transformed rather than replaced between scenes. The result is architectural, cinematic, precise, and legible—not a terminal, dashboard, or decorative network map.

**Key characteristics:**

- Graphite space, bone-white ink, and one functional signal-orange trace.
- Persistent topology: `NODE -> SYSTEM -> ARCHITECTURE -> PROJECT -> INFRASTRUCTURE`.
- Quiet editorial copy beside concentrated system density.
- Semantic HTML remains complete without animation.

## Colors

Use graphite surfaces and neutral ink to create depth. Reserve `signal` for the active request, selected node, focus indicator, selection, and primary action; it is never ambient decoration. Use `line` and low-opacity ink for routes, borders, grids, and inactive infrastructure.

**The One Signal Rule.** Orange identifies live state or action. Do not distribute it as general ornament or neon glow.

## Typography

Geist Sans carries display, headings, body copy, and navigation. IBM Plex Mono is limited to genuine technical labels, topology data, coordinates, and the compact brand mark.

- **Display:** architectural identity only; tightly tracked and large enough to participate in the scene.
- **Headline:** short statements with balanced wrapping and a compact line height.
- **Body:** readable at `48-62ch`; use generous line height and `ink-soft` for supporting copy.
- **Technical label:** small, tracked, and concise; uppercase only where it represents a system label.

**The Mono Evidence Rule.** Mono type denotes technical information; never use it as a costume for ordinary prose.

## Layout

Desktop uses an asymmetric, viewport-fixed stage with semantic copy windows above a full-frame SVG topology. The shared horizontal gutter is `clamp(1.25rem, 4vw, 4.5rem)` and the fixed header is `4.5rem`. The enhanced scroll track is `1180vh`; scroll progress drives one reversible sequence rather than discrete page sections.

At `760px` and below, use the authored mobile composition: `1rem` gutters, a `4rem` header, a wider cropped topology field, stacked full-width project nodes, hidden stage metadata, and a shortened `820vh` track. Do not shrink the desktop composition uniformly. Preserve the complete identity → system → about → projects → architecture → layers → build record → contact reading order without horizontal overflow.

When motion enhancement is unavailable or `prefers-reduced-motion: reduce` is active, hide the fixed world, remove spacer-driven travel, and render the complete static flow as normal document sections. Keep focus order, headings, project content, and the skip target intact; collapse UI transition durations to effectively immediate feedback. An explicit `Enable motion` control may override the system preference only after direct user action.

## Elevation & Depth

Depth comes from overlap, scale, contrast falloff, the masked grid, SVG planes, and restrained dark shadows. The About surface uses the deeper `0 36px 100px rgb(2 5 6 / 38%)` shadow; project nodes use `0 18px 50px rgb(2 5 6 / 30%)`. Avoid glass-card stacks, full-screen blur, or decorative filters.

## Shapes

Use sharp structural geometry, fine one-pixel borders, and an `8px` radius for nodes and expanding system surfaces. Routes and negative space replace generic section dividers. Pill geometry is limited to compact utilities such as the scrollbar thumb; project content must grow from topology nodes rather than appear in detached cards or modals.

## Components

### Navigation

Keep the fixed header compact and translucent, with a fine bottom rule. Links are small, neutral, and shift to `signal` only on fine-pointer hover. All controls retain the shared orange `2px` focus-visible outline with `5px` offset and a `scale(0.97)` press response.

### Project Nodes

Project nodes are topology modules, not generic cards. At rest they use the system surface, a subtle ink border, and an orange signal bar. Fine-pointer hover and keyboard focus raise the surface, set the border to `signal`, scale the node to `1.025`, extend its signal bar, and reduce unrelated nodes to `0.58` opacity. State transitions use the established `cubic-bezier(0.23, 1, 0.32, 1)` easing over `180ms`.

### World Motion

Scroll controls one GSAP timeline across identity, system, about, projects, project architecture, technology layers, build record, and contact states. Motion must be causal, reversible, and limited to transforms, opacity, SVG stroke progress, and selected clip paths. Existing geometry reorganizes into the next state; copy clears before topology reaches peak density. CSS owns hover, focus, press, and reduced-motion behavior. React updates only the discrete active-scene bucket so inactive fixed scenes receive both `inert` and `aria-hidden` and cannot leak invisible controls into keyboard navigation.

Project descriptions, architecture labels, and repository destinations must come from the checked local repositories. Do not add employers, personal contact data, live-demo claims, scale metrics, or performance claims without verified evidence.

## Do's and Don'ts

### Do

- **Do** preserve the root node, living request trace, topology paths, and identity continuity through every morph.
- **Do** start the hero fully composed and keep About readable for a stable interval.
- **Do** use semantic content in the DOM and verify keyboard, reverse-scroll, mobile, and reduced-motion paths.
- **Do** make animation explain system structure, state, or navigation.

### Don't

- **Don't** introduce fake terminals, matrix code, neon cyberpunk, decorative particles, generic glass cards, badge clouds, or repeated fade-up sections.
- **Don't** animate layout properties, use `transition: all`, replace the native cursor, or add fine-pointer effects on touch.
- **Don't** detach About or Projects from the topology with unrelated cards, modals, or section transitions.
- **Don't** invent project metrics, infrastructure claims, employers, or proof content.
