"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    country: "USA",
    brand: "FitLife Athletics",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    shortReview: "Outstanding quality and service. Our athletic wear line exceeded expectations.",
  },
  {
    id: 2,
    name: "James Mitchell",
    country: "UK",
    brand: "Urban Edge Clothing",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    shortReview: "Perfect partner for our streetwear brand. Quality and creativity combined.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    country: "Canada",
    brand: "EcoWear Sustainable",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    shortReview: "Committed to sustainability and quality. Exactly what our eco-brand needed.",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    country: "Spain",
    brand: "Corporate Solutions Ltd",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    shortReview: "Professional uniforms that represent our brand perfectly. Excellent service.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    country: "Australia",
    brand: "ActiveLife Sports",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    shortReview: "Reliable partner for our sports team uniforms. Quality that performs.",
  },
  {
    id: 6,
    name: "David Kim",
    country: "South Korea",
    brand: "TechStart Apparel",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
    shortReview: "Perfect for startup needs. Flexible minimums and great quality.",
  },
]

export default function TestimonialsPageContent() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 py-32">
        {/* Hero Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tight">
              CLIENT <span className="text-[#DC2626]">SUCCESS</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#C0C0C0] mb-16">Stories</h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Professional testimonials from brands worldwide who trust Custom Wear Industry for their manufacturing
              needs.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Link key={testimonial.id} href={`/testimonials/${testimonial.id}`}>
                  <Card className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group cursor-pointer industrial-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.photo || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-400">{testimonial.country}</p>
                          <p className="text-sm text-[#DC2626] font-medium">{testimonial.brand}</p>
                        </div>
                      </div>

                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#DC2626] text-[#DC2626]" />
                        ))}
                      </div>

                      <p className="text-gray-300 leading-relaxed">{testimonial.shortReview}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
