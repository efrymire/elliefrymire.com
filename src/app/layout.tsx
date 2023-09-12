import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Source_Sans_3, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ellie Frymire',
  description: 'elliefrymire.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${sourceSansPro.variable} ${robotoMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
