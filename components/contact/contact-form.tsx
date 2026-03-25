"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30"
          >
            <Check className="h-7 w-7 text-emerald-400" />
          </motion.div>
          <p className="text-lg font-semibold text-foreground">Message received!</p>
          <p className="mt-2 text-sm text-muted-foreground">I&apos;ll get back to you within a day or two.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="bg-[#0a101f]/80 border-border/60 focus:border-primary/60 focus:ring-primary/20 focus:bg-[#0f172a] shadow-sm transition-all rounded-xl h-11 text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-[#0a101f]/80 border-border/60 focus:border-primary/60 focus:ring-primary/20 focus:bg-[#0f172a] shadow-sm transition-all rounded-xl h-11 text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              className="bg-[#0a101f]/80 border-border/60 focus:border-primary/60 focus:ring-primary/20 focus:bg-[#0f172a] shadow-sm transition-all rounded-xl h-11 text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Your message..."
              className="bg-[#0a101f]/80 border-border/60 focus:border-primary/60 focus:ring-primary/20 focus:bg-[#0f172a] shadow-sm transition-all resize-none rounded-xl text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={16} />
                Send message
              </span>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
