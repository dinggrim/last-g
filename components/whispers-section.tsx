import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    quote: "They delivered without questions. Just results.",
    brand: "A Brand You Know",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    quote: "Silent operations. Loud impact.",
    brand: "Global Collective",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    quote: "Found them through whispers. Stayed for the quality.",
    brand: "Underground Label",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

export default function WhispersSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-responsive">
        <div className="text-center section-margin mobile-center">
          <h2 className="responsive-heading font-bold mb-4 sm:mb-6">
            <span className="text-[#DC2626]">Whispers</span>
          </h2>
          <p className="text-body md:text-lg text-gray-300 max-w-2xl mx-auto">What they say in the shadows</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-black/70 border-[#C0C0C0]/30 hover:border-[#DC2626] transition-all duration-500 group card-hover"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#DC2626] text-[#DC2626]" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.brand}
                    width={40}
                    height={40}
                    className="rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <p className="text-xs sm:text-sm text-[#DC2626] font-medium">— {testimonial.brand}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials">
            <Button variant="outline" className="btn-secondary">
              MORE WHISPERS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
