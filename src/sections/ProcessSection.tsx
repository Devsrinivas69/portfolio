import { FadeIn } from '../components/FadeIn'

const STEPS = [
  {
    title: 'Kickoff',
    detail: 'Quick discovery call to align on goals, users, and success criteria.',
  },
  {
    title: 'Scope',
    detail: 'Break work into milestones, define features, and lock timelines.',
  },
  {
    title: 'Weekly Updates',
    detail: 'Clear progress updates, demos, and feedback loops every week.',
  },
  {
    title: 'Delivery',
    detail: 'Polished release with handoff docs and post-launch support.',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            How I work
          </h2>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <FadeIn
              key={step.title}
              delay={index * 0.1}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 sm:rounded-[36px] md:rounded-[44px]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                  Step {index + 1}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-[#D7E2EA]/70">
                  {step.title}
                </span>
              </div>
              <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.2rem)] font-medium text-[#D7E2EA]">
                {step.detail}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
