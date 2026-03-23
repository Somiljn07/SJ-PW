"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    role: "Cloud Engineer — Full-time",
    company: "Celebal Technologies",
    duration: "Aug 2025 – Present",
    points: [
      "Working on AWS infrastructure design, Databricks deployments, and platform engineering",
      "Involved in multi-account architecture, security configurations, and automation initiatives",
    ],
  },
  {
    role: "Cloud Infra & Security Junior Associate — Trainee",
    company: "Celebal Technologies",
    duration: "Jul 2024 – Aug 2025",
    points: [
      "Hands-on with AWS networking: VPC, Transit Gateway, Site-to-Site VPN, Route 53, Network Firewall",
      "Worked on Databricks workspace administration and Unity Catalog configurations",
    ],
  },
  {
    role: "Cloud Infra & Security Intern",
    company: "Celebal Technologies",
    duration: "Apr 2024 – Jun 2024",
    points: [
      "Gained foundational AWS experience with IAM, EC2, ELB, ASG, VPC, S3",
      "Implemented 3-tier architecture and VPN scenarios in real-world projects",
    ],
  },
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div ref={containerRef} className="relative" style={{ position: 'relative' }}>
          {/* Animated timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-primary"
            />
          </div>

          {/* Timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </motion.div>

                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 text-xs">·</span>
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
