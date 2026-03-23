import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { SpotlightCursor } from "@/components/spotlight-cursor"
import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative">
      <SpotlightCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <FeaturedProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
