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
  role?: string
  challenge?: string
  solution?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Megatlon",
    description: "Plataforma web para la cadena líder de gimnasios en Argentina",
    longDescription:
      "Desarrollo completo del sitio web para Megatlon, la cadena de gimnasios premium más grande de Argentina. El proyecto incluyó un sistema de gestión de membresías, integración con pasarela de pagos, y un panel administrativo para gestionar sedes, clases y promociones.",
    image: "/images/megatlon.avif",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "AWS"],
    liveUrl: "https://megatlon.com/",
    duration: "4 meses",
    team: "Equipo de 3 desarrolladores",
    role: "Desarrollador Full Stack",
    challenge:
      "Crear una plataforma que pudiera manejar miles de usuarios simultáneos, integrando sistemas de pago y reservas en tiempo real para más de 30 sedes.",
    solution:
      "Implementé una arquitectura escalable con React para el frontend y Node.js para el backend, utilizando MongoDB para gestionar grandes volúmenes de datos de usuarios y clases. La integración con AWS permitió un rendimiento óptimo incluso en horas pico.",
    features: [
      "Sistema de reserva de clases en tiempo real",
      "Pasarela de pagos para membresías",
      "Panel de administración para gestión de sedes",
      "Integración con app móvil para usuarios",
      "Sistema de notificaciones automáticas",
      "Analíticas de uso y asistencia",
    ],
  },
  {
    id: 2,
    title: "Nuba Travel",
    description: "Plataforma de experiencias de viaje de lujo con diseño premium",
    longDescription:
      "Diseño y desarrollo de la plataforma digital para Nuba, agencia especializada en viajes de lujo y experiencias exclusivas. El proyecto requirió un enfoque centrado en la estética visual y la experiencia de usuario para transmitir la exclusividad de la marca.",
    image: "/images/nuba.avif",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS", "Framer Motion", "Vercel"],
    liveUrl: "https://nuba.com/",
    duration: "3 meses",
    team: "Equipo de 2 desarrolladores y 1 diseñador UI/UX",
    role: "Desarrollador Frontend y UI",
    challenge:
      "Crear una experiencia digital que transmitiera la elegancia y exclusividad de la marca, manteniendo tiempos de carga rápidos a pesar del contenido visual de alta calidad.",
    solution:
      "Implementé Next.js con optimización de imágenes y animaciones sutiles con Framer Motion para crear una experiencia inmersiva sin comprometer el rendimiento. El diseño minimalista y las transiciones elegantes reflejan la identidad premium de la marca.",
    features: [
      "Diseño minimalista y elegante",
      "Animaciones y transiciones fluidas",
      "Catálogo de destinos con filtros avanzados",
      "Sistema de reservas para experiencias exclusivas",
      "Sección especializada para lunas de miel",
      "Plataforma multiidioma",
    ],
  },
  {
    id: 3,
    title: "Sparta Gym Madryn",
    description: "Proyecto en construcción: Sistema de gestión para gimnasio local",
    longDescription:
      "Proyecto en desarrollo para Sparta Gym, un gimnasio local en Puerto Madryn. Actualmente en fase de construcción, este sistema permitirá la gestión completa de miembros, rutinas personalizadas y clases grupales a través de una interfaz intuitiva y moderna.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Firebase", "Tailwind CSS", "Netlify", "Stripe", "PWA"],
    githubUrl: "https://github.com/Nicodeveloper97",
    liveUrl: "https://gymspartaweb.netlify.app/",
    duration: "En desarrollo",
    team: "Desarrollo individual",
    role: "Desarrollador Full Stack",
    challenge:
      "Crear una solución completa y económica para un gimnasio local que necesita presencia digital y herramientas para gestionar sus miembros sin grandes inversiones en infraestructura.",
    solution:
      "Estoy desarrollando una Progressive Web App con React y Firebase, que permitirá funcionalidades avanzadas con costos mínimos de hosting. La implementación de Stripe para pagos recurrentes automatizará la gestión de membresías.",
    features: [
      "Sistema de gestión de rutinas para usuarios (en desarrollo)",
      "Panel de administración para entrenadores (próximamente)",
      "Seguimiento de progreso para miembros",
      "Calendario de clases interactivo",
      "Sistema de pagos y membresías",
      "Funcionalidad offline como PWA",
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
