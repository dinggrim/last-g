import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Package, Globe, Palette, Cog } from "lucide-react"

const services = [
  {
    icon: Shirt,
    title: "Custom Clothing Manufacturing",
    description: "High-quality garment production tailored to your specifications and brand requirements.",
  },
  {
    icon: Palette,
    title: "Sampling & Prototyping",
    description: "Professional samples and prototypes to perfect your designs before mass production.",
  },
  {
    icon: Package,
    title: "Private Label Production",
    description: "Complete private labeling services with your branding, tags, and packaging.",
  },
  {
    icon: Package,
    title: "Packaging & Tagging",
    description: "Custom packaging solutions and professional tagging for retail-ready products.",
  },
  {
    icon: Cog,
    title: "OEM/ODM Services",
    description: "Original equipment and design manufacturing for established and emerging brands.",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide delivery with reliable logistics and tracking for international clients.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#FF3C38]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive clothing manufacturing solutions for brands worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#121212] border-gray-800 hover:border-[#FF3C38]/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-[#FF3C38]/10 rounded-full group-hover:bg-[#FF3C38]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#FF3C38]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
