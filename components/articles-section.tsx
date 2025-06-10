import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const articles = [
  {
    category: "T-Shirts",
    description: "Premium cotton and polyester blend t-shirts with custom designs and branding",
    fabrics: ["Cotton", "Polyester", "Cotton-Poly Blend"],
    images: ["/images/urban-street.jpg", "/images/premium-fashion.jpg"],
  },
  {
    category: "Hoodies",
    description: "Comfortable fleece and cotton hoodies perfect for casual and athletic wear",
    fabrics: ["Fleece", "Cotton", "French Terry"],
    images: ["/images/elite-athletics.jpg", "/images/urban-street.jpg"],
  },
  {
    category: "Joggers",
    description: "Athletic and casual joggers with moisture-wicking and comfort features",
    fabrics: ["Polyester", "Cotton Blend", "Performance Fabric"],
    images: ["/images/marathon-running.jpg", "/images/elite-athletics.jpg"],
  },
  {
    category: "Polo Shirts",
    description: "Professional polo shirts ideal for corporate and hospitality uniforms",
    fabrics: ["Pique Cotton", "Polyester", "Cotton-Poly Blend"],
    images: ["/images/luxury-hotel.jpg", "/images/techcorp-executive.jpg"],
  },
  {
    category: "Shorts",
    description: "Athletic and casual shorts with various lengths and performance features",
    fabrics: ["Polyester", "Cotton", "Moisture-Wicking Fabric"],
    images: ["/images/marathon-running.jpg", "/images/elite-athletics.jpg"],
  },
  {
    category: "Tracksuits",
    description: "Complete tracksuit sets for athletic teams and casual wear",
    fabrics: ["Polyester", "Cotton Blend", "Performance Jersey"],
    images: ["/images/elite-athletics.jpg", "/images/marathon-running.jpg"],
  },
  {
    category: "Compression Wear",
    description: "High-performance compression garments for athletic and medical use",
    fabrics: ["Spandex Blend", "Compression Fabric", "Moisture-Wicking"],
    images: ["/images/marathon-running.jpg", "/images/elite-athletics.jpg"],
  },
  {
    category: "Women's Activewear",
    description: "Stylish and functional activewear designed specifically for women",
    fabrics: ["Lycra Blend", "Performance Fabric", "Moisture-Wicking"],
    images: ["/images/elite-athletics.jpg", "/images/premium-fashion.jpg"],
  },
  {
    category: "Sportswear",
    description: "Professional sportswear for teams, clubs, and athletic organizations",
    fabrics: ["Performance Polyester", "Mesh", "Moisture-Wicking"],
    images: ["/images/marathon-running.jpg", "/images/elite-athletics.jpg"],
  },
]

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="text-[#FF3C38]">Product Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive clothing categories with premium fabric options for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="bg-[#121212] border-gray-800 hover:border-[#FF3C38]/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.images[0] || "/placeholder.svg"}
                  alt={article.category}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{article.category}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{article.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-[#FF3C38] mb-2">Available Fabrics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.fabrics.map((fabric, fabricIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
