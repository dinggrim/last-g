"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/923195491250?text=Hello, I'm interested in custom clothing manufacturing."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#DC2626] hover:bg-[#B91C1C] text-white p-4 rounded-lg shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#C0C0C0]/20 hover:border-[#C0C0C0] industrial-shadow group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
    </a>
  )
}
