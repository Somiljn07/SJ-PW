"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Star } from "lucide-react"

export function EducationSection() {
  return (
    <section className="py-10 md:py-14 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-heading">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-8 shadow-xl glass-card"
        >
          <div className="flex items-start gap-5">
            <div className="p-3.5 bg-primary/10 border border-primary/20 rounded-xl">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">
                B.Tech — Information Technology
              </h3>
              <p className="text-primary font-medium mt-1">Manipal University Jaipur</p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="text-sm text-muted-foreground px-3 py-1 rounded-lg bg-muted/30 border border-border/40">
                  2021 – 2025
                </span>
                <span className="text-sm font-bold text-foreground px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  CGPA: 9.17 / 10
                </span>
              </div>
            </div>
          </div>

          {/* Dean's Award */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 p-5 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-xl flex items-start gap-4"
          >
            <div className="p-2.5 bg-[#f59e0b]/10 rounded-lg">
              <Award className="w-5 h-5 text-[#f59e0b]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-foreground font-semibold">Dean&apos;s Award for Excellence in Academics</p>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={10} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Awarded 4 times — 3rd, 4th, 5th & 7th semester — for Highest GPA in the IT department
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
