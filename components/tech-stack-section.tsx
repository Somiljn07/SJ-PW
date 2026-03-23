"use client"

import { motion } from "framer-motion"

const techGroups = [
  {
    name: "AWS Cloud",
    description: "Primary platform",
    color: "aws",
    featured: true,
    items: [
      "IAM", "Identity Center", "Organizations", "VPC", "Transit Gateway",
      "Route 53", "CloudFront", "EC2", "Lambda", "ECS", "EKS",
      "S3", "RDS", "Aurora", "DynamoDB", "SQS", "SNS", "EventBridge",
      "Control Tower", "GuardDuty", "Security Hub", "AWS Backup"
    ]
  },
  {
    name: "Databricks",
    description: "Data platform",
    color: "databricks",
    featured: true,
    items: [
      "Workspace Deployment", "Unity Catalog", "Databricks Apps", "Asset Bundles",
      "Classic & Serverless Compute", "Logging & Monitoring"
    ]
  },
  {
    name: "DevOps & Automation",
    description: "Building skills",
    color: "devops",
    featured: false,
    items: [
      "Terraform", "CloudFormation", "Kubernetes", "Docker", "GitLab CI/CD", "GitHub Actions"
    ]
  },
  {
    name: "Foundations",
    description: "Core tools",
    color: "default",
    featured: false,
    items: [
      "Git", "Linux", "GitLab", "GitHub", "Python"
    ]
  }
]

// Subtle brand-hinted colors (very low opacity)
const colorStyles = {
  aws: {
    accent: "#FF9900",
    bg: "bg-[#FF9900]/[0.06]",
    border: "border-[#FF9900]/15",
    text: "text-foreground/80",
    hoverBg: "hover:bg-[#FF9900]/[0.1]",
    headerBg: "bg-[#FF9900]/10",
    headerText: "text-[#FF9900]"
  },
  databricks: {
    accent: "#FF3621",
    bg: "bg-[#FF3621]/[0.06]",
    border: "border-[#FF3621]/15",
    text: "text-foreground/80",
    hoverBg: "hover:bg-[#FF3621]/[0.1]",
    headerBg: "bg-[#FF3621]/10",
    headerText: "text-[#FF3621]"
  },
  devops: {
    accent: "var(--accent)",
    bg: "bg-accent/[0.06]",
    border: "border-accent/15",
    text: "text-foreground/80",
    hoverBg: "hover:bg-accent/[0.1]",
    headerBg: "bg-accent/10",
    headerText: "text-accent"
  },
  default: {
    accent: "var(--muted-foreground)",
    bg: "bg-muted/30",
    border: "border-border/50",
    text: "text-muted-foreground",
    hoverBg: "hover:bg-muted/50",
    headerBg: "bg-muted/50",
    headerText: "text-muted-foreground"
  }
}

export function TechStackSection() {
  return (
    <section className="py-24 md:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            What I work with
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            My day-to-day involves AWS infrastructure and Databricks deployments. Currently expanding into DevOps and automation.
          </p>
        </motion.div>

        {/* Featured tech - larger cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {techGroups.filter(g => g.featured).map((group, groupIndex) => {
            const colors = colorStyles[group.color as keyof typeof colorStyles] || colorStyles.default
            
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} hover-lift`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-md text-xs font-medium ${colors.headerBg} ${colors.headerText}`}>
                    {group.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {group.description}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 text-xs rounded-md border cursor-default transition-all duration-200 ${colors.bg} ${colors.border} ${colors.text} ${colors.hoverBg}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Other tech - smaller inline */}
        <div className="grid md:grid-cols-2 gap-6">
          {techGroups.filter(g => !g.featured).map((group, groupIndex) => {
            const colors = colorStyles[group.color as keyof typeof colorStyles] || colorStyles.default
            
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-border/40 bg-card/30"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="text-sm font-medium text-foreground">
                    {group.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {group.description}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2 py-0.5 text-xs rounded border cursor-default transition-all duration-200 ${colors.bg} ${colors.border} ${colors.text} ${colors.hoverBg}`}
                    >
                      {item}
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
