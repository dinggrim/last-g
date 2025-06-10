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

  useEffect(() => {
    setIsVisible(true)
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
      <div className="relative z-10 pt-20">
        {/* Hero Section - Mobile Optimized */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

          <div
            className={`relative z-10 container-responsive text-center mobile-center transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-8 sm:space-y-12">
              {/* Mobile-Optimized Headline */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none font-mono">
                  <span className="block text-white">THE</span>
                  <span className="block text-[#DC2626]">BLUEPRINT</span>
                  <span className="block text-white">CODE</span>
                </h1>

                <div className="h-px bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent max-w-2xl sm:max-w-4xl mx-auto" />

                <h2 className="responsive-subheading font-bold text-[#C0C0C0] max-w-3xl sm:max-w-5xl mx-auto leading-tight">
                  The Unspoken Rules of the 1% Clothing Manufacturers
                </h2>
              </div>

              {/* Mobile-Optimized Subheadline */}
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto italic font-light leading-relaxed">
                  "This isn't a how-to guide. It's a mirror. If you don't see yourself in these pages, you're not built
                  for this industry."
                </p>

                {/* Mobile-Optimized CTA Button */}
                <Link href="/elite-application">
                  <Button className="bg-[#8B0000] hover:bg-[#DC2626] text-white px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-lg font-mono tracking-widest border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/50 group relative overflow-hidden glitch">
                    <span className="relative z-10 group-hover:animate-pulse">[APPLY TO MANUFACTURE WITH US]</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The 9 Hidden Codes - Mobile Optimized */}
        <section className="section-padding bg-gradient-to-b from-black to-gray-900">
          <div className="container-responsive">
            <div className="text-center section-margin mobile-center">
              <h2 className="responsive-heading font-black text-white mb-6 sm:mb-8 tracking-tight font-mono">
                THE 9 HIDDEN CODES OF KILLER MANUFACTURERS
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto italic font-light leading-relaxed">
                These aren't tips. They're a creed. If you've ever had to explain your obsession with production, you
                won't need to here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {codes.map((code, index) => (
                <Card
                  key={index}
                  className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-700 group industrial-shadow"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-xl sm:text-3xl font-mono text-[#DC2626] font-black mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-500">
                      #{String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-[#DC2626] transition-colors duration-500 leading-tight">
                      {code}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: The Non-Negotiables - Single Close Button */}
        <section className="section-padding bg-black">
          <div className="container-responsive">
            <div className="text-center section-margin mobile-center">
              <h2 className="responsive-heading font-black text-white mb-6 sm:mb-8 tracking-tight font-mono">
                THE NON-NEGOTIABLES
              </h2>
              <p className="text-sm sm:text-lg text-[#DC2626] font-mono mb-8 sm:mb-12 italic">
                What we never tolerate:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12">
              {nonNegotiables.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer" onClick={handleModalOpen}>
                      <div className="bg-gray-900/30 border-2 border-[#C0C0C0]/20 p-4 sm:p-6 hover:border-[#DC2626] transition-all duration-500 hover:bg-[#DC2626]/10 industrial-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#DC2626] rotate-45 group-hover:scale-150 transition-transform duration-500" />
                            <span className="text-sm sm:text-lg text-white font-medium group-hover:text-[#DC2626] transition-colors duration-500">
                              {item.title}
                            </span>
                          </div>
                          <div className="text-[#C0C0C0] group-hover:text-[#DC2626] transition-colors duration-500 font-mono text-xs">
                            [CLICK]
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-[#DC2626] max-w-sm sm:max-w-lg modal-content">
                    <div className="p-4 sm:p-6 text-center">
                      <button
                        onClick={handleModalClose}
                        className="absolute top-3 right-3 text-[#C0C0C0] hover:text-[#DC2626] transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <h3 className="text-lg sm:text-2xl font-bold text-[#DC2626] mb-4 font-mono">
                        {item.title.toUpperCase()}
                      </h3>
                      <p className="text-sm sm:text-lg text-white leading-relaxed">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg sm:text-2xl text-gray-400 font-light italic">These are your filters. Stay cold.</p>
            </div>
          </div>
        </section>

        {/* Section 3: The Quiet Dominators - Single Close Button */}
        <section className="section-padding bg-gradient-to-b from-black to-gray-900">
          <div className="container-responsive">
            <div className="text-center section-margin mobile-center">
              <h2 className="responsive-heading font-black text-white mb-6 sm:mb-8 tracking-tight font-mono">
                THE QUIET DOMINATORS
              </h2>
              <p className="text-sm sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                5 anonymous profiles of manufacturers whose work you wear every day — but you'll never find them online.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
              {dominators.map((dominator) => (
                <Dialog key={dominator.id}>
                  <DialogTrigger asChild>
                    <Card
                      className="bg-black/80 border-[#C0C0C0]/20 overflow-hidden group hover:border-[#DC2626]/50 transition-all duration-700 cursor-pointer"
                      onClick={handleModalOpen}
                    >
                      <CardContent className="p-0">
                        <div className="h-32 sm:h-48 lg:h-64 relative overflow-hidden">
                          <Image
                            src={dominator.image || "/placeholder.svg"}
                            alt={dominator.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-xs sm:text-lg font-mono text-[#DC2626]/60 group-hover:text-[#DC2626]/90 transition-colors duration-700 transform group-hover:scale-110">
                              [CLASSIFIED]
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-[#DC2626] max-w-xs sm:max-w-3xl modal-content">
                    <div className="p-4 sm:p-6">
                      <button
                        onClick={handleModalClose}
                        className="absolute top-3 right-3 text-[#C0C0C0] hover:text-[#DC2626] transition-colors z-10"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="relative h-48 sm:h-64 overflow-hidden rounded-lg">
                          <Image
                            src={dominator.image || "/placeholder.svg"}
                            alt={dominator.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <h3 className="text-lg sm:text-2xl font-bold text-[#DC2626] mb-1 font-mono">
                              {dominator.name}
                            </h3>
                            <p className="text-[#C0C0C0] text-sm">{dominator.location}</p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-lg font-semibold text-white mb-1">Specialty:</h4>
                            <p className="text-xs sm:text-sm text-gray-300">{dominator.specialty}</p>
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-lg font-semibold text-white mb-1">Profile:</h4>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                              {dominator.bio}
                            </p>
                          </div>
                          <div className="border-l-4 border-[#DC2626] pl-3 sm:pl-4">
                            <p className="text-xs sm:text-lg text-white italic">"{dominator.quote}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-lg text-gray-400">No Instagram. No TikTok. No ads.</p>
              <p className="text-base sm:text-xl text-white font-medium">
                Just systems, supply chains, and private jets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The War Room Rules - Mobile Optimized */}
        <section className="section-padding bg-black">
          <div className="container-responsive">
            <div className="text-center section-margin mobile-center">
              <h2 className="responsive-heading font-black text-white mb-6 sm:mb-8 tracking-tight font-mono">
                THE WAR ROOM RULES
              </h2>
              <p className="text-sm sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
                The top 1% don't hustle. They <span className="text-[#DC2626] font-bold">negotiate</span>,{" "}
                <span className="text-[#DC2626] font-bold">cut</span>, and{" "}
                <span className="text-[#DC2626] font-bold">walk away</span> without emotion.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
              {warRoomRules.map((rule, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-900/20 border-l-4 border-[#DC2626] p-4 sm:p-8 hover:bg-[#DC2626]/10 transition-all duration-500">
                    <p className="text-sm sm:text-xl text-white font-medium group-hover:text-[#DC2626] transition-colors duration-500">
                      {rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: A Blood Oath at the End - Mobile Optimized */}
        <section className="section-padding bg-gradient-to-b from-black to-gray-900">
          <div className="container-responsive text-center mobile-center">
            <h2 className="responsive-heading font-black text-white mb-12 sm:mb-16 tracking-tight font-mono">
              A BLOOD OATH AT THE END
            </h2>

            <Card className="bg-black/90 border-[#DC2626]/50 p-6 sm:p-12 mb-12 sm:mb-16 industrial-shadow">
              <CardContent className="p-0">
                <blockquote className="text-base sm:text-2xl md:text-3xl text-white font-light leading-relaxed italic">
                  "I don't chase clients. I command factories. I build what others copy. I don't hustle. I manufacture."
                </blockquote>
              </CardContent>
            </Card>

            <div className="h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent mb-12 sm:mb-16" />

            {/* Final CTA - Mobile Optimized */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-3xl font-black text-white font-mono">Still here? We see you.</h3>

              <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                If you're building a brand worth manufacturing — not just designing — you've found your people.
                <br />
                <br />
                We don't work with everyone. Only killers. Apply now.
              </p>

              <Link href="/elite-application">
                <Button className="bg-[#8B0000] hover:bg-[#DC2626] text-white px-8 sm:px-16 py-4 sm:py-8 text-base sm:text-xl font-mono tracking-widest border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/50 group relative overflow-hidden glitch">
                  <span className="relative z-10 group-hover:animate-pulse">[APPLY TO MANUFACTURE WITH US]</span>
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
