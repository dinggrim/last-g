"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cog, Globe, Package, Palette, Shirt } from "lucide-react"

export default function ServicesPageContent() {
  const services = [
    {
      icon: Shirt,
      title: "SAMPLE DEVELOPMENT",
      description: "We don't make samples. We engineer prototypes that scale.",
      details: "Precision patterns, fabric sourcing, fit optimization",
    },
    {
      icon: Cog,
      title: "PRODUCTION SYSTEMS",
      description: "Manufacturing infrastructure that eliminates bottlenecks.",
      details: "Quality control, timeline management, scalable processes",
    },
    {
      icon: Package,
      title: "SUPPLY CHAIN MASTERY",
      description: "From raw materials to your warehouse. Zero excuses.",
      details: "Fabric sourcing, logistics coordination, inventory management",
    },
    {
      icon: Palette,
      title: "TECHNICAL DESIGN",
      description: "We translate vision into manufacturable reality.",
      details: "Pattern making, grading, technical specifications",
    },
    {
      icon: Globe,
      title: "GLOBAL FULFILLMENT",
      description: "Your products arrive where they need to be. When they need to be.",
      details: "International shipping, customs handling, delivery tracking",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 py-32">
        {/* Hero Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tight font-mono">
              WE DON'T OFFER <span className="text-[#DC2626]">SERVICES</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#C0C0C0] mb-16">We Build Product Empires.</h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              From sample to scale, our systems erase chaos and multiply velocity.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-700 group industrial-shadow"
                >
                  <CardContent className="p-8">
                    <div className="mb-8 flex justify-center">
                      <div className="p-6 bg-[#DC2626]/10 rounded-lg group-hover:bg-[#DC2626]/20 transition-colors duration-500">
                        <service.icon className="h-12 w-12 text-[#DC2626] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#DC2626] transition-colors duration-500 font-mono">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">{service.description}</p>
                    <p className="text-[#C0C0C0] text-sm font-mono">{service.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight font-mono">THE PROCESS</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">No meetings. No presentations. Just results.</p>
            </div>

            <div className="space-y-12">
              {[
                { step: "01", title: "BRIEF", description: "You tell us what you need. We tell you what's possible." },
                { step: "02", title: "SAMPLE", description: "We build it. You approve it. Or we rebuild it." },
                { step: "03", title: "SCALE", description: "Production begins. Quality never compromises." },
                { step: "04", title: "DELIVER", description: "Your products arrive. Your customers buy." },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-8 group">
                  <div className="text-6xl font-mono text-[#DC2626] font-black group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#DC2626] transition-colors duration-500 font-mono">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
