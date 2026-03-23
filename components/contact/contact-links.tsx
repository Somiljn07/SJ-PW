"use client"

import { Linkedin, Github, Mail, FileText, ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "LinkedIn",
    description: "Connect with me",
    href: "https://linkedin.com/in/somil-jain-600435228",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    description: "View my code",
    href: "https://github.com/somiljain",
    icon: Github,
    external: true,
  },
  {
    label: "Email",
    description: "your@email.com",
    href: "mailto:your@email.com",
    icon: Mail,
    external: false,
  },
]

export function ContactLinks() {
  return (
    <div className="space-y-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="group flex items-center justify-between rounded-xl border border-border/60 bg-card/50 p-4 transition-all duration-200 hover:border-border hover:bg-card"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <div>
              <span className="font-medium text-foreground block">{link.label}</span>
              <span className="text-sm text-muted-foreground">{link.description}</span>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ))}

      <a 
        href="#" 
        download
        className="group flex items-center justify-center gap-2 w-full mt-6 py-3 rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
      >
        <FileText className="h-4 w-4" />
        <span className="font-medium">Download Resume</span>
      </a>
    </div>
  )
}
