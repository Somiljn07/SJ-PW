import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <FeaturedProjectsSection />
        
        {/* Placeholder sections for navigation targets */}
        <section id="certifications" className="min-h-[50vh] flex items-center justify-center bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
            <p className="mt-4 text-muted-foreground">Coming soon...</p>
          </div>
        </section>

        <section id="blog" className="min-h-[50vh] flex items-center justify-center bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold text-foreground">Blog</h2>
            <p className="mt-4 text-muted-foreground">Coming soon...</p>
          </div>
        </section>

        <section id="contact" className="min-h-[50vh] flex items-center justify-center bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold text-foreground">Contact</h2>
            <p className="mt-4 text-muted-foreground">Coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
