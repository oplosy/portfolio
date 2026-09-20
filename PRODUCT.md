# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js, React, TypeScript, GSAP, and GSAP ScrollTrigger. Lenis and Three.js are deliberately deferred until evidence shows they materially improve the experience.

## Users

Primary audience: technical recruiters, engineering leaders, founders, and collaborators evaluating backend, infrastructure, and systems-engineering capability.

This audience needs to understand the engineer's technical identity, systems thinking, and selected work without mistaking the site for a frontend-animation portfolio.

## Product Purpose

Present a backend and infrastructure engineer through a memorable, technically credible portfolio experience. Success means the visitor understands the engineer's systems mindset, can inspect selected projects, and can reach the contact action without motion obscuring the content.

## Positioning

The portfolio presents backend work as a precise editorial record. Large statements establish point of view; a horizontal project sequence lets each system occupy a complete chapter rather than compressing it into a card grid.

## Operating Context

The portfolio is evaluated on desktop and mobile web, often during a short recruiting or collaboration review. The opening must communicate the role immediately. Deeper scrolling rewards attention with architecture and project detail.

## Capabilities and Constraints

- Scroll is the primary storytelling input and controls reversible hero, project-track, and ticker movement.
- The implemented journey covers Identity, Position, Selected Work, Practice, Working Set, and Contact.
- Semantic HTML, keyboard navigation, and readable content must remain available without animation.
- Reduced-motion mode must show the same content in normal document flow.
- The visual language must avoid matrix code, fake terminals, generic cyberpunk, glass cards, feature-card grids, gradients, badge clouds, and repeated fade-up sections.
- No invented project metrics, testimonials, employers, or infrastructure claims.
- The complete experience uses HTML, CSS, SVG, and GSAP primitives. Heavy 3D and generated assets remain out of scope.

Project facts and repository destinations are sourced from the local repositories for Launchpad, ycollab, Fluxboard, and Table Tennis. The public identity is `Oplosy`; `github.com/oplosy` is the contact destination. No employment history, personal email, live-demo claim, or unverified metric is presented.

## Brand Commitments

- Backend, infrastructure, APIs, databases, networking, queues, distributed systems, and cloud infrastructure are the subject matter.
- Voice is direct, technical, concrete, and professional.
- The site should feel editorial, technically credible, visually forceful, and intentionally direct.
- Animation is part of navigation and reading order, not decoration.
- The structural sequence is `POSITION -> SYSTEMS -> PRACTICE -> WORKING SET -> CONTACT`.

## Evidence on Hand

- User-supplied creative brief in the current Codex task.
- Creative direction: `docs/creative-direction.md`.
- Design profile: `docs/design-dna.json`.
- Scrollcraft brief: `scrollcraft/builds/portfolio/BRIEF.md`.

No verified project content, professional history, photography, product imagery, testimonials, or performance metrics are currently available.

## Product Principles

1. Technical meaning precedes spectacle.
2. One visual system persists across the complete journey.
3. Motion remains reversible, performant, and accessible.
4. Real project evidence replaces invented marketing claims.
5. Mobile receives its own composition rather than a scaled desktop layout.

## Accessibility & Inclusion

- Honor `prefers-reduced-motion` with a complete normal-flow experience.
- Maintain semantic heading and reading order.
- Support keyboard navigation and visible focus states.
- Meet WCAG AA contrast for text and controls.
- Do not replace the native cursor or require fine-pointer interaction.
