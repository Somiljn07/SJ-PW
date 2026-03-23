"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/somiljain", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/somil-jain-600435228", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
]

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Brand */}
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-1">
              <span className="text-lg font-semibold text-foreground">somil</span>
              <span className="text-lg font-semibold text-muted-foreground">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Cloud & DevOps Engineer based in Jaipur, India. Building reliable infrastructure.
            </p>
          </div>

          {/* Middle: Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
          <p>Built with Next.js and curiosity</p>
          <p>2025</p>
        </div>
      </div>
    </footer>
  )
}
