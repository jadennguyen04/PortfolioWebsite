import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  return (
    <AnimatedSection>
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="section-content grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-4">
            {/* Status Badge */}
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary text-primary-foreground">
              Available for new opportunities
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Hi! I'm Jaden👋
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-[600px]">
            Software developer from Auatralia. 
            <br></br><br></br>
            I like to develop full-stack applications and I am passionate about learning new technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#" className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Resume
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mx-auto lg:mx-0 order-first lg:order-last">
            <div className="relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Developer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

