"use client"

import { motion } from "framer-motion"

const techGroups = [
  {
    name: "AWS Cloud",
    description: "Primary platform",
    color: "aws",
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
    items: [
      "Workspace Deployment", "Unity Catalog", "Databricks Apps", "Asset Bundles",
      "Classic & Serverless Compute", "Logging & Monitoring"
    ]
  },
  {
    name: "DevOps & Automation",
    description: "Building skills",
    color: "devops",
    items: [
      "Terraform", "CloudFormation", "Kubernetes", "Docker", "GitLab CI/CD", "GitHub Actions"
    ]
  },
  {
    name: "Foundations",
    description: "Core tools",
    color: "default",
    items: [
      "Git", "Linux", "GitLab", "GitHub", "Python"
    ]
  }
]

// Subtle brand-hinted colors (very low opacity)
const colorStyles = {
  aws: {
    bg: "bg-[#FF9900]/[0.08]",
    border: "border-[#FF9900]/20",
    text: "text-foreground/90",
    hoverBg: "hover:bg-[#FF9900]/[0.12]"
  },
  databricks: {
    bg: "bg-[#FF3621]/[0.08]",
    border: "border-[#FF3621]/20",
    text: "text-foreground/90",
    hoverBg: "hover:bg-[#FF3621]/[0.12]"
  },
  devops: {
    bg: "bg-accent/[0.08]",
    border: "border-accent/20",
    text: "text-foreground/90",
    hoverBg: "hover:bg-accent/[0.12]"
  },
  default: {
    bg: "bg-muted/50",
    border: "border-border",
    text: "text-muted-foreground",
    hoverBg: "hover:bg-muted"
  }
}

export function TechStackSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-5xl mx-auto px-6">
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

        <div className="space-y-12">
          {techGroups.map((group, groupIndex) => {
            const colors = colorStyles[group.color as keyof typeof colorStyles] || colorStyles.default
            
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <h3 className="text-lg font-medium text-foreground">
                    {group.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {group.description}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: groupIndex * 0.05 + itemIndex * 0.02 
                      }}
                      viewport={{ once: true }}
                      className={`px-3 py-1.5 text-sm rounded-lg border cursor-default transition-all duration-200 ${colors.bg} ${colors.border} ${colors.text} ${colors.hoverBg}`}
                    >
                      {item}
                    </motion.span>
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
