"use client"

// ============================================================
// Work Page — app/work/page.tsx
// ============================================================
// PILLAR 2: glass-card on all project cards
// PILLAR 3: section-label star coordinate style
// PILLAR 4: semantic tag colors via getTagColor()
// ============================================================

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { Footer } from "@/components/footer"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { getTagColor } from "@/lib/colors"

// ── ✏️ ADD / REMOVE FILTER TABS HERE ────────────────────────
const categories = ["All", "Infrastructure", "Consulting", "DevOps"]

// ── ✏️ EDIT YOUR PROJECTS HERE ──────────────────────────────
export const projects = [
  {
    index: "01",
    slug: "databricks-aws-private-connectivity",
    type: "Infrastructure",
    primaryTech: "databricks",
    title: "Databricks on AWS — End-to-End Private Connectivity",
    description: "Deployed a fully private Databricks workspace on AWS with zero public internet exposure. Configured VPC, PrivateLink, private endpoints, NAT Gateway configuration, and IAM roles for a secure enterprise-grade data platform. Achieved full network isolation while maintaining operability.",
    highlights: [
      "100% private — no public internet exposure",
      "PrivateLink for all Databricks backend communication",
      "Custom IAM roles with least-privilege access",
    ],
    tags: ["Databricks", "AWS VPC", "PrivateLink", "IAM", "S3", "NAT Gateway"],
  },
  {
    index: "02",
    slug: "aws-well-architected-review",
    type: "Consulting",
    primaryTech: "aws",
    title: "AWS Well-Architected Review",
    description: "Analyzed a client's AWS environment against the Well-Architected Framework. Identified gaps across the 6 pillars — security, reliability, performance, cost optimization, sustainability, and operational excellence. Delivered a structured report with prioritized remediation recommendations.",
    highlights: [
      "Covered all 6 Well-Architected Framework pillars",
      "Identified 20+ actionable improvement areas",
      "Prioritized by impact and implementation effort",
    ],
    tags: ["AWS", "Security", "Cost Optimization", "Architecture Review"],
  },
  {
    index: "03",
    slug: "aws-landing-zone-multi-account",
    type: "Infrastructure",
    primaryTech: "aws",
    title: "AWS Landing Zone — Multi-Account Architecture",
    description: "Built an AWS Landing Zone from scratch using Control Tower. Established a multi-account structure with SCPs, guardrails, centralized logging via CloudTrail, Security Hub, and account vending for enterprise governance at scale. Includes automated baseline account setup.",
    highlights: [
      "Multi-account structure with AWS Organizations",
      "Service Control Policies (SCPs) for governance",
      "Centralized logging & Security Hub integration",
    ],
    tags: ["Control Tower", "AWS Organizations", "SCPs", "CloudTrail", "IAM", "Security Hub"],
  },
  {
    index: "04",
    slug: "databricks-cicd-asset-bundles",
    type: "DevOps",
    primaryTech: "devops",
    title: "Databricks CI/CD with Asset Bundles",
    description: "Set up CI/CD pipelines for Databricks using GitLab CI/CD and Databricks Asset Bundles. Automated deployment of notebooks, jobs, and clusters across dev/staging/prod environments for reliable, repeatable workflows. Eliminated manual deployment errors.",
    highlights: [
      "Automated multi-environment deployments",
      "Databricks Asset Bundles for infrastructure-as-code",
      "GitLab CI/CD with environment promotion gates",
    ],
    tags: ["Databricks", "GitLab", "CI/CD", "Automation"],
  },
]

// Map primaryTech → glass-card glow variant CSS class
const GLOW_CLASS: Record<string, string> = {
  aws:        "glass-card-aws",
  databricks: "glass-card-db",
  devops:     "glass-card-devops",
};

// Type badge color by category
const TYPE_BADGE: Record<string, string> = {
  Infrastructure: "bg-[#FF9900]/10 text-[#FF9900]/80 border-[#FF9900]/20",
  Consulting:     "bg-emerald-500/10 text-emerald-400/80 border-emerald-500/20",
  DevOps:         "bg-[#818cf8]/10 text-[#818cf8]/80 border-[#818cf8]/20",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const glowClass  = GLOW_CLASS[project.primaryTech] ?? "";
  const badgeClass = TYPE_BADGE[project.type] ?? "bg-primary/10 text-primary/80 border-primary/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="h-full"
    >
      <div className={`group rounded-2xl p-7 h-full flex flex-col glass-card ${glowClass}`}>
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black select-none font-mono leading-none" style={{ color: 'rgba(0,120,212,0.5)' }}>
              {project.index}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${badgeClass}`}>
              {project.type}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 mt-1" />
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-gray-300 text-base leading-relaxed mb-5">
          {project.description}
        </p>

        {/* View details link */}
        <div className="mb-6 mt-auto">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-primary transition-colors link-underline"
          >
            View Details <ArrowRight size={13} />
          </Link>
        </div>

        {/* Tech tags — semantic brand colors */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => {
            const { bg, border, text } = getTagColor(tag);
            return (
              <span
                key={tag}
                className={`px-2.5 py-1 text-xs rounded-lg border ${bg} ${border} ${text}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.type === activeCategory)

  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      <main className="relative pt-20 pb-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Things I&apos;ve worked on
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Most of my work lives in client environments.
              I share context and approach without confidential details.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary/15 border-primary/30 text-primary shadow-[0_0_16px_rgba(16,185,129,0.12)]"
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/20"
                }`}
              >
                {cat}
                <span className="ml-2 text-xs opacity-60">
                  {cat === "All" ? projects.length : projects.filter(p => p.type === cat).length}
                </span>
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
