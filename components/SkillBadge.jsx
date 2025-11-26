'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SkillBadge({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? [
                '0 0 20px rgba(0, 255, 255, 0.5)',
                '0 0 40px rgba(0, 255, 255, 0.8)',
                '0 0 20px rgba(0, 255, 255, 0.5)',
              ]
            : '0 0 10px rgba(0, 255, 255, 0.2)',
        }}
        transition={{ duration: 0.3 }}
        className="px-4 py-2 bg-gray-900/50 border border-neon-cyan/30 rounded-full cursor-pointer hover:bg-gray-800/50 transition-colors"
      >
        <span className="text-gray-200 text-sm font-medium">{skill}</span>
      </motion.div>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neon-cyan text-black px-2 py-1 rounded text-xs font-semibold whitespace-nowrap"
        >
          {skill}
        </motion.div>
      )}
    </motion.div>
  )
}

