import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProcessSection } from './sections/ProcessSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'

function App() {
  return (
    <main className="bg-[#0C0C0C] text-[#D7E2EA]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
