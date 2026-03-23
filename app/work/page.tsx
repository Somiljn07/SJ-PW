"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    type: "Infrastructure",
    title: "Databricks on AWS — End-to-End Private Connectivity",
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
    title: "AWS Landing Zone — Multi-Account Architecture",
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
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Things I've worked on
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Most of my work is in client environments — I share context without confidential details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
