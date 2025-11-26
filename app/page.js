'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, Award, GraduationCap } from 'lucide-react'
import CurtainLanding from '@/components/CurtainLanding'
import CustomCursor from '@/components/CustomCursor'
import NavBar from '@/components/NavBar'
import ExperienceCard from '@/components/ExperienceCard'
import SkillBadge from '@/components/SkillBadge'
import LetterGlitch from '@/components/LetterGlitch'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  const profile = {
    name: 'Riyas Siddikk',
    title: 'Manager - Operations',
    email: 'contact.riyassiddikk@gmail.com',
    phone: '+91 8891 783006',
    linkedin: 'linkedin.com/in/riyassiddikk',
    summary: 'Seasoned Technical Operations Manager with 12 years of hands-on experience in the telecom BSS/OSS sector, specializing in high-availability application support, system reliability, and proactive monitoring. A hands-on leader and CKA/ITIL-certified professional who excels at managing multi-project operations and mentoring large technical teams (37+ members). Expertise in owning the end-to-end incident and problem management lifecycle, from personally driving expert-level technical troubleshooting and RCA to implementing long-term automation (Python) and monitoring solutions (ELK, Kubernetes).',
  }

  const experiences = [
    {
      title: 'Manager - Operations',
      company: '6D Technologies',
      period: 'May 2022 - Present',
      responsibilities: [
        'Lead, mentor, and manage 4 technical teams (37 engineers) handling 12 BSS/OSS projects. Conduct regular performance reviews, provide expert technical coaching, and support career development to build a high-performing L1/L2 operations group',
        'Own the end-to-end 24x7 incident management process for all 12 projects, including critical platforms for Vodafone Idea CMP and TOGOCEL BSS. Act as the final point of escalation, personally driving the resolution of the most complex production incidents and leading 24/7 on-call rotation efforts',
        'Champion and oversee the problem management framework, personally leading and reviewing deep-dive RCAs for major and recurring incidents. Author and critically review post-mortem reports, ensuring technical rigor and the implementation of long-term preventative solutions',
        'Serve as the primary technical Subject Matter Expert for core BSS/OSS platforms (OCS, PCRF, AAA). Provide critical technical feedback and strategic recommendations to product and engineering teams, directly influencing future design and architecture to improve system reliability',
        'Lead the architecture and implementation of robust, ELK-based monitoring solutions to proactively detect and prevent system problems before they impact customers',
        'Drive and personally contribute to automation initiatives for critical operational tasks, data repair, and diagnostic procedures. Lead Kubernetes deployment strategies to enhance service reliability and team efficiency, reducing manual intervention',
        'Hold ultimate responsibility for service reliability and strict SLA adherence across all projects. Act as the primary technical point of contact for clients and internal stakeholders, managing expectations and communicating technical information effectively',
      ],
    },
    {
      title: 'Lead Operations Engineer',
      company: '6D Technologies',
      period: 'Sep 2019 - May 2022',
      responsibilities: [
        'Led both onsite and offshore managed services operations teams for major international telecom projects',
        'Managed service delivery, ensuring adherence to SLAs, and provided hands-on technical guidance to the support team for complex issue resolution',
      ],
    },
    {
      title: 'Senior Implementation Engineer',
      company: 'Pelatro Solutions',
      period: 'Sep 2017 - Sep 2019',
      responsibilities: [
        'Successfully delivered and implemented complex BSS campaign management system projects for key international clients, including Dialog Axiata (Sri Lanka), Ncell (Nepal), and BTC (Bahamas)',
      ],
    },
    {
      title: 'Technical Support & Implementation Engineer',
      company: '6D Technologies',
      period: 'July 2013 - Sep 2017',
      responsibilities: [
        'Provided technical support and implementation services for BSS/OSS systems, ensuring successful deployment and ongoing maintenance of telecom infrastructure',
      ],
    },
  ]

  const coreCompetencies = [
    'Expert Incident & Problem Management (ITIL v4)',
    'Root Cause Analysis (RCA)',
    'BSS/OSS Domain Leadership (OCS, PCRF, AAA)',
    'Technical Leadership & Mentorship',
    'DevOps, Automation & Monitoring',
    'Cross-Functional Collaboration',
    'Service Reliability & Customer Satisfaction',
    'Application Support & Managed Services',
  ]

  const techSkills = [
    'RHEL',
    'MySQL DB',
    'Singlestore DB',
    'PostgreSQL',
    'Kubernetes & Docker',
    'DevOps',
    'Bash/Shell/Python Scripting',
    'JVM/GC/Heap & Thread Dump Analysis',
    'Diameter & SS7',
    'TCP/IP',
    'Wireshark/Toad/SQL Developer',
    'IT Service Management',
    'JIRA/Remedy/ServiceNow',
    'ELK Stack',
    'Nagios',
    'Monit',
    'MS Office',
  ]

  const certifications = [
    { 
      name: 'ITIL v4 Foundation', 
      issuer: 'Axelos',
      expires: 'Apr 2028',
      credential: 'GR671766899RS'
    },
    { 
      name: 'Certified Kubernetes Administrator (CKA)', 
      issuer: 'The Linux Foundation',
      expires: 'Aug 2025',
      credential: 'LF-v361805uw3'
    },
    { 
      name: 'Foundations of Project Management', 
      issuer: 'Coursera/Google',
      date: 'Mar 2024',
      credential: 'RV73VKYK4BSS'
    },
    { 
      name: 'Masterclass: GenAI in Project & Quality Management', 
      issuer: 'Simplilearn',
      date: 'Apr 2025',
      credential: '8186654'
    },
  ]

  if (!showContent) {
    return <CurtainLanding onEnter={() => setShowContent(true)} />
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden" style={{ cursor: 'none' }}>
      <CustomCursor />
      <NavBar />

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* LetterGlitch Background */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <LetterGlitch
            glitchColors={['#00ffff', '#0066ff', '#00cccc', '#0052cc']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-cyan glow">
                <img
                  src="https://placehold.co/400x400/00ffff/000000?text=RS"
                  alt="Riyas Siddikk"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-neon-cyan"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 255, 0.5)',
                    '0 0 40px rgba(0, 255, 255, 0.8)',
                    '0 0 20px rgba(0, 255, 255, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-4 text-gradient"
              >
                {profile.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl text-neon-blue mb-6"
              >
                {profile.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg mb-8 max-w-2xl"
              >
                {profile.summary}
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-8"
              >
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  <Phone size={20} />
                  <span>{profile.phone}</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  <Mail size={20} />
                  <span>{profile.email}</span>
                </a>
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  <Linkedin size={20} />
                  <span>{profile.linkedin}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            Experience
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neon-cyan/20 hidden md:block transform -translate-x-1/2" />
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:pl-0' : 'md:pl-[calc(50%+2rem)] md:pr-0'}`}
                >
                  <ExperienceCard experience={exp} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            Skills
          </motion.h2>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-neon-blue mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-4">
              {coreCompetencies.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-neon-blue mb-6">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-4">
              {techSkills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index + coreCompetencies.length} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-gray-900/50 border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-cyan/50 hover:glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-cyan/10 rounded-lg">
                    <Award className="text-neon-cyan" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neon-cyan mb-2">{cert.name}</h3>
                    <p className="text-gray-400 mb-1">{cert.issuer}</p>
                    {(cert.expires || cert.date) && (
                      <p className="text-gray-500 text-sm">
                        {cert.expires ? `Expires: ${cert.expires}` : `Completed: ${cert.date}`}
                      </p>
                    )}
                    {cert.credential && (
                      <p className="text-gray-500 text-xs mt-1">ID: {cert.credential}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-neon-cyan/20 rounded-lg p-8 max-w-2xl mx-auto hover:border-neon-cyan/50 hover:glow transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neon-cyan/10 rounded-lg">
                <GraduationCap className="text-neon-cyan" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neon-cyan mb-2">
                  B.Tech in Electronics & Communication Engineering
                </h3>
                <p className="text-gray-400 mb-1">Mar Baselios Christian College of Engineering</p>
                <p className="text-gray-500 text-sm">MG University, Kottayam, Kerala</p>
                <p className="text-gray-500 text-sm mt-1">2013 - 2019 | 70.4%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg mb-8"
          >
            Let's connect and discuss opportunities in operations, incident management, and telecom BSS/OSS.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:glow transition-all"
            >
              <Phone size={20} />
              <span>{profile.phone}</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:glow transition-all"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:glow transition-all"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 border-t border-neon-cyan/10">
        <p>&copy; {new Date().getFullYear()} Riyas Siddikk. All rights reserved.</p>
      </footer>
    </main>
  )
}

