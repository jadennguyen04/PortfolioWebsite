import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  codeLink: string
}

export function ProjectCard({ title, description, image, tags, demoLink, codeLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full card-shadow group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-medium">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between gap-4 pt-2 mt-auto">
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link href={codeLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </Link>
        </Button>
        <Button size="sm" asChild className="w-full">
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

