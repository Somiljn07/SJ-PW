"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Certification {
  name: string
  issuer: string
  date: string
  note: string
  isPrimary?: boolean
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "AWS",
    date: "Feb 2026",
    note: "Advanced architectural design and multi-account strategies",
    isPrimary: true,
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "AWS",
    date: "Feb 2025",
    note: "Core AWS services and well-architected solutions",
    isPrimary: true,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "Mar 2024",
    note: "Foundational AWS cloud knowledge",
    isPrimary: true,
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    note: "Multi-cloud fundamentals with Azure",
    isPrimary: false,
  },
  {
    name: "Introduction to FinOps",
    issuer: "FinOps Foundation",
    date: "Dec 2025",
    note: "Cloud financial management practices",
    isPrimary: false,
  },
  {
    name: "NISM-Series-XII: Securities Markets Foundation",
    issuer: "NISM",
    date: "Feb 2024",
    note: "Securities market regulations and operations",
    isPrimary: false,
  },
]

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative h-48 cursor-pointer transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 bg-card rounded-lg p-6 flex flex-col justify-between backface-hidden border ${
            cert.isPrimary ? "border-primary" : "border-border"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                cert.isPrimary ? "bg-primary/20" : "bg-muted"
              }`}
            >
              <span
                className={`text-sm font-bold ${
                  cert.isPrimary ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {cert.issuer.substring(0, 3).toUpperCase()}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-foreground line-clamp-2">
              {cert.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 bg-card rounded-lg p-6 flex flex-col justify-between border ${
            cert.isPrimary ? "border-primary" : "border-border"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Issued: {cert.date}
            </p>
            <p className="text-sm text-foreground">{cert.note}</p>
          </div>
          <p className="text-xs text-muted-foreground">Click to flip back</p>
        </div>
      </div>
    </motion.div>
  )
}

export function CertificationsGrid() {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
