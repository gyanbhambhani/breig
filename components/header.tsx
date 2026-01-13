"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Team", href: "/team" },
  { name: "Recruitment", href: "#events" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/breig-full-logo.png"
                alt="Berkeley Real Estate Investment Group"
                width={400}
                height={100}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="https://forms.gle/6sHX57BZFVs7Dwqt8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Apply Now</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-[9999] lg:hidden overflow-hidden"
          onClick={closeMobileMenu}
        >
          <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="/images/breig-full-logo.png"
                  alt="BREIG"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Content - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center px-8">
              {/* Navigation Items - Centered */}
              <div className="text-center space-y-8 mb-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-4xl font-medium text-black hover:text-gray-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Apply Now Button - Centered */}
              <div className="w-full max-w-sm">
                <Link 
                  href="https://forms.gle/6sHX57BZFVs7Dwqt8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 px-8 text-xl font-medium">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
