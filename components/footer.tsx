"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-foreground font-medium">
            Somil Jain · Cloud & DevOps Engineer · Jaipur, India
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js and curiosity. · 2025
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
