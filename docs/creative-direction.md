# Portfolio Creative Direction

## Design read

Reading this as: backend and infrastructure engineer portfolio for technical recruiters, engineering leaders, and collaborators, with a cinematic systems language, leaning toward a continuous SVG topology world driven by GSAP ScrollTrigger.

Design dials:

- `DESIGN_VARIANCE: 9`
- `MOTION_INTENSITY: 9`
- `VISUAL_DENSITY: 6`

The prototype scope is only Hero to About to Projects. Skills, Experience, and Contact stay in the architecture, but are not implemented until the first transition chain is approved.

## 1. Main art direction

**Working direction: Living Infrastructure.**

The site behaves like a system being inspected from the inside. It is not a futuristic dashboard, terminal, or decorative network map. The visual language combines architectural drawing, routing topology, physical depth, and editorial typography.

The emotional sequence is controlled, curious, legible, then briefly overwhelming at the Projects transformation. The final site later resolves into calm.

## 2. Main visual metaphor

`NODE -> SYSTEM -> ARCHITECTURE -> PROJECT -> INFRASTRUCTURE -> NODE`

One root node survives the entire experience. It opens into service boundaries, data stores, queues, and paths. Those same shapes reorganize into project identities instead of disappearing between sections.

The unique signature move is the **living request trace**: a single signal enters the root node, travels through the topology, exposes the About layer, and finally becomes the focus ring and architecture path of the selected project. It also acts as the page position indicator.

## 3. Color direction

- Canvas: `#0B0D0E`
- Raised system surface: `#15191B`
- Primary ink: `#E9ECE8`
- Secondary ink: `#9BA39E`
- Signal accent: `#FF5A36`
- Accent ink: `#140B08`
- Success: `#79B98A`
- Warning: `#D8A84E`
- Error: `#E56A61`
- Info: `#7DA6C9`

The palette is industrial and high-contrast without becoming neon cyberpunk. The orange signal is functional: active request, selected node, focus state, and primary CTA. It is not scattered decoration.

## 4. Typography direction

- Display and body: `Geist Sans`, self-hosted.
- Technical labels and verified system data: `IBM Plex Mono`, self-hosted.
- Hero display: `clamp(4rem, 10vw, 10rem)`, weight 540-620, line-height 0.92-0.98.
- Body: `clamp(1rem, 1.25vw, 1.2rem)`, line-height 1.6, maximum 62ch.
- Technical labels: 11-13px, moderate tracking, never used as a costume for all copy.

Typography participates in the scene through masks, scale, and tracking changes. Character-by-character animation is reserved for a short identity moment. Longer copy animates by line or block.

## 5. Page structure

The final information journey is:

1. Identity: one node and one clear role.
2. System identity: the node opens and reveals how the engineer thinks.
3. Projects: the topology becomes a navigable body of work.
4. Project detail: one project becomes a complete architecture surface.
5. Technology system: the same architecture decomposes into application, data, infrastructure, and cloud layers.
6. Experience: topology becomes a time axis.
7. Contact: the system converges back into one node.

The first prototype implements only items 1-3.

## 6. Scroll storytelling flow

The site uses **continuous-world grammar**:

- One fixed visual stage for the full experience.
- One document-flow spacer defines scroll length.
- Copy appears in fixed semantic windows above the stage.
- Scroll progress controls one reversible GSAP master timeline.
- There are no physical section boundaries sliding through the viewport.

Prototype master timeline:

| Progress | State | Visitor understanding |
| --- | --- | --- |
| `0.00-0.12` | Root node, name, role | Who this person is |
| `0.12-0.30` | Node opens into internal layers | How this person thinks |
| `0.30-0.48` | Connections assemble into topology | Systems are the core discipline |
| `0.48-0.62` | One node becomes an About viewport | Short identity and principles |
| `0.62-0.82` | About surface folds back into topology | Identity belongs to the system |
| `0.82-1.00` | Nodes become project modules | Work emerges from architecture |

## 7. How each section starts

