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
      className="relative flex min-h-[100svh] flex-col"
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

      <div className="flex flex-1 items-center px-6 pb-10 pt-6 sm:pt-8 md:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
        <FadeIn
          as="div"
          delay={0.15}
          y={40}
          className="relative z-20 overflow-hidden md:col-start-1 md:row-start-1"
        >
          <h1 className="hero-heading w-full text-[13.5vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[12vw] md:text-[10.5vw] lg:text-[9.5vw]">
            <span className="block">Srinivas</span>
            <span className="block">Reddy K.H</span>
          </h1>
        </FadeIn>

        <FadeIn
          as="div"
          delay={0.6}
          y={30}
          className="flex justify-center md:col-start-2 md:row-span-2 md:justify-end"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full max-w-[220px] sm:max-w-[240px] md:max-w-[360px] lg:max-w-[420px]"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="3D creator portrait"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </Magnet>
        </FadeIn>

        <div className="relative z-20 flex flex-col items-start gap-6 md:col-start-1 md:row-start-2 md:max-w-[340px]">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[clamp(0.85rem,1.3vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]/90">
              Full-stack developer building responsive React frontends and scalable Node/Express APIs.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
        </div>
      </div>
    </section>
  )
}
