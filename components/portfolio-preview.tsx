import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "Elite Athletics Performance Line",
    image: "/images/elite-athletics.jpg",
    category: "Sportswear",
  },
  {
    id: 2,
    title: "Premium Fashion Capsule",
    image: "/images/premium-fashion.jpg",
    category: "Fashion",
  },
  {
    id: 3,
    title: "Executive Formal Collection",
    image: "/images/executive-formal.jpg",
    category: "Formal Wear",
  },
  {
    id: 4,
    title: "Marathon Running Gear",
    image: "/images/marathon-running.jpg",
    category: "Athletic Wear",
  },
]

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#DC2626]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our expertise across diverse clothing categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-sm font-medium">{item.category}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-black px-8 py-3 tracking-wider"
            >
              VIEW FULL PORTFOLIO
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
