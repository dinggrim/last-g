"use client"

import { Instagram, Facebook, Mail } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Wear Industry</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for premium custom clothing manufacturing. Quality, reliability, and global delivery
              for brands worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/custom.wear.industry?igsh=MWV6YnBlYXIzaWV4aA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FF3C38]/10 rounded-full hover:bg-[#FF3C38]/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-[#FF3C38]" />
              </a>
              <a
                href="https://www.facebook.com/share/1CbjZLTYFf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#276EF1]/10 rounded-full hover:bg-[#276EF1]/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-[#276EF1]" />
              </a>
              <a
                href="mailto:customwear.28@gmail.com"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:customwear.28@gmail.com" className="text-white hover:text-[#FF3C38] transition-colors">
                  customwear.28@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <a
                  href="https://wa.me/923195491250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#276EF1] transition-colors"
                >
                  +92 319 5491250
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Hajipura Road, Custom Wear Industry, Sialkot</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Custom Wear Industry. All rights reserved. | Premium Custom Clothing Manufacturing
          </p>
        </div>
      </div>
    </footer>
  )
}
