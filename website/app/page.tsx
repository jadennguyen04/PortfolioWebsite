"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollLine } from "@/components/scroll-line"
import { useEffect } from "react"
//import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  // Add a scroll-to-top button or functionality if needed
  useEffect(() => {
    // Preload animations when the page loads
    const preloadAnimations = () => {
      const sections = document.querySelectorAll(".section-content")
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
          setTimeout(() => {
            section.classList.add("animate")
          }, 300)
        }
      })
    }

    preloadAnimations()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollLine />
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

