"use client"

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
          <div className="group cursor-default rounded-xl border border-dashed border-border/60 bg-card/30 p-6 transition-all duration-300 hover:border-muted-foreground/40 hover:bg-card/50">
            <div className="mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent/80">
                Coming soon
              </span>
            </div>
            
            <h3 className="mb-3 text-base font-medium text-muted-foreground/80 line-clamp-2">
              {title}
            </h3>
            
            <p className="text-sm text-muted-foreground/50">
              {category} - {readTime} read
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
