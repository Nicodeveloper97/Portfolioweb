import ScrollReveal from "../atoms/ScrollReveal"
import TechCard from "../molecules/TechCard"

const technologies = [
  { name: "TypeScript", icon: "TS", category: "Language" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Vite", icon: "⚡", category: "Build Tool" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Express", icon: "🚀", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Git", icon: "📚", category: "Version Control" },
  { name: "Tailwind", icon: "💨", category: "CSS" },
  { name: "GraphQL", icon: "📊", category: "API" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-12 sm:py-16 lg:py-20 bg-offWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Stack Tecnológico</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Las herramientas y tecnologías que domino para crear experiencias digitales excepcionales.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Siempre aprendiendo nuevas tecnologías y manteniéndome actualizado con las últimas tendencias del
              desarrollo web.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <span className="px-3 sm:px-4 py-2 bg-taupe/10 text-brown rounded-full text-xs sm:text-sm">
                Aprendiendo: AWS
              </span>
              <span className="px-3 sm:px-4 py-2 bg-brown/10 text-brown rounded-full text-xs sm:text-sm">
                Explorando: Web3
              </span>
              <span className="px-3 sm:px-4 py-2 bg-navy/10 text-navy rounded-full text-xs sm:text-sm">
                Mejorando: DevOps
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
