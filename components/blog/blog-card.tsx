"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowRight, ExternalLink } from "lucide-react"

// ============================================================
// BlogCard — renders one row in the blog list
// ============================================================
// Props:
//   title     — the post title
//   category  — colour-coded category label
//   readTime  — e.g. "8 min"
//   index     — numeric position (0-based) for the row number
//   href      — (OPTIONAL) URL of the published post.
//               Leave undefined / empty to show "Coming soon".
//               As soon as you paste a URL the card becomes a
//               live, clickable link automatically.
// ============================================================

interface BlogCardProps {
  title: string
  category: string
  readTime: string
  index: number
  href?: string  // ← Add the blog URL here when the post is live
}

// Colour mapping per category — add new entries if you add new categories
const categoryColors: Record<string, { badge: string }> = {
  "Cloud Infrastructure": {
    badge: "bg-primary/10 text-primary/80 border-primary/20",
  },
  "Databricks": {
    badge: "bg-[#FF3621]/10 text-[#FF3621]/80 border-[#FF3621]/20",
  },
  "Finance": {
    badge: "bg-[#f59e0b]/10 text-[#f59e0b]/80 border-[#f59e0b]/20",
  },
  "DevOps": {
    badge: "bg-accent/10 text-accent/80 border-accent/20",
  },
}

export function BlogCard({ title, category, readTime, index, href }: BlogCardProps) {
  const colors = categoryColors[category] ?? {
    badge: "bg-[#a855f7]/10 text-[#a855f7]/80 border-[#a855f7]/20",
  }

  const isLive = Boolean(href)  // true when a URL has been provided

  // Shared inner content — same layout whether card is live or "coming soon"
  const innerContent = (
    <>
      {/* Row number */}
      <span className="text-xs font-mono pt-1 w-5 shrink-0" style={{ color: 'rgba(0,120,212,0.6)' }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex-1 min-w-0">
        {/* Category + meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${colors.badge}`}>
            {category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={10} />
            {readTime} read
          </span>

          {/* Status badge — shows "Coming soon" or "Read →" */}
          {isLive ? (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
              <ExternalLink size={9} />
              Read now
            </span>
          ) : (
            <span className="text-xs text-muted-foreground/50 px-2 py-0.5 rounded-md border border-dashed border-border/50 bg-card/30">
              Coming soon
            </span>
          )}
        </div>

        {/* Post title */}
        <h3 className={`text-lg font-semibold leading-snug transition-colors duration-200 ${
          isLive
            ? "text-foreground group-hover:text-primary"
            : "text-gray-300 group-hover:text-foreground"
        }`}>
          {title}
        </h3>
      </div>

      {/* Right arrow icon */}
      <ArrowRight
        size={14}
        className={`transition-all duration-200 mt-1 shrink-0 ${
          isLive
            ? "text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1"
            : "text-muted-foreground/20 group-hover:text-muted-foreground"
        }`}
      />
    </>
  )

  // When a URL is provided → render as a real link
  if (isLive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.45 }}
      >
        <Link
          href={href!}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-5 py-6 border-b border-border/40 hover:border-primary/30 transition-all duration-200"
        >
          {innerContent}
        </Link>
      </motion.div>
    )
  }

  // No URL yet → render as a non-clickable row with "Coming soon"
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="group flex items-start gap-5 py-6 border-b border-border/40 hover:border-border/70 transition-all duration-200 cursor-default">
        {innerContent}
      </div>
    </motion.div>
  )
}
