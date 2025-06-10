"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "Drop-7: Civilian Shadowwear",
    image: "/images/portfolio/Drop-7 Civilian Shadowwear.jpg",
    category: "Urban Camouflage",
  },
  {
    id: 2,
    title: "Unit-23: Corporate Infiltration Suit",
    image: "/images/portfolio/Unit-23 Corporate Infiltration Suit.jpg",
    category: "Executive Cloaking",
  },
  {
    id: 3,
    title: "Prototype-ZX: Velocity Layer",
    image: "/images/portfolio/Prototype-ZX Velocity Layer.jpg",
    category: "Biofeedback Tech",
  },
  {
    id: 4,
    title: "Echo-Therm: Deep Ops Tracksuit",
    image: "/images/portfolio/Echo-Therm Deep Ops Tracksuit.jpg",
    category: "IR Diffusion Layer",
  },
  {
    id: 5,
    title: "Classified Threadline: MedOps Revision 4",
    image: "/images/portfolio/Classified Threadline MedOps Revision 4.jpg",
    category: "Sterile Weave",
  },
  {
    id: 6,
    title: "Drop-X: Street Intelligence Uniform",
    image: "/images/portfolio/Drop-X Street Intelligence Uniform.jpg",
    category: "Signal-Aware Fabric",
  },
]

export default function TheBlueprintSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-responsive">
        <div className="text-center section-margin">
          <h2 className="text-section-title font-bold mb-4 sm:mb-6">
            The <span className="text-[#DC2626]">Blueprint</span>
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto mb-2">Selected works from our archives</p>
          <p className="text-small text-gray-500 italic">We don't show everything. Just enough to know we're real.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 card-hover"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs font-medium">{item.category}</p>
                  <h3 className="text-sm sm:text-base font-bold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="btn-secondary">
              VIEW ARCHIVE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
