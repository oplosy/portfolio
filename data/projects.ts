export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  systemRole: string;
  stack: string[];
  architecture: string[];
  engineering: string;
  github: string;
  position: "north" | "east" | "south" | "west";
};

export const projects: Project[] = [
  {
    id: "launchpad",
    name: "Launchpad",
    eyebrow: "ON-CHAIN SYSTEM",
    description:
      "A non-custodial fixed-supply token launchpad with a Solidity execution layer and a reorg-aware Go indexer.",
    systemRole: "Chain → indexer → query API",
    stack: ["Solidity", "Go", "PostgreSQL", "Next.js"],
    architecture: ["Wallet", "Contracts", "RPC", "Indexer", "PostgreSQL", "API"],
    engineering:
      "Separates on-chain execution authority from backend read models and keeps user signing in the wallet.",
    github: "https://github.com/oplosy/launchtap",
    position: "north",
  },
  {
    id: "ycollab",
    name: "ycollab",
    eyebrow: "DISTRIBUTED COLLABORATION",
    description:
      "A self-hostable Yjs wire-compatible collaboration server with a CRDT engine implemented in Go.",
    systemRole: "Replica → room → durable log",
    stack: ["Go", "WebSocket", "PostgreSQL", "Redis", "Kubernetes"],
    architecture: ["Yjs Client", "Gateway", "Room", "CRDT", "Update Log", "Redis Fanout"],
    engineering:
      "Combines binary protocol compatibility, persistent snapshots, cross-replica fanout, authorization, and operations controls.",
    github: "https://github.com/oplosy/crdt-server",
    position: "east",
  },
  {
    id: "fluxboard",
    name: "Fluxboard",
    eyebrow: "MULTI-TENANT BACKEND",
    description:
      "A project-management and usage-billing system built as a Go modular monolith with tenant isolation.",
    systemRole: "API → worker → metering",
    stack: ["Go", "PostgreSQL RLS", "Redis", "Asynq", "Stripe"],
    architecture: ["Client", "API", "Use Cases", "PostgreSQL RLS", "Redis", "Workers"],
    engineering:
      "Keeps domain boundaries explicit while combining RBAC, row-level security, background jobs, metering, and observability.",
    github: "https://github.com/oplosy/fluxboard",
    position: "south",
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    eyebrow: "REAL-TIME GAME",
    description:
      "A browser-based real-time 1v1 table-tennis system with a Go WebSocket server and Three.js client.",
    systemRole: "Input → authority → state broadcast",
    stack: ["Go", "WebSocket", "React", "Three.js"],
    architecture: ["Player", "WebSocket", "Match Loop", "Authority", "Broadcast", "Three.js"],
    engineering:
      "Runs room and match state through an authoritative command path shared by multiplayer and CPU flows.",
    github: "https://github.com/oplosy/table-tennis",
    position: "west",
  },
];
