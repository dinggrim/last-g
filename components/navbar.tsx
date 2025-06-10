"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import BrandLogo from "@/components/brand-logo"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-[#DC2626]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <BrandLogo className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                HOME
              </Link>
              <Link
                href="/services"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                SERVICES
              </Link>
              <Link
                href="/portfolio"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                PORTFOLIO
              </Link>
              <Link
                href="/products"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                PRODUCTS
              </Link>
              <Link
                href="/testimonials"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                TESTIMONIALS
              </Link>
              <Link
                href="/the-blueprint-code"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                THE BLUEPRINT CODE
              </Link>
              <Link
                href="/contact"
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#DC2626]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              href="/testimonials"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/the-blueprint-code"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              THE BLUEPRINT CODE
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
