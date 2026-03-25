"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getTagColor } from "@/lib/colors"

// ============================================================
// Featured Projects Section — components/featured-projects-section.tsx
// ============================================================
// HOW TO UPDATE A PROJECT: edit the `featuredProjects` array below.
// HOW TO SWAP FEATURED PROJECTS: move items to/from app/work/page.tsx.
// PILLAR 2: Glass-card styling.
// PILLAR 4: Semantic tag colors via getTagColor() from lib/colors.ts
// ============================================================

const featuredProjects = [
  {
    index: "01",
    slug: "databricks-aws-private-connectivity",
    type: "Infrastructure",
    primaryTech: "databricks", // used for card glow variant
    title: "Databricks on AWS — End-to-End Private Connectivity",
    description: "Deployed a fully private Databricks workspace on AWS with zero public internet exposure. Configured VPC, PrivateLink, private endpoints, and IAM roles for a secure enterprise-grade data platform.",
    tags: ["Databricks", "AWS VPC", "PrivateLink", "IAM", "S3"],
  },
  {
    index: "02",
    slug: "aws-landing-zone-multi-account",
    type: "Infrastructure",
    primaryTech: "aws", // used for card glow variant
    title: "AWS Landing Zone — Multi-Account Architecture",
    description: "Built an AWS Landing Zone from scratch using Control Tower. Established a multi-account structure with SCPs, guardrails, centralized logging, and account vending for enterprise governance at scale.",
    tags: ["Control Tower", "AWS Organizations", "SCPs", "CloudTrail", "IAM"],
  }
]

// Map primaryTech to the CSS glow class suffix
const GLOW_CLASS: Record<string, string> = {
  aws:        "glass-card-aws",
  databricks: "glass-card-db",
  devops:     "glass-card-devops",
};


export function FeaturedProjectsSection() {
  return (
    <section className="py-10 md:py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-heading">
              Featured Work
            </h2>
            <p className="mt-3 text-muted-foreground">
              A selection of recent infrastructure projects
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors link-underline"
          >
            View All Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Project cards — glass-card + branded glow on hover */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => {
            const glowClass = GLOW_CLASS[project.primaryTech] ?? "";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <article className={`group relative h-full flex flex-col p-6 rounded-2xl overflow-hidden glass-card ${glowClass}`}>
                  {/* Large index number — visual depth */}
                  <span className="absolute top-4 right-4 text-7xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
                    {project.index}
                  </span>

                  {/* Type badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/10 text-primary/80">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Action link */}
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
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
