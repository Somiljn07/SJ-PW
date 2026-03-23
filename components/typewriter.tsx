"use client"

import { useState, useEffect } from "react"

const phrases = [
  "AWS Infrastructure",
  "Cloud Networking",
  "Platform Engineering",
  "DevOps & Automation"
]

export function Typewriter() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex])

  return (
    <span className="font-mono text-accent">
      {currentText}
      <span className="typewriter-cursor" />
    </span>
  )
}
