"use client"

import { useEffect, useState } from "react"

export function ScrollLine() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalHeight) * 100

      // Determine scroll direction
      setIsScrollingUp(scrollPosition < lastScrollY)
      setLastScrollY(scrollPosition)

      // Update progress
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className="scroll-line-container">
      <div
        className={`scroll-line ${isScrollingUp ? "scrolling-up" : "scrolling-down"}`}
        style={{ height: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </div>
  )
}

