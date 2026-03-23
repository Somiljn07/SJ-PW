"use client"

import { motion } from "framer-motion"

export function AwsArchitectureDecoration() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewBox="0 0 400 400"
      className="w-full h-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection lines - using accent color */}
      <motion.path
        d="M100 80 L200 80 L200 160"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />
      <motion.path
        d="M300 80 L200 80"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.path
        d="M200 200 L200 280 L100 280"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      />
      <motion.path
        d="M200 280 L300 280"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      />
      <motion.path
        d="M100 160 L100 200"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      />
      <motion.path
        d="M300 160 L300 200"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      />

      {/* VPC Box */}
      <motion.rect
        x="60"
        y="120"
        width="280"
        height="200"
        rx="8"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.15"
        fill="none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.text
        x="75"
        y="138"
        fill="var(--accent)"
        fillOpacity="0.4"
        fontSize="10"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        VPC
      </motion.text>

      {/* Service boxes */}
      <motion.rect
        x="80"
        y="50"
        width="60"
        height="40"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="var(--accent)"
        fillOpacity="0.04"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.text
        x="95"
        y="75"
        fill="var(--accent)"
        fillOpacity="0.5"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Route53
      </motion.text>

      <motion.rect
        x="270"
        y="50"
        width="60"
        height="40"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="var(--accent)"
        fillOpacity="0.04"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.text
        x="280"
        y="75"
        fill="var(--accent)"
        fillOpacity="0.5"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        CloudFront
      </motion.text>

      {/* EC2 instances */}
      <motion.rect
        x="80"
        y="160"
        width="50"
        height="50"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="var(--accent)"
        fillOpacity="0.06"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.text
        x="95"
        y="190"
        fill="var(--accent)"
        fillOpacity="0.5"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        EC2
      </motion.text>

      <motion.rect
        x="270"
        y="160"
        width="50"
        height="50"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="var(--accent)"
        fillOpacity="0.06"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
      <motion.text
        x="285"
        y="190"
        fill="var(--accent)"
        fillOpacity="0.5"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        EC2
      </motion.text>

      {/* ALB */}
      <motion.rect
        x="170"
        y="160"
        width="60"
        height="40"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="var(--accent)"
        fillOpacity="0.08"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.text
        x="190"
        y="185"
        fill="var(--accent)"
        fillOpacity="0.6"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        ALB
      </motion.text>

      {/* RDS */}
      <motion.rect
        x="80"
        y="250"
        width="50"
        height="50"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="var(--accent)"
        fillOpacity="0.04"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
      <motion.text
        x="95"
        y="280"
        fill="var(--accent)"
        fillOpacity="0.5"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        RDS
      </motion.text>

      {/* S3 */}
      <motion.rect
        x="270"
        y="250"
        width="50"
        height="50"
        rx="6"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="var(--accent)"
        fillOpacity="0.04"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.text
        x="290"
        y="280"
        fill="var(--accent)"
        fillOpacity="0.5"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        S3
      </motion.text>

      {/* Decorative dots */}
      {[
        { cx: 50, cy: 100, delay: 1.5 },
        { cx: 350, cy: 120, delay: 1.6 },
        { cx: 40, cy: 320, delay: 1.7 },
        { cx: 360, cy: 340, delay: 1.8 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="2"
          fill="var(--accent)"
          fillOpacity="0.25"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: dot.delay }}
        />
      ))}
    </motion.svg>
  )
}
