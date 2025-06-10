import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import EliteApplicationForm from "@/components/elite-application-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Elite Manufacturing Application | Custom Wear Industry",
  description: "Apply to work with the 1% of clothing manufacturers. Only serious brands need apply.",
  keywords: "elite clothing manufacturer, premium manufacturing application",
}

export default function EliteApplication() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <EliteApplicationForm />
      </div>
      <WhatsAppButton />
    </div>
  )
}
