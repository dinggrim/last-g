"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function EliteApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    phone: "",
    currentRevenue: "",
    manufacturingExperience: "",
    whyUs: "",
  })

  useEffect(() => {
    // Autofill browser data
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("userName") || ""
      const savedEmail = localStorage.getItem("userEmail") || ""

      setFormData((prev) => ({
        ...prev,
        brandName: savedName,
        email: savedEmail,
      }))
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare the data for submission
      const submissionData = {
        brandName: formData.brandName,
        email: formData.email,
        phone: formData.phone || "Not provided",
        currentRevenue: formData.currentRevenue,
        manufacturingExperience: formData.manufacturingExperience,
        whyUs: formData.whyUs,
        submissionType: "Elite Application",
      }

      console.log("Elite application submitted:", submissionData)

      // Your Google Apps Script URL
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbw-jC18X8_p7kb0TmUE-TKjxUrckHAqu3DbH1QVtFMyW32P8jMJEIFk2FYll9tChFxZ/exec"

      // Create URL-encoded form data
      const formDataUrlEncoded = new URLSearchParams()
      Object.entries(submissionData).forEach(([key, value]) => {
        formDataUrlEncoded.append(key, value as string)
      })

      // Submit to Google Apps Script
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataUrlEncoded.toString(),
      })

      // Save to localStorage
      if (formData.brandName) localStorage.setItem("userName", formData.brandName)
      if (formData.email) localStorage.setItem("userEmail", formData.email)

      // Show success message
      alert("Application received. We'll be in touch within 48 hours if you qualify.")

      // Reset form
      setFormData({
        brandName: "",
        email: "",
        phone: "",
        currentRevenue: "",
        manufacturingExperience: "",
        whyUs: "",
      })
    } catch (error) {
      console.error("Application submission error:", error)
      alert("Application received. We'll review and respond accordingly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 mobile-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 sm:mb-12 tracking-tight font-mono">
              ELITE <span className="text-[#DC2626]">APPLICATION</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              We don't work with everyone. This application determines if you're ready for the 1%.
            </p>
          </div>

          <Card className="bg-gray-900/50 border-[#C0C0C0]/30 border-2 industrial-shadow">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-white text-center font-mono tracking-wider">
                [CLASSIFIED ACCESS REQUEST]
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="brandName" className="text-white text-base sm:text-lg font-medium mb-2 block">
                      Brand Name *
                    </Label>
                    <Input
                      id="brandName"
                      value={formData.brandName}
                      onChange={(e) => handleInputChange("brandName", e.target.value)}
                      className="bg-black border-[#C0C0C0]/50 text-white text-base sm:text-lg p-3 sm:p-4 focus:border-[#DC2626] transition-colors duration-300"
                      placeholder="The name that will dominate"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white text-base sm:text-lg font-medium mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-black border-[#C0C0C0]/50 text-white text-base sm:text-lg p-3 sm:p-4 focus:border-[#DC2626] transition-colors duration-300"
                      placeholder="your@empire.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-white text-base sm:text-lg font-medium mb-2 block">
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-black border-[#C0C0C0]/50 text-white text-base sm:text-lg p-3 sm:p-4 focus:border-[#DC2626] transition-colors duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentRevenue" className="text-white text-base sm:text-lg font-medium mb-2 block">
                      Current Annual Revenue *
                    </Label>
                    <Input
                      id="currentRevenue"
                      value={formData.currentRevenue}
                      onChange={(e) => handleInputChange("currentRevenue", e.target.value)}
                      className="bg-black border-[#C0C0C0]/50 text-white text-base sm:text-lg p-3 sm:p-4 focus:border-[#DC2626] transition-colors duration-300"
                      placeholder="Numbers don't lie"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="manufacturingExperience"
                    className="text-white text-base sm:text-lg font-medium mb-2 block"
                  >
                    Previous Manufacturing Experience *
                  </Label>
                  <Textarea
                    id="manufacturingExperience"
                    value={formData.manufacturingExperience}
                    onChange={(e) => handleInputChange("manufacturingExperience", e.target.value)}
                    className="bg-black border-[#C0C0C0]/50 text-white text-base sm:text-lg p-3 sm:p-4 focus:border-[#DC2626] transition-colors duration-300"
                    placeholder="What factories have you worked with? What went wrong? What went right?"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="whyUs" className="text-white text-base sm:text-lg font-medium mb-2 block">
                    Why should we manufacture for you? *
                  </Label>
                  <Textarea
                    id="whyUs"
                    value={formData.whyUs}
                    onChange={(e) => handleInputChange("whyUs", e.target.value)}
                    className="bg-black border-[#C0C0C0]/50 text-white text-base sm:text-lg p-3 sm:p-4 focus:border-[#DC2626] transition-colors duration-300"
                    placeholder="Convince us you're not another dreamer with a logo"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B0000] hover:bg-[#DC2626] text-white py-4 sm:py-6 text-base sm:text-xl font-mono tracking-widest border-2 border-[#8B0000] hover:border-[#C0C0C0] transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/50 group relative overflow-hidden glitch"
                  disabled={
                    isSubmitting ||
                    !formData.brandName ||
                    !formData.email ||
                    !formData.currentRevenue ||
                    !formData.manufacturingExperience ||
                    !formData.whyUs
                  }
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">[SUBMIT APPLICATION]</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <CheckCircle className="ml-3 h-6 w-6 relative z-10" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-500 font-mono text-sm sm:text-base tracking-wider">
              🔒 CONFIDENTIAL - Only qualified applicants will receive a response
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
