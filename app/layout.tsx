import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prendas 10 - Plan de Negocio',
  description: 'Plan de negocio interactivo para Prendas 10 - Indumentaria deportiva y corporativa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P10</span>
                    </div>
                    <span className="font-semibold text-gray-900">Prendas 10</span>
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Link 
                    href="/" 
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/canvas" 
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  >
                    Canvas
                  </Link>
                  <Link 
                    href="/projections" 
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  >
                    Proyecciones
                  </Link>
                  <Link 
                    href="/validation" 
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                  >
                    Validación
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
