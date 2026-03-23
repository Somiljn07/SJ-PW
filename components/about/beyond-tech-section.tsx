"use client"

import { motion } from "framer-motion"
import { TrendingUp, BookOpen } from "lucide-react"

export function BeyondTechSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-12 tracking-tight"
        >
          Beyond the terminal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Finance & Markets Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border/60 bg-card/50 p-8 hover:bg-card hover:border-border transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-accent/10 rounded-xl">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                Finance & Markets
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I spend time thinking about financial markets. I read the Economic Times, do fundamental analysis on Screener.in, and I'm learning technical analysis. The NISM-Series-XII certification helped formalize what I was learning informally. I enjoy helping people around me get started with investing.
            </p>
          </motion.div>

          {/* Reading & Curiosity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border/60 bg-card/50 p-8 hover:bg-card hover:border-border transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-accent/10 rounded-xl">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                Reading & Curiosity
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I read books - mostly on finance, business, and ideas. I find that the same structured thinking that helps in cloud architecture also helps in understanding markets and systems of all kinds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
