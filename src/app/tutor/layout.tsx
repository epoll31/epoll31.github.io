

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './tutor_globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethan Pollack | Tutor',
  description: 'Tutoring Home Page for Ethan Pollack',
}

export default function TutorPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
