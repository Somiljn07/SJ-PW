"use client"

import { Linkedin, Github, Mail, FileText, ArrowUpRight, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const links = [
  {
    label: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://linkedin.com/in/somil-jain-600435228",
    icon: Linkedin,
    color: "#0A66C2",
    bg: "bg-[#0A66C2]/10",
    border: "border-[#0A66C2]/20",
    hoverBorder: "hover:border-[#0A66C2]/40",
    external: true,
  },
  {
    label: "GitHub",
    description: "@somiljain · View my repositories",
    href: "https://github.com/Somiljn07",
    icon: Github,
    color: "#e8eaf6",
    bg: "bg-white/5",
    border: "border-border/50",
    hoverBorder: "hover:border-border",
    external: true,
  },
  {
    label: "Email",
    description: "somiljn02@gmail.com",
    href: "mailto:somiljn02@gmail.com",
    icon: Mail,
    color: "#6366f1",
    bg: "bg-primary/10",
    border: "border-primary/20",
    hoverBorder: "hover:border-primary/40",
    external: false,
  },
]

export function ContactLinks() {
  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.07, duration: 0.4 }}
          className={`group flex items-center justify-between rounded-2xl border ${link.border} bg-[#0a101f]/80 p-5 shadow-xl transition-all duration-200 ${link.hoverBorder} hover:bg-[#0f172a]`}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl border"
              style={{
                background: `${link.color}15`,
                borderColor: `${link.color}30`,
              }}
            >
              <link.icon className="h-5 w-5" style={{ color: link.color }} />
            </div>
            <div>
              <span className="font-semibold text-foreground block">{link.label}</span>
              <span className="text-base text-gray-300">{link.description}</span>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      ))}

      <motion.a
        href="#"
        download
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="group flex items-center justify-center gap-2.5 w-full mt-4 py-3.5 rounded-2xl border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 font-medium"
      >
        <FileText className="h-4 w-4" />
        Download Resume
        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </motion.a>
    </div>
  )
}
