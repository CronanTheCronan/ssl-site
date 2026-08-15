export type Product = {
  id: string
  name: string
  badge: string
  oneLiner: string
  description?: string
  points?: string[]
  featured?: boolean
}

export const productsIntro =
  'We build tools for creators who keep the keys — systems that expand what you can attempt without taking over your work, your world, or your judgment.'

export const products: Product[] = [
  {
    id: 'glyphkeeper',
    name: 'GlyphKeeper',
    badge: 'Coming soon',
    featured: true,
    oneLiner:
      'A paid, hosted Discord co-pilot for human Dungeon Masters that keeps your campaign’s truth grounded and under your control.',
    points: [
      'Invite the official bot, link a campaign, and get answers from structured memory — NPCs, locations, events, and summaries — with semantic retrieval.',
      'Stays consistent with what actually happened at the table.',
      'The human DM remains fully in charge; GlyphKeeper never replaces the DM.',
      'Mention-triggered help, owner-gated memory tools, and optional Co-DM access.',
      'Minimal web dashboard with simple subscription tiers.',
    ],
  },
  {
    id: 'solace-forge',
    name: 'Solace Forge',
    badge: 'In development',
    featured: false,
    oneLiner: 'A human-governed agentic game-production workspace.',
    description:
      'A cloud-hosted control plane for agent orchestration, approvals, knowledge, and studio truth on PostgreSQL — while the tools creators already trust (Unity, Godot, ComfyUI, Blender, and more) stay on their own machines via connected workers.',
    points: [
      'Built for technical solo developers and micro-studios.',
      'Capability fabric and MCP firewalls keep agent power bounded and inspectable.',
      'Design bibles ground agents with knowledge without granting them authority.',
      'Quarantine → validate → promote pipeline for generated work.',
      'Production engine with plan-hash approvals and a living studio floor with rooms such as Build Forge and Creature Lab.',
    ],
  },
]
