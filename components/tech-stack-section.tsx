"use client"

import { motion } from "framer-motion"

const techGroups = [
  {
    name: "AWS Cloud",
    highlighted: true,
    badge: null,
    items: [
      "IAM", "Identity Center", "Organizations", "VPC", "Subnets", "Transit Gateway",
      "Route 53", "CloudFront", "Global Accelerator", "EC2", "Lambda", "ECS", "EKS",
      "S3", "EBS", "RDS", "Aurora", "DynamoDB", "SQS", "SNS", "EventBridge",
      "Control Tower", "GuardDuty", "Inspector", "Macie", "Config", "Security Hub",
      "AWS Backup", "Elastic Disaster Recovery", "Application Migration Service",
      "Database Migration Service"
    ]
  },
  {
    name: "Databricks",
    highlighted: false,
    badge: null,
    items: [
      "Workspace Deployment", "Unity Catalog", "Databricks Apps", "Asset Bundles",
      "GitLab CI/CD", "Classic & Serverless Compute", "Logging & Monitoring"
    ]
  },
  {
    name: "DevOps & Automation",
    highlighted: false,
    badge: "Learning",
    items: [
      "Terraform", "CloudFormation", "Kubernetes", "EKS", "Docker", "GitLab CI/CD", "GitHub Actions"
    ]
  },
  {
    name: "Foundations",
    highlighted: false,
    badge: null,
    items: [
      "Git", "Linux", "GitLab", "GitHub", "Azure", "Python"
    ]
  }
]

export function TechStackSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I work with
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My day-to-day involves AWS and Databricks. I'm actively building my DevOps and automation skills.
          </p>
        </motion.div>

        <div className="space-y-10">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className={`text-lg font-semibold ${group.highlighted ? 'text-primary' : 'text-foreground'}`}>
                  {group.name}
                </h3>
                {group.badge && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {group.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: groupIndex * 0.1 + itemIndex * 0.02 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -2, 
                      boxShadow: group.highlighted 
                        ? "0 4px 20px rgba(214, 188, 171, 0.15)" 
                        : "0 4px 12px rgba(168, 162, 158, 0.08)"
                    }}
                    className={`px-3 py-1.5 text-sm rounded-full cursor-default transition-colors ${
                      group.highlighted
                        ? 'bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25'
                        : 'bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground'
                    }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
