import { FadeIn } from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, and Three.js for responsive, interactive interfaces.',
  },
  {
    number: '02',
    title: 'Backend APIs',
    description:
      'Node.js and Express.js for REST APIs and scalable server-side logic.',
  },
  {
    number: '03',
    title: 'Databases',
    description:
      'MongoDB and Supabase with working knowledge of MySQL and SQL fundamentals.',
  },
  {
    number: '04',
    title: 'Tools & Delivery',
    description:
      'Git, GitHub, VS Code, Vercel, CI/CD pipelines, debugging, and testing workflows.',
  },
  {
    number: '05',
    title: 'Collaboration',
    description:
      'Mentoring junior developers, clear technical communication, and problem solving in teams.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
        Skills
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col">
        {SERVICES.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            className="border-t border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 last:border-b"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <div className="text-[clamp(3rem,10vw,140px)] font-black text-[#0C0C0C]">
                {service.number}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
