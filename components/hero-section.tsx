"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Typewriter } from "./typewriter"

const stats = [
  { label: "3x AWS Certified" },
  { label: "2 yrs @ Celebal" },
  { label: "CGPA 9.02" },
  { label: "4x Dean's Award" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
              I architect cloud systems that hold up when it matters.
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
              Cloud & DevOps Engineer working with AWS and Databricks at Celebal Technologies, Jaipur. Constantly learning, occasionally over-engineering things.
            </p>

            {/* Typewriter */}
            <div className="mt-6 text-xl">
              <Typewriter />
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                See My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
              >
                Get in Touch
                <Mail size={18} />
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-0"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  {index < stats.length - 1 && (
                    <span className="hidden sm:block mx-4 text-border">|</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              {/* Hexagon shape with initials */}
              <div className="absolute inset-0 bg-card border border-border/60 rounded-3xl rotate-6 transform" />
              <div className="absolute inset-0 bg-card border border-border rounded-3xl -rotate-6 transform" />
              <div className="relative w-full h-full bg-card border border-accent/50 rounded-3xl flex items-center justify-center">
                <span className="text-6xl lg:text-7xl font-bold text-foreground">SJ</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/50 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
