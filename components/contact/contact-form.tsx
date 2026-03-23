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
      <div className="flex flex-col items-center justify-center rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
          <Check className="h-6 w-6 text-primary" />
        </div>
        <p className="text-lg font-medium text-foreground">Thanks — I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="bg-card border-border focus:border-primary"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-card border-border focus:border-primary"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className="bg-card border-border focus:border-primary"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            className="bg-card border-border focus:border-primary resize-none"
          />
        </Field>
      </FieldGroup>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
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
