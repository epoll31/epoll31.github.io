
import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Ethan Pollack | IQP',
  description: 'Interactive Qualifying Project for Ethan Pollack',
}

export default function MQPLayout({
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
