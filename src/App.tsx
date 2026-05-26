import { AboutSection } from './sections/AboutSection'
import { BuildLogSection } from './sections/BuildLogSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProcessSection } from './sections/ProcessSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'
import { TechMapSection } from './sections/TechMapSection'

function App() {
  return (
    <main className="bg-[#0C0C0C] text-[#D7E2EA]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechMapSection />
      <BuildLogSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
