import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ContactPageContent from "@/components/contact-page-content"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Contact | Get In Touch",
  description: "Ready to start your custom clothing project? Contact Custom Wear Industry today.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <Navbar />
      <div className="pt-20">
        <ContactPageContent />
      </div>
      <WhatsAppButton />
    </div>
  )
}
