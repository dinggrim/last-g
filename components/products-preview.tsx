import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "t-shirts",
    name: "T-Shirts",
    description: "Premium cotton and polyester blend t-shirts with custom designs",
    image: "/images/products/t-shirts.jpg",
  },
  {
    id: "hoodies",
    name: "Hoodies",
    description: "Comfortable fleece and cotton hoodies for casual and athletic wear",
    image: "/images/products/hoodies.jpg",
  },
  {
    id: "joggers",
    name: "Joggers",
    description: "Athletic joggers with moisture-wicking and comfort features",
    image: "/images/products/joggers.jpg",
  },
  {
    id: "polo-shirts",
    name: "Polo Shirts",
    description: "Professional polo shirts ideal for corporate uniforms",
    image: "/images/products/polo-shirts.jpg",
  },
]

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Product <span className="text-[#DC2626]">Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive clothing categories with premium fabric options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-black px-8 py-3 tracking-wider"
            >
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
