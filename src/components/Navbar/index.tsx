'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-primary/20 dark:border-primary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo-ej.svg"
                alt="Logo Empresa Júnior FATEC"
                width={64}
                height={64}
                className="h-20 w-20"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(11%) sepia(75%) saturate(4233%) hue-rotate(347deg) brightness(89%) contrast(95%)',
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link
              href="/announcements"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Editais
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </Link>
            <button className="bg-primary/20 dark:bg-primary/30 text-primary p-2 rounded-full hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
              <span className="material-symbols-outlined">Busca</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 dark:text-gray-200 p-2"
            >
              <div className="w-6 h-6 relative">
                {isMobileMenuOpen ? (
                  // Ícone X
                  <>
                    <span className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-current rotate-45 transition-transform"></span>
                    <span className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-current -rotate-45 transition-transform"></span>
                  </>
                ) : (
                  // Ícone Hamburger
                  <>
                    <span className="absolute top-0 w-full h-0.5 bg-current transition-transform"></span>
                    <span className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-current transition-transform"></span>
                    <span className="absolute bottom-0 w-full h-0.5 bg-current transition-transform"></span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/announcements"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Editais
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
