import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    title: "Portfolio Website",
    description: "Responsive developer portfolio with dark mode and optimised performance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Typescript", "Tailwind CSS", "Next.js"],
    demoLink: "#",
    codeLink: "https://github.com/jadennguyen04/PortfolioWebsite",
    showCodeButton: true,
    showDemoButton: true,
    showImage: false,
  },
  {
    title: "Startup Search Tool",
    description: "Developed an interactive map displaying company and startup information.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "AWS", "MongoDB"],
    demoLink: "#",
    codeLink: "https://github.com/jadennguyen04",
    showCodeButton: false,
    showDemoButton: false,
    showImage: false,
  },
  {
    title: "AI Sentiment Analysis",
    description: "Created an machine learning system to sentiment analysis for interviewer dialogue.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "PHP", "PyTorch"],
    demoLink: "#",
    codeLink: "https://github.com/jadennguyen04",
    showCodeButton: false,
    showDemoButton: false,
    showImage: false,
  },
]

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="bg-muted/30">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="section-content">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="section-header">
              <Code className="h-6 w-6 text-primary" />
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-1">Recent work that showcases my expertise</p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="#" className="flex items-center gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

