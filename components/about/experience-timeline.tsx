"use client"

// ============================================================
// Experience Timeline — components/about/experience-timeline.tsx
// ============================================================
// HOW TO ADD / EDIT A JOB:
//   1. Open the `experiences` array below.
//   2. To add a new role, prepend a new object at the TOP of the
//      array (most recent job first).
//   3. To edit an existing role, change the relevant fields.
//
// FIELDS:
//   index    — display number (e.g. "01") — update when reordering
//   role     — your job title
//   type     — "Full-time" | "Trainee" | "Intern" | "Contract"
//   company  — company name
//   duration — e.g. "Aug 2025 – Present"
//   points   — bullet points describing what you did (2-4 is ideal)
//   color    — "indigo" (latest) | "cyan" | "muted" (older roles)
// ============================================================

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    index: "01",
    role: "Cloud Engineer",
    type: "Full-time",
    company: "Celebal Technologies",
    duration: "Aug 2025 – Present",
    points: [
      "Working on AWS infrastructure design, Databricks deployments, and platform engineering",
      "Involved in multi-account architecture, security configurations, and automation initiatives",
    ],
    color: "indigo",
  },
  {
    index: "02",
    role: "Cloud Infra & Security Junior Associate",
    type: "Trainee",
    company: "Celebal Technologies",
    duration: "Jul 2024 – Aug 2025",
    points: [
      "Hands-on with AWS networking: VPC, Transit Gateway, Site-to-Site VPN, Route 53, Network Firewall",
      "Worked on Databricks workspace administration and Unity Catalog configurations",
    ],
    color: "cyan",
  },
  {
    index: "03",
    role: "Cloud Infra & Security Intern",
    type: "Intern",
    company: "Celebal Technologies",
    duration: "Apr 2024 – Jun 2024",
    points: [
      "Gained foundational AWS experience with IAM, EC2, ELB, ASG, VPC, S3",
      "Implemented 3-tier architecture and VPN scenarios in real-world projects",
    ],
    color: "muted",
  },
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section className="py-10 md:py-14 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-heading">
            Experience
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-3 bottom-3 w-px bg-border/60">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent"
            />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-14"
              >
                {/* Timeline dot with number */}
                <div className={`absolute left-0 top-5 w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-black font-mono ${
                  exp.color === "indigo"
                    ? "border-primary/60 bg-primary/10 text-primary"
                    : exp.color === "cyan"
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-border bg-card text-muted-foreground"
                }`}>
                  {exp.index}
                </div>

                {/* Content card — glassmorphic */}
                <div className={`p-6 rounded-2xl shadow-xl transition-all duration-300 group glass-card ${
                  exp.color === 'indigo' ? 'glass-card-devops' : ''
                }`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground border border-border/50">
                          {exp.type}
                        </span>
                      </div>
                      <p className={`font-medium ${exp.color === "indigo" ? "text-primary" : exp.color === "cyan" ? "text-accent" : "text-muted-foreground"}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-foreground/80 font-semibold font-mono shrink-0 bg-muted/30 border border-border/50 px-3 py-1 rounded-lg">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 text-base flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
