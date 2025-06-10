import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ServicesPageContent from "@/components/services-page-content"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Services | We Don't Offer Services. We Build Product Empires.",
  description: "From sample to scale, our systems erase chaos and multiply velocity.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <Navbar />
      <div className="pt-20">
        <ServicesPageContent />
      </div>
      <WhatsAppButton />
    </div>
  )
}
