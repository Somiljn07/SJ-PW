"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

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
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Featured Work
            </h2>
            <p className="mt-2 text-muted-foreground">
              A selection of recent projects
            </p>
          </div>
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            View All Work 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
