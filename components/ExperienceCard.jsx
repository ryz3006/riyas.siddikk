'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
      }}
      className="relative bg-gray-900/50 border border-neon-cyan/20 rounded-lg p-4 sm:p-6 mb-6 hover:border-neon-cyan/50 hover:glow transition-all duration-300 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-cyan/30 group-hover:bg-neon-cyan transition-colors" />
      
      <div className="pl-4 sm:pl-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-neon-cyan mb-2 md:mb-0 break-words">
            {experience.title}
          </h3>
          <div className="flex items-center text-gray-400 text-xs sm:text-sm flex-shrink-0">
            <Calendar size={14} className="sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
            <span className="whitespace-nowrap">{experience.period}</span>
          </div>
        </div>
        
        <div className="flex items-center text-neon-blue mb-4">
          <MapPin size={14} className="sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
          <span className="font-semibold text-sm sm:text-base break-words">{experience.company}</span>
        </div>
        
        <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
          {experience.responsibilities.map((resp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-start"
            >
              <span className="text-neon-cyan mr-2 mt-1 flex-shrink-0">▹</span>
              <span className="break-words">{resp}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

