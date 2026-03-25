"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Layers, Cpu, Code2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { projects } from "../page"
import Image from "next/image"

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  // Find the exact project from the main work page data
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return notFound()
  }

  // Generate color styles corresponding to the card glow
  const isIndigo = project.color === "indigo"
  const isGold = project.color === "gold"
  const isCyan = project.color === "cyan"
  
  const badgeColors = isIndigo ? "bg-primary/10 text-primary border-primary/20" :
                      isGold ? "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20" :
                      "bg-accent/10 text-accent border-accent/20"

  const iconColors = isIndigo ? "text-primary" :
                     isGold ? "text-[#f59e0b]" :
                     "text-accent"

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <Navbar />

      <main className="flex-1 relative pt-32 pb-24 px-6 z-10 w-full">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <Link 
            href="/work" 
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-black select-none font-mono" style={{ color: 'rgba(0,120,212,0.5)' }}>
                {project.index}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColors}`}>
                {project.type}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-[1.2] mb-6">
              {project.title}
            </h1>

            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed w-full mb-10">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-16">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 text-xs bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#a855f7] rounded-lg font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <hr className="border-border/40 mb-16" />

          {/* Architecture / Diagram Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-card border border-border/50 ${iconColors}`}>
                <Layers size={20} />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Architecture Diagram</h2>
            </div>
            
            {/* ✏️ NOTE FOR USER: Add your architecture diagram images here */}
            <div className="relative w-full aspect-video rounded-2xl border border-dashed border-border flex flex-col items-center justify-center bg-card/20 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-muted/10 opacity-50" />
               <div className="text-center z-10 p-6">
                 <Cpu size={40} className="mx-auto text-muted-foreground/30 mb-4" />
                 <p className="text-sm font-medium text-foreground mb-1">Architecture Placeholder</p>
                 <p className="text-xs text-muted-foreground/70">
                   When ready, update the `src` attribute in the Image tag inside `app/work/[slug]/page.tsx`
                 </p>
               </div>
               
               {/* 
                 UNCOMMENT AND UPDATE PATH WHEN YOU HAVE AN IMAGE:
                 <Image src="/architecture/my-diagram.png" alt="Architecture" fill className="object-cover" /> 
               */}
            </div>
          </motion.div>

          {/* Deep Dive Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          >
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-card border border-border/50 ${iconColors}`}>
                  <Code2 size={20} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Project Details</h2>
              </div>
              
              <div className="prose prose-invert prose-emerald max-w-none text-muted-foreground text-sm/relaxed space-y-4">
                {/* ✏️ NOTE FOR USER: Add the detailed paragraphs here */}
                <p>
                  This is the placeholder for your detailed project description. You can expand on the challenge, 
                  the approach you took, and the specific AWS/Databricks components utilized. 
                </p>
                <p>
                  Focus on the <strong>business impact</strong> and <strong>technical hurdles</strong> you overcame during the deployment phase. 
                  Highlighting debugging stories or specific multi-account constraints (like SCPs governing 
                  the Control Tower) makes for an excellent read.
                </p>
              </div>
            </div>

            {/* Highlights Sidebar */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 px-1 border-b border-border/40 pb-3">Key Highlights</h3>
              <ul className="space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${iconColors}`} />
                    <span className="text-sm text-foreground/80 leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
