import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const arabic = IBM_Plex_Sans_Arabic({ 
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'حفل زفاف ياسين وستيفاني',
  description: 'انضموا إلينا في يومنا المميز لنحتفل بحبنا والتزامنا',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={arabic.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
