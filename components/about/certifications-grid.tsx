"use client"

import { motion } from "framer-motion"

interface Certification {
  name: string
  issuer: string
  date: string
  note: string
  isPrimary?: boolean
  color?: string
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "AWS",
    date: "Feb 2026",
    note: "Advanced architectural design",
    isPrimary: true,
    color: "#FF9900",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "AWS",
    date: "Feb 2025",
    note: "Core AWS services",
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
  },
  {
    name: "NISM-Series-XII: Securities Markets",
    issuer: "NISM",
    date: "Feb 2024",
    note: "Securities market regulations",
    isPrimary: false,
  },
]

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group p-5 rounded-xl border transition-all duration-300 ${
        cert.isPrimary 
          ? "border-[#FF9900]/30 bg-[#FF9900]/[0.04] hover:bg-[#FF9900]/[0.08] hover:border-[#FF9900]/40" 
          : "border-border/60 bg-card/50 hover:bg-card hover:border-border"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div 
          className={`px-2 py-1 rounded-md text-xs font-medium ${
            cert.isPrimary 
              ? "bg-[#FF9900]/15 text-[#FF9900]" 
              : "bg-muted/50 text-muted-foreground"
          }`}
        >
          {cert.issuer}
        </div>
        <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
      </div>
      
      <h3 className="text-sm font-medium text-foreground mb-2 leading-snug">
        {cert.name}
      </h3>
      
      <p className="text-xs text-muted-foreground">
        {cert.note}
      </p>
    </motion.div>
  )
}

export function CertificationsGrid() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-muted-foreground">
            Professional credentials and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
