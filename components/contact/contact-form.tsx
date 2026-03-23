"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Check } from "lucide-react"

// TODO: Replace YOUR_FORM_ID with your Formspree form ID
// Sign up free at formspree.io, create a form, paste the ID here
// Form will send submissions directly to your email
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
        headers: {
          Accept: "application/json",
        },
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

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/5 p-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
          <Check className="h-6 w-6 text-accent" />
        </div>
        <p className="text-lg font-medium text-foreground">Thanks — I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name" className="text-sm text-muted-foreground mb-2">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="bg-card/50 border-border/60 focus:border-accent focus:bg-card transition-colors rounded-lg h-11"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email" className="text-sm text-muted-foreground mb-2">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-card/50 border-border/60 focus:border-accent focus:bg-card transition-colors rounded-lg h-11"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="subject" className="text-sm text-muted-foreground mb-2">Subject</FieldLabel>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className="bg-card/50 border-border/60 focus:border-accent focus:bg-card transition-colors rounded-lg h-11"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="message" className="text-sm text-muted-foreground mb-2">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            className="bg-card/50 border-border/60 focus:border-accent focus:bg-card transition-colors resize-none rounded-lg"
          />
        </Field>
      </FieldGroup>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-foreground text-background hover:bg-foreground/90 h-11 rounded-lg font-medium transition-colors"
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
