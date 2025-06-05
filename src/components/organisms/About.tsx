"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Users, Target } from "lucide-react"
import ScrollReveal from "../atoms/ScrollReveal"

export default function About() {
  const values = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Siempre busco nuevas tecnologías y enfoques para resolver problemas de manera creativa.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo efectivamente en equipo, comunicando ideas técnicas de forma clara y constructiva.",
    },
    {
      icon: Target,
      title: "Orientado a Resultados",
      description: "Me enfoco en entregar soluciones que generen valor real para usuarios y negocios.",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-offWhite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Sobre Mí</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Desarrollador apasionado por crear soluciones digitales que marquen la diferencia
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy">Mi Historia</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Comencé mi viaje en el desarrollo web hace más de 3 años, motivado por la fascinación de transformar
                  ideas en experiencias digitales tangibles. Lo que empezó como curiosidad se convirtió en una pasión
                  por crear aplicaciones que no solo funcionen bien, sino que también brinden experiencias excepcionales
                  a los usuarios.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Mi enfoque se centra en el equilibrio perfecto entre funcionalidad robusta y diseño elegante. Creo
                  firmemente que la tecnología debe ser accesible y útil para todos, por lo que siempre priorizo la
                  usabilidad y la experiencia del usuario en cada proyecto.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy">Mi Enfoque</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Cada proyecto es una oportunidad para aprender algo nuevo y superar desafíos únicos. Me mantengo
                  actualizado con las últimas tendencias tecnológicas y mejores prácticas de la industria, siempre
                  buscando formas de mejorar la calidad y eficiencia de mi trabajo.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 sm:p-6 rounded-xl border border-taupe/10 hover:border-brown/30 hover:shadow-lg transition-all"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-taupe/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2 text-sm sm:text-base">{value.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-taupe/5 to-brown/5 rounded-2xl p-6 sm:p-8 border border-taupe/10">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">¿Listo para trabajar juntos?</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-brown hover:bg-taupe text-offWhite px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Hablemos
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
