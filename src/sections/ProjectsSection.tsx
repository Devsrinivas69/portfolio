import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LiveProjectButton } from '../components/LiveProjectButton'

const PROJECTS = [
  {
    number: '01',
    category: 'Full-stack',
    name: 'Teach Tribe LMS',
    stack:
      'React.js, TypeScript, Node.js, MongoDB, REST APIs, Vercel',
    liveUrl: 'https://teach-tribe.vercel.app',
    problem:
      'Learners needed a single, easy flow to browse courses, enroll, and resolve doubts.',
    solution:
      'Built a responsive LMS with modular React components and Node.js APIs for course and user workflows.',
    impact:
      'Shipped 3 core student flows (browse, enroll, doubts) in one release.',
    highlights: [
      'Responsive LMS UI with course browsing and enrollment',
      'Custom hooks and component-driven architecture',
      'Deployed with CI/CD on Vercel for real students',
    ],
  },
  {
    number: '02',
    category: 'Full-stack',
    name: 'Smart Travel Planner',
    stack:
      'JavaScript, Node.js, Express.js, REST APIs, Weather API, HTML, CSS',
    liveUrl: 'https://tourism-02-3.onrender.com',
    problem:
      'Travel planning required switching between multiple sites for itineraries and weather.',
    solution:
      'Created a full-stack planner with Express APIs and live weather integration.',
    impact:
      'Connected 2 APIs and delivered an end-to-end planning flow in one app.',
    highlights: [
      'AI-assisted itinerary generation and recommendations',
      'Live weather data integration with REST APIs',
      'End-to-end deployment with Express backend',
    ],
  },
  {
    number: '03',
    category: 'Personal',
    name: 'F1 COMMANDER',
    stack: 'React.js, JavaScript, Vercel',
    liveUrl: 'https://2026-f1.vercel.app',
    problem:
      'Need for an interactive, quick-access racing dashboard and strategy preview for fans and small teams.',
    solution:
      'Built a responsive single‑page demo that visualizes race data and strategy options using React.',
    impact: 'Live prototype available for demos and feedback.',
    highlights: [
      'Responsive telemetry-style UI and controls',
      'Lightweight client-side performance optimizations',
      'Deployed to Vercel for instant sharing',
    ],
  },
]

type ProjectCardProps = {
  project: (typeof PROJECTS)[number]
  index: number
  total: number
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const targetScale = 1 - (total - 1 - index) * 0.03
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div className="w-full md:h-[85vh]">
      <motion.div
        ref={cardRef}
        style={{ scale, top: `${index * 28}px` }}
        className="rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[40px] sm:p-6 md:sticky md:top-32 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="text-[clamp(3rem,10vw,140px)] font-black text-[#D7E2EA]">
              {project.number}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/70 sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[clamp(1.3rem,3vw,2.8rem)] font-semibold uppercase text-[#D7E2EA]">
                {project.name}
              </h3>
              {project.stack && (
                <p className="text-[clamp(0.7rem,1.1vw,0.95rem)] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60">
                  {project.stack}
                </p>
              )}
            </div>
          </div>
          <LiveProjectButton
            href={project.liveUrl}
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 sm:rounded-[28px] sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">
              Problem
            </p>
            <p className="mt-3 text-[clamp(0.9rem,1.2vw,1.05rem)] font-light leading-relaxed text-[#D7E2EA]">
              {project.problem}
            </p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-[#111111] p-4 sm:rounded-[28px] sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">
              Solution
            </p>
            <p className="mt-3 text-[clamp(0.9rem,1.2vw,1.05rem)] font-light leading-relaxed text-[#D7E2EA]">
              {project.solution}
            </p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10 p-4 sm:rounded-[28px] sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/60">
              Impact
            </p>
            <p className="mt-3 text-[clamp(0.9rem,1.2vw,1.05rem)] font-light leading-relaxed text-[#D7E2EA]">
              {project.impact}
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-[24px] border border-white/10 bg-[#101010] p-4 sm:rounded-[28px] sm:p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/60">
            Focus areas
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack?.split(',').map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-widest text-[#D7E2EA]/80"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
        Projects
      </h2>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
