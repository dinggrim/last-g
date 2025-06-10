import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Get Your Custom Clothing Plan | Free Quote Form",
  description:
    "Fill out our quick form to get a custom manufacturing plan tailored to your brand. Fast response. Expert support.",
  keywords: "custom clothing quote, manufacturing quote, apparel quote, clothing manufacturer",
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <div className="pt-20">
        <QuoteForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
