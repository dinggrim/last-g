"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Remove loading overlay after page loads
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading Overlay */}
      <div className={`loading-overlay ${isLoaded ? "loaded" : ""}`} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black" />

        <div
          className={`relative z-10 container-responsive text-center mobile-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {/* Main Headline - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none">
                <span className="block text-white">CRAFTED IN</span>
                <span className="block text-[#DC2626]">SHADOWS</span>
              </h1>

              <div className="h-px bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto" />

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#C0C0C0] max-w-2xl sm:max-w-3xl md:max-w-5xl mx-auto leading-tight">
                Built for the Bold
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              Elite manufacturing. Silent operations. Uncompromising quality.
            </p>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center pt-4 sm:pt-6 md:pt-8">
              <Link href="/the-blueprint-code">
                <Button className="btn-primary group w-full sm:w-auto text-sm sm:text-base">
                  <span className="group-hover:animate-pulse">ENTER THE BLUEPRINT</span>
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline" className="btn-secondary w-full sm:w-auto text-sm sm:text-base">
                  SECURE CHANNEL
                </Button>
              </Link>
            </div>

            {/* Discreet Navigation Hint */}
            <div className="pt-6 sm:pt-8 md:pt-16">
              <p className="text-gray-600 hover:text-[#DC2626] transition-colors text-xs sm:text-sm tracking-widest opacity-50 hover:opacity-100">
                For those who know, scroll down
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements - Mobile Optimized */}
        <div className="absolute top-16 sm:top-20 left-2 sm:left-4 md:left-10 w-8 sm:w-16 md:w-20 h-8 sm:h-16 md:h-20 bg-[#DC2626]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-2 sm:right-4 md:right-10 w-12 sm:w-20 md:w-32 h-12 sm:h-20 md:h-32 bg-[#C0C0C0]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>
    </>
  )
}
