"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"
import ScrollReveal from "../atoms/ScrollReveal"

export default function Contact() {
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
      // En PC, abrir Gmail web directamente
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nicoiglesiasdeveloper@gmail.com&su=Contacto desde Portfolio&body=Hola Nicolas, me gustaría contactarte sobre...`
      window.open(gmailUrl, "_blank")
    }
  }

  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      value: "nicoiglesiasdeveloper@gmail.com",
      onClick: handleEmailClick,
      color: "text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      value: "@Nicodeveloper97",
      href: "https://github.com/Nicodeveloper97",
      color: "text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "Nicolas Iglesias",
      href: "https://www.linkedin.com/in/nicolasiglesias97/",
      color: "text-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">Trabajemos Juntos</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">Conectemos</h3>
                <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
                  Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {contactMethods.map((method, index) => {
                  if (method.name === "Email") {
                    return (
                      <motion.button
                        key={method.name}
                        onClick={method.onClick}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-4 p-4 sm:p-6 rounded-xl bg-offWhite border border-taupe/10 hover:border-brown/30 hover:shadow-lg transition-all group cursor-pointer"
                      >
                        <div
                          className={`p-3 sm:p-4 rounded-full bg-taupe/10 group-hover:bg-taupe/20 transition-colors`}
                        >
                          <method.icon
                            className={`w-6 h-6 sm:w-8 sm:h-8 ${method.color} group-hover:text-brown transition-colors`}
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-navy text-sm sm:text-base">{method.name}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm break-all">{method.value}</p>
                        </div>
                      </motion.button>
                    )
                  }

                  return (
                    <motion.a
                      key={method.name}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center gap-4 p-4 sm:p-6 rounded-xl bg-offWhite border border-taupe/10 hover:border-brown/30 hover:shadow-lg transition-all group"
                    >
                      <div className={`p-3 sm:p-4 rounded-full bg-taupe/10 group-hover:bg-taupe/20 transition-colors`}>
                        <method.icon
                          className={`w-6 h-6 sm:w-8 sm:h-8 ${method.color} group-hover:text-brown transition-colors`}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-navy text-sm sm:text-base">{method.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm break-all">{method.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
