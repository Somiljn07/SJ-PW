"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    role: "Cloud Engineer",
    type: "Full-time",
    company: "Celebal Technologies",
    duration: "Aug 2025 – Present",
    points: [
      "Working on AWS infrastructure design, Databricks deployments, and platform engineering",
      "Involved in multi-account architecture, security configurations, and automation initiatives",
    ],
  },
  {
    role: "Cloud Infra & Security Junior Associate",
    type: "Trainee",
    company: "Celebal Technologies",
    duration: "Jul 2024 – Aug 2025",
    points: [
      "Hands-on with AWS networking: VPC, Transit Gateway, Site-to-Site VPN, Route 53, Network Firewall",
      "Worked on Databricks workspace administration and Unity Catalog configurations",
    ],
  },
  {
    role: "Cloud Infra & Security Intern",
    type: "Intern",
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
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-16 tracking-tight"
        >
          Experience
        </motion.h2>

        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-3 bottom-3 w-px bg-border">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-accent/60"
            />
          </div>

          {/* Timeline entries */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-accent/60 bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div className="p-6 rounded-xl border border-border/60 bg-card/50 hover:bg-card hover:border-border transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-medium text-foreground">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono shrink-0">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-3"
                      >
                        <span className="text-accent/60 mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
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
