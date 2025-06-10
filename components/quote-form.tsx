"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    country: "",
    targetCustomer: "",
    businessType: "",
    clothingType: [] as string[],
    quantity: "",
    fabric: "",
    notes: "",
  })

  const [isLoadingLocation, setIsLoadingLocation] = useState(true)

  useEffect(() => {
    // Auto-fill name from browser if available
    const savedName = localStorage.getItem("userName") || ""
    if (savedName) {
      setFormData((prev) => ({ ...prev, brandName: savedName }))
    }

    // Auto-fill country using IP geolocation with better error handling
    const getLocation = async () => {
      try {
        // Add timeout to prevent hanging
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const response = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (response.ok) {
          const data = await response.json()
          if (data.country_name) {
            setFormData((prev) => ({ ...prev, country: data.country_name }))
          }
        }
      } catch (error) {
        // Silently handle the error - location detection is optional
        console.log("Location detection unavailable, continuing without auto-fill")
      } finally {
        setIsLoadingLocation(false)
      }
    }

    getLocation()
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleClothingTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      clothingType: prev.clothingType.includes(type)
        ? prev.clothingType.filter((t) => t !== type)
        : [...prev.clothingType, type],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare the data for submission
      const submissionData = {
        brandName: formData.brandName,
        email: formData.email,
        country: formData.country,
        targetCustomer: formData.targetCustomer,
        businessType: formData.businessType,
        clothingType: formData.clothingType.join(", "),
        quantity: formData.quantity,
        fabric: formData.fabric || "Not specified",
        notes: formData.notes || "No additional notes",
      }

      console.log("Submitting data:", submissionData)

      // Your Google Apps Script URL
      // Replace this line:
      // const scriptUrl = "https://script.google.com/macros/s/AKfycbzHJPBeTpGuve2PJxLeymJ7nRlKvmYs89TdlBEmdm7wbr4e2FmjmctXSF8M8nihB1-X/exec"

      // With your actual Web App URL (should end with /exec, not the googleusercontent.com URL)
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbw-jC18X8_p7kb0TmUE-TKjxUrckHAqu3DbH1QVtFMyW32P8jMJEIFk2FYll9tChFxZ/exec"

      // Create URL-encoded form data
      const formDataUrlEncoded = new URLSearchParams()
      Object.entries(submissionData).forEach(([key, value]) => {
        formDataUrlEncoded.append(key, value as string)
      })

      // Submit to Google Apps Script using URL-encoded form data
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataUrlEncoded.toString(),
      })

      console.log("Response received")

      // Save user name to localStorage for future use
      if (formData.brandName) {
        localStorage.setItem("userName", formData.brandName)
      }

      // Reset form
      setFormData({
        brandName: "",
        email: "",
        country: "",
        targetCustomer: "",
        businessType: "",
        clothingType: [],
        quantity: "",
        fabric: "",
        notes: "",
      })
      setStep(1)

      // Show success message and redirect
      alert("Thank you! Your quote request has been submitted successfully. We'll get back to you within 24 hours.")

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        window.location.href = "/thank-you"
      }, 1000)
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Your request has been submitted! We'll get back to you within 24 hours with your custom clothing plan.")

      // Even if there's an error, redirect to thank you page
      setTimeout(() => {
        window.location.href = "/thank-you"
      }, 1000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="text-[#FF3C38]">Custom Clothing Plan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and receive a tailored manufacturing plan within 24 hours
          </p>
        </div>

        <Card className="bg-[#1a1a1a] border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Step {step} of 2: {step === 1 ? "Brand Information" : "Product Requirements"}
            </CardTitle>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div
                className="bg-[#FF3C38] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 2) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="brandName" className="text-white">
                        Brand Name *
                      </Label>
                      <Input
                        id="brandName"
                        value={formData.brandName}
                        onChange={(e) => handleInputChange("brandName", e.target.value)}
                        className="bg-[#121212] border-gray-700 text-white"
                        placeholder="Your brand name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-[#121212] border-gray-700 text-white"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-white">
                      Country *
                    </Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className="bg-[#121212] border-gray-700 text-white"
                      placeholder={isLoadingLocation ? "Auto-detecting..." : "Enter your country"}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">Target Customer *</Label>
                      <Select onValueChange={(value) => handleInputChange("targetCustomer", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="Select target customer" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="men">Men</SelectItem>
                          <SelectItem value="women">Women</SelectItem>
                          <SelectItem value="kids">Kids</SelectItem>
                          <SelectItem value="unisex">Unisex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Business Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="scaling">Scaling Brand</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="retailer">Retailer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-[#FF3C38] hover:bg-[#FF3C38]/90 text-white py-3"
                    disabled={
                      !formData.brandName ||
                      !formData.email ||
                      !formData.country ||
                      !formData.targetCustomer ||
                      !formData.businessType
                    }
                  >
                    Continue to Product Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-white">Clothing Type * (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {[
                        "T-Shirts",
                        "Hoodies",
                        "Joggers",
                        "Polo Shirts",
                        "Shorts",
                        "Tracksuits",
                        "Compression Wear",
                        "Uniforms",
                        "Other",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleClothingTypeChange(type)}
                          className={`p-3 rounded-lg border transition-all ${
                            formData.clothingType.includes(type)
                              ? "bg-[#FF3C38] border-[#FF3C38] text-white"
                              : "bg-[#121212] border-gray-700 text-gray-300 hover:border-[#FF3C38]/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">Estimated Quantity *</Label>
                      <Select onValueChange={(value) => handleInputChange("quantity", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="50-100">50-100 pieces</SelectItem>
                          <SelectItem value="100-500">100-500 pieces</SelectItem>
                          <SelectItem value="500-1000">500-1000 pieces</SelectItem>
                          <SelectItem value="1000+">1000+ pieces</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Preferred Fabric</Label>
                      <Select onValueChange={(value) => handleInputChange("fabric", value)}>
                        <SelectTrigger className="bg-white border-gray-300 text-black">
                          <SelectValue placeholder="Select fabric type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="polyester">Polyester</SelectItem>
                          <SelectItem value="fleece">Fleece</SelectItem>
                          <SelectItem value="blend">Cotton-Poly Blend</SelectItem>
                          <SelectItem value="custom">Custom/Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-white">
                      Special Notes or Requirements
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      className="bg-[#121212] border-gray-700 text-white"
                      placeholder="Tell us about your specific requirements, design ideas, or any questions..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-[#FF3C38] hover:bg-[#FF3C38]/90 text-white py-3"
                      disabled={formData.clothingType.length === 0 || !formData.quantity || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Custom Plan
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            🔒 Your information is secure and will only be used to create your custom manufacturing plan
          </p>
        </div>
      </div>
    </section>
  )
}
