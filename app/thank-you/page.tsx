import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You | Custom Wear Industry",
  description: "Thank you for your quote request. We'll get back to you within 24 hours.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <div className="pt-20">
        <section className="py-20 bg-[#121212]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-[#FF3C38] mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thank <span className="text-[#FF3C38]">You!</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Your quote request has been successfully submitted. Our team will review your requirements and get back
                to you within 24 hours with a custom manufacturing plan.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="bg-[#FF3C38] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </span>
                    <h3 className="font-semibold text-white">Review</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Our team reviews your requirements and prepares a custom quote
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="bg-[#276EF1] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </span>
                    <h3 className="font-semibold text-white">Response</h3>
                  </div>
                  <p className="text-gray-300 text-sm">You'll receive a detailed manufacturing plan within 24 hours</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="bg-[#FF3C38] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </span>
                    <h3 className="font-semibold text-white">Production</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Once approved, we begin production of your custom clothing</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-[#FF3C38] hover:bg-[#FF3C38]/90 text-white px-8 py-3">Back to Home</Button>
              </Link>
              <a
                href="https://wa.me/923195491250?text=Hi,%20I%20just%20submitted%20a%20quote%20request.%20Can%20you%20help%20me%20with%20more%20details?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-[#276EF1] text-[#276EF1] hover:bg-[#276EF1] hover:text-white px-8 py-3"
                >
                  Contact via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
