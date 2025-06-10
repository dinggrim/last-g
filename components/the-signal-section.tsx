"use client"

import { Mail, MessageCircle, Shield } from "lucide-react"

export default function TheSignalSection() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:info@customwearindustry.com?subject=Project Inquiry&body=Hello, I'm interested in discussing a custom clothing project."
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923195491250?text=Hello, I'm interested in custom clothing manufacturing.", "_blank")
  }

  const handleSecureChannelClick = () => {
    window.location.href = "/contact"
  }

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-responsive">
        <div className="text-center section-margin">
          <h2 className="text-section-title font-bold mb-4 sm:mb-6">
            The <span className="text-[#DC2626]">Signal</span>
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto">Secure channels. Direct contact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
          <button
            onClick={handleEmailClick}
            className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-6 sm:p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
          >
            <Mail className="h-8 w-8 sm:h-12 sm:w-12 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-2">
              Email
            </h3>
            <p className="text-small text-gray-300">info@customwearindustry.com</p>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-6 sm:p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
          >
            <MessageCircle className="h-8 w-8 sm:h-12 sm:w-12 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-2">
              WhatsApp
            </h3>
            {/* WhatsApp number hidden as requested */}
          </button>

          <button
            onClick={handleSecureChannelClick}
            className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-6 sm:p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
          >
            <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-2">
              Secure Channel
            </h3>
            <p className="text-small text-gray-300">Private consultation</p>
          </button>
        </div>

        <div className="text-center">
          <p className="text-small text-gray-400 mb-2">📍 Hajipura Road, Sialkot, Pakistan</p>
          <p className="text-xs sm:text-sm text-[#C0C0C0]">Response within 24 hours. Always.</p>
        </div>
      </div>
    </section>
  )
}
