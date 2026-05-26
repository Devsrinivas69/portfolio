import { FadeIn } from '../components/FadeIn'

type LogItem = {
  date: string
  title: string
  detail: string
  tags: string[]
}

const LOGS: LogItem[] = [
  {
    date: 'May 2026',
    title: 'Shipped contact workflow',
    detail:
      'Implemented EmailJS form with notification + auto-reply templates and validation states.',
    tags: ['EmailJS', 'UX', 'Forms'],
  },
  {
    date: 'May 2026',
    title: 'Project case-study cards',
    detail:
      'Added Problem-Solution-Impact cards to highlight real outcomes and decisions.',
    tags: ['Storytelling', 'UI'],
  },
  {
    date: 'May 2026',
    title: 'Mobile-first polish',
    detail:
      'Refined responsive spacing, typography, and layout across hero and project sections.',
    tags: ['Responsive', 'Design'],
  },
]

export function BuildLogSection() {
  return (
    <section id="build-log" className="px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(2.4rem,10vw,120px)] font-black uppercase leading-none tracking-tight">
            Build log
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={30}>
          <p className="mx-auto max-w-2xl text-center text-[clamp(0.95rem,1.4vw,1.2rem)] font-medium text-[#D7E2EA]/80">
            Recent updates that show momentum and consistent delivery.
          </p>
        </FadeIn>

        <div className="relative mt-4 flex flex-col gap-8">
          <div className="absolute left-[14px] top-0 h-full w-px bg-white/10"></div>
          {LOGS.map((log, index) => (
            <FadeIn
              key={`${log.title}-${index}`}
              delay={index * 0.1}
              className="relative pl-12"
            >
              <span className="absolute left-2 top-2 h-5 w-5 rounded-full border border-white/20 bg-[#0C0C0C] shadow-[0_0_18px_rgba(215,226,234,0.25)]"></span>
              <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">
                    {log.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {log.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-[#D7E2EA]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-3 text-[clamp(1rem,1.6vw,1.4rem)] font-semibold text-[#D7E2EA]">
                  {log.title}
                </h3>
                <p className="mt-2 text-[clamp(0.9rem,1.2vw,1.1rem)] font-light leading-relaxed text-[#D7E2EA]/85">
                  {log.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
