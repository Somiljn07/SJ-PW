"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Typewriter } from "./typewriter"

const highlights = [
  { label: "3x AWS Certified", emphasis: true },
  { label: "Celebal Technologies" },
  { label: "CGPA 9.02" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      
      {/* Warm ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent/80 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight max-w-4xl"
          >
            I build cloud infrastructure that
            <span className="block mt-2 text-muted-foreground">holds up when it matters.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Cloud & DevOps Engineer at Celebal Technologies, Jaipur. Working with AWS and Databricks. Constantly learning, occasionally over-engineering.
          </motion.p>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg font-mono"
          >
            <span className="text-muted-foreground">{">"} </span>
            <Typewriter />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-all duration-200"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-foreground font-medium rounded-xl hover:border-muted-foreground/50 hover:bg-card/50 transition-all duration-200"
            >
              Get in Touch
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item.label}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.emphasis 
                    ? "bg-accent/10 text-accent border border-accent/20" 
                    : "bg-muted/50 text-muted-foreground border border-transparent"
                }`}
              >
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border/60 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
