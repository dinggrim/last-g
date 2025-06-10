import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import TestimonialsPageContent from "@/components/testimonials-page-content"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Testimonials | Client Success Stories",
  description: "Professional testimonials from brands worldwide who trust Custom Wear Industry.",
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <Navbar />
      <div className="pt-20">
        <TestimonialsPageContent />
      </div>
      <WhatsAppButton />
    </div>
  )
}
