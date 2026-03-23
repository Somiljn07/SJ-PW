"use client"

import { motion } from "framer-motion"
import { TrendingUp, BookOpen } from "lucide-react"

export function BeyondTechSection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          Beyond the terminal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Finance & Markets Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Finance & Markets
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I spend a lot of time thinking about financial markets. I read the Economic Times regularly, do fundamental analysis of stocks using Screener.in, and I'm currently learning technical analysis. I cleared the NISM-Series-XII certification which helped me formalize a lot of what I was already learning informally. I also enjoy helping people around me get started with investing.
            </p>
          </motion.div>

          {/* Reading & Curiosity Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Reading & Curiosity
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I read books — mostly on finance, business, and ideas. I find that the same structured thinking that helps in cloud architecture also helps in understanding markets and systems of all kinds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
