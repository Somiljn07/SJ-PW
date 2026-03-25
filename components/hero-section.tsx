"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Typewriter } from "./typewriter"

// ── ✏️  EDIT YOUR DETAILS HERE ──────────────────────────────────────
const socialLinks = [
  { href: "https://github.com/Somiljn07",                      icon: Github,   label: "GitHub"   },
  { href: "https://linkedin.com/in/somil-jain-600435228",      icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:somiljn02@gmail.com",                        icon: Mail,     label: "Email"    },
]

const stats = [
  { value: "3×",   label: "AWS Certified"  },
  { value: "9.17", label: "CGPA"           },
  { value: "1+",   label: "Year @ Celebal" },
]

// Credly verified badge links — replace href with your actual Credly share URLs
const certBadges = [
  {
    src:   "/badges/sa-professional.png",
    alt:   "AWS Certified Solutions Architect – Professional",
    href:  "https://www.credly.com/badges/a9aba842-68e4-4fc7-a718-e8041beaaaf3/public_url",
    label: "SA Professional",
  },
  {
    src:   "/badges/sa-associate.png",
    alt:   "AWS Certified Solutions Architect – Associate",
    href:  "https://www.credly.com/earner/earned/share/f410d61d-7ecd-416a-bc9d-5b3b7bc6e017",
    label: "SA Associate",
  },
  {
    src:   "/badges/cloud-practitioner.png",
    alt:   "AWS Certified Cloud Practitioner",
    href:  "https://www.credly.com/earner/earned/share/247ba932-6d0a-4e0b-ab15-be7b661beb18",
    label: "Cloud Practitioner",
  },
]
// ─────────────────────────────────────────────────────────────────────

// Fade-up stagger helper
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any },
})

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-20 pb-8">
      {/* Ambient glow */}
      <div className="absolute inset-0 hero-glow" />

      {/* ── Two-column layout ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-10 md:gap-8">

        {/* ── LEFT: Text content ──────────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Role badge */}
          <motion.div {...fadeUp(0.05)} className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs text-emerald-400 font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Cloud &amp; DevOps Engineer · Celebal Technologies
          </motion.div>

          {/* Name — aurora multi-color shimmer in Playfair Display */}
          <motion.div {...fadeUp(0.1)} className="w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] gradient-text-hero">
              Somil Jain
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="mt-3 h-[2px] w-24 bg-gradient-to-r from-emerald-400 via-cyan-400 to-transparent mx-auto md:mx-0"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p {...fadeUp(0.15)} className="mt-6 text-xl md:text-2xl font-normal text-foreground/80 leading-snug">
            I design and build reliable, production-grade cloud infrastructure on{" "}
            <span className="text-[#FF9900]">AWS</span> that teams can trust to scale and stay stable.
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.2)} className="mt-4 text-base text-gray-300 max-w-lg leading-relaxed">
            Cloud &amp; DevOps Engineer at{" "}
            <span className="text-emerald-400 font-semibold">Celebal Technologies</span>.{" "}
            I specialize in networking, security, and automation, ensuring strong foundations so systems run reliably and deployments move faster.
          </motion.p>

          {/* Typewriter */}
          <motion.div {...fadeUp(0.25)} className="mt-4 font-mono text-base text-gray-400 w-full text-center md:text-left">
            <span className="text-emerald-500">$ </span>
            <Typewriter />
          </motion.div>

          {/* CTAs + social */}
          <motion.div {...fadeUp(0.3)} className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-emerald-950 text-sm font-semibold hover:bg-emerald-400 transition-all duration-200 btn-primary-glow"
            >
              View My Work <ArrowRight size={14} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white/85 text-sm font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200 btn-ghost-glow"
            >
              <Download size={14} />
              Resume
            </a>
            <div className="flex items-center gap-1 ml-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Avatar + Stats + Badges ──────────────────────── */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5 w-full md:w-auto">

          {/* Avatar */}
          <motion.div {...fadeUp(0.1)} className="relative animate-float">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-[3rem] animate-avatar-glow blur-[32px] scale-110" />
            {/* Photo frame — swap src to your real image when ready */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-[3rem] overflow-hidden border animate-avatar-border">
              <Image
                src="/avatar.png"
                alt="Somil Jain"
                fill
                className="object-cover brightness-90 contrast-110 opacity-90 hover:opacity-100 transition-opacity duration-300"
                priority
              />
              {/* Dynamic Hue Overlay to shift the baked-in green edge lighting */}
              <div className="absolute inset-0 z-10 animate-avatar-hue-mask pointer-events-none" />
            </div>
          </motion.div>

          {/* Stats bar — glass-card treatment */}
          <motion.div {...fadeUp(0.35)} className="flex items-center divide-x divide-border/50 rounded-xl glass-card px-2">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 py-2.5 text-center">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-[11px] font-medium text-gray-400 mt-0.5 whitespace-nowrap">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Credly badges */}
          <motion.div {...fadeUp(0.45)} className="flex flex-col items-center gap-3">
            <p className="text-[11px] text-muted-foreground/80 font-mono uppercase tracking-widest">
              AWS Certified — Verified via Credly
            </p>
            <div className="flex items-center gap-5">
              {certBadges.map((badge) => (
                <a
                  key={badge.label}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  title={badge.alt}
                >
                  <div className="relative w-[72px] h-[72px] transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,153,0,0.4)]">
                    <Image src={badge.src} alt={badge.alt} fill className="object-contain" />
                  </div>
                  <span className="text-[10px] font-medium text-foreground/70 text-center max-w-[80px] leading-tight group-hover:text-foreground transition-colors">
                    {badge.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
