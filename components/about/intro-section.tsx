"use client"

import { motion } from "framer-motion"
import { AwsArchitectureDecoration } from "./aws-architecture-decoration"

export function IntroSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                {"I'm Somil — a Cloud & DevOps Engineer who enjoys figuring out how things connect."}
              </p>
              <p>
                I spend most of my time working on AWS infrastructure and Databricks deployments at Celebal Technologies in Jaipur. I like understanding systems deeply — not just making them work, but understanding <span className="text-primary">why</span> they work.
              </p>
              <p>
                I started as an intern in April 2024, got curious fast, and never really stopped. Over the past two years I've gone from setting up basic EC2 instances to deploying multi-account AWS Landing Zones and end-to-end private Databricks environments. I'm now focused on adding automation and DevOps skills — Terraform, Kubernetes, CI/CD — because I believe infrastructure should be code.
              </p>
            </div>
          </motion.div>

          {/* Decorative AWS diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <AwsArchitectureDecoration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
