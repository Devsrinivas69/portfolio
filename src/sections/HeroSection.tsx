import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'
import { Magnet } from '../components/Magnet'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-x-clip"
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex flex-wrap items-center justify-center gap-4 px-6 pt-6 text-[0.7rem] font-medium uppercase tracking-wider text-[#D7E2EA] sm:gap-6 sm:text-sm md:flex-nowrap md:justify-between md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex flex-1 flex-col justify-between">
        <FadeIn
          as="div"
          delay={0.15}
          y={40}
          className="relative z-20 mt-6 overflow-hidden px-6 sm:mt-4 md:-mt-5 md:px-10"
        >
          <h1 className="hero-heading w-full text-[13.5vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[12vw] md:text-[10.5vw] lg:text-[9.5vw]">
            <span className="block">Srinivas</span>
            <span className="block">Reddy K.H</span>
          </h1>
        </FadeIn>

        <div className="relative z-20 flex flex-col items-start justify-between gap-6 px-6 pb-7 sm:pb-8 md:flex-row md:items-end md:gap-10 md:px-10 md:pb-10">
          <FadeIn delay={0.35} y={20} className="max-w-[260px] sm:max-w-[320px] md:max-w-[340px]">
            <p className="text-[clamp(0.85rem,1.3vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]/90">
              Full-stack developer building responsive React frontends and scalable Node/Express APIs.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>

      <FadeIn
        as="div"
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-[52%] z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0 sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="3D creator portrait"
            className="w-full"
            loading="lazy"
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