- Hero starts fully composed. Name, role, and node are visible on the first frame.
- About starts when a real topology node expands and becomes a reading surface. It never arrives as a detached text block.
- Projects starts while the About surface is still collapsing. Its edges become routes; its internal anchors become project nodes.
- Later Skills starts by opening the selected project architecture into reusable layers.
- Later Experience starts when a request path straightens into a time axis.
- Later Contact starts when all paths lose branching and converge.

## 8. How each section ends

- Hero ends as a stable distributed topology, not a fade-out.
- About ends by returning its surface to the same geometry that created it.
- Projects ends with one focused project occupying the visual hierarchy while the rest remain spatially present.
- Project detail ends by compressing architecture layers back into a project node.
- Contact ends with one quiet root node and a persistent contact action. The last frame holds.

## 9. Section morphing rules

- Position continuity: the destination geometry begins from the source geometry's current screen coordinates.
- Identity continuity: a node retains its ID, accent state, and request trace across transformations.
- Scale continuity: project surfaces grow from node bounds using transform and clip-path, never from an unrelated modal.
- Color continuity: the theme remains dark graphite; only signal intensity changes.
- Copy continuity: outgoing copy clears before the geometry reaches peak density. Copy and network lines never compete at full intensity.

## 10. Persistent visual elements

- Root node.
- Living request trace.
- Main topology paths.
- A restrained coordinate frame at the viewport edges.
- One depth field made of far routes, middle nodes, foreground focus geometry, and atmosphere/grain.
- A compact waypoint map that doubles as accessible navigation.

No decorative particles, custom cursor replacement, matrix rain, fake terminal, or floating glass cards.

## 11. Main animation timelines

### `masterWorldTimeline`

Owns global progress and section windows. It is reversible and scrubbed. It never contains component rendering logic.

### `heroTopologyTimeline`

1. Name contracts slightly.
2. Root node scales forward.
3. Shell opens through clip-path and SVG group transforms.
4. Service, queue, cache, and database forms separate.
5. Routes draw and the request trace begins.

### `aboutFocusTimeline`

1. Camera translation centers one existing node.
2. Node surface expands.
3. Short copy reveals by line through masks.
4. Background topology moves to a lower contrast depth plane.
5. Surface folds back into the system.

### `projectsMorphTimeline`

1. Topology clusters into project groups.
2. Paths reroute without disappearing.
3. Project labels and facts reveal.
4. One project gains focus while others reduce contrast and depth.

## 12. Micro-interaction system

- Project hover: focused node scales to `1.025`, connected routes gain signal activity, unrelated nodes reduce to 55-65% opacity.
- Link hover: underline mask travels in the pointer entry direction. Duration 140-180ms.
- Press: `scale(0.97)` for 100-140ms.
- Waypoint navigation: immediate focus change with a short 180-240ms spatial settle.
- Fine-pointer parallax: maximum 8-14px across the stage. Disabled on touch and reduced motion.
- No global custom cursor. A small contextual `View project` label may appear next to a project node without replacing the native pointer.

## 13. Component architecture

```text
app/
  page.tsx
components/
  chrome/
    Navigation.tsx
    WaypointMap.tsx
  world/
    SystemWorld.tsx
    TopologySvg.tsx
    RequestTrace.tsx
    CopyWindow.tsx
  projects/
    ProjectNode.tsx
    ProjectFocus.tsx
sections/
  HeroCopy.tsx
  AboutCopy.tsx
  ProjectsCopy.tsx
data/
  profile.ts
  projects.ts
  topology.ts
```

Static copy and semantic structure remain server-rendered. Only the fixed world and interaction leaves are client components.

## 14. Animation architecture

```text
animations/
  config.ts
  masterWorldTimeline.ts
  heroTopologyTimeline.ts
  aboutFocusTimeline.ts
  projectsMorphTimeline.ts
  motionPolicy.ts
hooks/
  useWorldTimeline.ts
  useReducedMotionMode.ts
  useFinePointer.ts
```

Rules:

