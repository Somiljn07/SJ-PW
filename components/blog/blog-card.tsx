"use client"

import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface BlogCardProps {
  title: string
  category: string
  readTime: string
}

export function BlogCard({ title, category, readTime }: BlogCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="group cursor-default rounded-lg border-2 border-dashed border-border bg-card/50 p-6 transition-all hover:border-muted-foreground/50">
            <div className="mb-4 flex items-start justify-between">
              <Badge 
                variant="outline" 
                className="border-amber-500/50 bg-amber-500/10 text-amber-500"
              >
                Coming soon
              </Badge>
            </div>
            
            <h3 className="mb-3 text-lg font-semibold text-muted-foreground line-clamp-2 text-balance">
              {title}
            </h3>
            
            <p className="text-sm text-muted-foreground/70">
              {category} · Est. read: {readTime}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Stay tuned!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
