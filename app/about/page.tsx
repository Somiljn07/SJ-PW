import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { IntroSection } from "@/components/about/intro-section"
import { ExperienceTimeline } from "@/components/about/experience-timeline"
import { EducationSection } from "@/components/about/education-section"
import { CertificationsGrid } from "@/components/about/certifications-grid"
import { BeyondTechSection } from "@/components/about/beyond-tech-section"

export const metadata = {
  title: "About | Somil Jain - Cloud & DevOps Engineer",
  description:
    "Learn about Somil Jain's journey as a Cloud & DevOps Engineer at Celebal Technologies, his experience with AWS and Databricks, education, and certifications.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <IntroSection />
        <ExperienceTimeline />
        <EducationSection />
        <CertificationsGrid />
        <BeyondTechSection />
      </main>
      <Footer />
    </div>
  )
}
