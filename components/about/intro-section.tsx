"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, Calendar, Zap, Terminal } from "lucide-react"

const facts = [
  { icon: Terminal, label: "Role", value: "Cloud Engineer" },
  { icon: Building2, label: "Company", value: "Celebal Technologies" },
  { icon: MapPin, label: "Location", value: "Jaipur, India" },
  { icon: Calendar, label: "Experience", value: "Since Apr 2024" },

]

export function IntroSection() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Hi, I'm <span className="gradient-text">Somil</span>
            </h1>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p className="text-base md:text-lg text-foreground/90">
                I&apos;m a Cloud & DevOps Engineer focused on building reliable, production-grade infrastructure on AWS and Databricks.
              </p>
              <p>
                At Celebal Technologies, I design and manage cloud environments with a strong emphasis on networking, security, and automation — ensuring systems are stable, scalable, and easy to operate.
              </p>
              <p>
                Over the past couple of years, I&apos;ve worked across:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 font-medium">
                <li><span className="text-[#FF9900]">AWS infrastructure</span> and Landing Zones</li>
                <li><span className="text-[#FF3621]">Databricks</span> deployments (end-to-end environments)</li>
                <li><span className="text-primary">CI/CD pipelines</span> and infrastructure automation</li>
              </ul>
              <p>
                I focus on getting the foundations right — because well-designed infrastructure enables teams to move faster without breaking things.
              </p>
              <p>
                Currently, I&apos;m deepening my expertise in <span className="text-accent font-medium">Terraform, Kubernetes, and advanced CI/CD</span>, with the goal of building fully automated, production-ready platforms.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Terminal info + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Terminal window — glass card */}
            <div className="rounded-2xl overflow-hidden glass-card shadow-xl">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/20">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">somil.json</span>
              </div>
              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="text-muted-foreground/60">{"{"}</div>
                {facts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3 pl-4"
                  >
                    <fact.icon size={14} className="text-primary/60 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-accent/70">&quot;{fact.label}&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-foreground/90">&quot;{fact.value}&quot;</span>
                      {i < facts.length - 1 && <span className="text-muted-foreground">,</span>}
                    </div>
                  </motion.div>
                ))}
                <div className="text-muted-foreground/60">{"}"}</div>
              </div>
            </div>

            {/* Mini Career Timeline — glass card */}
            <div className="rounded-2xl glass-card shadow-xl p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
                <Zap size={16} className="text-emerald-500" />
                Career Velocity
              </h3>
              
              <div className="relative pl-4 border-l-2 border-border/40 space-y-7 py-2">
                {/* Full-Time */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.6)] ring-4 ring-[#040814]" />
                  <span className="text-[12px] font-mono font-semibold text-emerald-400 tracking-widest uppercase">Full-Time</span>
                  <p className="text-sm text-foreground/90 font-medium mt-1">Cloud Engineer</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Aug 2025 – Present</p>
                </div>

                {/* Trainee */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary/60 ring-4 ring-[#040814]" />
                  <span className="text-[12px] font-mono font-semibold text-primary/80 tracking-widest uppercase">Trainee</span>
                  <p className="text-sm text-foreground/90 font-medium mt-1">Junior Associate</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Jul 2024 – Aug 2025</p>
                </div>

                {/* Intern */}
                <div className="relative">
                  <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-muted-foreground/50 ring-4 ring-[#040814]" />
                  <span className="text-[12px] font-mono font-semibold text-muted-foreground tracking-widest uppercase">Intern</span>
                  <p className="text-sm text-foreground/90 font-medium mt-1">Cloud Infra & Security</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Apr 2024 – Jun 2024</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
