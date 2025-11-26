'use client'

import { motion } from 'framer-motion'
import { GlowCard, Magnetic, TiltCard, Marquee, Tag } from '@/components/reactbits'

const tagContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const tagItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function SkillsShowcase({
  techIcons = [],
  coreCompetencies = [],
  expertiseAreas = [],
}) {
  return (
    <section id="skills" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-10">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan/70">
            Skills & Expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GlowCard className="p-6 md:p-8 bg-black/40 border-neon-cyan/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan/60 mb-2">
                    Tools & Technologies
                  </p>
                  </div>
              </div>

              <Marquee speed={48} className="py-4">
                {techIcons.map(({ node, title, href }, index) => (
                  <Magnetic key={`${title}-${index}`} className="px-4">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      title={title}
                      className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-neon-cyan/30 bg-black/60 text-neon-cyan transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,255,255,0.45)] hover:text-white"
                      aria-label={title}
                    >
                      <span className="text-3xl">{node}</span>
                      <span className="pointer-events-none absolute -bottom-10 whitespace-nowrap rounded-full border border-neon-cyan/40 bg-black/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neon-cyan opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {title}
                      </span>
                    </a>
                  </Magnetic>
                ))}
              </Marquee>
            </GlowCard>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GlowCard className="p-6 md:p-8 bg-black/40 border-neon-cyan/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan/60 mb-2">
                    Core Competencies
                  </p>
                  
                </div>
                
              </div>
              <motion.div
                variants={tagContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {coreCompetencies.map((skill) => (
                  <motion.div key={skill} variants={tagItem}>
                    <Tag className="w-full text-center">{skill}</Tag>
                  </motion.div>
                ))}
              </motion.div>
            </GlowCard>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TiltCard className="p-6 md:p-8 bg-black/30 border-neon-blue/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan/60 mb-2">
                    Areas of Expertise
                  </p>
                  
                </div>
               
              </div>
              <motion.div
                variants={tagContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {expertiseAreas.map((area) => (
                  <motion.div key={area} variants={tagItem}>
                    <div className="group relative rounded-2xl border border-neon-blue/20 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-100 shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:border-neon-cyan/70 hover:text-white hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]">
                      <span className="relative z-10">{area}</span>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

