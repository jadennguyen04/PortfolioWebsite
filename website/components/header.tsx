"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, Code, Briefcase, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // Handle dark mode
  useEffect(() => {
    setMounted(true)
    const isDark =
      localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Handle scroll events for header styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update header background opacity based on scroll position
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = [ "projects", "experience", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the top of the section is near the top of the viewport, set it as active
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }

      // If we're at the top of the page, set home as active
      if (window.scrollY < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))

    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) return null

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/50",
      )}
    >
      <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl group">
          <span className="text-primary group-hover:text-primary/80 transition-colors">Jaden </span>
          <span className="group-hover:text-primary/80 transition-colors">Nguyen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
        <NavLink href="#experience" isActive={activeSection === "experience"}>
            Experience
          </NavLink>
          <NavLink href="#projects" isActive={activeSection === "projects"}>
            Projects
          </NavLink>
          <NavLink href="#contact" isActive={activeSection === "contact"}>
            Contact
          </NavLink>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-2 transition-transform hover:scale-110"
          >
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="transition-transform hover:scale-110"
          >
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menu" className="transition-transform hover:scale-110">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
              <MobileNavLink
                  href="#experience"
                  icon={<Briefcase className="h-5 w-5" />}
                  isActive={activeSection === "experience"}
                >
                  Experience
                </MobileNavLink>
                <MobileNavLink
                  href="#projects"
                  icon={<Code className="h-5 w-5" />}
                  isActive={activeSection === "projects"}
                >
                  Projects
                </MobileNavLink>
                <MobileNavLink
                  href="#contact"
                  icon={<MessageSquare className="h-5 w-5" />}
                  isActive={activeSection === "contact"}
                >
                  Contact
                </MobileNavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive: boolean
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium relative transition-colors duration-300 hover:text-primary",
        isActive ? "text-primary" : "text-foreground",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
          isActive ? "w-full" : "w-0",
        )}
      />
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  icon: React.ReactNode
}

function MobileNavLink({ href, children, icon, isActive }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-lg font-medium transition-all duration-300 py-2 pl-2 border-l-2",
        isActive
          ? "text-primary border-primary"
          : "text-foreground border-transparent hover:text-primary hover:border-primary/50",
      )}
    >
      {icon}
      {children}
    </Link>
  )
}

