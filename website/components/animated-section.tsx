"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation class when section comes into view
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          } else {
            // Optional: Remove animation class when section is out of view
            // This will re-trigger the animation when scrolling back up
            entry.target.classList.remove("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before the element is in view
      },
    )

    const section = sectionRef.current
    if (section) {
      const content = section.querySelector(".section-content")
      if (content) {
        observer.observe(content)
      }
    }

    return () => {
      if (section) {
        const content = section.querySelector(".section-content")
        if (content) {
          observer.unobserve(content)
        }
      }
    }
  }, [])

  return (
    <section id={id} ref={sectionRef} className={`section ${className || ""}`}>
      {children}
    </section>
  )
}

