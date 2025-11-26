import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyassiddikk.com'
const siteName = 'Riyas Siddikk - Manager of Operations'
const description = 'Technical Operations Manager with 12+ years in telecom BSS/OSS, specializing in high-availability platforms, system reliability, and real-time monitoring. CKA/ITIL-certified leader managing teams of 37+ and owning the full incident & problem management lifecycle.'
const keywords = [
  'Riyas Siddikk',
  'Operations Manager',
  'Telecom BSS OSS',
  'Incident Management',
  'Problem Management',
  'ITIL v4',
  'CKA Certified',
  'Kubernetes Administrator',
  'DevOps Engineer',
  'System Reliability',
  'High Availability Systems',
  'ELK Stack',
  'Grafana',
  'Prometheus',
  'Telecom Operations',
  'Technical Leadership',
  'Root Cause Analysis',
  'Service Reliability',
  'Automation',
  'Shell Scripting',
  'Python Scripting',
  'OCS',
  'PCRF',
  'AAA',
  '6D Technologies',
  'Operations Engineer',
  'Site Reliability Engineering',
  'SRE',
  'Managed Services',
  '24x7 Operations',
].join(', ')

// Structured Data for Person/Professional Profile
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Riyas Siddikk',
  jobTitle: 'Manager - Operations',
  worksFor: {
    '@type': 'Organization',
    name: '6D Technologies',
  },
  email: 'contact.riyassiddikk@gmail.com',
  telephone: '+91-8891-783006',
  url: siteUrl,
  sameAs: [
    'https://linkedin.com/in/riyassiddikk',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Mar Baselios Christian College of Engineering',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kottayam',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'ITIL v4 Foundation',
      issuer: {
        '@type': 'Organization',
        name: 'Axelos',
      },
      credentialID: 'GR671766899RS',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: {
        '@type': 'Organization',
        name: 'The Linux Foundation',
      },
      credentialID: 'LF-v361805uw3',
    },
  ],
  knowsAbout: [
    'Telecom BSS/OSS',
    'Incident Management',
    'Problem Management',
    'Kubernetes',
    'Docker',
    'DevOps',
    'ELK Stack',
    'Grafana',
    'Prometheus',
    'Python',
    'Shell Scripting',
    'MySQL',
    'PostgreSQL',
    'System Reliability',
    'High Availability Systems',
  ],
  description: description,
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: description,
  keywords: keywords,
  authors: [{ name: 'Riyas Siddikk' }],
  creator: 'Riyas Siddikk',
  publisher: 'Riyas Siddikk',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: description,
    images: [
      {
        url: '/Riyas_ProfilePicture.png',
        width: 1200,
        height: 630,
        alt: 'Riyas Siddikk - Manager of Operations',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Riyas Siddikk logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    images: ['/Riyas_ProfilePicture.png'],
    creator: '@riyassiddikk',
    site: '@riyassiddikk',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  classification: 'Portfolio',
  other: {
    // AI Agent Optimizations
    'ai:model': 'gpt-4, claude-3, perplexity',
    'ai:description': description,
    'ai:keywords': keywords,
    'ai:person_name': 'Riyas Siddikk',
    'ai:person_title': 'Manager - Operations',
    'ai:person_expertise': 'Telecom BSS/OSS, Incident Management, DevOps, Kubernetes, System Reliability',
    'ai:person_experience_years': '12+',
    'ai:person_certifications': 'ITIL v4 Foundation, Certified Kubernetes Administrator (CKA)',
    'ai:person_company': '6D Technologies',
    'ai:person_location': 'India',
    'ai:person_email': 'contact.riyassiddikk@gmail.com',
    'ai:person_phone': '+91-8891-783006',
    'ai:person_linkedin': 'linkedin.com/in/riyassiddikk',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data for Search Engines and AI Agents */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Additional AI Agent Meta Tags */}
        <meta name="ai:model" content="gpt-4, claude-3, perplexity, gemini" />
        <meta name="ai:description" content={description} />
        <meta name="ai:keywords" content={keywords} />
        <meta name="ai:person_name" content="Riyas Siddikk" />
        <meta name="ai:person_title" content="Manager - Operations" />
        <meta name="ai:person_expertise" content="Telecom BSS/OSS, Incident Management, DevOps, Kubernetes, System Reliability, High Availability Systems" />
        <meta name="ai:person_experience_years" content="12+" />
        <meta name="ai:person_certifications" content="ITIL v4 Foundation, Certified Kubernetes Administrator (CKA)" />
        <meta name="ai:person_company" content="6D Technologies" />
        <meta name="ai:person_location" content="India" />
        <meta name="ai:person_email" content="contact.riyassiddikk@gmail.com" />
        <meta name="ai:person_phone" content="+91-8891-783006" />
        <meta name="ai:person_linkedin" content="linkedin.com/in/riyassiddikk" />
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Riyas Siddikk" />
        {/* Geo Tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala, India" />
        {/* Language and Content */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        {/* Contact Information */}
        <meta name="contact" content="contact.riyassiddikk@gmail.com" />
        <meta name="author" content="Riyas Siddikk" />
        <meta name="copyright" content="Riyas Siddikk" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

