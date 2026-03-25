import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactLinks } from "@/components/contact/contact-links"

export const metadata = {
  title: "Contact | Somil Jain",
  description: "Get in touch with Somil Jain for cloud & DevOps roles, collaborations, or conversations about cloud architecture.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <ScrollProgress />
      <Navbar />

      <main className="relative pt-20 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              {"Let's talk"}
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Open to Cloud & DevOps roles, collaborations, or a good conversation about cloud architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-base font-semibold text-foreground mb-6">Send a message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground mb-6">Or find me here</h2>
              <ContactLinks />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
