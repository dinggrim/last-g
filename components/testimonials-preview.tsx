import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
]

export default function TestimonialsPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-[#DC2626]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from brands worldwide who trust Custom Wear Industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group"
            >
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
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button
              variant="outline"
              className="border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-black px-8 py-3 tracking-wider"
            >
              READ ALL TESTIMONIALS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
