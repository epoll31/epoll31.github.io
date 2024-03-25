import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import StoreProvider from '@/app/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About Me | Ethan Pollack',
  description: 'Learn About Ethan Pollack',
}

export default function AboutLayout({
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
