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
    <>
      {/* AI Agent Optimized Content - Hidden but accessible to crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Riyas Siddikk - Manager of Operations at 6D Technologies</h1>
        <p>Technical Operations Manager with 12+ years of experience in telecom BSS/OSS systems, specializing in high-availability platforms, incident management, problem management, and system reliability. Certified in ITIL v4 Foundation and Certified Kubernetes Administrator (CKA). Expert in DevOps, automation, ELK Stack, Grafana, Prometheus, and managing teams of 37+ engineers.</p>
        <h2>Key Skills and Expertise</h2>
        <ul>
          <li>Telecom BSS/OSS Operations</li>
          <li>Incident and Problem Management (ITIL v4)</li>
          <li>Kubernetes and Docker</li>
          <li>DevOps and Automation</li>
          <li>ELK Stack, Grafana, Prometheus</li>
          <li>Shell and Python Scripting</li>
          <li>MySQL, PostgreSQL, SingleStore</li>
          <li>System Reliability Engineering</li>
          <li>High Availability Systems</li>
          <li>Root Cause Analysis</li>
        </ul>
        <h2>Certifications</h2>
        <ul>
          <li>ITIL v4 Foundation - Axelos (Credential: GR671766899RS)</li>
          <li>Certified Kubernetes Administrator (CKA) - The Linux Foundation (Credential: LF-v361805uw3)</li>
          <li>Foundations of Project Management - Coursera/Google (Credential: RV73VKYK4BSS)</li>
          <li>Masterclass: GenAI in Project & Quality Management - Simplilearn (Credential: 8186654)</li>
        </ul>
        <h2>Professional Experience</h2>
        <p>Currently serving as Manager - Operations at 6D Technologies, leading 4 technical teams with 37 engineers across 12 BSS/OSS projects. Previously held positions as Lead Operations Engineer and Senior Implementation Engineer, delivering complex telecom solutions for international clients including Vodafone Idea, TOGOCEL, Dialog Axiata, Ncell, and BTC.</p>
        <h2>Education</h2>
        <p>B.Tech in Electronics & Communication Engineering from Mar Baselios Christian College of Engineering, MG University, Kottayam, Kerala (2013-2019).</p>
        <h2>Contact Information</h2>
        <p>Email: contact.riyassiddikk@gmail.com | Phone: +91 8891 783006 | LinkedIn: linkedin.com/in/riyassiddikk</p>
      </div>

      <main className="min-h-screen bg-black text-white relative overflow-x-hidden" style={{ cursor: 'none' }} role="main" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Riyas Siddikk" />
        <meta itemProp="jobTitle" content="Manager - Operations" />
        <meta itemProp="worksFor" content="6D Technologies" />
        <meta itemProp="email" content="contact.riyassiddikk@gmail.com" />
        <meta itemProp="telephone" content="+91-8891-783006" />
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
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
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Person" aria-label="About Riyas Siddikk">
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
              className="w-full max-w-md mx-auto md:mx-0 flex justify-center items-center"
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
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mb-8"
              >
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors text-sm sm:text-base break-all"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-words">{profile.phone}</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors text-sm sm:text-base break-all"
                >
                  <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-words">{profile.email}</span>
                </a>
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors text-sm sm:text-base break-all"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-words">{profile.linkedin}</span>
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
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/ItemList" aria-label="Professional Experience">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gradient px-4"
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
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30" itemScope itemType="https://schema.org/ItemList" aria-label="Certifications and Credentials">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gradient px-4"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                className="bg-gray-900/50 border border-neon-cyan/20 rounded-lg p-4 sm:p-6 hover:border-neon-cyan/50 hover:glow transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-neon-cyan/10 rounded-lg flex-shrink-0">
                    <Award className="text-neon-cyan sm:w-8 sm:h-8" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-neon-cyan mb-2 break-words">{cert.name}</h3>
                    <p className="text-gray-400 mb-1 text-sm sm:text-base break-words">{cert.issuer}</p>
                    {(cert.expires || cert.date) && (
                      <p className="text-gray-500 text-xs sm:text-sm break-words">
                        {cert.expires ? `Expires: ${cert.expires}` : `Completed: ${cert.date}`}
                      </p>
                    )}
                    {cert.credential && (
                      <p className="text-gray-500 text-xs mt-1 break-all">ID: {cert.credential}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/EducationalOccupationalCredential" aria-label="Education">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gradient px-4"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-neon-cyan/20 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto hover:border-neon-cyan/50 hover:glow transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 bg-neon-cyan/10 rounded-lg flex-shrink-0">
                <GraduationCap className="text-neon-cyan" size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-neon-cyan mb-2 break-words">
                  B.Tech in Electronics & Communication Engineering
                </h3>
                <p className="text-gray-400 mb-1 text-sm sm:text-base break-words">Mar Baselios Christian College of Engineering</p>
                <p className="text-gray-500 text-xs sm:text-sm break-words">MG University, Kottayam, Kerala</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">2013 - 2019 | 70.4%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30" itemScope itemType="https://schema.org/ContactPoint" aria-label="Contact Information">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gradient px-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 px-4"
          >
            Let's connect and discuss opportunities in operations, incident management, and telecom BSS/OSS.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900/50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:glow transition-all text-sm sm:text-base"
            >
              <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">{profile.phone}</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900/50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:glow transition-all text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Email Me</span>
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900/50 border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:glow transition-all text-sm sm:text-base"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
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
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border border-neon-cyan text-neon-cyan rounded-full hover:bg-neon-cyan/10 hover:glow transition-all"
            >
              Get my latest Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
        <footer className="py-8 px-4 text-center text-gray-400 border-t border-neon-cyan/10" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Riyas Siddikk. All rights reserved.</p>
        </footer>
      </div>
    </main>
    </>
  )
}

