"use client"

import { motion } from "framer-motion"
import { Monitor, Download, ArrowDown } from "lucide-react"
import { Button } from "../ui/button"
import ScrollReveal from "../atoms/ScrollReveal"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24 bg-gradient-to-br from-offWhite via-offWhite to-taupe/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 sm:px-4 py-2 bg-taupe/10 text-taupe rounded-full text-xs sm:text-sm font-medium">
                  👋 Hola, soy
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight">
                  Nicolas
                  <span className="block text-transparent bg-gradient-to-r from-navy to-brown bg-clip-text">
                    Iglesias
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-navy font-semibold">Full Stack Developer</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Creo experiencias digitales excepcionales que combinan diseño elegante con código robusto.
                  Especializado en aplicaciones web modernas y escalables.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-brown hover:bg-taupe text-offWhite px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Proyectos
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-offWhite px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Descargar CV
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-6 pt-4"
              >
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span>Disponible para proyectos</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative hidden lg:block xl:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Fondo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-taupe/20 to-brown/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-navy/20 rounded-3xl transform -rotate-6" />

                {/* Contenedor principal */}
                <div className="relative bg-offWhite/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-taupe/10">
                  <div className="text-center space-y-6 lg:space-y-8">
                    {/* SVG profesional */}
                    <motion.div
                      animate={{
                        rotateY: [0, 10, 0, -10, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="mx-auto"
                    >
                      <div className="relative">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-navy to-brown rounded-2xl flex items-center justify-center shadow-lg">
                          <Monitor className="w-12 h-12 lg:w-16 lg:h-16 text-offWhite" />
                        </div>
                        {/* Elementos decorativos */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-taupe rounded-full" />
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 lg:w-4 lg:h-4 bg-navy rounded-full" />
                      </div>
                    </motion.div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 text-center">
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-black">3+</div>
                        <div className="text-xs lg:text-sm text-gray-600">Años de experiencia</div>
                      </div>
                      <div>
                        <div className="text-xl lg:text-2xl font-bold text-black">50+</div>
                        <div className="text-xs lg:text-sm text-gray-600">Proyectos completados</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elementos flotantes */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 w-6 h-6 lg:w-8 lg:h-8 bg-taupe/30 rounded-lg"
                />
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute bottom-10 -right-6 w-4 h-4 lg:w-6 lg:h-6 bg-navy/40 rounded-full"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
