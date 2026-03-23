"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Typewriter } from "./typewriter"

const socialLinks = [
  { href: "https://github.com/somiljain", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/somil-jain-600435228", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
]

const quickLinks = [
  { href: "/about", label: "ABOUT", description: "My journey" },
  { href: "/work", label: "WORK", description: "Projects & experience" },
  { href: "/contact", label: "CONTACT", description: "Get in touch" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20" />
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 min-h-[calc(100vh-5rem)] flex flex-col">
        {/* Main content - two column on desktop */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-16 lg:gap-24 items-center">
          {/* Left column - Main content */}
          <div>
            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Somil Jain
              </h1>
              <p className="mt-3 text-xl md:text-2xl text-accent font-medium">
                Cloud & DevOps Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I build cloud infrastructure that holds up when it matters. Currently working with{" "}
              <span className="text-foreground">AWS</span> and{" "}
              <span className="text-foreground">Databricks</span> at Celebal Technologies, Jaipur.
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-mono text-sm"
            >
              <span className="text-muted-foreground/60">currently_building:</span>{" "}
              <Typewriter />
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center gap-2"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column - Quick navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 p-4 -mx-4 rounded-xl hover:bg-card/50 transition-all duration-200"
                >
                  <div className="w-12 h-px bg-border group-hover:bg-accent group-hover:w-16 transition-all duration-300" />
                  <div>
                    <span className="text-sm font-medium tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight 
                    size={14} 
                    className="ml-auto text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" 
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 mt-8 border-t border-border/50"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-semibold text-foreground">3x</p>
                  <p className="text-xs text-muted-foreground mt-1">AWS Certified</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">9.02</p>
                  <p className="text-xs text-muted-foreground mt-1">CGPA</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-between py-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground/60">
            Open to opportunities
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
            <span className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse" />
            Jaipur, India
          </div>
        </motion.div>
      </div>
    </section>
  )
}
