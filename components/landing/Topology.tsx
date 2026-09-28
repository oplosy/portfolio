// Illustrative topology composed from the components used across the four projects.
const nodes = [
  { id: "client", label: "Client", x: 56, y: 260 },
  { id: "gateway", label: "Gateway", x: 176, y: 260 },
  { id: "api", label: "API", x: 300, y: 150 },
  { id: "ws", label: "WebSocket", x: 300, y: 372 },
  { id: "queue", label: "Queue", x: 440, y: 70 },
  { id: "pg", label: "PostgreSQL", x: 452, y: 260 },
  { id: "redis", label: "Redis", x: 440, y: 450 },
] as const;

type NodeId = (typeof nodes)[number]["id"];

const edges: [NodeId, NodeId][] = [
  ["client", "gateway"],
  ["gateway", "api"],
  ["gateway", "ws"],
  ["api", "queue"],
  ["api", "pg"],
  ["queue", "pg"],
  ["ws", "pg"],
  ["ws", "redis"],
];

// Each packet rides a route of edges; duration and delay stagger the traffic.
const packets: { route: NodeId[]; dur: number; delay: number }[] = [
  { route: ["client", "gateway", "api", "pg"], dur: 3.2, delay: 0 },
  { route: ["client", "gateway", "ws", "redis"], dur: 3.6, delay: 1.1 },
  { route: ["api", "queue", "pg"], dur: 2.8, delay: 0.6 },
  { route: ["client", "gateway", "ws", "pg"], dur: 3.4, delay: 2.2 },
  { route: ["client", "gateway", "api", "queue"], dur: 3.1, delay: 1.7 },
];

const byId = Object.fromEntries(nodes.map((node) => [node.id, node])) as Record<NodeId, (typeof nodes)[number]>;

function routePath(route: NodeId[]) {
  return route.map((id, index) => `${index === 0 ? "M" : "L"}${byId[id].x} ${byId[id].y}`).join(" ");
}

export function Topology() {
  return (
    <figure className="topology">
      <svg viewBox="0 0 520 520" role="img" aria-labelledby="topology-title">
        <title id="topology-title">Request traffic moving through a client, gateway, API, WebSocket, queue, PostgreSQL, and Redis.</title>
        <defs>
          {packets.map((packet, index) => (
            <path key={index} id={`route-${index}`} d={routePath(packet.route)} />
          ))}
        </defs>

        <g className="topology-grid" aria-hidden="true">
          {Array.from({ length: 11 }, (_, index) => (
            <line key={`v${index}`} x1={index * 52} y1="0" x2={index * 52} y2="520" />
          ))}
          {Array.from({ length: 11 }, (_, index) => (
            <line key={`h${index}`} x1="0" y1={index * 52} x2="520" y2={index * 52} />
          ))}
        </g>

        <g className="topology-edges">
          {edges.map(([from, to]) => (
            <line key={`${from}-${to}`} x1={byId[from].x} y1={byId[from].y} x2={byId[to].x} y2={byId[to].y} />
          ))}
        </g>

        <g className="topology-packets" aria-hidden="true">
          {packets.map((packet, index) => (
            <circle key={index} r="4">
              <animateMotion dur={`${packet.dur}s`} begin={`${packet.delay}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href={`#route-${index}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur={`${packet.dur}s`} begin={`${packet.delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        <g className="topology-nodes">
          {nodes.map((node) => (
            <g key={node.id} transform={`translate(${node.x} ${node.y})`} className={node.id === "pg" ? "is-core" : undefined}>
              {node.id === "pg" && <circle className="topology-pulse" r="14" />}
              <rect x="-7" y="-7" width="14" height="14" />
              <text y={node.y > 400 ? 30 : -18} textAnchor="middle">{node.label}</text>
            </g>
          ))}
        </g>
      </svg>
      <figcaption>
        <span>Fig. 01</span>
        Illustrative topology, composed from the parts in the systems below.
      </figcaption>
    </figure>
  );
}
