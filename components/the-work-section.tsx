"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Cog, Archive, Lightbulb } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "The Forge",
    description: "Technical packs, sampling, and pre-production engineering.",
    details: "Where concepts become reality. Precision pattern-making, fabric sourcing, and prototype development.",
  },
  {
    icon: Cog,
    title: "The Engine",
    description: "Precision manufacturing built on elite production systems.",
    details: "Scalable production lines, quality control systems, and delivery optimization.",
  },
  {
    icon: Archive,
    title: "The Vault",
    description: "Inventory management, shipping, and global order execution.",
    details: "Secure storage, logistics coordination, and worldwide distribution networks.",
  },
  {
    icon: Lightbulb,
    title: "The Signal",
    description: "Consultation, custom projects, and R&D for niche brands.",
    details: "Strategic guidance, innovation development, and specialized manufacturing solutions.",
  },
]

export default function TheWorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-responsive">
        <div className="text-center section-margin">
          <h2 className="text-section-title font-bold mb-4 sm:mb-6">
            The <span className="text-[#DC2626]">Work</span>
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto">Four pillars of silent excellence</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group card-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-[#DC2626]/10 rounded-lg group-hover:bg-[#DC2626]/20 transition-colors">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#DC2626]" />
                  </div>
                </div>
                <h3 className="text-card-title font-semibold mb-3 sm:mb-4 text-white group-hover:text-[#DC2626] transition-colors">
                  {service.title}
                </h3>
                <p className="text-small text-gray-300 leading-relaxed mb-4">{service.description}</p>
                {hoveredIndex === index && (
                  <div className="animate-fadeInUp">
                    <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-700 pt-4">
                      {service.details}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button variant="outline" className="btn-secondary">
              VIEW CAPABILITIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
