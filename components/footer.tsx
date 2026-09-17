"use client"

import { Instagram, Facebook, Mail } from "lucide-react"
import Link from "next/link"

const businessAddress = "1309 COFFEEN AVE STE 20511, SHERIDAN, WY, 82801-5777-997, USA"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2"><h3 className="text-2xl font-bold text-white mb-4">Custom Wear Industry</h3><p className="text-gray-400 mb-6 max-w-md">Your trusted partner for premium custom clothing manufacturing. Quality, reliability, and global delivery for brands worldwide.</p><div className="flex gap-4"><a aria-label="Instagram" href="https://www.instagram.com/custom.wear.industry" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#FF3C38]/10 rounded-full"><Instagram className="size-5 text-[#FF3C38]" /></a><a aria-label="Facebook" href="https://www.facebook.com/share/1CbjZLTYFf" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#276EF1]/10 rounded-full"><Facebook className="size-5 text-[#276EF1]" /></a><a aria-label="Email us" href="mailto:info@customwearindustry.com" className="p-2 bg-gray-700 rounded-full"><Mail className="size-5 text-white" /></a></div></div>
          <div><h4 className="text-lg font-semibold text-white mb-4">Explore</h4><ul className="flex flex-col gap-2"><li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li><li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li><li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li><li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li><li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li></ul></div>
          <div><h4 className="text-lg font-semibold text-white mb-4">Contact</h4><ul className="flex flex-col gap-3"><li><p className="text-gray-400 text-sm">Email</p><a href="mailto:info@customwearindustry.com" className="text-white hover:text-[#FF3C38]">info@customwearindustry.com</a></li><li><p className="text-gray-400 text-sm">Phone</p><a href="tel:+13075007462" className="text-white hover:text-[#276EF1]">+1 3075007462</a></li><li><p className="text-gray-400 text-sm">Registered office</p><p className="text-white text-sm">{businessAddress}</p></li></ul></div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col gap-4 md:flex-row md:justify-between text-sm"><p className="text-gray-400">© 2024 Custom Wear Industry. All rights reserved.</p><div className="flex gap-4"><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link><Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link><Link href="/refund-policy" className="text-gray-400 hover:text-white">Returns</Link></div></div>
      </div>
    </footer>
  )
}

export { businessAddress }
