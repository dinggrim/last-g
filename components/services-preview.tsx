import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shirt, Package, Globe, Palette } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Shirt,
    title: "Custom Manufacturing",
    description: "High-quality garment production tailored to your specifications.",
  },
  {
    icon: Palette,
    title: "Design & Sampling",
    description: "Professional samples and prototypes to perfect your designs.",
  },
  {
    icon: Package,
    title: "Private Label",
    description: "Complete private labeling services with your branding.",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide delivery with reliable logistics and tracking.",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#DC2626]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive manufacturing solutions for brands worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group industrial-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-[#DC2626]/10 rounded-lg group-hover:bg-[#DC2626]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#DC2626]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-black px-8 py-3 tracking-wider"
            >
              VIEW ALL SERVICES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
