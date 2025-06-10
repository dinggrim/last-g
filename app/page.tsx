import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TheWorkSection from "@/components/the-work-section"
import TheBlueprintSection from "@/components/the-blueprint-section"
// Remove ProductSignalSection import
import WhispersSection from "@/components/whispers-section"
import TheSignalSection from "@/components/the-signal-section"
import MobileNav from "@/components/mobile-nav"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Custom Wear Industry | Crafted in Shadows, Built for the Bold",
  description: "Elite clothing manufacturing. Silent operations. Uncompromising quality.",
  keywords: "custom clothing manufacturer, premium manufacturing, apparel production",
  viewport: "width=device-width, initial-scale=1.0",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />
      <HeroSection />
      <TheWorkSection />
      <TheBlueprintSection />
      {/* Remove ProductSignalSection */}
      <WhispersSection />
      <TheSignalSection />
      <MobileNav />
      <WhatsAppButton />
    </div>
  )
}
