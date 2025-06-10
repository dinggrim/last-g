import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: "t-shirts",
    name: "T-Shirts",
    description: "Premium cotton and polyester blend t-shirts with custom designs and branding",
    image: "/images/products/t-shirts.jpg",
    fabrics: ["Cotton", "Polyester", "Cotton-Poly Blend"],
  },
  {
    id: "hoodies",
    name: "Hoodies",
    description: "Comfortable fleece and cotton hoodies perfect for casual and athletic wear",
    image: "/images/products/hoodies.jpg",
    fabrics: ["Fleece", "Cotton", "French Terry"],
  },
  {
    id: "joggers",
    name: "Joggers",
    description: "Athletic and casual joggers with moisture-wicking and comfort features",
    image: "/images/products/joggers.jpg",
    fabrics: ["Polyester", "Cotton Blend", "Performance Fabric"],
  },
  {
    id: "polo-shirts",
    name: "Polo Shirts",
    description: "Professional polo shirts ideal for corporate and hospitality uniforms",
    image: "/images/products/polo-shirts.jpg",
    fabrics: ["Pique Cotton", "Polyester", "Cotton-Poly Blend"],
  },
  {
    id: "shorts",
    name: "Shorts",
    description: "Athletic and casual shorts with various lengths and performance features",
    image: "/images/products/shorts.jpg",
    fabrics: ["Polyester", "Cotton", "Moisture-Wicking Fabric"],
  },
  {
    id: "tracksuits",
    name: "Tracksuits",
    description: "Complete tracksuit sets for athletic teams and casual wear",
    image: "/images/products/tracksuits.jpg",
    fabrics: ["Polyester", "Cotton Blend", "Performance Jersey"],
  },
  {
    id: "compression-wear",
    name: "Compression Wear",
    description: "High-performance compression garments for athletic and medical use",
    image: "/images/products/compression-wear.jpg",
    fabrics: ["Spandex Blend", "Compression Fabric", "Moisture-Wicking"],
  },
  {
    id: "womens-activewear",
    name: "Women's Activewear",
    description: "Stylish and functional activewear designed specifically for women",
    image: "/images/products/womens-activewear.jpg",
    fabrics: ["Lycra Blend", "Performance Fabric", "Moisture-Wicking"],
  },
  {
    id: "sportswear",
    name: "Sportswear",
    description: "Professional sportswear for teams, clubs, and athletic organizations",
    image: "/images/products/sportswear.jpg",
    fabrics: ["Performance Polyester", "Mesh", "Moisture-Wicking"],
  },
]

export default function ProductRangeSection() {
  return (
    <section id="products" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#FF3C38]">Product Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive clothing categories with premium fabric options for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="bg-[#121212] border-gray-800 hover:border-[#FF3C38]/50 transition-all duration-300 hover:scale-105 group overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-[#FF3C38] mb-2">Available Fabrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.fabrics.map((fabric, fabricIndex) => (
                        <span
                          key={fabricIndex}
                          className="px-3 py-1 bg-[#FF3C38]/10 text-[#FF3C38] text-xs rounded-full border border-[#FF3C38]/20"
                        >
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
