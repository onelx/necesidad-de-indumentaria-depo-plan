import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IdeaForge - Plan de Negocio | Indumentaria Deportiva',
  description: 'Workspace de plan de negocio para fábrica de indumentaria deportiva personalizada',
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
          {/* Navigation */}
          <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IF</span>
                    </div>
                    <span className="font-semibold text-gray-900">IdeaForge</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-1">
                  <Link 
                    href="/" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/canvas" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    Canvas
                  </Link>
                  <Link 
                    href="/projections" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    Proyecciones
                  </Link>
                  <Link 
                    href="/validation" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    Validación
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-sm text-gray-500">
                Generado por IdeaForge • Plan de Negocio Interactivo
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
