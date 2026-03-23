"use client"

import { Linkedin, Github, Mail, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/somil-jain-600435228",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/somiljain",
    icon: Github,
    external: true,
  },
  {
    label: "your@email.com",
    href: "mailto:your@email.com",
    icon: Mail,
    external: false,
  },
]

export function ContactLinks() {
  return (
    <div className="space-y-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="font-medium text-foreground">{link.label}</span>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </a>
      ))}

      <Button
        asChild
        variant="outline"
        className="w-full mt-6 border-primary text-primary hover:bg-primary/10"
      >
        <a href="#" download>
          <FileText className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </div>
  )
}
