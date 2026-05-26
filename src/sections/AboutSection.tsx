import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { AnimatedText } from '../components/AnimatedText'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'

const ABOUT_TEXT =
  'Motivated BCA graduate and full-stack developer with real-world experience building responsive React frontends and scalable Node.js/Express.js APIs. I ship production-ready web applications, collaborate with clients on UI and UX, and mentor junior developers. Seeking a Full Stack Developer internship at Adsquaretech to contribute to real projects and grow through mentorship.'

const CONTACTS = [
  {
    label: 'Email',
    value: 'reddykph@gmail.com',
    href: 'mailto:reddykph@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 8088244385',
    href: 'tel:+918088244385',
    Icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/Devsrinivas69',
    href: 'https://github.com/Devsrinivas69',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/srinivas-reddy-k-h',
    href: 'https://linkedin.com/in/srinivas-reddy-k-h',
    Icon: Linkedin,
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        as="img"
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
        alt="Moon icon"
        delay={0.1}
        duration={0.9}
        x={-80}
        y={0}
        className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      />
      <FadeIn
        as="img"
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
        alt="3D object"
        delay={0.25}
        duration={0.9}
        x={-80}
        y={0}
        className="absolute bottom-[8%] left-[3%] hidden w-[100px] sm:block sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      />
      <FadeIn
        as="img"
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
        alt="Lego icon"
        delay={0.15}
        duration={0.9}
        x={80}
        y={0}
        className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      />
      <FadeIn
        as="img"
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
        alt="3D group"
        delay={0.3}
        duration={0.9}
        x={80}
        y={0}
        className="absolute bottom-[8%] right-[3%] hidden w-[130px] sm:block sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
          <div className="grid gap-3 text-left sm:grid-cols-2">
            {CONTACTS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[0.78rem] uppercase tracking-[0.12em] text-[#D7E2EA]/80 transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 sm:text-[clamp(0.8rem,1.1vw,1rem)] sm:tracking-[0.2em]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0C0C0C] text-[#D7E2EA] shadow-[0_0_20px_rgba(215,226,234,0.15)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[0.65rem] text-[#D7E2EA]/50">
                    {label}
                  </span>
                  <span className="text-[0.8rem] tracking-wide text-[#D7E2EA]">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <ContactButton href="#contact" />
        </div>
      </div>
    </section>
  )
}
