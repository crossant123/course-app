import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './Components/Navigation'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next JS Starter Kit',
  description: 'Next JS App Created by Anthony C.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <header>
            <Navigation />
          </header>
          {children}
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
