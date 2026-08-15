export type Value = {
  title: string
  body: string[]
}

export const valuesIntro =
  'Ten principles that guide how we build. Short enough to remember. Strong enough to hold when tradeoffs get hard.'

export const valuesShort = [
  'The human keeps the keys.',
  'Truth before theater.',
  'Build to prove.',
  'Remove friction, not craft.',
  'Small teams should be able to dream big.',
  'Own what you create.',
  'Failure becomes knowledge.',
  'Guardrails should unlock courage.',
  'Curiosity is part of the job.',
  'Make things worth caring about.',
] as const

export const values: Value[] = [
  {
    title: 'The Human Keeps the Keys',
    body: [
      'AI should expand human agency, never quietly replace it.',
      'We build powerful systems, but power and authority are not the same thing. Our products can discover, recommend, create, coordinate, remember, and execute, but consequential decisions remain visible and governed by people.',
      'A Dungeon Master owns their world. A developer owns their game. An artist owns their creative judgment. A studio owns its tools, assets, budget, and release decisions.',
      'Discovery is not authority. Knowledge is not authority. Conversation is not authority. We don’t build systems that slowly make themselves the boss.',
    ],
  },
  {
    title: 'Truth Before Theater',
    body: [
      'What is real matters more than what looks impressive.',
      'We distinguish between what is shipped, what is enabled, what is experimental, what has been proven, and what we merely intend to build.',
      'A beautiful dashboard cannot turn an unhealthy system into a healthy one. An agent announcing that it completed something is not evidence that the work is correct. A sophisticated architecture is not proof that customers want it.',
      'We test. We inspect. We verify. We preserve evidence. And when reality disagrees with the story we hoped to tell, reality wins.',
    ],
  },
  {
    title: 'Build to Prove',
    body: [
      'The shortest path to confidence is working software.',
      'We believe in ambitious ideas, but ambition earns credibility through execution. Build the smallest meaningful piece. Run it. Test it. Break it. Fix it. Learn from it. Then expand.',
      'We do not ship promises and hope engineering catches up later. We prove ideas locally, establish that they work, and earn the right to scale them.',
      'Progress is not measured by how much architecture exists. It is measured by how much uncertainty we have removed.',
    ],
  },
  {
    title: 'Remove Friction, Not Craft',
    body: [
      'Technology should eliminate the tedious parts of creation without eliminating the creator.',
      'There is enormous work surrounding creative work that is repetitive, mechanical, confusing, slow, or unnecessarily technical. That is where we aim the machinery.',
      'We automate setup, coordination, retrieval, bookkeeping, repetitive production, validation, memory, and busywork so humans can spend more of their finite attention on judgment, storytelling, design, experimentation, and play.',
      'Our goal isn’t to automate creativity. It’s to clear the runway for it.',
    ],
  },
  {
    title: 'Small Teams Should Be Able to Dream Big',
    body: [
      'Team size should not determine the size of an idea.',
      'A solo developer should be able to attempt something once reserved for a studio. A tiny game team should have access to production capabilities once requiring entire departments. A Dungeon Master should be able to run a sprawling living world without maintaining a second career in campaign bookkeeping.',
      'AI gives us an opportunity to dramatically change the economics of creation. We build for the people with enormous ideas who don’t necessarily have enormous organizations behind them.',
      'Leverage should belong to creators, not just corporations.',
    ],
  },
  {
    title: 'Own What You Create',
    body: [
      'Convenience should never require surrendering ownership.',
      'Creators deserve meaningful control over their work, tools, data, models, assets, compute, and costs.',
      'We favor architectures that preserve choice instead of manufacturing dependency. Customers should understand where their data goes, what their systems are doing, which tools are being used, and what actions cost.',
      'Switching providers should be possible. Exporting your work should be possible. Keeping valuable tools on your own machines should be possible. We would rather earn someone’s continued business than engineer their inability to leave.',
    ],
  },
  {
    title: 'Failure Becomes Knowledge',
    body: [
      'A mistake that teaches the system something is not wasted. A mistake that keeps recurring is.',
      'Complex systems fail. Experiments miss. Code breaks. Agents misunderstand instructions. Creative ideas sometimes land with a thud. We don’t hide those moments. We investigate them.',
      'Failures should produce evidence, lessons, better tests, stronger guardrails, improved workflows, or better judgment. Knowledge gained through hard experience should accumulate rather than disappear when the task ends or the person who learned it leaves the room.',
      'The organization should become wiser because yesterday was difficult.',
    ],
  },
  {
    title: 'Guardrails Should Unlock Courage',
    body: [
      'Safety should make ambitious work possible, not make ambitious work impossible.',
      'We reject the false choice between powerful AI and controlled AI.',
      'Good governance allows us to delegate more because we understand the boundaries of that delegation. Approvals, isolation, provenance, validation, spending controls, audit trails, and release gates aren’t obstacles bolted onto the product afterward. They are how trust is engineered.',
      'We want creators comfortable saying: “Try something wild. I know where the brakes are.”',
    ],
  },
  {
    title: 'Curiosity Is Part of the Job',
    body: [
      'We reserve the right to ask, “What if?”',
      'Some of the best products begin as ideas that initially sound unreasonable. What if a Dungeon Master had perfect campaign memory? What if one developer could operate something resembling an entire game studio? What if agents could learn from an organization’s failures without quietly granting themselves more authority? What if the annoying part simply didn’t have to exist?',
      'We explore ideas seriously before dismissing them conventionally. Experimentation isn’t a distraction from the work. Sometimes it is where the next piece of the company comes from.',
    ],
  },
  {
    title: 'Make Things Worth Caring About',
    body: [
      'Technology is the machinery. Human experience is the point.',
      'We care about architecture, models, orchestration, databases, pipelines, tools, tests, and infrastructure because of what those things make possible: a campaign friends remember ten years later; a strange little game that would otherwise never have existed; an artist seeing an idea become tangible; a solo creator discovering that the wall in front of them wasn’t actually a wall.',
      'We don’t want to make AI for the sake of making AI. We want to help people make things that matter to them.',
    ],
  },
]
