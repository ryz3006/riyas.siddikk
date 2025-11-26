'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LetterGlitch from './LetterGlitch'

export default function CurtainLanding({ onEnter }) {
  const [text, setText] = useState('')
  const [showSubtext, setShowSubtext] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const fullText = "Hi, I'm Riyas."
  const subtext = "Driving resilient operations across high-availability and telecom systems."

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 0
    let subtextTimeout = null
    let buttonTimeout = null
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        subtextTimeout = setTimeout(() => setShowSubtext(true), 500)
        buttonTimeout = setTimeout(() => setShowButton(true), 1500)
      }
    }, 100)

    return () => {
      clearInterval(typeInterval)
      if (subtextTimeout) clearTimeout(subtextTimeout)
      if (buttonTimeout) clearTimeout(buttonTimeout)
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        style={{ cursor: 'default' }}
      >
        {/* LetterGlitch Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <LetterGlitch
            glitchColors={['#00ffff', '#0066ff', '#00cccc', '#0052cc']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {/* Main Text with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-2"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <AnimatePresence>
            {showSubtext && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                {subtext}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Enter Button */}
          <AnimatePresence>
            {showButton && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 255, 0.5)',
                    '0 0 40px rgba(0, 255, 255, 0.8)',
                    '0 0 20px rgba(0, 255, 255, 0.5)',
                  ],
                }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnter}
                className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold text-lg rounded-lg hover:bg-neon-cyan/10 transition-colors relative overflow-hidden"
              >
                <span className="relative z-10">Enter Profile</span>
                <motion.div
                  className="absolute inset-0 bg-neon-cyan/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

