import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import ProductDetails from "@/components/product-details"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const products = {
  "t-shirts": {
    name: "T-Shirts",
    description:
      "Premium cotton and polyester blend t-shirts with custom designs and branding. Perfect for promotional wear, team uniforms, or retail collections.",
    image: "/images/products/t-shirts.jpg",
    fabrics: ["100% Cotton", "100% Polyester", "Cotton-Poly Blend (50/50)", "Tri-Blend"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "50 pieces per design/color",
    leadTime: "15-20 business days",
    sampling: "3-5 business days, $25 per sample",
    features: [
      "Pre-shrunk fabric",
      "Reinforced seams",
      "Custom printing/embroidery available",
      "Multiple color options",
      "Tagless options available",
    ],
  },
  hoodies: {
    name: "Hoodies",
    description:
      "Comfortable fleece and cotton hoodies perfect for casual and athletic wear. Available in pullover and zip-up styles with custom branding options.",
    image: "/images/products/hoodies.jpg",
    fabrics: ["Fleece (280-320 GSM)", "Cotton", "French Terry", "Cotton-Poly Blend"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "25 pieces per design/color",
    leadTime: "20-25 business days",
    sampling: "5-7 business days, $35 per sample",
    features: [
      "Kangaroo pocket",
      "Adjustable drawstring hood",
      "Ribbed cuffs and hem",
      "Custom embroidery/printing",
      "Multiple color combinations",
    ],
  },
  joggers: {
    name: "Joggers",
    description:
      "Athletic and casual joggers with moisture-wicking and comfort features. Perfect for athletic teams and casual wear collections.",
    image: "/images/products/joggers.jpg",
    fabrics: ["Polyester", "Cotton Blend", "Performance Fabric", "French Terry"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "30 pieces per design/color",
    leadTime: "18-22 business days",
    sampling: "4-6 business days, $30 per sample",
    features: [
      "Elastic waistband with drawstring",
      "Side pockets",
      "Tapered leg design",
      "Moisture-wicking fabric options",
      "Custom logo placement",
    ],
  },
  "polo-shirts": {
    name: "Polo Shirts",
    description:
      "Professional polo shirts ideal for corporate and hospitality uniforms. Classic design with modern performance features.",
    image: "/images/products/polo-shirts.jpg",
    fabrics: ["Pique Cotton", "Polyester", "Cotton-Poly Blend", "Performance Polyester"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "40 pieces per design/color",
    leadTime: "16-20 business days",
    sampling: "3-5 business days, $28 per sample",
    features: [
      "Classic polo collar",
      "Three-button placket",
      "Side slits for comfort",
      "Custom embroidery ready",
      "Stain-resistant options",
    ],
  },
  shorts: {
    name: "Shorts",
    description:
      "Athletic and casual shorts with various lengths and performance features. Perfect for sports teams and summer collections.",
    image: "/images/products/shorts.jpg",
    fabrics: ["Polyester", "Cotton", "Moisture-Wicking Fabric", "Mesh"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "40 pieces per design/color",
    leadTime: "14-18 business days",
    sampling: "3-5 business days, $25 per sample",
    features: [
      "Multiple length options",
      "Elastic waistband",
      "Side pockets",
      "Moisture-wicking technology",
      "Custom branding options",
    ],
  },
  tracksuits: {
    name: "Tracksuits",
    description:
      "Complete tracksuit sets for athletic teams and casual wear. Coordinated jacket and pants with custom branding options.",
    image: "/images/products/tracksuits.jpg",
    fabrics: ["Polyester", "Cotton Blend", "Performance Jersey", "Tricot"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "20 sets per design/color",
    leadTime: "25-30 business days",
    sampling: "7-10 business days, $65 per set",
    features: [
      "Matching jacket and pants",
      "Full-zip jacket with pockets",
      "Elastic waistband pants",
      "Custom team branding",
      "Multiple colorway options",
    ],
  },
  "compression-wear": {
    name: "Compression Wear",
    description:
      "High-performance compression garments for athletic and medical use. Engineered for optimal fit and performance enhancement.",
    image: "/images/products/compression-wear.jpg",
    fabrics: ["Spandex Blend", "Compression Fabric", "Moisture-Wicking", "4-Way Stretch"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    moq: "30 pieces per design/color",
    leadTime: "20-25 business days",
    sampling: "5-7 business days, $40 per sample",
    features: [
      "Graduated compression zones",
      "Flatlock seams",
      "Moisture management",
      "UVA/UVB protection",
      "Custom fit options",
    ],
  },
  "womens-activewear": {
    name: "Women's Activewear",
    description:
      "Stylish and functional activewear designed specifically for women. Performance meets fashion in every piece.",
    image: "/images/products/womens-activewear.jpg",
    fabrics: ["Lycra Blend", "Performance Fabric", "Moisture-Wicking", "Buttery Soft"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    moq: "25 pieces per design/color",
    leadTime: "18-23 business days",
    sampling: "5-7 business days, $35 per sample",
    features: [
      "Figure-flattering cuts",
      "High-waisted options",
      "Sports bra included",
      "Squat-proof fabric",
      "Custom colorways",
    ],
  },
  sportswear: {
    name: "Sportswear",
    description:
      "Professional sportswear for teams, clubs, and athletic organizations. Built for performance and team unity.",
    image: "/images/products/sportswear.jpg",
    fabrics: ["Performance Polyester", "Mesh", "Moisture-Wicking", "Lightweight"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    moq: "30 pieces per design/color",
    leadTime: "16-20 business days",
    sampling: "4-6 business days, $30 per sample",
    features: [
      "Team jersey styling",
      "Breathable mesh panels",
      "Quick-dry technology",
      "Custom team numbers",
      "Professional team branding",
    ],
  },
}

type ProductPageProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return {
      title: "Product Not Found | Custom Wear Industry",
    }
  }

  return {
    title: `${product.name} | Custom Clothing Manufacturing | Custom Wear Industry`,
    description: `Custom ${product.name.toLowerCase()} manufacturing with premium fabrics and global delivery. MOQ: ${product.moq}. Lead time: ${product.leadTime}.`,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <div className="pt-20">
        <ProductDetails product={product} />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
