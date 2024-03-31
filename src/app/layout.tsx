import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/app/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethan Pollack',
  description: 'Personal Website made by Ethan Pollack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider >
      <html lang="en">
        <script
          src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
          strategy="beforeInteractive"
        />
        <body className="bg-background">
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
