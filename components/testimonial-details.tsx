import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowLeft } from "lucide-react"

type Testimonial = {
  name: string
  country: string
  brand: string
  photo: string
  rating: number
  shortReview: string
  fullTestimonial: string
  projectDetails: string
  orderSize: string
  timeline: string
}

type TestimonialDetailsProps = {
  testimonial: Testimonial
}

export default function TestimonialDetails({ testimonial }: TestimonialDetailsProps) {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#testimonials">
          <Button variant="outline" className="mb-8 border-gray-700 text-gray-300 hover:bg-gray-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Testimonials
          </Button>
        </Link>

        <Card className="bg-[#1a1a1a] border-gray-800">
          <CardContent className="p-8">
            {/* Client Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <Image
                src={testimonial.photo || "/placeholder.svg"}
                alt={testimonial.name}
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{testimonial.name}</h1>
                <p className="text-gray-400 text-lg">{testimonial.country}</p>
                <p className="text-[#276EF1] font-semibold text-xl">{testimonial.brand}</p>
                <div className="flex justify-center md:justify-start mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FF3C38] text-[#FF3C38]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-8">
              <div className="bg-[#121212] p-6 rounded-lg">
                <Quote className="h-8 w-8 text-[#276EF1] mb-4" />
                <p className="text-gray-300 leading-relaxed text-lg italic">"{testimonial.fullTestimonial}"</p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#121212] border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-[#FF3C38] mb-2">Project Type</h3>
                    <p className="text-gray-300">{testimonial.projectDetails}</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#121212] border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-[#276EF1] mb-2">Order Size</h3>
                    <p className="text-gray-300">{testimonial.orderSize}</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#121212] border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-[#FF3C38] mb-2">Timeline</h3>
                    <p className="text-gray-300">{testimonial.timeline}</p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to start your project like {testimonial.name}?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote">
                    <Button className="bg-[#FF3C38] hover:bg-[#FF3C38]/90 text-white px-8 py-3">Get Your Quote</Button>
                  </Link>
                  <a
                    href="https://wa.me/923195491250?text=Hi,%20I'm%20interested%20in%20custom%20clothing.%20Can%20you%20help%20me%20with%20my%20order?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-[#276EF1] text-[#276EF1] hover:bg-[#276EF1] hover:text-white px-8 py-3"
                    >
                      Contact Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
