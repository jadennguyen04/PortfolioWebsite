"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magicCard"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"
import gle from "@/components/img/gameloaded.jpg"
import sus from "@/components/img/sus.png"
import CN from "@/components/img/CN.png"
import QUT from "@/components/img/qut.jpg"
import reme from "@/components/img/reme.png"
import aichi from "@/components/img/aichi.png"

interface Experience {
  logo: StaticImageData | string
  company: string
  role: string
  period: string
  description: string[]
  companyUrl?: string
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
      "Built a Discord bot using JavaScript, Node.js and discord.js API for automated announcements and moderation.",
      "Created YouTube content, generating 200K+ views and increased user engagement and player growth.",
    ],
    companyUrl: "https://www.gameloaded.net/",
    /*
    projectLink: {
      name: "Test",
      url: "#",
    },
    */
  },
  {
    logo: reme,
    company: "REME Tools",
    role: "Security Enginner",
    period: "Feb 2024 - Nov 2024",
    description: ["Conducted penetration testing, identifying potential vulnerabilities and implementing solutions.",
      "Assisted AI model training by storing data in Excel and automating training with Bash scripts."
    ],
    companyUrl: "https://remetools.org/",
  },
  {
    logo: CN,
    company: "Code Network",
    role: "Event Officer",
    period: "Oct 2024 - Ongoing",
    description: ["Improved website UI/UX design for the website by using HTML, CSS and Astro.",
      "Optimised weekly club events, ensuring real-time issue resolution for 80+ attendees."
    ],
    companyUrl: "https://www.codenetwork.co/",
  },
  {
    logo: sus,
    company: "StartupStarter",
    role: "Co-Founder",
    period: "Dec 2024 - April 2025",
    description: ["Collaborated in a team of four to develop a full-stack platform using OpenAI API to evaluate startup ideas and generate actionable plans.", "Built APIs and designed secure systems to deliver real-time and user-friendly AI insights."

    ],
    companyUrl: "#",
  },
  {
    logo: aichi,
    company: "Aichi AI",
    role: "Co-Founder",
    period: "April 2025 - September 2025",
    description: ["Collaborated in a team of three to develop a desktop AI chatbot with on-screen context awareness and Google Calendar integration.", "Attended UQ Ventures Validate program."

    ],
    companyUrl: "#",
  },
  
  

]

const educationExperience: Experience[] = [
  {
    logo: QUT,
    company: "Queensland University of Technology (QUT)",
    role: "Bachelor of Information Technology (Computer Science)",
    period: "Graduated: August 2025",
    description: ["QUT Executive Deans' Commendation for Academic Excellence awarded in Semester 2, 2024.","QUT Executive Deans' Commendation for Academic Excellence awarded in Semester 1, 2025."],
    companyUrl: "https://www.qut.edu.au/",
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
        <MagicCard className="card-no-hover rounded-xl bg-card">
          <div className="space-y-8 p-6">
            {(activeTab === "work" ? workExperience : educationExperience).map((exp, index) => (
              <div key={index} className="flex gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Link href={exp.companyUrl || "#"} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-cover"
                      />
                  </Link>
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
                  <ul className="list-disc list-inside space-y-1 text-s text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          </MagicCard>
        </div>
      </div>
    </AnimatedSection>
  )
}

