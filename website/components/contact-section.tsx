import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Linkedin, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function ContactSection() {
  return (
    <AnimatedSection id="contact">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="section-content">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="section-header">
              <MessageSquare className="h-6 w-6 text-primary" />
              Get In Touch
            </h2>
            <p className="text-muted-foreground mt-1">
              Want to chat? Contact me with any questions or opportunities and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:hello@example.com" className="hover:underline">
                      hello@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

