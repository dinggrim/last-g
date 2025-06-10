"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "THE WORK" },
    { href: "/portfolio", label: "BLUEPRINT" },
    { href: "/products", label: "SIGNAL" },
    { href: "/testimonials", label: "WHISPERS" },
    { href: "/the-blueprint-code", label: "THE CODE" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Mobile Nav Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 md:hidden w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#B91C1C]"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5 text-white" />
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="relative bg-black border-r border-[#DC2626]/20 w-64 h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold text-white">NAVIGATION</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#C0C0C0] hover:text-[#DC2626] transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[#C0C0C0] hover:text-[#DC2626] transition-colors font-mono text-sm tracking-wider py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
