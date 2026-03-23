"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const featuredProjects = [
  {
    type: "Infrastructure",
    title: "Databricks on AWS — End-to-End Private Connectivity",
    description: "Deployed a fully private Databricks workspace on AWS with zero public internet exposure. Configured VPC, PrivateLink, private endpoints, and IAM roles for a secure enterprise-grade data platform.",
    tags: ["Databricks", "AWS VPC", "PrivateLink", "IAM", "S3"]
  },
  {
    type: "Infrastructure",
    title: "AWS Landing Zone — Multi-Account Architecture",
    description: "Built an AWS Landing Zone from scratch using Control Tower. Established a multi-account structure with SCPs, guardrails, centralized logging, and account vending for enterprise governance at scale.",
    tags: ["Control Tower", "AWS Organizations", "SCPs", "CloudTrail", "IAM"]
  }
]

export function FeaturedProjectsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Featured Work
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              A selection of recent projects
            </p>
          </div>
          <Link 
            href="/work"
            className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
          >
            View All Work 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <article className="group relative h-full p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-border/80 transition-all duration-300">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.type}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
