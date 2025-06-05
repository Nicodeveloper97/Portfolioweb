"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import ScrollReveal from "../atoms/ScrollReveal"

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      value: "nicoiglesiasdeveloper@gmail.com",
      href: "mailto:nicoiglesiasdeveloper@gmail.com",
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Trabajemos Juntos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-navy mb-4">Conectemos</h3>
                <p className="text-gray-600 mb-10">
                  Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.name}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-4 p-6 rounded-xl bg-offWhite border border-taupe/10 hover:border-brown/30 hover:shadow-lg transition-all group"
                  >
                    <div className={`p-4 rounded-full bg-taupe/10 group-hover:bg-taupe/20 transition-colors`}>
                      <method.icon className={`w-8 h-8 ${method.color} group-hover:text-brown transition-colors`} />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-navy">{method.name}</h4>
                      <p className="text-gray-600">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
