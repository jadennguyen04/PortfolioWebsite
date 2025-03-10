import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Mail, Linkedin, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { MagicCard } from "@/components/ui/magicCard"

export function ContactSection() {
  return (
    <AnimatedSection id="contact">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="section-content">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="section-header">
              <MessageSquare className="h-6 w-6 text-primary" />
              Contact
            </h2>
            <p className="text-muted-foreground mt-1">
              Feel free to reach out! Whether it&apos;s a question, idea or just to say hello, I love to connect and explore how we can collaborate!
            </p>
          </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <MagicCard className="card-shadow rounded-xl bg-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:jnguy111@gmail.com" className="hover:underline">
                      jnguy111@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/jadennguyen04/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/jadennguyen04
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/jadennguyen04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/jadennguyen04
                    </a>
                  </div>
                </CardContent>
                </MagicCard>
              
            </div>
          </div>
        </div>
        
    </AnimatedSection>
  )
}

