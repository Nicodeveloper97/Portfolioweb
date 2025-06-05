"use client"

import { motion } from "framer-motion"

interface TechCardProps {
  name: string
  icon: string
  category: string
  index: number
}

export default function TechCard({ name, icon, category, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-white p-4 sm:p-6 rounded-xl border border-taupe/10 hover:border-brown/30 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="text-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-navy to-brown rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="text-lg sm:text-2xl text-white">{icon}</span>
        </div>
        <h3 className="font-semibold text-navy mb-1 text-sm sm:text-base">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-500">{category}</p>
      </div>
    </motion.div>
  )
}
