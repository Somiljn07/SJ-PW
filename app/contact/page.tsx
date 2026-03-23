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
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's talk
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Open to Cloud & DevOps roles, collaborations, or a good conversation about cloud architecture or markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Send a message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Or find me here</h2>
              <ContactLinks />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
