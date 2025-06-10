"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"

export default function BlueprintHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDominator, setSelectedDominator] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const codes = [
    "Precision over popularity",
    "Systems over shouting",
    "Sample speed = scale speed",
    "Never chase trends — define silhouettes",
    "Fabric quality is louder than logos",
    "Brands who grow have manufacturing discipline",
    "Ghost drops beat marketing plans",
    "We move in quiet. We manufacture loud.",
    "You're not our client until you're obsessed with output",
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
      quote: "You don't need a logo if your cut is loud enough.",
      image: "/images/dominators/pattern-prophet.jpg",
    },
    {
      id: 2,
      name: "The Tech Alchemist",
      location: "Brooklyn, New York",
      specialty: "Technical fashion, tactical performance",
      quote: "You bring the vision. I'll build you the machine.",
      image: "/images/dominators/tech-alchemist.jpg",
    },
    {
      id: 3,
      name: "The Ghost Operator",
      location: "Atlanta, Georgia",
      specialty: "Athleisure for celebrities and scalable brands",
      quote: "Spotted once wearing: Black hoodie. Studio badge. Zero ego.",
      image: "/images/dominators/ghost-operator.jpg",
    },
    {
      id: 4,
      name: "The Drape Surgeon",
      location: "Chicago, Illinois",
      specialty: "Minimalist luxury, capsule tailoring",
      quote: "Rumor: They press garments with surgical gloves.",
      image: "/images/dominators/drape-surgeon.jpg",
    },
    {
      id: 5,
      name: "The Denim Ghost",
      location: "El Paso, Texas",
      specialty: "Raw denim, Americana workwear",
      quote: "When Levi's can't deliver fast enough, they call this guy.",
      image: "/images/dominators/denim-ghost.jpg",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

          <div
            className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-16">
              <div className="space-y-8">
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none font-mono">
                  <span className="block text-white">THE</span>
                  <span className="block text-[#DC2626]">BLUEPRINT</span>
                  <span className="block text-white">CODE</span>
                </h1>

                <div className="h-px bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent max-w-4xl mx-auto" />

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#C0C0C0] max-w-5xl mx-auto leading-tight">
                  The Unspoken Rules of the 1% Clothing Manufacturers
                </h2>
              </div>

              <div className="space-y-12">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto italic font-light leading-relaxed">
                  "This isn't a how-to guide. It's a mirror. If you don't see yourself in these pages, you're not built
                  for this industry."
                </p>

                <Link href="/elite-application">
                  <Button className="bg-[#8B0000] hover:bg-[#DC2626] text-white px-16 py-8 text-xl font-mono tracking-widest border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/50 group relative overflow-hidden glitch">
                    <span className="relative z-10">[APPLY TO MANUFACTURE WITH US]</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9 Hidden Codes */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tight font-mono">
                9 HIDDEN CODES OF KILLER MANUFACTURERS
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto italic font-light leading-relaxed">
                These aren't tips. They're a creed. If you've ever had to explain your obsession with production, you
                won't need to here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {codes.map((code, index) => (
                <Card
                  key={index}
                  className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-700 group industrial-shadow"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-mono text-[#DC2626] font-black mb-6 group-hover:scale-125 transition-transform duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#DC2626] transition-colors duration-500 leading-tight">
                      {code}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Negotiables with Interactive Toggles */}
        <section className="py-32 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tight font-mono">
                THE NON-NEGOTIABLES
              </h2>
              <p className="text-2xl text-[#DC2626] font-mono mb-16 italic">What we never tolerate:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {nonNegotiables.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer">
                      <div className="bg-gray-900/30 border-2 border-[#C0C0C0]/20 p-8 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <div className="w-4 h-4 bg-[#DC2626] rotate-45 group-hover:scale-150 transition-transform duration-500" />
                            <span className="text-xl text-white font-medium group-hover:text-[#DC2626] transition-colors duration-500">
                              {item.title}
                            </span>
                          </div>
                          <div className="text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500">
                            [CLICK]
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-[#DC2626] max-w-2xl">
                    <div className="p-8 text-center">
                      <h3 className="text-3xl font-bold text-[#DC2626] mb-6 font-mono">{item.title.toUpperCase()}</h3>
                      <p className="text-xl text-white leading-relaxed">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Quiet Dominators with Click-to-Reveal */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tight font-mono">
                THE QUIET DOMINATORS
              </h2>
              <p className="text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed font-light">
                5 anonymous profiles of manufacturers whose work you wear every day — but you'll never find them online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-20">
              {dominators.map((dominator) => (
                <Dialog key={dominator.id}>
                  <DialogTrigger asChild>
                    <Card className="bg-black/80 border-[#C0C0C0]/20 overflow-hidden group hover:border-[#DC2626]/50 transition-all duration-700 cursor-pointer">
                      <CardContent className="p-0">
                        <div className="h-80 relative overflow-hidden">
                          <Image
                            src={dominator.image || "/placeholder.svg"}
                            alt={dominator.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-2xl font-mono text-[#DC2626]/60 group-hover:text-[#DC2626]/90 transition-colors duration-700 transform group-hover:scale-110">
                              [CLASSIFIED]
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-[#DC2626] max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                      <div className="relative h-96 overflow-hidden rounded-lg">
                        <Image
                          src={dominator.image || "/placeholder.svg"}
                          alt={dominator.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-[#DC2626] mb-2 font-mono">{dominator.name}</h3>
                          <p className="text-[#C0C0C0] text-lg">{dominator.location}</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">Specialty:</h4>
                          <p className="text-gray-300">{dominator.specialty}</p>
                        </div>
                        <div className="border-l-4 border-[#DC2626] pl-6">
                          <p className="text-xl text-white italic">"{dominator.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl text-gray-400">No Instagram. No TikTok. No ads.</p>
              <p className="text-2xl text-white font-medium">Just systems, supply chains, and private jets.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-12">
              <h3 className="text-4xl md:text-5xl font-black text-white font-mono">Still here? We see you.</h3>

              <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                If you're building a brand worth manufacturing — not just designing — you've found your people.
                <br />
                <br />
                We don't work with everyone. Only killers. Apply now.
              </p>

              <Link href="/elite-application">
                <Button className="bg-[#8B0000] hover:bg-[#DC2626] text-white px-20 py-10 text-2xl font-mono tracking-widest border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/50 group relative overflow-hidden glitch">
                  <span className="relative z-10">[APPLY TO MANUFACTURE WITH US]</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
