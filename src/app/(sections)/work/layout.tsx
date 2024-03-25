import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import StoreProvider from '@/app/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Work Experience | Ethan Pollack',
  description: 'Work Experience of Ethan Pollack',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider >
      <section className="bg-background">
        {children}
      </section>
    </StoreProvider>
  )
}
