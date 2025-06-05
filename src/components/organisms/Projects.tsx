"use client"

import { useState } from "react"
import { Github } from "lucide-react"
import { Button } from "../ui/button"
import ScrollReveal from "../atoms/ScrollReveal"
import ProjectCard from "../molecules/ProjectCard"
import ProjectModal from "../molecules/ProjectModal"

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

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con panel de administración",
    longDescription:
      "Una plataforma de e-commerce moderna y escalable desarrollada con React y Node.js. Incluye gestión de productos, carrito de compras, procesamiento de pagos con Stripe, panel de administración completo y sistema de autenticación robusto.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/Nicodeveloper97",
    liveUrl: "https://ecommerce-demo.com",
    duration: "3 meses",
    team: "Solo",
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras persistente",
      "Integración con Stripe para pagos",
      "Panel de administración completo",
      "Sistema de autenticación JWT",
      "Responsive design",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real",
    longDescription:
      "Una aplicación de gestión de proyectos y tareas que permite la colaboración en tiempo real entre equipos. Desarrollada con React y Socket.io para actualizaciones en vivo, incluye tableros Kanban, asignación de tareas y notificaciones push.",
    image: "/placeholder.svg",
    technologies: ["React", "Socket.io", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/Nicodeveloper97",
    liveUrl: "https://taskapp-demo.com",
    duration: "2 meses",
    team: "2 desarrolladores",
    features: [
      "Tableros Kanban interactivos",
      "Colaboración en tiempo real",
      "Asignación y seguimiento de tareas",
      "Notificaciones push",
      "Chat integrado",
      "Reportes de productividad",
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico con visualización de datos y predicciones",
    longDescription:
      "Un dashboard completo para visualización de datos meteorológicos con gráficos interactivos, mapas y predicciones. Integra múltiples APIs meteorológicas y presenta la información de manera clara y atractiva.",
    image: "/placeholder.svg",
    technologies: ["React", "D3.js", "OpenWeather API", "Chart.js", "Vite"],
    githubUrl: "https://github.com/Nicodeveloper97",
    liveUrl: "https://weather-dashboard-demo.com",
    duration: "1 mes",
    team: "Solo",
    features: [
      "Visualización de datos en tiempo real",
      "Gráficos interactivos con D3.js",
      "Mapas meteorológicos",
      "Predicciones a 7 días",
      "Alertas meteorológicas",
      "Geolocalización automática",
    ],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Proyectos Destacados</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes, donde combino creatividad y tecnología para crear soluciones
              digitales impactantes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.2}>
              <ProjectCard {...project} onClick={() => handleProjectClick(project)} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-offWhite to-taupe/5 rounded-2xl p-6 sm:p-8 border border-taupe/10">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">¿Quieres ver más?</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Estos son solo algunos de mis proyectos. Puedes encontrar más trabajos y contribuciones en mi GitHub.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brown text-brown hover:bg-brown hover:text-offWhite w-full sm:w-auto"
                onClick={() => window.open("https://github.com/Nicodeveloper97", "_blank")}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Ver mi GitHub
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  )
}
