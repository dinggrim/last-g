"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function LeadMagnetSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you! We'll get back to you within 24 hours with your custom clothing plan.")
  }

  return (
    <section id="lead" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="text-[#FF3C38]">Custom Clothing Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and receive a tailored manufacturing plan within 24 hours
          </p>
        </div>

        <Card className="bg-[#121212] border-gray-800">
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
                        className="bg-[#1a1a1a] border-gray-700 text-white"
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
                        className="bg-[#1a1a1a] border-gray-700 text-white"
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
                      className="bg-[#1a1a1a] border-gray-700 text-white"
                      placeholder="Your country"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">Target Customer *</Label>
                      <Select onValueChange={(value) => handleInputChange("targetCustomer", value)}>
                        <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white">
                          <SelectValue placeholder="Select target customer" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-gray-700">
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
                        <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-gray-700">
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
                              : "bg-[#1a1a1a] border-gray-700 text-gray-300 hover:border-[#FF3C38]/50"
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
                        <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white">
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-gray-700">
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
                        <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white">
                          <SelectValue placeholder="Select fabric type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-gray-700">
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
                      className="bg-[#1a1a1a] border-gray-700 text-white"
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
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-[#FF3C38] hover:bg-[#FF3C38]/90 text-white py-3"
                      disabled={formData.clothingType.length === 0 || !formData.quantity}
                    >
                      Get My Custom Plan
                      <CheckCircle className="ml-2 h-4 w-4" />
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
