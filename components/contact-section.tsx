"use client"

import { Mail, MessageCircle, Phone } from "lucide-react"

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:info@customwearindustry.com?subject=Project Inquiry&body=Hello, I'm interested in discussing a custom clothing project."
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923195491250?text=Hello, I'm interested in custom clothing manufacturing.", "_blank")
  }

  const handleiMessageClick = () => {
    window.location.href = "sms:+923195491250&body=Hello, I'm interested in custom clothing manufacturing."
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-[#DC2626]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your custom clothing project? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <button
            onClick={handleEmailClick}
            className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
          >
            <Mail className="h-12 w-12 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-2">
              Email
            </h3>
            <p className="text-gray-300">info@customwearindustry.com</p>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
          >
            <MessageCircle className="h-12 w-12 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-300">Available upon request</p>
          </button>

          <button
            onClick={handleiMessageClick}
            className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
          >
            <Phone className="h-12 w-12 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-2">
              iMessage
            </h3>
            <p className="text-gray-300">Available upon request</p>
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">📍 Hajipura Road, Custom Wear Industry, Sialkot, Pakistan</p>
          <p className="text-[#C0C0C0]">Your message goes directly to our team. We respond within 24 hours.</p>
        </div>
      </div>
    </section>
  )
}
