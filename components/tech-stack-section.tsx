"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

// ============================================================
// Tech Stack Section — asymmetric layout
// Left: tall AWS card  |  Right: Databricks / DevOps / Foundations stacked
// Edit only the data arrays below — never touch JSX.
// ============================================================

type Category = { name: string; items: string[] }
type TechGroup = {
  id: string
  name: string
  description: string
  scheme: "aws" | "databricks" | "devops" | "default"
  buildingSkills?: boolean
  categories?: Category[]
  flatItems?: string[]
}

const techGroups: TechGroup[] = [
  {
    id: "aws",
    name: "AWS Cloud",
    description: "Primary platform",
    scheme: "aws",
    categories: [
      { name: "Networking & Content Delivery",  items: ["VPC", "Transit Gateway", "Route 53", "CloudFront", "Global Accelerator", "VPC Endpoints", "Network Firewall", "Site-to-Site VPN", "Client VPN"] },
      { name: "Identity & Access Management",   items: ["IAM", "Identity Center", "AWS Organizations", "Cognito"] },
      { name: "Compute & Containers",           items: ["EC2", "ECS", "EKS", "Lambda"] },
      { name: "Storage & Database",             items: ["S3", "EBS", "RDS", "Aurora", "DynamoDB"] },
      { name: "Security & Compliance",          items: ["GuardDuty", "Inspector", "Security Hub", "Config", "Macie"] },
      { name: "Migration & Disaster Recovery",  items: ["Application Migration Service", "Database Migration Service", "AWS Backup", "Elastic Disaster Recovery"] },
      { name: "Logging & Monitoring",           items: ["CloudWatch", "CloudTrail"] },
      { name: "Integration & Messaging",        items: ["SNS", "SQS", "EventBridge", "SES"] },
      { name: "Governance & Landing Zone",      items: ["Control Tower"] },
      { name: "Infrastructure as Code",         items: ["CloudFormation"] },
    ],
  },
  {
    id: "databricks",
    name: "Databricks",
    description: "Data platform",
    scheme: "databricks",
    categories: [
      { name: "Workspace & Deployment",  items: ["Account & Workspace Administration", "Public Connectivity Deployment", "End-to-End Private Connectivity Deployment"] },
      { name: "Data Governance",         items: ["Unity Catalog Administration", "External Locations", "Storage Credentials", "Permissions & Access Management"] },
      { name: "Compute & Development",   items: ["Classic Compute", "Serverless Compute", "Databricks Apps"] },
      { name: "DevOps & Automation",     items: ["CI/CD Pipelines", "Asset Bundles", "GitLab Integration"] },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Automation",
    description: "Building skills",
    scheme: "devops",
    buildingSkills: true,
    categories: [
      { name: "Infrastructure as Code",     items: ["Terraform", "CloudFormation"] },
      { name: "Containers & Orchestration", items: ["Docker", "Kubernetes", "EKS"] },
      { name: "CI/CD",                      items: ["GitLab CI/CD", "GitHub Actions"] },
    ],
  },
  {
    id: "foundations",
    name: "Foundations",
    description: "Core tools",
    scheme: "default",
    flatItems: ["Git", "GitHub", "GitLab", "Linux", "Python", "Azure (AZ-900)"],
  },
]

// ── Colour tokens per scheme ─────────────────────────────────
const schemes = {
  aws: {
    dot:     "bg-[#FF9900]",
    badge:   "bg-[#FF9900]/15 text-[#FF9900]",
    catTx:   "text-[#FF9900]/80",
    tag:     "bg-[#FF9900]/[0.07] border-[#FF9900]/20 hover:bg-[#FF9900]/[0.14]",
    card:    "glass-card glass-card-aws",
    chevron: "text-[#FF9900]/50",
  },
  databricks: {
    dot:     "bg-[#FF3621]",
    badge:   "bg-[#FF3621]/15 text-[#FF3621]",
    catTx:   "text-[#FF3621]/80",
    tag:     "bg-[#FF3621]/[0.07] border-[#FF3621]/20 hover:bg-[#FF3621]/[0.14]",
    card:    "glass-card glass-card-db",
    chevron: "text-[#FF3621]/50",
  },
  devops: {
    dot:     "bg-primary",
    badge:   "bg-primary/15 text-primary",
    catTx:   "text-primary/80",
    tag:     "bg-primary/[0.07] border-primary/20 hover:bg-primary/[0.14]",
    card:    "glass-card glass-card-devops",
    chevron: "text-primary/50",
  },
  default: {
    dot:     "bg-[#818cf8]",
    badge:   "bg-[#818cf8]/15 text-[#818cf8]",
    catTx:   "text-[#818cf8]/80",
    tag:     "bg-[#818cf8]/[0.07] border-[#818cf8]/20 hover:bg-[#818cf8]/[0.14]",
    card:    "glass-card",
    chevron: "text-[#818cf8]/50",
  },
}

// ── Shared card header ────────────────────────────────────────
function CardHeader({ group }: { group: TechGroup }) {
  const s = schemes[group.scheme]
  return (
    <div className="flex items-center gap-2.5 mb-4 flex-shrink-0">
      <div className={`w-2 h-2 rounded-full ${s.dot}`} />
      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${s.badge}`}>{group.name}</span>
      <span className="text-xs text-muted-foreground">{group.description}</span>
      {group.buildingSkills && (
        <span className="ml-auto text-[10px] font-mono text-muted-foreground/50 border border-border/30 px-2 py-0.5 rounded-md">
          in progress
        </span>
      )}
    </div>
  )
}

// ── Accordion card ────────────────────────────────────────────
function AccordionCard({ group, className = "" }: { group: TechGroup; className?: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const s = schemes[group.scheme]
  const cats = group.categories ?? []

  return (
    <div className={`flex flex-col p-5 rounded-2xl border ${s.card} ${className}`}>
      <CardHeader group={group} />
      <div className="flex flex-col divide-y divide-border/20 flex-1">
        {cats.map((cat, i) => {
          const isOpen = open === i
          return (
            <div key={cat.name}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-2.5 gap-2 text-left group"
              >
                <span className={`text-sm font-semibold transition-colors duration-150 ${isOpen ? s.catTx : "text-gray-400 group-hover:text-foreground"}`}>
                  {cat.name}
                </span>
                <ChevronDown
                  size={12}
                  className={`shrink-0 transition-transform duration-200 ${s.chevron} ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-1.5 pb-3 pt-1">
                      {cat.items.map((item) => (
                        <span key={item} className={`px-2.5 py-1 text-xs rounded-lg border cursor-default text-foreground/70 transition-colors duration-150 hover:text-foreground ${s.tag}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Flat tag card ─────────────────────────────────────────────
function FlatCard({ group, className = "" }: { group: TechGroup; className?: string }) {
  const s = schemes[group.scheme]
  return (
    <div className={`flex flex-col p-5 rounded-2xl border ${s.card} ${className}`}>
      <CardHeader group={group} />
      <div className="flex flex-wrap gap-1.5">
        {(group.flatItems ?? []).map((item) => (
          <span key={item} className={`px-2.5 py-1 text-xs rounded-lg border cursor-default text-foreground/70 transition-colors duration-150 hover:text-foreground ${s.tag}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────
export function TechStackSection() {
  const [aws, databricks, devops, foundations] = techGroups

  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section heading — untouched */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 lg:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text-heading">
            What I work with
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-2xl">
            Day-to-day: AWS infrastructure and Databricks deployments.
            Currently expanding into DevOps and automation tooling.
          </p>
        </motion.div>

        {/* Rebalanced layout: Left (AWS + Foundations) | Right (Databricks + DevOps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col"
            >
              <AccordionCard group={aws} className="h-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true }}
            >
              <FlatCard group={foundations} />
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col"
            >
              <AccordionCard group={databricks} className="h-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col"
            >
              <AccordionCard group={devops} className="h-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
