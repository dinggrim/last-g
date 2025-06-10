import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ProductsPageContent from "@/components/products-page-content"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Products | Manufacturing is the product.",
  description: "You don't need more SKUs. You need high-performing ones, made on time, without excuses.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <Navbar />
      <div className="pt-20">
        <ProductsPageContent />
      </div>
      <WhatsAppButton />
    </div>
  )
}
