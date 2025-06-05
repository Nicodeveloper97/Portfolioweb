"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, Palette, Zap } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: Code, text: "Inicializando código...", color: "text-navy" },
    { icon: Palette, text: "Cargando diseños...", color: "text-brown" },
    { icon: Zap, text: "Optimizando experiencia...", color: "text-taupe" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 40) setCurrentStep(0)
    else if (progress < 80) setCurrentStep(1)
    else setCurrentStep(2)
  }, [progress])

  // Generar partículas flotantes - menos en móvil
  const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 20
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-br from-black via-navy to-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Partículas de fondo */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-taupe/20 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ondas de fondo - menos en móvil */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-taupe/10 rounded-full"
            style={{
              width: "200%",
              height: "200%",
              left: "-50%",
              top: "-50%",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-sm sm:max-w-md mx-auto px-4 sm:px-6">
        {/* Logo/Icono central animado */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24">
            {/* Anillo exterior */}
            <motion.div
              className="absolute inset-0 border-3 sm:border-4 border-taupe/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Anillo medio */}
            <motion.div
              className="absolute inset-1 sm:inset-2 border-2 border-brown/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Centro */}
            <motion.div
              className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-taupe to-brown rounded-full flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(169, 146, 125, 0.3)",
                  "0 0 40px rgba(169, 146, 125, 0.6)",
                  "0 0 20px rgba(169, 146, 125, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-offWhite font-bold text-base sm:text-lg">NI</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Nombre animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-offWhite mb-2">Nicolas Iglesias</h1>
          <p className="text-taupe text-base sm:text-lg">Full Stack Developer</p>
        </motion.div>

        {/* Paso actual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-6 sm:mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 sm:gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {React.createElement(steps[currentStep].icon, {
                  className: `w-4 h-4 sm:w-5 sm:h-5 ${steps[currentStep].color}`,
                })}
              </motion.div>
              <span className="text-offWhite/80 text-xs sm:text-sm">{steps[currentStep].text}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Barra de progreso */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-4 sm:mb-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-offWhite/60 text-xs sm:text-sm">Cargando</span>
            <span className="text-offWhite/60 text-xs sm:text-sm">{progress}%</span>
          </div>

          <div className="w-full h-1.5 sm:h-2 bg-navy/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-taupe via-brown to-taupe rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Elementos decorativos flotantes - solo en desktop */}
        <div className="hidden sm:block">
          <div className="absolute -top-10 -left-10">
            <motion.div
              className="w-16 h-16 lg:w-20 lg:h-20 border border-taupe/20 rounded-lg"
              animate={{
                rotate: [0, 45, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="absolute -bottom-10 -right-10">
            <motion.div
              className="w-12 h-12 lg:w-16 lg:h-16 bg-brown/20 rounded-full"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="absolute top-1/2 -right-16">
            <motion.div
              className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-taupe/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>

      {/* Efecto de grid de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(169, 146, 125, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(169, 146, 125, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>
    </motion.div>
  )
}
