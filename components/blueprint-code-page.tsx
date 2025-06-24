"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlueprintCodePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showStickyButton, setShowStickyButton] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleModalOpen = () => {
    setScrollPosition(window.scrollY)
  }

  const handleModalClose = () => {
    setTimeout(() => {
      window.scrollTo(0, scrollPosition)
    }, 100)
  }

  const codes = [
    "Clients come and go. Product is religion.",
    "No screenshots, only samples.",
    "You either deliver fast or you're forgotten.",
    "Never chase trends — define silhouettes.",
    "Fabric quality is louder than logos.",
    "Brands who grow have manufacturing discipline.",
    "Ghost drops beat marketing plans.",
    "We move in quiet. We manufacture loud.",
    "You're not our client until you're obsessed with output.",
  ]

  const nonNegotiables = [
    {
      title: "Flaky clients",
      description: "We don't chase. If you're not serious, this isn't for you.",
    },
    {
      title: "Factory excuses",
      description: "We don't blame machines, weather, or customs. We deliver.",
    },
    {
      title: "Slow response times",
      description: "We reply like your drop is our problem — because it is.",
    },
    {
      title: "Pretty branding without product teeth",
      description: "We don't care about moodboards. Show us real product volume.",
    },
  ]

  const dominators = [
    {
      id: 1,
      name: "The Pattern Prophet",
      location: "Los Angeles, California",
      specialty: "Oversized streetwear & viral drops",
      bio: "You've seen their silhouettes on every trending line this year — you just didn't know who made them. The Pattern Prophet doesn't design trends; he engineers shapes that break algorithm ceilings.\n\nNo online presence. No LinkedIn. No followers.\nJust eight figures in wholesale and a fabric trail no one can trace.",
      quote: "You don't need a logo if your cut is loud enough.",
      image: "/images/dominators/pattern-prophet.jpg",
    },
    {
      id: 2,
      name: "The Tech Alchemist",
      location: "Brooklyn, New York",
      specialty: "Technical fashion, tactical performance",
      bio: "They don't sew — they prototype. Every piece engineered here passes through code, software, and blood. Their clients? Funded. Their deadlines? Gone before they're spoken.\n\nHigh-frequency production labs. Military-grade materials. Always under NDA.",
      quote: "You bring the vision. I'll build you the machine.",
      image: "/images/dominators/tech-alchemist.jpg",
    },
    {
      id: 3,
      name: "The Ghost Operator",
      location: "Atlanta, Georgia",
      specialty: "Athleisure for celebrities and scalable brands",
      bio: "Their hands have touched more viral collections than most stylists will in a lifetime — but no one knows their name. Locked warehouses. Silent drops.\n\nSeen by millions. Found by none.",
      quote: "Spotted once wearing: Black hoodie. Studio badge. Zero ego.",
      image: "/images/dominators/ghost-operator.jpg",
    },
    {
      id: 4,
      name: "The Drape Surgeon",
      location: "Chicago, Illinois",
      specialty: "Minimalist luxury, capsule tailoring",
      bio: "No noise. Just cloth and cuts. Their latest client showed at Paris Fashion Week — and no one knew who tailored it.\n\nNo selfies. No stories. Just clean lines and global silence.",
      quote: "Rumor: They press garments with surgical gloves.",
      image: "/images/dominators/drape-surgeon.jpg",
    },
    {
      id: 5,
      name: "The Denim Ghost",
      location: "El Paso, Texas",
      specialty: "Raw denim, Americana workwear",
      bio: "Over 1.2 million pairs of jeans stitched — and not one Instagram post.\n\nTheir machines never stop. Their production fills freight containers.",
      quote: "When Levi's can't deliver fast enough, they call this guy.",
      image: "/images/dominators/denim-ghost.jpg",
    },
  ]

  const warRoomRules = [
    "No begging for deals",
    "Never lower prices, raise standards",
    "If it doesn't scale with dignity, kill it",
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Sticky Apply Button */}
      {showStickyButton && (
        <Link href="/elite-application">
          <button className="fixed z-50 bottom-6 right-6 bg-[#8B0000] hover:bg-[#DC2626] text-white text-sm font-mono px-5 py-3 rounded-xl shadow-xl border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500">
            APPLY TO MANUFACTURE
          </button>
        </Link>
      )}

      {/* Hero Section + Dialog */}
      <div className="relative z-10 pt-20">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
          <div className={`relative z-10 container-responsive text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="space-y-6 sm:space-y-10">
              <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none font-mono">
                <span className="block text-white">THE</span>
                <span className="block text-[#DC2626]">BLUEPRINT</span>
                <span className="block text-white">CODE</span>
              </h1>
              <p className="text-gray-400 italic text-base sm:text-xl font-light max-w-2xl mx-auto">
                "This isn't a how-to guide. It's a mirror. If you don't see yourself in these pages, you're not built for this industry."
              </p>
              <div className="flex flex-col gap-4 items-center justify-center">
                <Link href="/elite-application">
                  <Button className="bg-[#8B0000] hover:bg-[#DC2626] text-white px-8 py-4 text-sm font-mono tracking-widest border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500 shadow-xl">
                    [APPLY TO MANUFACTURE WITH US]
                  </Button>
                </Link>

                {/* Dialog Popup "Why Apply?" */}
                <Dialog>
                  <DialogTrigger asChild>
                    <p className="text-sm text-gray-500 underline cursor-pointer">Why Apply?</p>
                  </DialogTrigger>
                  <DialogContent className="bg-black border border-[#DC2626] max-w-sm sm:max-w-lg p-6">
                    <div className="text-white text-sm sm:text-lg leading-relaxed space-y-3">
                      <h3 className="text-[#DC2626] font-bold font-mono text-xl">Why We Ask You to Apply</h3>
                      <p>We're not a mass-factory. We're a performance manufacturing system.</p>
                      <p>Every brand we take on goes through filters. We're not interested in volume — we're obsessed with **output that moves culture.**</p>
                      <p className="italic text-[#DC2626]">Only 7 brands are approved each month. If you're one of them, everything changes.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
        {/* 🔻 You can keep rest of the original 300+ lines as is below this */}

        {/* At end of "Blood Oath" section, under final CTA — add this urgency line */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#DC2626] font-mono italic">⚠️ Applications close after 7 approvals each month.</p>
        </div>
      </div>
    </div>
  )
}
