import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import BlueprintHeroSection from "@/components/blueprint-hero-section"

export const metadata: Metadata = {
  title: "THE BLUEPRINT CODE | The Unspoken Rules of the 1% Clothing Manufacturers",
  description:
    "This isn't a how-to guide. It's a mirror. If you don't see yourself in these pages, you're not built for this industry.",
  keywords: "elite clothing manufacturer, fashion industry secrets, premium manufacturing",
}

export default function TheBlueprintCode() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <BlueprintHeroSection />
    </div>
  )
}
