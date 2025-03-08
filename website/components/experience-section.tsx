"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import gle from "@/components/img/gameloaded.jpg"
import sus from "@/components/img/sus.png"
import CN from "@/components/img/CN.png"

interface Experience {
  logo: string
  company: string
  role: string
  period: string
  description: string[]
  projectLink?: {
    name: string
    url: string
  }
}

const workExperience: Experience[] = [
  {
    logo: gle,
    company: "Gameloaded Entertainment",
    role: "Community Manager",
    period: "Jan 2023 - Ongoing",
    description: [
      "Developed a Discord bot for automated announcements, moderation, and user engagement tracking by using Python, Discord API and Firebase.",
      "Achieved 300% growth in game traffic by producing engaging YouTube videos, achieving 200K+ views and driving revenue growth.",
    ],
  },
  {
    logo: sus,
    company: "StartupStarter (SUS)",
    role: "Co-Founder",
    period: "Dec 2024 - Ongoing",
    description: [
    ],
    projectLink: {
      name: "Test",
      url: "#",
    },
  },
  {
    logo: CN,
    company: "Code Network",
    role: "Event Officer",
    period: "Oct 2024 - Ongoing",
    description: [
    ],
  },
]

const educationExperience: Experience[] = [
  {
    logo: "/placeholder.svg?height=80&width=80",
    company: "Queensland University of Technology (QUT)",
    role: "Bachelor of Information Technology (Computer Science)",
    period: "Expected Graduation: June 2025",
    description: ["Algorithms and Data Structures, Software Development, Programming Principles, Parallel Computing, IT Project Management, Networks, Cybersecurity, Discrete Structures, Database Management"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work")

  return (
    <AnimatedSection id="experience">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="section-content">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="section-header">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 rounded-lg bg-muted p-1 mb-8">
            <button
              className={cn(
                "flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                activeTab === "work" ? "bg-background shadow" : "hover:bg-background/50",
              )}
              onClick={() => setActiveTab("work")}
            >
              Work
            </button>
            <button
              className={cn(
                "flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                activeTab === "education" ? "bg-background shadow" : "hover:bg-background/50",
              )}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {(activeTab === "work" ? workExperience : educationExperience).map((exp, index) => (
              <div key={index} className="flex gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-primary font-medium">{exp.role}</p>
                    {exp.projectLink && (
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        <a href={exp.projectLink.url} target="_blank" rel="noopener noreferrer">
                          {exp.projectLink.name}
                        </a>
                      </Badge>
                    )}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

