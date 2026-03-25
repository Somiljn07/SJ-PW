"use client"

// ============================================================
// Certifications Grid — components/about/certifications-grid.tsx
// ============================================================
// HOW TO ADD A CERTIFICATION:
//   Add a new object to the `certifications` array below.
//
// FIELDS:
//   name       — full certification name
//   issuer     — issuing body (e.g. "AWS", "Microsoft", "NISM")
//   date       — month + year awarded (e.g. "Mar 2025")
//   note       — one-line description of what this covers
//   isPrimary  — true = shown in the top row (larger); false = bottom row
//   color      — hex colour for the card border/badge
//              — "#FF9900" for AWS, "#0078D4" for Microsoft,
//                leave undefined for generic grey
// ============================================================

import { motion } from "framer-motion"

interface Certification {
  name: string
  issuer: string
  date: string
  note: string
  isPrimary?: boolean
  color?: string
  badgeColor?: string
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "AWS",
    date: "Feb 2026",
    note: "Advanced architectural design",
    isPrimary: true,
    color: "#FF9900",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "AWS",
    date: "Feb 2025",
    note: "Core AWS services & design",
    isPrimary: true,
    color: "#FF9900",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "Mar 2024",
    note: "Foundational AWS knowledge",
    isPrimary: true,
    color: "#FF9900",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    note: "Multi-cloud fundamentals",
    isPrimary: false,
    color: "#0078D4",
  },
  {
    name: "Introduction to FinOps",
    issuer: "FinOps Foundation",
    date: "Dec 2025",
    note: "Cloud financial management",
    isPrimary: false,
    color: "#10B981",
  },
  {
    name: "NISM-Series-XII: Securities Markets",
    issuer: "NISM",
    date: "Feb 2024",
    note: "Securities market regulations",
    isPrimary: false,
    color: "#8B5CF6",
  },
]

function CertBadge({ isPrimary, color }: { isPrimary?: boolean; color?: string }) {
  if (isPrimary && color === "#FF9900") {
    return (
      <div className="w-9 h-9 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-lg flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10L10 25V55L40 70L70 55V25L40 10Z" fill="none" stroke="#FF9900" strokeWidth="5" />
          <path d="M40 10V70M10 25L70 55M70 25L10 55" stroke="#FF9900" strokeWidth="3" opacity="0.5" />
        </svg>
      </div>
    )
  }
  if (color === "#0078D4") {
    return (
      <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0078D4" d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/>
        </svg>
      </div>
    )
  }
  if (color === "#10B981") {
    // FinOps Foundation — teal cloud-cost icon
    return (
      <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 4 5 4 9c0 2.5 1.5 4.7 3.7 6L12 22l4.3-7C18.5 13.7 20 11.5 20 9c0-4-4-7-8-7z" />
          <path d="M9 9h6M12 6v6" />
        </svg>
      </div>
    )
  }
  if (color === "#8B5CF6") {
    // NISM — violet shield/scroll icon
    return (
      <div className="w-9 h-9 bg-violet-500/10 border border-violet-500/30 rounded-lg flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v6c0 5 3.9 9.7 9 11 5.1-1.3 9-6 9-11V7l-9-5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    )
  }
  return (
    <div className="w-9 h-9 bg-muted/40 border border-border/50 rounded-lg flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
  )
}

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`group p-5 rounded-2xl transition-all duration-300 glass-card ${
        cert.isPrimary
          ? "glass-card-aws"
          : cert.color === "#0078D4"
          ? "[&:hover]:shadow-[0_0_40px_rgba(0,120,212,0.1)]"
          : ""
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <CertBadge isPrimary={cert.isPrimary} color={cert.color} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-md ${!cert.color ? "bg-muted/50 text-muted-foreground" : ""}`}
              style={{
                background: cert.color ? `${cert.color}20` : undefined,
                color: cert.color ?? undefined,
              }}
            >
              {cert.issuer}
            </span>
            <span className="text-xs text-muted-foreground font-mono shrink-0">{cert.date}</span>
          </div>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
        {cert.name}
      </h3>
      <p className="text-xs text-muted-foreground">{cert.note}</p>
    </motion.div>
  )
}

export function CertificationsGrid() {
  const awsCerts = certifications.filter(c => c.isPrimary)
  const otherCerts = certifications.filter(c => !c.isPrimary)

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-heading">
            Certifications
          </h2>
          <p className="mt-3 text-muted-foreground">3× AWS Certified + additional professional credentials</p>
        </motion.div>

        {/* AWS Certs — prominent */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {awsCerts.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>

        {/* Other certs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherCerts.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={awsCerts.length + index} />
          ))}
        </div>
      </div>
    </section>
  )
}
