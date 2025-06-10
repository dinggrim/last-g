import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Package, Shirt, CheckCircle } from "lucide-react"

type Product = {
  name: string
  description: string
  image: string
  fabrics: string[]
  sizes: string[]
  moq: string
  leadTime: string
  sampling: string
  features: string[]
}

type ProductDetailsProps = {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-[#1a1a1a]">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Custom <span className="text-[#FF3C38]">{product.name}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4 text-center">
                  <Package className="h-6 w-6 text-[#FF3C38] mx-auto mb-2" />
                  <p className="text-sm text-gray-400">MOQ</p>
                  <p className="font-semibold text-white">{product.moq}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-[#276EF1] mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Lead Time</p>
                  <p className="font-semibold text-white">{product.leadTime}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1a1a1a] border-gray-800">
                <CardContent className="p-4 text-center">
                  <Shirt className="h-6 w-6 text-[#FF3C38] mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Sampling</p>
                  <p className="font-semibold text-white">{product.sampling}</p>
                </CardContent>
              </Card>
            </div>

            {/* Fabrics */}
            <Card className="bg-[#1a1a1a] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Available Fabrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.fabrics.map((fabric, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-[#FF3C38]/10 text-[#FF3C38] text-sm rounded-lg border border-[#FF3C38]/20"
                    >
                      {fabric}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sizes */}
            <Card className="bg-[#1a1a1a] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Size Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-[#276EF1]/10 text-[#276EF1] text-sm rounded-lg border border-[#276EF1]/20"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-[#1a1a1a] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-[#FF3C38] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="flex-1">
                <Button className="w-full bg-[#FF3C38] hover:bg-[#FF3C38]/90 text-white py-3">
                  Get Quote for {product.name}
                </Button>
              </Link>
              <a
                href="https://wa.me/923195491250?text=Hi,%20I'm%20interested%20in%20custom%20clothing.%20Can%20you%20help%20me%20with%20my%20order?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full border-[#276EF1] text-[#276EF1] hover:bg-[#276EF1] hover:text-white py-3"
                >
                  Contact via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
