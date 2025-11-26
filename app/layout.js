import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Riyas Siddikk - Manager of Operations',
  description: 'Portfolio of Riyas Siddikk - Manager of Operations specializing in high-availability systems, incident management, and telecom BSS/OSS architectures.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

