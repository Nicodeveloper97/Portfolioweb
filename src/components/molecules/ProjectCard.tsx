"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-offWhite rounded-xl shadow-md border border-taupe/10 overflow-hidden cursor-pointer group hover:border-brown/30 hover:shadow-xl transition-all"
      onClick={onClick}
    >
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-navy to-brown overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
          <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 sm:px-3 py-1 bg-taupe/10 text-brown text-xs sm:text-sm rounded-full">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full">
              +{technologies.length - 3} más
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {liveUrl && (
            <Button
              size="sm"
              className="bg-brown hover:bg-taupe text-offWhite text-xs sm:text-sm w-full sm:w-auto"
              onClick={(e) => {
                e.stopPropagation()
                window.open(liveUrl, "_blank")
              }}
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Ver Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
