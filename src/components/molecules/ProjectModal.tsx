"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, Users } from "lucide-react"
import { Button } from "../ui/button"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  duration: string
  team: string
  features: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 bg-offWhite rounded-2xl z-50 overflow-hidden border border-taupe/10 shadow-2xl"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-taupe/10">
                <h2 className="text-xl sm:text-2xl font-bold text-navy pr-4">{project.title}</h2>
                <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full flex-shrink-0">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="order-2 lg:order-1">
                    <div className="h-48 sm:h-64 bg-gradient-to-br from-navy to-brown rounded-xl mb-6" />

                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        {project.liveUrl && (
                          <Button
                            className="bg-brown hover:bg-taupe text-offWhite w-full sm:w-auto"
                            onClick={() => window.open(project.liveUrl, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 order-1 lg:order-2">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-navy">Descripción</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-navy">Características Principales</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-brown rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-navy">Tecnologías Utilizadas</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-taupe/10 text-brown rounded-full text-xs sm:text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
