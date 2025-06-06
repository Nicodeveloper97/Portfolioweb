"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (isMobile) {
      const mailtoLink =
        "mailto:nicoiglesiasdeveloper@gmail.com?subject=Contacto desde Portfolio&body=Hola Nicolas, me gustaría contactarte sobre..."
      window.location.href = mailtoLink
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nicoiglesiasdeveloper@gmail.com&su=Contacto desde Portfolio&body=Hola Nicolas, me gustaría contactarte sobre...`
      window.open(gmailUrl, "_blank")
    }
  }

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
              <motion.button
                onClick={handleEmailClick}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-taupe/20 transition-colors cursor-pointer"
                title={isMobile ? "Abrir email" : "Abrir Gmail Web"}
              >
                <span className="text-sm">📧</span>
              </motion.button>

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

            <div className="flex items-center justify-center md:justify-end gap-2 text-white/60 text-xs sm:text-sm">
              <span>🎯 Enfocado en experiencias que impactan.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
