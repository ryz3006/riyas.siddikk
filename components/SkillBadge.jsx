'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SkillBadge({ skill, index }) {
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
      className="relative"
    >
      <motion.div
        whileHover={{
          boxShadow: [
            '0 0 20px rgba(0, 255, 255, 0.3)',
            '0 0 25px rgba(0, 255, 255, 0.5)',
            '0 0 20px rgba(0, 255, 255, 0.3)',
          ],
        }}
        transition={{ duration: 0.3 }}
        className="px-4 py-2 bg-gray-900/50 border border-neon-cyan/30 rounded-full cursor-pointer hover:bg-gray-800/50 transition-colors"
      >
        <span className="text-gray-200 text-sm font-medium">{skill}</span>
      </motion.div>
    </motion.div>
  )
}

