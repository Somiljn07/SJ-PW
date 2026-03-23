"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-12 tracking-tight"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border/60 bg-card/50 p-8"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 bg-accent/10 rounded-xl">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground">
                B.Tech in Information Technology
              </h3>
              <p className="text-accent mt-1">
                Manipal University Jaipur
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-muted-foreground text-sm">
                <span>2021 - 2025</span>
                <span className="text-foreground font-medium">
                  CGPA: 9.02
                </span>
              </div>
            </div>
          </div>

          {/* Award callout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg flex items-start gap-3"
          >
            <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-medium">
                {"Dean's Award for Excellence in Academics"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                4 times (3rd, 4th, 5th & 7th semester) - Highest GPA in IT department
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
