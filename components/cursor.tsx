"use client"

import { useEffect, useRef, useState } from "react"

// ============================================================
// Custom Cursor — components/cursor.tsx
// ============================================================
// Renders two elements:
//   1. A small "dot" that sits exactly on the pointer position
//   2. A slightly larger "ring" that follows with a smooth lag
// Both fade in/out based on whether the cursor is on the page.
// On hover over links/buttons the ring expands slightly.
// ============================================================

export function Cursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const posRef   = useRef({ x: -100, y: -100 })
  const ringPos  = useRef({ x: -100, y: -100 })
  const rafRef   = useRef<number>(0)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      // Update dot immediately (no lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // Detect hovering over interactive elements → ring expands
    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true)
      }
    }
    const onHoverEnd = () => setHovering(false)

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseover", onHoverStart)
    document.addEventListener("mouseout", onHoverEnd)

    // Smooth ring follow — lerp towards dot position each frame
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12)

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseover", onHoverStart)
      document.removeEventListener("mouseout", onHoverEnd)
      cancelAnimationFrame(rafRef.current)
    }
  }, [visible])

  return (
    <>
      {/* 1. Dot — sits right on the pointer */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: "50%",
          backgroundColor: "#c9a96e",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* 2. Ring — lags behind with lerp */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          marginLeft: hovering ? -22 : -16,
          marginTop: hovering ? -22 : -16,
          borderRadius: "50%",
          border: "1px solid rgba(201, 169, 110, 0.5)",
          opacity: visible ? 1 : 0,
          transition: "width 0.25s ease, height 0.25s ease, margin 0.25s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  )
}
