"use client"

// ============================================================
// Beyond Tech Section — components/about/beyond-tech-section.tsx
// ============================================================
// HOW TO ADD / EDIT AN INTEREST:
//   Edit the `interests` array below.
//
// FIELDS:
//   icon        — any icon from lucide-react (import it at the top)
//   title       — short label shown on the card
//   color       — "gold" | "indigo" | "cyan" | "purple"
//   description — 2-3 sentence description
//   tags        — short keyword chips shown at the bottom
// ============================================================

import { motion } from "framer-motion"
import { TrendingUp, BookOpen, BarChart3, Lightbulb } from "lucide-react"

const interests = [
  {
    icon: TrendingUp,
    title: "Equity Research & Markets",
    color: "gold",
    description:
      "My analytical mindset extends beyond cloud architecture into equity research. I actively analyze company financials, study competitive moats, and evaluate long-term market trends. Holding a NISM-Series-XII certification ensures my market research is grounded in formal financial principles rather than speculation.",
    tags: ["Equity Research", "Market Analysis", "NISM Certified"],
  },
  {
    icon: BookOpen,
    title: "Global Economics & Reading",
    color: "indigo",
    description:
      "Staying informed on global economics is a cornerstone of my daily routine. Whether it's reading morning market news, deep-diving into business blogs, or studying financial literature, I am constantly curious about what's happening in the world and how global events drive business strategy across industries.",
    tags: ["Market News", "Economics", "Business Strategy"],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Investing",
    color: "cyan",
    description:
      "I treat investing like an engineering problem. Rather than chasing daily trends, I deep-dive into balance sheets, cash flow statements, and quarterly earnings to identify fundamentally strong businesses. I enjoy the analytical rigor of finding companies built to compound over decades, not days.",
    tags: ["Fundamental Analysis", "Value Investing", "Long-term Strategy"],
  },
  {
    icon: Lightbulb,
    title: "Knowledge Sharing & Community",
    color: "purple",
    description:
      "Whether it's explaining the nuances of AWS networking or breaking down the basics of financial literacy, I'm passionate about demystifying complex topics. I actively mentor peers and take pride in helping others build strong technical and financial foundations.",
    tags: ["Mentorship", "Knowledge Sharing", "AWS Community"],
  },
]

const colorMap = {
  gold: {
    icon: "bg-[#f59e0b]/10 border-[#f59e0b]/20 text-[#f59e0b]",
    tag: "bg-[#f59e0b]/10 text-[#f59e0b]/80 border-[#f59e0b]/20",
  },
  indigo: {
    icon: "bg-primary/10 border-primary/20 text-primary",
    tag: "bg-primary/10 text-primary/80 border-primary/20",
  },
  cyan: {
    icon: "bg-accent/10 border-accent/20 text-accent",
    tag: "bg-accent/10 text-accent/80 border-accent/20",
  },
  purple: {
    icon: "bg-[#a855f7]/10 border-[#a855f7]/20 text-[#a855f7]",
    tag: "bg-[#a855f7]/10 text-[#a855f7]/80 border-[#a855f7]/20",
  },
}

export function BeyondTechSection() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-heading">
            Beyond the terminal
          </h2>
          <p className="mt-3 text-muted-foreground">What I think about when I&apos;m not building infrastructure</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {interests.map((item, index) => {
            const colors = colorMap[item.color as keyof typeof colorMap]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl p-7 transition-all duration-300 glass-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${colors.icon}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-lg border ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
