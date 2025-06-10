"use client"

import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"

export default function ContactPageContent() {
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
    <div className="relative min-h-screen">
      <div className="relative z-10 py-32">
        {/* Hero Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tight">
              GET IN <span className="text-[#DC2626]">TOUCH</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start your custom clothing project? Contact us today.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <button
                onClick={handleEmailClick}
                className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-12 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
              >
                <Mail className="h-16 w-16 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-4">
                  Email
                </h3>
                <p className="text-gray-300 text-lg">info@customwearindustry.com</p>
                <p className="text-gray-500 text-sm mt-2">Click to send email</p>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-12 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
              >
                <MessageCircle className="h-16 w-16 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-4">
                  WhatsApp
                </h3>
                <p className="text-gray-300 text-lg">Available upon request</p>
                <p className="text-gray-500 text-sm mt-2">Click to start chat</p>
              </button>

              <button
                onClick={handleiMessageClick}
                className="group bg-black/70 border-2 border-[#C0C0C0]/30 p-12 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow"
              >
                <Phone className="h-16 w-16 text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white group-hover:text-[#DC2626] transition-colors duration-500 mb-4">
                  iMessage
                </h3>
                <p className="text-gray-300 text-lg">Available upon request</p>
                <p className="text-gray-500 text-sm mt-2">Click to send message</p>
              </button>
            </div>

            {/* Location */}
            <div className="text-center bg-black/70 border-2 border-[#C0C0C0]/30 p-12 industrial-shadow">
              <MapPin className="h-16 w-16 text-[#DC2626] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
              <p className="text-gray-300 text-lg mb-2">Hajipura Road, Custom Wear Industry</p>
              <p className="text-gray-300 text-lg">Sialkot, Pakistan</p>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Response Time</h2>
            <p className="text-xl text-gray-300 mb-4">
              Your message goes directly to our team. We respond within 24 hours.
            </p>
            <p className="text-[#DC2626] font-medium">Professional. Precise. Reliable.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