- Timelines receive element refs and configuration. They do not query arbitrary global selectors.
- Every GSAP context is reverted during cleanup.
- Timeline labels replace scattered numeric offsets.
- Geometry data and motion constants live in `config.ts`.
- React state is never updated on each scroll frame.
- Continuous writes are limited to transforms, opacity, SVG stroke values, and selected clip-path operations.

## 15. Dependencies

Prototype recommendation:

- `next`
- `react`
- `react-dom`
- `typescript`
- `gsap`
- `@gsap/react`

Do not add Lenis in the first prototype. Native scroll plus scrubbed ScrollTrigger is easier to tune and keeps control direct. Add Lenis only if real testing exposes wheel discontinuity that GSAP smoothing cannot solve.

Do not add Three.js, React Three Fiber, or a second animation library in the prototype.

## 16. GSAP responsibility

GSAP owns:

- The single master scroll timeline.
- Pinned/fixed-world progress mapping.
- Reversible topology transforms.
- SVG path drawing and request trace movement.
- Clip-path and mask transitions.
- Copy-window timing.
- Project focus morphing.
- MatchMedia desktop/mobile timelines.

CSS owns:

- Hover, focus-visible, and active states.
- Short color and opacity transitions.
- Reduced-motion static composition.
- Layout and responsive styling.

## 17. Three.js decision

**Not required for the first version.** The concept is geometry, topology, routing, and spatial organization. SVG plus CSS transforms and GSAP provide sufficient control with lower complexity and better accessibility.

Three.js becomes justified only if later art direction requires true camera perspective, occlusion between modeled architecture layers, material lighting, or a modeled object that cannot be represented convincingly with SVG planes.

## 18. Mobile fallback

- Use a separately composed mobile topology, not a scaled desktop SVG.
- Shorten the scroll track by about 35-45%.
- Reduce simultaneous visible nodes and connections.
- Remove pointer parallax and magnetic motion.
- Replace broad lateral topology with a vertical route spine.
- Project focus becomes a full-width surface in normal reading order.
- Preserve the same semantic sequence and request trace.
- Under `prefers-reduced-motion`, remove the spacer-driven travel and render Hero, About, and Projects in normal document flow with short opacity transitions.

## 19. Performance risks

1. Large SVG DOM: use grouped paths and reuse symbols; avoid hundreds of independently animated nodes.
2. Path animation cost: animate a small number of meaningful routes, not every connection.
3. Blur and filters: keep controlled blur below 8px and never animate a full-screen CSS filter continuously.
4. ScrollTrigger refresh: refresh only after fonts and layout settle.
5. React re-renders: progress stays in GSAP/motion values, not component state.
6. Mobile GPU pressure: reduce depth layers and remove nonessential atmosphere.
7. Long pinned distance: cap prototype around 700-900vh and verify that every interval changes meaningfully.
8. Accessibility: semantic copy must remain in DOM and readable without animation.

## 20. Implementation order

1. Lock real name, role, About copy, and the first three projects.
2. Scaffold Next.js and establish semantic no-animation content.
3. Build the fixed world stage and scroll spacer.
4. Draw the root node, topology groups, and request trace as SVG primitives.
5. Implement Hero topology timeline.
6. Implement Hero to About geometry continuity.
7. Implement About to Projects morph.
8. Add responsive mobile composition.
9. Add reduced-motion normal-flow version.
10. Run desktop, mobile, reverse-scroll, keyboard, and motion review.
11. Fix review findings before adding the rest of the site.

## Prototype acceptance criteria

- The opening frame already communicates name and backend/infrastructure role.
- Scrolling down and up produces deterministic, reversible states.
- No visible section edge or unpin jump appears between Hero, About, and Projects.
- The same root node and request trace survive all three scenes.
- About is readable for a stable interval, not only at a single scroll pixel.
- Projects emerge from topology; they are not cards entering from outside the world.
- The desktop timeline stays smooth during fast wheel input.
- Mobile has an authored composition with no horizontal overflow.
- Reduced-motion mode exposes all content in normal reading order.
- No `transition: all`, layout-property animation, fake terminal, neon glow, custom cursor replacement, or invented metrics.
