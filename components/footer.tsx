"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/Somiljn07",                 icon: Github,   label: "GitHub"   },
  { href: "https://linkedin.com/in/somil-jain-600435228", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:somiljn02@gmail.com",                   icon: Mail,     label: "Email"    },
]

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/about",   label: "About"   },
  { href: "/work",    label: "Work"    },
  { href: "/blog",    label: "Blog"    },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[#040814]/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-7">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Left: Brand + copyright */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group inline-flex items-center gap-0.5">
              <span className="text-base font-bold text-foreground">S</span>
              <span className="text-base font-bold gradient-text">J</span>
            </Link>
            <span className="text-xs text-muted-foreground/50">·</span>
            <span className="text-sm text-muted-foreground/60">© 2026 Somil Jain</span>
          </div>

          {/* Centre: Nav links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
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

          {/* Right: Social icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <link.icon size={17} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
