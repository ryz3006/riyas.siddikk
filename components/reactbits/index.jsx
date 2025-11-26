'use client'

import { Children, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const baseCardClasses =
  'relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl'

const gridOverlayStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
}

export function GlowCard({ children, className = '', glowColor = 'rgba(0,255,255,0.4)', ...props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: `0 0 32px ${glowColor}` }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`${baseCardClasses} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={gridOverlayStyle} />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

export function TiltCard({ children, className = '', intensity = 8, ...props }) {
  const ref = useRef(null)

  const handlePointerMove = (event) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -intensity
    const rotateY = ((x - rect.width / 2) / rect.width) * intensity
    ref.current.style.setProperty('--tilt-x', `${rotateX}deg`)
    ref.current.style.setProperty('--tilt-y', `${rotateY}deg`)
  }

  const resetTilt = () => {
    if (!ref.current) return
    ref.current.style.setProperty('--tilt-x', '0deg')
    ref.current.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetTilt}
      style={{
        transform: 'perspective(1200px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
      }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,255,255,0.25)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`${baseCardClasses} ${className}`}
      {...props}
    >
      <div className="relative">{children}</div>
    </motion.div>
  )
}

export function Magnetic({ children, className = '', strength = 0.25 }) {
  const innerRef = useRef(null)

  const handleMouseMove = (event) => {
    const rect = innerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = event.clientX - (rect.left + rect.width / 2)
    const y = event.clientY - (rect.top + rect.height / 2)
    innerRef.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const reset = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <div className={`inline-flex ${className}`} onMouseMove={handleMouseMove} onMouseLeave={reset}>
      <div ref={innerRef} className="transition-transform duration-150 ease-out will-change-transform">
        {children}
      </div>
    </div>
  )
}

export function Marquee({
  children,
  speed = 35,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  gap = 'gap-8',
}) {
  const [isPaused, setIsPaused] = useState(false)
  const childArray = Children.toArray(children)
  const handleEnter = () => pauseOnHover && setIsPaused(true)
  const handleLeave = () => pauseOnHover && setIsPaused(false)

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${gap}`}
        data-direction={direction}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {childArray.concat(childArray).map((child, index) => (
          <div key={index} className="flex items-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Tag({ children, className = '', glowColor = 'rgba(0,255,255,0.35)', ...props }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, boxShadow: `0 0 18px ${glowColor}` }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className={`inline-flex items-center justify-center rounded-full border border-neon-cyan/40 bg-white/5 px-4 py-2 text-sm font-semibold tracking-tight text-gray-100 backdrop-blur ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  )
}

const ReactBits = { GlowCard, TiltCard, Magnetic, Marquee, Tag }

export default ReactBits

