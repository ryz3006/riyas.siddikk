'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, Award, GraduationCap } from 'lucide-react'
import CurtainLanding from '@/components/CurtainLanding'
import CustomCursor from '@/components/CustomCursor'
import NavBar from '@/components/NavBar'
import ExperienceCard from '@/components/ExperienceCard'
import ProfileCard from '@/components/ProfileCard'
import ShinyText from '@/components/ShinyText'
import Squares from '@/components/Squares'
import SkillsShowcase from '@/components/skills/SkillsShowcase'
import {
  SiRedhat,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
  SiDocker,
  SiApachekafka,
  SiGithub,
  SiElastic,
  SiGrafana,
  SiPython,
  SiNginx,
  SiJira,
} from 'react-icons/si'
import {
  FaDatabase,
  FaServer,
  FaChartLine,
  FaBug,
  FaToolbox,
  FaCogs,
  FaMicrosoft,
} from 'react-icons/fa'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  const profile = {
    name: 'Riyas Siddikk',
    title: 'Manager - Operations',
    email: 'contact.riyassiddikk@gmail.com',
    phone: '+91 8891 783006',
    linkedin: 'linkedin.com/in/riyassiddikk',
    summary: 'Technical Operations Manager with 12+ years in telecom BSS/OSS, specializing in high-availability platforms, system reliability, and real-time monitoring. CKA/ITIL-certified leader managing teams of 37+ and owning the full incident & problem management lifecycle. I design automation solutions (Shell & Python scripting) and build observability stacks using ELK, Prometheus, and Grafana, while partnering with engineering teams to enhance system architecture and service resilience.',
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

  // Technology logos configuration
  const techLogosConfig = useMemo(
    () => [
      { Icon: SiRedhat, title: 'Red Hat Linux', href: 'https://www.redhat.com' },
      { Icon: SiMysql, title: 'MySQL', href: 'https://www.mysql.com' },
      { Icon: FaServer, title: 'SingleStore DB', href: 'https://www.singlestore.com' },
      { Icon: SiPostgresql, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
      { Icon: SiKubernetes, title: 'Kubernetes', href: 'https://kubernetes.io' },
      { Icon: SiDocker, title: 'Docker', href: 'https://www.docker.com' },
      { Icon: SiApachekafka, title: 'Kafka', href: 'https://kafka.apache.org' },
      { Icon: SiGithub, title: 'GitHub', href: 'https://github.com' },
      { Icon: SiElastic, title: 'ELK Stack', href: 'https://www.elastic.co' },
      { Icon: SiGrafana, title: 'Grafana', href: 'https://grafana.com' },
      { Icon: FaChartLine, title: 'Nagios', href: 'https://www.nagios.org' },
      { Icon: FaBug, title: 'Eclipse MAT', href: 'https://www.eclipse.org/mat' },
      { Icon: SiPython, title: 'Python', href: 'https://www.python.org' },
      { Icon: SiNginx, title: 'Nginx', href: 'https://www.nginx.com' },
      { Icon: SiJira, title: 'JIRA', href: 'https://www.atlassian.com/software/jira' },
      { Icon: FaToolbox, title: 'Remedy', href: 'https://www.bmc.com/it-solutions/remedy' },
      { Icon: FaCogs, title: 'ServiceNow', href: 'https://www.servicenow.com' },
      { Icon: FaMicrosoft, title: 'MS Office', href: 'https://www.microsoft.com/microsoft-365' },
    ],
    []
  )

  // Create techLogos with JSX elements
  const techLogos = useMemo(
    () =>
      techLogosConfig.map(({ Icon, ...rest }) => ({
        node: <Icon />,
        ...rest,
      })),
    [techLogosConfig]
  )

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
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.4}
          squareSize={40}
          direction="diagonal"
          borderColor="#1f2937"
          hoverFillColor="#111827"
        />
      </div>
      <div className="relative z-10">
        <CustomCursor />
        <NavBar />

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12"
          >
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full max-w-md"
            >
              <ProfileCard
                name={profile.name}
                title={profile.title}
                handle="riyassiddikk"
                status="Available"
                contactText="Contact Me"
                avatarUrl="/Riyas_ProfilePicture.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              />
            </motion.div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-8 max-w-2xl"
              >
                <ShinyText
                  text={profile.summary}
                  disabled={false}
                  speed={6}
                  className="text-gray-300"
                />
              </motion.div>

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

      <SkillsShowcase
        techIcons={techLogos}
        coreCompetencies={coreCompetencies}
        expertiseAreas={techSkills}
      />

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="https://drive.google.com/file/d/13cxnSP7qmJkbnby3SFXEZXb0ai7Qdio8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold border border-neon-cyan text-neon-cyan rounded-full hover:bg-neon-cyan/10 hover:glow transition-all"
            >
              Get my latest Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
        <footer className="py-8 px-4 text-center text-gray-400 border-t border-neon-cyan/10">
        <p>&copy; {new Date().getFullYear()} Riyas Siddikk. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

