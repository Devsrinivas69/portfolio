import { FadeIn } from '../components/FadeIn'

type Node = {
  id: string
  label: string
  x: number
  y: number
}

type Connection = {
  from: string
  to: string
}

const NODES: Node[] = [
  { id: 'react', label: 'React', x: 18, y: 24 },
  { id: 'typescript', label: 'TypeScript', x: 34, y: 42 },
  { id: 'node', label: 'Node.js', x: 52, y: 32 },
  { id: 'express', label: 'Express', x: 64, y: 52 },
  { id: 'mongo', label: 'MongoDB', x: 82, y: 32 },
  { id: 'supabase', label: 'Supabase', x: 82, y: 72 },
  { id: 'github', label: 'GitHub', x: 26, y: 74 },
  { id: 'vercel', label: 'Vercel', x: 52, y: 82 },
]

const CONNECTIONS: Connection[] = [
  { from: 'react', to: 'typescript' },
  { from: 'typescript', to: 'node' },
  { from: 'node', to: 'express' },
  { from: 'express', to: 'mongo' },
  { from: 'express', to: 'supabase' },
  { from: 'github', to: 'typescript' },
  { from: 'github', to: 'vercel' },
  { from: 'vercel', to: 'node' },
]

export function TechMapSection() {
  const nodeLookup = new Map(NODES.map((node) => [node.id, node]))

  return (
    <section id="tech" className="px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(2.4rem,10vw,120px)] font-black uppercase leading-none tracking-tight">
            Tech ecosystem
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={30}>
          <p className="mx-auto max-w-2xl text-center text-[clamp(0.95rem,1.4vw,1.2rem)] font-medium text-[#D7E2EA]/80">
            A visual map of the tools I use across frontend, backend, and delivery.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={30}>
          <div className="relative mx-auto h-[420px] w-full max-w-5xl rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent sm:h-[520px] md:h-[600px]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {CONNECTIONS.map((connection) => {
                const from = nodeLookup.get(connection.from)
                const to = nodeLookup.get(connection.to)
                if (!from || !to) {
                  return null
                }
                return (
                  <line
                    key={`${connection.from}-${connection.to}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="rgba(215, 226, 234, 0.35)"
                    strokeWidth="0.6"
                  />
                )
              })}
            </svg>

            {NODES.map((node) => (
              <div
                key={node.id}
                className="absolute flex items-center gap-2 rounded-full border border-white/20 bg-[#0C0C0C]/90 px-3 py-2 text-[0.6rem] font-semibold tracking-[0.2em] text-[#D7E2EA]/80 shadow-[0_0_18px_rgba(215,226,234,0.18)] sm:text-xs md:text-sm"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#D7E2EA]"></span>
                {node.label}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
