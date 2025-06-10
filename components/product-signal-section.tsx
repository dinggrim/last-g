import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "t-shirts",
    name: "Essential Tees",
    description: "Foundation pieces. Precision cut.",
    image: "/images/products/t-shirts.jpg",
  },
  {
    id: "hoodies",
    name: "Core Layers",
    description: "Comfort engineered. Performance built.",
    image: "/images/products/hoodies.jpg",
  },
  {
    id: "joggers",
    name: "Movement Systems",
    description: "Athletic precision. Street ready.",
    image: "/images/products/joggers.jpg",
  },
  {
    id: "polo-shirts",
    name: "Professional Standards",
    description: "Corporate grade. Executive approved.",
    image: "/images/products/polo-shirts.jpg",
  },
]

export default function ProductSignalSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-responsive">
        <div className="text-center section-margin">
          <h2 className="text-section-title font-bold mb-4 sm:mb-6">
            Product <span className="text-[#DC2626]">Signal</span>
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto">Signature pieces. Limited intel.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group overflow-hidden cursor-pointer card-hover">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <p className="text-small text-gray-300 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button variant="outline" className="btn-secondary">
              REQUEST PRIVATE CATALOG
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
