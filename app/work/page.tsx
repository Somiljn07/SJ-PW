"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    type: "Infrastructure",
    title: "Databricks on AWS - End-to-End Private Connectivity",
    description: "Deployed a fully private Databricks workspace on AWS with zero public internet exposure. Configured VPC, PrivateLink, private endpoints, and IAM roles for a secure enterprise-grade data platform.",
    tags: ["Databricks", "AWS VPC", "PrivateLink", "IAM", "S3"]
  },
  {
    type: "Consulting",
    title: "AWS Well-Architected Review",
    description: "Analyzed a client's AWS environment against the Well-Architected Framework. Identified gaps across security, reliability, and cost. Delivered a structured report with prioritized recommendations.",
    tags: ["AWS WAF", "Security", "Cost Optimization", "Architecture Review"]
  },
  {
    type: "Infrastructure",
    title: "AWS Landing Zone - Multi-Account Architecture",
    description: "Built an AWS Landing Zone from scratch using Control Tower. Established a multi-account structure with SCPs, guardrails, centralized logging, and account vending for enterprise governance at scale.",
    tags: ["Control Tower", "AWS Organizations", "SCPs", "CloudTrail", "IAM"]
  },
  {
    type: "DevOps",
    title: "Databricks CI/CD with Asset Bundles",
    description: "Set up CI/CD pipelines for Databricks using GitLab CI/CD and Databricks Asset Bundles. Automated deployment of notebooks and jobs across environments for reliable, repeatable workflows.",
    tags: ["Databricks Asset Bundles", "GitLab CI/CD", "Automation"]
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Things I've worked on
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Most of my work is in client environments - I share context without confidential details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <article className="group h-full p-6 rounded-2xl border border-border/60 bg-card/50 hover:bg-card hover:border-border transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {project.type}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
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
      </main>
      <Footer />
    </div>
  )
}
