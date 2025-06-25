"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import BrandLogo from "@/components/brand-logo"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false) // scrolling down
      } else {
        setIsVisible(true) // scrolling up or near top
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-black/95 backdrop-blur-md border-b border-[#DC2626]/20`}
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
              <Link href="/" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">HOME</Link>
              <Link href="/services" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">SERVICES</Link>
              <Link href="/portfolio" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">PORTFOLIO</Link>
              <Link href="/products" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">PRODUCTS</Link>
              <Link href="/testimonials" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">TESTIMONIALS</Link>
              <Link href="/the-blueprint-code" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">THE BLUEPRINT CODE</Link>
              <Link href="/contact" className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider">CONTACT</Link>
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
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">HOME</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">SERVICES</Link>
            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">PORTFOLIO</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">PRODUCTS</Link>
            <Link href="/testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">TESTIMONIALS</Link>
            <Link href="/the-blueprint-code" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">THE BLUEPRINT CODE</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-[#C0C0C0] hover:text-[#DC2626] font-mono text-sm tracking-wider">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
