'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Spring configurations as constants to prevent re-initialization on every render
const CURSOR_SPRING_CONFIG = { damping: 25, stiffness: 200 }
const SPOTLIGHT_SPRING_CONFIG = { damping: 20, stiffness: 150 }

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const spotlightX = useMotionValue(-100)
  const spotlightY = useMotionValue(-100)

  const cursorXSpring = useSpring(cursorX, CURSOR_SPRING_CONFIG)
  const cursorYSpring = useSpring(cursorY, CURSOR_SPRING_CONFIG)
  const spotlightXSpring = useSpring(spotlightX, SPOTLIGHT_SPRING_CONFIG)
  const spotlightYSpring = useSpring(spotlightY, SPOTLIGHT_SPRING_CONFIG)

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
      spotlightX.set(e.clientX - 192)
      spotlightY.set(e.clientY - 192)
      setIsVisible(true)
      
      // Check if hovering over interactive elements
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        typeof target.onclick === 'function' ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsHovering(isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Spotlight Cursor - More fluid */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: spotlightXSpring,
          y: spotlightYSpring,
        }}
      >
        <div className="w-full h-full rounded-full bg-white/10 blur-3xl" />
      </motion.div>

      {/* Fluid Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className={`w-full h-full rounded-full border-2 ${
            isHovering ? 'bg-neon-cyan border-neon-cyan' : 'bg-transparent border-neon-cyan'
          } transition-all duration-200`}
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
        />
      </motion.div>
    </>
  )
}

