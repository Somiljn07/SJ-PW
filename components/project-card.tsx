"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  type: string
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ type, title, description, tags }: ProjectCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <div
        className="bg-card rounded-lg p-6 border border-border 
                   transition-all duration-300 group-hover:border-accent/40"
        style={{ transform: "translateZ(0)" }}
      >
        <Badge 
          variant="outline" 
          className="mb-3 text-xs font-medium border-accent/40 text-accent"
        >
          {type}
        </Badge>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
