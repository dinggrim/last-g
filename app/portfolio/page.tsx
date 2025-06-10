import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import PortfolioPageContent from "@/components/portfolio-page-content"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Portfolio | If you've seen them, we've stitched them.",
  description:
    "Our fingerprints are invisible — but they're all over streetwear, techwear, and viral seasonal launches.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <Navbar />
      <div className="pt-20">
        <PortfolioPageContent />
      </div>
      <WhatsAppButton />
    </div>
  )
}
