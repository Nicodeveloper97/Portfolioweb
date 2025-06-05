"use client"

import { motion } from "framer-motion"
import { Heart, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Nicolas Iglesias</h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Full Stack Developer apasionado por crear experiencias digitales excepcionales que combinan diseño
              elegante con código limpio.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "#hero" },
                { name: "Sobre mí", href: "#about" },
                { name: "Proyectos", href: "#projects" },
                { name: "Tecnologías", href: "#tech" },
                { name: "Contacto", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-white/80 hover:text-taupe transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Conecta Conmigo</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="mailto:nicoiglesiasdeveloper@gmail.com?subject=Contacto desde Portfolio&body=Hola Nicolas, me gustaría contactarte sobre..."
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-taupe/20 transition-colors"
              >
                <span className="text-sm">📧</span>
              </motion.a>
              <motion.a
                href="https://github.com/Nicodeveloper97"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-taupe/20 transition-colors"
              >
                <span className="text-sm">🐙</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nicolasiglesias97/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-taupe/20 transition-colors"
              >
                <span className="text-sm">💼</span>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nicolas Iglesias. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-taupe fill-current" />
              <span>y</span>
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-brown" />
              <span className="hidden sm:inline">en React + Vite + Tailwind</span>
              <span className="sm:hidden">con ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
